<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
if (isset($_GET['id'])) {
    if (!ctype_digit($_GET['id'])) {
        echo("Error!");
        die();
    }

    include 'sqlconnection.php';
    $id = intval($_GET['id']);
    $sql = "SELECT id1, id2
            FROM mutatorinteractions
            WHERE id1='$id' OR id2='$id'";
    $result = mysqli_query($con, $sql);
    $interactions = [];
    while ($row = mysqli_fetch_array($result)) {
        if ($row['id1'] == $id) {
            $interactions[] = $row['id2'];
        } else {
            $interactions[] = $row['id1'];
        }
    }
    echo json_encode($interactions);
    $con->close();
} else {
    echo("Error!");
}
