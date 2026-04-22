<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Void Reanimators</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/voidreanimators">
<?= startContent() ?>
    <h1>Mutator: Void Reanimators</h1>
    <p><img src="/images/mutators/voidreanimators.png" alt="" /></p>
    <p>Void Reanimators wander the battlefield, bringing your enemies back to life.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">5</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Void Reanimators will spawn 10 seconds after the first killed enemy unit from a random enemy building. Following Void Reanimators will spawn every 55 seconds. If you destroy all enemy buildings on the map, no Void Reanimators will spawn.  Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
    <p>Void Reanimators have 200 HP and 200 Shields. They do not have an attack. There can only be a maximum of 4 Void Reanimators on the map. They only resurrect dead enemy units. Below is an image of a Void Reanimator:</p>
    <img src="/images/mutatordata/voidreanimator.jpg" alt="Void Reanimator">
    <p>Void Reanimators will try to revive the closest dead unit to them. They revive dead units at different speeds, depending on their supply cost. This is detailed below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Supply Cost</th>
                <th>Reanimation Time (seconds)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0-1</td>
                <td>1.5</td>
            </tr>
            <tr>
                <td>2-5</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6+</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>
    <p>Only a total of 500 corpses are stored. When the list fills up, the dead unit will replace a random one on the corpse list if the dead unit has a supply cost of 2 or more.</p>
    <p>Void Reanimators can be path-blocked, preventing them from reaching their targets for resurrection. For more information, watch this video below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/T051w67T4Dc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>On Dead of Night, Infested units that are resurrected will not die to sunlight and will have to be killed by the player.</p>
    <p>On Miner Evacuation, Void Reanimators will not resurrect any of the Infested units.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Units resurrected by Void Reanimators do not drop Biomass.</li>
        <li>Dehaka: Units resurrected by Void Reanimators do not drop Essence.</li>
        <li>Kerrigan: Units resurrected by Void Reanimators drop resource pickups from Assimilation Aura.</li>
        <li>Mengsk: Units resurrected by Void Reanimators do not provide Royal Guard experience.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Void Reanimators can resurrect units from Aggressive Deployment Drops.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Void Reanimators cannot resurrect Broodlings.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Void Reanimators can give out (3 stacks) Avenger stacks. Resurrected units do not keep their Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Void Reanimators get the Barrier buff. Resurrected units get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Void Reanimators can carry Plague. Resurrected units may or may not carry Plague, irrespective of whether it originally carried Plague or not before it died.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Resurrected units apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Void Reanimators spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Void Reanimators do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Void Reanimators trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Resurrected units can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Void Reanimators do not launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Void Reanimators can capture gifts. Void Reanimators can resurrect units spawned from Gift Exchange. Void Reanimators do not resurrect Kill Bots.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Void Reanimators do not resurrect Amon Heroes.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Void Reanimators can get the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Void Reanimators respawn when they die. Resurrected units respawn when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Void Reanimators do not resurrect Kill Bots.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Void Reanimators provide vision for the Laser Drill. Void Reanimators do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Resurrected units have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Void Reanimators do not get increased Resurrection range.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Void Reanimators do not resurrect Mag-mines.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Void Reanimators resurrect Widow Mines but not Spider Mines. Widow Mines will move towards player bases after resurrection.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Void Reanimators cannot resurrect Missiles.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Void Reanimator kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Void Reanimators can resurrect Infested and Aberrations.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Void Reanimators all have Polarity applied to them. Resurrected units may change Polarity after resurrection.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Void Reanimators can cast abilities. Void Reanimators can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Void Reanimators can resurrect Propagators. Propagators resurrected by Void Reanimators are not marked with an icon on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Void Reanimators set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Void Reanimators create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Void Reanimators move faster with Speed Freaks. Resurrected units move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Resurrected units can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Void Reanimators can resurrect units spawned from Civilians.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Void Reanimators can resurrect Turkeys. Void Reanimators do not resurrect the Turking.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Void Reanimators can resurrect units spawned from Void Rifts.
Void Reanimators do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Void Reanimators can resurrect Infested.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Void Reanimators are cloaked.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Void Reanimators do not resurrect Boom Bots.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
