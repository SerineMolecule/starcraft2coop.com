<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Outbreak</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/outbreak">
<?= startContent() ?>
    <h1>Mutator: Outbreak</h1>
    <p><img src="/images/mutators/outbreak.png" alt="" /></p>
    <p>Continuous waves of the infested horde march against the commanders' bases.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Infested will start spawning from enemy structures starting at 2:00. If you clear all enemy structures, the infested will stop spawning.</p>
    <p>Infested spawn in random quantities per wave, each wave occurring every 25 seconds. Before 13:20, between 2 to 4 infested will spawn per wave. After that, 4 to 6 infestd will spawn per wave.</p>
    <p>The type of infested that spawn is dependent on the mission time, as shown in the table below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Mission Time</th>
                <th>Infested</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0:00-6:20</td>
                <td>Infested Terran</td>
            </tr>
            <tr>
                <td>6:20-20:00</td>
                <td>Infested Marine</td>
            </tr>
            <tr>
                <td>20:00+</td>
                <td>Aberration</td>
            </tr>
        </tbody>
    </table>
    <p>Additionally, after 15:00, an Infested Medic will spawn with every spawn of the infested wave.</p>
    <p>Due to the unique mechanics of Dead of Night that target Infested units, Infested Marines and Aberrations will burn during the day if they have spawned from Infested Structures, even those spawned from this mutator. If they spawn from other Amon structures, they will not burn.</p>
    <p>On Miner Evacuation, all infested from Outbreak will have double HP.</p>
    <p>Outbreak can spawn infested from the part boxes on Part and Parcel and can have some unexpected mutator interactions. Only the following mutators interact with the infested that spawn from the part boxes (these infested will appear with a white-colored alliance):</p>
    <ul>
        <li>Concussive Attacks</li>
        <li>Diffusion</li>
        <li>Eminent Domain</li>
        <li>Fear</li>
        <li>Life Leech</li>
    </ul>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Units spawned from Outbreak do not drop Biomass.</li>
        <li>Dehaka: Units spawned from Outbreak do not drop Essence.</li>
        <li>Mengsk: Units spawned from Outbreak do not provide Royal Guard experience.</li>
        <li>Vorazun: Time Stop does not affect Outbreak timings.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Infested and Aberrations do not spawn Broodlings units when killed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Infested and Aberrations can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Infested and Aberrations get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Infested and Aberrations can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Infested and Aberrations apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Infested and Aberrations spawn out of structures converted by Eminent Domain.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Infested and Aberrations get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Infested and Aberrations trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Infested and Aberrations can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Infested and Aberrations launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Infested and Aberrations can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Infested and Aberrations cause Hardened Will to activate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Infested and Aberrations can get the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Infested and Aberrations respawn when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Infested and Aberrations provide vision for the Laser Drill.
Infested and Aberrations do not spawn from the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Infested and Aberrations have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Infested Marines get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Infested and Aberration kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Infested and Aberrations all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Infested and Aberrations can cast abilities. Infested and Aberrations can spawn out of Point Defense Drones dropped by Power Overwhelming.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Infested and Aberrations set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Infested and Aberrations create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Infested and Aberrations move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Infested and Aberrations can transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can resurrect Infested and Aberrations.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Infested and Aberrations do not spawn from Void Rifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested and Aberrations do not spawn other infested units when killed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Infested and Aberrations are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
