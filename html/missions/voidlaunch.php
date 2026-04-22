<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Void Launch</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Void Launch">
  <meta name="keywords" content="Starcraft co-op guides Void Launch mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/voidlaunch">
  <script src="/scripts/preload.js"></script>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Void Launch</h1>
    <p id="missionPlace">Kaldir</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#baseAnalysis">Enemy Base Analysis</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>Amon is using Kaldir's warp conduits to transport his troops across the sector. Destroy the shuttles carrying the troops before they reach the warp conduits.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Destroy Shuttles (7 Waves).</li>
            <li>Do Not Allow 5 Shuttles to Escape.</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Escort Scientists to Xel'Naga Shrines (3)</li>
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
    <?php $mission = "voidlaunch"; ?>
    <p>It is not required to push into enemy bases this map. However, it is highly recommended you do so, as it will simplify the mission in the later stages, where shuttles will spawn from multiple bays at the same time. By clearing enemy bases, you can build static defenses at the bays themselves, and spawn-camp the shuttles.</p>
    <p>The base on the far left is shown below:</p>
    <?php switcher_generator("leftbaselong") ?>
    <p>To the East of this base is a smaller base guarding the middle bay. This is the least heavily defended base present. However, it can only be accessed through one of the other two bases:</p>
    <?php switcher_generator("midbaselong") ?>
    <p>The base on the far right is shown below:</p>
    <?php switcher_generator("rightbaselong") ?>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/voidlaunch/researchvessel.jpg" alt="Research Vessel">
        <img src="/images/missiondata/voidlaunch/researchvessel.jpg" alt="Research Vessel">
        <img src="/images/missiondata/voidlaunch/researchvessel.jpg" alt="Research Vessel">
    </div>
    <p>The bonus objective requires you to escort three Research Vessels to the Xel'Naga Shrines on the map, and defend them against a single attack wave targeting them. The locations of the Xel'Naga Shrines are shown below:</p>
    <p>The first Shrine is guarded by a very small force of enemy units.</p>
    <?php switcher_generator("shrine1") ?>
    <p>The second Shrine is guarded by a relatively strong force of units.</p>
    <?php switcher_generator("shrine2") ?>
    <p>The last Shrine is guarded by an enemy camp which will require a significant force to clear.</p>
    <?php switcher_generator("shrine3long") ?>
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>Shuttle Timings, Headings, Escort Strength and Tech Levels for this mission are shown below. Note that wave #7 will occur in one of three different patterns, all listed in the table.</p>
    <div class="tableContainer">
        <table class="centered">
            <thead>
                <tr>
                    <th>Wave</th>
                    <th>Shuttles</th>
                    <th>Time</th>
                    <th>Bay</th>
                    <th>Heading</th>
                    <th>Tech Level</th>
                    <th>Strength Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>6:18</td>
                    <td>Middle</td>
                    <td>Middle</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>3</td>
                    <td>9:00</td>
                    <td>Middle</td>
                    <td>Left or Right</td>
                    <td>2</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>3</td>
                    <td>12:30</td>
                    <td>Middle</td>
                    <td>Right or Left</td>
                    <td>3</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>3,3</td>
                    <td>15:30</td>
                    <td>Left,Right or Left,Middle</td>
                    <td>Left,Middle or Middle,Right</td>
                    <td>3,4 or 4,3</td>
                    <td>3,4 or 4,3</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>2,2,2</td>
                    <td>18:00</td>
                    <td>Right,Middle,Left</td>
                    <td>Middle,Middle,Middle</td>
                    <td>3,4,3</td>
                    <td>3,4,3</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>5</td>
                    <td>20:30</td>
                    <td>Left or Right</td>
                    <td>Right or Left</td>
                    <td>6 or 6</td>
                    <td>6 or 6</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>2,3<br>2,3</td>
                    <td>23:00<br>23:45</td>
                    <td>Middle,Right<br>Middle,Left</td>
                    <td>Middle,Right<br>Middle,Left</td>
                    <td>7,5<br>7,5</td>
                    <td>6,5<br>7,5</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>2,2<br>3,3</td>
                    <td>23:00<br>23:30<br>23:35</td>
                    <td>Middle<br>Middle<br>Left,Right</td>
                    <td>Left/Right<br>Right/Left<br>Middle,Middle</td>
                    <td>4<br>6<br>7,7</td>
                    <td>5<br>5<br>6,7</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>3,3<br>2,2</td>
                    <td>23:00<br>23:40</td>
                    <td>Left,Right<br>Left,Right</td>
                    <td>Middle,Middle<br>Left,Right</td>
                    <td>7,6<br>4,6</td>
                    <td>7,6<br>5,5</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>The Escort Waves select units from a different pool to the regular attack waves. This pool is shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Tech Level</th>
                <th>Protoss Pool</th>
                <th>Terran Pool</th>
                <th>Zerg Pool</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Scouts</td>
                <td>Vikings</td>
                <td>Mutalisk</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Scouts / Phoenixes</td>
                <td>Vikings / Banshees</td>
                <td>Mutalisk / Corruptor</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Scouts / Phoenixes / Hybrid Nemesis</td>
                <td>Vikings / Banshees / Hybrid Nemesis</td>
                <td>Mutalisk / Corruptor / Hybrid Nemesis</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Void Ray / Phoenixes / Hybrid Nemesis / Oracle</td>
                <td>Vikings / Banshees / Hybrid Nemesis / Reapers</td>
                <td>Mutalisk / Corruptor / Hybrid Nemesis / Zergling</td>
            </tr>
            <tr>
                <td>5+</td>
                <td>Void Ray / Phoenixes / Hybrid Nemesis / Oracle / Colossus</td>
                <td>Vikings / Banshees / Hybrid Nemesis / Battlecruiser</td>
                <td>Mutalisk / Corruptor / Hybrid Nemesis / Brood Lord</td>
            </tr>
        </tbody>
    </table>
    <p>The last wave of Escorts will either contain two Motherships, one Loki, or one Leviathan, per escort, depending on the enemy race.</p>
    <p>The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Spawn Point</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:00</td>
                <td>1</td>
                <td>1</td>
                <td>Right</td>
            </tr>
            <tr>
                <td>2</td>
                <td>5:00</td>
                <td>2</td>
                <td>2</td>
                <td>Left</td>
            </tr>
            <tr>
                <td>3</td>
                <td>7:30</td>
                <td>2</td>
                <td>2</td>
                <td>Side of Expansion with most structures</td>
            </tr>
            <tr>
                <td>4</td>
                <td>10:00</td>
                <td>3</td>
                <td>3</td>
                <td>Right</td>
            </tr>
            <tr>
                <td>5</td>
                <td>11:00</td>
                <td>3</td>
                <td>3</td>
                <td>Left</td>
            </tr>
            <tr>
                <td>6</td>
                <td>14:00</td>
                <td>3</td>
                <td>3</td>
                <td>Side of Warp Conduit with most structures</td>
            </tr>
            <tr>
                <td>7</td>
                <td>16:48</td>
                <td>4</td>
                <td>4</td>
                <td>Left</td>
            </tr>
            <tr>
                <td>8</td>
                <td>19:18</td>
                <td>5</td>
                <td>5</td>
                <td>Right</td>
            </tr>
            <tr>
                <td>9</td>
                <td>21:48</td>
                <td>6</td>
                <td>6</td>
                <td>Right</td>
            </tr>
            <tr>
                <td>10</td>
                <td>24:18</td>
                <td>7</td>
                <td>7</td>
                <td>Right</td>
            </tr>
        </tbody>
    </table>
    <p>Additionally, some attack waves will also have Hybrids in them. These attack waves, and the number of Hybrids in them is shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Wave</th>
                <th>Minor Hybrid</th>
                <th>Major Hybrid</th>
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
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr>
                <td>4</td>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr>
                <td>5</td>
                <td>3</td>
                <td>0</td>
            </tr>
            <tr>
                <td>6</td>
                <td>3</td>
                <td>0</td>
            </tr>
            <tr>
                <td>7</td>
                <td>0</td>
                <td>2</td>
            </tr>
            <tr>
                <td>8</td>
                <td>0</td>
                <td>2</td>
            </tr>
            <tr>
                <td>9</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>10</td>
                <td>2</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <p>The types of these Hybrids are randomized as follows:</p>
    <ul>
        <li>50% chance for the Minor Hybrid to be a Hybrid Destroyer or a Hybrid Reaver.</li>
        <li>50% chance for the Major Hybrid to be a Hybrid Dominator or a Hybrid Behemoth.</li>
    </ul>
    <p>The bonus objectives will start at the following times:</p>
    <ul>
        <li>8:18</li>
        <li>14:48</li>
        <li>19:48</li>
    </ul>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>All the shuttles and their escorts will spawn from the launch bays. However, there are two other spawning points, dedicated for the attack waves that attack player bases. These are located near the two entrances to the enemy bases on the map on either side of the first Xel'Naga Shrine. These are shown below.</p>
    <img src="/images/missiondata/voidlaunch/attackwavespawnpoints.jpg" alt="Attack Wave Spawn Points">
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Clearing the enemy bases early can give you access to two additional expansions for an even greater foothold in the game.</li>
        <li>Once the enemies around a bay is cleared, build anti-air static defenses to instantly shoot down shuttles as they spawn.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: Get your early Essence by attacking the enemies near the first Xel'Naga Shrine.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider-mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider-mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: Place a Dark Pylon at each Conduit to allow you to move your army to intercept multiple shuttles in the same wave.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Zeratul can uniquely identify the enemy race at the start of the game. As usual, if creep is present, the enemy race is Zerg. If the enemy is Protoss, gold floor plates will be present in the enemy base. If concrete panels are present, the enemy is Terran. A video is below:</li>
    </ul>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/YXDuDOIrkro" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
