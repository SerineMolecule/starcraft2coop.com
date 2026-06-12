<?php

require_once __DIR__ . "/../includes/wrapper.php";
require_once __DIR__ . "/../includes/queries.php";

function homeMissionImageFilename(string $mission): string
{
    return str_replace("and", "", str_replace(' ', '', strtolower($mission)));
}

function homeMutationMutatorLink(array $mutator): string
{
    $filename = token($mutator['mutatorname']);
    return "<a href=\"/mutators/" . $filename . "\"><img class=\"miniIcon\" src=\"/images/mutators/" .
        $filename . ".png\" alt=\"\">" . $mutator['mutatorname'] . "</a>";
}

function homeMutationMutators(array $mutation, array $mutators): string
{
    $links = [];
    foreach (["mut01", "mut02", "mut03"] as $mutatorKey) {
        if ($mutation[$mutatorKey]) {
            $links[] = homeMutationMutatorLink($mutators[intval($mutation[$mutatorKey]) - 1]);
        } else {
            $links[] = '';
        }
    }
    return implode("</td><td>\n", $links);
}

function homeMutationRow(string $week, array $mutation, array $mutators): string
{
    $missionFilename = homeMissionImageFilename($mutation["map"]);
    $html = "<tr>\n";
    $html .= "<td class=\"left-column\">" . $week . "</td>\n";
    $html .= "<td><strong>" . $mutation["mutation"] . "</strong></td>\n";
    $html .= "<td><div class=\"mapImg mapImg-" . $missionFilename . "\">" .
        htmlspecialchars(mapDisplayName($mutation["map"])) . "</div></td>\n";
    $html .= "<td>" . homeMutationMutators($mutation, $mutators) . "</td>\n";
    $html .= "</tr>\n";
    return $html;
}

$cycleList = get_mutationcycle();
$mutators = get_mutators();
[$currentWeekIndex, $currentWeekStart] = get_currentmutationcycle();
$nextWeekIndex = ($currentWeekIndex + 1) % count($cycleList);
$nextWeekStart = $currentWeekStart + (7 * 24 * 60 * 60);
$secondNextWeekIndex = ($currentWeekIndex + 2) % count($cycleList);
$secondNextWeekStart = $currentWeekStart + (2 * 7 * 24 * 60 * 60);
$thirdNextWeekIndex = ($currentWeekIndex + 3) % count($cycleList);
$thirdNextWeekStart = $currentWeekStart + (3 * 7 * 24 * 60 * 60);
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Commander Guides, Mission Data and more!</title>
    <meta name="description" content="Your #1 Source for Starcraft 2 Co-op Information. Commander Guides, Mission Data, Unit Stats, Mutation Information and more!">
    <meta name="keywords" content="Starcraft co-op guides">
    <link rel="canonical" href="https://starcraft2coop.com">

    <style>
        @media (min-width: 701px){
            #updateTable td:nth-child(1){
                width:120px;
            }
        }
        @media (max-width: 700px){
            #updateTable td:nth-child(1){
                width:35%;
            }
        }
        .left-column{
            text-align: left;
            white-space: nowrap;
        }
        #updateTable td, #updateTable th{
            border:none;
        }
        #service{
            padding:0.5rem;
            display:inline-block;
            font-size:0.85rem;
            border:1px solid white;
        }
        #homeMutationTable td:nth-child(4){
            min-width:180px;
        }
    </style>
<?= startContent() ?>
    <h1>Starcraft II Co-op</h1>
    <details>
        <summary>What is this?</summary>
        <p>Starcraft II is a real-time strategy game by Blizzard Entertainment. It is one of the most successful RTS's in history. In 2015, Starcraft II introduced a co-op mode, where two players would face up against Amon in a PVE-type mission. The game features several different commanders to play and many different maps to choose from.</p>
        <p>This site serves as a repository of all the information gathered by the Starcraft II co-op community. It aims to help players improve their gameplay, by providing in-depth commander and map analysis, as well as providing tips on how to deal with certain tricky situations that may arise in-game.</p>
        <p>Starcraft II is currently free to play. Three of the commanders in co-op mode are free, while the others are free to play up to level 5. If you are a new player, check out the <a href="/guides/newplayer">New Players</a> page to help you select your first commander. Also, check out the <a href="guides/generaltips">General Tips</a> page for some great tips to get you started with this game mode.</p>
        <p>Visit the official Starcraft II page <a href="https://starcraft2.com" rel="nofollow">here</a> and join the fight against Amon!</p>
    </details>
    <h2>Weekly mutations</h2>
    <div class="tableContainer">
        <table id="homeMutationTable">
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Name</th>
                    <th>Map</th>
                    <th colspan="3">Mutators</th>
                </tr>
            </thead>
            <tbody>
                <?= homeMutationRow("This week", $cycleList[$currentWeekIndex], $mutators) ?>
                <tr><td colspan="6"><span id="nextMutationCountdown" data-next-mutation-start="<?= $nextWeekStart * 1000 ?>"></span></td></tr>
                <?= homeMutationRow(date("M j", $nextWeekStart), $cycleList[$nextWeekIndex], $mutators) ?>
                <?= homeMutationRow(date("M j", $secondNextWeekStart), $cycleList[$secondNextWeekIndex], $mutators) ?>
                <?= homeMutationRow(date("M j", $thirdNextWeekStart), $cycleList[$thirdNextWeekIndex], $mutators) ?>
                <tr><td colspan="6"><p><a href="/resources/weeklymutations#thisweek">More weeks</a></p></td></tr>
            </tbody>
        </table>
    </div>
    <script>
        (function() {
            var countdown = document.getElementById("nextMutationCountdown");
            var nextMutationStart = parseInt(countdown.getAttribute("data-next-mutation-start"), 10);

            function pluralize(value, unit) {
                if (!value) return "";
                return value + " " + unit + (value === 1 ? "" : "s");
            }

            function updateNextMutationCountdown() {
                var remainingSeconds = Math.floor((nextMutationStart - Date.now()) / 1000);
                if (remainingSeconds <= 0) {
                    countdown.textContent = "Next mutation has started.";
                    return;
                }
                var days = Math.floor(remainingSeconds / 86400);
                remainingSeconds %= 86400;
                var hours = Math.floor(remainingSeconds / 3600);
                remainingSeconds %= 3600;
                var minutes = Math.floor(remainingSeconds / 60);
                var seconds = remainingSeconds % 60;
                countdown.textContent = "Next mutation starts in " +
                    pluralize(days, "day") + " " +
                    hours + ":" +
                    `${minutes}`.padStart(2, "0") + ":" +
                    `${seconds}`.padStart(2, "0");
            }

            updateNextMutationCountdown();
            setInterval(updateNextMutationCountdown, 1000);
        }());
    </script>
    <script src="/scripts/tooltips.js"></script>
    <h2>Community Links</h2>
    <ul>
        <li><a href="https://discord.gg/VQnXMdm">Starcraft 2 Co-op Discord</a></li>
        <li><a href="https://reddit.com/r/starcraft2coop">/r/starcraft2coop Subreddit</a></li>
    </ul>
    <h2>Latest Updates:</h2>
    <table>
        <tr>
            <td class="left-column">
                <p>2026-05-18</p>
            </td>
            <td>
                <p>There's a redesigned homepage and a new <a href="/units/">Unit Stats page</a>.</p>
            </td>
        </tr>
        <tr>
            <td class="left-column">
                <p>2026-05-07</p>
            </td>
            <td>
                <p>I've been hard at work sprucing up the site. Prestige advice has been updated, it's now easier to jump to this week's mutation, the menu navigation has been revamped, and mutators have been completely redesigned.</p>
            </td>
        </tr>
        <tr>
            <td class="left-column">
                <p>2026-03-21</p>
            </td>
            <td>
                <p>starcraft2coop.com will stay available! Unfortunately, accounts and the replay analyzer are no longer working.</p>
                <p>The site's source code is now available <a href="https://github.com/SerineMolecule/starcraft2coop.com" target="_blank">on GitHub</a>, where you can contribute changes.</p>
            </td>
        </tr>
    </table>
<?= endContent() ?>
