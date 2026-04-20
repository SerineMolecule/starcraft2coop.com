#!/usr/bin/env bun
import tsj from "ts-json-schema-generator";
import type { BrutalPlusList, CommanderList, Mission, MutationCycleList, MutatorWithStats } from "./data-types";

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
];

/////////////////////////////////////////////////

console.log(`Generating schemas`);

const generator = tsj.createGenerator({
    path: "./source-data/data-types.ts",
    tsconfig: "./tsconfig.json",
});

for (const [file, type] of files) {
    console.log(`Generating schema for ${file}`);
    Bun.write(`source-data/schemas/${file.slice(0, -5)}.schema.json`, JSON.stringify(generator.createSchema(type), null, 4) + '\n');
}

console.log(`Done`)

/////////////////////////////////////////////////

console.log(`Generating stats`);

const mutationCycle: MutationCycleList = await Bun.file('source-data/mutationcycle.json').json();

const missionNames: string[] = await Bun.file('source-data/missionnames.json').json();
const mutators: MutatorWithStats[] = await Bun.file('source-data/mutators.json').json();
const missions: Mission[] = [];

const missionData: Record<string, Mission> = {};
const mutatorData: Record<number, MutatorWithStats> = {};

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
}

Bun.write(`html/data/missions.json`, JSON.stringify(missions, null, 4) + '\n');
Bun.write(`html/data/mutators.json`, JSON.stringify(mutators, null, 4) + '\n');

/////////////////////////////////////////////////

console.log(`Writing to html/data/`);
for (const [file, type] of files) {
    if (file === 'mutators.json') continue;
    const data = await Bun.file(`source-data/${file}`).json();
    Bun.write(`html/data/${file}`, JSON.stringify(data, null, 4) + '\n');
}

console.log(`Writing to html/data/brutalplus/`);
const brutalPluses: BrutalPlusList = await Bun.file('source-data/brutalplus.json').json();
for (const brutalPlus of brutalPluses) {
    Bun.write(`html/data/brutalplus/${brutalPlus.difficulty}.json`, JSON.stringify(brutalPlus, null, 4) + '\n');
}

console.log(`Writing to html/data/commandersummaries/`);
const commanders: CommanderList = await Bun.file('source-data/commandersummaries.json').json();
for (const commander of commanders) {
    Bun.write(`html/data/commandersummaries/${commander.commander}.json`, JSON.stringify(commander, null, 4) + '\n');
}

console.log(`Done`);
