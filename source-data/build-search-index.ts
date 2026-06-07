#!/usr/bin/env bun
import Fuse from 'fuse.js';
import type {
    AmonUnitList,
    CommanderList,
    MissionNames,
    Mutator,
    MutatorList,
    PlayerTalentList,
    PlayerUnitList,
    PlayerUpgradeList,
    SearchDocument,
    SearchIndexData,
    WeeklyMutation,
    WeeklyMutationList,
} from './data-types';

const SEARCH_KEYS = [
    { name: 'title', weight: 10 },
    { name: 'tokens', weight: 4 },
    { name: 'subtitle', weight: 2 },
    { name: 'commander', weight: 2 },
    { name: 'text', weight: 1 },
] as const;

function token(text: string): string {
    if (text === 'Dom. Trooper') return 'dominiontrooper';
    if (text === 'Dom. Assault Trooper') return 'dominionassaulttrooper';
    if (text === 'Dom. Flame Trooper') return 'dominionflametrooper';
    if (text === 'Dom. Rocket Trooper') return 'dominionrockettrooper';
    if (text === 'Tychus Findlay') return 'tychus';
    if (text === 'James Sirius Sykes') return 'sirius';
    if (text === 'Miles Blaze Lewis') return 'blaze';
    if (text === 'Rob Cannonball Boswell') return 'cannonball';
    if (text === 'Lt Layna Nikara') return 'nikara';
    if (text === 'Kev Rattlesnake West') return 'rattlesnake';
    if (text === 'Lock and Load') return 'lockload';
    if (text === 'Part and Parcel') return 'partparcel';

    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function addDocument(documents: SearchDocument[], document: SearchDocument): void {
    documents.push({
        ...document,
        tokens: [...new Set([...(document.tokens || []), token(document.title), token(document.subtitle || '')].filter(Boolean))],
    });
}

function searchIndexJSON(documents: SearchDocument[]): unknown {
    const index = Fuse.createIndex([...SEARCH_KEYS], documents).toJSON();
    return typeof index === 'string' ? JSON.parse(index) : index;
}

function mutationMutatorNames(mutation: WeeklyMutation, mutatorsById: Map<number, Mutator>): string[] {
    const names: string[] = [];
    for (const field of ['mut01', 'mut02', 'mut03', 'mut04', 'mut05', 'mut06', 'mut07', 'mut08', 'mut09', 'mut10'] as const) {
        const id = mutation[field];
        if (id) names.push(mutatorsById.get(id)?.mutatorname || '');
    }
    return names.filter(Boolean);
}

function addCommanders(documents: SearchDocument[], commanders: CommanderList): void {
    for (const commander of commanders) {
        addDocument(documents, {
            type: 'commander',
            title: commander.fullname,
            subtitle: commander.motto,
            path: `commanders/${commander.commander}`,
            text: commander.summary,
            tokens: [commander.commander],
        });
    }
}

function addMutators(documents: SearchDocument[], mutators: MutatorList): void {
    for (const mutator of mutators) {
        addDocument(documents, {
            type: 'mutator',
            title: mutator.mutatorname,
            subtitle: 'Mutator',
            path: `mutators/${token(mutator.mutatorname)}`,
            text: mutator.mutatordescription,
            tokens: [`${mutator.mutatorid}`, mutator.abomination ? `brutal+${mutator.abomination}` : ''],
        });
    }
}

function addMissions(documents: SearchDocument[], missionNames: MissionNames): void {
    for (const mission of missionNames) {
        addDocument(documents, {
            type: 'mission',
            title: mission,
            subtitle: 'Mission',
            path: `missions/${token(mission)}`,
        });
    }
}

function addWeeklyMutations(documents: SearchDocument[], weeklyMutations: WeeklyMutationList, mutators: MutatorList): void {
    const mutatorsById = new Map(mutators.map(mutator => [mutator.mutatorid, mutator]));
    const mutationsByToken = new Map<string, {
        title: string,
        ids: string[],
        releaseDates: string[],
        maps: string[],
        mutators: string[],
    }>();
    for (const mutation of weeklyMutations) {
        const mutationToken = token(mutation.mutation);
        const mutatorNames = mutationMutatorNames(mutation, mutatorsById);
        const merged = mutationsByToken.get(mutationToken) || {
            title: mutation.mutation,
            ids: [],
            releaseDates: [],
            maps: [],
            mutators: [],
        };
        merged.ids.push(`${mutation.mutationid}`);
        merged.releaseDates.push(mutation.releasedate);
        merged.maps.push(mutation.map);
        merged.mutators.push(...mutatorNames);
        mutationsByToken.set(mutationToken, merged);
    }
    for (const [mutationToken, mutation] of mutationsByToken) {
        const maps = [...new Set(mutation.maps)];
        const mutatorNames = [...new Set(mutation.mutators)];
        addDocument(documents, {
            type: 'weeklymutation',
            title: mutation.title,
            subtitle: `Weekly Mutation on ${maps.join(', ')}`,
            path: `weeklymutations/${mutationToken}`,
            text: mutatorNames.join(' '),
            tokens: [...mutation.ids, ...mutation.releaseDates, ...maps, ...mutatorNames],
        });
    }
}

function addUpgrades(documents: SearchDocument[], upgrades: PlayerUpgradeList): void {
    for (const upgrade of upgrades) {
        addDocument(documents, {
            type: 'upgrade',
            title: upgrade.name,
            subtitle: `${upgrade.commander} ${upgrade.unit} upgrade`,
            commander: upgrade.commander,
            path: `upgrades/${token(upgrade.commander)}/${upgrade.icon}`,
            text: upgrade.effect,
            tokens: [upgrade.unit, upgrade.upgradetype, upgrade.modifier, upgrade.modifiermode || '', upgrade.modifiertag || ''],
        });
    }
}

function addTalents(documents: SearchDocument[], talents: PlayerTalentList): void {
    for (const talent of talents) {
        if (talent.talenttype === 'prestige') continue;
        addDocument(documents, {
            type: 'talent',
            title: talent.name,
            subtitle: `${talent.commander} ${talent.unit} ${talent.talenttype}`,
            commander: talent.commander,
            path: `talents/${talent.talentid}-${token(talent.commander)}-${talent.nameid}`,
            text: [talent.modifier, talent.modifierupgrade, talent.extra, talent.target].filter(Boolean).join(' '),
            tokens: [talent.unit, talent.talenttype, talent.operation, talent.operationtype || ''],
        });
    }
}

function addPrestiges(documents: SearchDocument[], commanders: CommanderList): void {
    for (const commander of commanders) {
        const prestiges = [commander.prestige1, commander.prestige2, commander.prestige3];
        prestiges.forEach((prestige, index) => {
            addDocument(documents, {
                type: 'prestige',
                title: `${prestige} (${commander.fullname} P${index + 1})`,
                subtitle: `${commander.fullname} prestige`,
                commander: commander.fullname,
                path: `prestiges/${commander.commander}/${token(prestige)}`,
                tokens: [commander.commander, `p${index + 1}`, `prestige${index + 1}`],
            });
        });
    }
}

function addPlayerUnits(documents: SearchDocument[], playerUnits: PlayerUnitList): void {
    const seen = new Set<string>();
    for (const unit of playerUnits) {
        const key = `${token(unit.commander)}/${token(unit.basename)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        addDocument(documents, {
            type: 'playerunit',
            title: unit.basename,
            subtitle: `${unit.commander} ${unit.tags.includes('Structure') ? 'structure' : 'unit'}`,
            commander: unit.commander,
            path: `units/#${unit.commander}/${unit.basename}`,
            text: unit.notes,
            tokens: [unit.race, unit.tags, unit.combatunit ? 'combat unit' : 'structure'],
        });
    }
}

function addAmonUnits(documents: SearchDocument[], amonUnits: AmonUnitList): void {
    const seen = new Set<string>();
    for (const unit of amonUnits) {
        const key = `${token(unit.race)}/${token(unit.name)}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const tags = [
            unit.light ? 'Light' : '',
            unit.armored ? 'Armored' : '',
            unit.biological ? 'Biological' : '',
            unit.mechanical ? 'Mechanical' : '',
            unit.psionic ? 'Psionic' : '',
            unit.heroic ? 'Heroic' : '',
            unit.massive ? 'Massive' : '',
            unit.structure ? 'Structure' : '',
            unit.flyer ? 'Flyer' : '',
        ].filter(Boolean);
        addDocument(documents, {
            type: 'amonunit',
            title: unit.name,
            subtitle: `Amon ${unit.race} ${unit.structure ? 'structure' : 'unit'}`,
            path: `units/#${unit.race}/${unit.name}`,
            text: tags.join(' '),
            tokens: [`${unit.amonid}`, unit.race, ...tags],
        });
    }
}

const commanders: CommanderList = await Bun.file('source-data/commandersummaries.json').json();
const mutators: MutatorList = await Bun.file('source-data/mutators.json').json();
const missionNames: MissionNames = await Bun.file('source-data/missionnames.json').json();
const weeklyMutations: WeeklyMutationList = await Bun.file('source-data/weeklymutations.json').json();
const playerUpgrades: PlayerUpgradeList = await Bun.file('source-data/playerupgrades.json').json();
const playerTalents: PlayerTalentList = await Bun.file('source-data/playertalents.json').json();
const playerUnits: PlayerUnitList = await Bun.file('source-data/playerunits.json').json();
const amonUnits: AmonUnitList = await Bun.file('source-data/amonunits.json').json();

const documents: SearchDocument[] = [];
addCommanders(documents, commanders);
addMutators(documents, mutators);
addMissions(documents, missionNames);
addWeeklyMutations(documents, weeklyMutations, mutators);
// addUpgrades(documents, playerUpgrades);
// addTalents(documents, playerTalents);
addPrestiges(documents, commanders);
addPlayerUnits(documents, playerUnits);
addAmonUnits(documents, amonUnits);

const searchIndex: SearchIndexData = {
    version: 1,
    keys: [...SEARCH_KEYS],
    documents,
    index: searchIndexJSON(documents),
};

await Bun.write('html/data/search-index.json', JSON.stringify(searchIndex, null, 4) + '\n');
console.log(`Generated html/data/search-index.json (${documents.length} documents)`);
