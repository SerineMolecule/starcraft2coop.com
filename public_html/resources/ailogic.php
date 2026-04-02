<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - AI Logic</title>
  <meta name="description" content="Starcraft 2 Co-op AI logic. Learn about how the different abilities are used by spellcasters and when they use them.">
  <meta name="keywords" content="Starcraft co-op guides AI logic abilities skills">
  <link rel="canonical" href="https://starcraft2coop.com/guides/ailogic">
  <style>
    .leftImage{
        overflow:auto;
        margin-bottom:25px;
    }
    .leftImage div:first-child{
        float:left;
        margin-right:25px;
    }
    .imageContainer img{
        border-radius:50%;
    }
    .subtitle{
        font-weight:bold;
        text-align:center;
    }
    .unitSkills td:nth-child(4),.unitSkills td:nth-child(5){
        text-align:center;
    }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>AI Logic: Ability Usage Conditions</h1>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#genNotes">General Notes</a></p>
        <p><a href="#protoss">Protoss Units</a></p>
        <p><a href="#terran">Terran Units</a></p>
        <p><a href="#zerg">Zerg Units</a></p>
        <p><a href="#hybrid">Hybrid Units</a></p>
        <p><a href="#mission">Mission Objective Units</a></p>
        <p><a href="#mutator">Mutator Units</a></p>
    </div>
    <a id="genNotes"></a><h2>General Notes</h2>
    <p>This page lists out abilities available to enemy spellcasters and provides you with information on the conditions the AI uses to determine when and where to cast any ability. For units with multiple abilities, abilities at the top will be prioritized over abilities below them if they are off cooldown.</p>
    <p>Usually for ability usage, "Vitality" is a key factor that is taken into consideration. Vitality is simply the sum of the current HP + Shields of a unit.</p>
    <p>"Units Within Range" corresponds to the units within the range of the skill + 1, which allows for the unit to move a bit before casting its ability at maximum range.</p>
    <p>Sometimes, a Vitality Score may be used for a group of units. A vitality score assigns a score from 0.0 to 1.0 for each enemy unit, spanning from vitality 0.0 to a certain damage value (which will be specified for each individual ability). You may think of a Vitality score as the number of units that an ability is expected to kill. An additional 1.0 points may be added for units with bonus tags. Unfortunately, further details on the Vitality Score calculation cannot be extracted.</p>
    <p>Text that have been <del>struck through</del> is logic that is not being followed due to bugs in the code.</p>
    <p>SUGGEST implies that an order suggestion will be sent to the AI for further decision-making. It may or may not carry out the order if it deems it unncessary.</p>
    <a id="protoss"></a><h2>Protoss Units</h2>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/hightemplar.jpg" alt="High Templar">
            <p>High Templar</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/psionicstorm.png" alt="Psionic Storm"></td>
                        <td>Psionic Storm</td>
                        <td>Creates a storm of psionic energy that lasts 4 seconds, causing up to 80 damage to all enemy units in the target area. Does not damage friendly units.</td>
                        <td>2s</td>
                        <td>75</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ul>
                                <li>If High Templar is at 60% vitality or more:
                                    <ol>
                                        <li>There are 3 or more enemy units within range</li>
                                        <li>The total vitality of those units is 100 or more
                                        <br>&#8618;Trigger Psionic Storm<br><br></li>
                                    </ol>
                                </li>
                                <li>If High Templar is at less than 60% vitality:
                                    <ol>
                                        <li>There is an enemy unit within range</li>
                                        <li>It has a vitality of 15 or more
                                        <br>&#8618;Trigger Psionic Storm</li>
                                    </ol>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/archonmerge.png" alt="Archon Merge"></td>
                        <td>Archon Merge</td>
                        <td>Sacrifices 2 Templar to create an Archon. Can attack ground and air units.</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>A High Templar gets to a vitality of less than 60%
                                <br>&#8618;Trigger Archon Merge with <i>any</i> High Templar within 5 range.</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/oracle.jpg" alt="Oracle">
            <p>Oracle</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/pulsarbeam.png" alt="Pulsar Beam"></td>
                        <td>Pulsar Beam</td>
                        <td>Charges the Oracle's Pulsar Beam and allows it to attack enemy ground units.</td>
                        <td>4s</td>
                        <td>1.4/s</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ul>
                                <li>If Oracle is at 50% vitality or more:
                                    <ol>
                                        <li>There are 5 or more ground units
                                        <br>&#8618;Trigger Pulsar Beam<br><br></li>
                                    </ol>
                                </li>
                                <li>If Oracle is at less than 50% vitality:
                                    <ol>
                                        <li>There is a ground unit to attack
                                        <br>&#8618;Trigger Pulsar Beam</li>
                                    </ol>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/stasisward.png" alt="Stasis Ward"></td>
                        <td>Stasis Ward</td>
                        <td>Places a cloaked Stasis Ward at the target location. Once activated by an enemy ground unit, the ward traps nearby enemies in stasis for 15 seconds. Trapped units cannot be attacked or affected by abilities.</td>
                        <td>0s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ul>
                                <li>There are no enemies nearby</li>
                                <li>Oracle is less than 60 range away from the nearest enemy structure</li>
                                <li>Oracle has 80 energy or more</li>
                                <li>No stasis ward exists within 10 range
                                <br>&#8618;Trigger Stasis Ward</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/sentry.jpg" alt="Sentry">
            <p>Sentry</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/guardianshield.png" alt="Guardian Shield"></td>
                        <td>Guardian Shield</td>
                        <td>Creates a range 4 aura that reduces all incoming attack damage to friendly units by 2. Lasts 15 seconds.</td>
                        <td>15s</td>
                        <td>75</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Sentry does not have Guardian Shield buff from another sentry</li>
                                <li>There are 3 or more ranged enemy units or structures within range
                                <br>&#8618;Trigger Guardian Shield</li>
                            </ol>
                            <br>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/forcefield.png" alt="Force Field"></td>
                        <td>Force Field</td>
                        <td>Barrier that lasts 15 seconds and impedes movement of ground units. Massive units will shatter Force Fields on contact.</td>
                        <td>0s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Melee enemy within 1.5 range of the sentry
                                <br>&#8618;Trigger Force Field between Sentry and enemy unit</li>
                            </ol>
                            <ol>
                                <li>Ally unit with less than 20 vitality with an enemy melee unit within 1.5 range of it
                                <br>&#8618;Trigger Force Field between ally unit and enemy unit</li>
                            </ol>
                            <ol>
                                <li>Ally ranged unit with an enemy melee unit within 1.5 range of it
                                <br>&#8618;Trigger Force Field between ally unit and enemy unit</li>
                            </ol>
                            <ol>
                                <li>Sentry has more than 125 energy</li>
                                <li>Sentry has 40 vitality or less</li>
                                <li>There are 6 or more ranged enemy units</li>
                                <li>The enemy units have a Vitality Score of 6.0 with damage value 1
                                <br>&#8618;Trigger Force Field to split up enemy units</li>
                            </ol>
                            <br>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="terran"></a><h2>Terran Units</h2>
    <p>Note: AI Logic surrounding the usage of Ghost Nukes cannot be extracted from the game files.</p>
    <p>For Liberators:</p>
    <p>Liberators will switch to anti-air mode if:</p>
    <ul>
        <li>There are no ground units to attack</li>
        <li>There are 0-7 air units with less than 3 ground units present</li>
        <li>There are 8 or more air units with less than 12 ground units present</li>
    </ul>
    <p>For Siege Tanks:</p>
    <p>Siege Tanks will siege up as long as there is a valid ground target within range.</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/battlecruiser.jpg" alt="Battlecruiser">
            <p>Battlecruiser</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/yamatocannon.png" alt="Yamato Cannon"></td>
                        <td>Yamato Cannon</td>
                        <td>Blasts a target with a devastating plasma cannon, causing 300 damage.</td>
                        <td>0s</td>
                        <td>100</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit or structure is not Heroic</li>
                                <li>Enemy unit or structure has 225 vitality or more
                                <br>&#8618;Trigger Yamato Cannon</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/ghost.jpg" alt="Ghost">
            <p>Ghost</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/sniperround.png" alt="Snipe"></td>
                        <td>Sniper Round</td>
                        <td>A careful shot, dealing 25(50 vs. Psionic) damage. Ignores armor. Can only target biological units.</td>
                        <td>0s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit has 19 vitality or more</li>
                                <li>Enemy unit is Biological and Visible</li>
                                <li>Enemy unit is not Heroic
                                <br>&#8618;Trigger Sniper Round</li>
                            </ol>
                            <br>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/empround.png" alt="EMP Round"></td>
                        <td>EMP Round</td>
                        <td>Deals 100 damage to shields and depletes the energy of enemy units in the target area. Cloaked units are revealed for 10 seconds after being hit.</td>
                        <td>0s</td>
                        <td>75</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit has either: (70 shields or more) or (70 energy or more)</li>
                                <li>There are 4 or more units in the range of the EMP
                                <br>&#8618;Trigger EMP Round</li>
                            </ol>
                            <br>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/raven.jpg" alt="Raven">
            <p>Raven</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/seekermissile.png" alt="Seeker Missile"></td>
                        <td>Seeker Missile</td>
                        <td>Deploys a Seeker Missile which activates after 5 seconds and pursues the target unit, dealing 100 (+35 vs. shields) splash damage upon contact.</td>
                        <td>0s</td>
                        <td>75</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit has 50 vitality or more
                                <br>&#8618;Trigger Seeker Missile</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/pointdefensedrone.png" alt="Point Defense Drone"></td>
                        <td>Point Defense Drone</td>
                        <td>Uses a laser to shoot down enemy missiles. Cannot target special attacks. Times out after 180 seconds. Each shot consumes 10 energy.</td>
                        <td>0s</td>
                        <td>100</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Calculates a score based on the number of enemy units nearby as follows:
                                    <ul>
                                        <li>Battlecruiser: +3/unit</li>
                                        <li>Corruptor: +2/unit</li>
                                        <li>Hydralisk: +1/unit</li>
                                        <li>Mutalisk: +2/unit</li>
                                        <li>Phoenix: +2/unit</li>
                                        <li>Stalker: +1/unit</li>
                                        <li>Viking (Fighter Mode): +2/unit</li>
                                    </ul></li>

                                <li>Total score is 6 or more
                                <br>&#8618;Trigger Point Defense Drone</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/buildautoturret.png" alt="Build Auto-Turret"></td>
                        <td>Build Auto-Turret</td>
                        <td>Automated defensive turret. Times out after 180 seconds. Can attack ground and air units.</td>
                        <td>0s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>2 or more enemy units within range of where the turret would be dropped</li>
                                <li>If the Raven is at 65% vitality or more, vitality score of 1.5, otherwise Vitality Score of 0.5, both with damage value 40.
                                <br>&#8618;Trigger Build Auto-Turret</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/sciencevessel.jpg" alt="Science Vessel">
            <p>Science Vessel</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/defensivematrix.png" alt="Defensive Matrix"></td>
                        <td>Defensive Matrix</td>
                        <td>Surrounds the target with a shield that can absorb up to 200 damage. Effect lasts for 20 seconds.</td>
                        <td>20s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Unit does not have Defensive Matrix already
                                <li>Unit has lost more than 105 vitality
                                <br>&#8618;Trigger Defensive Matrix</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/irradiate.png" alt="Irradiate"></td>
                        <td>Irradiate</td>
                        <td>Damages an enemy biological unit and adjacent enemy biological units, dealing 250 damage over 25 seconds.</td>
                        <td>0s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit is Biological</li>
                                <li>Enemy unit is not Heroic
                                <br>&#8618;Trigger Irradiate</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="zerg"></a><h2>Zerg Units</h2>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/broodqueen.jpg" alt="Brood Queen">
            <p>Brood Queen</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/ensnare.png" alt="Ensnare"></td>
                        <td>Ensnare</td>
                        <td>Reduces movement of units in the targeted area by 50% for 6 seconds. Reveals cloaked and burrowed units.</td>
                        <td>0s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>The enemy units do not have Ensnare on them</li>
                                <li>There are 2 or more enemy units or structures</li>
                                <li>Vitality Score of 1.5 with damage value 20
                                <br>&#8618;Trigger Ensnare</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/spawnbroodlings.png" alt="Spawn Broodlings"></td>
                        <td>Spawn Broodlings</td>
                        <td>Kills target enemy ground or air unit and spawns 2 Broodlings from its corpse. Massive units and heroic units are immune.</td>
                        <td>0s</td>
                        <td>100</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>The enemy units is a Siege Tank
                                <br>&#8618;Trigger Spawn Broodlings</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/corruptor.jpg" alt="Corruptor">
            <p>Corruptor</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/corruption.png" alt="Corruption"></td>
                        <td>Corruption</td>
                        <td>Covers the target enemy unit in Zerg slime, increasing the damage taken by 20% for 30 seconds.</td>
                        <td>45s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ul>
                                <li>If Corruptor is at 30% vitality or more:
                                    <ol>
                                        <li>Enemy unit does not have Corruption on it</li>
                                        <li>Enemy unit has 120 vitality or more
                                        <br>&#8618;Trigger Corruption<br><br></li>
                                    </ol>
                                </li>
                                <li>If Corruptor is at less than 30% vitality:
                                    <ol>
                                        <li>Enemy unit does not have Corruption on it</li>
                                        <li>Enemy unit has 40 vitality or more
                                        <br>&#8618;Trigger Corruption<br><br></li>
                                    </ol>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/causticspray.png" alt="Caustic Spray"></td>
                        <td>Caustic Spray</td>
                        <td>Emits a stream of acid that deals 5 damage per second for 6 seconds, then increases to 25 damage per second. Channeled ability. Can only target enemy structures.</td>
                        <td>45s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are no enemy air units in range</li>
                                <li>1 or more enemy structures in range
                                <br>&#8618;Trigger Caustic Spray<br><br></li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/infestor.jpg" alt="Infestor">
            <p>Infestor</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/fungalgrowth.png" alt="Fungal Growth"></td>
                        <td>Fungal Growth</td>
                        <td>Immobilizes enemy units and deals 38 damage over 4 seconds. Reveals cloaked and burrowed units.</td>
                        <td>0s</td>
                        <td>75</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>The enemy unit does not have Fungal Growth on it</li>
                                <li>There are 5 or more enemy units</li>
                                <li>Vitality Score of 3.5 with damage value 30
                                <br>&#8618;Trigger Fungal Growth</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/infestedterran.png" alt="Infested Terran"></td>
                        <td>Infested Terran</td>
                        <td>Spawn an Infested Terran. Infested Terrans last 30 seconds.</td>
                        <td>0s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ul>
                                <li>If Infestor is at 60% vitality or more:
                                    <ol>
                                        <li>There are 4 or more enemy units within range</li>
                                        <li>Infestor has 125 energy or more
                                        <br>&#8618;Trigger Infested Terran<br><br></li>
                                    </ol>
                                </li>
                                <li>If Infestor is at less than 60% vitality:
                                    <ol>
                                        <li>There are 1 or more enemy units within range
                                        <br>&#8618;Trigger Infested Terran<br><br></li>
                                    </ol>
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/viper.jpg" alt="Viper">
            <p>Viper</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/parasiticbomb.png" alt="Parasitic Bomb"></td>
                        <td>Parasitic Bomb</td>
                        <td>Creates a parasitic cloud of radius 3 that deals 90 damage over 10 seconds to the target and enemy air units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires. Cannot target ground units or structures.</td>
                        <td>0s</td>
                        <td>125</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy air unit doesn't have Parasitic Bomb casted on it</li>
                                <li>1 Enemy unit or more</li>
                                <li>A Vitality Score of 0.5 with damage value 50
                                <br>&#8618;Trigger Parasitic Bomb</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/disablingcloud.png" alt="Disabling Cloud"></td>
                        <td>Disabling Cloud</td>
                        <td>Creates a cloud that slows movement speed and prevents enemy units and structures from attacking and using energy-based abilities. Lasts for 10 seconds.</td>
                        <td>0s</td>
                        <td>75</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 5 or more enemy units within range</li>
                                <li>Enemies have a vitality of 50 or more</li>
                                <li>Vitality Score of 4.5, with damage value 10
                                <br>&#8618;Trigger Disabling Cloud</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/abduct.png" alt="Abduct"></td>
                        <td>Abduct</td>
                        <td>Pulls target unit to the Viper. Enemy is stunned for 1 second.</td>
                        <td>0s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>The enemy unit is more than 8 range away from the Viper</li>
                                <li>Enemy unit is either: (Massive) or (a Siege Tank)
                                <br>&#8618;Trigger Abduct</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/consumption.png" alt="Consumption"></td>
                        <td>Consumption</td>
                        <td>Drains up to 75 life from a friendly Zerg unit and gives the Viper 2 energy for each point of life drained.</td>
                        <td>10s</td>
                        <td>0</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There is an allied unit nearby</li>
                                <li>The allied unit has more than 75 life
                                <br>&#8618;Trigger Consumption</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="mission"></a><h2>Mission Objective Units</h2>
    <p>For a lot of mission objective units, the presence of a single enemy unit is enough for it to start spamming its skills, picking random units to target. If an objective unit is not present in this list, it may be assumed that this logic applies.</p>
    <p>Additionally, only real abilities will be listed here. Simulated abilities (such as Part and Parcel's Hybrid Abilities) will not be shown.</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/choker.jpg" alt="Choker">
            <p>Choker</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/tentacleattack.png" alt="Tentacle Attack"></td>
                        <td>Tentacle Attack</td>
                        <td>Shoots up to 5 tentacles that pull targets toward the Choker and deal damage over time.</td>
                        <td>6s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 Enemy unit or more</li>
                                <li>A Vitality Score of 2.0 with damage value 64
                                <br>&#8618;Trigger Tentacle Attack</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/slaynelemental.jpg" alt="Slayn Elemental">
            <p>Slayn<br>Elemental</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <td>Cooldown</td>
                        <td>Energy Cost</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/ailogic/essenceleech.png" alt="Essence Leech AOE"></td>
                        <td>Essence Leech AOE</td>
                        <td>-</td>
                        <td>0s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 8 or more non-heroic enemy units within 10 range or structures within 15 range</li>
                                <li>A Vitality Score of 3.5 with damage value 10
                                <br>&#8618;Trigger Essence Leech AOE</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/essenceleech.png" alt="Essence Leech"></td>
                        <td>Essence Leech</td>
                        <td>Siphons energy from targeted unit.</td>
                        <td>0s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Slayn Elemental is in combat</li>
                                <li>
                                    <ul>
                                        <li>If the last attacking unit is within 20 range of the elemental:
                                            <br><del>&#8618;Trigger Essence Leech</del>
                                            <br>&#8618;Trigger Essence Leech AOE
                                        </li>
                                        <li>If the last attacking unit is over 20 range of the elemental:
                                            <br><del>&#8618;Trigger Essence Leech on random nearest enemy unit within 10 range</del>
                                            <br>&#8618;Trigger Essence Leech AOE  on random nearest enemy unit within 10 range
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/stank.jpg" alt="Stank">
            <p>Stank</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/headbutt.png" alt="Headbutt"></td>
                        <td>Headbutt</td>
                        <td>Deals massive damage to structures.</td>
                        <td>5s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Stank is 40% vitality or less</li>
                                <li>There is either (4 or more enemy units within range) or (1 or more enemy sturctures within range):
                                <br>&#8618;Trigger Headbutt</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/voidshard.jpg" alt="Void Shard">
            <p>Void<br>Shard</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/voidzone.png" alt="Void Zone"></td>
                        <td>Void Zone</td>
                        <td>-</td>
                        <td>30s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 1 or more enemy units nearby</li>
                                <li>Highest Vitality Score from 1-4 with damage value 35
                                <br>&#8618;Trigger Void Zone</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/voidthrasher.jpg" alt="Void Thrasher">
            <p>Void<br>Thrasher</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/lightningaoe.png" alt="Lightning AoE"></td>
                        <td>Lightning AoE</td>
                        <td>Launches a lightning based ability that does area-of-effect damage at target location.</td>
                        <td>10s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 1 or more enemy units or structures nearby</li>
                                <li>The enemy unit is not an Observer or Overseer</li>
                                <li>Highest Vitality Score from 1-4 with damage value 30
                                <br>&#8618;SUGGEST Trigger Lightning AoE</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="hybrid"></a><h2>Hybrid Units</h2>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/hybriddestroyer.jpg" alt="Hybrid Destroyer">
            <p>Hybrid<br>Destroyer</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/gravitonprison.png" alt="Graviton Prison"></td>
                        <td>Graviton Prison</td>
                        <td>Makes the target unit float in the air, disabling its abilities.</td>
                        <td>0s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit in range
                                <br>&#8618;Trigger Graviton Prison</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/hybridreaver.jpg" alt="Hybrid Reaver">
            <p>Hybrid<br>Reaver</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/consumedna.png" alt="Consume DNA"></td>
                        <td>Consume DNA</td>
                        <td>Absorbs the target unit's life essence.</td>
                        <td>10s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li><del>Enemy unit has 75 vitality or more</del>
                                <br>&#8618;Trigger Consume DNA.</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/hybridbehemoth.jpg" alt="Hybrid Behemoth">
            <p>Hybrid<br>Behemoth</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/constrictingslime.png" alt="Constricting Slime"></td>
                        <td>Constricting Slime</td>
                        <td>Sprays slime on nearby enemies, slowing them for 5 seconds.</td>
                        <td>15s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 6 or more enemy units within 6 range
                                <br>&#8618;Trigger Constricting Slime.</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/consumedna.png" alt="Consume DNA"></td>
                        <td>Consume DNA</td>
                        <td>Absorbs the target unit's life essence.</td>
                        <td>10s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li><del>Enemy unit has 75 vitality or more</del>
                                <br>&#8618;Trigger Consume DNA.</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/hybriddominator.jpg" alt="Hybrid Dominator">
            <p>Hybrid<br>Dominator</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/plasmablast.png" alt="Plasma Blast"></td>
                        <td>Plasma Blast</td>
                        <td>Shoots a ball of bio-plasma toward a target, causing 260 damage.</td>
                        <td>10s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit or structure has 130 vitality or more
                                <br>&#8618;Trigger Plasma Blast</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/psionicstorm.png" alt="Psionic Storm"></td>
                        <td>Psionic Storm</td>
                        <td>Creates a storm of psionic energy that lasts 4 seconds, causing up to 80 damage to all enemy units in the target area. Does not damage friendly units.</td>
                        <td>8s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 1 or more enemy units in the area
                                <li>Vitality Score of 3.0 with damage value 40
                                <br>&#8618;Trigger Psionic Storm</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <a id="mutator"></a><h2>Mutator Units</h2>
    <p>Note: Amon Karax is not listed as he uses his abilities as soon as they come off cooldown.</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/artanis.jpg" alt="Artanis">
            <p>Artanis</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/astralwind.png" alt="Astral Wind"></td>
                        <td>Astral Wind</td>
                        <td>Heals Artanis and all nearby friendly units for 300 life and 200 shields.</td>
                        <td>15s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Artanis has lost more than 150 shields
                                <br>&#8618;Trigger Astral Wind</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/lightningdash.png" alt="Lightning Dash"></td>
                        <td>Lightning Dash</td>
                        <td>Artanis charges forward, unleashing a blast of energy that deals 100 damage to nearby enemies and stuns them for 2 seconds.</td>
                        <td>5s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 3 or more enemy units in the area
                                <li>Vitality Score of 2.0 with damage value 100
                                <br>&#8618;Trigger Lightning Dash</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/dehaka.jpg" alt="Dehaka">
            <p>Dehaka</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/mend.png" alt="Mend"></td>
                        <td>Mend</td>
                        <td>Heals Dehaka for 150, and heals nearby friendly units for 50. An additional 50% of the amount healed regenerates over 15 seconds.</td>
                        <td>10s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Dehaka has lost more than 150 HP
                                <br>&#8618;Trigger Mend</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/generatespawns.png" alt="Generate Spawns"></td>
                        <td>Generate Spawns</td>
                        <td>Generates two Spawns of Dehaka that deal 100% normal damage but have 50% life. Spawns last 30 seconds.</td>
                        <td>45s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units or structures nearby
                                <br>&#8618;Trigger Generate Spawns</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/drag.png" alt="Drag"></td>
                        <td>Drag</td>
                        <td>Pulls the target to Dehaka's location and temporarily stuns it (5 seconds).</td>
                        <td>10s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>Enemy unit is visible
                                <br>&#8618;Trigger Drag</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/kerrigan.jpg" alt="Kerrigan">
            <p>Kerrigan</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/apocalypse.png" alt="Apocalypse"></td>
                        <td>Apocalypse</td>
                        <td>Deals 300 damage to enemy units and 700 damage to enemy structures in a large area.</td>
                        <td>60s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 4 or more enemy units or structures in the area
                                <li>Vitality Score of 1.0 with damage value 300
                                <br>&#8618;Trigger Apocalypse</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/leapingstrike.png" alt="Leaping Strike"></td>
                        <td>Leaping Strike</td>
                        <td>Kerrigan leaps to her target and deals 150 damage. Can be used without a target to travel quickly.</td>
                        <td>0s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units nearby
                                <li>Enemy unit has 150 vitality or more</li>
                                <li>Enemy is within 6 range of Kerrigan
                                <br>&#8618;Trigger Leaping Strike</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/psionicshift.png" alt="Psionic Shift"></td>
                        <td>Psionic Shift</td>
                        <td>Kerrigan dashes through enemies, dealing 50 damage to all enemies in her path.</td>
                        <td>0s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 3 or more enemy units in the area
                                <li>Vitality Score of 2.0 with damage value 50
                                <br>&#8618;Trigger Psionic Shift</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/nova.jpg" alt="Nova">
            <p>Nova</p>
            <p>100 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/nuke.png" alt="Nuke"></td>
                        <td>Nuke</td>
                        <td>Calls down a Nuclear Strike at a target location. Nukes take 5 seconds to land, but they deal up to 600 damage to enemies in a large radius.</td>
                        <td>60s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 4 or more enemy units or structures in the area
                                <li>Vitality Score of 2.0 with damage value 600
                                <br>&#8618;Trigger Nuke</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/snipe.png" alt="Snipe"></td>
                        <td>Snipe</td>
                        <td>Deals 200 damage to target enemy ground or air unit from long range. Can target biological and mechanical units.</td>
                        <td>0s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units nearby
                                <li>Enemy unit has 75 vitality or more</li>
                                <li>Enemy is within 10 range of Nova
                                <br>&#8618;Trigger Snipe</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/raynor.jpg" alt="Raynor">
            <p>Raynor</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/penetratorround.png" alt="Penetrator Round"></td>
                        <td>Penetrator Round</td>
                        <td>After carefully aiming, Raynor fires a Penetrator Round that strikes enemies along its path, dealing 300 damage.</td>
                        <td>20s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 1 or more enemy units in the area
                                <li>Vitality Score of 1.0 with damage value 80
                                <br>&#8618;Trigger Penetrator Round</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/tychus.jpg" alt="Tychus">
            <p>Tychus</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/tossshreddergrenade.png" alt="Toss Shredder Grenade"></td>
                        <td>Toss Shredder Grenade</td>
                        <td>Tosses a grenade that explodes for 200 damage in a small radius (2 range). Does not harm friendly units.</td>
                        <td>20s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 3 or more enemy units in the area
                                <li>Vitality Score of 1.0 with damage value 80
                                <br>&#8618;Trigger Toss Shredder Grenade</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/zagara.jpg" alt="Zagara">
            <p>Zagara</p>
            <p>200 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/banelingbarrage.png" alt="Baneling Barrage"></td>
                        <td>Baneling Barrage</td>
                        <td>Launches 4 Banelings towards the target point. Each Baneling explodes for 40 damage (80 vs structures).</td>
                        <td>10s</td>
                        <td>50</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ul>
                                <li>If there are enemy units nearby:
                                    <ol>
                                        <li>1 or more enemy units nearby</li>
                                        <li>The enemy unit is within 10 range of Zagara
                                        <br>&#8618;Trigger Baneling Barrage</li>
                                    </ol>
                                </li>
                                <li>If there are no enemy units nearby:
                                    <ol>
                                        <li>1 or more enemy structures nearby</li>
                                        <li>The enemy unit is within 10 range of Zagara
                                        <br>&#8618;Trigger Baneling Barrage</li>
                                    </ol>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/spawnhunterkillers.png" alt="Spawn Hunter Killers"></td>
                        <td>Spawn Hunter Killers</td>
                        <td>Spawns 4 Hunter Killers at the target point that last 20 seconds.</td>
                        <td>30s</td>
                        <td>60</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units or structures nearby
                                <br>&#8618;Trigger Spawn Hunter Killers</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/infesteddrop.png" alt="Infested Drop"></td>
                        <td>Infested Drop</td>
                        <td>Calls down 10 drop-pods onto the target area, dealing 50 damage with each drop-pod and spawning a total of 10 Roaches that last 30 seconds.</td>
                        <td>60s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>There are 2 or more enemy units or structures in the area
                                <li>Vitality Score of 3.0 with damage value 500
                                <br>&#8618;Trigger Infested Drop</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/massfrenzy.png" alt="Mass Frenzy"></td>
                        <td>Mass Frenzy</td>
                        <td>Grants all friendly units on the map 25% attack speed and 25% movement speed for 15 seconds.</td>
                        <td>120s</td>
                        <td>25</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units or structures nearby</li>
                                <li>There are 5 or more ally units within 15 range of Zagara
                                <li>Vitality Score of 3.0 with damage value 500
                                <br>&#8618;Trigger Frenzy</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/ailogic/zeratul.jpg" alt="Zeratul">
            <p>Zeratul</p>
            <p>0 Energy</p>
        </div>
        <div class="descContainer">
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
                        <td><img src="/images/ailogic/voidarmor.png" alt="Void Armor"></td>
                        <td>Void Armor</td>
                        <td>Grants nearby friendly units +100 shields for 10 seconds.</td>
                        <td>20s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units nearby
                                <br>&#8618;SUGGEST Trigger Void Armor</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/blink.png" alt="Blink"></td>
                        <td>Blink</td>
                        <td>Teleports Zeratul to a nearby location.</td>
                        <td>3s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units nearby
                                <li>Enemy unit is within 8 range of Zeratul
                                <br>&#8618;SUGGEST Trigger Blink towards enemy unit</li>
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/ailogic/shadowblade.png" alt="Shadow Blade"></td>
                        <td>Shadow Blade</td>
                        <td>Slashes an enemy unit for 500 damage. Can only target ground units.</td>
                        <td>6s</td>
                        <td>-</td>
                    </tr>
                    <tr><td class="subtitle" colspan=5>Usage Logic</td></tr>
                    <tr>
                        <td colspan=5>
                            <ol>
                                <li>1 or more enemy units nearby
                                <li>Enemy unit is within 1 range of Zeratul
                                <br>&#8618;SUGGEST Trigger Shadow Blade</li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
