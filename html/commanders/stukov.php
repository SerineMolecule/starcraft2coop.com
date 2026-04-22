<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Stukov</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Stukov">
  <meta name="keywords" content="Starcraft co-op guides stukov commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.3">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/stukov">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/stukov.png);
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
    <h1>Co-op Commander Guide: Stukov</h1>
    <p id="commanderMotto">Infested Admiral</p>
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
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Stukov dominates the battlefield by overwhelming his enemies with large numbers of infested units.</p>
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
                <td><img src="/images/commanderdata/progression/stukov/stukov_01.png" alt = "Infestation"></td>
                <td>Infestation</td>
                <td>
                    Stukov begins with an Infested Colonist Compound that automatically generates Infested infantry units every 60 seconds for no cost.<br><br>Stukov’s primary structure generates creep at an accelerated rate and unlimited range.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_02.png" alt = "Hostile Incubation"></td>
                <td>Hostile Incubation</td>
                <td>
                    Infest Structure can now store two additional charges and can target enemy structures, disabling them in addition to spawning Broodlings.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_03.png" alt = "Epidemic"></td>
                <td>Epidemic</td>
                <td>
                   Unlocks an additional level of Infestation at the Infested Colonist Compound.<br><br>Also unlocks an upgrade at the Infested Command Center to increase the number of Broodlings spawned by Infest Structure by 50%.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_04.png" alt = "Apocalisk"></td>
                <td>Apocalisk</td>
                <td>
                    Unlocks the ability to spawn an Apocalisk at the target location. The Apocalisk is controllable and will fight for 60 seconds. Spawn the Apocalisk from the top panel.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_05.png" alt = "Infested Engineering Bay Upgrade Cache"></td>
                <td>Infested Engineering Bay Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Infested Engineering Bay:
                    <ul>
                        <li>Increase the armor of Infested Bunkers.</li>
                        <li>Increase the life regeneration rate of Infested Bunkers while they are rooted.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_06.png" alt = "Corrupted Conscription"></td>
                <td>Corrupted Conscription</td>
                <td>
                    Spawn Infested Marine can now store 10 additional charges and Infested Marines now spawn 100% faster.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_07.png" alt = "Infested Infantry Upgrade Cache"></td>
                <td>Infested Infantry Upgrade Cache</td>
                <td>
                    Unlocks an upgrade at the Infested Colonist Compound that spawns Broodlings when Infested Civilians die.<br><br>Unlocks an upgrade at the Infested Barracks Tech Lab that enables Infested Marines and Infested Troopers to deal additional damage over time to units they attack.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_08.png" alt = "New Unit: Brood Queen"></td>
                <td>New Unit: Brood Queen</td>
                <td>
                    Flying support unit. Can use Ocular Symbiote and Spawn Broodlings.<br><br>Can attack air units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_09.png" alt = "Infested Factory Upgraded Cache"></td>
                <td>Infested Factory Upgraded Cache</td>
                <td>
                    Unlocks the following upgrades at the Infested Factory Tech Lab:
                    <ul>
                        <li>Increase the damage that Infested Siege Tanks deal to armored targets.</li>
                        <li>Enable Infested Diamondbacks to leave behind a trail of slime that deals damage and slows enemy ground units.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_10.png" alt = "Aleksander"></td>
                <td>Aleksander</td>
                <td>
                    Unlocks the ability to call down the Aleksander at the target location. The Aleksander is controllable and will fight for 60 seconds. Call down the Aleksander from the top panel.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_11.png" alt = "Infested Starport Upgrade Cache"></td>
                <td>Infested Starport Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Infested Starport Tech Lab:
                    <ul>
                        <li>Increase the life of Infested Banshees.</li>
                        <li>Reduce the damage taken by Infested Liberators while they are attacking.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_12.png" alt = "Incendiary Prosthetics"></td>
                <td>Incendiary Prosthetics</td>
                <td>
                   Increases the area damage dealt by the Apocalisk’s attacks and its initial spawn by 100%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_13.png" alt = "Brood Queen Upgrade Cache"></td>
                <td>Brood Queen Upgrade Cache</td>
                <td>
                    Unlocks the following upgrade at the Infested Starport Tech Lab:
                    <ul>
                        <li>Increase the Brood Queen’s energy regeneration rate by 100% and allow it to spawn with full energy.</li>
                        <li>Enable Brood Queens to immobilize and reveal enemy ground units while dealing damage to them over time.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/stukov/stukov_14.png" alt = "Engorged Bunkers"></td>
                <td>Engorged Bunkers</td>
                <td>
                    Increases the number of units that Infested Bunkers can hold by 2, and increases the spawning rate of Infested Troopers by 20%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/stukov/stukov_15.png" alt = "Neural Infestation"></td>
                <td>Neural Infestation</td>
                <td>
                    Stukov gains control of enemy units who are under attack from the Aleksander’s tentacles.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Stukov are:</p>
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
                <td><img src="/images/commanderdata/achievements/stukov/abroodofyourown.jpg" alt="A Brood of Your Own"></td>
                <td>A Brood of Your Own</td>
                <td>Deal 10,000 damage to enemies with Broodlings spawned from allied buildings in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/stukov/apocalisknow.jpg" alt="Apocalisk Now"></td>
                <td>Apocalisk Now</td>
                <td>Deal 100,000 damage with Apocalisks in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/stukov/shortterminfestment.jpg" alt="Short Term Infestment"></td>
                <td>Short Term Infestment</td>
                <td>Spawn 5,000 Infested Marines in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/stukov/thestukovmaneuver.jpg" alt="The Stukov Maneuver"></td>
                <td>The Stukov Maneuver</td>
                <td>Deal 100,000 damage with the Aleksander in Co-op Missions.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Stukov, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/stukov/deploypsiemitter.png" alt = "Deploy Psi Emitter"></td>
                <td>Deploy Psi Emitter</td>
                <td>Sends all currently existing and newly constructed infested infantry units to the designated point.</td>
                <td>
                    <ul>
                        <li>Reposition your Psi Emitter often to ensure your Infested units are moving in the direction you want to.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 0 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/stukov/infeststructure.png" alt = "Infest Structure"></td>
                <td>Infest Structure</td>
                <td>Infests target friendly or enemy structure, causing it to spawn 60 Broodlings over 20 seconds.<br><br>Friendly structures are healed for 25 life per second and enemy structures are disabled for the duration of the effect.</td>
                <td>
                    <ul>
                        <li>Infest Structure cannot target uprooted Bunkers. Root them, then infest, then uproot them.</li>
                        <li>Useful for distracting enemy units while your army attacks.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 180 seconds</li>
                        <li>Cooldown: 90 seconds</li>
                        <li>Max charges: 3</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/stukov/apocalisk.png" alt = "Apocalisk"></td>
                <td>Apocalisk</td>
                <td>Spawns an Apocalisk at the target location. The Apocalisk is controllable and will fight for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Useful for dealing with ground forces.</li>
                        <li>Can deal with minimal air units.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 240 seconds</li>
                        <li>Cooldown: 300 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/stukov/aleksander.png" alt = "Aleksander"></td>
                <td>Aleksander</td>
                <td>Calls down the Aleksander Infested Battlecruiser at the target location. The Aleksander is controllable and will fight for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Useful for pushing into enemy bases.</li>
                        <li>After the Aleksander dies, it crashes to the ground, dealing 300 damage and spawning an infested unit every second for another 30 seconds.</li>
                        <li>Has an aura that reduces incoming damage.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 360 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>The Apocalisk ability brings an Apocalisk onto the battlefield. This unit has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/stukov/apocalisk.jpg" alt="Apocalisk">
            <p>Apocalisk</p>
        </div>
        <div>
            <table class="centered unitAbilities">
                <thead>
                    <tr>
                        <th>Ability</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Cooldown</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/stukov/clusterrockets.png" alt="Cluster Rockets"></td>
                        <td>Cluster Rockets</td>
                        <td>Fires a salvo of 5 missiles at the target enemy air unit, dealing a total 100 damage. (40 missiles max)</td>
                        <td>10 seconds/5 missiles</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/stukov/burrowcharge.png" alt="Burrow Charge"></td>
                        <td>Burrow Charge</td>
                        <td>Burrow and charge at the target location dealing 150 damage and stunning non-heroic enemies for 5 seconds.</td>
                        <td>10 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Easy</p>
    <p>Stukov plays the same way he does at Ascension levels when he is at lower levels. However, the spawn rate of his infested units is significantly lower (due to the lack of the Engorged Bunkers upgrade). Therefore, be careful when you choose to unload Bunkers for a swell of Infested, as it will take a while before Bunkers get refilled.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Stukov with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Volatile Infested Spawn Chance</td>
                <td>0.5% per point<br>15% maximum</td>
                <td>30</td>
                <td rowspan="2">Players that use Infest Structure more aggressively might consider adding some points into that respective mastery. However, they should also consider the fact that Volatile Infested can deal a lot of splash damage, which can help weaken enemy defenses.</td>
            </tr>
            <tr>
                <td>Infest Structure Cooldown</td>
                <td>-1.5 sec per point<br>-45 sec maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Volatile Infested increase your commander power level. Additionally, it also causes the Aleksander to start spawning Volatile Infested units. While Infest Structure is useful, its power level does not match that of actual units on the field.</p>
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
                <td>Aleksander Cooldown</td>
                <td>-3 sec per point<br>-90 sec maximum</td>
                <td>0</td>
                <td rowspan="2">Players that prefer to push into enemy bases backed up by the Aleksander (which provides a damage reduction buff) might find it useful to add some points into the Aleksander mastery. However, they will be taking away points from the Apocalisk mastery, which allows it to be spammed more frequently.</td>
            </tr>
            <tr>
                <td>Apocalisk Cooldown</td>
                <td>-3 sec per point<br>-90 sec maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">While the Aleksander is significantly more powerful, you probably won't be using it as much as the Apocalisk, which can be spammed to deal with attack waves and small pushes.</p>
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
                <td>Infested Infantry Duration</td>
                <td>1 sec per point<br>30 sec maximum</td>
                <td>30</td>
                <td rowspan="2">Players that rely on a strong presence of Mechanical units (Diamondbacks, Liberators and Siege Tanks) may prefer to add points into the Mech mastery to further strengthen their army.</td>
            </tr>
            <tr>
                <td>Mech Attack Speed</td>
                <td>1% per point<br>30% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">You probably won't be using enough Mech units to justify the Mech Attack Speed mastery. The Duration mastery affects all infested units, which makes it much more powerful.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Stukov. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Frightful Fleshwelder</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Factory and Starport no longer have tech requirements.</li>
                        <li>Mechanical combat units cost 30% less.</li>
                        <li>Automated Mitosis generates Infested Siege Tank ammunition 200% faster.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>The Infested Colonist Compound does not spawn and cannot be built.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige puts Stukov's mech units well within reach in the early game, allowing him to have map presence by removing tech requirements and providing a cost reduction to his units. It is an extremely powerful prestige and the loss of the Infested Colonist Compound only affects the infested in the infested-specific upgrades (Anaerobic Enhancement and Broodling Gestation). While those upgrades are useful, their value does not match up to that of having significantly cheaper mech units.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Plague Warden</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Banshees can load up to 16 Infested infantry and can launch their cargo at a ground target.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Infested Civilians have 30% reduced timed life.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Banshees can unload units to a target location within 10 range, dealing 20 damage.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige makes Banshees double up as Medivacs to shuttle Infested Infantry to various locations on the map. While this prestige allows for some creative strategies to be utilized, the excessive amount of micro required to load and unload units from Banshees is not worth the payback. Additionally, Infested Banshees generally are not as effective as Diamondbacks in dealing with most ground objectives, especially considering their high cost, rendering this prestige fairly useless.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Lord of the Horde</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Infested Bunkers spawn Infested Troopers 200% faster.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Infested Bunkers no longer have cargo capacity.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige converts Bunkers from static defense structures to Infested Trooper generators. Bunkers lose the loaded troopers functionality, but they generate Infested units at a highly accelerated rate. For players that prefer a mass Bunker strategy, this prestige is better than having no prestige talents selected. The prestige works well with the Infested Duration mastery, and on maps where you are required to push in a single direction. Missions like Temple of the Past will provide a little more challenge for players using this Prestige. It can be very effective against <a href="/resources/mutators">mutators</a> such as Boom Bots, Black Death and Kill Bots</td>
            </tr>
        </tbody>
    </table>
    <p>Frightful Fleshwelder takes Stukov's most powerful units and puts them within reach of the early game, his weakest phase in the game. The versatility of that prestige is great and causes it to outshine the other prestiges and is the recommended prestige for general Stukov play at the very least.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Stukov is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/stukov/infestedbunker.jpg" alt="Infested Bunker"><img class="army" src="/images/commanderdata/units/stukov/infesteddiamondback.jpg" alt="Infested Diamondback">
    <p>Focus on teching up to an Infested Diamondback build and dump remaining minerals into Infested Bunkers and Infested Colonist Compound upgrades.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/stukov/infestedsiegetank.jpg" alt="Infested Siege Tank"><div class="techAdd">+</div></div>
    <p>Add Infested Siege Tanks to you army if you need to hold certain defensive positions.</p>
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
    <p>For more information on Stukov's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Stukov's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infestedcivilian.jpg" alt="Infested Civilian">
            <p>Infested Civilian</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Spawned from the Infested Colonist Compound.</li>
                <li>Highly recommended to buy all Infested Colonist Compound upgrades, due to their power level and their ability to snowball the game.</li>
                <li>They last 90 seconds.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/stukov/anaerobicenhancement.png" alt="Anaerobic Enhancement"></td>
                        <td>Anaerobic Enhancement</td>
                        <td>Allows Infested Civilians to quickly leap toward nearby enemy ground units.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/broodlinggestation.png" alt="Broodling Gestation"></td>
                        <td>Broodling Gestation</td>
                        <td>Infested Civilians spawn a Broodling when they die.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/volatileinfested.jpg" alt="Volatile Infested">
            <p>Volatile Infested</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Spawned in place of some civilians from the Infested Colonist compound.</li>
                <li>Lasts 90 seconds.</li>
                <li>Deals splash damage upon death.</li>
                <li>Also spawns from Infested Siege Tank shots.</li>
                <li>Benefits from the Infested Siege Tank's Acidic Enzymes upgrade.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/stukov/anaerobicenhancement.png" alt="Anaerobic Enhancement"></td>
                        <td>Anaerobic Enhancement</td>
                        <td>Allows Infested Civilians to quickly leap toward nearby enemy ground units.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/broodlinggestation.png" alt="Broodling Gestation"></td>
                        <td>Broodling Gestation</td>
                        <td>Infested Civilians spawn a Broodling when they die.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/acidicenzymes.png" alt="Acidic Enzymes"></td>
                        <td>Acidic Enzymes</td>
                        <td>Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infestedmarine.jpg" alt="Infested Marine/Trooper">
            <p>Infested Marine/Trooper</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Spawned from the Barracks.</li>
                <li>Bunkers spawn "Infested Troopers", which have the same stats, except for life span. Marines have 90 seconds, Troopers have 30 seconds.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/stukov/retinalaugmentation.png" alt="Retinal Augmentation"></td>
                        <td>Retinal Augmentation</td>
                        <td>Infested Marines and Infested Troopers gain +1 attack range.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/plaguedmunitions.png" alt="Plagued Munitions"></td>
                        <td>Plagued Munitions</td>
                        <td>Infested Marines and Infested Troopers deal an additional 50 damage over 15 seconds to units they attack.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infestedbunker.jpg" alt="Infested Bunker">
            <p>Infested Bunker</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Rooted Infested Bunkers spawn Infested Troopers every 24 seconds.</li>
                <li>Rooted Infested Bunkers have high HP regeneration, even without the upgrade, which is also recommended.</li>
                <li>Uprooted Infested Bunkers have a melee attack as well as a ranged attack.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/stukov/regenerativeplating.png" alt="Regenerative Plating"></td>
                        <td>Regenerative Plating</td>
                        <td>Infested Bunkers regenerate life twice as fast while rooted.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/calcifiedarmor.png" alt="Calcified Armor"></td>
                        <td>Calcified Armor</td>
                        <td>Infested Bunkers gain +3 armor.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infesteddiamondback.jpg" alt="Infested Diamondback">
            <p>Infested Diamondback</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful unit in Stukov's arsenal when used correctly.</li>
                <li>Kiting enemy units is important to prevent damage taken.</li>
                <li>Can use Fungal Snare to allow enemy air units to be attacked by ground units.</li>
                <li>Cannot Fungal Snare units with the Unstoppable tag (such as Shuttles on Void Launch)</li>
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
                        <td><img src="/images/commanderdata/unitskills/stukov/fungalsnare.png" alt="Fungal Snare"></td>
                        <td>Fungal Snare</td>
                        <td>Brings a target enemy air unit to the ground, allowing units to attack it as if it were a ground unit.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/saturatedcultures.png" alt="Saturated Cultures"></td>
                        <td>Saturated Cultures</td>
                        <td>Reduces the cooldown of the Infested Diamondback's Fungal Snare by 15 seconds.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/causticmucus.png" alt="Caustic Mucus"></td>
                        <td>Caustic Mucus</td>
                        <td>Infested Diamondbacks leave behind a trail of acid when moving that deals 20 damage per second to enemy units.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infestedsiegetank.jpg" alt="Infested Siege Tank">
            <p>Infested Siege Tank</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Can use Deep Tunnel to any visible location with creep with a 60 second cooldown.</li>
                <li>Uses Infested Civilians (from the Infested Colonist Compound) or Infested Troopers (from the Infested Bunkers) as ammunition.</li>
                <li>Cannot use Infested Marines from the Barracks.</li>
                <li>Heals 20 HP whenever it loads an Infested unit</li>
                <li>Has 18 range when rooted.</li>
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
                        <td><img src="/images/commanderdata/unitskills/stukov/deeptunnel.png" alt="Deep Tunnel"></td>
                        <td>Deep Tunnel</td>
                        <td>Can travel quickly to any visible location with creep.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/automatedmitosis.png" alt="Automated Mitosis"></td>
                        <td>Automated Mitosis</td>
                        <td>Infested Siege Tanks automatically spawn 1 round of Volatile Biomass every 30 seconds.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/acidicenzymes.png" alt="Acidic Enzymes"></td>
                        <td>Acidic Enzymes</td>
                        <td>Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infestedliberator.jpg" alt="Infested Liberator">
            <p>Infested Liberator</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful anti-air solution for Stukov.</li>
                <li>Not recommended to mass them due to high chance of overkilling targets.</li>
                <li>Cloud Dispersal upgrade is a must-get.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/stukov/viralcontamination.png" alt="Viral Contamination"></td>
                        <td>Viral Contamination</td>
                        <td>Increases the damage Infested Liberators deal to their primary target by 100%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/clouddispersal.png" alt="Cloud Dispersal"></td>
                        <td>Cloud Dispersal</td>
                        <td>Infested Liberators instantly transform into a cloud of microscopic organisms while attacking, reducing the damage they take by 85%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/infestedbanshee.jpg" alt="Infested Banshee">
            <p>Infested Banshee</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not recommended due to the existence of better anti-ground units.</li>
                <li>Can burrow to regenerate HP and Energy faster.</li>
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
                        <td><img src="/images/commanderdata/unitskills/stukov/cloak.png" alt="Cloak"></td>
                        <td>Cloak</td>
                        <td>Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects. Cloaked Infested Banshees also have their range increased by 2.<br><br>Drains 0.9 energy per second.</td>
                        <td>0 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/stukov/burrow.png" alt="Burrow"></td>
                        <td>Burrow</td>
                        <td>Buries the unit underground. Burrowed units are unable to move or attack, but they cannot be seen without detection.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/rapidhibernation.png" alt="Rapid Hibernation"></td>
                        <td>Rapid Hibernation</td>
                        <td>Allows Infested Banshees to burrow. Infested Banshees regenerate 20 life and energy per second while burrowed.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/bracedexoskeleton.png" alt="Braced Exoskeleton"></td>
                        <td>Braced Exoskeleton</td>
                        <td>Infested Banshees gain +100 life.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/stukov/broodqueen.jpg" alt="Brood Queen">
            <p>Brood Queen</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Mostly useful for its Fungal Growth ability, which can decimate attack waves with low HP units, such as Swarmy Zerg.</li>
                <li>Spawn Broodling is relatively ineffective due to the Brood Queen's high aggro rating, which increases the likelihood of losing it.</li>
                <li>Ocular Symbiote should only be used if no detection is present.</li>
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
                        <td><img src="/images/commanderdata/unitskills/stukov/ocularsymbiote.png" alt="Ocular Symbiote"></td>
                        <td>Ocular Symbiote</td>
                        <td>Increases a friendly unit's sight range by 5 and grants it the ability to detect cloaked and burrowed units for 180 seconds.</td>
                        <td>0 seconds</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/stukov/spawnbroodlings.png" alt="Spawn Broodlings"></td>
                        <td>Spawn Broodlings</td>
                        <td>Deals 300 damage to a target enemy unit. When the unit dies, it will spawn 2 Broodlings from its corpse.</td>
                        <td>0 seconds</td>
                        <td>100</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/stukov/fungalgrowth.png" alt="Fungal Growth"></td>
                        <td>Fungal Growth</td>
                        <td>Immobilizes enemy units and deals 80 damage over 4 seconds. Reveals cloaked and burrowed units.</td>
                        <td>0 seconds</td>
                        <td>75</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/stukov/fungalgrowth.png" alt="Fungal Growth"></td>
                        <td>Fungal Growth</td>
                        <td>Allows Brood Queens to immobilize enemy units and deal 80 damage to them over 4 seconds, and reveal them if they are cloaked or burrowed.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/stukov/enhancedmitochondria.png" alt="Enhanced Mitochondria"></td>
                        <td>Enhanced Mitochondria</td>
                        <td>Increases the Brood Queen's energy regeneration rate by 100%. Brood Queens spawn with full energy.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Stukov. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        15 Overlord<br>
        15 Refinery<br>
        19 Command Center at Rocks<br>
        21 Refinery<br>
        21 Anaerobic Enhancement<br>
        22 Engineering Bay<br>
        22 Overlord<br>
        24 Broodling Gestation<br>
        25 Barracks
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Stukov players is to opt for a Barracks-based build. While for most intents and purposes this is fine, this strategy may fail on missions which last much longer than the average game time. These situations may arise on some mutators. With a long game time, a Barrack's based Stukov player may run out of minerals as their Infested army is not persistent.</p>
    <p>A better build is to go for a Bunker-based build, which spawns free Infested units. The Bunker build is superior to the Barracks build, even on regular missions, due to the higher strength of the Bunker, and its ability to regenerate health. Additionally, the infested troopers inside the Bunkers do not have timed life until they are removed from the Bunker.</p>
    <h3>The Infested Colonist Compound</h3>
    <p>The Infested Colonist Compound provides some of the most powerful upgrades and makes up the core of Stukov's army. Every 60 seconds, the Compound creates a wave of Infested Civilians based on its level. The Civilians start off in eggs, and take 30 seconds to hatch.</p>
    <p>The Infested Colonist Compound infestation level is persistent. That is, if it is destroyed, it will keep its level when rebuilt.</p>
    <table>
        <thead>
            <tr>
                <th>Level</th>
                <th>Eggs</th>
                <th>Requirements</th>
                <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_zerg.png" alt="Gas"></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>8</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>1</td>
                <td>16</td>
                <td>Infested Barracks</td>
                <td>200/0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>32</td>
                <td>Infested Engineering Bay</td>
                <td>300/100</td>
            </tr>
            <tr>
                <td>3</td>
                <td>64</td>
                <td>Infested Armory</td>
                <td>400/200</td>
            </tr>
        </tbody>
    </table>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>When using Siege Tanks, ensure you place your Psi Emitter near the Siege tanks if they are not near Bunkers.</li>
        <li>Infested Bunkers are structures when rooted and units when uprooted. Root and uproot your Bunkers to effectively counter units (e.g rooted Bunkers vs. Widow Mines and uprooted Bunkers vs. Reapers).</li>
        <li>Before pushing into an enemy base, root a Bunker, cast Infest Structure on it, then unroot it and move it forward. The Infest Structure will heal the Bunker.</li>
        <li>When a Bunker is at low HP, unload it to reduce its aggro rating, providing it a way to escape without dying.</li>
        <li>The Acidic Enzymes upgrade (available at the Factory's Tech Lab) affects Volatile Infested, which happen to be fired from the Siege Tanks. Therefore, buying this upgrade will also affect the Volatile Infested spawned from the compound.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
