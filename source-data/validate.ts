#!/usr/bin/env bun
import Ajv from 'ajv';
import type { MutatorInteractionList, MutatorList, WeeklyMutationList } from './data-types';

const files: [`${string}.json`, string][] = [
    ['brutalplus.json', 'BrutalPlusList'],
    ['commandersummaries.json', 'CommanderList'],
    ['mutatorinteractions.json', 'MutatorInteractionList'],
    ['mutators.json', 'MutatorList'],
    ['weeklymutations.json', 'WeeklyMutationList'],
    ['mutationcycle.json', 'MutationCycleList'],
    ['missionnames.json', 'MissionNames'],
];

const ajv = new Ajv();
for (const [file, type] of files) {
    const fileContent = await Bun.file(`source-data/${file}`).json();

    const fileSchema = await Bun.file(`source-data/schemas/${file.slice(0, -5)}.schema.json`).json();

    const validateFile = ajv.compile(fileSchema);
    if (!validateFile(fileContent)) {
        console.error(`${file} does not match schema:`);
        console.error(validateFile.errors);
        process.exit(1);
    }
}

// schema validation for mutatorinteractions to make sure id1 < id2
const mutatorInteractions: MutatorInteractionList = await Bun.file('source-data/mutatorinteractions.json').json();
for (const [i, entry] of mutatorInteractions.entries()) {
    if (entry.id1 >= entry.id2) {
        console.error(`mutatorinteractions.json[${i}]: id1 (${entry.id1}) must be strictly less than id2 (${entry.id2})`);
        process.exit(1);
    }
}

// mutators in order
const mutators: MutatorList = await Bun.file('source-data/mutators.json').json();
for (const [i, entry] of mutators.entries()) {
    if (entry.mutatorid !== i + 1) {
        console.error(`mutators.json[${i}]: mutatorid (${entry.mutatorid}) must be equal to ${i + 1}`);
        process.exit(1);
    }
}

// weeklymutations in order
const weeklymutations: WeeklyMutationList = await Bun.file('source-data/weeklymutations.json').json();
for (const [i, entry] of weeklymutations.entries()) {
    if (entry.mutationid !== i + 1) {
        console.error(`weeklymutations.json[${i}]: mutationid (${entry.mutationid}) must be equal to ${i + 1}`);
        process.exit(1);
    }
}

console.log('All validations passed');
