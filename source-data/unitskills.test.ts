import { expect, test } from 'bun:test';
import { Glob } from 'bun';
import Ajv from 'ajv';
import skillsJSON from './unitskills.json';
import commanders from './commandersummaries.json';
import talentsJSON from './playertalents.json';
import upgradesJSON from './playerupgrades.json';
import talentSchema from '../html/data/schemas/playertalents.schema.json';
import type { PlayerTalent, PlayerUpgrade, UnitSkill } from './data-types';
import { skillDescription, skillModifierValue } from '../source-html/scripts/skill-values';

const skills = skillsJSON as UnitSkill[];

const morphSkills = new Set([
    ["Abathur", "Roach", "Morph to Ravager"],
    ["Abathur", "Mutalisk", "Morph to Guardian"],
    ["Abathur", "Mutalisk", "Morph to Devourer"],
    ["Abathur", "Roach", "Evolve to Brutalisk"],
    ["Abathur", "Ravager", "Evolve to Brutalisk"],
    ["Abathur", "Swarm Host", "Evolve to Brutalisk"],
    ["Abathur", "Swarm Queen", "Evolve to Brutalisk"],
    ["Abathur", "Mutalisk", "Evolve to Leviathan"],
    ["Abathur", "Guardian", "Evolve to Leviathan"],
    ["Abathur", "Devourer", "Evolve to Leviathan"],
    ["Abathur", "Viper", "Evolve to Leviathan"],
    ["Artanis", "High Templar", "Archon Merge"],
    ["Dehaka", "Primal Zergling", "Primal Combat: Ravasaur"],
    ["Dehaka", "Primal Roach", "Primal Combat: Primal Igniter"],
    ["Dehaka", "Primal Roach", "Primal Combat: Primal Guardian"],
    ["Dehaka", "Primal Hydralisk", "Primal Combat: Primal Mutalisk"],
    ["Dehaka", "Primal Hydralisk", "Primal Combat: Impaler"],
    ["Dehaka", "Primal Host", "Primal Combat: Creeper Host"],
    ["Dehaka", "Primal Ultralisk", "Primal Combat: Tyrannozor"],
    ["Kerrigan", "Hydralisk", "Morph to Lurker"],
    ["Kerrigan", "Mutalisk", "Morph to Brood Lord"],
    ["Zagara", "Zergling", "Morph to Baneling"],
    ["Abathur", "Overlord", "Morph to Overseer"],
    ["Kerrigan", "Overlord", "Morph to Overseer"],
    ["Stukov", "Overlord", "Morph to Overseer"],
    ["Zagara", "Overlord", "Morph to Overseer"],
    ["Stetmann", "Mecha Zergling", "Morph to Mecha Baneling"],
    ["Stetmann", "Mecha Hydralisk", "Morph to Mecha Lurker"],
    ["Stetmann", "Mecha Corruptor", "Morph to Mecha Battlecarrier Lord"],
    ["Stetmann", "Mecha Overlord", "Morph to Mecha Overseer"],
    ["Stetmann", "Gary", "Super Gary Transformation Sequence"],
].map(identity => JSON.stringify(identity)));

function text(html: string): string {
    return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, '');
}

function timing(value: string | number | null | undefined): string {
    return typeof value === 'number' ? `${value}s` : text(value ?? '').replace(/seconds?/g, 's');
}

function overviewTiming(skill: UnitSkill): string {
    return (skill.initialCooldown !== undefined ? `Coolup:${timing(skill.initialCooldown)}Cooldown:` : '') + timing(skill.cooldown);
}

function overviewDescription(skill: UnitSkill): string {
    // Catalog range/radius details supplement the original overview in separate paragraphs.
    let description = skillDescription(skill).split('\n\n')[0]!.replace('1 seconds', '1 second');
    // The catalog supplies precise base radii where Nova's overview only says "area".
    if (skill.commander === 'Nova' && skill.name === 'Sabotage Drone') {
        description = description.replace('vs. Structures', 'vs Structure')
            .replace('within radius 4, accounting for unit size', 'in the target area');
    }
    if (skill.commander === 'Nova' && skill.name === 'Tac Nuke Strike') {
        description = description.replace('to enemies within radius 8', 'in a large radius');
    }
    return text(description);
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
                // The overview repeats Kerrigan skills under P3. Their shared
                // entries now carry the base values, with buffs stored as talents.
                const matchesSkill = (skill: UnitSkill) => skill.commander.toLowerCase() === commander
                    && text(skill.name) === text(cells[1]!)
                    && (overviewDescription(skill) === text(cells[2]!) ||
                        (commander === 'kerrigan' && skill.name === 'Immobilization Wave' &&
                            text(skill.description).replace('(27range)', '') === text(cells[2]!)))
                    && skill.requiresupgrade === attributes!.includes('unlockable')
                    && overviewTiming(skill) === timing(cells[3]);
                const index = remaining.findIndex(matchesSkill);
                const skill = index >= 0 ? remaining.splice(index, 1)[0] :
                    commander === 'kerrigan' && ['ImmobilizationWave', 'AssimilationAura'].includes(text(cells[1]!)) ? skills.find(matchesSkill) : undefined;
                expect(skill, `${commander}: ${text(cells[1]!)}`).toBeDefined();
                const overviewIcons = [...cells[0]!.matchAll(/src="([^"]+)"/g)].map(match => match[1]);
                // Missing overview icons may be supplied from the game textures.
                if (overviewIcons.length) expect(skill!.icons).toEqual(overviewIcons);
                expect(skill!.requiresupgrade).toBe(attributes!.includes('unlockable'));
                expect(skill!.type).toBe(attributes!.includes('autocast') || /autocast/i.test(cells[2]!) ? 'autocast' : 'active');
                expect(overviewTiming(skill!)).toBe(timing(cells[3]));
            }
        }
    }
    // Supplementary wiki/catalog research adds passives, Rattlesnake's stimpack,
    // Nikara's autocast abilities, and the Cannon abilities absent from the overview.
    expect(remaining.length).toBeGreaterThan(0);
    expect(remaining.filter(skill => skill.type !== 'passive' && !skill.prestige && !morphSkills.has(JSON.stringify([skill.commander, skill.unit, skill.name])))
        .map(skill => [skill.commander, skill.unit, skill.name, skill.type])).toEqual([
            ['Horner', 'Assault Galleon', 'Install Drone Hangar', 'active'],
            ['Horner', 'Assault Galleon', 'Build Assault Drone', 'autocast'],
            ['Tychus', 'Kev "Rattlesnake" West', 'Secret Stash Stimpack', 'autocast'],
            ['Tychus', 'Lt. Layna Nikara', 'Super Heal', 'autocast'],
            ['Tychus', 'Lt. Layna Nikara', 'XM-77 Matrix Generator', 'autocast'],
            ['Zeratul', 'Tesseract Cannon', 'Shade Projection', 'active'],
            ['Zeratul', 'Tesseract Cannon', 'Shade Barrier', 'autocast'],
        ]);
});

test('Skill prestige conditions reference the owning commander and do not contradict each other', () => {
    for (const skill of skills) {
        const commander = commanders.find(commander => commander.commander === skill.commander.toLowerCase())!;
        const names = [commander.prestige1, commander.prestige2, commander.prestige3].map(name => name.trim());
        const exclusions = skill.excludedPrestiges ?? [];
        for (const name of [...exclusions, ...(skill.prestige ? [skill.prestige] : [])]) {
            expect(names, `${skill.unit}: ${skill.name}`).toContain(name);
        }
        expect(new Set(exclusions).size).toBe(exclusions.length);
        if (skill.prestige) expect(exclusions).not.toContain(skill.prestige);
    }
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
    expect(skills.find(skill => skill.commander === 'Artanis' && skill.name === 'Whirlwind')!.energycost).toBe(0);
    expect(skills.find(skill => skill.unit === 'Dehaka' && skill.name === 'Leap')).toBeDefined();
    expect(skills.find(skill => skill.unit === 'Dark Pylon' && skill.name === 'Recall')).toBeDefined();
    expect(skills.find(skill => skill.unit === 'Bile Launcher' && skill.name === 'Bombardment')).toBeDefined();
});

test('Skill talent fields target existing skills and numeric values for arithmetic', () => {
    for (const talent of talentsJSON as PlayerTalent[]) {
        if (talent.target !== 'skill') continue;
        const targets = skills.filter(skill => skill.commander === talent.commander && skill.unit === talent.unit &&
            skill.name === talent.skill && (talent.skillMode === undefined || skill.mode === talent.skillMode));
        expect(targets.length, `Talent ${talent.talentid}`).toBeGreaterThan(0);
        for (const skill of targets) {
            const value = skillModifierValue(skill, talent.modifier);
            if (talent.operation === 'add' || talent.operation === 'multiply') expect(typeof value).toBe('number');
        }
    }
});

test('All skill descriptions resolve their placeholders', () => {
    for (const skill of skills) expect(() => skillDescription(skill)).not.toThrow();
});

test('Skill upgrade visibility conditions reference upgrades on the same unit', () => {
    for (const skill of skills) {
        expect(!skill.showWithUpgrade || skill.showWithUpgrade !== skill.hideWithUpgrade).toBe(true);
        for (const name of [skill.showWithUpgrade, skill.hideWithUpgrade].filter(Boolean)) {
            expect(upgradesJSON.some(upgrade => upgrade.commander === skill.commander && upgrade.unit === skill.unit && upgrade.name === name), `${skill.unit}/${skill.name}: ${name}`).toBe(true);
        }
    }
});

test('Regular upgrade skill modifiers target existing skills and valid fields', () => {
    for (const upgrade of upgradesJSON as PlayerUpgrade[]) {
        for (const effect of upgrade.skillModifiers ?? []) {
            const targets = skills.filter(skill => skill.commander === upgrade.commander && skill.unit === upgrade.unit &&
                skill.name === effect.skill && (effect.skillMode === undefined || skill.mode === effect.skillMode));
            expect(targets.length, `${upgrade.commander}/${upgrade.unit}/${upgrade.name}/${effect.skill}`).toBeGreaterThan(0);
            for (const target of targets) {
                const value = skillModifierValue(target, effect.modifier);
                if (effect.operation === 'add' || effect.operation === 'multiply') expect(typeof value).toBe('number');
            }
        }
    }
});

test('Skill modifier schema accepts custom keys without accepting arbitrary fields or wrong value types', () => {
    const validate = new Ajv({ allowUnionTypes: true }).compile(talentSchema);
    const talent = (talentsJSON as PlayerTalent[]).find(talent => talent.target === 'skill')!;
    expect(validate([{ ...talent, modifier: 'values.radius', operation: 'multiply', value: 1.5 }])).toBe(true);
    expect(validate([{ ...talent, modifier: 'values.targets', operation: 'replace', value: 'summoned units' }])).toBe(true);
    for (const modifier of ['raduis', 'values.', 'description']) {
        expect(validate([{ ...talent, modifier, operation: 'multiply', value: 1.5 }])).toBe(false);
    }
    expect(validate([{ ...talent, modifier: 'values.radius', operation: 'multiply', value: '1.5' }])).toBe(false);
    expect(validate([{ ...talent, modifier: 'charges', operation: 'replace', value: 'two' }])).toBe(false);
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


test('Morph commands live on their parents and charge only the additional resources', () => {
    const morphs = skills.filter(skill => morphSkills.has(JSON.stringify([skill.commander, skill.unit, skill.name])));
    expect(morphs.length).toBe(morphSkills.size);
    const find = (commander: string, unit: string, name: string) => morphs.find(skill =>
        skill.commander === commander && skill.unit === unit && skill.name === name)!;
    const lurker = find('Kerrigan', 'Hydralisk', 'Morph to Lurker');
    expect(lurker.cost).toEqual({ minerals: 50, gas: 100, supply: 1 });
    expect(lurker.buildTime).toBe(15);
    expect(lurker.cooldown).toBeNull();
    expect(find('Artanis', 'High Templar', 'Archon Merge').cost).toEqual({ minerals: 0, gas: 0 });
    expect(find('Dehaka', 'Primal Roach', 'Primal Combat: Primal Guardian').cost).toEqual({ minerals: 0, gas: 100 });
    expect(find('Stetmann', 'Gary', 'Super Gary Transformation Sequence').excludedPrestiges).toEqual(['Signal Savant']);
    for (const skill of morphs.filter(skill => skill.name.startsWith('Evolve to '))) {
        expect(skill.type).toBe('autocast');
        expect(skill.cost).toEqual({ minerals: 0, gas: 0 });
        expect(skill.excludedPrestiges).toEqual(['Essence Hoarder']);
    }
});
