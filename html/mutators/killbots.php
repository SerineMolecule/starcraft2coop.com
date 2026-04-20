<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Kill Bots</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/killbots">
<?= startContent() ?>
    <h1>Mutator: Kill Bots</h1>
    <p><img src="/images/mutators/killbots.png" alt="" /></p>
    <p>Waves of bots attack players and are invulnerable to damage until they have killed a set amount of units.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">6</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The bots will spawn from any enemy building. If you clear all enemy buildings on the map, the bots will stop spawning. Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
    <p>There are three types of Kill Bots that will spawn, as follows:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Bot</th>
                <th>Kills Required</th>
                <th>Picture</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Murder Bot</td>
                <td>5</td>
                <td><img src="/images/mutatordata/killbotsmurderbot.jpg" alt="Murder Bot"></td>
            </tr>
            <tr>
                <td>Death Bot</td>
                <td>10</td>
                <td><img src="/images/mutatordata/killbotsdeathbot.jpg" alt="Death Bot"></td>
            </tr>
            <tr>
                <td>Kill Bot</td>
                <td>15</td>
                <td><img src="/images/mutatordata/killbotskillbot.jpg" alt="Kill Bot"></td>
            </tr>
        </tbody>
    </table>
    <p>The spawn timings of the Kill Bots are as follows:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Time</th>
                <th>Bot Type</th>
                <th>Bots Spawned</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3:35</td>
                <td>Murder Bot</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5:05</td>
                <td>Murder Bot</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6:35</td>
                <td>Murder Bot</td>
                <td>1</td>
            </tr>
            <tr>
                <td>8:05</td>
                <td>Murder Bot</td>
                <td>2</td>
            </tr>
            <tr>
                <td>9:35</td>
                <td>Murder Bot</td>
                <td>2</td>
            </tr>
            <tr>
                <td>10:45</td>
                <td>Death Bot</td>
                <td>2</td>
            </tr>
            <tr>
                <td>11:55</td>
                <td>Death Bot</td>
                <td>2</td>
            </tr>
            <tr>
                <td>13:05</td>
                <td>Death Bot</td>
                <td>2</td>
            </tr>
            <tr>
                <td>14:15</td>
                <td>Death Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>15:25</td>
                <td>Death Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>16:35</td>
                <td>Death Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>17:45</td>
                <td>Death Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>18:55</td>
                <td>Death Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>20:05</td>
                <td>Kill Bot</td>
                <td>2</td>
            </tr>
            <tr>
                <td>21:05</td>
                <td>Kill Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>22:05</td>
                <td>Kill Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>23:05</td>
                <td>Kill Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>24:05</td>
                <td>Kill Bot</td>
                <td>3</td>
            </tr>
            <tr>
                <td>25:05</td>
                <td>Kill Bot</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <p>After the 25:05 spawn, 4 Kill Bots will appear every 60 seconds.</p>
    <p>Bots will attack Aurana's transport and Data Cores on Malwarfare, Terrazine Harvesters on Mist Opportunities, Artifact Trucks on Cradle of Death, and the Evacuation Ships on Miner Evacuation.</p>
    <p>When playing commanders that have Evolution Chambers, use those to feed Kill Bots. When they are destroyed (1 kill), they spawn  6 Broodlings (6 kills).</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Kerrigan: If using Zerglings to feed Kill Bots, avoid getting the Hardened Carapace upgrade until Kill Bots start to spawn. This will allow the Death Bots to 1-shot the Zerglings.</li>
        <li>Mengsk: Kill Bots do not aggro Zerg units from Dogs of War.</li>
        <li>Raynor: Spider Mines do not add to Kill Bot kill counters.</li>
        <li>Stetmann: If using Zerglings to feed Kill Bots, never get the Hardened Egonergy Shield upgrade as this prolongs Zergling life, keeping Kill Bots alive longer on the map.</li>
        <li>Stukov: Volatile Infested do not add to the Kill Bot's kill counter.</li>
        <li>Vorazun: Corsair Disruption Webs stop Kill Bots from attacking.</li>
        <li>Vorazun: Units that get Emergency Recalled do not add to the Kill Bot's kill counter.</li>
        <li>Vorazun: Time Stop does not affect Kill Bots timings.</li>
        <li>Zagara: If using Zerglings to feed Kill Bots, avoid getting the Hardened Carapace upgrade until Kill Bots start to spawn. This will allow the Death Bots to 1-shot the Zerglings.</li>
        <li>Zeratul: Cannon Projection kills do not add to the Kill Bot's kill counter.</li>
        <li>Zeratul: Legion units do not get attacked by Kill Bots.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Kill Bots do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Kill Bots spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Kill Bots can give out Avenger stacks (1 stack) when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Kill Bots cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Kill Bots apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Kill Bots do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Kill Bots spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Kill Bots trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Kill Bots can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Kill Bots launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Kill Bots can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Kill Bots can get the Hardened Will buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Kill Bots can provide the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Kill Bots do not respawn when they self-destruct. They will respawn if killed by Abathur's Toxic Nests.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Kill Bots provide vision for the Laser Drill.
Kill Bots do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Kill Bots get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Kill Bots trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Kill Bots can cast abilities. Kill bots can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Kill Bots set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Kill Bots create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Kill Bots move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Kill Bots do not Transmute when dealing damage or killing units.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators do not resurrect Kill Bots.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Kill Bots do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Kill Bots spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Kill Bots are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
