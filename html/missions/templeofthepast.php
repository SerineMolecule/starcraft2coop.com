<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Temple of the Past</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Temple of the Past">
  <meta name="keywords" content="Starcraft co-op guides temple past mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/templeofthepast">
  <script src="/scripts/preload.js"></script>
  <style>
    .arrow{
        font-size:1.8em;
        font-weight:bold;
        vertical-align:middle;
    }
    .topAlign{
        vertical-align:text-top;
    }
  </style>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Temple of the Past</h1>
    <p id="missionPlace">Shakuras</p>
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
    <p>The xel'naga temple on Shakuras is under assault. Build your defenses and hold out against the enemy's siege.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Defend the Temple (26:00)</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Zenith Stones (3)</li>
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
    <?php $mission = "templeofthepast"; ?>
    <p>You are not required to push into enemy bases on Temple of the Past. However, it is highly recommend you do so for the following reasons:</p>
    <ul>
        <li>Destroying the enemy bases prevents them from adding static defenses that will eventually creep up to your ramps.</li>
        <li>It allows you to easily access the Void Thrashers that will spawn on the map without losing any troops in the process, especially if you clear it early when the enemy is at its weakest.</li>
        <li>You can spawn-camp attack waves with calldowns to weaken them before you engage them with your main force.</li>
        <li>The bases are very lightly defended and very easy to clear.</li>
    </ul>
    <p>There are three bases to clear, one for each of the ramps leading to the temple. These are shown below. Note: These are the starting configurations of the enemy bases. As time progresses in the mission, more static defense will be made. It is best to clear them as quickly as possible.</p>
    <p>Middle Base:</p>
    <?php switcher_generator("basemidlong") ?>
    <p>Top Base:</p>
    <?php switcher_generator("basetop") ?>
    <p>Bottom Base:</p>
    <?php switcher_generator("basebottomlong") ?>
    <p>If you like, you can also clear the base from which the drops come from. However, there is no advantage to doing so, and you will require to fly units over, or warp/teleport them in at that location.</p>
    <?php switcher_generator("basedroplong") ?>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/templeofthepast/zenithstone.jpg" alt="Zenith Stone">
        <img src="/images/missiondata/templeofthepast/zenithstone.jpg" alt="Zenith Stone">
        <img src="/images/missiondata/templeofthepast/zenithstone.jpg" alt="Zenith Stone">
    </div>
    <p>The bonus objective requires you to destroy the three Zenith Stones on the map. Each Zenith Stone is located off each path leading to the temple. The locations are shown below:</p>
    <img src="/images/missiondata/templeofthepast/zenithstonelocations.jpg" alt="Minimap of Zenith Stone locations">
    <p>The Zenith Stones are present from the start of the game. They will be revealed to the player either when the player gets within 15 range of any of the stones or when 9 minutes have elapsed. There is no time limit to destroy the stones. The stones are guarded by a very small force. Additionally, they will cast Psionic Storms in random areas around them when their HP drops to below 50%.</p>
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page. If Strength and Tech levels differ between attack waves occurring at the same time, they will be separated with commas respectively.</p>
    <p>There are two patterns on this mission. The patterns are shown below. Attack directions show you to direction the attack wave moves in.</p>
    <div class="tableContainer">
        <table class="centered">
            <tbody class="topAlign">
                <tr>
                    <td>
                        <p><b>Pattern A:</b> This will come with an attack warning at 3:15</p>
                        <table class="centered directions">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Tech Level</th>
                                    <th>Strength Level</th>
                                    <th>Direction</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3:00</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>4:00</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>6:00</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>1 Minor Hybrid</td>
                                </tr>
                                <tr>
                                    <td>6:45</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>7:30</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>8:15</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>Thrasher + Attack Wave</td>
                                </tr>
                                <tr>
                                    <td>9:00</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↘↖</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>10:00</td>
                                    <td>4,2</td>
                                    <td>3,3</td>
                                    <td><span class="arrow">↘↖</span></td>
                                    <td>1 Minor Hybrid for Player 1</td>
                                </tr>
                                <tr>
                                    <td>11:00</td>
                                    <td>4,4</td>
                                    <td>4,3</td>
                                    <td><span class="arrow">↘↖</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>12:00</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>12:30</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>13:15</td>
                                    <td>5</td>
                                    <td>4</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>13:45</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span class="arrow">↖</span></td>
                                    <td>Thrasher Only</td>
                                </tr>
                                <tr>
                                    <td>15:00</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop<br>1 Hybrid Nemesis</td>
                                </tr>
                                <tr>
                                    <td>15:20</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop<br>1 Hybrid Nemesis</td>
                                </tr>
                                <tr>
                                    <td>16:10</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>16:40</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>16:55</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span class="arrow">↘</span></td>
                                    <td>Thrasher Only</td>
                                </tr>
                                <tr>
                                    <td>18:00</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td><span class="arrow">↘</span></td>
                                    <td>3 Minor Hybrid<br>1 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>18:15</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td><span class="arrow">↖</span></td>
                                    <td>3 Minor Hybrid<br>1 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>19:15</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop</td>
                                </tr>
                                <tr>
                                    <td>20:00</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>20:15</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙↙</span></td>
                                    <td>Double Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>20:45</td>
                                    <td>2,4</td>
                                    <td>3,3</td>
                                    <td><span class="arrow">↖↖</span></td>
                                    <td>Double Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>21:15</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↗↗</span></td>
                                    <td>Double Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>21:30</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙↙</span> or <span class="arrow">↖↖</span> or <span class="arrow">↗↗</span></td>
                                    <td>Double Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>22:00</td>
                                    <td>6</td>
                                    <td>5</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>22:30</td>
                                    <td>4,6</td>
                                    <td>5,5</td>
                                    <td><span class="arrow">↘↖</span></td>
                                    <td>Double Thrasher + Attack Wave</td>
                                </tr>
                                <tr>
                                    <td>23:30</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td><span class="arrow">↘</span></td>
                                    <td>4 Minor Hybrid<br>2 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>23:40</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td><span class="arrow">↖</span></td>
                                    <td>3 Minor Hybrid<br>2 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>24:40</td>
                                    <td>5,6,7</td>
                                    <td>5,5,7</td>
                                    <td><span class="arrow">↘↖↗</span></td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td>
                        <p><b>Pattern B:</b> This will come with an attack warning at 3:10</p>
                        <table class="centered directions">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Tech Level</th>
                                    <th>Strength Level</th>
                                    <th>Direction</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3:00</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>4:10</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>6:00</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>1 Minor Hybrid</td>
                                </tr>
                                <tr>
                                    <td>6:45</td>
                                    <td>1</td>
                                    <td>1</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>7:30</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>8:15</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>Thrasher Only</td>
                                </tr>
                                <tr>
                                    <td>9:00</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↘</span> or <span class="arrow">↖</span></td>
                                    <td>Two 3/3 Attack Waves together</td>
                                </tr>
                                <tr>
                                    <td>10:00</td>
                                    <td>4,2</td>
                                    <td>3,3</td>
                                    <td><span class="arrow">↘↖</span></td>
                                    <td>1 Minor Hybrid for Player 1<br>2 Minor Hybrid for Player 2</td>
                                </tr>
                                <tr>
                                    <td>11:00</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↖</span> or <span class="arrow">↘</span></td>
                                    <td>Two 4/4 Attack Waves together</td>
                                </tr>
                                <tr>
                                    <td>12:00</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>12:30</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>3 Minor Hybrid</td>
                                </tr>
                                <tr>
                                    <td>13:35</td>
                                    <td>5</td>
                                    <td>4</td>
                                    <td><span class="arrow">↖</span></td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>13:45</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span class="arrow">↖</span></td>
                                    <td>Thrasher Only</td>
                                </tr>
                                <tr>
                                    <td>15:00</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>15:30</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Drop Pod/Warp-in</td>
                                </tr>
                                <tr>
                                    <td>15:45</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><span class="arrow">↘</span></td>
                                    <td>Thrasher Only</td>
                                </tr>
                                <tr>
                                    <td>16:35</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop<br>1 Hybrid Nemesis</td>
                                </tr>
                                <tr>
                                    <td>16:55</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop<br>1 Hybrid Nemesis</td>
                                </tr>
                                <tr>
                                    <td>18:00</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td><span class="arrow">↘</span> or <span class="arrow">↗</span></td>
                                    <td>3 Minor Hybrid<br>1 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>18:15</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td><span class="arrow">↖</span> or <span class="arrow">↗</span></td>
                                    <td>3 Minor Hybrid<br>1 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>19:15</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop</td>
                                </tr>
                                <tr>
                                    <td>20:00</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td><span class="arrow">↗</span></td>
                                    <td>Thrasher + Attack Wave<br>3 Minor Hybrid<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>20:20</td>
                                    <td>3</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop<br>1 Hybrid Nemesis</td>
                                </tr>
                                <tr>
                                    <td>20:40</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td><span class="arrow">↙</span></td>
                                    <td>Air Drop<br>1 Hybrid Nemesis</td>
                                </tr>
                                <tr>
                                    <td>22:30</td>
                                    <td>4,6</td>
                                    <td>5,5</td>
                                    <td><span class="arrow">↘↖</span></td>
                                    <td>Double Thrasher + Attack Wave</td>
                                </tr>
                                <tr>
                                    <td>23:30</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td><span class="arrow">↘</span></td>
                                    <td>4 Minor Hybrid<br>2 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>23:40</td>
                                    <td>3</td>
                                    <td>5</td>
                                    <td><span class="arrow">↖</span></td>
                                    <td>3 Minor Hybrid<br>2 Hybrid Nemesis<br>1 Major Hybrid</td>
                                </tr>
                                <tr>
                                    <td>24:40</td>
                                    <td>5,6,7</td>
                                    <td>5,5,7</td>
                                    <td><span class="arrow">↘↖↗</span></td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>Some attack waves will also have Hybrids in them. The types of these Hybrids will depend on the enemy race as well as the pattern, as follows:</p>
    <table>
        <tr>
            <th colspan="3">Pattern A</th>
            <th colspan="3">Pattern B</th>
        </tr>
        <tr>
            <th>Race</th>
            <th>Minor Hybrid</th>
            <th>Major Hybrid</th>
            <th>Race</th>
            <th>Minor Hybrid</th>
            <th>Major Hybrid</th>
        </tr>
        <tbody>
            <tr>
                <td>Protoss</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Behemoth</td>
                <td>Protoss</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Dominator</td>
            </tr>
            <tr>
                <td>Terran (50%)</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Behemoth</td>
                <td>Terran (50%)</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Behemoth</td>
            </tr>
            <tr>
                <td>Terran (50%)</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Dominator</td>
                <td>Terran (50%)</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Dominator</td>
            </tr>
            <tr>
                <td>Zerg</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Dominator</td>
                <td>Zerg</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Behemoth</td>
            </tr>
        </tbody>
    </table>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>There are two types of spawn points of interest in this mission:</p>
    <ul>
        <li><b>Attack Wave Spawn Points:</b> These are where the Attack Waves that travel towards the temple spawn. There are four spawn points, one for each side of the temple (three ramps and one drop attack).</li>
        <li><b>Drop/Warp-in Locations:</b> These are part of the mid-game where Terran/Zerg forces will drop and Protoss forces will warp in. There are four possible drop/warp-in locations.</li>
    </ul>
    <p>Top Attack Wave Spawn Point:</p>
    <img src="/images/missiondata/templeofthepast/topspawnpoint.jpg" alt="Top Attack Wave Spawn Point">
    <p>Middle Attack Wave Spawn Point:</p>
    <img src="/images/missiondata/templeofthepast/midspawnpoint.jpg" alt="Middle Attack Wave Spawn Point">
    <p>Bottom Attack Wave Spawn Point:</p>
    <img src="/images/missiondata/templeofthepast/bottomspawnpoint.jpg" alt="Bottom Attack Wave Spawn Point">
    <p>Drop Attack Wave Spawn Point:</p>
    <img src="/images/missiondata/templeofthepast/dropspawnpoint.jpg" alt="Drop Attack Wave Spawn Point">
    <p>The locations for Drop Attacks and Warp-ins are shown below:</p>
    <img src="/images/missiondata/templeofthepast/warpinlocations.jpg" alt="Drop Pod/Warp-in Locations">
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Try to clear the enemy bases around the map as early as possible to simplify the mission.</li>
        <li>Build anti-air defenses and (if applicable) place Overlords around the temple when playing against Zerg compositions with Scourge to prevent them from targeting the temple.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests in front of the rocks on the middle lane to kill the early attack waves and stall them before they break the rocks.</li>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: Get early Essence by killing the enemies at each of the Zenith Stones. Use Deep Tunnel or jump over the rocks to access them.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines in front of the rocks on the middle lane to kill the early attack waves and stall them before they break the rocks.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider-mines on attack wave and Thrasher spawn locations to weaken them.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider-mines on attack wave and Thrasher spawn locations to weaken them.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
