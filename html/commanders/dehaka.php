<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Commander Guide - Dehaka</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Dehaka">
  <meta name="keywords" content="Starcraft co-op guides dehaka commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.2">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/dehaka">
  <style>
        #content{
            background: url(/images/commanderdata/bgs/dehaka.png);
            background-repeat: no-repeat;
        }
        #essenceOrder td{
            max-width:250px;
            vertical-align:top;
        }
        #essenceOrder td:nth-child(1){
            vertical-align:middle;
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
    <h1>Co-op Commander Guide: Dehaka</h1>
    <p id="commanderMotto">Primal Pack Leader</p>
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
        <p><a href="#essence">Essence Farming</a></p>
    </div>
    <h2 id="comSum">Commander Summary</h2>
    <p>Dehaka uses Essence gained from fallen enemies to grow and get stronger, while being backed up with a powerful force of Primal units.</p>
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
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_01.png" alt = "Essence Gatherer"></td>
                <td>Essence Gatherer</td>
                <td>
                    Dehaka can collect essence, grow stronger, and choose mutations. Dehaka spawns in faster than other hero units and can devour Primal Drones to reduce his respawn time.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_02.png" alt = "New Units: Ravasaur & Primal Igniter"></td>
                <td>New Units: Ravasaur & Primal Igniter</td>
                <td>
                    Units can be commanded to engage in primal combat to force evolutions. Unlocks the following new evolutions:
                    <ul>
                        <li>Primal Zerglings can evolve into Ravasaurs.</li>
                        <li>Primal Roaches can evolve into Primal Igniters.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_03.png" alt = "Ravasaur Upgrade Cache"></td>
                <td>Ravasaur Upgrade Cache</td>
                <td>
                   Unlocks the following upgrades at Glevig's Den:
                   <ul>
                       <li>Ravasaurs gain increased movement speed and attack range.</li>
                       <li>Ravasaurs gain +15 attack damage against armored enemies.</li>
                   </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_04.png" alt = "Deep Tunnel"></td>
                <td>Deep Tunnel</td>
                <td>
                    Dehaka, Primal Wurms, and Greater Primal Wurms gain the ability to Deep Tunnel.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_05.png" alt = "Primal Insight"></td>
                <td>Primal Insight</td>
                <td>
                    Dehaka’s maximum level increases from 10 to 12 and unlocks the following mutation choices for Dehaka:
                    <ul>
                        <li>Gain the ability to detect cloaked and burrowed units.</li>
                        <li>Gain increased armor.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_06.png" alt = "New Units: Primal Mutalisk & Primal Guardian"></td>
                <td>New Units: Primal Mutalisk & Primal Guardian</td>
                <td>
                    Units can be commanded to engage in primal combat to force evolutions. Unlocks the following new evolutions:
                    <ul>
                        <li>Primal Hydralisks can evolve into Primal Mutalisks.</li>
                        <li>Primal Roaches can evolve into Primal Guardians.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_07.png" alt = "Primal Mutalisk & Primal Guardian Upgrade Cache"></td>
                <td>Primal Mutalisk & Primal Guardian Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at Murvar’s Den:
                    <ul>
                        <li>Primal Mutalisks revive on death after a short time.</li>
                        <li>Primal Guardians can fire area damaging spores at enemy ground units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_08.png" alt = "New Units: Creeper Host & Primal Impaler"></td>
                <td>New Units: Creeper Host & Primal Impaler</td>
                <td>
                    Units can be commanded to engage in primal combat to force evolutions. Unlocks the following new evolutions:
                    <ul>
                        <li>Primal Hydralisks can evolve into Impalers.</li>
                        <li>Primal Hosts can evolve into Creeper Hosts.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_09.png" alt = "Primal Igniter & Primal Impaler Upgrade Cache"></td>
                <td>Primal Igniter & Primal Impaler Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at Glevig's Den:
                    <ul>
                        <li>Primal Igniters deal bonus damage to light units.</li>
                        <li>Impaler attacks tenderize enemies, causing them to take damage over time. Devouring tenderized enemies with Dehaka invokes 25% of the normal cooldown time.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_10.png" alt = "Evolved Pack Leaders"></td>
                <td>Evolved Pack Leaders</td>
                <td>
                    The Pack Leaders and Primal Wurms gain new abilities:
                    <ul>
                        <li>Glevig gains a flame breath that deals area damage.</li>
                        <li>Murvar also spawns explosive creepers.</li>
                        <li>Dakrun reflects damage (20 per hit) to enemy attackers.</li>
                        <li>Primal Wurms and Greater Primal Wurms gain the ability to project a powerful stream of acid.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_11.png" alt = "New Unit: Tyrannozor"></td>
                <td>New Unit: Tyrannozor</td>
                <td>
                    Units can be commanded to engage in primal combat to force evolutions. Unlocks the following new evolution:
                    <ul>
                        <li>Primal Ultralisks can evolve into Tyrannozors.</li>
                        <li>Tyrannozors gain an ability that deals area damage.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_12.png" alt = "Survival Instinct"></td>
                <td>Survival Instinct</td>
                <td>
                    Dehaka’s maximum level increases from 12 to 14 and unlocks the following mutation choices for Dehaka:
                    <ul>
                        <li>Passively heal nearby friendly units.</li>
                        <li>Can attack air units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_13.png" alt = "Elite Primal Zerg Upgrade Cache"></td>
                <td>Elite Primal Zerg Upgrade Cache</td>
                <td>
                    Unlocks the following upgrades at Murvar and Dakrun’s Dens:
                    <ul>
                        <li>Primal Ultralisk and Tyrannozor attacks have a chance to stun enemies.</li>
                        <li>Tyrannozor grants nearby friendly units extra armor.</li>
                        <li>Creeper Host Creepers gain increased movement speed and can target air units.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_14.png" alt = "Zerus Cunning"></td>
                <td>Zerus Cunning</td>
                <td>
                    Dehaka’s maximum level increases from 14 to 15 and Dehaka starts with an additional mutation point.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/dehaka/dehaka_15.png" alt = "Gene Mutation"></td>
                <td>Gene Mutation</td>
                <td>
                    Primal combat evolutions have a chance to mutate, providing permanent passive bonuses that can increase life, attack speed, grant life leech, and more.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <h2 id="achievements">Achievements</h2>
    <p>The commander-specific achievements for Dehaka are:</p>
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
                <td><img src="/images/commanderdata/achievements/dehaka/essencebuffet.jpg" alt="Essence Buffet"></td>
                <td>Essence Buffet</td>
                <td>Devour 2,000 supply with Dehaka in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/dehaka/powerleveling.jpg" alt="Power Leveling"></td>
                <td>Power Leveling</td>
                <td>Reach level 6 with Dehaka within the first 6 minutes on Hard difficulty.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/dehaka/primalrage.jpg" alt="Primal Rage"></td>
                <td>Primal Rage</td>
                <td>Deal 400,000 damage with Glevig, Murvar, and Dakrun in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/dehaka/smashysmashy.jpg" alt="Smashy Smashy"></td>
                <td>Smashy Smashy</td>
                <td>Deal 800,000 damage with Dehaka in Co-op Missions.</td>
            </tr>
        </tbody>
    </table>
    <h2 id="calldowns">Calldowns</h2>
    <p>The calldowns for Dehaka, at level 15, with no mastery points added are:</p>
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
                <td><img src="/images/commanderdata/abilities/dehaka/summongreaterprimalwurm.png" alt = "Summon Greater Primal Wurm"></td>
                <td>Summon Greater Primal Wurm</td>
                <td>Requirements: Glevig's Den<br><br>Summons a powerful temporary defensive Wurm that can detect cloaked and burrowed units.</td>
                <td>
                    <ul>
                        <li>Useful for early-game detection.</li>
                        <li>Excellent last-minute detection and damage (e.g. Nukes in base).</li>
                        <li>Can be spawned in any explored location, regardless of vision.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 120 seconds</li>
                        <li>Cooldown: 120 seconds</li>
                        <li>Max Charges: 3</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/dehaka/summonglevig.png" alt = "Summon Glevig"></td>
                <td>Summon Glevig</td>
                <td>Requirements: Glevig's Den<br><br>Summons the Primal Pack Leader Glevig and a small pack of Primal Zerg. Glevig is a powerful stationary ranged attacker that deals area damage and can relocate his position with Deep Tunnel. Glevig will fight for 60 seconds before returning to his den.</td>
                <td>
                    <ul>
                        <li>Great for dealing with attack waves.</li>
                        <li>Excellent mobility with Deep Tunnel (although vision is required).</li>
                        <li>Useful for dealing structure damage.</li>
                    </ul>

                </td>
                <td>
                    <ul>
                        <li>Coolup: 120 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/dehaka/summonmurvar.png" alt = "Summon Murvar"></td>
                <td>Summon Murvar</td>
                <td>Requirements: Murvar's Den<br><br>Summons the Primal Pack Leader Murvar. Murvar spawns locusts and can create a cloud that slows enemy movement speed and prevents enemy units and structures from attacking or using energy-based abilities. Murvar will fight for 60 seconds before returning to her den.</td>
                <td>
                    <ul>
                        <li>Useful when pushing into enemy bases to prevent units from attacking.</li>
                        <li>Deals reasonably good amount of damage.</li>
                        <li>Getting the Aerial Burst Sacs upgrade will allow creepers to target air units as well.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 60 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/dehaka/summondakrun.png" alt = "Summon Dakrun"></td>
                <td>Summon Dakrun</td>
                <td>Requirements: Dakrun's Den<br><br>Summons the Primal Pack Leader Dakrun. Darkrun is a heavily armored juggernaut that can charge at a target location to deal heavy damage and knock back enemy units in the area. Dakrun will fight for 60 seconds before returning to his den.</td>
                <td>
                    <ul>
                        <li>Damage reflect makes him really effective at dealing with low-HP waves.</li>
                        <li>Good at tanking damage.</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Coolup: 60 seconds</li>
                        <li>Cooldown: 360 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>Each of the calldowns above bring a new unit onto the battlefield. These units have abilities themselves, shown below.</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/dehaka/greaterprimalwurm.jpg" alt="Greater Primal Wurm">
            <p>Greater Primal Wurm</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/dehaka/greaterbilestream.png" alt="Greater Bile Stream"></td>
                        <td>Greater Bile Stream</td>
                        <td>Deals 70 damage per second to the target unit for 5 seconds.</td>
                        <td>20 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/dehaka/greaterdeeptunnel.png" alt="Greater Deep Tunnel"></td>
                        <td>Greater Deep Tunnel</td>
                        <td>Quickly burrow to any visible location.</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/dehaka/glevig.jpg" alt="Glevig">
            <p>Glevig</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/dehaka/incendiaryacid.png" alt="Incendiary Acid"></td>
                        <td>Incendiary Acid</td>
                        <td>Carpets the ground in fire. Enemy units in the area take 500 damage over 5 seconds.  Can be set to Autocast.</td>
                        <td>6 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/abilities/dehaka/deeptunnel.png" alt="Deep Tunnel"></td>
                        <td>Deep Tunnel</td>
                        <td>Glevig burrows to the target location and erupts, dealing damage to units in the area and knocking them back.</td>
                        <td>0 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/dehaka/murvar.jpg" alt="Murvar">
            <p>Murvar</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/dehaka/spawnswarm.png" alt="Spawn Swarm"></td>
                        <td>Spawn Swarm</td>
                        <td>Spawns 6 Primal Locusts and 6 Explosive Creepers that fight for 25 seconds.</td>
                        <td>10 seconds</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/dehaka/oppressivestench.png" alt="Oppressive Stench"></td>
                        <td>Oppressive Stench</td>
                        <td>Creates a cloud that slows enemy movement speed and prevents enemy units and structures from attacking or using energy-based abilities. Lasts for 5 seconds.</td>
                        <td>3 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/dehaka/dakrun.jpg" alt="Dakrun">
            <p>Dakrun</p>
        </div>
        <div>
            <table class="unitAbilities">
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
                        <td><img src="/images/commanderdata/abilities/dehaka/brutalcharge.png" alt="Brutal Charge"></td>
                        <td>Brutal Charge</td>
                        <td>Charge to a target location knocking back units  in the area and dealing 200 damage.</td>
                        <td>10 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 id="leveling">Sub-Ascension Leveling</h2>
    <p>Difficulty: Moderate</p>
    <p>The biggest challenge with Dehaka is during the early game, where Dehaka only has one point to allocate. This point should go towards Devour. In early levels (before you have Primal Combat units), build Hydralisks and Ultralisks as your main army composition. The Ultralisks can tank while the Hydralisks deal damage from the back.</p>
    <h2 id="masteries">Masteries</h2>
    <p>Below are the three Power Sets for Dehaka with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Devour Healing Increase</td>
                <td>1% per point<br>30% maximum</td>
                <td>30</td>
                <td rowspan="2">The Buff Duration mastery can help lengthen the time Dehaka has buffs, helping him move from one base to another while maintaining the buffs. A full stack of buffs can also strengthen Dehaka's survivability, however, the challenge comes in obtaining those buffs without the bonus to healing.</td>
            </tr>
            <tr>
                <td>Devour Buff Duration</td>
                <td>3% per point<br>90% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">With efficient play, Devour will have a short cooldown, allowing you to replenish the buff as needed, making the Buff Duration mastery redundant.</p>
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
                <td>Greater Primal Wurm Cooldown</td>
                <td>-2% per point<br>-60% maximum</td>
                <td>0</td>
                <td rowspan="2">The Primal Wurm Cooldown can benefit players that prefer to spam the Wurms for vision, and for support. Note that the support they can provide Dehaka is minimal. Usually, it is better to not use them as much, rather than spending mastery points to reduce their cooldown.</td>
            </tr>
            <tr>
                <td>Pack Leaders Active Duration</td>
                <td>1% per point<br>30% maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Pack Leaders are the most important calldowns for Dehaka, so increasing the time they stay on the field is the better pick.</p>
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
                <td>Gene Mutation Chance</td>
                <td>1% per point<br>30% maximum</td>
                <td>?</td>
                <td rowspan="2">Players that prefer to use Dehaka's combat units instead of Dehaka himself would probably prefer to use the Gene Mutation chance which can improve Dehaka's units significantly.</td>
            </tr>
            <tr>
                <td>Dehaka Attack Speed</td>
                <td>1% per point<br>30% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">Both mastery choices are competitive choices, and the player will have to determine what mastery allocation to use to help their playstyle. The Gene Mutation Chance is slightly better as it is very rare for Dehaka to not utilize any army units.</p>
    <h2 id="prestiges">Prestiges</h2>
    <p>Below are the prestiges for Dehaka. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P1: <strong>Devouring One</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Devour applies its benefits to all nearby friendly units.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Dehaka has 0 base armor, loses the Scorching Breath ability, and has his max level reduced by 4.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>All friendly units within 10 range of Dehaka gets the Devour buffs</li>
                        <li>When Devouring air units, buff applied is +2 range for ranged weapons</li>
                        <li>When Devouring Psionic units, buff applied is only cooldown reduction</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige allows Dehaka to buff his own and allied units as he devours enemies in battle. It is especially powerful when playing with commanders that have Hero units. However, if your ally is not able to take advantage of Dehaka's buff's, the impact of the prestige is greatly diminished and the player is better off not using a Prestige Talent.</td>
            </tr>
        </tbody>
    </table>
    <p>Devouring a Psionic unit will provide an ability cooldown buff to all units within Dehaka's vicinity. This makes Psionic units even more valuable. The interactions with various commanders' Heroic units are listed below:</p>
    <li>Abathur: Brutalisk Deep Tunnel and both Symbiote abilities get cooldown reduction</li>
    <li>Alarak: None of his abilities get cooldown reduction. Mothership Thermal Lance and Teleport get cooldown reduction, however Shadow of Death Destroyer Warp In does not</li>
    <li>Dehaka: All pack leaders get cooldown reduction</li>
    <li>Fenix: Praetor Armor and Solarite Dragoon abilities do not get cooldown reduction. All A.I Champions get cooldown reduction for their abilities except for Clolarion's Interceptors and Interdictors</li>
    <li>Kerrigan: Immobilization Wave and Assimilion Aura do not get cooldown reduction</li>
    <li>Nova: Only Sabotage Drone gets cooldown reduction</li>
    <li>Raynor: All Hyperions abilities get cooldown reduction</li>
    <li>Stetmann: Only Garyzone is affected</li>
    <li>Stukov: Only Apocalisk Burrow Charge gets cooldown reduction</li>
    <li>Tychus: Only non-charge-based abilities get cooldown reduction</li>
    <li>Vorazun: All Shadow Guard abilities are affected</li>
    <li>Zagara: Apex Predator Deep Tunnel gets cooldown reduction only</li>
    <li>Zeratul: Cleave, Void Seeker get cooldown reduction only. Both Avatars and all Legions get cooldown reduction</li>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P2: <strong>Primal Contender</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Pack Leaders and their entourage deal 50% more damage and have 100% increased life.</li>
                        <li>Pack Leader cooldowns reduced by 33%. </li>
                        <li>Pack Leaders can consume Essence for Dehaka.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>Dehaka exits the map while a Pack Leader is active.</li>
                        <li>Only one Pack Leader may be active at a time.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Dehaka respawns from where he left the map</li>
                        <li>Pack Leaders do not have abilities until they get unlocked with the Level 10 talent</li>
                        <li>Pack Leader Coolup times are not affected</li>
                        <li>Combined with the Pack Leader Duration mastery, you can have Pack Leaders on the map nearly 100% of the game length</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>This prestige can vastly increase the amount of damage that can be dealt by Pack Leaders by increasing their life and allowing the player to spawn them more often. However, it can be challenging for players that are unaware on how to select Pack Leaders to deal with a situation they are facing. However, this presige does alleviate the pressure on players to micro several things at the same time, allowing them to focus on a single Pack Leader at a time.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <tbody>
            <tr>
                <td class="prestigeTitle" colspan="2">P3: <strong>Broodbrother</strong></td>
            </tr>
            <tr>
                <th>Advantages</th>
                <td>
                    <ul>
                        <li>Dehaka spawns a clone.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Disadvantages</th>
                <td>
                    <ul>
                        <li>If either Dehaka or the clone dies, the other dies as well.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Notes</th>
                <td>
                    <ul>
                        <li>Essence is not shared between Dehaka and Zweihaka</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>Effective Level</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Advice</th><td>Because Essence is not shared between the two hero units, the amount of Essence required to reach maximum level is essentially doubled. Combined with the fact that micro-ing Dehaka (while also macro-ing behind) is already very difficult, adding a second Hero unit that also increases your liability makes this prestige fairly ineffective.</td>
            </tr>
        </tbody>
    </table>
    <p>The choice of prestige will come down to both player and ally skill. A player with a highly-skilled ally might be able to get a lot of value out of Devouring One. On the other hand, a highly-skilled player that understands how to use Pack Leaders effectively may get a lot of mileage out of Primal Contender. For safer play, playing without a Prestige Talent is fine too.</p>
    <h2 id="hero">Hero Unit</h2>
    <img id="heroPic" src="/images/commanderdata/hero/dehaka/dehaka.jpg" alt="Dehaka">
    <p>Spawn time: 1:00</p>
    <p>Respawn time: 1:30</p>
    <p>The abilities for Dehaka are (at max level 3):</p>
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
                <td><img src="/images/commanderdata/hero/dehaka/leap.png" alt = "Leap"></td>
                <td>Leap</td>
                <td>Dehaka leaps to the target location, dealing 145 damage to nearby enemy ground units. Each enemy hit grants Dehaka 1 armour for 2 seconds.</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/intimidatingroar.png" alt = "Intimidating Roar"></td>
                <td>Intimidating Roar</td>
                <td>Dehaka terrifies nearby enemies, reducing their movement speed by 75% and attack speed by 25% for 15 seconds.<br>Enemies affected by Intimidating Roar have their armor reduced by 2 and cannot use abilities that cost energy.</td>
                <td>30 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/devour.png" alt = "Devour"></td>
                <td>Devour</td>
                <td>Instantly kill the target enemy unit to heal 5% Life and gain passive abilities based on the enemy type for 25 seconds. The cooldown is based on the amount of life the enemy has when killed.</td>
                <td>~ seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/scorchingbreath.png" alt = "Scorching Breath"></td>
                <td>Scorching Breath</td>
                <td>Dehaka's fiery breath scorches the earth, dealing weapon damage to all enemy units in its path. 3 charges max.</td>
                <td>30 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/dehaka/deeptunnel.png" alt="Deep Tunnel"></td>
                <td>Deep Tunnel</td>
                <td>Quickly burrow to any visible location.</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>As Dehaka gathers esssence, he also gains increased attack and HP stats as follows:</p>
    <ul>
        <li>Attack: This is equal to (level +1)x10. For example, at level 11, he will have 120 attack.</li>
        <li>HP: For every Essence he gathers, he will gain +0.75 max life and regenerate 2 HP.</li>
    </ul>
    <h2 id="army">Recommended Army Composition</h2>
    <p>The recommended army composition for Dehaka is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/dehaka/primalmutalisk.jpg" alt="Primal Mutalisk">
    <p>Primal Mutalisks provide an all-round solution to dealing with enemies. Remember that you will need to first engage attack wave with Dehaka (preferably devouring a Psionic unit to deal splash damage wiping out most of the dangerous units) and then cleaning up with the Mutalisks.</p>
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
    <p>For more information on Dehaka's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Dehaka's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalzergling.jpg" alt="Primal Zergling">
            <p>Primal Zergling</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Extremely basic unit.</li>
                <li>Generally not worth making, as they are outperformed by other units.</li>
                <li>Most commonly used to clear expansion rocks.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/ravasaur.jpg" alt="Ravasaur">
            <p>Ravasaur</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Zerglings through Primal Combat.</li>
                <li>Objectively worse than Primal Zerglings, due to reduced DPS.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/dissolvingacid.png" alt="Dissolving Acid"></td>
                        <td>Dissolving Acid</td>
                        <td>Ravasaurs deal +15 damage to armored targets.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/enlargedparotidglands.png" alt="Enlarged Parotid Glands"></td>
                        <td>Enlarged Parotid Glands</td>
                        <td>Increases movement speed and attack range.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalroach.jpg" alt="Primal Roach">
            <p>Primal Roach</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Basic unit.</li>
                <li>Doesn't see much play, due to it being less effective than its upgraded form, the Primal Igniter.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/glialreconstitution.png" alt="Glial Reconstitution"></td>
                        <td>Glial Reconstitution</td>
                        <td>Increases the movement speed of Primal Roaches by 31% and Primal Igniters by 19%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primaligniter.jpg" alt="Primal Igniter">
            <p>Primal Igniter</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Primal Roaches through Primal Combat.</li>
                <li>Extremely effective on infested maps, due to its splash damage, and bonus damage to light units with the "Concentrated Fire" upgrade.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/glialreconstitution.png" alt="Glial Reconstitution"></td>
                        <td>Glial Reconstitution</td>
                        <td>Increases the movement speed of Primal Roaches by 31% and Primal Igniters by 19%.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/concentratedfire.png" alt="Concentrated Fire"></td>
                        <td>Concentrated Fire</td>
                        <td>Increases the Primal Igniter's damage against light enemies by 15.</td>
                        <td>100/100</td>
                        <td>120 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalguardian.jpg" alt="Primal Guardian">
            <p>Primal Guardian</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Primal Roaches through Primal Combat.</li>
                <li>Effective on infested maps with the "Explosive Spores" upgrade.</li>
                <li>Useful in small numbers when dealing with ground compositions.</li>
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
                        <td><img src="/images/commanderdata/unitskills/dehaka/explosivespores.png" alt="Explosive Spores"></td>
                        <td>Explosive Spores</td>
                        <td>Fires an Explosive Spore at the target, causing the target and all nearby enemy ground units to take 50 damage.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/explosivespores.png" alt="Explosive Spores"></td>
                        <td>Explosive Spores</td>
                        <td>Primal Guardians can fire an Explosive Spore at the target, causing the target and all nearby enemy ground units to take 50 damage.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/primordialfury.png" alt="Primordial Fury"></td>
                        <td>Primordial Fury</td>
                        <td>Primal Guardian attacks temporarily increases its attack speed by 10%. Can stack up to 50% increased attack speed.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalhydralisk.jpg" alt="Primal Hydralisk">
            <p>Primal Hydralisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Basic unit.</li>
                <li>Can be used on shorter maps, however, they are much more effective in their upgraded forms, Primal Mutalisks or Impalers.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/muscularaugments.png" alt="Muscular Augments"></td>
                        <td>Muscular Augments</td>
                        <td>Increases Primal Hydralisk movement speed by 22% and attack range by 1.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalmutalisk.jpg" alt="Primal Mutalisk">
            <p>Primal Mutalisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Primal Hydralisks through Primal Combat.</li>
                <li>The main work-horse of Dehaka's army.</li>
                <li>Great all-round unit that works in all situations, although not as effective as more specialized units.</li>
                <li>"Primal Reconstitution" allows Mutalisks to respawn, and should be obtained before bringing Mutalisks into combat.</li>
                <li>"Slicing Glaive" upgrade should only be obtained when dealing with <a href="/guides/enemycomps">enemy air compositions</a>.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/slicingglaive.png" alt="Slicing Glaive"></td>
                        <td>Slicing Glaive</td>
                        <td>Primal Mutalisks deal 100% increased damage against air units.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/shiftingcarapace.png" alt="Shifting Carapace"></td>
                        <td>Shifting Carapace</td>
                        <td>Primal Mutalisks take 50% less damage while moving.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/primalreconstitution.png" alt="Primal Reconstitution"></td>
                        <td>Primal Reconstitution</td>
                        <td>Primal Mutalisks revive on death after a short time. Cannot occur more than once every 60 seconds.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/impaler.jpg" alt="Impaler">
            <p>Impaler</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Primal Hydralisks through Primal Combat.</li>
                <li>Fantastic siege unit.</li>
                <li>Can deal great amounts of damage to structures.</li>
                <li>Has higher attack range than vision range.</li>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/tenderize.png" alt="Tenderize"></td>
                        <td>Tenderize</td>
                        <td>Units hit by Impalers become tenderized. Tenderized units take 200 damage over 10 seconds. A tenderized unit Devoured by Dehaka will invoke 25% of the normal cooldown time.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalhost.jpg" alt="Primal Host">
            <p>Primal Host</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Basic unit.</li>
                <li>Good structure DPS.</li>
                <li>Useful when trying to lay siege to enemy fortifications.</li>
                <li>Should be mixed in with its upgraded form, the Creeper Host.</li>
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
                        <td><img src="/images/commanderdata/unitskills/dehaka/spawnprimallocusts.png" alt="Spawn Primal Locusts"></td>
                        <td>Spawn Primal Locusts</td>
                        <td>Siege unit that attacks by spawning Primal Locusts. Primal Locusts last 25 seconds.<br><br>Primal Locusts can attack ground units.</td>
                        <td>30 seconds</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <p>Upgrades: None</p>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/creeperhost.jpg" alt="Creeper Host">
            <p>Creeper Host</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Primal Hosts through Primal Combat.</li>
                <li>Good structure DPS.</li>
                <li>Useful when trying to lay siege to enemy fortifications.</li>
                <li>Extremely effective on defensive maps.</li>
                <li>Should be mixed in with its basic form, the Primal Host.</li>
                <li>"Aerial Burst Sacs" upgrade makes these significantly more effective.</li>
                <li>Can be useful when dealing with attack waves.</li>
                <li>Should be made in small quantities.</li>
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
                        <td><img src="/images/commanderdata/unitskills/dehaka/spawnexplosivecreeper.png" alt="Spawn Explosive Creeper"></td>
                        <td>Spawn Explosive Creeper</td>
                        <td>Siege unit that attacks by spawning Explosive Creepers. Creepers last 25 seconds.<br><br>Creepers can attack ground units.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/aerialburstsacs.png" alt="Aerial Burst Sacs"></td>
                        <td>Aerial Burst Sacs</td>
                        <td>Allows the Creeper Host's Creepers to target air units and increases their movement speed.</td>
                        <td>150/150</td>
                        <td>90 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/primalultralisk.jpg" alt="Primal Ultralisk">
            <p>Primal Ultralisk</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Basic unit.</li>
                <li>Not commonly used, due to their high price.</li>
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
                        <td><img src="/images/commanderdata/unitskills/dehaka/brutalcharge.png" alt="Brutal Charge"></td>
                        <td>Brutal Charge</td>
                        <td>Charge to target location knocking back units in the area and dealing 25 damage.</td>
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
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/brutalcharge.png" alt="Brutal Charge"></td>
                        <td>Brutal Charge</td>
                        <td>Primal Ultralisks can charge to a target location, knocking back units in the area and dealing 25 damage.</td>
                        <td>50/50</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/healingadaptation.png" alt="Healing Adaptation"></td>
                        <td>Healing Adaptation</td>
                        <td>Primal Ultralisks and Tyrannozors regenerate life quickly when out of combat (10HP/s).</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/dehaka/impalingstrike.png" alt="Impaling Strike"></td>
                        <td>Impaling Strike</td>
                        <td>Primal Ultralisk and Tyrannozor melee attacks have a 20% chance to stun for 2 seconds.</td>
                        <td>100/100</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/dehaka/tyrannozor.jpg" alt="Tyrannozor">
            <p>Tyrannozor</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Created from 2 Primal Ultralisks through Primal Combat.</li>
                <li>Extremely expensive unit.</li>
                <li>Rarely used due to its high cost, and its roles being filled by much cheaper units.</li>
                <li>Can be used to spawn-camp enemies with the Barrage of Spikes upgrade researched.</li>
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
                            <td><img src="/images/commanderdata/unitskills/dehaka/barrageofspikes.png" alt="Barrage of Spikes"></td>
                            <td>Barrage of Spikes</td>
                            <td>Unleash a Barrage of Spikes, dealing 100 damage to enemy ground and air units around the Tyrannozor.</td>
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
                            <td><img src="/images/commanderdata/unitupgrades/dehaka/impalingstrike.png" alt="Impaling Strike"></td>
                            <td>Impaling Strike</td>
                            <td>Primal Ultralisk and Tyrannozor melee attacks have a 20% chance to stun for 2 seconds.</td>
                            <td>100/100</td>
                            <td>60 seconds</td>
                        </tr>
                        <tr>
                            <td><img src="/images/commanderdata/unitupgrades/dehaka/barrageofspikes.png" alt="Barrage of Spikes"></td>
                            <td>Barrage of Spikes</td>
                            <td>Tyrannozors can unleash a Barrage of Spikes, dealing 100 damage to nearby enemy ground and air units.</td>
                            <td>100/100</td>
                            <td>60 seconds</td>
                        </tr>
                        <tr>
                            <td><img src="/images/commanderdata/unitupgrades/dehaka/healingadaptation.png" alt="Healing Adaptation"></td>
                            <td>Healing Adaptation</td>
                            <td>Primal Ultralisks and Tyrannozors regenerate life quickly when out of combat (10HP/s).</td>
                            <td>100/100</td>
                            <td>60 seconds</td>
                        </tr>
                        <tr>
                            <td><img src="/images/commanderdata/unitupgrades/dehaka/tyrantsprotection.png" alt="Tyrant's Protection"></td>
                            <td>Tyrant's Protection</td>
                            <td>Tyrannozors grants nearby friendly units 2 armor.</td>
                            <td>100/100</td>
                            <td>60 seconds</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
    <h2 id="buildOrder">Build Order</h2>
    <p>Below is the standard economic build order for Dehaka. For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        23 Extractor<br>
        23 Primal Warden<br>
        25 Extractor<br>
        29 Glevig's Den<br>
        29 2x Zerglings -> Rocks<br>
        Primal Warden -> Rocks<br>
        31 Primal Hive
    </p>
    <h2 id="guide">Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>Most inexperienced Dehaka players will use the Dehaka hero unit to clear rocks as soon as he spawns, known in the co-op community as "Rockslapping". This is an extremely inefficient use of Dehaka, as enemies are at their weakest at the start of the game. A much more effective use for Dehaka would be to move near enemy camps and lure some of the units away and kill them. This allows you to gather Essence and level Dehaka up, allowing for greater pushing potential, survivability, and map clearing.</p>
    <h3>Essence Calculation</h3>
    <p>Essence drops are calculated as follows:</p>
    <ul>
        <li>If the unit is a Critter or the unit's supply is less than 1, base drop is 1</li>
        <li>If the unit is a Hybrid, base drop is 12</li>
        <li>If the unit's supply is more than 4, base drop is 12</li>
        <li>Otherwise, base drop is 2 x Unit Supply</li>
    </ul>
    <h3>Dehaka Skill Point Upgrades</h3>
    <p>The table below shows all the skill point upgrades available for Dehaka and their effects:</p>
    <table>
        <thead>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/leap.png" alt="Leap"></td>
                <td>Leap</td>
                <td>Dehaka leaps to the target location, dealing 25 + 50% weapon damage to all enemy ground units in the area.<br><br><b>Level 2</b> - Leap range increased by 6, Damage increased to 25 + 75% weapon damage.<br><br><b>Level 3</b> - Each enemy hit also grants Dehaka 1 armor for 2 seconds.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/intimidatingroar.png" alt="Intimidating Roar"></td>
                <td>Intimidating Roar</td>
                <td>Dehaka intimidates nearby enemies, reducing their movement speed by 75% and attack speed by 25% for 15 seconds.<br><br><b>Level 2</b> - Enemies affected by Intimidating Roar also cannot use abilities that cost energy.<br><br><b>Level 3</b> - Enemies affected by Intimidating Roar also have armor reduced by 2.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/devour.png" alt="Devour"></td>
                <td>Devour</td>
                <td>Dehaka instantly kills the target enemy to heal 5% Life and gain passive abilities based on the enemy type for 15 seconds. The cooldown is based on the amount of life the enemy has when killed.<br><br><b>Level 2</b> - Passive bonuses last 25 seconds. Range increased by 3<br><br><b>Level 3</b> - Cooldown reduced by 20%. Range increased by 3.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/scorchingbreath.png" alt="Scorching Breath"></td>
                <td>Scorching Breath</td>
                <td>Dehaka's fiery breath scorches the earth, dealing weapon damage to all enemy ground units in its path.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/primalregeneration.png" alt="Primal Regeneration"></td>
                <td>Primal Regeneration</td>
                <td>Dehaka passively heals all allied units nearby.<br><br><b>Level 2</b> - 2 life per second.<br><br><b>Level 3</b> - 3 life per second.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/keensenses.png" alt="Keen Senses"></td>
                <td>Keen Senses</td>
                <td>Allows Dehaka to detect cloaked, burrowed, and hallucinated units.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/chitinousplating.png" alt="Chitinous Plating"></td>
                <td>Chitinous Plating</td>
                <td>Increases Dehaka's armor by 3.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/dehaka/deadlyreach.png" alt="Deadly Reach"></td>
                <td>Deadly Reach</td>
                <td>Allows Dehaka to attack air units.</td>
            </tr>
        </tbody>
    </table>
    <h3>Dehaka Stat Point Allocation Order</h3>
    <p>Below is the recommended order for allocating Dehaka's stat points. Essence drops at a rate of 2 Essence per supply of unit killed. Hybrids drop 12 Essence.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Level</th>
                <th>Allocate to</th>
                <th>Cumulative Essence Required</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Leap + Devour</td>
                <td>15</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Intimidating Roar</td>
                <td>45</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Devour</td>
                <td>90</td>
            </tr>
            <tr>
                <td>4</td>
                <td>-</td>
                <td>150</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Chitinous Plating + Keen Senses</td>
                <td>225</td>
            </tr>
            <tr>
                <td>6</td>
                <td>Scorching Breath</td>
                <td>315</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Intimidating Roar</td>
                <td>420</td>
            </tr>
            <tr>
                <td>8</td>
                <td>Devour</td>
                <td>540</td>
            </tr>
            <tr>
                <td>9</td>
                <td>Leap</td>
                <td>675</td>
            </tr>
            <tr>
                <td>10*</td>
                <td>Deadly Reach</td>
                <td>825</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Leap</td>
                <td>990</td>
            </tr>
            <tr>
                <td>12</td>
                <td>Intimidating Roar</td>
                <td>1170</td>
            </tr>
            <tr>
                <td>13</td>
                <td>Primal Regeneration</td>
                <td>1365</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Primal Regeneration</td>
                <td>1575</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Primal Regeneration</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
    <p>* At level 10, Dehaka can be hit by air attacks.</p>
    <h3>Gene Mutations</h3>
    <p>Every time two units undergo Primal Combat, the resultant unit has a chance of gaining certain Gene Mutation buffs. Each buff has a 20% chance of being gained. The list of units and buffs available for each are shown below:</p>
    <div class="tableContainer">
        <table class="centered">
            <thead>
                <tr>
                    <th>Unit</th>
                    <th><img src="/images/commanderdata/guides/dehaka/adrenalglands.png" alt="Adrenal Glands"></th>
                    <th><img src="/images/commanderdata/guides/dehaka/carapace.png" alt="Carapace"></th>
                    <th><img src="/images/commanderdata/guides/dehaka/leeching.png" alt="Leeching"></th>
                    <th><img src="/images/commanderdata/guides/dehaka/incubationsacs.png" alt="Incubation Sacs"></th>
                    <th><img src="/images/commanderdata/guides/dehaka/spikedhide.png" alt="Spiked Hide"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>Adrenal Glands</td>
                    <td>Carapace</td>
                    <td>Leeching</td>
                    <td>Incubation Sacs</td>
                    <td>Spiked Hide</td>
                </tr>
                <tr>
                    <td></td>
                    <td>This unit attacks 20% faster.</td>
                    <td>This unit has 50% more life.</td>
                    <td>This unit will leech 20% of damage done as life.</td>
                    <td>This Creeper Host spawns double the amount of Creepers.</td>
                    <td>Each time this unit takes damage, it shoots a spine back at the attacker that deals 10 damage.</td>
                </tr>
                <tr>
                    <td>Ravasaur</td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                </tr>
                <tr>
                    <td>Primal Igniter</td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                </tr>
                <tr>
                    <td>Primal Guardian</td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                </tr>
                <tr>
                    <td>Primal Mutalisk</td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                </tr>
                <tr>
                    <td>Impaler</td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                </tr>
                <tr>
                    <td>Creeper Host</td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                </tr>
                <tr>
                    <td>Tyrannozor</td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/no.png" alt="No"></td>
                    <td><img src="/images/commanderdata/guides/dehaka/yes.png" alt="Yes"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h3>Devour Mechanics</h3>
    <p>Whenever Dehaka devours a unit, a certain cooldown will be applied to Devour. It works as follows:</p>
    <ul>
        <li><b>If the unit has 600HP or more:</b> 60 seconds cooldown will be applied.</li>
        <li><b>If the unit has less than 600 HP:</b> A cooldown of 10% of its HP (in seconds) will be applied.</li>
    </ul>
    <p>Note that if a unit is Tenderized through Dehaka's Impalers, the cooldown will be reduced by 75%. If a Psionic unit has been devoured, a buff reduces cooldowns by 50%.</p>
    <p>Additionally, units will provide a buff to Dehaka for 25 seconds. The buffs Dehaka gets are dependent on the tags the unit has. These are as follows:</p>
    <table>
        <thead>
            <tr>
                <th>Tag</th>
                <th>Buff</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Air</td>
                <td>Gain a ranged attack</td>
            </tr>
            <tr>
                <td>Armored</td>
                <td>Gain 30% bonus damage against armored units</td>
            </tr>
            <tr>
                <td>Biological</td>
                <td>Heal 20% life</td>
            </tr>
            <tr>
                <td>Light</td>
                <td>Gain 30% move speed</td>
            </tr>
            <tr>
                <td>Massive</td>
                <td>Gain 3 armor and reflect damage (10 per hit) at attackers</td>
            </tr>
            <tr>
                <td>Mechanical</td>
                <td>Gain 30% attack speed</td>
            </tr>
            <tr>
                <td>Psionic</td>
                <td>Explode with Psionic Energy (2x Dehaka Weapon damage) and abilities cooldowns halved.</td>
            </tr>
        </tbody>
    </table>
    <p>Devouring Psionic units is a critical part of good Dehaka play. Being able to pick out High Templars and other Psionic units from the middle of attack waves to clear them entirely is a key part of this play. Below is a list of the Psionic units that can be found in Amon's army:</p>
    <ul>

    <?php
    require_once '../data/queries.php';
    $units = get_amonunits();
    $psionicUnits = array_filter($units, fn($unit) => $unit['psionic'] === 1 && $unit['race'] !== 'Objective' && $unit['race'] !== 'Mutator');
    usort($psionicUnits, fn($a, $b) => $a['race'] <=> $b['race'] ?: $a['name'] <=> $b['name']);

    $out = [];
    foreach ($psionicUnits as $unit) {
        $out[$unit['race']][] = $unit['name'];
    }
    // very confused how the old code achieved this order
    foreach (['Protoss', 'Terran', 'Zerg', 'Hybrid'] as $race) {
        echo("<li><b>" . $race . ":</b> " . implode(", ", $out[$race]) . "</li>");
    }
    ?>

    </ul>
    <h3 id="essence">Essence Farming</h3>
    <p>As soon as Dehaka has spawned, he should be sent towards enemy bases to kill units and gather Essence. Using Dehaka to clear expansion rocks (referred to as "Rockslapping") is one of the most inefficient things a Dehaka player can do, due to Dehaka's low attack speed and low attack damage. The table below provides a guide for the path Dehaka should take on each of the missions to gather Essence as effectively as possible.</p>
    <table id="essenceOrder">
        <thead>
            <tr>
                <th>Mission</th>
                <th>Protoss</th>
                <th>Terran</th>
                <th>Zerg</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/coa_protoss.jpg" alt="Chain of Ascension Protoss Essence Farming Order">
                    <p>Start with the camp in between the two expansions. Use Devour on the Sentries and High Templars to quickly deal splash damage to enemy units before moving on to the camp guarding your expansion.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/coa_terran.jpg" alt="Chain of Ascension Terran Essence Farming Order">
                    <p>The presence of Bunkers make gathering Essence difficult. Clear the Bunker guarding your expansion first, then move towards the central camp to gather more Essence. Focus on the Biological units, rather than the Bunkers.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/coa_zerg.jpg" alt="Chain of Ascension Zerg Essence Farming Order">
                    <p>Clear your expansion first, by using Devour on straight on the Ultralisk. The damage reflect will cause the other units around Dehaka to kill themselves, clearing the entire expansion. As units take damage, they may try to kite you, so make sure Dehaka doesn't get lured into the camp in the between the expansions until you are ready.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/cod_protoss.jpg" alt="Cradle of Death Protoss Essence Farming Order">
                    <p>Start with the expansion area and Devour Sentries to quickly deal damage to enemy units. Watch out for the Constructs. Then move to the right camp first due to the higher number of biological units.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/cod_terran.jpg" alt="Cradle of Death Terran Essence Farming Order">
                    <p>Start with the expansion area and Devour Medics to reduce healing. Then move to the right camp first due to the presence of biological units.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/cod_zerg.jpg" alt="Cradle of Death Zerg Essence Farming Order">
                    <p>Start with the camp on the right. Weaken the Aberrations and Devour them. With the buff, move to the expansion area and use the damage reflect to quickly kill off defenders.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/deadofnight">Dead of Night</a>*</td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/don_protoss.jpg" alt="Dead of Night Protoss Essence Farming Order">
                    <p>Clear the camp to the West of enemy units. Then move South to the camp defenders and then move deeper. Devour Sentries to quickly deal damage to the enemies in the defending camp. During the night, move to the bottom of the ramp to the North-Western area. Several Aberrations will spawn allowing you to level Dehaka quickly.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/don_terran.jpg" alt="Dead of Night Terran Essence Farming Order">
                    <p>Start with the camp defenders in the South West and then East and clear the small number of defenders there. Then move out and down towards the remaining enemy camp. Devour the units as you destroy the Bunker. During the night, move to the bottom of the ramp to the North-Western area. Several Aberrations will spawn allowing you to level Dehaka quickly.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/don_zerg.jpg" alt="Dead of Night Zerg Essence Farming Order">
                    <p>Clear the camp to the West of enemy units. Then move South, working your way across the camp defenders. Weaken Aberrations and use Devour to gain a damage-reflect buff. During the night, move to the bottom of the ramp to the North-Western area. Several Aberrations will spawn allowing you to level Dehaka quickly.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/lockload">Lock & Load</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/ll_protoss.jpg" alt="Lock & Load Protoss Essence Farming Order">
                    <p>Clear the units around the central Celestial Lock. Then, creep along the edge of the Northern area of that lock and make your way towards the area outside the Northern Celestial Lock. Clear those units, using the Sentry to help. Then, Deep Tunnel back to your main, and clear the ground units at the Southern Celestial Lock.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/ll_terran.jpg" alt="Lock & Load Terran Essence Farming Order">
                    <p>Clear the units around the Central Celestial Lock. Then lure units away from the Bunkers North of that Lock. Move North and clear the small number of units on the low ground outside the Northern Celestial Lock. Next, Deep Tunnel back to the base. Go the ramp to the Northern Celestial Lock, and lure units away from the camp. Finally, lure units away from the Bunkers and Siege Tanks at the Western Celestial Lock.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/ll_zerg.jpg" alt="Lock & Load Zerg Essence Farming Order">
                    <p>Clear the units to the East of the Centeral Celestial Lock by using the Vipers in that location. Then, clear the units guarding the Central Celestial Lock, weaking the Aberrations and Devouring them to take advantage of the damage reflect buff. Next, move to the Southern Celestial Lock, Devouring Vipers to clear the units there. Finally, move to the ramp for the Northern Celestial Lock, Devouring Infestors to clear units in that area.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/malwarfare">Malwarfare</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/mw_protoss.jpg" alt="Malwarefare Protoss Essence Farming Order">
                    <p>Clear the units guarding both your expansions first. Then move North, and kill the units near the Cannon by luring them away. Then move East and clear the units in that area. Kill the Immortal first and use Zealots to heal Dehaka.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/mw_terran.jpg" alt="Lock & Load Terran Essence Farming Order">
                    <p>Clear the units guarding both your expansions first. Target the Bunkers down, and use the units around to heal Dehaka until the Bunkers are on fire. Allow the Bunkers to burn down while you work away on the other expansion. Once both areas are cleared, move North East and clear the units in that area.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/mw_zerg.jpg" alt="Lock & Load Zerg Essence Farming Order">
                    <p>Clear the units guarding both your expansions first. Then move North and clear the units there by luring them away from the Spine Crawlers. Then move East and clear that camp.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td colspan="3">
                    <img style="display:block; margin:auto" src="/images/commanderdata/guides/dehaka/me.jpg" alt="Miner Evacuation Essence Farming Order">
                    <p>Gathering Essence on this map is very difficult, due to the large presence of infested units which do not drop Essence. First, check if there are units near the Evacuation Ship at the East of the expansion. Clear the units there (which consists of Infestors and Aberrations). Then move towards the expansion area. Once cleared, you may move directly North to clear that area, and then to the top-right Evacuation ship area. In the top areas, Infestors are present, which helps clearing those areas.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/mo_protoss.jpg" alt="Mist Opportunities Essence Farming Order">
                    <p>To start, clear the enemies near the first geyser, which includes a Stalker and two Zealots. Then clear the enemies near the first Geyser. Move West and clear the enemies near the next set of geysers, using Devour on Sentries to quickly clear them. If you have more time, you may start clearing the enemies around the camp blocking the third set of geysers. With good timing, you may Devour that Sentry and use its explosion to clear the attack wave too.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/mo_terran.jpg" alt="Mist Opportunities Terran Essence Farming Order">
                    <p>To start, clear the enemies near the first geyser, which includes a Marauder and three marines. Then clear the enemies near the first Geyser. Move West and clear the enemies near the next set of geysers. If you have more time, you may start clearing the enemies around the camp blocking the third set of geysers by luring them away from the Bunker and Siege Tank.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/mo_zerg.jpg" alt="Mist Opportunities Zerg Essence Farming Order">
                    <p>To start, clear the enemies near the first geyser, which includes a Hydralisk and two Roaches. Then clear the enemies near the first Geyser. Move West and clear the enemies near the next set of geysers, skipping the Spine Crawlers. If you have more time, you may start clearing the enemies around the camp blocking the third set of geysers by luring them away from the Spine Crawler.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/oe_protoss.jpg" alt="Oblivion Express Essence Farming Order">
                    <p>Clear the small plateau to the East of your main, Devouring the High Templar to quickly clear that enemies in that area. Then move to the base near the start of the middle tracks. Devour the High Templar to quickly clear the defenders, then move South and Devour the High Templar there. Once cleared, move back North, the High Templars would have been re-made, allowing you to gather more Essence. Keep alternating between these two locations.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/oe_terran.jpg" alt="Oblivion Express Terran Essence Farming Order">
                    <p>Clear the small plateau to the East of your main, then clear the small plateau to the South of your main. Once cleared, move to the base at the start of the top set of tracks and slowly work your way through the units. Devour the Ghost to quickly clear the defenders in that location. Beware of the Bunkers and the Siege Tank located on the high ground.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/oe_zerg.jpg" alt="Oblivion Express Zerg Essence Farming Order">
                    <p>Clear the small plateau to the East of your main, Devouring the Infestor to quickly clear that enemies in that area. Then, move North to the base, Devouring the Infestor and weakening the Ultralisk before Devouring it. You will use this damage reflect to weaken the Brood Lord before Devouring it. Watch out for the Corruptor, which will cast Corruption, causing Dehaka to take bonus damage.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/partparcel">Part & Parcel</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/pp_protoss.jpg" alt="Part & Parcel Essence Farming Order">
                    <p>Clear the defenders outside the top ramp by luring them away from the Cannon. Then, move North and clear the enemies in that location, using the Sentry to clear them quickly. Once cleared, move to the expansion, using the Sentry there to clear the enemies in that location.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/pp_terran.jpg" alt="Parcel & Parcel Terran Essence Farming Order">
                    <p>The presence of Bunkers makes gathering Essence very difficult. Clear the defenders outside the top ramp  by luring them away from the Bunker. Then, move North and clear the enemies in that location. You may then move South and clear the enemies around the Bunker. Alternatively, damaging a Bunker will cause SCV's to be sent from around the map. You may Devour them for HP sustain.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/pp_zerg.jpg" alt="Part & Parcel Zerg Essence Farming Order">
                    <p>Clear the small group of Roaches outside the bottom ramp, then work your way up North. You may lure enemies away from the Spine Crawler. Once the top defenders are cleared (preferably with the Aberration being Devoured last), you may clear the expansion.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/rtk_protoss.jpg" alt="Rifts to Korhal Essence Farming Order">
                    <p>Clear the defenders at the first Void Shard location, using the Sentries for AoE. Then move towards the second Void Shard location, luring units away from the Cannons. Beware of the edges of the base, as there are Dark Templars there.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/rtk_terran.jpg" alt="Rifts to Korhal Terran Essence Farming Order">
                    <p>Clear the defenders at the first Void Shard location. Then move towards the second Void Shard location, luring units away from the Bunkers and Siege Tanks.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/rtk_zerg.jpg" alt="Rifts to Korhal Zerg Essence Farming Order">
                    <p>Clear the defenders at the first Void Shard location. Then move towards the second Void Shard location. Lurkers and Swarm Hosts are burrowed, but there are several Infestors which can be Devoured for fast clearing the area.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/soa_protoss.jpg" alt="Scythe of Amon Essence Farming Order">
                    <p>Clear the defenders near the first Void Sliver. Watch out for the Photon Cannon near the first Sliver. Then, make your way towards the second Void Sliver, clearing the camp between the two locations. Devour the Aberration for a damage reflect buff to quickly clear the defenders in that location.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/soa_terran.jpg" alt="Scythe of Amon Terran Essence Farming Order">
                    <p>Clear the defenders near the first Void Sliver. Then, make your way towards the second Void Sliver, clearing the camp between the two locations by luring units away from the Bunker.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/soa_zerg.jpg" alt="Scythe of Amon Zerg Essence Farming Order">
                    <p>Clear the defenders near the first Void Sliver. Then, make your way towards the second Void Sliver, clearing the camp between the two locations. Devour the Aberration for a damage reflect buff to quickly clear the defenders in that location.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td colspan="3">
                    <img style="display:block; margin:auto" src="/images/commanderdata/guides/dehaka/totp.jpg" alt="Temple of the Past Essence Farming Order">
                    <p>Use Deep Tunnel to move Dehaka to the opposite side of the rocks. Then, clear units guarding each of the Zenith stones. If timed correctly, you will be able to intercept the first attack wave with Dehaka using Deep Tunnel. Make sure you target the Zenith Stone on the middle lane last, as this will allow you to intercept the attack wave without having to wait for Deep Tunnel.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td colspan="2">
                    <img style="display:block; margin:auto" src="/images/commanderdata/guides/dehaka/tvp.jpg" alt="The Vermillion Problem Protoss and Terran Essence Farming Order">
                    <p>Use Dehaka to start clearing the expansion. You can use Devour on workers to sustain HP. Continue to clear the expansion until the first attack wave, where you can Deep Tunnel back to intercept it.</p>
                </td>
                <td>
                    <img style="display:block; margin:auto" src="/images/commanderdata/guides/dehaka/tvp_zerg.jpg" alt="The Vermillion Problem Zerg Essence Farming Order">
                    <p>In the case of Zerg compositions, it is better to target the island to the West of the expansion first. There are Vipers present in that area, with plenty of Scourge which can be used for quick Devours. Once that area is cleared, you can make your way towards the expansion and start clearing that.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/voidlaunch">Void Launch</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/vl_protoss.jpg" alt="Void Launch Essence Farming Order">
                    <p>Clear the final bonus area first by sneaking Dehaka along the edges of the camp guarding that area. Devour the High Templar and Sentry to quickly kill off the units there. Then, exit the same way you entered, and clear the units outside the right base entrance, Devouring the Sentry and weakened Archon. Once cleared, you may clear the second bonus area by Devouring the Sentry and an air unit.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/vl_terran.jpg" alt="Void Launch Terran Essence Farming Order">
                    <p>Bunkers and Siege Tanks make gathering Essence difficult on this map. Clear the units (and Bunker) around the first bonus area, then move East and clear the units in that area too. Try to Devour Ghosts before they use Cloak to take advantage of the AoE damage they cause.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/vl_zerg.jpg" alt="Void Launch Zerg Essence Farming Order">
                    <p>Clear the first bonus area and work your way East. The enemies outside the right entrance consist of Infestors which can be used to quickly clear that area. Near the second bonus area, there is a Viper which can be used to clear, but watch out for the Swarm Hosts.</p>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/vt_protoss.jpg" alt="Void Thrashing Essence Farming Order">
                    <p>Clear the defenders outside the first Void Thrasher spawn point. Then move East, clearing the defenders in the enemy camp. Devour Sentries and Archons to quickly clear that area. Move to the entrance of the North base and lure enemy units down the ramp and clear them.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/vt_terran.jpg" alt="Void Thrashing Terran Essence Farming Order">
                    <p>Bunkers and Siege Tanks make gathering Essence difficult. Clear the defenders outside the first Void Thrasher spawn point. Then move East, clearing the defenders in the enemy camp. Lure them away from the two Siege Tanks in that location.</p>
                </td>
                <td>
                    <img src="/images/commanderdata/guides/dehaka/vt_zerg.jpg" alt="Void Thrashing Zerg Essence Farming Order">
                    <p>Clear the defenders outside the first Void Thrasher spawn point. Then move East, clearing the defenders in the enemy camp. Watch out for the Banelings as they can surprise you with their high burst damage. Once those defenders are cleared, move West to the camp outside the second Void Thrasher spawn. Devour Infestors and weakened Aberrations to quickly clear that area.</p>
                </td>
            </tr>
        </tbody>
    </table>
    <p>* Dehaka has a very high survivability on Dead of Night, due to the large number of low-HP Infested units scattered around the map. While they do not drop Essence, use them to your advantage to keep Dehaka alive while you farm Essence from Amon's units.</p>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Gather essence with Dehaka as soon as he spawns.</li>
        <li>Target Psionic units with Dehaka to take advantage of the area damage it causes.</li>
        <li>Avoid devouring high-HP targets. Weaken units first before devouring them.</li>
        <li>Greater Primal Wurms do not require vision to be summoned, as long as you can see the terrain. Use them to get vision so you can Deep Tunnel Dehaka over.</li>
        <li>If Dehaka dies, use drones to instantly respawn him. Each drone reduces Dehaka's respawn time by 24 seconds (-1 second per level for Dehaka). This can have huge negative impact on your economy in the early game, so make sure you don't lose him at the start, when he is at his weakest.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
