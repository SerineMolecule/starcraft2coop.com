<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Evasive Maneuvers</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/evasivemaneuvers">
<?= startContent() ?>
    <h1>Mutator: Evasive Maneuvers</h1>
    <p><img src="/images/mutators/evasivemaneuvers.png" alt="" /></p>
    <p>Enemy units teleport a short distance away upon taking damage.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">1</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The enemy unit will teleport within 5 range of the attacking unit if the attacking unit is less than 20 range away. Otherwise, it will teleport within 5 range of its current position.</p>
    <p>In addition to the teleport, the unit becomes invulnerable for 0.25 seconds. A unit cannot teleport more than once every 2 seconds.</p>
    <p>Only non-heroic units get the Evasive Maneuvers buff.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Swann: Due to how Pulse Cannon damage is dealt, Pulse Cannon only deals about 50% of its stated damage.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange get the Evasive Manuevers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Respawned units get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mines do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Damage blocked by Polarity still triggers Evasive Maneuvers.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Transmuted units get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys do not get the Evasive Maneuvers buff. Angry Turkeys get the Evasive Maneuvers buff. The Turking does not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested get the Evasive Maneuvers buff.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
