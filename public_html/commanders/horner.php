<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Commander Guide - Han & Horner</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Han Horner">
  <meta name="keywords" content="Starcraft co-op guides han horner commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.1">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/hanhorner">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/horner.png);
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
    <h1>Co-op Commander Guide: Han & Horner</h1>
    <p id="commanderMotto">Mercenary Leader and Dominion Admiral</p>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
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
    </div>
    <a id="comSum"></a><h2>Commander Summary</h2>
    <p>Han uses her relatively weak mercenaries with Horner's more powerful air units to create a powerful army that complements each other.</p>
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
                <td><img src="/images/commanderdata/progression/horner/hanhorner_01.png" alt = "The Horners"></td>
                <td>The Horners</td>
                <td>
                    When friendly units are killed, they drop resources for the commander of those units. Matt Horner starts with a Starport that can train elite aircraft.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/horner/hanhorner_02.png" alt = "New Unit: Strike Fighter"></td>
                <td>New Unit: Strike Fighter</td>
                <td>
                    Unlocks the Strike Fighter Platform and the Precision Strike ability. Launches a Strike Fighter to perform an airstrike against a targeted enemy or location.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_03.png" alt = "Assault Galleon & Raven Upgrade Cache"></td>
                <td>Assault Galleon & Raven Upgrade Cache</td>
                <td>
                   Unlocks the following upgrades:
                   <ul>
                       <li>Assault Galleons can be individually upgraded with Hangar Bays that automatically build and launch Fighter Drones</li>
                       <li>Theia Raven's Analyze Weakness can target 2 additional units.</li>
                   </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/horner/hanhorner_04.png" alt = "Merc Upgrade Cache"></td>
                <td>Merc Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Engineering Bay:
                    <ul>
                        <li>Increases the movement speed of Reapers, and grants them the ability to fly for 10 seconds.</li>
                        <li>Widow Mine range is increased by 50%, and can burrow and unburrow much faster.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/horner/hanhorner_05.png" alt = "Call in the Fleet"></td>
                <td>Call in the Fleet</td>
                <td>
                    Unlocks the ability to call in close planetary support from Horner's Armada. The Armada does massive damage to random enemy units in the target area.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_06.png" alt = "Impatience"></td>
                <td>Impatience</td>
                <td>
                    Mira's Unit Build and Research times are reduced by 30%.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/horner/hanhorner_07.png" alt = "Dominion Starport Upgrade Cache"></td>
                <td>Dominion Starport Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Starport Tech Lab:
                    <ul>
                        <li>Wraith attack speed increases by 10% with each attack, up to a maximum of 100%.</li>
                        <li>Attacks from Vikings in Assault Mode Pierce, dealing damage to enemy units behind the target. Transform time reduced by 75%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_08.png" alt = "His and Hers Supply"></td>
                <td>His and Hers Supply</td>
                <td>
                    Supply Depots are fitted with Dominion technology, increasing their health and supply by 100%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_09.png" alt = "Hellion & Hellbat Upgrade Cache"></td>
                <td>Hellion & Hellbat Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Engineering Bay:
                    <ul>
                        <li>Allows the Hellion to use Tar Bombs that deals 20 damage and causes nearby enemies to have their movement speed reduced.</li>
                        <li>Enables Hellbat to cause enemies to burn.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/horner/hanhorner_10.png" alt = "Space Station Reallocation"></td>
                <td>Space Station Reallocation</td>
                <td>
                    Unlocks the ability to use Space Station Reallocation. The Space Station deals 500 damage to Heroic targets it contacts, everything else is instantly destroyed. Assault drones will attack nearby targets.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_11.png" alt = "Endurance Training"></td>
                <td>Endurance Training</td>
                <td>
                    Horner's units regenerate health while out of combat.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_12.png" alt = "Advanced Weaponry"></td>
                <td>Advanced Weaponry</td>
                <td>
                    Call in the Fleet barrages enemy units with Lasers Batteries and fires Yamato Cannons that prefer high health targets.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/horner/hanhorner_13.png" alt = "Fusion Core Upgrade Cache"></td>
                <td>Fusion Core Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Fusion Core:
                    <ul>
                        <li>Battlecruiser weapon systems are upgraded to powerful particle cannons.</li>
                        <li>Strike Fighter Platforms Precision Strikes ignite the target location with napalm.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_14.png" alt = "Have a Blast"></td>
                <td>Have a Blast</td>
                <td>
                    Space Station Reallocation will detonate a nuclear device upon its destruction.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/horner/hanhorner_15.png" alt = "Significant Others"></td>
                <td>Significant Others</td>
                <td>
                    Your units gain bonuses based on your army composition:
                    <ul>
                        <li>Horner's units gain 0.5% health for each supply of Mira's units.</li>
                        <li>Mira's units gain 0.5% attack speed for each supply of Horner's units.</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <a id="achievements"></a><h2>Achievements</h2>
    <p>The commander-specific achievements for Han & Horner are:</p>
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
                <td><img src="/images/commanderdata/achievements/horner/diditwork.jpg" alt="Did It Work?"></td>
                <td>Did It Work?</td>
                <td>Detonate 5,000 Magnetic Mines.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/horner/holymacromony.jpg" alt="Holy Macromony"></td>
                <td>Holy Macromony</td>
                <td>Command at least 80 supply worth of Han units and 40 supply worth of Horner units in a single mission on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/horner/tilldeathdothempart.jpg" alt="Till Death Do Them Part"></td>
                <td>Till Death Do Them Part</td>
                <td>Deal 800,000 combined damage with Call in the Fleet and Space Station Reallocation.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/horner/yourethebomb.jpg" alt="You're the Bomb"></td>
                <td>You're the Bomb</td>
                <td>Deal 200,000 damage with Precision Strikes.</td>
            </tr>
        </tbody>
    </table>
    <a id="calldowns"></a><h2>Calldowns</h2>
    <p>The calldowns for Han & Horner, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/horner/deploymagmines.png" alt = "Deploy Mag Mines"></td>
                <td>Deploy Mag Mines</td>
                <td>Deploy 5 Mag Mines to the target location. Mag Mines are triggered by enemy motion and deal 50 damage area damage.</td>
                <td>
                    <ul>
                        <li>Useful for spawn-camping attack waves.</li>
                        <li>Can sometimes be used aggressively by luring enemies into them.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 50 seconds</li>
                        <li>Cooldown: 50</li>
                        <li>Max Charges: 5</li>
                        <li>Arming Time: 10 seconds</li>
                        <li>Firing Time: 1.5 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/horner/precisionstrike.png" alt = "Precision Strike"></td>
                <td>Precision Strike</td>
                <td>Requirements: Must have a Strike Fighter Platform<br><br>Sends a Strike Fighter to the target location where it deals 175 (+225 to non-Heroic structures) damage to enemy ground units in the target area.</td>
                <td>
                    <ul>
                        <li>Incredibly effective on <a href="/missions/deadofnight">Dead of Night</a> with the Napalm upgrade, allowing you to destroy multiple buildings with one strike.</li>
                        <li>Napalm does 10 damage per second for 10 seconds for a total of 100 extra damage.</li>
                        <li>Useful for weakening enemy fortifications.</li>
                        <li>For regular missions, roughly 3 is sufficient for taking out high value targets.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 0 seconds</li>
                        <li>Cooldown: 60 seconds</li>
                        <li>Cooldown: 120 seconds (if shot down)</li>
                        <li>Max Platforms: 10</li>
                        <li>HP: 50</li>
                        <li>Armor: 2</li>
                        <li>Takeoff Time: 0.5 seconds</li>
                        <li>Movement Speed: 30</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/horner/callinthefleet.png" alt = "Call in the Fleet"></td>
                <td>Call in the Fleet</td>
                <td>Calls in close planetary support from Horner's Armada. The Armada does massive damage to random enemy units in the target area.</td>
                <td>
                    <ul>
                        <li>Deals very high single-target damage to multiple units.</li>
                        <li>Effective for weakening enemy bases.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 420 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
        <tr>
                <td><img src="/images/commanderdata/abilities/horner/spacestationreallocation.png" alt = "Space Station Reallocation"></td>
                <td>Space Station Reallocation</td>
                <td>Space Station deals 500 damage to Heroic targets it contacts, everything else is instantly destroyed. Assault drones will attack nearby targets. Lasts for 10 seconds. On death, the station explodes with a nuclear blast, dealing 300 damage (+200 vs structures).</td>
                <td>
                    <ul>
                        <li>Useful for dealing with clumps of enemies.</li>
                        <li>Draws enemy aggro when landed, which can kill further enemy units after it explodes.</li>
                        <li>Great for dealing with extremely strong attack waves.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 300 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <a id="leveling"></a><h2>Sub-Ascension Leveling</h2>
    <p>Difficulty: Moderate</p>
    <p>During early stages of leveling, Han's units are very fragile. However, rushing up to Horner's units will leave you extremely vulnerable in the early game. Therefore, start off with some of Han's units (with Death Effect upgrades researched) and transition into Horner's units as quickly as reasonably possible. To increase effectiveness in the early levels, use Mag-Mines aggressively, by placing them behind your army, just before you push in. You can lure enemy units into the mines to deal damage.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 3 in a 2:1 split for the Air Fleet to Mag Mine masteries.</p>
    <a id="masteries"></a><h2>Masteries</h2>
    <p>Below are the three Power Sets for Han & Horner with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Strike Fighter Area of Effect</td>
                <td>1% per point<br>30% maximum</td>
                <td>0</td>
                <td rowspan="2">The Stronger Death Chance mastery works really well for unit-centric play, which is almost always how Han/Horner plays out, and is therefore recommended.</td>
            </tr>
            <tr>
                <td>Stronger Death Chance</td>
                <td>2% per point<br>60% maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Strike Fighter Area of Effect mastery can be used if the player intends on cheesing various maps (such as <a href="/maps/deadofnight">Dead of Night</a>). However, for all other playstyles, the Stronger Death Chance mastery is better. <a href="https://www.reddit.com/r/starcraft2coop/comments/1s36acy/do_p1_han_horner_and_double_death_chance_mastery/ocd4exs/" target="_blank">TwoTuuu's post details the exact buffs for Stronger Death Chance</a>.</p>
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
                <td>Significant Other Bonuses</td>
                <td>0.5% per point<br>15% maximum</td>
                <td>30</td>
                <td rowspan="2">The Salvage mastery can be useful for players that lose a lot of units throughout the game. It also benefits allies, and allows them to take greater risks with their armies by reducing the cost of losses.</td>
            </tr>
            <tr>
                <td>Double Salvage Chance</td>
                <td>2% per point<br>60% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Double Salvage Chance is only useful if players lose a lot of units, which should not be the case for efficient play.</p>
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
                <td>Air Fleet Travel Distance</td>
                <td>2% per point<br>60% maximum</td>
                <td>20</td>
                <td rowspan="2">It is generally recommended to split points between these two masteries. The exact split depends on how aggressively mines are used, or what the intent of the Air Fleet is (to completely clear, or just weaken).</td>
            </tr>
            <tr>
                <td>Mag Mine Charges, Cooldown and Arming Time</td>
                <td>-1% per point<br>-30% maximum</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">It is useful to have a higher Mag Mine Charge cap than is provided. Your playstyle will determine how many more you'd like to add.</p>
    <a id="prestiges"></a><h2>Prestiges</h2>
    <p>Below are the prestiges for Han & Horner. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
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
                <td>Chaotic Power Couple</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Mag Mines arm and fire 80% faster.</li>
                                <li>Mira's units' on-death effects are 100% more effective.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Horner's units cost 30% more.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>None</td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">The increase in the arming speed of the Mag-mines makes this prestige very useful when trying to push into enemy bases, as enemy units usually do not have time to deal with the mines before they become invulnerable. Additionally since Horner's units aren't meant to be massed, but rather provide a strong backbone of support for Han's units, the increase in cost (albeit significant) is worth the benefits of this prestige.</td>
            </tr>
        </tbody>
    </table>
    <p><b>Effectiveness Bonuses:</b></p>
    <ul>
        <li>Reaper Mine damage increased by 5</li>
        <li>Hellion Stim effects doubled</li>
        <li>Hellbat Fear duration increased by 3 seconds</li>
        <li>Widow Mine Sentinel Missile damage increased by 10</li>
    </ul>
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
                <td>Wing Commanders</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Horner's units' vespene gas costs reduced by 20% and charge cooldowns reduced by 50%.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Galleons are capped at 2.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>None</td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige provides players with the opportunity to mass Horner's units. However, the capping of Galleons at 2 is a significant detriment to the player's earlygame performance, due to the difficulty in being able to rebuild a lost Han army.</td>
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
                <td>Galactic Gunrunners</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Bombing Platforms are no longer capped.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Bombing Platforms cost 100% more.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>13</td>
                <td>None</td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige might appear to be extremely powerful, but the increase in the cost of the platforms signficantly slows down a player's ability to build them. Considering that the player will also want to push (since Strike Fighters aren't effective against most mission objectives), and that the platforms can only deal with ground targets, the prestige is not very effective in providing the player with a useful benefit.</td>
            </tr>
        </tbody>
    </table>
    <p>For general play, Chaotic Power Couple offers a good tradeoff between its advantages and disadvantages by allowing the player to use Mag-mines a lot more aggressively and also improving the death effects of Han's units, while still keeping Horner's units viable.</p>
    <a id="army"></a><h2>Recommended Army Composition</h2>
    <p>The recommended army composition for Han/Horner is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/horner/reaper.jpg" alt="Reaper"><img class="army" src="/images/commanderdata/units/horner/hellion.jpg" alt="Hellion"><img class="army" src="/images/commanderdata/units/horner/asteriawraith.jpg" alt="Asteria Wraith"><img class="army" src="/images/commanderdata/units/horner/theiaraven.jpg" alt="Theia Raven">
    <p>Reapers should be making up the bulk of your army with Hellions to provide the death effect stim buffs. Additionally, Ravens should also be added in to provide extra damage bonus to Reaper targets.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/horner/widowmine.jpg" alt="Widow Mine"><div class="techAdd">+</div></div>
    <p>If you have access to enemy spawn compositions, you may use Widow Mines to spawn-camp those locations and further reduce damage taken by your army.</p>
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
    <a id="units"></a><h2>Combat Units</h2>
    <p>For more information on Han & Horner's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Han & Horner's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/assaultgalleon.jpg" alt="Assault Galleon">
            <p>Assault Galleon</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Main production structure for Han's units.</li>
                <li>Only 5 can be present at the same time.</li>
                <li>Does very low damage.</li>
                <li>Outranges static defense which makes it effective at clearing contested expansions.</li>
                <li>Can heal out of Combat if Drone Hangars are installed.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/installdronehangar.png" alt="Install Drone Hangar"></td>
                        <td>Install Drone Hangar</td>
                        <td>Retrofits the Assault Galleon with a Drone Hangar bay that automatically builds and deploys Assault drones.<br><br>Assault Drones can attack ground and air units.</td>
                        <td>150/200</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h3>Han's Units:</h3>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/reaper.jpg" alt="Reaper">
            <p>Reaper</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Great structure DPS.</li>
                <li>Targets ground, but can be used to take out air units with the "Jet Pack Overdrive" upgrade.</li>
                <li>Use flying Reapers to kill strong splash Anti-Ground units (e.g. Reavers, Colossi, etc.).</li>
                <li>Extremely fragile unit.</li>
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
                        <td><img src="/images/commanderdata/unitskills/horner/kd8charge.png" alt="KD8 Charge"></td>
                        <td>KD8 Charge</td>
                        <td>Explodes after a short delay, doing 10 area damage and knocking back nearby units.</td>
                        <td>20 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/le9clustercharges.png" alt="LE9 Cluster Charges"></td>
                        <td>LE9 Cluster Charges</td>
                        <td>Reduces the cooldown of Reapers' KD8 Charge by 10 seconds. When Reapers are killed, they throw multiple grenades towards the killing unit.</td>
                        <td>50/50</td>
                        <td>42 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/jetpackoverdrive.png" alt="Jet Pack Overdrive"></td>
                        <td>Jet Pack Overdrive</td>
                        <td>Increases the movement speed of Reapers by 50%, and grants them the ability to fly for 10 seconds. Reapers are able to attack air units while flying.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/widowmine.jpg" alt="Widow Mine">
            <p>Widow Mine</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful defensive unit, especially with the "Executioner Missile" and the "Black Market Launchers" upgrade.</li>
                <li>Recommended to combine Widow Mines with Mag Mines for defense.</li>
                <li>Spread Widow Mines out so multiple mines they do not all get hit by single splash damage effects.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/executionermissiles.png" alt="Executioner Missiles"></td>
                        <td>Executioner Missiles</td>
                        <td>Reduces the Widow Mine's Sentinel Missile cooldown by 20 seconds. When Widow Mines are killed, they launch 5 Sentinel Missiles at random nearby targets that deal 10 (+10 vs. shields) area damage.</td>
                        <td>50/50</td>
                        <td>42 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/blackmarketlaunchers.png" alt="Black Market Launchers"></td>
                        <td>Black Market Launchers</td>
                        <td>Widow Mines range is increased by 50%, and can burrow and unburrow much faster (almost instantly).</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/hellion.jpg" alt="Hellion">
            <p>Hellion</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful against armored targets.</li>
                <li>Small quantities recommended.</li>
                <li>Usually only made for its death effect.</li>
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
                    <tr class="unlockable autocast">
                        <td><img src="/images/commanderdata/unitskills/horner/tarbombs.png" alt="Tar Bombs"></td>
                        <td>Tar Bombs</td>
                        <td>Launches a tar bomb that deals 20 damage to the target unit. Nearby enemies have their movement speed reduced by 75% and attack range reduced by 3 for 5 seconds.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/aerosolstimemitters.png" alt="Aerosol Stim Emitters"></td>
                        <td>Aerosol Stim Emitters</td>
                        <td>Hellions and Hellbats transform 75% faster. When Hellions are killed, nearby allied units gain 25% movement and 15% attack speed for 15 seconds.</td>
                        <td>50/50</td>
                        <td>42 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/tarbombs.png" alt="Tar Bombs"></td>
                        <td>Tar Bombs</td>
                        <td>Hellions can launch a bomb that deals 20 damage to the target unit. Nearby enemies have their movement speed reduced by 75% and attack range reduced by 3 for 5 seconds.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/hellbat.jpg" alt="Hellbat">
            <p>Hellbat</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not made because Reapers fill their intended role well.</li>
                <li>You can add a few to your composition to take advantage of the fear effect to protect the rest of your army.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/aerosolstimemitters.png" alt="Aerosol Stim Emitters"></td>
                        <td>Aerosol Stim Emitters</td>
                        <td>Hellions and Hellbats transform 75% faster. When Hellions are killed, nearby allied units gain 25% movement and 15% attack speed for 15 seconds.</td>
                        <td>50/50</td>
                        <td>42 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/wildfireexplosives.png" alt="Wildfire Explosives"></td>
                        <td>Wildfire Explosives</td>
                        <td>Hellbat movement speed is increased by 50%. When Hellbats are killed, they ignite the surrounding area. Enemies in the fire run around in fear for 3 seconds.</td>
                        <td>50/50</td>
                        <td>42 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/immolationfluid.png" alt="Immolation Fluid"></td>
                        <td>Immolation Fluid</td>
                        <td>Hellbat attacks cause enemies to burn for an additional 50 damage over 5 seconds.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h3>Death Effects:</h3>
    <p>The below table lists out the death effects and the Improved Death Effects for each of Han's units:</p>
    <table>
        <thead>
            <tr>
                <th>Unit</th>
                <th>Upgrade Name</th>
                <th>Death Effect</th>
                <th>Improved Death Effect</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Reaper</td>
                <td>LE9 Cluster Charges</td>
                <td>Throws 7 cluster charges towards the killing unit.</td>
                <td>Throws 15 cluster charges towards the killing unit.</td>
            </tr>
            <tr>
                <td>Hellion</td>
                <td>Aerosol Stim Emitters</td>
                <td>Nearby allied units gain 25% movement and 15% attack speed for 15 seconds.</td>
                <td>Nearby allied units gain 50% movement and 30% attack speed for 15 seconds.</td>
            </tr>
            <tr>
                <td>Hellbat</td>
                <td>Wildfire Explosives</td>
                <td>Ignite the surrounding area (radius 4). Enemies in the fire run around in fear for 3 seconds.</td>
                <td>Ignite the surrounding area (radius 5.66). Enemies in the fire run around in fear for 3 seconds.</td>
            </tr>
            <tr>
                <td>Widow Mine</td>
                <td>Executioner Missiles</td>
                <td>Launches 5 Sentinel Missiles at random nearby targets that deal 10 (+10 vs. shields) area damage.</td>
                <td>Launches 10 Sentinel Missiles at random nearby targets that deal 10 (+10 vs. shields) area damage.</td>
            </tr>
        </tbody>
    </table>
    <h3>Horner Units:</h3>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/asteriawraith.jpg" alt="Asteria Wraith">
            <p>Asteria Wraith</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Very powerful with the "Trigger Override" upgrade which can increase its attack speed.</li>
                <li>Fragile, and draws a lot of aggro, so it is best when combined with other units.</li>
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
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Warps to the target location. Aircraft is invulnerable while warping.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/horner/cloak.png" alt="Cloak"></td>
                        <td>Cloak</td>
                        <td>Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects.<br><br>Drains 0.9 energy per second.</td>
                        <td>0 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/unregisteredcloakingsystem.png" alt="Unregistered Cloaking System"></td>
                        <td>Unregistered Cloaking System</td>
                        <td>Allows Wraiths to remain permanently cloaked.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/triggeroverride.png" alt="Trigger Override"></td>
                        <td>Trigger Override</td>
                        <td>Wraith attack speed increases by 10% with each attack, up to a maximum of 100%.<br><br>Passive ability.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Wraiths, Vikings, and Ravens can use Tactical Jump, warping them to any visible location.</td>
                        <td>150/150</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/deimosviking.jpg" alt="Deimos Viking">
            <p>Deimos Viking</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not recommended for sustained anti-air due to much better alternatives (Wraiths and Battlecruisers).</li>
                <li>Can provide very good amounts of burst damage with the W.I.L.D Missiles upgrade as long as they are not in sustained combat, or if the autocast on that ability is disabled.</li>
                <li>Very useful on infested maps with the "Shredder Rounds" which causes Assault Mode Viking attacks to pierce targets.</li>
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
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Warps to the target location. Aircraft is invulnerable while warping.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable autocast">
                        <td><img src="/images/commanderdata/unitskills/horner/wildmissiles.png" alt="W.I.L.D. Missiles"></td>
                        <td>W.I.L.D. Missiles</td>
                        <td>Launches 5 rockets at the target unit. Each rocket deals 25 (40 vs armored) damage.</td>
                        <td>20 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/wildmissiles.png" alt="W.I.L.D. Missiles"></td>
                        <td>W.I.L.D. Missiles</td>
                        <td>Vikings in Fighter Mode can launch 5 rockets at an enemy. Each rocket deals 25 (40 vs armored) damage to the target unit.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/shredderrounds.png" alt="Shredder Rounds"></td>
                        <td>Shredder Rounds</td>
                        <td>Attacks from Vikings in Assault Mode pierce, dealing damage to enemy units behind the target. Viking transform time reduced by 75%.</td>
                        <td>200/100</td>
                        <td>63 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Wraiths, Vikings, and Ravens can use Tactical Jump, warping them to any visible location.</td>
                        <td>150/150</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/theiaraven.jpg" alt="Theia Raven">
            <p>Theia Raven</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Analyze Weakness is a powerful ability that can massively increase damage taken by enemy units.</li>
                <li>Recommended to also get the "Multithreaded Sensors" which can increase potential targets of Analyze Weakness to 4.</li>
                <li>You should have 3-4 Ravens with your army.</li>
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
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Warps to the target location. Aircraft is invulnerable while warping.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/unitskills/horner/analyzeweakness.png" alt="Analyze Weakness"></td>
                        <td>Analyze Weakness</td>
                        <td>All Melee and Ranged attacks against Analyzed units do 3 bonus damage. Effect lasts as long as the Raven remains locked onto the target.</td>
                        <td>3 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/multithreadedsensors.png" alt="Multi-Threaded Sensors"></td>
                        <td>Multi-Threaded Sensors</td>
                        <td>Ravens can target up to 4 units with Target Lock.</td>
                        <td>100/100</td>
                        <td>63 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Wraiths, Vikings, and Ravens can use Tactical Jump, warping them to any visible location.</td>
                        <td>150/150</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/horner/sovereignbattlecruiser.jpg" alt="Sovereign Battlecruiser">
            <p>Sovereign Battlecruiser</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful for tanking damage.</li>
                <li>Overcharged Reactor is a must-get upgrade as it greatly increases damage output.</li>
                <li>Usually results in overkill, but you should still have a few in your army for high health targets.</li>
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
                        <td><img src="/images/commanderdata/unitskills/horner/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Warps to the target location. Aircraft is invulnerable while warping.</td>
                        <td>60 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/horner/overchargedreactor.png" alt="Overcharged Reactor"></td>
                        <td>Overcharged Reactor</td>
                        <td>Battlecruiser weapons systems are upgraded to a powerful particle cannon that deals 200 damage per attack.</td>
                        <td>150/150</td>
                        <td>63 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="buildOrder"></a><h2>Build Order</h2>
    <p>Below is the standard economic build order for Han & Horner. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Supply Depot<br>
        17 Command Center<br>
        18 Assault Galleon<br>
        19 Refinery<br>
        20 Refinery<br>
        20 2x Hellions -> Rocks<br>
    </p>
    <a id="guide"></a><h2>Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Han & Horner players is completely skip on Han's units in favor of Horner's more powerful air units. This can be quite an expensive mistake, as Horner's units, while strong, cannot take prolonged lengths of damage. This is particular true for the Asteria Wraiths, which naturally draw a lot of aggro. Given their high price, the best way to keep them safe is to add some of Han's units into the mix.</p>
    <p>Additionally, these players will also find that they end up floating a lot of resources, particularly minerals as a result, because of the cooldown-based mechanic behind summoning Horner's units. Thus, it is better to use these spare resources to your advantage by making some of Han's units.</p>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Place Mag Mines on enemy spawn points to destroy attack waves.</li>
        <li>Take advantage of the death effects of Han's units.</li>
        <li>Careful placement of Precision Strike targets can help you weaken enemy forces. On maps like <a href="/missions/deadofnight">Dead of Night</a> you can sometimes hit three buildings with one strike.</li>
        <li>Build a Supply Depot in front of Mag Mines to draw enemy aggro and keep them still while the Mag Mines trigger.</li>
        <li>Contrary to the description, Space Station Reallocation does not instantly destroy every non-heroic unit/structure. It deals a total of 5,000 damage to everything it hits.</li>
        <li>Space Station Reallocation does reduced damage to some non-heroic structures. For example, Zenith Stones on <a href="/missions/templeofthepast">Temple of the Past</a> do not get instantly destroyed by the calldown, despite having no Heroic tag.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
