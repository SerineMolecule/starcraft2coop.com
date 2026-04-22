<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Vorazun</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Vorazun">
  <meta name="keywords" content="Starcraft co-op guides vorazun commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.3">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/vorazun">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/vorazun.png);
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
    <h1>Co-op Commander Guide: Vorazun</h1>
    <p id="commanderMotto">Matriarch of the Nerazim</p>
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
    <p>Vorazun uses the power of cloaked units to wreak havoc around the battlefield, combined with a powerful ability to stop time.</p>
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
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_01.png" alt = "Shroud of Adun"></td>
                <td>Shroud of Adun</td>
                <td>
                    Vorazun's Dark Templar have improved shields and cost less vespene gas.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_02.png" alt = "Spear of Adun: Orbital Assimilators"></td>
                <td>Spear of Adun: Orbital Assimilators</td>
                <td>
                    The Spear of Adun harvests vespene gas from orbit without the need for Probes.<br><br>Passive ability.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_03.png" alt = "Shadow Legion"></td>
                <td>Shadow Legion</td>
                <td>
                   Increases the number of Vorazun's Shadow Guard from 2 to 4. This ability is located in the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_04.png" alt = "Twilight Council Upgrade Cache"></td>
                <td>Twilight Council Upgrade Cache</td>
                <td>
                    Upgrades Vorazun's Zealots to Centurions.<br><br>New research available on the Twilight Council:
                    <ul>
                        <li>Centurions are briefly cloaked and can pass through other units when charging.</li>
                        <li>Allows Centurions to stun nearby enemies.</li>
                        <li>Allows the Stalker's Blink to cloak and restore shields over time.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_05.png" alt = "New Unit: Dark Archon"></td>
                <td>New Unit: Dark Archon</td>
                <td>
                    Unlocks the ability to warp in Dark Archons from the Gateway.<br><br>Powerful attack caster. Can use the Confuse and Mind Control abilities.<br><br>Can attack ground and air units.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_06.png" alt = "Dark Templar Upgrade Cache"></td>
                <td>Dark Templar Upgrade Cache</td>
                <td>
                    New research available on the Dark Shrine:
                    <ul>
                        <li>Enables Dark Templar to teleport to nearby locations.</li>
                        <li>Grants Dark Templar the ability to disable units, preventing them from attacking or being attacked for 10 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_07.png" alt = "Veil of Shadows"></td>
                <td>Veil of Shadows</td>
                <td>
                    Increases the shield regeneration rate of friendly cloaked units by 400%.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_08.png" alt = "Spear of Adun: Event Horizon"></td>
                <td>Spear of Adun: Event Horizon</td>
                <td>
                    Negates all armor of enemy units affected by the Black Hole ability. This ability is located in the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_09.png" alt = "Dark Archon Upgrade Cache"></td>
                <td>Dark Archon Upgrade Cache</td>
                <td>
                    New research available on the Dark Shrine:
                    <ul>
                        <li>Dark Archons start with full energy.</li>
                        <li>Allows a Dark Archon to take control of a targeted unit permanently.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_10.png" alt = "Spear of Adun: Time Stop"></td>
                <td>Spear of Adun: Time Stop</td>
                <td>
                    Unlocks the Time Stop ability which freezes all enemies in place for 20 seconds. This ability is located in the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_11.png" alt = "Dark Pylon: Recall"></td>
                <td>Dark Pylon: Recall</td>
                <td>
                    Unlocks the ability for Dark Pylons to Recall friendly units to their location.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_12.png" alt = "Fleet Beacon Upgrade Cache"></td>
                <td>Fleet Beacon Upgrade Cache</td>
                <td>
                    New research available on the Fleet Beacon:
                    <ul>
                        <li>Permanently cloaks all Corsairs and Oracles.</li>
                        <li>Increases the range of the Void Ray's weapon as it continues to attack.</li>
                        <li>Enemies affected by the Oracle's Stasis Ward can now be attacked.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_13.png" alt = "Spear of Adun: Emergency Recall"></td>
                <td>Spear of Adun: Emergency Recall</td>
                <td>
                    Upon taking fatal damage, friendly cloaked or burrowed units are recalled to their owner's primary structure. This effect cannot occur more than once every 4 minutes.<br><br>Passive ability.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_14.png" alt = "Spear of Adun: Chronomancy"></td>
                <td>Spear of Adun: Chronomancy</td>
                <td>
                    Reduces the cooldown of Time Stop from 5 minutes to 4 minutes. This ability is located in the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/vorazun/vorazun_15.png" alt = "Strike from the Shadows"></td>
                <td>Strike from the Shadows</td>
                <td>
                    Increases the weapon damage of friendly cloaked or burrowed units by 15%. Increases the energy regeneration of friendly cloaked or burrowed units by 50%.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Vorazun are:</p>
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
                <td><img src="/images/commanderdata/achievements/vorazun/eventhorizon.jpg" alt="Event Horizon"></td>
                <td>Event Horizon</td>
                <td>Kill 15 units trapped in a single Black Hole on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/vorazun/myturn.jpg" alt="My Turn"></td>
                <td>My Turn</td>
                <td>Kill 5,000 enemy units with Vorazun's cloaked units in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/vorazun/shadowguard.jpg" alt="Shadow Guard"></td>
                <td>Shadow Guard</td>
                <td>Kill 50 units with Vorazun's Shadow Guard in a single mission on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/vorazun/yourturn.jpg" alt="Your Turn"></td>
                <td>Your Turn</td>
                <td>Your ally kills 1,000 units while Vorazun's Spear of Adun Time Stop is activated in Co-op Missions.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Vorazun, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/vorazun/deploydarkpylon.png" alt = "Deploy Dark Pylon"></td>
                <td>Deploy Dark Pylon</td>
                <td>Warps in a Dark Pylon granting supply and power. Dark Pylons also cloak nearby friendly units and structures. Friendly cloaked units deal 15% more attack damage and 50% increased energy regeneration.</td>
                <td>
                    <ul>
                        <li>At the start of the game, warp in your first Dark Pylon to save you from building one for power and supply.</li>
                        <li>Any other Pylons should only be warped in at strategic locations.</li>
                        <li>Use your Dark Pylon's Recall ability to move efficiently around the map.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 60 seconds</li>
                        <li>Energy Required: 25</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/vorazun/blackhole.png" alt = "Black Hole"></td>
                <td>Black Hole</td>
                <td>Creates a Black Hole that pulls in and stuns enemy units. Lasts 8 seconds.</td>
                <td>
                    <ul>
                        <li>Use this with Corsairs to deal with armored air units.</li>
                        <li>A good placement of a Black Hole will allow you to deal with attack waves without losing any units.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 0 seconds</li>
                        <li>Energy Required: 25</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/vorazun/deployshadowguard.png" alt = "Deploy Shadow Guard"></td>
                <td>Deploy Shadow Guard</td>
                <td>Deploys 4 elite Dark Templar at the target location that last for 60 seconds.</td>
                <td>
                    <ul>
                        <li>The first Shadow Guard should be used to clear out your expansion.</li>
                        <li>Make use of their Blink ability to move them quickly from one location to another, in addition to any Dark Pylons you have out.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Cooldown: 180 seconds</li>
                        <li>Energy Required: 50</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/vorazun/timestop.png" alt = "Time Stop"></td>
                <td>Time Stop</td>
                <td>Alters space-time, freezing all enemies in place for 20 seconds. Unlimited range.</td>
                <td>
                    <ul>
                        <li>One of the most powerful calldowns in the game.</li>
                        <li>This should be used as soon as it is off cooldown, so make sure you are ready to push.</li>
                        <li>Push into heavily fortified bases and use this as soon as enemy units start attacking you.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 240 seconds</li>
                        <li>Cooldown: 240 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>The Deploy Dark Pylon ability brings a Dark Pylon onto the battlefield. This structure has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/vorazun/darkpylon.jpg" alt="Dark Pylon">
            <p>Dark Pylon</p>
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
                    <tr>
                        <td><img src="/images/commanderdata/abilities/vorazun/recall.png" alt="Recall"></td>
                        <td>Recall</td>
                        <td>Teleports all friendly units in the target area to the location of the Dark Pylon.</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>The Deploy Shadow Guard ability brings Shadow Guards onto the battlefield. These units have abilities themselves, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/vorazun/shadowguard.jpg" alt="Shadow Guard">
            <p>Shadow Guard</p>
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
                        <td><img src="/images/commanderdata/abilities/vorazun/shadowfury.png" alt="Shadow Fury"></td>
                        <td>Shadow Fury</td>
                        <td>Jump from target to target, dealing 20 (+15 vs. Light) damage with each jump. Hits 5 times.</td>
                        <td>15 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/vorazun/dtblink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Teleport to a nearby target location.</td>
                        <td>10 seconds</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/vorazun/voidstasis.png" alt="Void Stasis"></td>
                        <td>Void Stasis</td>
                        <td>Places target unit or structure in stasis for 10 seconds, disabling the unit for the duration of the effect. Units and structures in stasis cannot be attacked or affected by abilities.<br><br>Can target structures or ground units.</td>
                        <td>15 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Moderate</p>
    <p>As Vorazun's Corsairs can't cloak during early levels and Black Hole does not negate armor, build Dark Templars and Stalkers as your core army composition. Stalkers can deal with air units fairly well, especially when they have their Blink upgrades which can regenerate their shields rapidly. Due to the lack of Emergency Recall during early stages of leveling, use Black Holes liberally to ensure you do not lose Dark Templars.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 3's Spear of Adun Energy mastery until you hit the desired number of points, before allocating them to Chrono Boost efficiency.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Vorazun with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Dark Pylon Range</td>
                <td>2% per point<br>60% maximum</td>
                <td>0</td>
                <td rowspan="2">Dark Pylon range can be used if you intend on using Dark Pylons offensively with units that do not have cloak. For example, Void Rays can benefit from the general cloaking passives that Vorazun offers. By warping in a Dark pylon near your army, you'll be able to take advantage of those buffs, even if you use units that do not naturally have cloak.</td>
            </tr>
            <tr>
                <td>Black Hole Duration</td>
                <td>2% per point<br>60% maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Black Hole Duration is a better mastery as it gives your units more time to deal with enemies.</p>
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
                <td>Shadow Guard Duration</td>
                <td>2 sec per point<br>60 sec maximum</td>
                <td>30</td>
                <td rowspan="2">Additional points into Shadow Guard Duration increases up time of the Shadowguard to allow for clearing of the expansion as well as dealing with early game attack waves. It provides Vorazun with an early-game pushing capability. However, they will be sacrificing Time Stop movement speed increases which will allow them to take out more high-priority targets.</td>
            </tr>
            <tr>
                <td>Time Stop Unit Speed Increase</td>
                <td>1% per point<br>30% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Shadow Guard is generally a more versatile pick, as it provides Vorazun with a way of handling the early game. However, it does mean that Time Stop cannot be used as effectively to snipe targets.</p>
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
                <td rowspan="2">Points may be taken out of the Initial Spear of Adun energy mastery for the Chrono Boost mastery. However, this will sacrifice a player's early-game pushing potential.</td>
            </tr>
            <tr>
                <td>Initial and Maximum Spear of Adun Energy</td>
                <td>3 per point<br>90 maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">A full 30 points into the initial energy will provide Vorazun players with the early-game pushing potential they require while they build up army and compounds very well with 30 points into the Shadow Guard duration mastery above. The Shadow Guard will need to be microed more carefully to take advantage of their full timer, but as a result, can solve Vorazun's Early game problems.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Vorazun. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Spirit of Respite</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Emergency Recall recalls cloaked units to the closest Nexus or Dark Pylon instead of the primary structure and heals life and shields to full.</li>
                        <li>Deploy Dark Pylon cooldown and cost reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Dark Pylons lose Recall.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>13</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige sacrifices Vorazun's mobility but allows her to quickly bring back recalled units onto the battlefield. The lack of mobility can be solved partially by being aware of mission timings. Another advantage of this prestige is it helps when playing against the Black Death <a href="/resources/mutators">mutator</a> well by keeping infected units away from your mineral line. This prestige should be played while leveling Vorazun up to level 11, as it has no disadvantage.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Withering Siphon</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Void Stasis, Confusion, Stasis Ward, Disruption Web, and Darkcoil may affect Heroic units and cause enemies to lose 20 life per second. This effect cannot kill.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Combat units deal 25% reduced damage.</li>
                        <li>Stasis Ward duration reduced by 75%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>DoT effects do not stack</li>
                        <li>Only way to deal DoT damage to air units is using Confusion</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>6</td>
            </tr>
            <tr>
                <th>Advice</th><td>The fact that this prestige does not kill severely limits its potential utility. Additionally, the reduction of the Stasis Ward duration further reduces the effectiveness of this Prestige, since Stasis Ward with Stasis Calibration is a very powerful tool in Vorazun's kit for dealing with attack waves and other difficult situations.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Keeper of Shadows</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Time Stop becomes targeted. All Shadow Guard who have died are resurrected at the target location.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Shadow Guard duration reduced by 40%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Shadow Guard duration Mastery applied first, then duration reduced by 40%</li>
                        <li>Shadow Guards do not need to be killed. Expired (despawned) Shadow Guards will also spawn</li>
                        <li>Time Stop is still a global effect. Target location is where Shadow Guards spawn</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>10</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige allows Time Stop to get more powerful as the player utilizes their Shadow Guard calldowns. However, the duration reduction of the Shadow Guards will mean that the player will need to clearly know how to utilize them effectively, even while using the Shadow Guard duration mastery.</td>
            </tr>
        </tbody>
    </table>
    <p>Both Spirit of Respite and Keeper of Shadows are solid picks for general Vorazun-play, and will come down to the player's preferred playstyle. However, playing Vorazun without a Prestige Talent selected also works fine.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Vorazun is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army"src="/images/commanderdata/units/vorazun/darktemplar.jpg" alt="Dark Templar"><img class="army"src="/images/commanderdata/units/vorazun/corsair.jpg" alt="Corsair">
    <p>Dark Templar/Corsair builds can handle anything that is thrown at them. The ratio of Dark Templars to Corsairs will depend on the enemy composition you are facing.</p>
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
    <p>For more information on Vorazun's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Vorazun's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/centurion.jpg" alt="Centurion">
            <p>Centurion</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Their role as a melee ground unit is overshadowed by the effectiveness of Dark Templars.</li>
                <li>Generally not worth making, even as a mineral dump.</li>
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
                        <td><img src="/images/commanderdata/unitskills/vorazun/shadowcharge.png" alt="Shadow Charge"></td>
                        <td>Shadow Charge</td>
                        <td>Intercepts nearby enemies and increases the Centurion's movement speed. Ability can only be used once every 10 seconds.<br><br>Briefly cloaks the Centurion and allows it to move through other units.</td>
                        <td>10 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable autocast">
                        <td><img src="/images/commanderdata/unitskills/vorazun/darkcoil.png" alt="Darkcoil"></td>
                        <td>Darkcoil</td>
                        <td>Stuns nearby enemy ground units for 2.5 seconds. Also temporarily grants the Centurion 100 additional shields for 2 seconds.<br><br>Massive units are slowed.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/shadowcharge.png" alt="Shadow Charge"></td>
                        <td>Shadow Charge</td>
                        <td>Allows Centurions to intercept nearby enemies. Also increases their movement speed by 0.25.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/darkcoil.png" alt="Darkcoil"></td>
                        <td>Darkcoil</td>
                        <td>Allows Centurions to stun nearby enemy ground units and increases their shields by 100 for a short duration.<br><br>Massive units are slowed.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/stalker.jpg" alt="Stalker">
            <p>Stalker</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful alternative for anti-air.</li>
                <li>They are worth making on maps with low amounts of air.</li>
                <li>Helpful for dealing with early-game threats.</li>
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
                        <td><img src="/images/commanderdata/unitskills/vorazun/blink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Teleports the Stalker to a nearby target location. Ability can only be used once every 8 seconds.</td>
                        <td>8 seconds</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/blink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Allows Stalkers to teleport to a nearby target location.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/phasereactor.png" alt="Phase Reactor"></td>
                        <td>Phase Reactor</td>
                        <td>Blink now cloaks the Stalker and restores 80 shields over 5 seconds.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/darktemplar.jpg" alt="Dark Templar">
            <p>Dark Templar</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should be the core of your army on most maps.</li>
                <li>Extremely powerful with the "Blink" and the "Shadow Fury" Upgrades.</li>
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
                        <td><img src="/images/commanderdata/unitskills/vorazun/shadowfury.png" alt="Shadow Fury"></td>
                        <td>Shadow Fury</td>
                        <td>Jump from target to target, dealing 20 (+15 vs. Light) damage with each jump. Hits 5 times.</td>
                        <td>15 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/vorazun/dtblink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Teleport to a nearby target location.</td>
                        <td>10 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable autocast">
                        <td><img src="/images/commanderdata/unitskills/vorazun/voidstasis.png" alt="Void Stasis"></td>
                        <td>Void Stasis</td>
                        <td>Places target unit or structure in stasis for 10 seconds, disabling the unit for the duration of the effect. Units and structures in stasis cannot be attacked or affected by abilities.<br><br>Can target structures or ground units.</td>
                        <td>15 seconds</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/shadowfury.png" alt="Shadow Fury"></td>
                        <td>Shadow Fury</td>
                        <td>Allows Dark Templar to jump from target to target, dealing 20 (+15 vs. Light) damage with each jump. Hits 5 times.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/dtblink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Enables Dark Templar to teleport to nearby locations.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/voidstasis.png" alt="Void Stasis"></td>
                        <td>Void Stasis</td>
                        <td>Grants Dark Templar an ability to phase a target unit or structure out of existence for 10 seconds. This disables it entirely and prevents it from being attacked by units or abilities.<br><br>Can target structures or ground units.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/darkarchon.jpg" alt="Dark Archon">
            <p>Dark Archon</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Extremely expensive unit.</li>
                <li>Draws a lot of aggro due to its powerful abilities.</li>
                <li>Looks good in theory, but in practice, not very effective due to high energy costs.</li>
                <li>Useful for dealing with Baneling attack waves by casting Confusion on the wave.</li>
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
                        <td><img src="/images/commanderdata/unitskills/vorazun/confusion.png" alt="Confusion"></td>
                        <td>Confusion</td>
                        <td>Forces enemy units in the target area to attack each other for 10 seconds.<br><br>Heroic units are immune.</td>
                        <td>8 seconds</td>
                        <td>50</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/vorazun/mindcontrol.png" alt="Mind Control"></td>
                        <td>Mind Control</td>
                        <td>Permanently takes control of a target enemy unit.<br><br>Heroic units are immune.</td>
                        <td>30 seconds</td>
                        <td>150</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/arguscrystal.png" alt="Argus Crystal"></td>
                        <td>Argus Crystal</td>
                        <td>Dark Archons start with full energy.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/mindcontrol.png" alt="Mind Control"></td>
                        <td>Mind Control</td>
                        <td>Allows a Dark Archon to take control of a targeted unit permanently.<br><br>Heroic units are immune.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/corsair.jpg" alt="Corsair">
            <p>Corsair</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Anti-air unit.</li>
                <li>Extremely powerful when upgraded and used with Black Hole.</li>
                <li>"Disruption Web" is a must-have.</li>
                <li>Ensure you disable Disruption Web's auto-cast so that multiple Corsairs don't cast it on a single area.</li>
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
                        <td><img src="/images/commanderdata/unitskills/vorazun/disruptionweb.png" alt="Disruption Web"></td>
                        <td>Disruption Web</td>
                        <td>Creates a web of energy on the ground that prevents enemy structures and ground units from attacking for 10 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/disruptionweb.png" alt="Disruption Web"></td>
                        <td>Disruption Web</td>
                        <td>Grants Corsairs the ability to create a web of energy on the ground that prevents enemy structures and ground units from attacking for 10 seconds.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/stealthdrive.png" alt="Stealth Drive"></td>
                        <td>Stealth Drive</td>
                        <td>Permanently cloaks all Corsairs and Oracles.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/voidray.jpg" alt="Void Ray">
            <p>Void Ray</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Heavily affected by the armor rating of its target.</li>
                <li>Great on missions like <a href="/missions/minerevacuation">Miner Evacuation</a> due to their Hitscan attack, sustain potential and low infested anti-air capabilities.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/prismaticrange.png" alt="Prismatic Range"></td>
                        <td>Prismatic Range</td>
                        <td>Increases the range (up to 3 increase) of the Void Ray's weapon as it continues to attack.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/vorazun/oracle.jpg" alt="Oracle">
            <p>Oracle</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Key detection for Vorazun.</li>
                <li>Pulsar beam can be used aggressively to increase damage output of your entire army.</li>
                <li>Stasis Ward can be used to stall attack waves.</li>
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
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/vorazun/pulsarbeam.png" alt="Pulsar Beam"></td>
                        <td>Pulsar Beam</td>
                        <td>Charges the Oracle's Pulsar Beam and allows it to attack enemy ground units.<br><br>Drains 1.4 energy per second.</td>
                        <td>4 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/vorazun/stasisward.png" alt="Stasis Ward"></td>
                        <td>Stasis Ward</td>
                        <td>Places a cloaked Stasis Ward at the target location. Once activated by an enemy ground unit, the ward traps nearby enemies in stasis for 15 seconds. Trapped units cannot be attacked or affected by abilities.</td>
                        <td>0 seconds</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/stealthdrive.png" alt="Stealth Drive"></td>
                        <td>Stealth Drive</td>
                        <td>Permanently cloaks all Corsairs and Oracles.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/vorazun/stasiscalibration.png" alt="Stasis Calibration"></td>
                        <td>Stasis Calibration</td>
                        <td>Enemies affected by the Oracle's Stasis Ward can now be attacked.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Vorazun. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        13 Dark Pylon<br>
        15 Assimilator<br>
        16 Assimilator<br>
        18 Gateway<br>
        19 Pylon<br>
        22 Change Rally to Expansion<br>
        23 Cybernetics Core<br>
        27 Shadowguard -> Gas -> Main<br>
        28 Twilight + Warp Gate<br>
        29 Assimilators + Nexus
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Vorazun players is to go for a mass Void Ray build. While Void Rays are powerful, they are slow and expensive to make, often putting the player behind for the rest of the game.</p>
    <p>Dark Templars, combined with Corsairs are much more powerful and can be massed up much more quickly, due to the reduced gas costs of those units. Combined, they can handle most compositions effectively.</p>
    <h3>Time Stop Effects</h3>
    <p>Due to internal workings of map files and due to how Time Stop works in terms of mission triggers, Time Stop behaves slightly differently depending on the map with regards to the main objective and attack wave timings. The table below lists out how Time Stop behaves on every map. A "delayed" entry denotes a delay of 20s (the duration of Time Stop).</p>
    <table class="">
        <thead>
            <tr>
                <th>Mission</th>
                <th>Attack Waves</th>
                <th>Main Objective</th>
                <th>Other Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                <td>Delayed</td>
                <td>Hybrid waves delayed</td>
                <td>Ji'Nara can be pushed</td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td>No delay</td>
                <td>Mission timer delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/deadofnight">Dead of Night</a></td>
                <td>N/A</td>
                <td>Mission timer delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/lockload">Lock & Load</a></td>
                <td>Delayed</td>
                <td>Lock overload delayed</td>
                <td>AI will start to aggressively push locks</td>
            </tr>
            <tr>
                <td><a href="/missions/malwarfare">Malwarfare</a></td>
                <td>N/A</td>
                <td>Terminal purification delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td>Delayed</td>
                <td>Ship launch delayed</td>
                <td>Delays Panic Launch times</td>
            </tr>
            <tr>
                <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                <td>No delay</td>
                <td>No impact on Harvesters</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                <td>No delay</td>
                <td>Train spawns delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/partparcel">Part & Parcel</a></td>
                <td>No delay</td>
                <td>No mission timer delay</td>
                <td>Parts cannot be picked up during Time Stop</td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td>No delay</td>
                <td>Mission timer delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                <td>No delay</td>
                <td>No mission timer delay</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td>No delay</td>
                <td>No change to mission time</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td>No delay</td>
                <td>Mission timer delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/voidlaunch">Void Launch</a></td>
                <td>Delayed</td>
                <td>Shuttle spawns delayed</td>
                <td>-</td>
            </tr>
            <tr>
                <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                <td>Delayed</td>
                <td>Void Thrasher spawns delayed</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>At the start of the game, use your initial Spear of Adun energy to place a Dark Pylon to give you supply and power.</li>
        <li>Your first Shadow Guard should be used to clear your expansion (and if possible, your ally's expansion).</li>
        <li>Most of your Spear of Adun energy should go into using Black Holes. Dark Pylons should only be placed at strategic locations.</li>
        <li>Use your Dark Pylons for mobility by using its Recall ability.</li>
        <li>Cloaked units that take fatal damage will respawn at your Nexus. Make sure you rally them accordingly.</li>
        <li>Stasis Wards can be used to chain-stasis enemies by placing a ward underneath already-stasis'ed enemies. Use this to handle high-HP targets and difficult <a href="/resources/mutators">Mutators</a>.</li>
        <li>In the early game, focus on Air attack upgrades over ground attack upgrades, as Dark Templars will be dealing most of their damage through Shadow Fury, which does not get affected by Ground attack upgrades. Additionally, Corsairs need these upgrades in order to kill enemy units.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
