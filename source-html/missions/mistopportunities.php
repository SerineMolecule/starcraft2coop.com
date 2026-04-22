<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Mist Opportunities</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Mist Opportunities">
  <meta name="keywords" content="Starcraft co-op guides mist opportunities mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/mistopportunities">
  <script src="/scripts/preload.js"></script>
<?= startContent() ?>
    <h1>Co-op Mission Guide: Mist Opportunities</h1>
    <p id="missionPlace">Belshir</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#botOrder">Bot Harvesting Order</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>Egon Stetmann, stranded on Bel’shir since before the fall of Arcturus, is now under assault from Amon’s forces. Protect his harvesters as they collect the planet’s terrazine to prevent it from falling into the wrong hands.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Escort Harvesting Bots (5 Waves)</li>
            <li>Do not let 2 bots be destroyed</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Destroy the Extraction Device (2)</li>
        </ul>
    <h2 id="botOrder">Bot Harvesting Order</h2>
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
    <?php $mission = "mistopportunities"; ?>
    <p>There are a total of five bot waves that will leave the base area to go to harvest Terrazine. The goal of the mission is to protect those bots from enemy attack forces. The number of the bots in the wave increases as the mission progresses. The harvesting locations for each of the waves is shown below.</p>
    <img src="/images/missiondata/mistopportunities/botwaves.jpg" alt="Harvesting Wave Locations">
    <p>Each bot takes 60 seconds to harvest the Terrazine. However, do note that there is a travel time to and from the Terrazine Geyser, where the bots can also be attacked by stray forces and attack waves.</p>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/mistopportunities/extractiondevice.jpg" alt="Terrazine Extraction Device">
        <img src="/images/missiondata/mistopportunities/extractiondevice.jpg" alt="Terrazine Extraction Device">
    </div>
    <p>The bonus objective requires you to destroy two Terrazine Extraction Devices that are extracting Terrazine from the Belshir Gliders.</p>
    <p>Each extraction device is guarded by a number of enemy forces. The location and guards of the first extraction device is shown below.</p>
    <?php switcher_generator("extractiondevice1") ?>
    <p>The location and guards of the second extraction device is shown below. These forces are a lot stronger, but are much more clumped up together.</p>
    <?php switcher_generator("extractiondevice2") ?>
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>There are three timings that play a role in Mist Opportunities. These are:</p>
    <ul>
        <li><b>Attack Waves:</b> These are waves that target your base.</li>
        <li><b>Harvester Bots:</b> These are the times when the harvester bots are sent out, making them vulnerable to attack.</li>
        <li><b>Harass Waves:</b> These are waves specifically targeting the bots to destroy them.</li>
    </ul>
    <p>The timings, Strength and Tech levels of attack waves in this mission are listed below.</p>
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
                <td>3:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>10:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>15:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>21:15</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>5</td>
                <td>28:06</td>
                <td>6</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    <p>Additionally, attack waves 3 and 5 have Hybrids with them. Both these waves will have 2 Minor and 1 Major Hybrid. The types of these Hybrids will depend on the enemy race, as follows:</p>
    <table>
        <thead>
            <tr>
                <th>Race</th>
                <th>Minor Hybrid</th>
                <th>Major Hybrid</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Protoss</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Behemoth</td>
            </tr>
            <tr>
                <td>Terran</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Dominator</td>
            </tr>
            <tr>
                <td>Zerg</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Dominator</td>
            </tr>
        </tbody>
    </table>
    <p>Harvester Bot waves will give you a warning before the bot leaves. It then takes 45 seconds for the bot to actually spawn at the station. 20 seconds later, it will leave to harvest the Terrazine. The timings are all summarized below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Bot Wave</th>
                <th>Warning Time</th>
                <th>Spawn Time</th>
                <th>Leave Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:30</td>
                <td>4:15</td>
                <td>4:35</td>
            </tr>
            <tr>
                <td>2</td>
                <td>6:45</td>
                <td>7:30</td>
                <td>7:55</td>
            </tr>
            <tr>
                <td>3</td>
                <td>11:00</td>
                <td>11:45</td>
                <td>12:10</td>
            </tr>
            <tr>
                <td>4</td>
                <td>17:00</td>
                <td>17:45</td>
                <td>18:20</td>
            </tr>
            <tr>
                <td>5</td>
                <td>23:40</td>
                <td>24:25</td>
                <td>25:00</td>
            </tr>
        </tbody>
    </table>
    <p>Harass waves will start to spawn and target the harvesting bots. The timings for the harrass waves for each bot wave is below.</p>
    <p>Bot Wave 1:</p>
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
                <td>5:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>5:25</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <p>Bot Wave 2:</p>
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
                <td>8:15</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>2</td>
                <td>8:40</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>9:05</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>9:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <p>Bot Wave 3:</p>
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
                <td>12:25</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>2</td>
                <td>12:50</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>13:15</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>13:40</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>5</td>
                <td>14:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>6</td>
                <td>14:25</td>
                <td>3</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>
    <p>Bot Wave 4:</p>
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
                <td>18:40</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>19:15</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>3</td>
                <td>19:50</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>19:55</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>20:25</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>21:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <p>Note: If the first or fourth wave spawn from the bottom left, that wave and all subsequent waves will have a Tech Level of 1.</p>
    <p>Bot Wave 5:</p>
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
                <td>25:10</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>25:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>3</td>
                <td>25:50</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>26:05</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>26:25</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
                <td>27:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>7</td>
                <td>27:35</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>8</td>
                <td>28:10</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>9</td>
                <td>28:45</td>
                <td>5</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>Attack Waves have two spawn points on the map. These are shown below.</p>
    <img src="/images/missiondata/mistopportunities/attackwavespawns.jpg" alt="Attack Wave Spawn Positions">
    <p>Escort Wave spawn positions are much more complicated. There are multiple different spawn positions in the same area. The logic behind this is that spawn positions farther away from the bots will be used at the start of the harass waves. As the bots continue to harvest Terrazine, closer spawn positions will be used. The possible spawn positions for harass waves for each bot wave is shown below.</p>
    <p>Bot Wave 1:</p>
    <img src="/images/missiondata/mistopportunities/wave1harassspawns.jpg" alt="Harass Wave Spawn Positions for Bot Wave 1">
    <p>Bot Wave 2:</p>
    <img src="/images/missiondata/mistopportunities/wave2harassspawns.jpg" alt="Harass Wave Spawn Positions for Bot Wave 2">
    <p>Bot Wave 3:</p>
    <img src="/images/missiondata/mistopportunities/wave3harassspawns.jpg" alt="Harass Wave Spawn Positions for Bot Wave 3">
    <p>Bot Wave 4:</p>
    <img src="/images/missiondata/mistopportunities/wave4harassspawns.jpg" alt="Harass Wave Spawn Positions for Bot Wave 4">
    <p>Bot Wave 5:</p>
    <img src="/images/missiondata/mistopportunities/wave5harassspawns.jpg" alt="Harass Wave Spawn Positions for Bot Wave 5">
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Clear harvest locations ahead of time to ensure bots do not take damage.</li>
        <li>The bonus objective countdown will stop as long as the bonus objective is being hit. This means a single photon canon or army unit can stop the countdown. Use that to take out the bonus objective after you have cleared the area.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on key choke points to weaken attack and harass waves.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on key choke points to weaken attack and harass waves.</li>
        <li><a href="/commanders/karax">Karax</a>: Build static defenses near key choke points to take out harass waves.</li>
        <li><a href="/commanders/kerrigan">Kerrigan</a>: Omega Worms can give you great mobility to defend multiple bots in quick succession.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider Mines on key choke points to weaken attack and harass waves.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider Mines on key choke points to weaken attack and harass waves.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: Place Dark Pylons and use their Recall to move your army around the map.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Void Arrays can give you great mobility to defend multiple bots in quick succession.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
