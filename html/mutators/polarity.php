<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Polarity</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/polarity">
<?= startContent() ?>
    <h1>Mutator: Polarity</h1>
    <p><img src="/images/mutators/polarity.png" alt="" /></p>
    <p>Each enemy unit is immune to either your units or your ally's units.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">7</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Applies to both, units and structures. Units do not take damage, but can be debuffed.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Alarak: Alarak's Structure Overcharge will lock onto units in Polarity,  even though it cannot damage them, which can waste the calldown.</li>
        <li>Kerrigan: Folly of Man's lightning strikes can stun Polarity's units (although the damage will not be applied).</li>
        <li>Tychus: Crooked Sam's Demolition Charge's Stun can stun Polarity's units (although the damage will not be applied).</li>
        <li>Vorazun: Centurion's Dark Coil does not stun units with opposite polarity.</li>
        <li>Vorazun: Confusion affects units with any polarity.</li>
        <li>Vorazun: Stasis wards can stasis units with any polarity.</li>
        <li>Vorazun: Vorazun's Withering Siphon prestige deals damage to units with any polarity.</li>
        <li>Zeratul: Units devolved by the Avatar of Essence will have a random polarity.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Damage blocked by Polarity still triggers Barrier.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/diffusion.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/diffusion">Diffusion</a></td><td>Diffusion damages all units regardless of their Polarity.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Structures captured by Amon get Polarity.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Damage blocked by Polarity still triggers Evasive Maneuvers.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Polarity reverses after a unit respawns.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Polarity of the Laser Drill remains fixed, even when the drill respawns after being destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mineralshields.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mineralshields">Mineral Shields</a></td><td>Mineral Shields all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Widow Mines and Spider Mines all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators that spawn around the map have Polarity applied to them. Propagators spawned from other Propagators do not have any polarity.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>When units Transmute, they can switch Polarities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys do not have Polarity applied to them. The Turking has Polarity applied to it.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators all have Polarity applied to them. Resurrected units may change Polarity after resurrection.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Void Rifts and units spawned from Void Rifts all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested all have Polarity applied to them.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
