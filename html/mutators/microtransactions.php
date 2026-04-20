<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Micro Transactions</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/microtransactions">
<?= startContent() ?>
    <h1>Mutator: Micro Transactions</h1>
    <p><img src="/images/mutators/microtransactions.png" alt="" /></p>
    <p>Giving commands to your units costs resources based on the unit's cost.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">5</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">Yes</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">Yes</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Hero units, top bar abilities and Tychus outlaws all cost 10 minerals and 5 gas to issue commands to. The cost of issue a command to a regular unit depends on its actual unit cost and supply cost. For gasless units, the cost is 2 x its supply in minerals. For gas units, it's 1 x its supply in gas and minerals. Note that if you do not have the resources, issuing orders is free. However, if you have no gas, then Micro Transaction mineral cost will be doubled.</p>
    <p>Costs will only be applied if commands are issued to a unit. Therefore, units following another unit will only incur the initial cost to set them on follow. When that unit moves, no costs will be charged for all units following that unit.</p>
    <p>If your ally leaves, commands issued to their units will also not be free.</p>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td>No interactions found.</td></tr>
    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
