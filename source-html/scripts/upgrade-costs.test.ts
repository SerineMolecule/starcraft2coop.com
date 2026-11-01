import { expect, test } from 'bun:test';
import { existsSync } from 'node:fs';
import upgradesJSON from '../../source-data/playerupgrades.json';
import type { PlayerUpgrade } from '../../source-data/data-types';
import { upgradeCosts } from './upgrade-costs';

const upgrades = upgradesJSON as PlayerUpgrade[];
const find = (commander: string, unit: string, name: string) =>
    upgrades.find(upgrade => upgrade.commander === commander && upgrade.units.includes(unit) && upgrade.name === name)!;

test('Upgrade purchase data distinguishes research, instant gear, and free unlocks', () => {
    const shells = find('Raynor', 'Marauder', 'Concussive Shells');
    expect(shells.cost).toEqual({ minerals: 50, gas: 50 });
    expect(shells.researchTime).toBe(60);
    expect(find('Vorazun', 'Stalker', 'Blink').cost).toEqual({ minerals: 100, gas: 100 });
    expect(find('Vorazun', 'Dark Templar', 'Blink').cost).toEqual({ minerals: 150, gas: 150 });
    const gear = find('Tychus', 'Tychus Findlay', 'SureShot Networked Helm');
    expect(gear.cost).toEqual({ minerals: 1200, gas: 400 });
    expect(gear.researchTime).toBeUndefined();
    expect(upgradeCosts(find('Zeratul', 'Zeratul', 'Void Blink'), 'protoss')).toEqual([]);
    expect(upgradeCosts(find('Mengsk', 'Aegis Guard', '2'), 'terran')).toEqual([]);
    expect(upgradeCosts(shells, 'terran').map(cost => [cost.label, cost.value])).toEqual([
        ['Minerals:', 50], ['Gas:', 50], ['Research time:', 60],
    ]);
    for (const race of ['terran', 'protoss', 'zerg']) {
        for (const cost of upgradeCosts(shells, race)) expect(existsSync(`html${cost.icon}`)).toBe(true);
    }
});

test('Every effect sharing an upgrade popup has the same purchase data', () => {
    const metadata = new Map<string, unknown>();
    for (const upgrade of upgrades) {
        const key = `${upgrade.commander}/${upgrade.icon}`;
        const value = { cost: upgrade.cost, researchTime: upgrade.researchTime };
        if (metadata.has(key)) expect(value, key).toEqual(metadata.get(key));
        metadata.set(key, value);
    }
});
