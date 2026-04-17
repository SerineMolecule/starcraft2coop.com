<?php

require_once "../../html/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Shortsighted</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/shortsighted">
<?= startContent() ?>
    <h1>Mutator: Shortsighted</h1>
    <p><img src="/images/mutators/shortsighted.png" alt="" /></p>
    <p>Player units and structures have reduced vision range.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">1</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Reduces all player units sight range by 60%, down to a minimum of 1 range. Units that have 0 range (e.g. Essence or Biomass drops) will have their range increased to 1.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Biomass drops provide vision.</li>
        <li>Dehaka: Essence drops provide vision.</li>
        <li>Han/Horner: Salvage drops provide vision.</li>
        <li>Kerrigan: Assimilation Aura drops provide vision.</li>
        <li>Raynor: Raynor's Scanner Sweep can be used to provide regular vision in the area of the Scan.</li>
        <li>Stukov: Brood Queen's Ocular Symbiote ability increases vision for units.</li>
        <li>Stukov: Units mind-controlled by the Aleksander retain their full vision.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td>No interactions found.</td></tr>
    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
