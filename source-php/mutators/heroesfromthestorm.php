<?php

require_once "../../html/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Heroes from the Storm</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/heroesfromthestorm">
<?= startContent() ?>
    <h1>Mutator: Heroes from the Storm</h1>
    <p><img src="/images/mutators/heroesfromthestorm.png" alt="" /></p>
    <p>Every attack wave will be led by Heroes of increasing power.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">10</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Heroes will be added to attack waves as the mission goes on using a "Hero Pool" system which keeps track of how many heroes can spawn. The Hero Pool starts at 1. Every time a hero spawns, the Hero Pool gets reduced by 1. At particular mission times, the current value of the Hero Pool is increased as per the following table:</p>
    <p>On Dead Of Night, Nydus unloads are regarded as attack wave spawns and will therefore also spawn Amon heroes.</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Time</th>
                <th>Count</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>5:00</td>
                <td>2</td>
            </tr>
            <tr>
                <td>6:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>8:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>9:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>11:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>12:30</td>
                <td>1</td>
            </tr>
            <tr>
                <td>14:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>15:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>16:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>17:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>18:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>19:00</td>
                <td>1</td>
            </tr>
            <tr>
                <td>20:00</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <p>Every 30 seconds past 20:00, the counter goes up by 1.</p>
    <p>Every attack wave, the Hero Pool will attempt to be depleted and summon the number of heroes in the Hero Pool, subject to the following constraints:</p>
    <ul>
        <li>Maximum allowable heroes per attack wave: 6</li>
        <li>On Mist Opportunities, maximum heroes in a harass wave: 1</li>
        <li>On Temple of the Past, maximum heroes in side ramp attack wave: 1</li>
        <li>On Temple of the Past, maximum heroes in North drop attack wave: 0</li>
        <li>Attack Wave is not an Air Drop attack wave</li>
    </ul>
    <p>Note that heroes will not spawn at the attack wave spawn location, but at the attack wave gather location.</p>
    <p>Heroes are spawned in a particular order for the first 9 spawns as follows:</p>
    <ol>
        <li>Raynor</li>
        <li>Tychus</li>
        <li>Dehaka</li>
        <li>Karax</li>
        <li>Nova</li>
        <li>Zagara</li>
        <li>Zeratul</li>
        <li>Artanis</li>
        <li>Kerrigan</li>
    </ol>
    <p>After the 9th spawn, a random hero will be selected from each set of three heroes (1-3, 4-6, 7-9). For example, spawn #10 will contain either Raynor, Tychus or Dehaka. Spawn #11 will contain either Karax, Nova or Zagara, etc.</p>
    <p>Information on the available heroes is shown below.</p>
    <p><b>Artanis</b></p>
    <img src="/images/mutatordata/hotsartanis.jpg" alt="Heroes From the Storm Artanis">
    <p>HP/Shields: 2000/2000</p>
    <p>Passives:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Passive</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/resurgence.png" alt="Resurgence"></td>
                <td>Resurgence</td>
                <td>Grants Artanis invulnerability for 3 seconds upon taking lethal damage, preventing death and replenishing his Shields and Life. Also releases a large blast of energy that knocks back and deals 100 damage to all nearby enemies. This effect cannot occur more than once every 60 seconds.</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/lightningdash.png" alt="Lightning Dash"></td>
                <td>Lightning Dash</td>
                <td>Artanis charges forward, unleashing a blast of energy that deals 100 damage to nearby enemies and stuns them for 2 seconds.</td>
                <td>5 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/astralwind.png" alt="Astral Wind"></td>
                <td>Astral Wind</td>
                <td>Heals Artanis and all nearby friendly units for 300 life and 200 shields.</td>
                <td>15 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Dehaka</b></p>
    <img src="/images/mutatordata/hotsdehaka.jpg" alt="Heroes From the Storm Dehaka">
    <p>HP: 1500</p>
    <p>Passives: None</p>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/drag.png" alt="Drag"></td>
                <td>Drag</td>
                <td>Pulls the target to Dehaka's location and temporarily stuns it (5 seconds).</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/generatespawns.png" alt="Generate Spawns"></td>
                <td>Generate Spawns</td>
                <td>Generates two Spawns of Dehaka that deal 100% normal damage but have 50% life. Spawns last 30 seconds.</td>
                <td>45 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/mend.png" alt="Mend"></td>
                <td>Mend</td>
                <td>Heals Dehaka for 150, and heals nearby friendly units for 50. An additional 50% of the amount healed regenerates over 15 seconds.</td>
                <td>10 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Karax</b></p>
    <img src="/images/mutatordata/hotskarax.jpg" alt="Heroes From the Storm Karax">
    <p>HP/Shields: 750/750</p>
    <p>Passives:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Passive</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/masterphasesmith.png" alt="Master Phase-smith"></td>
                <td>Master Phase-smith</td>
                <td>Karax generates a power field similar to a Pylon. Structures within the power field gain 100% attack speed and 900% production speed.</td>
                <td>0 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/reclamation.png" alt="Reclamation"></td>
                <td>Reclamation</td>
                <td>Permanently takes control of target enemy robotic unit or Protoss structure. Robotic units include Sentries, Immortals, Reavers and Colossi.</td>
                <td>5 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/phasecannon.png" alt="Phase Cannon"></td>
                <td>Phase Cannon</td>
                <td>Phases in a Photon Cannon that lasts for 30 seconds before leaving the battlefield.<br><br>The Photon Cannon must be placed within a power field.</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/warpinkhydarinmonolith.png" alt="Warp In Khaydarin Monolith"></td>
                <td>Warp In Khaydarin Monolith</td>
                <td>Extremely powerful defensive structure. Has superior range and damage, but is very expensive and attacks slowly.<br><br>Can attack ground and air units.</td>
                <td>10 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Kerrigan</b></p>
    <img src="/images/mutatordata/hotskerrigan.jpg" alt="Heroes From the Storm Kerrigan">
    <p>HP: 5000</p>
    <p>Passives: None</p>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/leapingstrike.png" alt="Leaping Strike"></td>
                <td>Leaping Strike</td>
                <td>Kerrigan leaps to her target and deals 150 damage. Can be used without a target to travel quickly.</td>
                <td>0 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/psionicshift.png" alt="Psionic Shift"></td>
                <td>Psionic Shift</td>
                <td>Kerrigan dashes through enemies, dealing 50 damage to all enemies in her path.</td>
                <td>0 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/apocalypse.png" alt="Apocalypse"></td>
                <td>Apocalypse</td>
                <td>Deals 300 damage to enemy units and 700 damage to enemy structures in a large area.</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Nova</b></p>
    <img src="/images/mutatordata/hotsnova.jpg" alt="Heroes From the Storm Nova">
    <p>HP: 2250</p>
    <p>Passives: None</p>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/snipe.png" alt="Snipe"></td>
                <td>Snipe</td>
                <td>Deals 200 damage to target enemy ground or air unit from long range.<br><br>Can target biological and mechanical units.</td>
                <td>0 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/nuke.png" alt="Nuke"></td>
                <td>Nuke</td>
                <td>Calls down a Nuclear Strike at a target location. Nukes take 5 seconds to land, but they deal up to 600 damage to enemies in a large radius.</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Raynor</b></p>
    <img src="/images/mutatordata/hotsraynor.jpg" alt="Heroes From the Storm Raynor">
    <p>HP: 1000</p>
    <p>Passives: None</p>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/penetratorround.png" alt="Penetrator Round"></td>
                <td>Penetrator Round</td>
                <td>After carefully aiming, Raynor fires a Penetrator Round that strikes enemies along its path, dealing 80 damage.</td>
                <td>20 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Tychus</b></p>
    <img src="/images/mutatordata/hotstychus.jpg" alt="Heroes From the Storm Tychus">
    <p>HP: 1000</p>
    <p>Passives:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/hailoflead.png" alt="Hail of Lead"></td>
                <td>Hail of Lead</td>
                <td>Tychus' Chaingun deals splash damage (50%) in a small area (1.25 range) around the target.</td>
                <td>0 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/tossshreddergrenade.png" alt="Toss Shredder Grenade"></td>
                <td>Toss Shredder Grenade</td>
                <td>Tosses a grenade that explodes for 80 damage in a small radius (2 range).<br><br>Does not harm friendly units.</td>
                <td>20 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Zagara</b></p>
    <img src="/images/mutatordata/hotszagara.jpg" alt="Heroes From the Storm Zagara">
    <p>HP: 2250</p>
    <p>Passives: None</p>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/banelingbarrage.png" alt="Baneling Barrage"></td>
                <td>Baneling Barrage</td>
                <td>Launches 4 Banelings towards the target point. Each Baneling explodes for 40 damage (80 vs structures).</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/spawnhunterkillers.png" alt="Spawn Hunter Killers"></td>
                <td>Spawn Hunter Killers</td>
                <td>Spawns 4 Hunter Killers at the target point that last 20 seconds.</td>
                <td>30 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/massfrenzy.png" alt="Mass Frenzy"></td>
                <td>Mass Frenzy</td>
                <td>Grants all friendly units on the map 25% attack speed and 25% movement speed for 15 seconds.</td>
                <td>120 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/infesteddrop.png" alt="Infested Drop"></td>
                <td>Infested Drop</td>
                <td>Calls down 10 drop-pods onto the target area, dealing 50 damage with each drop-pod and spawning a total of 10 Roaches that last 30 seconds.</td>
                <td>60 seconds</td>
            </tr>
        </tbody>
    </table>

    <p><b>Zeratul</b></p>
    <img src="/images/mutatordata/hotszeratul.jpg" alt="Heroes From the Storm Zeratul">
    <p>HP/Shields: 2000/2000</p>
    <p>Passives:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/permanentlycloaked.png" alt="Permanently Cloaked"></td>
                <td>Permanently Cloaked</td>
                <td>Zeratul is permanently cloaked.</td>
                <td>0 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>Abilities:</p>
    <table class="dataTable">
        <thead>
            <tr>
                <th>Skill</th>
                <th>Name</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/blink.png" alt="Blink"></td>
                <td>Blink</td>
                <td>Teleports Zeratul to a nearby location.</td>
                <td>3 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/voidarmor.png" alt="Void Armor"></td>
                <td>Void Armor</td>
                <td>Grants nearby friendly units +100 shields for 10 seconds.</td>
                <td>10 seconds</td>
            </tr>
            <tr>
                <td><img src="/images/mutatordata/amonheroes/shadowblade.png" alt="Shadow Blade"></td>
                <td>Shadow Blade</td>
                <td>Slashes an enemy unit for 500 damage.<br><br>Can only target ground units.</td>
                <td>6 seconds</td>
            </tr>
        </tbody>
    </table>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Dehaka: Dehaka can Devour Amon's Dehaka (with an <a href="/resources/eastereggs">Easter Egg</a> voice line). He cannot Devour other heroes.</li>
        <li>Dehaka: Dakrun's knockback can cancel Kerrigan's Apocalypse and Nova's Nuke.</li>
        <li>Tychus: Crooked Sam's Moebius Restraint Matrix upgrade can be used to stun Amon Heroes with his Demolition Charge.</li>
        <li>Vorazun: Oracle Stasis Wards can be used to disable Heroes. Combine with the Stasis Calibration upgrade to be able to attack them while in stasis.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/aggressivedeployment.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/aggressivedeployment">Aggressive Deployment</a></td><td>Aggressive Deployment drops do not contain Amon Heroes.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/alienincubation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/alienincubation">Alien Incubation</a></td><td>Amon Heroes spawn Broodlings when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/avenger.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/avenger">Avenger</a></td><td>Amon Heroes can give out (1 stack)/receive Avenger stacks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Amon Heroes get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Amon Heroes can carry Plague.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Amon Heroes apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/evasivemaneuvers.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/evasivemaneuvers">Evasive Maneuvers</a></td><td>Amon Heroes do not get the Evasive Maneuvers buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Amon Heroes trigger Fatal Attraction when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Amon Heroes can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fireworks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fireworks">Fireworks</a></td><td>Amon Heroes do not launch Fireworks when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Gift spawns do not spawn an Amon Heroes with the capturing attack force. Amon Heroes can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Amon Heroes can get the Hardened Will buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/inspiration.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/inspiration">Inspiration</a></td><td>Amon Heroes can provide the Inspiration buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Amon Heroes respawn when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Amon Heroes have Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Amon Heroes do not get the Long Range buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/momentofsilence.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/momentofsilence">Moment of Silence</a></td><td>Amon Heroes trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Amon Hero kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/photonoverload.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/photonoverload">Photon Overload</a></td><td>Amon's Karax's spawned structures will have Photon Overload applied when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Amon Heroes all have Polarity applied to them.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Amon Heroes can cast abilities other than the ones they already have.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/scorchedearth.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/scorchedearth">Scorched Earth</a></td><td>Amon Heroes set the ground on fire when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/selfdestruction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/selfdestruction">Self Destruction</a></td><td>Amon Heroes create an explosion when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Amon Heroes move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Amon Heroes do not Transmute after killing a unit.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidreanimators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidreanimators">Void Reanimators</a></td><td>Void Reanimators do not resurrect Amon Heroes.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/walkinginfested.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/walkinginfested">Walking Infested</a></td><td>Amon Heroes spawn Infested when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Amon Heroes are cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
