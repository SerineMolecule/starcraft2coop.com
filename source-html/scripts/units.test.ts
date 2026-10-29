import { expect, test } from "bun:test";
import { existsSync } from "node:fs";
import playerUnits from "../../source-data/playerunits.json";
import amonUnits from "../../source-data/amonunits.json";
import { isValidElement, toChildArray } from "preact";
import type { ComponentChildren, VNode } from "preact";
import Ajv from "ajv";
import playerUpgrades from "../../source-data/playerupgrades.json";
import upgradeSchema from "../../html/data/schemas/playerupgrades.schema.json";
import type { PlayerUpgrade } from "../../source-data/data-types";

import { UnitStats, applyUnitSettings, readUnitSettings, saveUnitSettings } from "./units";
import type { Token } from "./units";
import { rankUpgrades } from "./unit-ranks";

test("Unit portraits resolve existing assets for every commander unit and available Amon portrait", () => {
    for (const unit of playerUnits) {
        const src = UnitStats.getImageSrc(unit.commander, unit.basename);
        expect(src, `${unit.commander}: ${unit.basename}`).toBeTruthy();
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
    expect(Object.values(havoc.upgrades).every(value => value === false)).toBe(true);
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

test("Temporary upgrade metadata is optional, boolean, and consistent across a control's modifiers", () => {
    const validate = new Ajv().compile(upgradeSchema);
    const upgrade = playerUpgrades[0]!;
    expect(validate([upgrade])).toBe(true);
    expect(validate([{ ...upgrade, temporary: true }])).toBe(true);
    expect(validate([{ ...upgrade, temporary: false }])).toBe(true);
    expect(validate([{ ...upgrade, temporary: 'true' }])).toBe(false);

    const flags = new Map<string, boolean>();
    for (const entry of playerUpgrades as PlayerUpgrade[]) {
        const key = JSON.stringify([entry.commander, entry.unit, entry.name]);
        if (flags.has(key)) expect(entry.temporary ?? false, key).toBe(flags.get(key)!);
        flags.set(key, entry.temporary ?? false);
    }
    for (const name of ['Stimpack', 'Frenzy', 'Avenging Protocol', 'High-Grade Stimpacks']) {
        expect((playerUpgrades as PlayerUpgrade[]).filter(entry => entry.name === name).every(entry => entry.temporary === true)).toBe(true);
    }
    for (const name of ['Combat Shield', 'Charge', 'Maximum Biomass', 'Power Overwhelming']) {
        expect((playerUpgrades as PlayerUpgrade[]).filter(entry => entry.name === name).every(entry => !entry.temporary)).toBe(true);
    }
});
import { skillCooldown, skillCosts, skillDetails, unitSkills } from "./unit-skills";

test("Sky Fury only replaces its armored fighter weapon after reaching Rank 1", () => {
    const modifiers = UnitStats.modifiers('mengsk', 'skyfury');
    const base = UnitStats.getUnit(modifiers)!;
    const rankZero = UnitStats.getUpgradedUnit(base, modifiers);
    expect(rankZero.modes['(Fighter Mode)']).toEqual(base.modes['(Fighter Mode)']);
    expect(rankZero.modes['(Fighter Mode)']!.attributedamage!['']!.damage).toBe(15);
    expect(rankZero.modes['(Fighter Mode)']!.attributedamage!.Armored!.damage).toBe(21);
    modifiers.upgradeLevels.rank = 1;
    modifiers.upgrades['1'] = true;
    const rankOne = UnitStats.getUpgradedUnit(base, modifiers);
    expect(rankOne.modes['(Fighter Mode)']!.attributedamage!.Armored).toBeUndefined();
    expect(rankOne.modes['(Fighter Mode)']!.attributedamage!['']!.damage).toBe(26.25);
    expect(base.modes['(Fighter Mode)']!.attributedamage!['']!.damage).toBe(15);
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
        if (skill.cooldown === '2.5 seconds') expect(skillCooldown(skill)).toBe('2.5');
        if (skill.cooldown === '~ seconds') expect(skillCooldown(skill)).toBe('?');
        if (skill.cooldown?.startsWith('10 seconds if')) expect(skillCooldown(skill)).toBe('10*');
        if (skill.cooldown === '10 seconds/5 missiles') expect(skillCooldown(skill)).toBe('10*');
    }
    const wave = skills.find(skill => skill.name === 'Immobilization Wave')!;
    expect(skillCooldown(wave)).toBe('180');
    expect(skillDetails(wave)).toContain('Coolup: 600 seconds\nCooldown: 180 seconds');
});

test("Skill tooltips distinguish commander, unit, and prestige variants", () => {
    const tunnels = [...unitSkills].filter(([, skill]) => skill.name === 'Deep Tunnel');
    expect(tunnels.length).toBeGreaterThan(1);
    expect(new Set(tunnels.map(([key]) => key)).size).toBe(tunnels.length);
    const auras = [...unitSkills].filter(([, skill]) => skill.commander === 'Kerrigan' && skill.name === 'Assimilation Aura');
    expect(auras).toHaveLength(2);
    expect(auras[0]![0]).not.toBe(auras[1]![0]);
    expect(skillDetails(auras[0]![1])).toContain('Unavailable with Desolate Queen.');
    expect(skillDetails(auras[1]![1])).toContain('Prestige: Desolate Queen');
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
        upgradeid: 9999, commander: "Raynor", unit: "Marine",
        name: "Test informational upgrade", icon: "combatshield", effect: "Description only.",
        modifier: null, modifiermode: null, modifiertag: null,
        operation: "none", value: null, upgradetype: "upgrade",
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

        // A descriptive row sharing a name with a numeric effect must retain its checkbox.
        upgrades.push({ ...informational, name: "Combat Shield" });
        const mixedLabel = renderedElements(component.renderUpgrades()).find(node =>
            node.type === "label" && toChildArray(node.props.children).includes("Combat Shield"))!;
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

test("Dehaka hero level updates damage and estimates HP from minimum Essence", () => {
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
    for (const [input, level, damage, hp] of [['2', 2, 30, 611.25], ['8', 8, 90, 915], ['15', 15, 160, 1781.25], ['0', 1, 20, 600], ['99', 15, 160, 1781.25], ['', 1, 20, 600]] as const) {
        component.onChangeUnitLevel({ target: { name: 'hero', type: 'range', value: input } } as unknown as Event);
        expect(modifiers.upgradeLevels.hero).toBe(level);
        const unit = UnitStats.getUpgradedUnit(base, modifiers);
        expect(unit.modes['']!.attributedamage!['']!.damage).toBe(damage);
        expect(unit.hp).toBe(hp);
    }
    expect(base.modes['']!.attributedamage!['']!.damage).toBe(20);
    expect(base.hp).toBe(600);
    expect(UnitStats.modifiers('dehaka', 'primalzergling').upgradeLevels).not.toHaveProperty('hero');
});

test("Dehaka mastery and P1 compose with armor upgrades and clamp hero level without hiding skills", () => {
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
    expect(p1.modes['']!.attributedamage!['']!.damage).toBe(120);
    expect(p1.modes['']!.attackspeed).toBeCloseTo(2 / 1.3);
    expect(skillNames()).toContain('Scorching Breath');
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
    expect(normal.modes['']!.attributedamage!['']!.damage).toBe(160);
    expect(normal.modes['']!.attackspeed).toBeCloseTo(2 / 1.3);
    expect(base.armor).toBe(1);
    expect(base.modes['']!.attackspeed).toBe(2);
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
    expect(base.modes["(Fighter Mode)"]!.aoe).toBeUndefined();
    expect(upgraded.modes["(Fighter Mode)"]!.aoe).toContain("splash damage");
    expect(upgraded.modes["(Assault Mode)"]).toEqual(base.modes["(Assault Mode)"]);
});

test("Abathur Mutalisk Sundering Glave doubles armored damage", () => {
    const mutalisk = upgradedUnit("abathur", "mutalisk", {
        upgrades: { "Sundering Glave": true },
    });
    expect(mutalisk.modes[""]!.attributedamage![""]!.damage).toBe(9);
    expect(mutalisk.modes[""]!.attributedamage!["Armored"]!.damage).toBe(18);
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
        expect(unit.modes['']!.attackspeed).toBeCloseTo(speed);
    }
    const armored = upgradedUnit('abathur', 'roach', { upgradeLevels: { biomass: 50, armor: 3 } });
    expect(armored.armor).toBeCloseTo(6.5);
    expect(upgradedUnit('abathur', 'locust', { upgradeLevels: { biomass: 50 } }).hp).toBeCloseTo(162.5);
    expect(upgradedUnit('abathur', 'swarmhost', { upgradeLevels: { biomass: 50 } }).modes['']!.attackspeed).toBe(10);
});

test("Biomass replaces its checkbox and clamps when changing prestige", () => {
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
    component.onChangeUnitLevel({ target: { name: 'biomass', type: 'range', value: '200' } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(200);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: true } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(125);
    component.onCheckPrestige({ target: { value: 'Essence Hoarder', checked: false } } as unknown as Event);
    expect(modifiers.upgradeLevels.biomass).toBe(100);
    expect(UnitStats.modifiers('abathur', 'brutalisk').upgradeLevels).not.toHaveProperty('biomass');
});

test("HP percentage bonuses stack on base HP after other HP changes", () => {
    const unit = UnitStats.getUnit(UnitStats.modifiers("tychus", "blaze"))!;
    UnitStats.applyUpgrade({ modifier: "HP", operation: "add", value: 200 }, unit);
    UnitStats.applyUpgrade({ modifier: "HP", operation: "multiply", value: 1.25 }, unit);
    expect(unit.hp).toBe(1450);

    UnitStats.applyUpgrade({
        modifier: "HP", operation: "multiply", value: 0.005, operationtype: "increase", extra: null,
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
    expect(sam.modes[""]!.attackspeed).toBe(1.1);
});

test("Crooked Sam ITCE Triggers cooldown is 0.88", () => {
    const sam = upgradedUnit("tychus", "crookedsam", {
        upgrades: { "ITCE Triggers": true },
    });
    expect(sam.modes[""]!.attackspeed).toBeCloseTo(0.88);
});

test("Crooked Sam ITCE Triggers with 30 Tri Outlaw Improvement cooldown is 0.77", () => {
    const sam = upgradedUnit("tychus", "crookedsam", {
        upgrades: { "ITCE Triggers": true }, masteries: { "Tri Outlaw Improvement": 30 },
    });
    expect(sam.modes[""]!.attackspeed).toBeCloseTo(0.77);
});

test("Fenix Cybros Arbiter has the expected base cooldown", () => {
    const arbiter = upgradedUnit("fenix", "fenixcybrosarbiter");
    expect(arbiter.modes[""]!.attackspeed).toBe(1.5);
});

test("Fenix Cybros Arbiter with 30 Suit Attack Speed cooldown is 0.94", () => {
    const arbiter = upgradedUnit("fenix", "fenixcybrosarbiter", {
        masteries: { "Suit Attack Speed": 30 },
    });
    expect(arbiter.modes[""]!.attackspeed).toBeCloseTo(0.94);
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
        expect(upgraded.modes[""]!.attributedamage).toEqual(withoutRupture.modes[""]!.attributedamage);
    }
});

test("Medusa Blades adds an AoE description only while enabled", () => {
    expect(upgradedUnit("zagara", "zagara").modes[""]!.aoe).toBeUndefined();
    const zagara = upgradedUnit("zagara", "zagara", { upgrades: { "Medusa Blades": true } });
    expect(zagara.modes[""]!.aoe).toBe(playerUpgrades.find(upgrade => upgrade.name === "Medusa Blades")!.value);
});

test("Text replacement respects the selected weapon mode", () => {
    const tank = UnitStats.getUnit(UnitStats.modifiers("swann", "siegetank"))!;
    const before = structuredClone(tank);
    UnitStats.applyUpgrade({
        modifier: "aoe", operation: "replace", value: "Wider splash.", modifiermode: "(Siege Mode)",
    }, tank);
    expect(tank.modes["(Siege Mode)"]!.aoe).toBe("Wider splash.");
    expect(tank.modes["(Tank Mode)"]).toEqual(before.modes["(Tank Mode)"]);
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
        expect(unit.modes[""]!.attributedamage).toEqual(withoutSplash.modes[""]!.attributedamage);
    }
});

test("Royal Guard splash upgrades only affect the corresponding weapon mode", () => {
    const selectShockRank = rankSelector("shockdivision");
    const shock = selectShockRank(3);
    expect(shock.modes["(Siege Mode)"]!.aoe).toContain("1.75");
    expect(shock.modes["(Tank Mode)"]!.aoe).toBeUndefined();
    expect(selectShockRank(2).modes["(Siege Mode)"]!.aoe).toContain("1.25");

    const selectHammerRank = rankSelector("blackhammer");
    const hammer = selectHammerRank(1);
    expect(hammer.modes["(Overwatch Mode)"]!.aoe).toContain("0.75");
    expect(hammer.modes["(Walker Mode Air)"]!.aoe).toContain("0.5");
    expect(hammer.modes["(Walker Mode Ground)"]!.aoe).toBeUndefined();
    expect(selectHammerRank(3).modes["(Overwatch Mode)"]!.aoe).toContain("0.75");
    expect(selectHammerRank(0).modes["(Overwatch Mode)"]!.aoe).toContain("0.5");
});

test("Air-only splash is not applied to ground weapons", () => {
    const liberator = upgradedUnit("nova", "raidliberator");
    expect(liberator.modes["(Fighter Mode)"]!.aoe).toBeDefined();
    expect(liberator.modes["(Defender Mode)"]!.aoe).toBeUndefined();
    const thor = upgradedUnit("swann", "thor");
    expect(thor.modes["(Air)"]!.aoe).toBeDefined();
    expect(thor.modes["(Ground)"]!.aoe).toBeUndefined();
});

test("AoE upgrades preserve simultaneous damage upgrades", () => {
    const vanguard = upgradedUnit("alarak", "vanguard", {
        upgrades: { "Matter Dispersion": true, "Fusion Mortars": true },
    });
    expect(vanguard.modes[""]!.aoe).toContain("radius 1.8");
    expect(vanguard.modes[""]!.attributedamage!["Armored"]!.damage).toBe(15);
    const liberator = upgradedUnit("stukov", "infestedliberator", {
        upgrades: { "Cloud Dispersal": true, "Viral Contamination": true },
    });
    expect(liberator.modes[""]!.aoe).toContain("cloud form");
    expect(liberator.modes[""]!.attacks).toBe(1);
    expect(liberator.modes[""]!.attributedamage![""]!.damage).toBe(20);
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
        expect(unit.modes[""]!.attributedamage).toEqual(base.modes[""]!.attributedamage);
    }
    expect(upgradedUnit("kerrigan", "mutalisk").modes[""]!.aoe).toBe(base.modes[""]!.aoe);
    const upgraded = upgradedUnit("kerrigan", "mutalisk", {
        upgrades: { "Vicious Glave": true, "Severing Glave": true }, upgradeLevels: { weapon: 3 },
    });
    expect(upgraded.modes[""]!.aoe).toContain("Bounce damage: 9.999, 9.333, 9, 9, 9.");
});

test("Attack abilities display AoE even without ordinary weapon stats", () => {
    const modifiers = UnitStats.modifiers("horner", "widowmine");
    const unit = UnitStats.getUnit(modifiers)!;
    const mode = unit.modes[""]!;
    expect(mode.attributedamage).toBeUndefined();
    expect(mode.aoe).toContain("radius 2.625");
    const component = new UnitStats({ modifiers, formKey: "1", onSetModifiers: () => {} });
    expect(renderedElements(component.renderMode(mode, mode, unit)).some(node =>
        node.type === "span" && node.props.children === "AoE:")).toBe(true);
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
    expect(unit.modes["(Air)"]!.aoe).toContain("Base bounce damage: 9, 3");
    expect(unit.modes["(Ground)"]!.aoe).toBe(base.modes["(Ground)"]!.aoe);
});
