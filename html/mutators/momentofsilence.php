<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Moment of Silence</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/momentofsilence">
<?= startContent() ?>
    <h1>Mutator: Moment of Silence</h1>
    <p><img src="/images/mutators/momentofsilence.png" alt="" /></p>
    <p>When a Heroic enemy dies, all player units around it will reflect on their transgressions, leaving them temporarily unable to attack or use abilities.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">2</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Moment of Silence is cast within 8 range of the dead unit. It has a 12-second duration.</p>
    <p>If the hybrid is a Hybrid Nemesis, there is a 2-second delay before the effect is applied. Otherwise, there is a 1-second delay.</p>
    <h2 id="commanderspecifictips">Commander-specific Tips</h2>
    <ul>
        <li>Dehaka: Dehaka's Pack Leaders are Map Bosses and are therefore immune to Moment of Silence.</li>
        <li>Kerrigan: Omega Worms can be used to dodge the Moment of Silence Debuff before it triggers.</li>
        <li>Nova: Tactical Airlift can be used to dodge the Moment of Silence Debuff before it triggers.</li>
        <li>Tychus: Medivac Pickup can be used to dodge the Moment of Silence Debuff before it triggers.</li>
    </ul>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/giftexchange.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/giftexchange">Gift Exchange</a></td><td>Hybrids spawned from Gift Exchange trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/heroesfromthestorm.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/heroesfromthestorm">Heroes from the Storm</a></td><td>Amon Heroes trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/justdie.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/justdie">Just Die</a></td><td>Units do not trigger Moment of Silence when taking fatal damage and respawning.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/killbots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/killbots">Kill Bots</a></td><td>Kill Bots trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/propagators.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/propagators">Propagators</a></td><td>Propagators trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/transmutation.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/transmutation">Transmutation</a></td><td>Transmuted units which are now Hybrids trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/trickortreat.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/trickortreat">Trick or Treat</a></td><td>Hybrids spawned from Civilians trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/turkeyshoot.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/turkeyshoot">Turkey Shoot</a></td><td>The Turking triggers Moment of Silence when it dies.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/voidrifts.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/voidrifts">Void Rifts</a></td><td>Hybrids spawned from Void Rifts trigger Moment of Silence when they die.</td></tr>
        <tr><td style="white-space:nowrap"><img src="/images/mutators/boombots.png" height="25" width="25" style="vertical-align:middle"> <a href="/mutators/boombots">Boom Bots</a></td><td>Boom Bots do not trigger Moment of Silence when they die.</td></tr>

    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
