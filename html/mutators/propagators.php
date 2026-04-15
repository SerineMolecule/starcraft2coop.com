<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Propagators</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/propagators">
<?= startContent() ?>
    <h1>Mutator: Propagators</h1>
    <p><img src="/images/mutators/propagators.png" alt="" /></p>
    <p>Reality warping sludges are crawling towards you. Anything they touch is turned into a copy of the sludge.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">8</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Propagators spawn from enemy buildings, so all-clearing a mission will stop them from spawning.  Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
    <p>An additional word of warning: On Temple of the Past, the first Propagator will attack the rocks and convert them to another Propagator, thus forcing players to deal with two Propagators on the first spawn. One way of avoiding this is to destroy the rocks prior to the Propagator spawn.</p>
    <p>They have 450 HP with 0 armor, are Heroic units and detectors and can attack both, air and ground units within 1 range. They have a movement speed of 1.6.</p>
    <p>Below is an image of a Propagator.</p>
    <img src="/images/mutatordata/propagator.jpg" alt="Propagator">
    <p>Propagators spawn in waves at different times throughout the mission, as shown in the table below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Number spawned</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3:28</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4:58</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6:28</td>
                <td>1</td>
            </tr>
            <tr>
                <td>7:58</td>
                <td>1</td>
            </tr>
            <tr>
                <td>9:28</td>
                <td>1</td>
            </tr>
            <tr>
                <td>10:28</td>
                <td>1</td>
            </tr>
            <tr>
                <td>11:28</td>
                <td>1</td>
            </tr>
            <tr>
                <td>12:28</td>
                <td>2</td>
            </tr>
            <tr>
                <td>13:28</td>
                <td>2</td>
            </tr>
            <tr>
                <td>14:28</td>
                <td>2</td>
            </tr>
            <tr>
                <td>15:28</td>
                <td>2</td>
            </tr>
            <tr>
                <td>16:28</td>
                <td>2</td>
            </tr>
            <tr>
                <td>17:28</td>
                <td>2</td>
            </tr>
            <tr>
                <td>18:28</td>
                <td>4</td>
            </tr>
            <tr>
                <td>19:28</td>
                <td>4</td>
            </tr>
            <tr>
                <td>20:28</td>
                <td>4</td>
            </tr>
            <tr>
                <td>21:28</td>
                <td>4</td>
            </tr>
            <tr>
                <td>22:08</td>
                <td>4</td>
            </tr>
            <tr>
                <td>22:58</td>
                <td>4</td>
            </tr>
            <tr>
                <td>23:48</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
    <p>After 23:48, Propagators will spawn every 50 seconds in spawns of 5.</p>
    <p>Propagators can attack all Heroic structures but not commander spawn points, or Zeratul's Artifact Reserve. Swann's Laser Drill, Fenix's Purifier Conclave and Karax's Solar Forge will be destroyed and will start to respawn, with no Propagator Spawning.</p>
    <p>The other Heroic Structures will be destroyed and will spawn a Propagator. The player will need to rebuild the Heroic Structure manually. The exception to this is Han & Horner's Starport, which cannot be rebuilt if it is destroyed.</p>
    <p>Propagators do not attack any unit with a MapBoss attribute. Therefore, Propagators will attack Data Cores but not Aurana's Transport on Malwarfare. They do not attack Harvesting Bots on Mist Opportunities, nor Artifact Trucks on Cradle of Death, nor the Evacuation Ships on Miner Evacuation.</p>
    <p>Propagators can be path-blocked, which can be used to trap them while slower-attacking units kill them off. For more information, watch this video below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/T051w67T4Dc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Dehaka: A minimum of six Impalers are required to be able to deal with a Propagator.</li>
        <li>Dehaka: Dehaka's Pack Leaders are Map Bosses and therefore are immune to Propagators.</li>
        <li>Kerrigan: Kerrigan's Heroic unit can be used to kill a Propagator with 13 points in the Primary Ability Damage. The video below demonstrates this.<br>
        <iframe width="475" height="268" src="https://www.youtube.com/embed/K5kwuOQdvj4" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </li>
        <li>Stetmann: Stetellites can be converted to Propagators. Place Stetellites on unpathable terrain.</li>
        <li>Stukov: Disable autocast of the "Spawn Infested Civilian" ability at the Infested Colonist Compound to prevent your units from accidentally engaging a Propagator.</li>
        <li>Stukov: Two fully upgraded Bunkers (attack upgrades and Barracks Tech upgrades) or Four non-upgraded Bunkers can kill a Propagator assuming they all attack together. Three Bunkers can deal with a Propagator, but a Bunker will be lost, assuming no micro.</li>
        <li>Tychus: Crooked Sam's Moebius Restraint Matrix upgrade will stop a Propagator from moving when Demolition Charge is used.</li>
        <li>Vorazun: Manually cast Shadow Fury with Dark Templars to prevent them from accidentally wandering too close to a Propagator.</li>
        <li>Vorazun: Time Stop does not affect Propagators timings.</li>
        <li>Zagara: With a max'ed Baneling Damage mastery, Zagara can kill a Propagator with a Baneling Barrage and two auto attacks.</li>
        <li>Zeratul: Shade Projections generate Propagators when killed by a Propagator.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Propagators do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Propagators spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Propagators can give out (1 stack)/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Propagators get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Propagators can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Propagators do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Structures hit by Propagators change to a Propagator and do not get converted. Propagators spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Propagators do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Propagators trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Propagators do not launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Propagators can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Propagators can get the Hardened Will buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Propagators can provide the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Propagators respawn when they die. When a Propagator Propagates a unit, the new Propagator will have the Just Die! buff applied to it too and will need to be killed twice.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Propagators provide vision for the Laser Drill. Propagators do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Propagators do not get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Propagators trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Propagator kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Propagators that spawn around the map have Polarity applied to them. Propagators spawned from other Propagators do not have any polarity.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Propagators can cast abilities. Propagators can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Propagators set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Propagators create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Propagators move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Propagators do not Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can resurrect Propagators. Propagators resurrected by Void Reanimators are not marked with an icon on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Propagators do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Propagators spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Propagators are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
