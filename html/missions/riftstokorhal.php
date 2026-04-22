<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Rifts to Korhal</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Rifts to Korhal">
  <meta name="keywords" content="Starcraft co-op guides rifts korhal mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/riftstokorhal">
  <script src="/scripts/preload.js"></script>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Rifts to Korhal</h1>
    <p id="missionPlace">Korhal</p>
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
    <p>Void rifts have opened across the Imperial sector of Augustgrad. Together, you must destroy the rifts before the hybrid overwhelm your forces.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Destroy all Void Shards (10)</li>
            <li>Do not allow a Void Shard to activate</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Pirate Ship (2)</li>
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
    <?php $mission = "riftstokorhal"; ?>
    <p>As Void Shards keep spawning, you will need to push into enemy camps and bases to destroy them. The normal order of bases and camps you will face for Void Shard spawns is shown below. A subsequent set of Void Shards will only spawn when the previous set has been destroyed, or all enemies in that area are dead.</p>
    <p>The first Void Shard is guarded by a very small force of enemy units. The defenses are shown below:</p>
    <?php switcher_generator("shard1") ?>
    <p>The second set of Void Shards is guarded by a significantly larger enemy force. The defenses are shown below:</p>
    <?php switcher_generator("shard2long") ?>
    <p>If you choose to attack the third set of Void Shards with a ground army, you will need to push through an enemy camp. Note that air units can completely bypass this camp. The camp is shown below:</p>
    <?php switcher_generator("shard3camp") ?>
    <p>The third set of Void Shards is placed within an enemy base. The base is shown below:</p>
    <?php switcher_generator("shard3long") ?>
    <p>The last set of Void Shards is located within a much larger enemy base. The base also has a small forward comp. All of this is shown below:</p>
    <?php switcher_generator("shard4long") ?>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/riftstokorhal/pirateship.jpg" alt="Pirate Ship">
        <img src="/images/missiondata/riftstokorhal/pirateship.jpg" alt="Pirate Ship">
    </div>
    <p>The bonus objective requires you to kill two Pirate Ships that will appear on the minimap. The first one will always spawn in the green-marked location. The second will always spawn in the blue-marked location. The spawn points are shown below:</p>
    <img src="/images/missiondata/riftstokorhal/piratespawnlocations.jpg" alt="Pirate Ship spawn locations">
    <p>The Pirate Ships have two abilities:</p>
    <ul>
        <li><b>Shock Blast:</b> This skill disables all non-heroic units hit around the Pirate Ship. Units cannot move, attack, or use skills.</li>
        <li><b>Bombing Run:</b> Does a large amount of damage in a straight line. This skill can usually kill an entire army if you are not careful.</li>
    </ul>
    <p>While the first Pirate Ship spawns unguarded, the second spawns behind an enemy base. The base is shown below:</p>
    <?php switcher_generator("piratebase") ?>
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:00</td>
                <td>1</td>
                <td>1</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>5:00</td>
                <td>2</td>
                <td>2</td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>8:00</td>
                <td>3</td>
                <td>3</td>
                <td>If only one expansion is built, targets that.<br>
                    Otherwise, targets random expansion.
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>11:00</td>
                <td>4</td>
                <td>4</td>
                <td></td>
            </tr>
            <tr>
                <td>5</td>
                <td>14:00</td>
                <td>5</td>
                <td>5</td>
                <td>Targets the other expansion</td>
            </tr>
            <tr>
                <td>6</td>
                <td>17:00</td>
                <td>6</td>
                <td>6</td>
                <td></td>
            </tr>
            <tr>
                <td>7</td>
                <td>20:30</td>
                <td>7</td>
                <td>7</td>
                <td></td>
            </tr>
            <tr>
                <td>8</td>
                <td>24:30</td>
                <td>7</td>
                <td>7</td>
                <td></td>
            </tr>
            <tr>
                <td>9</td>
                <td>26:30</td>
                <td>7</td>
                <td>7</td>
                <td></td>
            </tr>
            <tr>
                <td>10</td>
                <td>28:30</td>
                <td>7</td>
                <td>7</td>
                <td></td>
            </tr>
            <tr>
                <td>11</td>
                <td>30:00</td>
                <td>7</td>
                <td>7</td>
                <td></td>
            </tr>
        </tbody>
    </table>
    <p>The first Pirate Ship will spawn at 11:40.</p>
    <p>The second Pirate Ship will spawn when either of these conditions are met:</p>
    <ul>
        <li>The mission time hits 18:50</li>
    </ul>
    <p>or</p>
    <ul>
        <li>The last set of Void Shards are active</li>
    </ul>
    <p>or</p>
    <ul>
        <li>More than 25% of enemies in the pirate base are dead.</li>
    </ul>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>You can uniquely identify the enemy race at the start of the mission by looking at the creep (for Zerg), or by checking for a Protoss crate present (for Protoss) at Player 1's expansion. This is demonstrated in the video below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/UXv5i-Ttz1A" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>All attack waves have a single spawn point. This spawn point is located on the top of the ramp, just off the base containing the final set of Void Shards. This spawn point is shown below:</p>
    <img src="/images/missiondata/riftstokorhal/attackwavespawnpoint.jpg" alt="Spawn point of the Attack Waves">
    <p>While spawn-camping this point is quite difficult, most attack waves will follow the same path: They will turn left as soon as they get to the bottom of the ramp and will make their way down the narrow funnel leading to the middle of the map. Since the base is outside the path required to be cleared by players, it is usually not done. Note that if you do choose to clear this base, it may force the attack wave  to spawn nearer to the back of the base (the edge of the map).</p>
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Attack waves all spawn from the same location, so defending against them is really easy.</li>
        <li>You can bypass the defenses guarding the last two sets of Void Shards by using air units to go around them.</li>
        <li>The first attack wave on this map is unusually early. It spawns before most heroes are out. Ensure you have adequate defenses to deal with it. Tips are listed in the following section.</li>
    </ul>
    <h3>Handling the First Attack Wave</h3>
    <p>The first attack wave on this mission spawns at the 2:00 mark, meaning that most attack waves will reach the main base between 2:35 and 2:50, well before most hero units spawn. The below are some ways commanders can deal with this attack wave:</p>
    <ul>
        <li>Raynor: Rush a Barracks to build a Bunker and fill with four Marines</li>
        <li>Kerrigan: Build a Hatchery at the corner of the ramp and place two Spine Crawlers behind</li>
        <li>Artanis: Zealot warp-in + Orbital Strikes</li>
        <li>Swann: Blaster Billies/Flaming Betties depending on the composition (pre-scout with an SCV)</li>
        <li>Zagara: Free Banelings from Baneling Nest</li>
        <li>Vorazun: Tank with a Gateway then use Shadowguard</li>
        <li>Karax: Orbital Strikes</li>
        <li>Abathur: Toxic Nests</li>
        <li>Alarak: Structure Overcharge</li>
        <li>Nova: Build a chokepoint with a Barracks and Factory, then use a Railgun Turret</li>
        <li>Stukov: Bunker + Infest Structure</li>
        <li>Fenix: Rush your preferred AI Champion (Kaldalis recommended)</li>
        <li>Dehaka: Hero unit</li>
        <li>Han/Horner: Mag-mines</li>
        <li>Tychus: Tank with a structure until Tychus spawns</li>
        <li>Zeratul: Legion calldown</li>
        <li>Stetmann: Build a Hatchery at the corner of the ramp and place two Spine Crawlers behind</li>
        <li>Mengsk: Supply Bunker drop</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on your main's ramp to deal with the early attack wave.</li>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests near the exit of the funnel leading to the middle of the map to weaken/destroy attack waves.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: Dakrun can destroy the Pirate Ship as long as he does not get hit by its charge attack.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: One Dakrun can destroy <i>both</i> Pirate Ships if you time it right and charge him across the chasm. The video below shows this in action:
        <iframe width="475" height="268" src="https://www.youtube.com/embed/vtEeBmEFLt0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines near the exit of the funnel leading to the middle of the map to weaken/destroy attack waves.</li>
        <li><a href="/commanders/mengsk">Mengsk</a>: Drop Troopers (with the upgrade researched) at the top of the ramp between Void Shards set #3 and set #4. Then build Earthsplitters to clear all Void Shards on the map.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider Mines near the exit of the funnel leading to the middle of the map to weaken/destroy attack waves.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider Mines near the exit of the funnel leading to the middle of the map to weaken/destroy attack waves.</li>
        <li><a href="/commanders/swann">Swann</a>: Concentrated Beam can be used to deal with all the attack waves, and can even wipe it out entirely if placed correctly.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
