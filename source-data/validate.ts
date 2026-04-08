#!/usr/bin/env bun
import Ajv from 'ajv';

const files: [`${string}.json`, string][] = [
    ['brutalplus.json', 'BrutalPlusList'],
    ['commandersummaries.json', 'CommanderList'],
    ['mutatorinteractions.json', 'MutatorInteractionList'],
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
const mutatorInteractions = await Bun.file('source-data/mutatorinteractions.json').json();
for (const [i, entry] of mutatorInteractions.entries()) {
    if (entry.id1 >= entry.id2) {
        console.error(`mutatorinteractions.json[${i}]: id1 (${entry.id1}) must be less than id2 (${entry.id2})`);
        process.exit(1);
    }
}

console.log('All validations passed');
