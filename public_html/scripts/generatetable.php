<?php

if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
include 'sqlconnection.php';

if (!isset($_GET['maxvitality']) && !isset($_GET['minvitality'])) {
    $sql = "SELECT name, race
            FROM amonunits
            ORDER BY name ASC";
} else {
    if (!ctype_digit($_GET['maxvitality']) || !ctype_digit($_GET['minvitality'])) {
        echo("Error!");
        die();
    }
    if (strlen($_GET['maxvitality'] > 6)) {
        $maxVitality = intval(substr($_GET['maxvitality'], 0, 5));
    } else {
        $maxVitality = intval($_GET['maxvitality']);
    }
    if (strlen($_GET['minvitality'] > 6)) {
        $minVitality = intval(substr($_GET['minvitality'], 0, 5));
    } else {
        $minVitality = intval($_GET['minvitality']);
    }

    $sql = "SELECT name, race, hp, shields
            FROM amonunits
            WHERE (hp + shields)<= $maxVitality AND (hp + shields)>= $minVitality
            ORDER BY name ASC";
}
$result = mysqli_query($con, $sql);
$outputString = "";
while ($row = mysqli_fetch_array($result)) {
    $outputString .= "<div class='content " . $row['race'] . "'>" . $row['name'] . "</div>";
}
echo $outputString;
$con->close();
