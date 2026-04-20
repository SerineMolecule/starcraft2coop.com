<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Twister</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/twister">
<?= startContent() ?>
    <h1>Mutator: Twister</h1>
    <p><img src="/images/mutators/twister.png" alt="" /></p>
    <p>Tornadoes move across the map, damaging and knocking back player units in their path.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">2</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The total number of Twisters on the map is based on the map size. It is the (width + height)/19. Each Twister does 25 damage and knocks all units back.</p>
    <p>Twisters will always be at least 25 units away from the starting locations as well as at least 5 units away from mineral patches.</p>
    <p>Twisters do not knock back any units with an "Untransportable" tag (such as the trucks on Cradle of Death). Instead, they deal their damage continuously, and can destroy the unit within seconds.</p>    <style>
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

    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Twisters apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Twisters can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Twisters can capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Twisters do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Twisters are not cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
