<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Fatal Attraction</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/fatalattraction">
<?= startContent() ?>
    <h1>Mutator: Fatal Attraction</h1>
    <p><img src="/images/mutators/fatalattraction.png" alt="" /></p>
    <p>When enemy units and structures die, any of your nearby units are pulled to their location.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>All player units within 9 range get affected by Fatal Attraction on the death of a unit. This only applies to units which can move. Burrowed Swarm Hosts, Sieged up Siege Tanks, etc. are not affected by Fatal Attraction. The supply cost of a unit determines the strength of the pull as well the length of time the unit is stunned (cannot use attack, use abilities or be moved) as shown below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Supply</th>
                <th>Pull Time</th>
                <th>Stun Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0-1</td>
                <td>0.1875 seconds</td>
                <td>0.1 seconds</td>
            </tr>
            <tr>
                <td>2-5</td>
                <td>0.375 seconds</td>
                <td>0.2 seconds</td>
            </tr>
            <tr>
                <td>6+</td>
                <td>0.625 seconds</td>
                <td>0.3 seconds</td>
            </tr>
        </tbody>
    </table>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Alarak: Use the Havoc's Force-field ability to prevent your army from being drawn in by the mutator.</li>
        <li>Dehaka: Impalers get pulled by Fatal Attraction.</li>
        <li>Dehaka: Pack Leaders are immune to Fatal Attraction.</li>
        <li>Nova: Fatal Attraction will cancel Nova's Nuke and the nuke will be lost.</li>
        <li>Han/Horner: Han's Widow Mines get pulled by Fatal Attraction.</li>
        <li>Tychus: The Odin is immune to Fatal Attraction.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units do not trigger Fatal Attraction when taking fatal damage and respawning.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines trigger Fatal Attraction when they detonate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mineralshields.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mineralshields">Mineral Shields</a></td><td>Mineral Shields trigger Fatal Attraction when destroyed or when they expire.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mines trigger Fatal Attraction when they are destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles do not trigger Fatal Attraction when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mutuallyassureddestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mutuallyassureddestruction">Mutually Assured Destruction</a></td><td>Hybrids will only trigger Mutually Assured Destruction</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Transmuted units trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians  trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots trigger Fatal Attraction when they die.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
