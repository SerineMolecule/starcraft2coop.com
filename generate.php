<?php

// run from CLI; generate static pages
require "config.php";

chdir(__DIR__);
$grep_output = shell_exec('grep -r -l --include="*.php" "/wrapper-static.php" source-php/');

$pages = [];
if ($grep_output) {
    $lines = explode("\n", trim($grep_output));
    foreach ($lines as $filepath) {
        if (empty($filepath)) {
            continue;
        }
        if (str_starts_with($filepath, 'source-php/') && str_ends_with($filepath, '.php')) {
            $pages[] = substr($filepath, 0, -4);
        }
    }
} else {
    echo "Error: Grep had 0 results!";
    exit(1);
}

$HTML_DIR = __DIR__ . '/html';
$GENERATING_STATIC_PAGES = true;
error_reporting(E_ALL);

set_error_handler(function (int $severity, string $message, string $file, int $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

$all_errors = [];
foreach ($pages as $page) {
    $_SERVER['REQUEST_URI'] = "$page";
    $_SERVER['PHP_SELF'] = "$page.php";
    $pageDir = dirname($page);
    $pageName = basename($page);
    $targetDir = str_replace('source-php', $HTML_DIR, $pageDir);
    chdir($pageDir);

    ob_start();
    try {
        require "$page.php";
    } catch (ErrorException $e) {
        $all_errors[] = "Captured an exception in {$e->getFile()}: {$e->getMessage()} (line {$e->getLine()})";
    }
    $html = ob_get_clean();
    $html = str_replace("\r\n", "\n", $html);

    $result = file_put_contents($targetDir . "/$pageName.html", $html);
    if (!$result) {
        $all_errors[] = "Error writing $page.html";
        break;
    } else {
        echo "Generated $page.html ($result bytes)\n";
    }

    chdir(__DIR__);
}

foreach ($all_errors as $error) {
    echo "$error\n";
}

exit(empty($all_errors) ? 0 : 1);
