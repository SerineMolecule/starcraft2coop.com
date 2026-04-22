<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Dead of Night</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Dead of Night">
  <meta name="keywords" content="Starcraft co-op guides dead night mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/deadofnight">
  <script src="/scripts/preload.js"></script>
  <style>
      .specialInfested{
          border-radius:50%;
      }
  </style>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Dead of Night</h1>
    <p id="missionPlace">Chazington</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#baseAnalysis">Enemy Base Analysis</a></p>
        <p><a href="#dayNight">Day and Night Cycle Information</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>A rapid infestation has been discovered on one of the Dominion's fringe worlds. Burn down all of the infested structures before it has a chance to spread. At the Dead of Night, they will start to attack you.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Destroy all infested structures (151)</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Virophage</li>
        </ul>
    <h2 id="baseAnalysis">Enemy Base Analysis</h2>
    <div id="globalRaceSelect">
        <p>Change all base analysis pictures to race:</p>
        <form action="#">
            <label><input type="radio" name="globalRace" value="protoss" checked>Protoss</label><br>
            <label><input type="radio" name="globalRace" value="terran">Terran</label><br>
            <label><input type="radio" name="globalRace" value="zerg">Zerg</label><br>
        </form>
        <script>
            $("input[name='globalRace']").change(function(){
                var race= $(this).val();
                $('input:radio[value="' + race + '"]').each(function () {
                    if($(this).attr('name')!=="globalRace"){
                        $(this).prop('checked', true).trigger('change');
                    }
                })
                return false;
            })
        </script>
    </div>
    <p>Note that the images below show the starting state of the mission. As the mission progresses, Hybrids get added to enemy bases.</p>
    <?php $mission = "deadofnight"; ?>
    <p>A camp is located to the West of the starting location. It is very lightly defended.</p>
    <?php switcher_generator("w") ?>
    <p>Clockwise from the above camp, a small enemy base is located. Linear calldowns are best used here to take advantage of all the enemies that are lined up.</p>
    <?php switcher_generator("nwlong") ?>
    <p>The enemy base at the North of the map is well-defended, and will need a reasonably-sized army to push into.</p>
    <?php switcher_generator("nlong") ?>
    <p>The enclave in the North East of the map is a great spot to use large Area of Effect calldowns like Pulse Cannon and Nukes.</p>
    <?php switcher_generator("ne") ?>
    <p>The enemy base at the East contains strong defenses, and will need a powerful army to push into.</p>
    <?php switcher_generator("e") ?>
    <p>The South East base is the largest enemy base on the map. It contains several Hybrids and cloaked units.</p>
    <?php switcher_generator("selong") ?>
    <p>The South West area is covered by very lightly defended camps and is a great spot to push into after the first night.</p>
    <?php switcher_generator("slong") ?>
    <?php switcher_generator("swlong") ?>
    <h2 id="dayNight">Day and Night Cycle Information</h2>
    <p>Days are always 3:30 long, whereas nights are 4:00 long. The first few day/night cycles are shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Phase</th>
                <th>Start</th>
                <th>End</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Day 1</td>
                <td>0:00</td>
                <td>3:30</td>
            </tr>
            <tr>
                <td>Night 1</td>
                <td>3:30</td>
                <td>7:30</td>
            </tr>
            <tr>
                <td>Day 2</td>
                <td>7:30</td>
                <td>11:00</td>
            </tr>
            <tr>
                <td>Night 2</td>
                <td>11:00</td>
                <td>15:00</td>
            </tr>
            <tr>
                <td>Day 3</td>
                <td>15:00</td>
                <td>18:30</td>
            </tr>
            <tr>
                <td>Night 3</td>
                <td>18:30</td>
                <td>22:30</td>
            </tr>
        </tbody>
    </table>
    <p>During the day, no infested will spawn, making it easy to clear the infested buildings. There are a minimal number of enemy units defending the infested structures. Upon killing infested structures, a number of broodlings will spawn. This is dependent on the infested structure killed, as follows:</p>
    <ul>
        <li><b>Infested Biodome (1300 HP):</b> 6 broodlings</li>
        <li><b>All Other Infested (500 HP):</b> 3 broodlings</li>
    </ul>
    <p>At the start of each day, a number of hybrids will be added to uncleared areas of the map to help defend. These are in addition to the starting hybrids on the map. The number of hybrids added is listed below. Note that Light Hybrids are Hybrid Reavers and Hybrid Destroyers. Heavy Hybrids are Hybrid Behemoths and Hybrid Dominators.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Day</th>
                <th>Light Hybrid Added</th>
                <th>Heavy Hybrid Added</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>4</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5+</td>
                <td>5</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <p>The types of Hybrids added will depend on the enemy race you are fighting. This is summarized below:</p>
    <table>
        <thead>
            <tr>
                <th>Race</th>
                <th>Light Hybrid</th>
                <th>Heavy Hybrid</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Protoss</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Dominator</td>
            </tr>
            <tr>
                <td>Terran</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Dominator</td>
            </tr>
            <tr>
                <td>Zerg</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Behemoth</td>
            </tr>
        </tbody>
    </table>
    <p>The night is very different. During the night, you will be attacked by a constant stream of Infested Terrans, Infested Marines and Aberrations.</p>
    <p>Infested units will only attack from certain positions, depending on the night. The below table lists the side attacked in the mission.</p>
    <table>
        <thead>
            <tr>
                <th>Night</th>
                <th>Side</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>South</td>
            </tr>
            <tr>
                <td>2</td>
                <td>South + North</td>
            </tr>
            <tr>
                <td>3+</td>
                <td>All four sides</td>
            </tr>
        </tbody>
    </table>
    <p>There are two different "groups" of infested units on the map. These groups are:</p>
    <ul>
        <li><b>Attack Waves:</b> These are groups of infested units that will make aggressive pushes towards your base. The units that can be in the attack waves are:
        <ul>
            <li>Infested Terrans</li>
            <li>Infested Marines</li>
            <li>Aberrations</li>
        </ul></li>
        <li><b>Noise:</b> This is a constant spawn of infested units that move towards your base. The units that are part of the noise are:
        <ul>
            <li>Infested Terrans</li>
            <li>Infested Marines</li>
            <li>Volatile Infested</li>
            <li>Aberrations</li>
        </ul></li>
    </ul>
    <p>In general, it is very difficult to distinguish the attack waves from the noise, and hence, the attack wave compositions and timings are irrelevant as all entrances to your base need to be defended.</p>
    <p>The spawning rate of the Noise infested units per second in each night is shown below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Night</th>
                <th>Infested Terran</th>
                <th>Infested Marine</th>
                <th>Volatile Infested</th>
                <th>Aberration</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>0.91</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>0.32</td>
                <td>0.63</td>
                <td>0</td>
                <td>0.1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>0.32</td>
                <td>0.48</td>
                <td>0.16</td>
                <td>0.20</td>
            </tr>
            <tr>
                <td>4</td>
                <td>0.32</td>
                <td>0.63</td>
                <td>0.32</td>
                <td>0.38</td>
            </tr>
            <tr>
                <td>5</td>
                <td>0.32</td>
                <td>0.63</td>
                <td>0.63</td>
                <td>0.57</td>
            </tr>
            <tr>
                <td>6+</td>
                <td>0.48</td>
                <td>0.91</td>
                <td>0.91</td>
                <td>0.83</td>
            </tr>
        </tbody>
    </table>
    <p>In addition to the standard infested units, you will also be attacked by Special infested. The two out of the four infested units below are picked randomly. The first is introduced to you during the first night and the second during the second night.</p>
    <img class="specialInfested" src="/images/missiondata/deadofnight/choker.jpg" alt="Choker">
    <p>The Choker can permanently stun-lock targeted units until they die. Units with the Frenzied buff are immune (e.g. Brutalisks, Odin, Ultralisks). It poses a huge threat for heroes. However, the Choker can only stun-lock one heroic unit. So, if multiple heroes are present nearby, they will be able to deal with the Choker. The Choker can target at maximum 5 units at a time.</p>
    <p>It is usually recommended to send some low-cost units into the Choker's range, before targeting it with more expensive units. Mobility abilities can be used to break free of a Choker stun. These include:</p>
    <ul>
        <li>Artanis' Guardian Shell</li>
        <li>Fenix's Cybros Arbiter Recall</li>
        <li>Nova's Tactical Airlift</li>
        <li>Tychus' Medivac Transport</li>
        <li>Vorazun's Dark Pylon Recall</li>
        <li>Vorazun's Emergency Recall</li>
    </ul>
    <img class="specialInfested"  src="/images/missiondata/deadofnight/hunterling.jpg" alt="Hunterling">
    <p>The Hunterling can jump over cliffs and reach your mineral line without going through the entrances to your base. This is a particular problem if you are playing as Player 1 on Night#1. One solution is to block the high ground to the left of the top-left barrier with a small 2x2 structure. Such structures include Pylons, Supply Depots, Spore/Spine crawlers. You will need to get a worker there, which can be done by using a transport.</p>
    <p>Its jump attack can stun units for 5 seconds. Mobility abilities can be used to break free of a Hunterling stun. These include:</p>
    <ul>
        <li>Fenix's Cybros Arbiter Recall</li>
        <li>Nova's Tactical Airlift</li>
        <li>Tychus' Medivac Transport</li>
        <li>Vorazun's Dark Pylon Recall</li>
    </ul>
    <img class="specialInfested"  src="/images/missiondata/deadofnight/kaboomer.jpg" alt="Kaboomer">
    <p>The Kaboomer explodes on death, dealing damage to all enemies around it. It also has a constant AoE attack that can kill low-HP targets quickly. It deals double damage to structures.</p>
    <img class="specialInfested"  src="/images/missiondata/deadofnight/spotter.jpg" alt="Spotter">
    <p>The Spotter is the only flying Special Infested unit. It can disable pylons, turrets and bunkers, making it extremely dangerous unless dealt with quickly. A single Spotter will disable two structures.</p>
    <p>Additionally, it provides an aura buff that increases movement speed of nearby infested by 1 and life regen by 2.</p>
    <br><br>
    <p>Additionally, on Night #3 and future nights, you will have to fight an additional threat, either a Nydus Network or a Stank.</p>
    <p>The Nydus Networks behave like any other Nydus threat in the game. They should be killed quickly, otherwise they will unload enemy units (a 3 Strength/3 Tech Level <a href="/guides/enemycomps">Enemy composition</a> wave) that will attack you.</p>
    <img class="specialInfested"  src="/images/missiondata/deadofnight/stank.jpg" alt="Stank">
    <p>The Stank is a powerful ultralisk-like unit that requires the full might of an army to take down. A Stank does not burn during the day, so you will have to kill it, or it can destroy your entire base within minutes.</p>
    <br><br>
    <p>The number of Special Infested units that spawn per night is shown below. Timings are somewhat unpredictable due to different spawn locations, and order-based spawn timings and will therefore not be listed.</p>
    <div class="tableContainer">
        <table class="centered">
            <thead>
                <tr>
                    <th>Night</th>
                    <th>Chokers</th>
                    <th>Hunterlings</th>
                    <th>Kaboomers</th>
                    <th>Spotters</th>
                    <th>Stanks</th>
                    <th>Max Concurrent Nydus Worms</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>3</td>
                    <td>11</td>
                    <td>3</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10</td>
                    <td>32</td>
                    <td>14</td>
                    <td>11</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>14</td>
                    <td>30</td>
                    <td>15</td>
                    <td>15</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>16</td>
                    <td>18</td>
                    <td>12</td>
                    <td>12</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>19</td>
                    <td>36</td>
                    <td>19</td>
                    <td>19</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>6+</td>
                    <td>32</td>
                    <td>66</td>
                    <td>32</td>
                    <td>40</td>
                    <td>11</td>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>You can attack buildings at night. However, they will spawn infested units shown below depending on the night. Each building has a 30-second cooldown before it can spawn the set again.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Night</th>
                <th>Spawn</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>6 Infested Terrans</td>
            </tr>
            <tr>
                <td>2,3</td>
                <td>6 Infested Terrans<br>4 Infested Marines</td>
            </tr>
            <tr>
                <td>4,5</td>
                <td>6 Infested Terrans<br>9 Infested Marines<br>3 Volatile Infested<br>2 Aberrations</td>
            </tr>
            <tr>
                <td>6+</td>
                <td>6 Infested Terrans<br>12 Infested Marines<br>3 Volatile Infested<br>3 Aberrations</td>
            </tr>
        </tbody>
    </table>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/deadofnight/virophage.jpg" alt="Virophage">
    </div>
    <p>The bonus objective requires you to kill the Virophage which appears at night, starting from the third night.</p>
    <p>The Virophage can spawn in one of the locations shown below.</p>
    <img src="/images/missiondata/deadofnight/virophagespawnlocations.jpg" alt="Virophage Spawn Locations">
    <p>The position the Virophage will spawn is based on the number of infested structures in that particular area. The Virophage will spawn in the area with the least infested structures. The game checks the areas from the top left, clockwise, prioritizing later areas. So, if you have cleared the South position of the map, the Virophage will always spawn there.</p>
    <h2 id="timings">Timings</h2>
        <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
        <p>Attack waves always spawn when there is 1:00 left on the night clock. Additionally, they will always come in transports. The side they come from is randomized. The attack wave Tech Levels and Strength Levels for each night are shown below.</p>
        <table class="centered">
            <thead>
                <tr>
                    <th>Night</th>
                    <th>Tech Level</th>
                    <th>Strength Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>5+</td>
                    <td>4</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>The Noise infested spawn randomly from any infested structure on the map. So, if you have cleared out a portion of the map, you will need less defenses on that side to deal with infested. Remember that there are still infested attack waves to deal with.</p>
    <p>Attack waves spawn near the four corners of the map and rally to a point on the map.</p>
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>It is often possible to clear the mission before Night #3, completely avoiding the need to defend more than two entrances, and dealing with Nydus Worms or Stanks.</li>
        <li>Both players should aim to push and clear the mission in order to clear the mission as soon as possible.</li>
        <li>Hunterlings like to target mineral lines, so ensure you have appropriate defenses in the mineral line if you have Hunterlings as the Special Infested.</li>
        <li>Engage Chokers with disposable units first, so it chokes them, before you engage with more expensive/heroic units.</li>
        <li>If playing a Protoss commander that has Pylons, power buildings with multiple Pylons to prevent Spotters from disabling an Artosis pylon and therefore your entire production.</li>
        <li>If playing a Protoss commander that has Pylons, place Pylons in front of ally static defense to bait Spotter stasis casts.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Infested Terrans do not drop biomass. If you can defend well, place your Toxic Nests behind your defensive force and only lure Aberrations and Special Infested units towards them.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: As soon as Dehaka spawns, send him West to the small enemy camp there to gain essence, then move Southwards up the ramp to get more essence before the first night.</li>
        <li><a href="/commanders/fenix">Fenix</a>: While massing a single unit is usually a bad strategy, mass Scouts with upgrades can make short work of infested units. Split your scouts into two or three squadrons to clear during the day.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Strike Fighter Platforms with Napalm upgrade can be used to destroy infested structures during the night.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: When using Strike Fighter Platforms, use the Area Size mastery so that you can target in between two infested buildings. This will destroy two infested buildings with one strike.</li>
        <li><a href="/commanders/karax">Karax</a>: An upgraded Solar Lance can be used to burn down lines of infested buildings.</li>
        <li><a href="/commanders/karax">Karax</a>: Use your Spear of Adun abilities to kill air units in this mission, instead of building anti-air units.</li>
        <li><a href="/commanders/nova">Nova</a>: Use your Ravens' Railgun turrets to destroy infested structures while your army moves on to clear enemy forces.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Use Infest Structure on Nydus Worms, select Broodlings and attack the already-infested worms to clear them.</li>
        <li><a href="/commanders/swann">Swann</a>: Swann can clear this mission using his drill (targeting Infested Structures with vision provided with a Hercules), while still defending during the night. For efficient calldown use, check the <a href="/commanders/swann">Swann Commander Page</a>.</li>
        <li><a href="/commanders/tychus">Tychus</a>: Use Sirius' turrets to destroy infested structures while your outlaws move on to clear ahead.</li>
        <li><a href="/commanders/zagara">Zagara</a>: Zagara with mass fully upgraded zerglings can clear the map before the third night if you use Frenzy and Roach Drops efficiently.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Use Shaded Cannons to clear buildings while your army moves on to clear enemy forces.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Zeratul's Purity of Will passive allows him to escape from a Choker stun when the immunity buff is applied to him.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
