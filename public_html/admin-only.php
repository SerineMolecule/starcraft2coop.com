<?php

require __DIR__ . "/../config.php";

if (!isset($_SERVER['ADMIN_KEY']) || $_SERVER['ADMIN_KEY'] != $ADMIN_KEY) {
    http_response_code(401);
    echo "Error!";
    die();
}
