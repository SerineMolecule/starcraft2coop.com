<?php

require_once "../../html/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Mutually Assured Destruction</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/mutuallyassureddestruction">
<?= startContent() ?>
    <h1>Mutator: Mutually Assured Destruction</h1>
    <p><img src="/images/mutators/mutuallyassureddestruction.png" alt="" /></p>
    <p>Enemy Hybrid units detonate a Nuke upon death.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">5</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>All hybrids detonate a nuke. There is a 2-second delay before a nuke detonates if the dead hybrid is a Hybrid Nemesis or a Moebius Hybrid A from Part and Parcel, 1-second delay otherwise.</p>
    <p>If the hybrid is a Hybrid destroyer, it detonates a small nuke. All other hybrids detonate a large nuke. Nukes deal a base damage of 750 (950 vs structures) within radius #1, 50% of base damage within radius #2, and 25% of base damage within radius #3 as shown in the table below:</p>
    <table class="dataTable centered">
        <thead>
            <tr>
                <th>Nuke Type</th>
                <th>Radius #1</th>
                <th>Radius #2</th>
                <th>Radius #3</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Small</td>
                <td>2</td>
                <td>2.5</td>
                <td>3</td>
                <td><img src="/images/mutatordata/smallnuke.jpg" alt="Range of a Small Nuke"></td>
            </tr>
            <tr>
                <td>Normal</td>
                <td>4</td>
                <td>6</td>
                <td>8</td>
                <td><img src="/images/mutatordata/normalnuke.jpg" alt="Range of a Normal Nuke"></td>
            </tr>
        </tbody>
    </table>
    
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Hybrid Nukes apply the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Hybrids will only trigger Mutually Assured Destruction</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Hybrid Nukes can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Hybrids spawned from Gift Exchange detonate Hybrid Nukes when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Hybrids do not detonate Hybrid Nukes when taking fatal damage and respawning.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Hybrids spawned from Civilians detonate Hybrid Nukes when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Hybrids spawned from Void Rifts detonate Hybrid Nukes when they die.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
