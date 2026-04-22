<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Lava Burst</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/lavaburst">
<?= startContent() ?>
    <h1>Mutator: Lava Burst</h1>
    <p><img src="/images/mutators/lavaburst.png" alt="" /></p>
    <p>Lava periodically bursts from the ground at random locations and deals damage to player air and ground units.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Lava Bursts appear every 0.5 seconds and will always be at least 25 units away from your main and at least 10 units from any resource patch. Lava Bursts will also not appear directly underneath your structures.</p>
    <p>Lava Bursts will be marked on the terrain. These markings will last for 4 seconds before they start dealing damage. Lava Bursts deal 5 (+2 vs. Armored) damage per 0.125 seconds (40 DPS) to non-heroic units. The damage phase of the Lava Bursts lasts 16 seconds.</p>
    <p>Lava Burst damage to Heroic units is based on the unit's maximum HP. This is summarized in the table below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Unit HP</th>
                <th>Total DPS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>100</td>
                <td>24</td>
            </tr>
            <tr>
                <td>150</td>
                <td>36</td>
            </tr>
            <tr>
                <td>200</td>
                <td>48</td>
            </tr>
            <tr>
                <td>250</td>
                <td>60</td>
            </tr>
            <tr>
                <td>300</td>
                <td>72</td>
            </tr>
            <tr>
                <td>400</td>
                <td>128</td>
            </tr>
            <tr>
                <td>500</td>
                <td>120</td>
            </tr>
            <tr>
                <td>600</td>
                <td>144</td>
            </tr>
            <tr>
                <td>800</td>
                <td>192</td>
            </tr>
            <tr>
                <td>1000</td>
                <td>240</td>
            </tr>
            <tr>
                <td>1500</td>
                <td>360</td>
            </tr>
            <tr>
                <td>2000</td>
                <td>480</td>
            </tr>
        </tbody>
    </table>
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
        <li>Alarak: Place force-fields over Lava Bursts to prevent your units from accidentally walking over Lava Bursts. Be careful if you use Massive units, because they can break force-fields.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Lava Burst applies the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Lava Burst can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Lava Bursts cannot capture gifts.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Lava Bursts do not provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/wemoveunseen.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/wemoveunseen">We Move Unseen</a></td><td>Lava Bursts are not cloaked.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
