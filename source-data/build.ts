#!/usr/bin/env bun
import tsj from "ts-json-schema-generator";

const files: [`${string}.json`, string][] = [
    ['brutalplus.json', 'BrutalPlusList'],
    ['commandersummaries.json', 'CommanderList'],
    ['mutatorinteractions.json', 'MutatorInteractionList'],
];

/////////////////////////////////////////////////

console.log(`Generating schemas`);

const generator = tsj.createGenerator({
    path: "./source-data/data-types.ts",
    tsconfig: "./tsconfig.json",
});

for (const [file, type] of files) {
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
/** @type {import('./data-types.ts').BrutalPlus[]} */
const brutalPluses = await Bun.file('source-data/brutalplus.json').json();
for (const brutalPlus of brutalPluses) {
    Bun.write(`html/data/brutalplus/${brutalPlus.difficulty}.json`, JSON.stringify(brutalPlus, null, 4) + '\n');
}

console.log(`Writing to html/data/commandersummaries/`);
/** @type {import('./data-types.ts').Commander[]} */
const commanders = await Bun.file('source-data/commandersummaries.json').json();
for (const commander of commanders) {
    Bun.write(`html/data/commandersummaries/${commander.commander}.json`, JSON.stringify(commander, null, 4) + '\n');
}

console.log(`Writing to html/data/mutatorinteractions/get/`);
/** @type {import('./data-types.ts').MutatorInteraction[]} */
const interactions = await Bun.file('source-data/mutatorinteractions.json').json();
const interactsWith: Record<number, string[]> = {};
for (const interaction of interactions) {
    Bun.write(
        `html/data/mutatorinteractions/get/${interaction.id1}-${interaction.id2}.json`,
        JSON.stringify(interaction.interaction, null, 4) + '\n'
    );
    // TODO: should this be done separately below?
    (interactsWith[interaction.id1] ??= []).push(interaction.id2.toString());
    (interactsWith[interaction.id2] ??= []).push(interaction.id1.toString());
}

console.log(`Writing to html/data/mutatorinteractions/check/`);
for (const [id, interactsWithList] of Object.entries(interactsWith)) {
    Bun.write(`html/data/mutatorinteractions/check/${id}.json`, JSON.stringify(interactsWithList, null, 4) + '\n');
}

console.log(`Done`);
