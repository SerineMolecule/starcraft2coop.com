<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
if (isset($_GET['commander'])) {
    if (!is_string($_GET['commander'])) {
        echo("Error!");
        die();
    }
    $commander = $_GET['commander'];
    if (!preg_match('/[^A-Za-z\s0-9]/', $commander)) {
        include 'sqlconnection.php';
        $sql = "SELECT fullname, motto, stat01, stat02, stat03, stat04, stat05, stat06, stat07, stat08, stat09, summary
                FROM commandersummaries
                WHERE commander='$commander'";
        $result = mysqli_query($con, $sql);
        $commanderData = [];
        while ($row = mysqli_fetch_array($result)) {
            $commanderData[] = $row;
        }

        if (count($commanderData) !== 1) {
            echo("Error!");
            die();
        }
        $finalString = json_encode($commanderData[0]);
        echo $finalString;
        $con->close();
    } else {
        echo("Error!");
    }
} else {
    echo("Error!");
}
