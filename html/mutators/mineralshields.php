<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Mineral Shields</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/mineralshields">
<?= startContent() ?>
    <h1>Mutator: Mineral Shields</h1>
    <p><img src="/images/mutators/mineralshields.png" alt="" /></p>
    <p>Mineral clusters at player bases are periodically encased in a shield which must be destroyed for gathering to continue.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">2</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>The first set of mineral shields will appear at 2:40. Following mineral shields will appear every 2:00. Each mineral patch has a 15% chance of getting shielded. This percentage goes up by 5% for every round of Mineral Shields.</p>
    <p>Each Mineral shield has 50HP and lasts for 60 seconds. Mineral shields do not get auto-targeted, so you will need to manually target them to destroy them.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Han/Horner: Two sets of Mag-mines can clear out all the minerals shields that spawn on a mineral line.</li>
        <li>Stukov: Patrol a Diamondback with the Caustic Mucus upgrade behind the mineral line to clear the shields automatically.</li>
        <li>Zagara: Place Bile Launchers behind mineral lines so their bombardments can clear Mineral Shields automatically.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/barrier.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/barrier">Barrier</a></td><td>Mineral Shields get the Barrier buff.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/chaosstudios.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/chaosstudios">Chaos Studios</a></td><td>Mineral Shields will always spawn on all mineral patches.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fatalattraction.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fatalattraction">Fatal Attraction</a></td><td>Mineral Shields trigger Fatal Attraction when destroyed or when they expire.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/laserdrill.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/laserdrill">Laser Drill</a></td><td>Mineral Shields provide vision for the Laser Drill.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Mineral Shield kills increase the Naughty List count.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/photonoverload.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/photonoverload">Photon Overload</a></td><td>Mineral Shields will have Photon Overload applied when damaged.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Mineral Shields all have Polarity applied to them.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
