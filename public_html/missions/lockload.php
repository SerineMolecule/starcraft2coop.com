<?php
include("../header.php");
include("../scripts/switchergenerator.php");
?>
  <title>Starcraft 2 Co-op - Mission Guide - Lock & Load</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Lock & Load">
  <meta name="keywords" content="Starcraft co-op guides lock load mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/lockload">
  <script src="/scripts/preload.js"></script>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Co-op Mission Guide: Lock & Load</h1>
    <p id="missionPlace">Ulnar</p>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#baseAnalysis">Enemy Base Analysis</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <a id="misSum"></a><h2>Mission Summary</h2>
    <p>Amon seeks to destroy Ulnar before it can be used to open a gate to the Void. You and your ally must take control of the celestial locks before their energies overload.</p>
    <a id="objectives"></a><h2>Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Activate Celestial Locks (5)</li>
            <li>Prevent Lock Overload</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Xel'Naga Construct (1)</li>
        </ul>
    <a id="baseAnalysis"></a><h2>Enemy Base Analysis</h2>
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
    <?php $mission = "lockload"; ?>
    <p>The goal of the mission is to capture all the Celestial Locks before they overload. You capture a Lock by moving a unit and an ally's unit near the Lock. It takes 30 seconds to capture a lock.</p>
    <p>When the enemy captures a Lock, an overload ticker will start. When the overload ticker reaches 9000, you will fail the mission. Note that in-game, this is shown as a percentage. The speed of the overload changes depending on how many Locks the enemy has captured. The table below summarizes this information.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Captured Locks</th>
                <th>Ticks per Second</th>
                <th>Time to Mission Fail</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>-</td>
            </tr>
            <tr>
                <td>1</td>
                <td>6</td>
                <td>25:00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>7</td>
                <td>21:25</td>
            </tr>
            <tr>
                <td>3</td>
                <td>8</td>
                <td>18:45</td>
            </tr>
            <tr>
                <td>4</td>
                <td>9</td>
                <td>16:40</td>
            </tr>
            <tr>
                <td>5</td>
                <td>10</td>
                <td>15:00</td>
            </tr>
        </tbody>
    </table>
    <p>The first Lock that is captured is usually the middle lock. This is very lightly defended, and usually a hero unit can clear.</p>
    <?php switcher_generator("lock_c") ?>
    <p>The next Lock that is captured is usually either the West or the Southern Lock. The Western Lock is shown below. Note the presence of cloaked/burrowed units.</p>
    <?php switcher_generator("lock_w") ?>
    <p>The Southern Lock is shown below. Note the presence of Capital Ships.</p>
    <?php switcher_generator("lock_s") ?>
    <p>The Eastern Lock is one of the more difficult Locks to capture, due to the presence of Hybrids and high-HP units. You will need to push up one of the two ramps to get to the Lock.</p>
    <p>If you choose to push from the Southern ramp, there is a small enemy camp in this location as follows. Note the presence of cloaked units.</p>
    <?php switcher_generator("lock_e_bottomcamp") ?>
    <p>If you choose to push from the Northern ramp, there is also a camp, but guarded by two Hybrid Destroyers.</p>
    <?php switcher_generator("lock_e_topcamp") ?>
    <p>The Eastern Lock is well-defended by Capital Ships and a Hybrid Dominator.</p>
    <?php switcher_generator("lock_e") ?>
    <p>The last Lock that has to be captured is the Northern Lock. Like the Eastern Lock, there are two ramps that can be used to access it. The Southern ramp is guarded by a small force of units.</p>
    <?php switcher_generator("lock_n_rampguard") ?>
    <p>If you choose to go up the Eastern ramp, you can bypass the above force entirely.</p>
    <?php switcher_generator("lock_n") ?>
    <a id="bonus"></a><h2>Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/lockload/xelnagaconstruct.jpg" alt="Xel'Naga Construct">
    </div>
    <p>The bonus objective requires you to kill the Xel'Naga Construct. The Construct is guarded by a small force of enemy units as shown below.</p>
    <?php switcher_generator("xelnagaconstruct") ?>
    <p>The Xel'Naga Construct can be quite difficult to kill in the early game. Usually, it is much easier to kill it on the way to Northern Lock if that is the last Lock to be captured.</p>
    <a id="timings"></a><h2>Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>Enemy attack waves will target certain Locks first. The first player-captured Lock on their list will be their target. If all the Locks on their list are overloaded (ie. enemy-controlled), they will target your base.</p>
    <p>The attack wave timings, Strength and Tech Levels, and their Lock targets are shown below. Here, "O" stands for the middle lock.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Lock Target Check List</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>4:00</td>
                <td>1</td>
                <td>3</td>
                <td>O</td>
                <td>Single Wave from the Left</td>
            </tr>
            <tr>
                <td>2</td>
                <td>8:00</td>
                <td>2</td>
                <td>4</td>
                <td>S ⇨ O</td>
                <td>Single Wave from the Right</td>
            </tr>
            <tr>
                <td>3</td>
                <td>11:00</td>
                <td>3</td>
                <td>5</td>
                <td>N ⇨ W ⇨ O<br>E ⇨ S ⇨ O</td>
                <td>Double Wave</td>
            </tr>
            <tr>
                <td>4</td>
                <td>14:00</td>
                <td>3</td>
                <td>5</td>
                <td>W ⇨ O<br>S ⇨ O </td>
                <td>Double Wave</td>
            </tr>
            <tr>
                <td>5</td>
                <td>17:00</td>
                <td>4</td>
                <td>6</td>
                <td>N ⇨ W ⇨ O<br>E ⇨ S</td>
                <td>Double Wave</td>
            </tr>
        </tbody>
    </table>
    <p>After the 5th attack wave, the subsequent attack waves will follow a fixed pattern, starting from the 19-minute mark as shown below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Lock Target Check List</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>19:00</td>
                <td>5</td>
                <td>6</td>
                <td>S<br>W</td>
                <td>Double Wave</td>
            </tr>
            <tr>
                <td>21:00</td>
                <td>6</td>
                <td>6</td>
                <td>N ⇨ W<br>W ⇨ O</td>
                <td>Double Wave</td>
            </tr>
            <tr>
                <td>23:00</td>
                <td>4</td>
                <td>6</td>
                <td>W ⇨ O ⇨ S<br>E ⇨ N</td>
                <td>Double Wave</td>
            </tr>
            <tr>
                <td>25:00</td>
                <td>4</td>
                <td>6</td>
                <td>N ⇨ W<br>E ⇨ S</td>
                <td>Double Wave</td>
            </tr>
        </tbody>
    </table>
    <p>The pattern above will repeat every 2 minutes indefinitely.</p>
    <a id="spawnPoints"></a><h2>Spawn Points</h2>
    <p>Attack waves have two gather points each on the left and on the right side of the map. The gather point selected will be the closest to the target. In most cases, the Northern gather point will be selected. The Southern gather point is only selected if the attack wave ends up targeting a player's base.</p>
    <p>The gather points on the left side of the map are shown below:</p>
    <img src="/images/missiondata/lockload/leftgatherpoints.jpg" alt="Left Gather Points">
    <p>The gather points on the right side of the map are shown below:</p>
    <img src="/images/missiondata/lockload/rightgatherpoints.jpg" alt="Right Gather Points">
    <a id="misTips"></a><h2>Mission Tips</h2>
    <ul>
        <li>Place static defenses on each captured Lock to grant you vision so you can defend against attack waves.</li>
    </ul>
    <a id="comTips"></a><h2>Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on the ramps and entrances to captured Locks to defend and get Biomass.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: Place a burrowed drone on each captured lock to give you vision for Dehaka's Deep Tunnel ability.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Defend ramps and Lock entrances with Mag-Mines.</li>
        <li><a href="/commanders/karax">Karax</a>: Use your Spear of Adun abilities to capture your expansion at the start of the game.</li>
        <li><a href="/commanders/kerrigan">Kerrigan</a>: Place an Omega Worm on each captured Lock to give you the mobility to defend against attack waves.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, defend ramps and Lock entrances with Spider Mines.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, defend ramps and Lock entrances with Spider Mines.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Once you have creep spread, move your Infested Colonist Compound to your expansion to minimize travel time of your infested.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: Do <i>not</i> use Time Stop on this mission. Using this calldown will cause the enemy AI to wake up and aggressively push locks by units being created from the two side bases, significantly increasing the mission difficulty.</li>
        <li><a href="/commanders/zagara">Zagara</a>: Build your macro hatcheries at the central Lock for quick reinforcements.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Place a Void Array on each captured Lock to give you the mobility to defend against attack waves.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
