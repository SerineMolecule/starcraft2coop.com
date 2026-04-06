<?php
include("../header.php");
include("../scripts/switchergenerator.php");
?>
  <title>Starcraft 2 Co-op - Mission Guide - Cradle of Death</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Cradle of Death">
  <meta name="keywords" content="Starcraft co-op guides chain cradle death mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/cradleofdeath">
  <script src="/scripts/preload.js"></script>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Co-op Mission Guide: Cradle of Death</h1>
    <p id="missionPlace">Moebius Battle Station</p>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#objectiveOrder">Determining Objective Order</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#baseAnalysis">Enemy Base Analysis</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <a id="misSum"></a><h2>Mission Summary</h2>
    <p>Moebius Corps is using this massive battle station to target Dominion colonies. Help Stone deliver xel'naga artifacts to key target sites in order to destroy the station and save innocent lives.</p>
    <a id="objectives"></a><h2>Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Escort Artifact Trucks to Hybrid Facility</li>
            <li>Escort Artifact Trucks to Xenon Reactor</li>
            <li>Escort Artifact Trucks to Resource Stockpile</li>
            <li>(Escort Artifact Trucks to Vespene Refinery)</li>
        </ul>
        <p>or</p>
        <ul>
            <li>(Escort Artifact Trucks to Terrazine Extractors)</li>
        </ul>
        <ul>
            <li>Don't let Battle Station come online</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Escort Artifact Truck to Moebius Research Outpost (2)</li>
        </ul>
    <a id="objectiveOrder"></a><h2>Determining Objective Order</h2>
    <?php $mission = "cradleofdeath"; ?>
    <p>It is first important to understand the order of the objectives before analyzing enemy bases. Cradle of Death is a mission that has a random element to the objectives. The image below shows the objective locations. These names will be used throughout the guide to refer to the specific objectives on the map.</p>
    <img src="/images/missiondata/cradleofdeath/objectivemap.jpg" alt="Objective Map">
    <p>Which objectives you have to do and in which order is determined at the start of the game. Objective orders are as follows:</p>
    <table class="firstCentered">
        <thead>
            <tr>
                <th>Order</th>
                <th>Objective</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Hybrid Facility</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Xenon Reactor or Resource Stockpile</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Xenon Reactor or Resource Stockpile</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Vespene Refinery or Terrazine Extractor</td>
            </tr>
        </tbody>
    </table>
    <p>In other words, the Hybrid Facility will always be done first, as that is where your expansion is. The next two objectives will be the Xenon Reactor and the Resource Stockpile, in a random order. Then, either the Vespene Refinery or the Terrazine Extractor will need to be done.</p>
    <p>Most of the time, you will be able to see which objective you need to work on next because they get marked on the minimap. However, in the case of some <a href="/resources/mutators">mutators</a> like "Afraid of the Dark", these objectives will not be marked on the minimap. In this case, you can use the ramp lights to determine which objective needs to be targeted next. Ramp lights on ramps leading out of your base will turn green when that objective becomes active:</p>
    <img src="/images/missiondata/cradleofdeath/objectiveramp.jpg" alt="Ramp Lights">
    <p>Some players would like to pre-scout the order of objectives. This can be done at the very beginning, usually using your Artifact truck. To determine the order of objectives:</p>
    <ol>
        <li>The Hybrid Facility will always be the first objective.</li>
        <li>Send your truck towards the Xenon Reactor. If there is no construct outside the ramp leading to the Reactor, the Xenon Reactor will be the second objective.</li>
    </ol>
    <img src="/images/missiondata/cradleofdeath/objectivescout1.jpg" alt="Scouting Objective 1">
    <ol start="3">
        <li>Given that you know the second objective, the third objective will be either the Resource Stockpile, or the Xenon Reactor, whichever one is still remaining.</li>
        <li>Send your truck towards the Terrazine Extractors. If the valley entrance is guarded by constructs, it is the fourth objective. If there are no constructs, the fourth objective is the Vespene Refinery</li>
    </ol>
    <img src="/images/missiondata/cradleofdeath/objectivescout2.jpg" alt="Scouting Objective 2">
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
    <p>The purpose of the trucks is to not only escort them to a particular beacon on the map. The trucks also disable the Xel'Naga Constructs, scattered on your way to each objective. These Constructs cannot be targeted and deal large amounts of damage until they are disabled by the trucks. Once disabled, they can be targeted and killed.</p>
    <p>The first objective will require you to destroy the Hybrid Facility. This area also contains your expansion, so clearing it as fast as possible is critical for a healthy economy. The area is guarded very lightly.</p>
    <?php switcher_generator("hybridfacility") ?>
    <p>The second or third objective will be the Resource Stockpile (see the section above for details). If it is the second objective, the base will look like the one on the left. If it is the third objective, it will look like the one on the right. Notice the presence of Hybrids and the additional Construct.</p>
    <?php switcher_generator("resourcestockpilecomparison") ?>
    <p>If the Xenon Reactor is the third objective, you will need to fight a small camp of enemies before climbing up the ramp.</p>
    <?php switcher_generator("xenonreactorcamp") ?>
    <p>The second or third objective will be the Xenon Reactor (see the section above for details). If it is the second objective, the base will look like the one on the left. If it is the third objective, it will look like the one on the right. Notice the presence of Hybrids and the additional Construct.</p>
    <?php switcher_generator("xenonreactorcomparison") ?>
    <p>If the last objective is the Terrazine Extraction area, you will need to go South-East to get to it. Notice the Constructs guarding the entrance to the valley there. This area is guarded with a heavy ground presence.</p>
    <?php switcher_generator("terrazineextractorlong") ?>
    <p>If the last objective is the Vespene Refinery area, you will need to go South-West to get to it. This area is guarded with a heavy air presence.</p>
    <?php switcher_generator("vespenerefinery") ?>
    <a id="bonus"></a><h2>Completing the Bonus Objective</h2>
    <p>The bonus objective requires you to Move your truck in front of a Moebius Research Outpost, which is guarded by a Construct and an enemy camp.</p>
    <p>There are a total of two bonus objectives present on the map. One will appear when the second main objective activates, and one will appear when the third main objective activates. Additionally, the first bonus objective will always lie in the north of the main objective. The second bonus objective will always lie to the south of the main objective.</p>
    <p>For the Resource Stockpile, the northern bonus area is shown below. This will be the bonus area you will need to clear if the Resource Stockpile is the second main objective.</p>
    <?php switcher_generator("resourcestockpilebonus1") ?>
    <p>For the Resource Stockpile, the southern bonus area is shown below. This will be the bonus area you will need to clear if the Resource Stockpile is the third main objective.</p>
    <?php switcher_generator("resourcestockpilebonus2long") ?>
    <p>For the Xenon Reactor, the northern bonus area is shown below. This will be the bonus area you will need to clear if the Xenon Reactor is the second main objective.</p>
    <?php switcher_generator("xenonreactorbonus1long") ?>
    <p>For the Xenon Reactor, the southern bonus area is shown below. This will be the bonus area you will need to clear if the Xenon Reactor is the third main objective.</p>
    <?php switcher_generator("xenonreactorbonus2long") ?>
    <a id="timings"></a><h2>Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>Due to the nature of this map, there are two types of attacks on this map:</p>
    <ul>
        <li><b>Attack Waves</b>: These are strong forces that target player bases. They occur infrequently throughout the mission.</li>
        <li><b>Drop Attacks</b>: These are smaller forces that are used to attack a player's truck.</li>
    </ul>
    <p>The Attack Wave Timings for this mission are:</p>
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
                <td>4:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>6:00</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>9:00</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>4</td>
                <td>12:00</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>5</td>
                <td>15:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>18:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>7</td>
                <td>21:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>8</td>
                <td>25:00</td>
                <td>6</td>
                <td>5</td>
            </tr>
            <tr>
                <td>9</td>
                <td>29:00</td>
                <td>7</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    <p>Note: Attack Waves will only spawn when there is more than 1:30 left on the clock. If there is less time, the attack waves will be delayed until that particular objective is complete. Once complete, the attack wave will spawn.</p>
    <p>The Drop Attack Timings are slightly more complicated. They are based on the start time of the objective, rather than the total mission time. The timings below denote the elapsed time after the particular objective has started:</p>
    <p>Note: Drop Attacks will occur as long as either player's truck is still alive. If both trucks are down, the Drop Attacks will wait until one spawns before attacking.</p>
    <p>Objective 1:</p>
    <p>No drop attacks.</p>
    <p>Objective 2:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Elapsed Time Since Objective Start</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:30</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>4:30</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <p>Objective 3:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Elapsed Time Since Objective Start</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1:30</td>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2:30</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4:30</td>
                <td>2</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <p>Objective 4:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Elapsed Time Since Objective Start</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:00</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3:00</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>4:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>
    <p>The Drop Attacks select units from a different pool to the regular attack waves. This pool is shown below:</p>
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
                <td>Roaches / Zealots</td>
                <td>Marines / Zerglings</td>
                <td>Medics / Zerglings</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Goliaths / Zealots</td>
                <td>Marines / Phoenixes</td>
                <td>Scouts / Zerglings</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Goliaths / Zealots / Carriers / Roaches</td>
                <td>Marines / Phoenixes / Thors / Zerglings</td>
                <td>Scouts / Zerglings / Medics / Ultralisks</td>
            </tr>
        </tbody>
    </table>
    <a id="spawnPoints"></a><h2>Spawn Points</h2>
    <p>Attack waves will spawn from the location of the next objective you will need to complete. In the case you are on the final objective, it will spawn from the side you did not attack.</p>
    <p>The image below shows you the spawn point if the Attack Wave is coming from the Resource Stockpile side.</p>
    <img src="/images/missiondata/cradleofdeath/resourcestockpilespawnpoint.jpg" alt ="Resource Stockpile Spawn Point">
    <p>The image below shows you the spawn point if the Attack Wave is coming from the Xenon Reactor side.</p>
    <img src="/images/missiondata/cradleofdeath/xenonreactorspawnpoint.jpg" alt ="Xenon Reactor Spawn Point">
    <p>The image below shows you the spawn point for the last two locations for the attack waves. After the completion of the third objective and you move on to the last objective, the attack wave positions will switch between the two.</p>
    <img src="/images/missiondata/cradleofdeath/finalspawnpoint.jpg" alt ="Final Spawn Points">
    <p>While it is theoretically possible to predict the objective pattern using the attack wave pattern, this method is highly impractical because information is not provided until very late in the game.</p>
    <p>Drop Attacks will try to target areas near your truck. There are two possible cases for your truck's position:</p>
    <ul>
        <li>If your truck is in your main, or your expansion, the Drop Attacks will drop outside the base of your ramp. They will never spawn inside your bases. The area that they will spawn on will be the one that is closest to your truck.</li>
        <li>If your truck is anywhere else on the map, the Attacks will drop a little distance away from your truck, in a location that lies in between the truck and the objective. In essence, they will try to block your truck from reaching the objective.</li>
    </ul>
    <a id="misTips"></a><h2>Mission Tips</h2>
    <ul>
        <li>If you want to pre-scout the mission order, use the trucks to do so.</li>
        <li>Send trucks into constructs first, before your army to reduce damage. Trucks are fairly rugged, and have a low attack priority, so enemies will de-aggro your truck as soon as they see your army.</li>
        <li>The only entrances to your base are through your ramps, which can easily be defended.</li>
        <li>Do not bother with clearing out all enemies and buildings from objective areas. The goal is to clear the construct on the beacon. Once your truck is in position, it is immune to damage.</li>
    </ul>
    <a id="comTips"></a><h2>Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests outside the Hybrid Facility and lure the units with your truck to get the biomass.</li>
        <li><a href="/commanders/kerrigan">Kerrigan</a>: Place plenty of Omega worms around the map to be able to deal with the attack waves as well as push effectively.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Place plenty of Void Arrays around the map to be able to deal with the attack waves as well as push effectively.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
