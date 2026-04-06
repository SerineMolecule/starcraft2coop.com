<?php
include("../header.php");
include("../scripts/switchergenerator.php");
?>
  <title>Starcraft 2 Co-op - Mission Guide - Oblivion Express</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Oblivion Express">
  <meta name="keywords" content="Starcraft co-op guides oblivion express mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/oblivionexpress">
  <script src="/scripts/preload.js"></script>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Co-op Mission Guide: Oblivion Express</h1>
    <p id="missionPlace">Tarsonis</p>
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
    <p>Moebius Corps is moving trains of unrevealed cargo across the surface of Tarsonis. Join forces with your ally and intercept the trains before they can escape.</p>
    <a id="objectives"></a><h2>Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Destroy Moebius Corps Trains (9)</li>
            <li>Do not allow 2 Trains to escape</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy Fast Train on the Bottom Line</li>
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
    <?php $mission = "oblivionexpress"; ?>
    <p>During normal playthroughs of Oblivion Express, you are not required to push into enemy bases. However, if you would like to finish the mission in the fastest possible time, or find that you are bored idling, you can push into the two bases on the left of the map to spawn-camp the trains.</p>
    <p>The main objective will either spawn on the top rail or the middle rail. The paths these main objectives will take is shown below.</p>
    <img src="/images/missiondata/oblivionexpress/mainobjectivepath.jpg" alt="Paths Taken by the Main Objectives">
    <p>The top base is shown below.</p>
    <?php switcher_generator("topbaselong") ?>
    <p>The bottom base is shown below.</p>
    <?php switcher_generator("bottombaselong") ?>
    <a id="bonus"></a><h2>Completing the Bonus Objective</h2>
    <p>The bonus objective requires you to kill two fast trains that will spawn on the bottom rail. The path these bonus objectives will take is shown below.</p>
    <img src="/images/missiondata/oblivionexpress/bonusobjectivepath.jpg" alt="Path Taken by the Bonus Objectives">
    <a id="timings"></a><h2>Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>There are two timings of interest in this mission:</p>
    <ul>
        <li><b>Train Timings:</b> These are the spawn times of the trains and their locations.</li>
        <li><b>Attack Waves:</b> These are attack waves that target your base</li>
    </ul>
    <p>The spawn timings, spawning rail of the trains and Strength and Tech Level of the protective detail is shown below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Train(s)</th>
                <th>Time</th>
                <th>Rail</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>5:00</td>
                <td>Top</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>8:00</td>
                <td>Mid</td>
                <td>3</td>
                <td>4</td>
            </tr>
            <tr>
                <td>3</td>
                <td>11:00</td>
                <td>Top</td>
                <td>4</td>
                <td>5</td>
            </tr>
            <tr>
                <td>4,5</td>
                <td>14:00</td>
                <td>Top/Mid</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>6</td>
                <td>17:00</td>
                <td>Mid</td>
                <td>7</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7,8</td>
                <td>20:00</td>
                <td>Top/Mid</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>9</td>
                <td>23:00</td>
                <td>Mid</td>
                <td>7</td>
                <td>7</td>
            </tr>
            <tr>
                <td>10</td>
                <td>25:00</td>
                <td>Top/Mid</td>
                <td>7</td>
                <td>7</td>
            </tr>
        </tbody>
    </table>
    <p>The spawn timings, direction, Strength and Tech Level of the attack waves is shown below. The directions denote which ramp the attack waves will push. Note that North attack waves will target your expansion.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Attack Direction</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>4:00</td>
                <td>North</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>6:00</td>
                <td>South</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>7:00</td>
                <td>North</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>10:00</td>
                <td>South</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>5</td>
                <td>13:00</td>
                <td>North</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>16:00</td>
                <td>North</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>7</td>
                <td>19:00</td>
                <td>South</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>8</td>
                <td>22:00</td>
                <td>North</td>
                <td>7</td>
                <td>7</td>
            </tr>
            <tr>
                <td>9</td>
                <td>24:00</td>
                <td>South</td>
                <td>7</td>
                <td>7</td>
            </tr>
        </tbody>
    </table>
    <p>The bonus objectives will spawn at 12:00 and 21:00 respectively.</p>
    <a id="spawnPoints"></a><h2>Spawn Points</h2>
    <p>The spawn points for attack waves and escort waves are different.</p>
    <p>The attack wave gather points are dependent on which side the attack wave comes from. The Northern gather point is shown below. This is, in essence, the start of the top rail.</p>
    <img src="/images/missiondata/oblivionexpress/northerngatherpoint.jpg" alt="Northern Gather Point">
    <p>The Southern gather point is shown below. This is, in essence, the end of the bottom rail.</p>
    <img src="/images/missiondata/oblivionexpress/southerngatherpoint.jpg" alt="Southern Gather Point">
    <p>Train escorts all have a single spawn position before they spread to guard the train. The spawn positions of the ground escorts are right outside the little warehouses on the map. All units, including air units spawn at these warehouses. However, after roughly 8 seconds, they will teleport to the Air Spawn point, a little distance away.</p>
    <p>For the top rail, the spawn points for the escorts are shown below.</p>
    <img src="/images/missiondata/oblivionexpress/topescortspawnpoint.jpg" alt="Spawn Points of the Top Escort">
    <p>For the middle rail, the spawn points for the escorts are shown below.</p>
    <img src="/images/missiondata/oblivionexpress/midescortspawnpoint.jpg" alt="Spawn Points of the Middle Escort">
    <a id="misTips"></a><h2>Mission Tips</h2>
    <ul>
        <li>If you choose to build static defense, build it in the area west of your main, where both rails move towards each other.</li>
    </ul>
    <a id="comTips"></a><h2>Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests outside the north ramp and lure the first attack wave into it to get biomass.</li>
        <li><a href="/commanders/artanis">Artanis</a>: If you choose to use Tempests on this mission, the Disintegration ability can be used on each train carriage, compounding the total damage you can do to the train.</li>
        <li><a href="/commanders/dehaka">Dehaka</a>: If you choose to use Impalers, the "Tenderize" upgrade is highly recommended as it can be applied on each train carriage, compounding the total damage you can do to the train.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: You can use one of your calldowns for each train spawn to destroy the escort wave.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Strike-Fighter platforms with the Napalm upgrade can be used to deal continuous damage to the trains.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag-Mines on the gather point of the middle rail to clear out air attack waves. 2 sets for Protoss, 3 for Terran and 1 for Zerg.</li>
        <li><a href="/commanders/karax">Karax</a>: You can clear all the rocks on your expansion if you target the area between the main and the gas rocks at 10 shots each.</li>
        <li><a href="/commanders/karax">Karax</a>: An upgraded Solar Lance can destroy the first train.</li>
        <li><a href="/commanders/karax">Karax</a>: Orbital Strikes can be used to clear out air attack waves when they teleport to the their gather points because they clump up.</li>
        <li><a href="/commanders/swann">Swann</a>: With correct positioning of Concentrated Beam, you can wipe out a train escort as soon as it spawns, when they are all clumped up together.</li>
        <li><a href="/commanders/swann">Swann</a>: A properly positioned Concentrated Beam with full points into the Width mastery can 1-shot the first train and all the escorts.</li>
        <li><a href="/commanders/tychus">Tychus</a>: Crooked Sam can place a demolition charge on each train carriage, making him a fantastic source of DPS.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
