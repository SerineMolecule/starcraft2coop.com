import { expect, test } from 'bun:test';
import { COMMANDERS, brutalLevel, emptyRanking, moveCommander, placedCommanders } from './tiermaker-state';

test('placing the current commander advances in pool order without mutating the previous board', () => {
    const initial = emptyRanking();
    const next = moveCommander(initial, 'abathur', 'S');
    expect(next.tiers.S).toEqual(['abathur']);
    expect(next.current).toBe('alarak');
    expect(initial.tiers.S).toEqual([]);
});

test('moving and reordering keeps every commander in exactly one location', () => {
    let state = emptyRanking();
    for (const id of COMMANDERS.slice(0, 4)) state = moveCommander(state, id, 'A');
    state = moveCommander(state, 'abathur', 'A', 'mengsk');
    expect(state.tiers.A).toEqual(['alarak', 'abathur', 'mengsk', 'artanis']);
    state = moveCommander(state, 'artanis', 'A', 'alarak');
    expect(state.tiers.A).toEqual(['artanis', 'alarak', 'abathur', 'mengsk']);
    state = moveCommander(state, 'abathur', 'S');
    expect(state.tiers.A).toEqual(['artanis', 'alarak', 'mengsk']);
    expect(state.tiers.S).toEqual(['abathur']);
    expect(state.current).toBe('dehaka');
    expect(placedCommanders(state.tiers).size).toBe(4);
});

test('advancing skips previously ranked commanders and wraps to unranked earlier ones', () => {
    let state = moveCommander(emptyRanking(), 'alarak', 'A');
    state = moveCommander(state, 'abathur', 'B');
    expect(state.current).toBe('mengsk');
    state = moveCommander({ ...state, current: 'zeratul' }, 'zeratul', 'S');
    expect(state.current).toBe('mengsk');
});

test('a complete board has no current commander; returning one to the pool makes it current', () => {
    let state = emptyRanking();
    for (const id of COMMANDERS) state = moveCommander(state, id, 'S');
    expect(state.tiers.S).toHaveLength(18);
    expect(state.current).toBeNull();
    state = moveCommander(state, 'stetmann', null);
    expect(state.current).toBe('stetmann');
    expect(state.tiers.S).not.toContain('stetmann');
    state = moveCommander(state, 'stetmann', 'F');
    expect(state.current).toBeNull();
});

test('brutal difficulty uses the existing mutation score boundaries', () => {
    expect([0, 1, 6, 7, 8, 9, 10, 11, 14, 15, 19, 20].map(brutalLevel))
        .toEqual([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
});
