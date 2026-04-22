<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Avenger</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/avenger">
<?= startContent() ?>
    <h1>Mutator: Avenger</h1>
    <p><img src="/images/mutators/avenger.png" alt="" /></p>
    <p>Enemy units gain increased attack speed, movement speed, armor, life, and life-regeneration when nearby enemy units die.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">5</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>When a unit dies, it gives out a certain number of Avenger stacks to units within a 1.25 range. The number of stacks equals the unit's supply count. If the unit costs no supply, 1 stack is given. Note that Hybrids take up 8 supply.</p>
    <p>The total number of Avenger stacks (buffs) a unit can have is 10. These stacks are lost when the unit ownership changes (Mind Control, Domination, etc.).</p>
    <p>Each Avenger stack provides the following buffs to the unit receiving the stack. Stacks are additive.</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Stat</th>
                <th>Buff</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Attack Speed</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Movement Speed</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Armor</td>
                <td>0.3</td>
            </tr>
            <tr>
                <td>HP</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>HP Regen</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Shields</td>
                <td>10%</td>
            </tr>
            <tr>
                <td>Shield Regen</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <p>Avenger stacks can be transferred to the hybrid on Part & Parcel. On Oblivion Express, the train counts as a whole unit. Therefore, only 8 stacks will be provided.</p>
    <p>Below are a list of mission-specific unit Avenger stacks given out on unit death. :</p>
    <ul>
        <li>Chain of Ascension Slayn Elemental: 1</li>
        <li>Cradle of Death Gatekeeper Construct: 10</li>
        <li>Dead of Night Hunterling: 1</li>
        <li>Dead of Night Kaboomer, Spotter: 2</li>
        <li>Dead of Night Choker: 3</li>
        <li>Dead of Night Stank: 12</li>
        <li>Lock & Load Xel'Naga Construct: 10</li>
        <li>Miner Evacuation Blightbringer, Eradicators: 1</li>
        <li>Oblivion Express Train: 8</li>
        <li>Part and Parcel Moebius Hybrid Experiment: 8</li>
        <li>Part and Parcel Train: 8</li>
        <li>Rifts to Korhal Pirate Ship: 6</li>
        <li>Temple of the Past Void Thrasher: 10</li>
        <li>The Vermillion Problem Molten Salamander: 10</li>
        <li>Void Launch Shuttle: 2</li>
        <li>Void Thrashing Void Thrasher: 10</li>
    </ul>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Zeratul: Zeratul's Avatar of Essence's Devolve ability will devolve a unit and cause it to lose any Avenger stacks it has.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops give out and receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes can give out (1 stack)/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Units with Avenger stacks can get the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units do not give out/lose Avenger stacks when taking fatal damage and respawning. When a unit is finally killed, Avenger stacks are provided to surrounding units. Units retain their Avenger stacks when taking fatal damage and respawning.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots can give out Avenger stacks (1 stack) when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines do not give out Avenger stacks when they detonate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Mines can give out Avenger stacks, but cannot receive them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles do not give out Avenger stacks when destroyed.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators can give out (1 stack)/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Units with Avenger stacks move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Units lose their Avenger stacks after they Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians give out and collect Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys do not give out Avenger stacks. Angry Turkeys can give out (1 stack)/receive Avenger stacks. The Turking can give out (10 stacks) Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators can give out (3 stacks) Avenger stacks. Resurrected units do not keep their Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested can give out/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots do not give out Avenger stacks when they die.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
