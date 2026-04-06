<?php

include("sqlconnection.php");

//Globals
$rushableMissions = ["Chain of Ascension", "Cradle of Death", "Dead of Night", "Lock & Load", "Miner Evacuation", "Part and Parcel", "Rifts to Korhal", "Scythe of Amon", "Void Thrashing"];
$compGamesLabels = ['Protoss Compositions','Masters and Machines','Towering Walkers','Disruptive Artillery','Hope of the Khalai','Siege of Storms',
    'Shadow Disruption','Vanguard of Aiur','Fleet of the Matriarch','Terran Compositions','Raiding Party','Machines of War',
    'Shadow Tech','Dominion Battlegroup','Classic Infantry','Classic Mech','Zerg Compositions','Ravaging Infestation',
    'Broodling Corruption','Explosive Threats','Invasionary Swarm','Devouring Scourge'];

$refreshTime = date('Y-m-d H:i:s');
//Server Distribution
$serverGames = [];
$sql = "SELECT server, count(*) as total
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY server";
$result = mysqli_query($con, $sql);
$replayCount = 0;
while ($row = mysqli_fetch_array($result)) {
    $serverGames[$row['server']] = $row['total'];
    $replayCount += $row['total'];
}
ksort($serverGames);

//Commander Distribution
$commanderGames = [];
$sql = "SELECT mycommander, count(*) as total
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY mycommander
        ORDER BY total DESC";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    $commanderGames[$row['mycommander']] = $row['total'];
}

//Mission Distribution
$missionGames = [];
$sql = "SELECT mission, count(*) as total
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY mission
        ORDER BY total DESC";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    $missionGames[$row['mission']] = $row['total'];
}

//Difficulty Distribution
$difficultyGames = ["Casual" => 0,"Normal" => 0,"Hard" => 0,"Brutal" => 0,"Brutal1" => 0,"Brutal2" => 0,"Brutal3" => 0,"Brutal4" => 0,"Brutal5" => 0,"Brutal6" => 0];
$sql = "SELECT difficulty, count(*) as total
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY difficulty";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    $difficultyGames[$row['difficulty']] = $row['total'];
}

//Enemy Composition Distribution
$compGames = [];
foreach ($compGamesLabels as $comp) {
    $compGames[$comp] = 0;
}

$sql = "SELECT enemycomp, count(*) as total
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY enemycomp";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    if (strpos($row['enemycomp'], "Unknown") === false) {
        $compGames[$row['enemycomp']] = $row['total'];
    }
}

//Commander Winrate
$commanderWinRate = [];
$sql = "SELECT mycommander, sum(result=1) as won, sum(result=0) as lost
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY mycommander";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    $commanderWinRate[$row['mycommander']] = [$row['won'],$row['lost']];
}
ksort($commanderWinRate);

//Mission Winrate
$missionWinRate = [];
$sql = "SELECT mission, sum(result=1) as won, sum(result=0) as lost
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY mission";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    $missionWinRate[$row['mission']] = [$row['won'],$row['lost']];
}
ksort($missionWinRate);

//Comp Winrate
$compWinRate = [];
foreach ($compGamesLabels as $comp) {
    if (strpos($comp, "Compositions") === false) {
        $compWinRate[$comp] = [];
    }
}
$sql = "SELECT enemycomp, sum(result=1) as won, sum(result=0) as lost
        FROM userreplays
        WHERE gamelength > 120
        GROUP BY enemycomp";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    if (isset($compWinRate[$row['enemycomp']])) {
        $compWinRate[$row['enemycomp']] = [$row['won'],$row['lost']];
    }
}

//Get Fastest Clear Times
$missionTimes = [];
$sql = "SELECT mission,min(gamelength) as time
        FROM userreplays
        WHERE result=1
        and username !='Forgotten'
        and username !='hex0129'
        and username !='wsw168email'
        and gamelength > 120
        and difficulty = 'Brutal'
        GROUP BY mission
        ORDER BY time ASC";
$result = mysqli_query($con, $sql);
while ($row = mysqli_fetch_array($result)) {
    if (in_array($row['mission'], $rushableMissions)) {
        $missionTimes[$row['mission']] = $row['time'];
    }
}

file_put_contents(
    "replaycache.txt",
    serialize(
        [$refreshTime,
            $replayCount,
            $serverGames,
            $commanderGames,
            $missionGames,
            $difficultyGames,
            $compGames,
            $commanderWinRate,
            $missionWinRate,
            $compWinRate,
            $missionTimes],
    ),
);
