import { expect, test } from "bun:test";
import { isValidElement, toChildArray } from "preact";
import type { ComponentChildren, VNode } from "preact";
import Ajv from "ajv";
import playerUpgrades from "../../source-data/playerupgrades.json";
import upgradeSchema from "../../html/data/schemas/playerupgrades.schema.json";
import type { PlayerUpgrade } from "../../source-data/data-types";

import { UnitStats } from "./units";
import type { Token } from "./units";

function renderedElements(node: ComponentChildren): VNode[] {
    if (Array.isArray(node)) return node.flatMap(renderedElements);
    if (!isValidElement(node)) return [];
    const children = (node.props as { children?: ComponentChildren }).children;
    return [node, ...renderedElements(children)];
}

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
        upgradeLevels?: Partial<Record<"weapon" | "armor" | "shields" | "artifacts" | "rank", number>>,
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
