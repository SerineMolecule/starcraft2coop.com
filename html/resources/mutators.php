<?php
include("../header.php");
$_SESSION["known"] = true;
?>
  <title>Starcraft 2 Co-op - Mutator List</title>
  <meta name="description" content="A list of all mutators in Starcraft II Co-op, along with detailed descriptions of their mechanics and commander-specific tips.">
  <meta name="keywords" content="Starcraft co-op guides mutators">
  <link rel="canonical" href="https://starcraft2coop.com/resources/mutators">
  <style>
    @media (max-width: 700px){
        #mutatorTable>td:nth-child(1), #mutatorTable>th:nth-child(1){
            display:none;
        }
        #navList{
            display:none;
        }
    }
    #mutatorTable>td:nth-child(1){
        vertical-align:top;
        text-align:center;
        width:7%;
    }
    #mutatorTable>td:nth-child(2){
        vertical-align: top;
        padding-top: 30px;
        width:13%;
    }
    #mutatorTable>td:nth-child(3){
        vertical-align: top;
    }
    #mutatorTable>td:nth-child(4){
        padding-top:15px;
        vertical-align:top;
        text-align:center;
        width:10%;
    }
    .subheading{
        font-weight: bold;
        font-size: 1.5em;
    }
    .dataTable td:nth-child(1),
    .dataTable td:nth-child(2),
    .dataTable td:nth-child(3),
    .dataTable td:nth-child(4){
        vertical-align:middle;
        width:auto;
        padding:5px;
        text-align:left;
    }
    .centered td:nth-child(1),
    .centered td:nth-child(2),
    .centered td:nth-child(3),
    .centered td:nth-child(4){
        text-align:center;
    }
    .detailsButton{
            font-size:0.75em;
            text-decoration:underline;
            cursor:pointer;
    }
    .details{
        display:none;
    }
    .centerAlign{
        display:inline;
        vertical-align:middle;
    }
    .mapSafetyZone{
        border: 1px solid white;
        display:inline-block;
    }
    .mapSafetyZone p{
        text-align:center;
    }
    #navList{
        font-size:0.75em;
        opacity:0.75;
    }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Co-op Mutators List: Names, Icons, Descriptions and Mechanics</h1>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#safetyZones">Safety Zone</a></p>
        <p><a href="#mutatorInteractions">Mutator Interactions</a></p>
        <p><a href="#mutatorList">Mutator List</a></p>
    </div>
    <a id="safetyZones"></a><h2>Safety Zones</h2>
    <p>Certain mutators create environmental hazards that can impact/debuff player units, including workers. These mutators get deactivated in areas called "Safety Zones". All player bases and expansions are considered Safety Zones. The mutators that obey the Safety Zone rules are as follows:</p>
    <ul>
        <li>Blizzard</li>
        <li>Going Nuclear*</li>
        <li>Lava Burst</li>
        <li>Orbital Strike</li>
        <li>Purifier Beam</li>
        <li>Temporal Field</li>
        <li>Time Warp</li>
        <li>Twister</li>
    </ul>
    <p>*The centers of the nukes will not be placed inside the safety zones. However, nukes can still damage units inside the safety zone due to their large radius.</p>
    <p>Images of the Safety Zones for all maps are shown below.</p>
    <div id="safetyZone">
        <div class="mapSafetyZone">
            <p>Chain of Ascension</p>
            <img src="/images/mutatordata/safetyzonechainofascension.jpg" alt="Chain of Ascension Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Cradle of Death</p>
            <img src="/images/mutatordata/safetyzonecradleofdeath.jpg" alt="Cradle of Death Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Dead of Night</p>
            <img src="/images/mutatordata/safetyzonedeadofnight.jpg" alt="Dead of Night Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Lock & Load</p>
            <img src="/images/mutatordata/safetyzonelockandload.jpg" alt="Lock & Load Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Malwarfare</p>
            <img src="/images/mutatordata/safetyzonemalwarfare.jpg" alt="Malwarfare Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Miner Evacuation</p>
            <img src="/images/mutatordata/safetyzoneminerevacuation.jpg" alt="Miner Evacuation Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Mist Opportunities</p>
            <img src="/images/mutatordata/safetyzonemistopportunities.jpg" alt="Mist Opportunities Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Oblivion Express</p>
            <img src="/images/mutatordata/safetyzoneoblivionexpress.jpg" alt="Oblivion Express Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Part and Parcel</p>
            <img src="/images/mutatordata/safetyzonepartandparcel.jpg" alt="Part and Parcel Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Rifts to Korhal</p>
            <img src="/images/mutatordata/safetyzoneriftstokorhal.jpg" alt="Rifts to Korhal Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Scythe of Amon</p>
            <img src="/images/mutatordata/safetyzonescytheofamon.jpg" alt="Scythe of Amon Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Temple of the Past</p>
            <img src="/images/mutatordata/safetyzonetempleofthepast.jpg" alt="Temple of the Past Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>The Vermillion Problem</p>
            <img src="/images/mutatordata/safetyzonethevermillionproblem.jpg" alt="The Vermillion Problem Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Void Launch</p>
            <img src="/images/mutatordata/safetyzonevoidlaunch.jpg" alt="Void Launch Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Void Thrashing</p>
            <img src="/images/mutatordata/safetyzonevoidthrashing.jpg" alt="Void Thrashing Safety Zone">
        </div>
    </div>
    <a id="mutatorInteractions"></a><h2>Mutator Interactions</h2>
    <?php
    include '../scripts/sqlconnection.php';
    $sql = "SELECT mutatorname, mutatorid
            FROM mutators
            ORDER BY mutatorname ASC";
    $result = mysqli_query($con, $sql);
    $mutators = [];

    while ($row = mysqli_fetch_array($result)) {
        $mutators[] = [$row['mutatorid'],$row['mutatorname']];
    }
    ?>
    <form action="mutators.php" method="post">
        <p class="centerAlign">Mutator 1:</p>
        <select name="mut1" id="mut1">
            <?php
            echo "<option value='0'>-</option>";
            foreach ($mutators as $mut) {
                echo "<option value='$mut[0]'>$mut[1]</option>\n";
            }
            ?>
        </select>
        <img class="centerAlign" id="mut1img" src="/images/mutators/afraidofthedark.png" height="50" width="50" alt="Mutator 1">
        <p></p>
        <p class="centerAlign" >Mutator 2:</p>
        <select name="mut2" id="mut2">
            <?php
            echo "<option value='0'>-</option>";
            foreach ($mutators as $mut) {
                echo "<option value='$mut[0]'>$mut[1]</option>\n";
            }
            ?>
        </select>
        <img class="centerAlign"  id="mut2img" src="/images/mutators/afraidofthedark.png" height="50" width="50" alt="Mutator 2">
        <p></p>
        <button id="getInteraction" type="button">Get Interactions</button>
        <button id="reset" type="button">Reset</button>
    </form>
    <p>Interactions:</p>
    <p id="interactions"></p>
    <script>
        $("#mut1").change(function(){
            var filename = $("#mut1 option:selected").text().replace(/ /g,'').toLowerCase();
            if (filename=="-"){
                return;
            }
            $("#mut1img").attr("src", "/images/mutators/" + filename + ".png");
            var mut1= $("#mut1").val();
            $.ajax({
                type: 'GET',
                url: '/data/mutatorinteractions/check/' + mut1 + '.json',
                success: function(interactions) {
                    $("#mut2 option").attr("disabled","disabled");
                    for (var i=0; i< interactions.length; i++){
                        $("#mut2 option[value='" + parseInt(interactions[i]) + "']").removeAttr("disabled");
                    }
                    if ($("#mut2").prop('selectedIndex').hasAttr("disabled")){
                        $("#mut2").val(0);
                    }

                }
            });
        })
        $("#mut2").change(function(){
            var filename = $("#mut2 option:selected").text().replace(/ /g,'').toLowerCase();
            if (filename=="-"){
                return;
            }
            var mut2= $("#mut2").val();
            $("#mut2img").attr("src", "/images/mutators/" + filename + ".png");
            $.ajax({
                type: 'GET',
                url: '/data/mutatorinteractions/check/' + mut2 + '.json',
                success: function(interactions) {
                    $("#mut1 option").attr("disabled","disabled");
                    for (var i=0; i< interactions.length; i++){
                        $("#mut1 option[value='" + parseInt(interactions[i]) + "']").removeAttr("disabled");
                    }
                    if ($("#mut1").prop('selectedIndex').hasAttr("disabled")){
                        $("#mut1").val(0);
                    }
                }
            });
        })
        $("#getInteraction").on("click", function(){
            var mut1= $("#mut1").val() ;
            var mut2= $("#mut2").val();
            const minMut = Math.min(mut1, mut2);
            const maxMut = Math.max(mut1, mut2);
            $.ajax({
                type: 'GET',
                url: '/data/mutatorinteractions/get/' + minMut + '-' + maxMut + '.json',
                success: function(response) {
                    $("#interactions").text(response);
                },
                error: function() {
                    $("#interactions").text('No interaction found.');
                }
            });
        })
        $("#reset").on("click", function(){
            $("#mut1").val(0);
            $("#mut2").val(0);
            $("#mut1 option").removeAttr("disabled");
            $("#mut2 option").removeAttr("disabled");
            $("#interactions").text("");
        })
    </script>
    <a id="mutatorList"></a><h2>Mutator List</h2>
    <p>A list of all of Starcraft II Co-op mutators is shown below. Names, icons, descriptions and mechanics of these mutators are listed. Click the "Details" button to display more information on each mutator. For more numeric data on mutators (as well as mutator information for other difficulty levels), please visit <a href="https://seamaguro.blogspot.com/2017/12/mutator-compendium.html" rel="nofollow">Maguro's Blog</a>.</p>
    <p>Most mutators also have a certain difficulty score associated with them, called an "Abomination Value". These scores are used for selecting different levels of difficulty levels for Brutal+ games. You can find a list of scores and difficulty level breakpoints on the <a href="brutal">Brutal+ Page</a>.</p>
    <p>You may quickly navigate to a mutator by clicking the links below:</p>
    <p id="navList"> <a href="#row_afraidofthedark">Afraid of the Dark</a> -
        <a href="#row_aggressivedeployment">Aggressive Deployment</a> -
        <a href="#row_alienincubation">Alien Incubation</a> -
        <a href="#row_avenger">Avenger</a> -
        <a href="#row_barrier">Barrier</a> -
        <a href="#row_blackdeath">Black Death</a> -
        <a href="#row_blizzard">Blizzard</a> -
        <a href="#row_boombots">Boom Bots</a> -
        <a href="#row_chaosstudios">Chaos Studios</a> -
        <a href="#row_concussiveattacks">Concussive Attacks</a> -
        <a href="#row_darkness">Darkness</a> -
        <a href="#row_diffusion">Diffusion</a> -
        <a href="#row_doubleedged">Double Edged</a> -
        <a href="#row_eminentdomain">Eminent Domain</a> -
        <a href="#row_evasivemaneuvers">Evasive Maneuvers</a> -
        <a href="#row_fatalattraction">Fatal Attraction</a> -
        <a href="#row_fear">Fear</a> -
        <a href="#row_fireworks">Fireworks</a> -
        <a href="#row_giftexchange">Gift Exchange</a> -
        <a href="#row_goingnuclear">Going Nuclear</a> -
        <a href="#row_hardenedwill">Hardened Will</a> -
        <a href="#row_heroesfromthestorm">Heroes From the Storm</a> -
        <a href="#row_inspiration">Inspiration</a> -
        <a href="#row_justdie">Just Die</a> -
        <a href="#row_killbots">Kill Bots</a> -
        <a href="#row_laserdrill">Laser Drill</a> -
        <a href="#row_lavaburst">Lava Burst</a> -
        <a href="#row_lifeleech">Life Leech</a> -
        <a href="#row_longrange">Long Range</a> -
        <a href="#row_luckyenvelopes">Lucky Envelopes</a> -
        <a href="#row_magnificent">Mag-nificent</a> -
        <a href="#row_microtransactions">Micro Transactions</a> -
        <a href="#row_mineralshields">Mineral Shields</a> -
        <a href="#row_minesweeper">Minesweeper</a> -
        <a href="#row_missilecommand">Missile Command</a> -
        <a href="#row_momentofsilence">Moment of Silence</a> -
        <a href="#row_mutuallyassureddestruction">Mutually Assured Destruction</a> -
        <a href="#row_naughtylist">Naughty List</a> -
        <a href="#row_orbitalstrike">Orbital Strike</a> -
        <a href="#row_outbreak">Outbreak</a> -
        <a href="#row_photonoverload">Photon Overload</a> -
        <a href="#row_polarity">Polarity</a> -
        <a href="#row_poweroverwhelming">Power Overwhelming</a> -
        <a href="#row_propagators">Propagators</a> -
        <a href="#row_purifierbeam">Purifier Beam</a> -
        <a href="#row_random">Random</a> -
        <a href="#row_scorchedearth">Scorched Earth</a> -
        <a href="#row_selfdestruction">Self Destruction</a> -
        <a href="#row_sharingiscaring">Sharing is Caring</a> -
        <a href="#row_shortsighted">Shortsighted</a> -
        <a href="#row_slimpickings">Slim Pickings</a> -
        <a href="#row_speedfreaks">Speed Freaks</a> -
        <a href="#row_temporalfield">Temporal Field</a> -
        <a href="#row_timewarp">Time Warp</a> -
        <a href="#row_transmutation">Transmutation</a> -
        <a href="#row_trickortreat">Trick or Treat</a> -
        <a href="#row_turkeyshoot">Turkey Shoot</a> -
        <a href="#row_twister">Twister</a> -
        <a href="#row_vertigo">Vertigo</a> -
        <a href="#row_voidreanimators">Void Reanimators</a> -
        <a href="#row_voidrifts">Void Rifts</a> -
        <a href="#row_walkinginfested">Walking Infested</a> -
        <a href="#row_wemoveunseen">We Move Unseen</a></p>
    <table id="mutatorTable">
        <thead>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Description</th>
                <th>Available in Custom?</th>
            </tr>
        </thead>
        <tbody>
            <tr id="row_afraidofthedark">
                <td><img src="/images/mutators/afraidofthedark.png" alt="Afraid of the Dark Icon"></td>
                <td>Afraid of the Dark</td>
                <td>
                    Vision provided by all sources is extremely limited except when in view of your camera.
                    <br><br>
                    <span class="detailsButton" onclick='$("#uberDarkness").toggle();'>Details</span>
                    <div id="uberDarkness" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The vision range of Afraid of the Dark is highly reduced. Below is an example of what it looks like:</p>
                        <img src="/images/mutatordata/afraidofthedark.jpg" alt="Afraid of the Dark Vision Range">
                        <p>Notice how the Probe lies outside the vision range. This means that it can be attacked and not be able to attack back. Units can only attack if they have vision provided by your camera.</p>
                        <p>Vision Ranges are listed below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Unit/Structure</th>
                                    <th>Vision Range</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Primary Structure</td>
                                    <td>7</td>
                                    <td><img src="/images/mutatordata/afraidofthedarktownhall.jpg" alt="Afraid of the Dark Vision Range for Primary Structures"></td>
                                </tr>
                                <tr>
                                    <td>Any other structure</td>
                                    <td>2</td>
                                    <td><img src="/images/mutatordata/afraidofthedarkstructure.jpg" alt="Afraid of the Dark Vision Range for Other Structures"></td>
                                </tr>
                                <tr>
                                    <td>Unit</td>
                                    <td>0</td>
                                    <td><img src="/images/mutatordata/afraidofthedarkunit.jpg" alt="Afraid of the Dark Vision Range for Units"></td>
                                </tr>
                                <tr>
                                    <td>Camera<br>(Hover to play clip.<br>Please provide time<br>for clip to load.)</td>
                                    <td>4 + 3(1-{distance to closest unit}/12)</td>
                                    <td><img id="afraidofthedarkHover" src="/images/mutatordata/afraidofthedarkcamerastatic.jpg" alt="Afraid of the Dark Vision Range for Player Cameras"></td>
                                    <script>
                                        $("#afraidofthedarkHover").hover(function(){
                                            $(this).attr("src", function(index, attr){
                                                return attr.replace("static.jpg", ".gif");
                                            });
                                        }, function(){
                                        $(this).attr("src", function(index, attr){
                                            return attr.replace(".gif", "static.jpg");
                                            });
                                        });
                                    </script>
                                </tr>
                            </tbody>
                        </table>
                        <p>Any units with a Map Boss tag will not be affected by the mutator. These are usually mission-specific units, such as the Artifact Truck on Cradle of Death and Terrazine Harvesters on Mist Opportunities.</p>
                        <p>Attack wave and Objective ping markers will not be shown on the minimap.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Dehaka: Dehaka's Pack Leaders are Map Bosses and therefore retain their regular vision.</li>
                            <li>Han/Horner: Horner's Call in the Fleet ability generates its own vision circle as it moves through strafing area.</li>
                            <li>Mengsk: Earthsplitter Bombardments provide vision regardless of camera position.</li>
                            <li>Raynor: Raynor's Scans can provide temporary vision for the duration of the scan.</li>
                            <li>Stukov: Brood Queen's Ocular Symbiote ability increases vision for units.</li>
                            <li>Stukov: Units mind-controlled by the Aleksander retain their full vision.</li>
                            <li>Zeratul: Afraid of the Dark disables Zeratul's map-wide terrain vision. You may need to use Rally Points to find the Artifact Fragments, shown below:<br>
                            <iframe width="475" height="268" src="https://www.youtube.com/embed/h0OZG494TCY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_aggressivedeployment">
                <td><img src="/images/mutators/aggressivedeployment.png" alt="Aggressive Deployment"></td>
                <td>Aggressive Deployment</td>
                <td>Additional enemy units are periodically deployed onto the battlefield.
                    <br><br>
                    <span class="detailsButton" onclick='$("#dropPods").toggle();'>Details</span>
                    <div id="dropPods" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Drops will prioritize player units which fulfill particular conditions. These are:</p>
                        <ul>
                            <li>It has a weapon (ie. can deal damage).</li>
                            <li>It costs more than 0 supply.</li>
                            <li>It is not a queen</li>
                        </ul>
                        <p>The drop will spawn 7 units away from the potential target. If no potential target is found, the drop will spawn between 25 and 40 units away from the player's base.</p>
                        <p>Drop Pod Details, along with their Strength and Tech levels are shown below. For more information on Strength and Tech levels, check the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
                        <table class="dataTable centered">
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
                                    <td>4:50</td>
                                    <td>1</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>7:00</td>
                                    <td>1</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>9:10</td>
                                    <td>2</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>11:20</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>13:30</td>
                                    <td>3</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>15:40</td>
                                    <td>4</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>After the 6th wave, Drop Pods will drop every 2:10 and have Tech level 6 and Strength level 5.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units spawned from Aggressive Deployment drops do not drop Biomass.</li>
                            <li>Alarak: The Mothership is not a valid unit for Aggressive Deployment drops.</li>
                            <li>Dehaka: Units spawned from Aggressive Deployment drops do not drop Essence.</li>
                            <li>Kerrigan: Assimilation Aura can be used on the drops to gain additional resources.</li>
                            <li>Mengsk: Units spawned from Aggressive Deployment drops do not provide Royal Guard experience.</li>
                            <li>Stukov: Units spawned from Stukov's Infested Colonist Compound are valid targets for Aggressive Deployment drops.</li>
                            <li>Tychus: Tychus is not a valid unit for Aggressive Deployment drops.</li>
                            <li>Vorazun: Time Stop delays Aggressive Deployment timings.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_alienincubation">
                <td><img src="/images/mutators/alienincubation.png" alt="Alien Incubation"></td>
                <td>Alien Incubation</td>
                <td>All enemy units spawn Broodlings upon death.
                    <br><br>
                    <span class="detailsButton" onclick='$("#spawnBroodling").toggle();'>Details</span>
                    <div id="spawnBroodling" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The number of Broodlings that spawn is equal to the unit's supply cost. If the unit costs no supply, 1 Broodling is spawned. Note that Hybrids take up 8 supply. Broodlings do not have a timed life and will remain on the map indefinitely until killed.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Broodlings do not drop Biomass.</li>
                            <li>Dehaka: Broodlings do not drop Essence.</li>
                            <li>Mengsk: Broodlings do not provide Royal Guard experience.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_avenger">
                <td><img src="/images/mutators/avenger.png" alt="Avenger"></td>
                <td>Avenger</td>
                <td>Enemy units gain increased attack speed, movement speed, armor, life, and life-regeneration when nearby enemy units die.
                    <br><br>
                    <span class="detailsButton" onclick='$("#avenger").toggle();'>Details</span>
                    <div id="avenger" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>When a unit dies, it gives out a certain number of Avenger stacks to units within a 1.25 range. The number of stacks equals the unit's supply count. If the unit costs no supply, 1 stack is given. Note that Hybrids take up 8 supply.</p>
                        <p>The total number of Avenger stacks (buffs) a unit can have is 10. These stacks are lost when the unit ownership changes (Mind Control, Domination, etc.).</p>
                        <p>Each Avenger stack provides the following buffs to the unit receiving the stack. Stacks are additive.</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Stat</th>
                                    <th>Buff</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Attack Speed</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Movement Speed</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Armor</td>
                                    <td>0.3</td>
                                </tr>
                                <tr>
                                    <td>HP</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>HP Regen</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>Shields</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Shield Regen</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Avenger stacks can be transferred to the hybrid on Part & Parcel. On Oblivion Express, the train counts as a whole unit. Therefore, only 8 stacks will be provided.</p>
                        <p>Below are a list of mission-specific unit Avenger stacks given out on unit death. :</p>
                        <ul>
                            <li>Chain of Ascension Slayn Elemental: 1</li>
                            <li>Cradle of Death Gatekeeper Construct: 10</li>
                            <li>Dead of Night Hunterling: 1</li>
                            <li>Dead of Night Kaboomer, Spotter: 2</li>
                            <li>Dead of Night Choker: 3</li>
                            <li>Dead of Night Stank: 12</li>
                            <li>Lock & Load Xel'Naga Construct: 10</li>
                            <li>Miner Evacuation Blightbringer, Eradicators: 1</li>
                            <li>Oblivion Express Train: 8</li>
                            <li>Part and Parcel Moebius Hybrid Experiment: 8</li>
                            <li>Part and Parcel Train: 8</li>
                            <li>Rifts to Korhal Pirate Ship: 6</li>
                            <li>Temple of the Past Void Thrasher: 10</li>
                            <li>The Vermillion Problem Molten Salamander: 10</li>
                            <li>Void Launch Shuttle: 2</li>
                            <li>Void Thrashing Void Thrasher: 10</li>
                        </ul>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Zeratul: Zeratul's Avatar of Essence's Devolve ability will devolve a unit and cause it to lose any Avenger stacks it has.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_barrier">
                <td><img src="/images/mutators/barrier.png" alt="Barrier"></td>
                <td>Barrier</td>
                <td>Enemy units and structures gain a temporary shield upon the first time they take damage.
                    <br><br>
                    <span class="detailsButton" onclick='$("#barrier").toggle();'>Details</span>
                    <div id="barrier" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Barrier triggers when a unit or structure first takes damage. Therefore, you can bypass Barrier by oneshotting a unit. The Barrier buff applies a 5 second shield that absorbs up to 100 damage. Once a unit has received the Barrier buff, it cannot receive it again.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Swann: Due to how Pulse Cannon damage is dealt, Pulse Cannon will trigger Barrier if the unit has more than 100 HP.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_blackdeath">
                <td><img src="/images/mutators/blackdeath.png" alt="Black Death"></td>
                <td>Black Death</td>
                <td>Some enemy units carry a plague that deals damage over time and spreads to other nearby units. The plague spreads to your units when the enemy unit is killed.
                    <br><br>
                    <span class="detailsButton" onclick='$("#plague").toggle();'>Details</span>
                    <div id="plague" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Any enemy unit has a 33% chance of having the Black Death mutator applied to it. This unit can infect up to 3 units within 5 range when it dies. Black Death does 1% of a unit's HP in damage every 0.5 seconds and ignores all shields.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Roaches that burrow can outheal the effect of Black Death.</li>
                            <li>Abathur: 100 Biomass units don't take damage from Black Death.</li>
                            <li>Abathur: Due to lack of regeneration, Ultimate Evolutions die quickly to Black Death. Disable making Ultimate Evolutions by right-clicking on "Evolution" for newly-created units.</li>
                            <li>Abathur: 100+ Biomass Essence Hoarder will cause units to gradually heal themselves with Black Death.</li>
                            <li>Fenix: Changing Fenix suits removes the Plague debuff.</li>
                            <li>Kerrigan: Units inside Kerrigan's Omega Network do not take damage.</li>
                            <li>Kerrigan: Kerrigan's Creep allows units to regenerate at 1HP/s. This means any unit below a max HP of 50HP, standing on Kerrigan's Creep, will not die from Black Death. This is increased to 100 HP if using the Malevolent Matriarch Prestige.</li>
                            <li>Nova: Nova's base health regeneration (even without the upgrade) counters the effect of Black Death.</li>
                            <li>Nova: The barrier created by Nova's Defensive Drone can be used to prevent damage ticks of Black Death.</li>
                            <li>Stukov: Stukov's Rooted Bunkers can outheal the effect of Black Death.</li>
                            <li>Stetmann: Max mastery Stetzone (on HUGS) can outheal Black death for your units up to 800HP, or allied units up to 400HP.</li>
                            <li>Tychus: Rattlesnake's upgraded Revitalizer can outheal the effect of Black Death.</li>
                            <li>Vorazun: Emergency Recall recalls your units to the closest Nexus. Build a Nexus away from your main and expansion, towards where you are pushing to prevent your units from being Recalled with Black Death and killing your workers.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_blizzard">
                <td><img src="/images/mutators/blizzard.png" alt="Blizzard"></td>
                <td>Blizzard</td>
                <td>Storm clouds move across the map, damaging and freezing player units in their path.
                    <br><br>
                    <span class="detailsButton" onclick='$("#blizzard").toggle();'>Details</span>
                    <div id="blizzard" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Blizzards slow down unit movement speed to 12% over the span of 5 seconds. It also deals 5 damage per second to all units in its range. The debuff lasts for 2 seconds.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Artanis: The Dragoon's Trillic Compression Systems upgrade can allow Dragoons to survive longer in Blizzard.</li>
                            <li>Stukov: Stukov's Rooted Bunkers can outheal the effect of Blizzard.</li>
                            <li>Vorazun: Time Stop stops currently-present Blizzards from moving. Newly-created Blizzards will move as normal. All Blizzards still deal damage.</li>
                            <li>Zagara: Zergling evasion applies to damage dealt by Blizzard.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_boombots">
                <td><img src="/images/mutators/boombots.png" alt="Boom Bots"></td>
                <td>Boom Bots</td>
                <td>Uncaring automatons carry a nuclear payload toward your base. One player must discern the disarming sequence and the other player must enter it.
                    <br><br>
                    <span class="detailsButton" onclick='$("#boomBots").toggle();'>Details</span>
                    <div id="boomBots" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The bots will spawn from any enemy building. If you clear all enemy buildings on the map, the bots will stop spawning. Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
                        <p>A Boom Bot is shown below:</p>
                        <img src="/images/mutatordata/boombot.jpg" alt="Boom Bot">
                        <p>When a Boom Bot spawns, one player will see its code above the unit. The other player will see "?-?-?-?". The player that sees the code must provide the other player with the code, so that they may input it into the Boom Bot. Once a bot is clicked, losing vision does not cause the player to lose the command card and they can still input the code.</p>
                        <p>The Boom Bot starts off with 1.25 Movement Speed. Inputting an incorrect digit will prevent the player from any further input for 8 seconds. Additionally, it increases the Boom Bot speed by 1.0, up to a maximum of 4.75.</p>
                        <p>The spawn timings of the Boom Bots are as follows:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Bots Spawned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>4:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>5:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>11:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>13:00</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>14:10</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>15:20</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>16:30</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>17:40</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>18:50</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>After the 18:50 spawn, 2 Boom Bots will appear every 50 seconds.</p>
                        <p>When a bot reaches a player unit or structure, it will detonate a nuke. The nuke deal a base damage of 750 (950 vs structures) within range 4, 50% of base damage  within range 6, and 25% of base damage within range 8 of the center of the nuke. Once a Nuke has been detonated, there is a 4 second cooldown before it can be used again.</p>
                        <p>Bots will not actively attack Aurana's transport and Data Cores on Malwarfare, Terrazine Harvesters on Mist Opportunities, Artifact Trucks on Cradle of Death, and the Evacuation Ships on Miner Evacuation. However, their nukes will cause those units damage.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Disabling Cloud prevents Boom Bots from attacking.</li>
                            <li>Abathur: Place a Toxic Nest and disable automatic detonation which can be used to get vision of Boom Bots.</li>
                            <li>Kerrigan: Kerrigan's Nydus worms can tank two Boom Bot nukes before dying.</li>
                            <li>Mengsk: Earthsplitters provide temporary vision in the bombardment area, which can be used to get vision of Boom Bots.</li>
                            <li>Raynor: Use Scans to get vision of Boom Bots far in advance.</li>
                            <li>Stetmann: Spread Stetellites around the map to provide you with vision of the Boom Bots.</li>
                            <li>Vorazun: Corsair Disruption Webs stop Boom Bots from attacking.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_chaosstudios">
                <td><img src="/images/mutators/chaosstudios.png" alt="Chaos Studios"></td>
                <td>Chaos Studios</td>
                <td>Mutators are chosen at random and periodically cycle throughout the mission.
                    <br><br>
                    <span class="detailsButton" onclick='$("#cycleRandom").toggle();'>Details</span>
                    <div id="cycleRandom" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The start of the game has three mutators active. At 4:30 one mutator will get cycled out. 15 seconds later, one more gets added. Mutators get replaced every 90 seconds.</p>
                        <p>The list of mutators that can appear is shown below:</p>
                        <ul>
                            <li>Aggressive Deployment</li>
                            <li>Alien Incubation</li>
                            <li>Avenger</li>
                            <li>Barrier</li>
                            <li>Black Death</li>
                            <li>Blizzard</li>
                            <li>Concussive Attacks</li>
                            <li>Darkness</li>
                            <li>Diffusion</li>
                            <li>Double-Edged</li>
                            <li>Eminent Domain</li>
                            <li>Evasive Maneuvers</li>
                            <li>Fatal Attraction</li>
                            <li>Going Nuclear</li>
                            <li>Just Die!</li>
                            <li>Laser Drill</li>
                            <li>Lava Burst</li>
                            <li>Life Leech</li>
                            <li>Micro Transactions</li>
                            <li>Mineral Shields</li>
                            <li>Missile Command</li>
                            <li>Orbital Strike</li>
                            <li>Outbreak</li>
                            <li>Photon Overload</li>
                            <li>Polarity</li>
                            <li>Propagators</li>
                            <li>Purifier Beam</li>
                            <li>Scorched Earth</li>
                            <li>Self Destruction</li>
                            <li>Slim Pickings</li>
                            <li>Speed Freaks</li>
                            <li>Temporal Field</li>
                            <li>Time Warp</li>
                            <li>Transmutation</li>
                            <li>Twister</li>
                            <li>Void Reanimators</li>
                            <li>Void Rifts</li>
                            <li>Walking Infested</li>
                            <li>We Move Unseen</li>
                        </ul>
                        <p>From the above list, the following mutators <i>cannot</i> appear in the starting set of three:</p>
                        <ul>
                            <li>Mineral Shields</li>
                            <li>Propagators</li>
                            <li>Slim Pickings</li>
                        </ul>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Vorazun: Time Stop does not affect Chaos Studios timings.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_concussiveattacks">
                <td><img src="/images/mutators/concussiveattacks.png" alt="Concussive Attacks"></td>
                <td>Concussive Attacks</td>
                <td>Player units are slowed by all enemy attacks.
                    <br><br>
                    <span class="detailsButton" onclick='$("#concussiveAttacks").toggle();'>Details</span>
                    <div id="concussiveAttacks" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The debuff reduces movement speed by 50% and lasts 60 seconds to any unit or structure that is damaged by Amon or the Environment. Units with the "Frenzied" buff are immune to Concussive Attacks and cannot be slowed. These include Ultralisks, Brutalisks, Tyrannozors and Tychus' Odin.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Tychus: Medivac Pickups can be used to remove the Concussive Attacks debuff.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_darkness">
                <td><img src="/images/mutators/darkness.png" alt="Darkness"></td>
                <td>Darkness</td>
                <td>Previously explored areas remain blacked out on the minimap while outside of player vision.
                    <br><br>
                    <span class="detailsButton" onclick='$("#blackFog").toggle();'>Details</span>
                    <div id="blackFog" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Attack wave and Objective ping markers will not be shown on the minimap. Reducing your Shader Settings to Medium quality and below will allow you to see the terrain, nullifying the mutator.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Place a Toxic Nest and disable automatic detonation to provide you vision of key areas of the map.</li>
                            <li>Stetmann: Disabled Stetellites provide normal vision.</li>
                            <li>Zeratul: Darkness disables Zeratul's map-wide terrain vision. You may need to use Rally Points to find the Artifact Fragments, shown below:<br>
                            <iframe width="475" height="268" src="https://www.youtube.com/embed/h0OZG494TCY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_diffusion">
                <td><img src="/images/mutators/diffusion.png" alt="Diffusion"></td>
                <td>Diffusion</td>
                <td>Damage dealt to enemies is split evenly across all nearby units, including your own.
                    <br><br>
                    <span class="detailsButton" onclick='$("#damageBounce").toggle();'>Details</span>
                    <div id="damageBounce" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>50% of the damage you deal is split equally across all units within 5 range. This effect will only apply if the unit survives damage that is being dealt. Oneshotting a unit will not trigger Diffusion.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Mengsk: Units inside Supply Bunkers do not take damage from Diffusion.</li>
                            <li>Nova: Nova's Defensive Drones' Defensive Matrix can block damage dealt by Diffusion.</li>
                            <li>Raynor: Units inside Bunkers do not take damage from Diffusion.</li>
                            <li>Stetmann: Stetmann's HUGS Overload can block damage dealt by Diffusion.</li>
                            <li>Swann: Swann's Science Vessels' Defensive Matrix can block damage dealt by Diffusion.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_doubleedged">
                <td><img src="/images/mutators/doubleedged.png" alt="Double Edged"></td>
                <td>Double Edged</td>
                <td>Damage dealt by your units and structures is dealt back to them, but then healed back over time.
                    <br><br>
                    <span class="detailsButton" onclick='$("#tePDMamageReflect").toggle();'>Details</span>
                    <div id="tePDMamageReflect" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>HP is healed at 1 HP per 0.1 seconds as per the in-game code. However, due to the design of this function, HP is only healed at roughly 8HP per second on average. Only the unit that deals damage gets impacted by Double Edged. For example, Carriers are not affected, but their Interceptors are. Units within transports will be safe from the mutator if they are picked up.</p>
                        <p>Double Edged has an interesting interaction with Life Leech effects on units, such as those from Dehaka's Gene Mutations. Damage that is dealt by Double Edged is also counted towards damage dealt. That is, if a unit deals 100 damage to an enemy unit, it deals 100 damage to itself, and therefore, a total of 200 damage is counted for the Life Leech effect. This results in 40 life heal and 100 life healed over time.</p>
                        <ul>
                            <li>Abathur: Units with 100 or more Biomass can ignore Double Edged damage.</li>
                            <li>Alarak: Units (including Alarak) may be loaded into a War Prism as soon as they attack or use their abilities to prevent damage through Double Edged.</li>
                            <li>Artanis: Arkship Commandant Unbound Fanatics Plasma Waves kill themselves when they deal damage, severely reducing Unbound Fanatic effectiveness.</li>
                            <li>Artanis: Shield Overcharge can block damage dealt by Double Edged.</li>
                            <li>Dehaka: Dakrun and any Tyrannozors with the Spiked Hide mutation will kill themselves due to the damage reflect very quickly (within 2 seconds).</li>
                            <li>Fenix: Conservator's Fields can be used to reduce the damage taken by Double Edged.</li>
                            <li>Kerrigan: Kerrigan's current Mutating Carapace gets consumed by Double Edged, before the new Mutating Carapace (from the damage dealt) gets added.</li>
                            <li>Mengsk: Units inside Supply Bunkers do not take damage from Double Edged.</li>
                            <li>Nova: Nova's Defensive Drones' Defensive Matrix can block damage dealt by Double Edged.</li>
                            <li>Raynor: Units inside Bunkers do not take damage from Double Edged.</li>
                            <li>Stetmann: Stetmann's HUGS Overload can block damage dealt by Double Edged.</li>
                            <li>Swann: Swann's Science Vessels' Defensive Matrix can block damage dealt by Double Edged.</li>
                            <li>Tychus: Tychus' Medivac Pickup can be used on the Odin after it fires its missile to protect it from taking damage when the missile hits. The same applies to all Outlaw abilities.</li>
                            <li>Zagara: Zagara's Baneling Barrage does damage to Zagara if it hits structures. However, it can be used against units, without dealing damage back to Zagara.</li>
                            <li>Zeratul: Void Apparitions that are created by the Ambushers are considered units themselves. Therefore, Ambushers do not take damage from Double-Edged when they blink.</li>
                            <li>Zeratul: Tornadoes created by Herald of the Void do not deal damage to Zeratul.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_eminentdomain">
                <td><img src="/images/mutators/eminentdomain.png" alt="Eminent Domain"></td>
                <td>Eminent Domain</td>
                <td>Enemies gain control of your structures after destroying them.
                    <br><br>
                    <span class="detailsButton" onclick='$("#structureSteal").toggle();'>Details</span>
                    <div id="structureSteal" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Shields and HP are replenished after the structure is captured. The structure will be destroyed if there's no path to player 1's base. Heroic Structures (with the exception of Swann's Laser Drill) are not stolen by Amon.</p>
                        <p>Structures will only be captured by Amon under the following conditions:</p>
                        <ul>
                            <li>The structure is not a Nydus Worm</li>
                            <li>If an Amon unit killed the structure, the unit is still alive</li>
                            <li>The structure is not killed by static defense</li>
                            <li>There exists a valid path between the unit that killed the structure and a point within 5 range of Player 1's starting location.</li>
                        </ul>
                        <p>Due to how Siege Tanks work, a sieged up siege tank cannot trigger Eminent Domain on a kill.</p>
                        <p>In any other circumstance, the structure will be destroyed as normal. One loophole in this logic is allowing Terran structures to burn down. A structure burning down will be automatically converted to Amon's ownership, regardless of the unit that dealt damage to the structure, including player units. This allows you to wall of maps against certain compositions as Amon will not attack his own structures.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Mengsk: Earthsplitters stop attacking when captured by Eminent Domain. Any units loaded into the Earthsplitter are lost.</li>
                            <li>Mengsk: Units loaded inside a Supply Bunker are lost if the Supply Bunker is captured by Eminent Domain.</li>
                            <li>Raynor: Units loaded inside a Bunker are lost if the Bunker is captured by Eminent Domain.</li>
                            <li>Stetmann: Stetellites will only respawn once before being destroyed permanently.</li>
                            <li>Swann: If you lose your drill to an enemy, it will respawn as Amon's Laser Drill. After destroying it, the drill goes on cooldown before respawning again. This means you will permanently lose your drill and have no way of getting it back.</li>
                            <li>Zeratul: Eminent Domain affects Cannon Projections. If a Cannon Projection has been captured by Amon, it can be cancelled by cancelling the Projection at the source Cannon.</li>
                            <li>Zeratul: Tesseract Monoliths are not converted by Eminent Domain and will be destroyed instead of converted.</li>
                            <li>Zagara: Bile Launchers stop attacking when captured by Eminent Domain.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_evasivemaneuvers">
                <td><img src="/images/mutators/evasivemaneuvers.png" alt="Evasive Maneuvers"></td>
                <td>Evasive Maneuvers</td>
                <td>Enemy units teleport a short distance away upon taking damage.
                    <br><br>
                    <span class="detailsButton" onclick='$("#sidestep").toggle();'>Details</span>
                    <div id="sidestep" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The enemy unit will teleport within 5 range of the attacking unit if the attacking unit is less than 20 range away. Otherwise, it will teleport within 5 range of its current position.</p>
                        <p>In addition to the teleport, the unit becomes invulnerable for 0.25 seconds. A unit cannot teleport more than once every 2 seconds.</p>
                        <p>Only non-heroic units get the Evasive Maneuvers buff.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Swann: Due to how Pulse Cannon damage is dealt, Pulse Cannon only deals about 50% of its stated damage.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_fatalattraction">
                <td><img src="/images/mutators/fatalattraction.png" alt="Fatal Attraction"></td>
                <td>Fatal Attraction</td>
                <td>When enemy units and structures die, any of your nearby units are pulled to their location.
                    <br><br>
                    <span class="detailsButton" onclick='$("#deathPull").toggle();'>Details</span>
                    <div id="deathPull" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All player units within 9 range get affected by Fatal Attraction on the death of a unit. This only applies to units which can move. Burrowed Swarm Hosts, Sieged up Siege Tanks, etc. are not affected by Fatal Attraction. The supply cost of a unit determines the strength of the pull as well the length of time the unit is stunned (cannot use attack, use abilities or be moved) as shown below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Supply</th>
                                    <th>Pull Time</th>
                                    <th>Stun Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0-1</td>
                                    <td>0.1875 seconds</td>
                                    <td>0.1 seconds</td>
                                </tr>
                                <tr>
                                    <td>2-5</td>
                                    <td>0.375 seconds</td>
                                    <td>0.2 seconds</td>
                                </tr>
                                <tr>
                                    <td>6+</td>
                                    <td>0.625 seconds</td>
                                    <td>0.3 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Alarak: Use the Havoc's Force-field ability to prevent your army from being drawn in by the mutator.</li>
                            <li>Dehaka: Impalers get pulled by Fatal Attraction.</li>
                            <li>Dehaka: Pack Leaders are immune to Fatal Attraction.</li>
                            <li>Nova: Fatal Attraction will cancel Nova's Nuke and the nuke will be lost.</li>
                            <li>Han/Horner: Han's Widow Mines get pulled by Fatal Attraction.</li>
                            <li>Tychus: The Odin is immune to Fatal Attraction.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_fear">
                <td><img src="/images/mutators/fear.png" alt="Fear"></td>
                <td>Fear</td>
                <td>Player units will occasionally stop attacking and run around in fear upon taking damage.
                    <br><br>
                    <span class="detailsButton" onclick='$("#fear").toggle();'>Details</span>
                    <div id="fear" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Fear lasts for 10 seconds on non-heroic units and 5 seconds on heroic units. Fear is applied as a chance, depending on a unit's vitality (HP + Shields). It is calculated as a percentage as 2000/Vitality. So, a unit with 20 vitality or lower has 100% chance of getting feared.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Artanis: Shield Overcharge prevents Fear from triggering on the unit.</li>
                            <li>Nova: Defensive Drones' Defensive Matrix prevents Fear from triggering on the unit.</li>
                            <li>Swann: Defensive Matrix prevents Fear from triggering on the unit.</li>
                            <li>Stetmann: H.U.G.S Overload prevents Fear from triggering on the unit.</li>
                            <li>Tychus: Medivac Pickup does not remove the Fear debuff.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_fireworks">
                <td><img src="/images/mutators/fireworks.png" alt="Fireworks"></td>
                <td>Fireworks</td>
                <td>Enemies launch a dazzling fireworks display upon death, dealing damage to your nearby units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#fireworks").toggle();'>Details</span>
                    <div id="fireworks" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>When an enemy unit dies, it launches a number of fireworks equal to its supply cost. This will target random player units within a range of 10. However, if no player units are nearby, it will target random locations within a range of 3. Fireworks deal 50 damage each.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Zagara: Zergling evasion applies to damage dealt by Fireworks.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_giftexchange">
                <td><img src="/images/mutators/giftexchange.png" alt="Gift Exchange"></td>
                <td>Gift Exchange</td>
                <td>Gifts are periodically deployed around the map. If you don't claim them, Amon will!
                    <br><br>
                    <span class="detailsButton" onclick='$("#giftFight").toggle();'>Details</span>
                    <div id="giftFight" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The first gift spawns at 3:00. Following gifts will spawn after 2:10 intervals until the mission time exceeds 20:00, after which gifts will spawn every 1:40.</p>
                        <p>Gifts only spawn 40 units away from Players 1, 2 and 3 and as long as no units are within 7 range of the intended gift spawn location.</p>
                        <p>Ahead of a gift spawn, an icon will be displayed on the minimap. The player has 40 seconds before it appears and can be captured. Amon will send forces to capture the gift. Gifts take 20 seconds to be captured.</p>
                        <p>If players capture 2 consecutive gifts, Amon will steal the third. Players cannot stop it.</p>
                        <p>The potential rewards for players are:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Reward</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Vespene Rain</td>
                                    <td>15+{Mission Minutes Elapsed} Vespene drops appear around the map. Each Vespene drop contains 50 gas.</td>
                                </tr>
                                <tr>
                                    <td>Chrono Wave</td>
                                    <td>Chrono Wave is activated (500% increase in build speed for 20 seconds).</td>
                                </tr>
                                <tr>
                                    <td>HERC/Scout/Queen</td>
                                    <td>You get a HERC/Scout/Queen depending on your race.</td>
                                </tr>
                                <tr>
                                    <td>MULE Party</td>
                                    <td>Drops 3 MULEs in your base.</td>
                                </tr>
                                <tr>
                                    <td>{Unit} becomes an Avenger</td>
                                    <td>The selected units gains 10 stacks of the Avenger buff (see Avenger details for more information).</td>
                                </tr>
                                <tr>
                                    <td>The Naughty List has been cleared</td>
                                    <td>Clears the Naughty List</td>
                                </tr>
                                <tr>
                                    <td>An Archangel</td>
                                    <td>Gives the player an Archangel.</td>
                                </tr>
                                <tr>
                                    <td>Everything is free for 10 seconds</td>
                                    <td>Removes costs associated with training all units and research.</td>
                                </tr>
                                <tr>
                                    <td>Healing</td>
                                    <td>(Only available after the 8-minute mark) Heals all units for 100HP, then provides a buff that heals units for 6.6 HP every second.</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The potential rewards for Amon are:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Reward</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>A Temporary Mutator</td>
                                    <td>Picks a random mutator from the list below (see details in the Chaos Studios mutator details for more information) for 3 minutes.
                                        <ul>
                                            <li>Alien Incubation</li>
                                            <li>Blizzard</li>
                                            <li>Concussive Attacks</li>
                                            <li>Going Nuclear</li>
                                            <li>Just Die!</li>
                                            <li>Mutually Assured Destruction</li>
                                            <li>Outbreak</li>
                                            <li>Self Destruction</li>
                                            <li>Transmutation</li>
                                            <li>We Move Unseen</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hidden Threats</td>
                                    <td>Spawns a mix of 30 Burrowed Widow Mines, Burrowed Banelings and Stasis Wards around the map.</td>
                                </tr>
                                <tr>
                                    <td>Banelings/Scourge</td>
                                    <td>Spawns Scourge (if players have more than 5 air units) or Banelings otherwise at the gift location, depending on the mission time as follows:
                                        <br><br>
                                        <table class="dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Mission Time</th>
                                                    <th>Units Spawned</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>0:00-6:00</td>
                                                    <td>30</td>
                                                </tr>
                                                <tr>
                                                    <td>6:00-10:00</td>
                                                    <td>45</td>
                                                </tr>
                                                <tr>
                                                    <td>10:00+</td>
                                                    <td>60</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Hybrid</td>
                                    <td>Spawns Hybrids depending on the mission time as follows:
                                        <br><br>
                                        <table class="dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Mission Time</th>
                                                    <th>Hybrids Spawned</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>0:00-8:20</td>
                                                    <td>2 Hybrid Reavers<br>1 Hybrid Dominator</td>
                                                </tr>
                                                <tr>
                                                    <td>8:20-11:40</td>
                                                    <td>2 Hybrid Reavers<br>2 Hybrid Dominators<br>1 Hybrid Behemoth</td>
                                                </tr>
                                                <tr>
                                                    <td>11:40+</td>
                                                    <td>2 Hybrid Reavers<br>2 Hybrid Dominators<br>2 Hybrid Behemoths</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kill Bot</td>
                                    <td>Puts a Killbot on the field, with kills depending on the mission time. The kill bot will require 30 kills before 10:00, after which it will require 50 kills.</td>
                                </tr>
                                <tr>
                                    <td>Overcharged Shuttles</td>
                                    <td>Overcharges 5 Shuttles. Each overcharge does 20 damage every 0.25 seconds.</td>
                                </tr>
                                <tr>
                                    <td>Shrink Wave</td>
                                    <td>Shrinks all player units for 60 seconds, reducing all damage (including Spell damage), HP and Shields by 50%.</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Once a gift is available for capture, a small attack force of Amon's units will be created to try and capture the gift. The power level of this attack force is dependent on a number of factors, listed below:</p>
                        <ul>
                            <li>Each gift claimed by the Allied Commanders adds 1 to the power of the attack force.</li>
                            <li>Each gift claimed/stolen by Amon removes 1 from the power of the attack force.</li>
                            <li>Every 2:00 of mission time adds 1 to the power of the attack force.</li>
                        </ul>
                        <p>The composition of the attack forces are shown below. For more information on Strength and Tech levels, check the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Power Level</th>
                                    <th>Strength Level</th>
                                    <th>Tech Level</th>
                                    <th>Hybrids</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0-1</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>2-3</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>4-6</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>1x Destroyer</td>
                                </tr>
                                <tr>
                                    <td>7-8</td>
                                    <td>5</td>
                                    <td>4</td>
                                    <td>1x Reaver</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>2</td>
                                    <td>1</td>
                                    <td>2x Destroyer</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>2x Reaver</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>4</td>
                                    <td>1</td>
                                    <td>1x Behemoth</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>4</td>
                                    <td>2</td>
                                    <td>1x Behemoth<br>1x Dominator</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>1x Behemoth<br>1x Nemesis</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>4</td>
                                    <td>3</td>
                                    <td>1x Behemoth<br>1x Nemesis<br>1x Dominator</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>One of the most valuable gift rewards (particularly in the early game) for players is Everything is Free. To make advantage of this, ensure you have at least one structure (preferably one that uses minerals and gas) on <a href="/guides/generaltips">Rapidfire</a> and use it to spam these structures anywhere, for free. Once the effect wears off, cancel the structures and you will be refunded the original cost of resources for those structures.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units spawned from Gift Exchange drop Biomass.</li>
                            <li>Artanis: Artanis' Warp Field counts as a unit, and therefore, his calldown can be used to capture gifts.</li>
                            <li>Dehaka: Units spawned from Gift Exchange drop Essence.</li>
                            <li>Mengsk: Units spawned from Gift Exchange provide Royal Guard experience.</li>
                            <li>Fenix: Fenix loses all Avenger stacks given to him if he changes suit.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_goingnuclear">
                <td><img src="/images/mutators/goingnuclear.png" alt="Going Nuclear"></td>
                <td>Going Nuclear</td>
                <td>Nukes are launched at random throughout the map.
                    <br><br>
                    <span class="detailsButton" onclick='$("#nukes").toggle();'>Details</span>
                    <div id="nukes" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Nukes get deployed every 2 seconds (with a marker appearing on the ground) and will always be at least 25 units away from your main and at least 15 units from any resource patch.</p>
                        <p>Nukes will be deploayed within 50 range of a randomly-selected player unit.</p>
                        <p>Nukes deal a base damage of 750 (950 vs structures) within range 4, 50% of base damage  within range 6, and 25% of base damage within range 8 of the center of the nuke.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Kerrigan: Kerrigan's Omega Worms can be used to load units in to save them from being killed by a nuke.</li>
                            <li>Nova: Nova's Tactical Airlift can be used to save units from a nuke, before dropping them back down in the same location.</li>
                            <li>Tychus: Tychus' Medivac Platforms can be used to save units from a nuke, before dropping them back down in the same location.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_hardenedwill">
                <td><img src="/images/mutators/hardenedwill.png" alt="Hardened Will"></td>
                <td>Hardened Will</td>
                <td>Enemy Heroic units reduce all incoming damage to a maximum of 10 when any non-heroic enemy unit is near them.
                    <br><br>
                    <span class="detailsButton" onclick='$("#hardenedWill").toggle();'>Details</span>
                    <div id="hardenedWill" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Hardened Will checks a distance of 6 units around a Heroic unit's area. If there are any non-heroic units in that area, Hardened Will gets applied.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Dehaka: Devouring a unit with more than 10 vitality with Hardened Will will leave it at 1 HP.</li>
                            <li>Vorazun: Hardened Will does not get removed from units while Time Stop is active.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_heroesfromthestorm">
                <td><img src="/images/mutators/heroesfromthestorm.png" alt="Heroes From the Storm"></td>
                <td>Heroes From the Storm</td>
                <td>Attack waves will be joined by heroes of increasing power.
                    <br><br>
                    <span class="detailsButton" onclick='$("#heroesFromTheStorm").toggle();'>Details</span>
                    <div id="heroesFromTheStorm" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Heroes will be added to attack waves as the mission goes on using a "Hero Pool" system which keeps track of how many heroes can spawn. The Hero Pool starts at 1. Every time a hero spawns, the Hero Pool gets reduced by 1. At particular mission times, the current value of the Hero Pool is increased as per the following table:</p>
                        <p>On Dead Of Night, Nydus unloads are regarded as attack wave spawns and will therefore also spawn Amon heroes.</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>5:00</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>6:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>11:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>12:30</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>14:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>15:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>16:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>17:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>18:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>19:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>20:00</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Every 30 seconds past 20:00, the counter goes up by 1.</p>
                        <p>Every attack wave, the Hero Pool will attempt to be depleted and summon the number of heroes in the Hero Pool, subject to the following constraints:</p>
                        <ul>
                            <li>Maximum allowable heroes per attack wave: 6</li>
                            <li>On Mist Opportunities, maximum heroes in a harass wave: 1</li>
                            <li>On Temple of the Past, maximum heroes in side ramp attack wave: 1</li>
                            <li>On Temple of the Past, maximum heroes in North drop attack wave: 0</li>
                            <li>Attack Wave is not an Air Drop attack wave</li>
                        </ul>
                        <p>Note that heroes will not spawn at the attack wave spawn location, but at the attack wave gather location.</p>
                        <p>Heroes are spawned in a particular order for the first 9 spawns as follows:</p>
                        <ol>
                            <li>Raynor</li>
                            <li>Tychus</li>
                            <li>Dehaka</li>
                            <li>Karax</li>
                            <li>Nova</li>
                            <li>Zagara</li>
                            <li>Zeratul</li>
                            <li>Artanis</li>
                            <li>Kerrigan</li>
                        </ol>
                        <p>After the 9th spawn, a random hero will be selected from each set of three heroes (1-3, 4-6, 7-9). For example, spawn #10 will contain either Raynor, Tychus or Dehaka. Spawn #11 will contain either Karax, Nova or Zagara, etc.</p>
                        <p>Information on the available heroes is shown below.</p>
                        <p><b>Artanis</b></p>
                        <img src="/images/mutatordata/hotsartanis.jpg" alt="Heroes From the Storm Artanis">
                        <p>HP/Shields: 2000/2000</p>
                        <p>Passives:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Passive</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/resurgence.png" alt="Resurgence"></td>
                                    <td>Resurgence</td>
                                    <td>Grants Artanis invulnerability for 3 seconds upon taking lethal damage, preventing death and replenishing his Shields and Life. Also releases a large blast of energy that knocks back and deals 100 damage to all nearby enemies. This effect cannot occur more than once every 60 seconds.</td>
                                    <td>60 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/lightningdash.png" alt="Lightning Dash"></td>
                                    <td>Lightning Dash</td>
                                    <td>Artanis charges forward, unleashing a blast of energy that deals 100 damage to nearby enemies and stuns them for 2 seconds.</td>
                                    <td>5 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/astralwind.png" alt="Astral Wind"></td>
                                    <td>Astral Wind</td>
                                    <td>Heals Artanis and all nearby friendly units for 300 life and 200 shields.</td>
                                    <td>15 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Dehaka</b></p>
                        <img src="/images/mutatordata/hotsdehaka.jpg" alt="Heroes From the Storm Dehaka">
                        <p>HP: 1500</p>
                        <p>Passives: None</p>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/drag.png" alt="Drag"></td>
                                    <td>Drag</td>
                                    <td>Pulls the target to Dehaka's location and temporarily stuns it (5 seconds).</td>
                                    <td>10 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/generatespawns.png" alt="Generate Spawns"></td>
                                    <td>Generate Spawns</td>
                                    <td>Generates two Spawns of Dehaka that deal 100% normal damage but have 50% life. Spawns last 30 seconds.</td>
                                    <td>45 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/mend.png" alt="Mend"></td>
                                    <td>Mend</td>
                                    <td>Heals Dehaka for 150, and heals nearby friendly units for 50. An additional 50% of the amount healed regenerates over 15 seconds.</td>
                                    <td>10 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Karax</b></p>
                        <img src="/images/mutatordata/hotskarax.jpg" alt="Heroes From the Storm Karax">
                        <p>HP/Shields: 750/750</p>
                        <p>Passives:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Passive</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/masterphasesmith.png" alt="Master Phase-smith"></td>
                                    <td>Master Phase-smith</td>
                                    <td>Karax generates a power field similar to a Pylon. Structures within the power field gain 100% attack speed and 900% production speed.</td>
                                    <td>0 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/reclamation.png" alt="Reclamation"></td>
                                    <td>Reclamation</td>
                                    <td>Permanently takes control of target enemy robotic unit or Protoss structure. Robotic units include Sentries, Immortals, Reavers and Colossi.</td>
                                    <td>5 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/phasecannon.png" alt="Phase Cannon"></td>
                                    <td>Phase Cannon</td>
                                    <td>Phases in a Photon Cannon that lasts for 30 seconds before leaving the battlefield.<br><br>The Photon Cannon must be placed within a power field.</td>
                                    <td>10 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/warpinkhydarinmonolith.png" alt="Warp In Khaydarin Monolith"></td>
                                    <td>Warp In Khaydarin Monolith</td>
                                    <td>Extremely powerful defensive structure. Has superior range and damage, but is very expensive and attacks slowly.<br><br>Can attack ground and air units.</td>
                                    <td>10 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Kerrigan</b></p>
                        <img src="/images/mutatordata/hotskerrigan.jpg" alt="Heroes From the Storm Kerrigan">
                        <p>HP: 5000</p>
                        <p>Passives: None</p>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/leapingstrike.png" alt="Leaping Strike"></td>
                                    <td>Leaping Strike</td>
                                    <td>Kerrigan leaps to her target and deals 150 damage. Can be used without a target to travel quickly.</td>
                                    <td>0 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/psionicshift.png" alt="Psionic Shift"></td>
                                    <td>Psionic Shift</td>
                                    <td>Kerrigan dashes through enemies, dealing 50 damage to all enemies in her path.</td>
                                    <td>0 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/apocalypse.png" alt="Apocalypse"></td>
                                    <td>Apocalypse</td>
                                    <td>Deals 300 damage to enemy units and 700 damage to enemy structures in a large area.</td>
                                    <td>60 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Nova</b></p>
                        <img src="/images/mutatordata/hotsnova.jpg" alt="Heroes From the Storm Nova">
                        <p>HP: 2250</p>
                        <p>Passives: None</p>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/snipe.png" alt="Snipe"></td>
                                    <td>Snipe</td>
                                    <td>Deals 200 damage to target enemy ground or air unit from long range.<br><br>Can target biological and mechanical units.</td>
                                    <td>0 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/nuke.png" alt="Nuke"></td>
                                    <td>Nuke</td>
                                    <td>Calls down a Nuclear Strike at a target location. Nukes take 5 seconds to land, but they deal up to 600 damage to enemies in a large radius.</td>
                                    <td>60 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Raynor</b></p>
                        <img src="/images/mutatordata/hotsraynor.jpg" alt="Heroes From the Storm Raynor">
                        <p>HP: 1000</p>
                        <p>Passives: None</p>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/penetratorround.png" alt="Penetrator Round"></td>
                                    <td>Penetrator Round</td>
                                    <td>After carefully aiming, Raynor fires a Penetrator Round that strikes enemies along its path, dealing 80 damage.</td>
                                    <td>20 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Tychus</b></p>
                        <img src="/images/mutatordata/hotstychus.jpg" alt="Heroes From the Storm Tychus">
                        <p>HP: 1000</p>
                        <p>Passives:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/hailoflead.png" alt="Hail of Lead"></td>
                                    <td>Hail of Lead</td>
                                    <td>Tychus' Chaingun deals splash damage (50%) in a small area (1.25 range) around the target.</td>
                                    <td>0 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/tossshreddergrenade.png" alt="Toss Shredder Grenade"></td>
                                    <td>Toss Shredder Grenade</td>
                                    <td>Tosses a grenade that explodes for 80 damage in a small radius (2 range).<br><br>Does not harm friendly units.</td>
                                    <td>20 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Zagara</b></p>
                        <img src="/images/mutatordata/hotszagara.jpg" alt="Heroes From the Storm Zagara">
                        <p>HP: 2250</p>
                        <p>Passives: None</p>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/banelingbarrage.png" alt="Baneling Barrage"></td>
                                    <td>Baneling Barrage</td>
                                    <td>Launches 4 Banelings towards the target point. Each Baneling explodes for 40 damage (80 vs structures).</td>
                                    <td>10 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/spawnhunterkillers.png" alt="Spawn Hunter Killers"></td>
                                    <td>Spawn Hunter Killers</td>
                                    <td>Spawns 4 Hunter Killers at the target point that last 20 seconds.</td>
                                    <td>30 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/massfrenzy.png" alt="Mass Frenzy"></td>
                                    <td>Mass Frenzy</td>
                                    <td>Grants all friendly units on the map 25% attack speed and 25% movement speed for 15 seconds.</td>
                                    <td>120 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/infesteddrop.png" alt="Infested Drop"></td>
                                    <td>Infested Drop</td>
                                    <td>Calls down 10 drop-pods onto the target area, dealing 50 damage with each drop-pod and spawning a total of 10 Roaches that last 30 seconds.</td>
                                    <td>60 seconds</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><b>Zeratul</b></p>
                        <img src="/images/mutatordata/hotszeratul.jpg" alt="Heroes From the Storm Zeratul">
                        <p>HP/Shields: 2000/2000</p>
                        <p>Passives:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/permanentlycloaked.png" alt="Permanently Cloaked"></td>
                                    <td>Permanently Cloaked</td>
                                    <td>Zeratul is permanently cloaked.</td>
                                    <td>0 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Abilities:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Cooldown</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/blink.png" alt="Blink"></td>
                                    <td>Blink</td>
                                    <td>Teleports Zeratul to a nearby location.</td>
                                    <td>3 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/voidarmor.png" alt="Void Armor"></td>
                                    <td>Void Armor</td>
                                    <td>Grants nearby friendly units +100 shields for 10 seconds.</td>
                                    <td>10 seconds</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/mutatordata/amonheroes/shadowblade.png" alt="Shadow Blade"></td>
                                    <td>Shadow Blade</td>
                                    <td>Slashes an enemy unit for 500 damage.<br><br>Can only target ground units.</td>
                                    <td>6 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Dehaka: Dehaka can Devour Amon's Dehaka (with an <a href="/resources/eastereggs">Easter Egg</a> voice line). He cannot Devour other heroes.</li>
                            <li>Dehaka: Dakrun's knockback can cancel Kerrigan's Apocalypse and Nova's Nuke.</li>
                            <li>Tychus: Crooked Sam's Moebius Restraint Matrix upgrade can be used to stun Amon Heroes with his Demolition Charge.</li>
                            <li>Vorazun: Oracle Stasis Wards can be used to disable Heroes. Combine with the Stasis Calibration upgrade to be able to attack them while in stasis.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_inspiration">
                <td><img src="/images/mutators/inspiration.png" alt="Inspiration"></td>
                <td>Inspiration</td>
                <td>Enemy Heroic units increase the attack speed and armor of all enemies within a small range.
                    <br><br>
                    <span class="detailsButton" onclick='$("#inspiration").toggle();'>Details</span>
                    <div id="inspiration" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Inspiration grants an increase of 25% attack speed and 3 armor to all units within 5 range of a Heroic unit. The buff can also be applied to structures and static defense.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_justdie">
                <td><img src="/images/mutators/justdie.png" alt="Just Die"></td>
                <td>Just Die</td>
                <td>Enemy units are automatically revived upon death.
                    <br><br>
                    <span class="detailsButton" onclick='$("#justDie").toggle();'>Details</span>
                    <div id="justDie" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>A unit that has just died and is being revived by the mutator is stunned (cannot move, attack or use skills) and invulnerable for 1 second.</p>
                        <p>Objectives and bonus objectives that are non-structures will have Just Die! applied, so they will respawn once after killed.</p>
                        <p>Note that units do not respawn. Instead, their HP, shields and energy are reset to full when they take fatal damage for the first time.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units will only drop one Biomass drop, which is when they are finally killed.</li>
                            <li>Dehaka: Units will only drop one Essence drop, which is when they are finally killed.</li>
                            <li>Mengsk: Units will provide Royal Guard experience once, which is when they are finally killed.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_killbots">
                <td><img src="/images/mutators/killbots.png" alt="Kill Bots"></td>
                <td>Kill Bots</td>
                <td>Waves of bots attack players and are invulnerable to damage until they have killed a set amount of units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#killBots").toggle();'>Details</span>
                    <div id="killBots" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The bots will spawn from any enemy building. If you clear all enemy buildings on the map, the bots will stop spawning. Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
                        <p>There are three types of Kill Bots that will spawn, as follows:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Bot</th>
                                    <th>Kills Required</th>
                                    <th>Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Murder Bot</td>
                                    <td>5</td>
                                    <td><img src="/images/mutatordata/killbotsmurderbot.jpg" alt="Murder Bot"></td>
                                </tr>
                                <tr>
                                    <td>Death Bot</td>
                                    <td>10</td>
                                    <td><img src="/images/mutatordata/killbotsdeathbot.jpg" alt="Death Bot"></td>
                                </tr>
                                <tr>
                                    <td>Kill Bot</td>
                                    <td>15</td>
                                    <td><img src="/images/mutatordata/killbotskillbot.jpg" alt="Kill Bot"></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The spawn timings of the Kill Bots are as follows:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Bot Type</th>
                                    <th>Bots Spawned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3:35</td>
                                    <td>Murder Bot</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>5:05</td>
                                    <td>Murder Bot</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6:35</td>
                                    <td>Murder Bot</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>8:05</td>
                                    <td>Murder Bot</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>9:35</td>
                                    <td>Murder Bot</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>10:45</td>
                                    <td>Death Bot</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>11:55</td>
                                    <td>Death Bot</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>13:05</td>
                                    <td>Death Bot</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>14:15</td>
                                    <td>Death Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>15:25</td>
                                    <td>Death Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>16:35</td>
                                    <td>Death Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>17:45</td>
                                    <td>Death Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>18:55</td>
                                    <td>Death Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>20:05</td>
                                    <td>Kill Bot</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>21:05</td>
                                    <td>Kill Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>22:05</td>
                                    <td>Kill Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>23:05</td>
                                    <td>Kill Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>24:05</td>
                                    <td>Kill Bot</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>25:05</td>
                                    <td>Kill Bot</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>After the 25:05 spawn, 4 Kill Bots will appear every 60 seconds.</p>
                        <p>Bots will attack Aurana's transport and Data Cores on Malwarfare, Terrazine Harvesters on Mist Opportunities, Artifact Trucks on Cradle of Death, and the Evacuation Ships on Miner Evacuation.</p>
                        <p>When playing commanders that have Evolution Chambers, use those to feed Kill Bots. When they are destroyed (1 kill), they spawn  6 Broodlings (6 kills).</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Kerrigan: If using Zerglings to feed Kill Bots, avoid getting the Hardened Carapace upgrade until Kill Bots start to spawn. This will allow the Death Bots to 1-shot the Zerglings.</li>
                            <li>Mengsk: Kill Bots do not aggro Zerg units from Dogs of War.</li>
                            <li>Raynor: Spider Mines do not add to Kill Bot kill counters.</li>
                            <li>Stetmann: If using Zerglings to feed Kill Bots, never get the Hardened Egonergy Shield upgrade as this prolongs Zergling life, keeping Kill Bots alive longer on the map.</li>
                            <li>Stukov: Volatile Infested do not add to the Kill Bot's kill counter.</li>
                            <li>Vorazun: Corsair Disruption Webs stop Kill Bots from attacking.</li>
                            <li>Vorazun: Units that get Emergency Recalled do not add to the Kill Bot's kill counter.</li>
                            <li>Vorazun: Time Stop does not affect Kill Bots timings.</li>
                            <li>Zagara: If using Zerglings to feed Kill Bots, avoid getting the Hardened Carapace upgrade until Kill Bots start to spawn. This will allow the Death Bots to 1-shot the Zerglings.</li>
                            <li>Zeratul: Cannon Projection kills do not add to the Kill Bot's kill counter.</li>
                            <li>Zeratul: Legion units do not get attacked by Kill Bots.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_laserdrill">
                <td><img src="/images/mutators/laserdrill.png" alt="Laser Drill"></td>
                <td>Laser Drill</td>
                <td>An enemy Drakken laser drill constantly attacks player units within enemy vision.
                <br><br>
                    <span class="detailsButton" onclick='$("#laserDrill").toggle();'>Details</span>
                    <div id="laserDrill" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The drill does damage in three separate phases, depending on the time it is left attacking a certain unit, as shown below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Attack Time</th>
                                    <th>Damage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0-15 seconds</td>
                                    <td>2/0.1 seconds</td>
                                </tr>
                                <tr>
                                    <td>15-30 seconds</td>
                                    <td>4/0.1 seconds</td>
                                </tr>
                                <tr>
                                    <td>30+ seconds</td>
                                    <td>6/0.1 seconds</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The drill can be destroyed if players are able to reach it. It has 1000HP, 2000 Shields and 2 armor. However, it will go into repair mode and will take 120 seconds before it starts attacking again.</p>
                        <p>Note that when facing up against Zerg compositions, Creep Tumors provide vision for the Laser Drill.</p>
                        <p>The spawn points of the Laser Drill are shown below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Mission</th>
                                    <th>Spawn Point</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Chain of Ascension</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnchainofascension.jpg" alt="Chain of Ascension Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Cradle of Death</td>
                                    <td><img src="/images/mutatordata/laserdrillspawncradleofdeath.jpg" alt="Cradle of Death Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Dead of Night</td>
                                    <td><img src="/images/mutatordata/laserdrillspawndeadofnight.jpg" alt="Dead of Night Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Lock & Load</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnlockandload.jpg" alt="Lock & Load Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Malwarfare</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnmalwarfare.jpg" alt="Malwarfare Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Miner Evacuation</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnminerevacuation.jpg" alt="Miner Evacuation Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Mist Opportunities</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnmistopportunities.jpg" alt="Mist Opportunities Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Oblivion Express</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnoblivionexpress.jpg" alt="Dead of Night Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Part and Parcel</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnpartandparcel.jpg" alt="Part & Parcel Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Rifts to Korhal</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnriftstokorhal.jpg" alt="Rifts to Korhal Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Scythe of Amon</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnscytheofamon.jpg" alt="Scythe of Amon Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Temple of the Past</td>
                                    <td><img src="/images/mutatordata/laserdrillspawntempleofthepast.jpg" alt="Temple of the Past Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>The Vermillion Problem</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnthevermillionproblem.jpg" alt="The Vermillion Problem Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Void Launch</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnvoidlaunch.jpg" alt="Scythe of Amon Laser Drill Spawn Location"></td>
                                </tr>
                                <tr>
                                    <td>Void Thrashing</td>
                                    <td><img src="/images/mutatordata/laserdrillspawnvoidthrashing.jpg" alt="Void Thrashing Laser Drill Spawn Location"></td>
                                </tr>
                            </tbody>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Dehaka: If the Laser Drill locks onto Dakrun, it will kill itself from his damage reflect.</li>
                        </ul>
                        </table>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_lavaburst">
                <td><img src="/images/mutators/lavaburst.png" alt="Lava Burst"></td>
                <td>Lava Burst</td>
                <td>Lava periodically bursts from the ground at random locations and deals damage to player air and ground units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#lavaBurst").toggle();'>Details</span>
                    <div id="lavaBurst" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Lava Bursts appear every 0.5 seconds and will always be at least 25 units away from your main and at least 10 units from any resource patch. Lava Bursts will also not appear directly underneath your structures.</p>
                        <p>Lava Bursts will be marked on the terrain. These markings will last for 4 seconds before they start dealing damage. Lava Bursts deal 5 (+2 vs. Armored) damage per 0.125 seconds (40 DPS) to non-heroic units. The damage phase of the Lava Bursts lasts 16 seconds.</p>
                        <p>Lava Burst damage to Heroic units is based on the unit's maximum HP. This is summarized in the table below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Unit HP</th>
                                    <th>Total DPS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>100</td>
                                    <td>24</td>
                                </tr>
                                <tr>
                                    <td>150</td>
                                    <td>36</td>
                                </tr>
                                <tr>
                                    <td>200</td>
                                    <td>48</td>
                                </tr>
                                <tr>
                                    <td>250</td>
                                    <td>60</td>
                                </tr>
                                <tr>
                                    <td>300</td>
                                    <td>72</td>
                                </tr>
                                <tr>
                                    <td>400</td>
                                    <td>128</td>
                                </tr>
                                <tr>
                                    <td>500</td>
                                    <td>120</td>
                                </tr>
                                <tr>
                                    <td>600</td>
                                    <td>144</td>
                                </tr>
                                <tr>
                                    <td>800</td>
                                    <td>192</td>
                                </tr>
                                <tr>
                                    <td>1000</td>
                                    <td>240</td>
                                </tr>
                                <tr>
                                    <td>1500</td>
                                    <td>360</td>
                                </tr>
                                <tr>
                                    <td>2000</td>
                                    <td>480</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Alarak: Place force-fields over Lava Bursts to prevent your units from accidentally walking over Lava Bursts. Be careful if you use Massive units, because they can break force-fields.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_lifeleech">
                <td><img src="/images/mutators/lifeleech.png" alt="Life Leech"></td>
                <td>Life Leech</td>
                <td>Enemy units steal life or shields whenever they do damage.
                    <br><br>
                    <span class="detailsButton" onclick='$("#lifeLeech").toggle();'>Details</span>
                    <div id="lifeLeech" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Life Leech heals Amon's units for 100% of the damage they do against player units.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_longrange">
                <td><img src="/images/mutators/longrange.png" alt="Long Range"></td>
                <td>Long Range</td>
                <td>Enemy units and structures have increased weapon and vision range.
                    <br><br>
                    <span class="detailsButton" onclick='$("#longRange").toggle();'>Details</span>
                    <div id="longRange" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All enemies get +3 to their ranged weapon range and sight range.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_luckyenvelopes">
                <td><img src="/images/mutators/luckyenvelopes.png" alt="Lucky Envelopes"></td>
                <td>Lucky Envelopes</td>
                <td>Festive envelopes containing resource pickups are dropped at random throughout the map.
                    <br><br>
                    <span class="detailsButton" onclick='$("#redEnvelopes").toggle();'>Details</span>
                    <div id="redEnvelopes" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Envelopes either contain 50 gas or 50 minerals for both players and need to be picked up. They can only be picked up by ground units.</p>
                        <p>During the first 3:00, all envelopes will spawn within 30 range of player bases every 7 seconds. After that, envelopes can spawn anywhere on the map every 5.4 seconds.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_magnificent">
                <td><img src="/images/mutators/mag-nificent.png" alt="Mag-nificent"></td>
                <td>Mag-nificent</td>
                <td>Mag Mines are deployed throughout the map at the start of the mission.
                    <br><br>
                    <span class="detailsButton" onclick='$("#magMines").toggle();'>Details</span>
                    <div id="magMines" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>At the start of the game, 200 Mag-mines are placed randomly throughout the map. Mag-mines cannot be placed within 30 range of player start locations or within 5 range of resource patches.</p>
                        <p>The mines will deal 250 damage, after a 2.5-second trigger delay, allowing you to dodge them easily. They trigger without the need for detection.</p>
                        <p>Additionally, there are some other map-specific limitations:</p>
                        <ul>
                            <li>Chain of Ascension: Mag-mines will not be placed within 15 range of Ji'Nara.</li>
                            <li>Lock & Load: Mag-mines will not be placed within 8 range of the Celestial Locks.</li>
                        </ul>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Raynor: Hyperion Point Defense Drones can shoot down Mag-mines.</li>
                            <li>Zeratul: Shieldguards have a 50% chance to remove a Mag-mine projectile.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_microtransactions">
                <td><img src="/images/mutators/microtransactions.png" alt="Micro Transactions"></td>
                <td>Micro Transactions</td>
                <td>Giving commands to your units costs resources based on the unit's cost.
                    <br><br>
                    <span class="detailsButton" onclick='$("#orderCosts").toggle();'>Details</span>
                    <div id="orderCosts" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Hero units, top bar abilities and Tychus outlaws all cost 10 minerals and 5 gas to issue commands to. The cost of issue a command to a regular unit depends on its actual unit cost and supply cost. For gasless units, the cost is 2 x its supply in minerals. For gas units, it's 1 x its supply in gas and minerals. Note that if you do not have the resources, issuing orders is free. However, if you have no gas, then Micro Transaction mineral cost will be doubled.</p>
                        <p>Costs will only be applied if commands are issued to a unit. Therefore, units following another unit will only incur the initial cost to set them on follow. When that unit moves, no costs will be charged for all units following that unit.</p>
                        <p>If your ally leaves, commands issued to their units will also not be free.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_mineralshields">
                <td><img src="/images/mutators/mineralshields.png" alt="Mineral Shields"></td>
                <td>Mineral Shields</td>
                <td>Mineral clusters at player bases are periodically encased in a shield which must be destroyed for gathering to continue.
                    <br><br>
                    <span class="detailsButton" onclick='$("#entomb").toggle();'>Details</span>
                    <div id="entomb" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The first set of mineral shields will appear at 2:40. Following mineral shields will appear every 2:00. Each mineral patch has a 15% chance of getting shielded. This percentage goes up by 5% for every round of Mineral Shields.</p>
                        <p>Each Mineral shield has 50HP and lasts for 60 seconds. Mineral shields do not get auto-targeted, so you will need to manually target them to destroy them.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Han/Horner: Two sets of Mag-mines can clear out all the minerals shields that spawn on a mineral line.</li>
                            <li>Stukov: Patrol a Diamondback with the Caustic Mucus upgrade behind the mineral line to clear the shields automatically.</li>
                            <li>Zagara: Place Bile Launchers behind mineral lines so their bombardments can clear Mineral Shields automatically.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_minesweeper">
                <td><img src="/images/mutators/minesweeper.png" alt="Minesweeper"></td>
                <td>Minesweeper</td>
                <td>Groups of Widow Mines and Spider Mines are buried throughout the battlefield.
                    <br><br>
                    <span class="detailsButton" onclick='$("#mineFields").toggle();'>Details</span>
                    <div id="mineFields" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>At the start of the game, a total of 25 patches of Widow Mines and Spider Mines will be created. Each patch will contain 5 Widow Mines and 7 Spider Mines. The patches cannot be placed within 30 range of player start locations or within 5 range of resource patches or within 8 range of each other.</p>
                        <p>Widow Mines deal direct target damage 250 (+35 vs shields) and splash damage of 80 (+40 vs shields). They have 180HP and will trigger from 5 range.</p>
                        <p>Spider Mines deal a base damage of 250 within range 1.7, 50% of base damage  within range 2.25, and 25% of base damage within range 3.  They have 25HP and will trigger from 4 range.</p>
                        <p>Since both, Spider Mines and Widow Mines do not attack structures, commanders with movable static defense are great at efficiently clearing mines.</p>
                        <p>Mines will trigger on Aurana's transport on Malwarfare, Terrazine Harvesters on Mist Opportunities, Artifact Trucks on Cradle of Death and the Balius on Part and Parcel.</p>
                        <p>Additionally, there are some other map-specific limitations:</p>
                        <ul>
                            <li>Chain of Ascension: Patches will not be placed within 15 range of Ji'Nara.</li>
                            <li>Lock & Load: Patches will not be placed within 8 range of the Celestial Locks.</li>
                        </ul>
                        <p>The below image shows an example of a field generated by the mutator. Remember that you will need detection to clear the mines.</p>
                        <img src="/images/mutatordata/minesweeperfield.jpg" alt="Minesweeper Field">
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Kerrigan: 25 points into the Immobilization Wave mastery will allow Kerrigan to 1-shot Widow Mines.</li>
                            <li>Kerrigan: Folly of Man Fury stacks can hit mines without detection.</li>
                            <li>Stetmann: Getting the Hardened Egonergy Shield upgrade for Zerglings will allow them to clear mines efficiently without taking heavy losses.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_missilecommand">
                <td><img src="/images/mutators/missilecommand.png" alt="Missile Command"></td>
                <td>Missile Command</td>
                <td>Endless missile bombardments target your structures and must be shot down throughout the mission.
                    <br><br>
                    <span class="detailsButton" onclick='$("#missileBarrage").toggle();'>Details</span>
                    <div id="missileBarrage" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Missiles get launched from the sides of the map. The spawning of the missiles cannot be stopped, but the missiles can be destroyed. There are different types of missiles that will appear. These are shown in the table below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Missile</th>
                                    <th>HP</th>
                                    <th>Damage</th>
                                    <th>Description</th>
                                    <th>Picture</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Standard</td>
                                    <td>10</td>
                                    <td>100</td>
                                    <td>This is the standard missile and most commonly-spawned missile.</td>
                                    <td><img src="/images/mutatordata/missilecommandstandard.jpg" alt="Standard Missile"></td>
                                </tr>
                                <tr>
                                    <td>Point Defense Missile</td>
                                    <td>15</td>
                                    <td>-</td>
                                    <td>This travels alongside a missile and will stop when it reaches the target building. It starts with 200 energy and shoots down any projectiles. Each projectile shot drains 10 energy.</td>
                                    <td><img src="/images/mutatordata/missilecommandpdm.jpg" alt="Point Defense Missile"></td>
                                </tr>
                                <tr>
                                    <td>Splitter Missile</td>
                                    <td>20</td>
                                    <td>175</td>
                                    <td>When destroyed, this will split into two smaller missiles.</td>
                                    <td><img src="/images/mutatordata/missilecommandsplitter.jpg" alt="Splitter Missile"></td>
                                </tr>
                                <tr>
                                    <td>Splitter Missile Child</td>
                                    <td>5</td>
                                    <td>75</td>
                                    <td>Spawned from a Splitter Missile.</td>
                                    <td><img src="/images/mutatordata/missilecommandsplitterchild.jpg" alt="Splitter Missile Child"></td>
                                </tr>
                                <tr>
                                    <td>Nuke</td>
                                    <td>100</td>
                                    <td>300 (500 vs Structures)</td>
                                    <td>Accompanied by 5 PDM's. Nukes can only be deployed once every 60 seconds.<br>Damage dealt depends on distance from center of hit:<br>100% within 4 range<br>50% within 6 range<br>25% within 8 range</td>
                                    <td><img src="/images/mutatordata/missilecommandnuke.jpg" alt="Nuke Missile"></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Depending on the mission time, the spawn rate for the missiles is different as shown in the table below, as well as the percentages for each of the missiles. Note that 2 missiles are fired every spawn cycle, one for each player.</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Spawn Rate</th>
                                    <th>Standard %</th>
                                    <th>Standard + PDM %</th>
                                    <th>Splitter %</th>
                                    <th>Nuke + 5 PDM's %</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-5:00</td>
                                    <td>15 seconds</td>
                                    <td>100%</td>
                                    <td>0%</td>
                                    <td>0%</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>5:00-10:00</td>
                                    <td>5 seconds</td>
                                    <td>90%</td>
                                    <td>10%</td>
                                    <td>0%</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>10:00-15:00</td>
                                    <td>2 seconds</td>
                                    <td>60%</td>
                                    <td>20%</td>
                                    <td>20%</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>15:00+</td>
                                    <td>1 second</td>
                                    <td>40%</td>
                                    <td>20%</td>
                                    <td>30%</td>
                                    <td>10%</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Point Defense Missiles shoot down all Projectile attacks until they run out of energy, but they be shot down/bypassed by Hitscan attacks. The video below explains the difference between the two attack types:</p>
                        <iframe width="475" height="268" src="https://www.youtube.com/embed/OKg_hJ-ldD8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <p>Another option would be to simply overwhelm the Point Defense Missiles. Point Defense Missiles will lose energy quickly and cannot shoot down all projectiles if many are being fired at them at the same time.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Artanis: High Templars/High Archons can feedback the Point Defense Missiles.</li>
                            <li>Kerrigan: Desolate Queen Kerrigan's Kinetic Blast is blocked by Point Defense Missiles and Point Defense Drones.</li>
                            <li>Stetmann: Super Gary's auto-attack cannot be shot down by Point Defense Missiles and Point Defense Drones.</li>
                            <li>Vorazun: Time Stop does not affect Missile Command timings.</li>
                            <li>Zeratul: Tesseract Monoliths can stun Point Defense Missiles, allowing projectile attacks to connect with their targets.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_momentofsilence">
                <td><img src="/images/mutators/momentofsilence.png" alt="Moment of Silence"></td>
                <td>Moment of Silence</td>
                <td>When a Heroic enemy dies, all player units around it will reflect on their transgressions, leaving them temporarily unable to attack or use abilities.
                    <br><br>
                    <span class="detailsButton" onclick='$("#momentOfSilence").toggle();'>Details</span>
                    <div id="momentOfSilence" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Moment of Silence is cast within 8 range of the dead unit. It has a 12-second duration.</p>
                        <p>If the hybrid is a Hybrid Nemesis, there is a 2-second delay before the effect is applied. Otherwise, there is a 1-second delay.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Dehaka: Dehaka's Pack Leaders are Map Bosses and are therefore immune to Moment of Silence.</li>
                            <li>Kerrigan: Omega Worms can be used to dodge the Moment of Silence Debuff before it triggers.</li>
                            <li>Nova: Tactical Airlift can be used to dodge the Moment of Silence Debuff before it triggers.</li>
                            <li>Tychus: Medivac Pickup can be used to dodge the Moment of Silence Debuff before it triggers.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_mutuallyassureddestruction">
                <td><img src="/images/mutators/mutuallyassureddestruction.png" alt="Mutually Assured Destruction"></td>
                <td>Mutually Assured Destruction</td>
                <td>Enemy Hybrid units detonate a Nuke upon death.
                    <br><br>
                    <span class="detailsButton" onclick='$("#hybridDeathNuke").toggle();'>Details</span>
                    <div id="hybridDeathNuke" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All hybrids detonate a nuke. There is a 2-second delay before a nuke detonates if the dead hybrid is a Hybrid Nemesis or a Moebius Hybrid A from Part and Parcel, 1-second delay otherwise.</p>
                        <p>If the hybrid is a Hybrid destroyer, it detonates a small nuke. All other hybrids detonate a large nuke. Nukes deal a base damage of 750 (950 vs structures) within radius #1, 50% of base damage within radius #2, and 25% of base damage within radius #3 as shown in the table below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Nuke Type</th>
                                    <th>Radius #1</th>
                                    <th>Radius #2</th>
                                    <th>Radius #3</th>
                                    <th>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Small</td>
                                    <td>2</td>
                                    <td>2.5</td>
                                    <td>3</td>
                                    <td><img src="/images/mutatordata/smallnuke.jpg" alt="Range of a Small Nuke"></td>
                                </tr>
                                <tr>
                                    <td>Normal</td>
                                    <td>4</td>
                                    <td>6</td>
                                    <td>8</td>
                                    <td><img src="/images/mutatordata/normalnuke.jpg" alt="Range of a Normal Nuke"></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_naughtylist">
                <td><img src="/images/mutators/naughtylist.png" alt="Naughty List"></td>
                <td>Naughty List</td>
                <td>Player units and structures take increased damage for each enemy they've killed.
                    <br><br>
                    <span class="detailsButton" onclick='$("#killKarma").toggle();'>Details</span>
                    <div id="killKarma" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Each kill adds a damage stack that increases the damage dealt to the unit by a certain amount. The amount of damage increase is based on the number of kills a unit as, as shown in the following table:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Kills</th>
                                    <th>Damage Per Stack</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1-4</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>5-14</td>
                                    <td>4%</td>
                                </tr>
                                <tr>
                                    <td>15-150</td>
                                    <td>6%</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>When a Hero unit dies, the debuff is not applied until the hero makes a kill, after which the debuff will be applied based on its kill count throughout the entire game.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Fenix: Changing Fenix suits does not reset the Naughty List.</li>
                            <li>Fenix: Fenix Champions retain their kill counts from previous shells.</li>
                            <li>Zeratul: Zeratul's Shade Projections do not count towards Cannon/Monolith kill counts. The Projection gets the Naughty List count, but disappears after the Projection despawns and gets reset.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_orbitalstrike">
                <td><img src="/images/mutators/orbitalstrike.png" alt="Orbital Strike"></td>
                <td>Orbital Strike</td>
                <td>Enemy Orbital Strikes are periodically fired throughout the map.
                    <br><br>
                    <span class="detailsButton" onclick='$("#orbitalStrike").toggle();'>Details</span>
                    <div id="orbitalStrike" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Orbital Strikes will be cast every 1:20 seconds from the start of the game. They will be at least 30 units away from your main and at least 15 units from any resource patch. Additionally, they will also not be cast if there are less than 5 viable targets.</p>
                        <p>The number of targets is dependent on the mission time, as shown in the table below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Targets</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-5:00</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>5:00-8:20</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>8:20-11:40</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>11:40-16:40</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>16:40+</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Orbital Strike will fire in two volleys. Each volley has three shots per target, dealing damage of 50 (100 vs armored).</p>
                        <p>Mission objectives, although not particularly targeted, will take damage from Orbital Strike splash damage.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_outbreak">
                <td><img src="/images/mutators/outbreak.png" alt="Outbreak"></td>
                <td>Outbreak</td>
                <td>Continuous waves of the infested horde march against the commanders' bases.
                    <br><br>
                    <span class="detailsButton" onclick='$("#outbreak").toggle();'>Details</span>
                    <div id="outbreak" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Infested will start spawning from enemy structures starting at 2:00. If you clear all enemy structures, the infested will stop spawning.</p>
                        <p>Infested spawn in random quantities per wave, each wave occurring every 25 seconds. Before 13:20, between 2 to 4 infested will spawn per wave. After that, 4 to 6 infestd will spawn per wave.</p>
                        <p>The type of infested that spawn is dependent on the mission time, as shown in the table below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Infested</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-6:20</td>
                                    <td>Infested Terran</td>
                                </tr>
                                <tr>
                                    <td>6:20-20:00</td>
                                    <td>Infested Marine</td>
                                </tr>
                                <tr>
                                    <td>20:00+</td>
                                    <td>Aberration</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Additionally, after 15:00, an Infested Medic will spawn with every spawn of the infested wave.</p>
                        <p>Due to the unique mechanics of Dead of Night that target Infested units, Infested Marines and Aberrations will burn during the day if they have spawned from Infested Structures, even those spawned from this mutator. If they spawn from other Amon structures, they will not burn.</p>
                        <p>On Miner Evacuation, all infested from Outbreak will have double HP.</p>
                        <p>Outbreak can spawn infested from the part boxes on Part and Parcel and can have some unexpected mutator interactions. Only the following mutators interact with the infested that spawn from the part boxes (these infested will appear with a white-colored alliance):</p>
                        <ul>
                            <li>Concussive Attacks</li>
                            <li>Diffusion</li>
                            <li>Eminent Domain</li>
                            <li>Fear</li>
                            <li>Life Leech</li>
                        </ul>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units spawned from Outbreak do not drop Biomass.</li>
                            <li>Dehaka: Units spawned from Outbreak do not drop Essence.</li>
                            <li>Mengsk: Units spawned from Outbreak do not provide Royal Guard experience.</li>
                            <li>Vorazun: Time Stop does not affect Outbreak timings.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_photonoverload">
                <td><img src="/images/mutators/photonoverload.png" alt="Photon Overload"></td>
                <td>Photon Overload</td>
                <td>All enemy structures attack nearby hostile units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#photonOverload").toggle();'>Details</span>
                    <div id="photonOverload" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>It gets cast on any structure that takes damage (shield or life). Deals 20 damage to a single unit within 10 range every 1.25 seconds and lasts for 15 seconds.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_polarity">
                <td><img src="/images/mutators/polarity.png" alt="Polarity"></td>
                <td>Polarity</td>
                <td>Each enemy unit is immune to either your units or your ally's units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#polarity").toggle();'>Details</span>
                    <div id="polarity" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Applies to both, units and structures. Units do not take damage, but can be debuffed.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Alarak: Alarak's Structure Overcharge will lock onto units in Polarity,  even though it cannot damage them, which can waste the calldown.</li>
                            <li>Kerrigan: Folly of Man's lightning strikes can stun Polarity's units (although the damage will not be applied).</li>
                            <li>Tychus: Crooked Sam's Demolition Charge's Stun can stun Polarity's units (although the damage will not be applied).</li>
                            <li>Vorazun: Centurion's Dark Coil does not stun units with opposite polarity.</li>
                            <li>Vorazun: Confusion affects units with any polarity.</li>
                            <li>Vorazun: Stasis wards can stasis units with any polarity.</li>
                            <li>Vorazun: Vorazun's Withering Siphon prestige deals damage to units with any polarity.</li>
                            <li>Zeratul: Units devolved by the Avatar of Essence will have a random polarity.</li>
                        </ul>
                    </div>

                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_poweroverwhelming">
                <td><img src="/images/mutators/poweroverwhelming.png" alt="Power Overwhelming"></td>
                <td>Power Overwhelming</td>
                <td>All enemy units have energy and use random abilities.
                    <br><br>
                    <span class="detailsButton" onclick='$("#allCasters").toggle();'>Details</span>
                    <div id="allCasters" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>At the start of the game, all units start with 50 energy and have an energy regeneration rate of 0.5625. They have a maximum energy of 200. The skills and the energy bar are lost when the unit ownership changes (Mind Control, Domination, etc.).</p>
                        <p>While these units have an energy bar and use it for casts, they draw from a total energy pool for each player. Once this pool is depleted, no skills will be cast, even if the unit has energy. Additionally, if the unit does not have energy, it will not cast a skill, even if the pool has enough energy.</p>
                        <p>Note that this energy bar is an energy bar specifically used as an indicator for Power Overwhelming. It is unaffected by EMP and Feedback.</p>
                        <p>Skills can be cast without detection, so Cloaked units can still be targeted.</p>
                        <p>Depending on the mission time, skills will only be cast once the minimum energy level has been reached. Skills cast are random, but it means there is a chance of higher energy skills being cast as the game progresses. Additionally, there is a regeneration rate, and a maximum energy in the pool. This is shown in the table below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Minimum Energy</th>
                                    <th>Maximum Energy</th>
                                    <th>Regeneration Rate (per second)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-5:00</td>
                                    <td>80</td>
                                    <td>90</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>5:00-8:00</td>
                                    <td>80</td>
                                    <td>110</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>8:00-10:00</td>
                                    <td>80</td>
                                    <td>140</td>
                                    <td>6</td>
                                </tr>
                                <tr>
                                    <td>10:00+</td>
                                    <td>150</td>
                                    <td>290</td>
                                    <td>10</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The list of abilities and other information is listed below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Ability</th>
                                    <th>Energy Cost</th>
                                    <th>Range</th>
                                    <th>Other Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Abduct</td>
                                    <td>20</td>
                                    <td>9</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Black Hole</td>
                                    <td>150</td>
                                    <td>9</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Defensive Matrix</td>
                                    <td>20</td>
                                    <td>6</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Disruption Web</td>
                                    <td>40</td>
                                    <td>9</td>
                                    <td>Only used against structures with attack.<br>10% chance of being used.</td>
                                </tr>
                                <tr>
                                    <td>Fungal Growth</td>
                                    <td>45</td>
                                    <td>10</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Graviton Beam</td>
                                    <td>20</td>
                                    <td>4</td>
                                    <td>Cannot be cast on Heroic or Massive units.</td>
                                </tr>
                                <tr>
                                    <td>Guardian Shield</td>
                                    <td>20</td>
                                    <td>10</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Irradiate</td>
                                    <td>45</td>
                                    <td>9</td>
                                    <td>Only gets used against biological units.</td>
                                </tr>
                                <tr>
                                    <td>Phase Shift</td>
                                    <td>40</td>
                                    <td>10</td>
                                    <td>Only used against structures</td>
                                </tr>
                                <tr>
                                    <td>Point Defense Drone</td>
                                    <td>20</td>
                                    <td>9</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Psi Orb</td>
                                    <td>40</td>
                                    <td>10</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Psionic Storm</td>
                                    <td>40</td>
                                    <td>9</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Seeker Missile</td>
                                    <td>20</td>
                                    <td>10</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>Time Warp</td>
                                    <td>30</td>
                                    <td>9</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                        <p></p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Artanis: Feedback cannot be cast on units that do not have energy without Power Overwhelming.</li>
                            <li>Dehaka: Even though units have Psionic abilities, they do not gain the Psionic tag, so devouring them with Dehaka does not cause area of effect damage.</li>
                            <li>Dehaka: Point Defense Drones from Power Overwhelming can block Murvar's Locusts and Creepers from spawning.</li>
                            <li>Kerrigan Desolate Queen Kerrigan's Kinetic Blast is blocked by Point Defense Drones.</li>
                            <li>Mengsk: Emperor's Shadow Feedback deals damage to units with Power Overwhelming. This is covered in the following Mythbusters video:</li>
                            <iframe width="475" height="268" src="https://www.youtube.com/embed/EeNtBNtzGlU" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <li>Mengsk: Emperor's Shadow EMP's drain energy from the Power Overwhelming Energy bar.</li>
                            <li>Nova: Ghost EMP's drain energy from the Power Overwhelming Energy bar.</li>
                            <li>Stetmann: Mecha remnants can be shot down by Defensive Drones, preventing Gary or Stetellites from collecting them.</li>
                            <li>Stetmann: Super Gary's auto-attack cannot be shot down by Defensive Drones.</li>
                            <li>Vorazun: Due to Power Overwhelming being a map-wide effect, rather than a unit-based one, Time Stop does not prevent skills from being cast.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_propagators">
                <td><img src="/images/mutators/propagators.png" alt="Propagators"></td>
                <td>Propagators</td>
                <td>Reality warping sludges are crawling towards you. Anything they touch is turned into a copy of the sludge.
                    <br><br>
                    <span class="detailsButton" onclick='$("#propagators").toggle();'>Details</span>
                    <div id="propagators" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Propagators spawn from enemy buildings, so all-clearing a mission will stop them from spawning.  Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
                        <p>An additional word of warning: On Temple of the Past, the first Propagator will attack the rocks and convert them to another Propagator, thus forcing players to deal with two Propagators on the first spawn. One way of avoiding this is to destroy the rocks prior to the Propagator spawn.</p>
                        <p>They have 450 HP with 0 armor, are Heroic units and detectors and can attack both, air and ground units within 1 range. They have a movement speed of 1.6.</p>
                        <p>Below is an image of a Propagator.</p>
                        <img src="/images/mutatordata/propagator.jpg" alt="Propagator">
                        <p>Propagators spawn in waves at different times throughout the mission, as shown in the table below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Number spawned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3:28</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>4:58</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>6:28</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>7:58</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>9:28</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>10:28</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>11:28</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>12:28</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>13:28</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>14:28</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>15:28</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>16:28</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>17:28</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>18:28</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>19:28</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>20:28</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>21:28</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>22:08</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>22:58</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>23:48</td>
                                    <td>5</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>After 23:48, Propagators will spawn every 50 seconds in spawns of 5.</p>
                        <p>Propagators can attack all Heroic structures but not commander spawn points, or Zeratul's Artifact Reserve. Swann's Laser Drill, Fenix's Purifier Conclave and Karax's Solar Forge will be destroyed and will start to respawn, with no Propagator Spawning.</p>
                        <p>The other Heroic Structures will be destroyed and will spawn a Propagator. The player will need to rebuild the Heroic Structure manually. The exception to this is Han & Horner's Starport, which cannot be rebuilt if it is destroyed.</p>
                        <p>Propagators do not attack any unit with a MapBoss attribute. Therefore, Propagators will attack Data Cores but not Aurana's Transport on Malwarfare. They do not attack Harvesting Bots on Mist Opportunities, nor Artifact Trucks on Cradle of Death, nor the Evacuation Ships on Miner Evacuation.</p>
                        <p>Propagators can be path-blocked, which can be used to trap them while slower-attacking units kill them off. For more information, watch this video below:</p>
                        <iframe width="475" height="268" src="https://www.youtube.com/embed/T051w67T4Dc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Dehaka: A minimum of six Impalers are required to be able to deal with a Propagator.</li>
                            <li>Dehaka: Dehaka's Pack Leaders are Map Bosses and therefore are immune to Propagators.</li>
                            <li>Kerrigan: Kerrigan's Heroic unit can be used to kill a Propagator with 13 points in the Primary Ability Damage. The video below demonstrates this.<br>
                            <iframe width="475" height="268" src="https://www.youtube.com/embed/K5kwuOQdvj4" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </li>
                            <li>Stetmann: Stetellites can be converted to Propagators. Place Stetellites on unpathable terrain.</li>
                            <li>Stukov: Disable autocast of the "Spawn Infested Civilian" ability at the Infested Colonist Compound to prevent your units from accidentally engaging a Propagator.</li>
                            <li>Stukov: Two fully upgraded Bunkers (attack upgrades and Barracks Tech upgrades) or Four non-upgraded Bunkers can kill a Propagator assuming they all attack together. Three Bunkers can deal with a Propagator, but a Bunker will be lost, assuming no micro.</li>
                            <li>Tychus: Crooked Sam's Moebius Restraint Matrix upgrade will stop a Propagator from moving when Demolition Charge is used.</li>
                            <li>Vorazun: Manually cast Shadow Fury with Dark Templars to prevent them from accidentally wandering too close to a Propagator.</li>
                            <li>Vorazun: Time Stop does not affect Propagators timings.</li>
                            <li>Zagara: With a max'ed Baneling Damage mastery, Zagara can kill a Propagator with a Baneling Barrage and two auto attacks.</li>
                            <li>Zeratul: Shade Projections generate Propagators when killed by a Propagator.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_purifierbeam">
                <td><img src="/images/mutators/purifierbeam.png" alt="Purifier Beam"></td>
                <td>Purifier Beam</td>
                <td>An enemy Purifier Beam moves across the map toward nearby player units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#purifierBeam").toggle();'>Details</span>
                    <div id="purifierBeam" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The Purifier Beam cannot be destroyed. It does a base damage of 10 every 0.25 seconds within 1 radius, 50% of the base damage within 2.2 radius, and 10% of the base damage within 2.8 radius.</p>
                        <p>Purifier Beams will always stay least 20 units away from resource patches.</p>
                        <p>An additional beam will spawn at 10:00 and another one at 20:00. Purifier Beams will always spawn at least 80 units away from Player bases.</p>
                        <p>Players can "distract" a Purifier beam by setting a unit (or a structure if they are playing Terran) on patrol around the beam. The approximate size of the circle that will work for units of any size or any movement speed should be a circle with diameter equal to the vertical visible area on the screen. By having units set in patrol around the Beam, the Beam will end up following that one unit around throughout the course of the game. Note that for Zerg commanders, Overlords may be used, but they will require the Pneumatized Carapace upgrade.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Karax: With enough Shield Batteries, a Purifier Beam can be "trapped" on a Pylon while Shield Batteries around it recharge its shields. A picture is shown below:<br>
                            <img src="/images/mutatordata/purifierbeamtrap.jpg" alt="Purifier Beam Trap"><br>
                            <p>Note that the you will need to have the "Rapid Recharging" upgrade researched for this work. The Shield Battery placement marker in green shows a possible location for a 7th. This can be placed after researching the "Fortification Barrier" upgrade, preventing the Cannon from taking any hull damage and freeing up the repair beam.</p>
                            <p>The placement layout of the Photon Cannon, Pylons and Shield Batteries is shown below:</p>
                            <img src="/images/mutatordata/purifierbeamtraplayout.jpg" alt="Purifier Beam Trap Layout"><br>
                            <p>The video below demonstrates this in action:</p>
                            <iframe width="475" height="268" src="https://www.youtube.com/embed/zvvnvFFTooY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </li>
                            <li>Kerrigan: Kerrigan can use Omega Worms to lure the Purifier Beam away from an area.</li>
                            <li>Vorazun: Time Stop delays Purifier Beam timings.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_random">
                <td><img src="/images/mutators/random.png" alt="Random"></td>
                <td>Random</td>
                <td>A mutation is randomly assigned.
                    <br><br>
                    <span class="detailsButton" onclick='$("#random").toggle();'>Details</span>
                    <div id="random" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Picks a random mutator that is available on the Custom Mutator list, except for Vertigo.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_scorchedearth">
                <td><img src="/images/mutators/scorchedearth.png" alt="Scorched Earth"></td>
                <td>Scorched Earth</td>
                <td>Enemy units set the terrain on fire upon death.
                    <br><br>
                    <span class="detailsButton" onclick='$("#deathFire").toggle();'>Details</span>
                    <div id="deathFire" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Scorched Earth only deals damage to ground units. There are three sizes of scorching areas of effect. This depends on the supply cost of the unit used. This is with exception to the Xel'Naga Construct on Lock & Load, which spawns a large circle. Details of scorching areas are shown below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Supply Cost</th>
                                    <th>Scorching</th>
                                    <th>Damage</th>
                                    <th>Radius</th>
                                    <th>Time on Ground (seconds)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0-1</td>
                                    <td>Small</td>
                                    <td>7 per 0.5 seconds</td>
                                    <td>0.25</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>2-4</td>
                                    <td>Normal</td>
                                    <td>7 per 0.5 seconds</td>
                                    <td>0.5</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>4+</td>
                                    <td>Large</td>
                                    <td>7 per 0.5 seconds</td>
                                    <td>1.5</td>
                                    <td>60</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_selfdestruction">
                <td><img src="/images/mutators/selfdestruction.png" alt="Self Destruction"></td>
                <td>Self Destruction</td>
                <td>Enemy units explode and deal damage to friendly player units upon death.
                    <br><br>
                    <span class="detailsButton" onclick='$("#deathAOE").toggle();'>Details</span>
                    <div id="deathAOE" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All enemy units explode, dealing damage to player units. The explosion occurs after a 1.75 second delay and deals 20 damage in a 1.5 radius. For units with supply cost 3 or more, the explosion repeats at [supply cost + 1] times.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_sharingiscaring">
                <td><img src="/images/mutators/sharingiscaring.png" alt="Sharing is Caring"></td>
                <td>Sharing is Caring</td>
                <td>Supply is shared between you and your partner, and units from both armies contribute to your combined supply cap.
                    <br><br>
                    <span class="detailsButton" onclick='$("#sharedSupply").toggle();'>Details</span>
                    <div id="sharedSupply" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Used supply is shared between both players. However, total supply caps are still player-based. Therefore, regular commanders will still be limited by the number of Pylons/Supply Depots/Overlords that they have. Max supply commanders will still have access to their normal supply cap. However, both players' supplies will be affected when a unit is produced on either side.</p>
                        <p>Commanders with a supply cap of 100 can suffer greatly with this mutator. If they are paired up with a 200 supply cap commander who consumed over 100 supply, the 100 Supply cap commander will be unable to produce any units which cost supply until the total consumed supply falls below 100.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_shortsighted">
                <td><img src="/images/mutators/shortsighted.png" alt="Shortsighted"></td>
                <td>Shortsighted</td>
                <td>Player units and structures have reduced vision range.
                    <br><br>
                    <span class="detailsButton" onclick='$("#shortSighted").toggle();'>Details</span>
                    <div id="shortSighted" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Reduces all player units sight range by 60%, down to a minimum of 1 range. Units that have 0 range (e.g. Essence or Biomass drops) will have their range increased to 1.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Biomass drops provide vision.</li>
                            <li>Dehaka: Essence drops provide vision.</li>
                            <li>Han/Horner: Salvage drops provide vision.</li>
                            <li>Kerrigan: Assimilation Aura drops provide vision.</li>
                            <li>Raynor: Raynor's Scanner Sweep can be used to provide regular vision in the area of the Scan.</li>
                            <li>Stukov: Brood Queen's Ocular Symbiote ability increases vision for units.</li>
                            <li>Stukov: Units mind-controlled by the Aleksander retain their full vision.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_slimpickings">
                <td><img src="/images/mutators/slimpickings.png" alt="Slim Pickings"></td>
                <td>Slim Pickings</td>
                <td>Player worker units gather resources at a reduced rate, but resource pickups spawn throughout the map.
                    <br><br>
                    <span class="detailsButton" onclick='$("#minedOut").toggle();'>Details</span>
                    <div id="minedOut" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All mineral patches contain a maximum of 1500 minerals per patch. Automated refineries, assimilators, MULEs and workers will all harvest 1 resource per tick/trip.</p>
                        <p>Resource pickups spawn every 5.4 seconds before the 3-minute mark, after which they will spawn every 7 seconds. Each pickup contains either 50 minerals or 50 gas. A spawn will either contain two mineral pickups, or 1 mineral pickup and 1 gas pickup. They can only be picked up by ground units.</p>
                        <p>Every other spawn, a pickup will spawn anywhere on map, while the other will only spawn within 30 range of the starting location. This only occurs before the 3-minute mark, after which pickups will never be limited to spawning at the starting location.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_speedfreaks">
                <td><img src="/images/mutators/speedfreaks.png" alt="Speed Freaks"></td>
                <td>Speed Freaks</td>
                <td>The enemy moves faster than any unit a player has at their disposal.
                    <br><br>
                    <span class="detailsButton" onclick='$("#unitSpeed").toggle();'>Details</span>
                    <div id="unitSpeed" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All enemy units have a movement speed of 5.5.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_temporalfield">
                <td><img src="/images/mutators/temporalfield.png" alt="Temporal Field"></td>
                <td>Temporal Field</td>
                <td>Enemy Temporal Fields are periodically deployed throughout the map.
                    <br><br>
                    <span class="detailsButton" onclick='$("#temporalField").toggle();'>Details</span>
                    <div id="temporalField" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Temporal Fields scale time to 1% of the normal speed, reducing all time-based effects in their area of effect. All cloaked units are revealed. This includes cooldowns, regeneration, and attacks. Heroic units' movement speed and attack speed are slowed to 50%. They spawn every 3 seconds and there is a 1 second delay before a Temporal field becomes active. Each field lasts for 20 seconds.</p>
                        <p>Temporal Fields will always be at least 30 units away from the starting locations as well as at least 4 units away from mineral patches.</p>
                        <ul>
                            <li>Dehaka: Primal Mutalisks caught in a Temporal Field do not die as long as they have their Primal Reconstitution passive available.</li>
                            <li>Karax: Sentinels caught in a Temporal Field do not die as long as they have their Reconstruction passive available.</li>
                            <li>Kerrigan: Ultralisks caught in a Temporal Field do not die as long as they have their resurrection passive available.</li>
                            <li>Nova: Infiltration Specialist Nova will lose Super Cloak if she walks into a Temporal Field.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_timewarp">
                <td><img src="/images/mutators/timewarp.png" alt="Time Warp"></td>
                <td>Time Warp</td>
                <td>Enemy Time Warps are periodically deployed throughout the map.
                    <br><br>
                    <span class="detailsButton" onclick='$("#timeWarp").toggle();'>Details</span>
                    <div id="timeWarp" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Time Warps scale time to 33% of the normal speed, reducing all time-based effects in their area of effect. This includes cooldowns, regeneration, timed life and attacks. They spawn every 3 seconds and there is a 2.5 second delay before a Time Warp becomes active. Each field lasts for 30 seconds. Units with the Frenzied passive (such as Brutalisks, the Odin and Ultralisks) will be unaffected.</p>
                        <p>Time Warps will always be at least 25 units away from the starting locations as well as at least 4 units away from mineral patches.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_transmutation">
                <td><img src="/images/mutators/transmutation.png" alt="Transmutation"></td>
                <td>Transmutation</td>
                <td>Enemy units have a chance to transform into more powerful units whenever they deal damage.
                    <br><br>
                    <span class="detailsButton" onclick='$("#evolve").toggle();'>Details</span>
                    <div id="evolve" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Every time an enemy unit does damage to a player unit, it has a chance to change to a unit of 1 higher supply that it costs. 0 supply units are counted as 1 supply units.</p>
                        <p>Note that the change is permanent. Therefore, newly Transmutated units will drop higher amounts of Biomass, Essence, etc. than the unit they were previously. Additionally, units that would not drop Biomass (such as units from Void Rifts) will also start to drop Biomass.</p>
                        <p>The chance of Transmutation triggering is calculated as a percentage of damage dealt as Damage/2. So, if a unit does 200 damage, it has a 100% chance of triggering Transmutation. This calculation occurs after damage reduction is calculated in the form of armor/shield damage reduction and damage reduction buffs.</p>
                        <p>If an enemy unit kills a player unit, it jumps a number of tiers equal to the killed unit's supply. If that unit is a heroic, the killing unit instantly jumps to the max tier.</p>
                        <p>Transmuted units also drop Biomass, Essence and Mengsk Royal Guard experience, even if the original unit did not (e.g. from Void Rifts).</p>
                        <p>Tiers are shown below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Tier</th>
                                    <th>Units</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <ul>
                                            <li>Baneling</li>
                                            <li>Marine</li>
                                            <li>Zergling</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <ul>
                                            <li>Hellbat</li>
                                            <li>Hellion</li>
                                            <li>Reaper</li>
                                            <li>Roach</li>
                                            <li>Widow Mine</li>
                                            <li>Zealot</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <ul>
                                            <li>Adept</li>
                                            <li>Firebat</li>
                                            <li>Hydralisk</li>
                                            <li>Marauder</li>
                                            <li>Sentry</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <ul>
                                            <li>Dragoon</li>
                                            <li>Goliath</li>
                                            <li>High Templar</li>
                                            <li>Mutalisk</li>
                                            <li>Stalker</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <ul>
                                            <li>Banshee</li>
                                            <li>Infestor</li>
                                            <li>Phoenix</li>
                                            <li>Scout</li>
                                            <li>Viking</li>
                                            <li>Warhound</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        <ul>
                                            <li>Cyclone</li>
                                            <li>Ghost</li>
                                            <li>Lurker</li>
                                            <li>Oracle</li>
                                            <li>Siege Tank</li>
                                            <li>Swarm Host</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>
                                        <ul>
                                            <li>Archon</li>
                                            <li>Disruptor</li>
                                            <li>Immortal</li>
                                            <li>Liberator</li>
                                            <li>Ravager</li>
                                            <li>Void Ray</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>
                                        <ul>
                                            <li>Battlecruiser</li>
                                            <li>Brood Lord</li>
                                            <li>Carrier</li>
                                            <li>Colossus</li>
                                            <li>Reaver</li>
                                            <li>Tempest</li>
                                            <li>Thor</li>
                                            <li>Ultralisk</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>
                                        <ul>
                                            <li>Hybrid Destroyer</li>
                                            <li>Hybrid Nemesis</li>
                                            <li>Hybrid Reaver</li>
                                            <li>Loki</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>
                                        <ul>
                                            <li>Hybrid Behemoth</li>
                                            <li>Hybrid Dominator</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Alarak: Structure Overcharge prevents Transmutation from triggering on the unit.</li>
                            <li>Artanis: Shield Overcharge prevents Transmutation from triggering on the unit.</li>
                            <li>Fenix: Fenix Champions do not count as Heroic units that cause max-tier transmutation.</li>
                            <li>Nova: Defensive Drones' Defensive Matrix prevents Transmutation from triggering on the attacking unit.</li>
                            <li>Stetmann: H.U.G.S Overload prevents Transmutation from triggering on the unit.</li>
                            <li>Swann: Defensive Matrix prevents Transmutation from triggering on the attacking unit.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_trickortreat">
                <td><img src="/images/mutators/trickortreat.png" alt="Trick or Treat"></td>
                <td>Trick or Treat</td>
                <td>Civilians visit your Candy Bowl looking for treats, which are generated by spending minerals. If no treats are available, the civilians randomly transform into enemy units.
                    <br><br>
                    <span class="detailsButton" onclick='$("#trickOrTreat").toggle();'>Details</span>
                    <div id="trickOrTreat" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The Candy Bowl can store a maximum of 50 candy. You have to spend 25 minerals to add 1 candy to the bowl. The candy bowl is shown below:</p>
                        <img src="/images/mutatordata/trickortreatcandybowl.jpg" alt="Candy Bowl">
                        <p>Civilians spawn from random enemy structures. If you destroy all enemy structures on the map, they will stop spawning. These civilians will make their way towards your Candy Bowl.  Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
                        <p>Civilians spawn every 30 seconds. The number of civilians that spawn depends on the mission time. This is shown below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Civilians Spawned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-6:00</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>6:00-12:00</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>12:00-18:00</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>18:00+</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>If a Civilian walks up to the bowl which has candy, they will take 1 candy and despawn. If there is no candy in the bowl, they will transform into a unit tier as per the mission time. Tiers match that of the Transmutation mutator (see details in the Transmutation mutator details for more information). Additionally, if they cannot make their way to your bowl, they will transform after 5 minutes.</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Tier</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-2:00</td>
                                    <td>1</td>
                                </tr>
                                <tr>
                                    <td>2:00-4:00</td>
                                    <td>1-2</td>
                                </tr>
                                <tr>
                                    <td>4:00-6:00</td>
                                    <td>1-3</td>
                                </tr>
                                <tr>
                                    <td>6:00-7:00</td>
                                    <td>2-4</td>
                                </tr>
                                <tr>
                                    <td>7:00-7:30</td>
                                    <td>3-5</td>
                                </tr>
                                <tr>
                                    <td>7:30-8:00</td>
                                    <td>4-6</td>
                                </tr>
                                <tr>
                                    <td>8:00-8:30</td>
                                    <td>5-7</td>
                                </tr>
                                <tr>
                                    <td>8:30-9:00</td>
                                    <td>6-8</td>
                                </tr>
                                <tr>
                                    <td>9:00-9:30</td>
                                    <td>7-9</td>
                                </tr>
                                <tr>
                                    <td>9:30+</td>
                                    <td>8-10</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Currently, this mutator is bugged. After 10:00, the tier resets down to Tier 1.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units spawned from Trick or Treat drop Biomass.</li>
                            <li>Dehaka: Units spawned from Trick or Treat drop Essence.</li>
                            <li>Mengsk: Units spawned from Trick or Treat provide Royal Guard experience.</li>
                            <li>Vorazun: Time Stop does not affect Trick or Treat timings.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_turkeyshoot">
                <td><img src="/images/mutators/turkeyshoot.png" alt="Turkey Shoot"></td>
                <td>Turkey Shoot</td>
                <td>Supply can only be generated by killing turkeys that wander throughout the map. Doing so may anger the turkeys that remain.
                    <br><br>
                    <span class="detailsButton" onclick='$("#foodHunt").toggle();'>Details</span>
                    <div id="foodHunt" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Players start with 50 supply and will need to kill Turkeys on the map in order to raise the supply cap.</p>
                        <p>The max supply will be reduced every variable interval. The interval is based on the supply. Supply drops by 1 every 250/[Supply]. So, at 250 supply, you will lose 1 Supply/per second.</p>
                        <p>If players have more supply than they have available, their units will start taking damage after 3 seconds unless they gather more supply. The player whose units will take damage is the player who is currently using the bigger share of the supply. If they are both using the same supply, a player is randomly picked to take damage. Every second, a random unit from that player will take 20 damage. If the player stays above supply cap, the number of units that take damage is increased by 1 every 3 seconds. Combat units are first to take damage. Once all combat units are taking damage, workers will start to take damage.</p>
                        <p>Initially, 30 turkeys spawn on the map within 7 and 40 range of the player bases. Every 8 seconds, two turkeys will spawn on the map, at least 20 units away from a player's current camera location.</p>
                        <p>When a turkey is killed, any turkey within 10 range will target the player. Each turkey provides 2 supply. A turkey is shown below.</p>
                        <img src="/images/mutatordata/turkeyshootturkey.jpg" alt="Turkey">
                        <p>Turkeys deal 8 damage (16 vs. Structures) every 1.5 seconds and have 10 HP and 0 armor.</p>
                        <h2>On Oblivion Express</h2>
                        <p>This mutator occurred on a <a href="weeklymutations">weekly mutation</a> which was played on Oblivion Express called "Fowl Play". When trains are destroyed, they normally spawn 5 regular turkeys per carriage (either 7 or 13 carriages per train). However, specific train waves would spawn infested turkeys. The details are shown below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Train Wave</th>
                                    <th>Infested Turkeys Per Carriage</th>
                                    <th>Total Spawned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>39</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>4</td>
                                    <td>52</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Infested Turkeys do not generate supply when killed. An infested turkey is shown below:</p>
                        <img src="/images/mutatordata/turkeyshootinfestedturkey.jpg" alt="Infested Turkey">
                        <p>Infested Turkeys deal 0 damage (70 vs structures) every 2 seconds and have 150 HP and 1 armor.</p>
                        <p>When the 6th train wave is destroyed, the Turking will spawn. The Turking is shown below:</p>
                        <img src="/images/mutatordata/turkeyshootturking.jpg" alt="Turking">
                        <p>The Turking deal 250 damage (500 vs structures) every 2 seconds and has 6000 HP and 3 armor. It has an ability "Terrifying Gobble" with a 30-second cooldown that fear all player units within 11 range.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/no.png" alt="No"></td>
            </tr>
            <tr id="row_twister">
                <td><img src="/images/mutators/twister.png" alt="Twister"></td>
                <td>Twister</td>
                <td>Tornadoes move across the map, damaging and knocking back player units in their path.
                    <br><br>
                    <span class="detailsButton" onclick='$("#tornadoes").toggle();'>Details</span>
                    <div id="tornadoes" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The total number of Twisters on the map is based on the map size. It is the (width + height)/19. Each Twister does 25 damage and knocks all units back.</p>
                        <p>Twisters will always be at least 25 units away from the starting locations as well as at least 5 units away from mineral patches.</p>
                        <p>Twisters do not knock back any units with an "Untransportable" tag (such as the trucks on Cradle of Death). Instead, they deal their damage continuously, and can destroy the unit within seconds.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_vertigo">
                <td><img src="/images/mutators/vertigo.png" alt="Vertigo"></td>
                <td>Vertigo</td>
                <td>Your camera randomly changes positions.
                    <br><br>
                    <span class="detailsButton" onclick='$("#vertigo").toggle();'>Details</span>
                    <div id="vertigo" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Every 20 seconds, your camera will change position.</p>

                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_voidreanimators">
                <td><img src="/images/mutators/voidreanimators.png" alt="Void Reanimators"></td>
                <td>Void Reanimators</td>
                <td>Void Reanimators wander the battlefield, bringing your enemies back to life.
                    <br><br>
                    <span class="detailsButton" onclick='$("#reanimator").toggle();'>Details</span>
                    <div id="reanimator" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Void Reanimators will spawn 10 seconds after the first killed enemy unit from a random enemy building. Following Void Reanimators will spawn every 55 seconds. If you destroy all enemy buildings on the map, no Void Reanimators will spawn.  Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
                        <p>Void Reanimators have 200 HP and 200 Shields. They do not have an attack. There can only be a maximum of 4 Void Reanimators on the map. They only resurrect dead enemy units. Below is an image of a Void Reanimator:</p>
                        <img src="/images/mutatordata/voidreanimator.jpg" alt="Void Reanimator">
                        <p>Void Reanimators will try to revive the closest dead unit to them. They revive dead units at different speeds, depending on their supply cost. This is detailed below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Supply Cost</th>
                                    <th>Reanimation Time (seconds)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0-1</td>
                                    <td>1.5</td>
                                </tr>
                                <tr>
                                    <td>2-5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>6+</td>
                                    <td>8</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Only a total of 500 corpses are stored. When the list fills up, the dead unit will replace a random one on the corpse list if the dead unit has a supply cost of 2 or more.</p>
                        <p>Void Reanimators can be path-blocked, preventing them from reaching their targets for resurrection. For more information, watch this video below:</p>
                        <iframe width="475" height="268" src="https://www.youtube.com/embed/T051w67T4Dc" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        <p>On Dead of Night, Infested units that are resurrected will not die to sunlight and will have to be killed by the player.</p>
                        <p>On Miner Evacuation, Void Reanimators will not resurrect any of the Infested units.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units resurrected by Void Reanimators do not drop Biomass.</li>
                            <li>Dehaka: Units resurrected by Void Reanimators do not drop Essence.</li>
                            <li>Kerrigan: Units resurrected by Void Reanimators drop resource pickups from Assimilation Aura.</li>
                            <li>Mengsk: Units resurrected by Void Reanimators do not provide Royal Guard experience.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_voidrifts">
                <td><img src="/images/mutators/voidrifts.png" alt="Void Rifts"></td>
                <td>Void Rifts</td>
                <td>Void Rifts periodically appear in random locations and spawn enemy units until destroyed.
                    <br><br>
                    <span class="detailsButton" onclick='$("#voidRifts").toggle();'>Details</span>
                    <div id="voidRifts" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>Void Rifts have 500 HP with 1 armor. They spawn random enemy units as time progresses. An image of a Void Rift is shown below:</p>
                        <img src="/images/mutatordata/voidrift.jpg" alt="Void Rift">
                        <p>Before 8:00, the Void Rifts will only spawn between 30 and 80 range away from the players' starting location. After that, they can spawn anywhere on the map. There are also other limitations as to where they will spawn:</p>
                        <ul>
                            <li>They cannot spawn within 10 range of a resource patch.</li>
                            <li>They cannot spawn within 20 range of another Void Rift.</li>
                            <li>There can only be a maximum of 3 enemy units within 10 range of the intended Void Rift Spawn point.</li>
                        </ul>
                        <p>The Void Rift spawn timings and number of rifts are shown below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Number Spawned</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2:20</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>3:50</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>5:20</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>6:50</td>
                                    <td>2</td>
                                </tr>
                                <tr>
                                    <td>8:20</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>At this point, 4 Void Rifts will spawn every 1:30.</p>
                        <p>There are two particular timings of interest for Void Rifts:</p>
                        <ul>
                            <li><b>Trickle:</b> This is a small trickle of a fixed number of units.</li>
                            <li><b>Spawn:</b> Spawn waves occur much less frequently but slowly grow in power if the Void Rift is not destroyed.</li>
                        </ul>
                        <h3>Trickle</h3>
                        <p>Trickle occurs every 24 seconds in Custom Mutator mode and every 12 seconds in <a href="weeklymutations">Weekly Mutations</a>. The trickle is randomized every time the Void Rift wants to spawn units. It also depends on which mode is being played. This is detailed below:</p>
                        <table class="dataTable">
                            <thead>
                                <tr>
                                    <th>Variant</th>
                                    <th>Custom Mode</th>
                                    <th>Weekly Mutation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1 Roach</td>
                                    <td>2 Zerglings</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>1 Marauder</td>
                                    <td>1 Marine</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>1 Zealot</td>
                                    <td>1 Zealot*</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>*This causes the next trickle to occur after 24 seconds instead of 12 seconds.</p>
                        <h3>Spawn</h3>
                        <p>The first Spawn wave occurs 30 seconds after the Void Rift has spawned. Subsequent waves will spawn in intervals of 90 seconds each. Only certain units can be spawned from the Void Rifts. These are listed below:</p>
                        <ol>
                            <li>Zergling</li>
                            <li>Baneling</li>
                            <li>Roach</li>
                            <li>Hydralisk</li>
                            <li>Marine</li>
                            <li>Marauder</li>
                            <li>Hellion</li>
                            <li>Adept</li>
                            <li>Zealot</li>
                            <li>Stalker</li>
                            <li>Siege Tank</li>
                            <li>Immortal</li>
                            <li>Ravager</li>
                            <li>Mutalisk</li>
                            <li>Void Ray</li>
                            <li>Banshee</li>
                            <li>High Templar</li>
                            <li>Raven</li>
                            <li>Infestor</li>
                            <li>Hybrid Destroyer</li>
                        </ol>
                        <p>The mission time has a big effect on what can spawn from the Void Rifts. Void Rift spawns are limited by a resource cost. Each spawn will only have a maximum Mineral + Vespene cost, as detailed below:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Resource Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-8:20</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <td>8:20-20:00</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td>20:00+</td>
                                    <td>1050</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>The mission time also determines what units can spawn. Notice how the list provided earlier is numbered. Void Rifts can only spawn the following units (based on their index) depending on the mission time:</p>
                        <table class="dataTable centered">
                            <thead>
                                <tr>
                                    <th>Mission Time</th>
                                    <th>Possible Spawns</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>0:00-10:00</td>
                                    <td>1-10</td>
                                </tr>
                                <tr>
                                    <td>10:00-16:40</td>
                                    <td>1-16</td>
                                </tr>
                                <tr>
                                    <td>16:40+</td>
                                    <td>1-20</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Units spawned from the Void Rifts do not drop Biomass.</li>
                            <li>Abathur: Use Brutalisks' Deep Tunnel ability to snipe Void Rifts as it does not require vision.</li>
                            <li>Artanis: Spread Observers around the map and use five Orbital Strikes to clear out a single Void Rift.</li>
                            <li>Dehaka: Units spawned from the Void Rifts do not drop Essence.</li>
                            <li>Dehaka: Try to explore the entire map, which will allow you to drop Greater Primal Wurms to handle Void Rifts.</li>
                            <li>Han/Horner: Three Precision Strikes can kill a Void Rift. With the Napalm upgrade, two can clear a Void Rift, given enough time.</li>
                            <li>Karax: Level 2 Solar Efficiency + max'ed Chrono Wave Energy Regeneration mastery will allow Karax to have enough energy to snipe all Void Rifts as they spawn.</li>
                            <li>Karax: Spread Observers around the map and use five Orbital Strikes to clear out each Void Rift.</li>
                            <li>Kerrigan: Units spawned from the Void Rifts drop resource pickups from Assimilation Aura.</li>
                            <li>Kerrigan: Use Kerrigan's Leap ability to get past enemy bases so you can snipe Void Rifts as they spawn.</li>
                            <li>Mengsk: Units spawned from the Void Rifts do not provide Royal Guard experience.</li>
                            <li>Nova: One Sabotage Drone can 1-shot a Void Rift with 15 points in the Primary Ability Improvement Mastery.</li>
                            <li>Raynor: Build extra Orbital Command Centers to allow you to scan on Void Rifts when they spawn to provide vision for you and your ally to clear them.</li>
                            <li>Swann: Use a Tactical Jump from a Hercules to gain vision of a Void Rift. Set it on "Hold Position", then manually target the Void Rift with the Drill to clear it.</li>
                            <li>Vorazun: Time Stop delays Void Rifts timings.</li>
                            <li>Zagara: Roach Drops do not require vision and can be used to snipe inaccessible Void Rifts.</li>
                            <li>Zagara: Use Apex Predator's Zagara's Deep Tunnel ability to get quickly get to Void Rifts.</li>
                            <li>Zeratul: Spread Observers around the map and use Projections to kill Void Rifts. Three projections can kill a Void Rift as soon as it spawns.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_walkinginfested">
                <td><img src="/images/mutators/walkinginfested.png" alt="Walking Infested"></td>
                <td>Walking Infested</td>
                <td>Every enemy unit that commanders destroy will spawn infested terrans. The more life a unit has, the more infested will rise from it's corpse.
                    <br><br>
                    <span class="detailsButton" onclick='$("#spawnInfested").toggle();'>Details</span>
                    <div id="spawnInfested" class="details">
                        <p>On Miner Evacuation, all infested from Walking Infested will have double HP.</p>
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>The number of Infested Terrans that spawn is equal to the unit's supply cost. If the unit costs no supply, 1 Infested Terran is spawned. Note that Hybrids take up 8 supply.</p>
                        <p class="subheading">Commander-specific Tips</p>
                        <ul>
                            <li>Abathur: Infested Terrans do not drop Biomass.</li>
                            <li>Dehaka: Infested Terrans do not drop Essence.</li>
                            <li>Mengsk: Infested Terrans do not provide Royal Guard experience.</li>
                        </ul>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
            <tr id="row_wemoveunseen">
                <td><img src="/images/mutators/wemoveunseen.png" alt="We Move Unseen"></td>
                <td>We Move Unseen</td>
                <td>All enemy units are permanently cloaked.
                    <br><br>
                    <span class="detailsButton" onclick='$("#permaCloak").toggle();'>Details</span>
                    <div id="permaCloak" class="details">
                        <p class="subheading">Detailed Mutator Information</p>
                        <p>All non-structure units are cloaked, including map objectives.</p>
                    </div>
                </td>
                <td><img src="/images/mutators/yes.png" alt="Yes"></td>
            </tr>
        </tbody>
    </table>
    <script>
        $(".detailsButton").on("click", function(){
            $('.toggled:visible').addClass("adsbygoogle");
            $('.toggled:visible').removeClass("toggled");
            $('.adsbygoogle:hidden').addClass("toggled");
            $('.adsbygoogle:hidden').removeClass("adsbygoogle");
            (adsbygoogle = window.adsbygoogle || []).push({});
        })
    </script>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
