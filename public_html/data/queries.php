<?php

/**
 * @param array $array Associative array with data, or Indexed array of Associative arrays with data
 * @param array|null $fields Fields to return. If null, `$array` is returned.
 * @return array Array with data only for the provided fields. _Field order_ is not guaranteed.
 */
function select_fields(array $array, array|null $fields = null): array
{
    if ($fields === null) {
        return $array;
    }

    if (array_is_list($array)) {
        // indexed array
        return array_map(fn($elem) => select_fields($elem, $fields), $array);
    }

    // associative array
    return array_intersect_key($array, array_flip($fields));
}


/**
 * @param string|null $commander Commander to filter on; otherwise all commanders.
 * @return array Single commander or All commanders.
 */
function get_commanders(string|null $commander = null): array
{
    $json = file_get_contents(__DIR__ . '/commandersummaries.json');
    $allCommanders = json_decode($json, true);

    if ($commander === null) {
        return $allCommanders;
    }

    $match = array_find($allCommanders, function ($value) use ($commander) {
        return $value['commander'] === strtolower($commander);
    });
    if ($match === null) {
        echo("Error!");
        die();
    }
    return $match;
}


/**
 * @param int|null $difficulty Difficulty to filter on; otherwise all difficulties.
 * @return array Single or All BrutalPlus info.
 */
function get_brutalplus(int|null $difficulty = null): array
{
    $json = file_get_contents(__DIR__ . '/brutalplus.json');
    $allDiffs = json_decode($json, true);

    if ($difficulty === null) {
        return $allDiffs;
    }

    $match = array_find($allDiffs, function ($value) use ($difficulty) {
        return $value['difficulty'] === $difficulty;
    });
    if ($match === null) {
        echo("Error! get_brutalplus");
        die();
    }
    return $match;
}
