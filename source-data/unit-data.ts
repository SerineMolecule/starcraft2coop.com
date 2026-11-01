import type { AmonUnit, PlayerTalent, PlayerUnit, PlayerUpgrade, UnitModeData } from './data-types';

/** Expand shared ownership for consumers that need one record per unit. */
export function perUnitEntries<T extends { units: string[] }>(entries: T[]): (Omit<T, 'units'> & { unit: string })[] {
    return entries.flatMap(({ units, ...entry }) => units.map(unit => ({ ...entry, unit })));
}

/** The old PHP calculator consumes one row per changed field. */
export function legacyPlayerTalents(talents: PlayerTalent[]) {
    return perUnitEntries(talents).flatMap(({ changes, ...talent }) => changes.map(change => ({
        modifierupgrade: null, extra: null, operationtype: null, ...talent, ...change,
    })));
}

/** Whether a mode has an attack, including attacks whose damage is not yet known. */
export function hasAttack(mode: UnitModeData): boolean {
    return mode.damage !== undefined || mode.kind !== undefined || mode.weaponName !== undefined;
}

/** A display/calculator view of an attack or an unarmed form, without attribute rows. */
export function playerUnitViews(unit: PlayerUnit) {
    return Object.entries(unit.modes).map(([id, mode]) => {
        const stats: PlayerUnit = { ...unit };
        for (const key of ['hp', 'shields', 'armor', 'shieldarmor', 'buildtime', 'movementspeed', 'sightrange', 'tags', 'movement', 'targetable'] as const) {
            if (mode[key] !== undefined) Object.assign(stats, { [key]: mode[key] });
        }
        return { id, label: mode.name ?? '', stats, weapon: hasAttack(mode) ? mode : undefined };
    });
}

/** Legacy calculators group by display name, so attacks sharing a form need distinct labels. */
function legacyModeLabel(unit: PlayerUnit, id: string): string {
    const mode = unit.modes[id]!;
    const label = mode.name ?? '';
    const peers = Object.values(unit.modes).filter(other => (other.name ?? '') === label);
    if (peers.length === 1) return label;
    const attack = mode.weaponName && peers.filter(other => other.weaponName === mode.weaponName).length === 1 ? mode.weaponName : id;
    return [label, attack].filter(Boolean).join(': ');
}

/** Expand the canonical format only for the legacy PHP calculator. */
export function legacyPlayerUnits(units: PlayerUnit[], upgrades: PlayerUpgrade[] = []) {
    let rowId = 0;
    // Legacy cards retain their separate upgraded-unit entries.
    units = units.map(unit => {
        const unlocked = new Set(upgrades.filter(upgrade => upgrade.commander === unit.commander && upgrade.units.includes(unit.name))
            .flatMap(upgrade => upgrade.unlocksModes ?? []));
        return { ...unit, modes: Object.fromEntries(Object.entries(unit.modes).filter(([id]) => !unlocked.has(id))) };
    });
    return units.flatMap(unit => playerUnitViews(unit).flatMap(({ id, stats, weapon }) => {
        const label = legacyModeLabel(unit, id);
        const { modes, movement, hideFromUnitList, buildTimeIsAdditional, ...base } = stats;
        const row = {
            ...base,
            shieldbonus: base.shieldbonus ?? null,
            unitid: ++rowId,
            basename: unit.name,
            name: unit.name + (label ? ` (${label})` : ''),
            notes: [unit.notes, unit.modes[id]?.notes].filter(Boolean).join('<br>'),
            tags: stats.tags.join(','),
            atkrange: weapon?.range ?? 0,
            attackspeed: weapon?.cooldown ?? 0,
            attacks: weapon?.hits ?? 0,
            attribute: null as string | null,
            damage: weapon?.damage?.[''].damage ?? 0,
            attackbonus: weapon?.damage?.[''].damagePerUpgrade ?? 0,
            ...(weapon?.aoe ? { aoe: weapon.aoe } : {}),
        };
        return [row, ...Object.entries(weapon?.damage ?? {}).filter(([tag]) => tag !== '').map(([tag, damage]) => ({
            ...row,
            unitid: ++rowId,
            attribute: tag,
            damage: damage.damage,
            attackbonus: damage.damagePerUpgrade,
        }))];
    }));
}

/** Legacy breakpoint and enemy-stat endpoints still expect numeric flags. */
export function legacyAmonUnits(units: AmonUnit[]) {
    return units.map(unit => {
        const { tags, movement, modes, ...base } = unit;
        return {
            ...base,
            light: +tags.includes('Light'),
            armored: +tags.includes('Armored'),
            biological: +tags.includes('Biological'),
            mechanical: +tags.includes('Mechanical'),
            psionic: +tags.includes('Psionic'),
            heroic: +tags.includes('Heroic'),
            massive: +tags.includes('Massive'),
            structure: +tags.includes('Structure'),
            flyer: +(movement === 'Air'),
        };
    });
}

/** Resolve mode/attack keys to the label-based selectors used by old PHP. */
export function legacyPlayerUpgrades(upgrades: PlayerUpgrade[], units: PlayerUnit[]) {
    return perUnitEntries(upgrades).flatMap(({ changes, unlocksModes, cost, researchTime, buildTimeIsAdditional, ...upgrade }) => {
        const unitChanges = changes.filter(change => change.target === 'unit').map(({ target, ...change }) => change);
        // Preserve descriptions for informational and skill-only upgrades in the old UI.
        const rows = unitChanges.length ? unitChanges : [{
            modifier: null, modifiermode: null, modifiertag: null, operation: 'none' as const, value: null,
        }];
        return rows.map(change => {
            const legacy = { modifiermode: null, modifiertag: null, ...upgrade, ...change, ...(change.modifier === 'weaponName' ? { modifier: 'weaponname' } : {}) };
            if (!('weapon' in legacy) || legacy.weapon === undefined) return legacy;
            const unit = units.find(unit => unit.commander === upgrade.commander && unit.name === upgrade.unit);
            const view = unit && playerUnitViews(unit).find(view => view.id === legacy.weapon);
            if (!view?.weapon) throw new Error(`Unknown weapon ${upgrade.commander}/${upgrade.unit}/${legacy.weapon}`);
            const { weapon, ...rest } = legacy;
            const label = legacyModeLabel(unit!, view.id);
            return { ...rest, modifiermode: label ? `(${label})` : 'Weapon' };
        });
    });
}
