<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Malwarfare</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Malwarfare">
  <meta name="keywords" content="Starcraft co-op guides malwarfare mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/malwarfare">
  <script src="/scripts/preload.js"></script>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Malwarfare</h1>
    <p id="missionPlace">Purifer Facility</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#towerOrder">Suppression Tower Order</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>Long ago, this protoss facility was used to convert the personalities of great warriors into AI known as the Purifiers. Researchers tested the process on a Tal'darim prisoner, whose rogue personality began to attack the facility. Now the Purifier guardian Aurana is attempting to regain control.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Do not let Aurana's Transport be destroyed</li>
            <li>Purify Security Terminals (5)</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Download AI Personalities (6)</li>
        </ul>
    <h2 id="towerOrder">Suppression Tower Order</h2>
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
    <?php $mission = "malwarfare"; ?>
    <p>The first camp you will have to take is positioned over your expansion. The expansions on Malwarfare for both players are defended by static defense and a few units.</p>
    <?php switcher_generator("expo") ?>
    <p>Aurana's Transport will move from Terminal to Terminal and she will purify each one. It takes 2:45 to purify the Terminals. Your goal is to defend her transport from attack waves and Suppression Towers. After every terminal has been purified, she heals any damage taken up to 5,000HP.</p>
    <p>Suppression Towers deal 240 damage per volley to Aurana's Transport. That ability has a cooldown of 6 seconds.</p>
    <p>However, there are two additional timers involved as well. When players engage a Suppression Tower, it stops attacking Aurana for 30 seconds before resuming attacks again. Additionally, if players have not destroyed the tower within three minutes of it spawning, it will attack Aurana's transport every 2 seconds.</p>
    <p>The first Terminal is where Aurana starts when you start the mission. No Suppression Towers will spawn to attack.</p>
    <p>For the second Terminal, one Suppression Tower will spawn. The image below shows the potential spawn points of the Suppression Tower. The Suppression Tower spawn locations are defended very lightly by units and static defense.</p>
    <img src="/images/missiondata/malwarfare/sec2towers.jpg" alt="Terminal 2 Tower Locations">
    <p>For the third Terminal, two Suppression Towers will spawn. There are two possible patterns for the spawn points of these towers (shown in different colors). Filled areas indicate the first tower spawned, while lines indicate which tower spawns next.</p>
    <img src="/images/missiondata/malwarfare/sec3towers.jpg" alt="Terminal 3 Tower Locations">
    <p>For the fourth Terminal, three Suppression Towers will spawn. There are two possible patterns for the spawn points of these towers (shown in different colors). Filled areas indicate the first tower spawned, while lines indicate which tower spawns next.</p>
    <img src="/images/missiondata/malwarfare/sec4towers.jpg" alt="Terminal 4 Tower Locations">
    <p>For the fifth Terminal, four Suppression Towers will spawn. There are two possible patterns for the spawn points of these towers (shown in different colors). Filled areas indicate the first tower spawned, while lines indicate which tower spawns next.</p>
    <img src="/images/missiondata/malwarfare/sec5towers.jpg" alt="Terminal 5 Tower Locations">
    <p>A video for the order of Suppression Tower spawn patterns is below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/D8lznL2PorU" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>Suppression Towers have two abilities:</p>
    <ul>
        <li>Multi-Target Lock On: Deals 40 damage to all enemy units in the targeting circles and slows their attack speed and movement speed by 50% for 4 seconds</li>
        <li>Single-Target Lock On: Deals 150 damage to all enemy units in the targeting circle</li>
    </ul>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <p>The bonus objective requires you to download three AI Personalities each from two beacons on the map. This is the only bonus objective that requires resources to complete. Each AI personality costs 350 Minerals/100 Gas to download. Therefore, you will require 1050 minerals/300 Gas to download all personalities for a single objective. The objective will expire exactly 4 minutes after it starts. Each beacon is defended by a force of enemy units and static defense.</p>
    <p>The first beacon is shown below.</p>
    <?php switcher_generator("beacon1") ?>
    <p>The second beacon is shown below.</p>
    <?php switcher_generator("beacon2") ?>
    <p>Note that when the first A.I. Personality download has been initiated, three attack waves will spawn to attack and destroy the objective. Once these are cleared, you only require vision in order to complete the rest of the downloads.</p>
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>There are three different timings that will be listed in this section. These are:</p>
    <ul>
        <li><b>Suppression Tower Timings:</b> The are the timings for each Suppression Tower spawn.</li>
        <li><b>Harass Wave Timings:</b> These are smaller waves that attack Aurana's Transport while she is purifying each terminal.</li>
        <li><b>Attack Wave Timings:</b> These are attack waves that target your base.</li>
    </ul>
    <p>The Suppression Tower Spawn Timings are shown below. All times are shown as time left on the clock to completion of the terminal.</p>
    <p>Terminal 2:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Tower</th>
                <th>Time Left</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1:00</td>
            </tr>
        </tbody>
    </table>
    <p>Terminal 3:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Tower</th>
                <th>Time Left</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1:55</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1:20</td>
            </tr>
        </tbody>
    </table>
    <p>Terminal 4:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Tower</th>
                <th>Time Left</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:20</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1:15</td>
            </tr>
            <tr>
                <td>3</td>
                <td>0:33</td>
            </tr>
        </tbody>
    </table>
    <p>Terminal 5:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Tower</th>
                <th>Time Left</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:10</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1:35</td>
            </tr>
            <tr>
                <td>3+4</td>
                <td>0:55</td>
            </tr>
        </tbody>
    </table>
    <p>The Harass Wave Spawn Timings are shown below. All times are shown as time left on the clock to completion of the terminal.</p>
    <p>Terminal 2:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time Left</th>
                <th>Tech Level</th>
                <th>Stength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:25</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1:35</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>1:00</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>0:20</td>
                <td>1</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <p>Terminal 3:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time Left</th>
                <th>Tech Level</th>
                <th>Stength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:30</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2:15</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1:40</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>4</td>
                <td>1:20</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>1:00</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>6</td>
                <td>0:41</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>7</td>
                <td>0:20</td>
                <td>2</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <p>Terminal 4:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time Left</th>
                <th>Tech Level</th>
                <th>Stength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:25</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1:40</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1:10*</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>0:55</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>0:28**</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>0:15</td>
                <td>4</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
    <p>*Only on Blue Pattern (above).</p>
    <p>**Only on Yellow Pattern (above)</p>
    <p>Terminal 5:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time Left</th>
                <th>Tech Level</th>
                <th>Stength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1:55</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1:30</td>
                <td>5</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>0:22</td>
                <td>5</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>0:50</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>0:30</td>
                <td>5</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
    <p>Attack waves work a little differently. The first attack wave will <i>always</i> occur at 3:36.</p>
    <p>Howevever, the two subsequent attack waves will occur when the transport reaches a certain point on the map. The minimap below shows the points that trigger the second and third attack waves.</p>
    <img src="/images/missiondata/malwarfare/attackwavetriggers.jpg" alt="Attack Wave Trigger Locations">
    <p>Strength and Tech Level information of these attack waves is below:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Attack Wave</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>The spawn points for the Harass waves and Attack waves are different. Harass waves are created from a random point in the lock area.</p>
    <p>However, attack waves have a fixed number of spawn positions. Attack Waves 1 and 2 have the same possible spawn points. The spawn points for attack waves 1 and 2 are shown below.</p>
    <img src="/images/missiondata/malwarfare/wave12spawnpoint.jpg" alt="Spawn Points for Attack Waves 1 and 2">
    <p>Attack Wave 3 only has one spawn point. This is shown below.</p>
    <img src="/images/missiondata/malwarfare/wave3spawnpoint.jpg" alt="Spawn Points for Attack Waves 3">
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Pay attention to Aurana's Transport while it is moving. It will slow down if enemy units attack it, giving them even more time to damage it.</li>
        <li>Aurana's Transport does not regen to full HP at the end of every Terminal. It heals a total of 5000 HP per terminal.</li>
        <li>When downloading Personalities for the bonus objective, only three attack waves will spawn in close proximity to each other. Once those attack waves are cleared, all you need is vision to download the rest. No defenses are required.</li>
        <li>Pre-clearing the areas ahead of the transport is the best way to ensure it doesn't take damage and allows you to finish the mission as fast as possible.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests outside the camps at the expansions and lure the units to get early biomass.</li>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on attack wave and suppression tower defense spawn locations to weaken them.</li>
        <li><a href="/commanders/alarak">Alarak</a>: (Risky) Sneak a probe down the back of the mineral line, drop a pylon and overcharge it to capture an early expansion.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on attack wave and suppression tower defense spawn locations to weaken them.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Because Suppression Towers are not Heroic, Space Station Reallocation will do its full damage to them. This means the first Suppression Tower can be instantly destroyed, while the others have their HP's significantly reduced.</li>
        <li><a href="/commanders/karax">Karax</a>: Use your Spear of Adun abilities to capture your expansion at the start of the game.</li>
        <li><a href="/commanders/kerrigan">Kerrigan</a>: Use Omega worms outside each of the Suppression Tower spawn locations to allow you to access them quickly.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider Mines on attack wave and suppression tower defense spawn locations to weaken them.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider Mines on attack wave and suppression tower defense spawn locations to weaken them.</li>
        <li><a href="/commanders/stetmann">Stetmann</a>: Build Hatcheries near Security Terminals to provide a location to spread Stetellites from, as the distance between locations may be too large.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Build a 3rd Command Center and root it near the second terminal to spread creep.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: The Void Suppression Crystal can be used to delay the spawn of the Suppression Towers.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Use Void Arrays outside each of the Suppression Tower spawn locations to allow you to access them quickly.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
