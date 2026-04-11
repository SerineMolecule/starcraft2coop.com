<?php

require_once __DIR__ . "/../config.php";

if (empty($GENERATING_STATIC_PAGES)) {
    http_response_code(401);
    die("Error! This file should not be accessed directly");
}

require __DIR__ . "/wrapper.php";
