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

/**
 * @return array All MutatorInteraction info.
 */
function get_mutator_interactions(): array
{
    $json = file_get_contents(__DIR__ . '/mutatorinteractions.json');
    return json_decode($json, true);
}

/**
 * @return array All Mutator info.
 */
function get_mutators(): array
{
    $json = file_get_contents(__DIR__ . '/mutators.json');
    return json_decode($json, true);
}

/**
 * @return array List of map names.
 */
function get_missions(): array
{
    $json = file_get_contents(__DIR__ . '/missions.json');
    return json_decode($json, true);
}

/**
 * @return array All WeeklyMutation info.
 */
function get_weeklymutations(): array
{
    $json = file_get_contents(__DIR__ . '/weeklymutations.json');
    return json_decode($json, true);
}

/**
 * @return array All MutationCycle info.
 */
function get_mutationcycle(): array
{
    $json = file_get_contents(__DIR__ . '/mutationcycle.json');
    return json_decode($json, true);
}

/**
 * @return array All AmonUnit info.
 */
function get_amonunits(): array
{
    $json = file_get_contents(__DIR__ . '/amonunits.json');
    return json_decode($json, true);
}

/**
 * @return array All PlayerUnit info.
 */
function get_playerunits(): array
{
    $json = file_get_contents(__DIR__ . '/playerunits.json');
    return json_decode($json, true);
}
