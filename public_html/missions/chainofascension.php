<?php
include("../header.php");
include("../scripts/switchergenerator.php");
?>
  <title>Starcraft 2 Co-op - Mission Guide - Chain of Ascension</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Chain of Ascension">
  <meta name="keywords" content="Starcraft co-op guides chain ascension mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/chainofascension">
  <script src="/scripts/preload.js"></script>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Co-op Mission Guide: Chain of Ascension</h1>
    <p id="missionPlace">Slayn</p>
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
    <p>Amon seeks to regain control of the Tal'darim by climbing the Chain of Ascension. Assist First Ascendant Ji'nara in the rite of Rak'Shir so she can defeat Amon's champion.</p>
    <a id="objectives"></a><h2>Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Push Amon's champion into the Pit of Sacrifice.</li>
            <li>Ji'nara must not be defeated.</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Kill Slayn elementals (2)</li>
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
    <?php $mission = "chainofascension"; ?>
    <p>The first camp you will have to take is positioned over your expansion. The expansions for both players are defended by static defense and a few units. Note the burrowed Ultralisk when facing Zerg compositions.</p>
    <?php switcher_generator("expo") ?>
    <p>The next camp that will be captured lies in between the two expansions. This is lightly defended by some static defense and ground units.</p>
    <?php switcher_generator("camp1") ?>
    <p>Soon after this camp is captured, the 1st set of Hybrids will spawn. The base itself is weakly defended. However, the Hybrids will spawn with a protection detail. It is usually recommended to clear this base out <i>before</i> the hybrid wave spawns.</p>
    <?php switcher_generator("hybrid1") ?>
    <p>As Ji'Nara moves forward, the second set of Hybrids will spawn. The base has static defense guarding the front and some at the back (however, those are not relevant to clearing the hybrid spawn). The middle is mostly empty. However, the Hybrids will spawn with a protection detail as usual.</p>
    <?php switcher_generator("hybrid2") ?>
    <p>The next camp that will have to be cleared is a heavily fortified camp in the middle of the map. This area is filled with spell-casters and high-HP units.</p>
    <?php switcher_generator("camp2") ?>
    <p>Once Ji'Nara is pushed past the camp's center, the third wave of Hybrids will spawn. The base itself is not heavily defended. However, the protection detail that the Hybrids come with is strong. A well-placed AoE can make short work of this area.</p>
    <?php switcher_generator("hybrid3") ?>
    <p>The last camp that will need to be dealt with contains high-tech units. However, it is usually easier to engage, due to both players having strong armies.</p>
    <?php switcher_generator("camp3") ?>
    <p>Once this camp is cleared, the last set of Hybrids spawn behind the Pit of Sacrifice once Ji'Nara reaches the trigger location. There is no static defense or guards there, which means it can't be cleared ahead of time. The protection detail, however, is crammed in that area, making it relatively difficult to engage.</p>
    <a id="bonus"></a><h2>Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/chainofascension/slaynelemental.jpg" alt="Slayn Elemental">
        <img src="/images/missiondata/chainofascension/slaynelemental.jpg" alt="Slayn Elemental">
    </div>
    <p>The bonus objective requires you to kill two Slayn Elementals that will appear on the minimap. The first one will always spawn in the green-marked location. The second will spawn in either of the blue-marked locations. The spawn points are shown below:</p>
    <img src="/images/missiondata/chainofascension/slaynelementalminimap.jpg" alt="Minimap of Slayn Elemental spawn locations">
    <p>The Slayn Elementals are flying units. Hence, they can only be hit by units that can target air. The Slayn Elementals cast a skill (with an AoE marker on the ground). This skill can encase your army in a Solarite Cocoon. The cocoon will slowly damage units encased within them but can be destroyed by other forces. </p>
    <a id="timings"></a><h2>Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>As Ji'Nara gets pushed forward, Hybrids will spawn with a protection detail throughout the map. Hybrids will spawn when Ji'Nara reaches a certain location on the map, as shown below:</p>
    <img src="/images/missiondata/chainofascension/hybridtriggerlocations.jpg" alt="Hybrid Trigger Locations">
    <p>However, if players choose to delay pushing Ji'Nara, Hybrid waves will automatically spawn at certain times, regardless of her position on the map. These times are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Spawn Time (Minutes)</th>
                <th>Protective Detail Tech Level</th>
                <th>Protective Detail Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>9</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>2</td>
                <td>15</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>3</td>
                <td>23</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>4</td>
                <td>30</td>
                <td>6</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    <p>At the start of the game, the possible combinations Hybrids that will spawn to push for Amon's Champion are shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Boss</th>
                <th>Enforcer 1</th>
                <th>Enforcer 2</th>
                <th>Chance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Hybrid Dominator</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Reaver</td>
                <td>11%</td>
            </tr>
            <tr>
                <td>Hybrid Dominator</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Nemesis</td>
                <td>11%</td>
            </tr>
            <tr>
                <td>Hybrid Dominator</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Nemesis</td>
                <td>11%</td>
            </tr>
            <tr>
                <td>Hybrid Behemoth</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Destroyer</td>
                <td>22%</td>
            </tr>
            <tr>
                <td>Hybrid Behemoth</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Nemesis</td>
                <td>22%</td>
            </tr>
            <tr>
                <td>Hybrid Behemoth</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Nemesis</td>
                <td>22%</td>
            </tr>
        </tbody>
    </table>
    <p>The number of hybrids of each type spawned during the Hybrid Waves is shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Wave</th>
                <th>Boss</th>
                <th>Enforcer 1</th>
                <th>Enforcer 2</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td style="text-align:center" colspan="2">5*</td>
            </tr>
            <tr>
                <td>4</td>
                <td>3</td>
                <td style="text-align:center" colspan="2">2/1/4**</td>
            </tr>
        </tbody>
    </table>
    <p>* 5 Hybrid Enforcers will be selected one by one, with a 33% chance of selecting Enforcer 2 and a 66% chance of selecting Enforcer 1.</p>
    <p>**2 Hybrid Encforcer 1's and 1 Hybrid Enforcer 2 will be added. Then, an additional four will be selected one by one, with a 33% chance of selecting Enforcer 2 and a 66% chance of selecting Enforcer 1.</p>
    <p>If the mission is still not completed after the 4th Hybrid wave, more Hybrid waves will spawn (in the same location) every 5 minutes.</p>
    <p>Due to the nature of this map, there are two types of waves on this map:</p>
    <ul>
        <li><b>Attack Waves</b>: These are strong forces that target player bases. They occur infrequently throughout the mission.</li>
        <li><b>Escort Waves</b>: These are smaller forces that are used to push Ji'Nara back. They occur frequently throughout the mission.</li>
    </ul>
    <p>Attack waves will target a random player (or the player playing on a harder difficulty) and attack them first from their side. Then, the players will alternate in getting attacked until double waves start spawning.</p>
    <p>The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:30</td>
                <td>2</td>
                <td>2</td>
                <td>Single</td>
            </tr>
            <tr>
                <td>2</td>
                <td>7:00</td>
                <td>5</td>
                <td>5</td>
                <td>Single</td>
            </tr>
            <tr>
                <td>3</td>
                <td>11:00</td>
                <td>4</td>
                <td>4</td>
                <td>Single</td>
            </tr>
            <tr>
                <td>4</td>
                <td>14:00</td>
                <td>5</td>
                <td>5</td>
                <td>Single</td>
            </tr>
            <tr>
                <td>5</td>
                <td>18:00</td>
                <td>4</td>
                <td>4</td>
                <td>Double</td>
            </tr>
            <tr>
                <td>6</td>
                <td>21:30</td>
                <td>7</td>
                <td>5</td>
                <td>Double</td>
            </tr>
            <tr>
                <td>7</td>
                <td>25:30</td>
                <td>7</td>
                <td>6</td>
                <td>Double</td>
            </tr>
        </tbody>
    </table>
    <p>Note: Every Hybrid spawn will delay all future attack waves by 2 minutes.</p>
    <p>The Escort Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:30</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>5:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>7:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>9:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5</td>
                <td>11:00</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>6</td>
                <td>12:00</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>7</td>
                <td>13:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>8</td>
                <td>15:00</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>9</td>
                <td>16:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>10</td>
                <td>16:30</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>11</td>
                <td>17:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>12</td>
                <td>18:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>13</td>
                <td>19:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>14</td>
                <td>20:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>15</td>
                <td>20:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>16</td>
                <td>21:30</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>17</td>
                <td>22:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>18</td>
                <td>23:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>19</td>
                <td>24:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>20</td>
                <td>25:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>21</td>
                <td>25:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>22</td>
                <td>26:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>23</td>
                <td>27:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
    <p>Note: Every Hybrid spawn will delay all future escort waves by 2 minutes.</p>
    <p>If you choose to prolong the mission past the 28:30 mark, the following pattern will occur and repeat for the rest of the game:</p>
    <ul>
        <li>Escort Wave #20</li>
        <li>Escort Wave #21</li>
        <li>Hybrid Spawn</li>
        <li>Escort Wave #22</li>
        <li>Escort Wave #23</li>
        <li>Attack Wave #7</li>
    </ul>
    <p>The timings for the Slayn Elementals are as follows:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Elemental</th>
                <th>Spawn Time (Minutes)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Elemental 1</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Elemental 2</td>
                <td>16:00</td>
            </tr>
        </tbody>
    </table>
    <a id="spawnPoints"></a><h2>Spawn Points</h2>
    <p>The spawn points for attack waves and escort waves are different.</p>
    <p>For single attack waves, a player is chosen at random and then attacked. Note, if you are playing on a harder difficulty than your ally, you will be attacked first. Then, the other player will be attacked on the next wave, and the players will alternate until double waves start appearing, in which both players will be attacked at the same time. Attack waves will spawn from a player's side (spawn point #1 or #2, below) as long as Amon has a unit or a building there. If he does not, attack waves will spawn in spawn point #3.</p>
    <p>The spawn locations for attack waves are shown below.</p>
    <p>Attack Wave Spawn Location 1:</p>
    <img src="/images/missiondata/chainofascension/atkwavespawn1.jpg" alt="Attack Wave Spawn Location 1">
    <p>Attack Wave Spawn Location 2:</p>
    <img src="/images/missiondata/chainofascension/atkwavespawn2.jpg" alt="Attack Wave Spawn Location 2">
    <p>Attack Wave Spawn Location 3:</p>
    <img src="/images/missiondata/chainofascension/atkwavespawn3.jpg" alt="Attack Wave Spawn Location 3">
    <p>Spawn points for escort waves depending on Ji'Nara's farthest position in the mission. Escort waves will start spawning from location #1 below, then start spawning from location #2, and then to #3 when the respectful changeover point has been reached. The changeover points are shown below:</p>
    <img src="/images/missiondata/chainofascension/escortchangeover.jpg" alt="Escort Wave Changeover locations">
    <p>The spawn locations for escort waves are shown below.</p>
    <p>Escort Wave Spawn Location 1:</p>
    <img src="/images/missiondata/chainofascension/escortwavespawn1.jpg" alt="Escort Wave Spawn Location 1">
    <p>Escort Wave Spawn Location 2:</p>
    <img src="/images/missiondata/chainofascension/escortwavespawn2.jpg" alt="Escort Wave Spawn Location 2">
    <p>Escort Wave Spawn Location 3:</p>
    <img src="/images/missiondata/chainofascension/escortwavespawn3.jpg" alt="Escort Wave Spawn Location 3">
    <a id="misTips"></a><h2>Mission Tips</h2>
    <ul>
        <li>Use a drone/probe/SCV to push Ji'Nara forward, while your army clears out bases ahead of time and deals with attack waves/escort waves.</li>
        <li>The second attack wave in the mission is extremely strong given the early game. Save calldowns for that wave.</li>
        <li>Spawn the first Hybrid Superpusher spawn early to delay the deadly second attack wave.</li>
        <li>All waves after the fourth attack wave are double waves which attack both players' bases.</li>
        <li>Protoss units gain increased Shield regeneration when near Ji'Nara.</li>
    </ul>
    <a id="comTips"></a><h2>Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on hybrid spawn locations before spawning the Hybrid to weaken the protection detail.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on hybrid spawn locations before spawning the Hybrid to weaken the protection detail.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider-mines ahead of Hybrid spawns to weaken the protection detail.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider-mines ahead of Hybrid spawns to weaken the protection detail.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Keep your Infested Colonist Compound a few spaces away from Ji'nara to maximize utility of your infested.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: Time Stop can be used just before the last Hybrid trigger location to skip the fourth spawn entirely and complete the mission. See the video below.</li>
        <iframe width="475" height="268" src="https://www.youtube.com/embed/__D3Y5DliVM" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <li><a href="/commanders/zagara">Zagara</a>: Build a single corruptor to apply Corruption to the Slayn Elemental before you run your Scourge into it.</li>
        <li><a href="/commanders/zagara">Zagara</a>: Build your macro hatcheries at your expansion for quick reinforcements.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
