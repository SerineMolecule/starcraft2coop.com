<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Unit Stats</title>
  <meta name="description" content="A calculator to provide you with unit stats before and after upgrades for every unit in Co-op. Also includes data on Amon's units.">
  <meta name="keywords" content="Starcraft co-op unit stats">
  <link rel="canonical" href="https://starcraft2coop.com/tools/unitstats">
  <style>
    @media (max-width: 700px){
        #unitStats tr:not(#dataContainers) td:nth-child(2),#unitStats tr:not(#dataContainers) td:nth-child(3){
            display:none;
        }
        #raceFilters{
            line-height:50px;
        }
        #dataContainer{
            width:100px;
            height:250px;
            float:right;
            background-color:#1f1f1f;
            border-radius:25px;
            border:1px solid #ccc;
            padding:5px;
        }
    }
    @media (min-width: 701px){
        #dataContainer{
            width:240px;
            height:250px;
            float:right;
            background-color:#1f1f1f;
            border-radius:25px;
            border:1px solid #ccc;
            padding:5px;
        }
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
    .tableContainer{
        overflow:hidden;
    }
    #unitStats{
        overflow:hidden;
        table-layout:fixed;
        width:100%;
    }
    #unitStats th:nth-child(1){
        width:30px;
    }
    #unitStats th:nth-child(2){
        width:200px;
        text-align: middle;
    }
    #unitStats th:nth-child(3){
        width:250px;
    }
    #unitStats th:nth-child(4){
        width:250px;
    }
    #unitStats td:first-child img{
        cursor:pointer;
        width:30px;
        border-radius: 50%;
    }
    #leftList, #leftStats, #comparison{
        vertical-align:top;
        overflow:hidden;
    }
    #leftList ul{
        list-style-type: none;
        padding: 0;
    }
    #leftList li{
        font-size:0.98em;
        cursor:pointer;
    }
    #leftList{
        text-align:left;
    }
    #unitStats th{
        border: none;
        vertical-align:bottom;
    }
    #unitStats td{
        border:none;
    }
    #unitStats td{
        border-right: 1px solid #ccc;
    }
    #unitStats th.rotate1 > div {
      transform:
        translate(23px, -7px)
        rotate(315deg);
        width: 30px;
    }
    #comparisonContainer{
        vertical-align:top;
    }
    .title{
        display:block;
        text-align:center;
        text-decoration:underline;
        margin-top:15px;
    }
    #unitHP{
        color:chartreuse;
    }
    #unitArmor{
        color:darkgreen;
    }
    #unitShields{
        color:aqua;
    }
    #unitShieldArmor{
        color:darkseagreen;
    }
    #unitEnergy{
        color:darkorchid;
    }
    .upgradesList{
        margin-top:50px;
        padding:5px;
        border:1px solid white;
        padding-right:3px;
        padding-right:3px;
        padding-bottom:5px;
    }
    .upgradesList img{
        width:50px;
        cursor:pointer;
        opacity:0.25;
    }
    .upgradesList img.selectedUpgrade{
        border:1px dashed yellow;
        opacity: 1;
    }
    .masteryContainer, .prestigeContainer{
        margin-top:15px;
        padding:5px;
        border:1px solid white;
    }
    .rangeContainer{
        display:flex;
    }
    .modified{
        color:yellow;
    }
    label{
        width:150px;
    }
    #amonFilter td{
        border:none;
    }
    #amonTableContainer{
        max-width:60%;
        float:left;
        border: 1px solid #ccc;
        padding-top:10px;
        padding-bottom:10px;
        border-radius:25px;
        margin-bottom:50px;
    }
    #flexContainer{
        width:100%;
    }
    .toggle{
        border: 1px solid #ccc;
        margin: 5px;
        padding: 5px;
        cursor:pointer;
        border-radius:10px;
    }
    .content{
        display: inline-flex;
        border: 1px solid #ccc;
        margin: 5px;
        padding: 5px;
        cursor:pointer;
        border-radius:10px;
    }
    .Protoss{
        background-color:peru;
    }
    .Terran{
        background-color:darkblue;
    }
    .Zerg{
        background-color:darkmagenta;
    }
    .Hybrid{
        background-color:black;
    }
    .Infested{
        background-color:darkred;
    }
    .Objective{
        background-color:darkgreen;
    }
    .Mutator{
        background-color:orangered;
    }
    .clear{
        clear:both;
    }
    th.rotate1{
        height: 140px;
        white-space: nowrap;
    }
    th.rotate1 > div > span{
        border-bottom: 1px solid #ccc;
        padding: 5px 10px;
    }
  </style>
  <?= startContent() ?>
    <h1>A List of Unit Stats for Player and Amon Units</h1>
    <?php include("../../includes/reporterror.php");?>
    <h2>Unit Comparison</h2>
    <p>Use the below applet to see single unit stats or compare two units together. Click on a commander, then a unit of theirs to get its stats. To compare two units, select a commander and their unit on the opposite side.</p>
    <p>Notes about the data:</p>
    <ul>
        <li>Data only shows base stats and upgrades that affect those base stats. Upgrades that affect skill cooldowns are not displayed.</li>
        <li>All evolutions (e.g. Abathur's Devourer, Dehaka's Primal Combat units) build times only includes the evolution time, and not the build time of the parent units.</li>
        <li>Any units with charge-based production (e.g. Artanis) uses the charge cooldown time as the build time. For Stukov, the unit's build time is displayed, and not the charge time.</li>
        <li>For multiple-spawned units (e.g. Zerglings), resource costs are divided by the number of units spawned.</li>
        <li>For buffs that have multiple stacks (e.g. Biomass), the maximum buff value will be calculated.</li>
        <li>Only upgrades that change the units weapon stats are listed. For this reason, damage reduction like Fenix's Network Administrator is not shown.</li>
        <li>Since numbers are calculated, there may be small rounding errors.</li>
    </ul>
    <div id="tooltip" style="display: none; top: 1601px; left: 667px; position: absolute;"><b>Upgrade Name</b><br><br>Selected upgrade description.</div>
    <div class="tableContainer">
        <table id="unitStats">
            <thead>
                <tr>
                    <th class="rotate1"><div><span>Commander</span></div></th>
                    <th>Unit</th>
                    <th>Data</th>
                    <th>Compare</th>
                </tr>
            </thead>
            <tbody>
                <tr id="dataContainers">
                    <td></td>
                    <td rowspan="19" id="leftList"></td>
                    <td rowspan="19" id="leftStats"></td>
                    <td rowspan="19" id="comparisonContainer"><button id='clearCompare' type='button'>Clear</button><div id="comparison"></div></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/raynorportrait.png" alt="Raynor"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/kerriganportrait.png" alt="Kerrigan"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/artanisportrait.png" alt="Artanis"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/swannportrait.png" alt="Swann"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/zagaraportrait.png" alt="Zagara"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/vorazunportrait.png" alt="Vorazun"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/karaxportrait.png" alt="Karax"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/abathurportrait.png" alt="Abathur"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/alarakportrait.png" alt="Alarak"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/novaportrait.png" alt="Nova"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/stukovportrait.png" alt="Stukov"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/fenixportrait.png" alt="Fenix"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/dehakaportrait.png" alt="Dehaka"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/hornerportrait.png" alt="Horner"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/tychusportrait.png" alt="Tychus"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/zeratulportrait.png" alt="Zeratul"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/stetmannportrait.png" alt="Stetmann"></td>
                </tr>
                <tr>
                    <td><img src="/images/commanderportraits/mengskportrait.png" alt="Mengsk"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <script>
        var oldtdRight;
        var oldtdLeft;
        var unitColumn;
        var selectedCommanders= ["",""];
        var selectedUnits= ["",""];
        $("#unitStats img").on("click", function(){
            var selectedCommander = $(this).attr("alt");
            $(this).parent().css("background-color", "darkslateblue");
            if (oldtdLeft){
                oldtdLeft.css("background-color","");
            }
            oldtdLeft=$(this).parent();
            selectedCommanders[0] = selectedCommander;
            $("#leftList").text("Loading...");

            $.ajax({
                type: 'GET',
                url: '/scripts/calculatestats.php',
                data: {mode:1, commander: selectedCommander},
                success: function(response) {
                    $("#leftList").html(response);
                }
            });
        });
        $("#unitStats").on("click", "li", function(){
            var selectedUnit = $(this).text();
            var dataColumn;
            var unitColumn;
            var selectedCommander = selectedCommanders[0];
            selectedUnits[0] = selectedUnit;
            $("#leftStats").text("Loading...");
            $.ajax({
                type: 'GET',
                url: '/scripts/calculatestats.php',
                data: {mode:2, commander: selectedCommander, unit: selectedUnit },
                success: function(response) {
                    response = JSON.parse(response);
                    $("#leftList").find(".upgradesList").remove();
                    $("#leftList").append(response[1]);
                    $("#leftStats").html("<button id='setCompare' type='button'>Set Compare >></button><br><div id='statsContent'>" + response[0] + "</div>");
                },
            });
        });

        $("#leftList").on('mouseover',"img", function(e){
            var upgrade = $(this).attr("alt").split(":");
            $("#tooltip").html("<b>" + upgrade[0] + "</b><br><br>" + upgrade[1]);
            $("#tooltip").show();
        });
        $("#leftList").on('mouseleave',"img", function(){
            $("#tooltip").hide();
        });
        $("#leftList").on('mouseover',"img",function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
        $("#leftList").on('click',"img", function(e){
            $(this).toggleClass("selectedUpgrade");
        });

        $("#leftList").on('click',"#recalculate", function(e){
            var jsonobject = {};
            var upgradeArray=[];
            var masteryArray=[];

            jsonobject['mode'] = 3;
            jsonobject['commander'] = selectedCommanders[0];
            jsonobject['selectedUnit'] = selectedUnits[0];

            $("#leftList").find(".upgradesList").find(".selectedUpgrade").each(function(){
                var filePath = $(this).attr("src");
                var tempArray = filePath.split("/");
                upgradeArray.push(tempArray[5].replace(".png", ""));
            })
            jsonobject['upgrades']=upgradeArray;

            if($("#leftList input[name='attackupgradelevel']:checked").length){
                jsonobject['attacklevel'] = $("#leftList input[name='attackupgradelevel']:checked").val();
                jsonobject['armorlevel'] = $("#leftList input[name='armorupgradelevel']:checked").val();
            }
            else if($("#leftList input[name='rank']:checked").length){
                jsonobject['ranklevel'] = $("#leftList input[name='rank']:checked").val();
            }
            else{
                jsonobject['artifactslevel'] =$("#leftList input[name='fragmentscollected']:checked").val();
            }

            if($("#leftList input[name='shieldupgradelevel']:checked").length){
                jsonobject['shieldlevel'] = $("#leftList input[name='shieldupgradelevel']:checked").val();
            }

            $(".masterySlider").each(function(){
                masteryArray.push([$(this).attr('name'), $(this).val()]);
            })
            jsonobject['masteries']= masteryArray;

            if($("#leftList input[name='" + selectedCommanders[0] + "Prestige']:checked").length){
                jsonobject['prestige'] = $("#leftList input[name='" + selectedCommanders[0] + "Prestige']:checked").val();
            }

            console.log(jsonobject);
            $.ajax({
                type: 'GET',
                url: '/scripts/calculatestats.php',
                data: jsonobject,
                success: function(response){
                    $("#leftStats").html("<button id='setCompare' type='button'>Set Compare >></button><br><div id='statsContent'>" + response + "</div>");
                }
            })
        });
        $("#leftList").on('input',".masterySlider", function(e){
            $(this).siblings("span").text($(this).val());

        })
        $("#leftStats").on('click',"#setCompare", function(e){
            $("#comparison").html($("#statsContent").html());
        })
        $("#clearCompare").on('click', function(e){
            $("#comparison").html("");
        })
    </script>
    <h2>Enemy Target Vitalities</h2>
    <p>Use the below filters to see which enemy units and objectives fall below a certain vitality (HP + Shields). Click on a unit to see its vitality data and associated tags.</p>
    <p>Race Filters:</p>
    <p id="raceFilters">
        <span class="toggle Protoss">Protoss</span>
        <span class="toggle Terran">Terran</span>
        <span class="toggle Zerg">Zerg</span>
        <span class="toggle Hybrid">Hybrid</span>
        <span class="toggle Infested">Infested</span>
        <span class="toggle Objective">Objective</span>
        <span class="toggle Mutator">Mutator</span>
    </p>
    <div id="formElements">
        <table id="amonFilter">
            <tbody>
                <tr>
                    <td><label>Min Vitality: </label></td>
                    <td><input type="text" id="minVitality" maxlength="5" size="5"></td>
                </tr>
                <tr>
                    <td><label>Max Vitality: </label></td>
                    <td><input type="text" id="maxVitality" maxlength="5" size="5"></td>
                </tr>
            </tbody>
        </table>
        <button id="filter" type="button">Filter</button><button id="reset" type="button">Reset</button>
    </div>
    <br><br>
    <script>
        $(".toggle").on("click", function(){
            var toggledRace = $(this).attr("class").toString().split(' ')[1];
            if ($(this).css("opacity")==0.25){
                $(this).css("opacity", 1.0);
                $(".content." + toggledRace).fadeIn(400, function(){
                    $(".content." + toggledRace).css("display","inline-flex");
                })

            }
            else{
                $(this).css("opacity", 0.25);
                $(".content." + toggledRace).fadeOut(400, function(){
                    $(".content." + toggledRace).css("display","none");
                })

            }

        })
    </script>
    <div id="dataContainer"></div>
    <div id="amonTableContainer">
        <div id="flexContainer">
            <?php include("../scripts/generatetable.php");?>
        </div>
    </div>
    <script>
        $("#flexContainer").on("click",".content", function(){
            selectedUnit=$(this).text();
            $("#dataContainer").text("Loading...");
            $.ajax({
                type: 'GET',
                url: '../scripts/getamonstats.php',
                data: { unit: selectedUnit },
                success: function(response) {
                    $("#dataContainer").html(response);
                }
            });
        })
        $("#filter").on("click", function(){
            var maxVit=$("#maxVitality").val();
            var minVit=$("#minVitality").val();
            if (maxVit!=="" || minVit!==""){
                if(maxVit==""){
                    maxVit = 0;
                }
                if(minVit==""){
                    minVit = 0;
                }
                $.ajax({
                    type: 'GET',
                    url: '../scripts/generatetable.php',
                    data: { maxvitality: maxVit, minvitality: minVit },
                    success: function(response) {
                        $("#flexContainer").html(response);
                        $(".toggle").each(function(){
                            if($(this).css("opacity")==0.25){
                                $("#flexContainer").find("." + $(this).text()).css("display","none")
                            }
                        })
                    }
                });
            }

        })
        $("#reset").on("click", function(){
            $(".toggle").each(function(){
                $(this).css("opacity",1);
            })
            $("#maxVitality").val("");
            $("#minVitality").val("");
            $.ajax({
                type: 'GET',
                url: '../scripts/generatetable.php',
                data: {},
                success: function(response) {
                    $("#flexContainer").html(response);
                }
            });
        })
    </script>
    <div class="clear"></div>
<?= endContent() ?>
