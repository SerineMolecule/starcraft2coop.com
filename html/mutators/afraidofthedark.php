<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Afraid of the Dark</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/afraidofthedark">
<?= startContent() ?>
    <h1>Mutator: Afraid of the Dark</h1>
    <p><img src="/images/mutators/afraidofthedark.png" alt="" /></p>
    <p>Vision provided by all sources is extremely limited except when in view of your camera.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">0</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">No</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The vision range of Afraid of the Dark is highly reduced. Below is an example of what it looks like:</p>
    <img src="/images/mutatordata/afraidofthedark.jpg" alt="Afraid of the Dark Vision Range">
    <p>Notice how the Probe lies outside the vision range. This means that it can be attacked and not be able to attack back. Units can only attack if they have vision provided by your camera.</p>
    <p>Vision Ranges are listed below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Unit/Structure</th>
                <th>Vision Range</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Primary Structure</td>
                <td>7</td>
                <td><img src="/images/mutatordata/afraidofthedarktownhall.jpg" alt="Afraid of the Dark Vision Range for Primary Structures"></td>
            </tr>
            <tr>
                <td>Any other structure</td>
                <td>2</td>
                <td><img src="/images/mutatordata/afraidofthedarkstructure.jpg" alt="Afraid of the Dark Vision Range for Other Structures"></td>
            </tr>
            <tr>
                <td>Unit</td>
                <td>0</td>
                <td><img src="/images/mutatordata/afraidofthedarkunit.jpg" alt="Afraid of the Dark Vision Range for Units"></td>
            </tr>
            <tr>
                <td>Camera<br>(Hover to play clip.<br>Please provide time<br>for clip to load.)</td>
                <td>4 + 3(1-{distance to closest unit}/12)</td>
                <td><img id="afraidofthedarkHover" src="/images/mutatordata/afraidofthedarkcamerastatic.jpg" alt="Afraid of the Dark Vision Range for Player Cameras"></td>
                <script>
                    $("#afraidofthedarkHover").hover(function(){
                        $(this).attr("src", function(index, attr){
                            return attr.replace("static.jpg", ".gif");
                        });
                    }, function(){
                    $(this).attr("src", function(index, attr){
                        return attr.replace(".gif", "static.jpg");
                        });
                    });
                </script>
            </tr>
        </tbody>
    </table>
    <p>Any units with a Map Boss tag will not be affected by the mutator. These are usually mission-specific units, such as the Artifact Truck on Cradle of Death and Terrazine Harvesters on Mist Opportunities.</p>
    <p>Attack wave and Objective ping markers will not be shown on the minimap.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Dehaka: Dehaka's Pack Leaders are Map Bosses and therefore retain their regular vision.</li>
        <li>Han/Horner: Horner's Call in the Fleet ability generates its own vision circle as it moves through strafing area.</li>
        <li>Mengsk: Earthsplitter Bombardments provide vision regardless of camera position.</li>
        <li>Raynor: Raynor's Scans can provide temporary vision for the duration of the scan.</li>
        <li>Stukov: Brood Queen's Ocular Symbiote ability increases vision for units.</li>
        <li>Stukov: Units mind-controlled by the Aleksander retain their full vision.</li>
        <li>Zeratul: Afraid of the Dark disables Zeratul's map-wide terrain vision. You may need to use Rally Points to find the Artifact Fragments, shown below:<br>
        <iframe width="475" height="268" src="https://www.youtube.com/embed/h0OZG494TCY" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blizzard.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blizzard">Blizzard</a></td><td>Blizzards appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Gifts do not appear on the minimap. Kill Bots gifted to Amon do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>The Laser Drill will be marked on the minimap when it attacks you.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/magnificent.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/magnificent">Mag-nificent</a></td><td>Mag-mines appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/missilecommand.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/missilecommand">Missile Command</a></td><td>Missiles do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators do not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/purifierbeam.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/purifierbeam">Purifier Beam</a></td><td>Purifier Beam appears as a red dot on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>The Turking does not appear on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Void Rifts are marked on the minimap.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots do not appear on the minimap.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
