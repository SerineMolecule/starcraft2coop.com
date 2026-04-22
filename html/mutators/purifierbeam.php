<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Purifier Beam</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/purifierbeam">
<?= startContent() ?>
    <h1>Mutator: Purifier Beam</h1>
    <p><img src="/images/mutators/purifierbeam.png" alt="" /></p>
    <p>An enemy Purifier Beam moves across the map toward nearby player units.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">2</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The Purifier Beam cannot be destroyed. It does a base damage of 10 every 0.25 seconds within 1 radius, 50% of the base damage within 2.2 radius, and 10% of the base damage within 2.8 radius.</p>
    <p>Purifier Beams will always stay least 20 units away from resource patches.</p>
    <p>An additional beam will spawn at 10:00 and another one at 20:00. Purifier Beams will always spawn at least 80 units away from Player bases.</p>
    <p>Players can "distract" a Purifier beam by setting a unit (or a structure if they are playing Terran) on patrol around the beam. The approximate size of the circle that will work for units of any size or any movement speed should be a circle with diameter equal to the vertical visible area on the screen. By having units set in patrol around the Beam, the Beam will end up following that one unit around throughout the course of the game. Note that for Zerg commanders, Overlords may be used, but they will require the Pneumatized Carapace upgrade.</p>
    <style>
    .mapSafetyZone{
        border: 1px solid #888;
        display:inline-block;
    }
    .mapSafetyZone p{
        text-align:center;
    }
    </style>
    <h2 id="safetyZones">Safety Zones</h2>
    <p>Certain mutators create environmental hazards that can impact/debuff player units, including workers. These mutators get deactivated in areas called "Safety Zones". All player bases and expansions are considered Safety Zones. The mutators that obey the Safety Zone rules are as follows:</p>
    <ul>
        <li>Blizzard</li>
        <li>Going Nuclear*</li>
        <li>Lava Burst</li>
        <li>Orbital Strike</li>
        <li>Purifier Beam</li>
        <li>Temporal Field</li>
        <li>Time Warp</li>
        <li>Twister</li>
    </ul>
    <p>*The centers of the nukes will not be placed inside the safety zones. However, nukes can still damage units inside the safety zone due to their large radius.</p>
    <p>Images of the Safety Zones for all maps are shown below.</p>
    <div id="safetyZone">
        <div class="mapSafetyZone">
            <p>Chain of Ascension</p>
            <img src="/images/mutatordata/safetyzonechainofascension.jpg" alt="Chain of Ascension Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Cradle of Death</p>
            <img src="/images/mutatordata/safetyzonecradleofdeath.jpg" alt="Cradle of Death Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Dead of Night</p>
            <img src="/images/mutatordata/safetyzonedeadofnight.jpg" alt="Dead of Night Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Lock & Load</p>
            <img src="/images/mutatordata/safetyzonelockandload.jpg" alt="Lock & Load Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Malwarfare</p>
            <img src="/images/mutatordata/safetyzonemalwarfare.jpg" alt="Malwarfare Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Miner Evacuation</p>
            <img src="/images/mutatordata/safetyzoneminerevacuation.jpg" alt="Miner Evacuation Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Mist Opportunities</p>
            <img src="/images/mutatordata/safetyzonemistopportunities.jpg" alt="Mist Opportunities Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Oblivion Express</p>
            <img src="/images/mutatordata/safetyzoneoblivionexpress.jpg" alt="Oblivion Express Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Part and Parcel</p>
            <img src="/images/mutatordata/safetyzonepartandparcel.jpg" alt="Part and Parcel Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Rifts to Korhal</p>
            <img src="/images/mutatordata/safetyzoneriftstokorhal.jpg" alt="Rifts to Korhal Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Scythe of Amon</p>
            <img src="/images/mutatordata/safetyzonescytheofamon.jpg" alt="Scythe of Amon Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Temple of the Past</p>
            <img src="/images/mutatordata/safetyzonetempleofthepast.jpg" alt="Temple of the Past Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>The Vermillion Problem</p>
            <img src="/images/mutatordata/safetyzonethevermillionproblem.jpg" alt="The Vermillion Problem Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Void Launch</p>
            <img src="/images/mutatordata/safetyzonevoidlaunch.jpg" alt="Void Launch Safety Zone">
        </div>
        <div class="mapSafetyZone">
            <p>Void Thrashing</p>
            <img src="/images/mutatordata/safetyzonevoidthrashing.jpg" alt="Void Thrashing Safety Zone">
        </div>
    </div>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Karax: With enough Shield Batteries, a Purifier Beam can be "trapped" on a Pylon while Shield Batteries around it recharge its shields. A picture is shown below:<br>
        <img src="/images/mutatordata/purifierbeamtrap.jpg" alt="Purifier Beam Trap"><br>
        <p>Note that the you will need to have the "Rapid Recharging" upgrade researched for this work. The Shield Battery placement marker in green shows a possible location for a 7th. This can be placed after researching the "Fortification Barrier" upgrade, preventing the Cannon from taking any hull damage and freeing up the repair beam.</p>
        <p>The placement layout of the Photon Cannon, Pylons and Shield Batteries is shown below:</p>
        <img src="/images/mutatordata/purifierbeamtraplayout.jpg" alt="Purifier Beam Trap Layout"><br>
        <p>The video below demonstrates this in action:</p>
        <iframe width="475" height="268" src="https://www.youtube.com/embed/zvvnvFFTooY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </li>
        <li>Kerrigan: Kerrigan can use Omega Worms to lure the Purifier Beam away from an area.</li>
        <li>Vorazun: Time Stop delays Purifier Beam timings.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/afraidofthedark.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/afraidofthedark">Afraid of the Dark</a></td><td>Purifier Beam appears as a red dot on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Purifier Beam applies the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/darkness.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/darkness">Darkness</a></td><td>Purifier Beam appears as a red dot on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Purifier Beam can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Purifier Beam can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/hardenedwill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/hardenedwill">Hardened Will</a></td><td>Purifier Beam does not cause Hardened Will to activate.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Purifier Beams do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/speedfreaks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/speedfreaks">Speed Freaks</a></td><td>Purifier Beam does not move faster with Speed Freaks.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Purifier Beam is cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
