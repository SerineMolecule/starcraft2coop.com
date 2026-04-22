<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Diffusion</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/diffusion">
<?= startContent() ?>
    <h1>Mutator: Diffusion</h1>
    <p><img src="/images/mutators/diffusion.png" alt="" /></p>
    <p>Damage dealt to enemies is split evenly across all nearby units, including your own.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>50% of the damage you deal is split equally across all units within 5 range. This effect will only apply if the unit survives damage that is being dealt. Oneshotting a unit will not trigger Diffusion.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Mengsk: Units inside Supply Bunkers do not take damage from Diffusion.</li>
        <li>Nova: Nova's Defensive Drones' Defensive Matrix can block damage dealt by Diffusion.</li>
        <li>Raynor: Units inside Bunkers do not take damage from Diffusion.</li>
        <li>Stetmann: Stetmann's HUGS Overload can block damage dealt by Diffusion.</li>
        <li>Swann: Swann's Science Vessels' Defensive Matrix can block damage dealt by Diffusion.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Turrets can be captured by Amon if they deal too much damage to themselves.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Damage dealt by Diffusion can trigger Fear.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Diffusion applies to all units spawned from Gift Exchange.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Damage dealt by Diffusion counts as Life Leech for the unit attacked.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/polarity.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/polarity">Polarity</a></td><td>Diffusion damages all units regardless of their Polarity.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Damage dealt by Diffusion can trigger Transmutation on enemy units.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
