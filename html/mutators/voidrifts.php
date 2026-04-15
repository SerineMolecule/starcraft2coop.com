<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Void Rifts</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/voidrifts">
<?= startContent() ?>
    <h1>Mutator: Void Rifts</h1>
    <p><img src="/images/mutators/voidrifts.png" alt="" /></p>
    <p>Void Rifts periodically appear in random locations and spawn enemy units until destroyed.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">10</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Void Rifts have 500 HP with 1 armor. They spawn random enemy units as time progresses. An image of a Void Rift is shown below:</p>
    <img src="/images/mutatordata/voidrift.jpg" alt="Void Rift">
    <p>Before 8:00, the Void Rifts will only spawn between 30 and 80 range away from the players' starting location. After that, they can spawn anywhere on the map. There are also other limitations as to where they will spawn:</p>
    <ul>
        <li>They cannot spawn within 10 range of a resource patch.</li>
        <li>They cannot spawn within 20 range of another Void Rift.</li>
        <li>There can only be a maximum of 3 enemy units within 10 range of the intended Void Rift Spawn point.</li>
    </ul>
    <p>The Void Rift spawn timings and number of rifts are shown below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Number Spawned</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2:20</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3:50</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5:20</td>
                <td>2</td>
            </tr>
            <tr>
                <td>6:50</td>
                <td>2</td>
            </tr>
            <tr>
                <td>8:20</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <p>At this point, 4 Void Rifts will spawn every 1:30.</p>
    <p>There are two particular timings of interest for Void Rifts:</p>
    <ul>
        <li><b>Trickle:</b> This is a small trickle of a fixed number of units.</li>
        <li><b>Spawn:</b> Spawn waves occur much less frequently but slowly grow in power if the Void Rift is not destroyed.</li>
    </ul>
    <h3>Trickle</h3>
    <p>Trickle occurs every 24 seconds in Custom Mutator mode and every 12 seconds in <a href="weeklymutations">Weekly Mutations</a>. The trickle is randomized every time the Void Rift wants to spawn units. It also depends on which mode is being played. This is detailed below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Variant</th>
                <th>Custom Mode</th>
                <th>Weekly Mutation</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1 Roach</td>
                <td>2 Zerglings</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1 Marauder</td>
                <td>1 Marine</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1 Zealot</td>
                <td>1 Zealot*</td>
            </tr>
        </tbody>
    </table>
    <p>*This causes the next trickle to occur after 24 seconds instead of 12 seconds.</p>
    <h3>Spawn</h3>
    <p>The first Spawn wave occurs 30 seconds after the Void Rift has spawned. Subsequent waves will spawn in intervals of 90 seconds each. Only certain units can be spawned from the Void Rifts. These are listed below:</p>
    <ol>
        <li>Zergling</li>
        <li>Baneling</li>
        <li>Roach</li>
        <li>Hydralisk</li>
        <li>Marine</li>
        <li>Marauder</li>
        <li>Hellion</li>
        <li>Adept</li>
        <li>Zealot</li>
        <li>Stalker</li>
        <li>Siege Tank</li>
        <li>Immortal</li>
        <li>Ravager</li>
        <li>Mutalisk</li>
        <li>Void Ray</li>
        <li>Banshee</li>
        <li>High Templar</li>
        <li>Raven</li>
        <li>Infestor</li>
        <li>Hybrid Destroyer</li>
    </ol>
    <p>The mission time has a big effect on what can spawn from the Void Rifts. Void Rift spawns are limited by a resource cost. Each spawn will only have a maximum Mineral + Vespene cost, as detailed below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Resource Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0:00-8:20</td>
                <td>300</td>
            </tr>
            <tr>
                <td>8:20-20:00</td>
                <td>600</td>
            </tr>
            <tr>
                <td>20:00+</td>
                <td>1050</td>
            </tr>
        </tbody>
    </table>
    <p>The mission time also determines what units can spawn. Notice how the list provided earlier is numbered. Void Rifts can only spawn the following units (based on their index) depending on the mission time:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Possible Spawns</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0:00-10:00</td>
                <td>1-10</td>
            </tr>
            <tr>
                <td>10:00-16:40</td>
                <td>1-16</td>
            </tr>
            <tr>
                <td>16:40+</td>
                <td>1-20</td>
            </tr>
        </tbody>
    </table>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Units spawned from the Void Rifts do not drop Biomass.</li>
        <li>Abathur: Use Brutalisks' Deep Tunnel ability to snipe Void Rifts as it does not require vision.</li>
        <li>Artanis: Spread Observers around the map and use five Orbital Strikes to clear out a single Void Rift.</li>
        <li>Dehaka: Units spawned from the Void Rifts do not drop Essence.</li>
        <li>Dehaka: Try to explore the entire map, which will allow you to drop Greater Primal Wurms to handle Void Rifts.</li>
        <li>Han/Horner: Three Precision Strikes can kill a Void Rift. With the Napalm upgrade, two can clear a Void Rift, given enough time.</li>
        <li>Karax: Level 2 Solar Efficiency + max'ed Chrono Wave Energy Regeneration mastery will allow Karax to have enough energy to snipe all Void Rifts as they spawn.</li>
        <li>Karax: Spread Observers around the map and use five Orbital Strikes to clear out each Void Rift.</li>
        <li>Kerrigan: Units spawned from the Void Rifts drop resource pickups from Assimilation Aura.</li>
        <li>Kerrigan: Use Kerrigan's Leap ability to get past enemy bases so you can snipe Void Rifts as they spawn.</li>
        <li>Mengsk: Units spawned from the Void Rifts do not provide Royal Guard experience.</li>
        <li>Nova: One Sabotage Drone can 1-shot a Void Rift with 15 points in the Primary Ability Improvement Mastery.</li>
        <li>Raynor: Build extra Orbital Command Centers to allow you to scan on Void Rifts when they spawn to provide vision for you and your ally to clear them.</li>
        <li>Swann: Use a Tactical Jump from a Hercules to gain vision of a Void Rift. Set it on "Hold Position", then manually target the Void Rift with the Drill to clear it.</li>
        <li>Vorazun: Time Stop delays Void Rifts timings.</li>
        <li>Zagara: Roach Drops do not require vision and can be used to snipe inaccessible Void Rifts.</li>
        <li>Zagara: Use Apex Predator's Zagara's Deep Tunnel ability to get quickly get to Void Rifts.</li>
        <li>Zeratul: Spread Observers around the map and use Projections to kill Void Rifts. Three projections can kill a Void Rift as soon as it spawns.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Void Rifts are marked on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Units spawned from Void Rifts spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Units spawned from Void Rifts can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Units spawned from Void Rifts get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Units spawned from Void Rifts can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/chaosstudios.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/chaosstudios">Chaos Studios</a></td><td>Void Rifts will spawn 2:20 after they are activated, meaning only two spawns will occur.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Units spawned from Void Rifts apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Void Rifts are marked on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Units spawned from Void Rifts get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Units spawned from Void Rifts trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Units spawned from Void Rifts can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Units spawned from Void Rifts launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Void Rifts can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Units spawned from Void Rifts cause Hardened Will to activate. Hybrids spawned from Void Rifts can get the Hardened Will buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Units spawned from Void Rifts can get the Inspiration buff. Hybrids spawned from Void Rifts can provide the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units spawned from Void Rifts respawn when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Units spawned from Void Rifts provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Units spawned from Void Rifts have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Units spawned from Void Rifts get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Hybrids spawned from Void Rifts trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mutuallyassureddestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mutuallyassureddestruction">Mutually Assured Destruction</a></td><td>Hybrids spawned from Void Rifts detonate Hybrid Nukes when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Units spawned from Void Rifts kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/photonoverload.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/photonoverload">Photon Overload</a></td><td>Void Rifts do not get Photon Overcharge when damaged. </td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Void Rifts and units spawned from Void Rifts all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Units spawned from Void Rifts can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Units spawned from Void Rifts set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Units spawned from Void Rifts  create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Units spawned from Void Rifts move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Units spawned from Void Rifts can transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Civilians do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can resurrect units spawned from Void Rifts.
Void Reanimators do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Units spawned from Void Rifts spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Units spawned from Void Rifts are cloaked.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots do not spawn from Void Rifts.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
