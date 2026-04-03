<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
if (isset($_GET['unit'])) {
    if (!is_string($_GET['unit'])) {
        echo("Error!");
        die();
    }
    $unit = $_GET['unit'];
    if (!preg_match('/[^A-Za-z\s0-9]/', $unit)) {
        include 'sqlconnection.php';
        $sql = "SELECT name, race, hp, armor, shields, shieldarmor, light, armored, biological, mechanical, psionic, heroic, massive, structure
                FROM amonunits
                WHERE name='$unit'
                ORDER BY name ASC";
        $result = mysqli_query($con, $sql);
        $unitList = [];
        while ($row = mysqli_fetch_array($result)) {
            $unitList[] = $row;
        }

        if (count($unitList) !== 1) {
            echo("Error!");
            die();
        }
        $finalString = "<span class='title'>" . $unit . "</span>\r\n";

        if ($unitList[0]['shields'] !== "0") {
            $finalString .= "<span id='unitShields'>Shields: " . $unitList[0]['shields'] . "</span><br>\r\n";
            $finalString .= "<span id='unitShieldArmor'>Shield Armor: " . $unitList[0]['shieldarmor'] . "</span><br>\r\n";
        }
        $finalString .= "<span id='unitHP'>HP: " . $unitList[0]['hp'] . "</span><br>\r\n";
        $finalString .= "<span id='unitArmor'>Armor: " . $unitList[0]['armor'] . "</span><br>\r\n";
        $finalString .= "<span class='title'>Tags</span><br>\r\n";
        if ($unitList[0]['light']) {
            $finalString .= "Light<br>\r\n";
        }
        if ($unitList[0]['armored']) {
            $finalString .= "Armored<br>\r\n";
        }
        if ($unitList[0]['biological']) {
            $finalString .= "Biological<br>\r\n";
        }
        if ($unitList[0]['mechanical']) {
            $finalString .= "Mechanical<br>\r\n";
        }
        if ($unitList[0]['psionic']) {
            $finalString .= "Psionic<br>\r\n";
        }
        if ($unitList[0]['heroic']) {
            $finalString .= "Heroic<br>\r\n";
        }
        if ($unitList[0]['massive']) {
            $finalString .= "Massive<br>\r\n";
        }
        if ($unitList[0]['structure']) {
            $finalString .= "Structure<br>\r\n";
        }
        echo $finalString;
        $con->close();
    } else {
        echo("Error!");
    }
} else {
    echo("Error!");
}
