<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Mag-nificent</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/magnificent">
<?= startContent() ?>
    <h1>Mutator: Mag-nificent</h1>
    <p><img src="/images/mutators/magnificent.png" alt="" /></p>
    <p>Mag Mines are deployed throughout the map at the start of the mission.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">4</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>At the start of the game, 200 Mag-mines are placed randomly throughout the map. Mag-mines cannot be placed within 30 range of player start locations or within 5 range of resource patches.</p>
    <p>The mines will deal 250 damage, after a 2.5-second trigger delay, allowing you to dodge them easily. They trigger without the need for detection.</p>
    <p>Additionally, there are some other map-specific limitations:</p>
    <ul>
        <li>Chain of Ascension: Mag-mines will not be placed within 15 range of Ji'Nara.</li>
        <li>Lock & Load: Mag-mines will not be placed within 8 range of the Celestial Locks.</li>
    </ul>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Raynor: Hyperion Point Defense Drones can shoot down Mag-mines.</li>
        <li>Zeratul: Shieldguards have a 50% chance to remove a Mag-mine projectile.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Mag-mines appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Mag-mines do not spawn Broodlings when they detonate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Mag-mines do not give out Avenger stacks when they detonate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Mag-mines cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Mines apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Mag-mines appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Mag-mines trigger Fatal Attraction when they detonate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Mines can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Mines do not launch Fireworks when they explode.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Mag-mines can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Mag-mines do not cause Hardened Will to activate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Mag-mines do not respawn when they explode.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Mag-mines provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Mag-mines do not get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Mag-mines cannot cast abilities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Mag-mines do not set the ground on fire when they explode.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Mag-mines do not create an explosion when explode.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Mag-mines do not move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Mag-mines do not Transmute after killing a unit.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators do not resurrect Mag-mines.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Mag-mines do not spawn Infested when they detonate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Mag-mines are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
