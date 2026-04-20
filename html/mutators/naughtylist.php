<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Naughty List</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/naughtylist">
<?= startContent() ?>
    <h1>Mutator: Naughty List</h1>
    <p><img src="/images/mutators/naughtylist.png" alt="" /></p>
    <p>Player units and structures take increased damage for each enemy they've killed.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">0</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">No</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Each kill adds a damage stack that increases the damage dealt to the unit by a certain amount. The amount of damage increase is based on the number of kills a unit as, as shown in the following table:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Kills</th>
                <th>Damage Per Stack</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1-4</td>
                <td>1%</td>
            </tr>
            <tr>
                <td>5-14</td>
                <td>4%</td>
            </tr>
            <tr>
                <td>15-150</td>
                <td>6%</td>
            </tr>
        </tbody>
    </table>
    <p>When a Hero unit dies, the debuff is not applied until the hero makes a kill, after which the debuff will be applied based on its kill count throughout the entire game.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Fenix: Changing Fenix suits does not reset the Naughty List.</li>
        <li>Fenix: Fenix Champions retain their kill counts from previous shells.</li>
        <li>Zeratul: Zeratul's Shade Projections do not count towards Cannon/Monolith kill counts. The Projection gets the Naughty List count, but disappears after the Projection despawns and gets reset.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Aggressive Deployment Drop kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodling kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Hero kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units do not increase the Naughty List count when taking fatal damage and respawning.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mineralshields.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mineralshields">Mineral Shields</a></td><td>Mineral Shield kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mine kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missile kills do not increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberration kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagator kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/slimpickings.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/slimpickings">Slim Pickings</a></td><td>Turkey kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkey kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimator kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested kills increase the Naughty List count.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
