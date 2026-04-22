<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Patch Data</title>
  <meta name="description" content="Data-mined patch data for the latest Starcraft II Co-op Patch. This page contains both, official and hidden patch changes.">
  <meta name="keywords" content="Starcraft co-op patch data">
  <link rel="canonical" href="https://starcraft2coop.com/resources/patchdata">
  <style>
     .hidden{
         color:aquamarine;
     }
  </style>
  <?= startContent() ?>
    <h1>Starcraft Co-op Patch Data</h1>
    <div id="links">
        <h2>Sections on this Page</h2>
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
    <h2 id="core">Game Core (5.0.5) 2020-12-02</h2>
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
    <h2 id="coa">Chain of Ascension (v.177) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Ji'nara will now have voice lines if player's forces or Amon's forces get destroyed around her.</span></li>
    </ul>
    <h2 id="cod">Cradle of Death (v.1854) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Changed how player units are removed from the game during the Victory sequence.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="don">Dead of Night (v.873) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug where a ping marker would remain active even after the Special Infested was killed.</span></li>
    </ul>
    <h2 id="ll">Lock & Load (v.261) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Internal changes to Lock Attack Wave triggers to handle spawn-camping of attack waves.</span></li>
    </ul>
    <h2 id="mw">Malwarfare (v.8316) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Changed ownership of Bonus Objectives to a different Player number.</span></li>
        <li><span class="hidden">Fixed a bug that would cause a spawn-camped Suppression Tower to not trigger its death events.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="me">Miner Evacuation (v.627) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Internal changes for unhandled errors if one of the Eradicators were killed off.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="mo">Mist Opportunities (v.311) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug which would cause Terrazine Harvesting Bots to get stuck before they started moving towards Terrazine Geysers.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="oe">Oblivion Express (v.363) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug where Train Cars would not spawn correctly.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="pp">Part and Parcel (v.1007) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Fixed a bug where Train Cars would not spawn correctly.</span></li>
        <li><span class="hidden">Fixed a bug where attack waves would not spawn in the correct locaion.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="rtk">Rifts to Korhal (v.311) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="soa">Scythe of Amon (v.182) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Killing Hatcheries, Lairs and Hives around the map no longer automatically kills the larva around them.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="totp">Temple of the Past (v.155) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Void Thrasher spawn triggers now use Mission Time instead of AI Time.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="tvp">The Vermillion Problem (v.273) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Internal changes for unhandled errors if Molten Sal were being spawn-camped.</span></li>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="vl">Void Launch (v.231) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
    <h2 id="vt">Void Thrashing (v.501) 2020-02-24</h2>
    <ul>
        <li><span class="hidden">Modified regular Transmission to Victory Tranmission on mission Victory.</span></li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
