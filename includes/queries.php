<?php

/**
 * @return array All commanders.
 */
function get_commanders(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/commandersummaries.json');
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
    $json = file_get_contents(__DIR__ . '/../html/data/commandersummaries/' . strtolower($commander) . '.json');
    return json_decode($json, true);
}

/**
 * @return array All BrutalPlus info.
 */
function get_brutalpluses(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/brutalplus.json');
    return json_decode($json, true);
}

/**
 * @param int $difficulty Difficulty to filter on.
 * @return array Single BrutalPlus info.
 */
function get_brutalplus(int $difficulty): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/brutalplus/' . $difficulty . '.json');
    return json_decode($json, true);
}

/**
 * @return array All MutatorInteraction info.
 */
function get_mutator_interactions(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/mutatorinteractions.json');
    return json_decode($json, true);
}

/**
 * @return array All Mutator info.
 */
function get_mutators(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/mutators.json');
    return json_decode($json, true);
}

/**
 * @return array List of map names.
 */
function get_missions(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/missions.json');
    return json_decode($json, true);
}

/**
 * @return array All WeeklyMutation info.
 */
function get_weeklymutations(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/weeklymutations.json');
    return json_decode($json, true);
}

/**
 * @return array All MutationCycle info.
 */
function get_mutationcycle(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/mutationcycle.json');
    return json_decode($json, true);
}

function get_currentmutationcycle(): array
{
    $cycleList = get_mutationcycle();
    $mutationCount = count($cycleList);
    $mutationCycleStart = strtotime("2020-10-26T11:00:00.000Z");
    $today = time();
    $datediff = $today - $mutationCycleStart;

    $currentWeekIndex = floor($datediff / (7 * 24 * 60 * 60)) % $mutationCount;
    $currentWeekStart = $mutationCycleStart + (floor($datediff / (7 * 24 * 60 * 60)) * 7 * 24 * 60 * 60);
    return [$currentWeekIndex, $currentWeekStart];
}

/**
 * @return array All AmonUnit info.
 */
function get_amonunits(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/amonunits.json');
    return json_decode($json, true);
}

/**
 * @return array All PlayerUnit info.
 */
function get_playerunits(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/playerunits.json');
    return json_decode($json, true);
}
