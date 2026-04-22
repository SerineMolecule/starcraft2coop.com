<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Karax</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Karax">
  <meta name="keywords" content="Starcraft co-op guides karax commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.3">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/karax">
  <script src="/scripts/preload.js"></script>
  <style>
        @media (min-width: 701px){
            .fastExpand{
                display:inline-block;
                width:400px;
                height:400px;
            }
            .fastExpand img{
                position:absolute;
            }
            #fastExpoTable td:nth-child(2){
                width:50px;
            }
        }
        @media (max-width: 700px){
            #fastExpoTable th{
                display:none;
                border:none;
            }
            #fastExpoTable td{
                display:block;
                border:none;
            }
            .fastExpand{
                display:inline-block;
                width:250px;
                height:250px;
            }
            .fastExpand img{
                position:absolute;
                width:250px;
            }
        }
        #content{
            background: url(/images/commanderdata/bgs/karax.png);
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
    <h1>Co-op Commander Guide: Karax</h1>
    <p id="commanderMotto">Khalai Phase-Smith</p>
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
        <p><a href="#fastexpand">Fast Expanding</a></p>
        <p><a href="#videos">Video Guides</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Karax uses powerful static defenses backed up by robotic units and the Spear of Adun to control the battlefield.</p>
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
                <td><img src="/images/commanderdata/progression/karax/karax_01.png" alt = "Master Machinist"></td>
                <td>Master Machinist</td>
                <td>
                    Karax's combat units have 50% increased life, but cost 30% more. Orbital Strike no longer has a cooldown or a charge count, and now costs 5 energy per shot.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_02.png" alt = "Spear of Adun: Chrono Field"></td>
                <td>Spear of Adun: Chrono Field</td>
                <td>
                    Increases the production speeds of all friendly structures by 15%.<br><br>Passive ability.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_03.png" alt = "New unit: Khaydarin Monolith"></td>
                <td>New unit: Khaydarin Monolith</td>
                <td>
                   Extremely powerful defensive structure. Has superior range and damage, but is very expensive and attacks slowly.<br><br>Can attack ground and air units.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/karax/karax_04.png" alt = "Twilight Council Upgrade Cache"></td>
                <td>Twilight Council Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Twilight Council:
                    <ul>
                        <li>Enable Sentinels to automatically revive themselves when killed.</li>
                        <li>Allow Energizers to temporarily take control of enemy mechanical units.</li>
                        <li>Increase energy regeneration for Energizers and Shield Batteries by 200%.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/karax/karax_05.png" alt = "Spear of Adun: Chrono Overload"></td>
                <td>Spear of Adun: Chrono Overload</td>
                <td>
                    Chrono Wave now increases the production speed of all friendly structures to 500% for 20 seconds.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/karax/karax_06.png" alt = "Forge Upgrade Cache"></td>
                <td>Forge Upgrade Cache</td>
                <td>
                    Unlocks the following upgrade at the Forge:
                    <ul>
                        <li>Increase the range of Photon Cannons, Khaydarin Monoliths, and Shield Batteries by 2.</li>
                        <li>Increase the attack speed of Photon Cannons and Khaydarin Monoliths by 25%.</li>
                        <li>Allow Shield Batteries to grant structures a damage absorption barrier.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_07.png" alt = "Spear of Adun: Reconstruction Beam"></td>
                <td>Spear of Adun: Reconstruction Beam</td>
                <td>
                    Friendly mechanical units and structures are automatically repaired over time . Up to 3 targets can be repaired at once.<br><br>Passive ability.<br><br>Units are repaired at 5HP/second while Structures are repaired at 10HP/second.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_08.png" alt = "Solar Forge Upgrade Cache 1"></td>
                <td>Solar Forge Upgrade Cache 1</td>
                <td>
                    Unlocks the following upgrades at the Solar Forge:
                    <ul>
                        <li>Allow Reconstruction Beam to affect additional targets.</li>
                        <li>Solar Efficiency level 3.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_09.png" alt = "Robotics Bay Upgrade Cache"></td>
                <td>Robotics Bay Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Robotics Bay:
                    <ul>
                        <li>Unlock the Immortal's Shadow Cannon ability, which deals 320 damage to an enemy ground or air unit.</li>
                        <li>Enable the Colossus's attacks to set fire to the ground for additional damage over time.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_10.png" alt = "Spear of Adun: Purifier Beam"></td>
                <td>Spear of Adun: Purifier Beam</td>
                <td>
                    Fires a beam that deals 750 (1500 vs armored) damage over 15 seconds. The beam will auto-acquire targets if not manually controlled.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/karax/karax_11.png" alt = "Khalai Ingenuity"></td>
                <td>Khalai Ingenuity</td>
                <td>
                    Pylons, Photon Cannons, Khaydarin Monoliths, and Shield Batteries warp in instantly.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_12.png" alt = "Solar Forge Upgrade Cache 2"></td>
                <td>Solar Forge Upgrade Cache 2</td>
                <td>
                   Unlocks the following upgrades at the Solar Forge:
                    <ul>
                        <li>Enable Orbital Strike to stun enemies in the target area.</li>
                        <li>Enable Solar Lance to set fire to the ground for additional damage over time.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/karax/karax_13.png" alt = "Spear of Adun: Purifier Protocol"></td>
                <td>Spear of Adun: Purifier Protocol</td>
                <td>
                    Increases the Purifier Beam's movement speed by 200% and its duration by 5 seconds.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_14.png" alt = "Fleet Beacon Upgrade Cache"></td>
                <td>Fleet Beacon Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Fleet Beacon:
                    <ul>
                        <li>Allow Mirages to become temporarily invulnerable after taking damage.</li>
                        <li>Allow Carriers to automatically repair nearby mechanical units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/karax/karax_15.png" alt = "Unity Barrierh"></td>
                <td>Unity Barrier</td>
                <td>
                    All friendly units gain a barrier that will block an attack or spell that deals at least 20 damage. This barrier is gained upon the unit's creation and can only be gained once every 240 seconds.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Karax are:</p>
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
                <td><img src="/images/commanderdata/achievements/karax/fastfriends.jpg" alt="Fast Friends"></td>
                <td>Fast Friends</td>
                <td>Use Chrono Wave to speed up the training of 500 of your ally's units in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/karax/scorchedearth.jpg" alt="Scorched Earth"></td>
                <td>Scorched Earth</td>
                <td>Kill 200 enemy units with Karax's Solar Lance in a single mission on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/karax/targetpurified.jpg" alt="Target Purified"></td>
                <td>Target Purified</td>
                <td>Kill 50 enemy units with a single strike of Karax's Purifier Beam on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/karax/towerdefense.jpg" alt="Tower Defense"></td>
                <td>Tower Defense</td>
                <td>Kill 1,000 enemy units with Karax's defensive structures in Co-op Missions.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Karax, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/karax/orbitalstrike.png" alt = "Orbital Strike"></td>
                <td>Orbital Strike</td>
                <td>Fires lasers onto the battlefield from orbit, each of them dealing 50 (100 vs armored units) area damage.</td>
                <td>
                    <ul>
                        <li>Should be used to clear expansions and expand early.</li>
                        <li>Great for clumped up enemies.</li>
                        <li>Useful for removing key units from attack waves.</li>
                        <li>Good for dealing with air units when you do not have anti-air.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 0 seconds</li>
                        <li>Energy Required: 5</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/karax/solarlance.png" alt = "Solar Lance"></td>
                <td>Solar Lance</td>
                <td>Strafes the target area with 3 laser beams dealing 200 damage with each beam.</td>
                <td>
                    <ul>
                        <li>Good for dealing with difficult attack waves.</li>
                        <li>Great for pushing into enemy bases and taking out key targets.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 120 seconds</li>
                        <li>Energy Required: 50</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/karax/chronowave.png" alt = "Chrono Wave"></td>
                <td>Chrono Wave</td>
                <td>Increases the production speeds of all friendly structures to 500% for 20 seconds</td>
                <td>
                    <ul>
                        <li>Should be used as soon as it is off cooldown.</li>
                        <li>The first Chrono Wave should be used to help you saturate both your main and your expansion.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 300 seconds</li>
                        <li>Cooldown: 240 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/karax/purifierbeam.png" alt = "Purifier Beam"></td>
                <td>Purifier Beam</td>
                <td>Fires a beam that deals 1000 (2000 vs Armored) damage over 20 seconds. The beam will auto-acquire targets if not manually controlled.</td>
                <td>
                    <ul>
                        <li>Good to use in heavily fortified bases.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 450 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Hard</p>
    <p>Karax is difficult to level due to the fact that he cannot instantly warp in cannons and static defense, as it standard in his gameplay, while having extremely expensive units. Rely on Sentinels, Immortals and Energizers as part of your army composition. Take the mission slow to reduce unnecessary losses. Rely on your Spear of Adun abilities as much as possible to weaken enemy bases and attack waves.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Karax with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Combat Unit Life and Shields</td>
                <td>1% per point<br>30% maximum</td>
                <td>?</td>
                <td rowspan="2">Players that utilize a lot of Tower pushing strategies will find benefit in the Structure mastery, whereas players that utilize a lot of Karax's units will find the Unit Life mastery more useful. Additionally, the Unit Life mastery is multiplicative, which means it compounds directly with the initial 50% Life increase from Karax's talent. A full mastery would give a unit 95% additional HP.</td>
            </tr>
            <tr>
                <td>Structure Life and Shields</td>
                <td>2% per point<br>60% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">These masteries depend on your playstyle. If you prefer doing builds which utilize a lot of static defense, the Structure Life mastery is a better option. However, due to the nature of co-op and how aggressive play is rewarded, the Combat Unit Life mastery is a better pick here for general play.</p>
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
                <td>Repair Beam Healing Rate</td>
                <td>3% per point<br>90% maximum</td>
                <td>?</td>
                <td rowspan="2">This is mostly a playstyle choice. The Chrono Wave Energy Regeneration mastery can help players who rely a lot on the Spear of Adun's abilities to weaken attack waves and enemy entrenchments before they engage with their army. The Repair Beam healing mastery can help in moments where a player is required to have long engagements and sustained combat. It can provide the healing required to prevent players from losing units more frequently.</td>
            </tr>
            <tr>
                <td>Chrono Wave Energy Regeneration</td>
                <td>3 per point<br>90 maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The choice of this mastery will depend on the player's playstyle and choice of prestige, as both are competitive choices.</p>
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
                <td>Chrono Boost Efficiency</td>
                <td>1% per point<br>30% maximum</td>
                <td>0</td>
                <td rowspan="2">The Chrono Boost mastery can allow Karax to complete his researches and get units out at a very fast pace. However, this may hurt his ability to fast expand if too many points are added to that mastery.</td>
            </tr>
            <tr>
                <td>Initial and Maximum Spear of Adun Energy</td>
                <td>+3 per point<br>+90 maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Initial energy here is the best choice because it allows Karax to fast-expand on almost all maps with minimal issues.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Karax. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Architect of War</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Repair Beam is 100% more effective and can target twice as many structures.</li>
                        <li>Unity Barrier affects defensive structures and its cooldown is reduced by 75%.</li>
                        <li>Chrono Boost, Chrono Wave, and Chrono Field affect defensive structures, increasing their rate of attack.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Repair Beam may only target structures. Unity Barrier no longer affects units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Prestige and Mastery applied to base healing rate (5/10), then a compounding of prestige+mastery is applied at 0.05/0.1 per mastery point</li>
                        <li>Chrono Boost and Chrono Wave can be used on ally defenses as well</li>
                        <li>Chrono Field doesn't have an effect on ally defenses</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>15</td>
            </tr>
            <tr>
                <th>Advice</th><td>Due to the fact that the Repair Beam only unlocks at level 7 and the Unity Barrier at level 15, this prestige has no disadvantage until level 7 and should be used until that level. This prestige encourages a static defense-style play for Karax by empowering his structures with various chrono abilities and healing. However, due to the nature of co-op, defensive-style play is not rewarded and this prestige, albeit well-tailored for this type of play, does not help the player get any additional value.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Templar Apparent</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Combat unit cost reduced by 40%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Photon Cannons and Khaydarin Monoliths are unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige puts Karax in a great position to build units, and this does not only include Carriers, which can now be rushed out quickly with this Prestige. Karax is able to build up a reasonable mass of units quickly, at the cost of static defense. This does mean that on missions where static defense is required (e.g. <a href="/missions/oblivionexpress">Oblivion Express</a> vs. Terran to stop Nukes), he will need to resort to other methods of detecting cloaked attackers at his base.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Solarite Celestial</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Orbital Strike and Solar Lance energy cost reduced by 40%.</li>
                        <li>Solar Lance and Purifier Beam cooldowns reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Chrono Boost, Chrono Wave, and Chrono Field are unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>10</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige improves Karax's Spear of Adun abilities at the cost of him losing his ramp up capabilities. The Spear of Adun is a key pillar in good Karax play, and players that know how to use the Spear of Adun to its maximum potential can gain a lot of value from this prestige. Due to the highly reduced costs of Spear of Adun abilities, players do not need to rely on the Chrono abilities in order to get a reasonably-sized army out in the early game. Instead, a small handful of units are more than enough, as the Spear of Adun becomes the primary damage dealer in the mission. This prestige emphasizes Spear of Adun play, and players will need to get familiar with this style of play in order to utilize this prestige to its maximum potential.</td>
            </tr>
        </tbody>
    </table>
    <p>P2 (Templar Apparent) puts Karax in the perfect position to be a reasonably powerful commander by reducing the cost of his once-expensive units. This allows for Karax to develop an early-game presence, and opens up a variety of playstyles that were prohibitive due to high unit costs. This prestige is the recommended prestige for general Karax play.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Karax is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/karax/sentinel.jpg" alt="Sentinel"><img class="army" src="/images/commanderdata/units/karax/energizer.jpg" alt="Energizer"><img class="army" src="/images/commanderdata/units/karax/immortal.jpg" alt="Immortal">
    <p>Immortals are the primary damage-dealers for Karax. Use Sentinels to tank for Immortals while the Immortals deal damage from behind. This build does not have any anti-air, and you will need to use your Spear of Adun and Shadow Cannons to kill off air units. Additionally, when fighting against Mechanical compositions, Energizers should also be used to reclaim some of those units.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/karax/colossus.jpg" alt="Colossus"><div class="techAdd">+</div></div>
    <p>Add Colossi to your army for extra splash damage that cannot be handled sustainably by your Spear of Adun abilities.</p>
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
    <p>For more information on Karax's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Karax's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/karax/sentinel.jpg" alt="Sentinel">
            <p>Sentinel</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Not very useful if you want to deal DPS.</li>
                <li>Good units to tank while more expensive units in the back deal damage.</li>
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
                        <td><img src="/images/commanderdata/unitskills/karax/charge.png" alt="Charge"></td>
                        <td>Charge</td>
                        <td>Intercepts enemy ground units and increases movement speed.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/charge.png" alt="Charge"></td>
                        <td>Charge</td>
                        <td>Allows Sentinels to intercept nearby enemies. Also increases the movement speed of Sentinels by 0.25.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/reconstruction.png" alt="Reconstruction"></td>
                        <td>Reconstruction</td>
                        <td>Sentinels are revived when killed. This effect can only occur once every 120 seconds.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/karax/energizer.jpg" alt="Energizer">
            <p>Energizer</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Extremely powerful and versatile unit.</li>
                <li>Can be used to reinforce your army through warp-ins.</li>
                <li>They increase the attack and movement speed of your units and structures through Chrono Beam.</li>
                <li>"Reclamation" is great when dealing with mechanical <a href="/guides/enemycomps">compositions</a> like Air Terran.</li>
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
                        <td><img src="/images/commanderdata/unitskills/karax/chronobeam.png" alt="Chrono Beam"></td>
                        <td>Chrono Beam</td>
                        <td>Friendly target gains 25% attack speed and 50% movement speed for 10 seconds.</td>
                        <td>0 seconds</td>
                        <td>3</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/karax/reclamation.png" alt="Reclamation"></td>
                        <td>Reclamation</td>
                        <td>Temporarily takes control of target enemy mechanical unit. Reclaimed units self-destruct after 120 seconds.</td>
                        <td>120 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/rapidrecharging.png" alt="Rapid Recharging"></td>
                        <td>Rapid Recharging</td>
                        <td>Increases the energy regeneration rate of Energizers and Shield Batteries by 200%.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/reclamation.png" alt="Reclamation"></td>
                        <td>Reclamation</td>
                        <td>Energizers gain the ability to temporarily take control of enemy mechanical units. Reclaimed units self-destruct after 120 seconds.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
   <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/karax/immortal.jpg" alt="Immortal">
            <p>Immortal</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful unit that deals great damage to structures and armored targets.</li>
                <li>Shadow Cannon is a good ability that can help Immortals burst down units and deal with air targets.</li>
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
                        <td><img src="/images/commanderdata/unitskills/karax/barrier.png" alt="Barrier"></td>
                        <td>Barrier</td>
                        <td>Absorbs up to 100 damage. Lasts for 10 seconds.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/karax/shadowcannon.png" alt="Shadow Cannon"></td>
                        <td>Shadow Cannon</td>
                        <td>Deal 320 damage to target unit or structure.<br><br>Can target ground and air units.</td>
                        <td>45 seconds</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/shadowcannon.png" alt="Shadow Cannon"></td>
                        <td>Shadow Cannon</td>
                        <td>Allows Immortals to use Shadow Cannon. Deals 320 damage to target unit or structure.<br><br>Can target ground and air units.</td>
                        <td>100/100</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/karax/colossus.jpg" alt="Colossus">
            <p>Colossus</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Niche unit that's usually good on infested maps.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/extendedthermallance.png" alt="Extended Thermal Lance"></td>
                        <td>Extended Thermal Lance</td>
                        <td>Colossi gain +3 range.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/firebeam.png" alt="Fire Beam"></td>
                        <td>Fire Beam</td>
                        <td>Upgrades the damage dealt by Colossi and causes their attacks to set fire to the ground, dealing an additional 150 damage to enemy ground units in the area over 5 seconds.</td>
                        <td>100/100</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/karax/mirage.jpg" alt="Mirage">
            <p>Mirage</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not worth making due to its weakness against armored targets.</li>
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
                        <td><img src="/images/commanderdata/unitskills/karax/gravitonbeam.png" alt="Graviton Beam"></td>
                        <td>Graviton Beam</td>
                        <td>Makes the target unit float in the air, disabling its abilities. Effect lasts up to 10 seconds.<br><br>Massive units are immune.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/anionpulsecrystals.png" alt="Anion Pulse-Crystals"></td>
                        <td>Anion Pulse-Crystals</td>
                        <td>Mirages gain +2 range.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/phasingarmor.png" alt="Phasing Armor"></td>
                        <td>Phasing Armor</td>
                        <td>Prevents Mirages from taking damage for 2 seconds after being attacked. Cannot occur more than once every 5 seconds.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/karax/carrier.jpg" alt="Carrier">
            <p>Carrier</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>High DPS with the Graviton Warp Catapult upgrade.</li>
                <li>Recommended when using the Templar Apparent prestige.</li>
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
                        <td><img src="/images/commanderdata/unitskills/karax/buildinterceptor.png" alt="Build Interceptor"></td>
                        <td>Build Interceptor</td>
                        <td>Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.<br><br>Can attack ground and air units. 8 Interceptors max.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/repairdrones.png" alt="Repair Drones"></td>
                        <td>Repair Drones</td>
                        <td>Carriers gain two repair drones that automatically heal nearby friendly mechanical units.</td>
                        <td>100/100</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/karax/gravitonwarpcatapult.png" alt="Graviton Warp Catapult"></td>
                        <td>Graviton Warp Catapult</td>
                        <td>Makes the Carrier launch Interceptors more quickly and increases Interceptor attack speed by 25%.</td>
                        <td>150/150</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Karax. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        20x Orbital Strike -> Rocks<br>
        15 Nexus<br>
        15 Pylon<br>
        17 Assimilator<br>
        18 Assimilator<br>
        20 Forge<br>
        26 Cannon -> Gas Rock<br>
        32 Cannon -> Gas Rock
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Karax players is to rush to a Mass Carrier build. While Carriers are highly effective on most missions, rushing Carriers without assisting your ally can lose you the game, especially when early-game objectives are slightly more challenging.</p>
    <p>A more effective playstyle is to build static defenses to guard/push into objectives while you tech up to Carriers. This reduces the pressure on your ally, and can guarantee a victory.</p>
    <h3>Tower Pushing</h3>
    <p>Karax has a few static defense structures available to him. These are shown below:</p>
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
                <td><img src="/images/commanderdata/guides/karax/photoncannon.jpg" alt="Photon Cannon"></td>
                <td>Photon Cannon</td>
                <td>Detector<br>HP: 150<br>Shield: 150<br>Damage: 20<br>Range: 7<br>Speed: 1.25</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/guides/karax/khaydarinmonolith.jpg" alt="Khaydarin Monolith"></td>
                <td>Khaydarin Monolith</td>
                <td>HP: 100<br>Shield: 200<br>Damage: 100<br>Range: 13<br>Speed: 3</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/guides/karax/shieldbattery.jpg" alt="Shield Battery"></td>
                <td>Shield Battery</td>
                <td>HP: 200<br>Shield: 200<br>Energy: 200<br>Range: 4<br>3 Shield/1 energy</td>
            </tr>
        </tbody>
    </table>
    <p>One of the advantages of Karax is his ability to instantly warp in Pylons and static defense at a position. This allows for an unorthodox playstyle where you use Probes to push into enemy bases, while being backed up by the Spear of Adun.</p>
    <p>This playstyle does require practice, but at high levels of play, can be very effective and a lot of fun, even though it may not be as effective as pushing with an army. When building up static defense at an area, it's important to first consider the reason for that defense. This will affect how many structures you build and how you lay them out.</p>
    <p>For standard pushes into enemy bases, it is often best just to build a Pylon and a few Photon Cannons so that you can clear the enemies guarding it. After all, these defenses will not be used after the base has been cleared.</p>
    <p>However, if you intend to building defenses to defend against attack waves, then more knowledge of Attack Wave timings and compositions is required. The below gives you an example of how to set up a defensive area with Karax:</p>
    <img src="/images/commanderdata/guides/karax/staticdefense.jpg" alt="Static Defense">
    <p>There are a few things to note here:</p>
    <ul>
        <li>Notice the Shield Batteries are placed <i>in front</i> of the Photon Cannons. This will force enemy units to move around the Shield Battery to destroy the Cannons once they get targeted.</li>
        <li>The types of structures you will build will solely depend on the enemies you are trying to defend against:
            <ul>
                <li>Khaydarin Monoliths for dealing with high-HP targets.</li>
                <li>Photon Cannons for all else.</li>
            </ul>
        You will need to vary the number and type of structures you build accordingly to ensure that the defense holds.
        </li>
        <li>The Energizer in the middle is placed into Phasing mode, reducing its aggro index, making it less likely to be targeted by enemies.</li>
        <li>The spaces in between the structures on the frontline (Shield Batteries and Photon Cannons) is minimal to prevent enemy units from getting a wrap-around, reducing their effectiveness.</li>
    </ul>
    <p>Karax has upgrades that can improve his static defense. The upgrades are listed below:</p>
    <table class="unitUpgrades">
        <thead>
            <tr>
                <th>Upgrade</th>
                <th>Name</th>
                <th>Effect</th>
                <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                <th>Research Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/rapidrecharging.png" alt="Rapid Recharging"></td>
                <td>Rapid Recharging</td>
                <td>Increases the energy regeneration rate of Energizers and Shield Batteries by 200%.</td>
                <td>100/100</td>
                <td>90 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/enhancedtargeting.png" alt="Enhanced Targeting"></td>
                <td>Enhanced Targeting</td>
                <td>Photon Cannons, Khaydarin Monoliths, and Shield Batteries gain +2 range.</td>
                <td>100/100</td>
                <td>120 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/optimizedordnance.png" alt="Optimized Ordnance"></td>
                <td>Optimized Ordnance</td>
                <td>Increases the attack speed of Photon Cannons and Khaydarin Monoliths by 25%.</td>
                <td>100/100</td>
                <td>120 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/fortificationbarrier.png" alt="Fortification Barrier"></td>
                <td>Fortification Barrier</td>
                <td>Allows Shield Batteries to grant target structures a barrier that absorbs up to 100 damage for 10 seconds.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>In addition to these upgrades, his static defenses are affected by Protoss Shield upgrades. They are not affected by armor or attack upgrades, however.</p>
    <p>Static Defense should be backed up by Spear of Adun abilities. For example, the Spear of Adun should be used to weaken enemy forces, reducing the losses on Static Defense. Karax has a number of upgrades that can improve the performance of the Spear of Adun.</p>
    <table class="unitUpgrades">
        <thead>
            <tr>
                <th>Upgrade</th>
                <th>Name</th>
                <th>Effect</th>
                <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                <th>Research Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/advancedrepairsystems.png" alt="Advanced Repair Systems"></td>
                <td>Advanced Repair Systems</td>
                <td>Allows the Spear of Adun's Reconstruction Beam to affect additional targets, for a total of up to 5.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/phasedetonation.png" alt="Phase Detonation"></td>
                <td>Phase Detonation</td>
                <td>The Spear of Adun's Orbital Strike stuns enemy units in the target area for 1.5 seconds.</td>
                <td>150/150</td>
                <td>120 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/unitupgrades/karax/solarflare.png" alt="Solar Flare"></td>
                <td>Solar Flare</td>
                <td>The Spear of Adun's Solar Lance sets fire to the ground along its path, dealing 600 extra damage over 20 seconds.</td>
                <td>150/150</td>
                <td>120 seconds</td>
            </tr>
        </tbody>
    </table>
    <h3>Solar Efficiency Levels</h3>
    <p>The table below summarizes the different Solar Efficiency levels available to Karax. Note that the base energy regeneration is roughly 16 energy/minute.</p>
    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Requirements</th>
                    <th>Bonus Energy</th>
                    <th>Total Energy Gain</th>
                    <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                    <th>Research Time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                        <td>1 energy/6 seconds</td>
                    <td>26 energy/minute</td>
                    <td>100/100</td>
                    <td>90 seconds</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Twilight Council</td>
                    <td>3 energy/6 seconds</td>
                    <td>46 energy/minute</td>
                    <td>150/150</td>
                    <td>120 seconds</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Fleet Beacon/Robotics Bay</td>
                    <td>6 energy/6 seconds</td>
                    <td>76 energy/minute</td>
                    <td>200/200</td>
                    <td>180 seconds</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3 id="fastexpand">Fast Expanding</h3>
    <p>On certain maps with a small number of enemies and structures blocking expansions, Karax can fast expand. These fast expand techniques are difficult as most of the time, Solar Lance will be shot into the dark and therefore will require a lot of practice.</p>
    <p>Below are pictures that show how to fast-expand on maps. These require a lot of practice to pull off, but can put you ahead economically.</p>
    <table id="fastExpoTable">
        <thead>
            <tr>
                <th>Map</th>
                <th>Race</th>
                <th>Player 1 Expansion</th>
                <th>Player 2 Expansion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                <td>
                    <form action='#'>
                        <label><input type='radio' name='coa' value='protoss' checked>Protoss</label><br>
                        <label><input type='radio' name='coa' value='terran'>Terran</label><br>
                        <label><input type='radio' name='coa' value='zerg'>Zerg</label><br></form>
                    <script>
                        var imgList=[];
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_coa_protoss_1.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_coa_terran_1.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_coa_zerg_1.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_coa_protoss_2.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_coa_terran_2.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_coa_zerg_2.jpg');
                        preload(imgList);
                        $("input[name='coa']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#coa1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/karax/fastexpand_coa_'+ race + '_1.jpg';
                            var newImg = $(img).hide();
                            $('#coa1div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'coa1');
                            var oldImg = $('#coa2');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/karax/fastexpand_coa_'+ race + '_2.jpg';
                            var newImg = $(img).hide();
                            $('#coa2div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'coa2');
                            return false;
                        })
                    </script>
                </td>
                <td><div class="fastExpand" id="coa1div"><img id="coa1" src="/images/commanderdata/guides/karax/fastexpand_coa_protoss_1.jpg" alt="Player 1 Fast Expand on Chain of Ascension"></div></td>
                <td><div class="fastExpand" id="coa2div"><img id="coa2" src="/images/commanderdata/guides/karax/fastexpand_coa_protoss_2.jpg" alt="Player 2 Fast Expand on Chain of Ascension"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td class="centered" colspan="3">Run both trucks straight past the forward construct towards the two Beacon Constructs. Use Orbital Strikes to kill the Beacon Constructs and trigger the first objective explosion. This will clear the expansion and the forward construct as well.</td>
            </tr>
            <tr>
                <td><a href="/missions/deadofnight">Dead of Night</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/lockload">Lock & Load</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/malwarfare">Malwarfare</a></td>
                <td>
                    <form action='#'>
                        <label><input type='radio' name='mw' value='protoss' checked>Protoss</label><br>
                        <label><input type='radio' name='mw' value='terran'>Terran</label><br>
                        <label><input type='radio' name='mw' value='zerg'>Zerg</label><br></form>
                    <script>
                        var imgList=[];
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_mw_protoss_1.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_mw_terran_1.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_mw_zerg_1.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_mw_protoss_2.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_mw_terran_2.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_mw_zerg_2.jpg');
                        preload(imgList);
                        $("input[name='mw']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#mw1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/karax/fastexpand_mw_'+ race + '_1.jpg';
                            var newImg = $(img).hide();
                            $('#mw1div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'mw1');
                            var oldImg = $('#mw2');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/karax/fastexpand_mw_'+ race + '_2.jpg';
                            var newImg = $(img).hide();
                            $('#mw2div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'mw2');
                            return false;
                        })
                    </script>
                </td>
                <td><div class="fastExpand" id="mw1div"><img id="mw1" src="/images/commanderdata/guides/karax/fastexpand_mw_protoss_1.jpg" alt="Player 1 Fast Expand on Malwarfare"></div></td>
                <td><div class="fastExpand" id="mw2div"><img id="mw2" src="/images/commanderdata/guides/karax/fastexpand_mw_protoss_2.jpg" alt="Player 2 Fast Expand on Malwarfare"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td class="centered" colspan="3">No simple fast expand exists. It is best to cannon-rush the expansion if you wish to take an early expansion.</td>
            </tr>
            <tr>
                <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/partparcel">Part & Parcel</a></td>
                <td>
                    <form action='#'>
                        <label><input type='radio' name='pp' value='protoss' checked>Protoss</label><br>
                        <label><input type='radio' name='pp' value='terran'>Terran</label><br>
                        <label><input type='radio' name='pp' value='zerg'>Zerg</label><br></form>
                    <script>
                        var imgList=[];
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_pp_protoss.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_pp_terran.jpg');
                        imgList.push('/images/commanderdata/guides/karax/fastexpand_pp_zerg.jpg');
                        preload(imgList);
                        $("input[name='pp']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#pp1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/karax/fastexpand_pp_'+ race + '.jpg';
                            var newImg = $(img).hide();
                            $('#pp1div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'pp1');
                            return false;
                        })
                    </script>
                </td>
                <td colspan="2"><div class="fastExpand" id="pp1div"><img id="pp1" src="/images/commanderdata/guides/karax/fastexpand_pp_protoss.jpg" alt="Fast Expand on Part & Parcel"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                <td class="centered" colspan="3">No simple fast expand exists. It is best to cannon-rush the expansion if you wish to take an early expansion. Make sure to use Solar Lances to clear the Void Rift before you start building Cannons.</td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td class="centered" colspan="3">No simple fast expand exists. It is best to cannon-rush the expansion if you wish to take an early expansion.</td>
            </tr>
            <tr>
                <td><a href="/missions/voidlaunch">Void Launch</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
        </tbody>
    </table>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Provide your ally with a 5-to-10 second notification before you use Chrono Wave. It is a powerful ability that can get you ahead in the game and solidify a victory.</li>
        <li>At the start of the game, clear your expansion with the starting Spear of Adun energy, whether or not it is contested.</li>
        <li>Energizers draw a lot of natural aggro. Put them into Phasing mode when making long pushes to reduce their chance of being attacked.</li>
        <li>Chronoboosting the Solar Forge does not increase the Spear of Adun's Energy regeneration rate.</li>
        <li>Solar Efficiency 1 is a must-get upgrade. Solar Efficiency 2 should be obtained if you require some support from the Spear of Adun. Solar Efficiency 3 should be obtained in very niche circumstances.</li>
        <li>Hold Shift when Orbital Strike is selected and press any key <a href="/guides/generaltips">bound to Rapidfire</a> to fire Orbital Strikes without delay in between shots.</li>
    </ul>
    <h2 id="videos">Video Guides</h2>
    <p>The below videos demonstrate the various fast expands explained earlier. These fast expands are much more difficult to pull off, because you will be shooting your Solar Lances into the fog of war and will require a lot of practice.</p>
    <iframe width="950" height="535" src="https://www.youtube.com/embed/videoseries?list=PL-U97hco2Fu6-eOs3pg4Bvvn27uuvClBW" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
