<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Swann</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Swann">
  <meta name="keywords" content="Starcraft co-op guides swann commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.3">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/swann">
  <script src="/scripts/preload.js"></script>
  <style>
        @media (min-width: 701px){
            .locPic{
                display:inline-block;
                margin-right:25px;
                width:400px;
                height:400px;
            }
            .locPic img{
                position:absolute;
            }
            .locMinimap{
                display:inline-block;
            }
        }
        @media (max-width: 700px){
            .locPic{
                display:inline-block;
                width:250px;
                height:250px;
            }
            .locPic img{
                position:absolute;
                width:250px;
            }
        }
        #content{
            background: url(/images/commanderdata/bgs/swann.png);
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
    <h1>Co-op Commander Guide: Swann</h1>
    <p id="commanderMotto">Chief Engineer</p>
    <?php include("../../includes/reporterror.php");?>
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
        <p><a href="#dondrill">The Drill on Dead of Night</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Swann relies on mechanical units, backed up with a powerful laser drill to control the battlefield.</p>
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
                <td><img src="/images/commanderdata/progression/swann/swann_01.png" alt = "Vehicle Specialist"></td>
                <td>Vehicle Specialist</td>
                <td>
                    Swann builds SCV's, vehicles and starships 20% faster than other Commanders. Factories and Armories do not cost vespene gas.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_02.png" alt = "Combat Drop"></td>
                <td>Combat Drop</td>
                <td>
                    Unlocks the ability to calls down 4 A.R.E.S. War Bots with timed life, stunning enemy units in the target area upon arrival. Call down the Combat Drop from the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_03.png" alt = "Betty and the Gang"></td>
                <td>Betty and the Gang</td>
                <td>
                   Increases the attack range of Devastation Turrets from 6 to 9. Attacks now slow enemy movement speed by 30%.<br><br>Increases the life of Missile Turrets from 250 to 325. Attacks now deal area damage.<br><br>Reduces the cost of Perdition Turrets by 50%.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/swann/swann_04.png" alt = "Drakken Laser Drill: Pulse Cannon"></td>
                <td>Drakken Laser Drill: Pulse Cannon</td>
                <td>
                    The Drakken laser drill can now be upgraded a second time, increasing its attack damage from 30 to 50.<br><br>Also unlocks the Pulse Cannon ability, which deals 600 damage to all enemy units and structures in the target area. Activate the Pulse Cannon ability from the top panel.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/swann/swann_05.png" alt = "Vespene Harvester"></td>
                <td>Vespene Harvester</td>
                <td>
                    Unlocks the ability for Command Centers to call down automated harvesters that gather extra vespene from your Refineries or your ally's vespene-gathering structures. 2 gas for each player every 6.3 seconds.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_06.png" alt = "New Unit: Thor"></td>
                <td>New Unit: Thor</td>
                <td>
                    Heavy assault mech. Built at the Factory.<br><br>Can attack ground and air units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_07.png" alt = "Factory Upgrade Cache"></td>
                <td>Factory Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Factory Tech Lab:
                    <ul>
                        <li>Allow Goliaths to attack ground and air units simultaneously.</li>
                        <li>Increase the damage of the Cyclone's Lock-On ability by 100%.</li>
                        <li>Unlock the Thor's 330mm Barrage Cannon ability, which stuns and deals damage to enemies in a target area.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/swann/swann_08.png" alt = "Improved SCVs"></td>
                <td>Improved SCVs</td>
                <td>
                    Allows multiple SCVs to build a structure in tandem, reducing its construction time. Repairing no longer costs resources.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_09.png" alt = "Armory Upgrade Cache"></td>
                <td>Armory Upgrade Cache</td>
                <td>
                   Unlocks the following upgrades at the Armory:
                   <ul>
                       <li>Increase the attack range of all vehicles and ships by 1.</li>
                       <li>Allow vehicles and ships to automatically heal themselves over time.</li>
                   </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/swann/swann_10.png" alt = "Tech Reactors"></td>
                <td>Tech Reactors</td>
                <td>
                    Combines Tech Labs and Reactors into a single add-on which contains upgrades for units while also allowing two units to be built simultaneously.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_11.png" alt = "Engineering Bay Upgrade Cache"></td>
                <td>Engineering Bay Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Engineering Bay:
                    <ul>
                        <li>Allow structures to automatically extinguish fires and repair themselves to 50% of their maximum life.</li>
                        <li>Increase attack speed of all Turrets by 25%.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/swann/swann_12.png" alt = "Immortality Protocol"></td>
                <td>Immortality Protocol</td>
                <td>
                    Unlocks the ability for destroyed Thors and Siege Tanks to rebuild themselves on the battlefield.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_13.png" alt = "Starport Upgrade Cache"></td>
                <td>Starport Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Starport Tech Reactor:
                    <ul>
                        <li>Upgrade Wraiths to evade 20% of incoming damage while cloaked.</li>
                        <li>Unlock the Science Vessel's Defensive Matrix ability, which surrounds a target with a shield that absorbs 200 damage over 20 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_14.png" alt = "Six for the Price of Four"></td>
                <td>Six for the Price of Four</td>
                <td>
                    Increases the number of A.R.E.S. War Bots called down by Combat Drop from 4 to 6. Call down the Combat Drop from the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/swann/swann_15.png" alt = "Mechanical Know-how"></td>
                <td>Mechanical Know-how</td>
                <td>
                    Increases the life of Swann's SCVs, vehicles, and starships by 20%.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Swann are:</p>
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
                <td><img src="/images/commanderdata/achievements/swann/combatready.jpg" alt="Combat Ready"></td>
                <td>Combat Ready</td>
                <td>Kill 25 units with Swann's Combat Drop before they expire on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/swann/dropemdead.jpg" alt="Drop 'Em Dead"></td>
                <td>Drop 'Em Dead</td>
                <td>Kill 250 enemy units with Swann's Combat Drop in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/swann/smoothoperator.jpg" alt="Smooth Operator"></td>
                <td>Smooth Operator</td>
                <td>Harvest 100,000 Vespene Gas for your ally with Rory Swann's Vespene Harvester in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/swann/thepowerofthesunatyourfingertips.jpg" alt="The Power of the Sun at Your Fingertips"></td>
                <td>The Power of the Sun at Your Fingertips</td>
                <td>Deal 20,000 damage in a single mission with Swann's Drakken Laser Drill on Hard difficulty.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Swann, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/swann/drakkenlaserdrillattack.png" alt = "Drakken Laser Drill Attack"></td>
                <td>Drakken Laser Drill Attack</td>
                <td>Attack with the Drakken Laser Drill. Deals 20 damage per second and has unlimited range.</td>
                <td>
                    <ul>
                        <li>Auto-targets enemy units in vision.</li>
                        <li>Relatively low DPS, but useful for whittling down high-HP targets.</li>
                        <li>Can be used to take down objectives in vision.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 0 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/swann/concentratedbeam.png" alt = "Concentrated Beam"></td>
                <td>Concentrated Beam</td>
                <td>Requirements: Drakken Laser Drill Level 1<br><br>Deals 400 damage to enemy units and structures in a line across the entire map.</td>
                <td>
                    <ul>
                        <li>Very useful for dealing with attack waves.</li>
                        <li>Can be used to help with base pushes if bases are aligned correctly.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 180 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/swann/pulsecannon.png" alt = "Pulse Cannon"></td>
                <td>Pulse Cannon</td>
                <td>Requirements: Drakken Laser Drill Level 2<br><br>Deals 600 damage to enemy units and structures in the target area.</td>
                <td>
                    <ul>
                        <li>Useful for dealing with clumped up enemies.</li>
                        <li>Very useful for dealing with bases.</li>
                        <li>Can be used for difficult attack waves.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 300 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/swann/combatdrop.png" alt = "Combat Drop"></td>
                <td>Combat Drop</td>
                <td>Calls down 6 A.R.E.S. War Bots, stunning enemy ground units in the drop zone. The War Bots are controllable and fight for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Should be used as often as possible, preferably as soon as they are off cooldown.</li>
                        <li>Useful for defending in the early game.</li>
                        <li>Can be used to tank for your units in the late game.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 240 seconds</li>
                        <li>Cooldown:240 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Moderate</p>
    <p>Swann plays the same way he does at Ascension levels when he is at lower levels. However, he is significantly slower to ramp up and build his army. In the early game, build a Commander Center next to your rocks, as it will take time for it to be built by a single SCV. Build four Factories in the later stages of the game, two with Tech Labs and two with Reactors to build your endgame armies.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 1's Concentrated Beam Width mastery until you hit the desired number of points, before allocating them to the Combat Drop duration mastery. Allocate points with an equal split on Power Set 3.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Swann with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Concentrated Beam Width and Damage</td>
                <td>2% per point<br>60% maximum</td>
                <td>19</td>
                <td rowspan="2">Players that prefer to rely on their Combat Drops to tank for their main army should consider adding more points into that respective mastery. The Combat Drops can severely reduce the amount of damage their army takes.</td>
            </tr>
            <tr>
                <td>Combat Drop Duration and Life</td>
                <td>2% per point<br>60% maximum</td>
                <td>11</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The 19 points into the Concentrated Beam mastery ensures you can 1-shot Battlecruisers with the ability.</p>
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
                <td>Immortality Protocol Cost and Build Time</td>
                <td>-2% per point<br>-60% maximum</td>
                <td>?</td>
                <td rowspan="2">Immortality Protocol can be critical to ensuring Swann is able to keep up with the eventual losses his army will take as the game progresses. However, it only applies to certain units, and it is important for a player to determine whether they will benefit from Immortality Protocol more than they will benefit from increased structure health.</td>
            </tr>
            <tr>
                <td>Structure Health</td>
                <td>2% per point<br>60% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This is down to player preference. If you tend to rely more on Siege Tanks and Thors, then the Immortality Protocol mastery should be chosen, otherwise, the Structure Health is a better option, especially when relying on static defenses.</p>
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
                <td>Vespene Drone Cost</td>
                <td>-3% per point<br>-90% maximum</td>
                <td>?</td>
                <td rowspan="2">Early Vespene Harvesters can provide Swann with the much-needed gas that he needs to get some of his higher-tech units out earlier. However, the Laser Drill mastery will allow the player to have a much more global presence on the map, allowing them to tech up to their end-game build without the constant harassment of attack waves. It is up to the player to determine which mastery/what ratio of mastery points to allocate for this.</td>
            </tr>
            <tr>
                <td>Laser Drill Build Time, Upgrade Time, and Upgrade Cost</td>
                <td>-1.5% per point<br>-45% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The regular choice is the Vespene Drone Cost mastery. However, for more mineral-heavy builds, and builds that rely on the Laser Drill, the Laser Drill mastery is the preferred choice.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Swann. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Heavy Weapons Specialist</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>The Laser Drill deals 100% splash damage, slows enemy movement by 70%, and locks on targets 50% faster.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>The Laser Drill's abilities are unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Splash damage range is 1.5</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige revolves around using the constant AoE damage hitting any enemy you have vision on. It is best if you max out Laser Drill Build Time Mastery to rush Drill upgrades, and deploy floating Factories (with the Fire Suppression Systems upgrade) around the map to get vision on enemy units. Commanders that can provide global map vision (e.g. Stetmann's Stetellites, Zeratul's Xel'Naga Watchers, Kerrigan's Creep Tumors or Nydus Worms) combo well with this prestige.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Grease Monkey</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Turret upgrades are 100% more effective.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Combat units cost 50% more vespene gas.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>The Fire Suppression Systems upgrade does not gain any benefit from this Prestige.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>11</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige makes Swann's already-powerful turrets even more powerful by further increasing their armor, attack speed and range. It should be a go-to pick for any defense-specific scenarios.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Payload Director</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Hercules have twice the cargo capacity and unload units instantly.</li>
                        <li>Science Vessels can use Tactical Jump and its cooldown reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Top bar cooldowns increased by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>The extreme amount of burst damage this Prestige can provide may, at-first-glance, seem valuable in addition to the ability to not only Tactical Jump your damage dealers but also your detection and healer. However, with proper micro, players should not be losing Siege Tanks to enemy units, especially with a Goliath frontline combined with Science Vessel Defense Matrices. Additionally, the disadvantage of having longer cooldowns on the Drill abilities means that the abilities do not sync up with mission attack wave/event timings as well.</td>
            </tr>
        </tbody>
    </table>
    <p>For general play, P0 (no prestige, Chief Engineer) and P1 (Heavy Weapons Specialist) are recommended. P1 is more beginner-friendly.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Swann is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/swann/goliath.jpg" alt="Goliath"><img class="army" src="/images/commanderdata/units/swann/sciencevessel.jpg" alt="Science Vessel">
    <p>Mass Goliath builds can do fairly well in most situations, as Science Vessels can give Goliaths not only healing, but protective Defensive Matrices.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/swann/siegetank.jpg" alt="Siege Tank"><div class="techAdd">+</div></div><div class="techContainer"><img class="army" src="/images/commanderdata/units/swann/hercules.jpg" alt="Hercules"><div class="techAdd">+</div></div>
    <p>Add a Hercules with 8 sieged up Siege Tanks and drop them behind your line of Goliaths for powerful splash damage.</p>
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
    <p>For more information on Swann's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Swann's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/hellbat.jpg" alt="Hellbat">
            <p>Hellbat</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not worth making due to the poor HP.</li>
                <li>Can be used as a frontline, but not very viable.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/infernalpreigniter.png" alt="Infernal Pre-Igniter"></td>
                        <td>Infernal Pre-Igniter</td>
                        <td>Hellbats deal +10 damage to light units in both modes.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/infernalplating.png" alt="Infernal Plating"></td>
                        <td>Infernal Plating</td>
                        <td>Hellions and Hellbats gain +2 armor.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/hellion.jpg" alt="Hellion">
            <p>Hellion</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not worth making due to the poor HP.</li>
                <li>Has good mobility to allow you to get vision of areas of the map.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/infernalpreigniter.png" alt="Infernal Pre-Igniter"></td>
                        <td>Infernal Pre-Igniter</td>
                        <td>Hellbats deal +10 damage to light units in both modes.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/infernalplating.png" alt="Infernal Plating"></td>
                        <td>Infernal Plating</td>
                        <td>Hellions and Hellbats gain +2 armor.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/goliath.jpg" alt="Goliath">
            <p>Goliath</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Great all-purpose unit.</li>
                <li>Can target both, enemy ground and air units with the "Multi-Lock Weapons System" upgrade.</li>
                <li>Does great anti-air DPS.</li>
                <li>Slightly fragile, and will need micro to move weakened ones out of danger.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/aresclasstargetingsystem.png" alt="Ares-Class Targeting System"></td>
                        <td>Ares-Class Targeting System</td>
                        <td>Increases the Goliath's anti-air weapon range by 3 and its ground weapon range by 1.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/multilockweaponssystem.png" alt="Multi-Lock Weapons System"></td>
                        <td>Multi-Lock Weapons System</td>
                        <td>Goliaths can target and attack ground and air units simultaneously.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/siegetank.jpg" alt="Siege Tank">
            <p>Siege Tank</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful defensive unit.</li>
                <li>Can be used offensively with the Hercules.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/maelstromrounds.png" alt="Maelstrom Rounds"></td>
                        <td>Maelstrom Rounds</td>
                        <td>Siege Tanks gain +40 attack damage while in Siege Mode. Splash damage remains the same.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/cyclone.jpg" alt="Cyclone">
            <p>Cyclone</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Can kite enemy units, making it effective for single-target DPS.</li>
                <li>Relatively ineffective, as most attack waves have several units with low HP.</li>
                <li>Very fragile.</li>
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
                        <td><img src="/images/commanderdata/unitskills/swann/lockon.png" alt="Lock On"></td>
                        <td>Lock On</td>
                        <td>Locks the Cyclone's weapons on the target unit, dealing 500 damage over 20 seconds. Can move while firing. Cancels if target moves out of range.</td>
                        <td>6 seconds</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/targetingoptics.png" alt="Targeting Optics"></td>
                        <td>Targeting Optics</td>
                        <td>Increases Cyclone Lock On range by 3.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/magfieldaccelerator.png" alt="Mag-Field Accelerator"></td>
                        <td>Mag-Field Accelerator</td>
                        <td>Increases Cyclone Lock On damage by 100%.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/thor.jpg" alt="Thor">
            <p>Thor</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Draws a lot of enemy aggro.</li>
                <li>Can body block each other, so if using Thors, make them in small quantities.</li>
                <li>Does great anti-ground DPS.</li>
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
                        <td><img src="/images/commanderdata/unitskills/swann/330mmbarragecannon.png" alt="330mm Barrage Cannon"></td>
                        <td>330mm Barrage Cannon</td>
                        <td>Stuns all enemies in a small area. Deals 500 damage over 3 seconds in a larger area.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/330mmbarragecannon.png" alt="330mm Barrage Cannon"></td>
                        <td>330mm Barrage Cannon</td>
                        <td>Allows Thors to use the 330mm Barrage Cannon ability.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/wraith.jpg" alt="Wraith">
            <p>Wraith</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Incredibly powerful with the "Pulse Amplifier" upgrade, but it does require micro.</li>
                <li>Getting the "Advanced Optics" upgrade can make the micro a little simpler to use.</li>
                <li>Very susceptible to splash damage.</li>
                <li>When massed, can 1-shot high-HP targets.</li>
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
                        <td><img src="/images/commanderdata/unitskills/swann/cloak.png" alt="Cloak"></td>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/pulseamplifier.png" alt="Pulse Amplifier"></td>
                        <td>Pulse Amplifier</td>
                        <td>Increases the damage of Gemini Missiles by 100% and Burst Lasers by 300% while the Wraith is moving.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/displacementfield.png" alt="Displacement Field"></td>
                        <td>Displacement Field</td>
                        <td>Wraiths move 20% faster and evade 20% of incoming attacks while cloaked.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/hercules.jpg" alt="Hercules">
            <p>Hercules</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Can Tactical Jump to anywhere on the map, even without vision.</li>
                <li>Load sieged up Siege Tanks to use them offensively.</li>
                <li>When a Hercules dies, it unloads all its units where it died.</li>
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
                        <td><img src="/images/commanderdata/unitskills/swann/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Warps to the target location. Hercules is invulnerable while warping.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/swann/sciencevessel.jpg" alt="Science Vessel">
            <p>Science Vessel</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>A must-have for any composition.</li>
                <li>"Improved Nano-Repair" removes the energy cost of healing your units, which makes it very effective.</li>
                <li>"Defensive Matrix" can be used on frontline units to reduce the amount of damage they take when they engage enemies.</li>
                <li>"Irradiate" can be used against some biological attack waves like Zerg to weaken them.</li>
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
                        <td><img src="/images/commanderdata/unitskills/swann/nanorepair.png" alt="Nano-Repair"></td>
                        <td>Nano-Repair</td>
                        <td>Heals a friendly mechanical unit.<br><br>Heals 3 life per 1 energy.</td>
                        <td>0 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/swann/irradiate.png" alt="Irradiate"></td>
                        <td>Irradiate</td>
                        <td>Damages an enemy biological unit and adjacent enemy biological units, dealing 250 damage over 25 seconds.</td>
                        <td>0 seconds</td>
                        <td>25</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/swann/defensivematrix.png" alt="Defensive Matrix"></td>
                        <td>Defensive Matrix</td>
                        <td>Surrounds the target with a shield that can absorb up to 200 damage. Effect lasts for 20 seconds.</td>
                        <td>20 seconds</td>
                        <td>50</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/swann/improvednanorepair.png" alt="Improved Nano-Repair"></td>
                        <td>Improved Nano-Repair</td>
                        <td>Science Vessel's Nano-Repair no longer costs energy.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/swann/defensivematrix.png" alt="Defensive Matrix"></td>
                        <td>Defensive Matrix</td>
                        <td>Enables Science Vessels to surround a target with a shield that can absorb 200 damage over 20 seconds.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/swann/regenerativebiosteel.png" alt="Regenerative Bio-Steel"></td>
                        <td>Regenerative Bio-Steel</td>
                        <td>Vehicles and ships automatically heal themselves over time.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Swann. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Supply Depot<br>
        16 Factory (4 SCV's)<br>
        18 Billy (4 SCV's)<br>
        18 Billy (4 SCV's)<br>
        21 Command Center (8 SCV's)
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Swann players is to try and rush Thors out in the early game. Not only does it leave them extremely vulnerable to the early game, mass Thors can only work when actually massed in large numbers.</p>
    <p>A much better build would be to start with Goliaths backed up with Siege Tanks and then transitioning to Thors as the economy improves.</p>
    <h3>Drakken Laser Drill Levels</h3>
    <p>The below table summarizes the Levels available for the Drakken Laser Drill.</p>
    <table>
        <thead>
            <tr>
                <th>Level</th>
                <th>Drill DPS</th>
                <th>Unlocked Abilities</th>
                <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                <th>Research Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>20</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>2</td>
                <td>30</td>
                <td>Concentrated Beam</td>
                <td>200/200</td>
                <td>190 seconds</td>
            </tr>
            <tr>
                <td>3</td>
                <td>50</td>
                <td>Pulse Cannon</td>
                <td>300/300</td>
                <td>220 seconds</td>
            </tr>
        </tbody>
    </table>
    <h3>SCV Advanced Construction</h3>
    <p>Swann can send multiple SCV's to build a structure. The time taken to complete a structure based on the number of SCV's building is as follows:</p>
    <table>
        <thead>
            <tr>
                <th>SCV's</th>
                <th>Build Time (%)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>100</td>
            </tr>
            <tr>
                <td>2</td>
                <td>62.5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>45.5</td>
            </tr>
            <tr>
                <td>4</td>
                <td>35.7</td>
            </tr>
            <tr>
                <td>5</td>
                <td>29.4</td>
            </tr>
            <tr>
                <td>6</td>
                <td>25</td>
            </tr>
            <tr>
                <td>7</td>
                <td>21.7</td>
            </tr>
            <tr>
                <td>8</td>
                <td>19.2</td>
            </tr>
            <tr>
                <td>9</td>
                <td>17.2</td>
            </tr>
            <tr>
                <td>10</td>
                <td>15.6</td>
            </tr>
        </tbody>
    </table>
    <h3>Static Defense</h3>
    <p>Swann has a few of static defense structures available to him. These are shown below:</p>
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
                <td><img src="/images/commanderdata/guides/swann/flamingbetty.jpg" alt="Flaming Betty"></td>
                <td>Flaming Betty</td>
                <td>HP: 350<br>Attack: 16<br>(vs Light): 20<br>Range: 4<br>Speed: 1<br>Targets: Ground</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/guides/swann/spinningdizzy.jpg" alt="Spinning Dizzy"></td>
                <td>Spinning Dizzy</td>
                <td>Detector<br>HP: 325<br>Damage: 12 / 1<br>Attacks: 2 /8<br>Range: 7 /7<br>Speed: 0.86 / 1.78<br>Targets: Air / Air</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/guides/swann/blasterbilly.jpg" alt="Blaster Billy"></td>
                <td>Blaster Billy</td>
                <td>HP: 300<br>Attack: 25<br>(vs Armored): 50<br>Range: 9<br>Speed: 1.5<br>Targets: Ground</td>
            </tr>
        </tbody>
    </table>
    <p>Swann has upgrades that can improve his static defense. The upgrades are listed below:</p>
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
                <td><img src="/images/commanderdata/unitupgrades/swann/hisecautotracking.png" alt="Hi-Sec Auto Tracking"></td>
                <td>Hi-Sec Auto Tracking</td>
                <td>Adds +1 range to all Turrets.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/swann/structurearmor.png" alt="Structure Armor"></td>
                <td>Structure Armor</td>
                <td>Upgrades the armor of structures by 2.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/swann/firesuppressionsystems.png" alt="Fire Suppression Systems"></td>
                <td>Fire Suppression Systems</td>
                <td>All structure fires are automatically extinguished and all structures automatically repair themselves to 50% of their maximum life at a rate of 15HP/second.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/swann/kmcautoloaders.png" alt="KMC Auto-Loaders"></td>
                <td>KMC Auto-Loaders</td>
                <td>Increases the attack speed of all Turrets by 25%.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
        </tbody>
    </table>
    <h3 id="dondrill">The Drill on Dead of Night</h3>
    <p>The Drill should be used by Swann to clear infested structures on Dead of Night. Clearing defenders with the Concentrated Beam or Pulse Cannon is just an added bonus. The images below show suggested uses for both, the Concentrated Beam and the Pulse Cannon. Note that the Concentrated Beam here has the bare minimum number of mastery points added to 1-shot infested structures (13 points). You will get better results if you have more mastery points added (for example, if you follow this guide and allocate 19 points).</p>
    <p>Also, notice the difference in Concentrated Beam Locations depending on the player. Because the beam exits your Laser Drill, the positioning is different depending on which player you are. Unfortunately, Player 2's Concentrated Beams are significantly less efficient, purely due to the layout of the infested structures relative to the drill.</p>
    <p>To get the best positioning consistently, Tactical Jump a Hercules to the location to get vision to perfectly position the beam.</p>
    <h4>Concentrated Beam Locations (Player 1):</h4>
    <p>11 Structures</p>
    <div class='switcher'>
        <div id="p1_cb_swDiv" class='locPic'>
            <img id ='p1_cb_sw' src='/images/commanderdata/guides/swann/p1_cb_sw_before.jpg' alt='Concentrated Beam Position (South West)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p1_cb_sw' value='before' checked>Before</label><br>
                <label><input type='radio' name='p1_cb_sw' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p1_cb_sw_minimap.jpg' alt='Concentrated Beam Position (South West) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p1_cb_sw_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p1_cb_sw_after.jpg');
        preload(imgList);

        $("input[name='p1_cb_sw']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p1_cb_sw');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p1_cb_sw_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p1_cb_swDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p1_cb_sw');
        })
    </script>
    <p>9 Structures</p>
    <div class='switcher'>
        <div id ='p1_cb_neDiv' class='locPic'>
            <img id ='p1_cb_ne' src='/images/commanderdata/guides/swann/p1_cb_ne_before.jpg' alt='Concentrated Beam Position (North East)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p1_cb_ne' value='before' checked>Before</label><br>
                <label><input type='radio' name='p1_cb_ne' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p1_cb_ne_minimap.jpg' alt='Concentrated Beam Position (North East) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p1_cb_ne_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p1_cb_ne_after.jpg');
        preload(imgList);

        $("input[name='p1_cb_ne']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p1_cb_ne');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p1_cb_ne_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p1_cb_neDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p1_cb_ne');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='p1_cb_nwDiv' class='locPic'>
            <img id ='p1_cb_nw' src='/images/commanderdata/guides/swann/p1_cb_nw_before.jpg' alt='Concentrated Beam Position (North West)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p1_cb_nw' value='before' checked>Before</label><br>
                <label><input type='radio' name='p1_cb_nw' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p1_cb_nw_minimap.jpg' alt='Concentrated Beam Position (North West) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p1_cb_nw_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p1_cb_nw_after.jpg');
        preload(imgList);

        $("input[name='p1_cb_nw']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p1_cb_nw');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p1_cb_nw_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p1_cb_nwDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p1_cb_nw');
        })
    </script>
    <p>7 Structures</p>
    <div class='switcher'>
        <div id ='p1_cb_sDiv' class='locPic'>
            <img id ='p1_cb_s' src='/images/commanderdata/guides/swann/p1_cb_s_before.jpg' alt='Concentrated Beam Position (South)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p1_cb_s' value='before' checked>Before</label><br>
                <label><input type='radio' name='p1_cb_s' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p1_cb_s_minimap.jpg' alt='Concentrated Beam Position (South) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p1_cb_s_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p1_cb_s_after.jpg');
        preload(imgList);

        $("input[name='p1_cb_s']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p1_cb_s');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p1_cb_s_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p1_cb_sDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p1_cb_s');
        })
    </script>
    <h4>Concentrated Beam Locations (Player 2):</h4>
    <p>9 Structures</p>
    <div class='switcher'>
        <div id ='p2_cb_neDiv' class='locPic'>
            <img id ='p2_cb_ne' src='/images/commanderdata/guides/swann/p2_cb_ne_before.jpg' alt='Concentrated Beam Position (North East)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p2_cb_ne' value='before' checked>Before</label><br>
                <label><input type='radio' name='p2_cb_ne' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p2_cb_ne_minimap.jpg' alt='Concentrated Beam Position (North East) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p2_cb_ne_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p2_cb_ne_after.jpg');
        preload(imgList);

        $("input[name='p2_cb_ne']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p2_cb_ne');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p2_cb_ne_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p2_cb_neDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p2_cb_ne');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='p2_cb_seDiv' class='locPic'>
            <img id ='p2_cb_se' src='/images/commanderdata/guides/swann/p2_cb_se_before.jpg' alt='Concentrated Beam Position (South East)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p2_cb_se' value='before' checked>Before</label><br>
                <label><input type='radio' name='p2_cb_se' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p2_cb_se_minimap.jpg' alt='Concentrated Beam Position (South East) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p2_cb_se_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p2_cb_se_after.jpg');
        preload(imgList);

        $("input[name='p2_cb_se']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p2_cb_se');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p2_cb_se_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p2_cb_seDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p2_cb_se');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='p2_cb_nwDiv' class='locPic'>
            <img id ='p2_cb_nw' src='/images/commanderdata/guides/swann/p2_cb_nw_before.jpg' alt='Concentrated Beam Position (North West)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p2_cb_nw' value='before' checked>Before</label><br>
                <label><input type='radio' name='p2_cb_nw' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p2_cb_nw_minimap.jpg' alt='Concentrated Beam Position (North West) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p2_cb_nw_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p2_cb_nw_after.jpg');
        preload(imgList);

        $("input[name='p2_cb_nw']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p2_cb_nw');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p2_cb_nw_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p2_cb_nwDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p2_cb_nw');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='p2_cb_sDiv' class='locPic'>
            <img id ='p2_cb_s' src='/images/commanderdata/guides/swann/p2_cb_s_before.jpg' alt='Concentrated Beam Position (South)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p2_cb_s' value='before' checked>Before</label><br>
                <label><input type='radio' name='p2_cb_s' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p2_cb_s_minimap.jpg' alt='Concentrated Beam Position (South) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p2_cb_s_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p2_cb_s_after.jpg');
        preload(imgList);

        $("input[name='p2_cb_s']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p2_cb_s');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p2_cb_s_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p2_cb_sDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p2_cb_s');
        })
    </script>
    <p>7 Structures</p>
    <div class='switcher'>
        <div id ='p2_cb_wDiv' class='locPic'>
            <img id ='p2_cb_w' src='/images/commanderdata/guides/swann/p2_cb_w_before.jpg' alt='Concentrated Beam Position (West)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='p2_cb_w' value='before' checked>Before</label><br>
                <label><input type='radio' name='p2_cb_w' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/p2_cb_w_minimap.jpg' alt='Concentrated Beam Position (West) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/p2_cb_w_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/p2_cb_w_after.jpg');
        preload(imgList);

        $("input[name='p2_cb_w']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#p2_cb_w');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/p2_cb_w_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#p2_cb_wDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p2_cb_w');
        })
    </script>
    <h4>Pulse Cannon Locations:</h4>
    <p>9 Structures</p>
    <div class='switcher'>
        <div id ='pc_neDiv' class='locPic'>
            <img id ='pc_ne' src='/images/commanderdata/guides/swann/pc_ne_before.jpg' alt='Pulse Cannon Position (North East)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='pc_ne' value='before' checked>Before</label><br>
                <label><input type='radio' name='pc_ne' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/pc_ne_minimap.jpg' alt='Pulse Cannon Position (North East) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/pc_ne_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/pc_ne_after.jpg');
        preload(imgList);

        $("input[name='pc_ne']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#pc_ne');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/pc_ne_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#pc_neDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'pc_ne');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='pc_nwDiv' class='locPic'>
            <img id ='pc_nw' src='/images/commanderdata/guides/swann/pc_nw_before.jpg' alt='Pulse Cannon Position (North West)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='pc_nw' value='before' checked>Before</label><br>
                <label><input type='radio' name='pc_nw' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/pc_nw_minimap.jpg' alt='Pulse Cannon Position (North West) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/pc_nw_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/pc_nw_after.jpg');
        preload(imgList);

        $("input[name='pc_nw']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#pc_nw');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/pc_nw_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#pc_nwDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'pc_nw');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='pc_wDiv' class='locPic'>
            <img id ='pc_w' src='/images/commanderdata/guides/swann/pc_w_before.jpg' alt='Pulse Cannon Position (West)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='pc_w' value='before' checked>Before</label><br>
                <label><input type='radio' name='pc_w' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/pc_w_minimap.jpg' alt='Pulse Cannon Position (West) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/pc_w_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/pc_w_after.jpg');
        preload(imgList);

        $("input[name='pc_w']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#pc_w');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/pc_w_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#pc_wDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'pc_w');
        })
    </script>
    <p>8 Structures</p>
    <div class='switcher'>
        <div id ='pc_sDiv' class='locPic'>
            <img id ='pc_s' src='/images/commanderdata/guides/swann/pc_s_before.jpg' alt='Pulse Cannon Position (South)'>
        </div>
        <div class = 'locMinimap'>
            <form action='#'>
                <label><input type='radio' name='pc_s' value='before' checked>Before</label><br>
                <label><input type='radio' name='pc_s' value='after'>After</label><br>
            </form>
            <br><br>
            <div>
                <img src='/images/commanderdata/guides/swann/pc_s_minimap.jpg' alt='Pulse Cannon Position (South) Minimap'>
            </div>
        </div>
    </div>
    <script>
        var imgList=[];
        imgList.push('/images/commanderdata/guides/swann/pc_s_before.jpg');
        imgList.push('/images/commanderdata/guides/swann/pc_s_after.jpg');
        preload(imgList);

        $("input[name='pc_s']").change(function(){
            var phase= $(this).val();
            var oldImg = $('#pc_s');
            var img = new Image();
            img.src = '/images/commanderdata/guides/swann/pc_s_'+ phase + '.jpg';
            var newImg = $(img).hide();
            $('#pc_sDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'pc_s');
        })
    </script>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Always have enough Science Vessels on hand with your army. Not only do they provide you with detection, they also provide you with access to very useful abilities.</li>
        <li>Upgraded Wraiths only deal high amounts of damage while moving. You will need to practice your stutter-step micro to use them effectively.</li>
        <li>A Hercules can pick up sieged up Siege Tanks. Use it to move weakened and damaged Siege Tanks from the front to the back to prevent you from losing them.</li>
        <li>Siege Tanks unloaded from a Hercules will always point in the direction the Hercules is facing. Orient your Hercules towards your intended target to minimize time it takes for the tank to turn its gun towards its target before firing.</li>
        <li>Raynor can use your Tech Reactors! Make your Tech Reactors with a Factory at your ally's base and then lift your building away so he can use it.</li>
        <li>Use a Hercules to get vision so you can use the Drill to take out attack waves.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
