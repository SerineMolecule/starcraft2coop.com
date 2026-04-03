<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Order of Death Prevention Effects</title>
  <meta name="description" content="Order of Death Prevention Effect Triggers in Starcraft 2 Co-op">
  <meta name="keywords" content="Starcraft co-op guides death prevention effect order">
  <link rel="canonical" href="https://starcraft2coop.com/resources/deathprevention">
  <style>
    table td:first-child{
        text-align:center;
    }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Order of Death Prevention Effects</h1>
    <?php
    include("../scripts/reporterror.php");?>
    <h2>Summary</h2>
    <p>Death Prevention Effects are effects that stop a unit from dying. Examples of these are <a href="/commanders/artanis">Artanis' Guardian Shell</a> and <a href="/commanders/kerrigan">Kerrigan's Torrasque Strain Ultralisk Passive</a>. When multiple Death Prevention Effects are active, it is difficult to predict what order they will trigger. The order of Death Prevention Effects is shown in the following section.</p>
    <p>For a little more context, this page was created to act as a supplement to the following video:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/mTKnkozTVuI" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h2>Order</h2>
    <table>
        <thead>
            <tr>
                <th>Icon</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <img src="/images/deathprevention/guardianshell.png" alt="Guardian Shell">
                </td>
                <td><a href="/commanders/artanis">Artanis'</a> Guardian Shell</td>
                <td>Commander Passive</td>
                <td>Upon taking fatal damage, friendly units become invulnerable for a short time, escaping death and restoring 15% life and shields. The same unit cannot be shielded again for 4 minutes.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/torrasqueultralisk.png" alt="Torrasque Ultralisk">
                </td>
                <td><a href="/commanders/kerrigan">Kerrigan's</a> Torrasque Ultralisk</td>
                <td>Unit Passive</td>
                <td>Heavy assault beast. Has an area-damage cleave attack. When killed, can be revived. Cooldown: 60 seconds.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/primalreconstitution.png" alt="Primal Reconstitution">
                </td>
                <td><a href="/commanders/dehaka">Dehaka's</a> Primal Mutalisk Primal Reconstitution</td>
                <td>Unit Upgrade</td>
                <td>Primal Mutalisks revive on death after a short time. Cannot occur more than once every 60 seconds.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/reconstruction.png" alt="Reconstruction">
                </td>
                <td><a href="/commanders/karax">Karax's</a> Sentinel Reconstruction</td>
                <td>Unit Upgrade</td>
                <td>Sentinels are revived when killed. This effect can only occur once every 120 seconds.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/backtotheshadows.png" alt="Back to the Shadows">
                </td>
                <td><a href="/commanders/zeratul">Zeratul's</a> Void Templar Back to the Shadows</td>
                <td>Unit Passive</td>
                <td>When this unit takes fatal damage, it retreats to the Void and regenerates its health and shields over 10 seconds. Cannot occur more than once every 180 seconds.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/emergencyrecall.png" alt="Emergency Recall">
                </td>
                <td><a href="/commanders/vorazun">Vorazun's</a> Emergency Recall</td>
                <td>Commander Passive</td>
                <td>Upon taking fatal damage, friendly cloaked or burrowed units are recalled to their owner's primary structure. This effect cannot occur more than once every 4 minutes.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/criticalresponsesystem.png" alt="Critical Response System">
                </td>
                <td><a href="/commanders/tychus">Tychus'</a> Cannonball Critical Response System</td>
                <td>Unit Upgrade</td>
                <td>Allows Cannonball to become immune to damage for 5 seconds and restores all his life when he takes fatal damage. Cannot occur more than once every 60 seconds.</td>
            </tr>
            <tr>
                <td>
                    <img src="/images/deathprevention/phoenixprotocol.png" alt="Phoenix Protocol">
                </td>
                <td><a href="/commanders/mengsk">Mengsk's</a> Sky Fury Phoenix Protocol</td>
                <td>Rank Upgrade</td>
                <td>When this unit takes fatal damage, the Sky Fury transforms to Fighter mode and temporarily gains a barrier that absorbs 400 damage for 15 seconds. Can only occur once every 90 seconds.</td>
            </tr>
        </tbody>
    </table>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
