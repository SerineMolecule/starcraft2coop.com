<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Brutal+ Difficulty</title>
  <meta name="description" content="Starcraft 2 Co-op Brutal+ Difficulty Mutators">
  <meta name="keywords" content="Starcraft co-op brutal difficulty mutators">
  <link rel="canonical" href="https://starcraft2coop.com/resources/brutal">
  <style>
    #points{
        display:inline;
    }
    #points th{
        cursor:pointer;
    }
    .sort{
        display:inline-block;
        width:30px;
    }
    .sort img{
        width:25px;
    }
    #mutationBox{
        border:1px solid white;
        display:none;
    }
    .toggled{
        background-color: darkslateblue;
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
    #totalCost{
        background-color:khaki;
        color:black;
        font-size:0.8em;
        display:none;
        z-index:1;
        padding:5px;
        border-radius:5px;
        margin-left:10px;
    }
    .tooltip{
        padding-left:10px;
        padding-right:10px;
        border-radius:25%;
    }
    form{
        margin-bottom:50px;
    }
  </style>
  <?= startContent() ?>
    <h1>Brutal+ Difficulty: Mutation Cost Brackets and Templates</h1>
    <?php include("../../includes/reporterror.php");?>
    <p>Brutal+ is considered an "Extended Difficulty". That is, missions will take place on the regular Brutal difficulty. However, in addition to the standard mission mechanics, a certain number of random <a href="mutators">mutators</a> are added to your game. You may queue into random queue on Brutal+ difficulty, as long as the commander you are queueing in with is at Level 15. For Brutal+2 and higher, you will require a person in your party to play.</p>
    <p>To learn more about how Brutal+ difficulty mutators are selected, you may watch the video below. The video goes over what Mutation Templates are, how the different mutator possibility counts are calculated mathematically and then how the weightings are rebalanced to be more in line with Blizzard's design intent.</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/9jfWuM215_c" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>The number of mutators that will be selected is between two and four. Each difficulty level is assigned a total number of points, which corresponds to the total mutation difficulty. The point/mutator brackets for each difficulty level is shown below. Note that the mutator counts for generated Brutal+ mutations are not evenly distributed. You are more likely to see 2 and 3-mutator games than 4 mutator games, as is Blizzard's desgin intent. For more information, please watch the video above.</p>
    <table id="limits" class="centered">
        <thead>
            <tr>
                <th>Difficulty</th>
                <th>Min. Points</th>
                <th>Max. Points</th>
                <th>Min. Mutators</th>
                <th>Max. Mutators</th>
            </tr>
        </thead>
        <tbody>
            <?php
            require_once '../../includes/queries.php';

            $brutalPlus = get_brutalpluses();
            foreach ($brutalPlus as $row) {
                echo "<tr><td>" . $row['difficulty'] . "</td><td>" . $row['minpoints'] . "</td><td>" . $row['maxpoints'] . "</td><td>" . $row['minmutators'] . "</td><td>" . $row['maxmutators'] . "</td></tr>";
            }
            ?>
        </tbody>
    </table>
    <p>Each mutator in the game is assigned a point cost that corresponds to its difficulty level. For more information on mutators, you may check the <a href="mutators">Mutators page</a>, which contains a lot of mutator-specific information such as their internal mechanics and also provide some commander-specific tips on how to handle them. The list of mutators and their associated point costs are shown below.</p>
    <p>Click the column headers to sort Ascending/Descending by that column. Click a row to toggle that row and calculate the total cost of a selected set of mutators.</p>

    <table id="points">
        <thead>
            <tr>
                <th id="col1">Mutator <div class="sort"><img src="/images/asc.png" alt="Sorted Ascending"><img src="/images/desc.png" alt="Sorted Descending" style="display:none"></div></th>
                <th id="col2">Cost <div class="sort"><img src="/images/asc.png" alt="Sorted Ascending" style="display:none"><img src="/images/desc.png" alt="Sorted Descending" style="display:none"></div></th>
            </tr>
        </thead>
        <tbody>
            <?php

            $mutatorInfo = get_mutators();
            usort($mutatorInfo, fn($a, $b) => $a['mutatorname'] <=> $b['mutatorname']);
            $mutators = array_fill(0, 11, []);
//10 is the highest point value
            $countArray = array_fill(0, 11, 0);
            foreach ($mutatorInfo as $row) {
                if ($row['abomination'] > 0) {
                    echo "<tr><td>" . $row['mutatorname'] . "</td><td>" . $row['abomination'] . "</td></tr>";
                    $countArray[$row['abomination']] += 1;
                    array_push($mutators[$row['abomination']], $row['mutatorname']) ;
                }
            }
            ?>
        </tbody>
    </table>
    <div id="totalCost">Total Cost</div>
    <script>
        $('#points th').click(function(){
            var table = $(this).parents('table').eq(0)
            var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()))
            var sortedAsc = false;
            var iconVisible = false;
            $(this).find('img').each(function(){
               if($(this).is(':visible')){
                   iconVisible = true;
                   if ($(this).attr('alt')=="Sorted Ascending"){
                       sortedAsc = true;
                   }
               }
            });
            if (!iconVisible){
                 $(this).parents('table'). find('img').hide();
                 $(this).find('img:first').toggle()
            }
            else{
                $(this).find("img").toggle();
            }
            if (sortedAsc){rows = rows.reverse()}
            for (var i = 0; i < rows.length; i++){table.append(rows[i])}

        })
        $('#points td').click(function(){
            $(this).parent().toggleClass("toggled");
            if($('.toggled').length>0){
                var totalCost = 0;
                $('.toggled').each(function(){
                    totalCost += parseInt($(this).find('td:nth-child(2)').text());
                    $("#totalCost").text("Total Cost: " + totalCost);
                })
                $("#totalCost").css('display', 'inline');
            }
            else{
                $("#totalCost").hide();
            }
        })
        $(window).scroll(function() {
            var tableTop = $("#col1").offset().top;
            var tableBottom = $("#points td").last().offset().top;
            var documentHeight = $(document).height();
            if (tableTop > $(window).scrollTop()) {
                $("#totalCost").css({
                    position: 'absolute',
                    top: tableTop
                });
            }
            else if (tableTop < $(window).scrollTop() + $(window).height()) {
                $("#totalCost").css({
                    position: 'fixed',
                    top: 10
                });
            } else {
                $("#totalCost").css({
                    position: 'fixed',
                    top: tableBottom - $(window).scrollTop()
                });
            }
        });
        function comparer(index) {
            return function(a, b) {
                var valA = getCellValue(a, index), valB = getCellValue(b, index)
                return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
            }
        }
        function getCellValue(row, index){ return $(row).children('td').eq(index).text() }
    </script>
    <p>You may use the demo below to simulate random mutator templates at different difficulty levels. Simply select your intended Brutal+ difficulty level and press Go. The algorithm used very closely matches the algorithm that the Starcraft II engine uses to generate the mutations, with a few optimizations to speed up the code, given that this is coded in PHP and not Galaxy. When a mutation set has been provided, you will also be given the total point cost of all the mutators in your set.</p>
    <form action='#'>
        <select id="difficultyLevel">
            <option value="1">Brutal+1</option>
            <option value="2">Brutal+2</option>
            <option value="3">Brutal+3</option>
            <option value="4">Brutal+4</option>
            <option value="5">Brutal+5</option>
            <option value="6">Brutal+6</option>
        </select>
        <input type="submit" value="Go" id="generateMutation">
    </form>
    <div id="tooltip">tooltip</div>
    <div id="mutationBox">
        <p>Mutators (<span id="cost">0</span> Points):</p>
        <div id="randomMutation">
        </div>
    </div>
    <script>
        $("#generateMutation").on("click", function(event){
            event.preventDefault();
            $("#cost").text("?");
            $("#randomMutation").empty();
            $("#randomMutation").append("<p>Loading...</p>");
            var difficultyLevel = parseInt($("#difficultyLevel").val());

            $.ajax({
                type: 'GET',
                url: '/scripts/generatemutation.php',
                data: { difficulty:difficultyLevel },
                success: function(response) {
                    var template = response;
                    generateMutation(template);
                },
            dataType:"json"
            });


        });


        function generateTemplate(muts, minPts, maxPts){
            var found = false;
            var cost = 0;
            var totalCost = 0;
            var result = [];
            const limits = <?php echo(json_encode($countArray))?>;
            while (!found){
                totalCost = 0;
                result = new Array(11).fill(0);
                for (var i=0; i<muts; i++){
                    //10 is the maximum point value
                    cost = Math.floor(Math.random() * Math.min((maxPts-muts + 1), 10)) + 1;
                    totalCost += cost;
                    if (totalCost > maxPts){
                        break;
                    }
                    else{
                        result[cost] += 1;
                    }
                    if(result[cost] > limits[cost]){
                        break;
                    }
                }
                if (totalCost <= maxPts && totalCost >=minPts){
                    found = true;
                    for(var i=0; i<result.length-1;i++){
                        if (result[i] > limits[i]){
                            found=false;
                        }
                    }

                }
            }
            return result;
        }

        function generateMutation(template){
            const mutatorArray = <?php echo(json_encode($mutators))?>;
            var cost = 0;
            var costString = '';
            $("#randomMutation").empty();
            $("#mutationBox").show();
            for(var i=template.length-1;i>0;i--){
                if (template[i]>0){
                    for(var j=0;j<template[i];j++){
                        cost += i;
                        costString += i + ' + ';
                        var randomIndex = Math.floor(Math.random() *  mutatorArray[i].length);
                        var selectedMutator = mutatorArray[i][randomIndex];
                        mutatorArray[i]=mutatorArray[i].slice(0, randomIndex).concat(mutatorArray[i].slice(randomIndex + 1, mutatorArray[i].length));
                        $("#randomMutation").append('<img class="tooltip" src="/images/mutators/'+ selectedMutator.replace(/ /g,'').toLowerCase() +'.png" alt="' + selectedMutator + '">')
                    }
                }
            }
            $("#cost").text(costString.slice(0, -3) + ' = ' + cost);
        }

        function weightedRandom(prob) {
            var i;
            var sum=0;
            var r=Math.random();
            for (i in prob) {
                sum += prob[i];
                if (r <= sum){
                   return i;
                }
            }
        }

        $(document).on('mouseover','.tooltip',function(){
            var mutator = $(this).attr("alt");
            $("#tooltip").html("<b>" + mutator + "</b>");
            $("#tooltip").show();
        });

        $(document).on('mouseleave','.tooltip',function(){
            $("#tooltip").hide();
        });

        $(document).on('mousemove','.tooltip',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });

    </script>
<?= endContent() ?>
