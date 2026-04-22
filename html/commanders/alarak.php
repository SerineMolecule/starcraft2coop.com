<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Alarak</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Alarak">
  <meta name="keywords" content="Starcraft co-op guides alarak commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.3">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/alarak">
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
            background: url(/images/commanderdata/bgs/alarak.png);
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
    <h1>Co-op Commander Guide: Alarak</h1>
    <p id="commanderMotto">Highlord of the Tal'darim</p>
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
        <p><a href="#hero">Hero Unit</a></p>
        <p><a href="#army">Recommended Army Composition</a></p>
        <p><a href="#units">Combat Units</a></p>
        <p><a href="#buildOrder">Build Order</a></p>
        <p><a href="#guide">Gameplay Guide</a></p>
        <p><a href="#fastexpand">Fast Expanding</a></p>
        <p><a href="#videos">Video Guides</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Alarak uses the presence of his own army to improve the power of his own abilities. He has powerful army units that can deal large amounts of damage in a short period of time.</p>
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
                <td><img src="/images/commanderdata/progression/alarak/alarak_01.png" alt = "Soul Absorption"></td>
                <td>Soul Absorption</td>
                <td>
                    <ul>
                        <li>Alarak heals 20 life and restores 20 shields (per supply) when a nearby enemy unit is slain.</li>
                        <li>Alarak steals life from nearby units you control to heal himself when he is near death. This ability has no cooldown.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_02.png" alt = "Overcharge Amplification"></td>
                <td>Overcharge Amplification</td>
                <td>
                    Structure Overcharge now also grants a Barrier that absorbs up to 400 damage.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_03.png" alt = "Aggressive Tactics"></td>
                <td>Aggressive Tactics</td>
                <td>
                   Increases the range of Alarak's Deadly Charge by 3 and reduces its cooldown by 5 seconds.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_04.png" alt = "Death Council Upgrade Cache"></td>
                <td>Death Council Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Death Council:
                    <ul>
                        <li>Supplicants gain +25 shields.</li>
                        <li>Allow slayers to become temporarily invulnerable after taking damage.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/alarak/alarak_05.png" alt = "Empower Me"></td>
                <td>Empower Me</td>
                <td>
                    Unlocks Alarak's Empower Me ability, which grants him increased attack and ability damage for each nearby friendly unit. This effect lasts for 20 seconds.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_06.png" alt = "Robotics Bay Upgrade Cache"></td>
                <td>Robotics Bay Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Robotics Bay:
                    <ul>
                        <li>Increase the vanguard's splash damage area by 30%.</li>
                        <li>Increase the wrathwalker's attack speed.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_07.png" alt = "Lightning Surge"></td>
                <td>Lightning Surge</td>
                <td>
                    Sacrificing a supplicant causes Alarak's next Deadly Charge to deal an additional 50 damage to 4 enemy units near the primary target.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_08.png" alt = "New Unit: Ascendant"></td>
                <td>New Unit: Ascendant</td>
                <td>
                    Potent psionic master. Can use Psionic Orb, Mind Blast and Sacrifice.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_09.png" alt = "Havoc Upgrade Cache"></td>
                <td>Havoc Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Cybernetics Core:
                    <ul>
                        <li>Increase Target Lock's bonus damage by an additional 15%.</li>
                        <li>Increase the radius of Squad Sight and the range of Target Lock and Force Field.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/alarak/alarak_10.png" alt = "Summon Death Fleet"></td>
                <td>Summon Death Fleet</td>
                <td>
                    Unlocks the ability to warp in a Tal'darim Mothership and an escort of destroyers with timed life. Summon the Death Fleet from the top panel.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_11.png" alt = "Overpowered"></td>
                <td>Overpowered</td>
                <td>
                    Alarak's attacks deal area damage while Empower Me is active.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/alarak/alarak_12.png" alt = "Ascendant Upgrade Cache"></td>
                <td>Ascendant Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the ascendant archives:
                    <ul>
                        <li>Increase the travel distance of the ascendant's Psionic Orb.</li>
                        <li>Sacrifice grants ascendants a stacking permanent increase to ability damage and shields.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_13.png" alt = "Burning Skies"></td>
                <td>Burning Skies</td>
                <td>
                    Unlocks the mothership's Thermal Lance ability and warps in 4 additional destroyers when summoning the Death Fleet.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/alarak/alarak_14.png" alt = "Alarak Upgrade Cache"></td>
                <td>Alarak Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Forge:
                    <ul>
                        <li>Allow Alarak's basic attacks to stun enemies and slow heroic enemies for 2 seconds.</li>
                        <li>Increase Destruction Wave's knockback distance by 100%.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/alarak/alarak_15.png" alt = "Wrath of the Highlord"></td>
                <td>Wrath of the Highlord</td>
                <td>
                    Reduces the cooldown of Alarak's Deadly Charge by 10 seconds and Destruction Wave by 5 seconds whenever a supplicant is sacrificed.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Alarak are:</p>
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
                <td><img src="/images/commanderdata/achievements/alarak/agooddaytodie.jpg" alt="A Good Day to Die"></td>
                <td>A Good Day to Die</td>
                <td>Sacrifice 500 Supplicants to Alarak or Ascendants.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/alarak/fleetingdeath.jpg" alt="Fleeting Death"></td>
                <td>Fleeting Death</td>
                <td>Deal 50,000 damage with the Death Fleet.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/alarak/powerplay.jpg" alt="Power Play"></td>
                <td>Power Play</td>
                <td>Deal 100,000 damage with Alarak while he is empowered.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/alarak/yourewelcome.jpg" alt="You're Welcome"></td>
                <td>You're Welcome</td>
                <td>Use Structure Overcharge on allied structures to deal 30,000 damage.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Alarak, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/alarak/structureovercharge.png" alt = "Structure Overcharge"></td>
                <td>Structure Overcharge</td>
                <td>Energizes target friendly structure or War Prism in Phasing Mode, allowing it to attack nearby enemy ground and air units.</td>
                <td>
                    <ul>
                        <li>Use the first overcharge to clear out rocks and contested expansions.</li>
                        <li>Use overcharges to add extra DPS when pushing and defending against attack waves.</li>
                        <li>Overcharges can also be used to destroy objective structures during the early game, while you get higher tech units out.</li>
                        <li>Lasts 45 seconds.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 90 seconds</li>
                        <li>Cooldown: 90 seconds</li>
                        <li>Max Charges: 3</li>
                        <li>Damage: 40</li>
                        <li>Range: 10</li>
                        <li>Atk Spd: 0.641</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/alarak/summondeathfleet.png" alt = "Summon Death Fleet"></td>
                <td>Summon Death Fleet</td>
                <td>Warps in a Tal'Darim Mothership and 8 Destroyers that are controllable and will fight for 60 seconds.</td>
                <td>
                    <ul>
                        <li>Useful for adding extra DPS to pushes and defending attack strong attack waves.</li>
                        <li>Use the Mothership's Mass Teleport ability to give your army extra mobility.</li>
                        <li>If using the Shadow of Death prestige, the calldown costs 400/400, with each Destroyer costing 125/75.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 600 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>The Summon Death Fleet ability brings a Tal'Darim Mothership onto the battlefield. This unit has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/alarak/mothership.jpg" alt="Mothership">
            <p>Mothership</p>
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
                        <td><img src="/images/commanderdata/abilities/alarak/thermallance.png" alt="Thermal Lance"></td>
                        <td>Thermal Lance</td>
                        <td>Deals 20 damage to all enemies in a straight line up to 10 range away.</td>
                        <td>1 second</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/alarak/massteleport.png" alt="Mass Teleport"></td>
                        <td>Mass Teleport</td>
                        <td>Teleports the Mothership and all nearby units you control to target friendly unit or structure's location.</td>
                        <td>0 seconds*</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>The Summon Death Fleet ability also brings Destroyers onto the battlefield. They do not have abilities or upgrades. Additionally, their bounce damage is not affected by attack upgrades.</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/alarak/destroyer.jpg" alt="Destroyer">
            <p>Destroyer</p>
        </div>
    </div>
    <p>*If using the Shadow of Death prestige, this cooldown is increased to 60s, and no longer teleports allied units.</p>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Moderate</p>
    <p>Use a Slayer/Supplicant build as your main attack force. Use Alarak's Destruction Wave ability to push enemy units away from your army. Additionally, ensure you have a War Prism which you can Overcharge to provide you with additional DPS when pushing into enemy bases. Clear your expansion with two Overcharges.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 3's Structure Overcharge mastery until you hit the desired number of points, before allocating them to Chrono Boost efficiency.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Alarak with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Alarak Attack Damage</td>
                <td>1 per point<br>30 maximum</td>
                <td>?</td>
                <td rowspan="2">The choice here mostly depends on how you use Alarak and if you prefer to use skill-based units (like Ascendants) or attack-based units (like Wrathwalkers).</td>
            </tr>
            <tr>
                <td>Combat Unit Attack Speed</td>
                <td>0.5% per point<br>15% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">If you are working with an Ascendant-based build, Alarak Attack Damage is recommended as Ascendants do not benefit much from the other mastery.</p>
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
                <td>Empower Me Duration</td>
                <td>1 sec per point<br>30 sec maximum</td>
                <td>?</td>
                <td rowspan="2">Empower Me Duration can provide a lot of mileage for mastery points, especially when used with the No Cooldown Alarak technique. However, it does require a significantly higher level of mechanical ability.</td>
            </tr>
            <tr>
                <td>Death Fleet Cooldown</td>
                <td>-4 sec per point<br>-120 sec maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This is a personal preference. Those that use the No Cooldown Alarak technique (below) may want to consider putting all points into Empower Me Duration instead.</p>
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
                <td>Structure Overcharge Shield and Attack Speed</td>
                <td>2% per point<br>60% maximum</td>
                <td>22</td>
                <td rowspan="2">Players that prefer to use Structure Overcharges more offensively can choose to add more points into that respective mastery. It is generally not recommended to go below 22 points, as it will prevent the Structure Overcharge from clearing expansions.</td>
            </tr>
            <tr>
                <td>Chrono Boost Efficiency</td>
                <td>1% per point<br>30% maximum</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The 22 points into the first mastery is just enough to clear both, the main and the gas rocks at your expansion. The rest are put into Chrono Boost.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Alarak. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Artificer of Souls</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>When a supplicant dies, it increases the damage and attack speed of one of Alarak's nearby non-heroic mechanical combat units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Deadly Charge and Destruction Wave damage reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Stacks get applied within 15 range.</li>
                        <li>Each stack adds 10% damage and attack speed</li>
                        <li>Slayers and War Prisms get two stacks per Supplicant</li>
                        <li>Maximum stack count is 10.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige adds further utility to Supplicant deaths by allowing them to buff Alarak's mech units. This does mean that Alarak cannot 1-shot Zergling waves by using Destruction Wave. However, adding Ascendants to deal with attack waves is very beneficial anyway, as Supplicants can be sacrificed for Power Overwhelming stacks as well as buffing Mech units.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Tyrant Ascendant</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Empower Me cooldown reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>The Death Fleet is unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>5</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige sacrifices Alarak's mobility from his Death Fleet to add extra power to Alarak pushes by making his Empower Me more frequent. Death Fleet damage is not considered due to its relatively low damage compared to Alarak's units. For players that are aware of mission timings, they will very rarely get caught unawares, and combined with the No Cooldown Alarak technique, this prestige can be very valuable.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Shadow of Death</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Summon Death Fleet has no duration or initial cooldown. The Mothership may construct Destroyers.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Destroyers are no longer summoned with the Mothership.</li>
                        <li>The Mothership and Destroyers have resource and Supply Costs.</li>
                        <li>Mass Teleport now has a 60 second cooldown and no longer teleports allied units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Mothership costs 400/400.</li>
                        <li>Each Destroyer costs 125/75.</li>
                        <li>Mothership and Destroyers are unaffected by Unit Attack Speed mastery.</li>
                        <li>Destroyer bounce damage is unaffected by attack upgrades.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>10</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige provides an early-game power-spike in the Mothership, which is also a great mobility tool throughout the mission. It also allows you to summon a large fleet of Destroyers, which are very susceptible to splash damage, like Parasitic Bombs. Note that this prestige is quite strong even if you don't summon the fleet of Destroyers; most of its power is in the Mothership.</td>
            </tr>
        </tbody>
    </table>
    <p>All three prestiges are recommended for general play. P3 (Shadow of Death) is particularly popular.</p>
    <h2 id="hero">Hero Unit</h2>
    <img id="heroPic" src="/images/commanderdata/hero/alarak/alarak.jpg" alt="Alarak">
    <p>Spawn time: 4:00</p>
    <p>Respawn time: 1:00</p>
    <p>The abilities for Alarak are:</p>
    <table class="abilityTable">
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
                <td><img src="/images/commanderdata/hero/alarak/deadlycharge.png" alt = "Deadly Charge"></td>
                <td>Deadly Charge</td>
                <td>Alarak intercepts target enemy unit and strikes it for 200 damage.</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/alarak/destructionwave.png" alt = "Destruction Wave"></td>
                <td>Destruction Wave</td>
                <td>Unleashes a massive wave of force in a straight line, dealing 50 damage to enemies in its path and knocking them back.</td>
                <td>5 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/alarak/empowerme.png" alt = "Empower Me"></td>
                <td>Empower Me</td>
                <td>Alarak's attacks and abilities deal increased damage for each allied unit nearby. Mechanical units grant him double the power. Resets the cooldown of Deadly Charge and Destruction Wave.<br><br>Biological units provide a 5% damage bonus per supply up to 100 supply, and then provide 2.5% per supply onwards. Mechanical units provide 10% damage bonus per supply up to 100 supply, and then provide 5% per supply onwards.<br><br>Supply count is additive, with biological units favored first. So if you have 100 supply in bio and 1 supply in mechanical units, the mechanical units will provide the reduced rate of 5%.</td>
                <td>240 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>The upgrades for Alarak are:</p>
    <table class="heroUpgrades">
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
                <td><img src="/images/commanderdata/hero/alarak/imposingpresence.png" alt="Imposing Presence"></td>
                <td>Imposing Presence</td>
                <td>Allows Alarak's attacks to stun enemy units for 2 seconds.<br><br>Heroic units are slowed.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/alarak/telekinesis.png" alt="Telekinesis"></td>
                <td>Telekinesis</td>
                <td>Increases the knockback distance of Alarak's Destruction Wave by 100%.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
        </tbody>
    </table>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Alarak is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" img src="/images/commanderdata/units/alarak/supplicant.jpg" alt="Supplicant"><img class="army" img src="/images/commanderdata/units/alarak/ascendant.jpg" alt="Ascendant">
    <p>Ascendants, with the Power Overwhelming upgrades, can deal extremely large amounts of damage to units, allowing Alarak to handle attack waves and unit-based objectives with ease. Supplicants are required for Alarak's Empower Me as well as keeping Ascendants filled with energy through Sacrifice.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/alarak/wrathwalker.jpg" alt="Wrathwalker"><div class="techAdd">+</div></div>
    <p>Add Wrathwalkers to your army composition if you are dealing with objectives that are structures.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/alarak/vanguard.jpg" alt="Vanguard"><div class="techAdd">+</div></div>
    <p>Add Vanguards to your army if you need extra damage sustain and splash damage.</p>
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
    <p>For more information on Alarak's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Alarak's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/supplicant.jpg" alt="Supplicant">
            <p>Supplicant</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should be the core of Alarak's army.</li>
                <li>First unit to be sacrificed to Alarak if he dies.</li>
                <li>Sacrificed to Ascendants to raise their power level.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/alarak/bloodshields.png" alt="Blood Shields"></td>
                        <td>Blood Shields</td>
                        <td>Reduces the damage enemies deal to the Supplicant's shields. Adds 2 shield armor.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/soulaugmentation.png" alt="Soul Augmentation"></td>
                        <td>Soul Augmentation</td>
                        <td>Supplicants gain +25 shields.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/slayer.jpg" alt="Slayer">
            <p>Slayer</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should not be made en-masse unless there is a very good reason.</li>
                <li>Useful against compositions with a minimal air presence.</li>
                <li>Does great damage against armored targets.</li>
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
                        <td><img src="/images/commanderdata/unitskills/alarak/phaseblink.png" alt="Phase Blink"></td>
                        <td>Phase Blink</td>
                        <td>Teleports the Slayer to a nearby target location. Ability can only be used once every 8 seconds. After using Phase Blink, the Slayer's next attack within 8 seconds will deal double damage.</td>
                        <td>8s</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/alarak/phaseblink.png" alt="Phase Blink"></td>
                        <td>Phase Blink</td>
                        <td>Allows Slayers to teleport to a nearby target location. After using Phase Blink, the Slayer's next attack within 8 seconds will deal double damage.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/phasingarmor.png" alt="Phasing Armor"></td>
                        <td>Phasing Armor</td>
                        <td>Prevents Slayers from taking damage for 2 seconds after being attacked. Cannot occur more than once every 5 seconds.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/havoc.jpg" alt="Havoc">
            <p>Havoc</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Has a force-field ability to allow you to funnel enemies into choke points.</li>
                <li>Has a passive that increases friendly units attack range (within a range of 4) by 2.</li>
                <li>Force-field ability is highly situational, and rendered useless through Massive enemy units. Can be used on mutators like Fatal Attraction.</li>
                <li>Target-lock ability increases damage dealt to a target by 15%.</li>
                <li>Very powerful when combined with Ascendants.</li>
                <li>Good idea to build some at the start for detection.</li>
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
                        <td><img src="/images/commanderdata/unitskills/alarak/targetlock.png" alt="Target Lock"></td>
                        <td>Target Lock</td>
                        <td>Increases damage dealt to target enemy unit by 15%. Effect lasts as long as the Havoc remains locked onto the target.</td>
                        <td>3s</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/alarak/forcefield.png" alt="Force Field"></td>
                        <td>Force Field</td>
                        <td>Creates a solid barrier that lasts for 15 seconds and impedes movement of ground units.<br><br>Massive units shatter Force Fields on contact. (3 charges max).</td>
                        <td>15s</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/alarak/cloakingmodule.png" alt="Cloaking Module"></td>
                        <td>Cloaking Module</td>
                        <td>Allows Havocs to remain permanently cloaked.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/bloodshardresonance.png" alt="Bloodshard Resonance"></td>
                        <td>Bloodshard Resonance</td>
                        <td>Increases the radius of the Havoc's Squad Sight and the range of Target Lock and Force Field.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/detectweakness.png" alt="Detect Weakness"></td>
                        <td>Detect Weakness</td>
                        <td>Increases the damage bonus from the Havoc's Target Lock by an additional 15%.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/ascendant.jpg" alt="Ascendant">
            <p>Ascendant</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Mind-blast ability provides great single-target damage.</li>
                <li>Psionic Orb ability provides a good way of clearing attack waves.</li>
                <li>Best have their abilities bound to <a href="/guides/generaltips">Rapidfire</a> for quick casting of these abilities.</li>
                <li>They draw a high amount of aggro and need to be protected, especially in the early game, when they are most fragile.</li>
                <li>They get stronger as you sacrifice Supplicants with Power Overwhelming researched, gaining up to 1040 shields and can deal up to 700 damage with a single Mind Blast, and 35 DPS with their Psionic Orb</li>
                <li>Sacrifice will be auto-cast when the Ascendant has less than 100 energy.</li>
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
                        <td><img src="/images/commanderdata/unitskills/alarak/psionicorb.png" alt="Psionic Orb"></td>
                        <td>Psionic Orb</td>
                        <td>Unleashes a traveling Psionic Orb that deals 10 damage per second to all enemies along its path.</td>
                        <td>2s</td>
                        <td>100</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/alarak/mindblast.png" alt="Mind Blast"></td>
                        <td>Mind Blast</td>
                        <td>Deals 200 damage to target enemy unit.<br><br>Can target ground and air units.</td>
                        <td>8s</td>
                        <td>100</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/unitskills/alarak/sacrifice.png" alt="Sacrifice"></td>
                        <td>Sacrifice</td>
                        <td>Sacrifices a Supplicant to fully restore the Ascendant's energy.<br><br>Can only target Supplicants.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/mindblast.png" alt="Mind Blast"></td>
                        <td>Mind Blast</td>
                        <td>Allows Ascendants to use Mind Blast, which deals 200 damage to target enemy unit.<br><br>Can target ground and air units.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/chaoticattunement.png" alt="Chaotic Attunement"></td>
                        <td>Chaotic Attunement</td>
                        <td>Increases the travel distance of the Ascendant's Psionic Orb by 25%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/poweroverwhelming.png" alt="Power Overwhelming"></td>
                        <td>Power Overwhelming</td>
                        <td>Ascendants permanently gain +25% ability damage and +100 shields each time they use Sacrifice.<br><br>This effect stacks up to a maximum of 10.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/vanguard.jpg" alt="Vanguard">
            <p>Vanguard</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Attacks do not track targets and can be dodged.</li>
                <li>Ineffective against fast-moving targets.</li>
                <li>Useful in small quantities on infested maps.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/alarak/fusionmortars.png" alt="Fusion Mortars"></td>
                        <td>Fusion Mortars</td>
                        <td>Increases the damage Vanguards deal to armored units by 7.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/matterdispersion.png" alt="Matter Dispersion"></td>
                        <td>Matter Dispersion</td>
                        <td>Increases the area of the Vanguard's splash damage by 50%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/wrathwalker.jpg" alt="Wrathwalker">
            <p>Wrathwalker</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Deals bonus damage to structures, making it extremely effective at taking down some objectives.</li>
                <li>Can be upgraded to attack air targets.</li>
                <li>Useful alternative for anti-air compositions if not using Ascendants.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/alarak/aerialtracking.png" alt="Aerial Tracking"></td>
                        <td>Aerial Tracking</td>
                        <td>Allows Wrathwalkers to attack air units.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/alarak/rapidpowercycling.png" alt="Rapid Power Cycling"></td>
                        <td>Rapid Power Cycling</td>
                        <td>Reduces the charging time (2 seconds) and the weapon speed (0.5) of the Wrathwalker's Charged Blast.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/alarak/warprism.jpg" alt="War Prism">
            <p>War Prism</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Its attack is not very useful.</li>
                <li>Photon Overcharge can be used if it is placed into Phasing mode.</li>
                <li>Great alternative to pylons for reinforcing your army.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades: None</p>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Alarak. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Pylon<br>
        15 Assimilator (No Probes)<br>
        18 Pylon (Overcharge)<br>
        20 Nexus<br>
        Probes -> Assimilator<br>
        21 Assimilator<br>
        22 Gateway
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A possible playstyle trap is to focus on building a mass of Supplicants without adding any other tech units. While Supplicants are used to keep Alarak alive, and massing a large number increases Alarak's power when he uses Empower Me, Supplicants do not have a high DPS by themselves. Specific tech units (Ascendants, Wrathwalkers, etc.) will be needed to further improve a player's performance in the mission.</p>
    <h3 id="fastexpand">Fast Expanding</h3>
    <p>One of the perks of playing Alarak is his ability to fast-expand, even on contested maps. While other commanders will need to wait for their hero unit to spawn, or make an army to clear contested expansions, Alarak can use a probe with an overcharged pylon to clear contested expansions.</p>
    <p>Below are pictures that show how to fast-expand on maps. These require a lot of practice to pull off, but can put you ahead economically. It is also advisable to fast-expand with two probes, one as a backup in case you lose the first one to prevent you from wasting an overcharge. You will be using these probes to get vision for the Overcharge.</p>
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
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_coa_protoss_1.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_coa_terran_1.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_coa_zerg_1.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_coa_protoss_2.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_coa_terran_2.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_coa_zerg_2.jpg');
                        preload(imgList);
                        $("input[name='coa']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#coa1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/alarak/fastexpand_coa_'+ race + '_1.jpg';
                            var newImg = $(img).hide();
                            $('#coa1div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'coa1');
                            var oldImg = $('#coa2');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/alarak/fastexpand_coa_'+ race + '_2.jpg';
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
                <td><div class="fastExpand" id="coa1div"><img id="coa1" src="/images/commanderdata/guides/alarak/fastexpand_coa_protoss_1.jpg" alt="Player 1 Fast Expand on Chain of Ascension"></div></td>
                <td><div class="fastExpand" id="coa2div"><img id="coa2" src="/images/commanderdata/guides/alarak/fastexpand_coa_protoss_2.jpg" alt="Player 2 Fast Expand on Chain of Ascension"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td class="centered" colspan="3">Extremely difficult to fast-expand. The general idea is to place a Pylon and overcharge it to clear enemy defenders. Once the defenders are cleared, the Pylon needs to be cancelled before it is complete. Two overcharges are required.</td>
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
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_mw_protoss_1.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_mw_terran_1.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_mw_zerg_1.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_mw_protoss_2.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_mw_terran_2.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_mw_zerg_2.jpg');
                        preload(imgList);
                        $("input[name='mw']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#mw1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/alarak/fastexpand_mw_'+ race + '_1.jpg';
                            var newImg = $(img).hide();
                            $('#mw1div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'mw1');
                            var oldImg = $('#mw2');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/alarak/fastexpand_mw_'+ race + '_2.jpg';
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
                <td><div class="fastExpand" id="mw1div"><img id="mw1" src="/images/commanderdata/guides/alarak/fastexpand_mw_protoss_1.jpg" alt="Player 1 Fast Expand on Malwarfare"></div></td>
                <td><div class="fastExpand" id="mw2div"><img id="mw2" src="/images/commanderdata/guides/alarak/fastexpand_mw_protoss_2.jpg" alt="Player 2 Fast Expand on Malwarfare"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td>Race doesn't affect Expansion</td>
                <td><div class="fastExpand"><img id="me1" src="/images/commanderdata/guides/alarak/fastexpand_me_1.jpg" alt="Player 1 Fast Expand on Miner Evacuation"></div></td>
                <td><div class="fastExpand"><img id="me2" src="/images/commanderdata/guides/alarak/fastexpand_me_2.jpg" alt="Player 2 Fast Expand on Miner Evacuation"></div></td>
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
                <td><a href="/missions/partparcel">Part & Parcel</a>*</td>
                <td>
                    <form action='#'>
                        <label><input type='radio' name='pp' value='protoss' checked>Protoss</label><br>
                        <label><input type='radio' name='pp' value='terran'>Terran</label><br></form>
                    <script>
                        var imgList=[];
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_pp_protoss.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_pp_terran.jpg');

                        preload(imgList);
                        $("input[name='pp']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#pp1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/alarak/fastexpand_pp_'+ race + '.jpg';
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
                <td colspan="2"><div class="fastExpand" id="pp1div"><img id="pp1" src="/images/commanderdata/guides/alarak/fastexpand_pp_protoss.jpg" alt="Fast Expand on Part & Parcel"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a>**</td>
                <td>Race doesn't affect Expansion</td>
                <td colspan="2"><div class="fastExpand"><img id="soa1" src="/images/commanderdata/guides/alarak/fastexpand_soa.jpg" alt="Fast Expand on Scythe of Amon"></div></td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td class="centered" colspan="3">No contested expansion</td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td>
                    <form action='#'>
                        <label><input type='radio' name='tvp' value='protoss' checked>Protoss</label><br>
                        <label><input type='radio' name='tvp' value='terran'>Terran</label><br>
                        <label><input type='radio' name='tvp' value='zerg'>Zerg</label><br></form>
                    <script>
                        var imgList=[];
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_tvp_protoss.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_tvp_terran.jpg');
                        imgList.push('/images/commanderdata/guides/alarak/fastexpand_tvp_zerg.jpg');
                        preload(imgList);
                        $("input[name='tvp']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#tvp1');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/alarak/fastexpand_tvp_'+ race + '.jpg';
                            var newImg = $(img).hide();
                            $('#tvp1div').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            return false;
                        })
                    </script>
                </td>
                <td colspan="2"><div class="fastExpand" id="tvp1div"><img id="tvp1" src="/images/commanderdata/guides/alarak/fastexpand_tvp_protoss.jpg" alt="Fast Expand on The Vermillion Problem"></div></td>
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
    <p>* Zerg has been intentionally omitted from Part & Parcel due to the inconsistency in fast-expanding. This is due to a number of reasons:</p>
    <ul>
        <li>Defense Bots are present on the map, and they move randomly. They have a long leash which means they do not deaggro very quickly.</li>
        <li>There are a large number of Zerg units scattered near the ramps, requiring very precise pathing.</li>
    </ul>
    <p>** Fast-expanding on Scythe of Amon means you have to clear the Sliver at the expansion. This is because of the Void Rift that will keep spawning units. Destroying the Void Rift does not solve the problem as it will respawn unless the Sliver is destroyed. You will need two Overcharges to destroy the first Sliver and any units nearby.</p>
    <h3>No Cooldown Alarak</h3>
    <p>The "No Cooldown Alarak" technique takes advantage of the "Wrath of the Highlord" upgrade for Alarak. Whenver a Supplicant is sacrificed (either to Alarak or an Ascendant), Alarak's abilities are reset off cooldown allowing him to spam his abilities repeatedly. Combined with Empower Me, this can completely devastate enemy camps and hard-to-push locations.</p>
    <p>This technique is sometimes called the "1qe2c" technique, named after the hotkeys assigned to Alarak (1) and his Ascendants + Supplicants (2). The cycle is as follows:</p>
    <ul>
        <li>Select Alarak (1)</li>
        <li>Use both of Alarak's abilities (Q and E)</li>
        <li>Select the Ascendants (2)</li>
        <li>Cast "Sacrifice" (C)</li>
    </ul>
    <p>Below is an example of what the technique looks like.</p>
    <img src="/images/commanderdata/guides/alarak/nocooldownalarak.gif" alt="No Cooldown Alarak">
    <p>The above technique is quite difficult to master and requires a lot of practice, but you can see its power when dealing with the attack wave. By targeting a high-HP unit with Q, you can not only deal damage to it, but also push it back along with the rest of the attack wave.</p>
    <p>Note: This technique only works due to the Wrath of the Highlord buff you receive at Commander Level 15. Additionally, this buff only applies within 15 range. The below picture gives you an example of the maximum distance this can be used.</p>
    <img src="/images/commanderdata/guides/alarak/wrathofthehighlordrange.jpg" alt="Wrath of the Highlord Range">
    <p>In the picture above, the Ascendants are at roughly the maximum possible range to allow for Alarak's skill cooldowns to be reset from Wrath of the Highlord.</p>
    <p>A detailed video of this technique is shown below</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/sfNWdVmIJEY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Clear all non-contested expansions with your first photon overcharge and a pylon.</li>
        <li>Mastering fast-expanding (above) can put you ahead economically.</li>
        <li>Alarak will sacrifice any unit to keep himself alive, including more expensive Robo units. Ensure you have plenty of Supplicants near Alarak to prevent him from sacrificing those more expensive units.</li>
        <li>If going for a pure Ascendant build, manually sacrificing Supplicants will allow your Ascendants to grow much more quickly.</li>
        <li>Getting the Soul Augmentation upgrade pushes Supplicants past the vitality breakpoint for Battlecruiser Yamato cannons, allowing them to be used to draw out Yamato Cannons so that your more expensive units do not.</li>
        <li>More skilled players can use the No Cooldown Alarak technique above with Empower Me to completely decimate enemy bases.</li>
    </ul>
    <h2 id="videos">Video Guides</h2>
    <p>The below videos demonstrate the various fast expands explained earlier.</p>
    <iframe width="950" height="535" src="https://www.youtube.com/embed/videoseries?list=PL-U97hco2Fu5U6PR3fDDVRcpgRFZtveuG" allow="autoplay; encrypted-media" allowfullscreen></iframe>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
