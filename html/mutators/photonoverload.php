<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Photon Overload</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/photonoverload">
<?= startContent() ?>
    <h1>Mutator: Photon Overload</h1>
    <p><img src="/images/mutators/photonoverload.png" alt="" /></p>
    <p>All enemy structures attack nearby hostile units.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">1</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>It gets cast on any structure that takes damage (shield or life). Deals 20 damage to a single unit within 10 range every 1.25 seconds and lasts for 15 seconds.</p>
    
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/concussiveattacks.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/concussiveattacks">Concussive Attacks</a></td><td>Photon Overload applies the Concussive Attacks debuff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Photon Overload can apply the Fear effect.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon's Karax's spawned structures will have Photon Overload applied when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>The Laser Drill does not get Photon Overcharge when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/longrange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/longrange">Long Range</a></td><td>Photon Overload gets increased range with Long Range.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/mineralshields.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/mineralshields">Mineral Shields</a></td><td>Mineral Shields will have Photon Overload applied when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/poweroverwhelming.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/poweroverwhelming">Power Overwhelming</a></td><td>Point Defense Drones spawned from Power Overwhelming will gain Photon Overcharge when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Void Rifts do not get Photon Overcharge when damaged. </td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
