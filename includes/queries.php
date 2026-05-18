<?php

function token(string $name): string
{
    return preg_replace('/[^a-z0-9]+/', '', strtolower($name));
}

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
    $mutationCycleStart = strtotime("2020-10-26T10:00:00.000Z");
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

/**
 * @return array All PlayerUpgrade info.
 */
function get_playerupgrades(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/playerupgrades.json');
    return json_decode($json, true);
}

/**
 * @return array All PlayerTalent info.
 */
function get_playertalents(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/playertalents.json');
    return json_decode($json, true);
}

/**
 * @param string $commander Commander to filter on.
 * @return array Distinct unit basenames for one commander.
 */
function get_playerunit_basenames(string $commander): array
{
    $basenames = [];
    foreach (get_playerunits() as $unit) {
        if ($unit['commander'] === $commander) {
            $basenames[$unit['basename']] = $unit['basename'];
        }
    }
    sort($basenames, SORT_STRING);
    return array_values($basenames);
}

/**
 * @param string $commander Commander to filter on.
 * @param string $basename Unit basename to filter on.
 * @return array Unit rows grouped like the old MySQL GROUP_CONCAT query.
 */
function get_playerunit_stats(string $commander, string $basename): array
{
    $groups = [];
    foreach (get_playerunits() as $unit) {
        if ($unit['commander'] !== $commander || $unit['basename'] !== $basename) {
            continue;
        }
        if (!isset($groups[$unit['name']])) {
            $groups[$unit['name']] = $unit;
            $groups[$unit['name']]['atkrange'] = number_format($unit['atkrange'], 2, '.', '');
            $groups[$unit['name']]['attackspeed'] = number_format($unit['attackspeed'], 2, '.', '');
            $groups[$unit['name']]['attribute'] = [];
            $groups[$unit['name']]['damage'] = [];
            $groups[$unit['name']]['attackbonus'] = [];
        }
        $groups[$unit['name']]['attribute'][] = $unit['attribute'] ?? 'None';
        $groups[$unit['name']]['damage'][] = $unit['damage'];
        $groups[$unit['name']]['attackbonus'][] = $unit['attackbonus'];
    }
    ksort($groups, SORT_STRING);
    return array_values($groups);
}

/**
 * @param string $commander Commander to filter on.
 * @param string $unit Unit to filter on.
 * @param string $icon Upgrade icon to filter on.
 * @return array Upgrade rows in the field shape expected by calculatestats.php.
 */
function get_playerupgrades_by_icon(string $commander, string $unit, string $icon): array
{
    return array_values(array_map(
        'normalize_playerupgrade_for_calculator',
        array_filter(get_playerupgrades(), function ($upgrade) use ($commander, $unit, $icon) {
            return $upgrade['commander'] === $commander
                && $upgrade['unit'] === $unit
                && $upgrade['icon'] === $icon;
        })
    ));
}

/**
 * @param string $commander Commander to filter on.
 * @param string $unit Unit to filter on.
 * @param int $level Royal Guard rank level.
 * @return array Mengsk Royal Guard veterancy upgrade rows.
 */
function get_mengsk_veterancy_playerupgrades(string $commander, string $unit, int $level): array
{
    return array_values(array_map(
        'normalize_playerupgrade_for_calculator',
        array_filter(get_playerupgrades(), function ($upgrade) use ($commander, $unit, $level) {
            return $upgrade['commander'] === $commander
                && $upgrade['unit'] === $unit
                && $upgrade['icon'] === 'veterancy'
                && intval($upgrade['name']) <= $level;
        })
    ));
}

/**
 * @param string $commander Commander to filter on.
 * @param string $unit Unit to filter on.
 * @return array Distinct upgrade rows for display.
 */
function get_playerupgrade_display_list(string $commander, string $unit): array
{
    $upgrades = [];
    foreach (get_playerupgrades() as $upgrade) {
        if ($upgrade['commander'] !== $commander || $upgrade['unit'] !== $unit) {
            continue;
        }
        $key = implode("\0", [$upgrade['name'], $upgrade['unit'], $upgrade['icon'], $upgrade['effect']]);
        $upgrades[$key] = [
            'name' => $upgrade['name'],
            'unit' => $upgrade['unit'],
            'icon' => $upgrade['icon'],
            'effect' => $upgrade['effect'],
        ];
    }
    usort($upgrades, function ($a, $b) {
        return $a['name'] <=> $b['name'];
    });
    return array_values($upgrades);
}

/**
 * @param string $commander Commander to filter on.
 * @param string $unit Unit to filter on.
 * @param array $filters Additional exact-match filters.
 * @return array Talent rows in the field shape expected by calculatestats.php.
 */
function get_playertalents_for_calculator(string $commander, string $unit, array $filters = []): array
{
    $talents = [];
    foreach (get_playertalents() as $talent) {
        if ($talent['commander'] !== $commander || $talent['unit'] !== $unit) {
            continue;
        }
        foreach ($filters as $key => $value) {
            if ($talent[$key] !== $value) {
                continue 2;
            }
        }
        $talents[] = normalize_playertalent_for_calculator($talent);
    }
    return $talents;
}

/**
 * @param string $commander Commander to filter on.
 * @param string $unit Unit to filter on.
 * @return array Distinct talent rows for display.
 */
function get_playertalent_display_list(string $commander, string $unit): array
{
    $talents = [];
    foreach (get_playertalents() as $talent) {
        if ($talent['commander'] !== $commander || $talent['unit'] !== $unit) {
            continue;
        }
        $key = implode("\0", [$talent['name'], $talent['nameid'], $talent['talenttype']]);
        $talents[$key] = [
            'name' => $talent['name'],
            'nameid' => $talent['nameid'],
            'talenttype' => $talent['talenttype'],
        ];
    }
    usort($talents, function ($a, $b) {
        return $a['name'] <=> $b['name'];
    });
    return array_values($talents);
}

function normalize_playerupgrade_for_calculator(array $upgrade): array
{
    return [
        'unit' => $upgrade['unit'],
        'name' => $upgrade['name'],
        'modifier' => $upgrade['modifier'],
        'modifier2' => $upgrade['modifiermode'] ?? '',
        'modifier3' => $upgrade['modifiertag'] ?? '',
        'value' => $upgrade['value'],
        'operation' => $upgrade['operation'],
        'upgradetype' => $upgrade['upgradetype'],
    ];
}

function normalize_playertalent_for_calculator(array $talent): array
{
    $talent['modifier2'] = $talent['modifierupgrade'] ?? '';
    unset($talent['modifierupgrade']);
    return $talent;
}

/**
 * @return array All Patch info.
 */
function get_patch_data(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/patchdata.json');
    return json_decode($json, true);
}

/**
 * @return array All MutatorCommanderTips info.
 */
function get_mutator_commander_tips(): array
{
    $json = file_get_contents(__DIR__ . '/../html/data/mutatorcommandertips.json');
    return json_decode($json, true);
}
