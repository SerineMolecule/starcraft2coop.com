<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Part and Parcel</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Part and Parcel">
  <meta name="keywords" content="Starcraft co-op guides part parcel mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/partparcel">
  <script src="/scripts/preload.js"></script>
  <style>
      #hybridExperiment{
          border-radius:50%;
      }
  </style>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Part and Parcel</h1>
    <p id="missionPlace">Moebius Research Station</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#idRace">Identifying the Enemy Race</a></p>
        <p><a href="#baseAnalysis">Enemy Base Analysis</a></p>
        <p><a href="#hybridAbilities">Hybrid Abilities</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>Moebius Corps researchers have been experimenting on hybrid as they attempt to create even more destructive horrors. Help General Davis put an end to this by using Moebius Corps' own unfinished mech, the Balius, to kill the hybrid.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Kill Moebius Hybrid (3)</li>
            <li>Gather Balius Parts to delay Hybrid (70 x 3)</li>
            <li>Stop the Moebius Hybrid Project</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Trains (2)</li>
        </ul>
    <h2 id="idRace">Identifying the Enemy Race</h2>
    <p>It is possible to uniquely identify the enemy race on this map. First, check for creep (Alt +T) to check if the enemy is Zerg. If not, use a worker to attack one of the boxes near your Primary Structure. If the enemy race is Protoss, an enemy composition indicator will appear. If the enemy is Terran, no composition indicator will appear. A video is below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/fXVobSPfE5c" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
    <?php $mission = "partparcel"; ?>
    <p>The expansion on Part and Parcel is guarded by enemy forces, it is usually optimal to first capture the expansion. The expansion is shown below.</p>
    <?php switcher_generator("expo") ?>
    <p>The next area that is usually pushed is the bottom left. This is because there are very minimal defenses, and has enough parts that, combined with the expansion, can complete the first main objective.</p>
    <?php switcher_generator("swbase") ?>
    <p>At this point, the first hybrid would have spawned. The path between your main and the hybrid is guarded by tiny patches of enemies (which should have already been cleared on the way to your expansion) and an enemy camp. The enemy camp is shown below.</p>
    <?php switcher_generator("camp1") ?>
    <p>The next camp that would be attacked is the one East of your expansion. This usually lines up with the attack wave that spawns. The camp is shown below.</p>
    <?php switcher_generator("camp2") ?>
    <p>Once this base is cleared, it is usually recommended to clean up the area around this. Watch out for the Hybrid Dominator in this area.</p>
    <?php switcher_generator("cleanuplong") ?>
    <p>With the cleanup done, you can move south and take the camp at the bottom right of the map, right outside the main.</p>
    <?php switcher_generator("sebase") ?>
    <p>By this point, you should have a sufficiently large army to be able to push anywhere you like and gather the remaining parts to finish up the mission. Near the above base, there is an enemy base which has a lot of parts.</p>
    <?php switcher_generator("eastbaselong") ?>
    <p>Just north of this base, there is an alcove with some more parts to collect.</p>
    <?php switcher_generator("alcove") ?>
    <p>At the top left of the map there is a large enemy camp with several parts available for pick up as well.</p>
    <?php switcher_generator("necamplong") ?>
    <p>The final place you will need to push is the North enemy base. This is the area with most defenses. There is a ramp off to each side as well, if you prefer to attack from the side.</p>
    <?php switcher_generator("finalbaselong") ?>
    <h2 id="hybridAbilities">Hybrid Abilities</h2>
    <img id="hybridExperiment" src="/images/missiondata/partparcel/hybrid.jpg" alt="Moebius Hybrid Experiment">
    <p>The Hybrid that spawns after the containment cell is broken has its own abilities. These are listed below:</p>
    <table>
        <thead>
            <tr>
                <th>Ability</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Attack Wave Spawner</td>
                <td>Spawns an attack wave with the following Tech and Strength levels depending on which Hybrid in the mission it is. For more information, please check the <a href="/guides/enemycomps">Enemy Compositions page</a>.
                    <table>
                        <thead>
                            <tr>
                                <th>Hybrid</th>
                                <th>Tech Level</th>
                                <th>Strength Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>5</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>7</td>
                                <td>6</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td>45 seconds</td>
            </tr>
            <tr>
                <td>Fire Chains</td>
                <td>Creates a number of dots on the ground that eventually explode after 4.5 seconds, dealing 50 damage per hit. They can be either in a circular pattern (with radius 10) or in a conical pattern (with length 15).</td>
                <td>30 seconds</td>
            </tr>
            <tr>
                <td>Illusionist</td>
                <td>Creates 2, then 3, then 4 mirror images of the Hybrid. The total HP and shields of all spawned Hybrids is 30% of the main Hybrid's max HP and shields, equally spread across all of them.</td>
                <td>20 seconds</td>
            </tr>
            <tr>
                <td>Lock On</td>
                <td>Selects a target and places a lock-on marker on it for 5 seconds before holding its position, and then deals 200 damage vs. ground and 150 damage vs. air after 2 seconds.</td>
                <td>12 seconds</td>
            </tr>
            <tr>
                <td>Puddle Lines</td>
                <td>Creates a grid-like pattern on the ground that deals 1 damage per second to all units on top of them. The gridlines last 10 seconds.</td>
                <td>45 seconds</td>
            </tr>
            <tr>
                <td>Stasis</td>
                <td>Creates an area of radius 6 on the ground that lasts 5 seconds. Any units located in that area will be put into stasis for 8 seconds. Units in stasis cannot be attacked and do not take damage. However, they are unable to move, attack, or use abilities.</td>
                <td>20 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>The first Hybrid will only have one ability. The second two. And the third, three. Abilities are shared between the Hybrids. That is, a Hybrid will have all of the previous Hybrids' abitiles and an additional new one. A Hybrid cannot have both, Fire Chains and Puddle Lines at the same time.</p>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <p>The bonus objective requires you to destroy two Moebius trains before they cross the map. The the first train will spawn from the left, and the second from the right. They both spawn on the same rail. The path these trains take is shown below:</p>
    <img src="/images/missiondata/partparcel/bonuspath.jpg" alt="Bonus Train Path">
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>The timings for the attack waves, Strength and Tech Levels and targets on this map are shown below.</p>
    <p>The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:45</td>
                <td>1</td>
                <td>1</td>
                <td>Main Base</td>
            </tr>
            <tr>
                <td>2</td>
                <td>6:30</td>
                <td>2</td>
                <td>2</td>
                <td>Main Base</td>
            </tr>
            <tr>
                <td>3</td>
                <td>10:00</td>
                <td>3</td>
                <td>3</td>
                <td>Expansion</td>
            </tr>
            <tr>
                <td>4</td>
                <td>14:06</td>
                <td>4</td>
                <td>4</td>
                <td>Main Base</td>
            </tr>
            <tr>
                <td>5</td>
                <td>17:12</td>
                <td>5</td>
                <td>5</td>
                <td>Expansion</td>
            </tr>
            <tr>
                <td>6</td>
                <td>20:00</td>
                <td>6</td>
                <td>6</td>
                <td>Main Base</td>
            </tr>
            <tr>
                <td>7</td>
                <td>24:00</td>
                <td>7</td>
                <td>7</td>
                <td>Army</td>
            </tr>
            <tr>
                <td>8</td>
                <td>27:00</td>
                <td>5</td>
                <td>5</td>
                <td>Main Base</td>
            </tr>
            <tr>
                <td>9</td>
                <td>30:00</td>
                <td>6</td>
                <td>6</td>
                <td>Main Base</td>
            </tr>
        </tbody>
    </table>
    <p>The spawn timings for the Bonus trains is below:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Train</th>
                <th>Time</th>
                <th>Spawn Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>8:00</td>
                <td>Left</td>
            </tr>
            <tr>
                <td>2</td>
                <td>15:00</td>
                <td>Right</td>
            </tr>
        </tbody>
    </table>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>There are four spawn points for the attack waves on this map. The left spawn point for normal attack waves is shown below:</p>
    <img src="/images/missiondata/partparcel/attackwaveleftspawn.jpg" alt="Left Spawn Point of Normal Attack Wave">
    <p>The left spawn point for attack waves targeting the expansion is shown below:</p>
    <img src="/images/missiondata/partparcel/expattackwaveleftspawn.jpg" alt="Left Spawn Point of Expansion Attack Wave">
    <p>The right spawn point for normal attack waves is shown below:</p>
    <img src="/images/missiondata/partparcel/attackwaverightspawn.jpg" alt="Right Spawn Point of Attack Wave">
    <p>The right spawn point for attack waves targeting the expansion is shown below:</p>
    <img src="/images/missiondata/partparcel/expattackwaverightspawn.jpg" alt="Right Spawn Point of Expansion Attack Wave">
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Even once the Balius is complete, you can use that time to collect more parts. This will further add seconds to your clock, and the parts will count for the next phase of the mission, sometimes, allowing you to start the next Hybrid phase immediately.</li>
        <li>There are more parts present on the map than you need to complete the mission.</li>
        <li>Gen. Davis will not attack the bonus objective for you, but will attack other enemy units.</li>
        <li>If the Balius gets too damaged while pushing to the Hybrid, the Balius will enter flight mode, break the Hybrid containment cell, then fly back.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/horner">Han & Horner</a>: Strike Fighter Platforms can be used to break and collect parts.</li>
        <li><a href="/commanders/tychus">Tychus</a>: Crooked Sam can use his demolition charge on multiple train carriages at the same time, making him extremely effective at dealing with the bonus objective.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Once you have creep spread, move your Infested Colonist Compound to your expansion to minimize travel time of your infested.</li>
        <li><a href="/commanders/zagara">Zagara</a>: Build your macro hatcheries at your expansion for quick reinforcements.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Zeratul can identify the enemy race at the start of the game. As usual, if creep is present, the enemy race is Zerg. If the enemy is Terran, the four boxes that form a diamond shape will be centered in the expansion area on the minimap. If the diamond is off-center, the enemy race is Protoss. A video is below:</li>
    </ul>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/YkCX8PXqyAc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
