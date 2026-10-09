export const COMMANDERS = [
    'abathur', 'alarak', 'mengsk', 'artanis', 'dehaka', 'fenix', 'horner', 'karax',
    'kerrigan', 'nova', 'raynor', 'stetmann', 'stukov', 'swann', 'tychus', 'vorazun',
    'zagara', 'zeratul',
] as const;
export type Commander = typeof COMMANDERS[number];
export const TIERS = ['SSS', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F'] as const;
export type Tier = typeof TIERS[number];
export type Board = Record<Tier, Commander[]>;
export interface Ranking { tiers: Board; current: Commander | null }

export function commanderName(id: Commander): string {
    return id === 'horner' ? 'Han & Horner' : id.charAt(0).toUpperCase() + id.slice(1);
}
export function isCommander(id: unknown): id is Commander {
    return typeof id === 'string' && (COMMANDERS as readonly string[]).includes(id);
}
export function emptyRanking(): Ranking {
    return { tiers: { SSS: [], SS: [], S: [], A: [], B: [], C: [], D: [], E: [], F: [] }, current: 'abathur' };
}
export function placedCommanders(tiers: Board): Set<Commander> {
    return new Set(TIERS.flatMap(tier => tiers[tier]));
}

/** `before` identifies an existing portrait, so removing the source cannot shift the insertion index. */
export function moveCommander(state: Ranking, id: Commander, tier: Tier | null, before?: Commander): Ranking {
    if (before === id) return state;
    const tiers = Object.fromEntries(TIERS.map(key => [key, state.tiers[key].filter(c => c !== id)])) as Board;
    if (tier === null) return { tiers, current: id };
    const index = before ? tiers[tier].indexOf(before) : -1;
    tiers[tier].splice(index < 0 ? tiers[tier].length : index, 0, id);
    let current = state.current;
    if (current === id) {
        const placed = placedCommanders(tiers);
        const offset = COMMANDERS.indexOf(id) + 1;
        current = [...COMMANDERS.slice(offset), ...COMMANDERS.slice(0, offset)]
            .find(commander => !placed.has(commander)) ?? null;
    }
    return { tiers, current };
}

export function brutalLevel(total: number): number {
    if (total === 0) return 0;
    return [6, 8, 10, 14, 19].findIndex(limit => total <= limit) + 1 || 6;
}
