import { expect, test } from "bun:test";

import { UnitStats } from "./units";
import type { Token } from "./units";

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
