<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Fenix</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Fenix">
  <meta name="keywords" content="Starcraft co-op guides fenix commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.2">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/fenix">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/fenix.png);
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
    <h1>Co-op Commander Guide: Fenix</h1>
    <p id="commanderMotto">Purifier Executor</p>
    <?php include("../scripts/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#comSum">Commander Summary</a></p>
        <p><a href="#levelUnlocks">Level Unlocks</a></p>
        <p><a href="#achievements">Achievements</a></p>
        <p><a href="#suits">Fenix Suits</a></p>
        <p><a href="#leveling">Sub-Ascension Leveling</a></p>
        <p><a href="#masteries">Masteries</a></p>
        <p><a href="#prestiges">Prestiges</a></p>
        <p><a href="#army">Recommended Army Composition</a></p>
        <p><a href="#units">Combat Units</a></p>
        <p><a href="#champions">Champion A.I.'s</a></p>
        <p><a href="#buildOrder">Build Order</a></p>
        <p><a href="#guide">Gameplay Guide</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Fenix uses a variety of different suits, backed up with an army led by AI Champions to dominate the battlefield.</p>
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
                <td><img src="/images/commanderdata/progression/fenix/fenix_01.png" alt = "Variable Deployment"></td>
                <td>Variable Deployment</td>
                <td>
                    Fenix can warp in anywhere on the battlefield using multiple Armor Suit configurations. Armor Suits only regenerate life and energy while not active on the field.<br><br>The cost of Fenix's combat units is reduced by 20%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_02.png" alt = "Unlock: Purifier Conclave"></td>
                <td>Unlock: Purifier Conclave</td>
                <td>
                    Unlocks the Purifier conclave structure, allowing you to research A.I. personalities of Protoss heroes. Once researched, these A.I. Personalities will automatically download into any available host unit.<br><br>AI Personalities unlocked:
                    <ul>
                        <li>Kaldalis - Legionnaire</li>
                        <li>Talis - Adept</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/fenix/fenix_03.png" alt = "Unlock: Cybros Arbiter Suit"></td>
                <td>Unlock: Cybros Arbiter Suit</td>
                <td>
                   Unlocks the Cybros Arbiter suit. The Cybros Arbiter suit can cloak itself and nearby allies, Recall friendly units to its location, and use Stasis to disable enemy units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_04.png" alt = "Shock Trooper Champion Research Cache"></td>
                <td>Shock Trooper Champion Research Cache</td>
                <td>
                    Unlocks the following upgrades at the Twilight Council:
                    <ul>
                        <li>Kaldalis' attacks deal area damage.</li>
                        <li>Talis' Ricochet Glaive bounces 5 additional times and caused affected units to take bonus damage.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_05.png" alt = "Champion AI: Taldarin & Mojo"></td>
                <td>Champion AI: Taldarin & Mojo</td>
                <td>
                    Unlocks additional A.I. Personalities at the Purifier Conclave:
                    <ul>
                        <li>Taldarin - Immortal</li>
                        <li>Mojo - Scout</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_06.png" alt = "Fenix Upgrade Cache"></td>
                <td>Fenix Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Forge:
                    <ul>
                        <li>All Fenix Armor Suits gain +15 attack damage.</li>
                        <li>Fenix's Cybros Arbiter Suit gains detection.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_07.png" alt = "New Unit: Disruptor"></td>
                <td>New Unit: Disruptor</td>
                <td>
                    Robotic Disruption Unit. Can use Purification Nova to deal heavy area damage. Warped in at the Robotics Facility.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_08.png" alt = "Champion AI: Warbringer & Clolarion"></td>
                <td>Champion AI: Warbringer & Clolarion</td>
                <td>
                    Unlocks additional A.I. Personalities at the Purifier Conclave:
                    <ul>
                        <li>Warbringer - Colossus</li>
                        <li>Clolarion - Carrier</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_09.png" alt = "Specialist Upgrade Cache"></td>
                <td>Specialist Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades:
                    <ul>
                        <li>Disruptors become permanently cloaked (Researched at the Robotics Bay).</li>
                        <li>Disruptor Purification Nova explodes twice (Researched at the Robotics Bay).</li>
                        <li>Conservator Protection Field duration increased by 100% (Researched at the Cybernetics Core).</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/fenix/fenix_10.png" alt = "Operational Efficiency"></td>
                <td>Operational Efficiency</td>
                <td>
                    Production and tech structures no longer have tech requirements, have their mineral costs reduced by 50%, and have their gas costs reduced by 100%.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_11.png" alt = "Avenging Protocol"></td>
                <td>Avenging Protocol</td>
                <td>
                    Champions gain attack (10% per supply) and movement speed (5% per supply) each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/fenix/fenix_12.png" alt = "Assault Champion Upgrade Cache"></td>
                <td>Assault Champion Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades:
                    <ul>
                        <li>Taldarin's attacks store damage on enemies which is released and does area damage when the unit is killed (Researched at the Robotics Bay).</li>
                        <li>Allows Mojo to fire a barrage of Anti-Matter Missiles (Researched at the Fleet Beacon).</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/fenix/fenix_13.png" alt = "Rapid Recharge"></td>
                <td>Rapid Recharge</td>
                <td>
                    Fenix Armor Suits that are currently offline regenerate health and shields 20% faster.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/fenix/fenix_14.png" alt = "Siege Champion Upgrade Cache"></td>
                <td>Siege Champion Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades:
                    <ul>
                        <li>Warbringer gains the ability to fire a devastating blast at an enemy unit (Researched at the Robotics Bay).</li>
                        <li>Clolarion can build Interdictors to bomb enemy units (Researched at the Fleet Beacon).</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/fenix/fenix_15.png" alt = "Tactical Data Web"></td>
                <td>Tactical Data Web</td>
                <td>
                    Each A.I. Champion's special ability gains a bonus for each active host shell of the same type (up to 20 supply).
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Fenix are:</p>
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
                <td><img src="/images/commanderdata/achievements/fenix/carrierme.jpg" alt="Carrier Me"></td>
                <td>Carrier Me</td>
                <td>Warp in 4 Carriers and complete the Clolarion A.I. research within the first 10 minutes of a Co-op Mission.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/fenix/championsassemble.jpg" alt="Champions Assemble"></td>
                <td>Champions Assemble</td>
                <td>Have all 6 champions on the battlefield simultaneously during a Co-op Mission.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/fenix/suitup.jpg" alt="Suit Up!"></td>
                <td>Suit Up!</td>
                <td>Deal 300,000 damage with Fenix in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/fenix/theaipersonalitytest.jpg" alt="The A.I. Personality Test"></td>
                <td>The A.I. Personality Test</td>
                <td>Deal 300,000 damage with champions in Co-op Missions.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="suits">Fenix Suits</h2>
    <p>Coolup time: 4:00</p>
    <p>Instead of calldowns, Fenix can deploy one of three different Armor Suits onto the battlefield at any location with vision. There is a 15 second cooldown for suit deployment. Should a suit be destroyed, there is a 180 second cooldown before it can be used again. Each suit is designed for a particular purpose and has its own abilities. These are shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/fenix/praetorarmor.jpg" alt="Praetor Armor">
            <p>Praetor Armor</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/fenix/thunderouscharge.png" alt="Thunderous Charge"></td>
                        <td>Thunderous Charge</td>
                        <td>Fenix charges at the target location, dealing 50 damage and stunning all enemies for 5 seconds.</td>
                        <td>10 seconds</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/fenix/whirlwind.png" alt="Whirlwind"></td>
                        <td>Whirlwind</td>
                        <td>All nearby enemies take 70 damage per second for 3 seconds. Fenix can move while Whirlwind is active.</td>
                        <td>10 seconds</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/fenix/shieldcapacitor.png" alt="Shield Capacitor"></td>
                        <td>Shield Capacitor</td>
                        <td>Fully restores Fenix's shields. autocasting activates Shield Capacitor when Fenix's shields have been depleted.</td>
                        <td>5 seconds</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/fenix/solaritedragoon.jpg" alt="Solarite Dragoon">
            <p>Solarite Dragoon</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/fenix/solarcannon.png" alt="Solar Cannon"></td>
                        <td>Solar Cannon</td>
                        <td>Fires a piercing beam that deals 100 damage to all enemy ground units in its path.</td>
                        <td>6 seconds</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/fenix/solariteflare.png" alt="Solarite Flare"></td>
                        <td>Solarite Flare</td>
                        <td>Fires an air bursting flare that deals 100 damage to enemy air units.</td>
                        <td>10 seconds</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/fenix/arsenalovercharge.png" alt="Arsenal Overcharge"></td>
                        <td>Arsenal Overcharge</td>
                        <td>Activating Arsenal Overcharge causes your damaging abilities to have no cooldown for 10 seconds.</td>
                        <td>120 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/fenix/cybrosarbiter.jpg" alt="Cybros Arbiter">
            <p>Cybros Arbiter</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/fenix/stasisfield.png" alt="Stasis Field"></td>
                        <td>Stasis Field</td>
                        <td>Places enemy units in target area into stasis for 15 seconds. Units in stasis cannot move, attack, be attacked or be affected by abilities.</td>
                        <td>10 seconds</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/fenix/cloakingfield.png" alt="Enable Cloaking Field"></td>
                        <td>Enable Cloaking Field</td>
                        <td>Enable Cloaking Field, cloaking friendly units near Fenix. Costs 5 Energy per second to maintain.</td>
                        <td>0 seconds</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/fenix/recall.png" alt="Recall"></td>
                        <td>Recall</td>
                        <td>Teleports all friendly units in the target area to the location of the Arbiter.</td>
                        <td>0 seconds</td>
                        <td>100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>The upgrades for Fenix are:</p>
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
                <td><img src="/images/commanderdata/hero/fenix/purifierarmaments.png" alt="Purifier Armaments"></td>
                <td>Purifier Armaments</td>
                <td>All Fenix Armor Suits gain +15 attack damage.</td>
                <td>75/75</td>
                <td>90 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/fenix/observationprotocol.png" alt="Observation Protocol"></td>
                <td>Observation Protocol</td>
                <td>Grants Fenix's Cybros Arbiter Suit detection, allowing him to detect cloaked enemies.</td>
                <td>50/50</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/fenix/astrongheart.png" alt="A Strong Heart"></td>
                <td>A Strong Heart</td>
                <td>"I no longer wish to be called by the name Fenix.". Renames "Fenix" to "Talandar". Purely aesthetic.</td>
                <td>13/13</td>
                <td>10 seconds</td>
            </tr>
        </tbody>
    </table>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Easy</p>
    <p>Use a mix of units, focusing Adept/Immortal/Carrier during early stages of leveling. Make sure you rely on your Fenix suit abilities as much as possible, to increase the survivability of your army.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 3's Initial Starting Supply mastery if you choose to use it.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Fenix with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Fenix Suit Attack Speed</td>
                <td>2% per point<br>60% maximum</td>
                <td>?</td>
                <td rowspan="2">If a player actively switches suits often, draining their energy completely with each use, they should consider the Energy Regeneration of the suit.</td>
            </tr>
            <tr>
                <td>Fenix Suit Offline Energy Regeneration</td>
                <td>0.75% per point<br>22.5% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This is a matter of preference, and will depend on your playstyle. If you use Fenix to deal with attack waves, the Energy Regeneration is recommended. However, the Attack Speed mastery is useful when using Fenix combined with your army.</p>
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
                <td>Champion A.I. Attack Speed</td>
                <td>1% per point<br>30% maximum</td>
                <td>?</td>
                <td rowspan="2">Champion A.I's are extremely powerful and the decision here comes down to ensure they should be able to tank, or if they should be the core damage dealers in Fenix's army.</td>
            </tr>
            <tr>
                <td>Champion A.I Life and Shields</td>
                <td>2% per point<br>60% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This mastery is a matter of preference. The Life and Shield mastery can give Champions like Kaldalis a lot of health, while the Attack Speed mastery can give Champions a lot of additional DPS.</p>
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
                <td>27</td>
                <td rowspan="2">The extra starting supply can help Fenix focus on rushing out army units and workers faster, by reducing the initial cost commitment to building pylons. However, this has a permanent effect of slowing him down during the later stages of the game due to a weaker Chrono Boost.</td>
            </tr>
            <tr>
                <td>Extra Starting Supply</td>
                <td>2 per point<br>60 maximum</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The point allocation above is provided as a starting point. Depending on the efficiency of your macro, more points in the starting supply will reduce your need to build Pylons, while Chrono Boost efficiency can reduce the time it takes to get out your first Champion.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Fenix. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Akhundelar</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>All Armor Suit damage increased by 100%.</li>
                        <li>Ability cooldowns reduced by 50%.</li>
                        <li>Life, shield, and energy regeneration increased by 100% while in storage.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>All Armor Suit calldown cooldowns increased by 700%.</li>
                        <li>Each suit can only be sustained for 20 seconds at a time.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Suit Cooldown: 2 minutes</li>
                        <li>Suit Rebuild Time: 5 minutes</li>
                        <li>Contrary to the description, the Arbiter suit doesn't actually have a cooldown</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>Akhundelar allows Fenix to clear entire enemy bases by using carefully-placed abilities. The prestige is extremely powerful, but knowledge of enemy bases and units within them is important to ensure the player selects the correct suit for handling the base. Additionally, losing a suit, especially the Solarite Dragoon can be extremely punishing. The prestige also taxes player's macro abilities because (assuming optimal play) players will be micro'ing suits 50% of the time.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Network Administrator</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Tactical Data Web effectiveness increased by 200%.</li>
                        <li>All combat unit costs reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>All non-heroic combat unit damage reduced by 50% and vitals reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Kaldalis benefits the most from this prestige due to his cleave attack</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>15</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige requires a unique playstyle for Fenix. The idea is to have Fenix and his Champion A.I's alongside him on the front line, pushing into enemy bases and dealing with attack waves. Behind them, but away from the heat of the battle, the shells provide quick reinforcements for A.I's once they die on the frontline. Pushing in with the shell army will cause the player to take heavy losses, so adequate management of control groups is a must.</td>
            </tr>
        </tbody>
    </table>
    <p><b>Effectiveness Bonuses:</b></p>
    <ul>
        <li>Kaldalis Empowered Blades damage bonus per shell tripled</li>
        <li>Talis Ricochet Glaive damage bonus per shell tripled</li>
        <li>Taldarin Gravimetric Overload damage storage bonus per shell tripled</li>
        <li>Warbringer Purification Blast damage bonus per shell tripled</li>
        <li>Mojo Suppression Procedure damage bonus per shell tripled</li>
        <li>Clolarion Interdictor damage bonus per shell tripled</li>
    </ul>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Unconquered Spirit</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Avenging Protocol effectiveness increased by 100%.</li>
                        <li>Champion A.I.s that die refund 75% of their base unit cost.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Champion A.I.s do not gain additional life or shields and have reduced attack range (-2 range).</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Champion A.I vitality mastery still works, although it should not be used with this prestige</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>11</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige encourages players to take advantage of Avenging Protocol by reducing the Champion A.I. vitality and attack ranges. This forces them to the frontline and makes them easier to kill by Amon's forces. While in theory, this strategy may work, one of the issues that players will face with this prestige is the issue of body-blocking. As A.I Champions get transferred to a new shell, they might find themselves at the back of the army, meaning that Avenging Protocol may wear off by the time they push through to the front to fight. This prestige works well with the Champion A.I attack speed mastery.</td>
            </tr>
        </tbody>
    </table>
    <p><b>Effectiveness Bonuses:</b></p>
    <ul>
        <li>Avenging Protocol Attack Speed Bonus doubled</li>
        <li>Avenging Protocol Movement Speed Bonus doubled</li>
    </ul>
    <p>For general play, Akhundelar is a good prestige to use. If the player prefers to have an untimed Fenix, they may play without a Prestige Talent selected. For a more challenging play experience, players may try to use Network Administrator.</p>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Fenix is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/fenix/legionnaire.jpg" alt="Legionnaire"><img class="army" src="/images/commanderdata/units/fenix/adept.jpg" alt="Adept"><img class="army" src="/images/commanderdata/units/fenix/immortal.jpg" alt="Immortal"><img class="army" src="/images/commanderdata/units/fenix/colossus.jpg" alt="Colossus"><img class="army" src="/images/commanderdata/units/fenix/scout.jpg" alt="Scout"><img class="army" src="/images/commanderdata/units/fenix/carrier.jpg" alt="Carrier"><img class="army" src="/images/commanderdata/units/fenix/conservator.jpg" alt="Conservator"><br>
    <img class="army" src="/images/commanderdata/units/fenix/kaldalis.jpg" alt="Kaldalis"><img class="army" src="/images/commanderdata/units/fenix/talis.jpg" alt="Talis"><img class="army" src="/images/commanderdata/units/fenix/taldarin.jpg" alt="Taldarin"><img class="army" src="/images/commanderdata/units/fenix/warbringer.jpg" alt="Warbringer"><img class="army" src="/images/commanderdata/units/fenix/mojo.jpg" alt="Mojo"><img class="army" src="/images/commanderdata/units/fenix/clolarion.jpg" alt="Clolarion">
    <p>You should be making the full complement of Fenix's units to take advantage of the very powerful Champion AI's along with their Tactical Data Web. Use Conservators to reduce damage taken by your army before you take engagements.</p>
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
    <p>For more information on Fenix's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Fenix's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/legionnaire.jpg" alt="Legionnaire">
            <p>Legionnaire</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Relatively ineffective unit.</li>
                <li>Generally recommended to make a small number to provide shells for the Kaldalis AI.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/charge.png" alt="Charge"></td>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/charge.png" alt="Charge"></td>
                        <td>Charge</td>
                        <td>Allows Legionnaires to intercept nearby enemies. Also increases the movement speed of Legionnaires by 0.25.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/adept.jpg" alt="Adept">
            <p>Adept</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Should be the core of Fenix's army.</li>
                <li>Cheap but very effective unit.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/psionicprojection.png" alt="Psionic Projection"></td>
                        <td>Psionic Projection</td>
                        <td>Attacks summon an invulnerable Shade that will attack enemies for a short time for 33% damage per shot, 3 shots total.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/conservator.jpg" alt="Conservator">
            <p>Conservator</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>A must-have in any army composition.</li>
                <li>Protective Field reduces all incoming damage to your units.</li>
                <li>Phasing mode can allow for quick warp reinforcements.</li>
                <li>Recommended to have at least three in your army for constant Protective Fields.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/protectivefield.png" alt="Protective Field"></td>
                        <td>Protective Field</td>
                        <td>Creates a shield that reduces all incoming attack damage to friendly units by 35%. Lasts 15 seconds.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/fenix/optimizedemitters.png" alt="Optimized Emitters"></td>
                        <td>Optimized Emitters</td>
                        <td>Increases the duration of the Conservator's Protective Field by 100%.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/immortal.jpg" alt="Immortal">
            <p>Immortal</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful, high-damage unit.</li>
                <li>Recommended to always have them in most of your builds.</li>
                <li>Great units to counter armored units.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/barrier.png" alt="Barrier"></td>
                        <td>Barrier</td>
                        <td>Absorbs up to 100 damage. Lasts for 10 seconds.</td>
                        <td>60 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/colossus.jpg" alt="Colossus">
            <p>Colossus</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Build a very small number of them.</li>
                <li>Splash damage works best against zerg builds.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/extendedthermallance.png" alt="Extended Thermal Lance"></td>
                        <td>Extended Thermal Lance</td>
                        <td>Colossi gain +3 range.</td>
                        <td>100/100</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/disruptor.jpg" alt="Disruptor">
            <p>Disruptor</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Extremely niche unit.</li>
                <li>High burst damage.</li>
                <li>Generally not worth making as other units can out-perform them for a lower cost.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/purificationnova.png" alt="Purification Nova"></td>
                        <td>Purification Nova</td>
                        <td>Shoots out a ball of energy that emits a powerful nova dealing 150 splash damage and an additional 50 shield damage to nearby ground units and structures.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/fenix/cloakingmodule.png" alt="Cloaking Module"></td>
                        <td>Cloaking Module</td>
                        <td>Permanently cloaks all Disruptors.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/fenix/purificationecho.png" alt="Purification Echo"></td>
                        <td>Purification Echo</td>
                        <td>The Disruptor's Purification Nova explodes again after 2 seconds, dealing 75 damage in a larger area.</td>
                        <td>75/75</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/scout.jpg" alt="Scout">
            <p>Scout</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does bonus damage to light ground units making them highly effective on infested maps.</li>
                <li>Does bonus damage to armored air units.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/combatsensorarray.png" alt="Combat Sensor Array"></td>
                        <td>Combat Sensor Array</td>
                        <td>Scouts gain +3 air attack range and +1 ground attack range.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/carrier.jpg" alt="Carrier">
            <p>Carrier</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Interceptors can mess with enemy AI, providing for a great distraction.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/buildinterceptor.png" alt="Build Interceptor"></td>
                        <td>Build Interceptor</td>
                        <td>Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.<br><br>Can attack ground and air units. 8 Interceptors max.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/gravitoncatapult.png" alt="Graviton Catapult"></td>
                        <td>Graviton Catapult</td>
                        <td>Makes the Carrier launch Interceptors more quickly by 100%.</td>
                        <td>150/150</td>
                        <td>80 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="champions">Champion A.I.'s</h2>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/kaldalis.jpg" alt="Kaldalis">
            <p>Kaldalis</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Hero Zealot.</li>
                <li>Very powerful with Avenging Protocol.</li>
                <li>Empowered Blades Cleave damage applies to primary target as well.</li>
                <li>Take full advantage of Tactical Data web when using Prestiges.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/engage.png" alt="Engage"></td>
                        <td>Engage</td>
                        <td>Kaldalis intercepts the target unit.</td>
                        <td>5s</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/empoweredblades.png" alt="Empowered Blades"></td>
                        <td>Empowered Blades</td>
                        <td>Kaldalis' attacks deal area damage.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/talis.jpg" alt="Talis">
            <p>Talis</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Hero Adept.</li>
                <li>"Ricochet Glaive" upgrade is highly recommended because it causes enemies to take significantly more damage from your units.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/ricochetglaive.png" alt="Ricochet Glaive"></td>
                        <td>Ricochet Glaive</td>
                        <td>An amplified Glaive that ricochets and hits up to 3 enemy units for 25 (35 vs Light) damage each.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/fenix/debilitationsystem.png" alt="Debilitation System"></td>
                        <td>Debilitation System</td>
                        <td>Talis' Ricochet Glaive bounces 5 additional times and causes every unit hit by Ricochet Glaive to take 5 additional damage for 5 seconds.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/taldarin.jpg" alt="Taldarin">
            <p>Taldarin</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Hero Immortal.</li>
                <li>Should be your first Champion out to clear rocks (along with Fenix if the expansion is contested).</li>
                <li>Synergizes well with splash damage as his auto-attacks pulls enemies closer together.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/barrier.png" alt="Barrier"></td>
                        <td>Barrier</td>
                        <td>Absorbs up to 200 damage. Lasts for 10 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/gravimetricoverload.png" alt="Gravimetric Overload"></td>
                        <td>Gravimetric Overload</td>
                        <td>Taldarin's attacks store 25% of the damage dealt on the target. When that unit is killed, it explodes, dealing all of the stored damage to nearby enemy units.</td>
                        <td>75/75</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/warbringer.jpg" alt="Warbringer">
            <p>Warbringer</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Hero Colossus.</li>
                <li>Auto-attacks slows down enemy units.</li>
                <li>Should be the second Champion out to help with early attack waves and pushing.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/purificationblast.png" alt="Purification Blast"></td>
                        <td>Purification Blast</td>
                        <td>Fire a devastating blast that deals 150 damage the target unit.</td>
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
                        <th><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals">/<img src="/images/commanderdata/unitupgrades/icongas_protoss.png" alt="Gas"></th>
                        <th>Research Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/fenix/purificationblast.png" alt="Purification Blast"></td>
                        <td>Purification Blast</td>
                        <td>Warbringer fires a devastating blast that deals 150 damage the target unit.</td>
                        <td>75/75</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/mojo.jpg" alt="Mojo">
            <p>Mojo</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Hero Scout.</li>
                <li>Auto-attacks stuns enemy air units for 2 seconds.</li>
                <li>Useful for disabling air spellcasters like Battlecruisers.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/suppressionprocedure.png" alt="Suppression Procedure"></td>
                        <td>Suppression Procedure</td>
                        <td>Fire a barrage of Anti-Matter Missiles, dealing 6 (12 vs Armored) area damage and stunning nearby enemy air units for 1 second.</td>
                        <td>5s</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/combatsensorarray.png" alt="Combat Sensor Array"></td>
                        <td>Combat Sensor Array</td>
                        <td>Scouts gain +3 air attack range and +1 ground attack range.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/fenix/suppressionprocedure.png" alt="Suppression Procedure"></td>
                        <td>Suppression Procedure</td>
                        <td>Mojo fires a barrage of Anti-Matter Missiles, dealing area damage and stunning nearby enemy air units for 1 second.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/fenix/clolarion.jpg" alt="Clolarion">
            <p>Clolarion</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Hero Carrier.</li>
                <li>Solar Beam can only target enemy air units.</li>
                <li>Very tanky unit that can be brought to the front of your army for pushes.</li>
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
                        <td><img src="/images/commanderdata/unitskills/fenix/buildinterceptor.png" alt="Build Interceptor"></td>
                        <td>Build Interceptor</td>
                        <td>Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.<br><br>Can attack ground and air units. 8 Interceptors max.</td>
                        <td>15s</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable autocast">
                        <td><img src="/images/commanderdata/unitskills/fenix/buildinterdictor.png" alt="Build Interdictor"></td>
                        <td>Build Interdictor</td>
                        <td>Builds Interdictors that automatically bomb enemy ground units for 12 damage.<br><br>Can attack ground units.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/fenix/interdictors.png" alt="Interdictors"></td>
                        <td>Interdictors</td>
                        <td>In addition to his Interceptors, Clorarion deploys 2 Interdictors that automatically bomb enemy ground units.</td>
                        <td>75/75</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>The below table lists out the effects of Tactical Data Web on the Champion A.I.'s:</p>
    <div class="tableContainer">
        <table>
            <thead>
                <tr>
                    <th>Champion</th>
                    <th>Affected Ability</th>
                    <th>Ability Description</th>
                    <th>Tactical Data Web Effect</th>
                    <th>Shells</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Kaldalis</td>
                    <td>Empowered Blades</td>
                    <td>Kaldalis attacks deal 9 damage to nearby enemy targets.</td>
                    <td>Empowered Blades deal an additional 4.5 damage for each networked Legionnaire (up to 30 damage).</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>Talis</td>
                    <td>Ricochet Glaive</td>
                    <td>An amplified glaive that ricochets and hits up to 3 enemy units for 25 (35 vs light) damage each. 5 second cooldown.</td>
                    <td>Ricochet Glaive's does an additional 2.5 (3.5 vs Light) damage for each networked Adept (up to 25 (35 vs Light) damage).</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Taldarin</td>
                    <td>Gravimetric Overload</td>
                    <td>Each attack stores 25% of the damage dealt on the target. When that unit is killed, it explodes, dealing all of the stored damage to nearby enemies.</td>
                    <td>Gravimetric Overload stores 10% additional damage per attack for each networked Immortal (up to 50% damage).</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Warbringer</td>
                    <td>Purification Blast</td>
                    <td>Fires a devastating blast that deals 150 damage to the target unit. 5 second cooldown.</td>
                    <td>Purification Blast does an additional 45 damage for each networked Colossus (up to 150 damage).</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Mojo</td>
                    <td>Suppression Procedure</td>
                    <td>Fires a barrage of Anti-Matter missiles, dealing 6 (12 vs armored) area damage and stunning nearby enemy air units for 1 seconds. 5 second cooldown.</td>
                    <td>Suppression Procedure does an additional 0.9 (1.8 vs Armored) damage for each networked Scout (up to 6 (12 vs Armored) damage).</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>Clolarion</td>
                    <td>Interdictors</td>
                    <td>Automatically bombs enemy ground units for 12 damage.</td>
                    <td>Interdictor damage is increased by 3 for each networked Carrier (up to 10 damage).</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Fenix. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        15 Pylon<br>
        16 Assimilator<br>
        17 Robotics Facility<br>
        17 Assimilator<br>
        22 Immortal + AI -> Rocks<br>
        26 Pylon<br>
        31 Nexus<br>
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>A lot of Fenix players will attempt to rush Carriers. This is due to the lack of Tech requirements for Fenix. A player can simply build a Stargate and a Fleet Beacon (at the same time) without having to build a Gateway or a Cybernetics Core. Additionally, Carriers are end-game units that can swarm the enemy when massed. However, the downside to this rush is it significantly slows down the player from expanding - something which is extremely important when trying to mass carriers. Additionally, it foregoes Fenix's other champions, which are extremely powerful in their own right. It is much more effective to do a 6-champion build with a mix of units.</p>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Get Taldarin out as soon as possible to clear your expansion. Back him up with Fenix if the expansion is contested.</li>
        <li>It is recommended to build 6 gateways to provide you with your Adepts.</li>
        <li>Aim to only have one Legionnaire (Kaldalis) out at a time to take advantage of the Avenging Protocol stacks.</li>
        <li>Use the Conservator Protective Field whenever you want to push into enemy bases.</li>
        <li>Keep changing Fenix Armor Suits so that you are using the one that most effectively serves your need.</li>
        <li>When using the Praetor Armor, ensure you disable the Whirlwind ability from autocast as this wastes energy and would be much better used if manually controlled.</li>
        <li>Kaldalis and Warbringer can be limited in terms of their attack speed. The video below explains this further:
            <iframe width="475" height="268" src="https://www.youtube.com/embed/VyUOweN-ymQ" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
