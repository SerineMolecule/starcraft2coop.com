<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
if (isset($_GET['id1']) && isset($_GET['id2'])) {
    if (!ctype_digit($_GET['id1']) || !ctype_digit($_GET['id2'])) {
        echo("Error!");
        die();
    }
    if ($_GET['id1'] == $_GET['id2']) {
        echo "No interaction found.";
        die();
    }
    if ($_GET['id1'] > $_GET['id2']) {
        $id1 = $_GET['id2'];
        $id2 = $_GET['id1'];
    } else {
        $id1 = $_GET['id1'];
        $id2 = $_GET['id2'];
    }
    include 'sqlconnection.php';

    $sql = "SELECT interaction
            FROM mutatorinteractions
            WHERE id1='$id1' AND id2='$id2'";
    $result = mysqli_query($con, $sql);
    $interaction = [];
    while ($row = mysqli_fetch_array($result)) {
        $interaction[] = $row;
    }
    if (count($interaction) !== 1) {
        echo("No interaction found.");
        $con->close();
        die();
    } else {
        echo($interaction[0]['interaction']);
        $con->close();
    }
} else {
    echo("Error!");
}
