<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Aggressive Deployment</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/aggressivedeployment">
<?= startContent() ?>
    <h1>Mutator: Aggressive Deployment</h1>
    <p><img src="/images/mutators/aggressivedeployment.png" alt="" /></p>
    <p>Additional enemy units are periodically deployed onto the battlefield.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Drops will prioritize player units which fulfill particular conditions. These are:</p>
    <ul>
        <li>It has a weapon (ie. can deal damage).</li>
        <li>It costs more than 0 supply.</li>
        <li>It is not a queen</li>
    </ul>
    <p>The drop will spawn 7 units away from the potential target. If no potential target is found, the drop will spawn between 25 and 40 units away from the player's base.</p>
    <p>Drop Pod Details, along with their Strength and Tech levels are shown below. For more information on Strength and Tech levels, check the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>4:50</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>7:00</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>9:10</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>11:20</td>
                <td>2</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>13:30</td>
                <td>3</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>15:40</td>
                <td>4</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <p>After the 6th wave, Drop Pods will drop every 2:10 and have Tech level 6 and Strength level 5.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Units spawned from Aggressive Deployment drops do not drop Biomass.</li>
        <li>Alarak: The Mothership is not a valid unit for Aggressive Deployment drops.</li>
        <li>Dehaka: Units spawned from Aggressive Deployment drops do not drop Essence.</li>
        <li>Kerrigan: Assimilation Aura can be used on the drops to gain additional resources.</li>
        <li>Mengsk: Units spawned from Aggressive Deployment drops do not provide Royal Guard experience.</li>
        <li>Stukov: Units spawned from Stukov's Infested Colonist Compound are valid targets for Aggressive Deployment drops.</li>
        <li>Tychus: Tychus is not a valid unit for Aggressive Deployment drops.</li>
        <li>Vorazun: Time Stop delays Aggressive Deployment timings.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Units from Aggressive Deployment Drops spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Units from Aggressive Deployment Drops give out and receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Units from Aggressive Deployment Drops get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Units from Aggressive Deployment Drops can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/chaosstudios.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/chaosstudios">Chaos Studios</a></td><td>A single 1/1 Aggressive Deployment drop will spawn once the mutator rolls out.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Units from Aggressive Deployment Drops apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Units from Aggressive Deployment Drops get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Units from Aggressive Deployment Drops trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Units from Aggressive Deployment Drops can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Units from Aggressive Deployment Drops do not launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units from Aggressive Deployment Drops can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Units from Aggressive Deployment Drops cause Hardened Will to activate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Aggressive Deployment drops do not contain Amon Heroes.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Units from Aggressive Deployment Drops can get the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units from Aggressive Deployment Drops respawn when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Units from Aggressive Deployment Drops have the Life Leech buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Units from Aggressive Deployment Drops get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Aggressive Deployment Drop kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Units from Aggressive Deployment Drops all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Units from Aggressive Deployment Drops move can cast skills.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Units from Aggressive Deployment Drops set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Units from Aggressive Deployment Drops create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Units from Aggressive Deployment Drops move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Units from Aggressive Deployment Drops can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can resurrect units from Aggressive Deployment Drops.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Units from Aggressive Deployment Drops spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Units from Aggressive Deployment Drops are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
