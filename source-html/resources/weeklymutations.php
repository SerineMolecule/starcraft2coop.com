<?php
require_once "../../includes/wrapper.php";
?>
<?= startHead() ?>
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
<?= startContent() ?>
    <h1>A List of Weekly Mutations With Difficulties</h1>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#guide">Weekly Mutation Beginner's Guide</a></p>
        <p><a href="#cycle">Weekly Mutations Cycle</a></p>
        <p><a href="#past">Casted Weekly Mutations</a></p>
    </div>
    <h2 id="guide">Weekly Mutation Beginner's Guide</h2>
    <p>Weekly Mutations are, as the name suggests, mutations that appear as weekly challenges. Completing the weekly challenge offers an experience bounty, depending on the difficulty level completed. These bounties are shown below:</p>
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

    <h2 id="cycle">Weekly Mutations Cycle</h2>
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
    require_once '../../includes/queries.php';

    $difficultyArray = get_brutalpluses();
    function getDiffString(?int $brutalPlus): array
    {
        if ($brutalPlus === null) {
            $diffString = "?";
        } else if ($brutalPlus > 6) {
            $diffString = "&#9760;&#65039;"; // skull and crossbones emoji
        } else if ($brutalPlus === 0) {
            // shouldn't ever actually happen
            $diffString = "&#128522;"; // smiling face with smiling eyes emoji
        } else {
            $diffString = "$brutalPlus";
        }

        return [$brutalPlus ?? 0, $diffString];
    }

    $cycleList = get_mutationcycle();
    $mutators = get_mutators();

    [$currentWeekIndex] = get_currentmutationcycle();

    foreach ($cycleList as $rowIndex => $row) {
        $classVals = str_replace("and", "", str_replace(' ', '', strtolower($row["map"])));
        $score = 0;
        $unknown = false;
        if ($row["mut01"]) {
            $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname']));
        }
        if ($row["mut02"]) {
            $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname']));
        }
        if ($row["mut03"]) {
            $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname']));
        }
        [$diff, $diffString] = getDiffString($row["brutalplus"]);
        $classVals .= " brutal" . $diff;
        if ($rowIndex == $currentWeekIndex) {
            $classVals .= " current' id='thisweek";
        }
        echo "<tr class='" . $classVals . "'>\n";
        echo "<td class='ribbon'>" . $row["mutation"] . "<div class='ribbon" . $diff . "'>" . $diffString . "</div></td>\n";

        if ($row["map"]) {
            echo "<td><img src='/images/missionthumbnails/" . str_replace("and", "", str_replace(' ', '', strtolower($row["map"]))) . ".png' alt='" . $row["map"] . "'></td>\n";
        } else {
            echo "<td></td>\n";
        }

        if ($row["mut01"]) {
            $filename = str_replace('-', '', str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname'])));
            echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut01"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut01"]) - 1]['mutatordescription'] . "\"><a href=\"/mutators/" . $filename . "\">" . $mutators[intval($row["mut01"]) - 1]['mutatorname'] . "</a></td>\n";
        } else {
            echo "<td></td>\n";
        }
        if ($row["mut02"]) {
            $filename = str_replace('-', '', str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname'])));
            echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut02"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut02"]) - 1]['mutatordescription'] . "\"><a href=\"/mutators/" . $filename . "\">" . $mutators[intval($row["mut02"]) - 1]['mutatorname'] . "</a></td>\n";
        } else {
            echo "<td></td>\n";
        }
        if ($row["mut03"]) {
            $filename = str_replace('-', '', str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname'])));
            echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $mutators[intval($row["mut03"]) - 1]['mutatorname'] . ":" . $mutators[intval($row["mut03"]) - 1]['mutatordescription'] . "\"><a href=\"/mutators/" . $filename . "\">" . $mutators[intval($row["mut03"]) - 1]['mutatorname'] . "</a></td>\n";
        } else {
            echo "<td></td>\n";
        }
        echo "</tr>\n";
    }

    ?>
    </tbody>
    <table>
    <h2 id="past">Casted Weekly Mutations</h2>
    <p>The list of weekly mutations is shown below:</p>
    <p>Filters (click a filter to remove):</p>
    <div id="maps"><p>Map: <select id="mapselect">
        <?php
        foreach (get_missions() as $row) {
            $string = str_replace(" ", "", $row['name']);
            $string = str_replace("and", "", $string);
            $string = str_replace("&", "", $string);
            echo("<option value='" . strtolower($string) . "'>" . $row['name'] . "</option>");
        }
        ?>
        </select>
        <button type="button" id="addmap">Add</button>
        </p>
    </div>
    <div id="mutators"><p>Mutators: <select id="mutatorselect">
        <?php
        foreach (get_mutators() as $row) {
            $string = $row['mutatorname'];
            $string = str_replace(" ", "", $string);
            $string = str_replace("&", "", $string);
            echo("<option value='" . strtolower($string) . "'>" . $row['mutatorname'] . "</option>");
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
        <!--button type="button" id="filter">Filter</button-->
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
            updateCastedFilter();
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
            updateCastedFilter();
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
            updateCastedFilter();
        });
        function updateCastedFilter(){
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
            $("#castedColumnNames").show();
            recount();
        }
        function recount(){
            $("#filterCount").text($('#mutationList tr:visible').length-1);
        }
        $("#clear").click(function(){
            $(".clickable").remove();
            $("#mutationList tr").show();
            updateCastedFilter();
        });
        $(document).on('click','.clickable',function(){
            $(this).remove();
            updateCastedFilter();
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
                <tr id="castedColumnNames">
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
                $weeklyList = get_weeklymutations();
                foreach ($weeklyList as $row) {
                    $classVals = str_replace("and", "", str_replace(' ', '', strtolower($row["map"])));
                    if ($row["mut01"]) {
                        $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut01"]) - 1]['mutatorname']));
                    }
                    if ($row["mut02"]) {
                        $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut02"]) - 1]['mutatorname']));
                    }
                    if ($row["mut03"]) {
                        $classVals .= " " . str_replace(' ', '', strtolower($mutators[intval($row["mut03"]) - 1]['mutatorname']));
                    }
                    [$diff, $diffString] = getDiffString($row["brutalplus"]);
                    $classVals .= " brutal" . $diff;
                    echo "<tr class='" . $classVals . "'>\n";
                    echo "<td class='ribbon'>" . $row["releasedate"] . "<div class='ribbon" . $diff . "'>" . $diffString . "</div></td>\n";
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

<script src="/scripts/nav.js"></script>
<?= endContent() ?>
