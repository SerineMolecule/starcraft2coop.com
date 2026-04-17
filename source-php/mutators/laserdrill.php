<?php

require_once "../../html/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Laser Drill</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/laserdrill">
<?= startContent() ?>
    <h1>Mutator: Laser Drill</h1>
    <p><img src="/images/mutators/laserdrill.png" alt="" /></p>
    <p>An enemy Drakken laser drill constantly attacks player units within enemy vision.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">2</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The drill does damage in three separate phases, depending on the time it is left attacking a certain unit, as shown below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Attack Time</th>
                <th>Damage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0-15 seconds</td>
                <td>2/0.1 seconds</td>
            </tr>
            <tr>
                <td>15-30 seconds</td>
                <td>4/0.1 seconds</td>
            </tr>
            <tr>
                <td>30+ seconds</td>
                <td>6/0.1 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>The drill can be destroyed if players are able to reach it. It has 1000HP, 2000 Shields and 2 armor. However, it will go into repair mode and will take 120 seconds before it starts attacking again.</p>
    <p>Note that when facing up against Zerg compositions, Creep Tumors provide vision for the Laser Drill.</p>
    <p>The spawn points of the Laser Drill are shown below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Mission</th>
                <th>Spawn Point</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Chain of Ascension</td>
                <td><img src="/images/mutatordata/laserdrillspawnchainofascension.jpg" alt="Chain of Ascension Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Cradle of Death</td>
                <td><img src="/images/mutatordata/laserdrillspawncradleofdeath.jpg" alt="Cradle of Death Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Dead of Night</td>
                <td><img src="/images/mutatordata/laserdrillspawndeadofnight.jpg" alt="Dead of Night Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Lock & Load</td>
                <td><img src="/images/mutatordata/laserdrillspawnlockandload.jpg" alt="Lock & Load Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Malwarfare</td>
                <td><img src="/images/mutatordata/laserdrillspawnmalwarfare.jpg" alt="Malwarfare Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Miner Evacuation</td>
                <td><img src="/images/mutatordata/laserdrillspawnminerevacuation.jpg" alt="Miner Evacuation Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Mist Opportunities</td>
                <td><img src="/images/mutatordata/laserdrillspawnmistopportunities.jpg" alt="Mist Opportunities Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Oblivion Express</td>
                <td><img src="/images/mutatordata/laserdrillspawnoblivionexpress.jpg" alt="Dead of Night Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Part and Parcel</td>
                <td><img src="/images/mutatordata/laserdrillspawnpartandparcel.jpg" alt="Part & Parcel Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Rifts to Korhal</td>
                <td><img src="/images/mutatordata/laserdrillspawnriftstokorhal.jpg" alt="Rifts to Korhal Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Scythe of Amon</td>
                <td><img src="/images/mutatordata/laserdrillspawnscytheofamon.jpg" alt="Scythe of Amon Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Temple of the Past</td>
                <td><img src="/images/mutatordata/laserdrillspawntempleofthepast.jpg" alt="Temple of the Past Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>The Vermillion Problem</td>
                <td><img src="/images/mutatordata/laserdrillspawnthevermillionproblem.jpg" alt="The Vermillion Problem Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Void Launch</td>
                <td><img src="/images/mutatordata/laserdrillspawnvoidlaunch.jpg" alt="Scythe of Amon Laser Drill Spawn Location"></td>
            </tr>
            <tr>
                <td>Void Thrashing</td>
                <td><img src="/images/mutatordata/laserdrillspawnvoidthrashing.jpg" alt="Void Thrashing Laser Drill Spawn Location"></td>
            </tr>
        </tbody>
    </table>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Dehaka: If the Laser Drill locks onto Dakrun, it will kill itself from his damage reflect.</li>
    </ul>

    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>The Laser Drill will be marked on the minimap when it attacks you.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blizzard.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blizzard">Blizzard</a></td><td>Blizzards do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Laser Drill applies the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>The Laser Drill will be marked on the minimap when it attacks you.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Laser Drill can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Gifts do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/goingnuclear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/goingnuclear">Going Nuclear</a></td><td>The Laser Drill has vision of the area for a short time after the nuke hits.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots provide vision for the Laser Drill.
Kill Bots do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lavaburst.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lavaburst">Lava Burst</a></td><td>Lava Bursts do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Laser Drill has Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mineralshields.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mineralshields">Mineral Shields</a></td><td>Mineral Shields provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mines provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations provide vision for the Laser Drill.
Infested and Aberrations do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/photonoverload.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/photonoverload">Photon Overload</a></td><td>The Laser Drill does not get Photon Overcharge when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Polarity of the Laser Drill remains fixed, even when the drill respawns after being destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators provide vision for the Laser Drill. Propagators do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/purifierbeam.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/purifierbeam">Purifier Beam</a></td><td>Purifier Beams do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/temporalfield.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/temporalfield">Temporal Field</a></td><td>The area inside a Temporal Field provides vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/timewarp.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/timewarp">Time Warp</a></td><td>Time Warps do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Transmuted units provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>The Candy Bowl provides vision for the Laser Drill. Units spawned from Civilians provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Normal Turkeys do not provide vision for the Laser Drill. Angry Turkeys provide vision for the Laser Drill. The Turking provides vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/twister.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/twister">Twister</a></td><td>Twisters do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators provide vision for the Laser Drill. Void Reanimators do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots provide vision for the Laser Drill.
Boom Bots do not spawn from the Laser Drill.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
