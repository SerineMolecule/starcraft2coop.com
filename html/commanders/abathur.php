<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Abathur</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Abathur">
  <meta name="keywords" content="Starcraft co-op guides abathur commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.2">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/abathur">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/abathur.png);
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
  <?= startContent() ?>
    <div id="tooltip">tooltip</div>
    <h1>Co-op Commander Guide: Abathur</h1>
    <p id="commanderMotto">Evolution Master</p>
    <?php include("../scripts/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#comSum">Commander Summary</a></p>
        <p><a href="#levelUnlocks">Level Unlocks</a></p>
        <p><a href="#achievements">Achievements</a></p>
        <p><a href="#calldowns">Calldowns</a></p>
        <p><a href="#leveling">Sub-Ascension Leveling</a></p>
        <p><a href="#masteries">Masteries</a></p>
        <p><a href="#prestiges">Prestiges</a></p>
        <p><a href="#army">Recommended Army Composition</a></p>
        <p><a href="#units">Combat Units</a></p>
        <p><a href="#buildOrder">Build Order</a></p>
        <p><a href="#guide">Gameplay Guide</a></p>
        <p><a href="#biomass">Biomass Farming</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Abathur uses biomass collected from the enemy's fallen units to enhance his own units. Some units can evolve into Ultimate Evolutions - massive units that can lead the charge against Amon.</p>
    <h2 id="levelUnlocks">Level Unlocks</h2>
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
                <td><img src="/images/commanderdata/progression/abathur/abathur_01.png" alt = "Biomass Harvester"></td>
                <td>Biomass Harvester</td>
                <td>
                    <ul>
                        <li>Abathur's units gain increased life, attack speed, and energy regeneration by collecting Biomass from fallen enemies.</li>
                        <li>Roaches do not cost vespene gas.</li>
                        <li>Larvae spawn at an increased rate.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/abathur/abathur_02.png" alt = "Ultimate Evolution"></td>
                <td>Ultimate Evolution</td>
                <td>
                    Unlocks the ability for ground units with 100 stacks of Biomass to evolve into Brutalisks. Air units with 100 stacks of Biomass evolve into Leviathans.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/abathur/abathur_03.png" alt = "Virulent Nests"></td>
                <td>Virulent Nests</td>
                <td>
                   Enemies damaged by Toxic Nests drop additional biomass and have attack and movement speeds slowed. Toxic Nests have a chance to respawn on death. Toxic Nests cannot be targeted by the enemy.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_04.png" alt = "Roach Warren Upgrade Cache"></td>
                <td>Roach Warren Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Roach Warren:
                    <ul>
                        <li>Roaches gain +6 armor when under 50% life.</li>
                        <li>Increase the damage of Ravager's Corrosive Bile ability by 40.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_05.png" alt = "Improved Mend"></td>
                <td>Improved Mend</td>
                <td>
                    Mend can store up to 3 charges and its cooldown is reduced by 30 seconds.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_06.png" alt = "Evolution Chamber Upgrade Cache"></td>
                <td>Evolution Chamber Upgrade Cache</td>
                <td>
                    Unlocks the following upgrade at the Evolution chamber:
                    <ul>
                        <li>Allow Hatcheries, Lairs and Hives to birth two Swarm Queens simultaneously.</li>
                        <li>Increase the healing of the Swarm Queen's Rapid Transfusion by 10 and allow it to heal both biological and mechanical units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_07.png" alt = "Biomass Recovery"></td>
                <td>Biomass Recovery</td>
                <td>
                    When killed, your units have a 50% chance to drop all their Biomass.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_08.png" alt = "New Unit: Viper"></td>
                <td>New Unit: Viper</td>
                <td>
                    Flying caster. Able to manipulate battlefield conditions. Can use Parasitic Bomb, Consumption, Disabling Cloud, and Abduct abilities.<br><br>Can attack air units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_09.png" alt = "Infestation Pit Upgrade Cache"></td>
                <td>Infestation Pit Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Infestation pit:
                    <ul>
                        <li>Unlock the Swarm host's Deep Tunnel ability, which allows it to quickly burrow to a target location.</li>
                        <li>Unlock the Viper's Paralytic Barbs ability, which increased the stun duration of Abduct.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/abathur/abathur_10.png" alt = "Symbiote"></td>
                <td>Symbiote</td>
                <td>
                    Brutalisks and Leviathans gain Symbiotes that follow them, attacking enemies and protecting their host with a damage absorbing shell.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_11.png" alt = "Spire Upgrade Cache"></td>
                <td>Spire Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Spire and Greater spire:
                    <ul>
                        <li>Increase the Guardian attack range.</li>
                        <li>Enable the Devourer's attacks to deal area damage.</li>
                        <li>Upgrade the Mutalisk's attacks to deal 100% bonus damage to armored units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_12.png" alt = "Mutagenic Potential"></td>
                <td>Mutagenic Potential</td>
                <td>
                    Ravager, Guardian, Devourer morph times and resource costs reduced by 50%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_13.png" alt = "Locust Injection"></td>
                <td>Locust Injection</td>
                <td>
                    Enemy units have a chance to spawn friendly Locusts upon death.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/abathur/abathur_14.png" alt = "Roach Evolution: Vile"></td>
                <td>Roach Evolution: Vile</td>
                <td>
                    Upgrades Abathur's Roaches to the Vile Strain.<br><br>Assault unit. Regenerates life quickly while burrowed. Attacks debilitate the target, slowing its attack and movement speeds (by 75%).<br><br>Can attack ground units.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/abathur/abathur_15.png" alt = "Biotic Leech"></td>
                <td>Biotic Leech</td>
                <td>
                    Abathur's units heal themselves for 1% of the damage they deal per stack of Biomass they possess.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Abathur are:</p>
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
                <td><img src="/images/commanderdata/achievements/abathur/biggame.jpg" alt="Big Game"></td>
                <td>Big Game</td>
                <td>Deal 500,000 damage with Brutalisks or Leviathans in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/abathur/morphology.jpg" alt="Morphology"></td>
                <td>Morphology</td>
                <td>Morph 50 Ravagers, Devourers, or Guardians in a single mission on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/abathur/symbiosis.jpg" alt="Symbiosis"></td>
                <td>Symbiosis</td>
                <td>Heal 50,000 life on allied units with Abathur's Mend in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/abathur/toxicity.jpg" alt="Toxicity"></td>
                <td>Toxicity</td>
                <td>Deal 25,000 damage with Toxic Nests on Hard difficulty in Co-op Missions.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Abathur, at level 15, with no mastery points added are:</p>
    <table class="calldownTable">
        <thead>
            <tr>
                <th>Calldown</th>
                <th>Name</th>
                <th>Description</th>
                <th>Recommended Usage</th>
                <th>Numbers</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/abilities/abathur/spawntoxicnest.png" alt = "Spawn Toxic Nest"></td>
                <td>Spawn Toxic Nest</td>
                <td>Spawns a Toxic Nest that generates creep at the select location. Deals damage and slows when enemies walk over them. Enemies damaged with Toxic Nests drop additional biomass. Toxic Nests have a chance to respawn.</td>
                <td>
                    <ul>
                        <li>Spawn Toxic Nests at the start of the game and lure enemies with a Roach or Spore Crawler into them to get your first Ultimate Evolution up.</li>
                        <li>Place Toxic Nests over enemy spawn locations to instantly kill attack waves.</li>
                        <li>Put Toxic Nests in paths of attack waves to weaken them.</li>
                        <li>Place one Toxic Nest between your expansion's rocks and mineral patch so that two spine crawlers can be placed to clear the rocks.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 5 charges to start</li>
                        <li>Cooldown: 20 seconds</li>
                        <li>Max Charges: 5</li>
                        <li>Spawn Time: 15 seconds</li>
                        <li>Damage: 125</li>
                        <li>Mov. Spd. Slow: 75%</li>
                        <li>Atk Spd. Slow: 75%</li>
                        <li>Slow Duration: 5 seconds</li>
                        <li>Respawn Chance: 60%</li>
                        <li>Additional Biomass: 50%</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/abathur/mend.png" alt = "Mend"></td>
                <td>Mend</td>
                <td>Heal all allied units and structures instantly and provides a heal over time for a small period of time.</td>
                <td>
                    <ul>
                        <li>Useful when taking long engages or when trying to push consistently on maps.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 3 charges to start</li>
                        <li>Cooldown: 120 seconds</li>
                        <li>Initial heal: 100HP</li>
                        <li>Gradual heal: 50HP</li>
                        <li>Heal duration: 10 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>Note: Biomass drops at a rate of 2.5 biomass per supply of unit killed.</p>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Easy</p>
    <p>The hardest part of leveling Abathur is level 1, where he doesn't have access to his Ultimate Evolutions, which grant a massive power spike to the commander. At this level, build a Roach/Ravager/Queen composition to start. Mutalisks are not too great, because they don't have the life leech from biomass gathering, which makes them very fragile.</p>
    <p>While leveling through Mastery levels, allocate points with an equal split on Power Set 3.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Abathur with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Toxic Nest Damage</td>
                <td>2% per point<br>60% maximum</td>
                <td>30</td>
                <td rowspan="2">Points can be added to Mend Healing Duration if you would like to get more out of the healing and find it is useful. A possible optimization that can be made is to use the Toxic Nest Damage to 1-shot up to a particular unit and then put the remaining points into the Mend Healing Duration mastery. You may optimize using the <a href="/tools/masterybreakpoints">Mastery Breakpoints Calculator</a>.</td>
            </tr>
            <tr>
                <td>Mend Healing Duration</td>
                <td>10% per point<br>300% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Toxic Nest Damage is generally the better choice for an all-round build. Since Queens can fill the role of healing with Abathur, all points should be added to Toxic Nest Damage.</p>
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
                <td>Symbiote Ability Improvement</td>
                <td>3.33% per point<br>99.9% maximum</td>
                <td>30</td>
                <td rowspan="2">The Double Biomass Chance mastery can allow you to get your Ultimate Evolutions faster. It also gives you max biomass units faster, which can be incredibly powerful. If you find you struggle with biomass, putting some points into this mastery might help.</td>
            </tr>
            <tr>
                <td>Double Biomass Chance</td>
                <td>1.5% per point<br>45% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">By playing efficiently, biomass should never be a problem. Additionally, biomass is critical at the early stages in the game as you get your Ultimate Evolutions out, after which they can handle the mission fine. With effective usage of Toxic Nests, you should have more than enough biomass to get your first Ultimate Evolution out and snowball the game.</p>
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
                <td>Toxic Nests Maximum Charges and Cooldown</td>
                <td>1 per point<br>30 maximum</td>
                <td>15</td>
                <td rowspan="2">There should always be a split between these two unless you find you're lacking Toxic Nests. The best way is to find a balance between the cooldown and charges of Toxic Nests and your playstyle.</td>
            </tr>
            <tr>
                <td>Structure Morph and Evolution Rate</td>
                <td>-2% per point<br>-60% maximum</td>
                <td>15</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Having more Toxic Nests available to you is good, which is why points are added in the first mastery. However, at max level, the Toxic Nest charges you get are way too high to be used efficiently, and so, the other mastery is used to spend the remainder of points.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Abathur. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Essence Hoarder</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Combat units can hold an additional 25 Biomass and have an additional 50% chance to drop their Biomass upon death.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Ultimate Evolutions are unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Stacks additively with the Biomass Recovery Level 7 Unlock Talent, providing 100% chance to drop Biomass.</li>
                        <li>Biomass bonuses also extend linearly through the extra 25 Biomass collected.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>7</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige is very useful while leveling sub-mastery Abathur in the early levels as Ultimate Evolutions are not very strong without their Symbiotes which unlock at level 10. However, at Mastery level, this prestige remove Abathur's extremely powerful early-game and mobility, and should be avoided. This prestige works well against <a href="/resources/mutators">mutators</a> like Black Death, which heavily punishes Ultimate Evolutions.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Tunneling Horror</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Locusts have 50% increased attack range, movement speed, and duration.</li>
                        <li>The Deep Tunnel upgrade no longer requires Hive, no longer requires vision, and can be used by Roaches and Ravagers.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Combat units cost 25% more vespene gas.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Locusts spawned by the Level 13 unlock also get the prestige buffs</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>9</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige allows Abathur to move his entire Roach/Ravager army through the Deep Tunnel ability as well as providing buffs to his Swarm Host's Locusts. In general, it isn't very useful, as attack waves can be intercepted by Brutalisks and Toxic Nests. However, this prestige does open up some creative methods that will allow the Abathur player to snipe objectives if they choose to go for a pure ground army, with minimal cost increase to them.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>The Limitless</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>The number of Ultimate Evolutions is no longer limited to 3.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Ultimate Evolution requires 200 Biomass.</li>
                        <li>Biomass is less powerful.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Benefits gained per Biomass pickup is halved. At 200 Biomass, bonuses match Biomass bonuses of other prestiges at 100 Biomass.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>2</td>
            </tr>
            <tr>
                <th>Advice</th><td>At first glance, this prestige might look great, but it actually slows down Abathur's powerful earlygame, which is one of his greatest strengths. Abathur's power lies in his ability to clear missions as quickly as possible. This prestige will work well on missions with a fixed time, assuming the Abathur player is active with their Biomass collection, but it should not be the go-to pick for Abathur.</td>
            </tr>
        </tbody>
    </table>
    <p>While leveling Sub-mastery, Essence Hoarder will allow Abathur to recover all the Biomass his army drops after level 7, making it a great choice for general play. Post-mastery, a player can either choose no Prestige talent or Tunneling Horror, depending on their intended playstyle to help them carry them to victory.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Abathur is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/abathur/brutalisk.jpg" alt="Brutalisk"><img class="army" src="/images/commanderdata/units/abathur/leviathan.jpg" alt="Leviathan"><img class="army" src="/images/commanderdata/units/abathur/mutalisk.jpg" alt="Mutalisk">
    <p>Ultimate Evolutions should make up the core of your army and should be rushed out as soon as possible, as they are significantly stronger than any other unit in Abathur's arsenal. After that, gas income can be spent on upgrades and Mutalisks.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/abathur/swarmqueen.jpg" alt="Swarm Queen"><div class="techAdd">+</div></div>
    <p>Add Swarm Queens to your army to gain additional healing for your units.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/abathur/devourer.jpg" alt="Devourer"><div class="techAdd">+</div></div>
    <p>Add Devourers to your army when dealing with armored air units to provide you with armor-shred as well as anti-air splash damage.</p>
    <div id="tooltip">tooltip</div>
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
    <h2 id="units">Combat Units</h2>
    <p>For more information on Abathur's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Abathur's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/roach.jpg" alt="Roach">
            <p>Roach</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>They can sometimes be used effectively on infested maps with the Hydriodic Bile upgrade which will increase its damage against light targets.</li>
                <li>Use these to produce your brutalisks due to their low mineral cost.</li>
                <li>Roaches can be used to lure early attack waves into Toxic Nests.</li>
                <li>When fully upgraded, max biomass roaches can have up to 15 armor (1 base, 3 from upgrades, 5 from biomass, 6 from Adaptive Plating).</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/glialreconstitution.png" alt="Glial Reconstitution"></td>
                        <td>Glial Reconstitution</td>
                        <td>Increases the movement speed of Roaches by 33%.</td>
                        <td>100/100</td>
                        <td>110 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/tunnelingclaws.png" alt="Tunneling Claws"></td>
                        <td>Tunneling Claws</td>
                        <td>Enables Roaches to move while burrowed. Increases the life-regeneration rate of burrowed Roaches by 5.</td>
                        <td>100/100</td>
                        <td>110 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/hydriodicbile.png" alt="Hydriodic Bile"></td>
                        <td>Hydriodic Bile</td>
                        <td>Roach gains +8 damage vs. light units.</td>
                        <td>100/100</td>
                        <td>110 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/adaptiveplating.png" alt="Adaptive Plating"></td>
                        <td>Adaptive Plating</td>
                        <td>Roach gains +6 armor when life is under 50%.</td>
                        <td>100/100</td>
                        <td>110 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/ravager.jpg" alt="Ravager">
            <p>Ravager</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Morphed from Roaches.</li>
                <li>Ravagers can be used to snipe cloaked units if you don't have detection.</li>
                <li>Very large and can sometimes body-block a ground army.</li>
                <li>Very powerful when both upgrades are researched.</li>
                <li>Ability should be bound to <a href="/guides/generaltips">Rapidfire</a>.</li>
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
                        <td><img src="/images/commanderdata/unitskills/abathur/corrosivebile.png" alt="Corrosive Bile"></td>
                        <td>Corrosive Bile</td>
                        <td>Launch a missile at the target location, dealing 60 damage to enemy units in the area upon impact.<br><br>Can destroy Protoss Force Fields.</td>
                        <td>10 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/bloatedbileducts.png" alt="Bloated Bile Ducts"></td>
                        <td>Bloated Bile Ducts</td>
                        <td>Ravager Corrosive Bile impact size is increased by 200%.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/potentbile.png" alt="Potent Bile"></td>
                        <td>Potent Bile</td>
                        <td>Ravager Corrosive Bile damage is increased by 40.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/swarmhost.jpg" alt="Swarm Host">
            <p>Swarm Host</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful defensive unit.</li>
                <li>Swarm hosts can also be used to push into enemy defenses.</li>
                <li>Deep Tunnel will give them mobility to intercept attack waves.</li>
                <li>Due to high gas costs and short locust life, massing them is usually not viable.</li>
                <li>They are extremely effective on defensive maps.</li>
                <li>Micro will be required, as they hold a higher aggro priority compared to their locusts.</li>
                <li>Attack Speed buffs will reduce Spawn Locust cooldown.</li>
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
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/unitskills/abathur/spawnlocusts.png" alt="Spawn Locusts"></td>
                        <td>Spawn Locusts</td>
                        <td>Sends Locusts to target location.</td>
                        <td>15s</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/abathur/deeptunnel.png" alt="Deep Tunnel"></td>
                        <td>Deep Tunnel</td>
                        <td>Quickly burrow to a target visible location.</td>
                        <td>30 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/pressurizedglands.png" alt="Pressurized Glands"></td>
                        <td>Pressurized Glands</td>
                        <td>Locusts can attack both ground and air units.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/deeptunnel.png" alt="Deep Tunnel"></td>
                        <td>Deep Tunnel</td>
                        <td>Allows Swarm Hosts to quickly burrow to any visible location on the map.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/mutalisk.jpg" alt="Mutalisk">
            <p>Mutalisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should be the core unit in Abathur's army composition.</li>
                <li>Extremely weak without biomass.</li>
                <li>Maxed biomass mutalisks can wipe entire attack waves of clumped up units.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/rapidregeneration.png" alt="Rapid Regeneration"></td>
                        <td>Rapid Regeneration</td>
                        <td>Mutalisks regenerate life quickly while out of combat.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/viciousglave.png" alt="Vicious Glave"></td>
                        <td>Vicious Glave</td>
                        <td>The Mutalisk's attack bounces three additional times, hitting up to six targets. Bounces also travel farther.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/sunderingglave.png" alt="Sundering Glave"></td>
                        <td>Sundering Glave</td>
                        <td>Mutalisks deal 100% bonus damage vs. armored units.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/guardian.jpg" alt="Guardian">
            <p>Guardian</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Morphed from Mutalisks.</li>
                <li>Anti-ground siege unit.</li>
                <li>Guardians have long range, but lower DPS than mutalisks.</li>
                <li>Useful on defensive maps.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/prolongeddispersion.png" alt="Prolonged Dispersion"></td>
                        <td>Prolonged Dispersion</td>
                        <td>Guardian attack range is increased by 3.</td>
                        <td>200/200</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/devourer.jpg" alt="Devourer">
            <p>Devourer</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Morphed from the mutalisk.</li>
                <li>Anti-air unit.</li>
                <li>Corrosive Spray upgrade upgrades its attack to an AoE, which can devastate air compositions.</li>
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
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/unitskills/abathur/corrosiveacid.png" alt="Corrosive Acid"></td>
                        <td>Corrosive Acid</td>
                        <td>Launches acid at all enemy units in the target area, reducing their attack speed by 12.5% and armor by 3. Stacks 3 times.</td>
                        <td>45s</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/corrosivespray.png" alt="Corrosive Spray"></td>
                        <td>Corrosive Spray</td>
                        <td>Devourer attacks will now deal area damage.</td>
                        <td>200/200</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/viper.jpg" alt="Viper">
            <p>Viper</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Crowd-control unit.</li>
                <li>Disabling cloud is a powerful ability to disable enemy ground units.</li>
                <li>Abduct can be used to pull Siege tanks, Carriers and other large units into your army to be focus-fired.</li>
                <li>Parasitic Bomb ability is not as effective as using Devourers for anti-air.</li>
                <li>Virulent Microbes ability is a must-get to increase Viper range.</li>
                <li>Disable automatic evolution to prevent Vipers from evolving into Leviathans, wasting valuable gas.</li>
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
                        <td><img src="/images/commanderdata/unitskills/abathur/abduct.png" alt="Abduct"></td>
                        <td>Abduct</td>
                        <td>Pulls target unit to the Viper. Enemy is stunned for 1 second.</td>
                        <td>0 seconds</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/abathur/disablingcloud.png" alt="Disabling Cloud"></td>
                        <td>Disabling Cloud</td>
                        <td>Creates a cloud that slows movement speed (-50%) and prevents enemy units and structures from attacking and using energy-based abilities. Lasts for 10 seconds.</td>
                        <td>0 seconds</td>
                        <td>75</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/abathur/consumption.png" alt="Consumption"></td>
                        <td>Consumption</td>
                        <td>Drains up to 75 life from a friendly Zerg unit and gives the Viper 2 energy for each point of life drained.</td>
                        <td>10 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/abathur/parasiticbomb.png" alt="Parasitic Bomb"></td>
                        <td>Parasitic Bomb</td>
                        <td>Creates a parasitic cloud of radius 3 that deals 90 damage over 10 seconds to the target and enemy air units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires.<br><br>Cannot target ground units or structures.</td>
                        <td>0 seconds</td>
                        <td>125</td>
                    </tr>
                </tbody>
            </table>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/virulentmicrobes.png" alt="Virulent Microbes"></td>
                        <td>Virulent Microbes</td>
                        <td>All Viper abilities gain +4 cast range.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/paralyticbarbs.png" alt="Paralytic Barbs"></td>
                        <td>Paralytic Barbs</td>
                        <td>Viper Abduct stuns units for an additional 5 seconds.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/swarmqueen.jpg" alt="Swarm Queen">
            <p>Swarm Queen</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does not have movement speed penalty off creep.</li>
                <li>Can provide healing support for your army.</li>
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
                        <td><img src="/images/commanderdata/unitskills/abathur/spawncreeptumor.png" alt="Spawn Creep Tumor"></td>
                        <td>Spawn Creep Tumor</td>
                        <td>A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.<br><br>Bonus: Zerg move faster on creep.</td>
                        <td>3s</td>
                        <td>0</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/unitskills/abathur/rapidtransfusion.png" alt="Rapid Transfusion"></td>
                        <td>Rapid Transfusion</td>
                        <td>Heals a biological unit or structure for 25 life over time.</td>
                        <td>3s</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
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
                        <td><img src="/images/commanderdata/unitupgrades/abathur/biomechanicaltransfusion.png" alt="Bio-Mechanical Transfusion"></td>
                        <td>Bio-Mechanical Transfusion</td>
                        <td>Increases the healing of the Swarm Queen's Rapid Transfusion by 10 and allows it to heal mechanical units and structures.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/abathur/incubationchamber.png" alt="Incubation Chamber"></td>
                        <td>Incubation Chamber</td>
                        <td>Allows Hatcheries, Lairs and Hives to birth two Swarm Queens simultaneously.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/brutalisk.jpg" alt="Brutalisk">
            <p>Brutalisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful ground Ultimate Evolution.</li>
                <li>Evolves from ground units. Recommended to evolve from roaches.</li>
                <li>Frontal cleave attack is splash, which can be effected to clear swarms of enemies.</li>
                <li>Vulnerable to units that deal extra damage to armored units like Immortals.</li>
                <li>Deep Tunnel ability only has a 10-second cooldown which gives Brutalisks extremely good mobility even without vision.</li>
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
                        <td><img src="/images/commanderdata/unitskills/abathur/deeptunnel.png" alt="Deep Tunnel"></td>
                        <td>Deep Tunnel</td>
                        <td>Quickly burrow to target location.</td>
                        <td>10 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/leviathan.jpg" alt="Leviathan">
            <p>Leviathan</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful air Ultimate Evolution.</li>
                <li>Evolves from air units. Recommended to evolve from mutalisks.</li>
                <li>Due to tech requirements, it is recommended to get Brutalisks first.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/abathur/symbiote.jpg" alt="Symbiote">
            <p>Symbiote</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Accompanies Ultimate Evolutions, dealing damage and providing defensive buffs.</li>
                <li>Can provide a 200HP shell that lasts for 8 seconds (without masteries). 20 second cooldown.</li>
                <li>Deals 20 DPS to a unit within 6 range (without masteries).</li>
                <li>Forces all aggro'ed enemy units within 8 range to attack the Ultimate Evolution instead of other allied units.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades: None</p>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Abathur. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Overlord<br>
        17 Roach Warren<br>
        20 Spine Crawler<br>
        19 Spine Crawler<br>
        18 Extractor<br>
        17 Extractor<br>
        20 Roach<br>
        22 Overlord<br>
        22 Hatchery<br>
        22 Extractor<br>
        22 Extractor
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Abathur players is to go for a mass Roach build. While Roaches can potentially reach 15 armor, they do not deal a lot of damage and can have a lot of trouble dealing with attack waves and objectives.</p>
    <p>Additionally, the mass Roach build cannot deal with air units, causing players to resort to converting some Roaches to Ravagers. Ravagers can, however, work well, given a player has sufficient experience. Effectively dealing with air unit using Corrosive Bile will require a little practice.</p>
    <h3>Biomass Calculation</h3>
    <p>Biomass drops are calculated as follows:</p>
    <ol>
        <li>Calculate the Base Biomass drop:
            <ul>
                <li>If the unit is a Critter, base drop is 1</li>
                <li>If the unit is a Hybrid, base drop is 12</li>
                <li>If the unit's supply is more than 4, base drop is 12</li>
                <li>Otherwise, base drop is 2 x Unit Supply</li>
            </ul>
        </li>
        <li>Calculate the Bonus Multiplier:
            <ul>
                <li>Bonus multiplier is set at 1</li>
                <li>If the unit was damaged by a Toxic Nest, bonus multipler is 1.5</li>
                <li>Override the bonus multiplier with a value of 2 with a random chance based on the Double Biomass Chance Mastery allocation</li>
            </ul>
        </li>
        <li>Calculate the Difficulty Multiplier:
            <ul>
                <li>For Brutal difficulty, this is 1.25</li>
            </ul>
        </li>
    </ol>
    <p>The Biomass dropped is the Base Biomass Drop x Bonus Multiplier x Difficulty Multiplier</p>
    <h3>Biomass Effects</h3>
    <p>Units can collect Biomass drops (up to a maximum of 100) to become stronger. The effects of 100 Biomass are shown below for each of Abathur's units:</p>
    <table>
        <thead>
            <tr>
                <th>Unit</th>
                <th>Max Biomass Effect</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Roach</td>
                <td>300% Life<br>100% Attack Speed<br>+5 Armor<br>100% Biotic Leech</td>
            </tr>
            <tr>
                <td>Ravager</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech<br>50% Corrosive Bile Cooldown</td>
            </tr>
            <tr>
                <td>Swarm Host</td>
                <td>300% Life<br>50% "Spawn Locusts" Cooldown</td>
            </tr>
            <tr>
                <td>Locust*</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech</td>
            </tr>
            <tr>
                <td>Mutalisk</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech</td>
            </tr>
            <tr>
                <td>Guardian</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech</td>
            </tr>
            <tr>
                <td>Devourer</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech</td>
            </tr>
            <tr>
                <td>Viper</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech<br>500% Energy Regeneration</td>
            </tr>
            <tr>
                <td>Swarm Queen</td>
                <td>300% Life<br>100% Attack Speed<br>100% Biotic Leech<br>500% Energy Regeneration</td>
            </tr>
        </tbody>
    </table>
    <p>*Locust buff based on parent Swarm Host biomass.</p>
    <h3>Toxic Nest Usage</h3>
    <p>When Toxic Nests are placed on the ground, they detonate as soon as enemy units touch them. This is sometimes suboptimal and it may be worth setting up a few nests to manual detonation by right-clicking the Detonate ability. The reason is shown below.</p>
    <p>When a stream of enemies run towards a nest, the nest will detonate when the first one (the one leading the group) touches the nest, as shown below:</p>
    <img src="/images/commanderdata/guides/abathur/autonestbefore.jpg" alt="Before automatic detonation of Toxic Nest">
    <p>The result is a highly reduced amount of biomass gained, because only a few units are killed and not all of the Nest's Area of Effect is utilized. Additionally, the units in the attack wave may still be alive.</p>
    <img src="/images/commanderdata/guides/abathur/autonestafter.jpg" alt="After automatic detonation of Toxic Nest">
    <p>A more efficient use of the Toxic Nest is to detonate it when the attack wave is in the middle of the nest. This maximizes the damage of the nest. It is recommended to re-enable automatic detonation to detonate the nests, rather than manually detonating nests in a group to prevent you from detonating unncessary nests.</p>
    <img src="/images/commanderdata/guides/abathur/manualnestbefore.jpg" alt="Before manual detonation of Toxic Nest">
    <p>The result is significantly more biomass obtained. It is possible to wipe out small attack waves with a single nest.</p>
    <img src="/images/commanderdata/guides/abathur/manualnestafter.jpg" alt="After manual detonation of Toxic Nest">
    <p>When placing several nests, it is recommended to use a checkerboard pattern for nests to maximize nest damage cover and minimize unnecessary overlap of the nest damage area.</p>
    <p>A video is below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/jxEJVn_s5FE" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h3 id="biomass">Biomass Farming</h3>
    <p>This section provides the recommended location to farm Biomass on all the maps currently present in Co-op. The most efficient farming technique is to place your Toxic Nests down, disable the automatic detonation on the nests, and use a Spore Crawler to lure units into the nests. Usually, the first attack wave will spawn near where you are farming, allowing you to clear it too. Once you have your first Brutalisk, you can use it to lure to farm additional Biomass.</p>
    <p>In general, Zerg provides the easiest Biomass farming, due to the large presence of weak units. Terran is most difficult, due to the fact that units are normally hiding inside Bunkers.</p>
    <table>
        <thead>
            <tr>
                <th>Mission</th>
                <th>Farming Location</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/coa.jpg" alt="Chain of Ascension Biomass Farming Location">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/cod.jpg" alt="Cradle of Death Biomass Farming Location">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/deadofnight">Dead of Night</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/don.jpg" alt="Dead of Night Biomass Farming Location">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/lockload">Lock & Load</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/ll.jpg" alt="Lock & Load Biomass Farming Location">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/malwarfare">Malwarfare</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/mw.jpg" alt="Malwarefare Biomass Farming Location">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/me.jpg" alt="Miner Evacuation Biomass Farming Location">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/mo.jpg" alt="Mist Opportunities Essence Farming Order">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/oe.jpg" alt="Oblivion Express Essence Farming Order">
                    <p>This is a risky approach due to the presence of air units. The goal is to kill off enough ground units to produce 100 Biomass so that a Brutalisk may be made to take care of the air units. If you are uncomfortable with this method, farm Biomass near the top left camp entrance and wait for the attack wave.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/partparcel">Part & Parcel</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/pp.jpg" alt="Part & Parcel Essence Farming Order">
                    <p>Enemy race will determine where to gather Biomass. These areas are shown in the image.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/rtk.jpg" alt="Rifts to Korhal Essence Farming Order">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/soa.jpg" alt="Scythe of Amon Essence Farming Order">
                    <p>Clear out the enemy camp outside Player 2's base first to give you a small amount of Biomass. Continue luring units that are spawned from the expansion Sliver's Void Rifts.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/totp.jpg" alt="Temple of the Past Essence Farming Order">
                    <p>Place Toxic Nests in front of the middle lane's rocks to clear the attack wave before they deal damage to the rocks.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/tvp.jpg" alt="The Vermillion Problem Biomass Farming Location">
                    <p>Against Terran, you may farm Biomass from the island on the left first before moving to the central island.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/voidlaunch">Void Launch</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/vl.jpg" alt="Void Launch Essence Farming Order">
                    <p>After you clear the units in the marked area, place Toxic Nests near the spawning location to clear the attack wave.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                <td>
                    <img src="/images/commanderdata/guides/abathur/vt.jpg" alt="Void Thrashing Essence Farming Order">
                </td>
            </tr>
        </tbody>
    </table>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>At the start of the game, spawn Toxic Nests and use a Roach or Spore crawler to lure enemies into them to get your Ultimate Evolution out as fast as possible.</li>
        <li>Clear your expansion with two spine crawlers and a Toxic Nest to spread creep for them.</li>
        <li>Always aim to have all six Ultimate Evolutions out, starting with at least one Brutalisk.</li>
        <li>Focus your biomass collecting on one unit at the start of the game, rather than spreading it out across all your units to speed up getting your Ultimate Evolutions.</li>
        <li>Keep Brutalisks away from units that deal bonus damage to armored units like Immortals.</li>
        <li>Add Swarm Queens to enhance survivability of your army.</li>
        <li>Use Devourers to counter air compositions.</li>
        <li>Often with Abathur, you will float minerals. Make Spine and Spore Crawlers (with creep from Toxic Nests) at strategic locations as a mineral dump.</li>
        <li>More skilled players can disable the Toxic Nest auto-detonate and re-anable it when enemies clump over the nests to increase nest efficiency.</li>
        <li>More skilled players can add two to four Vipers to their composition and make use of Disabling Cloud and Abduct.</li>
        <li>Loading units into Nydus Worms will prevent them from taking DoT (damage over time) damage.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
