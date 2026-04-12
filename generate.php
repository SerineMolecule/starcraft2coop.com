<?php

// run from CLI; generate static pages
require "config.php";

chdir(__DIR__);
$grep_output = shell_exec('grep -r -l --include="*.php" "/wrapper-static.php" html/');

$pages = [];
if ($grep_output) {
    $lines = explode("\n", trim($grep_output));
    foreach ($lines as $filepath) {
        if (empty($filepath)) {
            continue;
        }
        if (str_starts_with($filepath, 'html/') && str_ends_with($filepath, '.php')) {
            $pages[] = substr($filepath, 4, -4);
        }
    }
}

$HTML_DIR = __DIR__ . '/html';
$GENERATING_STATIC_PAGES = true;

foreach ($pages as $page) {
    $_SERVER['REQUEST_URI'] = "$page";
    $_SERVER['PHP_SELF'] = "$page.php";
    $pageDir = $HTML_DIR . dirname($page);
    chdir($pageDir);

    ob_start();
    require $HTML_DIR . "$page.php";
    $html = ob_get_clean();
    $html = str_replace("\r\n", "\n", $html);

    $result = file_put_contents($HTML_DIR . "$page.html", $html);
    if (!$result) {
        echo "Error writing $page.html\n";
        exit(1);
    } else {
        echo "Generated $page.html ($result bytes)\n";
    }
}
