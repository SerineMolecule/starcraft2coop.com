<?php

$docroot = realpath(__DIR__ . '/html');
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (!is_string($path) || $path === '') {
    $path = '/';
}

function servePhp(string $file, string $scriptName): bool
{
    $originalDir = getcwd();
    chdir(dirname($file));
    $_SERVER['SCRIPT_NAME'] = $scriptName;
    $_SERVER['PHP_SELF'] = $scriptName;
    $_SERVER['SCRIPT_FILENAME'] = $file;
    require $file;
    chdir($originalDir);
    return true;
}

$file = realpath($docroot . $path);
if ($file !== false && str_starts_with($file, $docroot) && is_file($file)) {
    if (str_ends_with($file, '.php')) {
        return servePhp($file, $path);
    }
    return false;
}

$candidates = [];
if (str_ends_with($path, '/')) {
    $candidates[] = $path . 'index.html';
    $candidates[] = $path . 'index.php';
} else {
    $candidates[] = $path . '.html';
    $candidates[] = $path . '.php';
    $candidates[] = $path . '/index.html';
    $candidates[] = $path . '/index.php';
}

foreach ($candidates as $candidate) {
    $candidateFile = realpath($docroot . $candidate);
    if ($candidateFile === false || !str_starts_with($candidateFile, $docroot) || !is_file($candidateFile)) {
        continue;
    }

    if (str_ends_with($candidateFile, '.php')) {
        return servePhp($candidateFile, $candidate);
    }

    header('Content-Type: text/html; charset=UTF-8');
    readfile($candidateFile);
    return true;
}

http_response_code(404);
require $docroot . '/errors/404.php';
return true;
