<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Raynor</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Raynor">
  <meta name="keywords" content="Starcraft co-op guides raynor commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.2">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/raynor">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/raynor.png);
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
    <h1>Co-op Commander Guide: Raynor</h1>
    <p id="commanderMotto">Renegade Commander</p>
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
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Raynor overwhelms enemies by using his Orbital Drop Pods to quickly reinforce his armies on the battlefield.</p>
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
                <td><img src="/images/commanderdata/progression/raynor/raynor_01.png" alt = "Rapid Recruitment"></td>
                <td>Rapid Recruitment</td>
                <td>
                    Raynor trains combat units and builds Barracks 50% faster.<br>Mechanical units cost 20% less gas.<br>Stimpack grants increase bonuses, costs less life, and does not require research.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/raynor/raynor_02.png" alt = "Banshee Airstrike"></td>
                <td>Banshee Airstrike</td>
                <td>
                    Unlocks the ability to call down cloaked Dusk Wings with timed life, dealing damage to the target area upon arrival. Call down Banshee Airstrike from the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_03.png" alt = "Nano Projectors"></td>
                <td>Nano Projectors</td>
                <td>
                   Increases the Firebat attack range and Medic heal range from 2 to 4.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_04.png" alt = "Infantry Upgrade Cache"></td>
                <td>Infantry Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Barracks Tech Lab:
                    <ul>
                        <li>Widen Firebats' damage radius by 40%.</li>
                        <li>Increase Firebats' life from 100 to 200 and armor from 1 to 3.</li>
                        <li>Increase Medics' healing speed, allow them to heal mechanical units, and reduce the damage taken by units they heal.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_05.png" alt = "Hyperion: Point Defense Drone"></td>
                <td>Hyperion: Point Defense Drone</td>
                <td>
                    Enables the Hyperion to deploy defensive drones that shoots down enemy missiles. Call down the Hyperion from the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_06.png" alt = "New Unit: Battlecruiser"></td>
                <td>New Unit: Battlecruiser</td>
                <td>
                    Powerful warship. Can use Yamato Cannon and Tactical Jump. Built at the Starport.<br><br>Can attack ground and air units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_07.png" alt = "Battle Bunkers"></td>
                <td>Battle Bunkers</td>
                <td>
                    Equips bunkers with automated turrets that attack ground and air units. Increases the life of bunkers from 400 to 550.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/raynor/raynor_08.png" alt = "Orbital Drop Pods"></td>
                <td>Orbital Drop Pods</td>
                <td>
                    Barracks, Factory, and Starport units are delivered directly to the structure's Rally Point
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_09.png" alt = "Factory Upgrade Cache"></td>
                <td>Factory Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Factory Tech Lab:
                    <ul>
                        <li>Increase the blast and trigger radius of the Vulture's Spider Mine by 33%.</li>
                        <li>Reduce Siege Tanks' transformation time and increase their armor in Siege Mode from 1 to 3.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/raynor/raynor_10.png" alt = "Vanadium Plating"></td>
                <td>Vanadium Plating</td>
                <td>
                    Armor upgrades at the Armory and Engineering Bay increase the life of affected units (by 10%) in addition to increasing their armor.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_11.png" alt = "Armory Upgrade Cache"></td>
                <td>Armory Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Armory:
                    <ul>
                        <li>Increase the attack range of all vehicles and ships by 1.</li>
                        <li>Allow all vehicles and ships to increase their movement speed by 100% for 8 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/raynor/raynor_12.png" alt = "Orbital Depots"></td>
                <td>Orbital Depots</td>
                <td>
                    Allows SCVs to instantly deploy Supply Depots from orbit, eliminating their construction time.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_13.png" alt = "Starport Upgrade Cache"></td>
                <td>Starport Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Starport Tech Lab:
                    <ul>
                        <li>Upgrade the Banshee's attacks to fire missiles in a straight line.</li>
                        <li>Upgrade the Vikings' missile attacks to deal area damage.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/raynor/raynor_14.png" alt = "Hyperion: Advanced Targeting Systems"></td>
                <td>Hyperion: Advanced Targeting Systems</td>
                <td>
                    Increases the damage dealt by friendly units near the Hyperion by 2. Call down the Hyperion from the top panel.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/raynor/raynor_15.png" alt = "Mercenary Munitions"></td>
                <td>Mercenary Munitions</td>
                <td>
                    Increases the attack speed of Raynor's combat units and calldowns by 15%.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Raynor are:</p>
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
                <td><img src="/images/commanderdata/achievements/raynor/feelsgoodman.jpg" alt="Feels Good, Man"></td>
                <td>Feels Good, Man</td>
                <td>Heal 10,000 life on allied units in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/raynor/hyperactive.jpg" alt="Hyperactive"></td>
                <td>Hyperactive</td>
                <td>Kill 25 units with a single Hyperion calldown on Hard difficulty with Raynor.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/raynor/hyperionalert.jpg" alt="Hyperion Alert"></td>
                <td>Hyperion Alert</td>
                <td>Kill 500 units with Raynor's Hyperion in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/raynor/thethunder.jpg" alt="The Thunder"></td>
                <td>The Thunder</td>
                <td>Kill 25 units with a single Air-Strike on Hard difficulty.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Raynor, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/raynor/bansheeairstrike.png" alt = "Banshee Airstrike"></td>
                <td>Banshee Airstrike</td>
                <td>Calls down 5 cloaked Dusk Wings, dealing 50 damage to enemies in the drop zone. Dusk Wings are controllable and will fight for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Should be used as soon as it is off cooldown. With mastery points, Dusk Wings can be present on the map about 50% of the time.</li>
                        <li>Useful for dealing with ground-based attack waves, and before pushing into enemy bases.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 240 seconds</li>
                        <li>Cooldown: 240 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/raynor/hyperion.png" alt = "Hyperion"></td>
                <td>Hyperion</td>
                <td>Calls down the Hyperion Battlecruiser. The Hyperion is controllable and will fight for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Useful for pushing into heavily guarded enemy bases.</li>
                        <li>Use Yamato Cannon to take out key units. Leave the rest of the units for your army to clean up.</li>
                        <li>Once key units are taken out, Hyperjump to another location and repeat the process.</li>
                        <li>Deploy Point Defense Drones in strategic locations to not only protect the Hyperion, but also your army when it comes in to clear.</li>
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
    <p>The Hyperion ability brings a Hyperion onto the battlefield. This unit has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/raynor/hyperion.jpg" alt="Hyperion">
            <p>Hyperion</p>
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
                        <td><img src="/images/commanderdata/abilities/raynor/hyperjump.png" alt="Hyperjump"></td>
                        <td>Hyperjump</td>
                        <td>Hyperjump to the targeted location.</td>
                        <td>15 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/raynor/yamatocannon.png" alt="Yamato Cannon"></td>
                        <td>Yamato Cannon</td>
                        <td>Blasts a unit with a devastating plasma cannon, dealing 600 damage to it and nearby enemies.</td>
                        <td>15 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/raynor/pointdefensedrone.png" alt="Pont Defense Drone"></td>
                        <td>Point Defense Drone</td>
                        <td>Uses a laser to shoot down enemy missiles.<br>Cannot target special attacks.<br>Times out after 180 seconds.<br><br>Each shot consumes 10 energy. (4 charges max)</td>
                        <td>5 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Moderate</p>
    <p>Raynor plays the same way he does at Ascension levels when he is at lower levels. The only difference is that he is a lot slower, due to Supply Depots having a build time, as well as units not being able to be deployed directly onto the battlefield. Because of the latter, ensure the path between your army and your production is cleared to prevent your army units from being intercepted by enemy units.</p>
    <p>While leveling through Mastery levels, allocate points with an equal split on Power Set 1.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Raynor with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encouraged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Research Resource Cost</td>
                <td>-2% per point<br>-60% maximum</td>
                <td>15</td>
                <td rowspan="2">A careful balance is needed over here. Research cost reductions are great, but they are temporary. Once research is done, you won't be able to take advantage of the mastery. However, going for max unit speed can slow down getting research that significantly powers your army up.</td>
            </tr>
            <tr>
                <td>Speed Increases for Drop Pod Units</td>
                <td>2% per point<br>60% maximum</td>
                <td>15</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This depends a lot on the playstyle of the player. Research Cost Reduction can help with early game upgrades, while Speed Increases can make reinforcing units a lot more powerful.</p>
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
                <td>Hyperion Cooldown</td>
                <td>-4 sec per point<br>-120 sec maximum</td>
                <td>0</td>
                <td rowspan="2">For players that prefer to have the much more powerful Hyperion more available at their disposal, the Hyperion mastery can be selected. On certain mutators, it might be better to have it present rather than the Banshees that die quickly.</td>
            </tr>
            <tr>
                <td>Banshee Airstrike Cooldown</td>
                <td>-4 sec per point<br>-120 sec maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Banshee Airstrike Cooldown mastery is the better choice here. At maximum level, Banshees can be out on the battlefield for almost 50% of the mission time.</p>
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
                <td>Medics Heal Additional Target</td>
                <td>3% per point<br>90% maximum</td>
                <td>?</td>
                <td rowspan="2">This is purely a matter of what kind of build the player prefers to do. Medic heals don't really benefit Mechanical units greatly and thus, the mastery points are better spent on the Mech attack speed.</td>
            </tr>
            <tr>
                <td>Mech Attack Speed</td>
                <td>1% per point<br>30% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This depends on the playstyle. If going for a Mech build, the Mech Attack Speed is the better choice here. Otherwise, Medic Healing should be picked.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Raynor. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Backwater Marshal</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Biological combat units gain 100% increased life.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>MULEs are unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Stacks with Combat Shield</li>
                        <li>Stacks with Armor Upgrades</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige increases the ruggedness of Raynor's army. If you have good micro, you might find this prestige to be particularly valuable. However, its disadvantage is a big one. You lose the ability to spawn-camp effectively using Vultures due to the lack of potentially high mineral income from MULEs. Remember that you will still need Orbital Command Centers for detection. </td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Rough Rider</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Afterburners additionally increases attack speed by 100%. Cooldown reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Units no longer cost less.</li>
                        <li>Afterburners cost 10 life and its movement speed bonus reduced to 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>11</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige is essentially a Stim-for-Mechs prestige. It can be particularly useful when playing under constrained resources, while also playing a Bio+Mech build. You may even combine this with the Mech Attack Speed mastery to get even higher DPS output out of your Mech units.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Rebel Raider</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>The Starport, Armory and Orbital Command no longer have tech requirements.</li>
                        <li>The Starport no longer has a gas cost and its units cost 30% less gas</li>
                        <li>Vikings, Banshees and Battlecruisers increase top bar cooldown rates by 1% per supply used.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Combat units cost 50% more minerals.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Cooldown Reduction mastery is applied first, then prestige cooldown increase applied</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>6</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige is particularly useful if you prefer to use air units and rushing Battlecruisers. The lack of tech requirements combined with the gas cost reduction makes Battlecruiser rushing a viable strategy. you may even combine this with the Hyperion cooldown mastery to be able to spam Hyperions much more frequently.</td>
            </tr>
        </tbody>
    </table>
    <p>While Backwater Marshal can provide you with an overall army effectiveness increase, playing without a Prestige is generally better if you prefer Bio-style play, or Rough Rider if you prefer a Mech-style play.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Raynor is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/raynor/marine.jpg" alt="Marine"><img class="army" src="/images/commanderdata/units/raynor/marauder.jpg" alt="Marauder"><img class="army" src="/images/commanderdata/units/raynor/medic.jpg" alt="Medic">
    <p>The Marine/Marauder/Medic army composition is a solid army composition for Raynor. Damage is dealt through cheap units like Marines, with a few Marauders to soak up damage. Medics provide the healing as well as damage reduction.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/raynor/firebat.jpg" alt="Firebat"><div class="techAdd">+</div></div>
    <p>Add Firebats to the mix to provide extra splash damage (e.g. when dealing with Infested Units) or when you need to tank high amounts of damage (e.g. when dealing with Banelings).</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/raynor/vulture.jpg" alt="Vulture"><div class="techAdd">+</div></div>
    <p>Add Vultures when you have access to enemy attack wave spawn locations to spawn-camp waves that primarily consist of ground units.</p>
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
    <p>For more information on Raynor's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Raynor's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/marine.jpg" alt="Marine">
            <p>Marine</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should be the core of Raynor's army.</li>
                <li>Make them out of Reactor'ed Barracks.</li>
                <li>Extremely high DPS and versatile unit.</li>
                <li>Vulnerable to splash damage.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/stimpack.png" alt="Stimpack"></td>
                        <td>Stimpack</td>
                        <td>Injects the unit with powerful stimulants that greatly increase attack speed (by 75%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the unit's life.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/combatshield.png" alt="Combat Shield"></td>
                        <td>Combat Shield</td>
                        <td>Marines gain +10 life.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/marauder.jpg" alt="Marauder">
            <p>Marauder</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Have a few in your army to deal with melee and armored units.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/stimpack.png" alt="Stimpack"></td>
                        <td>Stimpack</td>
                        <td>Injects the unit with powerful stimulants that greatly increase attack speed (by 75%) and movement speed (by 50%) for 10 seconds. Injures the unit for 10 of the unit's life.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/concussiveshells.png" alt="Concussive Shells"></td>
                        <td>Concussive Shells</td>
                        <td>Upgrades the Marauder weapons to slow down opponents movement speed by 50% for 1.5 seconds.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/firebat.jpg" alt="Firebat">
            <p>Firebat</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful on infested maps due to splash damage.</li>
                <li>Can be used against Swarmy and MutaLing Zerg <a href="/guides/enemycomps">compositions</a>.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/stimpack.png" alt="Stimpack"></td>
                        <td>Stimpack</td>
                        <td>Injects the unit with powerful stimulants that greatly increase attack speed (by 75%) and movement speed (by 50%) for 10 seconds. Injures the unit for 10 of the unit's life.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/incineratorgauntlets.png" alt="Incinerator Gauntlets"></td>
                        <td>Incinerator Gauntlets</td>
                        <td>Widens the Firebat's damage radius by 40%.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/juggernautplating.png" alt="Juggernaut Plating"></td>
                        <td>Juggernaut Plating</td>
                        <td>Firebats gain +100 life and +2 armor.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/medic.jpg" alt="Medic">
            <p>Medic</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Must-have in your army, especially if going for a Bio-based build.</li>
                <li>Used to heal off the effects of Stim Pack as well as damage to your army.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/heal.png" alt="Heal"></td>
                        <td>Heal</td>
                        <td>Heals a friendly biological target.<br><br>Heals 9 life per 3 energy per second.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/stabilizermedpacks.png" alt="Stabilizer Medpacks"></td>
                        <td>Stabilizer Medpacks</td>
                        <td>Increases the Medic's healing speed to 12 life per 3 energy per second and allows them to heal mechanical units. Units being healed by Medics take 25% less damage.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/vulture.jpg" alt="Vulture">
            <p>Vulture</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful for spawn-camping enemy spawn points.</li>
                <li>Ensure you get the "Replenishable Magazine" upgrade to allow you to re-make Spider Mines.</li>
                <li>Can be used to take out ground-based unit objectives like the train on <a href="/missions/oblivionexpress">Oblivion Express</a>.</li>
                <li>Deals low DPS and is very fragile, so keep them away from your frontline.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/deployspidermine.png" alt="Deploy Spider Mine"></td>
                        <td>Deploy Spider Mine</td>
                        <td>Spider Mines pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy Detectors. (3 charges max).</td>
                        <td>0 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable autocast">
                        <td><img src="/images/commanderdata/unitskills/raynor/replenishspidermine.png" alt="Replenish Spider Mine"></td>
                        <td>Replenishable Magazine</td>
                        <td>Constructs a new Spider Mine to replace those used at a cost of 15 minerals each.<br><br>A Vulture can only carry 3 Spider Mines at a time.</td>
                        <td>6 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/raynor/igniteafterburners.png" alt="Ignite Afterburners"></td>
                        <td>Ignite Afterburners</td>
                        <td>Increases this unit's movement speed by 100% for 8 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/replenishablemagazine.png" alt="Replenishable Magazine"></td>
                        <td>Replenishable Magazine</td>
                        <td>Allows the Vulture to build additional Spider Mines to replace those used.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/cerberusmine.png" alt="Cerberus Mine"></td>
                        <td>Cerberus Mine</td>
                        <td>Increases the blast radius and trigger radius of the Vulture's Spider Mine by 33%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/afterburners.png" alt="Afterburners"></td>
                        <td>Afterburners</td>
                        <td>Vehicles and ships gain afterburners that increase the unit's movement speed by 100% for 8 seconds upon activation.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/siegetank.jpg" alt="Siege Tank">
            <p>Siege Tank</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Great defensive unit.</li>
                <li>Defend them with a strong Bio force or Spider Mines.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/igniteafterburners.png" alt="Ignite Afterburners"></td>
                        <td>Ignite Afterburners</td>
                        <td>Increases this unit's movement speed by 100% for 8 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/advancedsiegetech.png" alt="Advanced Siege Tech"></td>
                        <td>Advanced Siege Tech</td>
                        <td>Reduces the transformation time of Siege Tanks by 50%. Siege Tanks gain +3 armor in Siege Mode.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/afterburners.png" alt="Afterburners"></td>
                        <td>Afterburners</td>
                        <td>Vehicles and ships gain afterburners that increase the unit's movement speed by 100% for 8 seconds upon activation.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/viking.jpg" alt="Viking">
            <p>Viking</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Great for anti-air combat.</li>
                <li>"Ripwave Missiles" is a must-get against heavy air compositions.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/igniteafterburners.png" alt="Ignite Afterburners"></td>
                        <td>Ignite Afterburners</td>
                        <td>Increases this unit's movement speed by 100% for 8 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/phobosweaponssystem.png" alt="Phobos Weapons System"></td>
                        <td>Phobos Weapons System</td>
                        <td>Viking weapons system upgrade. Increases air attack range by 2 and ground attack range by 1.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/ripwavemissiles.png" alt="Ripwave Missiles"></td>
                        <td>Ripwave Missiles</td>
                        <td>Upgrades the Viking's missiles to deal area damage.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/afterburners.png" alt="Afterburners"></td>
                        <td>Afterburners</td>
                        <td>Vehicles and ships gain afterburners that increase the unit's movement speed by 100% for 8 seconds upon activation.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/banshee.jpg" alt="Banshee">
            <p>Banshee</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not worth making.</li>
                <li>Does great ground DPS, but very fragile.</li>
                <li>Can be used to complement ground forces.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/cloak.png" alt="Cloak"></td>
                        <td>Cloak</td>
                        <td>Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects. Cloaked Banshees also have their range increased by 2.<br><br>Drains 0.9 energy per second.</td>
                        <td>0 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/raynor/igniteafterburners.png" alt="Ignite Afterburners"></td>
                        <td>Ignite Afterburners</td>
                        <td>Increases this unit's movement speed by 100% for 8 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/cloakingfield.png" alt="Cloaking Field"></td>
                        <td>Cloaking Field</td>
                        <td>Enables Banshees to use the Cloak ability. Cloak renders the Banshee invisible to enemies unless the unit is revealed by detectors or effects.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/shockwavemissilebattery.png" alt="Shockwave Missile Battery"></td>
                        <td>Shockwave Missile Battery</td>
                        <td>Upgrades the Banshee's attack to fire multiple missile bursts in a straight line. Weapon attacks all targets in a straight line (2 range length) from the Banshee's primary target, dealing 12 weapon damage to all targets within 0.5 range of the line.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/afterburners.png" alt="Afterburners"></td>
                        <td>Afterburners</td>
                        <td>Vehicles and ships gain afterburners that increase the unit's movement speed by 100% for 8 seconds upon activation.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/raynor/battlecruiser.jpg" alt="Battlecruiser">
            <p>Battlecruiser</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful capital ship.</li>
                <li>High survivability and mobility with Tactical Jump.</li>
                <li>Extremely expensive.</li>
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
                        <td><img src="/images/commanderdata/unitskills/raynor/yamatocannon.png" alt="Yamato Cannon"></td>
                        <td>Yamato Cannon</td>
                        <td>Blasts a target with a devastating plasma cannon, causing 300 damage.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/raynor/tacticaljump.png" alt="Tactical Jump"></td>
                        <td>Tactical Jump</td>
                        <td>Warps to the target location. Battlecruiser is invulnerable while warping.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/raynor/igniteafterburners.png" alt="Ignite Afterburners"></td>
                        <td>Ignite Afterburners</td>
                        <td>Increases this unit's movement speed by 100% for 8 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/raynor/weaponrefit.png" alt="Weapon Refit"></td>
                        <td>Weapon Refit</td>
                        <td>Enables use of the Battlecruiser Yamato Cannon.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/advancedoptics.png" alt="Advanced Optics"></td>
                        <td>Advanced Optics</td>
                        <td>Increases the range of all vehicle and ship weapons by 1.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/raynor/afterburners.png" alt="Afterburners"></td>
                        <td>Afterburners</td>
                        <td>Vehicles and ships gain afterburners that increase the unit's movement speed by 100% for 8 seconds upon activation.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Raynor. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Supply Depot<br>
        16 Command Center at Rocks<br>
        19 Barracks<br>
        20 Orbital Command Upgrade<br>
        20 Command Center at Rocks<br>
        21 Orbital Command Upgrade<br>
        21 Refinery<br>
        22 Refinery<br>
        25 Command Center at Main
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A common trap for Raynor players is to try and rush Battlecruisers, given their strength, while either ignoring/using their calldowns inefficiently. This causes them to be extremely weak in the early game.</p>
    <p>In order to rush Battlecruisers, players must be familiar with their build order and ensure that they are able to macro up and build their economy. Additionally, they also need to use their calldowns as efficiently as possible (as these calldowns will be the sole damage output from them for a while). In the early phases of the game where only a few Battlecruisers are present, players will need to also actively micro them, to ensure they do not lose any unnecessarily.</p>
    <p>An additional note to make is that a player should focus on one type of build, and not hybridize their build unless they intend on playing a long game. This is because when doing a Hybrid build, the player's resources are stretched too thinly and can weaken their entire army. For longer games, players can choose to transition into higher tech units in order to deal with high tech attack waves, such as Reavers and Disruptors.</p>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Build at least 4 Orbital Command Centers and drop Mules to quickly boost your mineral income.</li>
        <li>Ensure you always have enough energy for Scans, as that will be where most of your detection comes from.</li>
        <li>It is recommended to have at least 5 Barracks in the game if doing a Bio-based build (2 Tech'ed, and 3 Reactor'ed).</li>
        <li>If doing a Bio-based build, spend any floating minerals on more Orbital Command Centers and Barracks. This will allow you to re-max your army almost instantly.</li>
        <li>Take advantage of your calldowns, especially during the early game as you attempt to ramp up.</li>
        <li>Armor upgrades are highly recommended with Raynor due to them being able to increase your units' HP.</li>
        <li>The Hyperion deals roughly 3x more damage while it is moving, at a cost of having a lower range, non-single target attack. Move-command the Hyperion to increase its damage. This is demonstrated in the video below:
        <iframe width="475" height="268" src="https://www.youtube.com/embed/Bp2cYMuxoPo" allow="autoplay; encrypted-media" allowfullscreen></iframe></li>
        <li>If using Spider Mines for defense, place them on the top of your ramp so they can take advantage of high-ground vision range.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
