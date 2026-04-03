<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    return;
}
if (!isset($_GET['mode'])) {
    echo("Error!");
    return;
} else {
    $mode = $_GET['mode'];
}

//Globals here
$round2 = ['Attack_Speed', 'damage', 'Move_Speed', "Range", "Vision"];
$legionUnits = ["Zealot", "Void Ray", "Dark Archon"];
$royalGuard = ['Aegis Guard', "Blackhammer", "Emperors Shadow", "Pride of Augustgrad", "Shock Division", "Sky Fury"];
$shieldCommanders = ['Alarak', 'Artanis', 'Fenix', 'Karax', 'Vorazun', 'Zeratul'];

//Passed data will be received in one of  three forms:
//Mode:1    [commander]                                   : Commander was clicked         -> Generate a list of units for that commander
//Mode:2    [commander, unit]                             : Unit was clicked              -> Get basic stats for that unit
//Mode:3    [commander, selectedUnit, upgrades, level]    : Recalculate was clicked        -> Get basic stats for that unit, apply the upgrades, find stats that changed

switch ($mode) {
    case 1:
        //Mode:1    [commander] : Commander was clicked -> Generate a list of units for that commander
        $commander = $_GET['commander'];
        checkVariable($commander, "text");
        include 'sqlconnection.php';

        $sql = "SELECT DISTINCT basename
                FROM playerunits
                WHERE commander='$commander'
                ORDER BY basename ASC";
        $result = mysqli_query($con, $sql);
        $unitsList = "<ul>\r\n";

        while ($row = mysqli_fetch_array($result)) {
            $unitsList .= "<li>" . $row['basename'] . "</li>\r\n";
        }
        $unitsList .= "</ul>";
        echo($unitsList);
        $con->close();
        return;
    case 2:
        //Mode:2    [commander, unit] : Unit was clicked -> Get basic stats for that unit
        $commander = $_GET['commander'];
        $unit = $_GET['unit'];
        checkVariable($commander, 'text');
        checkVariable($unit, 'text');

        $returnArray = ["",""];
        $unitStatsString = "";

        $unitStats = getUnitStats($commander, $unit);
        if (count($unitStats) == 0) {
            echo("Error!");
            return;
        }
        $unitStats = standardizeStatsTemplate($unit, $unitStats);
        if ($commander == "Zeratul" && in_array($unitStats['unitName'], $legionUnits)) {
            $unitStats = applyShieldUpgrades($unitStats, $commander, 0);
        }
        $unitStatsString = convertStatsToOutput($unitStats);
        $returnArray[0] = $unitStatsString;

        $upgradesString = getUnitUpgradesOutput($commander, $unit);
        $returnArray[1] = $upgradesString;
        print(json_encode($returnArray));
        return;

    case 3:
        //Mode:3    [commander, selectedUnit, upgrades, [ranklevel]/[attacklevel] : Recalculate was clicked -> Get basic stats for that unit, apply the upgrades, find stats that changed
        $commander = $_GET['commander'];
        $unit = $_GET['selectedUnit'];
        if (isset($_GET['upgrades'])) {
            $upgrades = $_GET['upgrades'];
        } else {
            $upgrades = [];
        }
        if (isset($_GET['masteries'])) {
            $masteries = $_GET['masteries'];
        } else {
            $masteries = [];
        }
        if (isset($_GET['prestige'])) {
            $prestige = $_GET['prestige'];
        } else {
            $prestige = "";
        }
        checkVariable($commander, 'text');
        checkVariable($unit, 'text');
        $unitStats = getUnitStats($commander, $unit);
        $unitStats = standardizeStatsTemplate($unit, $unitStats);

        if (isset($_GET['ranklevel'])) {
            $rankLevel = $_GET['ranklevel'];
            checkVariable($rankLevel, 'number');
        } else {
            $rankLevel = 0;
        }
        //Get all selected upgrades
        $upgradesArray = generateUpgradesArray($commander, $unit, $upgrades, $rankLevel);

        //Handle upgrades. First apply masteries, and then prestiges. Apply any buffs to upgrades first
        $upgradeUpgradesArray = generateMasteryUpgradeUpgradesArray($commander, $unit, $masteries);
        $upgradesArray = applyUpgradeUpgrades($upgradesArray, $upgradeUpgradesArray);
        $upgradeUpgradesArray = generatePrestigeUpgradeUpgradesArray($commander, $unit, $prestige);
        $upgradesArray = applyUpgradeUpgrades($upgradesArray, $upgradeUpgradesArray);

        //Get unit changes with prestiges and masteries
        $masteriesArray = generateMasteriesArray($commander, $unit, $masteries);
        $prestigeArray = generatePrestigesArray($commander, $unit, $prestige, "prestige");

        //Set up units properly in case any changes happen
        $newUnitStats = handlePreExceptions($unitStats, $rankLevel);
        $newUnitStats = preUpgrade($newUnitStats, $upgradesArray);

        //Apply masteries, then prestiges
        if (!empty($masteriesArray)) {
            $newUnitStats = applyUpgrades($newUnitStats, $masteriesArray);
        }
        if (!empty($prestigeArray)) {
            $newUnitStats = applyUpgrades($newUnitStats, $prestigeArray);
        }

        //Apply Attack/Armor/Shield upgrades
        if (isset($_GET['ranklevel'])) {
            $newUnitStats = applyRankUpgrades($newUnitStats, $rankLevel);
        } elseif (isset($_GET['artifactslevel'])) {
            $attackLevel = $_GET['artifactslevel'];
            $armorLevel = $_GET['artifactslevel'];
            $shieldLevel = $_GET['artifactslevel'];
            checkVariable($attackLevel, 'number');
            checkVariable($armorLevel, 'number');
            checkVariable($shieldLevel, 'number');
            $newUnitStats = applyAttackUpgrades($newUnitStats, $attackLevel);
            $newUnitStats = applyArmorUpgrades($newUnitStats, $commander, $armorLevel);
            $newUnitStats = applyShieldUpgrades($newUnitStats, $commander, $shieldLevel);
        } else {
            $attackLevel = $_GET['attacklevel'];
            $armorLevel = $_GET['armorlevel'];
            checkVariable($attackLevel, 'number');
            checkVariable($armorLevel, 'number');
            $newUnitStats = applyAttackUpgrades($newUnitStats, $attackLevel);
            $newUnitStats = applyArmorUpgrades($newUnitStats, $commander, $armorLevel);

            if (in_array($commander, $shieldCommanders)) {
                $shieldLevel = $_GET['shieldlevel'];
                checkVariable($shieldLevel, 'number');
                $newUnitStats = applyShieldUpgrades($newUnitStats, $commander, $shieldLevel);
            }
        }

        //Apply upgrades
        $newUnitStats = applyUpgrades($newUnitStats, $upgradesArray);

        //Search for any post upgrade upgrades that are valid and apply if possible
        $prestigeArray = generatePrestigesArray($commander, $unit, $prestige, "post");
        if (!empty($prestigeArray)) {
            $newUnitStats = applyUpgrades($newUnitStats, $prestigeArray);
        }

        $newUnitStats = handlePostExceptions($newUnitStats, $upgradesArray);
        //Generate the final output
        $finalUnitStats = compareStats($unitStats, $newUnitStats);
        $unitStatsString = convertStatsToOutput($finalUnitStats);
        echo $unitStatsString;
        return;

    default:
        echo("Error!");
        return;
}

function convertStatsToOutput($unitStats)
{
    $standardStats = ['Shields','Shield_Armor','HP','Armor','Energy','Move_Speed','Vision'];
    $modeStats = ['Armor','Move_Speed','Vision','Range','Attack_Speed','Hits','Damage'];
    $outputString = "";
    $outputString .= "<span class='title'>" . $unitStats['unitName'] . "</span>\r\n";
    $outputString .= "<span style='text-align:center;display:block'><img src='/images/commanderdata/unitupgrades/iconmineral.png' alt='Minerals'>/<img src='/images/commanderdata/unitupgrades/icongas_" . strtolower($unitStats['race']) . ".png' alt='Gas'><br>";
    $outputString .= "{$unitStats['mineralCost']}/{$unitStats['vespeneCost']}</span><br>";
    $outputString .= "<span style='display:block'><img style='margin-right:5px;' src='/images/commanderdata/unitupgrades/icontime_" . strtolower($unitStats['race']) . ".png' alt='Build Time'>{$unitStats['time']}</span><br>";
    $outputString .= "<span style='display:block'><img style='margin-right:5px;' src='/images/commanderdata/unitupgrades/iconsupply_" . strtolower($unitStats['race']) . ".png' alt='Supply'>{$unitStats['supply']}</span><br>";

    foreach ($standardStats as $stat) {
        if (isset($unitStats[$stat])) {
            if ($unitStats[$stat] != 0 || strpos($unitStats[$stat], "modified") !== false) {
                $statClass = str_replace("_", "", $stat);
                $statTitle = str_replace("_", " ", $stat);
                $outputString .= "<span id='unit{$statClass}'>$statTitle: {$unitStats[$stat]}</span><br>\r\n";
            }
        }
    }

    $outputString .= "<span class='title'>Tags</span>\r\n" . str_replace(",", "<br>\r\n", $unitStats['Tags']);

    foreach ($unitStats['modes'] as $mode) {
        $outputString .= "<span class='title'>{$mode['modeName']}</span>\r\n";
        foreach ($modeStats as $stat) {
            if (isset($mode[$stat])) {
                $statClass = str_replace("_", "", $stat);
                $statTitle = str_replace("_", " ", $stat);
                $outputString .= "<span id='unit{$statClass}'>$statTitle: {$mode[$stat]}</span><br>\r\n";
            }
        }
        if (isset($mode['attribute'])) {
            foreach ($mode['attribute'] as $index => $attribute) {
                if ($attribute == "None") {
                    $attributeString = "Damage: ";
                } else {
                    $attributeString = "(vs.$attribute): ";
                }

                $outputString .= $attributeString . $mode['damage'][$index] . " (" . $mode['damageResult'][$index] . " DPS)<br>\r\n";
            }
        }
    }

    if (isset($unitStats['Notes'])) {
        $outputString .= "<span class='title'>Notes</span>\r\n{$unitStats['Notes']}";
    }

    return $outputString;
}
function standardizeStatsTemplate($unit, $unitStats)
{
    $returnArray = [];

    $returnArray['race'] = $unitStats[0]['race'];
    $returnArray['unitName'] = $unit;
    $returnArray['mineralCost'] = $unitStats[0]['mcost'];
    $returnArray['vespeneCost'] = $unitStats[0]['vcost'];
    $returnArray['time'] = $unitStats[0]['buildtime'];
    $returnArray['supply'] = fixNumber($unitStats[0]['supply']);
    $returnArray['Shields'] = $unitStats[0]['shields'];
    $returnArray['Shield_Armor'] = $unitStats[0]['shieldarmor'];
    $returnArray['HP'] = $unitStats[0]['hp'];
    $returnArray['baseHP'] = $unitStats[0]['hp'];
    $returnArray['Armor'] = $unitStats[0]['armor'];
    $returnArray['Energy'] = $unitStats[0]['energy'];
    //Check if these stats have been modified by the mode. If so, move them to the mode
    $sameMovement = true;
    $sameVision = true;
    $movement = $unitStats[0]['movementspeed'];
    $vision = $unitStats[0]['sightrange'];
    foreach ($unitStats as $value) {
        if ($value['movementspeed'] != $movement) {
            $sameMovement = false;
        }
        if ($value['sightrange'] != $vision) {
            $sameVision = false;
        }
    }
    if ($sameMovement) {
        $returnArray['Move_Speed'] = $unitStats[0]['movementspeed'];
    }
    if ($sameVision) {
        $returnArray['Vision'] = $unitStats[0]['sightrange'];
    }

    $returnArray['hpbonus'] = $unitStats[0]['hpbonus'];
    $returnArray['armorbonus'] = $unitStats[0]['armorbonus'];
    $returnArray['shieldbonus'] = $unitStats[0]['shieldbonus'];

    if ($unitStats[0]['notes'] != "") {
        $returnArray['Notes'] = $unitStats[0]['notes'];
    }
    $returnArray['Tags'] = $unitStats[0]['tags'];

    $returnArray['modes'] = [];
    foreach ($unitStats as $mode) {
        $tempArray = [];
        $tempArray['modeName'] = trim(str_replace($unit, "", $mode['name']));
        if ($tempArray['modeName'] == "") {
            $tempArray['modeName'] = "Weapon";
        }
        if (!$sameMovement) {
            $tempArray['Move_Speed'] = $mode['movementspeed'];
        }
        if (!$sameVision) {
            $tempArray['Vision'] = $mode['sightrange'];
        }

        if ($unitStats[0]['combatunit']) {
            $tempArray['Range'] = $mode['atkrange'];
            $tempArray['Attack_Speed'] = $mode['attackspeed'];
            $tempArray['Hits'] = $mode['attacks'];
            $tempArray['damageResult'] = [];
            $tempArray['attribute'] = $mode['attribute'];
            $tempArray['damage'] = $mode['damage'];
            $tempArray['attackbonus'] = $mode['attackbonus'];

            foreach ($mode['attribute'] as $index => $attribute) {
                if ($mode['attackspeed'] == 0) {
                    $dps = 0;
                } else {
                    $dps = number_format(floatval($mode['damage'][$index]) * $mode['attacks'] / $mode['attackspeed'], 2);
                }
                $tempArray['damageResult'][] = $dps;
            }
        }

        if ($unitStats[0]['combatunit'] || !$sameMovement || !$sameVision) {
            $returnArray['modes'][] = $tempArray;
        }
    }
    return $returnArray;
}
function compareStats($oldStats, &$newStats)
{
    foreach ($newStats as $key => &$value) {
        if (is_array($value)) {
            compareStats($oldStats[$key], $value);
        } else {
            if (isset($oldStats[$key])) {
                if ($oldStats[$key] != $value) {
                    $value = "<span class='modified'>$value</span>";
                }
            } else {
                $value = "<span class='modified'>$value</span>";
            }
        }
    }
    return $newStats;
}

function handlePostExceptions($unitStats, &$upgradesArray)
{
    foreach ($upgradesArray as $upgrade) {
        if ($upgrade['name'] == "Advanced Siege Tech") {
            $armorValue = $unitStats['Armor'];
            unset($unitStats['Armor']);
            foreach ($unitStats['modes'] as &$mode) {
                if ($mode['modeName'] == "(Siege Mode)") {
                    $mode['Armor'] = $armorValue + 3;
                } else {
                    $mode['Armor'] = $armorValue;
                }
            }
        }
        if ($upgrade['name'] == "2") {
            if ($upgrade['unit'] == "Shock Division" && $upgrade['modifier'] == "Vision") {
                $visionValue = $unitStats['Vision'];
                unset($unitStats['Vision']);
                foreach ($unitStats['modes'] as &$mode) {
                    if ($mode['modeName'] == "(Siege Mode)") {
                        $mode['Vision'] = $visionValue + 2;
                    } else {
                        $mode['Vision'] = $visionValue;
                    }
                }
            }
        }
        if ($upgrade['name'] == "Redline Power Cells") {
            $unitStats['modes'][0]['damage'][0] += 60;
            $dps = number_format(floatval($unitStats['modes'][0]['damage'][0]) / $unitStats['modes'][0]['Attack_Speed'], 2);
            $unitStats['modes'][0]['damageResult'][0] = $dps;
        }
    }
    return $unitStats;
}

function handlePreExceptions($unitStats, $level)
{
    $skyFuryArray = ['attribute', 'damage', 'damageResult', 'attackbonus'];
    //At Rank 1: Sky Fury has the Armored weapon removed from the fighter mode. Basic weapon damage also changes
    if ($unitStats['unitName'] == "Sky Fury" and $level >= 1) {
        foreach ($unitStats['modes'] as &$mode) {
            if ($mode['modeName'] == "(Fighter Mode)") {
                foreach ($mode['attribute'] as $index => $attribute) {
                    if ($attribute == "Armored") {
                        foreach ($skyFuryArray as $element) {
                            unset($mode[$element][$index]);
                            $mode[$element] = array_values($mode[$element]);
                        }
                    } else {
                        $mode['damage'][$index] = 21;
                    }
                }
            }
        }
    }
    return $unitStats;
}

function preUpgrade($unitStats, &$upgradesArray)
{
    $preupgradesArray = [];
    foreach ($upgradesArray as $key => $upgrade) {
        if ($upgrade['upgradetype'] == "preupgrade") {
            $preupgradesArray[] = $upgrade;
            unset($upgradesArray[$key]);
        }
    }
    $unitStats = applyUpgrades($unitStats, $preupgradesArray);

    return $unitStats;
}
function applyRankUpgrades($unitStats, $level)
{
    $unitStats['HP'] = $unitStats['HP'] + $unitStats['hpbonus'] * $level;
    $unitStats['Armor'] = $unitStats['Armor'] + $unitStats['armorbonus'] * $level;
    $unitStats['Energy'] = $unitStats['Energy'] + ($unitStats['Energy'] * 0.25 * $level);
    foreach ($unitStats['modes'] as &$mode) {
        foreach ($mode['attribute'] as $index => $attribute) {
            $mode['damage'][$index] = $mode['damage'][$index] * (1 + ($level * 0.25));
            $dps = number_format(floatval($mode['damage'][$index]) * $mode['Hits'] / $mode['Attack_Speed'], 2);
            $mode['damageResult'][$index] = $dps;
        }
    }
    return $unitStats;
}
function applyShieldUpgrades($unitStats, $commander, $level)
{
    $legionLeaders = ["Telbrus", "Zoraya","Serdath"];
    global $legionUnits;
    $unitStats['Shield_Armor'] = $unitStats['Shield_Armor'] + $unitStats['shieldbonus'] * $level;

    if ($commander == "Zeratul") {
        if (in_array($unitStats['unitName'], $legionLeaders)) {
            $unitStats['Shields'] = $unitStats['Shields'] + 100 * $level;
            if ($unitStats['Energy'] != 0) {
                $unitStats['Energy'] = $unitStats['Energy'] + 100 * $level;
            }
        }
        if (in_array($unitStats['unitName'], $legionUnits)) {
            if ($level == 3) {
                $level = 2;
            }
            if ($unitStats['unitName'] == "Zealot") {
                $initial = 10;
                $jump = 3;
            } elseif ($unitStats['unitName'] == "Void Ray") {
                $initial = 4;
                $jump = 1;
            } else {
                $initial = 3;
                $jump = 1;
            }
            $totalSpawned = $initial + $jump * $level;
            $unitStats['mineralCost'] = number_format($unitStats['mineralCost'] / $totalSpawned);
        }
        if ($unitStats['unitName'] == "Zeratul") {
            $unitStats['Shields'] = $unitStats['Shields'] + 50 * $level;
        }
    }
    return $unitStats;
}
function applyArmorUpgrades($unitStats, $commander, $level)
{
    $unitStats['Armor'] = $unitStats['Armor'] + $unitStats['armorbonus'] * $level;

    if ($commander == "Raynor" || $commander == "Tychus") {
        $unitStats['HP'] += intval($unitStats['hpbonus'] * $level);
    }
    return $unitStats;
}
function applyAttackUpgrades($unitStats, $level)
{
    foreach ($unitStats['modes'] as &$mode) {
        if (isset($mode['attribute'])) {
            foreach ($mode['attribute'] as $index => $attribute) {
                if ($mode['Attack_Speed'] == 0) {
                    $dps = 0;
                } else {
                    $mode['damage'][$index] = $mode['damage'][$index] + $level * $mode['attackbonus'][$index];
                    $dps = number_format(floatval($mode['damage'][$index]) * $mode['Hits'] / $mode['Attack_Speed'], 2);
                }
                $mode['damageResult'][$index] = $dps;
            }
        }
    }
    return $unitStats;
}

function applyUpgradeUpgrades($upgradesArray, $upgradeUpgradesArray)
{
    foreach ($upgradeUpgradesArray as $upgrade) {
        foreach ($upgradesArray as &$item) {
            if ($item['name'] == $upgrade['modifier2'] && $item['modifier'] == $upgrade['modifier']) {
                switch ($upgrade['operation']) {
                    case "add":
                        $operation = "+";
                        break;
                    case "multiply":
                        $operation = "*";
                        break;
                    case "set":
                        $operation = "=";
                        break;
                    default:
                        return $entry;
                }

                if ($operation != "=") {
                    $item['value'] = eval("return " . $item['value'] . "$operation" . $upgrade['value'] . ";");
                } else {
                    $item['value'] = $upgrade['value'];
                }
            }
        }
    }
    return $upgradesArray;
}

function applyUpgrades($unitStats, $upgradesArray)
{
    $variableStats = ['Move_Speed', "Vision"];
    foreach ($upgradesArray as $upgrade) {
        if (!isset($upgrade['modifier2'])) {
            $upgrade['modifier2'] = "";
        }
        if (!isset($upgrade['modifier3'])) {
            $upgrade['modifier3'] = "";
        }
        if ($upgrade['modifier2'] == "") {
            if ($upgrade['modifier3'] == "") {
                //Apply upgrade to everything
                if (isset($unitStats[$upgrade['modifier']])) {
                    $unitStats[$upgrade['modifier']] = applyUpgrade($unitStats[$upgrade['modifier']], $upgrade, $unitStats);
                } else {
                    foreach ($unitStats['modes'] as &$mode) {
                        if (isset($mode[$upgrade['modifier']])) {
                            $mode[$upgrade['modifier']] = applyUpgrade($mode[$upgrade['modifier']], $upgrade, $unitStats);
                        }
                    }
                }
            } else {
                //Apply upgrade to all modes single attribute only
                foreach ($unitStats['modes'] as &$mode) {
                    $found = false;
                    foreach ($mode['attribute'] as $index => $attribute) {
                        if ($attribute == $upgrade['modifier3']) {
                            $found = true;
                            $mode[$upgrade['modifier']][$index] = applyUpgrade($mode[$upgrade['modifier']][$index], $upgrade, $unitStats);
                        }
                    }
                    //It is possible that the attribute did not exist, so add it
                    if (!$found) {
                        $count = count($mode['attribute']);
                        $mode['attribute'][] = $upgrade['modifier3'];
                        $mode['damage'][] = $mode['damage'][0];
                        $mode['attackbonus'][] = $mode['attackbonus'][0];
                        $mode['damageResult'][] = 0;
                        $mode[$upgrade['modifier']][$count] = applyUpgrade($mode[$upgrade['modifier']][$count], $upgrade, $unitStats);
                    }
                }
            }
        } else {
            if ($upgrade['modifier3'] == "") {
                //Apply upgrade to a single mode
                foreach ($unitStats['modes'] as &$mode) {
                    if ($mode['modeName'] == $upgrade['modifier2']) {
                        if (isset($mode[$upgrade['modifier']])) {
                            $mode[$upgrade['modifier']] = applyUpgrade($mode[$upgrade['modifier']], $upgrade, $unitStats);
                        } else {
                            foreach ($unitStats['modes'] as &$mode) {
                                if (isset($mode[$upgrade['modifier']])) {
                                    $mode[$upgrade['modifier']] = applyUpgrade($mode[$upgrade['modifier']], $upgrade, $unitStats);
                                }
                            }
                        }
                    }
                }
            } else {
                //Apply upgrade to a single attribute in a single mode
                foreach ($unitStats['modes'] as &$mode) {
                    if ($mode['modeName'] == $upgrade['modifier2']) {
                        $found = false;
                        foreach ($mode['attribute'] as $index => $attribute) {
                            if ($attribute == $upgrade['modifier3']) {
                                $found = true;
                                $mode[$upgrade['modifier']][$index] = applyUpgrade($mode[$upgrade['modifier']][$index], $upgrade, $unitStats);
                            }
                        }
                        //It is possible that the attribute did not exist, so add it
                        if (!$found) {
                            $count = count($mode['attribute']);
                            $mode['attribute'][] = $upgrade['modifier3'];
                            $mode['damage'][] = $mode['damage'][0];
                            $mode['attackbonus'][] = $mode['attackbonus'][0];
                            $mode['damageResult'][] = 0;
                            $mode[$upgrade['modifier']][$count] = applyUpgrade($mode[$upgrade['modifier']][$count], $upgrade, $unitStats);
                        }
                    }
                }
            }
        }
    }

    //DPS values might have changed, so recalculate them
    foreach ($unitStats['modes'] as &$mode) {
        if (isset($mode['attribute'])) {
            foreach ($mode['attribute'] as $index => $attribute) {
                if ($mode['Attack_Speed'] == 0) {
                    $dps = 0;
                } else {
                    $dps = number_format(floatval($mode['damage'][$index]) * $mode['Hits'] / $mode['Attack_Speed'], 2);
                }
                $mode['damageResult'][$index] = $dps;
            }
        }
    }

    return $unitStats;
}

function applyUpgrade($entry, $upgrade, $fullUnitData)
{
    global $round2;
    switch ($upgrade['operation']) {
        case "add":
            $operation = "+";
            break;
        case "multiply":
            $operation = "*";
            break;
        case "set":
            $operation = "=";
            break;
        default:
            return $entry;
    }

    //Fix 1/3 and 2/3 stuff
    if ($upgrade['value'] == 1.33) {
        $upgrade['value'] = 4 / 3;
    }
    if ($upgrade['value'] == 0.67) {
        $upgrade['value'] = 2 / 3;
    }
    //Set up the result precision
    if (in_array($upgrade['modifier'], $round2)) {
        $decimalSize = 2;
    } else {
        $decimalSize = 0;
    }
    if (is_array($entry)) {
        //Looping through attribute damages
        foreach ($entry as &$stat) {
            if ($operation != "=") {
                $tempVal = eval("return " . $stat . "$operation" . $upgrade['value'] . ";");
                $stat = number_format($tempVal, $decimalSize);
            } else {
                $stat = number_format($upgrade['value'], $decimalSize);
            }
        }
    } else {
        if ($operation != "=") {
            //Handle Attack speeds differently
            if ($upgrade['modifier'] == "Attack_Speed") {
                $tempVal = eval("return 1/(" . 1 / $entry . "$operation" . $upgrade['value'] . ");");
            } elseif ($upgrade['modifier'] == "HP") {
                if ($upgrade['operation'] == "multiply") {
                    //If operation is multiply it can multiply on the total HP or the base
                    if (isset($upgrade['extra'])) {
                        $tempVal = eval("return " . $entry . "$operation" . $upgrade['value'] . ";");
                    } else {
                        //Use baseHP
                        $upgrade['value'] = $upgrade['value'] - 1;
                        $tempVal = $entry + eval("return " . $fullUnitData['baseHP'] . "$operation" . $upgrade['value'] . ";");
                    }
                } else {
                    $tempVal = eval("return " . $entry . "$operation" . $upgrade['value'] . ";");
                }
            } else {
                $entry = floatval(str_replace(',', "", $entry));
                $tempVal = eval("return " . $entry . "$operation" . $upgrade['value'] . ";");
            }
            $entry = number_format($tempVal, $decimalSize);
        } else {
            $entry = number_format($upgrade['value'], $decimalSize);
        }
    }
    return $entry;
}

function generateMasteryUpgradeUpgradesArray($commander, $unit, $masteries)
{
    include 'sqlconnection.php';
    $upgradesList = [];

    foreach ($masteries as $value) {
        if ($value[1] > 0) {
            checkVariable($value[0], 'text');
            $sql = "SELECT value, modifier, modifier2, operation, operationtype
                    FROM playertalents
                    WHERE commander='$commander'
                    AND unit = '$unit'
                    AND nameid='{$value[0]}'
                    AND target='upgrade'";
            $result = mysqli_query($con, $sql);
            while ($row = mysqli_fetch_array($result)) {
                if ($row['operation'] == "multiply") {
                    if ($row['operationtype'] == "increase") {
                        $row['value'] = ($row['value'] * $value[1]) + 1;
                    } else {
                        $row['value'] = 1 - ($row['value'] * $value[1]);
                    }
                } else {
                    $row['value'] = $row['value'] * $value[1];
                }
                $upgradesList[] = $row;
            }
        }
    }
    $con->close();
    return $upgradesList;
}

function generatePrestigeUpgradeUpgradesArray($commander, $unit, $prestige)
{
    if ($prestige == "") {
        return [];
    }
    include 'sqlconnection.php';
    $upgradesList = [];
    checkVariable($prestige, 'text');
    $sql = "SELECT modifier, modifier2, value, operation
            FROM playertalents
            WHERE commander='$commander'
            AND unit = '$unit'
            AND nameid='$prestige'
            AND target='upgrade'
            AND talenttype='prestige'";
    $result = mysqli_query($con, $sql);
    while ($row = mysqli_fetch_array($result)) {
        $upgradesList[] = $row;
    }
    $con->close();
    return $upgradesList;
}

function generatePrestigesArray($commander, $unit, $prestige, $phase)
{
    if ($prestige == "") {
        return [];
    }
    include 'sqlconnection.php';
    $upgradesList = [];

    checkVariable($prestige, 'text');
    $sql = "SELECT modifier, extra, value, operation
            FROM playertalents
            WHERE commander='$commander'
            AND unit = '$unit'
            AND nameid='$prestige'
            AND target='unit'
            AND talenttype='$phase'";
    $result = mysqli_query($con, $sql);
    while ($row = mysqli_fetch_array($result)) {
        $upgradesList[] = $row;
    }
    $con->close();
    return $upgradesList;
}

function generateMasteriesArray($commander, $unit, $masteries)
{
    include 'sqlconnection.php';
    $upgradesList = [];

    foreach ($masteries as $value) {
        if ($value[1] > 0) {
            checkVariable($value[0], 'text');
            $sql = "SELECT modifier, value, operation, operationtype
                    FROM playertalents
                    WHERE commander='$commander'
                    AND unit = '$unit'
                    AND nameid='{$value[0]}'
                    AND target='unit'
                    AND talenttype='mastery'";
            $result = mysqli_query($con, $sql);
            while ($row = mysqli_fetch_array($result)) {
                //Fix 1/3 and 2/3 stuff
                if ($row['value'] == 0.0066) {
                    $row['value'] = 2 / 300;
                }
                if ($row['value'] == 0.0333) {
                    $row['value'] = 1 / 30;
                }
                if ($row['operation'] == "multiply") {
                    if ($row['operationtype'] == "increase") {
                        $row['value'] = ($row['value'] * $value[1]) + 1;
                    } else {
                        $row['value'] = 1 - ($row['value'] * $value[1]);
                    }
                } else {
                    $row['value'] = $row['value'] * $value[1];
                }
                $upgradesList[] = $row;
            }
        }
    }
    $con->close();
    return $upgradesList;
}

function generateUpgradesArray($commander, $unit, $upgrades, $level)
{
    include 'sqlconnection.php';
    $upgradesList = [];

    foreach ($upgrades as $value) {
        checkVariable($value, 'text');
        $sql = "SELECT name, modifier, modifier2, modifier3, value, operation, upgradetype
                FROM playerupgrades
                WHERE commander='$commander'
                AND unit = '$unit'
                AND icon='$value'";
        $result = mysqli_query($con, $sql);
        while ($row = mysqli_fetch_array($result)) {
            $upgradesList[] = $row;
        }
    }
    //If the unit is a Mengsk Royal Guard, pull the respective upgrades and apply them automatically based on their rank
    if ($commander == "Mengsk") {
        $sql = "SELECT unit, name, modifier, modifier2, modifier3, value, operation, upgradetype
                FROM playerupgrades
                WHERE commander='$commander'
                AND unit = '$unit'
                AND icon='veterancy'
                AND CONVERT(name, UNSIGNED INTEGER) <= $level";
        $result = mysqli_query($con, $sql);
        while ($row = mysqli_fetch_array($result)) {
            $upgradesList[] = $row;
        }
    }
    $con->close();
    return $upgradesList;
}

function getUnitStats($commander, $unit)
{
    include 'sqlconnection.php';
    $sql = "SELECT name, race, combatunit, mcost, vcost, supply, buildtime, hp, shields, armor, shieldarmor, energy, movementspeed, sightrange, tags,
            atkrange, attackspeed, attacks, GROUP_CONCAT(IFNULL(attribute, 'None')) as attribute, GROUP_CONCAT(damage) as damage,
            GROUP_CONCAT(attackbonus) as attackbonus, hpbonus, armorbonus, shieldbonus, notes
            FROM playerunits
            WHERE commander='$commander' AND basename = '$unit'
            GROUP BY name
            ORDER BY name ASC";
    $result = mysqli_query($con, $sql);
    $unitStats = [];
    while ($row = mysqli_fetch_array($result)) {
        if (strpos($row['attribute'], ',') !== false) {
            $row['attribute'] = explode(',', $row['attribute']);
            $row['damage'] = explode(',', $row['damage']);
            $row['attackbonus'] = explode(',', $row['attackbonus']);
        } else {
            $row['attribute'] = [$row['attribute']];
            $row['damage'] = [$row['damage']];
            $row['attackbonus'] = [$row['attackbonus']];
        }
        $unitStats[] = $row;
    }
    $con->close();
    return $unitStats;
}

function getUnitUpgradesOutput($commander, $unit)
{
    global $royalGuard;
    global $shieldCommanders;
    include 'sqlconnection.php';
    $sql = "SELECT DISTINCT name, unit, icon, effect
            FROM playerupgrades
            WHERE commander='$commander' AND unit= '$unit'
            ORDER BY name ASC";
    $result = mysqli_query($con, $sql);

    $upgradeList = [];
    while ($row = mysqli_fetch_array($result)) {
        $upgradeList[] = $row;
    }

    $sql = "SELECT DISTINCT name, nameid, talenttype
            FROM playertalents
            WHERE commander='$commander' AND unit= '$unit'
            ORDER BY name ASC";
    $result = mysqli_query($con, $sql);

    $masteryList = [];
    $prestigeList = [];
    while ($row = mysqli_fetch_array($result)) {
        if ($row['talenttype'] == "mastery") {
            $masteryList[] = $row;
        } else {
            $prestigeList[str_replace(" ", "", $row['name'])] = $row;
        }
    }
    $con->close();

    require __DIR__ . '/../data/queries.php';

    $commanderData = get_commanders($commander);
    $commanderPrestiges = [
        $commanderData['motto'],
        $commanderData['prestige1'],
        $commanderData['prestige2'],
        $commanderData['prestige3'],
    ];
    $basePrestige = $commanderPrestiges[0];

    $upgradeString = "<div class='upgradesList'>";
    //Loop through all found upgrades, parse the icons and descriptions for display for selection
    if (!empty($upgradeList)) {
        $upgradeCount = 0;
        foreach ($upgradeList as $value) {
            //Pick the correct icon location: if it's a hero upgrade, it's in the hero folder, otherwise, in unitupgrades
            if ($value['unit'] !== $commander) {
                $path = "unitupgrades";
            } else {
                $path = "hero";
            }
            //Ignore the veterancy upgrades... these will be automatically applied
            if ($value['icon'] !== "veterancy") {
                $upgradeString .= "<img class='upgradeIcon' src='/images/commanderdata/$path/" . strtolower($commander) . "/" . $value['icon'] . ".png' alt='" . $value['name'] . ":" . $value['effect'] . "'>";
                $upgradeCount += 1;
            }
        }
        if ($upgradeCount == 0) {
            $upgradeString .= "<span style='font-size:0.75em'>No Tech Upgrades Available</span>";
        }
    } else {
        $upgradeString .= "<span style='font-size:0.75em'>No Tech Upgrades Available</span>";
    }

    $elementNames = [];
    $elementCount = 3;
    //Set up Radio Buttons for output
    if ($commander == "Mengsk" && in_array($unit, $royalGuard)) {
        $elementNames[] = "Rank";
    } elseif ($commander == "Zeratul") {
        $elementNames[] = "Fragments Collected";
    } else {
        $elementNames[] = "Attack Upgrade Level";
        $elementNames[] = "Armor Upgrade Level";
        if (in_array($commander, $shieldCommanders)) {
            $elementNames[] = "Shield Upgrade Level";
        }
    }
    if ($commander == "Tychus") {
        $elementCount = 5;
    }

    $upgradeString .= '<form action="#">';
    $upgradeString .= '<input type="hidden" class="commander" value=' . $commander . '>';
    $upgradeString .= '<input type="hidden" class="unit" value=' . rawurlencode($unit) . '>';

    foreach ($elementNames as $elementName) {
        $divName = strtolower(str_replace(" ", "", $elementName));
        $upgradeString .= "<br><p>$elementName:</p>";
        $upgradeString .= '<label><input type="radio" name="' . $divName . '" value="0" checked>0</label>';
        for ($i = 1; $i <= $elementCount; $i++) {
            $upgradeString .= '<label><input type="radio" name="' . $divName . '" value="' . $i . '">' . $i . '</label>';
        }
    }

    if (count($masteryList) > 0) {
        $upgradeString .= "<br><div class='masteryContainer'>";
        $upgradeString .= "<u>Masteries:</u>";
        $counter = 0;
        foreach ($masteryList as $mastery) {
            $upgradeString .= "<br><p>{$mastery['name']}</p>";
            $upgradeString .= "<div class='rangeContainer'><input type='range' min='0' max='30' value='0' class='masterySlider' name='{$mastery['nameid']}' id='mastery$counter'><span id='range$counter'>0</span></div>";
            $counter += 1;
        }
        $upgradeString .= "</div>";
    }

    if (count($prestigeList) > 0) {
        $upgradeString .= "<br><div class='prestigeContainer'>";
        $upgradeString .= "<u>Prestiges:</u>";
        $counter = 1;
        $motto = strtolower(str_replace([" ","-","(",")"], "", $basePrestige));
        $upgradeString .= "<br><label><input type='radio' name='{$commander}Prestige' value='$motto' checked>$basePrestige</label>";
        foreach ($commanderPrestiges as $prestigeName) {
            if (isset($prestigeList[str_replace(" ", "", $prestigeName)])) {
                $nameid = $prestigeList[str_replace(" ", "", $prestigeName)]['nameid'];
                $name = $prestigeList[str_replace(" ", "", $prestigeName)]['name'];
                $upgradeString .= "<br><label><input type='radio' name='{$commander}Prestige' value='$nameid'>$name</label>";
                $counter += 1;
            }
        }
        $upgradeString .= "</div>";
    }

    $upgradeString .= "</form><br>";
    $upgradeString .= "<button type='button' id='recalculate'>Recalculate Stats</button>";
    $upgradeString .= "</div>";
    return $upgradeString;
}
function fixNumber($number)
{
    if (fmod($number, 1) == 0) {
        return intval($number);
    } else {
        return $number;
    }
}
function checkVariable($var, $checktype)
{
    if (!isset($var)) {
        echo("Error!");
        die();
    }
    if ($checktype == "text") {
        if (ctype_alnum(str_replace([' ','.'], '', $var)) === false) {
            echo("Error!");
            die();
        }
    } else {
        if (ctype_digit($var) == false) {
            echo("Error!");
            die();
        }
    }

    return true;
}
