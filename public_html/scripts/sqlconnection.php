<?php
$con = new mysqli(
    getenv("DB_HOST", true) ?: die("'DB_HOST' is not set"),
    getenv("DB_USER", true) ?: die("'DB_USER' is not set"),
    getenv("DB_PASS", true) ?: die("'DB_PASS' is not set"),
    getenv("DB_NAME", true) ?: die("'DB_NAME' is not set"),
);
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
?>
