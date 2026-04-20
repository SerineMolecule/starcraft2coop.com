<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
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
        border: 1px solid #888;
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
  <?= startContent() ?>
    <h1>Co-op Mutators List: Names, Icons, Descriptions and Mechanics</h1>
    <?php include("../scripts/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#safetyZones">Safety Zone</a></p>
        <p><a href="#mutatorInteractions">Mutator Interactions</a></p>
        <p><a href="#mutatorList">Mutator List</a></p>
    </div>
    <h2 id="safetyZones">Safety Zones</h2>
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
    <h2 id="mutatorInteractions">Mutator Interactions</h2>
    <?php
    require_once '../data/queries.php';
    $mutatorInfo = get_mutators();
    usort($mutatorInfo, fn($a, $b) => $a['mutatorname'] <=> $b['mutatorname']);
    $mutators = [];
    foreach ($mutatorInfo as $mutator) {
        $mutators[] = [$mutator['mutatorid'],$mutator['mutatorname']];
    }
    ?>
    <form action="mutators.php" method="post">
        <p class="centerAlign">Mutator 1:</p>
        <select name="mut1" id="mut1">
            <?php
            echo "<option value='0'>-</option>";
            foreach ($mutators as [$id, $name]) {
                echo "<option value='$id'>$name</option>\n";
            }
            ?>
        </select>
        <img class="centerAlign" id="mut1img" src="/images/mutators/random.png" height="50" width="50" alt="Mutator 1">
        <p></p>
        <p class="centerAlign" >Mutator 2:</p>
        <select name="mut2" id="mut2">
            <?php
            echo "<option value='0'>-</option>";
            echo "<option value='-1'>(show all interactions)</option>";
            foreach ($mutators as [$id, $name]) {
                echo "<option value='$id'>$name</option>\n";
            }
            ?>
        </select>
        <img class="centerAlign"  id="mut2img" src="/images/mutators/random.png" height="50" width="50" alt="Mutator 2">
        <p></p>
        <button id="reset" type="button">Reset</button>
    </form>
    <p>Interactions:</p>
    <p id="interactions"></p>
    <script>
        var interactionsPairs = {};
        var mutators = {};
        var interactionsLoaded = false;
        function getInteractions() {
            if (interactionsLoaded !== false) {
                return !!interactionsLoaded;
            }
            interactionsLoaded = undefined;
            $.ajax({
                type: 'GET',
                url: '/data/mutatorinteractions.json',
                success: function(interactions) {
                    for (var i = 0; i < interactions.length; i++){
                        var key = '' + interactions[i].id1 + '-' + interactions[i].id2;
                        interactionsPairs[key] = interactions[i].interaction;
                    }
                    interactionsLoaded = true;
                    updateInteractions();
                }
            });
            $("#mut1 option").each(function () {
                var val = parseInt(this.value);
                var text = $(this).text();
                mutators[val] = text;
            });
            return false;
        }
        function getInteraction(mut1, mut2) {
            if (mut1 > mut2) {
                var temp = mut1;
                mut1 = mut2;
                mut2 = temp;
            }
            var key = '' + mut1 + '-' + mut2;
            return interactionsPairs[key];
        }
        function getAllInteractions(mut) {
            var interactions = {};
            for (var key in mutators) {
                var interaction = getInteraction(mut, parseInt(key));
                if (interaction) {
                    interactions[key] = interaction;
                }
            }
            return interactions;
        }
        function updateInteractions() {
            if (!getInteractions()) return;
            var $mut1 = $("#mut1 option:selected");
            var mut1 = parseInt($mut1.val());
            var filename1 = $mut1.text().replace(/ /g,'').toLowerCase();
            if (mut1 <= 0) filename1 = 'random';
            var $mut2 = $("#mut2 option:selected");
            var mut2 = parseInt($mut2.val());
            var filename2 = $mut2.text().replace(/ /g,'').toLowerCase();
            if (mut2 <= 0) filename2 = 'random';
            $("#mut2 option").each(function () {
                var val = parseInt(this.value);
                if (!val || !mut1 || val === -1 || getInteraction(mut1, val)) {
                    this.disabled = false;
                } else {
                    this.disabled = true;
                }
            });
            $("#mut1img").attr("src", "/images/mutators/" + filename1 + ".png");
            $("#mut2img").attr("src", "/images/mutators/" + filename2 + ".png");
            if (mut1 && mut2 === -1) {
                var html = "";
                var interactions = getAllInteractions(mut1);
                for (var key in interactions) {
                    var filename = mutators[key].replace(/ /g,'').toLowerCase();
                    html += "<p><img src=\"/images/mutators/" + filename + ".png\" height=\"25\" width=\"25\" style=\"vertical-align:middle\"> " + mutators[key] + ": " + interactions[key] + "</p>";
                }
                $("#interactions").html(html || "No interaction found.");
            } else if (mut1 && mut2) {
                $("#interactions").text(getInteraction(mut1, mut2) || "No interaction found.");
            } else if (mut1 && !$mut2.length) {
                // mut2 has a disabled option selected, which means there's no interaction
                $("#interactions").text("No interaction found.");
            } else {
                $("#interactions").text(mut1 || mut2 ? "(Select both mutators)" : "");
            }
        }
        $("#mut1").change(function(){
            updateInteractions();
        })
        $("#mut2").change(function(){
            updateInteractions();
        })
        $("#reset").on("click", function(){
            $("#mut1").val(0);
            $("#mut2").val(0);
            $("#mut1 option").removeAttr("disabled");
            $("#mut2 option").removeAttr("disabled");
            $("#mut1img").attr("src", "/images/mutators/random.png");
            $("#mut2img").attr("src", "/images/mutators/random.png");
            $("#interactions").text("");
        })
    </script>
    <h2 id="mutatorList">Mutator List</h2>
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
<?php
require_once __DIR__ . '/../data/queries.php';
$mutatorInfo = get_mutators();
usort($mutatorInfo, fn($a, $b) => $a['mutatorname'] <=> $b['mutatorname']);
function token($name)
{
    return strtolower(str_replace(' ', '', str_replace('-', '', $name)));
}
?>
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
<?php foreach ($mutatorInfo as $mutator) { ?>
            <tr id="row_<?= token($mutator['mutatorname']) ?>">
                <td><img src="/images/mutators/<?= token($mutator['mutatorname']) ?>.png" alt=""></td>
                <td><?= $mutator['mutatorname'] ?></td>
                <td><?= $mutator['mutatordescription'] ?>
                    <br /><br />
                    <details><summary>Details</summary><?= file_get_contents(__DIR__ . '/../../source-data/mutator-details/' . $mutator['mutatorname'] . '.html') ?></details>
                </td>
                <td><img src="/images/mutators/<?= $mutator['customusable'] ? 'yes' : 'no' ?>.png" alt="<?= $mutator['customusable'] ? 'Yes' : 'No' ?>"></td>
            </tr>
<?php } ?>
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
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
