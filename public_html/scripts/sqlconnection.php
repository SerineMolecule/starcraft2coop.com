<?php

require __DIR__ . "/../../config.php";

$con = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
