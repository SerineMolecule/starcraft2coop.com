<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Double Edged</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/doubleedged">
<?= startContent() ?>
    <h1>Mutator: Double Edged</h1>
    <p><img src="/images/mutators/doubleedged.png" alt="" /></p>
    <p>Damage dealt by your units and structures is dealt back to them, but then healed back over time.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">3</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>HP is healed at 1 HP per 0.1 seconds as per the in-game code. However, due to the design of this function, HP is only healed at roughly 8HP per second on average. Only the unit that deals damage gets impacted by Double Edged. For example, Carriers are not affected, but their Interceptors are. Units within transports will be safe from the mutator if they are picked up.</p>
    <p>Double Edged has an interesting interaction with Life Leech effects on units, such as those from Dehaka's Gene Mutations. Damage that is dealt by Double Edged is also counted towards damage dealt. That is, if a unit deals 100 damage to an enemy unit, it deals 100 damage to itself, and therefore, a total of 200 damage is counted for the Life Leech effect. This results in 40 life heal and 100 life healed over time.</p>
    <ul>
        <li>Abathur: Units with 100 or more Biomass can ignore Double Edged damage.</li>
        <li>Alarak: Units (including Alarak) may be loaded into a War Prism as soon as they attack or use their abilities to prevent damage through Double Edged.</li>
        <li>Artanis: Arkship Commandant Unbound Fanatics Plasma Waves kill themselves when they deal damage, severely reducing Unbound Fanatic effectiveness.</li>
        <li>Artanis: Shield Overcharge can block damage dealt by Double Edged.</li>
        <li>Dehaka: Dakrun and any Tyrannozors with the Spiked Hide mutation will kill themselves due to the damage reflect very quickly (within 2 seconds).</li>
        <li>Fenix: Conservator's Fields can be used to reduce the damage taken by Double Edged.</li>
        <li>Kerrigan: Kerrigan's current Mutating Carapace gets consumed by Double Edged, before the new Mutating Carapace (from the damage dealt) gets added.</li>
        <li>Mengsk: Units inside Supply Bunkers do not take damage from Double Edged.</li>
        <li>Nova: Nova's Defensive Drones' Defensive Matrix can block damage dealt by Double Edged.</li>
        <li>Raynor: Units inside Bunkers do not take damage from Double Edged.</li>
        <li>Stetmann: Stetmann's HUGS Overload can block damage dealt by Double Edged.</li>
        <li>Swann: Swann's Science Vessels' Defensive Matrix can block damage dealt by Double Edged.</li>
        <li>Tychus: Tychus' Medivac Pickup can be used on the Odin after it fires its missile to protect it from taking damage when the missile hits. The same applies to all Outlaw abilities.</li>
        <li>Zagara: Zagara's Baneling Barrage does damage to Zagara if it hits structures. However, it can be used against units, without dealing damage back to Zagara.</li>
        <li>Zeratul: Void Apparitions that are created by the Ambushers are considered units themselves. Therefore, Ambushers do not take damage from Double-Edged when they blink.</li>
        <li>Zeratul: Tornadoes created by Herald of the Void do not deal damage to Zeratul.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/blackdeath.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/blackdeath">Black Death</a></td><td>Units with Black Death will die twice as fast with Double Edged active.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/eminentdomain.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/eminentdomain">Eminent Domain</a></td><td>Turrets can be captured by Amon if they deal too much damage to themselves.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/fear.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/fear">Fear</a></td><td>Damage dealt by Double Edged does not trigger Fear.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/lifeleech.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/lifeleech">Life Leech</a></td><td>Damage dealt by Double Edged does not trigger Life Leech.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Damage dealt by Double Edged does not trigger Transmutation.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
