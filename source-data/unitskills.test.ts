import { expect, test } from 'bun:test';
import { Glob } from 'bun';
import skillsJSON from './unitskills.json';
import type { UnitSkill } from './data-types';

const skills = skillsJSON as UnitSkill[];

function text(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, '');
}

test('Every commander overview skill table row is preserved, including unlock and autocast flags', async () => {
    const remaining = [...skills];
    for await (const path of new Glob('*.php').scan('source-html/commanders')) {
        const commander = path.slice(0, -4);
        const page = await Bun.file(`source-html/commanders/${path}`).text();
        for (const [, table] of page.matchAll(/<table class="[^"]*\b(?:unitSkills|unitAbilities|abilityTable)\b[^"]*">([\s\S]*?)<\/table>/g)) {
            if (/<th>[^<]*Gear<\/th>/.test(table!)) continue;
            for (const [, attributes, row] of table!.matchAll(/<tr([^>]*)>([\s\S]*?)<\/tr>/g)) {
                const cells = [...row!.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(match => match[1]!);
                if (!cells.length) continue;
                const index = remaining.findIndex(skill => skill.commander.toLowerCase() === commander
                    && text(skill.name) === text(cells[1]!) && text(skill.description) === text(cells[2]!)
                    && skill.requiresupgrade === attributes!.includes('unlockable')
                    && text(skill.cooldown ?? '') === text(cells[3] ?? ''));
                expect(index, `${commander}: ${text(cells[1]!)}`).toBeGreaterThanOrEqual(0);
                const [skill] = remaining.splice(index, 1);
                const overviewIcons = [...cells[0]!.matchAll(/src="([^"]+)"/g)].map(match => match[1]);
                // Missing overview icons may be supplied from the game textures.
                if (overviewIcons.length) expect(skill!.icons).toEqual(overviewIcons);
                expect(skill!.requiresupgrade).toBe(attributes!.includes('unlockable'));
                expect(skill!.type).toBe(attributes!.includes('autocast') || /autocast/i.test(cells[2]!) ? 'autocast' : 'active');
                expect(text(skill!.cooldown ?? '')).toBe(text(cells[3] ?? ''));
            }
        }
    }
    // Supplementary wiki/catalog research adds passives and Nikara's two
    // autocast abilities, which are absent from the overview's skill table.
    expect(remaining.length).toBeGreaterThan(0);
    expect(remaining.filter(skill => skill.type !== 'passive')
        .map(skill => [skill.commander, skill.unit, skill.name, skill.type])).toEqual([
            ['Tychus', 'Lt Layna Nikara', 'Super Heal', 'autocast'],
            ['Tychus', 'Lt Layna Nikara', 'XM-77 Matrix Generator', 'autocast'],
        ]);
});

test('Skill identities are unique and all supplied icons exist', async () => {
    const identities = skills.map(skill => JSON.stringify([skill.commander, skill.unit, skill.name, skill.mode, skill.prestige]));
    expect(new Set(identities).size).toBe(skills.length);
    expect(new Set(skills.map(skill => skill.commander)).size).toBe(18);
    for (const icon of new Set(skills.flatMap(skill => skill.icons))) {
        expect(icon.startsWith('/images/')).toBe(true);
        expect(await Bun.file(`html${icon}`).exists(), icon).toBe(true);
    }
});

test('Hero modes, rank requirements, and unspecified costs remain distinct', () => {
    const nova = skills.filter(skill => skill.commander === 'Nova' && skill.unit === 'Nova');
    expect(nova.find(skill => skill.name === 'Snipe')!.mode).toBe('Stealth Mode');
    expect(nova.find(skill => skill.name === 'Penetrating Blast')!.mode).toBe('Assault Mode');
    expect(skills.find(skill => skill.name === 'Kinetic Blast')!.prestige).toBe('Desolate Queen');
    expect(skills.find(skill => skill.name === 'High-Grade Stimpacks')!.rankrequired).toBe(3);
    expect(skills.find(skill => skill.name === 'High-Grade Stimpacks')!.energycost).toBeNull();
    expect(skills.find(skill => skill.commander === 'Artanis' && skill.name === 'Whirlwind')!.energycost).toBe('0');
    expect(skills.find(skill => skill.unit === 'Dehaka' && skill.name === 'Leap')).toBeDefined();
    expect(skills.find(skill => skill.unit === 'Dark Pylon' && skill.name === 'Recall')).toBeDefined();
    expect(skills.find(skill => skill.unit === 'Bile Launcher' && skill.name === 'Bombardment')).toBeDefined();
});

test('Stored charges match the overview descriptions and Super Gary upgrade', () => {
    for (const skill of skills) {
        const stated = skill.description.match(/\b(\d+) charges\b/);
        if (stated) expect(skill.charges).toBe(Number(stated[1]));
    }
    const gary = skills.filter(skill => skill.unit === 'Super Gary');
    for (const name of ['E-Gorb', 'Stetellite Overcharge', 'Semi-Stable Mass Transportation']) {
        expect(gary.find(skill => skill.name === name)!.charges).toBe(2);
    }
    expect(gary.find(skill => skill.name === 'Gary Zone')!.charges).toBeUndefined();
    expect(gary.find(skill => skill.name === 'The Best Oil')!.charges).toBeUndefined();
});
