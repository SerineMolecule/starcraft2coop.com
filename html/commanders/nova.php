<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Nova</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Nova">
  <meta name="keywords" content="Starcraft co-op guides nova commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.2">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/nova">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/nova.png);
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
    <h1>Co-op Commander Guide: Nova</h1>
    <p id="commanderMotto">Dominion Ghost</p>
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
        <p><a href="#hero">Hero Unit</a></p>
        <p><a href="#army">Recommended Army Composition</a></p>
        <p><a href="#units">Combat Units</a></p>
        <p><a href="#buildOrder">Build Order</a></p>
        <p><a href="#guide">Gameplay Guide</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Nova is a deadly covert operative that uses highly-trained soldiers to control the battlefield.</p>
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
                <td><img src="/images/commanderdata/progression/nova/nova_01.png" alt = "Covert Ops"></td>
                <td>Covert Ops</td>
                <td>
                    Nova has a 100 supply maximum, but her units and structures have increased life, deal additional damage, and are resistant to stun effects. Trained units are instantly deployed onto the battlefield.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/nova/nova_02.png" alt = "Griffin Airstrike"></td>
                <td>Griffin Airstrike</td>
                <td>
                    Unlocks the ability to call down the Griffin, which deploys several explosives along a targeted path. Call down the Griffin from the top panel.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/nova/nova_03.png" alt = "Assault Mode"></td>
                <td>Assault Mode</td>
                <td>
                   Unlocks the ability to swap between two equipment loadouts in the field. Nova gains access to different abilities and a different weapon with each loadout.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_04.png" alt = "Barracks Upgrade Cache"></td>
                <td>Barracks Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Barracks Tech Lab:
                    <ul>
                        <li>Unlock the Elite Marine's Super Stimpack ability, which increases their attack and movement speeds while healing them over time.</li>
                        <li>Equip the Marauder Commando with an additional weapon that attacks their current target.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_05.png" alt = "Tactical Airlift"></td>
                <td>Tactical Airlift</td>
                <td>
                    Unlocks the ability to call down the Griffin to rapidly transport your units to a targeted location. Call down the Griffin from the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_06.png" alt = "Factory Upgrade Cache"></td>
                <td>Factory Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Factory Tech Lab:
                    <ul>
                        <li>Enable Hellbat Rangers to leap toward enemy ground units and stun them on impact.</li>
                        <li>Enable Strike Goliaths to stun enemy mechanical air units and disable their detection.</li>
                        <li>Increase the Heavy Siege Tank's attack range over time while in Siege Mode.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_07.png" alt = "Automated Refineries"></td>
                <td>Automated Refineries</td>
                <td>
                    Refineries automatically harvest Vespene Gas without the need for SCV's.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_08.png" alt = "Covert Ops Upgrade Cache"></td>
                <td>Covert Ops Upgrade Cache</td>
                <td>
                    Unlocks an upgrade at the Barracks Tech Lab that enables Spec Ops Ghosts to fire two additional shots when using Snipe.<br><br>Also unlocks an upgrade at the Ghost Academy that increases Nova's life regeneration rate.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/nova/nova_09.png" alt = "Tac Nuke Strike and Holo Decoy"></td>
                <td>Tac Nuke Strike and Holo Decoy</td>
                <td>
                    Unlocks the Tac Nuke Strike ability, which allows Nova to call down a nuke while in Stealth Mode.<br><br>Also unlocks the Holo Decoy ability, which allows Nova to create a duplicate of herself that will attack on its own while in Assault Mode.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/nova/nova_10.png" alt = "Starport Upgrade Cache"></td>
                <td>Starport Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Starport Tech Lab:
                    <ul>
                        <li>Unlock the Covert Banshee's Rocket Barrage ability, which deals damage to all enemy ground units in a target area.</li>
                        <li>Allow Raid Liberators to transform faster.</li>
                        <li>Allow Raid Liberators to attack structures while in Defender Mode.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/nova/nova_11.png" alt = "Research and Development"></td>
                <td>Research and Development</td>
                <td>
                    Reduces cost and time required to research upgrades at Tech Labs and the Ghost Academy by 50%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_12.png" alt = "Raven Upgrade Cache"></td>
                <td>Raven Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Starport Tech Lab:
                    <ul>
                        <li>Increase the healing of the Raven Type-II's Bio-Mechanical Repair Drone and allow it to cloak units while healing them.</li>
                        <li>Allow the Raven Type-II to store 2 additional charges for each of its abilities.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_13.png" alt = "Military Hardware"></td>
                <td>Military Hardware</td>
                <td>
                    Increases Nova's maximum number of Defensive Drone charges by 2 and reduces their cooldown by 30 seconds.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_14.png" alt = "Nova Upgrade Cache"></td>
                <td>Nova Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Ghost Academy:
                    <ul>
                        <li>Allow Nova to regain 50% of Snipe's energy cost after killing a unit with it.</li>
                        <li>Increase the range of Nova's Penetrating Blast.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/nova/nova_15.png" alt = "Stance Dance"></td>
                <td>Stance Dance</td>
                <td>
                    Reduces the cooldown of Stealth Mode and Assault Mode by 15 seconds. Nova gains maximum energy when switching modes.<br><br>Switching to Stealth Mode grants temporary invulnerability and switching to Assault Mode grants a temporary bonus to damage dealt (100%).
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Nova are:</p>
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
                <td><img src="/images/commanderdata/achievements/nova/airraid.jpg" alt="Air Raid"></td>
                <td>Air Raid</td>
                <td>Deal 50,000 damage with Griffin Airstrike in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/nova/cloakanddagger.jpg" alt="Cloak and Dagger"></td>
                <td>Cloak and Dagger</td>
                <td>Deal 200,000 damage with Nova while she is in Stealth Mode.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/nova/droneitout.jpg" alt="Drone It Out"></td>
                <td>Drone It Out</td>
                <td>Absorb 10,000 damage for your ally with Nova's Defensive Drone in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/nova/ridingshotgun.jpg" alt="Riding Shotgun"></td>
                <td>Riding Shotgun</td>
                <td>Deal 200,000 damage with Nova while she is in Assault Mode.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Nova, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/nova/defensivedrone.png" alt = "Defensive Drone"></td>
                <td>Defensive Drone</td>
                <td>Provides friendly units with shields that absorb up to 200 damage. Lasts for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Should be used when defending and attacking to protect your army.</li>
                        <li>Can be used as a distraction to draw aggro away from your air units.</li>
                        <li>Can also be used to keep vision in an area temporarily.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 60 seconds</li>
                        <li>Cooldown: 60 seconds</li>
                        <li>Max Charges: 5</li>
                        <li>Mineral Cost: 100</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/nova/griffinairstrike.png" alt = "Griffin Airstrike"></td>
                <td>Griffin Airstrike</td>
                <td>Calls down the Griffin to deal 500 damage to all targets in its flight path after a short delay.</td>
                <td>
                    <ul>
                        <li>Great way of dealing with tough attack waves.</li>
                        <li>Useful for weakening enemy bases before pushing in.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 120 seconds</li>
                        <li>Cooldown: 30 seconds</li>
                        <li>Mineral Cost: 1000</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/nova/tacticalairlift.png" alt = "Tactical Airlift"></td>
                <td>Tactical Airlift</td>
                <td>Instantly transports friendly units in the target area to a targeted location.</td>
                <td>
                    <ul>
                        <li>Can be used to move troops to an area with vision.</li>
                        <li>You have a 20-second window to select the drop-off location.</li>
                        <li>Can be used to dodge skill shots.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 120 seconds</li>
                        <li>Cooldown: 120 seconds</li>
                        <li>Mineral Cost: 200</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/nova/instantregeneration.png" alt = "Instant Regeneration"></td>
                <td>Instant Regeneration</td>
                <td>Requirements:Nova recovering in stasis<br><br>Instantly revives Nova at the target location. Resource cost is determined by the amount of time remaining.</td>
                <td>
                    <ul>
                        <li>Cost gets reduced by 5 minerals per second.</li>
                        <li>Only use it if having Nova on the battlefield is vital.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Mineral Cost: 450</li>
                    </ul>
                </td>
            </tr>

        </tbody>
    </table>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Easy</p>
    <p>Your army composition should be mostly Biological units, with Liberators to help protect your army against enemy ground units. Rely on Griffin Airstrikes and Defensive Drones as much as possible to reduce army losses.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 3 in a 2:1 split for Nova's Energy Regeneration to Unit HP Regeneration.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Nova with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Nuke and Holo Decoy Cooldown</td>
                <td>-3 sec per point<br>-90 sec maximum</td>
                <td>0</td>
                <td rowspan="2">Due to the high cooldown time of Nuke/Holo Decoy, it is generally not viable to go for the cooldown mastery. However, for players who use this ability liberally, and find they are just short of some time before they can use it again, the mastery might be worth adding a few points into.</td>
            </tr>
            <tr>
                <td>Griffin Airstrike Cost</td>
                <td>-10 per point<br>-300 maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The reduction to the Nuke cooldown is irrelevant here (and Holo Decoy is not very useful). Griffin Airstrike has a lot more utility.</p>
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
                <td>Nova Primary Ability Improvement</td>
                <td>1.67% per point<br>50% maximum</td>
                <td>30</td>
                <td rowspan="2">The attack speed mastery can benefit units like Siege Tanks and Liberators during long, sustained engagements. If that is required by the player, this mastery might be useful, especially if Nova can 1-shot units like infested anyway.The Primary Ability improvement mastery, however, improves the damage of Snipe, Penetrating Blast, Sabotage Drone and the shield provided by Blink.</td>
            </tr>
            <tr>
                <td>Combat Unit Attack Speed</td>
                <td>+0.5% per point<br>+15% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Increasing Nova's Snipe and Penetrating Blast damage can make a huge difference on the battlefield.</p>
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
                <td>Nova Energy Regeneration</td>
                <td>1% per point<br>30% maximum</td>
                <td>20</td>
                <td rowspan="2">A split is generally recommended here to ensure units have some healing. Nova's energy regeneration is critical though, as it will allow you to spam her abilities more often.</td>
            </tr>
            <tr>
                <td>Unit Life Regeneration</td>
                <td>0.2 per point<br>6 maximum</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The split here is to allow your units to regenerate themselves on the battlefield when out of combat, at a reasonable rate while still ensuring Nova has enough energy regeneration to spam skills.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Nova. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Soldier of Fortune</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Factory and Starport no longer have Tech requirements.</li>
                        <li>Unit charges accrue 100% faster for the first production structure built.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Unit charges accrue 50% slower for the second and third production structures built.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Bonus applies to the first completed structure.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige allows Nova to accrue charges faster on the production structure of her choice, making this a very versatile prestige. The choice of structure will be heavily dependant on the enemy composition, so early scouting will be important.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Tactical Dispatcher</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Tactical Airlift cooldown reduced by 75%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Griffin Airstrike cooldown increased by 300%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>5</td>
            </tr>
            <tr>
                <th>Advice</th><td>While map mobility is important, the increase in cooldown of Griffin Airstrike is very detrimental to Nova, as the airstrike is Nova's primary method of weakening enemy bases and attack waves before engaging with her army to minimize losses. This prestige encourages players to engage waves with their armies directly, which can increase losses taken by Nova.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Infiltration Specialist</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Nova gains permanent Super Cloak.</li>
                        <li>Her abilities have a 50% increased radius and a 50% reduced cooldown.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Nova cannot switch to her Combat Suit and loses Super Cloak for 4 seconds upon attacking or using Snipe.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>9</td>
            </tr>
            <tr>
                <th>Advice</th><td>The loss of the Combat Suit reduces Nova's versatility. The impact of this depends on several factors, like the enemy composition faced, since Nova will usually use the Combat Suit to clear weaker attack waves that are not worth airstriking. However, it does allow Nova to easily clear large swathes of enemy bases with her Nukes and Sabotage Drones. Combined with the Nuke cooldown reduction mastery, this prestige is very powerful.</td>
            </tr>
        </tbody>
    </table>
    <p>For general play, Soldier of Fortune offers Nova the versatility she needs to be able to handle any mission and attack wave composition. Infiltration Specialist may excel on some maps, but it's efficacy is highly affected by attack wave compositions, and is therefore, not a reliable prestige to be used.</p>
    <h2 id="hero">Hero Unit</h2>
    <img id="heroPic" src="/images/commanderdata/hero/nova/nova.jpg" alt="Nova">
    <p>Spawn time: 4:00</p>
    <p>Respawn time: 1:30</p>
    <p>The abilities for Stealth Mode Nova are:</p>
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
                <td><img src="/images/commanderdata/hero/nova/snipe.png" alt = "Snipe"></td>
                <td>Snipe</td>
                <td>Deals 200 damage to target enemy ground or air unit from long range (10).<br><br>Can target biological and mechanical units.</td>
                <td>0 seconds</td>
                <td>50</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/sabotagedrone.png" alt = "Sabotage Drone"></td>
                <td>Sabotage Drone</td>
                <td>Deploys an undetectable explosive drone that deals 200 damage (400 vs Structure) to enemy ground units in the target area.</td>
                <td>45 seconds</td>
                <td>100</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/tacnukestrike.png" alt = "Tac Nuke Strike"></td>
                <td>Tac Nuke Strike</td>
                <td>Calls down a Nuclear Strike at the target location, dealing 600 damage in a large radius after 5 seconds.</td>
                <td>Coolup: 600 seconds<br>Cooldown: 420 seconds</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p>The abilities for Assault Mode Nova are:</p>
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
                <td><img src="/images/commanderdata/hero/nova/penetratingblast.png" alt = "Penetrating Blast"></td>
                <td>Penetrating Blast</td>
                <td>Deals 50 (100 vs Light) damage to enemy ground units in a wide arc.<br><br>Does not damage friendly units.</td>
                <td>0 seconds</td>
                <td>50</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/blink.png" alt = "Blink"></td>
                <td>Blink</td>
                <td>Teleports Nova to a nearby location. Nova gains a temporary shield that absorbs up to 200 damage for 8 seconds.<br><br>Ability regains a charge every 8 seconds. Can store a maximum of 3 charges.</td>
                <td>8 seconds</td>
                <td>0</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/holodecoy.png" alt = "Holo Decoy"></td>
                <td>Holo Decoy</td>
                <td>Deploys a holographic duplicate of Nova that automatically attacks enemy units. The holo decoy lasts for 60 seconds.</td>
                <td>Coolup: 600 seconds<br>Cooldown: 420 seconds</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p>The upgrades for Nova are:</p>
    <table class="heroUpgrades">
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
                <td><img src="/images/commanderdata/hero/nova/ghostvisor.png" alt="Ghost Visor"></td>
                <td>Ghost Visor</td>
                <td>Grants Nova detection, allowing her to see and track cloaked and burrowed enemy units.</td>
                <td>75/75</td>
                <td>45 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/caduceusreactor.png" alt="Caduceus Reactor"></td>
                <td>Caduceus Reactor</td>
                <td>Increases Nova's life regeneration rate to 10.</td>
                <td>75/75</td>
                <td>45 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/operationalefficiency.png" alt="Operational Efficiency"></td>
                <td>Operational Efficiency</td>
                <td>Refunds 50% of Snipe's energy cost when Nova uses it to kill an enemy unit.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/nova/infernalprojectiles.png" alt="Infernal Projectiles"></td>
                <td>Infernal Projectiles</td>
                <td>Increases the range of Nova's Penetrating Blast by 2.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Nova is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/nova/raidliberator.jpg" alt="Raid Liberator"><img class="army" src="/images/commanderdata/units/nova/strikegoliath.jpg" alt="Strike Goliath"><img class="army" src="/images/commanderdata/units/nova/raventypeii.jpg" alt="Raven Type-II">
    <p>Goliath/Liberator builds for Nova are extremely versatile and allow her to handle a variety of different situations. By making use of Griffin Airstrikes, her army can clear off any left-over forces. Ensure you have Ravens to heal damage on your army.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/nova/heavysiegetank.jpg" alt="Heavy Siege Tank"><div class="techAdd">+</div></div>
    <p>Add Siege Tanks to your army so that you may drop Spider Mines on enemy spawn positions when facing ground-based enemy compositions.</p>
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
    <p>For more information on Nova's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Nova's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/elitemarine.jpg" alt="Elite Marine">
            <p>Elite Marine</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does high DPS.</li>
                <li>Super Stimpack upgrade is vital for survivability.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/superstimpack.png" alt="Super Stimpack"></td>
                        <td>Super Stimpack</td>
                        <td>Heals the Elite Marine for 2 life per second and increases its attack speed by 50% and movement speed by 50% for 15 seconds.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/lasertargetingsystem.png" alt="Laser Targeting System"></td>
                        <td>Laser Targeting System</td>
                        <td>Increases the Elite Marine's vision by 2 and its weapon range by 1.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/superstimpack.png" alt="Super Stimpack"></td>
                        <td>Super Stimpack</td>
                        <td>Heals the Elite Marine for 2 life per second and increases its attack and movement speeds for 15 seconds.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/maraudercommando.jpg" alt="Marauder Commando">
            <p>Marauder Commando</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Good against armored targets.</li>
                <li>Upgrades not necessary.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/magrailmunitions.png" alt="Magrail Munitions"></td>
                        <td>Magrail Munitions</td>
                        <td>Deals 90 damage to target enemy unit.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/suppressionshells.png" alt="Suppression Shells"></td>
                        <td>Suppression Shells</td>
                        <td>Units hit by the Marauder Commando have temporarily slowed attack and movement speeds (50%) for 1.5 seconds. Has a reduced effect on heroic units (20%).<br><br>Massive units are immune.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/magrailmunitions.png" alt="Magrail Munitions"></td>
                        <td>Magrail Munitions</td>
                        <td>Equips Marauder Commandos with an additional weapon that deals 90 damage to their target every 30 seconds.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/specopsghost.jpg" alt="Spec Ops Ghost">
            <p>Spec Ops Ghost</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Provides great burst damage against biological targets.</li>
                <li>"EMP" can be used against energy-based targets to render them useless, such as Hybrid Dominators.</li>
                <li>"Triple Tap" can increase the damage they do significantly.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/snipe.png" alt="Snipe"></td>
                        <td>Snipe</td>
                        <td>Deals 170 damage to target enemy biological unit.<br><br>Mechanical units are immune.</td>
                        <td>30 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/nova/empround.png" alt="EMP Round"></td>
                        <td>EMP Round</td>
                        <td>Deals 100 damage to shields and depletes the energy of enemy units in the target area. Cloaked units are revealed for 10 seconds after being hit.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/empround.png" alt="EMP Round"></td>
                        <td>EMP Round</td>
                        <td>Allows Spec Ops Ghosts to use EMP Round, which deals 100 damage to shields and depletes the energy of enemy units in the target area. Cloaked units are revealed for 10 seconds after being hit.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/tripletap.png" alt="Triple Tap"></td>
                        <td>Triple Tap</td>
                        <td>Spec Ops Ghosts fire 2 additional shots that deal 85 damage each when using Snipe.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/hellbatranger.jpg" alt="Hellbat Ranger">
            <p>Hellbat Ranger</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not worth making.</li>
                <li>They jump out of range of Defensive Drones and end up getting killed.</li>
                <li>They have poor DPS.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/jumpjetassault.png" alt="Jump Jet Assault"></td>
                        <td>Jump Jet Assault</td>
                        <td>Launches the Hellbat Ranger toward nearby enemy ground units. Briefly stuns enemy units on impact and gains +4 armor.</td>
                        <td>5 seconds</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/nova/infernalpreigniter.png" alt="Infernal Pre-Igniters"></td>
                        <td>Infernal Pre-Igniter</td>
                        <td>Hellbat Rangers deal +15 damage to light units in both modes.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/jumpjetassault.png" alt="Jump Jet Assault"></td>
                        <td>Jump Jet Assault</td>
                        <td>Launches the Hellbat Ranger toward nearby enemy ground units. Briefly stuns enemy units on impact and gains +4 armor.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/hellionranger.jpg" alt="Hellion Ranger">
            <p>Hellion Ranger</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Converted from Hellbat Rangers.</li>
                <li>Good mobility.</li>
                <li>Low HP makes them struggle against stronger attack waves.</li>
            </ul>
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
                        <td><img src="/images/commanderdata/unitupgrades/nova/infernalpreigniter.png" alt="Infernal Pre-Igniters"></td>
                        <td>Infernal Pre-Igniter</td>
                        <td>Hellbat Rangers deal +15 damage to light units in both modes.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/strikegoliath.jpg" alt="Strike Goliath">
            <p>Strike Goliath</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Useful against air targets, due to its "Lockdown Missiles" upgrade which can stun.</li>
                <li>Ineffective against ground targets.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/nova/aresclasstargetingsystem.png" alt="Ares-Class Targeting System"></td>
                        <td>Ares-Class Targeting System</td>
                        <td>Increases the Strike Goliath's anti-air weapon range by 3 and its ground weapon range by 1.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/lockdownmissiles.png" alt="Lockdown Missiles"></td>
                        <td>Lockdown Missiles</td>
                        <td>Stuns and disables the detection of mechanical units hit by the Strike Goliath's anti-air attacks for 3 seconds.<br><br>Heroic units are immune.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/heavysiegetank.jpg" alt="Heavy Siege Tank">
            <p>Heavy Siege Tank</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Can deal a large amount of splash damage.</li>
                <li>Can deploy Spider Mines to further defend a position.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/deployspidermines.png" alt="Deploy Spider Mines"></td>
                        <td>Deploy Spider Mines</td>
                        <td>Spider Mines pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy detectors. (Costs 50 minerals).</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/spidermines.png" alt="Spider Mines"></td>
                        <td>Spider Mines</td>
                        <td>Allows Heavy Siege Tanks to deploy Spider Mines, which pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy detectors.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/graduatingrange.png" alt="Graduating Range"></td>
                        <td>Graduating Range</td>
                        <td>Increases the Heavy Siege Tank's attack range by 1 every 3 seconds while in Siege Mode, up to a maximum of 5 additional range.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/raidliberator.jpg" alt="Raid Liberator">
            <p>Raid Liberator</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Provides great anti-air and single-target ground damage.</li>
                <li>"Raid Artillery" upgrade can be obtained if you want to deal damage to structures.</li>
                <li>"Smart Servos" upgrade is a necessity if you intend on switching modes often.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/nova/raidartillery.png" alt="Raid Artillery"></td>
                        <td>Raid Artillery</td>
                        <td>Allows Raid Liberators to attack structures while in Defender Mode.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/smartservos.png" alt="Smart Servos"></td>
                        <td>Smart Servos</td>
                        <td>Allows Raid Liberators to transform between modes four times faster.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/covertbanshee.jpg" alt="Covert Banshee">
            <p>Covert Banshee</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not made as other units can better fit the role.</li>
                <li>Can be used against certain ground compositions with the "Rocket Barrage" ability.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/rocketbarrage.png" alt="Rocket Barrage"></td>
                        <td>Rocket Barrage</td>
                        <td>Deals 75 damage to enemy ground units in the target area.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/advancedcloakingfield.png" alt="Advanced Cloaking Field"></td>
                        <td>Advanced Cloaking Field</td>
                        <td>Allows Covert Banshees to remain permanently cloaked.</td>
                        <td>50/50</td>
                        <td>30 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/nova/rocketbarrage.png" alt="Rocket Barrage"></td>
                        <td>Rocket Barrage</td>
                        <td>Allows Covert Banshees to use Rocket Barrage, which deals 75 damage to enemy ground units in the target area.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/nova/raventypeii.jpg" alt="Raven Type-II">
            <p>Raven Type-II</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>A must-have in any army composition.</li>
                <li>Can heal your army with the Bio-Mechanical Repair Drone.</li>
                <li>Can deploy Railgun turrets to further fortify a position.</li>
                <li>Predator Missiles can deal a lot of damage, particularly to clumped up enemies.</li>
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
                        <td><img src="/images/commanderdata/unitskills/nova/buildrailgunturret.png" alt="Build Railgun Turret"></td>
                        <td>Build Railgun Turret</td>
                        <td>Automated defensive turret. Damages all enemy ground units in a straight line. Lasts for 60 seconds.<br><br>Can attack ground units.</td>
                        <td>30 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/unitskills/nova/deploybiomechanicalrepairdrone.png" alt="Deploy Bio-Mechanical Repair Drone"></td>
                        <td>Deploy Bio-Mechanical Repair Drone</td>
                        <td>Heals nearby biological and mechanical units. Lasts for 30 seconds.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/nova/predatormissile.png" alt="Predator Missile"></td>
                        <td>Predator Missile</td>
                        <td>Deploys a missile that pursues target enemy unit, dealing 100 (+35 vs. shields) damage in a wide radius upon contact.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_terran.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/coverttriage.png" alt="Covert Triage"></td>
                        <td>Covert Triage</td>
                        <td>Increases the healing of the Raven Type-II's Bio-Mechanical Repair Drone by 25% and allows it to cloak units that it is currently healing.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/nova/enhancedmanufacturing.png" alt="Enhanced Manufacturing"></td>
                        <td>Enhanced Manufacturing</td>
                        <td>Allows the Raven Type-II to store up to 3 charges for each of its abilities.</td>
                        <td>75/75</td>
                        <td>45 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Nova. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Refinery<br>
        15 Refinery<br>
        18 Command Center<br>
        19 Barracks<br>
        22 Marines -> Rocks
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>Many players prefer to use Assault mode to deal with units when pushing into enemy bases. However, Nova's strength is with her Snipe ability that can be used to target Mechanical units. Use Nova's Snipe to take out high value targets and minimize your army losses. Combined with the "Operational Efficiency" upgrade, you'll be able to clear out a lot of high-damage units very quickly.</p>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Use Defensive Drones to protect your units as you defend/attack.</li>
        <li>Switch modes for Nova often to take advantage of that particular mode's strengths.</li>
        <li>In general combat, you will want to have Nova in Stealth Mode to snipe key targets.</li>
        <li>Soften enemy bases with Tac Nuke Strikes and Griffin Air Strikes before pushing in to reduce losses.</li>
        <li>If using Spider Mines for defense, place them on the top of your ramp so they can take advantage of high-ground vision range.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
