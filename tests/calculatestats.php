<?php

set_error_handler(function ($severity, $message, $file, $line) {
    throw new ErrorException($message, 0, $severity, $file, $line);
});

// Load the calculator's functions without running a request or emitting its error response.
$_GET = ['mode' => 0];
ob_start();
require __DIR__ . '/../source-html/scripts/calculatestats.php';
ob_end_clean();

function expectCalculatorResult($actual, $expected, string $description): void
{
    if ($actual !== $expected) {
        throw new RuntimeException($description . ': expected ' . var_export($expected, true) . ', got ' . var_export($actual, true));
    }
}

$cases = [
    // HP percentage bonuses normally stack on base HP; `extra` selects total HP.
    ['HP addition', 1000, ['operation' => 'add', 'modifier' => 'HP', 'value' => 200], ['baseHP' => 1000], '1,200'],
    ['Base HP bonus', 1200, ['operation' => 'multiply', 'modifier' => 'HP', 'value' => 1.25], ['baseHP' => 1000], '1,450'],
    ['Total HP bonus', 1200, ['operation' => 'multiply', 'modifier' => 'HP', 'value' => 1.25, 'extra' => 'total'], ['baseHP' => 1000], '1,500'],
    // Attack speed upgrades modify attack rate, then convert back to cooldown.
    ['Attack rate addition', 1.1, ['operation' => 'add', 'modifier' => 'Attack_Speed', 'value' => 0.25], [], '0.86'],
    ['Attack rate multiplication', 1.1, ['operation' => 'multiply', 'modifier' => 'Attack_Speed', 'value' => 1.25], [], '0.88'],
    ['Set cooldown', 1.1, ['operation' => 'set', 'modifier' => 'Attack_Speed', 'value' => 0.5], [], '0.50'],
    ['Attribute damage addition', ['10.00', '20.00'], ['operation' => 'add', 'modifier' => 'damage', 'value' => 2.5], [], ['12.50', '22.50']],
    ['Attribute damage multiplication', ['10.00', '20.00'], ['operation' => 'multiply', 'modifier' => 'damage', 'value' => 1.5], [], ['15.00', '30.00']],
    ['Set attribute damage', ['10.00', '20.00'], ['operation' => 'set', 'modifier' => 'damage', 'value' => 7], [], ['7.00', '7.00']],
    ['Formatted scalar input', '1,000.00', ['operation' => 'add', 'modifier' => 'damage', 'value' => 25], [], '1,025.00'],
    ['Four-thirds multiplier', 40, ['operation' => 'multiply', 'modifier' => 'damage', 'value' => 1.33], [], '53.33'],
    ['Two-thirds multiplier', 40, ['operation' => 'multiply', 'modifier' => 'damage', 'value' => 0.67], [], '26.67'],
    ['Integer precision', 5, ['operation' => 'set', 'modifier' => 'Armor', 'value' => 2.6], [], '3'],
    ['Unknown operation', 15, ['operation' => 'unknown', 'modifier' => 'HP', 'value' => 2], ['baseHP' => 10], 15],
];

foreach ($cases as [$description, $entry, $upgrade, $fullUnitData, $expected]) {
    expectCalculatorResult(applyUpgrade($entry, $upgrade, $fullUnitData), $expected, $description);
}

foreach (['add' => 12, 'multiply' => 20, 'set' => 2, 'unknown' => 10] as $operation => $expectedValue) {
    $upgrades = [
        ['name' => 'Combat Shield', 'modifier' => 'HP', 'value' => 10],
        ['name' => 'Other Upgrade', 'modifier' => 'HP', 'value' => 10],
        ['name' => 'Combat Shield', 'modifier' => 'Armor', 'value' => 10],
    ];
    $expected = $upgrades;
    $expected[0]['value'] = $expectedValue;
    $result = applyUpgradeUpgrades($upgrades, [
        ['operation' => $operation, 'value' => 2, 'modifier' => 'HP', 'modifier2' => 'Combat Shield'],
    ]);
    expectCalculatorResult($result, $expected, 'Upgrade matching: ' . $operation);
}

// A mode-specific upgrade must not spill into another mode when its stat is missing.
$unitStats = [
    'modes' => [
        ['modeName' => 'Target'],
        ['modeName' => 'Other', 'Range' => 5],
    ],
];
$upgrade = ['name' => 'Range boost', 'modifier' => 'Range', 'modifier2' => 'Target', 'operation' => 'add', 'value' => 1];
expectCalculatorResult(applyUpgrades($unitStats, [$upgrade]), $unitStats, 'Missing stat leaves other modes unchanged');

$otherUpgrade = $upgrade;
$otherUpgrade['modifier2'] = 'Other';
$expected = $unitStats;
$expected['modes'][1]['Range'] = '6.00';
expectCalculatorResult(applyUpgrades($unitStats, [$upgrade, $otherUpgrade]), $expected, 'Following upgrade applies only to its own mode');

echo "20 PHP calculator checks passed\n";
