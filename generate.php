<?php

// run from CLI; generate static pages
require "config.php";

$pages = [
    '/resources/brutal',
];

$HTML_DIR = '/html';
$_SERVER['ADMIN_KEY'] = $ADMIN_KEY;
$_SERVER['SERVER_NAME'] = $SERVER_NAME;

foreach ($pages as $page) {
    $_SERVER['REQUEST_URI'] = "$page";
    $pageDir = __DIR__ . $HTML_DIR . dirname($page);
    chdir($pageDir);

    ob_start();
    require __DIR__ . $HTML_DIR . "$page.php";
    $html = ob_get_clean();
    $html = str_replace("\r\n", "\n", $html);

    $result = file_put_contents(__DIR__ . $HTML_DIR . "$page.html", $html);
    if (!$result) {
        echo "Error writing $page.html\n";
    } else {
        echo "Generated $page.html ($result bytes)\n";
    }
}
