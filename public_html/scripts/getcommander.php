<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
if (isset($_GET['commander'])) {
    require __DIR__ . '/../data/queries.php';

    $commander = $_GET['commander'];
    $commanderData = get_commanders($commander);
    $fields = ['fullname', 'motto', 'stat01', 'stat02', 'stat03', 'stat04', 'stat05', 'stat06', 'stat07', 'stat08', 'stat09', 'summary'];
    $commanderData = select_fields($commanderData, $fields);

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($commanderData);
} else {
    echo("Error!");
}
