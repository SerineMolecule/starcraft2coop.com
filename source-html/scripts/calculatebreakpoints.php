<?php

if (isset($_POST['ability'])) {
    $ability = $_POST['ability'];
    $returnArray = [];
    $abilityFound = false;
    #0 => Spammable
    #1 => Affected by armor
    #2 => Base damage
    #3 => Mastery damage increase per point (%)
    if ($ability == "immobilizationwave") {
        $abilityFound = true;
        $spammable = 0;
        $affectedByArmor = 0;
        $baseDmg = 100;
        $dmgIncrease = 0.0333;
        $air = 1;
        $structure = 0;
    } elseif ($ability == "leapingstrike") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 300;
        $dmgIncrease = 0.01;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "psionicshift") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 100;
        $dmgIncrease = 0.01;
        $air = 0;
        $structure = 0;
    } elseif ($ability == "immobilizationwavep2") {
        $abilityFound = true;
        $spammable = 0;
        $affectedByArmor = 0;
        $baseDmg = 50;
        $dmgIncrease = 0.0333;
        $air = 1;
        $structure = 0;
    } elseif ($ability == "leapingstrikep2") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 150;
        $dmgIncrease = 0.01;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "psionicshiftp2") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 50;
        $dmgIncrease = 0.01;
        $air = 0;
        $structure = 0;
    } elseif ($ability == "kineticblast") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 300;
        $dmgIncrease = 0.01;
        $air = 1;
        $structure = 1;
    } elseif ($ability == "crushinggrip") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 50;
        $dmgIncrease = 0.01;
        $air = 1;
        $structure = 0;
    } elseif ($ability == "concentratedbeam") {
        $abilityFound = true;
        $spammable = 0;
        $affectedByArmor = 0;
        $baseDmg = 400;
        $dmgIncrease = 0.02;
        $air = 1;
        $structure = 1;
    } elseif ($ability == "infesteddrop") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 50;
        $dmgIncrease = 0.02;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "spawntoxicnest") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 125;
        $dmgIncrease = 0.02;
        $air = 0;
        $structure = 0;
    } elseif ($ability == "snipe") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 200;
        $dmgIncrease = 0.0167;
        $air = 1;
        $structure = 0;
    } elseif ($ability == "penetratingblast") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 50;
        $dmgIncrease = 0.0167;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "sabotagedrone") {
        $abilityFound = true;
        $spammable = 0;
        $affectedByArmor = 0;
        $baseDmg = 200;
        $dmgIncrease = 0.0167;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "stancedanceswitch") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 0;
        $baseDmg = 100;
        $dmgIncrease = 0.0167;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "banelingbarrage") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 1;
        $baseDmg = 40;
        $dmgIncrease = 0.025;
        $air = 0;
        $structure = 1;
    } elseif ($ability == "alarakportrait" || $ability == "zagaraportrait") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 1;
        $baseDmg = 30;
        $dmgIncrease = 0.0333;
        $air = 1;
        $structure = 1;
    } elseif ($ability == "kerriganportrait") {
        $abilityFound = true;
        $spammable = 1;
        $affectedByArmor = 1;
        $baseDmg = 40;
        $dmgIncrease = 0.025;
        $air = 1;
        $structure = 1;
    }

    if ($abilityFound) {
        #If ability can hit flyers, get all, otherwise get only ground
        require_once '../../includes/queries.php';
        $units = get_amonunits();
        if ($air == 0) {
            $units = array_filter($units, fn($unit) => $unit['flyer'] === 0);
        }
        if ($structure == 0) {
            $units = array_filter($units, fn($unit) => $unit['structure'] === 0);
        }
        $units = array_filter($units, fn($unit) => $unit['breakpoint'] === 1);
        usort($units, fn($a, $b) => ($a['hp'] + $a['shields']) <=> ($b['hp'] + $b['shields']) ?: strtolower($a['name']) <=> strtolower($b['name']));

        $unitArray = [];

        foreach ($units as $row) {
            $unitArray[$row['race']][] = [$row['hp'] + $row['shields'], $row['name'], $row['light'], $row['structure']];
        }
        $returnArray[] = $spammable;
        $returnArray[] = $affectedByArmor;
        $returnArray[] = $baseDmg;
        $returnArray[] = $dmgIncrease;
        $returnArray[] = $unitArray;
        print(json_encode($returnArray));
    } else {
        print("Error!");
    }
} else {
    print("Error!");
}
