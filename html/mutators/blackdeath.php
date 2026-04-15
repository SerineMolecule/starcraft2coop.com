<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Black Death</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/blackdeath">
<?= startContent() ?>
    <h1>Mutator: Black Death</h1>
    <p><img src="/images/mutators/blackdeath.png" alt="" /></p>
    <p>Some enemy units carry a plague that deals damage over time and spreads to other nearby units. The plague spreads to your units when the enemy unit is killed.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">7</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Any enemy unit has a 33% chance of having the Black Death mutator applied to it. This unit can infect up to 3 units within 5 range when it dies. Black Death does 1% of a unit's HP in damage every 0.5 seconds and ignores all shields.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Abathur: Roaches that burrow can outheal the effect of Black Death.</li>
        <li>Abathur: 100 Biomass units don't take damage from Black Death.</li>
        <li>Abathur: Due to lack of regeneration, Ultimate Evolutions die quickly to Black Death. Disable making Ultimate Evolutions by right-clicking on "Evolution" for newly-created units.</li>
        <li>Abathur: 100+ Biomass Essence Hoarder will cause units to gradually heal themselves with Black Death.</li>
        <li>Fenix: Changing Fenix suits removes the Plague debuff.</li>
        <li>Kerrigan: Units inside Kerrigan's Omega Network do not take damage.</li>
        <li>Kerrigan: Kerrigan's Creep allows units to regenerate at 1HP/s. This means any unit below a max HP of 50HP, standing on Kerrigan's Creep, will not die from Black Death. This is increased to 100 HP if using the Malevolent Matriarch Prestige.</li>
        <li>Nova: Nova's base health regeneration (even without the upgrade) counters the effect of Black Death.</li>
        <li>Nova: The barrier created by Nova's Defensive Drone can be used to prevent damage ticks of Black Death.</li>
        <li>Stukov: Stukov's Rooted Bunkers can outheal the effect of Black Death.</li>
        <li>Stetmann: Max mastery Stetzone (on HUGS) can outheal Black death for your units up to 800HP, or allied units up to 400HP.</li>
        <li>Tychus: Rattlesnake's upgraded Revitalizer can outheal the effect of Black Death.</li>
        <li>Vorazun: Emergency Recall recalls your units to the closest Nexus. Build a Nexus away from your main and expansion, towards where you are pushing to prevent your units from being Recalled with Black Death and killing your workers.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/doubleedged.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/doubleedged">Double Edged</a></td><td>Units with Black Death will die twice as fast with Double Edged active.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Plague damage ticks do not have a chance of applying Fear.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Whether a unit has Plague or not is retained when it takes fatal damage. Plague only spreads when the unit is finnally killed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mines can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles cannot carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Transmuted units may or may not carry Plague, irrespective of whether it carried Plague or not before Transmuting.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys cannot carry Plague. The Turking can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can carry Plague. Resurrected units may or may not carry Plague, irrespective of whether it originally carried Plague or not before it died.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots cannot carry Plague.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
