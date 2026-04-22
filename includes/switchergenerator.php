<?php

function switcher_generator($info)
{
    global $mission;
    $missionpath = "/images/missiondata/" . $mission . "/";

    if ($info == "expo") {
        echo "<div class='switcher'>";
        echo    "<div class='p1Expo'>";
        echo        "<img id ='p1Expo' src=' {$missionpath}p1expo_protoss.jpg' alt='Player 1 Expo'>";
        echo    "</div>";
        echo    "<div class = 'expoMinimap'>";
        echo        "<form action='#'>";
        echo            "<label><input type='radio' name='$info' value='protoss' checked>Protoss</label><br>";
        echo            "<label><input type='radio' name='$info' value='terran'>Terran</label><br>";
        echo            "<label><input type='radio' name='$info' value='zerg'>Zerg</label><br>";
        echo        "</form>";
        echo        "<br><br>";
        echo        "<div>";
        echo            "<img src='{$missionpath}expominimap.jpg' alt='Expansion Minimap'>";
        echo        "</div>";
        echo    "</div>";
        echo    "<div class='p2Expo'>";
        echo        "<img id='p2Expo' src='{$missionpath}p2expo_protoss.jpg' alt='Player 2 Expo'>";
        echo    "</div>";
        echo "</div>";

        echo '<script>';
        echo    "$(\"input[name='$info']\").change(function(){";
        echo        "var race= $(this).val();";
        echo        "var oldImg = $('#p1Expo');";
        echo        "var img = new Image();";
        echo        "img.src = '{$missionpath}p1expo_'+ race + '.jpg';";
        echo        "var newImg = $(img).hide();";
        echo        "$('.p1Expo').append(img);";
        echo        "oldImg.stop(true).fadeOut(500, function() {";
        echo        "   $(this).remove();";
        echo        "});";
        echo        "newImg.fadeIn(500);";
        echo        "newImg.attr('id', 'p1Expo');";
        echo        "var oldImg = $('#p2Expo');";
        echo        "var img = new Image();";
        echo        "img.src = '{$missionpath}p2expo_'+ race + '.jpg';";
        echo        "var newImg = $(img).hide();";
        echo        "$('.p2Expo').append(img);";
        echo        "oldImg.stop(true).fadeOut(500, function() {";
        echo        "   $(this).remove();";
        echo        "});";
        echo        "newImg.fadeIn(500);";
        echo        "newImg.attr('id', 'p2Expo');";
        echo        "return false;";
        echo    "});";
        echo    "var imgList=[];";
        echo    "imgList.push('{$missionpath}p1expo_protoss.jpg');";
        echo    "imgList.push('{$missionpath}p1expo_terran.jpg');";
        echo    "imgList.push('{$missionpath}p1expo_zerg.jpg');";
        echo    "imgList.push('{$missionpath}p2expo_protoss.jpg');";
        echo    "imgList.push('{$missionpath}p2expo_terran.jpg');";
        echo    "imgList.push('{$missionpath}p2expo_zerg.jpg');";
        echo    "preload(imgList);";
        echo "</script>";
    } elseif (strpos($info, 'comparison') !== false) {
        echo "<div class='switcher'>";
        echo    "<div class='basePic1' id='{$info}div1'>";
        echo        "<img id ='{$info}1' src=' {$missionpath}{$info}1_protoss.jpg' alt='Base 1'>";
        echo    "</div>";
        echo    "<div class = 'baseMinimap'>";
        echo        "<form action='#'>";
        echo            "<label><input type='radio' name='$info' value='protoss' checked>Protoss</label><br>";
        echo            "<label><input type='radio' name='$info' value='terran'>Terran</label><br>";
        echo            "<label><input type='radio' name='$info' value='zerg'>Zerg</label><br>";
        echo        "</form>";
        echo        "<br><br>";
        echo        "<div>";
        echo            "<img src='{$missionpath}{$info}minimap.jpg' alt='Base Minimap'>";
        echo        "</div>";
        echo    "</div>";
        echo    "<div class='basePic2' id='{$info}div2'>";
        echo        "<img id='{$info}2' src='{$missionpath}{$info}2_protoss.jpg' alt='Base 2'>";
        echo    "</div>";
        echo "</div>";

        echo '<script>';
        echo    "$(\"input[name='$info']\").change(function(){";
        echo        "var race= $(this).val();";
        echo        "var oldImg = $('#{$info}1');";
        echo        "var img = new Image();";
        echo        "img.src = '{$missionpath}{$info}1_'+ race + '.jpg';";
        echo        "var newImg = $(img).hide();";
        echo        "$('#{$info}div1').append(img);";
        echo        "oldImg.stop(true).fadeOut(500, function() {";
        echo        "   $(this).remove();";
        echo        "});";
        echo        "newImg.fadeIn(500);";
        echo        "newImg.attr('id', '{$info}1');";
        echo        "var oldImg = $('#{$info}2');";
        echo        "var img = new Image();";
        echo        "img.src = '{$missionpath}{$info}2_'+ race + '.jpg';";
        echo        "var newImg = $(img).hide();";
        echo        "$('#{$info}div2').append(img);";
        echo        "oldImg.stop(true).fadeOut(500, function() {";
        echo        "   $(this).remove();";
        echo        "});";
        echo        "newImg.fadeIn(500);";
        echo        "newImg.attr('id', '{$info}2');";
        echo        "return false;";
        echo    "});";
        echo    "var imgList=[];";
        echo    "imgList.push('{$missionpath}{$info}1_protoss.jpg');";
        echo    "imgList.push('{$missionpath}{$info}1_terran.jpg');";
        echo    "imgList.push('{$missionpath}{$info}1_zerg.jpg');";
        echo    "imgList.push('{$missionpath}{$info}2_protoss.jpg');";
        echo    "imgList.push('{$missionpath}{$info}2_terran.jpg');";
        echo    "imgList.push('{$missionpath}{$info}2_zerg.jpg');";
        echo    "preload(imgList);";
        echo "</script>";
    } else {
        echo "<div class='switcher'>";
        if (strpos($info, 'long') !== false) {
            echo    "<div class='long' id='{$info}div'>";
        } else {
            echo    "<div class='basePic' id='{$info}div'>";
        }
        echo        "<img id ='$info' src=' {$missionpath}{$info}_protoss.jpg' alt='{$info} Picture'>";
        echo    "</div>";
        echo    "<div class = 'baseMinimap'>";
        echo        "<form action='#'>";
        echo            "<label><input type='radio' name='$info' value='protoss' checked>Protoss</label><br>";
        echo            "<label><input type='radio' name='$info' value='terran'>Terran</label><br>";
        echo            "<label><input type='radio' name='$info' value='zerg'>Zerg</label><br>";
        echo        "</form>";
        echo        "<br><br>";
        echo        "<div>";
        echo            "<img src='{$missionpath}{$info}minimap.jpg' alt='{$info} Minimap'>";
        echo        "</div>";
        echo    "</div>";
        echo "</div>";

        echo '<script>';
        echo    "$(\"input[name='$info']\").change(function(){";
        echo        "var race= $(this).val();";
        echo        "var oldImg = $('#{$info}');";
        echo        "var img = new Image();";
        echo        "img.src = '{$missionpath}{$info}_'+ race + '.jpg';";
        echo        "var newImg = $(img).hide();";
        echo        "$('#{$info}div').append(img);";
        echo        "oldImg.stop(true).fadeOut(500, function() {";
        echo        "   $(this).remove();";
        echo        "});";
        echo        "newImg.fadeIn(500);";
        echo        "newImg.attr('id', '{$info}');";
        echo        "return false;";
        echo    "});";
        echo    "var imgList=[];";
        echo    "imgList.push('{$missionpath}{$info}_protoss.jpg');";
        echo    "imgList.push('{$missionpath}{$info}_terran.jpg');";
        echo    "imgList.push('{$missionpath}{$info}_zerg.jpg');";
        echo    "preload(imgList);";
        echo "</script>";
    }
}
