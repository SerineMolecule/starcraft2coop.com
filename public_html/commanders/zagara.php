<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Commander Guide - Zagara</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Zagara">
  <meta name="keywords" content="Starcraft co-op guides zagara commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.1">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/zagara">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/zagara.png);
            background-repeat: no-repeat;
        }
        #tooltip{
            position:absolute;
            background-color:khaki;
            color:black;
            font-size:0.8em;
            display:none;
            z-index:1;
            padding:5px;
            border-radius:5px;
        }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <div id="tooltip">tooltip</div>
    <h1>Co-op Commander Guide: Zagara</h1>
    <p id="commanderMotto">Swarm Broodmother</p>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#comSum">Commander Summary</a></p>
        <p><a href="#levelUnlocks">Level Unlocks</a></p>
        <p><a href="#achievements">Achievements</a></p>
        <p><a href="#leveling">Sub-Ascension Leveling</a></p>
        <p><a href="#masteries">Masteries</a></p>
        <p><a href="#prestiges">Prestiges</a></p>
        <p><a href="#hero">Hero Unit</a></p>
        <p><a href="#army">Recommended Army Composition</a></p>
        <p><a href="#units">Combat Units</a></p>
        <p><a href="#buildOrder">Build Order</a></p>
        <p><a href="#guide">Gameplay Guide</a></p>
    </div>
    <a id="comSum"></a><h2>Commander Summary</h2>
    <p>Zagara overwhelms her enemies with cheap and swarmy units that she throws relentlessly at them.</p>
    <a id="levelUnlocks"></a><h2>Level Unlocks</h2>
    <table class="progressionTable">
        <thead>
            <tr>
                <th>Level/Icon</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_01.png" alt = "Relentless Swarmer"></td>
                <td>Relentless Swarmer</td>
                <td>
                    Zagara has a 100 supply maximum, but her combat units cost less and morph faster. Drones morph in pairs. Queens cost 1 supply. Larvae spawn at an increased rate.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_02.png" alt = "Infested Drop"></td>
                <td>Infested Drop</td>
                <td>
                    Zagara can call down Roaches with timed life to any location on the map. Drop-pods deal damage on impact.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_03.png" alt = "Inject Larvae"></td>
                <td>Inject Larvae</td>
                <td>
                   Increases the number of Larvae produced by the Queen’s Spawn Larvae ability from 4 to 8.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zagara/zagara_04.png" alt = "Scourge Upgrade Cache"></td>
                <td>Scourge Upgrade Cache</td>
                <td>
                    New research available on the Scourge Nest:
                    <ul>
                        <li>Scourge deal 50% of their attack damage in a small area on death.</li>
                        <li>Reduces the amount of vespene gas required to morph Scourge by 50.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_05.png" alt = "New Unit: Bile Launcher"></td>
                <td>New Unit: Bile Launcher</td>
                <td>
                    Unlocks the ability to morph drones into Bile Launchers, defensive structures that deal area damage to ground and air targets.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_06.png" alt = "Zergling Upgrade Cache"></td>
                <td>Zergling Upgrade Cache</td>
                <td>
                    New research available on the Spawning Pool:
                    <ul>
                        <li>Zerglings gain +10 maximum life.</li>
                        <li>Zergling attacks reduce their target's armor to 0 for 10 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zagara/zagara_07.png" alt = "Baneling Nest: Birthing Chamber"></td>
                <td>Baneling Nest: Birthing Chamber</td>
                <td>
                    The Baneling Nest will periodically spawn free Banelings.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_08.png" alt = "Incubate Banelings and Scourge"></td>
                <td>Incubate Banelings and Scourge</td>
                <td>
                    Aberrations spawn 2 Banelings from their corpses when killed. Corruptors spawn 2 Scourge when killed.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_09.png" alt = "Evolution Chamber Upgrade Cache"></td>
                <td>Evolution Chamber Upgrade Cache</td>
                <td>
                    New research available on the Evolution Chamber:
                    <ul>
                        <li>Zagara's attacks deal area damage, splashing to enemy units near her primary target.</li>
                        <li>Aberrations grant 50% damage reduction to units positioned beneath them.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_10.png" alt = "Darken the Skies"></td>
                <td>Darken the Skies</td>
                <td>
                    Increases the number of Roaches spawned by Zagara's Infested Drop ability from 10 to 20.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zagara/zagara_11.png" alt = "Baneling Nest Upgrade Cache"></td>
                <td>Baneling Nest Upgrade Cache</td>
                <td>
                    New research available on the Baneling Nest:
                    <ul>
                        <li>Increases the Baneling's base attack damage against the primary target by 100%. Splash damage remains the same.</li>
                        <li>Baneling blast radius increased by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zagara/zagara_12.png" alt = "Zergling Evolution: Swarmling"></td>
                <td>Zergling Evolution: Swarmling</td>
                <td>
                    Upgrades Zerglings into the Swarmling strain.<br><br>Fast melee unit. Spawns in groups of three. Morphs almost instantly. Can morph into a Baneling.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zagara/zagara_13.png" alt = "Bile Launcher Upgrade Cache"></td>
                <td>Bile Launcher Upgrade Cache</td>
                <td>
                    New research available on the Spawning Pool:
                    <ul>
                        <li>Increases the range of the Bile Launcher's Bombardment.</li>
                        <li>Reduces the cooldown of the Bile Launcher's Bombardment.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zagara/zagara_14.png" alt = "Baneling Evolution: Splitter"></td>
                <td>Baneling Evolution: Splitter</td>
                <td>
                    Evolves Zagara's Banelings into the Splitter strain.<br><br>Suicide unit. Deals damage over a small area upon death. Splits into smaller units as it dies.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zagara/zagara_15.png" alt = "Broodmother"></td>
                <td>Broodmother</td>
                <td>
                    Reduces the energy cost of Zagara's Baneling Barrage and Spawn Hunter-Killers abilities by 50%.<br><br>Increases the number of units spawned by Baneling Barrage and Spawn Hunter-Killers by 50%.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <a id="achievements"></a><h2>Achievements</h2>
    <p>The commander-specific achievements for Zagara are:</p>
    <table>
        <thead>
            <tr>
                <th>Achievement</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/achievements/zagara/bigbangs.jpg" alt="Big Bangs"></td>
                <td>Big Bangs</td>
                <td>Destroy 5,000 enemy units with Zagara's Banelings in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/zagara/massfrenzy.jpg" alt="Mass Frenzy"></td>
                <td>Mass Frenzy</td>
                <td>Your ally deals 10,000 damage while Zagara's Mass Frenzy is activated in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/zagara/queenofdestruction.jpg" alt="Queen of Destruction"></td>
                <td>Queen of Destruction</td>
                <td>Kill 500 enemy units in a single mission when playing as Zagara on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/zagara/roachrampage.jpg" alt="Roach Rampage"></td>
                <td>Roach Rampage</td>
                <td>Kill 100 enemy units using Zagara's Infested Drop in a single mission on Hard difficulty.</td>
            </tr>
        </tbody>
    </table>
    <a id="leveling"></a><h2>Sub-Ascension Leveling</h2>
    <p>Difficulty: Very Hard</p>
    <p>Due the the lack of free Banelings and Swarmlings, Zagara is one of the most difficult commanders to level at lower levels. Take the game extremely slowly to prevent unit loses, morphing Banelings whenever you have resources to spare. Add some Aberrations to your army to provide you with sustained damage.</p>
    <a id="masteries"></a><h2>Masteries</h2>
    <p>Below are the three Power Sets for Zagara with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
    <p>Power Set 1:</p>
    <table class="masteryTable">
        <thead>
            <tr>
                <th>Power</th>
                <th>Value</th>
                <th>Recommended Points to Add</th>
                <th>Further Considerations</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Zagara and Queen Regen</td>
                <td>1% per point<br>30% maximum</td>
                <td>30</td>
                <td rowspan="2">Players that actively micro Zagara may be able to trim some points off the Life and Energy mastery to put into Zagara's attack damage to increase her damage output. However, this makes her more fragile, and may prevent her from spamming abilities as often as she can.</td>
            </tr>
            <tr>
                <td>Zagara Attack Damage</td>
                <td>1 per point<br>30 maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Zagara has a very low attack speed and low HP to start, making her extremely vulnerable. By putting all the points into Zagara's Life and Energy Regeneration, you can not only increase her survivability but also allow her to spam her abilities, which are the main source of her damage output.</p>
    <p>Power Set 2:</p>
    <table class="masteryTable">
        <thead>
            <tr>
                <th>Power</th>
                <th>Value</th>
                <th>Recommended Points to Add</th>
                <th>Further Considerations</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Intensified Frenzy</td>
                <td>1.5% per point<br>45% maximum</td>
                <td>30</td>
                <td rowspan="2">Intensified Frenzy is an extremely powerful buff and generally, it is not viable to pick the other mastery. Players that prefer to use Zerglings instead of Banelings can use the Zergling Evasion can significantly increase the effectiveness of their zerglings.</td>
            </tr>
            <tr>
                <td>Zergling Evasion</td>
                <td>1.5% per point<br>45% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Intensified Frenzy is an extremely powerful ability that affects all friendly units, including your ally's. Improving it will improve both you and your ally's effectiveness in the game. Evasion only allows Zerglings to prevent damage, without helping your army kill enemy units.</p>
    <p>Power Set 3:</p>
    <table class="masteryTable">
        <thead>
            <tr>
                <th>Power</th>
                <th>Value</th>
                <th>Recommended Points to Add</th>
                <th>Further Considerations</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Roach Damage and Life</td>
                <td>2% per point<br>60% maximum</td>
                <td>0</td>
                <td rowspan="2">Zagara's Baneling Barrage is affected by the Baneling damage mastery, which is generally recommended. However, if players find that they are dependent on the Roach Drops to effectively push, they may add a few points in to that mastery to help them.</td>
            </tr>
            <tr>
                <td>Baneling Attack Damage</td>
                <td>1 per point<br>30 maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Baneling Attack Damage is the better option here, especially if you use Banelings combined with Frenzy to push into enemy bases.</p>
    <a id="prestiges"></a><h2>Prestiges</h2>
    <p>Below are the prestiges for Zagara. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <thead>
            <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Description</th>
                <th>Effective Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Scourge Queen</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Max supply increased by 50.</li>
                                <li>Zerglings and Scourge spawn one extra unit per egg.</li>
                                <li>Baneling Nests will spawn an additional 4 free Banelings and Scourge Nests will spawn 4 free Scourge.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Zagara is unavailable.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>7</td>
                <td><ul>
                        <li>Zerglings will spawn in 3's from level 1 to level 11</li>
                        <li>Zerglings will spawn in 4's once Swarmling strain unlocks at level 12</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige sacrifices the hero unit for a higher supply cap as well as the ability to spawn large numbers of units. The loss of Frenzy, which is often used to help her units contact enemy forces through spells does negatively impact this prestige. However, this prestige is able to overcome that by overwhelming enemy forces with units. The costs of this are mitigated by the large number of free units that are spawned throughout the course of the game. If using this Prestige, make sure to adjust your Mastery selections so they are not invested in Zagara or her abilities.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <thead>
            <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Description</th>
                <th>Effective Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>Mother of Constructs</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Aberrations and Corruptors cost 25% less, gain 50% increased health, and possess greatly increased health regeneration.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>No free Banelings.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>
                    <ul>
                        <li>Regeneration rate increased by 3</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige is a solid prestige that is particularly useful during sub-mastery leveling, as it partially solves the lack of resilience of Zagara's army. The lack of free Banelings means the player will have to think a bit more carefully about how they take engagements and how to most efficiently utilize their Banelings to achieve maximum damage. Note that this does <i>not</i> mean that you should not be investing in some of the smaller units or their upgrades. Banelings, Zerglings and Scourge should be made in tiny quantities, and their important upgrades (e.g. Corrosive Acid, Virulent Spores) should still be obtained, as Aberrations and Corruptors spawn Banelings and Scourge respectively when they die. Remember to adapt your build order such that you're not building a Baneling Nest too early.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <thead>
            <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Description</th>
                <th>Effective Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3</td>
                <td>Apex Predator</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Zagara gains reduced ability cooldowns (33% reduction), increased health and energy regeneration, and access to the Deep Tunnel ability.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Mass Frenzy only affects Zagara and her summoned units.</li>
                                <li>Combat units cost 25% more.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>
                    <ul>
                        <li>Deep Tunnel does not require vision or explored terrain.</li>
                        <li>Deep Tunnel has a cooldown of 20 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige vastly improves the hero unit's power level such that she can solo some enemy bases without the help of her army. The Deep Tunnel ability provides Zagara with extreme mobility that is particular useful when trying to deal with <a href="/resources/mutators">mutators</a> such as Void Rifts. However, the downside is fairly impactful. Players that take a lot of inefficient trades may find themselves starved of resources. As such, they'll need to be more careful with how they choose to engage attack waves and push into enemy bases. Avoid using this prestige on sub-mastery Zagara, as the increase in the Energy Regeneration is still not enough to allow Zagara to remain in sustained combat.</td>
            </tr>
        </tbody>
    </table>
    <p>While leveling Zagara sub-mastery, the Mother of Constructs prestige should be used, due to the weakness of the hero unit because of the lack of the level 15 Level Unlock. For players that prefer the F2 a-move style of play, playing without a Prestige Talent selected will provide them with all the tools they need to be able to handle any scenario thrown at them. However, players that are a little more proactive and aggressive with their hero units will probably be able to get a lot of value from the Apex Predator prestige.</p>
    <a id="hero"></a><h2>Hero Unit</h2>
    <img id="heroPic" src="/images/commanderdata/hero/zagara/zagara.jpg" alt="Zagara">
    <p>Spawn time: 4:00</p>
    <p>Respawn time: 1:00 </p>
    <p>The abilities for Zagara are:</p>
    <table class="abilityTable">
        <thead>
            <tr>
                <th>Ability</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
                <th>Energy Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/hero/zagara/banelingbarrage.png" alt = "Baneling Barrage"></td>
                <td>Baneling Barrage</td>
                <td>Launches 6 Banelings towards the target point. Each Baneling explodes for 40 damage (80 vs structures).</td>
                <td>10 seconds</td>
                <td>25</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zagara/spawnhunterkillers.png" alt = "Spawn Hunter Killers"></td>
                <td>Spawn Hunter Killers</td>
                <td>Spawns 6 Hunter Killers at the target point that last 20 seconds.</td>
                <td>30 seconds</td>
                <td>30</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zagara/massfrenzy.png" alt = "Mass Frenzy"></td>
                <td>Mass Frenzy</td>
                <td>Grants all friendly units on the map 25% attack speed and 25% movement speed for 15 seconds.</td>
                <td>90 seconds</td>
                <td>25</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zagara/infesteddrop.png" alt = "Infested Drop"></td>
                <td>Infested Drop</td>
                <td>Calls down 10 drop-pods onto the target area, dealing 50 damage with each drop-pod and spawning a total of 20 Roaches that last 30 seconds.</td>
                <td>Coolup: 600 seconds<br>Cooldown: 180 seconds</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p>The upgrades for Zagara are:</p>
    <table class="heroUpgrades">
        <thead>
            <tr>
                <th>Upgrade</th>
                <th>Name</th>
                <th>Effect</th>
                <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                <th>Research Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/hero/zagara/heroicfortitude.png" alt="Heroic Fortitude"></td>
                <td>Heroic Fortitude</td>
                <td>Zagara gains +200 maximum life.<br>Life-regeneration rate increased by 100%.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zagara/medusablades.png" alt="Medusa Blades"></td>
                <td>Medusa Blades</td>
                <td>Zagara's attacks deal area damage, splashing to enemy units near her primary target.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
        </tbody>
    </table>
    <a id="army"></a><h2>Recommended Army Composition</h2>
    <p>The recommended army composition for Zagara is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/zagara/zergling.jpg" alt="Zergling"><img class="army" src="/images/commanderdata/units/zagara/baneling.jpg" alt="Baneling"><img class="army" src="/images/commanderdata/units/zagara/scourge.jpg" alt="Scourge">
    <p>Zagara should be relying on her cheapest units to push into enemy bases and killing off attack waves. Attack Waves and base pushes should always be done while under the Frenzy from Zagara to prevent excessive losses.</p>
    <script>
        $(".army").on('mouseover',function(e){
            var unit = $(this).attr("alt").split(":");
            $("#tooltip").html("<b>" + unit[0] + "</b>");
            $("#tooltip").show();
        });
        $(".army").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".army").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
        $(".techAdd").on('mouseover',function(e){
            var unit = $(this).siblings(".army").attr("alt").split(":");
            $("#tooltip").html("<b>" + unit[0] + "</b>");
            $("#tooltip").show();
        });
        $(".techAdd").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".techAdd").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
    </script>
    <a id="units"></a><h2>Combat Units</h2>
    <p>For more information on Zagara's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Zagara's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zagara/queen.jpg" alt="Queen">
            <p>Queen</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Can be used to spread creep and inject larva.</li>
                <li>Not worth making for larva injects, due to it taking up supply.</li>
            </ul>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cooldown</th>
                        <th>Energy Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/zagara/spawncreeptumor.png" alt="Spawn Creep Tumor"></td>
                        <td>Spawn Creep Tumor</td>
                        <td>A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.<br><br>Bonus: Zerg move faster on creep.</td>
                        <td>15 seconds</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/zagara/spawnlarva.png" alt="Spawn Larva"></td>
                        <td>Spawn Larva</td>
                        <td>Target Hatchery, Lair, or Hive spawns 8 Larvae in 40 seconds.</td>
                        <td>25 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/zagara/transfusion.png" alt="Transfusion"></td>
                        <td>Transfusion</td>
                        <td>Instantly restores 125 life to target biological unit or structure.</td>
                        <td>0 seconds</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zagara/zergling.jpg" alt="Zergling">
            <p>Zergling</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should be the core unit of Zagara's army.</li>
                <li>Fragile, but expendable.</li>
                <li>Very susceptible to splash damage.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/metabolicboost.png" alt="Metabolic Boost"></td>
                        <td>Metabolic Boost</td>
                        <td>Increases the movement speed of Zerglings by 60%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/hardenedcarapace.png" alt="Hardened Carapace"></td>
                        <td>Hardened Carapace</td>
                        <td>Zerglings gain +10 maximum life.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/adrenaloverload.png" alt="Adrenal Overload"></td>
                        <td>Adrenal Overload</td>
                        <td>Increases the attack speed of Zerglings by 40%.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/shreddingclaws.png" alt="Shredding Claws"></td>
                        <td>Shredding Claws</td>
                        <td>Zergling attacks reduce their target's armor to 0 for 10 seconds.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zagara/baneling.jpg" alt="Baneling">
            <p>Baneling</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should have sufficient numbers in your army.</li>
                <li>Does great amounts of splash damage.</li>
                <li>Very susceptible to splash damage.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/centrifugalhooks.png" alt="Centrifugal Hooks"></td>
                        <td>Centrifugal Hooks</td>
                        <td>Increases the movement speed of Banelings by 15%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/corrosiveacid.png" alt="Corrosive Acid"></td>
                        <td>Corrosive Acid</td>
                        <td>Increases the Baneling's base attack damage against primary target by 100%. Splash damage remains the same.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/rupture.png" alt="Rupture"></td>
                        <td>Rupture</td>
                        <td>Baneling blast radius increased by 50%.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zagara/aberration.jpg" alt="Aberration">
            <p>Aberration</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful for lengthy combat situations, like on <a href="/missions/minerevacuation">Miner Evacuation</a>.</li>
                <li>Given adequate micro "Protective Cover" Upgrade can be used to increase survivability of Zerglings.</li>
                <li>Spawns Banelings upon death.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/protectivecover.png" alt="Protective Cover"></td>
                        <td>Protective Cover</td>
                        <td>Aberrations grant 50% damage reduction to units positioned beneath them.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zagara/scourge.jpg" alt="Scourge">
            <p>Scourge</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful anti-air unit.</li>
                <li>"Simplified Genome" upgrade is a must-get.</li>
                <li>Very susceptible to splash damage.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/virulentspores.png" alt="Virulent Spores"></td>
                        <td>Virulent Spores</td>
                        <td>Scourge deal 50% of their attack damage in a small area upon death.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zagara/simplifiedgenome.png" alt="Simplified Genome"></td>
                        <td>Simplified Genome</td>
                        <td>Reduces the amount of vespene gas required to morph Scourge by 50.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zagara/corruptor.jpg" alt="Corruptor">
            <p>Corruptor</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful for its "Corruption" ability which can increase damage taken by enemies by 35%.</li>
                <li>Spawns Scourge upon death.</li>
            </ul>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cooldown</th>
                        <th>Energy Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/zagara/corruption.png" alt="Corruption"></td>
                        <td>Corruption</td>
                        <td>Covers the target enemy unit in Zerg slime, increasing the damage taken by 35% for 30 seconds.</td>
                        <td>15 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <p>Upgrades: None</p>
        </div>
    </div>
    <a id="buildOrder"></a><h2>Build Order</h2>
    <p>Below is the standard economic build order for Zagara. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        9 Extractor<br>
        11 Spawning Pool<br>
        11 Extractor<br>
        11 Overlord<br>
        11 Baneling Nest<br>
        10 Zergling -> Rocks<br>
        12 Zergling -> Rocks<br>
        19 Hatchery
    </p>
    <p>Note: Zagara's drones cost 0.5 supply, but to prevent confusion, supplies in the build order above are shown as the supply you will see in-game.</p>
    <a id="guide"></a><h2>Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>None</p>
    <h3>Bile Launchers</h3>
    <p>Zagara's Bile Launchers are decent static defenses when playing on <a href="/missions/deadofnight">Dead of Night</a>, due to their splash damage. These Bile Launchers have stats and upgrades, shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Building</th>
                <th>Name</th>
                <th>Stats</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/guides/zagara/bilelauncher.jpg" alt="Bile Launcher"></td>
                <td>Bile Launcher</td>
                <td>HP: 400<br>Damage: 75<br>Range: 15<br>Speed: 7<br>Targets: Air and Ground</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="unitSkills">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
                <th>Energy Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr class="autocast">
                <td><img src="/images/commanderdata/unitskills/zagara/bombardment.png" alt="Bombardment"></td>
                <td>Bombardment</td>
                <td>Constantly blasts a target area, repeatedly dealing 75 damage to enemy ground and air units.</td>
                <td>0 seconds</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="unitUpgrades">
        <thead>
            <tr>
                <th>Upgrade</th>
                <th>Name</th>
                <th>Effect</th>
                <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                <th>Research Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/zagara/artilleryducts.png" alt="Artillery Ducts"></td>
                <td>Artillery Ducts</td>
                <td>Increases the range of the Bile Launcher's Bombardment by 10.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/zagara/rapidbombardment.png" alt="Rapid Bombardment"></td>
                <td>Rapid Bombardment</td>
                <td>Reduces the cooldown of the Bile Launcher's Bombardment.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
        </tbody>
    </table>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Build at least 4 Hatcheries to provide you with the larva you need to keep you supply-capped. If you find you're floating minerals, build up to two more to allow you to quickly refill your army.</li>
        <li>Build a single Corruptor and cast Corruption on bonus objective units before running your banelings/scourge into them to maximize damage efficiency.</li>
        <li>Use Mass Frenzy as much as possible. With a 90 second cooldown, it can be used in most engagements and increase the effectiveness of your army.</li>
        <li>Cast Infested Drop and Spawn Hunter Killers before you cast Mass Frenzy so the newly-spawned units also get the buff.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
