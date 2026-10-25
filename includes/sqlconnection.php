<?php

require __DIR__ . '/../config.php';

/** @var string $DB_HOST */
/** @var string $DB_USER */
/** @var string $DB_PASS */
/** @var string $DB_NAME */
$con = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($con->connect_error) {
    die('Connection failed: ' . $con->connect_error);
}
