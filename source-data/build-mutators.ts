import type { Mutator, MutatorInteraction, MutatorInteractionList, MutatorList } from "./data-types";

const mutators: Mutator[] = await Bun.file('./source-data/mutators.json').json();

const allInteractions: MutatorInteraction[] = await Bun.file('./source-data/mutatorinteractions.json').json();

function getInteractions(id: number): { otherMutator: Mutator, interaction: string }[] {
    return allInteractions.filter((interaction) => interaction.id1 === id || interaction.id2 === id).map((interaction) => ({
        otherMutator: getMutator(interaction.id1 === id ? interaction.id2 : interaction.id1),
        interaction: interaction.interaction,
    }));
}
function getMutator(id: number): Mutator {
    return mutators.find((mutator) => mutator.mutatorid === id)!;
}
function token(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '').toLowerCase();
}

const safeZoneText = await Bun.file('./source-data/mutator-details/safetyzones.html').text();

for (const mutator of mutators) {
    const url = token(mutator.mutatorname);
    const details = await Bun.file(`./source-data/mutator-details/${mutator.mutatorname}.html`).text();
    let indentedDetails = details.replace(/^/gm, '    ').replace(/<p class="subheading">(.*?)<\/p>/g, (match, p1) => `<h2 id="${p1.toLowerCase().replace(/[^a-z0-9]+/g, '')}">${p1}</h2>`);
    if (mutator.hassafezone) {
        if (indentedDetails.includes('    <h2 id="commanderspecifictips">')) {
            indentedDetails = indentedDetails.replace('    <h2 id="commanderspecifictips">', safeZoneText + '    <h2 id="commanderspecifictips">');
        } else {
            indentedDetails += safeZoneText;
        }
    }
    const interactions = getInteractions(mutator.mutatorid);
    Bun.write(`./html/mutators/${url}.php`, `<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - ${mutator.mutatorname}</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/${url}">
<?= startContent() ?>
    <h1>Mutator: ${mutator.mutatorname}</h1>
    <p><img src="/images/mutators/${url}.png" alt="" /></p>
    <p>${mutator.mutatordescription}</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">${mutator.abomination}</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">${mutator.customusable ? 'Yes' : 'No'}</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">${mutator.chaosrollable ? 'Yes' : 'No'}</td></tr>
    </table>
${indentedDetails}
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
${interactions.map((interaction) => `        <tr><td style="white-space:nowrap"><img src="/images/mutators/${token(interaction.otherMutator.mutatorname)}.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/${token(interaction.otherMutator.mutatorname)}">${interaction.otherMutator.mutatorname}</a></td><td>${interaction.interaction}</td></tr>\n`).join('')}${interactions.length === 0 ? '        <tr><td>No interactions found.</td></tr>' : ''}
    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
`);
}
