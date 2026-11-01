import { expect, test } from 'bun:test';
import players from '../../source-data/playerunits.json';
import enemies from '../../source-data/amonunits.json';
import commanders from '../../source-data/commandersummaries.json';
import { unitToken } from '../../source-data/unit-token';
import { unitNavigation, unitPageTitle } from './unit-navigation';

test('Lightweight navigation retains every unit link, commander order, and hidden direct links', () => {
    expect(unitNavigation.filter(group => !group.amon).map(group => group.id)).toEqual(commanders.map(commander => commander.commander));
    for (const unit of [...players, ...enemies]) {
        const group = unitNavigation.find(group => group.id === unitToken('commander' in unit ? unit.commander : unit.race))!;
        expect(group.units.find(entry => entry.id === unitToken(unit.name))?.name).toBe(unit.name);
    }
    const horner = unitNavigation.find(group => group.id === 'horner')!;
    expect(horner.units.find(unit => unit.id === 'hangarbay')?.hidden).toBe(true);
    expect(unitPageTitle('horner', 'hangarbay')).toBe('Hangar Bay (Han & Horner) - Units - SC2 Co-op');
    expect(unitPageTitle('tychus', 'cannonball')).toContain('Rob "Cannonball" Boswell');
    expect(unitPageTitle('terran', 'marine')).toBe('Marine (Amon Terran) - Units - SC2 Co-op');
    expect(unitPageTitle('kerrigan')).toBe('Kerrigan - Units - SC2 Co-op');
    expect(unitPageTitle()).toBe('Units - SC2 Co-op');
});

test('The initial Units bundle stays small and loads full data through cachebusted classic scripts', async () => {
    const loader = await Bun.file('html/scripts/units-loader.js').text();
    expect(new TextEncoder().encode(loader).length).toBeLessThan(100_000);
    for (const data of ['playerunits.json', 'amonunits.json', 'playerupgrades.json', 'playertalents.json', 'unitskills.json']) {
        expect(loader).not.toContain(data);
    }
    const manifest = await Bun.file('html/data/cachebusters.json').json();
    expect(loader).toContain(manifest['/scripts/units.js']);
    expect(loader).toContain(manifest['/scripts/tooltips.js']);
    const page = await Bun.file('html/units/index.html').text();
    expect(page).toContain(manifest['/scripts/units-loader.js']);
    expect(page).not.toMatch(/<script[^>]+src="\/scripts\/(?:units|tooltips)\.js/);
});
