import { expect, test } from 'bun:test';
import playerJSON from './playerunits.json';
import amonJSON from './amonunits.json';
import type { AmonUnit, PlayerUnit } from './data-types';
import { perUnitEntries, legacyAmonUnits, legacyPlayerUnits, legacyPlayerUpgrades, legacyPlayerTalents, playerUnitViews } from './unit-data';
import talentsJSON from './playertalents.json';
import type { PlayerTalent } from './data-types';
import upgradesJSON from './playerupgrades.json';
import type { PlayerUpgrade } from './data-types';
import Ajv from 'ajv';
import playerSchema from '../html/data/schemas/playerunits.schema.json';
import amonSchema from '../html/data/schemas/amonunits.schema.json';

test('Legacy Galleon data retains its separate Hangar Bay entry without duplicating the drone attack', () => {
    const units = (playerJSON as PlayerUnit[]).filter(unit => unit.commander === 'Horner' && ['Assault Galleon', 'Hangar Bay'].includes(unit.name));
    const rows = legacyPlayerUnits(units, upgradesJSON as PlayerUpgrade[]);
    expect(rows.filter(row => row.basename === 'Assault Galleon')).toHaveLength(1);
    expect(rows.find(row => row.basename === 'Assault Galleon')!.name).toBe('Assault Galleon');
    expect(rows.some(row => row.basename === 'Hangar Bay')).toBe(true);
});

const players = playerJSON as PlayerUnit[];
const enemies = amonJSON as AmonUnit[];
const player = (commander: string, name: string) => players.find(unit => unit.commander === commander && unit.name === name)!;

test('Named talents are grouped once and legacy rows retain per-change targets and upgrade requirements', () => {
    const talents = talentsJSON as PlayerTalent[];
    const identities = perUnitEntries(talents).map(talent => JSON.stringify([talent.commander, talent.unit, talent.name, talent.talenttype]));
    expect(new Set(identities).size).toBe(identities.length);
    const roughRider = talents.find(talent => talent.commander === 'Raynor' && talent.units.includes('Siege Tank') && talent.name === 'Rough Rider')!;
    const rows = legacyPlayerTalents([roughRider]).filter(row => row.unit === 'Siege Tank');
    expect(rows.map(row => [row.target, row.modifier, row.modifierupgrade])).toEqual([
        ['upgrade', 'Attack_Speed', 'Afterburners'],
        ['upgrade', 'Move_Speed', 'Afterburners'],
        ['unit', 'vespeneCost', null],
    ]);
    for (const row of rows) {
        expect(row.commander).toBe('Raynor');
        expect(row.unit).toBe('Siege Tank');
        expect(row.nameid).toBe('roughrider');
        expect(row.talenttype).toBe('prestige');
        expect(row).not.toHaveProperty('changes');
    }
    const inspirator = talents.find(talent => talent.commander === 'Artanis' && talent.units.includes('High Templar') && talent.name === 'Valorous Inspirator')!;
    expect(inspirator.changes.map(change => change.target)).toEqual(['unit', 'unit', 'skill', 'skill', 'skill']);
});

test('Movement and incoming target planes remain separate and inherit through modes', () => {
    expect(players.every(unit => unit.movement === 'Ground' || unit.movement === 'Air')).toBe(true);
    expect(player('Fenix', 'Colossus')).toMatchObject({ movement: 'Ground', targetable: 'Ground,Air' });
    expect(player('Alarak', 'Wrathwalker')).toMatchObject({ movement: 'Ground', targetable: 'Ground,Air' });
    expect(player('Fenix', 'Warbringer')).toMatchObject({ movement: 'Ground', targetable: 'Ground,Air' });
    expect(player('Fenix', 'Fenix Cybros Arbiter').movement).toBe('Air');
    expect(enemies.find(unit => unit.name === 'Void Shard')).toMatchObject({ movementspeed: 0, targetable: 'Ground,Air' });
    const viking = player('Raynor', 'Viking');
    expect(playerUnitViews(viking).map(view => view.stats.movement)).toEqual(['Air', 'Ground']);
    const colossus = structuredClone(player('Fenix', 'Colossus'));
    colossus.modes['']!.targetable = 'Ground';
    expect(playerUnitViews(colossus)[0]!.stats.targetable).toBe('Ground');
});

test('Every stored attack has explicit target planes, including spawned and ability attacks', () => {
    for (const unit of [...players, ...enemies]) {
        for (const mode of Object.values(unit.modes)) {
            if (mode.weaponName || mode.damage || mode.kind) expect(mode.targets, unit.name).toMatch(/^(Ground|Air|Ground,Air)$/);
        }
    }
    expect(player('Mengsk', 'Imperial Intercessor').modes['']!.targets).toBe('Air');
    expect(player('Zagara', 'Bile Launcher').modes['']!.targets).toBe('Ground');
    expect(player('Fenix', 'Adept').modes.shade!.targets).toBe('Ground,Air');
    expect(player('Stetmann', 'Mecha Battlecarrier Lord').modes['mecha-locusceptor']!.targets).toBe('Ground');
});

test('Target damage stores totals, including per-upgrade increments', () => {
    const dragoon = player('Artanis', 'Dragoon');
    const weapon = dragoon.modes['']!;
    expect(weapon.damage?.[''].damage).toBe(15);
    expect(weapon.damage?.Armored?.damage).toBe(30);
    expect(weapon.damage?.[''].damagePerUpgrade).toBe(2);
    expect(weapon.damage?.Armored?.damagePerUpgrade).toBe(3);
    const rows = legacyPlayerUnits([dragoon]);
    expect(rows.map(row => [row.attribute, row.damage, row.attackbonus])).toEqual([
        [null, 15, 2], ['Armored', 30, 3],
    ]);
    const armored = rows[1]!;
    expect(armored.damage + armored.attackbonus * 3).toBe(39);
});

test('Target weapons and transformations share mode entries, including unarmed forms', () => {
    const goliath = player('Swann', 'Goliath');
    expect(Object.keys(goliath.modes)).toEqual(['air', 'ground']);
    expect(Object.values(goliath.modes).map(mode => mode.targets)).toEqual(['Air', 'Ground']);
    const tank = player('Raynor', 'Siege Tank');
    expect(Object.keys(tank.modes)).toEqual(['tank-mode', 'siege-mode']);
    expect(playerUnitViews(tank).map(view => [view.label, view.stats.movementspeed, view.weapon?.range])).toEqual([
        ['Tank Mode', 2.25, 7], ['Siege Mode', 0, 13],
    ]);
    const spine = player('Zagara', 'Spine Crawler');
    expect(spine.modes.rooted?.damage).toBeDefined();
    expect(spine.modes.uprooted?.damage).toBeUndefined();
    expect(playerUnitViews(spine).map(view => [view.label, !!view.weapon])).toEqual([
        ['Rooted', true], ['Uprooted', false],
    ]);
});

test('Incomplete ability damage stays unknown, and unarmed units have no fake weapon', () => {
    const airlift = player('Mengsk', 'Imperial Intercessor').modes['']!;
    expect(airlift.kind).toBe('ability');
    expect(airlift.damage).toBeUndefined();
    expect(airlift.aoe).toContain('Shock Division');
    expect(player('Raynor', 'Medic').modes).toEqual({ '': {} });
    expect(legacyPlayerUnits([player('Raynor', 'Medic')])[0]?.attacks).toBe(0);
});

test('Amon weapons use base damage while retaining their Brutal starting level', () => {
    const zealot = enemies.find(unit => unit.name === 'Zealot')!;
    const weapon = zealot.modes['']!;
    expect(weapon.damage?.[''].damage).toBe(8);
    expect(weapon.upgradeLevel).toBe(1);
    expect(weapon.damage![''].damage + weapon.damage![''].damagePerUpgrade * weapon.upgradeLevel!).toBe(9);
    const blightbringer = enemies.find(unit => unit.name === 'Blightbringer')!.modes['']!;
    expect(blightbringer.damage?.[''].damage).toBe(10);
    expect(blightbringer.tickInterval).toBe(0.5);
});

test('Legacy enemy flags are derived from the shared tags and separate movement plane', () => {
    const phoenix = enemies.find(unit => unit.name === 'Phoenix')!;
    const [legacy] = legacyAmonUnits([phoenix]);
    expect(phoenix.tags).toContain('Light');
    expect(phoenix.tags).not.toContain('Air');
    expect(phoenix.movement).toBe('Air');
    expect(legacy).toMatchObject({ light: 1, armored: 0, flyer: 1 });
});

test('Legacy player rows retain unit notes and only their own mode notes', () => {
    const unit = structuredClone(player('Raynor', 'Siege Tank'));
    unit.notes = 'Shared unit note.';
    unit.modes['siege-mode']!.notes = 'Siege-only note.';
    const rows = legacyPlayerUnits([unit]);
    for (const row of rows) {
        expect(row.notes).toBe(row.name.endsWith('(Siege Mode)') ? 'Shared unit note.<br>Siege-only note.' : 'Shared unit note.');
    }
});

test('Legacy grouping and upgrade selectors distinguish attacks with the same mode name', () => {
    const tank = player('Stukov', 'Infested Siege Tank');
    const rows = legacyPlayerUnits([tank]);
    expect(new Set(rows.map(row => row.name)).size).toBe(3);
    const upgrade = (upgradesJSON as PlayerUpgrade[]).find(upgrade => upgrade.commander === 'Stukov' && upgrade.units.includes(tank.name) && upgrade.changes.some(change => change.target === 'unit' && change.weapon === 'rooted'))!;
    const selector = legacyPlayerUpgrades([{ ...upgrade, changes: upgrade.changes.filter(change => change.target === 'unit' && change.weapon === 'rooted') }], [tank])[0]!.modifiermode;
    const selectedRows = rows.filter(row => row.name === `${tank.name} ${selector}`);
    expect(selectedRows.map(row => row.attribute)).toEqual([null, 'Structure']);
    expect(selectedRows[0]!.damage).toBe(tank.modes.rooted!.damage![''].damage);
    expect(rows.some(row => row.name.endsWith('(Rooted: Impaler Tentacle)'))).toBe(true);
});

test('Amon schema accepts unit and mode notes and rejects the retired weaponnotes field', () => {
    const validate = new Ajv({ allErrors: true }).compile(amonSchema);
    expect(validate([{ ...enemies[0]!, notes: 'Unit note.', modes: { '': { notes: 'Mode note.' } } }])).toBe(true);
    expect(validate([{ ...enemies[0]!, weaponnotes: 'Old note.' }])).toBe(false);
});

test('Both schemas reject misspelled tags and the old attribute flag storage', () => {
    // Ajv's short-circuit required check skips empty-string keys; allErrors checks them correctly.
    const ajv = new Ajv({ allErrors: true });
    for (const [schema, unit] of [[playerSchema, players[0]!], [amonSchema, enemies[0]!]] as const) {
        const validate = ajv.compile(schema);
        expect(validate([{ ...unit, tags: ['Armoured'] }])).toBe(false);
        expect(validate([{ ...unit, light: 1 }])).toBe(false);
        expect(validate([{ ...unit, tags: ['Armored', 'Biological'] }])).toBe(true);
    }
});

test('Mode schemas require default damage and reject obsolete or misspelled attack fields', () => {
    // Ajv's short-circuit required check skips empty-string keys; allErrors checks them correctly.
    const ajv = new Ajv({ allErrors: true });
    for (const [schema, unit] of [[playerSchema, players[0]!], [amonSchema, enemies[0]!]] as const) {
        const validate = ajv.compile(schema);
        const target = { damage: 10, damagePerUpgrade: 1 };
        const mode = { damage: { '': target, Armored: { damage: 20, damagePerUpgrade: 2 } }, hits: 1, cooldown: 2, range: 5 };
        expect(validate([{ ...unit, modes: { '': mode } }])).toBe(true);
        expect(validate([{ ...unit, modes: { '': { ...mode, attackspeed: 2 } } }])).toBe(false);
        expect(validate([{ ...unit, modes: { '': { ...mode, damage: { Armored: target } } } }])).toBe(false);
        expect(validate([{ ...unit, modes: { '': { ...mode, damage: { '': target, Armoured: target } } } }])).toBe(false);
        expect(validate([{ ...unit, modes: [mode] }])).toBe(false);
    }
});

test('Legacy upgrades resolve weapon IDs to the existing calculator selectors', () => {
    const upgrade = (upgradesJSON as PlayerUpgrade[]).find(upgrade => upgrade.commander === 'Swann' && upgrade.units.includes('Goliath') && upgrade.changes.some(change => change.target === 'unit' && change.weapon === 'air'))!;
    expect(upgrade).toBeDefined();
    expect(upgrade.changes.find(change => change.target === 'unit' && change.weapon === 'air')).not.toHaveProperty('modifiermode');
    expect(legacyPlayerUpgrades([upgrade], players).some(row => row.modifiermode === '(Air)')).toBe(true);
    expect(() => legacyPlayerUpgrades([{ ...upgrade, changes: upgrade.changes.map(change => change.target === 'unit' ? { ...change, weapon: 'missing' } : change) }], players)).toThrow('Unknown weapon');
    const defaultUpgrade = (upgradesJSON as PlayerUpgrade[]).find(upgrade => upgrade.changes.some(change => change.target === 'unit' && change.weapon === ''))!;
    expect(legacyPlayerUpgrades([defaultUpgrade], players).some(row => row.modifiermode === 'Weapon')).toBe(true);
});


test('Amon area attacks retain geometry and falloff across normal, mercenary, infested, and mutator variants', () => {
    const aoe = (id: number, mode = '') => enemies.find(unit => unit.amonid === id)!.modes[mode]!.aoe;
    const cases: [number, string, string][] = [
        [5, '', 'radius 1.5'], [6, '', '80%'], [8, '', 'perpendicular'], [12, '', '25% to 1'],
        [24, '', '270-degree'], [29, '', '1.2-wide'], [30, 'crucioshockcannon', '0.7812'],
        [34, 'javelinmissilelaunchers', 'radius 0.5'], [35, '', '45-degree'], [36, '', '6.65 long'],
        [44, 'liberatormissilelaunchers', 'radius 1.5'], [46, 'widowmineattack', '40 damage (+40 vs. shields)'],
        [58, '', '10 shots'], [64, '', 'radius 2.2'], [66, 'lurkermp', 'radius-0.625'],
        [68, '', '5 damage (+1 per melee weapon upgrade)'], [69, '', '5, then 3'],
        [79, '', 'radius 1.2'], [83, '', '180-degree'], [88, '', '0.75, 1.5, 2.25, and 3'],
        [113, '', 'distance 20'], [115, 'archangelcoopmissile', 'radius 1.5'],
        [121, '', 'radius 2.2'], [122, '', '0.7812'], [125, '', '40-degree'], [128, '', 'radius 2.2'],
        [131, '', 'radius 1.25'], [136, 'siegetankmengsksieged', '0.7812'], [137, '', 'radius 0.15'],
        [141, 'arcliteshockcannon', '0.7812'], [142, '', 'radius-0.5'], [143, '', 'radius-0.6'],
        [153, '', 'radius 0.4'], [161, '', '25% to 8'], [169, '', '50% damage'],
        [180, 'mutatorwidowmineattack', '80 damage (+80 vs. shields)'],
        [181, 'vulturespidermines', '1.2812'], [192, '', '0.75, 1.5, 2.25, and 3'], [202, '', 'radius 1.5'],
    ];
    for (const [id, mode, detail] of cases) expect(aoe(id, mode), `${id}/${mode}`).toContain(detail);
    for (const id of [28, 124, 135]) {
        expect(aoe(id)).toContain('With Concussive Shells');
        expect(aoe(id)).toContain('damage remains single-target');
    }
});

test('Amon does not inherit commander-only splash, and separate single-target weapons stay single-target', () => {
    // These shared catalog branches require unavailable commander/campaign research or Royal Guard rank.
    const singleTarget: [number, string][] = [
        [4, ''], [7, ''], [15, ''], [37, 'lanzertorpedoes'], [40, ''], [55, 'brutalize'],
        [63, ''], [123, ''], [134, ''], [144, 'wreckingcrewfighter'], [150, ''], [195, ''], [198, 'vikingmengskair'],
        [30, '90mmcannons'], [34, 'thorshammer'], [44, 'liberatoragweapon'], [55, 'ferociousspew'],
        [115, 'archangelcoopgun'], [136, 'siegetankmengsk'], [141, 'siegebreaker'],
    ];
    for (const [id, mode] of singleTarget) {
        expect(enemies.find(unit => unit.amonid === id)!.modes[mode]!.aoe, `${id}/${mode}`).toBeUndefined();
    }
});
