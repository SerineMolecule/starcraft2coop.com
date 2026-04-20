<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Power Overwhelming</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/poweroverwhelming">
<?= startContent() ?>
    <h1>Mutator: Power Overwhelming</h1>
    <p><img src="/images/mutators/poweroverwhelming.png" alt="" /></p>
    <p>All enemy units have energy and use random abilities.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">5</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>At the start of the game, all units start with 50 energy and have an energy regeneration rate of 0.5625. They have a maximum energy of 200. The skills and the energy bar are lost when the unit ownership changes (Mind Control, Domination, etc.).</p>
    <p>While these units have an energy bar and use it for casts, they draw from a total energy pool for each player. Once this pool is depleted, no skills will be cast, even if the unit has energy. Additionally, if the unit does not have energy, it will not cast a skill, even if the pool has enough energy.</p>
    <p>Note that this energy bar is an energy bar specifically used as an indicator for Power Overwhelming. It is unaffected by EMP and Feedback.</p>
    <p>Skills can be cast without detection, so Cloaked units can still be targeted.</p>
    <p>Depending on the mission time, skills will only be cast once the minimum energy level has been reached. Skills cast are random, but it means there is a chance of higher energy skills being cast as the game progresses. Additionally, there is a regeneration rate, and a maximum energy in the pool. This is shown in the table below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Minimum Energy</th>
                <th>Maximum Energy</th>
                <th>Regeneration Rate (per second)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0:00-5:00</td>
                <td>80</td>
                <td>90</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5:00-8:00</td>
                <td>80</td>
                <td>110</td>
                <td>4</td>
            </tr>
            <tr>
                <td>8:00-10:00</td>
                <td>80</td>
                <td>140</td>
                <td>6</td>
            </tr>
            <tr>
                <td>10:00+</td>
                <td>150</td>
                <td>290</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
    <p>The list of abilities and other information is listed below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Ability</th>
                <th>Energy Cost</th>
                <th>Range</th>
                <th>Other Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Abduct</td>
                <td>20</td>
                <td>9</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Black Hole</td>
                <td>150</td>
                <td>9</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Defensive Matrix</td>
                <td>20</td>
                <td>6</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Disruption Web</td>
                <td>40</td>
                <td>9</td>
                <td>Only used against structures with attack.<br>10% chance of being used.</td>
            </tr>
            <tr>
                <td>Fungal Growth</td>
                <td>45</td>
                <td>10</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Graviton Beam</td>
                <td>20</td>
                <td>4</td>
                <td>Cannot be cast on Heroic or Massive units.</td>
            </tr>
            <tr>
                <td>Guardian Shield</td>
                <td>20</td>
                <td>10</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Irradiate</td>
                <td>45</td>
                <td>9</td>
                <td>Only gets used against biological units.</td>
            </tr>
            <tr>
                <td>Phase Shift</td>
                <td>40</td>
                <td>10</td>
                <td>Only used against structures</td>
            </tr>
            <tr>
                <td>Point Defense Drone</td>
                <td>20</td>
                <td>9</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Psi Orb</td>
                <td>40</td>
                <td>10</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Psionic Storm</td>
                <td>40</td>
                <td>9</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Seeker Missile</td>
                <td>20</td>
                <td>10</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Time Warp</td>
                <td>30</td>
                <td>9</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
    <p></p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Artanis: Feedback cannot be cast on units that do not have energy without Power Overwhelming.</li>
        <li>Dehaka: Even though units have Psionic abilities, they do not gain the Psionic tag, so devouring them with Dehaka does not cause area of effect damage.</li>
        <li>Dehaka: Point Defense Drones from Power Overwhelming can block Murvar's Locusts and Creepers from spawning.</li>
        <li>Kerrigan Desolate Queen Kerrigan's Kinetic Blast is blocked by Point Defense Drones.</li>
        <li>Mengsk: Emperor's Shadow Feedback deals damage to units with Power Overwhelming. This is covered in the following Mythbusters video:</li>
        <iframe width="475" height="268" src="https://www.youtube.com/embed/EeNtBNtzGlU" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <li>Mengsk: Emperor's Shadow EMP's drain energy from the Power Overwhelming Energy bar.</li>
        <li>Nova: Ghost EMP's drain energy from the Power Overwhelming Energy bar.</li>
        <li>Stetmann: Mecha remnants can be shot down by Defensive Drones, preventing Gary or Stetellites from collecting them.</li>
        <li>Stetmann: Super Gary's auto-attack cannot be shot down by Defensive Drones.</li>
        <li>Vorazun: Due to Power Overwhelming being a map-wide effect, rather than a unit-based one, Time Stop does not prevent skills from being cast.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops move can cast skills.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Damaging skills will apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes can cast abilities other than the ones they already have.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots can cast abilities. Kill bots can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Ranges of spells does not increase with Long Range.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines cannot cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Widow mines can cast abilities. Spider mines cannot cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Point Defense Missiles can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations can cast abilities. Infested and Aberrations can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/photonoverload.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/photonoverload">Photon Overload</a></td><td>Point Defense Drones spawned from Power Overwhelming will gain Photon Overcharge when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators can cast abilities. Propagators can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians  can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys cannot cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can cast abilities. Void Reanimators can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots can cast abilities. Boom Bots can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
