<?php

require_once "../../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Tournament</title>
    <meta name="description" content="Information on the one-of-a-kind Co-op Tournament, which features two teams of two battling it out in mutliple-round mutation games.">
    <meta name="keywords" content="Starcraft co-op tournament">
    <link rel="canonical" href="https://starcraft2coop.com/community/tournament/signup">
<?= startContent() ?>
    <h1>The Co-Op Tournament</h1>
    <p>The Co-Op tournament is designed to test the limits of players' skill, knowledge and map awareness in Starcraft II Co-op mode. Currently, there is a $100 prize given to the winning team ($50 each player).</p>
    <p>You may visit the <a href="archive">Archive</a> to see how the past tournaments played out, download replays of all the games, and view the casted VODs for each game of the event.</p>
    <h2>Rules</h2>
    <h3>Gameplay Rules</h3>
    <ul>
        <li>All games are played on Brutal difficulty.</li>
        <li>Both teams start with 4 points in their point pool.</li>
        <li>Both teams start with 1 life.</li>
        <li>Participants may allocate their Prestiges and Mastery points to best suit the mutators they face.</li>
        <li>Players may pause a game as many times as they wish.</li>
    </ul>
    <h3>Banned Elements</h3>
    <ul>
        <li>Fatal Attraction, Microtransactions, Polarity and Vertigo may not be selected.</li>
        <li>The following mutator combinations are banned and may not be used by any team:
            <ul>
                <li>Boom Bots + Speed Freaks</li>
                <li>Diffusion + Life Leech + Shortsighted</li>
                <li>Minesweeper + Void Reanimators</li>
                <li>Propagators + Shortsighted + Speed Freaks</li>
            </ul>
        </li>
        <li>The following map/mutator combinations are banned and may not be used by any team:
            <ul>
                <li>Heroes from the Storm + Miner Evacuation</li>
                <li>Heroes from the Storm + Scythe of Amon</li>
            </ul>
        </li>
        <li>The following cheeses may not be used by any team:
            <ul>
                <li>Base lift-off cheese</li>
                <li>Dead of Night Tower Cheese</li>
                <li>Raynor/Vorazun invincible Cloaked units.</li>
                <li>Han/Horner Hidden Galleons</li>
            </ul>
        </li>
        <li>If unsure, Teams should check with the administrator if a strategy is allowed before confirming their picks.</li>
    </ul>
    <h3>Tournament format</h3>
    <ul>
        <li>The tournament takes place with two teams of two players and will be played across multiple rounds.</li>
        <li>A round takes place in the following manner:
            <ul>
                <li>Every round, each team will play a mutator set assigned to them by the opposing team.</li>
                <li>Teams take turns in adding a mutator to the set the opposing team will play.</li>
                <li>Once a mutator is selected, it cannot be selected by any team for the current and the subsequent round.</li>
                <li>As an in-game limitation, a maximum of 10 mutators may be selected.</li>
                <li>When mutators are selected and given to the other team, that team selects a map to play that mutator set.</li>
                <li>Once a map is selected, it may not be played until all other maps in the map pool have been played by that team.</li>
                <li>Once a commander is selected, it may not be played until all other commanders have been played by that team. If a player does not have a commander purchased, they will need to play it at level 5.</li>
                <li>Each team will attempt to successfully complete the mission. Bonus objectives are not required.</li>
                <li>If an attempt fails, the team will lose a life and the team will have to try again with the same commanders/mission/mutator selection. They may change Prestige and Mastery Points allocation in between attempts.</li>
                <li>Points do not carry over.</li>
                <li>Point pools refill each round.</li>
                <li>On victory, that team gets 2 points added to their point pool.</li>
                <li>Completing ALL bonus objectives gives 1 bonus life to that team.</li>
            </ul>
        <li>The winning team is the team that wins a round when the other team loses.</li>
        <li>In the case that both teams lose a round, the team with the greatest mission progress (in percentage completion) before defeat is the team that wins the tournament. Mission progress is described in the section below.</li>
        <li>To prevent stalemates, if a mission lasts longer than 45:00 in-game time, it will be considered a loss and mission progress will be measured from that time.</li>
        <li>If an ally disconnects, the other person will have to complete the mission by themself. They may use their ally's units and resources as they see fit. If both players disconnect, the game will be considered a loss.</li>
    </ul>
    <h3>Mission Progress</h3>
    <p>In case both teams lose their runs, a "Mission Effort" score will be determined based on the mission progress. The below table outlines how the Mission Effort Score will be determined.</p>
    <table>
        <thead>
            <tr>
                <th>Mission</th>
                <th>Metric</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="/missions/chainofascension">Chain of Ascension</a></td>
                <td>Maximum waypoint along the path</td>
                <td>18</td>
            </tr>
            <tr>
                <td><a href="/missions/cradleofdeath">Cradle of Death</a></td>
                <td>Facilities destroyed</td>
                <td>4</td>
            </tr>
            <tr>
                <td><a href="/missions/deadofnight">Dead of Night</a></td>
                <td>Infested Structures destroyed</td>
                <td>151</td>
            </tr>
            <tr>
                <td><a href="/missions/lockload">Lock & Load</a></td>
                <td>Maximum Celestial Locks captured</td>
                <td>5</td>
            </tr>
            <tr>
                <td><a href="/missions/malwarfare">Malwarfare</a></td>
                <td>Security Terminals Purged</td>
                <td>5</td>
            </tr>
            <tr>
                <td><a href="/missions/minerevacuation">Miner Evacuation</a></td>
                <td>Evacuation Ships saved</td>
                <td>5</td>
            </tr>
            <tr>
                <td><a href="/missions/mistopportunities">Mist Opportunities</a></td>
                <td>Waves guarded</td>
                <td>5</td>
            </tr>
            <tr>
                <td><a href="/missions/oblivionexpress">Oblivion Express</a></td>
                <td>Trains destroyed</td>
                <td>9</td>
            </tr>
            <tr>
                <td><a href="/missions/partparcel">Part & Parcel</a></td>
                <td>Hybrids killed</td>
                <td>3</td>
            </tr>
            <tr>
                <td><a href="/missions/riftstokorhal">Rifts to Korhal</a></td>
                <td>Void Shards destroyed</td>
                <td>10</td>
            </tr>
            <tr>
                <td><a href="/missions/scytheofamon">Scythe of Amon</a></td>
                <td>Void Slivers destroyed</td>
                <td>5</td>
            </tr>
            <tr>
                <td><a href="/missions/templeofthepast">Temple of the Past</a></td>
                <td>Time temple is alive</td>
                <td>26:00</td>
            </tr>
            <tr>
                <td><a href="/missions/thevermillionproblem">The Vermillion Problem</a></td>
                <td>Crystals deposited</td>
                <td>20</td>
            </tr>
            <tr>
                <td><a href="/missions/voidlaunch">Void Launch</a></td>
                <td>Shuttles destroyed</td>
                <td>35</td>
            </tr>
            <tr>
                <td><a href="/missions/voidthrashing">Void Thrashing</a></td>
                <td>Void Thrashers killed</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
    <h3>Abilities</h3>
    <p>In addition to the standard rules, each tournament will provide teams with three abilities that they can use (once per tournament) to help progress through the tournament. The abilities will be randomly selected from the list below.</p>
    <table>
        <thead>
            <tr>
                <th>Ability</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="/images/tournament/veto.png" alt="Standard Veto"></td>
                <td>Mutator Veto</td>
                <td>Remove a mutator from the set.</td>
            </tr>
            <tr>
                <td><img src="/images/tournament/cveto.png" alt="Commander Veto"></td>
                <td>Commander Veto</td>
                <td>Prevent the opposing team from using a certain commander for a round. Can only be used as long as they have at least three commanders in their commander pool.</td>
            </tr>
            <tr>
                <td><img src="/images/tournament/mveto.png" alt="Map Veto"></td>
                <td>Map Veto</td>
                <td>Prevent the opposing team from playing a certain map for a round. Can only be used as long as they have at least two maps in their map pool.</td>
            </tr>
            <tr>
                <td><img src="/images/tournament/race.png" alt="Race to Victory"></td>
                <td>Race to Victory</td>
                <td>Allows a team to reroll the map until they face off against a specific race as shown by the in-game Enemy Composition Identification.</td>
            </tr>
            <tr>
                <td><img src="/images/tournament/replay.png" alt="Map Replay"></td>
                <td>Map Replay</td>
                <td>Allows the team to play an already-played map.</td>
            </tr>
            <tr>
                <td><img src="/images/tournament/simplify.png" alt="Simplify"></td>
                <td>Simplify</td>
                <td>Allows the team to play the round on Hard difficulty instead of Brutal.</td>
            </tr>
        </tbody>
    </table>
    <h3>Mutator Costs</h3>
    <p>The costs of the mutators is as follows:</p>
    <table>
        <thead>
            <tr>
                <th>Mutator</th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Aggressive Deployment</td><td>4</td></tr>
            <tr><td>Alien Incubation</td><td>1</td></tr>
            <tr><td>Avenger</td><td>3</td></tr>
            <tr><td>Barrier</td><td>1</td></tr>
            <tr><td>Black Death</td><td>4</td></tr>
            <tr><td>Blizzard</td><td>2</td></tr>
            <tr><td>Boom Bots</td><td>6</td></tr>
            <tr><td>Concussive Attacks</td><td>1</td></tr>
            <tr><td>Darkness</td><td>1</td></tr>
            <tr><td>Diffusion</td><td>4</td></tr>
            <tr><td>Double-edged</td><td>4</td></tr>
            <tr><td>Eminent Domain</td><td>1</td></tr>
            <tr><td>Evasive Maneuvers</td><td>2</td></tr>
            <tr><td>Fear</td><td>2</td></tr>
            <tr><td>Going Nuclear</td><td>3</td></tr>
            <tr><td>Hardened Will</td><td>1</td></tr>
            <tr><td>Heroes from the Storm</td><td>6</td></tr>
            <tr><td>Inspiration</td><td>2</td></tr>
            <tr><td>Just Die!</td><td>4</td></tr>
            <tr><td>Kill Bots</td><td>4</td></tr>
            <tr><td>Laser Drill</td><td>2</td></tr>
            <tr><td>Lava Burst</td><td>1</td></tr>
            <tr><td>Life Leech</td><td>1</td></tr>
            <tr><td>Long Range</td><td>2</td></tr>
            <tr><td>Mag-nificent</td><td>2</td></tr>
            <tr><td>Mineral Shields</td><td>1</td></tr>
            <tr><td>Minesweeper</td><td>3</td></tr>
            <tr><td>Missile Command</td><td>3</td></tr>
            <tr><td>Moment of Silence</td><td>2</td></tr>
            <tr><td>Mutually Assured Destruction</td><td>2</td></tr>
            <tr><td>Orbital Strike</td><td>1</td></tr>
            <tr><td>Outbreak</td><td>2</td></tr>
            <tr><td>Photon Overload</td><td>1</td></tr>
            <tr><td>Power Overwhelming</td><td>4</td></tr>
            <tr><td>Propagators</td><td>4</td></tr>
            <tr><td>Purifier Beam</td><td>1</td></tr>
            <tr><td>Scorched Earth</td><td>1</td></tr>
            <tr><td>Self Destruction</td><td>2</td></tr>
            <tr><td>Shortsighted</td><td>3</td></tr>
            <tr><td>Slim Pickings</td><td>4</td></tr>
            <tr><td>Speed Freaks</td><td>2</td></tr>
            <tr><td>Temporal Field</td><td>1</td></tr>
            <tr><td>Time Warp</td><td>1</td></tr>
            <tr><td>Transmutation</td><td>4</td></tr>
            <tr><td>Twister</td><td>1</td></tr>
            <tr><td>Void Reanimators</td><td>4</td></tr>
            <tr><td>Void Rifts</td><td>6</td></tr>
            <tr><td>Walking Infested</td><td>1</td></tr>
            <tr><td>We Move Unseen</td><td>2</td></tr>
        </tbody>
    </table>
    <h3>Good Sportsmanship</h3>
    <p>As with all esports tournaments, players are expected to demonstrate good sportsmanship. This means, but it is not limited to:</p>
    <ul>
        <li>All participants are expected to conduct themselves in a respectful and professional manner.</li>
        <li>Any form of cheating will instantly cause the cheating team to forfeit the tournament. Both players will no longer be allowed to participate in future tournaments. Cheating includes the use of modified maps, hacks and other unauthorized software.</li>
    </ul>
    <h3>For Participants</h3>
    <p>If you are participating in this tournament, please take note of the points below to ensure the tournament runs as smoothly as possible:</p>
    <ul>
        <li>It is highly advisable to have a backup partner in case your partner is not able to appear.</li>
        <li>If your partner does not appear, you may use any method you wish to find a co-op partner (e.g. Discord, Co-op Subreddit, in-game chat, etc.).</li>
        <li>Once a team plays a game, that team is expected to compete throughout the tournament. No partner swaps are allowed.</li>
        <li>Should a partner leave in the middle of the tournament, the remaining player will be expected to complete the rest of the missions on their own. They may select their ally's commander/masteries (subject to tournament rules) and may use a 4-base economy as well.</li>
        <li>You are free to use voice chat to communicate with your ally, although using in-game pings and chat is preferred, to allow viewers to follow your plans.</li>
        <li>You may play on any server you wish.</li>
        <li>You will be provided access to a private channel, along with the other team's players. Use this to:
            <ol>
                <li>Select your final choice for which mutators you'd like the other team to play.</li>
                <li>Select any abilities you would like to use (if needed).</li>
                <li>Post an end-of-game screenshot just before the victory screen and the replay file.</li>
            </ol>
        </li>
        <li>Please ensure you have Replays enabled. Replays of all the games in the tournament will be posted after the tournament ends.</li>
        <li>Payment will be made via Paypal. If you prefer payment in the form of an electronic gift card or giftable in-game items (such as commanders), you may request that.</li>
    </ul>
    <h3>Registration</h3>
    <?php
    $closed = true;
    if ($closed) {
        include("registrationclosed.php");
    } else {
        include("registrationopen.php");
    }
    ?>
<?= endContent() ?>
