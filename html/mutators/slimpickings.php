<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Slim Pickings</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/slimpickings">
<?= startContent() ?>
    <h1>Mutator: Slim Pickings</h1>
    <p><img src="/images/mutators/slimpickings.png" alt="" /></p>
    <p>Player worker units gather resources at a reduced rate, but resource pickups spawn throughout the map.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">5</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>All mineral patches contain a maximum of 1500 minerals per patch. Automated refineries, assimilators, MULEs and workers will all harvest 1 resource per tick/trip.</p>
    <p>Resource pickups spawn every 5.4 seconds before the 3-minute mark, after which they will spawn every 7 seconds. Each pickup contains either 50 minerals or 50 gas. A spawn will either contain two mineral pickups, or 1 mineral pickup and 1 gas pickup. They can only be picked up by ground units.</p>
    <p>Every other spawn, a pickup will spawn anywhere on map, while the other will only spawn within 30 range of the starting location. This only occurs before the 3-minute mark, after which pickups will never be limited to spawning at the starting location.</p>
    
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/chaosstudios.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/chaosstudios">Chaos Studios</a></td><td>Mineral patches will have their total mineral count permanently reduced, even after Slim Pickings  cycles out.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/naughtylist.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/naughtylist">Naughty List</a></td><td>Turkey kills increase the Naughty List count.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
