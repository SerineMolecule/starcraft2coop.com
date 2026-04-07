<?php

/**
 * @return array All commanders.
 */
function get_commanders(): array
{
    $json = file_get_contents(__DIR__ . '/commandersummaries.json');
    return json_decode($json, true);
}

/**
 * @param string $commander Commander to filter on.
 * @return array Single commander.
 */
function get_commander(string $commander): array
{
    if (!ctype_alnum($commander)) {
        throw new InvalidArgumentException('Commander must be alphanumeric');
    }
    $json = file_get_contents(__DIR__ . '/commandersummaries/' . strtolower($commander) . '.json');
    return json_decode($json, true);
}

/**
 * @return array All BrutalPlus info.
 */
function get_brutalpluses(): array
{
    $json = file_get_contents(__DIR__ . '/brutalplus.json');
    return json_decode($json, true);
}

/**
 * @param int $difficulty Difficulty to filter on.
 * @return array Single BrutalPlus info.
 */
function get_brutalplus(int $difficulty): array
{
    $json = file_get_contents(__DIR__ . '/brutalplus/' . $difficulty . '.json');
    return json_decode($json, true);
}
