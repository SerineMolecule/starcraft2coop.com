<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Patch Data</title>
  <meta name="description" content="Data-mined patch data for the latest Starcraft II Co-op Patch. This page contains both, official and hidden patch changes.">
  <meta name="keywords" content="Starcraft co-op patch data">
  <link rel="canonical" href="https://starcraft2coop.com/resources/patchdata">
  <style>
     .hidden{
         color:aquamarine;
     }
  </style>
  </head>
<body>
<div id="header"><img src="/images/mainpageheader.png" alt="Starcraft II Co-op Logo">
</div>
<div id="menu"><?php include("../menu.php"); ?></div>
<div id="content">
    <h1>Starcraft Co-op Patch Data</h1>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#core">Game Core</a></p>
        <p><a href="#coa">Chain of Ascension</a></p>
        <p><a href="#cod">Cradle of Death</a></p>
        <p><a href="#don">Dead of Night</a></p>
        <p><a href="#ll">Lock & Load</a></p>
        <p><a href="#mw">Malwarfare</a></p>
        <p><a href="#me">Miner Evacuation</a></p>
        <p><a href="#mo">Mist Opportunities</a></p>
        <p><a href="#oe">Oblivion Express</a></p>
        <p><a href="#pp">Part and Parcel</a></p>
        <p><a href="#rtk">Rifts to Korhal</a></p>
        <p><a href="#soa">Scythe of Amon</a></p>
        <p><a href="#totp">Temple of the Past</a></p>
        <p><a href="#tvp">The Vermillion Problem</a></p>
        <p><a href="#vl">Void Launch</a></p>
        <p><a href="#vt">Void Thrashing</a></p>
    </div>
    <p><span class="hidden">Text in green denote changes not listed in the patch notes.</span></p>
    <?php
    include("../ad1.php");
    ?>
    <a id="core"></a><h2>Game Core (5.0.5) 2020-12-02</h2>
    <ul>
        <li>Commander Changes:
            <ul>
                <li>Zagara
                    <ul>
                        <li>Mastery sets have been fixed and now work correctly after games.</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <?php
    include("../ad2.php");
    ?>
    <a id="coa"></a><h2>Chain of Ascension (v.177) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Ji'nara will now have voice lines if player's forces or Amon's forces get destroyed around her.</span></li>
    </ul>
    <a id="cod"></a><h2>Cradle of Death (v.1854) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Changed how player units are removed from the game during the Victory sequence.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="don"></a><h2>Dead of Night (v.873) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug where a ping marker would remain active even after the Special Infested was killed.</span></li>
    </ul>
    <a id="ll"></a><h2>Lock & Load (v.261) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Internal changes to Lock Attack Wave triggers to handle spawn-camping of attack waves.</span></li>
    </ul>
    <a id="mw"></a><h2>Malwarfare (v.8316) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Changed ownership of Bonus Objectives to a different Player number.</span></li>
        <li><span class="hidden">Fixed a bug that would cause a spawn-camped Suppression Tower to not trigger its death events.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="me"></a><h2>Miner Evacuation (v.627) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Internal changes for unhandled errors if one of the Eradicators were killed off.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="mo"></a><h2>Mist Opportunities (v.311) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug which would cause Terrazine Harvesting Bots to get stuck before they started moving towards Terrazine Geysers.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="oe"></a><h2>Oblivion Express (v.363) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug where Train Cars would not spawn correctly.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="pp"></a><h2>Part and Parcel (v.1007) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug where Train Cars would not spawn correctly.</span></li>
        <li><span class="hidden">Fixed a bug where attack waves would not spawn in the correct locaion.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="rtk"></a><h2>Rifts to Korhal (v.311) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="soa"></a><h2>Scythe of Amon (v.182) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Killing Hatcheries, Lairs and Hives around the map no longer automatically kills the larva around them.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="totp"></a><h2>Temple of the Past (v.155) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Void Thrasher spawn triggers now use Mission Time instead of AI Time.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="tvp"></a><h2>The Vermillion Problem (v.273) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Internal changes for unhandled errors if Molten Sal were being spawn-camped.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="vl"></a><h2>Void Launch (v.231) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <a id="vt"></a><h2>Void Thrashing (v.501) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <?php
    include("../ad3.php");
    ?>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
