<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Kerrigan</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Kerrigan">
  <meta name="keywords" content="Starcraft co-op guides kerrigan commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.2">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/kerrigan">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/kerrigan.png);
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
    <h1>Co-op Commander Guide: Kerrigan</h1>
    <p id="commanderMotto">Queen of Blades</p>
    <?php include("../scripts/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#comSum">Commander Summary</a></p>
        <p><a href="#levelUnlocks">Level Unlocks</a></p>
        <p><a href="#achievements">Achievements</a></p>
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
    <p>Kerrigan dominates the battlefield with her aggressive abilities combined with some classic Zerg units.</p>
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
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_01.png" alt = "Mutating Carapace"></td>
                <td>Mutating Carapace</td>
                <td>
                    Kerrigan gains temporary life as she deals damage. If killed, she is revived quickly at her Hatchery.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_02.png" alt = "Immobilization Wave"></td>
                <td>Immobilization Wave</td>
                <td>
                    Unlocks Kerrigan's Immobilization Wave ability, which damages and stuns enemies in a large area around her.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_03.png" alt = "Ruthlessness"></td>
                <td>Ruthlessness</td>
                <td>
                    Increases the damage of Kerrigan's Leaping Strike by 150 to 300 and its cast range from 6 to 12. Increases the damage of Psionic Shift from 50 to 100.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_04.png" alt = "Spawning Pool Upgrade Cache"></td>
                <td>Spawning Pool Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Spawning Pool:
                    <ul>
                        <li>Increases Zerglings' life from 35 to 45.</li>
                        <li>Zerglings' attacks reduced their target's armor to 0 for 10 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_05.png" alt = "New Unit:Lurker"></td>
                <td>New Unit:Lurker</td>
                <td>
                    Area-damage ambusher. Must burrow to attack. Morphed from Hydralisks.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_06.png" alt = "Hydralisk & Lurker Upgrade Cache"></td>
                <td>Hydralisk & Lurker Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Hydralisk Den and Lurker Den:
                    <ul>
                        <li>Increase Hydralisks' life from 80 to 100.</li>
                        <li>Unlocks Hydralisk's Frenzy ability, which increases their attack speed by 50% for 15 seconds.</li>
                        <li>Increase Lurkers' attack range from 9 to 12.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_07.png" alt = "Malignant Creep"></td>
                <td>Malignant Creep</td>
                <td>
                    All friendly ground units gain increased attack speed (by 30%) and life regeneration (by 1HP/s for Zerg Units) while on creep. Creep tumors spread creep faster and farther.<br><br>Passive ability.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_08.png" alt = "Omega Worm"></td>
                <td>Omega Worm</td>
                <td>
                    Upgrades the Nydus Network to the Omega Network, which can summon Omega Worms. Omega Worms cost no resources, unload units instantly, and can also be used by your ally.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_09.png" alt = "Kerrigan Upgrade Cache"></td>
                <td>Kerrigan Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Evolution Chamber:
                    <ul>
                        <li>Upgrades Kerrigan's attacks to deal normal damage to her target and then jump to additional nearby enemies.</li>
                        <li>Reduces Kerrigan's ability cost and cooldowns by 20%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_10.png" alt = "Fury"></td>
                <td>Fury</td>
                <td>
                    Kerrigan's attack speed increases by 10% with each attack, up to a maximum of 50%.<br><br>Passive ability.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_11.png" alt = "Spire Upgrade Cache"></td>
                <td>Spire Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Spire and Greater Spire:
                    <ul>
                        <li>The Mutalisk's attack no longer decreases in damage with each subsequent bounce.</li>
                        <li>Increase the Brood Lord's movement speed by 75%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_12.png" alt = "Zergling Evolution: Raptor"></td>
                <td>Zergling Evolution: Raptor</td>
                <td>
                    Upgrades Zerglings to the Raptor strain.<br><br>Fast melee unit. Leaps over obstacles and onto targets from range. Deals increased damage.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_13.png" alt = "Ultralisk Upgrade Cache"></td>
                <td>Ultralisk Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at the Ultralisk Cavern:
                    <ul>
                        <li>Unlock the Ultralisk's Burrow Charge ability. The Ultralisk burrows and charges at an enemy unit.</li>
                        <li>Upgrade Ultralisks' attacks to self-heal for 40% of damage dealt.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_14.png" alt = "Ultralisk Evolution: Torrasque"></td>
                <td>Ultralisk Evolution: Torrasque</td>
                <td>
                    Evolves Kerrigan's ultralisks into the Torrasque strain.<br><br>Heavy assault beast. Has an area-damage cleave attack. When killed, can be revived.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/kerrigan/kerrigan_15.png" alt = "Queen of Blades"></td>
                <td>Queen of Blades</td>
                <td>
                    Increases Kerrigan's energy regeneration by 50%.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Kerrigan are:</p>
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
                <td><img src="/images/commanderdata/achievements/kerrigan/inthenameoflove.jpg" alt="In the Name of Love"></td>
                <td>In the Name of Love</td>
                <td>Stun 5,000 enemy units with Kerrigan's Immobilization Wave in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/kerrigan/makeitrain.jpg" alt="Make It Rain"></td>
                <td>Make It Rain</td>
                <td>Generate 50,000 resources for your ally with Kerrigan's Assimilation Aura in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/kerrigan/nowiambecomedeath.jpg" alt="Now I Am Become Death..."></td>
                <td>Now I Am Become Death...</td>
                <td>Kill 100 units with Kerrigan in a single mission on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/kerrigan/walkingdead.jpg" alt="Walking Dead"></td>
                <td>Walking Dead</td>
                <td>Kill 50 units with Kerrigan's Leaping Strike in a single mission on Hard difficulty.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Easy</p>
    <p>Kerrigan (the hero unit) is extremely powerful, so utilize her as much as possible. Your army composition should be mass Hydralisk, with Nydus (and then Omega) worms to reinforce. Until you get Omega worms, place Nydus worms further away from where you are taking an engagement, as it will be used to reinforce your army a lot slower than usual.</p>
    <p>While leveling through Mastery levels, allocate points into Power Set 1's Energy Regeneration mastery until you hit the desired number of points, before allocating them to Attack Damage.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Kerrigan with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Kerrigan Energy Regeneration</td>
                <td>1.5% per point<br>45% maximum</td>
                <td>22</td>
                <td rowspan="2">Both these masteries can help Kerrigan in different ways and it is up to you to determine how to allocate them. If you find that you are lacking energy, put a few more points into the Energy Regereration mastery.</td>
            </tr>
            <tr>
                <td>Kerrigan Attack Damage</td>
                <td>1 per point<br>30 maximum</td>
                <td>8</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This is a matter of preference. The 22/8 split allows Kerrigan to 3-shot Banshees with her auto-attack. A 28/2 split will allow her to 3-shot Mutalisks.</p>
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
                <td>Combat Unit Vespene Gas Cost</td>
                <td>-1% per point<br>-30% maximum</td>
                <td>?</td>
                <td rowspan="2">Both these masteries are great, and the point allocation depends on the playstyle. A possible split is 11/19, which will allow Immobilization Wave to 1-shot units like Banshees and Swarm Hosts.</td>
            </tr>
            <tr>
                <td>Augmented Immobilization Wave</td>
                <td>3.33% per point<br>100% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">This is a matter of preference depending the playstyle. For solo Kerrigan builds, the Immobilization Wave mastery is great. Otherwise, the Combat Unit mastery will make your units very cheap to produce.</p>
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
                <td>Expeditious Evolutions</td>
                <td>-2% per point<br>-60% maximum</td>
                <td>29</td>
                <td rowspan="2">Generally, the Evolutions mastery is very important. However, possible scenarios can arise where you'd want to increase Kerrigan's Primary Ability damage and attack speed, such as some mutators.</td>
            </tr>
            <tr>
                <td>Primary Ability Damage and Attack Speed</td>
                <td>1% per point<br>30% maximum</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Reducing the cost and research time of evolutions allows you to get "Ability Efficiency" as quickly as possible, improving Kerrigan's power level. The 1 point into the Primary Ability improvement allows you to two-shot burrowed Lurkers.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Kerrigan. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Malevolent Matriarch</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Malignant Creep effectiveness increased by 100%.</li>
                        <li>Queens are no longer slowed and may place Creep Tumors while off creep.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Nydus and Omega Networks are unavailable.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Abathur allies will still have their Nydus Worms upgraded to Omega Worms</li>
                        <li>Malignant Creep does not apply to Stukov's Infested</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>7</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige is a prestige that sacrifices mobility for better creep effectiveness. It works by improving the effectiveness of both you and your ally's units by providing them with extra attack speed, healing and map vision. If using this prestige, it is much better to spread Creep using other Creep Tumors than planting new ones. Newly-planted Creep Tumors build much slower than ones that are spread. This prestige comboes well with partners who can spread creep more easily, such as Stukov and Abathur.</td>
            </tr>
        </tbody>
    </table>
    <p><b>Effectiveness Bonuses:</b></p>
    <ul>
        <li>Attack speed bonus doubled (to +60%)</li>
        <li>Life regeneration rate bonus doubled (to 2HP/s)</li>
        <li>Creep Tumor Build Range increased by 3</li>
        <li>Creep Tumor Vision Range increased by 3</li>
        <li>Creep Spread Range increased by 3</li>
        <li>Creep Spread Speed doubled</li>
    </ul>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Folly of Man</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Kerrigan expends stacks of Fury while using Leaping Strike or Psionic Shift, striking nearby enemies for 50 damage and stunning them for 3 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Kerrigan's Carapace generation reduced by 50%.</li>
                        <li>Kerrigan's ability damage reduced by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>You get 1 Fury stack per auto-attack</li>
                        <li>Fury stacks are limited to 5</li>
                        <li>Stun + Fury Damage range is 10</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>10</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige works well when pushing into enemy bases with Kerrigan. It allows Kerrigan to not only deal damage to enemy units effectively, but also stun enemy units, allowing you to unload units from Nydus worms without getting abilities casted on them. It works better with low numbers of high-HP units, rather than a large numbers of low-HP units. It noticeably slows Kerrigan's ability to focus down buildings.</td>
            </tr>
        </tbody>
    </table>
    <p><b>Fury Stack Mechanics:</b></p>
    <p>Every auto-attack provides you with one Fury stack, up to a maximum of 5 stacks. Each also increases your attack speed by 10%. If Kerrigan does not auto-attack for 5 seconds, her Fury stacks will disappear.</p>
    <p>When either Leaping Strike or Psionic Shift are used, all Fury stacks are expended. Each stack will search for a number of targets as per the table below. The targets selected between stacks may be the same, but each stack may not select the same target. 50 damage is dealt to each of the selected targets. Detection is not required to hit a target.</p>
    <table>
        <thead>
            <tr>
                <th>Stack #</th>
                <th>Targets</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>6</td>
            </tr>
            <tr>
                <td>5</td>
                <td>12</td>
            </tr>
        </tbody>
    </table>
    <p>This implies two things:
        <ol>
            <li>The theoretical maximum amount of damage that can be dealt to a single target is 250 damage. This is caused by each stack selecting that target.</li>
            <li>The theoretical maximum number of units that can be hit is 24 units. This is caused by each stack selecting different targets from the other stacks.</li>
        </ol>
    </p>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Desolate Queen</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Assimilation Aura resource drops increased by 100%.</li>
                        <li>Kerrigan gains Kinetic Blast and Crushing Grip.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Leaping Strike and Psionic Shift are unavailable</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Crushing Grip can be used to reveal Cloaked/Burrowed units</li>
                        <li>Both abilities hit air</li>
                        <li>Both abilities are affected by the Primary Ability Improvement mastery</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige replaces Leaping Strike with an equivalent ability that can also hit air. However, it comes at a cost of losing Psionic Shift (a stronger AoE option), and the ability to use Leaping Strike and Psionic Shift for mobility. Crushing Grip has a very small area-of-effect size (1.75 radius), which means she cannot hit as many units as Psionic Shift theoretically can. But the ability to stun units in that area is invaluable. Be careful when using Immobilization Wave with Crushing Grip, because they can overwrite each others stun durations. The double Assimilation Aura drops noticeably improve ramp-up time.</td>
            </tr>
        </tbody>
    </table>
    <p>For general play, P0 (no prestige, Queen of Blades), P2 (Folly of Man), and P3 (Desolate Queen) are recommended. P3 has a better match-up against air (a general Kerrigan weakness) but a worse match-up against early-game hordes. P2 provides the player with a good long-range damage as long as Kerrigan is able to build up Fury stacks and not take engagements against several enemy units in close proximity, but some find it less beginner friendly. It allows Kerrigan to more effectively clear enemy bases and keep her army alive.</p>
    <h2 id="hero">Hero Unit</h2>
    <img id="heroPic" src="/images/commanderdata/hero/kerrigan/kerrigan.jpg" alt="Kerrigan">
    <p>Spawn time: 4:00</p>
    <p>Respawn time: 1:00</p>
    <p>The abilities for Kerrigan are:</p>
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
                <td><img src="/images/commanderdata/hero/kerrigan/leapingstrike.png" alt = "Leaping Strike"></td>
                <td>Leaping Strike</td>
                <td>Kerrigan leaps to her target and deals 300 damage. Can be used without a target to travel quickly.</td>
                <td>0 seconds</td>
                <td>50</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/psionicshift.png" alt = "Psionic Shift"></td>
                <td>Psionic Shift</td>
                <td>Kerrigan dashes through enemies, dealing 100 damage to all enemies in her path.</td>
                <td>0 seconds</td>
                <td>50</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/assimilationaura.png" alt = "Assimilation Aura"></td>
                <td>Assimilation Aura</td>
                <td>Causes all nearby enemies to drop resources when killed. Effect lasts for 15 seconds.</td>
                <td>120 seconds</td>
                <td>0</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/immobilizationwave.png" alt = "Immobilization Wave"></td>
                <td>Immobilization Wave</td>
                <td>Deals 100 damage to enemies in a large area around Kerrigan (27 range) and stuns them for 10 seconds.<br><br>Heroic units are slowed.</td>
                <td>Coolup: 600 seconds<br>Cooldown: 180 seconds</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p>Selecting the Desolate Queen prestige replaces your hero unit with a new hero unit. This unit has abilities itself, shown below:</p>
    <img id="heroPic" src="/images/commanderdata/hero/kerrigan/kerrigan2.jpg" alt="Kerrigan">
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
                <td><img src="/images/commanderdata/hero/kerrigan/kineticblast.png" alt = "Kinetic Blast"></td>
                <td>Kinetic Blast</td>
                <td>Kerrigan deals 300 damage to target unit or structure from long range.</td>
                <td>0 seconds</td>
                <td>50</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/crushinggrip.png" alt = "Crushing Grip"></td>
                <td>Crushing Grip</td>
                <td>Enemies in target area are stunned and take 50 damage over 5 seconds. Heroic units are slowed.</td>
                <td>0 seconds</td>
                <td>75</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/assimilationaura.png" alt = "Assimilation Aura"></td>
                <td>Assimilation Aura</td>
                <td>Causes all nearby enemies to drop resources when killed. Effect lasts for 15 seconds.</td>
                <td>120 seconds</td>
                <td>0</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/immobilizationwave.png" alt = "Immobilization Wave"></td>
                <td>Immobilization Wave</td>
                <td>Deals 100 damage to enemies in a large area around Kerrigan and stuns them for 10 seconds.<br><br>Heroic units are slowed.</td>
                <td>Coolup: 600 seconds<br>Cooldown: 180 seconds</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p>The upgrades for Kerrigan are:</p>
    <table class="heroUpgrades">
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
                <td><img src="/images/commanderdata/hero/kerrigan/heroicfortitude.png" alt="Heroic Fortitude"></td>
                <td>Heroic Fortitude</td>
                <td>Kerrigan gains +200 maximum life.<br>Life-regeneration rate increased by 100%.</td>
                <td>100/100</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/chainreaction.png" alt="Chain Reaction"></td>
                <td>Chain Reaction</td>
                <td>Kerrigan's attacks deal normal damage to her target then jump to additional nearby enemies. Deals 10 damage to up to four additional targets.</td>
                <td>150/150</td>
                <td>90 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/kerrigan/abilityefficiency.png" alt="Ability Efficiency"></td>
                <td>Ability Efficiency</td>
                <td>Kerrigan's ability costs and cooldowns are reduced by 20%.</td>
                <td>200/200</td>
                <td>120 seconds</td>
            </tr>
        </tbody>
    </table>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Kerrigan is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/kerrigan/hydralisk.jpg" alt="Hydralisk">
    <p>Mass Hydralisk builds work very well for Kerrigan because of their large amounts of burst potential from their Frenzy, when they are unloaded from Omega Worms.</p>
    <div class="techContainer"><img class="army" src="/images/commanderdata/units/kerrigan/lurker.jpg" alt="Lurker"><div class="techAdd">+</div></div>
    <p>Add Lurkers to your army composition when you need to defend at particular choke points.</p>
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
    <p>For more information on Kerrigan's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Kerrigan's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/queen.jpg" alt="Queen">
            <p>Queen</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Can be used for Larva injects and spreading Creep.</li>
                <li>Generally not recommended for creep spread due to Omega Worms.</li>
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
                        <td><img src="/images/commanderdata/unitskills/kerrigan/spawncreeptumor.png" alt="Spawn Creep Tumor"></td>
                        <td>Spawn Creep Tumor</td>
                        <td>A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.<br><br>Bonus: Zerg move faster on creep.</td>
                        <td>15 seconds</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/kerrigan/spawnlarva.png" alt="Spawn Larva"></td>
                        <td>Spawn Larva</td>
                        <td>Target Hatchery, Lair, or Hive spawns 4 Larvae in 40 seconds.</td>
                        <td>25 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitskills/kerrigan/transfusion.png" alt="Transfusion"></td>
                        <td>Transfusion</td>
                        <td>Instantly restores 125 life to target biological unit or structure.</td>
                        <td>0 seconds</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/zergling.jpg" alt="Zergling">
            <p>Zergling</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Usually used to clear expansion.</li>
                <li>Can be used to clean up enemy units after an area has been cleared.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/metabolicboost.png" alt="Metabolic Boost"></td>
                        <td>Metabolic Boost</td>
                        <td>Increases the movement speed of Zerglings by 60%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/hardenedcarapace.png" alt="Hardened Carapace"></td>
                        <td>Hardened Carapace</td>
                        <td>Zerglings gain +10 maximum life.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/adrenaloverload.png" alt="Adrenal Overload"></td>
                        <td>Adrenal Overload</td>
                        <td>Increases the attack speed of Zerglings by 40%.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/shreddingclaws.png" alt="Shredding Claws"></td>
                        <td>Shredding Claws</td>
                        <td>Zergling attacks reduce their target's armor to 0 for 10 seconds.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/hydralisk.jpg" alt="Hydralisk">
            <p>Hydralisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does extremely high DPS.</li>
                <li>Great anti-air choice.</li>
                <li>Fragile unit that needs to be guarded by a more powerful frontline.</li>
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
                        <td><img src="/images/commanderdata/unitskills/kerrigan/frenzy.png" alt="Frenzy"></td>
                        <td>Frenzy</td>
                        <td>Attack speed increased by 50% for 15 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/muscularaugments.png" alt="Muscular Augments"></td>
                        <td>Muscular Augments</td>
                        <td>Improves Hydralisk movement speed by 25% and increases attack range by +1.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/ancillarycarapace.png" alt="Ancillary Carapace"></td>
                        <td>Ancillary Carapace</td>
                        <td>Hydralisk gains +20 maximum life.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/frenzy.png" alt="Frenzy"></td>
                        <td>Frenzy</td>
                        <td>Increases the attack speed of Hydralisks by 50% for 15 seconds.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/lurker.jpg" alt="Lurker">
            <p>Lurker</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does damage in a straight line, making it a great defensive unit.</li>
                <li>Range upgrade makes it significantly better than most other defensive units.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/seismicspines.png" alt="Seismic Spines"></td>
                        <td>Seismic Spines</td>
                        <td>Increases the attack range of Lurkers by +3.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/ultralisk.jpg" alt="Ultralisk">
            <p>Ultralisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Great tank for more fragile units.</li>
                <li>Usually not recommended to mass them due to them body-blocking each other.</li>
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
                        <td><img src="/images/commanderdata/unitskills/kerrigan/burrowcharge.png" alt="Burrow Charge"></td>
                        <td>Burrow Charge</td>
                        <td>Ultralisk burrows and charges toward units. When the Ultralisk unburrows, all enemy units nearby are knocked back and stunned for 2 seconds.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/chitinousplating.png" alt="Chitinous Plating"></td>
                        <td>Chitinous Plating</td>
                        <td>Grants Ultralisks +2 armor.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/burrowcharge.png" alt="Burrow Charge"></td>
                        <td>Burrow Charge</td>
                        <td>Allows Ultralisks to use the Burrow Charge ability.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/tissueassimilation.png" alt="Tissue Assimilation"></td>
                        <td>Tissue Assimilation</td>
                        <td>Grants Ultralisk's life equal to 40% of all damage dealt from normal attacks.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/mutalisk.jpg" alt="Mutalisk">
            <p>Mutalisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Powerful unit that can target both air and ground units.</li>
                <li>Bouncing glaives can obliterate enemy attack waves.</li>
                <li>Extremely fragile and susceptible to splash damage.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/rapidregeneration.png" alt="Rapid Regeneration"></td>
                        <td>Rapid Regeneration</td>
                        <td>Mutalisks regenerate life quickly while out of combat.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/viciousglave.png" alt="Vicious Glave"></td>
                        <td>Vicious Glave</td>
                        <td>The Mutalisk's attack bounces three additional times, hitting up to six targets. Bounces also travel farther.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/severingglave.png" alt="Severing Glave"></td>
                        <td>Severing Glave</td>
                        <td>The Mutalisk's attack no longer decreases in damage with each subsequent bounce.</td>
                        <td>200/200</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/kerrigan/broodlord.jpg" alt="Brood Lord">
            <p>Brood Lord</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Generally not recommended to be used because it's fragile and expensive.</li>
                <li>Other units can fill its role much more effectively.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/kerrigan/porouscartilage.png" alt="Porous Cartilage"></td>
                        <td>Porous Cartilage</td>
                        <td>Increases Brood Lord movement speed by 75% and life by 100.</td>
                        <td>150/150</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Kerrigan. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        14 Overlord<br>
        14 Macro Hatchery at Rocks<br>
        19 Extractor<br>
        21 Extractor<br>
        24 Macro Hatchery at Rocks<br>
        28 Spawning Pool<br>
        33 Overlord<br>
        Kerrigan -> Rocks
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>None</p>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Ability Efficiency works on all of Kerrigan's abilities, including Immobilization Wave.</li>
        <li>Kerrigan is extremely powerful, especially in the early game. Make sure she's always on the battlefield.</li>
        <li>Use Assimilation Aura as soon as you can. It can propel your economy forward.</li>
        <li>Omega Worms give Kerrigan unmatched mobility. At the very minimum, you should have two worms built, and hotkeyed for use.</li>
        <li>Use Omega Worms for detection and for spreading creep around the map.</li>
        <li>Loading units into Nydus/Omega Worms will prevent them from taking DoT (damage over time) damage.</li>
        <li>Units inside the Worms still gain the Malignant Creep HP regeneration buff.</li>
        <li>Immobilization Wave has a range larger than the screen width. Make sure you position Kerrigan accordingly for maximum value.</li>
        <li>Immobilization Wave decloaks any targets hit by it.</li>
        <li>The first two upgrades you must get are "Heroic Fortitude" which increases Kerrigan's HP and "Ability Efficiency" which reduces Kerrigan's cooldowns.</li>
        <li>Kerrigan's Creep bonuses applies to all creep, including Stukov's automatic creep spread.</li>
        <li>Use Queens to Transfuse Kerrigan to increase uptime of the Hero unit, especially during Hero solos.</li>
        <li>Kerrigan's Psionic Shift does not need detection to damage cloaked or burrowed targets.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
