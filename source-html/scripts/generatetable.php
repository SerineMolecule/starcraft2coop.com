<?php

error_reporting(E_ALL);
ini_set("display_errors", 1);

require_once '../../includes/queries.php';
$units = get_amonunits();

if (!isset($_GET['maxvitality']) && !isset($_GET['minvitality'])) {
    // do nothing
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

    $units = array_filter($units, fn($unit) => ($unit['hp'] + $unit['shields']) <= $maxVitality && ($unit['hp'] + $unit['shields']) >= $minVitality);
}
usort($units, fn($a, $b) => strtolower($a['name']) <=> strtolower($b['name']));

$outputString = "";
foreach ($units as $row) {
    $outputString .= "<div class='content " . $row['race'] . "'>" . $row['name'] . "</div>";
}
echo $outputString;
