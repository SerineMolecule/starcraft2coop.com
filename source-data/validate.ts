#!/usr/bin/env bun
import Ajv from 'ajv';
import type {
    MutationCycleList,
    MutatorCommanderTipList,
    MutatorId,
    MutatorInteractionList,
    MutatorList,
    PlayerUnitList,
    WeeklyMutationList,
} from './data-types';

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
    ['playertalents.json', 'PlayerTalentList'],
    ['playerupgrades.json', 'PlayerUpgradeList'],
    ['patchdata.json', 'PatchList'],
    ['mutatorcommandertips.json', 'MutatorCommanderTipList'],
];

const ajv = new Ajv();
for (const [file, type] of files) {
    const fileContent = await Bun.file(`source-data/${file}`).json();

    const fileSchema = await Bun.file(`html/data/schemas/${file.slice(0, -5)}.schema.json`).json();

    const validateFile = ajv.compile(fileSchema);
    if (!validateFile(fileContent)) {
        console.error(`${file} does not match schema:`);
        console.error(validateFile.errors);
        process.exit(1);
    }
}

const mutators: MutatorList = await Bun.file('source-data/mutators.json').json();

// mutator ids are unique
const seenIds = new Set<string>();
const duplicateIds = new Set<string>();
for (const mutator of mutators) {
    if (seenIds.has(mutator.mutatorid)) {
        duplicateIds.add(mutator.mutatorid);
    } else {
        seenIds.add(mutator.mutatorid);
    }
}
if (duplicateIds.size > 0) {
    console.error("mutators.json: Found duplicate 'mutatorid' entries:");
    duplicateIds.forEach((id) => {
        console.error(`   - ${id}`);
    });
    process.exit(1);
}

function mutatorIdForName(name: string): MutatorId {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function validateMutatorReference(mutatorId: MutatorId | null, location: string): void {
    if (mutatorId !== null && !seenIds.has(mutatorId)) {
        console.error(`${location}: unknown mutator id (${mutatorId})`);
        process.exit(1);
    }
}

// mutator ids match their names and have all required generated assets
for (const [i, mutator] of mutators.entries()) {
    const expectedId = mutatorIdForName(mutator.mutatorname);
    if (mutator.mutatorid !== expectedId) {
        console.error(`mutators.json[${i}]: mutatorid (${mutator.mutatorid}) must be ${expectedId} for name (${mutator.mutatorname})`);
        process.exit(1);
    }
    if (!(await Bun.file(`html/images/mutators/${mutator.mutatorid}.png`).exists())) {
        console.error(`mutators.json[${i}]: missing icon html/images/mutators/${mutator.mutatorid}.png`);
        process.exit(1);
    }
    if (!(await Bun.file(`html/mutators/${mutator.mutatorid}.html`).exists())) {
        console.error(`mutators.json[${i}]: missing page html/mutators/${mutator.mutatorid}.html`);
        process.exit(1);
    }
}

// mutator interaction ids exist and each pair is stored in lexical order
const mutatorInteractions: MutatorInteractionList = await Bun.file('source-data/mutatorinteractions.json').json();
for (const [i, entry] of mutatorInteractions.entries()) {
    validateMutatorReference(entry.id1, `mutatorinteractions.json[${i}].id1`);
    validateMutatorReference(entry.id2, `mutatorinteractions.json[${i}].id2`);
    if (entry.id1 >= entry.id2) {
        console.error(`mutatorinteractions.json[${i}]: id1 (${entry.id1}) must be strictly less than id2 (${entry.id2})`);
        process.exit(1);
    }
}

// mutation cycle mutator ids exist
const mutationCycle: MutationCycleList = await Bun.file('source-data/mutationcycle.json').json();
for (const [i, entry] of mutationCycle.entries()) {
    for (const key of ['mut01', 'mut02', 'mut03'] as const) {
        validateMutatorReference(entry[key], `mutationcycle.json[${i}].${key}`);
    }
}

// weeklymutations in order
const weeklymutations: WeeklyMutationList = await Bun.file('source-data/weeklymutations.json').json();
for (const [i, entry] of weeklymutations.entries()) {
    if (entry.mutationid !== i + 1) {
        console.error(`weeklymutations.json[${i}]: mutationid (${entry.mutationid}) must be equal to ${i + 1}`);
        process.exit(1);
    }
    for (const key of ['mut01', 'mut02', 'mut03', 'mut04', 'mut05', 'mut06', 'mut07', 'mut08', 'mut09', 'mut10'] as const) {
        validateMutatorReference(entry[key], `weeklymutations.json[${i}].${key}`);
    }
}

// commander tip mutator ids exist
const mutatorCommanderTips: MutatorCommanderTipList = await Bun.file('source-data/mutatorcommandertips.json').json();
for (const [i, entry] of mutatorCommanderTips.entries()) {
    validateMutatorReference(entry.mutator, `mutatorcommandertips.json[${i}].mutator`);
}

// amonunits in order // <- missing 155
// const amonunits: AmonUnitList = await Bun.file('source-data/amonunits.json').json();
// for (const [i, entry] of amonunits.entries()) {
//     if (entry.amonid !== i + 1) {
//         console.error(`amonunits.json[${i}]: id (${entry.amonid}) must be equal to ${i + 1}`);
//         process.exit(1);
//     }
// }

// playerunits in order
const playerunits: PlayerUnitList = await Bun.file('source-data/playerunits.json').json();
for (const [i, entry] of playerunits.entries()) {
    if (entry.unitid !== i + 1) {
        console.error(`playerunits.json[${i}]: id (${entry.unitid}) must be equal to ${i + 1}`);
        process.exit(1);
    }
}

console.log('All validations passed');
