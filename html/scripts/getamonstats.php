<?php

if (isset($_GET['unit'])) {
    if (!is_string($_GET['unit'])) {
        echo("Error!");
        die();
    }
    $unit = $_GET['unit'];
    if (!preg_match('/[^A-Za-z\s0-9]/', $unit)) {
        require_once '../../includes/queries.php';
        $units = get_amonunits();
        $unitList = array_filter($units, fn($u) => $u['name'] === $unit);

        if (count($unitList) !== 1) {
            echo("Error!");
            die();
        }
        $unitList = array_values($unitList);
        $finalString = "<span class='title'>" . $unit . "</span>\n";

        if ($unitList[0]['shields'] !== "0") {
            $finalString .= "<span id='unitShields'>Shields: " . $unitList[0]['shields'] . "</span><br>\n";
            $finalString .= "<span id='unitShieldArmor'>Shield Armor: " . $unitList[0]['shieldarmor'] . "</span><br>\n";
        }
        $finalString .= "<span id='unitHP'>HP: " . $unitList[0]['hp'] . "</span><br>\n";
        $finalString .= "<span id='unitArmor'>Armor: " . $unitList[0]['armor'] . "</span><br>\n";
        $finalString .= "<span class='title'>Tags</span><br>\n";
        if ($unitList[0]['light']) {
            $finalString .= "Light<br>\n";
        }
        if ($unitList[0]['armored']) {
            $finalString .= "Armored<br>\n";
        }
        if ($unitList[0]['biological']) {
            $finalString .= "Biological<br>\n";
        }
        if ($unitList[0]['mechanical']) {
            $finalString .= "Mechanical<br>\n";
        }
        if ($unitList[0]['psionic']) {
            $finalString .= "Psionic<br>\n";
        }
        if ($unitList[0]['heroic']) {
            $finalString .= "Heroic<br>\n";
        }
        if ($unitList[0]['massive']) {
            $finalString .= "Massive<br>\n";
        }
        if ($unitList[0]['structure']) {
            $finalString .= "Structure<br>\n";
        }
        echo $finalString;
    } else {
        echo("Error!");
    }
} else {
    echo("Error!");
}
