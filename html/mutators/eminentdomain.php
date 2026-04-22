<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Eminent Domain</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/eminentdomain">
<?= startContent() ?>
    <h1>Mutator: Eminent Domain</h1>
    <p><img src="/images/mutators/eminentdomain.png" alt="" /></p>
    <p>Enemies gain control of your structures after destroying them.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">1</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Shields and HP are replenished after the structure is captured. The structure will be destroyed if there's no path to player 1's base. Heroic Structures (with the exception of Swann's Laser Drill) are not stolen by Amon.</p>
    <p>Structures will only be captured by Amon under the following conditions:</p>
    <ul>
        <li>The structure is not a Nydus Worm</li>
        <li>If an Amon unit killed the structure, the unit is still alive</li>
        <li>The structure is not killed by static defense</li>
        <li>There exists a valid path between the unit that killed the structure and a point within 5 range of Player 1's starting location.</li>
    </ul>
    <p>Due to how Siege Tanks work, a sieged up siege tank cannot trigger Eminent Domain on a kill.</p>
    <p>In any other circumstance, the structure will be destroyed as normal. One loophole in this logic is allowing Terran structures to burn down. A structure burning down will be automatically converted to Amon's ownership, regardless of the unit that dealt damage to the structure, including player units. This allows you to wall of maps against certain compositions as Amon will not attack his own structures.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Mengsk: Earthsplitters stop attacking when captured by Eminent Domain. Any units loaded into the Earthsplitter are lost.</li>
        <li>Mengsk: Units loaded inside a Supply Bunker are lost if the Supply Bunker is captured by Eminent Domain.</li>
        <li>Raynor: Units loaded inside a Bunker are lost if the Bunker is captured by Eminent Domain.</li>
        <li>Stetmann: Stetellites will only respawn once before being destroyed permanently.</li>
        <li>Swann: If you lose your drill to an enemy, it will respawn as Amon's Laser Drill. After destroying it, the drill goes on cooldown before respawning again. This means you will permanently lose your drill and have no way of getting it back.</li>
        <li>Zeratul: Eminent Domain affects Cannon Projections. If a Cannon Projection has been captured by Amon, it can be cancelled by cancelling the Projection at the source Cannon.</li>
        <li>Zeratul: Tesseract Monoliths are not converted by Eminent Domain and will be destroyed instead of converted.</li>
        <li>Zagara: Bile Launchers stop attacking when captured by Eminent Domain.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Structures captured by Amon get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Turrets captured by Amon apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/diffusion.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/diffusion">Diffusion</a></td><td>Turrets can be captured by Amon if they deal too much damage to themselves.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/doubleedged.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/doubleedged">Double Edged</a></td><td>Turrets can be captured by Amon if they deal too much damage to themselves.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Turrets captured by Amon can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Turrets captured by Amon have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Structures captured by Amon get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Structures captured by Amon get Polarity.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Structures hit by Propagators change to a Propagator and do not get converted. Propagators spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>The attack that kills a player's structure will not cause the enemy unit to Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Civilians spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Structures destroyed by Turkeys will be converted.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots spawn out of structures converted by Eminent Domain.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
