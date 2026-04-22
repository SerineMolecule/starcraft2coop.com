<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Void Thrashing</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Void Thrasing">
  <meta name="keywords" content="Starcraft co-op guides void thrashing mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/voidthrashing">
  <script src="/scripts/preload.js"></script>
  <style>
    .topAlign{
        vertical-align:text-top;
    }
  </style>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Void Thrashing</h1>
    <p id="missionPlace">Char</p>
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
    <p>Void thrashers are surfacing on Char. Work together and destroy them before Sgt. Hammer's fortress falls to their ruthless assault.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Kill the Void Thrashers (10)</li>
            <li>Sgt. Hammer's Fortress Must Survive</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Archangel (1)</li>
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
    <?php $mission = "voidthrashing"; ?>
    <p>The first Void Thrasher on Void Thrashing is guarded by a very small force of enemy units. This area is shown below.</p>
    <?php switcher_generator("thrasher1") ?>
    <p>The path to the second set of Void Thrashers is guarded by an enemy camp. This is shown below:</p>
    <?php switcher_generator("thrasher2camp") ?>
    <p>Once the camp has been cleared out, the second Set of Void Thrashers are guarded by a strong enemy force.</p>
    <?php switcher_generator("thrasher2") ?>
    <p>Once this set of Void Thrashers are cleared, the third set are also guarded by a camp of enemy units.</p>
    <?php switcher_generator("thrasher3camp") ?>
    <p>Once this camp is cleared, the third Set of Void Thrashers can be cleared.</p>
    <?php switcher_generator("thrasher3") ?>
    <p>The Final Set of Void Thrashers are in a heavily fortified enemy base. This is shown below:</p>
    <?php switcher_generator("thrasher4long") ?>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/voidthrashing/archangel.jpg" alt="Archangel">
    </div>
    <p>The bonus objective requires you to destroy the Archangel. The Archangel is an enemy unit with an Area-of-Effect attack. The Archangel is guarded by an enemy force, shown below. The bonus objective is always present on the map, so it will trigger whenever a player gets vision or after a certain amount of time has elapsed.</p>
    <?php switcher_generator("archangel") ?>
    <p>When the Archangel gets to below 50% HP, it will switch to Fighter mode and fly to another area of the map. With high burst damage, it is very possible to destroy the Archangel before it flies away. The below minimap shows where it ends up after flying away.</p>
    <?php switcher_generator("archangelescape") ?>
    <p>Note that this can happen several times. The escape location will alternate between the two places until the Archangel is destroyed.</p>
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>Void Thrashers will spawn if the total HP and Shields (vitality) of all units and buildings around the Void Thrashers reaches 50% relative to when the game started.</p>
    <p>Additionally, the each set of Void Thrashers will spawn at a given time, regardless of the state of the mission. These timings are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Set</th>
                <th>Spawn Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>4:30</td>
            </tr>
            <tr>
                <td>2</td>
                <td>9:20</td>
            </tr>
            <tr>
                <td>3</td>
                <td>13:40</td>
            </tr>
            <tr>
                <td>4</td>
                <td>18:00</td>
            </tr>
        </tbody>
    </table>
    <p>There are two patterns for attack waves in this mission, with different timings. The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <tbody class="topAlign">
            <tr>
                <td>
                    <p><b>Pattern A:</b></p>
                    <table class="centered">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Tech Level</th>
                                <th>Strength Level</th>
                                <th>Spawn Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3:00</td>
                                <td>1</td>
                                <td>1</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>6:00</td>
                                <td>2</td>
                                <td>2</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>9:00</td>
                                <td>3</td>
                                <td>3</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>12:00</td>
                                <td>4</td>
                                <td>4</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>15:00</td>
                                <td>5</td>
                                <td>5</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>18:00</td>
                                <td>6</td>
                                <td>6</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>21:00</td>
                                <td>7</td>
                                <td>7</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>24:00</td>
                                <td>7</td>
                                <td>7</td>
                                <td>Right</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <p><b>Pattern B:</b></p>
                    <table class="centered">
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Tech Level</th>
                                <th>Strength Level</th>
                                <th>Spawn Point</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4:00</td>
                                <td>1</td>
                                <td>2</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>8:00</td>
                                <td>2</td>
                                <td>3</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>10:00</td>
                                <td>3</td>
                                <td>3</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>14:00</td>
                                <td>4</td>
                                <td>5</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>16:00</td>
                                <td>5</td>
                                <td>4</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>20:00</td>
                                <td>6</td>
                                <td>7</td>
                                <td>Left</td>
                            </tr>
                            <tr>
                                <td>22:00</td>
                                <td>7</td>
                                <td>7</td>
                                <td>Right</td>
                            </tr>
                            <tr>
                                <td>26:00</td>
                                <td>7</td>
                                <td>7</td>
                                <td>Left</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <p>If players have not gotten vision of the Archangel after 13:30, the bonus objective will start.</p>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>There are two spawn points for attack waves on this map.</p>
    <p>Left Spawn Point (near second set of Void Thrashers):</p>
    <img src="/images/missiondata/voidthrashing/leftspawnpoint.jpg" alt="Left Spawn Point">
    <p>Right Spawn Point (near bonus area):</p>
    <img src="/images/missiondata/voidthrashing/rightspawnpoint.jpg" alt="Right Spawn Point">
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>This mission is very short, and rewards aggressive play because of weak enemy defenses.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider-mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider-mines on attack wave spawn locations to weaken them.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Move your Infested Colonist Compound to the first Void Thrasher location after it is killed for quick reinforcements.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
