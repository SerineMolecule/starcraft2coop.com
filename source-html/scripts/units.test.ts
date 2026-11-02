import { perUnitEntries } from "../../source-data/unit-data";
import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import playerUnits from "../../source-data/playerunits.json";
import amonUnits from "../../source-data/amonunits.json";
import { isValidElement, toChildArray } from "preact";
import type { ComponentChildren, VNode } from "preact";
import Ajv from "ajv";
import playerUpgrades from "../../source-data/playerupgrades.json";
import upgradeSchema from "../../html/data/schemas/playerupgrades.schema.json";
import type { AmonUnit, PlayerUpgrade } from "../../source-data/data-types";

import { UnitSelector, UnitStats, applyUnitSettings, readUnitSettings, saveUnitSettings } from "./units";
import type { Token } from "./units";
import { rankUpgrades } from "./unit-ranks";

function amonCard(name: string) {
    const unit = amonUnits.find(unit => unit.name === name)!;
    const token = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '') as Token;
    return new UnitStats({ modifiers: UnitStats.modifiers(token(unit.race), token(name)), formKey: '1', onSetModifiers: () => {} });
}

test('Install Drone Hangar adds an upgraded drone attack alongside the Galleon torpedoes', () => {
    const modifiers = UnitStats.modifiers('horner', 'assaultgalleon');
    const base = UnitStats.getUnit(modifiers)!;
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    expect(renderedElements(card.renderUpgrades()).find(node => node.type === 'input' && node.props.value === 'Install Drone Hangar')?.props.type).toBe('checkbox');
    expect(UnitStats.getUpgradedUnit(base, modifiers).modes['assault-drones']).toBeUndefined();
    expect(UnitStats.getUpgradedUnit(base, modifiers).supply).toBe(0);
    expect(renderedText(card.render())).toContain('Build Time: 60');
    expect(renderedText(card.render())).not.toContain('Additional Build Time:');
    expect(renderedText(card.renderSkills())).toContain('Install Drone Hangar');
    expect(renderedText(card.renderSkills())).not.toContain('Build Assault Drone');
    expect(renderedText(card.renderSkills())).not.toContain('Endurance Training');
    modifiers.upgrades['Install Drone Hangar'] = true;
    modifiers.upgradeLevels.weapon = 3;
    const upgraded = UnitStats.getUpgradedUnit(base, modifiers);
    expect(upgraded.supply).toBe(3);
    expect([upgraded.mcost, upgraded.vcost, upgraded.buildtime]).toEqual([300, 200, 60]);
    expect(renderedText(card.render())).toContain('Additional Build Time: +60');
    expect([base.mcost, base.vcost]).toEqual([150, 0]);
    expect(base.supply).toBe(0);
    expect(renderedText(card.renderSkills())).not.toContain('Install Drone Hangar');
    expect(renderedText(card.renderSkills())).toContain('Build Assault Drone (autocast)');
    expect(renderedText(card.renderSkills())).toContain('Endurance Training');
    const enduranceRow = renderedElements(card.renderSkills()).find(node => unitSkills.get(node.props['data-tooltip'])?.name === 'Endurance Training')!;
    expect(skillFromTooltip(enduranceRow.props['data-tooltip'], enduranceRow.props['data-skill-values'])!.description)
        .toBe('Regenerates 3.75 life per second after taking no damage for 10 seconds.');
    expect(upgraded.modes['']!.damage!['']!.damage).toBe(26);
    expect(upgraded.modes['assault-drones']!.damage!['']!.damage).toBe(8);
    expect(renderedText(card.render())).toContain('Assault Drones (Ground, Air)');
    expect(base.modes['assault-drones']!.damage!['']!.damage).toBe(5);
    modifiers.upgrades['Install Drone Hangar'] = false;
    expect(UnitStats.getUpgradedUnit(base, modifiers).modes['assault-drones']).toBeUndefined();
    const uninstalled = UnitStats.getUpgradedUnit(base, modifiers);
    expect([uninstalled.mcost, uninstalled.vcost]).toEqual([150, 0]);
    expect(renderedText(card.render())).not.toContain('Additional Build Time:');
    expect(UnitStats.getUpgradedUnit(base, modifiers).supply).toBe(0);
    expect(renderedText(card.renderSkills())).not.toContain('Build Assault Drone');
    expect(renderedText(card.renderSkills())).not.toContain('Endurance Training');
    expect(applyUnitSettings(modifiers, { maxUpgrades: true }).upgrades['Install Drone Hangar']).toBe(true);
    const selector = new UnitSelector({ commander: 'horner', unit: 'assaultgalleon', onClickUnit: () => {} });
    expect(renderedText(selector.render())).toContain('Assault Galleon');
    expect(renderedText(selector.render())).not.toContain('Hangar Bay');
    expect(UnitStats.getUnit(UnitStats.modifiers('horner', 'hangarbay'))!.name).toBe('Hangar Bay');
    const row = renderedElements(card.renderSkills()).find(node => unitSkills.get(node.props['data-tooltip'])?.name === 'Install Drone Hangar')!;
    expect(renderedText(row)).toContain('Minerals: 150 Gas: 200 Supply: 3 Build time: 60');
    const skill = skillFromTooltip(row.props['data-tooltip'], row.props['data-skill-values'])!;
    expect(skill.cost).toEqual({ minerals: 150, gas: 200, supply: 3 });
    expect(skill.buildTime).toBe(60);
    expect(skill.cooldown).toBeUndefined();
});

test('Herald of the Void caps artifact controls and max-upgrade settings at two', () => {
    for (const unit of ['zeratul', 'xelnagaambusher'] as const) {
        const modifiers = UnitStats.modifiers('zeratul', unit);
        expect(modifiers.prestiges).toHaveProperty('Herald of the Void', false);
        modifiers.upgradeLevels.artifacts = 3;
        let changed: Partial<typeof modifiers> = {};
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: value => { changed = value; } });
        card.onCheckPrestige({ target: { value: 'Herald of the Void', checked: true } } as unknown as Event);
        expect(changed.upgradeLevels!.artifacts).toBe(2);
        const selected = { ...modifiers, ...changed };
        expect(applyUnitSettings(selected, { maxUpgradeLevels: true }).upgradeLevels.artifacts).toBe(2);
        const upgraded = new UnitStats({ modifiers: selected, formKey: '1', onSetModifiers: () => {} });
        expect(renderedElements(upgraded.renderUpgrades()).filter(node => node.props.name === 'artifacts-1').map(node => node.props.value)).toEqual([0, 1, 2]);
        expect(renderedText(upgraded.renderUpgrades())).toContain('P3: Herald of the Void');
        expect(modifiers.upgradeLevels.artifacts).toBe(3);
    }
});

test('Horner aircraft show Endurance Training without needing a Galleon upgrade', () => {
    for (const unit of ['asteriawraith', 'deimosviking', 'sovereignbattlecruiser', 'theiaraven'] as const) {
        const modifiers = UnitStats.modifiers('horner', unit);
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
        const skills = renderedElements(card.renderSkills()).filter(node => unitSkills.get(node.props['data-tooltip'])?.name === 'Endurance Training');
        expect(skills).toHaveLength(1);
        const row = skills[0]!;
        const skill = skillFromTooltip(row.props['data-tooltip'], row.props['data-skill-values'])!;
        expect(skill.type).toBe('passive');
        expect(skill.description).toBe('Regenerates 3.75 life per second after taking no damage for 10 seconds.');
        expect(skill.showWithUpgrade).toBeUndefined();
    }
});

test('Valorous Inspirator halves Archon merge time and retains the unit cost penalty', () => {
    const modifiers = UnitStats.modifiers('artanis', 'archon');
    const base = UnitStats.getUnit(modifiers)!;
    modifiers.prestiges['Valorous Inspirator'] = true;
    const upgraded = UnitStats.getUpgradedUnit(base, modifiers);
    expect(upgraded.buildtime).toBe(6);
    expect(upgraded.mcost).toBe(130);
    expect(upgraded.vcost).toBe(390);
    expect(base.buildtime).toBe(12);
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    expect(renderedText(card.render())).toContain('Additional Build Time: +6');
    const reaver = UnitStats.modifiers('artanis', 'reaver');
    expect(reaver.masteries).toHaveProperty('Energy Regeneration and Cooldown Reduction', 0);
});

test('Morph time is marked as additional while resource costs stay total', () => {
    const modifiers = UnitStats.modifiers('kerrigan', 'lurker');
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    for (const value of ['Minerals: 150', 'Gas: 150', 'Additional Build Time: +15']) expect(renderedText(card.render())).toContain(value);
    const hydralisk = new UnitStats({ modifiers: UnitStats.modifiers('kerrigan', 'hydralisk'), formKey: '1', onSetModifiers: () => {} });
    expect(renderedText(hydralisk.render())).toContain('Build Time: 30');
    expect(renderedText(hydralisk.render())).not.toContain('Additional Build Time:');
});

test("Punctuated game names retain unit links, images, skills, and upgrade matching", () => {
    for (const [commander, id, name] of [
        ['tychus', 'cannonball', 'Rob "Cannonball" Boswell'],
        ['tychus', 'sirius', 'James "Sirius" Sykes'],
        ['tychus', 'blaze', 'Miles "Blaze" Lewis'],
        ['tychus', 'rattlesnake', 'Kev "Rattlesnake" West'],
        ['tychus', 'nikara', 'Lt. Layna Nikara'],
        ['tychus', 'autoturret', 'Auto-Turret'],
        ['zeratul', 'xelnagaambusher', "Xel'Naga Ambusher"],
        ['mengsk', 'emperorsshadow', "Emperor's Shadow"],
        ['nova', 'raventypeii', 'Raven Type-II'],
    ] as const) {
        const modifiers = UnitStats.modifiers(commander, id);
        const unit = UnitStats.getUnit(modifiers)!;
        expect(unit.name).toBe(name);
        expect(UnitStats.getImageSrc(commander, name)).toBe(UnitStats.getImageSrc(commander, id));
        const selector = new UnitSelector({ commander, unit: id, onClickUnit: () => {} });
        const link = renderedElements(selector.renderLink(name)).find(node => node.type === 'a')!;
        expect(link.props.href).toBe(`#${commander}/${id}`);
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
        expect(card.renderSkills()).not.toBeNull();
        for (const upgrade of playerUpgrades.filter(upgrade => upgrade.units.includes(name) && upgrade.commander.toLowerCase() === commander)) {
            expect(upgrade.name in modifiers.upgrades).toBe(true);
        }
    }
    expect(renderedText(amonCard("Jackson's Revenge").renderAmonUnit())).toContain("Jackson's Revenge");
});

test("Amon cards display starting upgrades once, per-hit damage, and attribute DPS", () => {
    const zealot = renderedText(amonCard('Zealot').renderAmonUnit());
    expect(zealot).toContain('Psi Blades');
    expect(zealot).not.toContain('(+1)');
    expect(zealot).not.toContain('Weapon:');
    expect(zealot).toContain('Damage: 9 (15 DPS)');
    expect(zealot).toContain('Hits: 2');
    expect(zealot).toContain('Psi Blades (Ground)');
    expect(zealot).not.toContain('Targets:');
    const marauder = renderedText(amonCard('Marauder').renderAmonUnit());
    expect(marauder).toContain('Damage: 11 (7.33 DPS)');
    expect(marauder).toContain('vs. Armored: 22 (14.67 DPS)');
});

test("Amon weapon modes, minimum range, shield damage, and armor rules are visible", () => {
    const tank = renderedText(amonCard('Siege Tank').renderAmonUnit());
    expect(tank).toContain('Tank mode: 90mm Cannons');
    expect(tank).toContain('Siege mode: Crucio Shock Cannon');
    expect(tank).toContain('Range: 13');
    expect(tank).toContain('Minimum range: 2');
    expect(tank).not.toContain('Used only beyond the listed minimum range');
    const mine = renderedText(amonCard('Widow Mine').renderAmonUnit());
    expect(mine).toContain('Additional damage vs. shields: 35');
    expect(mine).toContain('Ignores armor');
    expect(renderedText(amonCard('Oracle').renderAmonUnit())).toContain('Ignores armor');
    expect(mine).toContain('1.5-second targeting delay');
});

test("Amon movement and vision overrides appear inside their named mode sections", () => {
    const tank = renderedText(amonCard('Siege Tank').renderAmonUnit());
    expect(tank).toContain('Move Speed: 2.25');
    expect(tank).not.toContain('Move Speed: 2.25 (');
    const tankData = amonUnits.find(unit => unit.name === 'Siege Tank')! as AmonUnit;
    const siege = Object.entries(tankData.modes).find(([, mode]) => mode.name === 'Siege mode')!;
    const siegeText = renderedText(amonCard('Siege Tank').renderAmonMode(tankData, ...siege));
    expect(siegeText).toContain('Siege mode: Crucio Shock Cannon');
    expect(siegeText).toContain('Immobile');
    expect(siegeText).not.toContain('Vision:');
    const prismData = amonUnits.find(unit => unit.name === 'Warp Prism')! as AmonUnit;
    const prismCard = amonCard('Warp Prism');
    const prism = prismCard.renderAmonUnit();
    const baseStats = renderedElements(prism).find(node => node.props.class === 'units-stats')!;
    expect(renderedText(baseStats)).toContain('Air Speed: 2.5');
    expect(renderedText(baseStats)).toContain('Vision: 10');
    expect(renderedText(baseStats)).not.toContain('Phasing');
    expect(renderedElements(prism).filter(node => node.props.class === 'units-head').map(renderedText))
        .toEqual(['Transport mode', 'Phasing mode']);
    const phasing = renderedText(prismCard.renderAmonMode(prismData, 'phasing-mode', prismData.modes['phasing-mode']!));
    expect(phasing).toContain('(No weapon)');
    expect(phasing).toContain('Immobile');
    expect(phasing).toContain('Vision: 11');
    expect(phasing).not.toContain('Damage:');
    const missile = renderedText(amonCard('Missile Nuke').renderAmonUnit());
    expect(missile).toContain('Air Speed: 2.2');
    expect(missile).toContain('Vision: 0');
});

test("Movement labels distinguish all six movement and targetability cases", () => {
    const card = amonCard('Colossus');
    for (const [speed, movement, targetable, expected] of [
        [2.5, 'Ground', undefined, 'Move Speed: 2.5'],
        [2.5, 'Air', undefined, 'Air Speed: 2.5'],
        [2.5, 'Ground', 'Ground,Air', 'Move Speed: 2.5 (ground and air targetable)'],
        [0, 'Ground', undefined, 'Immobile'],
        [0, 'Air', undefined, 'Immobile (air targetable)'],
        [0, 'Ground', 'Ground,Air', 'Immobile (ground and air targetable)'],
    ] as const) {
        const rendered = card.renderMovement(speed, speed, movement, targetable);
        expect(renderedText(rendered)).toBe(expected);
        const qualifier = renderedElements(rendered).find(node => node.props.class === 'units-targetability unbold');
        expect(!!qualifier).toBe(expected.includes('targetable'));
    }
    const upgraded = card.renderMovement(3, 2.5, 'Air');
    expect(renderedText(renderedElements(upgraded).find(node => node.props.class === 'units-modified')!)).toBe('3');
});

test("Unit and mode movement use catalog planes rather than weapon targets", () => {
    for (const [commander, name, expected] of [
        ['artanis', 'phoenix', 'Air Speed:'],
        ['fenix', 'colossus', '(ground and air targetable)'],
        ['alarak', 'warprism', 'Immobile (air targetable)'],
    ] as const) {
        const modifiers = UnitStats.modifiers(commander, name);
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
        expect(renderedText(card.render())).toContain(expected);
    }
    const modifiers = UnitStats.modifiers('raynor', 'viking');
    const unit = UnitStats.getUnit(modifiers)!;
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    expect(unit.movement).toBe('Air');
    expect(unit.modes['assault-mode']!.movement).toBe('Ground');
    expect(renderedText(card.renderMode(unit.modes['assault-mode']!, unit.modes['assault-mode']!, unit))).toContain('Move Speed:');
    expect(renderedText(amonCard('Void Shard').renderAmonUnit())).toContain('Immobile (ground and air targetable)');
    expect(renderedText(amonCard('Colossus').renderAmonUnit())).toContain('Move Speed: 2.25 (ground and air targetable)');
});

test("War Prisms and Void Arrays have unarmed phasing modes that stay unarmed under upgrades", () => {
    for (const [commander, name, mobileMode] of [['alarak', 'warprism', 'transport-mode'], ['zeratul', 'xelnagavoidarray', 'flight-mode']] as const) {
        const modifiers = UnitStats.modifiers(commander, name);
        const base = UnitStats.getUnit(modifiers)!;
        expect(Object.keys(base.modes)).toEqual([mobileMode, 'phasing-mode']);
        const phasing = base.modes['phasing-mode']!;
        expect(phasing.movementspeed).toBe(0);
        expect(phasing.sightrange).toBe(11);
        expect(phasing.damage).toBeUndefined();
        if (commander === 'alarak') expect(base.modes[mobileMode]!.damage!['']!.damage).toBe(10);
        const unit = structuredClone(base);
        UnitStats.applyUpgrade({ modifier: 'damage', operation: 'multiply', value: 2 }, unit);
        UnitStats.applyUpgrade({ modifier: 'Attack_Speed', operation: 'multiply', value: 0.5 }, unit);
        expect(unit.modes['phasing-mode']).toEqual(phasing);
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
        const text = renderedText(card.renderMode(unit.modes['phasing-mode']!, phasing, base));
        expect(text).toContain('Phasing Mode');
        expect(text).toContain('(No weapon)');
        expect(text).toContain('Immobile');
        expect(text).toContain('Vision: 11');
        expect(text).not.toMatch(/Damage:|NaN|DPS/);
    }
});

test("Single-use and persistent attacks do not display misleading recurring DPS", () => {
    for (const name of ['Baneling', 'Scourge', 'Spider Mine']) {
        const text = renderedText(amonCard(name).renderAmonUnit());
        expect(text).not.toMatch(/\([\d.]+ DPS\)/);
        expect(text).not.toContain('Cooldown:');
    }
    const puddle = renderedText(amonCard('Blightbringer').renderAmonUnit());
    expect(puddle).toContain('Damage per tick: 10');
    expect(puddle).toContain('vs. Massive: 11.5');
    expect(puddle).toContain('Tick interval: 0.5');
    expect(puddle).not.toMatch(/\([\d.]+ DPS\)/);
    expect(puddle).toContain('Cooldown: 1');
});

test("Ability-only attacks and unarmed units retain their explanations", () => {
    expect(renderedText(amonCard('Void Shard').renderAmonUnit())).toContain('Void Zone deals 35 damage');
    expect(renderedText(amonCard('Death Grip Crystal').renderAmonUnit())).toContain('instant-kill effect');
    expect(renderedText(amonCard('Medivac').renderAmonUnit())).toContain('(No weapon)');
    expect(renderedText(amonCard('Medivac').renderAmonUnit())).not.toContain('No weapon.');
    expect(renderedElements(amonCard('Medivac').renderAmonUnit()).some(node => node.props.class === 'units-head')).toBe(false);
    const raven = renderedText(amonCard('Raven').renderAmonUnit());
    expect(raven).toContain('(No weapon)');
    expect(raven).toContain('Can deploy Auto-Turrets.');
    const component = amonCard('Zealot');
    const partial = { ...amonUnits[0], modes: { '': { kind: 'ability', aoe: 'Radius 3' } } } as AmonUnit;
    const text = renderedText(component.renderAmonModes(partial));
    expect(text).toContain('Damage: —');
    expect(text).toContain('AoE: Radius 3');
    expect(text).not.toContain('DPS');
});

test("Every Amon card renders valid stats and only its applicable upgrade controls", () => {
    for (const unit of amonUnits) {
        const card = amonCard(unit.name).renderAmonUnit();
        const text = renderedText(card);
        expect(text, unit.name).not.toMatch(/NaN|Infinity|undefined/);
        for (const mode of Object.values(unit.modes)) {
            if (mode.weaponName) expect(text, unit.name).toContain(mode.weaponName);
        }
        expect(text, unit.name).not.toContain('Targets:');
        const inputs = renderedElements(card).filter(node => node.type === 'input');
        expect(inputs.length, unit.name).toBe(Object.keys(UnitStats.amonUpgradeLevels(unit as AmonUnit)).length * 3);
        expect(inputs.every(node => node.props.type === 'radio' && [1, 2, 3].includes(node.props.value)), unit.name).toBe(true);
    }
});

test("Unit and mode notes render once and remain scoped to the relevant attack", () => {
    const carrier = renderedText(amonCard('Carrier').renderAmonUnit());
    expect(carrier.split('The Carrier launches Interceptors at range 8.')).toHaveLength(2);
    const blightbringer = amonUnits.find(unit => unit.name === 'Blightbringer')! as AmonUnit;
    const card = amonCard('Blightbringer');
    const attack = renderedText(card.renderAmonMode(blightbringer, '', blightbringer.modes['']!));
    expect(attack).toContain('every 3 seconds while not laying eggs');
    expect(attack).not.toContain('Parasitic Bomb');
    expect(renderedText(card.renderAmonUnit())).toContain('Parasitic Bomb is a separate anti-air ability.');

    const modifiers = UnitStats.modifiers('stukov', 'infestedsiegetank');
    const unit = UnitStats.getUnit(modifiers)!;
    const playerCard = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    expect(unit.notes).toBe('');
    for (const [label, mode] of Object.entries(unit.modes)) {
        const text = renderedText(playerCard.renderMode(mode, mode, unit));
        const rooted = label === 'rooted';
        expect(text).toContain(rooted ? 'Engineering Bay upgrades' : 'Armory upgrades');
        expect(text).not.toContain(rooted ? 'Armory upgrades' : 'Engineering Bay upgrades');
    }
});

test("Unarmed default and named forms retain mode notes without adding an attack", () => {
    const amon = amonCard('Medivac');
    const data = amonUnits.find(unit => unit.name === 'Medivac')! as AmonUnit;
    const modifiers = UnitStats.modifiers('raynor', 'medic');
    const unit = UnitStats.getUnit(modifiers)!;
    const player = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    for (const name of [undefined, 'Alternate form']) {
        const notes = 'Available only in this form.';
        const playerMode = { ...unit.modes['']!, modeName: name ? `(${name})` : null, notes };
        for (const rendered of [amon.renderAmonMode(data, '', { name, notes }), player.renderMode(playerMode, playerMode, unit)]) {
            expect(renderedText(rendered)).toContain('(No weapon)');
            expect(renderedText(rendered).split(notes)).toHaveLength(2);
            expect(renderedText(rendered)).not.toContain('Damage:');
            expect(renderedElements(rendered).some(node => node.props.class === 'units-head')).toBe(!!name);
        }
    }
});

test("Attacks sharing a mode name retain separate stats, upgrades, and rendered comparisons", () => {
    const modifiers = UnitStats.modifiers('stukov', 'infestedsiegetank');
    const base = UnitStats.getUnit(modifiers)!;
    expect(Object.keys(base.modes)).toEqual(['uprooted-tentacles', 'rooted', 'rooted-tentacles']);
    expect(base.modes.rooted!.modeName).toBe('(Rooted)');
    expect(base.modes['rooted-tentacles']!.modeName).toBe('(Rooted)');
    modifiers.upgrades['Acidic Enzymes'] = true;
    const upgraded = UnitStats.getUpgradedUnit(base, modifiers);
    expect(upgraded.modes.rooted!.damage!.Structure!.damage).toBe(95);
    expect(upgraded.modes['rooted-tentacles']!.damage!.Structure).toBeUndefined();
    expect(upgraded.modes['rooted-tentacles']!.damage!.Armored!.damage).toBe(45);
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    const rendered = card.render();
    const headings = renderedElements(rendered).filter(node => node.props.class === 'units-head').map(renderedText);
    expect(headings).toContain('Uprooted: Impaler Tentacle (Ground)');
    expect(headings).toContain('Rooted: Volatile Burst (Ground)');
    expect(headings).toContain('Rooted: Impaler Tentacle (Ground)');
    expect(renderedText(rendered)).not.toMatch(/NaN|undefined|Rooted Tentacles|Uprooted Tentacles/);
});

test("Amon upgrade selectors apply independent levels once, including bonus damage and defenses", () => {
    const modifiers = UnitStats.modifiers('protoss', 'zealot');
    expect(modifiers.upgradeLevels).toEqual({ weapon: 1, armor: 1, shields: 1 });
    const card = new UnitStats({ modifiers, formKey: '2', onSetModifiers: changes => Object.assign(modifiers, changes) });
    for (const [kind, level] of [['weapon', 3], ['armor', 2], ['shields', 1]] as const) {
        card.onCheckUpgradeLevel({ target: { name: `${kind}-2`, value: String(level) } } as unknown as Event);
    }
    let text = renderedText(card.renderAmonUnit());
    expect(text).toContain('Damage: 11 (18.33 DPS)');
    expect(text).toContain('Armor: 3');
    expect(text).toContain('Shield Armor: 1');
    expect(text).not.toContain('(+3)');
    expect(text).toContain('+2 ≈10:00');
    expect(text.match(/\+2 ≈15:00/g)).toHaveLength(1);
    const marauder = amonCard('Marauder');
    marauder.props.modifiers!.upgradeLevels.weapon = 3;
    text = renderedText(marauder.renderAmonUnit());
    expect(text).toContain('Damage: 13 (8.67 DPS)');
    expect(text).toContain('vs. Armored: 26 (17.33 DPS)');
    expect(text).toContain('+3 ≈30:00');
    card.onCheckUpgradeLevel({ target: { name: 'weapon-2', value: '1' } } as unknown as Event);
    expect(renderedText(card.renderAmonUnit())).toContain('Damage: 9 (15 DPS)');
    expect(modifiers.upgradeLevels.armor).toBe(2);
});

test("Amon upgrades leave fixed attacks alone and settings reset to the Brutal starting level", () => {
    const card = amonCard('Photon Cannon');
    expect(card.props.modifiers!.upgradeLevels).toEqual({ shields: 1 });
    card.props.modifiers!.upgradeLevels.weapon = 3;
    expect(renderedText(card.renderAmonUnit())).toContain('Damage: 20');
    expect(renderedText(amonCard('Void Shard').renderAmonUnit())).not.toContain('Brutal timings');
    const base = UnitStats.modifiers('terran', 'marine');
    const maxed = applyUnitSettings(base, { maxUpgradeLevels: true });
    expect(maxed.upgradeLevels).toEqual({ weapon: 3, armor: 3 });
    expect(applyUnitSettings(maxed, { maxUpgradeLevels: false }).upgradeLevels).toEqual(base.upgradeLevels);
    expect(UnitStats.modifiers('raynor', 'marine').upgradeLevels).toEqual({ weapon: 0, armor: 0 });
});

test("Amon attack upgrades highlight damage and DPS relative to their starting level", () => {
    const card = amonCard('Marauder');
    const highlighted = () => renderedElements(card.renderAmonUnit())
        .filter(node => node.props.class === 'units-modified').map(renderedText);
    expect(highlighted()).toEqual([]);
    card.props.modifiers!.upgradeLevels.weapon = 3;
    expect(highlighted()).toEqual(['13', '8.67', '26', '17.33']);
    card.props.modifiers!.upgradeLevels.weapon = 1;
    expect(highlighted()).toEqual([]);
    const cannon = amonCard('Photon Cannon');
    cannon.props.modifiers!.upgradeLevels.weapon = 3;
    expect(renderedElements(cannon.renderAmonUnit()).filter(node => node.props.class === 'units-modified')).toEqual([]);
});

test("Enemy selectors preserve unit, hero, and structure groups using shared tags", () => {
    for (const [race, group, name] of [['terran', 'Units', 'Marine'], ['terran', 'Structures', 'Bunker'], ['objective', 'Heroes', 'Archangel']] as const) {
        const selector = new UnitSelector({ commander: race, unit: null, onClickUnit: () => {} });
        const groups: Record<string, string> = {};
        let heading = '';
        for (const child of toChildArray(selector.render().props.children)) {
            if (!isValidElement(child)) continue;
            if (child.type === 'p') heading = renderedText(child);
            if (child.type === 'ul') groups[heading] = renderedText(child);
        }
        expect(groups[group]).toContain(name);
    }
});

test("Weapon-specific upgrades follow stable IDs even when a display label changes", () => {
    const unit = UnitStats.getUnit(UnitStats.modifiers('swann', 'goliath'))!;
    unit.modes['air']!.modeName = '(Renamed anti-air weapon)';
    UnitStats.applyUpgrade({ modifier: 'damage', operation: 'add', value: 3, weapon: 'air' }, unit);
    expect(unit.modes['air']!.damage!['']!.damage).toBe(11);
    expect(unit.modes['air']!.damage!.Armored!.damage).toBe(19);
    expect(unit.modes['ground']!.damage!['']!.damage).toBe(18);
    UnitStats.applyUpgrade({ modifier: 'aoe', operation: 'replace', value: 'New splash', weapon: 'air' }, unit);
    expect(unit.modes['air']!.aoe).toBe('New splash');
    expect(unit.modes['ground']!.aoe).toBeUndefined();
});

test("An empty weapon selector targets only the default attack; omission targets all attacks", () => {
    const unit = UnitStats.getUnit(UnitStats.modifiers('raynor', 'marine'))!;
    unit.modes['other'] = { ...structuredClone(unit.modes['']!), modeName: '(Other)', weaponId: 'other' };
    UnitStats.applyUpgrade({ modifier: 'damage', operation: 'add', value: 3, weapon: '' }, unit);
    expect(unit.modes['']!.damage!['']!.damage).toBe(9);
    expect(unit.modes['other']!.damage!['']!.damage).toBe(6);
    UnitStats.applyUpgrade({ modifier: 'aoe', operation: 'replace', value: 'Default splash', weapon: '' }, unit);
    expect(unit.modes['']!.aoe).toBe('Default splash');
    expect(unit.modes['other']!.aoe).toBeUndefined();
    UnitStats.applyUpgrade({ modifier: 'damage', operation: 'add', value: 1 }, unit);
    expect(unit.modes['']!.damage!['']!.damage).toBe(10);
    expect(unit.modes['other']!.damage!['']!.damage).toBe(7);
});

test("Player weapon headings retain target and mode labels without duplicating a weapon name", () => {
    const headings = (commander: Token, name: Token) => {
        const modifiers = UnitStats.modifiers(commander, name);
        const unit = UnitStats.getUnit(modifiers)!;
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
        return Object.values(unit.modes).map(mode => renderedText(card.renderMode(mode, mode, unit)));
    };
    expect(headings('swann', 'goliath')[0]).toContain('Hellfire Missiles (Air)');
    expect(headings('swann', 'goliath')[1]).toContain('Autocannon (Ground)');
    expect(headings('swann', 'goliath').join('')).not.toContain('Weapon:');
    expect(headings('raynor', 'siegetank')[1]).toContain('Siege Mode: Crucio Shock Cannon');
    expect(headings('mengsk', 'blackhammer')[0]).toContain('Walker Mode: Javelin Missile Launchers (Air)');
    expect(headings('mengsk', 'blackhammer')[1]).toContain('Walker Mode: Thor\'s Hammer (Ground)');
    expect(headings('vorazun', 'oracle')[0]).toContain('Pulsar Beam');
    expect(headings('vorazun', 'oracle')[0]).toContain('Ignores armor');
    expect(headings('horner', 'widowmine')[0]).toContain('Ignores armor');
    expect(headings('vorazun', 'oracle')[0]).not.toContain('Pulsar Beam (Pulsar Beam)');
    expect(headings('raynor', 'medic')[0]).not.toContain('Weapon:');
    expect(headings('raynor', 'marine')[0]).toContain('C-14 Gauss Rifle (Ground, Air)');
    expect(headings('artanis', 'zealot')[0]).toContain('Psi Blades (Ground)');
    expect(headings('artanis', 'phoenix')[0]).toContain('Ion Cannons (Air)');
    expect(headings('horner', 'reaper')[1]).toContain('D9 Charge (Structures)');
});

test("Weapon headings separate mode, weapon, and target styling, retaining target restrictions", () => {
    const card = amonCard('Liberator');
    const mode = (amonUnits.find(unit => unit.name === 'Liberator')! as AmonUnit).modes.liberatoragweapon!;
    const heading = card.renderModeHeading(mode.weaponName, `(${mode.name})`, mode.targets, mode.targetFilters);
    const elements = renderedElements(heading);
    expect(renderedText(elements.find(node => node.props.class === 'units-mode-name')!)).toBe('Defender mode:');
    expect(renderedText(elements.find(node => node.props.class === 'units-weapon-name')!)).toBe(mode.weaponName!);
    expect(renderedText(elements.find(node => node.props.class === 'units-weapon-target unbold')!)).toBe(' (Ground, non-structures)');
    expect(elements.some(node => node.props.class === 'unbold')).toBe(false);
});

test("Unarmed units, spawners, unknown ability damage, and zero damage remain distinct", () => {
    for (const [commander, name, mode, expected] of [
        ['raynor', 'medic', '', '(No weapon)'],
        ['zagara', 'spinecrawler', 'uprooted', '(No weapon)'],
        ['abathur', 'swarmhost', '', '(Spawns units)'],
        ['dehaka', 'primalhost', '', '(Spawns units)'],
        ['horner', 'widowmine', '', 'Damage: 125'],
        ['mengsk', 'imperialintercessor', '', 'Damage: —'],
        ['dehaka', 'explosivecreeper', 'air', 'Damage: 0'],
    ] as const) {
        const modifiers = UnitStats.modifiers(commander, name);
        const unit = UnitStats.getUnit(modifiers)!;
        const weapon = unit.modes[mode]!;
        const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
        const rendered = card.renderMode(weapon, weapon, unit);
        const text = renderedText(rendered);
        expect(text).toContain(expected);
        if (expected !== '(No weapon)') expect(text).not.toContain('(No weapon)');
        if (expected === '(No weapon)') {
            expect(renderedElements(rendered).some(node => node.props.class === 'units-head')).toBe(!!mode);
            expect(renderedElements(rendered).some(node => node.props.class === 'units-mode-stats')).toBe(!!mode);
        }
    }
});

test("Player minimum range belongs to the relevant weapon and survives range upgrades", () => {
    const modifiers = UnitStats.modifiers('nova', 'heavysiegetank');
    const base = UnitStats.getUnit(modifiers)!;
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    const tank = base.modes['tank-mode']!;
    const siege = base.modes['siege-mode']!;
    expect(renderedText(card.renderMode(tank, tank, base))).not.toContain('Minimum range:');
    expect(renderedText(card.renderMode(siege, siege, base))).toContain('Minimum range: 2');
    UnitStats.applyUpgrade({ modifier: 'Range', operation: 'add', value: 2, weapon: 'siege-mode' }, base);
    expect(siege.minimumRange).toBe(2);
    expect(UnitStats.getUnit(UnitStats.modifiers('swann', 'drakkenlaserdrill'))!.modes['level-0']!.minimumRange).toBe(3);
    expect(UnitStats.getUnit(UnitStats.modifiers('mengsk', 'earthsplitterordnance'))!.modes['']!.minimumRange).toBe(7);
    const intercessor = UnitStats.getUnit(UnitStats.modifiers('mengsk', 'imperialintercessor'))!;
    const airlift = intercessor.modes['']!;
    expect(renderedText(card.renderMode(airlift, airlift, intercessor))).toContain('Minimum range: 2');
});

test("Weapon replacements update names alongside their stats and leave other attacks intact", () => {
    const cruiser = upgradedUnit('horner', 'sovereignbattlecruiser');
    expect(cruiser.modes['']!.weaponName).toBe('ATX Laser Battery');
    const yamato = upgradedUnit('horner', 'sovereignbattlecruiser', { upgrades: { 'Overcharged Reactor': true } });
    expect(yamato.modes['']!.weaponName).toBe('Mini Yamato Gun');
    expect(yamato.modes['']!.damage!['']!.damage).toBe(200);
    expect(cruiser.modes['']!.weaponName).toBe('ATX Laser Battery');
    const mutalisk = upgradedUnit('dehaka', 'primalmutalisk', { upgrades: { 'Slicing Glaive': true } });
    expect(mutalisk.modes['air']!.weaponName).toBe('Slicing Glave');
    expect(mutalisk.modes['ground']!.weaponName).toBe('Glaive Wurm');
    expect(mutalisk.modes['air']!.aoe).toContain('9, 3');
});

test("Unit portraits resolve existing assets for every commander unit and available Amon portrait", () => {
    for (const unit of playerUnits) {
        const src = UnitStats.getImageSrc(unit.commander, unit.name);
        expect(src, `${unit.commander}: ${unit.name}`).toBeTruthy();
        expect(existsSync(new URL(`../../html${src}`, import.meta.url)), src!).toBe(true);
    }
    for (const unit of amonUnits) {
        const src = UnitStats.getImageSrc(unit.race, unit.name);
        expect(src).toBe(unit.image ?? null);
        if (src) expect(existsSync(new URL(`../../html${src}`, import.meta.url)), src).toBe(true);
    }
});

test("Bulk settings independently change permanent upgrades, temporary upgrades, and levels", () => {
    const marine = UnitStats.modifiers('raynor', 'marine');
    marine.masteries['Speed for Dropped Units'] = 17;
    marine.prestiges['Backwater Marshal'] = true;
    const upgraded = applyUnitSettings(marine, { maxUpgrades: true });
    expect(upgraded.upgrades['Combat Shield']).toBe(true);
    expect(upgraded.upgrades.Stimpack).toBe(false);
    expect(marine.upgrades['Combat Shield']).toBe(false);
    const active = applyUnitSettings(upgraded, { maxTemporaryStatuses: true });
    expect(active.upgrades.Stimpack).toBe(true);
    expect(active.upgrades['Combat Shield']).toBe(true);
    expect(active.masteries).toEqual(marine.masteries);
    expect(active.prestiges).toEqual(marine.prestiges);
    const leveled = applyUnitSettings(active, { maxUpgradeLevels: true });
    expect(leveled.upgradeLevels).toEqual({ weapon: 3, armor: 3 });
    const disabled = applyUnitSettings(leveled, { maxUpgrades: false });
    expect(disabled.upgrades['Combat Shield']).toBe(false);
    expect(disabled.upgrades.Stimpack).toBe(true);
    expect(disabled.upgradeLevels).toEqual(leveled.upgradeLevels);
    expect(applyUnitSettings(disabled, { maxTemporaryStatuses: false }).upgrades.Stimpack).toBe(false);
    const oil = UnitStats.modifiers('stetmann', 'mechazergling');
    expect(applyUnitSettings(oil, { maxTemporaryStatuses: true }).prestiges['Oil Baron']).toBe(false);
    const havoc = applyUnitSettings(UnitStats.modifiers('alarak', 'havoc'), { maxUpgrades: true });
    expect(havoc.upgrades['Bloodshard Resonance']).toBe(true);
    expect(havoc.upgrades['Detect Weakness']).toBe(true);
    expect(havoc.upgrades['Cloaking Module']).toBe(false);
});

test("Maximum level settings respect special caps and synchronize Royal Guard rank upgrades", () => {
    for (const [commander, unit, expected] of [
        ['tychus', 'tychus', { weapon: 5, armor: 5 }],
        ['zeratul', 'zeratul', { artifacts: 3 }],
        ['dehaka', 'dehaka', { hero: 15 }],
        ['abathur', 'roach', { weapon: 3, armor: 3, biomass: 100 }],
        ['mengsk', 'aegisguard', { rank: 3 }],
    ] as const) {
        const base = UnitStats.modifiers(commander, unit);
        const max = applyUnitSettings(base, { maxUpgradeLevels: true });
        expect(max.upgradeLevels).toEqual(expected);
        expect(applyUnitSettings(max, { maxUpgradeLevels: false }).upgradeLevels).toEqual(base.upgradeLevels);
        if (commander === 'mengsk') {
            const ranks = ['1', '2', '3'].filter(rank => rank in base.upgrades);
            expect(ranks.length).toBeGreaterThan(0);
            for (const rank of ranks) expect(max.upgrades[rank]).toBe(true);
            expect(max.upgrades['High-Grade Stimpacks']).toBe(false);
        }
    }
    const dehaka = UnitStats.modifiers('dehaka', 'dehaka');
    dehaka.prestiges['Devouring One'] = true;
    expect(applyUnitSettings(dehaka, { maxUpgradeLevels: true }).upgradeLevels.hero).toBe(11);
    const roach = UnitStats.modifiers('abathur', 'roach');
    roach.prestiges['The Limitless'] = true;
    expect(applyUnitSettings(roach, { maxUpgradeLevels: true }).upgradeLevels.biomass).toBe(200);
});

test("Unit settings persist boolean defaults and tolerate unavailable or malformed storage", () => {
    let saved = '';
    const storage = { getItem: () => saved, setItem: (_key: string, value: string) => { saved = value; } };
    const defaults = { maxUpgrades: false, maxUpgradeLevels: false, maxTemporaryStatuses: false };
    expect(readUnitSettings(storage)).toEqual(defaults);
    const settings = { ...defaults, maxUpgrades: true, maxUpgradeLevels: true };
    saveUnitSettings(settings, storage);
    expect(readUnitSettings(storage)).toEqual(settings);
    const fresh = applyUnitSettings(UnitStats.modifiers('raynor', 'marine'), readUnitSettings(storage));
    expect(fresh.upgrades['Combat Shield']).toBe(true);
    expect(fresh.upgrades.Stimpack).toBe(false);
    expect(fresh.upgradeLevels.weapon).toBe(3);
    saved = '{broken';
    expect(readUnitSettings(storage)).toEqual(defaults);
    saved = '{"maxUpgrades":"true","maxUpgradeLevels":1,"maxTemporaryStatuses":true}';
    expect(readUnitSettings(storage)).toEqual({ ...defaults, maxTemporaryStatuses: true });
    expect(readUnitSettings({ getItem: () => { throw new Error('Blocked'); } })).toEqual(defaults);
    expect(() => saveUnitSettings(settings, { setItem: () => { throw new Error('Blocked'); } })).not.toThrow();
});

test("Temporary effects have one checkbox in Upgrades with a muted temporary label", () => {
    const modifiers = UnitStats.modifiers('raynor', 'marine');
    const component = new UnitStats({ modifiers, formKey: '1', onSetModifiers: update => Object.assign(modifiers, update) });
    const fieldsets = renderedElements(component.renderUpgrades()).filter(node => node.type === 'fieldset');
    const titles = fieldsets.map(node => renderedText(renderedElements(node).find(child => child.type === 'legend')));
    expect(titles[0]).toBe('Upgrades');
    expect(titles).not.toContain('Temporary');
    const upgrades = renderedElements(fieldsets[0]);
    const checkbox = upgrades.find(node => node.type === 'input' && node.props.value === 'Stimpack')!;
    expect(upgrades.filter(node => node.type === 'input' && node.props.value === 'Stimpack')).toHaveLength(1);
    expect(checkbox.props.checked).toBe(false);
    const label = upgrades.find(node => node.type === 'label' && renderedText(node).includes('Stimpack'))!;
    expect(label.props['data-tooltip']).toBe('upgrades/raynor/stimpack');
    expect(renderedElements(label).some(node => node.props.class?.split(' ').includes('unbold') && renderedText(node) === ' (temporary)')).toBe(true);
    const permanent = upgrades.find(node => node.type === 'label' && renderedText(node).includes('Combat Shield'))!;
    expect(renderedText(permanent)).not.toContain('(temporary)');
    expect(upgrades.some(node => node.type === 'input' && node.props.value === 'Combat Shield')).toBe(true);
    checkbox.props.onChange({ target: { value: 'Stimpack', checked: true } });
    expect(modifiers.upgrades.Stimpack).toBe(true);
    const base = UnitStats.getUnit(modifiers)!;
    expect(UnitStats.getUpgradedUnit(base, modifiers).movementspeed).toBeCloseTo(base.movementspeed * 1.5);
    const plain = new UnitStats({ modifiers: UnitStats.modifiers('artanis', 'dragoon'), formKey: '2', onSetModifiers: () => {} });
    expect(renderedElements(plain.renderUpgrades()).some(node => node.type === 'legend' && renderedText(node) === 'Temporary')).toBe(false);
});

test("Masteries distinguish temporary speed buffs from permanent bonuses", () => {
    for (const [commander, unit, name, temporary] of [
        ['artanis', 'dragoon', 'Speed for Warped Units', true],
        ['raynor', 'vulture', 'Speed for Dropped Units', true],
        ['raynor', 'vulture', 'Mech Attack Speed', false],
    ] as const) {
        const component = new UnitStats({ modifiers: UnitStats.modifiers(commander, unit), formKey: '1', onSetModifiers: () => {} });
        const label = renderedElements(component.renderUpgrades()).find(node => node.props.class === 'units-mastery-name' && renderedText(node).startsWith(name))!;
        expect(renderedText(label)).toBe(name + (temporary ? ' (temporary)' : ''));
        expect(renderedElements(label).some(node => node.props.class?.split(' ').includes('unbold') && renderedText(node) === ' (temporary)')).toBe(temporary);
    }
});

test("Oil Baron is marked temporary only when the control applies its attack-speed buff", () => {
    for (const [unit, temporary] of [['mechazergling', true], ['mechabaneling', false]] as const) {
        const component = new UnitStats({ modifiers: UnitStats.modifiers('stetmann', unit), formKey: '1', onSetModifiers: () => {} });
        const label = renderedElements(component.renderUpgrades()).find(node => node.type === 'label' && renderedText(node).includes('Oil Baron'))!;
        expect(renderedText(label)).toContain('P3: Oil Baron');
        expect(renderedElements(label).some(node => node.props.class?.split(' ').includes('unbold') && renderedText(node) === ' (temporary)')).toBe(temporary);
    }
});

test("Upgrades have unique identities and shared optional boolean temporary metadata", () => {
    const validate = new Ajv().compile(upgradeSchema);
    const upgrade = playerUpgrades[0]!;
    expect(validate([upgrade])).toBe(true);
    expect(validate([{ ...upgrade, temporary: true }])).toBe(true);
    expect(validate([{ ...upgrade, temporary: false }])).toBe(true);
    expect(validate([{ ...upgrade, temporary: 'true' }])).toBe(false);
    expect(validate([{ ...upgrade, units: [] }])).toBe(false);
    expect(validate([{ ...upgrade, units: ['Marine', 'Marine'] }])).toBe(false);
    expect(validate([{ ...upgrade, unit: 'Marine' }])).toBe(false);

    const flags = new Map<string, boolean>();
    for (const entry of perUnitEntries(playerUpgrades as PlayerUpgrade[])) {
        const key = JSON.stringify([entry.commander, entry.unit, entry.name]);
        expect(flags.has(key), key).toBe(false);
        flags.set(key, entry.temporary ?? false);
    }
    for (const name of ['Stimpack', 'Frenzy', 'Avenging Protocol', 'High-Grade Stimpacks']) {
        expect((playerUpgrades as PlayerUpgrade[]).filter(entry => entry.name === name).every(entry => entry.temporary === true)).toBe(true);
    }
    for (const name of ['Combat Shield', 'Charge', 'Maximum Biomass', 'Power Overwhelming']) {
        expect((playerUpgrades as PlayerUpgrade[]).filter(entry => entry.name === name).every(entry => !entry.temporary)).toBe(true);
    }
});
import { applySkillModification, resolveSkill } from "./skill-modifiers";
import { skillCooldown, skillCosts, skillDetails, skillFromTooltip, skillKey, skillTooltipValues, skillVisible, unitSkills } from "./unit-skills";

test("Sky Fury only replaces its armored fighter weapon after reaching Rank 1", () => {
    const modifiers = UnitStats.modifiers('mengsk', 'skyfury');
    const base = UnitStats.getUnit(modifiers)!;
    const rankZero = UnitStats.getUpgradedUnit(base, modifiers);
    expect(rankZero.modes['fighter-mode']).toEqual(base.modes['fighter-mode']);
    expect(rankZero.modes['fighter-mode']!.damage!['']!.damage).toBe(15);
    expect(rankZero.modes['fighter-mode']!.damage!.Armored!.damage).toBe(21);
    modifiers.upgradeLevels.rank = 1;
    modifiers.upgrades['1'] = true;
    const rankOne = UnitStats.getUpgradedUnit(base, modifiers);
    expect(rankOne.modes['fighter-mode']!.damage!.Armored).toBeUndefined();
    expect(rankOne.modes['fighter-mode']!.damage!['']!.damage).toBe(26.25);
    expect(base.modes['fighter-mode']!.damage!['']!.damage).toBe(15);
});

test("Royal Guard ranks render named radio rows with unit-specific tooltips and fallback icons", () => {
    for (const formKey of ['1', '2']) {
        const modifiers = UnitStats.modifiers('mengsk', 'aegisguard');
        const component = new UnitStats({ modifiers, formKey, onSetModifiers: () => {} });
        const fieldset = renderedElements(component.renderUpgrades()).find(node => node.props.class === 'units-ranks')!;
        const labels = renderedElements(fieldset).filter(node => node.type === 'label');
        expect(labels).toHaveLength(4);
        for (const [rank, label] of labels.entries()) {
            const input = renderedElements(label).find(node => node.type === 'input')!;
            expect(input.props.type).toBe('radio');
            expect(input.props.name).toBe(`rank-${formKey}`);
            expect(input.props.value).toBe(rank);
            expect(input.props.checked).toBe(rank === 0);
        }
        expect(toChildArray(labels[0]!.props.children)).toContain('Rank 0');
        expect(labels[0]!.props['data-tooltip']).toBeUndefined();
        expect(renderedElements(labels[0]).find(node => node.type === 'img')!.props.src).toEndWith('/veterancy.png');
        expect(toChildArray(labels[3]!.props.children)).toContain('Rank 3: High-Grade Stimpacks');
        expect(labels[3]!.props['data-tooltip']).toBe('ranks/mengsk/aegisguard/3');
        expect(renderedElements(labels[3]).find(node => node.type === 'img')!.props.src).toEndWith('/highgradestimpacks.png');
    }
});

test("Veterancy tooltips distinguish units and deduplicate effects shared by multiple stat modifiers", () => {
    const shock = rankUpgrades.get('ranks/mengsk/shockdivision/2')!;
    const hammer = rankUpgrades.get('ranks/mengsk/blackhammer/2')!;
    expect(shock.effect).toBe('Increases vision and attack range by 2 in Siege Mode.');
    expect(hammer.effect).toBe('Increases the range of Overwatch Mode by 2.');
    expect(shock.icon).toBe('veterancy');
    expect(rankUpgrades.get('ranks/mengsk/skyfury/2')!.name).toBe('Rank 2: Tactical Realignment');
});

function renderedElements(node: ComponentChildren): VNode[] {
    if (Array.isArray(node)) return node.flatMap(renderedElements);
    if (!isValidElement(node)) return [];
    const children = (node.props as { children?: ComponentChildren }).children;
    return [node, ...renderedElements(children)];
}

test("Skills render for each comparison unit with icons, type labels, and no controls", () => {
    for (const [commander, unit, formKey, name, type] of [
        ['abathur', 'devourer', '1', 'Corrosive Acid', 'autocast'],
        ['stetmann', 'supergary', '2', 'The Best Oil', 'passive'],
        ['nova', 'nova', '1', 'Snipe', 'active'],
    ] as const) {
        const modifiers = UnitStats.modifiers(commander, unit);
        const component = new UnitStats({ modifiers, formKey, onSetModifiers: () => {} });
        const elements = renderedElements(component.renderSkills());
        const rows = elements.filter(node => node.props['data-tooltip']);
        expect(rows.length).toBeGreaterThan(0);
        for (const row of rows) {
            const skill = unitSkills.get(row.props['data-tooltip'])!;
            expect(skill.commander.toLowerCase()).toBe(commander);
            expect(row.props.tabIndex).toBe(0);
            expect(renderedElements(row).filter(node => node.type === 'img' && node.props.alt === '').map(node => node.props.src)).toEqual(skill.icons);
        }
        const row = rows.find(node => unitSkills.get(node.props['data-tooltip'])!.name === name)!;
        expect(row).toBeDefined();
        expect(renderedText(row).includes('(autocast)')).toBe(type === 'autocast');
        expect(renderedText(row)).not.toContain('(passive)');
        const sections = toChildArray(component.renderSkills()).filter(isValidElement) as VNode[];
        for (const section of sections) {
            const sectionElements = renderedElements(section);
            const title = sectionElements.find(node => node.props.class === 'units-head')!.props.children;
            const sectionRows = sectionElements.filter(node => node.props['data-tooltip']);
            expect(sectionRows.length).toBeGreaterThan(0);
            expect(sectionRows.every(node => (unitSkills.get(node.props['data-tooltip'])!.type === 'passive') === (title === 'Passives'))).toBe(true);
        }
        expect(elements.some(node => node.type === 'input')).toBe(false);
    }
    const empty = new UnitStats({ modifiers: UnitStats.modifiers('artanis', 'dragoon'), formKey: '1', onSetModifiers: () => {} });
    expect(empty.renderSkills()).toBeNull();
});

function renderedText(node: ComponentChildren): string {
    if (Array.isArray(node)) return node.map(renderedText).join('');
    if (!isValidElement(node)) return typeof node === 'string' || typeof node === 'number' ? String(node) : '';
    if (node.type === 'img') return node.props.alt ?? '';
    return renderedText(node.props.children);
}

function skillSelector(commander: Token, unit: Token) {
    const modifiers = UnitStats.modifiers(commander, unit);
    const component = new UnitStats({
        modifiers, formKey: '1', onSetModifiers: changes => Object.assign(modifiers, changes),
    });
    const visible = () => renderedElements(component.renderSkills())
        .filter(node => node.props['data-tooltip'])
        .map(node => skillFromTooltip(node.props['data-tooltip'], node.props['data-skill-values'])!);
    return {
        modifiers, component, visible,
        select(prestige: string, checked = true) {
            expect(prestige in modifiers.prestiges).toBe(true);
            component.onCheckPrestige({ target: { value: prestige, checked } } as unknown as Event);
        },
    };
}

test('Prestiges show and hide unlocked skills, including skill-only prestige options', () => {
    for (const [commander, unit, prestige, names] of [
        ['swann', 'sciencevessel', 'Payload Director', ['Tactical Jump']],
        ['abathur', 'roach', 'Tunneling Horror', ['Deep Tunnel']],
        ['abathur', 'ravager', 'Tunneling Horror', ['Deep Tunnel']],
        ['stukov', 'infestedbanshee', 'Plague Warden', ['Load', 'Unload All', 'Remote Deployment']],
        ['zagara', 'zagara', 'Apex Predator', ['Deep Tunnel']],
    ] as const) {
        const selector = skillSelector(commander, unit);
        const before = selector.visible();
        for (const name of names) expect(before.some(skill => skill.name === name)).toBe(false);
        expect(renderedText(selector.component.renderUpgrades())).toContain(prestige);
        selector.select(prestige);
        for (const name of names) expect(selector.visible().some(skill => skill.name === name)).toBe(true);
        selector.select(prestige, false);
        expect(selector.visible()).toEqual(before);
    }
});

test('Prestige exclusions remove skills and passives without affecting other units or defaults', () => {
    for (const [commander, unit, prestige, names] of [
        ['tychus', 'odin', 'Dutiful Dogwalker', ['Barrage', 'Big Red Button']],
        ['tychus', 'nikara', 'Lone Wolf', ['XM-77 Matrix Generator']],
        ['dehaka', 'dehaka', 'Devouring One', ['Scorching Breath']],
        ['nova', 'nova', 'Infiltration Specialist', ['Penetrating Blast', 'Blink', 'Holo Decoy', 'Permanently Cloaked']],
    ] as const) {
        const selector = skillSelector(commander, unit);
        const before = selector.visible();
        for (const name of names) expect(before.some(skill => skill.name === name)).toBe(true);
        selector.select(prestige);
        for (const name of names) expect(selector.visible().some(skill => skill.name === name)).toBe(false);
        selector.select(prestige, false);
        expect(selector.visible()).toEqual(before);
    }
    // Dark Pylon has skill data but no unit stats card yet.
    const recall = [...unitSkills.values()].find(skill => skill.unit === 'Dark Pylon' && skill.name === 'Recall')!;
    expect(skillVisible(recall, {})).toBe(true);
    expect(skillVisible(recall, { 'Spirit of Respite': true })).toBe(false);
    const roach = skillSelector('abathur', 'roach');
    expect(roach.visible().some(skill => skill.name === 'Morph to Ravager')).toBe(true);
    expect(roach.visible().some(skill => skill.name === 'Deep Tunnel')).toBe(false);
    roach.select('Essence Hoarder');
    expect(roach.visible().some(skill => skill.name === 'Evolve to Brutalisk')).toBe(false);
    expect(roach.visible().some(skill => skill.name === 'Morph to Ravager')).toBe(true);
    const odin = skillSelector('tychus', 'odin');
    odin.modifiers.prestiges['Lone Wolf'] = true;
    expect(odin.visible().some(skill => skill.name === 'Big Red Button')).toBe(true);
    expect(skillSelector('swann', 'sciencevessel').visible().some(skill => skill.name === 'Tactical Jump')).toBe(false);
});

test('Prestige skill replacements select one variant with its own tooltip and costs', () => {
    const nova = skillSelector('nova', 'nova');
    nova.select('Infiltration Specialist');
    expect(nova.visible().some(skill => skill.name === 'Super Cloak')).toBe(true);
    for (const [name, cooldown, radius] of [['Sabotage Drone', '22.5', '6'], ['Tac Nuke Strike', '210', '12']]) {
        const variants = nova.visible().filter(skill => skill.name === name);
        expect(variants).toHaveLength(1);
        expect(skillCooldown(variants[0]!)).toBe(cooldown);
        expect(skillDetails(variants[0]!).join(' ')).toContain(`radius ${radius}`);
    }
    expect(skillDetails(nova.visible().find(skill => skill.name === 'Tac Nuke Strike')!)).toContain('Coolup: 600 seconds\nCooldown: 210 seconds');
    const kerrigan = skillSelector('kerrigan', 'kerrigan');
    const wave = kerrigan.visible().find(skill => skill.name === 'Immobilization Wave')!;
    expect(kerrigan.visible().some(skill => skill.name === 'Kinetic Blast')).toBe(false);
    kerrigan.select('Desolate Queen');
    expect(kerrigan.visible().some(skill => skill.name === 'Leaping Strike')).toBe(false);
    expect(kerrigan.visible().some(skill => skill.name === 'Kinetic Blast')).toBe(true);
    expect(kerrigan.visible().filter(skill => skill.name === 'Assimilation Aura')).toHaveLength(1);
    expect(kerrigan.visible().filter(skill => skill.name === 'Immobilization Wave')).toEqual([wave]);
    expect(renderedText(kerrigan.component.renderSkills())).not.toContain('(Desolate Queen)');
    const zagara = skillSelector('zagara', 'zagara');
    zagara.select('Apex Predator');
    const frenzy = zagara.visible().filter(skill => skill.name === 'Mass Frenzy');
    expect(frenzy).toHaveLength(1);
    expect(frenzy[0]!.description).toContain('her summoned units');
    expect(skillCooldown(frenzy[0]!)).toBe('60');
    for (const unit of ['dominionassaulttrooper', 'dominionflametrooper', 'dominionrockettrooper'] as const) {
        const trooper = skillSelector('mengsk', unit);
        expect(trooper.visible().map(skill => skill.name)).toEqual(['Weapon Drop']);
        trooper.select('Merchant of Death');
        expect(trooper.visible().map(skill => skill.name)).toEqual(['Weapon Self-Destruct']);
        expect(trooper.visible()[0]!.type).toBe('passive');
    }
    expect(skillSelector('mengsk', 'dominiontrooper').visible().some(skill => skill.name === 'Weapon Self-Destruct')).toBe(false);
    const host = skillSelector('abathur', 'swarmhost');
    expect(Object.keys(host.modifiers.prestiges)).toEqual(['Essence Hoarder', 'Tunneling Horror', 'The Limitless']);
    host.select('Tunneling Horror');
    expect(host.visible().filter(skill => skill.name === 'Deep Tunnel')).toHaveLength(1);
    expect(host.visible().find(skill => skill.name === 'Deep Tunnel')!.description).toContain('without requiring vision');
});

test("Research-only skill upgrades have checkboxes and highlighted values survive the tooltip snapshot", () => {
    const modifiers = UnitStats.modifiers('stukov', 'infesteddiamondback');
    const component = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    const checkbox = renderedElements(component.renderUpgrades()).find(node => node.type === 'input' && node.props.value === 'Saturated Cultures');
    expect(checkbox?.props.type).toBe('checkbox');
    modifiers.upgrades['Saturated Cultures'] = true;
    const row = renderedElements(component.renderSkills()).find(node => unitSkills.get(node.props['data-tooltip'])?.name === 'Fungal Snare')!;
    expect(renderedElements(row).some(node => node.props.class === 'units-modified' && renderedText(node) === '30')).toBe(true);
    const snapshot = skillFromTooltip(row.props['data-tooltip'], row.props['data-skill-values'])!;
    expect(snapshot.cooldown).toBe(30);
    expect(snapshot.modifiedFields).toContain('cooldown');
    const ordinary = skillFromTooltip(row.props['data-tooltip'])!;
    expect(ordinary.cooldown).toBe(45);
    expect(ordinary.modifiedFields).toEqual([]);
});

test("Skill rows keep charges and autocast with the name and put costs in a separate group", () => {
    for (const [commander, unit, name, expected] of [
        ['nova', 'nova', 'Snipe', 'Snipe Energy: 50'],
        ['nova', 'nova', 'Sabotage Drone', 'Sabotage Drone Energy: 100 Cooldown (seconds): 45'],
        ['nova', 'nova', 'Blink', 'Blink (3 charges) Cooldown (seconds): 8'],
        ['nova', 'nova', 'Tac Nuke Strike', 'Tac Nuke Strike Cooldown (seconds): 420'],
        ['abathur', 'devourer', 'Corrosive Acid', 'Corrosive Acid (autocast) Cooldown (seconds): 45'],
        ['stetmann', 'supergary', 'E-Gorb', 'E-Gorb (2 charges) Cooldown (seconds): 30'],
        ['stetmann', 'supergary', 'The Best Oil', 'The Best Oil'],
        ['raynor', 'vulture', 'Deploy Spider Mine', 'Deploy Spider Mine (3 charges)'],
    ] as const) {
        const component = new UnitStats({ modifiers: UnitStats.modifiers(commander, unit), formKey: '1', onSetModifiers: () => {} });
        const row = renderedElements(component.renderSkills()).find(node => unitSkills.get(node.props['data-tooltip'])?.name === name)!;
        expect(renderedText(row).trim().replace(/\s+/g, ' ')).toBe(expected);
        expect(renderedElements(row).some(node => node.type === 'b' || node.type === 'strong')).toBe(false);
        const label = renderedElements(row).find(node => node.props.class === 'units-skill-label')!;
        expect(renderedElements(label).some(node => node.type === 'img' && node.props.alt)).toBe(false);
        if (name === 'Corrosive Acid') expect(renderedText(label)).toContain('(autocast)');
        for (const icon of renderedElements(row).filter(node => node.type === 'img' && node.props.alt)) {
            expect(icon.props.src).toBe(icon.props.alt === 'Energy:' ?
                '/images/commanderdata/unitupgrades/iconenergy.png' :
                `/images/commanderdata/unitupgrades/icontime_${commander === 'abathur' || commander === 'stetmann' ? 'zerg' : 'terran'}.png`);
        }
    }
});

test("Cooldown summaries retain fractions and flag conditional values while preserving tooltip details", () => {
    const skills = [...unitSkills.values()];
    for (const skill of skills) {
        if (skill.cooldown === 2.5) expect(skillCooldown(skill)).toBe('2.5');
        if (skill.cooldown === '~ seconds') expect(skillCooldown(skill)).toBe('?');
        if (typeof skill.cooldown === 'string' && skill.cooldown.startsWith('10 seconds if')) expect(skillCooldown(skill)).toBe('10*');
        if (skill.cooldown === '10 seconds/5 missiles') expect(skillCooldown(skill)).toBe('10*');
    }
    const wave = skills.find(skill => skill.name === 'Immobilization Wave')!;
    expect(skillCooldown(wave)).toBe('180');
    expect(skillDetails(wave)).toContain('Coolup: 600 seconds\nCooldown: 180 seconds');
});

test("Omitted skill metadata produces no costs or prerequisites, including initial-only cooldowns", () => {
    const skill = {
        commander: 'Raynor', unit: 'Marine', name: 'Test skill', icons: [],
        description: 'Details.', type: 'active' as const, requiresupgrade: false,
    };
    expect(skillCosts(skill, 'terran')).toEqual([]);
    expect(skillDetails(skill)).toEqual(['Details.']);
    expect(skillCooldown(skill)).toBeNull();
    expect(skillDetails({ ...skill, initialCooldown: 60 })).toEqual(['Details.', 'Coolup: 60 seconds']);
    expect(skillCosts({ ...skill, energycost: 0 }, 'terran')).toEqual([]);
});

test("Skill arithmetic rejects string values without coercion and explicit replacements remain possible", () => {
    const base = [...unitSkills.values()].find(skill => skill.commander === 'Nova' && skill.name === 'Sabotage Drone')!;
    for (const value of ['45', '45 seconds', 'Varies with target health', undefined]) {
        for (const operation of ['add', 'multiply'] as const) {
            const skill = { ...base, cooldown: value };
            expect(() => applySkillModification(skill, { modifier: 'cooldown', operation, value: 0.5 }))
                .toThrow('Nova/Nova/Sabotage Drone.cooldown: expected a number');
            expect(skill.cooldown).toBe(value);
        }
    }
    expect(() => resolveSkill({ ...base, cooldown: '45' }, { masteries: {}, prestiges: { 'Infiltration Specialist': true } }))
        .toThrow('expected a number');
    const skill = { ...base };
    applySkillModification(skill, { modifier: 'cooldown', operation: 'add', value: 5 });
    applySkillModification(skill, { modifier: 'cooldown', operation: 'multiply', value: 0.5 });
    expect(skill.cooldown).toBe(25);
    applySkillModification(skill, { modifier: 'cooldown', operation: 'replace', value: 'Depends on target' });
    applySkillModification(skill, { modifier: 'cooldown', operation: 'set', value: 12.5 });
    expect(skill.cooldown).toBe(12.5);
    expect(base.cooldown).toBe(45);
});

test("Skill field buffs preserve initial cooldowns, base data, precision, and per-card tooltip values", () => {
    const base = [...unitSkills.values()].find(skill => skill.commander === 'Nova' && skill.name === 'Tac Nuke Strike')!;
    const resolved = resolveSkill(base, { masteries: {}, prestiges: { 'Infiltration Specialist': true } });
    expect(base.cooldown).toBe(420);
    expect(resolved.cooldown).toBe(210);
    expect(resolved.initialCooldown).toBe(600);
    const key = skillKey(base);
    expect(skillFromTooltip(key, skillTooltipValues(base, resolved))).toEqual(resolved);
    const unmodified = resolveSkill(base, { masteries: {}, prestiges: {} });
    expect(skillFromTooltip(key)).toEqual(unmodified);
    expect(skillFromTooltip(key, skillTooltipValues(base, unmodified))).toEqual(unmodified);
    const barrage = [...unitSkills.values()].find(skill => skill.commander === 'Zagara' && skill.name === 'Baneling Barrage')!;
    const faster = resolveSkill(barrage, { masteries: {}, prestiges: { 'Apex Predator': true } });
    expect(faster.cooldown).toBeCloseTo(20 / 3, 10);
    expect(skillCooldown(faster)).toBe('6.67');
    expect(skillCosts({ ...base, energycost: '50 per target' }, 'terran')[0]!.value).toBe('50 per target');
    expect(skillCosts({ ...base, energycost: 0 }, 'terran').some(cost => cost.label === 'Energy:')).toBe(false);
});

test("Skill tooltips distinguish commander, unit, and prestige variants", () => {
    const tunnels = [...unitSkills].filter(([, skill]) => skill.name === 'Deep Tunnel');
    expect(tunnels.length).toBeGreaterThan(1);
    expect(new Set(tunnels.map(([key]) => key)).size).toBe(tunnels.length);
    const auras = [...unitSkills].filter(([, skill]) => skill.commander === 'Kerrigan' && skill.name === 'Assimilation Aura');
    expect(auras).toHaveLength(1);
    const queen = skillSelector('kerrigan', 'kerrigan');
    queen.select('Desolate Queen');
    expect(queen.visible().find(skill => skill.name === 'Assimilation Aura')!.description).toContain('twice the usual resources');
});

test("Skill tooltip details preserve prerequisites and complex timing without repeating heading costs", () => {
    const skills = [...unitSkills.values()];
    const stim = skills.find(skill => skill.name === 'High-Grade Stimpacks')!;
    expect(skillDetails(stim)).toEqual([stim.description, 'Requires rank 3.']);
    expect(skillCosts(stim, 'terran').map(cost => [cost.label, cost.value])).toEqual([['Cooldown (seconds):', '30']]);
    const whirlwind = skills.find(skill => skill.commander === 'Artanis' && skill.name === 'Whirlwind')!;
    expect(skillCosts(whirlwind, 'protoss').some(cost => cost.label === 'Energy:')).toBe(false);
    expect(skillDetails(whirlwind)).toContain('Requires an upgrade.');
    const snipe = skills.find(skill => skill.commander === 'Nova' && skill.name === 'Snipe')!;
    expect(skillDetails(snipe)).toContain('Mode: Stealth Mode');
    const wave = skills.find(skill => skill.name === 'Immobilization Wave')!;
    expect(skillDetails(wave)).toContain('Coolup: 600 seconds\nCooldown: 180 seconds');
});

test("Informational upgrades keep their label, icon, and tooltip without a checkbox or stat effect", () => {
    const informational: PlayerUpgrade = {
        upgradeid: 9999, commander: "Raynor", units: ["Marine"],
        name: "Test informational upgrade", icon: "combatshield", effect: "Description only.",
        changes: [], upgradetype: "upgrade",
    };
    const validate = new Ajv().compile(upgradeSchema);
    expect(validate([informational])).toBe(true);
    expect(validate([{ ...informational, value: 0 }])).toBe(false);
    expect(validate([{ ...informational, operation: "add" }])).toBe(false);

    const upgrades = playerUpgrades as PlayerUpgrade[];
    const originalLength = upgrades.length;
    upgrades.push(informational);
    try {
        const modifiers = UnitStats.modifiers("raynor", "marine");
        const component = new UnitStats({ modifiers, formKey: "1", onSetModifiers: () => {} });
        const labels = renderedElements(component.renderUpgrades()).filter(node => node.props["data-tooltip"]);
        const label = labels.find(node => toChildArray(node.props.children).includes(informational.name))!;
        expect(label.props["data-tooltip"]).toBe("upgrades/raynor/combatshield");
        expect(label.props.class).toBe("units-upgrade-passive");
        expect(renderedElements(label).some(node => node.props["aria-hidden"] === "true" && node.props.children === "•")).toBe(true);
        expect(renderedElements(label).some(node => node.type === "img")).toBe(true);
        expect(renderedElements(label).some(node => node.type === "input")).toBe(false);
        expect(renderedElements(component.renderUpgrades()).some(node => node.type === "input" && node.props.type === "checkbox")).toBe(true);

        const base = UnitStats.getUnit(modifiers)!;
        modifiers.upgrades[informational.name] = true;
        expect(UnitStats.getUpgradedUnit(base, modifiers)).toEqual(base);

        // Adding a calculable change makes the same upgrade selectable.
        informational.changes.push({ target: 'unit', modifier: 'HP', operation: 'add', value: 10 });
        const mixedLabel = renderedElements(component.renderUpgrades()).find(node =>
            node.type === "label" && toChildArray(node.props.children).includes(informational.name))!;
        expect(renderedElements(mixedLabel).some(node => node.type === "input")).toBe(true);
    } finally {
        upgrades.splice(originalLength);
    }
});

function upgradedUnit(
    commander: Token,
    unitToken: Token,
    modifierOverrides: {
        upgrades?: Record<string, boolean>,
        masteries?: Record<string, number>,
        prestiges?: Record<string, boolean>,
        upgradeLevels?: Partial<Record<"weapon" | "armor" | "shields" | "artifacts" | "rank" | "hero" | "biomass", number>>,
    } = {},
) {
    const modifiers = UnitStats.modifiers(commander, unitToken);
    modifiers.upgrades = { ...modifiers.upgrades, ...modifierOverrides.upgrades };
    modifiers.masteries = { ...modifiers.masteries, ...modifierOverrides.masteries };
    modifiers.prestiges = { ...modifiers.prestiges, ...modifierOverrides.prestiges };
    modifiers.upgradeLevels = { ...modifiers.upgradeLevels, ...modifierOverrides.upgradeLevels };

    const baseUnit = UnitStats.getUnit(modifiers)!;
    return UnitStats.getUpgradedUnit(baseUnit, modifiers);
}

test("Dehaka hero level updates damage, minimum HP, and air targetability at level 10", () => {
    let modifiers = UnitStats.modifiers('dehaka', 'dehaka');
    expect(modifiers.upgradeLevels).toEqual({ hero: 1 });
    const base = UnitStats.getUnit(modifiers)!;
    const component = new UnitStats({
        modifiers, formKey: '1',
        onSetModifiers: update => {
            modifiers = { ...modifiers, ...update };
            component.props = { ...component.props, modifiers };
        },
    });
    for (const [input, level, damage, hp] of [['2', 2, 30, 611.25], ['8', 8, 90, 915], ['9', 9, 100, 1005], ['10', 10, 110, 1106.25], ['15', 15, 160, 1781.25], ['0', 1, 20, 600], ['99', 15, 160, 1781.25], ['', 1, 20, 600]] as const) {
        component.onChangeUnitLevel({ target: { name: 'hero', type: 'range', value: input } } as unknown as Event);
        expect(modifiers.upgradeLevels.hero).toBe(level);
        const unit = UnitStats.getUpgradedUnit(base, modifiers);
        expect(unit.modes['']!.damage!['']!.damage).toBe(damage);
        expect(unit.hp).toBe(hp);
        expect(unit.targetable ?? unit.movement).toBe(level >= 10 ? 'Ground,Air' : 'Ground');
        expect(renderedText(component.render()).includes('(ground and air targetable)')).toBe(level >= 10);
    }
    expect(base.modes['']!.damage!['']!.damage).toBe(20);
    expect(base.hp).toBe(600);
    expect(UnitStats.modifiers('dehaka', 'primalzergling').upgradeLevels).not.toHaveProperty('hero');
});

test("Dehaka mastery and P1 compose with armor upgrades, clamp hero level, and hide Scorching Breath", () => {
    let modifiers = UnitStats.modifiers('dehaka', 'dehaka');
    expect(modifiers.masteries).toEqual({ 'Dehaka Attack Speed': 0 });
    expect(modifiers.prestiges).toEqual({ 'Devouring One': false });
    modifiers.upgradeLevels.hero = 15;
    modifiers.masteries['Dehaka Attack Speed'] = 30;
    const base = UnitStats.getUnit(modifiers)!;
    const component = new UnitStats({
        modifiers, formKey: '1',
        onSetModifiers: update => {
            modifiers = { ...modifiers, ...update };
            component.props = { ...component.props, modifiers };
        },
    });
    const skillNames = () => renderedElements(component.renderSkills())
        .filter(node => node.props.class === 'units-skill-label')
        .flatMap(node => toChildArray(node.props.children).filter(child => typeof child === 'string'));
    expect(skillNames()).toContain('Chitinous Plating');
    expect(skillNames()).toContain('Scorching Breath');
    component.onCheckPrestige({ target: { value: 'Devouring One', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.hero).toBe(11);
    const heroInputs = renderedElements(component.renderUpgrades()).filter(node => node.type === 'input' && node.props.name === 'hero');
    expect(heroInputs).toHaveLength(2);
    for (const input of heroInputs) expect(input.props.max).toBe(11);
    component.onChangeUnitLevel({ target: { name: 'hero', type: 'number', value: '15' } } as unknown as Event);
    expect(modifiers.upgradeLevels.hero).toBe(11);
    const p1 = UnitStats.getUpgradedUnit(base, modifiers);
    expect(p1.armor).toBe(0);
    expect(p1.hp).toBe(1218.75);
    expect(p1.modes['']!.damage!['']!.damage).toBe(120);
    expect(p1.modes['']!.cooldown).toBeCloseTo(2 / 1.3);
    expect(skillNames()).not.toContain('Scorching Breath');
    expect(skillNames()).toContain('Chitinous Plating');
    // Even a saved/out-of-range modifier must obey the prestige cap.
    expect(UnitStats.getUpgradedUnit(base, { ...modifiers, upgradeLevels: { hero: 15 } }).hp).toBe(1218.75);
    component.onCheckUpgrade({ target: { value: 'Chitinous Plating', checked: true } } as unknown as Event);
    expect(UnitStats.getUpgradedUnit(base, modifiers).armor).toBe(3);
    component.onCheckPrestige({ target: { value: 'Devouring One', checked: false } } as unknown as Event);
    expect(UnitStats.heroLevelLimit(modifiers)).toBe(15);
    expect(modifiers.upgradeLevels.hero).toBe(11);
    component.onChangeUnitLevel({ target: { name: 'hero', type: 'range', value: '15' } } as unknown as Event);
    const normal = UnitStats.getUpgradedUnit(base, modifiers);
    expect(normal.armor).toBe(4);
    expect(normal.hp).toBe(1781.25);
    expect(normal.modes['']!.damage!['']!.damage).toBe(160);
    expect(normal.modes['']!.cooldown).toBeCloseTo(2 / 1.3);
    expect(base.armor).toBe(1);
    expect(base.modes['']!.cooldown).toBe(2);
});

test("Fenix armor upgrades use hero icons and informational upgrades have no checkbox", () => {
    const modifiers = UnitStats.modifiers("fenix", "fenixcybrosarbiter");
    const component = new UnitStats({ modifiers, formKey: "1", onSetModifiers: () => {} });
    const labels = renderedElements(component.renderUpgrades()).filter(node => node.props["data-tooltip"]);
    for (const [name, icon, selectable] of [
        ["Observation Protocol", "observationprotocol", false],
        ["A Strong Heart", "astrongheart", false],
        ["Purifier Armaments", "purifierarmaments", true],
    ] as const) {
        const label = labels.find(node => toChildArray(node.props.children).includes(name))!;
        expect(label).toBeDefined();
        expect(label.props["data-tooltip"]).toBe(`upgrades/fenix/${icon}`);
        const elements = renderedElements(label);
        expect(elements.find(node => node.type === "img")!.props.src).toBe(`/images/commanderdata/hero/fenix/${icon}.png`);
        expect(elements.some(node => node.type === "input")).toBe(selectable);
    }
});

test("Ripwave Missiles adds splash only to the Viking's fighter mode", () => {
    const base = upgradedUnit("raynor", "viking");
    const upgraded = upgradedUnit("raynor", "viking", { upgrades: { "Ripwave Missiles": true } });
    expect(base.modes["fighter-mode"]!.aoe).toBeUndefined();
    expect(upgraded.modes["fighter-mode"]!.aoe).toContain("splash damage");
    expect(upgraded.modes["assault-mode"]).toEqual(base.modes["assault-mode"]);
});

test("Abathur Mutalisk Sundering Glave doubles armored damage", () => {
    const mutalisk = upgradedUnit("abathur", "mutalisk", {
        upgrades: { "Sundering Glave": true },
    });
    expect(mutalisk.modes[""]!.damage![""]!.damage).toBe(9);
    expect(mutalisk.modes[""]!.damage!["Armored"]!.damage).toBe(18);
});

test("Biomass scales bonuses by the selected amount and prestige", () => {
    for (const [biomass, prestige, hp, armor, speed] of [
        [0, '', 145, 1, 2],
        [50, '', 362.5, 3.5, 2 / 1.5],
        [100, '', 580, 6, 1],
        [100, 'Essence Hoarder', 580, 6, 1],
        [125, 'Essence Hoarder', 688.75, 7.25, 2 / 2.25],
        [100, 'The Limitless', 362.5, 3.5, 2 / 1.5],
        [200, 'The Limitless', 580, 6, 1],
    ] as const) {
        const unit = upgradedUnit('abathur', 'roach', {
            upgradeLevels: { biomass }, prestiges: prestige ? { [prestige]: true } : {},
        });
        expect(unit.hp).toBeCloseTo(hp);
        expect(unit.armor).toBeCloseTo(armor);
        expect(unit.modes['']!.cooldown).toBeCloseTo(speed);
    }
    const armored = upgradedUnit('abathur', 'roach', { upgradeLevels: { biomass: 50, armor: 3 } });
    expect(armored.armor).toBeCloseTo(6.5);
    expect(upgradedUnit('abathur', 'locust', { upgradeLevels: { biomass: 50 } }).hp).toBeCloseTo(162.5);
    expect(upgradedUnit('abathur', 'swarmhost', { upgradeLevels: { biomass: 50 } }).modes['']!.cooldown).toBe(10);
});

test("Biomass stays maxed when changing prestige, while lower values are preserved or clamped", () => {
    let modifiers = UnitStats.modifiers('abathur', 'roach');
    expect(modifiers.upgrades).not.toHaveProperty('Maximum Biomass');
    expect(modifiers.upgradeLevels.biomass).toBe(0);
    const component = new UnitStats({
        modifiers, formKey: '1',
        onSetModifiers: update => {
            modifiers = { ...modifiers, ...update };
            component.props = { ...component.props, modifiers };
        },
    });
    component.onCheckPrestige({ target: { value: 'The Limitless', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(0);
    component.onChangeUnitLevel({ target: { name: 'biomass', type: 'range', value: '200' } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(200);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(125);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: false } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(100);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(125);
    component.onCheckPrestige({ target: { value: 'The Limitless', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(200);
    component.onChangeUnitLevel({ target: { name: 'biomass', type: 'range', value: '75' } } as unknown as Event);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(75);
    component.onCheckPrestige({ target: { value: 'The Limitless', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(75);
    component.onChangeUnitLevel({ target: { name: 'biomass', type: 'range', value: '150' } } as unknown as Event);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(125);
    expect(UnitStats.modifiers('abathur', 'brutalisk').upgradeLevels).not.toHaveProperty('biomass');
});

test("HP percentage bonuses stack on base HP after other HP changes", () => {
    const unit = UnitStats.getUnit(UnitStats.modifiers("tychus", "blaze"))!;
    UnitStats.applyUpgrade({ modifier: "HP", operation: "add", value: 200 }, unit);
    UnitStats.applyUpgrade({ modifier: "HP", operation: "multiply", value: 1.25 }, unit);
    expect(unit.hp).toBe(1450);

    UnitStats.applyUpgrade({
        modifier: "HP", operation: "multiply", value: 0.005, operationtype: "increase",
    }, unit, 30);
    expect(unit.hp).toBeCloseTo(1600);
});

test("Raynor Backwater Marshal doubles total HP including Combat Shield and armor upgrades", () => {
    const marine = upgradedUnit("raynor", "marine", {
        upgrades: { "Combat Shield": true },
        upgradeLevels: { armor: 2 },
        prestiges: { "Backwater Marshal": true },
    });
    expect(marine.hp).toBe(128);
});

test("Crooked Sam has the expected base cooldown", () => {
    const sam = upgradedUnit("tychus", "crookedsam");
    expect(sam.modes[""]!.cooldown).toBe(1.1);
});

test("Crooked Sam ITCE Triggers cooldown is 0.88", () => {
    const sam = upgradedUnit("tychus", "crookedsam", {
        upgrades: { "ITCE Triggers": true },
    });
    expect(sam.modes[""]!.cooldown).toBeCloseTo(0.88);
});

test("Crooked Sam ITCE Triggers with 30 Tri Outlaw Improvement cooldown is 0.77", () => {
    const sam = upgradedUnit("tychus", "crookedsam", {
        upgrades: { "ITCE Triggers": true }, masteries: { "Tri Outlaw Improvement": 30 },
    });
    expect(sam.modes[""]!.cooldown).toBeCloseTo(0.77);
});

test("Fenix Cybros Arbiter has the expected base cooldown", () => {
    const arbiter = upgradedUnit("fenix", "fenixcybrosarbiter");
    expect(arbiter.modes[""]!.cooldown).toBe(1.5);
});

test("Fenix Cybros Arbiter with 30 Suit Attack Speed cooldown is 0.94", () => {
    const arbiter = upgradedUnit("fenix", "fenixcybrosarbiter", {
        masteries: { "Suit Attack Speed": 30 },
    });
    expect(arbiter.modes[""]!.cooldown).toBeCloseTo(0.94);
});

test("Swann P1 adds splash to every Laser Drill level only while selected", () => {
    const modifiers = UnitStats.modifiers("swann", "drakkenlaserdrill");
    const base = UnitStats.getUnit(modifiers)!;
    const component = new UnitStats({
        modifiers, formKey: "1",
        onSetModifiers: changes => Object.assign(modifiers, changes),
    });
    expect(renderedText(component.renderUpgrades())).toContain("P1: Heavy Weapons Specialist");
    expect(modifiers.prestiges["Heavy Weapons Specialist"]).toBe(false);
    component.onCheckPrestige({ target: { value: "Heavy Weapons Specialist", checked: true } } as unknown as Event);
    const upgraded = UnitStats.getUpgradedUnit(base, modifiers);
    expect(Object.keys(upgraded.modes)).toHaveLength(3);
    for (const [id, mode] of Object.entries(upgraded.modes)) {
        expect(mode.aoe).toContain("full damage to ground and air enemies within radius 1.5");
        expect(mode.aoe).toContain("70%");
        expect(mode.damage).toEqual(base.modes[id]!.damage);
        expect(base.modes[id]!.aoe).toBeUndefined();
    }
    component.onCheckPrestige({ target: { value: "Heavy Weapons Specialist", checked: false } } as unknown as Event);
    expect(UnitStats.getUpgradedUnit(base, modifiers)).toEqual(base);
});

test("Rupture changes AoE without changing damage or the base unit", () => {
    for (const unitToken of ["baneling", "banelingspawn"] as const) {
        const modifiers = UnitStats.modifiers("zagara", unitToken);
        const base = UnitStats.getUnit(modifiers)!;
        const baseAoe = base.modes[""]!.aoe;
        modifiers.upgrades["Rupture"] = true;
        modifiers.upgrades["Corrosive Acid"] = true;
        const upgraded = UnitStats.getUpgradedUnit(base, modifiers);
        expect(upgraded.modes[""]!.aoe).toContain("radius 3.3");
        expect(base.modes[""]!.aoe).toBe(baseAoe);

        modifiers.upgrades["Rupture"] = false;
        const withoutRupture = UnitStats.getUpgradedUnit(base, modifiers);
        expect(withoutRupture.modes[""]!.aoe).toBe(baseAoe);
        expect(upgraded.modes[""]!.damage).toEqual(withoutRupture.modes[""]!.damage);
    }
});

test("Medusa Blades adds an AoE description only while enabled", () => {
    expect(upgradedUnit("zagara", "zagara").modes[""]!.aoe).toBeUndefined();
    const zagara = upgradedUnit("zagara", "zagara", { upgrades: { "Medusa Blades": true } });
    expect(zagara.modes[""]!.aoe).toBe(playerUpgrades.find(upgrade => upgrade.name === "Medusa Blades")!.changes.find(change => change.modifier === "aoe")!.value);
});

test("Text replacement respects the selected weapon mode", () => {
    const tank = UnitStats.getUnit(UnitStats.modifiers("swann", "siegetank"))!;
    const before = structuredClone(tank);
    UnitStats.applyUpgrade({
        modifier: "aoe", operation: "replace", value: "Wider splash.", modifiermode: "(Siege Mode)",
    }, tank);
    expect(tank.modes["siege-mode"]!.aoe).toBe("Wider splash.");
    expect(tank.modes["tank-mode"]).toEqual(before.modes["tank-mode"]);
});

function rankSelector(unitToken: Token) {
    const modifiers = UnitStats.modifiers("mengsk", unitToken);
    const component = new UnitStats({
        modifiers, formKey: "1",
        onSetModifiers: changes => Object.assign(modifiers, changes),
    });
    return (rank: number) => {
        component.onCheckUpgradeLevel({
            target: { name: "rank-1", value: String(rank) },
        } as unknown as Event);
        return UnitStats.getUpgradedUnit(UnitStats.getUnit(modifiers)!, modifiers);
    };
}

test("Aegis Guard shrapnel follows the rank selector in both directions", () => {
    const selectRank = rankSelector("aegisguard");
    for (const rank of [0, 1, 2, 3, 1, 0]) {
        const unit = selectRank(rank);
        if (rank >= 2) {
            expect(unit.modes[""]!.aoe).toContain("cone of shrapnel");
        } else {
            expect(unit.modes[""]!.aoe).toBeUndefined();
        }
        const withoutSplash = upgradedUnit("mengsk", "aegisguard", { upgradeLevels: { rank } });
        expect(unit.modes[""]!.damage).toEqual(withoutSplash.modes[""]!.damage);
    }
});

test("Royal Guard splash upgrades only affect the corresponding weapon mode", () => {
    const selectShockRank = rankSelector("shockdivision");
    const shock = selectShockRank(3);
    expect(shock.modes["siege-mode"]!.aoe).toContain("1.75");
    expect(shock.modes["tank-mode"]!.aoe).toBeUndefined();
    expect(selectShockRank(2).modes["siege-mode"]!.aoe).toContain("1.25");

    const selectHammerRank = rankSelector("blackhammer");
    const hammer = selectHammerRank(1);
    expect(hammer.modes["overwatch-mode"]!.aoe).toContain("0.75");
    expect(hammer.modes["walker-mode-air"]!.aoe).toContain("0.5");
    expect(hammer.modes["walker-mode-ground"]!.aoe).toBeUndefined();
    expect(selectHammerRank(3).modes["overwatch-mode"]!.aoe).toContain("0.75");
    expect(selectHammerRank(0).modes["overwatch-mode"]!.aoe).toContain("0.5");
});

test("Air-only splash is not applied to ground weapons", () => {
    const liberator = upgradedUnit("nova", "raidliberator");
    expect(liberator.modes["fighter-mode"]!.aoe).toBeDefined();
    expect(liberator.modes["defender-mode"]!.aoe).toBeUndefined();
    const thor = upgradedUnit("swann", "thor");
    expect(thor.modes["air"]!.aoe).toBeDefined();
    expect(thor.modes["ground"]!.aoe).toBeUndefined();
});

test("AoE upgrades preserve simultaneous damage upgrades", () => {
    const vanguard = upgradedUnit("alarak", "vanguard", {
        upgrades: { "Matter Dispersion": true, "Fusion Mortars": true },
    });
    expect(vanguard.modes[""]!.aoe).toContain("radius 1.8");
    expect(vanguard.modes[""]!.damage!["Armored"]!.damage).toBe(15);
    const liberator = upgradedUnit("stukov", "infestedliberator", {
        upgrades: { "Cloud Dispersal": true, "Viral Contamination": true },
    });
    expect(liberator.modes[""]!.aoe).toContain("cloud form");
    expect(liberator.modes[""]!.hits).toBe(1);
    expect(liberator.modes[""]!.damage![""]!.damage).toBe(20);
});

test("Mutalisk bounce upgrades compose in all four combinations without changing primary damage", () => {
    const base = upgradedUnit("kerrigan", "mutalisk");
    for (const [vicious, severing, count, radius, damage] of [
        [false, false, 2, 3, "5, 3"],
        [true, false, 5, 6, "5, 3, 3, 1, 1"],
        [false, true, 2, 3, "9, 9"],
        [true, true, 5, 6, "9, 9, 9, 9, 9"],
    ] as const) {
        const unit = upgradedUnit("kerrigan", "mutalisk", {
            upgrades: { "Vicious Glave": vicious, "Severing Glave": severing },
        });
        expect(unit.modes[""]!.aoe).toBe(vicious || severing ?
            `Bounces to up to ${count} additional enemies, within radius ${radius} of the previous target. Bounce damage: ${damage}.` :
            base.modes[""]!.aoe);
        expect(unit.modes[""]!.damage).toEqual(base.modes[""]!.damage);
    }
    expect(upgradedUnit("kerrigan", "mutalisk").modes[""]!.aoe).toBe(base.modes[""]!.aoe);
    const upgraded = upgradedUnit("kerrigan", "mutalisk", {
        upgrades: { "Vicious Glave": true, "Severing Glave": true }, upgradeLevels: { weapon: 3 },
    });
    expect(upgraded.modes[""]!.aoe).toContain("Bounce damage: 9.999, 9.333, 9, 9, 9.");
});

test("Attack abilities display AoE even without ordinary weapon stats", () => {
    const modifiers = UnitStats.modifiers("mengsk", "imperialintercessor");
    const unit = UnitStats.getUnit(modifiers)!;
    const mode = unit.modes[""]!;
    expect(mode.damage).toBeUndefined();
    expect(mode.aoe).toContain("Shock Division");
    const component = new UnitStats({ modifiers, formKey: "1", onSetModifiers: () => {} });
    expect(renderedElements(component.renderMode(mode, mode, unit)).some(node =>
        node.type === "span" && node.props.children === "AoE:")).toBe(true);
});

test("Han's Widow Mine displays catalog attack stats and applies its cooldown and range upgrades", () => {
    const modifiers = UnitStats.modifiers('horner', 'widowmine');
    const base = UnitStats.getUnit(modifiers)!;
    const card = new UnitStats({ modifiers, formKey: '1', onSetModifiers: () => {} });
    const render = (unit: typeof base) => renderedText(card.renderMode(unit.modes['']!, base.modes['']!, base));
    const text = render(base);
    expect(text).toContain('Damage: 125');
    expect(text).toContain('Additional damage vs. shields: 35');
    expect(text).toContain('Cooldown: 40');
    expect(text).toContain('Range: 5');
    expect(text).toContain('Ignores armor');
    expect(text).toContain('radius 2.625');
    expect(text).not.toContain('DPS');
    expect(modifiers.upgradeLevels.weapon).toBeUndefined();
    modifiers.upgrades['Executioner Missiles'] = true;
    modifiers.upgrades['Black Market Launchers'] = true;
    const upgraded = render(UnitStats.getUpgradedUnit(base, modifiers));
    expect(upgraded).toContain('Cooldown: 20');
    expect(upgraded).toContain('Range: 7.5');
    expect(upgraded).toContain('Damage: 125');
    expect(upgraded).toContain('Additional damage vs. shields: 35');
    expect(base.modes['']!.cooldown).toBe(40);
    expect(base.modes['']!.range).toBe(5);
});

test("Fire Beam and Cerberus Mine update AoE only for their commanders", () => {
    const colossus = upgradedUnit("karax", "colossus", { upgrades: { "Fire Beam": true } });
    expect(colossus.modes[""]!.aoe).toContain("four burning circles");
    expect(upgradedUnit("karax", "colossus").modes[""]!.aoe).not.toContain("burning");
    expect(upgradedUnit("fenix", "colossus").modes[""]!.aoe).not.toContain("burning");
    const mine = upgradedUnit("raynor", "spidermine", { upgrades: { "Cerberus Mine": true } });
    expect(mine.modes[""]!.aoe).toContain("2.3275");
    expect(upgradedUnit("nova", "spidermine").modes[""]!.aoe).toContain("1.75");
    expect(upgradedUnit("raynor", "spidermine").modes[""]!.aoe).toContain("1.75");
});

test("Abathur bounce upgrades use their own range and armor bonus", () => {
    const unit = upgradedUnit("abathur", "mutalisk", {
        upgrades: { "Vicious Glave": true, "Sundering Glave": true }, upgradeLevels: { weapon: 1 },
    });
    expect(unit.modes[""]!.aoe).toContain("5 additional enemies, within radius 4");
    expect(unit.modes[""]!.aoe).toContain("Bounce damage: 5.333, 3.111, 3, 1, 1.");
    expect(unit.modes[""]!.aoe).toContain("double damage vs. Armored");
    expect(upgradedUnit("abathur", "mutalisk").modes[""]!.aoe).not.toContain("double damage");
});

test("Slicing Glaive changes only Primal Mutalisk air bounce damage", () => {
    const base = upgradedUnit("dehaka", "primalmutalisk");
    const unit = upgradedUnit("dehaka", "primalmutalisk", { upgrades: { "Slicing Glaive": true } });
    expect(unit.modes["air"]!.aoe).toContain("Base bounce damage: 9, 3");
    expect(unit.modes["ground"]!.aoe).toBe(base.modes["ground"]!.aoe);
});
