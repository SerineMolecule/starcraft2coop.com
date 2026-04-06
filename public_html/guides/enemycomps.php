<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Enemy Compositions</title>
  <meta name="description" content="Starcraft 2 Co-op Enemy Compositions. Learn about Hybrids and the different units in Amon's attack waves.">
  <meta name="keywords" content="Starcraft co-op guides enemy compositions">
  <link rel="canonical" href="https://starcraft2coop.com/guides/enemycomps">
  <script src="/scripts/preload.js"></script>
  <style>
    @media (min-width: 701px){
        #compDiv{
            width:500px;
            height:500px;
            display:inline-block;
            margin-top:50px;
        }
        .unitSkills td:nth-child(2), .unitSkills td:nth-child(4),
        .unitSkills th:nth-child(2), .unitSkills th:nth-child(4){
            width:1%;
            white-space: nowrap;
        }
    }
    @media (max-width: 700px){
        #compDiv{
            width:250px;
            height:250px;
            display:inline-block;
            margin-top:50px;
        }
        #compDiv img{
            max-width:250px;
        }
        .unitSkills th:nth-child(1),.unitSkills td:nth-child(1)
        {
            display:none;
        }
    }
    .techLevelTable td:first-child{
        text-align:center;
    }
    .techLevelTable td{
        vertical-align:top;
    }
    .techLevelTable thead{
        text-align:center;
    }
    .techLevelTable img{
        width:30px;
        background-color:black;
        border-radius:30px;
    }
    .centered {
        text-align:center
    }
    #compPreview{
        position:absolute;
    }
    #tooltip{
        position:absolute;
        background-color:khaki;
        color:black;
        font-size:0.8em;
        display:none;
        z-index:1;
        padding:5px;
        border-radius:5px;
    }
    .leftImage{
        overflow:auto;
        margin-bottom:25px;
    }
    .leftImage div:first-child{
        float:left;
        margin-right:25px;
    }
    .imageContainer img{
        border-radius:50%;
        padding-top:15px;
    }
    .faded{
        opacity:0.5;
    }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Enemy Compositions: Units in Attack Waves and Hybrid Data</h1>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#genNotes">General Notes</a></p>
        <p><a href="#race">Enemy Race</a></p>
        <p><a href="#composition">Composition</a></p>
        <p><a href="#tech">Tech Level</a></p>
        <p><a href="#strength">Strength Level</a></p>
        <p><a href="#limits">Unit Limits</a></p>
        <p><a href="#demo">Putting it All Together</a></p>
        <p><a href="#upgrades">Upgrades</a></p>
        <p><a href="#hybrids">Hybrids</a></p>
    </div>
    <a id="genNotes"></a><h2>General Notes</h2>
    <p>Throughout any mission, you will need to deal with attack waves that target your base, expansion or your objective. There are a number of factors that affect the type and quantity of units in these attack waves. These factors are:</p>
    <ul>
        <li><b>Enemy Race</b>: This is the most obvious one. Units in attack waves will belong to the race of the enemy you're facing against. The only exception to this rule is on <a href="/missions/cradleofdeath">Cradle of Death</a>, where your truck will get attacked by units of a second race as well.</li>
        <li><b>Composition</b>: Enemy races have certain pre-determined compositions at the start of the game. The composition will determine which units you will see in attack waves. For example, if you are dealing with a Bio Terran composition, you won't see Battlecruisers in attack waves.</li>
        <li><b>Tech Level</b>: The Tech Level determines the highest tier of units you will face. For example, attack waves of low Tech Levels might only include Zerglings. However, higher Tech Levels may include Brood Lords. Tech Levels range from 1-7.</li>
        <li><b>Strength Level</b>: The Strength level affects the number of units in the attack wave. Strength Levels range from 1-7.</li>
    </ul>
    <p>As the mission progresses, both, Tech Level and Strength Level of the attack waves increase, making the attack waves strong and more potent.</p>
    <a id="race"></a><h2>Enemy Race</h2>
    <p>You will face enemies of a single race (Protoss, Terran or Zerg) in a mission (barring <a href="/missions/cradleofdeath">Cradle of Death</a>). This race is predetermined at the start of the game. To determine if the enemy race is Zerg, press Alt + T. If the enemy race is Zerg, you will see creep spread on the minimap.</p>
    <p>On <a href="/missions/cradleofdeath">Cradle of Death</a>, only attack waves that attack your truck will contain units of a second race.</p>
    <a id="composition"></a><h2>Composition</h2>
    <p>The Protoss compositions you can face (along with the strongest tech units) are as follows:</p>
    <ul>
        <li><b>Gateway:</b> A composition that relies mostly on gateway units for AoE's and damage.</li>
        <li><b>RoboColossus:</b> Uses Colossi for AoE's and sentries for controlling the enemy's army.</li>
        <li><b>RoboReaver:</b> A high damage composition made to destroy enemy bases quickly.</li>
        <li><b>SkytossCarrier:</b> A carrier-based composition to overwhelm enemy forces.</li>
        <li><b>SkytossTempest:</b> An air-siege build effective at taking down enemy structures.</li>
        <li><b>Techy:</b> Contains a mix of Protoss units from different tech buildings.</li>
        <li><b>Classic Protoss Ground:</b> Ground Protoss composition based on units in Brood War.</li>
        <li><b>Classic Protoss Air:</b> Air Protoss composition based on units in Brood War.</li>
    </ul>
    <p>The Terran compositions you can face (along with the strongest tech units) are as follows:</p>
    <ul>
        <li><b>BioMechStar:</b> A build focused on biological units backed up with some factory and air units.</li>
        <li><b>MechStarport:</b> A Mech Terran build, relying on Factory units.</li>
        <li><b>ShadowTech:</b> A build which attacks enemies from a distance.</li>
        <li><b>SkyTerran:</b> An air Terran build, relying on Starport units for damage.</li>
        <li><b>Classic Terran Bio:</b> Terran composition based on Biological units in Brood War.</li>
        <li><b>Classic Terran Mech:</b> Terran composition based on Mechanical units in Brood War.</li>
    </ul>
    <p>The Zerg compositions you can face (along with the strongest tech units) are as follows:</p>
    <ul>
        <li><b>Ground:</b> Uses Zerg ground units to lay siege to enemy bases.</li>
        <li><b>MutaLing:</b> A Mutalisk/Zergling-based composition.</li>
        <li><b>Swarmy:</b> A build that relies on overwhelming the enemy with units.</li>
        <li><b>Classic Zerg Ground:</b> Ground Zerg composition based on units in Brood War.</li>
        <li><b>Classic Zerg Air:</b> Air Zerg composition based on units in Brood War.</li>
    </ul>
    <p>Note that the above names do not appear on the enemy composition indicator in-game. The names used in-game are custom titles used to describe the composition. These titles will be listed in the following section.</p>
    <a id="tech"></a><h2>Tech Level</h2>
    <div id="tooltip">tooltip</div>
    <p>The Tech level determines how far up the Tech Tree the enemy is. Higher Tech Levels will result in more Tech Units present in the attack waves. Tech Levels range on a scale from 1-7.</p>
    <p>Hover over a unit's icon to show its name.</p>
    <p>The Protoss units in attack waves across Tech levels is shown below:</p>
    <div class="tableContainer">
        <table class="techLevelTable">
            <thead>
                <tr>
                    <th>Tech Level</th>
                    <th><span class="faded">Gateway</span><br>Masters and Machines</th>
                    <th><span class="faded">RoboColossus</span><br>Towering Walkers</th>
                    <th><span class="faded">RoboReaver</span><br>Disruptive Artillery</th>
                    <th><span class="faded">SkytossCarrier</span><br>Hope of the Khalai</th>
                    <th><span class="faded">SkytossTempest</span><br>Siege of Storms</th>
                    <th><span class="faded">Techy</span><br>Shadow Disruption</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/phoenix.png" alt="Phoenix"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"></td>
                    <td><img src="/images/comps/unitimages/immortal.png" alt="Immortal"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/immortal.png" alt="Immortal"></td>
                    <td><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/scout.png" alt="Scout"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/phoenix.png" alt="Phoenix"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/comps/unitimages/immortal.png" alt="Immortal"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"></td>
                    <td><img src="/images/comps/unitimages/immortal.png" alt="Immortal"><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/immortal.png" alt="Immortal"><img src="/images/comps/unitimages/scout.png" alt="Scout"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/oracle.png" alt="Oracle"></td>
                    <td><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/phoenix.png" alt="Phoenix"><img src="/images/comps/unitimages/oracle.png" alt="Oracle"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/darktemplar.png" alt="Dark Templar"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"><img src="/images/comps/unitimages/archon.png" alt="Archon"></td>
                    <td><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/colossus.png" alt="Colossus"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/disruptor.png" alt="Disruptor"><img src="/images/comps/unitimages/reaver.png" alt="Reaver"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/voidray.png" alt="Void Ray"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/voidray.png" alt="Void Ray"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/phoenix.png" alt="Phoenix"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/darktemplar.png" alt="Dark Templar"></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/colossus.png" alt="Colossus"><img src="/images/comps/unitimages/archon.png" alt="Archon"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/colossus.png" alt="Colossus"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/disruptor.png" alt="Disruptor"><img src="/images/comps/unitimages/reaver.png" alt="Reaver"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/oracle.png" alt="Oracle"><img src="/images/comps/unitimages/carrier.png" alt="Carrier"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/oracle.png" alt="Oracle"><img src="/images/comps/unitimages/tempest.png" alt="Tempest"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/darktemplar.png" alt="Dark Templar"><img src="/images/comps/unitimages/disruptor.png" alt="Disruptor"></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/stalker.png" alt="Stalker"><img src="/images/comps/unitimages/colossus.png" alt="Colossus"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"><img src="/images/comps/unitimages/immortal.png" alt="Immortal"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/colossus.png" alt="Colossus"><img src="/images/comps/unitimages/immortal.png" alt="Immortal"></td>
                    <td><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/immortal.png" alt="Immortal"><img src="/images/comps/unitimages/disruptor.png" alt="Disruptor"><img src="/images/comps/unitimages/reaver.png" alt="Reaver"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/oracle.png" alt="Oracle"><img src="/images/comps/unitimages/carrier.png" alt="Carrier"><img src="/images/comps/unitimages/voidray.png" alt="Void Ray"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/oracle.png" alt="Oracle"><img src="/images/comps/unitimages/tempest.png" alt="Tempest"><img src="/images/comps/unitimages/voidray.png" alt="Void Ray"></td>
                    <td><img src="/images/comps/unitimages/adept.png" alt="Adept"><img src="/images/comps/unitimages/phoenix.png" alt="Phoenix"><img src="/images/comps/unitimages/sentry.png" alt="Sentry"><img src="/images/comps/unitimages/darktemplar.png" alt="Dark Templar"><img src="/images/comps/unitimages/disruptor.png" alt="Disruptor"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="tableContainer">
        <table class="techLevelTable">
            <thead>
                <tr>
                    <th>Tech Level</th>
                    <th><span class="faded">GroundClassic</span><br>Vanguard of Aiur</th>
                    <th><span class="faded">AirClassic</span><br>Fleet of the Matriarch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/dragoon.png" alt="Dragoon"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/dragoon.png" alt="Dragoon"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"></td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/corsair.png" alt="Corsair"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/comps/unitimages/dragoon.png" alt="Dragoon"><img src="/images/comps/unitimages/reaver.png" alt="Reaver"></td>
                    <td><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/corsair.png" alt="Corsair"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"><img src="/images/comps/unitimages/archon.png" alt="Archon"><img src="/images/comps/unitimages/reaver.png" alt="Reaver"></td>
                    <td><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/carrier.png" alt="Carrier"></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/dragoon.png" alt="Dragoon"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"><img src="/images/comps/unitimages/arbiter.png" alt="Arbiter"></td>
                    <td><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/carrier.png" alt="Carrier"><img src="/images/comps/unitimages/arbiter.png" alt="Arbiter"></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/comps/unitimages/zealot.png" alt="Zealot"><img src="/images/comps/unitimages/dragoon.png" alt="Dragoon"><img src="/images/comps/unitimages/hightemplar.png" alt="High Templar"><img src="/images/comps/unitimages/archon.png" alt="Archon"><img src="/images/comps/unitimages/reaver.png" alt="Reaver"><img src="/images/comps/unitimages/arbiter.png" alt="Arbiter"></td>
                    <td><img src="/images/comps/unitimages/scout.png" alt="Scout"><img src="/images/comps/unitimages/corsair.png" alt="Corsair"><img src="/images/comps/unitimages/carrier.png" alt="Carrier"><img src="/images/comps/unitimages/arbiter.png" alt="Arbiter"></td>
            </tbody>
        </table>
    </div>
    <p>The Terran units in attack waves across Tech levels is shown below. If a tech level contains more than one row, you'll get either one of the compositions:</p>
    <div class="tableContainer">
        <table class="techLevelTable">
            <thead>
                <tr>
                    <th>Tech Level</th>
                    <th><span class="faded">BioMechStar</span><br>Raiding Party</th>
                    <th><span class="faded">MechStarport</span><br>Machines of War</th>
                    <th><span class="faded">ShadowTech</span><br>Shadow Tech</th>
                    <th><span class="faded">SkyTerran</span><br>Dominion Battlegroup</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"></td>
                    <td><img src="/images/comps/unitimages/hellion.png" alt="Hellion"></td>
                    <td><img src="/images/comps/unitimages/reaper.png" alt="Reaper"></td>
                    <td><img src="/images/comps/unitimages/viking.png" alt="Viking"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/hellion.png" alt="Hellion"><br><img src="/images/comps/unitimages/warhound.png" alt="Warhound"><img src="/images/comps/unitimages/hellion.png" alt="Hellion"></td>
                    <td><img src="/images/comps/unitimages/reaper.png" alt="Reaper"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"></td>
                    <td><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/banshee.png" alt="Banshee"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/firebat.png" alt="Firebat"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/hellbat.png" alt="Hellbat"><br><img src="/images/comps/unitimages/warhound.png" alt="Warhound"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/hellbat.png" alt="Hellbat"></td>
                    <td><img src="/images/comps/unitimages/reaper.png" alt="Reaper"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"></td>
                    <td><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/marine.png" alt="Marine"><br><img src="/images/comps/unitimages/banshee.png" alt="Banshee"><img src="/images/comps/unitimages/marine.png" alt="Marine"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/ghost.png" alt="Ghost"><img src="/images/comps/unitimages/medivac.png" alt="Medivac"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/hellbat.png" alt="Hellbat"><img src="/images/comps/unitimages/widowmine.png" alt="Widow Mine"><br><img src="/images/comps/unitimages/warhound.png" alt="Warhound"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/hellbat.png" alt="Hellbat"><img src="/images/comps/unitimages/widowmine.png" alt="Widow Mine"></td>
                    <td><img src="/images/comps/unitimages/reaper.png" alt="Reaper"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"><br><img src="/images/comps/unitimages/reaper.png" alt="Reaper"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/cyclone.png" alt="Cyclone"></td>
                    <td><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/banshee.png" alt="Banshee"><img src="/images/comps/unitimages/marine.png" alt="Marine"><br><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"><img src="/images/comps/unitimages/marine.png" alt="Marine"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/medivac.png" alt="Medivac"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"><img src="/images/comps/unitimages/widowmine.png" alt="Widow Mine"><br><img src="/images/comps/unitimages/warhound.png" alt="Warhound"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"><img src="/images/comps/unitimages/widowmine.png" alt="Widow Mine"></td>
                    <td><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"><img src="/images/comps/unitimages/cyclone.png" alt="Cyclone"></td>
                    <td><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/banshee.png" alt="Banshee"><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/ghost.png" alt="Ghost"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/thor.png" alt="Thor"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"><img src="/images/comps/unitimages/widowmine.png" alt="Widow Mine"><br><img src="/images/comps/unitimages/warhound.png" alt="Warhound"><img src="/images/comps/unitimages/thor.png" alt="Thor"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"><img src="/images/comps/unitimages/widowmine.png" alt="Widow Mine"></td>
                    <td><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/cyclone.png" alt="Cyclone"></td>
                    <td><img src="/images/comps/unitimages/banshee.png" alt="Banshee"><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/marine.png" alt="Marine"><br><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/marine.png" alt="Marine"></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/ghost.png" alt="Ghost"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
                    <td><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/thor.png" alt="Thor"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
                    <td><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/marauder.png" alt="Marauder"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/cyclone.png" alt="Cyclone"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"></td>
                    <td><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/banshee.png" alt="Banshee"><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><br><img src="/images/comps/unitimages/viking.png" alt="Viking"><img src="/images/comps/unitimages/liberator.png" alt="Liberator"><img src="/images/comps/unitimages/raven.png" alt="Raven"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="tableContainer">
        <table class="techLevelTable">
            <thead>
                <tr>
                    <th>Tech Level</th>
                    <th><span class="faded">BioClassic</span><br>Classic Infantry</th>
                    <th><span class="faded">MechClassic</span><br>Classic Mech</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"></td>
                    <td><img src="/images/comps/unitimages/vulture.png" alt="Vulture"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"></td>
                    <td><img src="/images/comps/unitimages/vulture.png" alt="Vulture"><img src="/images/comps/unitimages/goliath.png" alt="Goliath"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/firebat.png" alt="Firebat"></td>
                    <td><img src="/images/comps/unitimages/vulture.png" alt="Vulture"><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/wraith.png" alt="Wraith"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"></td>
                    <td><img src="/images/comps/unitimages/vulture.png" alt="Vulture"><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/wraith.png" alt="Wraith"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/ghost.png" alt="Ghost"></td>
                    <td><img src="/images/comps/unitimages/vulture.png" alt="Vulture"><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/firebat.png" alt="Firebat"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/comps/unitimages/marine.png" alt="Marine"><img src="/images/comps/unitimages/medic.png" alt="Medic"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/ghost.png" alt="Ghost"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
                    <td><img src="/images/comps/unitimages/goliath.png" alt="Goliath"><img src="/images/comps/unitimages/siegetank.png" alt="Siege Tank"><img src="/images/comps/unitimages/battlecruiser.png" alt="Battlecruiser"><img src="/images/comps/unitimages/sciencevessel.png" alt="Science Vessel"></td>
            </tbody>
        </table>
    </div>
    <p>Some attack waves will have one of two unit types (denoted by the "or"). There is a 50% chance that either will appear in the attack wave, and only one type will appear per wave.</p>
    <p>The Zerg units in attack waves across Tech levels is shown below:</p>
    <div class="tableContainer">
        <table class="techLevelTable">
            <thead>
                <tr>
                    <th>Tech Level</th>
                    <th><span class="faded">Ground</span><br>Ravaging Infestation</th>
                    <th><span class="faded">MutaLing</span><br>Broodling Corruption</th>
                    <th><span class="faded">Swarmy</span><br>Explosive Threats</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"><img src="/images/comps/unitimages/zergling.png" alt="Zergling"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/baneling.png" alt="Baneling"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/baneling.png" alt="Baneling"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/aberration.png" alt="Aberration"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/viper.png" alt="Viper"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/ravager.png" alt="Ravager"><img src="/images/comps/unitimages/lurker.png" alt="lurker"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/aberration.png" alt="Aberration"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/swarmhost.png" alt="Swarm Host"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"><img src="/images/comps/unitimages/lurker.png" alt="lurker"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"><img src="/images/comps/unitimages/corruptor.png" alt="Corruptor"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/aberration.png" alt="Aberration"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/viper.png" alt="Viper"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/baneling.png" alt="Baneling"></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"><img src="/images/comps/unitimages/ravager.png" alt="Ravager"><img src="/images/comps/unitimages/ultralisk.png" alt="Ultralisk"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"><img src="/images/comps/unitimages/broodlord.png" alt="Brood Lord"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/swarmhost.png" alt="Swarm Host"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/viper.png" alt="Viper"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/baneling.png" alt="Baneling"></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/comps/unitimages/roach.png" alt="Roach"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"><img src="/images/comps/unitimages/ravager.png" alt="Ravager"><img src="/images/comps/unitimages/ultralisk.png" alt="Ultralisk"></td>
                    <td><img src="/images/comps/unitimages/corruptor.png" alt="Corruptor"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/infestor.png" alt="Infestor"><img src="/images/comps/unitimages/broodlord.png" alt="Brood Lord"></td>
                    <td><img src="/images/comps/unitimages/aberration.png" alt="Aberration"><img src="/images/comps/unitimages/swarmhost.png" alt="Swarm Host"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/viper.png" alt="Viper"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/baneling.png" alt="Baneling"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="tableContainer">
        <table class="techLevelTable">
            <thead>
                <tr>
                    <th>Tech Level</th>
                    <th><span class="faded">GroundClassic</span><br>Invasionary Swarm</th>
                    <th><span class="faded">AirClassic</span><br>Devouring Scourge</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/lurker.png" alt="Lurker"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/broodqueen.png" alt="Brood Queen"></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/lurker.png" alt="Lurker"></td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/guardian.png" alt="Guardian"></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/lurker.png" alt="Lurker"><img src="/images/comps/unitimages/broodqueen.png" alt="Brood Queen"></td>
                    <td><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/guardian.png" alt="Guardian"><img src="/images/comps/unitimages/devourer.png" alt="Devourer"></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/ultralisk.png" alt="Ultralisk"></td>
                    <td><img src="/images/comps/unitimages/mutalisk.png" alt="Mutalisk"><img src="/images/comps/unitimages/guardian.png" alt="Guardian"><img src="/images/comps/unitimages/devourer.png" alt="Devourer"><img src="/images/comps/unitimages/broodqueen.png" alt="Brood Queen"></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td><img src="/images/comps/unitimages/zergling.png" alt="Zergling"><img src="/images/comps/unitimages/hydralisk.png" alt="Hydralisk"><img src="/images/comps/unitimages/lurker.png" alt="Lurker"><img src="/images/comps/unitimages/ultralisk.png" alt="Ultralisk"><img src="/images/comps/unitimages/broodqueen.png" alt="Brood Queen"></td>
                    <td><img src="/images/comps/unitimages/guardian.png" alt="Guardian"><img src="/images/comps/unitimages/devourer.png" alt="Devourer"><img src="/images/comps/unitimages/scourge.png" alt="Scourge"><img src="/images/comps/unitimages/broodqueen.png" alt="Brood Queen"></td>
            </tbody>
        </table>
        <p>Note that AirClassic Tech Level 4 features a different type of Guardian to the higher tech level waves. This Guardian has an attack speed of 3 instead of 2 featured in other waves, as well as a lower attack damage. As a result, this Guardian will attack slightly slower.</p>
    </div>
    <script>
        $(".techLevelTable img").on('mouseover',function(e){
            $("#tooltip").html("<b>" + $(this).attr("alt") + "</b>");
            $("#tooltip").show();
        });
        $(".techLevelTable img").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".techLevelTable img").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
    </script>
    <a id="strength"></a><h2>Strength Level</h2>
    <p>The Strength Level determines the quantity of units in the attack wave. The in-game generation of the attack waves is randomized. That is, while the Tech Level and Strength Level are fixed, there is a little bit of allowable variance in the attack wave composition. As a result, attack waves are not always the same. Some may have more Liberators, with fewer Cyclones, for instance.</p>
    <p>However, the Strength Level is linked to a resource cost for the attack wave. Attack waves will not exceed a certain resource cost, depending on the Strength Level. The below table shows the estimated maximum resource cost for each Strength Level.</p>
    <p>Attack Wave Strength Level Resource Costs:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Strength Level</th>
                <th>Maximum Resource Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>600</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1200</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2100</td>
            </tr>
            <tr>
                <td>4</td>
                <td>3200</td>
            </tr>
            <tr>
                <td>5</td>
                <td>5000</td>
            </tr>
            <tr>
                <td>6</td>
                <td>7200</td>
            </tr>
            <tr>
                <td>7</td>
                <td>9600</td>
            </tr>
        </tbody>
    </table>
    <a id="limits"></a><h2>Unit Limits</h2>
    <p>Attack waves have certain limits as to how many of a particular unit can appear. This strengthens the overall power of the attack wave because it prevents massing a single tech-unit which can easily be countered.</p>
    <p>Not all units have limits. The units that are limited are usually spellcasters. The list of limited units is below:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Unit</th>
                <th>Limit per Wave</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Corsair</td>
                <td>5</td>
            </tr>
            <tr>
                <td>High Templar</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Infestor</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Sentry</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Viper</td>
                <td>2</td>
            </tr>
        </tbody>
    </table>
    <a id="demo"></a><h2>Putting it All Together</h2>
    <p>You can use the demo below to see the impact of both, Tech Level and Strength Level on attack waves for all different compositions. Here, Strength Levels will match Tech Levels, as is common with most attack waves in the game.</p>
    <div id="compDemo">
        <form action='#'>
            <select id="enemyComp">
                <option value="gateway">Protoss Gateway</option>
                <option value="robocolossus">Protoss RoboColossus</option>
                <option value="roboreaver">Protoss RoboReaver</option>
                <option value="skytosscarrier">Protoss SkytossCarrier</option>
                <option value="skytosstempest">Protoss SkytossTempest</option>
                <option value="techy">Protoss Techy</option>
                <option value="groundclassicp">Protoss GroundClassic</option>
                <option value="airclassicp">Protoss AirClassic</option>
                <option value="biomechstar">Terran BioMechStar</option>
                <option value="mechstarport">Terran MechStarport</option>
                <option value="shadowtech">Terran ShadowTech</option>
                <option value="skyterran">Terran SkyTerran</option>
                <option value="bioclassic">Terran BioClassic</option>
                <option value="mechclassic">Terran MechClassic</option>
                <option value="groundzerg">Zerg Ground</option>
                <option value="mutaling">Zerg MutaLing</option>
                <option value="swarmy">Zerg Swarmy</option>
                <option value="groundclassicz">Zerg GroundClassic</option>
                <option value="airclassicz">Zerg AirClassic</option>
            </select>
            <select id="powerLevel">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </form>
        <div id="compDiv">
            <img id="compPreview" src="/images/comps/gateway1.jpg" alt="Enemy Composition Example">
        </div>
    </div>
    <script>
        var imgList=[];
        $("#enemyComp > option").each(function(){
            for(var i=1; i<8; i++){
                imgList.push('/images/comps/' + this.value + i + ".jpg");
            }
        });
        preload(imgList);

        var updateImage = function(){
            var oldImg = $('#compPreview');
            var img = new Image();
            img.src = '/images/comps/' + $("#enemyComp").val() + $("#powerLevel").val() + '.jpg';
            var newImg = $(img).hide();
            $('#compDiv').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(oldImg).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'compPreview');
            return false;
        };
        $("#enemyComp").change(function(){
            updateImage();
        });
        $("#powerLevel").change(function(){
            updateImage();
        });
    </script>
    <a id="upgrades"></a><h2>Upgrades</h2>
    <p>As the mission progresses, the AI will automatically complete research. This naturally scales up the difficulty of the mission as time goes on. The timings are listed below:</p>
    <h3>Protoss Upgrades</h3>
    <h4>Protoss Power Level Upgrades</h4>
    <div class="tableContainer">
        <table class="centered">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Ground Weapons</th>
                    <th>Ground Armor</th>
                    <th>Shields</th>
                    <th>Air Weapons</th>
                    <th>Air Armor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10:00</td>
                    <td>15:00</td>
                    <td>15:00</td>
                    <td>10:00</td>
                    <td>15:00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h4>Protoss Skill Research</h4>
    <table>
        <thead>
            <tr>
                <th>Research</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Colossus - Extended Thermal Lance</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Corsair - Disruption Web</td>
                <td>12:00</td>
            </tr>
            <tr>
                <td>Dragoon - Singularity Charge</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>High Templar - Psionic Storm</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Stalker - Blink</td>
                <td>8:00</td>
            </tr>
            <tr>
                <td>Zealot - Charge</td>
                <td>8:00</td>
            </tr>
        </tbody>
    </table>
    <h3>Terran Upgrades</h3>
    <h4>Terran Power Level Upgrades</h4>
    <div class="tableContainer">
        <table class="centered">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Infantry Weapons</th>
                    <th>Infantry Armor</th>
                    <th>Ship Weapons</th>
                    <th>Ship Armor</th>
                    <th>Vehicle Weapons</th>
                    <th>Vehicle Armor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10:00</td>
                    <td>15:00</td>
                    <td>10:00</td>
                    <td>15:00</td>
                    <td>10:00</td>
                    <td>15:00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>20:00</td>
                    <td>30:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h4>Terran Skill Research</h4>
    <table>
        <thead>
            <tr>
                <th>Research</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Banshee - Cloaking Field</td>
                <td>12:00</td>
            </tr>
            <tr>
                <td>Command Center - Orbital Command</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Cyclone - Mag-Field Accelerator</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Firebat - Stimpack</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Goliath - Ares-Class Targeting System</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Hellion - Infernal Pre-igniter</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Marauder - Concussive Shells</td>
                <td>8:00</td>
            </tr>
            <tr>
                <td>Marauder - Stimpack</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Marine - Combat Shield</td>
                <td>8:00</td>
            </tr>
            <tr>
                <td>Marine - Stimpack</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Science Vessel - Defensive Matrix</td>
                <td>0:00</td>
            </tr>
        </tbody>
    </table>
    <h3>Zerg Upgrades</h3>
    <h4>Zerg Power Level Upgrades</h4>
    <div class="tableContainer">
        <table class="centered">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Melee Attacks</th>
                    <th>Missile Attacks</th>
                    <th>Ground Carapace</th>
                    <th>Flyer Attacks</th>
                    <th>Flyer Carapace</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                    <td>0:00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>10:00</td>
                    <td>10:00</td>
                    <td>15:00</td>
                    <td>10:00</td>
                    <td>15:00</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                    <td>20:00</td>
                </tr>
            </tbody>
        </table>
    </div>
    <h4>Zerg Skill Research</h4>
    <table>
        <thead>
            <tr>
                <th>Research</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Baneling - Centrifugal Hooks</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Hydralisk - Muscular Augments</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Roach - Glial Reconstitution</td>
                <td>8:00</td>
            </tr>
            <tr>
                <td>Roach - Tunneling Claws</td>
                <td>12:00</td>
            </tr>
            <tr>
                <td>Ultralisk - Chitinous Plating</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Zergling - Adrenal Glands</td>
                <td>10:00</td>
            </tr>
            <tr>
                <td>Zergling - Metabolic Boost</td>
                <td>8:00</td>
            </tr>
        </tbody>
    </table>
    <a id="hybrids"></a><h2>Hybrids</h2>
    <p>Attack waves may be accompanied by Hybrids in varying numbers, depending on the mission. Hybrids are added to attack waves independent of enemy composition or Strength/Tech level. Instead, Hybrids are added to attack waves as part of the mission design. There are five different hybrids that may accompany attack waves. These are listed below, along with any abilities they may have.</p>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/comps/hybrids/hybriddestroyer.jpg" alt="Hybrid Destroyer">
            <p>Hybrid<br>Destroyer</p>
        </div>
        <div class="descContainer">
            <p>Deals damage over time using its Graviton Prison ability.</p>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/comps/hybrids/gravitonprison.png" alt="Graviton Prison"></td>
                        <td>Graviton Prison</td>
                        <td>Makes the target unit float in the air, disabling its abilities.</td>
                        <td>
                            <ul>
                                <li>Range: 8</li>
                                <li>Total Damage: 60</li>
                                <li>Time: 4s</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/comps/hybrids/hybridreaver.jpg" alt="Hybrid Reaver">
            <p>Hybrid<br>Reaver</p>
        </div>
        <div class="descContainer">
            <p>Can heal itself using its Consume DNA ability.</p>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/comps/hybrids/consumedna.png" alt="Consume DNA"></td>
                        <td>Consume DNA</td>
                        <td>Absorbs the target unit's life essence.</td>
                        <td>
                            <ul>
                                <li>Cooldown: 10s</li>
                                <li>Range: 5</li>
                                <li>Total Damage: 100</li>
                                <li>Heal: 50</li>
                                <li>Time: 1 second</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/comps/hybrids/hybridnemesis.jpg" alt="Hybrid Nemesis">
            <p>Hybrid<br>Nemesis</p>
        </div>
        <div class="descContainer">
            <p>Air Hybrid that can disable structures with its Phase Shift ability.</p>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/comps/hybrids/phaseshift.png" alt="Phase Shift"></td>
                        <td>Phase Shift</td>
                        <td>Causes the targeted unit to phase out for 10 seconds. Phased units are immune to all damage and most effects, but they are unable to attack or use abilities.</td>
                        <td>
                            <ul>
                                <li>Cooldown: 10s</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/comps/hybrids/hybridbehemoth.jpg" alt="Hybrid Behemoth">
            <p>Hybrid<br>Behemoth</p>
        </div>
        <div class="descContainer">
            <p>Units close to the hybrid can be slowed down.</p>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/comps/hybrids/constrictingslime.png" alt="Constricting Slime"></td>
                        <td>Constricting Slime</td>
                        <td>Sprays slime on nearby enemies, slowing them for 5 seconds.</td>
                        <td>
                            <ul>
                                <li>Cooldown: 15s</li>
                                <li>Range: 6</li>
                                <li>Total Damage: 5 (10 vs. Armored)</li>
                                <li>Reduction: 50%</li>
                                <li>Time: 5 seconds</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/comps/hybrids/consumedna.png" alt="Consume DNA"></td>
                        <td>Consume DNA</td>
                        <td>Absorbs the target unit's life essence.</td>
                        <td>
                            <ul>
                                <li>Cooldown: 10s</li>
                                <li>Range: 5</li>
                                <li>Total Damage: 100</li>
                                <li>Heal: 50</li>
                                <li>Time: 1 second</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="leftImage">
        <div class="imageContainer">
            <img src="/images/comps/hybrids/hybriddominator.jpg" alt="Hybrid Dominator">
            <p>Hybrid<br>Dominator</p>
        </div>
        <div class="descContainer">
            <p>Powerful spell-casting Hybrid.</p>
            <p>Skills:</p>
            <table class="unitSkills">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src="/images/comps/hybrids/plasmablast.png" alt="Plasma Blast"></td>
                        <td>Plasma Blast</td>
                        <td>Shoots a ball of bio-plasma toward a target, causing 260 damage.</td>
                        <td>
                            <ul>
                                <li>Cooldown: 3s</li>
                                <li>Energy: 25</li>
                                <li>Charge Time: 3s</li>
                                <li>Target Range: 10</li>
                                <li>Impact Range: 20</li>
                                <li>100% damage to target</li>
                                <li>75% Damage from 0 to 0.1 range</li>
                                <li>25% Damage from 0.1 to 0.2 range</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td><img src="/images/comps/hybrids/psionicstorm.png" alt="Psionic Storm"></td>
                        <td>Psionic Storm</td>
                        <td>Creates a storm of psionic energy that lasts 4 seconds, causing up to 80 damage to all enemy units in the target area. Does not damage friendly units.</td>
                        <td>
                            <ul>
                                <li>Cooldown: 8s</li>
                                <li>Energy: 25</li>
                                <li>Cast Range: 9</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
