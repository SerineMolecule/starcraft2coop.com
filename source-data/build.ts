#!/usr/bin/env bun
import tsj from "ts-json-schema-generator";
import type { AmonUnitList, PlayerUnitList, PlayerUpgradeList, BrutalPlusList, CommanderList, Mission, MutationCycleList, MutationCycleWithScore, MutatorWithStats } from "./data-types";
import { legacyAmonUnits, legacyPlayerUnits, legacyPlayerUpgrades, legacyPlayerTalents } from './unit-data';
import type { PlayerTalentList } from './data-types';
import { buildUnitNavigation } from './unit-navigation';

const files: [`${string}.json`, string][] = [
    ['brutalplus.json', 'BrutalPlusList'],
    ['commandersummaries.json', 'CommanderList'],
    ['mutatorinteractions.json', 'MutatorInteractionList'],
    ['mutators.json', 'MutatorList'],
    ['weeklymutations.json', 'WeeklyMutationList'],
    ['mutationcycle.json', 'MutationCycleList'],
    ['missionnames.json', 'MissionNames'],
    ['amonunits.json', 'AmonUnitList'],
    ['playerunits.json', 'PlayerUnitList'],
    ['unitskills.json', 'UnitSkillList'],
    ['playertalents.json', 'PlayerTalentList'],
    ['playerupgrades.json', 'PlayerUpgradeList'],
    ['patchdata.json', 'PatchList'],
    ['mutatorcommandertips.json', 'MutatorCommanderTipList'],
];

/////////////////////////////////////////////////

console.log(`Generating schemas`);

const generator = tsj.createGenerator({
    path: "./source-data/data-types.ts",
    tsconfig: "./tsconfig.json",
});

for (const [file, type] of files) {
    console.log(`Generating schema for ${file}`);
    Bun.write(`html/data/schemas/${file.slice(0, -5)}.schema.json`, JSON.stringify(generator.createSchema(type), null, 4) + '\n');
}

console.log(`Done`)

/////////////////////////////////////////////////

console.log(`Generating stats`);

const mutationCycle: MutationCycleWithScore[] = await Bun.file('source-data/mutationcycle.json').json();

const brutalPluses: BrutalPlusList = await Bun.file('source-data/brutalplus.json').json();
const reverseBrutalPluses = [...brutalPluses].reverse();
const missionNames: string[] = await Bun.file('source-data/missionnames.json').json();
const mutators: MutatorWithStats[] = await Bun.file('source-data/mutators.json').json();
const missions: Mission[] = [];

const missionData: Record<string, Mission> = {};
const mutatorData: Record<string, MutatorWithStats> = {};

for (const missionName of missionNames) {
    missionData[missionName] = { name: missionName, mutationcount: 0 };
    missions.push(missionData[missionName]);
}
for (const mutator of mutators) {
    mutator.mutationcount = 0;
    mutatorData[mutator.mutatorid] = mutator;
}

for (const mutation of mutationCycle) {
    missionData[mutation.map]!.mutationcount++;
    mutatorData[mutation.mut01]!.mutationcount++;
    if (mutation.mut02) mutatorData[mutation.mut02]!.mutationcount++;
    if (mutation.mut03) mutatorData[mutation.mut03]!.mutationcount++;

    let brutalPoints: number = 0;
    brutalPoints += mutatorData[mutation.mut01]?.abomination || NaN;
    if (mutation.mut02) brutalPoints += mutatorData[mutation.mut02]?.abomination || NaN;
    if (mutation.mut03) brutalPoints += mutatorData[mutation.mut03]?.abomination || NaN;

    mutation.brutalpoints = isNaN(brutalPoints) ? null : brutalPoints;
    mutation.brutalplus = null;
    if (brutalPoints) {
        for (const brutalPlus of brutalPluses) {
            if (brutalPoints < brutalPlus.minpoints) {
                mutation.brutalplus = brutalPlus.difficulty - 1;
                break;
            } else if (brutalPoints <= brutalPlus.maxpoints) {
                mutation.brutalplus = brutalPlus.difficulty;
                break;
            }
        }
        mutation.brutalplus ??= 7;
    }
}

Bun.write(`html/data/missions.json`, JSON.stringify(missions, null, 4) + '\n');
Bun.write(`html/data/mutators.json`, JSON.stringify(mutators, null, 4) + '\n');
Bun.write(`html/data/mutationcycle.json`, JSON.stringify(mutationCycle, null, 4) + '\n');

/////////////////////////////////////////////////

console.log(`Writing to html/data/`);
for (const [file, type] of files) {
    if (file === 'mutators.json' || file === 'missions.json' || file === 'mutationcycle.json') continue;
    const data = await Bun.file(`source-data/${file}`).json();
    Bun.write(`html/data/${file}`, JSON.stringify(data, null, 4) + '\n');
}

console.log(`Writing to html/data/brutalplus/`);
const playerUnits: PlayerUnitList = await Bun.file('source-data/playerunits.json').json();
const amonUnits: AmonUnitList = await Bun.file('source-data/amonunits.json').json();
const playerUpgrades: PlayerUpgradeList = await Bun.file('source-data/playerupgrades.json').json();
const playerTalents: PlayerTalentList = await Bun.file('source-data/playertalents.json').json();
await Bun.write('html/data/legacy/playertalents.json', JSON.stringify(legacyPlayerTalents(playerTalents), null, 4) + '\n');
await Bun.write('html/data/legacy/playerunits.json', JSON.stringify(legacyPlayerUnits(playerUnits, playerUpgrades), null, 4) + '\n');
await Bun.write('html/data/legacy/amonunits.json', JSON.stringify(legacyAmonUnits(amonUnits), null, 4) + '\n');
await Bun.write('html/data/legacy/playerupgrades.json', JSON.stringify(legacyPlayerUpgrades(playerUpgrades, playerUnits), null, 4) + '\n');

for (const brutalPlus of brutalPluses) {
    Bun.write(`html/data/brutalplus/${brutalPlus.difficulty}.json`, JSON.stringify(brutalPlus, null, 4) + '\n');
}

console.log(`Writing to html/data/commandersummaries/`);
const commanders: CommanderList = await Bun.file('source-data/commandersummaries.json').json();
await Bun.write('html/data/unit-navigation.json', JSON.stringify(buildUnitNavigation(commanders, playerUnits, amonUnits)) + '\n');
for (const commander of commanders) {
    Bun.write(`html/data/commandersummaries/${commander.commander}.json`, JSON.stringify(commander, null, 4) + '\n');
}

console.log(`Generating search index`);
await import('./build-search-index');

console.log(`Done`);
