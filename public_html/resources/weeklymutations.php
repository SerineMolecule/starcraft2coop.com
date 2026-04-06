<html lang="en">
<head>
<?php
include("../header.php");
$_SESSION["known"] = true;
?>
  <title>Starcraft 2 Co-op - Weekly Mutations</title>
  <meta name="description" content="Starcraft 2 Co-op Weekly Mutations">
  <meta name="keywords" content="Starcraft co-op guides weekly mutations">
  <link rel="canonical" href="https://starcraft2coop.com/resources/weeklymutations">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <script>
      function validate() {
          var x = $('#mutationForm [name=file]').val()
          if (x == "") {
              alert("File not selected");
              return false;
          }
          var x = $('#mutationForm [name=desc]').val()
          if (x == "") {
              alert("Description is blank");
              return false;
          }
      }
  </script>
  <style>
        #player{
            position:fixed;
            z-index: 3;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display:none;
        }
        #player iframe{
            max-width:none;
            width: 85vw;
            height: 50vw;
        }
        .mutatorIcon{
            height:20px;
            margin-right:10px;
        }
        .currentMutatorIcon{
            height:50px;
            margin-right:10px;
        }
        .cast{
            height:30px;
            display:inline;
            vertical-align:middle;
            cursor:pointer;
        }
        #maps, #mutators, #difficultyLevel{
            height:50px;
        }
        #maps p, #mutators p, #difficultyLevel p{
            line-height:50px;
            vertical-align:middle;
        }
        .clickable{
            height:30px;
            cursor:pointer;
        }
        #tooltip{
            position:absolute;
            background-color:khaki;
            color:black;
            font-size:0.8em;
            display:none;
            z-index:1;
            padding:5px;
            border-radius:5px;
        }
        #mutationList td:nth-child(2),
        #mutationList td:nth-child(4),
        #mutationList td:nth-child(5),
        #mutationList td:nth-child(6){
            max-width:175px;
        }
        #current{
            border:1px solid white;
             margin-bottom:2rem;
        }
        #current p{
            padding-left:10px;
        }

        #commanders{
            vertical-align:top;
            display:inline-block;
            max-width:27%;
            border-right: 1px solid white;
            padding-left:5px;
            padding-bottom:5px;
        }
        #tips{
            display:inline-block;
            max-width:70%;
        }
        #commanderTips{
            width:100%;
        }
        .untoggled{
            opacity:0.5;
        }
        .commanderIcon{
            cursor: pointer;
            margin-left:5px;
            margin-right:5px;
            border-radius:50%;
        }
        .commanderTip{
            display:none;

        }
        #castedGame{
            text-align:center;
        }
        #weekly{
            text-align:center;
            margin-top:10px;
        }
        #title{
            text-align:center;
            font-family: 'Kaushan Script', cursive;
        }
        #info{
            padding-left:10px;
            width:45%;
            display:inline-block;
        }
        #interactions{
            width:45%;
            display:inline-block;
            vertical-align:top;
        }
        .submitted{
            background-color:darkgreen;
        }
        .diff1{
            color:darkgreen;
            border:1px solid;
            padding:5px;
        }
        .diff2{
            color:limegreen;
            border:1px solid;
            padding:5px;
        }
        .diff3{
            color:yellow;
            border:1px solid;
            padding:5px;
        }
        .diff4{
            color:orangered;
            border:1px solid;
            padding:5px;
        }
        .diff5{
            color:red;
            border:1px solid;
            padding:5px;
        }
        .diff6{
            color:maroon;
            border:1px solid;
            padding:5px;
        }
        .diff7{
            color:black;
            border:1px solid;
            padding:5px;
        }
        .ribbon{
            position:relative;
            overflow:hidden;
        }
        .ribbon0{
            position:absolute;
            width: 35px;
            height: 15px;
            background: black;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon1 {
            position: absolute;
            width: 35px;
            height: 15px;
            background: darkgreen;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon2 {
            position: absolute;
            width: 35px;
            height: 15px;
            background: limegreen;
            color:black;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon3{
            position: absolute;
            width: 35px;
            height: 15px;
            background: yellow;
            color:black;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon4 {
            position: absolute;
            width: 35px;
            height: 15px;
            background: orangered;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon5 {
            position: absolute;
            width: 35px;
            height: 15px;
            background: red;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon6{
            position: absolute;
            width: 35px;
            height: 15px;
            background: maroon;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .ribbon7{
            position: absolute;
            width: 35px;
            height: 15px;
            background: black;
            top: 0;
            text-align: center;
            line-height: 15px;
            left:-10px;
            transform: rotate(-45deg);
        }
        .brutalFilter0{
            display: inline-block;
            background: black;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .brutalFilter1{
            display: inline-block;
            background: darkgreen;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .brutalFilter2{
            display: inline-block;
            background: limegreen;
            color:black;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .brutalFilter3{
            display: inline-block;
            background: yellow;
            color:black;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .brutalFilter4{
            display: inline-block;
            background: orangered;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .brutalFilter5{
            display: inline-block;
            background: red;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .brutalFilter6{
            display: inline-block;
            background: maroon;
            border-radius: 50%;
            width: 30px;
            text-align: center;
            line-height: 25px
        }
        .statsTitle{
            text-decoration:underline;
            margin-bottom:0;
        }
        .stats p{
            margin:0.1rem;
            font-size:0.85rem;
        }
        .current{
            background:#2d602d;
        }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>A List of Weekly Mutations With Difficulties</h1>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#guide">Weekly Mutation Beginner's Guide</a></p>
        <p><a href="#cycle">Weekly Mutations Cycle</a></p>
        <p><a href="#past">Casted Weekly Mutations</a></p>
    </div>
    <h2>Weekly Mutation Beginner's Guide</h2>
    <a id="guide"></a><p>Weekly Mutations are, as the name suggests, mutations that appear as weekly challenges. Completing the weekly challenge offers an experience bounty, depending on the difficulty level completed. These bounties are shown below:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Difficulty</th>
                <th>Bounty</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Casual</td>
                <td>25,000</td>
            </tr>
            <tr>
                <td>Normal</td>
                <td>35,000</td>
            </tr>
            <tr>
                <td>Hard</td>
                <td>50,000</td>
            </tr>
            <tr>
                <td>Brutal</td>
                <td>75,000</td>
            </tr>
        </tbody>
    </table>
    <p>Completing a Weekly Mutation on a difficulty level will unlock the bounties for all difficulties below. For example, completing a Weekly Mutation on Brutal difficulty (commonly known as a "Brutation"), will give you 185,000. You can only earn each weekly bounty once.</p>
    <p>For a brief description of each mutator, hover over its icon. For details, please go to the <a href="/resources/mutators">Mutators</a> page.</p>
    <ul>
        <?php

        include '../scripts/sqlconnection.php';

        $sql = "SELECT mutatorid, mutatorname, mutatordescription, abomination
                    FROM mutators
                    ORDER BY mutatorid ASC";
        $result = mysqli_query($con, $sql);
        $mutators = [];

        while ($row = mysqli_fetch_array($result)) {
            $mutators[] = $row;
        }

        $sql = "SELECT mutationid, releasedate, mutation, link, map, mut01, mut02, mut03
                FROM weeklymutations
                ORDER BY mutationid DESC";
        $weeklyList = [];
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($result);
        $weeklyList[] = $row;
        $url = $row['link'];

        $mutationName = $row['mutation'];

        $toggled = false;
        $listed = false;
        $currentMutation = 0;

        while ($row = mysqli_fetch_array($result)) {
            $weeklyList[] = $row;
        }

        $sql2 = "SELECT difficulty, minpoints FROM brutalplus";
        $result2 = mysqli_query($con, $sql2);
        $difficultyArray = [];
        while ($row = mysqli_fetch_array($result2)) {
            $difficultyArray[] = $row;
        }
        if ($unknown) {
            $score = 0;
        }

        $val = getDiffString($score);
        $diff = $val[0];
        if ($val[0] !== 0) {
            $diffString = "Brutal+" . $val[1];
        } else {
            $diffString = "Unknown";
        }

        function getDiffString($score)
        {
            global $difficultyArray;
            if ($score == 0) {
                $diff = 0;
                $diffString = "?";
            } elseif ($score > 20) {
                $diff = 7;
                $diffString = "&#9760;&#65039;";
            } else {
                $diffString = "&#128522;";
                $diff = 1;
                for ($i = 0; $i < count($difficultyArray); $i++) {
                    if ($score >= intval($difficultyArray[$i]['minpoints'])) {
                        $diff = intval($difficultyArray[$i]['difficulty']);
                        $diffString = $diff;
                    } else {
                        break;
                    }
                }
            }

            return [$diff,$diffString];
        }

        $mutationStart = new DateTime($weeklyList[0]['releasedate'] . " 18:00:00");
        $mutationStart->modify("-1 day");
        $mutationEnd = clone $mutationStart;
        $mutationEnd ->modify("+7 days 17 hours");
        $map = str_replace("Lock and Load", "Lock & Load", $weeklyList[0]['map']);

        $mutationStart1 = clone $mutationStart;
        $mutationStart1->modify("-7 days");
        $mutationEnd1 = clone $mutationEnd;
        $mutationEnd1->modify("-7 days");
        $map1 = str_replace("Lock and Load", "Lock & Load", $weeklyList[1]['map']);

        $mutationStart = $mutationStart->format('Y-m-d H:i:s');
        $mutationEnd = $mutationEnd->format('Y-m-d H:i:s');
        $mutationStart1 = $mutationStart1->format('Y-m-d H:i:s');
        $mutationEnd1 = $mutationEnd1->format('Y-m-d H:i:s');
        $oldMutationName = $weeklyList[1]['mutation'];

        // $sql = "SELECT difficulty, mycommander, allycommander, result
        //         FROM userreplays
        //         WHERE mutation = 1 AND
        //               mission='$map' AND
        //               (difficulty='Casual' OR difficulty='Normal' OR difficulty='Hard' OR difficulty='Brutal') AND
        //               played BETWEEN '$mutationStart' AND '$mutationEnd'";
        // $result=mysqli_query($con,$sql);
        // $mutationGames = [];
        // while($row = mysqli_fetch_array($result)) {
        //     $mutationGames[] = $row;
        // }

        // $sql = "SELECT difficulty, mycommander, allycommander, result
        //         FROM userreplays
        //         WHERE mutation = 1 AND
        //               mission='$map1' AND
        //               (difficulty='Casual' OR difficulty='Normal' OR difficulty='Hard' OR difficulty='Brutal') AND
        //               played BETWEEN '$mutationStart1' AND '$mutationEnd1'";
        // $result=mysqli_query($con,$sql);
        // $mutationGames1 = [];
        // while($row = mysqli_fetch_array($result)) {
        //     $mutationGames1[] = $row;
        // }
        ?>

    </ul>

    <script>
        $(".commanderIcon").click(function(){
            var selectedCommander = $(this).attr('alt');
            $(".commanderIcon").not(".untoggled").addClass("untoggled");
            $('.commanderTip').hide();
            $(this).removeClass("untoggled");
            $("#" + selectedCommander + "Tip").show();
        });
        $(".extraVid").click(function() {
            $("#video").attr("src",$(this).attr("href"));
            $("#player").fadeIn();
            return false;
        });
    </script>
    <div id="tooltip">tooltip</div>

    <a id="cycle"></a><h2>Weekly Mutations Cycle</h2>
    <p>The weekly mutations follow a fixed cycle as shown below. The <a href="#thisweek">current mutation for this week</a> is highlighted in green.</p>
    <table id="mutationCycle">
            <thead>
                <tr id="columnNames">
                    <th>Name</th>
                    <th>Map</th>
                    <th>Mutator 1</th>
                    <th>Mutator 2</th>
                    <th>Mutator 3</th>
                </tr>
            </thead>
            <tbody>
    <?php
    $sql = "SELECT mutationid, mutation, map, mut01, mut02, mut03
            FROM mutationcycle
            ORDER BY mutationid ASC";
    $cycleList = [];
    $result = mysqli_query($con, $sql);

    while ($row = mysqli_fetch_array($result)) {
        $cycleList[] = $row;
    }
    $mutationCount = count($cycleList);
    //$mutationCycleStart = new DateTime("2020-10-26 18:00:00");
    //$today = new DateTime('now');
    //print($mutationCycleStart->diff($today)->a);
    //$weekNumber = floor($mutationCycleStart->diff($today)->days/7) % $mutationCount;
    //print($weekNumber);
    $mutationCycleStart = strtotime("2020-10-25 18:00:00");
    $today = time();
    $datediff = $today - $mutationCycleStart;

    $weekNumber = floor($datediff / (7 * 60 * 60 * 24)) % $mutationCount;
    $counter = 0;
    foreach ($cycleList as $row) {
        $classVals = str_replace("and", "", str_replace(' ', '', strtolower($row["map"])));
        $score = 0;
        $unknown = false;
        if ($row["mut01"]) {
            $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname']));
            if ($mutators[intval($row["mut01"]) - 1]['abomination'] > 0) {
                $score += $mutators[intval($row["mut01"]) - 1]['abomination'];
            } else {
                $unknown = true;
            }
        }
        if ($row["mut02"]) {
            $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname']));
            if ($mutators[intval($row["mut02"]) - 1]['abomination'] > 0) {
                $score += $mutators[intval($row["mut02"]) - 1]['abomination'];
            } else {
                $unknown = true;
            }
        }
        if ($row["mut03"]) {
            $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname']));
            if ($mutators[intval($row["mut03"]) - 1]['abomination'] > 0) {
                $score += $mutators[intval($row["mut03"]) - 1]['abomination'];
            } else {
                $unknown = true;
            }
        }
        if ($unknown) {
            $score = 0;
        }
        $diffArray = getDiffString($score);
        $classVals .= " brutal" . $diffArray[0];
        if ($counter == $weekNumber) {
            $classVals .= " current' id='thisweek";
        }
        echo "<tr class='" . $classVals . "'>\n";
        echo "<td class='ribbon'>" . $row["mutation"] . "<div class='ribbon" . $diffArray[0] . "'>" . $diffArray[1] . "</div></td>\n";

        if ($row["map"]) {
            echo "<td><img src='/images/missionthumbnails/" . str_replace("and", "", str_replace(' ', '', strtolower($row["map"]))) . ".png' alt='" . $row["map"] . "'></td>\n";
        } else {
            echo "<td></td>\n";
        }

        if ($row["mut01"]) {
            $filename = str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname']));
            echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut01"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut01"]) - 1]['mutatordescription'] . "\">" . $mutators[intval($row["mut01"]) - 1]['mutatorname'] . "</td>\n";
        } else {
            echo "<td></td>\n";
        }
        if ($row["mut02"]) {
            $filename = str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname']));
            echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut02"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut02"]) - 1]['mutatordescription'] . "\">" . $mutators[intval($row["mut02"]) - 1]['mutatorname'] . "</td>\n";
        } else {
            echo "<td></td>\n";
        }
        if ($row["mut03"]) {
            $filename = str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname']));
            echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut03"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut03"]) - 1]['mutatordescription'] . "\">" . $mutators[intval($row["mut03"]) - 1]['mutatorname'] . "</td>\n";
        } else {
            echo "<td></td>\n";
        }
        echo "</tr>\n";
        $counter += 1;
    }

    ?>
    </tbody>
    <table>
    <a id="past"></a><h2>Casted Weekly Mutations</h2>
    <p>The list of weekly mutations is shown below:</p>
    <p>Filters (click a filter to remove):</p>
    <div id="maps"><p>Map: <select id="mapselect">
        <?php
        $sql = "SELECT distinct map FROM weeklymutations ORDER BY cast(map as char) ASC";
        $result2 = mysqli_query($con, $sql);

        while ($row = mysqli_fetch_array($result2)) {
            $string = $row['map'];
            if ($string !== "") {
                $string = str_replace(" ", "", $string);
                $string = str_replace("and", "", $string);
                $string = str_replace("&", "", $string);
                echo("<option value='" . strtolower($string) . "'>" . $row['map'] . "</option>");
            }
        }
        ?>
        </select>
        <button type="button" id="addmap">Add</button>
        </p>
    </div>
    <div id="mutators"><p>Mutators: <select id="mutatorselect">
        <?php
        $sql = "SELECT mutatorname FROM mutators ORDER BY mutatorname ASC";
        $result2 = mysqli_query($con, $sql);

        while ($row = mysqli_fetch_array($result2)) {
            $string = $row['mutatorname'];
            if ($string !== "") {
                $string = str_replace(" ", "", $string);
                $string = str_replace("&", "", $string);
                echo("<option value='" . strtolower($string) . "'>" . $row['mutatorname'] . "</option>");
            }
        }
        ?>
        </select>
        <button type="button" id="addmutator">Add</button>
        </p>
    </div>
    <div id="difficultyLevel"><p>Difficulty: <select id="difficultyselect"><option value='0'>?</option>
        <?php
        foreach ($difficultyArray as $row) {
            echo("<option value='" . $row['difficulty'] . "'>Brutal+" . $row['difficulty'] . "</option>");
        }
        ?>
        </select>
        <button type="button" id="adddifficulty">Add</button>
        </p>
    </div>
    <p>
        <button type="button" id="filter">Filter</button>
        <button type="button" id="clear">Clear Filters</button>
    </p>
    <script>
        $("#addmap").click(function(){
            var exists = false;
            $("#maps img").each(function(){
                if($(this).attr('alt')==$("#mapselect").val()){
                    exists = true;
                    return false;
                }
            })
            if(!exists){
                $("#maps p").append('<img class="clickable" src="/images/missionthumbnails/'+ $("#mapselect").val().replace(/ /g,'').toLowerCase() +'.png" alt="' + $("#mapselect").val() + '">')
            }
        });
        $("#addmutator").click(function(){
            var exists = false;
            $("#mutators img").each(function(){
                if($(this).attr('alt')==$("#mutatorselect").val()){
                    exists = true;
                    return false;
                }
            })
            if(!exists){
                $("#mutators p").append('<img class="clickable" src="/images/mutators/'+ $("#mutatorselect").val().replace(/ /g,'').toLowerCase() +'.png" alt="' + $("#mutatorselect").val() + '">')
            }
        });
        $("#adddifficulty").click(function(){
            var label="";
            if (parseInt($("#difficultyselect").val())>0){
                label = "+" + parseInt($("#difficultyselect").val());
            }
            else{
                label="?";
            }

            var exists = false;
            $("#difficultyLevel div").each(function(){
                if($(this).text()==label){
                    exists = true;
                    return false;
                }
            })
            if(!exists){
                $("#difficultyLevel p").append('<div class="clickable brutalFilter' + $("#difficultyselect").val() + '">'+ label + '</div>');
            }
        });
        $("#filter").click(function(){
            var mapClasses = [];
            var mutatorClasses = [];
            var difficultyClasses = [];

            $("#maps img").each(function(){
                mapClasses.push("." + $(this).attr("alt"));
            });
            $("#mutators img").each(function(){
                mutatorClasses.push("." + $(this).attr("alt"));
            });
            $("#difficultyLevel div").each(function(){
                difficultyClasses.push("." + $(this).attr('class').split(' ')[1].replace("Filter",""));
            });

            var collection = $('#mutationList tr');

            $("#mutationList tr").hide();
            if(mapClasses.length!==0){
                collection = collection.filter(mapClasses.join());
            }
            if(mutatorClasses.length!==0){
                mutatorClasses.forEach(function(value){
                    collection = collection.filter(value);
                })
            }
            if(difficultyClasses.length!==0){
                collection = collection.filter(difficultyClasses.join());
            }

            collection.show();
            $("#columnNames").show();
            recount();
        });
        function recount(){
            $("#filterCount").text($('#mutationList tr:visible').length-1);
        }
        $("#clear").click(function(){
            $(".clickable").remove();
            $("#mutationList tr").show();
        });
        $(document).on('click','.clickable',function(){
            $(this).remove();
        });
        $( document ).ready(function() {
            recount();
        });
    </script>
    <div id="player">
        <iframe id="video" width="640" height="360" src="about:blank" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <p><span id="filterCount">0</span> Mutations listed</p>
    <div class="tableContainer">
        <table id="mutationList">
            <thead>
                <tr id="columnNames">
                    <th>Release Date</th>
                    <th>Name</th>
                    <th>Map</th>
                    <th>Mutator 1</th>
                    <th>Mutator 2</th>
                    <th>Mutator 3</th>
                </tr>
            </thead>
            <tbody>
                <?php
                foreach ($weeklyList as $row) {
                    $classVals = str_replace("and", "", str_replace(' ', '', strtolower($row["map"])));
                    $score = 0;
                    $unknown = false;
                    if ($row["mut01"]) {
                        $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname']));
                        if ($mutators[intval($row["mut01"]) - 1]['abomination'] > 0) {
                            $score += $mutators[intval($row["mut01"]) - 1]['abomination'];
                        } else {
                            $unknown = true;
                        }
                    }
                    if ($row["mut02"]) {
                        $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname']));
                        if ($mutators[intval($row["mut02"]) - 1]['abomination'] > 0) {
                            $score += $mutators[intval($row["mut02"]) - 1]['abomination'];
                        } else {
                            $unknown = true;
                        }
                    }
                    if ($row["mut03"]) {
                        $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname']));
                        if ($mutators[intval($row["mut03"]) - 1]['abomination'] > 0) {
                            $score += $mutators[intval($row["mut03"]) - 1]['abomination'];
                        } else {
                            $unknown = true;
                        }
                    }
                    if ($unknown) {
                        $score = 0;
                    }
                    $diffArray = getDiffString($score);
                    $classVals .= " brutal" . $diffArray[0];
                    echo "<tr class='" . $classVals . "'>\n";
                    echo "<td class='ribbon'>" . $row["releasedate"] . "<div class='ribbon" . $diffArray[0] . "'>" . $diffArray[1] . "</div></td>\n";
                    if ($row["link"]) {
                        echo "<td>" . $row["mutation"] . "<img class='cast' src='/images/weeklymutations/casticon.png' alt='https://www.youtube.com/embed/" . $row["link"] . "'></td>\n";
                    } else {
                        echo "<td>" . $row["mutation"] . "</td>\n";
                    }

                    if ($row["map"]) {
                        echo "<td><img src='/images/missionthumbnails/" . str_replace("and", "", str_replace(' ', '', strtolower($row["map"]))) . ".png' alt='" . $row["map"] . "'></td>\n";
                    } else {
                        echo "<td></td>\n";
                    }

                    if ($row["mut01"]) {
                        $filename = str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname']));
                        echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut01"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut01"]) - 1]['mutatordescription'] . "\">" . $mutators[intval($row["mut01"]) - 1]['mutatorname'] . "</td>\n";
                    } else {
                        echo "<td></td>\n";
                    }
                    if ($row["mut02"]) {
                        $filename = str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname']));
                        echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut02"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut02"]) - 1]['mutatordescription'] . "\">" . $mutators[intval($row["mut02"]) - 1]['mutatorname'] . "</td>\n";
                    } else {
                        echo "<td></td>\n";
                    }
                    if ($row["mut03"]) {
                        $filename = str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname']));
                        echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut03"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut03"]) - 1]['mutatordescription'] . "\">" . $mutators[intval($row["mut03"]) - 1]['mutatorname'] . "</td>\n";
                    } else {
                        echo "<td></td>\n";
                    }
                    echo "</tr>\n";
                }
                $con->close();
                ?>
            </tbody>
        </table>
    </div>
    <script>
        $(".mutatorIcon").on('mouseover',function(e){
            var mutator = $(this).attr("alt").split(":");
            $("#tooltip").html("<b>" + mutator[0] + "</b><br><br>" + mutator[1]);
            $("#tooltip").show();
        });
        $(".currentMutatorIcon").on('mouseover',function(e){
            var mutator = $(this).attr("alt").split(":");
            $("#tooltip").html("<b>" + mutator[0] + "</b><br><br>" + mutator[1]);
            $("#tooltip").show();
        });
        $(".mutatorIcon").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".currentMutatorIcon").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".mutatorIcon").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
        $(".currentMutatorIcon").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
        $(document).click(function(e) {
            if (e.srcElement !== $("#player")){
                $("#video").attr("src",$("#video").attr("src"));
                $("#player").fadeOut();
            }
        });
        $(".cast").click(function() {
            $("#video").attr("src",$(this).attr("alt"));
            $("#player").fadeIn();
            return false;
        });
    </script>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
