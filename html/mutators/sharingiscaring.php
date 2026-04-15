<?php

require_once "../wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutator - Sharing is Caring</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/sharingiscaring">
<?= startContent() ?>
    <h1>Mutator: Sharing is Caring</h1>
    <p><img src="/images/mutators/sharingiscaring.png" alt="" /></p>
    <p>Supply is shared between you and your partner, and units from both armies contribute to your combined supply cap.</p>
    <table>
        <tr><th align="right">Difficulty points</th><td align="left">0</td></tr>
        <tr><th align="right">Available in custom</th><td align="left">No</td></tr>
        <tr><th align="right">Rollable in Chaos Studios</th><td align="left">No</td></tr>
    </table>
    <h2 id="detailedmutatorinformation">Detailed Mutator Information</h2>
    <p>Used supply is shared between both players. However, total supply caps are still player-based. Therefore, regular commanders will still be limited by the number of Pylons/Supply Depots/Overlords that they have. Max supply commanders will still have access to their normal supply cap. However, both players' supplies will be affected when a unit is produced on either side.</p>
    <p>Commanders with a supply cap of 100 can suffer greatly with this mutator. If they are paired up with a 200 supply cap commander who consumed over 100 supply, the 100 Supply cap commander will be unable to produce any units which cost supply until the total consumed supply falls below 100.</p>
    <h2 id="interactions">Mutator Interactions</h2>
    <table>
        <tr><td>No interactions found.</td></tr>
    </table>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
