import type { AmonUnit, Commander, PlayerUnit, UnitNavigationGroup } from './data-types';
import { unitToken } from './unit-token';

export const AMON_UNIT_TYPES = ['Protoss', 'Terran', 'Zerg', 'Hybrid', 'Infested', 'Objective', 'Mutator'];

export function buildUnitNavigation(commanders: Commander[], players: PlayerUnit[], enemies: AmonUnit[]): UnitNavigationGroup[] {
    const groups = [
        ...commanders.map(commander => ({ id: unitToken(commander.commander), name: commander.fullname, amon: false })),
        ...AMON_UNIT_TYPES.map(name => ({ id: unitToken(name), name, amon: true })),
    ];
    return groups.map(group => {
        const units = group.amon ? enemies.filter(unit => unitToken(unit.race) === group.id) :
            players.filter(unit => unitToken(unit.commander) === group.id);
        const usedNames = new Set<string>();
        return { ...group, units: units.filter(unit => {
            if (usedNames.has(unit.name)) return false;
            usedNames.add(unit.name);
            return true;
        }).map(unit => ({
            id: unitToken(unit.name),
            name: unit.name,
            category: unit.tags.includes('Structure') ? 'Structures' as const : unit.tags.includes('Heroic') ? 'Heroes' as const : 'Units' as const,
            ...('hideFromUnitList' in unit && unit.hideFromUnitList ? { hidden: true } : {}),
        })) };
    });
}
