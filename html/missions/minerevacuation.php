<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - Miner Evacuation</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Miner Evacuation">
  <meta name="keywords" content="Starcraft co-op guides miner evacuation mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/minerevacuation">
  <script src="/scripts/preload.js"></script>
  <?= startContent() ?>
    <h1>Co-op Mission Guide: Miner Evacuation</h1>
    <p id="missionPlace">Jarban</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#evacShip">Evacuation Ship Locations and Order</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>Infestation runs rampant throughout one of Kel-Moria’s remote mining colonies. Debra Greene, leader of the local miner’s guild, is determined to get her people to safety. Fight off both Amon and the infested to aid the evacuation. </p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Protect Colony Ships while they take off (5)</li>
            <li>Do not allow 2 ships to be destroyed</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Kill the Blightbringer (1)</li>
            <li>Destroy the Eradicators (2)</li>
        </ul>
    <h2 id="evacShip">Evacuation Ship Locations and Order</h2>
    <?php $mission = "minerevacuation"; ?>
    <p>There are no enemy bases on this map, and so, base analysis is not required. However, ships launch in a semi-random order, which requires you to push into small enemy camps.</p>
    <p>There are a total of 9 ships present on the map. The locations of these ships is shown below.</p>
    <img src="/images/missiondata/minerevacuation/evacuationshiplocations.jpg" alt="Locations of Evacuation Ships">
    <p>When playing on Brutal difficulty, Ship #1 is automatically destroyed at the start of the game.</p>
    <p>Next, either ships 2, 3, or 6 are destroyed. There is a certain chance that certain ships will be destroyed. These chances are listed below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Ship</th>
                <th>Chance to be Destroyed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>40%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>20%</td>
            </tr>
            <tr>
                <td>6</td>
                <td>40%</td>
            </tr>
        </tbody>
    </table>
    <p>Next, either ships 4, 7, or 9 are destroyed. There is a certain chance that certain ships will be destroyed. These chances are listed below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Ship</th>
                <th>Chance to be Destroyed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>4</td>
                <td>33%</td>
            </tr>
            <tr>
                <td>7</td>
                <td>33%</td>
            </tr>
            <tr>
                <td>9</td>
                <td>33%</td>
            </tr>
        </tbody>
    </table>
    <p>At the start of the game, the ships are assigned to a launch priority. This is the order of beacons you will see on the map as you launch ships. The order is semi-randomized and is shown below. Note that if a ship is destroyed, it is skipped and the next one selected.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Order</th>
                <th>Ship(s)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3,4,5</td>
                <td>2,5,6<br>2,6,5<br>5,2,6<br>6,2,5</td>
            </tr>
            <tr>
                <td>6,7</td>
                <td>4,9<br>9,4</td>
            </tr>
            <tr>
                <td>8</td>
                <td>8</td>
            </tr>
            <tr>
                <td>9</td>
                <td>7</td>
            </tr>
        </tbody>
    </table>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/minerevacuation/blightbringer.jpg" alt="Blightbringer">
        <img src="/images/missiondata/minerevacuation/eradicator.jpg" alt="Eradicator">
        <img src="/images/missiondata/minerevacuation/eradicator.jpg" alt="Eradicator">
    </div>
    <p>There are two bonus objectives on the map. The first one requires you to kill Blightbringer. Blightbringer has a parasitic bomb attack, so you'll want to pay attention if you choose to engage him with an air army. Ground armies are vulnerable to his spray attack, your constant attention is important.</p>
    <p>The Eradicators are much more dangerous. One Eradicator has an air attack, which it targets using many circular markers on the ground. The other Eradicator deals damage in a straight line and can decimate ground armies. It is best to engage the Eradicators with air units to prevent losing your army.</p>
    <p>The locations for BlightBringer (in yellow) and the Eradicators (in green) are shown below.</p>
    <img src="/images/missiondata/minerevacuation/bonusobjectivelocations.jpg" alt="Locations of the Bonus Objectives">
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>There are three types of timings that are of interest in this mission:</p>
    <ul>
        <li><b>Attack Waves:</b> These are attack waves that target your main and your expansion.</li>
        <li><b>Panic Events:</b> If ships are not launched within a certain amount of time, they will panic and force-launch.</li>
        <li><b>Claimer Waves:</b> These are attack waves that are sent to target specific ships.</li>
    </ul>
    <p>The timings, Strength and Tech levels for the attack waves is shown below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>6:30</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>13:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>17:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>4</td>
                <td>23:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>5</td>
                <td>26:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>7</td>
                <td>28:00</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
                <td>32:00</td>
                <td>6</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    <p>If ships are not launched fast enough, a ship will start to panic and force a launch. This forces players to play more aggressively. Launching a ship early will cancel that panic time. This can be useful for avoiding harder ships. The panic times are shown below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Ship</th>
                <th>Panic Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:45</td>
            </tr>
            <tr>
                <td>2</td>
                <td>12:00</td>
            </tr>
            <tr>
                <td>3</td>
                <td>16:30</td>
            </tr>
            <tr>
                <td>4</td>
                <td>23:30</td>
            </tr>
            <tr>
                <td>5</td>
                <td>27:00</td>
            </tr>
            <tr>
                <td>6</td>
                <td>29:00</td>
            </tr>
            <tr>
                <td>7</td>
                <td>29:30</td>
            </tr>
        </tbody>
    </table>
    <p>Claimer waves will target ships in an attempt to destroy them. The timings, Strength and Tech Levels of these waves is shown below.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>8:00</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>15:12</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>19:18</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>4</td>
                <td>19:24</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5</td>
                <td>26:00</td>
                <td>4</td>
                <td>4</td>
            </tr>
        </tbody>
    </table>
    <p>Bonus objectives will spawn at 9:00 and 15:00. There is a 66% chance that Blightbringer will spawn first.</p>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>All Attack and Claimer Waves spawn from the edge of the map. Attack Waves have three spawn points and Claimer waves have nine spawn points. This makes it extremely impractical to spawn-camp the spawn points to take out the wave before they reach their target.</p>
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Pay attention to the minimap for Claimer waves. They can destroy a ship without you noticing.</li>
        <li>Do not engage the Eradicators with a full ground army. One of the Eradicators has a deadly ground attack.</li>
        <li>All attack waves after the first wave will target your expansion, so ensure you have ample defenses there.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/kerrigan">Kerrigan</a>: Use Omega Worms to quickly reinforce your army as well as provide detection for Infested Banshees.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Once you have creep spread, move your Infested Colonist Compound to your expansion to minimize travel time of your infested.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: Time-Stop will delay the launch sequence of the ship as well. Ie. while it does freeze everything on the map, the countdown timer for launch of the ships will also stop for the duration of Time-Stop.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Use Void Arrays to quickly reinforce your army.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
