<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Gift Exchange</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/giftexchange">
<?= startContent() ?>
    <h1>Mutator: Gift Exchange</h1>
    <p><img src="/images/mutators/giftexchange.png" alt="" /></p>
    <p>Gifts are periodically deployed around the map. If you don't claim them, Amon will!</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">0</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">No</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The first gift spawns at 3:00. Following gifts will spawn after 2:10 intervals until the mission time exceeds 20:00, after which gifts will spawn every 1:40.</p>
    <p>Gifts only spawn 40 units away from Players 1, 2 and 3 and as long as no units are within 7 range of the intended gift spawn location.</p>
    <p>Ahead of a gift spawn, an icon will be displayed on the minimap. The player has 40 seconds before it appears and can be captured. Amon will send forces to capture the gift. Gifts take 20 seconds to be captured.</p>
    <p>If players capture 2 consecutive gifts, Amon will steal the third. Players cannot stop it.</p>
    <p>The potential rewards for players are:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Reward</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Vespene Rain</td>
                <td>15+{Mission Minutes Elapsed} Vespene drops appear around the map. Each Vespene drop contains 50 gas.</td>
            </tr>
            <tr>
                <td>Chrono Wave</td>
                <td>Chrono Wave is activated (500% increase in build speed for 20 seconds).</td>
            </tr>
            <tr>
                <td>HERC/Scout/Queen</td>
                <td>You get a HERC/Scout/Queen depending on your race.</td>
            </tr>
            <tr>
                <td>MULE Party</td>
                <td>Drops 3 MULEs in your base.</td>
            </tr>
            <tr>
                <td>{Unit} becomes an Avenger</td>
                <td>The selected units gains 10 stacks of the Avenger buff (see Avenger details for more information).</td>
            </tr>
            <tr>
                <td>The Naughty List has been cleared</td>
                <td>Clears the Naughty List</td>
            </tr>
            <tr>
                <td>An Archangel</td>
                <td>Gives the player an Archangel.</td>
            </tr>
            <tr>
                <td>Everything is free for 10 seconds</td>
                <td>Removes costs associated with training all units and research.</td>
            </tr>
            <tr>
                <td>Healing</td>
                <td>(Only available after the 8-minute mark) Heals all units for 100HP, then provides a buff that heals units for 6.6 HP every second.</td>
            </tr>
        </tbody>
    </table>
    <p>The potential rewards for Amon are:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Reward</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>A Temporary Mutator</td>
                <td>Picks a random mutator from the list below (see details in the Chaos Studios mutator details for more information) for 3 minutes.
                    <ul>
                        <li>Alien Incubation</li>
                        <li>Blizzard</li>
                        <li>Concussive Attacks</li>
                        <li>Going Nuclear</li>
                        <li>Just Die!</li>
                        <li>Mutually Assured Destruction</li>
                        <li>Outbreak</li>
                        <li>Self Destruction</li>
                        <li>Transmutation</li>
                        <li>We Move Unseen</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Hidden Threats</td>
                <td>Spawns a mix of 30 Burrowed Widow Mines, Burrowed Banelings and Stasis Wards around the map.</td>
            </tr>
            <tr>
                <td>Banelings/Scourge</td>
                <td>Spawns Scourge (if players have more than 5 air units) or Banelings otherwise at the gift location, depending on the mission time as follows:
                    <br><br>
                    <table class="dataTable">
                        <thead>
                            <tr>
                                <th>Mission Time</th>
                                <th>Units Spawned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0:00-6:00</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>6:00-10:00</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td>10:00+</td>
                                <td>60</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>Hybrid</td>
                <td>Spawns Hybrids depending on the mission time as follows:
                    <br><br>
                    <table class="dataTable">
                        <thead>
                            <tr>
                                <th>Mission Time</th>
                                <th>Hybrids Spawned</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0:00-8:20</td>
                                <td>2 Hybrid Reavers<br>1 Hybrid Dominator</td>
                            </tr>
                            <tr>
                                <td>8:20-11:40</td>
                                <td>2 Hybrid Reavers<br>2 Hybrid Dominators<br>1 Hybrid Behemoth</td>
                            </tr>
                            <tr>
                                <td>11:40+</td>
                                <td>2 Hybrid Reavers<br>2 Hybrid Dominators<br>2 Hybrid Behemoths</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td>Kill Bot</td>
                <td>Puts a Killbot on the field, with kills depending on the mission time. The kill bot will require 30 kills before 10:00, after which it will require 50 kills.</td>
            </tr>
            <tr>
                <td>Overcharged Shuttles</td>
                <td>Overcharges 5 Shuttles. Each overcharge does 20 damage every 0.25 seconds.</td>
            </tr>
            <tr>
                <td>Shrink Wave</td>
                <td>Shrinks all player units for 60 seconds, reducing all damage (including Spell damage), HP and Shields by 50%.</td>
            </tr>
        </tbody>
    </table>
    <p>Once a gift is available for capture, a small attack force of Amon's units will be created to try and capture the gift. The power level of this attack force is dependent on a number of factors, listed below:</p>
    <ul>
        <li>Each gift claimed by the Allied Commanders adds 1 to the power of the attack force.</li>
        <li>Each gift claimed/stolen by Amon removes 1 from the power of the attack force.</li>
        <li>Every 2:00 of mission time adds 1 to the power of the attack force.</li>
    </ul>
    <p>The composition of the attack forces are shown below. For more information on Strength and Tech levels, check the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Power Level</th>
                <th>Strength Level</th>
                <th>Tech Level</th>
                <th>Hybrids</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0-1</td>
                <td>2</td>
                <td>1</td>
                <td>-</td>
            </tr>
            <tr>
                <td>2-3</td>
                <td>4</td>
                <td>2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>4-6</td>
                <td>4</td>
                <td>3</td>
                <td>1x Destroyer</td>
            </tr>
            <tr>
                <td>7-8</td>
                <td>5</td>
                <td>4</td>
                <td>1x Reaver</td>
            </tr>
            <tr>
                <td>9</td>
                <td>2</td>
                <td>1</td>
                <td>2x Destroyer</td>
            </tr>
            <tr>
                <td>10</td>
                <td>3</td>
                <td>1</td>
                <td>2x Reaver</td>
            </tr>
            <tr>
                <td>11</td>
                <td>4</td>
                <td>1</td>
                <td>1x Behemoth</td>
            </tr>
            <tr>
                <td>12</td>
                <td>4</td>
                <td>2</td>
                <td>1x Behemoth<br>1x Dominator</td>
            </tr>
            <tr>
                <td>13</td>
                <td>4</td>
                <td>3</td>
                <td>1x Behemoth<br>1x Nemesis</td>
            </tr>
            <tr>
                <td>14</td>
                <td>4</td>
                <td>3</td>
                <td>1x Behemoth<br>1x Nemesis<br>1x Dominator</td>
            </tr>
        </tbody>
    </table>
    <p>One of the most valuable gift rewards (particularly in the early game) for players is Everything is Free. To make advantage of this, ensure you have at least one structure (preferably one that uses minerals and gas) on <a href="/guides/generaltips">Rapidfire</a> and use it to spam these structures anywhere, for free. Once the effect wears off, cancel the structures and you will be refunded the original cost of resources for those structures.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Units spawned from Gift Exchange drop Biomass.</li>
        <li>Artanis: Artanis' Warp Field counts as a unit, and therefore, his calldown can be used to capture gifts.</li>
        <li>Dehaka: Units spawned from Gift Exchange drop Essence.</li>
        <li>Mengsk: Units spawned from Gift Exchange provide Royal Guard experience.</li>
        <li>Fenix: Fenix loses all Avenger stacks given to him if he changes suit.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Gifts do not appear on the minimap. Kill Bots gifted to Amon do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings can capture gifts. Units spawned from Gift Exchange spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Units spawned from Gift Exchange can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Units spawned from Gift Exchange get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Units spawned from Gift Exchange can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blizzard.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blizzard">Blizzard</a></td><td>Blizzards can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Units spawned from Gift Exchange apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Gifts do not appear on the minimap. Kill Bots gifted to Amon do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/diffusion.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/diffusion">Diffusion</a></td><td>Diffusion applies to all units spawned from Gift Exchange.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Units spawned from Gift Exchange get the Evasive Manuevers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Units spawned from Gift Exchange trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Units spawned from Gift Exchange can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Units spawned from Gift Exchange launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Units spawned from Gift Exchange can cause Hardened Will to activate. Hybrids and Kill Bots spawned from Gift Exchange can get the Hardened Will buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Gift spawns do not spawn an Amon Heroes with the capturing attack force. Amon Heroes can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Units spawned from Gift Exchange can get the Inspiration buff. Hybrids and Kill Bots spawned from Gift Exchange can provide the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units spawned from Gift Exchange respawn when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Gifts do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lavaburst.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lavaburst">Lava Burst</a></td><td>Lava Bursts cannot capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Units spawned from Gift Exchange have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Units spawned from Gift Exchange get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mines can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Hybrids spawned from Gift Exchange trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mutuallyassureddestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mutuallyassureddestruction">Mutually Assured Destruction</a></td><td>Hybrids spawned from Gift Exchange detonate Hybrid Nukes when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Units spawned from Gift Exchange kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Units spawned from Gift Exchange all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Units spawned from Gift Exchange can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/purifierbeam.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/purifierbeam">Purifier Beam</a></td><td>Purifier Beam can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Units spawned from Gift Exchange set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Units spawned from Gift Exchange create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Units spawned from Gift Exchange move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/temporalfield.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/temporalfield">Temporal Field</a></td><td>Temporal Fields cannot capture gifts. Units caught in a Temporal Field can still capture Gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/timewarp.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/timewarp">Time Warp</a></td><td>Time Warps cannot capture gifts. Units caught in a Time Warp can still capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Units spawned from Gift Exchange can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys cannot capture gifts. Angry Turkeys can capture gifts. The Turking can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/twister.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/twister">Twister</a></td><td>Twisters can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can capture gifts. Void Reanimators can resurrect units spawned from Gift Exchange. Void Reanimators do not resurrect Kill Bots.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested can capture gifts. Units spawned from Gift Exchange spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Units spawned from Gift Exchange are cloaked.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots do not capture gifts.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
