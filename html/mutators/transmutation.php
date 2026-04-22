<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Transmutation</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/transmutation">
<?= startContent() ?>
    <h1>Mutator: Transmutation</h1>
    <p><img src="/images/mutators/transmutation.png" alt="" /></p>
    <p>Enemy units have a chance to transform into more powerful units whenever they deal damage.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">7</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Every time an enemy unit does damage to a player unit, it has a chance to change to a unit of 1 higher supply that it costs. 0 supply units are counted as 1 supply units.</p>
    <p>Note that the change is permanent. Therefore, newly Transmutated units will drop higher amounts of Biomass, Essence, etc. than the unit they were previously. Additionally, units that would not drop Biomass (such as units from Void Rifts) will also start to drop Biomass.</p>
    <p>The chance of Transmutation triggering is calculated as a percentage of damage dealt as Damage/2. So, if a unit does 200 damage, it has a 100% chance of triggering Transmutation. This calculation occurs after damage reduction is calculated in the form of armor/shield damage reduction and damage reduction buffs.</p>
    <p>If an enemy unit kills a player unit, it jumps a number of tiers equal to the killed unit's supply. If that unit is a heroic, the killing unit instantly jumps to the max tier.</p>
    <p>Transmuted units also drop Biomass, Essence and Mengsk Royal Guard experience, even if the original unit did not (e.g. from Void Rifts).</p>
    <p>Tiers are shown below:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Tier</th>
                <th>Units</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <ul>
                        <li>Baneling</li>
                        <li>Marine</li>
                        <li>Zergling</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>
                    <ul>
                        <li>Hellbat</li>
                        <li>Hellion</li>
                        <li>Reaper</li>
                        <li>Roach</li>
                        <li>Widow Mine</li>
                        <li>Zealot</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>
                    <ul>
                        <li>Adept</li>
                        <li>Firebat</li>
                        <li>Hydralisk</li>
                        <li>Marauder</li>
                        <li>Sentry</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>
                    <ul>
                        <li>Dragoon</li>
                        <li>Goliath</li>
                        <li>High Templar</li>
                        <li>Mutalisk</li>
                        <li>Stalker</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>
                    <ul>
                        <li>Banshee</li>
                        <li>Infestor</li>
                        <li>Phoenix</li>
                        <li>Scout</li>
                        <li>Viking</li>
                        <li>Warhound</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>
                    <ul>
                        <li>Cyclone</li>
                        <li>Ghost</li>
                        <li>Lurker</li>
                        <li>Oracle</li>
                        <li>Siege Tank</li>
                        <li>Swarm Host</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>
                    <ul>
                        <li>Archon</li>
                        <li>Disruptor</li>
                        <li>Immortal</li>
                        <li>Liberator</li>
                        <li>Ravager</li>
                        <li>Void Ray</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>8</td>
                <td>
                    <ul>
                        <li>Battlecruiser</li>
                        <li>Brood Lord</li>
                        <li>Carrier</li>
                        <li>Colossus</li>
                        <li>Reaver</li>
                        <li>Tempest</li>
                        <li>Thor</li>
                        <li>Ultralisk</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>9</td>
                <td>
                    <ul>
                        <li>Hybrid Destroyer</li>
                        <li>Hybrid Nemesis</li>
                        <li>Hybrid Reaver</li>
                        <li>Loki</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>10</td>
                <td>
                    <ul>
                        <li>Hybrid Behemoth</li>
                        <li>Hybrid Dominator</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Alarak: Structure Overcharge prevents Transmutation from triggering on the unit.</li>
        <li>Artanis: Shield Overcharge prevents Transmutation from triggering on the unit.</li>
        <li>Fenix: Fenix Champions do not count as Heroic units that cause max-tier transmutation.</li>
        <li>Nova: Defensive Drones' Defensive Matrix prevents Transmutation from triggering on the attacking unit.</li>
        <li>Stetmann: H.U.G.S Overload prevents Transmutation from triggering on the unit.</li>
        <li>Swann: Defensive Matrix prevents Transmutation from triggering on the attacking unit.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Units from Aggressive Deployment Drops can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Broodlings can transmutate. Newly-transmuted units spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Units lose their Avenger stacks after they Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Transmuted units get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Transmuted units may or may not carry Plague, irrespective of whether it carried Plague or not before Transmuting.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Transmuted units apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/diffusion.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/diffusion">Diffusion</a></td><td>Damage dealt by Diffusion can trigger Transmutation on enemy units.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/doubleedged.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/doubleedged">Double Edged</a></td><td>Damage dealt by Double Edged does not trigger Transmutation.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>The attack that kills a player's structure will not cause the enemy unit to Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Transmuted units get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Transmuted units trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Transmuted units can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Units spawned from Gift Exchange can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Transmuted units cause Hardened Will to activate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes do not Transmute after killing a unit.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Transmuted units can get the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Transmutated units have their Just Die stacks reset, allowing them to respawn again.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots do not Transmute when dealing damage or killing units.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Transmuted units provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Transmuted units have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines do not Transmute after killing a unit.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/minesweeper.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/minesweeper">Minesweeper</a></td><td>Widow Mines Transmute after killing a unit.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Transmuted units which are now Hybrids trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/outbreak.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/outbreak">Outbreak</a></td><td>Infested and Aberrations can transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>When units Transmute, they can switch Polarities.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators do not Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Transmuted units move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Units spawned from Civilians can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>Turkeys can transmute when they deal damage or kill a unit. The Turking does not transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Resurrected units can Transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Units spawned from Void Rifts can transmute.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Infested can transmute. Newly-transmuted units spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Transmuted units are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
