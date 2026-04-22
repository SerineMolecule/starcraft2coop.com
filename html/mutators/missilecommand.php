<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Missile Command</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/missilecommand">
<?= startContent() ?>
    <h1>Mutator: Missile Command</h1>
    <p><img src="/images/mutators/missilecommand.png" alt="" /></p>
    <p>Endless missile bombardments target your structures and must be shot down throughout the mission.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Missiles get launched from the sides of the map. The spawning of the missiles cannot be stopped, but the missiles can be destroyed. There are different types of missiles that will appear. These are shown in the table below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Missile</th>
                <th>HP</th>
                <th>Damage</th>
                <th>Description</th>
                <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Standard</td>
                <td>10</td>
                <td>100</td>
                <td>This is the standard missile and most commonly-spawned missile.</td>
                <td><img src="/images/mutatordata/missilecommandstandard.jpg" alt="Standard Missile"></td>
            </tr>
            <tr>
                <td>Point Defense Missile</td>
                <td>15</td>
                <td>-</td>
                <td>This travels alongside a missile and will stop when it reaches the target building. It starts with 200 energy and shoots down any projectiles. Each projectile shot drains 10 energy.</td>
                <td><img src="/images/mutatordata/missilecommandpdm.jpg" alt="Point Defense Missile"></td>
            </tr>
            <tr>
                <td>Splitter Missile</td>
                <td>20</td>
                <td>175</td>
                <td>When destroyed, this will split into two smaller missiles.</td>
                <td><img src="/images/mutatordata/missilecommandsplitter.jpg" alt="Splitter Missile"></td>
            </tr>
            <tr>
                <td>Splitter Missile Child</td>
                <td>5</td>
                <td>75</td>
                <td>Spawned from a Splitter Missile.</td>
                <td><img src="/images/mutatordata/missilecommandsplitterchild.jpg" alt="Splitter Missile Child"></td>
            </tr>
            <tr>
                <td>Nuke</td>
                <td>100</td>
                <td>300 (500 vs Structures)</td>
                <td>Accompanied by 5 PDM's. Nukes can only be deployed once every 60 seconds.<br>Damage dealt depends on distance from center of hit:<br>100% within 4 range<br>50% within 6 range<br>25% within 8 range</td>
                <td><img src="/images/mutatordata/missilecommandnuke.jpg" alt="Nuke Missile"></td>
            </tr>
        </tbody>
    </table>
    <p>Depending on the mission time, the spawn rate for the missiles is different as shown in the table below, as well as the percentages for each of the missiles. Note that 2 missiles are fired every spawn cycle, one for each player.</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Spawn Rate</th>
                <th>Standard %</th>
                <th>Standard + PDM %</th>
                <th>Splitter %</th>
                <th>Nuke + 5 PDM's %</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0:00-5:00</td>
                <td>15 seconds</td>
                <td>100%</td>
                <td>0%</td>
                <td>0%</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>5:00-10:00</td>
                <td>5 seconds</td>
                <td>90%</td>
                <td>10%</td>
                <td>0%</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>10:00-15:00</td>
                <td>2 seconds</td>
                <td>60%</td>
                <td>20%</td>
                <td>20%</td>
                <td>0%</td>
            </tr>
            <tr>
                <td>15:00+</td>
                <td>1 second</td>
                <td>40%</td>
                <td>20%</td>
                <td>30%</td>
                <td>10%</td>
            </tr>
        </tbody>
    </table>
    <p>Point Defense Missiles shoot down all Projectile attacks until they run out of energy, but they be shot down/bypassed by Hitscan attacks. The video below explains the difference between the two attack types:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/OKg_hJ-ldD8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>Another option would be to simply overwhelm the Point Defense Missiles. Point Defense Missiles will lose energy quickly and cannot shoot down all projectiles if many are being fired at them at the same time.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Artanis: High Templars/High Archons can feedback the Point Defense Missiles.</li>
        <li>Kerrigan: Desolate Queen Kerrigan's Kinetic Blast is blocked by Point Defense Missiles and Point Defense Drones.</li>
        <li>Stetmann: Super Gary's auto-attack cannot be shot down by Point Defense Missiles and Point Defense Drones.</li>
        <li>Vorazun: Time Stop does not affect Missile Command timings.</li>
        <li>Zeratul: Tesseract Monoliths can stun Point Defense Missiles, allowing projectile attacks to connect with their targets.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Missiles do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Missiles do not spawn Broodlings when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Missiles do not give out Avenger stacks when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Missiles get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Missiles cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Missiles apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Missiles do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Missiles do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Missiles do not trigger Fatal Attraction when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Missiles do not launch Fireworks when they are destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Missiles can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Missiles cause Hardened Will to activate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Missiles respawn when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Missiles do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Missile kills do not increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Missiles have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Point Defense Missiles can cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Missiles set the ground on fire when they are destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Missiles create an explosion when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Missiles do not move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators cannot resurrect Missiles.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Missiles do not spawn Infested when they land on their target. Missiles spawn Infested when destroyed by players.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Missiles are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
