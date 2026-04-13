#!/usr/bin/env bun
import tsj from "ts-json-schema-generator";
import type { BrutalPlusList, CommanderList } from "./data-types";

const files: [`${string}.json`, string][] = [
    ['brutalplus.json', 'BrutalPlusList'],
    ['commandersummaries.json', 'CommanderList'],
    ['mutatorinteractions.json', 'MutatorInteractionList'],
    ['mutators.json', 'MutatorList'],
    ['weeklymutations.json', 'WeeklyMutationList'],
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

console.log(`Writing to html/data/`);
for (const [file, type] of files) {
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
