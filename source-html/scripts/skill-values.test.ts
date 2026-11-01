import { perUnitEntries } from "../../source-data/unit-data";
import { expect, test } from "bun:test";
import type { UnitSkill } from "../../source-data/data-types";
import type { PlayerUpgrade } from "../../source-data/data-types";
import upgradesJSON from "../../source-data/playerupgrades.json";
import { applySkillModification, resolveSkill } from "./skill-modifiers";
import { skillDescription, skillDescriptionParts } from "./skill-values";
import { skillFromTooltip, skillKey, skillTooltipValues, unitSkills } from "./unit-skills";

const drone = [...unitSkills.values()].find(skill => skill.commander === 'Nova' && skill.name === 'Sabotage Drone')!;

test('Zeratul Blink gains a charge per artifact, respects P3, and combines with Void Blink', () => {
    const blink = [...unitSkills.values()].find(skill => skill.commander === 'Zeratul' && skill.unit === 'Zeratul' && skill.name === 'Blink')!;
    for (const herald of [false, true]) {
        for (const artifacts of [0, 1, 2, 3]) {
            const result = resolveSkill(blink, { masteries: {}, prestiges: { 'Herald of the Void': herald },
                upgradeLevels: { artifacts }, upgrades: { 'Void Blink': true } });
            expect(result.charges).toBe(1 + Math.min(artifacts, herald ? 2 : 3));
            expect(result.cooldown).toBe(4);
            expect(result.modifiedFields!.includes('charges')).toBe(artifacts > 0);
            expect(skillFromTooltip(skillKey(blink), skillTooltipValues(blink, result))).toEqual(result);
        }
    }
    expect(blink.charges).toBe(1);
    expect(blink.cooldown).toBe(8);
});

test('Herald of the Void scales Shadow Cleave with fragments and adds its tornado', () => {
    const cleave = [...unitSkills.values()].find(skill => skill.commander === 'Zeratul' && skill.name === 'Shadow Cleave')!;
    for (const artifacts of [0, 1, 2, 3]) {
        const result = resolveSkill(cleave, { masteries: {}, prestiges: { 'Herald of the Void': true }, upgradeLevels: { artifacts } });
        expect(result.cooldown).toBe(12 - 5 * Math.min(artifacts, 2));
        expect(result.description).toContain(`Deals ${100 + 10 * Math.min(artifacts, 2)} damage`);
        expect(result.description).toContain('Spawns a tornado');
        expect(result.description).toContain('movement and attack speed by 30%');
        expect(result.descriptionParts!.filter(part => part.modified).map(part => part.text).join('')).not.toContain('Deals');
        expect(skillFromTooltip(skillKey(cleave), skillTooltipValues(cleave, result))).toEqual(result);
    }
    const ordinary = resolveSkill(cleave, { masteries: {}, prestiges: {}, upgradeLevels: { artifacts: 3 } });
    expect(ordinary.cooldown).toBe(12);
    expect(ordinary.description).toBe('Deals 130 damage to nearby enemies.');
    expect(cleave.cooldown).toBe(12);
    expect(cleave.values!.damage).toBe(100);
});

test('Custom values compose before substitution without changing base skills or other cards', () => {
    const skill: UnitSkill = { ...drone, values: { ...drone.values } };
    applySkillModification(skill, { modifier: 'values.radius', operation: 'add', value: 2 });
    applySkillModification(skill, { modifier: 'values.radius', operation: 'multiply', value: 1.5 });
    expect(skillDescription(skill)).toContain('radius 9');
    expect(skillDescription(drone)).toContain('radius 4');

    const upgraded = resolveSkill(drone, { masteries: {}, prestiges: { 'Infiltration Specialist': true } });
    const ordinary = resolveSkill(drone, { masteries: {}, prestiges: {} });
    expect(upgraded.description).toContain('radius 6');
    expect(upgraded.values!.radius).toBe(6);
    expect(ordinary.description).toContain('radius 4');
    expect(drone.description).toContain('{radius}');
    expect(drone.values!.radius).toBe(4);
    expect(skillFromTooltip(skillKey(drone), skillTooltipValues(drone, upgraded))).toEqual(upgraded);
    expect(skillFromTooltip(skillKey(drone))).toEqual(ordinary);
});

test('Custom values reject unknown placeholders and modifier keys, including inherited keys', () => {
    for (const name of ['missing', 'toString', '__proto__']) {
        const skill = { ...drone, description: `{${name}}`, values: { radius: 4 } };
        expect(() => skillDescription(skill)).toThrow('Unknown skill value');
        expect(() => applySkillModification(skill, { modifier: `values.${name}`, operation: 'set', value: 5 }))
            .toThrow('Unknown skill value');
        expect(() => applySkillModification(skill, { modifier: `values.${name}`, operation: 'replace', value: 'text' }))
            .toThrow('Unknown skill value');
    }
    expect(() => skillDescription({ ...drone, values: undefined })).toThrow('Unknown skill value');
});

test('Custom numeric values reject arithmetic on strings but allow explicit replacement and set', () => {
    const skill = { ...drone, values: { radius: '4' } } as UnitSkill;
    for (const operation of ['add', 'multiply'] as const) {
        expect(() => applySkillModification(skill, { modifier: 'values.radius', operation, value: 2 }))
            .toThrow('expected a number, got "4"');
    }
    applySkillModification(skill, { modifier: 'values.radius', operation: 'set', value: 4 });
    applySkillModification(skill, { modifier: 'values.radius', operation: 'multiply', value: 1.5 });
    expect(skill.values!.radius).toBe(6);
    applySkillModification(skill, { modifier: 'values.radius', operation: 'replace', value: 'unlimited' });
    expect(skill.values!.radius).toBe('unlimited');
});

test('Text substitutions are literal and repeated placeholders share a value', () => {
    const skill = { ...drone, description: '{targets}; {targets}; {amount}', values: { targets: '{literal} $&', amount: 20 / 3 } };
    expect(skillDescription(skill)).toBe('{literal} $&; {literal} $&; 6.67');
    expect(skill.values.amount).toBe(20 / 3);
    const frenzy = [...unitSkills.values()].find(skill => skill.commander === 'Zagara' && skill.name === 'Mass Frenzy')!;
    expect(resolveSkill(frenzy, { masteries: {}, prestiges: { 'Apex Predator': true } }).description)
        .toBe('Grants Zagara and her summoned units 25% attack speed and 25% movement speed for 15 seconds.');
    expect(skillDescription(frenzy)).toContain('all friendly units on the map');
});

function researched(commander: string, unit: string, name: string, upgrades: string[], prestiges: string[] = []) {
    const base = [...unitSkills.values()].find(skill => skill.commander === commander && skill.unit === unit && skill.name === name)!;
    return resolveSkill(base, { masteries: {}, upgrades: Object.fromEntries(upgrades.map(name => [name, true])),
        prestiges: Object.fromEntries(prestiges.map(name => [name, true])) });
}

test('Zeratul artifact choices modify projection, barriers, and Blink recharge', () => {
    for (const unit of ['Tesseract Cannon', 'Tesseract Monolith']) {
        expect(researched('Zeratul', unit, 'Shade Projection', ['Tesseract Matrix']).cooldown).toBe(90);
        const barrier = researched('Zeratul', unit, 'Shade Barrier', ['Tesseract Matrix']);
        expect(barrier.description).toContain('200 damage');
        expect(barrier.descriptionParts!.filter(part => part.modified).map(part => part.text)).toEqual(['200']);
        expect(barrier.cooldown).toBe(60);
        expect(researched('Zeratul', unit, 'Shade Barrier', []).description).toContain('100 damage');
    }
    for (const [unit, skill] of [['Zeratul', 'Blink'], ['Void Templar', 'Blink'], ["Xel'Naga Ambusher", 'Predictive Blink']]) {
        expect(researched('Zeratul', unit!, skill!, []).cooldown).toBe(8);
        expect(researched('Zeratul', unit!, skill!, ['Void Blink']).cooldown).toBe(4);
    }
    const blink = researched('Zeratul', "Xel'Naga Ambusher", 'Predictive Blink', ['Phase Battery', 'Void Blink']);
    expect(blink.cooldown).toBe(4);
    expect(blink.charges).toBe(3);
    expect(researched('Zeratul', "Xel'Naga Ambusher", 'Predictive Blink', ['Phase Battery']).cooldown).toBe(8);
});

test('Valorous Inspirator applies each combat ability bonus without changing unrelated fields', () => {
    const prestige = ['Valorous Inspirator'];
    expect(researched('Artanis', 'Zealot', 'Charge', [], prestige).description).toContain('Charge speed is doubled');
    expect(researched('Artanis', 'Zealot', 'Whirlwind', [], prestige).values!.damage).toBe(20);
    for (const unit of ['High Templar', 'Archon']) {
        expect(researched('Artanis', unit, 'Feedback', [], prestige).values!.damagePerEnergy).toBe(2);
        const storm = researched('Artanis', unit, 'Psionic Storm', [], prestige);
        expect(storm.values!.damage).toBe(160);
        expect(storm.values!.radius).toBe(1.5);
        expect(storm.values!.range).toBe(9);
        expect(storm.energycost).toBe(75);
        expect(storm.cooldown).toBe(2);
        expect(storm.description).not.toContain('Restores');
        const upgraded = researched('Artanis', unit, 'Psionic Storm', ['Plasma Surge'], prestige);
        expect(upgraded.description).toContain('160 damage');
        expect(upgraded.description).toContain('Restores 100 shields');
        expect(upgraded.values!.radius).toBe(2.3);
        expect(upgraded.values!.range).toBe(11);
        const ordinary = researched('Artanis', unit, 'Psionic Storm', ['Plasma Surge']);
        expect(ordinary.description).toContain('80 damage');
        expect(ordinary.description).toContain('Restores 50 shields');
    }
    expect(researched('Artanis', 'Immortal', 'Barrier', [], prestige).values!.absorption).toBe(200);
    expect(researched('Artanis', 'Immortal', 'Barrier', ['Improved Barrier'], prestige).values!.absorption).toBe(400);
    expect(researched('Artanis', 'Reaver', 'Create Scarab', [], prestige).cooldown).toBe(4);
    expect(researched('Artanis', 'Phoenix', 'Graviton Beam', [], prestige).cooldown).toBe(15);
    expect(researched('Artanis', 'Tempest', 'Disintegration', [], prestige).values!.damage).toBe(1000);
});

test('Artanis cooldown mastery stacks multiplicatively with Valorous Inspirator', () => {
    for (const [unit, name, base, prestigeFactor] of [
        ['Zealot', 'Charge', 10, 1], ['Zealot', 'Whirlwind', 10, 1],
        ['Immortal', 'Barrier', 60, 1], ['Reaver', 'Create Scarab', 8, 0.5],
        ['Phoenix', 'Graviton Beam', 30, 0.5], ['Tempest', 'Disintegration', 90, 1],
    ] as const) {
        const skill = [...unitSkills.values()].find(skill => skill.commander === 'Artanis' && skill.unit === unit && skill.name === name)!;
        for (const points of [0, 15, 30]) {
            const result = resolveSkill(skill, { masteries: { 'Energy Regeneration and Cooldown Reduction': points }, prestiges: { 'Valorous Inspirator': true } });
            expect(result.cooldown).toBeCloseTo(base * prestigeFactor * (1 - points * 0.015));
            expect(skillFromTooltip(skillKey(skill), skillTooltipValues(skill, result))).toEqual(result);
        }
        expect(skill.cooldown).toBe(base);
    }
});

test('Plasma Surge highlights its changed values and added healing without coloring the original description', () => {
    for (const unit of ['High Templar', 'Archon']) {
        for (const prestiges of [[], ['Valorous Inspirator']]) {
            const result = researched('Artanis', unit, 'Psionic Storm', ['Plasma Surge'], prestiges);
            const gold = result.descriptionParts!.filter(part => part.modified).map(part => part.text).join('');
            expect(gold).not.toContain('Creates a storm');
            expect(gold).not.toContain('Does not damage friendly units');
            expect(gold).not.toContain('Cast range:');
            expect(gold).toContain('2.3');
            expect(gold).toContain('11');
            expect(gold).toContain(`Restores ${prestiges.length ? 100 : 50} shields`);
            expect(gold.includes('160')).toBe(!!prestiges.length);
            expect(result.descriptionParts!.map(part => part.text).join('')).toBe(result.description);
        }
    }
});

test('Description replacement preserves unchanged suffixes and detects changed placeholder names', () => {
    const base = { ...drone, description: 'Deals {damage} damage.', values: { damage: 10, other: 10 } };
    expect(skillDescriptionParts({ ...base, description: 'Inflicts {damage} damage.' }, base))
        .toEqual([{ text: 'Inflict', modified: true }, { text: 's 10 damage.', modified: false }]);
    const renamed = skillDescriptionParts({ ...base, description: 'Deals {other} damage.' }, base);
    expect(renamed).toEqual([{ text: 'Deals ', modified: false }, { text: '10', modified: true }, { text: ' damage.', modified: false }]);
});

test('Research and gear combine independent numeric and text effects and highlight only changed values', () => {
    const pulse = researched('Tychus', 'Nux', 'Ultrasonic Pulse', ['T4 Cloudburst Shells', 'Ultrasonic Boosters', 'Crystalline Amplifiers']);
    expect(pulse.values).toMatchObject({ damage: 30, radius: 3, duration: 12 });
    expect(pulse.descriptionParts!.filter(part => part.modified).map(part => part.text)).toEqual(['12', '30', '3']);
    const heal = researched('Tychus', 'Lt. Layna Nikara', 'Super Heal', ['Procyon Serum', 'Procyon Twin Heal Beam Gauntlet']);
    expect(heal.description).toBe('Restores 60 life per second to a friendly biological or mechanical unit. Can heal two targets at a time.');
    expect(heal.descriptionParts!.filter(part => part.modified).map(part => part.text)).toEqual(['60', 'two targets']);
    const bile = researched('Abathur', 'Ravager', 'Corrosive Bile', ['Bloated Bile Ducts', 'Potent Bile']);
    expect(bile.values).toMatchObject({ damage: 100, radius: 1.5 });
    const barrier = researched('Zeratul', "Xel'Naga Enforcer", 'Barrier', ['Eternity Barrier']);
    expect(barrier.description).toContain('400 damage');
    expect(barrier.description).toContain('Fully repairs hull damage');
});

test('Research works with prestige changes and preserves initial cooldowns', () => {
    const aura = researched('Kerrigan', 'Kerrigan', 'Assimilation Aura', ['Ability Efficiency'], ['Desolate Queen']);
    expect(aura.cooldown).toBe(96);
    expect(aura.description).toContain('twice the usual resources');
    expect(aura.modifiedFields).toContain('cooldown');
    const wave = researched('Kerrigan', 'Kerrigan', 'Immobilization Wave', ['Ability Efficiency']);
    expect(wave.cooldown).toBe(144);
    expect(wave.initialCooldown).toBe(600);
    const grip = researched('Kerrigan', 'Kerrigan', 'Crushing Grip', ['Ability Efficiency'], ['Desolate Queen']);
    expect(grip.energycost).toBe(60);
    const drone = researched('Nova', 'Raven Type-II', 'Deploy Bio-Mechanical Repair Drone', ['Covert Triage', 'Enhanced Manufacturing']);
    expect(drone.charges).toBe(3);
    expect(drone.values!.healing).toBe(17.5);
    expect(drone.description).toContain('Cloaks units');
});

test('Every regular skill upgrade resolves alone and combined without mutating source data', () => {
    const source = JSON.stringify([...unitSkills.values()]);
    for (const upgrade of perUnitEntries(upgradesJSON as PlayerUpgrade[])) {
        for (const effect of upgrade.changes) {
            if (effect.target !== 'skill') continue;
            const one = researched(upgrade.commander, upgrade.unit, effect.skill, [upgrade.name]);
            expect(one.descriptionParts!.some(part => part.modified) || one.modifiedFields!.length > 0, `${upgrade.commander}/${upgrade.name}`).toBe(true);
            const base = [...unitSkills.values()].find(skill => skill.commander === upgrade.commander && skill.unit === upgrade.unit && skill.name === effect.skill)!;
            expect(skillFromTooltip(skillKey(base), skillTooltipValues(base, one))).toEqual(one);
        }
    }
    for (const skill of unitSkills.values()) {
        const upgrades = upgradesJSON.filter(upgrade => upgrade.commander === skill.commander && upgrade.units.includes(skill.unit)).map(upgrade => upgrade.name);
        expect(() => researched(skill.commander, skill.unit, skill.name, upgrades)).not.toThrow();
    }
    expect(JSON.stringify([...unitSkills.values()])).toBe(source);
});
