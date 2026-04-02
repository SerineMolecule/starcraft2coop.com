<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Commander Guide - Zeratul</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Guide Zeratul">
  <meta name="keywords" content="Starcraft co-op guides zeratul commander mastery prestige build">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/commanderstyle.css?v=1.1">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/commanders/zeratul">
  <script src="/scripts/preload.js"></script>
  <style>
        #content{
            background: url(/images/commanderdata/bgs/zeratul.png);
            background-repeat: no-repeat;
        }
        @media (min-width: 701px){
            #pp{
                position:absolute;
            }
            #ppdiv{
                display:inline-block;
                width:800px;
                height:400px;
            }
        }
        @media (max-width: 700px){
            #fastExpand img{
                max-width:200px;
            }
            #pp{
                position:absolute;
            }
            #ppdiv{
                display:inline-block;
                width:200px;
                height:100px;
            }
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
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <div id="tooltip">tooltip</div>
    <h1>Co-op Commander Guide: Zeratul</h1>
    <p id="commanderMotto">Dark Prelate</p>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
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
        <p><a href="#fastexpand">Legion Expands</a></p>
        <p><a href="#artifact">Artifact Spawn Locations</a></p>
        <p><a href="#videos">Video Guides</a></p>
    </div>
    <a id="comSum"></a><h2>Commander Summary</h2>
    <p>Zeratul uses a very small force of powerful units that he strengthens as he finds Xel'Naga Artifacts.</p>
    <a id="levelUnlocks"></a><h2>Level Unlocks</h2>
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
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_01.png" alt = "Power of the Xel'Naga"></td>
                <td>Power of the Xel'Naga</td>
                <td>
                    Zeratul has a 100 starting supply and his units have increased life and damage. Buildings do not require Pylon power and units cannot be warped directly onto the battlefield. Zeratul's Ancient Nexus can automatically construct Ancient Assimilators.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_02.png" alt = "Prophecy Fulfilled"></td>
                <td>Prophecy Fulfilled</td>
                <td>
                    Unlocks the ability for Zeratul to find the third and final Artifact Fragment. Once all Artifacts are found, Zeratul unlocks the following abilities:
                    <ul>
                        <li>Call down the Avatar of Form, the embodiment of psionic potential.</li>
                        <li>Call down the Avatar of Essence, the embodiment of evolutionary potential.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_03.png" alt = "Passageway Enhancement Cache 1"></td>
                <td>Passageway Enhancement Cache 1</td>
                <td>
                   Unlocks the following Passageway-level Artifact upgrades after the second Artifact Fragment is found:
                   <ul>
                        <li>Allows the Xel'Naga Ambusher's Blink to leave behind a Void Apparition that attacks once for 50% of its weapon damage.</li>
                        <li>Increases the energy regeneration of the Xel'Naga Shieldguard by 100%.</li>
                        <li>Allows the Void Templar's Blink to deal 50 damage to units caught in its path.</li>
                        <li>Allows Tesseract Cannons and Tesseract Monoliths to project themselves to a target location for 120 seconds.</li>
                   </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_04.png" alt = "New Unit: Xel'Naga Abrogator"></td>
                <td>New Unit: Xel'Naga Abrogator</td>
                <td>
                    Robotic Disruption unit. Can use Purification Nova to deal heavy area damage. Built at the Constructs Facility.<br><br>Can attack ground units.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_05.png" alt = "Tesseract Enhancement Cache"></td>
                <td>Tesseract Enhancement Cache</td>
                <td>
                    Unlocks the option to select the following Artifact abilities:
                    <ul>
                        <li>Deploys a Tesseract Monolith at the target location. Tesseract Monoliths can stun enemies, project themselves, and protect themselves from damage.</li>
                        <li>Improves the effectiveness of the Shade Projection and Shade Barrier abilities by 100%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_06.png" alt = "Constructs Enhancement Cache 1"></td>
                <td>Constructs Enhancement Cache 1</td>
                <td>
                    Unlocks the following Constructs-level Artifact upgrades after the second Artifact Fragment is found:
                    <ul>
                        <li>Allows the Xel'Naga Enforcer's anti-air weapon to knock back enemy air units, dealing 25% of its damage to units caught in the path of the blast.</li>
                        <li>Reduces the cooldown of the Xel'Naga Abrogator's Purification Nova by 50%.</li>
                        <li>Increases the movement speed of Xel'Naga Watchers by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_07.png" alt = "Path of the Void"></td>
                <td>Path of the Void</td>
                <td>
                    Unlocks the option to select the following Artifact abilities:
                    <ul>
                        <li>Call down Serdath and his legendary legion of Dark Archons to aid in the battle. Serdath cannot be directly controlled but can be guided via the top-bar.</li>
                        <li>Summons an invulnerable Void Suppression Crystal that slows the movement and attack speeds of enemy units and disable enemy structures in its vicinity.</li>
                        <li>Reduces the cooldown of Zeratul and his units' Blink abilities by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_08.png" alt = "Empowered Legions"></td>
                <td>Empowered Legions</td>
                <td>
                    Legendary Legions gain new abilities once the third Artifact Fragment is found:
                    <ul>
                        <li>Telbrus gains the Feedback ability, which drains energy from an enemy unit. Telbrus' Zealot Legion gains the Charge ability, which allows them to intercept enemy ground units.</li>
                        <li>Zoraya and her Void Ray legion gain the Prismatic Range ability, which increases the range of their weapons as they continue to attack.</li>
                        <li>Serdath and his Dark Archons gain the Maelstrom ability, which temporarily stuns enemy units in an area.</li>
                   </ul>
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_09.png" alt = "New Unit: Xel'Naga Void Array"></td>
                <td>New Unit: Xel'Naga Void Array</td>
                <td>
                    Flying wormhole generator. Builds two at a time. Can deploy to create a link between all Xel'Naga Void Arrays on the field.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_10.png" alt = "Chronometry"></td>
                <td>Chronometry</td>
                <td>
                    Reduces the build time of units produced by the Xel'Naga Passageway and the Constructs Facility by 50%.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_11.png" alt = "Passageway Enhancement Cache 2"></td>
                <td>Passageway Enhancement Cache 2</td>
                <td>
                    Unlocks the following Passageway-level Artifact upgrades after the third Artifact Fragment is found:
                    <ul>
                        <li>Allows the Xel'Naga Ambushers to store up to 3 charges of Predictive Blink and regain a charge every 8 seconds.</li>
                        <li>Allows the Xel'Naga Shieldguard to create a range 4.5 aura that reflects 50% of all projectiles back to the attacker.</li>
                        <li>When a Void Templar takes fatal damage, it retreats to the Void and regenerates its health and shields over 10 seconds.</li>
                        <li>Allows Tesseract Cannons and Tesseract Monoliths to absorb up to 100 damage every 60 seconds.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_12.png" alt = "Dark Agency"></td>
                <td>Dark Agency</td>
                <td>
                    Reduces the supply cost of Xel'Naga Shieldguards to 1. Reduces the supply cost of a pair of Xel'Naga Void Arrays to 1. Reduces the supply cost of Xel'Naga Watchers to 0.
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_13.png" alt = "Constructs Enhancement Cache 2"></td>
                <td>Constructs Enhancement Cache 2</td>
                <td>
                    Unlocks the following Constructs-level Artifact upgrades after the third Artifact Fragment is found:
                    <ul>
                        <li>Increases the damage absorbed by the Xel'Naga Enforcer's Barrier by 300%. The Xel'Naga Enforcer's Barrier will fully restore its health whenever it activates.</li>
                        <li>When a Xel'Naga Abrogator's Purification Nova explodes, it generates three smaller Novas that deal 50 damage each to enemy units in their path.</li>
                        <li>Xel'Naga Void Arrays in Wormhole Mode increase the shield regeneration rate of nearby friendly units by 2 per second.</li>
                        <li>Increases the sight radius of Xel'Naga Watchers by 50%.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_14.png" alt = "Purity of Perfection"></td>
                <td>Purity of Perfection</td>
                <td>
                    The Avatar of Form gains the ability to summon Charged Crystals that can individually cast miniature Psionic Storms. The Avatar of Essence gains the ability to transform all enemy units in a large area into a lower evolutionary form.
                </td>
            </tr>
            <tr class="spike">
                <td><img src="/images/commanderdata/progression/zeratul/zeratul_15.png" alt = "Purity of Will"></td>
                <td>Purity of Will</td>
                <td>
                    Zeratul will gain additional shields (+50), increased Shadow Cleave damage (+10), and additional charges of Blink (+1) with each Artifact Fragment he finds.
                </td>
            </tr>
        </tbody>
    </table>
    <p id="powerSpikeInfo">Highlighted rows denote large power spikes for the commander.</p>
    <a id="achievements"></a><h2>Achievements</h2>
    <p>The commander-specific achievements for Zeratul are:</p>
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
                <td><img src="/images/commanderdata/achievements/zeratul/bankshotpocketneutral.jpg" alt="Bank Shot, Pocket Natural"></td>
                <td>Bank Shot, Pocket Natural</td>
                <td>Deal 2,000 damage with the Xel'Naga Abrogator's Cluster Novas.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/zeratul/devolutionretribution.jpg" alt="Devolution Retribution"></td>
                <td>Devolution Retribution</td>
                <td>Kill 200 devolved enemies in a single game.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/zeratul/haveaportablecharger.jpg" alt="Have a Portable Charger?"></td>
                <td>Have a Portable Charger?</td>
                <td>Recharge 5,000 shields on allied units in Co-op Missions.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/achievements/zeratul/thatbelongsinamuseum.jpg" alt="That Belongs in a Museum!"></td>
                <td>That Belongs in a Museum!</td>
                <td>Complete the Xel'Naga Artifact within 12 minutes on Hard difficulty.</td>
            </tr>
        </tbody>
    </table>
    <a id="calldowns"></a><h2>Artifact Abilities</h2>
    <p>The artifact abilities for Zeratul, at level 15, with no mastery points added are shown below. Only one ability from each set can be selected.</p>
    <p>Legion Calldowns (costs 800 minerals to deploy):</p>
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
                <td><img src="/images/commanderdata/abilities/zeratul/telbruslegion.png" alt = "Telbrus Legion"></td>
                <td>Telbrus Legion</td>
                <td>Call down Telbrus and his legendary legion of Zealots to aid in the battle. This legion cannot be directly controlled but can be guided via the top-bar and will fight for 60 seconds.</td>
                <td>Generally not as useful as other legions but reasonably effective against Zerg compositions. However, it can be useful on missions like <a href="/missions/deadofnight">Dead of Night</a>.</td>
                <td>
                    <ul>
                        <li>Coolup: 0 seconds</li>
                        <li>Cooldown: 120 seconds</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/zorayalegion.png" alt = "Zoraya Legion"></td>
                <td>Zoraya Legion</td>
                <td>Call down Zoraya and her legendary legion of Void Rays to aid in the battle. This legion cannot be directly controlled but can be guided via the top-bar and will fight for 60 seconds.</td>
                <td>Provides great potential for fast-expanding, even on contested maps. If bases are close to each other, players can even clear their ally's expansions.</td>
                <td>
                    <ul>
                        <li>Coolup: 0 seconds</li>
                        <li>Cooldown: 120 seconds</li>
                    </ul>
                </td>
            </tr>

            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/serdathlegion.png" alt = "Serdath Legion"></td>
                <td>Serdath Legion</td>
                <td>Call down Serdath and his legendary legion of Dark Archons to aid in the battle. This legion cannot be directly controlled but can be guided via the top-bar and will fight for 60 seconds.</td>
                <td>Powerful for breaking into tough-to-push fortifications by stealing high-value enemy units. Can also be used to significantly weaken powerful attack waves by spawning on top of it.</td>
                <td>
                    <ul>
                        <li>Coolup: 0 seconds</li>
                        <li>Cooldown: 120 seconds</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>The number of fragments collected affect the Legion. Each fragment will add 100 shields to the hero unit (Telbrus, Zoraya, Serdath). Additionally, for Telbrus and Serdath, each fragment will add 100 energy to those heroic units. Artifact fragments also affect how many units are spawned from the Legion. This is summarized in the table below (numbers do not include the Hero unit):</p>
    <table class="centered">
        <thead>
            <tr>
                <td>Artifacts</td>
                <td>Telbrus</td>
                <td>Zoraya</td>
                <td>Serdath</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>10</td>
                <td>4</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>13</td>
                <td>5</td>
                <td>4</td>
            </tr>
            <tr>
                <td>2</td>
                <td>16</td>
                <td>6</td>
                <td>5</td>
            </tr>
            <tr>
                <td>3</td>
                <td>16</td>
                <td>6</td>
                <td>5</td>
            </tr>
        </tbody>
    </table>
    <p>The Telbrus Legion ability deploys a Telbrus Legion onto the battlefield. The units have abilities themselves, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/zealot.jpg" alt="Zealot">
            <p>Zealot</p>
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
                        <td><img src="/images/commanderdata/abilities/zeratul/charge.png" alt="Charge"></td>
                        <td>Charge</td>
                        <td>Requirements: 3rd Xel'Naga Artifact.<br>Intercepts enemy ground units and increases movement speed.</td>
                        <td>10 seconds</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/whirlwind.png" alt="Whirlwind"></td>
                        <td>Whirlwind</td>
                        <td>Deals 10 damage per second to all nearby enemy units. Lasts 3 seconds.</td>
                        <td>10 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/telbrus.jpg" alt="Telbrus">
            <p>Telbrus</p>
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
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/psionicstorm.png" alt="Psionic Storm"></td>
                        <td>Psionic Storm</td>
                        <td>Creates a storm of psionic energy that lasts 4 seconds, causing up to 112 damage to all enemy units and restoring 112 shields to all friendly units in a large target area.</td>
                        <td>2.5 seconds</td>
                        <td>75</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/feedback.png" alt="Feedback"></td>
                        <td>Feedback</td>
                        <td>Requirements: 3rd Xel'Naga Artifact.<br>Drains all energy from the target. Deals 1 damage per point of energy.</td>
                        <td>10 seconds</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>The Serdath Legion ability deploys a Serdath Legion onto the battlefield. The units have abilities themselves, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/darkarchon.jpg" alt="Dark Archon">
            <p>Dark Archon</p>
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
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/mindcontrol.png" alt="Mind Control"></td>
                        <td>Mind Control</td>
                        <td>Temporarily grants Zeratul control of a target enemy unit. Controlled units self-destruct after 120 seconds.<br><br>Heroic units are immune.</td>
                        <td>15 seconds</td>
                        <td>150</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/maelstrom.png" alt="Maelstrom"></td>
                        <td>Maelstrom</td>
                        <td>Requirements: 3rd Xel'Naga Artifact.<br>Temporarily stuns enemy units and structures in an area of effect for 3 seconds.</td>
                        <td>15 seconds</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/serdath.jpg" alt="Serdath">
            <p>Serdath</p>
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
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/mindcontrol.png" alt="Mind Control"></td>
                        <td>Mind Control</td>
                        <td>Temporarily grants Zeratul control of a target enemy unit. Controlled units self-destruct after 120 seconds.<br><br>Heroic units are immune.</td>
                        <td>15 seconds</td>
                        <td>150</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/maelstrom.png" alt="Maelstrom"></td>
                        <td>Maelstrom</td>
                        <td>Requirements: 3rd Xel'Naga Artifact.<br>Temporarily stuns enemy units in an area of effect for 3 seconds.</td>
                        <td>15 seconds</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>Fragment 1:</p>
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
                <td><img src="/images/commanderdata/abilities/zeratul/stasisbeam.png" alt = "Stasis Beam"></td>
                <td>Stasis Beam</td>
                <td>Fires a beam emanating from the Artifact Holder that places enemies in stasis for 15 seconds. Units in stasis cannot move, attack, be attacked, or be affected by abilities.</td>
                <td>Can be useful to temporarily take high value targets out of combat while dealing with weaker units first. However, targeting is dependent on the position of the Artifact Holder, making it extremely difficult to land several hits in a straight line.</td>
                <td>Cooldown: 90 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/deploytesseractmonolith.png" alt = "Deploy Tesseract Monolith"></td>
                <td>Deploy Tesseract Monolith</td>
                <td>Deploys a Tesseract Monolith at the target location. Tesseract Monoliths can stun enemies, project themselves, and protect themselves from damage.</td>
                <td>Exremely powerful when projected. Multiple can be used to stun attack waves and help when pushing into enemy bases.</td>
                <td>
                    <ul>
                        <li>Charge Cooldown: 180 seconds</li>
                        <li>Max Charges: 3</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/voidsuppressioncrystal.png" alt = "Void Suppression Crystal"></td>
                <td>Void Suppression Crystal</td>
                <td>Summons an invulnerable Void Suppression Crystal that slows the movement and attack speeds of enemy units by 70% and disables enemy structures. The Void Suppression Crystal is controllable and lasts for 30 seconds.</td>
                <td>Great ability to use when pushing into heavily-fortified positions. Despite the short timer on the crystal, 30 seconds should be more than enough time to clear out high value targets and even an entire base if timed correctly.</td>
                <td>Cooldown: 180 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>The Deploy Tesseract Monolith ability brings a Tesseract Monolith onto the battlefield. This unit has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/tesseractmonolith.jpg" alt="Tesseract Monolith">
            <p>Tesseract Monolith</p>
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
                        <td><img src="/images/commanderdata/abilities/zeratul/shadeprojection.png" alt="Shade Projection"></td>
                        <td>Shade Projection</td>
                        <td>Requirements: Core Forge and 2nd Xel'Naga Artifact Fragment<br>Projects the Tesseract Monolith to a target location for 60 seconds, transferring all of its shields and its weapon. The Tesseract Monolith is deactivated while this ability is active.</td>
                        <td>120 seconds</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/shadebarrier.png" alt="Shade Barrier"></td>
                        <td>Shade Barrier</td>
                        <td>Requirements: Core Forge and 3rd Xel'Naga Artifact Fragment<br>Absorbs up to 100 damage. Lasts for 10 seconds.</td>
                        <td>60 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>Fragment 2:</p>
    <table class="calldownTable">
        <thead>
            <tr>
                <th>Passive</th>
                <th>Name</th>
                <th>Description</th>
                <th>Recommended Usage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/steadfastreinforcements.png" alt = "Steadfast Reinforcements"></td>
                <td>Steadfast Reinforcements</td>
                <td>Increases the duration of Zeratul's Legion and Avatar calldowns by 50%.</td>
                <td>Useful for players that prefer to utilize their Legions and Avatars more effectively. However, do note that they do tend to die relatively quickly and therefore, this passive upgrade may not provide as much value as initially intended.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/tesseractmatrix.png" alt = "Tesseract Matrix"></td>
                <td>Tesseract Matrix</td>
                <td>Decreases the cooldown of Shade Projection by 25%. Increases the damage absorbed by Shade Barrier by 100%.</td>
                <td>Great passive for players that rely on the Shade Projections to pushing/defending. It can significantly strengthen Zeratul's late-game as well, where cannons are used as a mineral dump.</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/voidblink.png" alt = "Void Blink"></td>
                <td>Void Blink</td>
                <td>Reduces the cooldown of Zeratul and his units' Blink abilities by 50%.</td>
                <td>This passive compounds extremely well with the Void Templar's Void Fury upgrade as well as the Ambusher's Vengeance of the Void. Players that intend on using mass Ambusher builds should consider this upgrade.</td>
            </tr>
        </tbody>
    </table>
    <p>Fragment 3:</p>
    <table class="calldownTable">
        <thead>
            <tr>
                <th>Ability</th>
                <th>Name</th>
                <th>Description</th>
                <th>Recommended Usage</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/avatarofform.png" alt = "Avatar of Form"></td>
                <td>Avatar of Form</td>
                <td>Call down the Avatar of Form, the embodiment of psionic potential, at the target location. The Avatar of Form is controllable and will fight for 60 seconds.</td>
                <td>Generally not as useful as the Avatar of Essence, due to it not being able to buff your units. Can be used when doing Cannon-only builds. Additionally, the spawned Charged Crystals have a very low chance of casting Psionic Storms, and have a very low HP. Can be useful against certain <a href="/guides/enemycomps">Enemy Compositions</a> with numerous, low-HP units like Swarmy Zerg or against Infested units.</td>
                <td>300 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/abilities/zeratul/avatarofessence.png" alt = "Avatar of Essence"></td>
                <td>Avatar of Essence</td>
                <td>Call down the Avatar of Essence, the embodiment of evolutionary potential, at the target location. The Avatar of Essence is controllable and will fight for 60 seconds.</td>
                <td>Extremely powerful Avatar due to the fact that it can devolve all non-heroic enemy units (including Infested). Heroic units will have their Attack speed and movement speed reduced by 50%. One devolution wave can significantly reduce the power level of the enemy forces. Additionally, it may be useful to pre-buff your units with the Avatar by spawning it a few seconds before you expect to take an engagement so your units will have an attack speed buff applied to them.</td>
                <td>300 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>The Avatar of Form ability brings an Avatar of Form onto the battlefield. This unit has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/avatarofform.jpg" alt="Avatar of Form">
            <p>Avatar of Form</p>
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
                        <td><img src="/images/commanderdata/abilities/zeratul/summonchargedcrystals.png" alt="Summon Charged Crystals"></td>
                        <td>Summon Charged Crystals</td>
                        <td>Marks a target area on the ground. After 2 seconds, the Avatar of Form deals 100 damage and summons 10 Xel'Naga Charged Crystals at the target location.<br>Charged Crystals have a 10% chance to cast a miniature Psionic Storm with each attack, dealing 40 damage to all enemy units in a small area over 4 seconds.</td>
                        <td>25 seconds</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/psionicgale.png" alt="Psionic Gale"></td>
                        <td>Psionic Gale</td>
                        <td>Creates a storm of psionic energy that lasts 4 seconds, dealing 160 damage to all enemy units in a large target area. Does not damage friendly units.</td>
                        <td>10 seconds</td>
                    </tr>
                    <tr class="autocast">
                        <td><img src="/images/commanderdata/abilities/zeratul/psionicblast.png" alt="Psionic Blast"></td>
                        <td>Psionic Blast</td>
                        <td>Charges up, dealing 500 damage to a target unit after 3 seconds. </td>
                        <td>10 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>The Avatar of Essence ability brings an Avatar of Essence onto the battlefield. This unit has abilities itself, shown below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/abilities/zeratul/avatarofessence.jpg" alt="Avatar of Essence">
            <p>Avatar of Essence</p>
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
                        <td><img src="/images/commanderdata/abilities/zeratul/devolutionwave.png" alt="Devolution Wave"></td>
                        <td>Devolution Wave</td>
                        <td>Transforms all enemy units in a large area around the Avatar of Essence into a lower evolutionary form.</td>
                        <td>20 seconds</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <p>Devolve will Devolve all non-heroic, non-MapBoss enemy units within 10 range of the Avatar of Essence. For Heroic units, Attack speed and Movement speed are reduced by 50%. Devolve works in a very similar way to the Transmutation <a href="/resources/mutators">Mutator</a>. All units caught within the Devolve wave will Devolve to one tier lower. The tier list is shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Tier</th>
                <th>Devolves Into</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <ul>
                        <li>Drone</li>
                        <li>Probe</li>
                        <li>SCV</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>
                    <ul>
                        <li>Marine</li>
                        <li>Zergling</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>
                    <ul>
                        <li>Baneling</li>
                        <li>Hellbat</li>
                        <li>Hellion</li>
                        <li>Medic</li>
                        <li>Reaper</li>
                        <li>Roach</li>
                        <li>Vulture</li>
                        <li>Widow Mine</li>
                        <li>Zealot</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>
                    <ul>
                        <li>Adept</li>
                        <li>Firebat</li>
                        <li>Marauder</li>
                        <li>Sentry</li>
                        <li>Swarm Queen</li>
                        <li>Queen</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>
                    <ul>
                        <li>Corruptor</li>
                        <li>Dragoon</li>
                        <li>Ghost</li>
                        <li>High Templar</li>
                        <li>Hydralisk</li>
                        <li>Medivac</li>
                        <li>Mutalisk</li>
                        <li>Phoenix</li>
                        <li>Stalker</li>
                        <li>Viking</li>
                        <li>Widow Mine</li>
                        <li>Widow Mine (Burrowed)</li>
                        <li>Wraith</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>
                    <ul>
                        <li>Banshee</li>
                        <li>Brood Queen</li>
                        <li>Cyclone</li>
                        <li>Dark Templar</li>
                        <li>Infestor</li>
                        <li>Oracle</li>
                        <li>Ravager</li>
                        <li>Scout</li>
                        <li>Warhound</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>
                    <ul>
                        <li>Archon</li>
                        <li>Disruptor</li>
                        <li>Immortal</li>
                        <li>Liberator</li>
                        <li>Lurker</li>
                        <li>Lurker (Burrowed)</li>
                        <li>Raven</li>
                        <li>Science Vessel</li>
                        <li>Siege Tank</li>
                        <li>Swarm Host</li>
                        <li>Viper</li>
                        <li>Void Ray</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>8</td>
                <td>
                    <ul>
                        <li>Battlecruiser</li>
                        <li>Brood Lord</li>
                        <li>Carrier</li>
                        <li>Colossus</li>
                        <li>Reaver</li>
                        <li>Tempest</li>
                        <li>Thor</li>
                        <li>Ultralisk</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <p>For any units not included on the list, their tier will equal their supply cost, with a minimum tier of 1.</p>
    <p>Devolve will not create the following units as a result of the Devolution Wave:</p>
    <ul>
        <li>Baneling</li>
        <li>Disruptor</li>
        <li>Liberator (in Siege Mode)</li>
        <li>Oracle</li>
        <li>Reaver</li>
        <li>Scourge</li>
        <li>Siege Tank (in Siege Mode)</li>
    </ul>
    <p>All units present within 10 range of the Avatar will get an evolution buff level every 15 seconds. When out of range, they will lose an evolution buff level every 15 seconds.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Buff Level</th>
                <th>Attack Speed</th>
                <th>Damage Reduction</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>25%</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>50%</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>75%</td>
                <td>30%</td>
            </tr>
            <tr>
                <td>4</td>
                <td>100%</td>
                <td>40%</td>
            </tr>
        </tbody>
    </table>
    <a id="leveling"></a><h2>Sub-Ascension Leveling</h2>
    <p>Difficulty: Easy</p>
    <p>Use Ambushers and Enforcers during the early stages of leveling as part of your core army composition. Once you get to level 3, Ambushers damage output increases a lot due to their powerful Blink damage upgrade. Be wary of your use of the Stasis Beam, which is a bad calldown. It should not be used to Stasis an entire attack wave, but cut the wave into more manageable parts. Rely on your Legion calldowns more aggressively, even if it means cutting unit production.</p>
    <a id="masteries"></a><h2>Masteries</h2>
    <p>Below are the three Power Sets for Zeratul with the recommended point allocations for each. Note that these are meant to serve a general, all-purpose build that is effective across all maps with no Prestiges selected. You are highly encourged to change these masteries to suit your playstyle and particular challenges you face (e.g. <a href="/resources/weeklymutations">Weekly Mutations</a>).</p>
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
                <td>Zeratul Attack Speed</td>
                <td>1.5% per point<br>45% maximum</td>
                <td>?</td>
                <td rowspan="2">The choice here depends on how you use Zeratul compared to his units. If you prefer to use a cannon build, Zeratul's attack speed is a better investment. Additionally, your ability to micro Zeratul can provide you with a lot of value from Zeratul Attack Speed.</td>
            </tr>
            <tr>
                <td>Combat Unit Attack Speed</td>
                <td>0.5% per point<br>15% maximum</td>
                <td>?</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">A player's playstyle will determine which mastery to use. For players that prefer to micro Zeratul, the Attack Speed Mastery can be very beneficial, especially when combined with the Avatar of Essence.</p>
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
                <td>Artifact Fragment Spawn Rate</td>
                <td>-2 sec per point<br>-60 sec maximum</td>
                <td>30</td>
                <td rowspan="2">Artifact Fragments directly correlate to Zeratul's power level in the game and should be prioritized. Support Calldown Cooldown Reduction may be useful for players that prefer to spam them.</td>
            </tr>
            <tr>
                <td>Support Calldown Cooldown Reduction</td>
                <td>-1% per point<br>-30% maximum</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">The Support Calldowns, while strong, do not provide as much of a ramp up in power level of the commander as the Artifact Fragments. It is much more efficient to increase the spawn rate of Artifact Fragments.</p>
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
                <td>Legendary Legion Cost</td>
                <td>-1% per point<br>-30% maximum</td>
                <td>0</td>
                <td rowspan="2">Players that utilize Avatars often can find some benefit for the Avatar Cooldown. The Legendary Legion cost makes it easy to spam them, and for players that use them to fast-expand, allows them to expand faster.</td>
            </tr>
            <tr>
                <td>Avatar Cooldown</td>
                <td>-4 sec per point<br>-120 sec maximum</td>
                <td>30</td>
            </tr>
        </tbody>
    </table>
    <p class="masterySummary">While the Legion calldown mastery allows players to expand quicker, the cost reduction is not significant enough to justify its use. The Avatar mastery is recommended for more general play.</p>
    <a id="prestiges"></a><h2>Prestiges</h2>
    <p>Below are the prestiges for Zeratul. Note that "Effective Level" is the level at which the prestige achieves it full effect.</p>
    <table class="prestigeTable">
        <thead>
            <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Description</th>
                <th>Effective Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Anakh Su'n</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Zeratul can deploy the Void Seeker, granting all friendly units in a target area Super Cloak for 15 seconds.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>The Void Seeker can no longer transport Zeratul.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>
                    <ul>
                        <li>Void Seeker cooldown is 180 seconds</li>
                        <li>Supercloak range is 16 range from selected point</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">One of the primary uses for the Void Seeker for Zeratul play is quickly getting to Artifact Fragments. You can mitigate the disadvantage by using Void Arrays or Blink to transport Zeratul. The prestige sacrifices that for a Supercloak that Zeratul can use to push into enemy bases without taking losses. It is a powerful prestige that helps Zeratul mitigate losses of his expensive units. This prestige works very well when both players coordinate a push into an enemy base, as both players can take advantage of the Supercloak to pick off high-priority targets.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <thead>
            <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Description</th>
                <th>Effective Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>Knowledge Seeker</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Zeratul can collect an unlimited number of Artifact Fragments.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Zeratul's combat units cost 25% more.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>
                    <ul>
                        <li>Each artifact increases number of Blink charges by 1</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige works well for players that can quickly find their Artifact Fragments. The effectiveness of this prestige is dependant on the length of the mission. Fixed-time missions are best for this, as the longer game time allows Zeratul's units to upgrade more and more. This prestige works best with the Artifact Spawn mastery. The disadvantage can be further mitigated by using Tesseract Cannons. As they are structures, their costs are not increased from this prestige.</td>
            </tr>
        </tbody>
    </table>
    <br>
    <table class="prestigeTable">
        <thead>
            <tr>
                <th>Level</th>
                <th>Name</th>
                <th>Description</th>
                <th>Effective Level</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3</td>
                <td>Herald of the Void</td>
                <td>
                    <ul>
                        <li>Advantages:
                            <ul>
                                <li>Each collected Artifact Fragment reduces the cooldown of Zeratul's Shadow Cleave by 5 seconds.</li>
                                <li>Shadow Cleave spawns a tornado that damages and slows enemy units.</li>
                            </ul>
                        </li>
                        <li>Disadvantages:
                            <ul>
                                <li>Zeratul can only collect up to two Artifact Fragments.</li>
                            </ul>
                        </li>
                    </ul>
                </td>
                <td>1</td>
                <td>
                    <ul>
                        <li>Tornadoes deal 5 damage every 0.25 seconds and slows units by 30% for 5 seconds</li>
                        <li>Tornadoes target Detectors first</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td class="forceleft" colspan="5">This prestige sacrifices the third artifact set of upgrades (as well as the Avatars) for a more versatile hero unit. This prestige works best on shorter maps and missions where hyper-aggressive hero play is rewarded, as a lot of the units will not have the defensive upgrades that are provided with the third Artifact Fragment. This prestige works well against certain <a href="/resources/mutators">mutators</a> like Minesweeper, as the Tornadoes can damage burrowed units without the need for any detection.</td>
            </tr>
        </tbody>
    </table>
    <p>All of Zeratul's prestiges are solid and a player can get by general play using any (or none of them). The optimal prestige selection is highly dependant on the map that is being played. For example, Knowledge Seeker works best on long maps, whereas Herald of the Void works best on short maps.</p>
    <a id="hero"></a><h2>Hero Unit</h2>
    <img id="heroPic" src="/images/commanderdata/hero/zeratul/zeratul.jpg" alt="Zeratul">
    <p>Spawn time: 4:00</p>
    <p>Respawn time: 1:00</p>
    <p>Zeratul has a Passive called "One With the Shadows". Zeratul is permanently cloaked. He becomes immune to damage for 0.5 seconds after being attacked. Cannot occur more than once every 5 seconds.</p>
    <p>The abilities for Zeratul are:</p>
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
                <td><img src="/images/commanderdata/hero/zeratul/blink.png" alt = "Blink"></td>
                <td>Blink</td>
                <td>Teleports Zeratul to a nearby location.</td>
                <td>8 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zeratul/summonvoidseeker.png" alt = "Summon Void Seeker"></td>
                <td>Summon Void Seeker</td>
                <td>Transports Zeratul to a target location.</td>
                <td>120 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zeratul/shadowcleave.png" alt = "Shadow Cleave"></td>
                <td>Shadow Cleave</td>
                <td>Deals 100 damage to nearby enemies.</td>
                <td>12 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/commanderdata/hero/zeratul/propheticvision.png" alt = "Prophetic Vision"></td>
                <td>Prophetic Vision</td>
                <td>Shows the location of or unearths a hidden Xel'Naga Artifact Fragment.</td>
                <td>10 seconds if Fragment is not found<br>Remaining seconds until next Fragment spawns if found.</td>
            </tr>
        </tbody>
    </table>
    <p>The upgrades for Zeratul are:</p>
    <table class="heroUpgrades">
        <thead>
            <tr>
                <th>Upgrade</th>
                <th>Name</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/commanderdata/hero/zeratul/purityofwill.png" alt="Purity of Will"></td>
                <td>Purity of Will</td>
                <td>Zeratul will gain additional shields (+50), increased Shadow Cleave damage (+10), and additional charges of Blink (+1) with each Artifact Fragment he finds.</td>
            </tr>
        </tbody>
    </table>
    <a id="army"></a><h2>Recommended Army Composition</h2>
    <p>The recommended army composition for Zeratul is below. Note that this assumes no Prestige talent selected and recommended Mastery Allocations. This is a basic recommendation for your army framework. It is recommended to gain an understanding for each of the units in the <a href="#units">Units</a> section and further add tech units so that you are able to better handle the situations you face.</p>
    <img class="army" src="/images/commanderdata/units/zeratul/xelnagaambusher.jpg" alt="Xel'Naga Ambusher"><img class="army" src="/images/commanderdata/units/zeratul/xelnagashieldguard.jpg" alt="Xel'Naga Shieldguard"><img class="army" src="/images/commanderdata/units/zeratul/xelnagavoidarray.jpg" alt="Xel'Naga Void Array">
    <p>Mass Ambusher builds work very well for Zeratul, but care will need to be taken in how you engage high-damage attack waves. Shieldguards should be used to quickly replenish the shield damage taken by your army. Use Void Arrays to move your army around the map and handle attack waves.</p>
    <div class="techContainer"><img class="army"src="/images/commanderdata/units/zeratul/xelnagaenforcer.jpg" alt="Xel'Naga Enforcer"><div class="techAdd">+</div></div>
    <p>Add Enforcers to your army if dealing with large numbers of Armored air units.</p>
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
    <a id="units"></a><h2>Combat Units</h2>
    <p>For more information on Zeratul's unit stats, comparison between units and upgrade calculations, visit the <a href="/tools/unitstats">Data Tables</a> page.</p>
    <p>Zeratul's combat units are listed below:</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zeratul/xelnagaambusher.jpg" alt="Xel'Naga Ambusher">
            <p>Xel'Naga Ambusher</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Good for providing anti-air support to an army with strong anti-ground capabilities</li>
                <li>Does a good amount of burst damage if enough Blink charges are stored.</li>
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
                        <td><img src="/images/commanderdata/unitskills/zeratul/predictiveblink.png" alt="Predictive Blink"></td>
                        <td>Predictive Blink</td>
                        <td>Teleports this unit to a nearby target location.</td>
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
                        <th>Fragments Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/predictiveblink.png" alt="Predictive Blink"></td>
                        <td>Predictive Blink</td>
                        <td>Allows this unit to teleport to a nearby target location. Xel'Naga Ambushers will automatically teleport to safety once their hulls have been breached.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/vengeanceofthevoid.png" alt="Vengeance of the Void"></td>
                        <td>Vengeance of the Void</td>
                        <td>Blinking leaves behind a Void Apparition that attacks once for 50% of the unit's weapon damage.</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/phasebattery.png" alt="Phase Battery"></td>
                        <td>Phase Battery</td>
                        <td>This unit can now store up to 3 charges of Predictive Blink and regains a charge every 8 seconds.</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zeratul/xelnagashieldguard.jpg" alt="Xel'Naga Shieldguard">
            <p>Xel'Naga Shieldguard</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Recommended to have a few in your army to replenish shields to prevent unnecessary losses, especially considering each unit is expensive.</li>
                <li>Reflection shield only works on projectiles (e.g. Stalker attacks) and not Hitscan (e.g. Marine attacks) shots.</li>
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
                        <td><img src="/images/commanderdata/unitskills/zeratul/shieldrecharge.png" alt="Shield Recharge"></td>
                        <td>Shield Recharge</td>
                        <td>Recharges the shields of a friendly Protoss unit.<br><br>Restores 4 shields per 1 energy.</td>
                        <td>0 seconds</td>
                        <td>0</td>
                    </tr>
                    <tr class="unlockable">
                        <td><img src="/images/commanderdata/unitskills/zeratul/reflectionshield.png" alt="Reflection Shield"></td>
                        <td>Reflection Shield</td>
                        <td>Creates an aura that reflects 50% of all projectiles back to enemy attackers. Lasts 15 seconds. Can be set to Autocast.</td>
                        <td>180 seconds</td>
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
                        <th>Fragments Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/shieldrecharge.png" alt="Shield Recharge"></td>
                        <td>Shield Recharge</td>
                        <td>Allows this unit to recharge the shields of a friendly Protoss unit.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/eclipseprotocol.png" alt="Eclipse Protocol"></td>
                        <td>Eclipse Protocol</td>
                        <td>Increases the energy regeneration of this unit by 100%.</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/reflectionshield.png" alt="Reflection Shield"></td>
                        <td>Reflection Shield</td>
                        <td>Allows this unit to create an aura that reflects 50% of all projectiles back to enemy attackers.</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zeratul/voidtemplar.jpg" alt="Void Templar">
            <p>Void Templar</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does great anti-ground DPS.</li>
                <li>Can take a lot of damage and should be backed up with Shieldguards.</li>
                <li>Void Fury provides a significant powerspike due to high burst-damage capabilities.</li>
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
                        <td><img src="/images/commanderdata/unitskills/zeratul/dtblink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Allows the Void Templar to teleport to a nearby target location.</td>
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
                        <th>Fragments Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/dtblink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Allows this unit to teleport to a nearby target location.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/voidfury.png" alt="Void Fury"></td>
                        <td>Void Fury</td>
                        <td>When this unit Blinks, it will deal 50 damage to units caught in its path.</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/backtotheshadows.png" alt="Back to the Shadows"></td>
                        <td>Back to the Shadows</td>
                        <td>When this unit takes fatal damage, it retreats to the Void and regenerates its health and shields over 10 seconds. Cannot occur more than once every 180 seconds.</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zeratul/xelnagaenforcer.jpg" alt="Xel'Naga Enforcer">
            <p>Xel'Naga Enforcer</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Does very high anti-air DPS.</li>
                <li>Not as good as regular immortals for anti-ground, due to higher costs, and slightly reduced range.</li>
                <li>Massing them is viable, but not efficient, because their shots are projectiles, leading to a lot of potential overkill on targets and wasted shots.</li>
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
                        <td><img src="/images/commanderdata/unitskills/zeratul/barrier.png" alt="Barrier"></td>
                        <td>Barrier</td>
                        <td>Absorbs up to 100 damage. Lasts for 10 seconds.</td>
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
                        <th>Fragments Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/barrier.png" alt="Barrier"></td>
                        <td>Barrier</td>
                        <td>Allows this unit to absorb 100 damage. Lasts for 10 seconds.</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/forcecannon.png" alt="Force Cannon"></td>
                        <td>Force Cannon</td>
                        <td>Allows this unit's anti-air weapon to knock back enemy air units, dealing 25% of its damage to units caught in the path of the blast.</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/enternitybarrier.png" alt="Eternity Barrier"></td>
                        <td>Eternity Barrier</td>
                        <td>Increases the damage absorption of the Xel'Naga Enforcer's Barrier by 300% and fully repairs its hull damage.</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zeratul/xelnagaabrogator.jpg" alt="Xel'Naga Abrogator">
            <p>Xel'Naga Abrogator</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>Great unit for dealing with <a href="/guides/enemycomps">Enemy Compositions</a> with numerous, low-HP units like Swarmy Zerg or against Infested units.</li>
                <li>Very good defensive unit for Infested maps.</li>
                <li>Relatively ineffective when massed due to overkills.</li>
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
                        <td><img src="/images/commanderdata/unitskills/zeratul/purificationnova.png" alt="Purification Nova"></td>
                        <td>Purification Nova</td>
                        <td>Shoots out a ball of energy that detonates 3 seconds or on contact with an enemy unit, dealing 100 splash damage to nearby ground units and structures. The Xel'Naga Abrogator is immobile while this is active.</td>
                        <td>12 seconds</td>
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
                        <th>Fragments Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/novabattery.png" alt="Nova Battery"></td>
                        <td>Nova Battery</td>
                        <td>Reduces the cooldown of Purification Nova by 50%.</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/clusternova.png" alt="Cluster Nova"></td>
                        <td>Cluster Nova</td>
                        <td>When a Purification Nova explodes, it generates three smaller Novas that deal 50 damage each to enemy units in their path.</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/commanderdata/units/zeratul/xelnagavoidarray.jpg" alt="Xel'Naga Void Array">
            <p>Xel'Naga Void Array</p>
        </div>
        <div class="descContainer">
            <ul>
                <li>A must-have in Zeratul's army to allow for great mobility around the map.</li>
                <li>Can be used to quickly reinforce units on the battlefield.</li>
            </ul>
            <p>Skills: None</p>
            <p>Upgrades:</p>
            <table class="unitUpgrades">
                <thead>
                    <tr>
                        <th>Upgrade</th>
                        <th>Name</th>
                        <th>Effect</th>
                        <th>Fragments Required</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/infinitevoid.png" alt="Infinite Void"></td>
                        <td>Infinite Void</td>
                        <td>Grants the Xel'Naga Void Array unlimited capacity.</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td><img src="/images/commanderdata/unitupgrades/zeratul/shieldboosters.png" alt="Shield Boosters"></td>
                        <td>Shield Boosters</td>
                        <td>Nearby units regenerate an additional 2 shields per second.</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="buildOrder"></a><h2>Build Order</h2>
    <p>Below is the standard economic build order for Zeratul (assumes max points in Legion Cost Reduction). For more information on how to read and construct your own build orders, please check the <a href="/guides/buildordertheory">Build Order Theory</a> page.</p>
    <p class="buildOrder">
        18 Probe -> Expo<br>
        19 Zoraya Legion<br>
        21 Nexus
    </p>
    <a id="guide"></a><h2>Gameplay Guide</h2>
    <h3>Playstyle Traps</h3>
    <p>None.</p>
    <a id="fastexpand"></a><h3>Legion Expands</h3>
    <p>One of the advantages of Zeratul is his access to powerful Legion calldowns which can be used to not only clear expansion rocks, but also clear contested expansions and sometimes even clear their ally's expansion too. The table below explains how to maximize utilization of your first Legion calldown.. Note that for some missions (like <a href="/missions/oblivionexpress">Oblivion Express</a>), the Legion expand is simple because clearing both expansions is easy and therefore, no details will be provided.</p>
    <table id="fastExpand">
        <thead>
            <tr>
                <th>Map</th>
                <th>Legion Expand</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                <td>Clear your expansion and direct the Legion towards the nearest enemy camp.</td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td>This expand is incredibly difficult and will require a lot of practice.<br><br>
                    Step 1:<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_cod1.jpg" alt="Cradle of Death Legion Expand Step 1"><br><br>
                    Step 2:<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_cod2.jpg" alt="Cradle of Death Legion Expand Step 2"><br><br>
                    Notes:
                    <ul>
                        <li>Move your truck to the first Beacon as soon as the Construct dies to prevent losing your truck.</li>
                        <li>The second truck can move to the remaining beacon and simply ignore the remaining defenders.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/deadofnight">Dead of Night</a></td>
                <td>No expansion available.</td>
            </tr>
            <tr>
                <td><a href="/missions/lockload">Lock & Load</a></td>
                <td>You can fully clear both expansion with one Zoraya Legion calldown shown below:<br><img src="/images/commanderdata/guides/zeratul/legionexpand_ll.jpg" alt="Lock & Load Legion Expand"></td>
            </tr>
            <tr>
                <td><a href="/missions/malwarfare">Malwarfare</a></td>
                <td>Clearing both expansions is difficult because units that cannot hit air will run away from the Zoraya Legion. You may improve the effectiveness of your Legion by luring enemy units with your Probe into the Legion.<br><br>
                    Be careful with enemy Zerg compositions. When structures are destroyed, they will spawn broodlings that can kill your Probe.</td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td>This expand is incredibly difficult and will require a lot of practice.<br><br>
                    Step 1: Make your way to Evacuation Ship #4 in the top-left of the map.<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_me1.jpg" alt="Miner Evacuation Legion Expand Step 1"><br>Note: If the Evacuation Ship to the right of the expansion area is destroyed (beacon not present), you may go around the entire expansion area and avoid any threat inside it.<br><br>
                    Step 2: Drop a Serdath Legion in that area. This causes Infested Banshees to unburrow and get Mind Controlled.<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_me2.jpg" alt="Miner Evacuation Legion Expand Step 2"><br><br>
                    Step 3: Use these Banshees to clear the Expansion. Make sure you do not lose any. There are many Infested Marines present in that area.
                    Notes:
                    <ul>
                        <li>Your Probe will take 2 hits from Infested Marauders (it dies on the third hit).</li>
                        <li>As soon as you summon the Legion, move your probe away towards the expansion so it does not die to Infested.</li>
                        <li>You can Burrow Infested Banshees to get them to quickly regenerate HP.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                <td>Due to the large distance between expansions, it is not possible to clear both expansions before the Legion's timer runs out.</td>
            </tr>
            <tr>
                <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                <td>Simple expand because the expansions are next to each other.</td>
            </tr>
            <tr>
                <td><a href="/missions/partparcel">Part & Parcel</a></td>
                <td>The pathing for the fast-expand is race-dependent (similar to <a href="/commanders/alarak">Alarak's</a> fast expand).<br>
                    <form action='#'>
                        <label><input type='radio' name='pp' value='protoss' checked>Protoss</label><br>
                        <label><input type='radio' name='pp' value='terran'>Terran</label><br>
                        <label><input type='radio' name='pp' value='zerg'>Zerg</label><br></form>
                    <div class="fastExpand" id="ppdiv"><img id="pp" src="/images/commanderdata/guides/zeratul/legionexpand_pp_protoss.jpg" alt="Zeratul Legion Expand on Part & Parcel"></div>

                    <script>
                        var imgList=[];
                        imgList.push('/images/commanderdata/guides/zeratul/legionexpand_pp_protoss.jpg');
                        imgList.push('/images/commanderdata/guides/zeratul/legionexpand_pp_terran.jpg');
                        imgList.push('/images/commanderdata/guides/zeratul/legionexpand_pp_zerg.jpg');
                        preload(imgList);
                        $("input[name='pp']").change(function(){
                            var race= $(this).val();
                            var oldImg = $('#pp');
                            var img = new Image();
                            img.src = '/images/commanderdata/guides/zeratul/legionexpand_pp_'+ race + '.jpg';
                            var newImg = $(img).hide();
                            $('#ppdiv').append(img);
                            oldImg.stop(true).fadeOut(500, function() {
                                $(this).remove();
                            });
                            newImg.fadeIn(500);
                            newImg.attr('id', 'pp');
                            return false;
                        })
                    </script>
                </td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td>It is generally really difficult to deal with the first attack wave with the Legion used to clear the expansion.<br><br>Zoraya Legion takes approximately 25 seconds to clear the Expansion rocks. Additionally, the Legion takes roughly 25 seconds to reach the main ramp, allowing for only 10 seconds of attacking the first wave.<br><br>Arrival of the initial attack wave at the top of the main ramp depends on the composition of the attack wave and can range from anywhere between 2:35 to 2:55. Therefore, it is better to use the Legion to defend against the first wave, then use whatever time is left to start clearing the rocks. The remaining rocks can be cleared with a few units.
                </td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                <td><img src="/images/commanderdata/guides/zeratul/legionexpand_soa.jpg" alt="Scythe of Amon Legion Expand"></td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td>Timing for this is really tight. The Legion will die when they have 0.1 seconds left on the timer.<br><br>
                    Step 1: Target the Zoraya Legion as shown below.<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_totp1.jpg" alt="Temple of the Past Legion Expand Step 1"><br><br>
                    It should look like below:<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_totp2.jpg" alt="Temple of the Past Legion Expand Path"><br><br>
                    Step 2: As soon as the Void Rays start attacking the rocks, place the pathing marker up to the gas rocks.<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_totp3.jpg" alt="Temple of the Past Legion Expand Step 2"><br><br>
                    If done correctly, one Void Ray will move to attack the top gas rock when the main rock break, while the rest of the Legion attack the lower gas rock.<br><br>
                    Step 3: As soon as the single Void Ray starts attacking the top gas rock, move the pathing marker down to your ally's lower gas rock. Use the minimap to do so. You may fine-tune the positioning once they start moving shown below.<br>
                    <img src="/images/commanderdata/guides/zeratul/legionexpand_totp4.jpg" alt="Temple of the Past Legion Expand Step 3">
                </td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td>It is not possible to clear both, your and your ally's expansion with one Zoraya Legion.<br><br>
                    Make sure you access the expansion from either the East or the South ramp, rather than the Northern ramp to avoid the defenders there.
                </td>
            </tr>
            <tr>
                <td><a href="/missions/voidlaunch">Void Launch</a></td>
                <td>Due to the large distance between expansions, it is not possible to clear both expansions before the Legion's timer runs out.</td>
            </tr>
            <tr>
                <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                <td>Due to the large distance between expansions, it is not possible to clear both expansions before the Legion's timer runs out.</td>
            </tr>
        </tbody>
    </table>
    <a id="artifact"></a><h3>Artifact Spawn Locations</h3>
    <p>A key part of Zeratul gameplay is finding Artifact Fragments. These fragments directly correspond to the power level of your units and therefore, it is critical to get them as fast as possible. Assuming Artifact fragments are found as quickly as possible, Prophetic Vision incurs a 3-minute cooldown (assuming no masteries are added).</p>
    <p>If an artifact is not found within a certain amount of time, the minimap will be pinged and a circle displaying the rough area to look shown to the player. Each hint makes the search radius smaller, making it easier for the player to find the artifact fragment. The hint timings are shown below and are also affected by the Zeratul Artifact Spawn mastery:</p>
    <table>
        <thead>
            <tr>
                <th>Fragment</th>
                <th>Hint 1 (Radius 35)</th>
                <th>Hint 2 (Radius 25)</th>
                <th>Hint 3 (Radius 15)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>5:00</td>
                <td>6:00</td>
                <td>7:00</td>
            </tr>
            <tr>
                <td>2</td>
                <td>10:00</td>
                <td>11:00</td>
                <td>12:00</td>
            </tr>
            <tr>
                <td>3</td>
                <td>15:00</td>
                <td>16:00</td>
                <td>17:00</td>
            </tr>
        </tbody>
    </table>
    <p>Artifacts spawn within a certain distance away from either the Zeratul Artifact Container, or the mid-point of both player bases. There are many limitations as to where the artifact can spawn, from maximum walking distance and the total health of enemy units nearby. This technical data is listed below. A more visual guide is shown in the subsequent table.</p>
    <p>To allow the table to fit, the column headers are referred as variable names instead as follows:</p>
    <ul>
        <li><b>Rmin:</b> Minimum Spawning Distance away from the center.</li>
        <li><b>Rmax:</b> Maximum Spawning Distance away from the center.</li>
        <li><b>Wmax:</b> Maximum Walking Distance to Artifact Spawn Point away from the center. A maximum walking distance of 0 means there is no limit to the pathing length. You will see this value used on more open maps.</li>
        <li><b>HPmax:</b> Maximum total HP of enemy units within 10 range of the Artifact spawn location</li>
    </ul>
    <div class="tableContainer">
        <table class="centered">
                <tr>
                    <th rowspan="2">Map</th>
                    <th colspan="4">Fragment 1</th>
                    <th colspan="4">Fragment 2</th>
                    <th colspan="4">Fragment 3</th>
                </tr>
                <tr>
                    <th>Rmin</th>
                    <th>Rmax</th>
                    <th>Wmax</th>
                    <th>HPmax</th>
                    <th>Rmin</th>
                    <th>Rmax</th>
                    <th>Wmax</th>
                    <th>HPmax</th>
                    <th>Rmin</th>
                    <th>Rmax</th>
                    <th>Wmax</th>
                    <th>HPmax</th>
                </tr>
                <tbody>
                    <tr>
                        <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>110</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                        <td>20</td>
                        <td>40</td>
                        <td>50</td>
                        <td>0</td>
                        <td>50</td>
                        <td>70</td>
                        <td>80</td>
                        <td>1000</td>
                        <td>70</td>
                        <td>90</td>
                        <td>110</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/deadofnight">Dead of Night</a></td>
                        <td>30</td>
                        <td>100</td>
                        <td>60</td>
                        <td>0</td>
                        <td>50</td>
                        <td>100</td>
                        <td>100</td>
                        <td>1000</td>
                        <td>60</td>
                        <td>100</td>
                        <td>150</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/lockload">Lock & Load</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/malwarfare">Malwarfare</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>110</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>120</td>
                        <td>140</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                        <td>25</td>
                        <td>40</td>
                        <td>0</td>
                        <td>0</td>
                        <td>40</td>
                        <td>80</td>
                        <td>100</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>130</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                        <td>20</td>
                        <td>40</td>
                        <td>60</td>
                        <td>1000</td>
                        <td>40</td>
                        <td>70</td>
                        <td>90</td>
                        <td>1000</td>
                        <td>60</td>
                        <td>90</td>
                        <td>130</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/partparcel">Part & Parcel</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>110</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>60</td>
                        <td>90</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>110</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>0</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                        <td>20</td>
                        <td>40</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/voidlaunch">Void Launch</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                        <td>30</td>
                        <td>50</td>
                        <td>0</td>
                        <td>0</td>
                        <td>50</td>
                        <td>80</td>
                        <td>0</td>
                        <td>1000</td>
                        <td>80</td>
                        <td>100</td>
                        <td>0</td>
                        <td>1000</td>
                    </tr>
                </tbody>
        </table>
    </div>
    <p>A more visual guide for the Artifact Spawn locations is shown below, with green, yellow and red areas denoting the spawn locations of the first, second and third artifacts. Note that because these locations are dependent on the nearby HP's of enemies, there will be some variance with different races, and if you have previously pushed into those locations.</p>
    <table class="centered">
            <tr>
                <th>Map</th>
                <th>Artifact Spawn Locations</th>
            </tr>
            <tbody>
                <tr>
                    <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_coa.jpg" alt="Chain of Ascension Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_cod.jpg" alt="Cradle of Death Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/deadofnight">Dead of Night</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_don.jpg" alt="Dead of Night Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/lockload">Lock & Load</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_ll.jpg" alt="Lock & Load Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/malwarfare">Malwarfare</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_mw.jpg" alt="Malwarfare Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_me.jpg" alt="Miner Evacuation Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_mo.jpg" alt="Mist Opportunities Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_oe.jpg" alt="Oblivion Express Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/partparcel">Part & Parcel</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_pp.jpg" alt="Part & Parcel Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_rtk.jpg" alt="Rifts to Korhal Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_soa.jpg" alt="Scythe of Amon Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_totp.jpg" alt="Temple of the Past Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_tvp.jpg" alt="The Vermillion Problem Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/voidlaunch">Void Launch</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_vl.jpg" alt="Void Launch Artifact Spawn Locations"></td>
                </tr>
                <tr>
                    <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                    <td><img src="/images/commanderdata/guides/zeratul/artifactspawn_vt.jpg" alt="Void Thrashing Artifact Spawn Locations"></td>
                </tr>
            </tbody>
    </table>
    <h3>Playstyle Tips</h3>
    <ul>
        <li>Shades can be cancelled by clicking on the unit's Shade and pressing the ESC key. The shade will disappear, starting the cooldown. This allows you to only utilize the shades when you need them.</li>
        <li>If you are unsure on the location of an artifact, place waypoints around the map. Waypoints appear in Prophetic Vision, allowing you to find the artifact location quickly. A video is below:</li>
        <li>Throughout the mission, make Xel'Naga Watchers and place them in Watcher mode around the entire map. Granting vision of the entire map can be extremely powerful and synergizes very well with almost all commanders.</li>
        <li>Once you hit supply cap with your army, build Tesseract Cannons as a mineral dump in your base and Shade them across the map to defend and help your army push.</li>
        <li>Loading units into Void Arrays will prevent them from taking DoT (damage over time) damage.</li>
    </ul>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/h0OZG494TCY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <a id="videos"></a><h2>Video Guides</h2>
    <p>The below videos demonstrate the various Legion expands explained earlier. Note that as of patch 4.11.3, Zeratul's Legion costs have been increased significantly. The expand will still take place in the same way, but at a later point in the game (~2 mins).</p>
    <iframe width="950" height="535" src="https://www.youtube.com/embed/videoseries?list=PL-U97hco2Fu53ZsL8KSqVBysp4tPpg5CT" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
