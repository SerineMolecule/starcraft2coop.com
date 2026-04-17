<?php

require_once "../../html/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Boom Bots</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/boombots">
<?= startContent() ?>
    <h1>Mutator: Boom Bots</h1>
    <p><img src="/images/mutators/boombots.png" alt="" /></p>
    <p>Uncaring automatons carry a nuclear payload toward your base. One player must discern the disarming sequence and the other player must enter it.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">10</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The bots will spawn from any enemy building. If you clear all enemy buildings on the map, the bots will stop spawning. Note that all-clearing Malwarfare and Void Launch does not stop them from spawning, because Suppression Towers and Launch Bays are indestructible enemy structures.</p>
    <p>A Boom Bot is shown below:</p>
    <img src="/images/mutatordata/boombot.jpg" alt="Boom Bot">
    <p>When a Boom Bot spawns, one player will see its code above the unit. The other player will see "?-?-?-?". The player that sees the code must provide the other player with the code, so that they may input it into the Boom Bot. Once a bot is clicked, losing vision does not cause the player to lose the command card and they can still input the code.</p>
    <p>The Boom Bot starts off with 1.25 Movement Speed. Inputting an incorrect digit will prevent the player from any further input for 8 seconds. Additionally, it increases the Boom Bot speed by 1.0, up to a maximum of 4.75.</p>
    <p>The spawn timings of the Boom Bots are as follows:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Time</th>
                <th>Bots Spawned</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>7:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>8:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>10:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>11:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>13:00</td>
                <td>2</td>
            </tr>
            <tr>
                <td>14:10</td>
                <td>2</td>
            </tr>
            <tr>
                <td>15:20</td>
                <td>2</td>
            </tr>
            <tr>
                <td>16:30</td>
                <td>2</td>
            </tr>
            <tr>
                <td>17:40</td>
                <td>2</td>
            </tr>
            <tr>
                <td>18:50</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <p>After the 18:50 spawn, 2 Boom Bots will appear every 50 seconds.</p>
    <p>When a bot reaches a player unit or structure, it will detonate a nuke. The nuke deal a base damage of 750 (950 vs structures) within range 4, 50% of base damage  within range 6, and 25% of base damage within range 8 of the center of the nuke. Once a Nuke has been detonated, there is a 4 second cooldown before it can be used again.</p>
    <p>Bots will not actively attack Aurana's transport and Data Cores on Malwarfare, Terrazine Harvesters on Mist Opportunities, Artifact Trucks on Cradle of Death, and the Evacuation Ships on Miner Evacuation. However, their nukes will cause those units damage.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Disabling Cloud prevents Boom Bots from attacking.</li>
        <li>Abathur: Place a Toxic Nest and disable automatic detonation which can be used to get vision of Boom Bots.</li>
        <li>Kerrigan: Kerrigan's Nydus worms can tank two Boom Bot nukes before dying.</li>
        <li>Mengsk: Earthsplitters provide temporary vision in the bombardment area, which can be used to get vision of Boom Bots.</li>
        <li>Raynor: Use Scans to get vision of Boom Bots far in advance.</li>
        <li>Stetmann: Spread Stetellites around the map to provide you with vision of the Boom Bots.</li>
        <li>Vorazun: Corsair Disruption Webs stop Boom Bots from attacking.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Boom Bots do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Boom Bots spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Boom Bots do not give out Avenger stacks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Boom Bots cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Boom Bots apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Boom Bots do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Boom Bots spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Boom Bots trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Boom Bots do not apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Boom Bots launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Boom Bots do not capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Boom Bots do not get the Hardened Will buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Boom Bots do not provide the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Boom Bots do not respawn when they self-destruct.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Boom Bots provide vision for the Laser Drill.
Boom Bots do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Boom Bots do not trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Boom Bots can cast abilities. Boom Bots can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Boom Bots set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Boom Bots create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Boom Bots move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators do not resurrect Boom Bots.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Boom Bots do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Boom Bots spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Boom Bots are cloaked, but their tags are still visible.
Codes cannot be input without detection.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
