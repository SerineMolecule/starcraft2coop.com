<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mastery Breakpoints Calculator</title>
  <meta name="description" content="Figure out how many mastery points you need to reach certain breakpoints with this calculator.">
  <meta name="keywords" content="Starcraft co-op mastery breakpoints calculator damage units">
  <link rel="canonical" href="https://starcraft2coop.com/tools/masterybreakpoints">
  <style>
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
        #abilityContainer,#damageContainer, #protossContainer,#terranContainer,#zergContainer,#infestedContainer,#mutatorContainer{
            border: 1px solid white;
            display: inline-block;
            border-radius: 5px;
            padding: 5px;
        }
        #abilityContainer img{
            max-width:50px;
        }
        #unitContainerSingle,#unitContainerMulti{
            display:block;
            margin-bottom:50px;
        }
        #slide{
            vertical-align:middle;
            width:400px;
        }
        #masteryPoints{
            vertical-align:middle;
        }
        #input{
            width:49%;
            display:inline-block;
            vertical-align:top;
        }
        #calculatedOutput{
            width:49%;
            display:inline-block;
            display:none;
        }
        #unitContainerSingle img, #unitContainerMulti img{
            max-width:40px;
        }
        .unselected{
            opacity:0.5;
        }
        .note{
            font-size:0.6em;
            font-style:italic;
        }
        #unitContainerSingle td:nth-child(2), #unitContainerSingle td:nth-child(3){
            width:400px;
        }
        #unitContainerMulti td:nth-child(2), #unitContainerMulti td:nth-child(3), #unitContainerMulti td:nth-child(4), #unitContainerMulti td:nth-child(5){
            width:200px;
        }
  </style>
  <?= startContent() ?>
    <div id="tooltip">tooltip</div>
    <h1>Mastery Breakpoints Calculator</h1>
    <?php include("../../includes/reporterror.php");?>
    <p>You may use the calculator below to determine what mastery allocation you require to kill various units in Amon's forces. Note that objectives, Infested units and Mutator units are not taken into consideration. Move the slider left and right to allocate mastery points, and the units above the slider will move to show you which can be killed and which can't.</p>
    <div id="input">
        <h2>Select the Ability/Damage Type</h2>
        <div id="abilityContainer">
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/leapingstrike.png" alt="Kerrigan's Leaping Strike">
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/psionicshift.png" alt="Kerrigan's Psionic Shift">
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/immobilizationwave.png" alt="Kerrigan's Immobilization Wave">
            <br>
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/leapingstrikep2.png" alt="Kerrigan's Leaping Strike">
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/psionicshiftp2.png" alt="Kerrigan's Psionic Shift">
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/immobilizationwavep2.png" alt="Kerrigan's Immobilization Wave">
            <br>
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/kineticblast.png" alt="Kerrigan's Kinetic Blast">
            <img class="tooltip unselected" src="/images/commanderdata/hero/kerrigan/crushinggrip.png" alt="Kerrigan's Crushing Grip">
            <br>
            <img class="tooltip unselected" src="/images/commanderdata/abilities/swann/concentratedbeam.png" alt="Swann's Concentrated Beam">
            <img class="tooltip unselected" src="/images/commanderdata/hero/zagara/infesteddrop.png" alt="Zagara's Infested Drop Single Pod Impact">
            <img class="tooltip unselected" src="/images/commanderdata/abilities/abathur/spawntoxicnest.png" alt="Abathur's Toxic Nest">
            <img class="tooltip unselected" src="/images/commanderdata/hero/nova/snipe.png" alt="Nova's Snipe">
            <img class="tooltip unselected" id="penBlast1" src="/images/commanderdata/hero/nova/penetratingblast.png" alt="Nova's Penetrating Blast">
            <img class="tooltip unselected" id="penBlast2" src="/images/commanderdata/hero/nova/stancedanceswitch.png" alt="Nova's Penetrating Blast with Stance Dance">
            <img class="tooltip unselected" id="sabotageDrone" src="/images/commanderdata/hero/nova/sabotagedrone.png" alt="Nova's Sabotage Drone">
            <img class="tooltip unselected" id="banelingBarrage" src="/images/commanderdata/hero/zagara/banelingbarrage.png" alt="Zagara's Baneling Barrage (per Baneling hit)">
            <br>
            <img class="tooltip unselected" src="/images/commanderportraits/kerriganportrait.png" alt="Kerrigan's Hero Unit Attack Damage">
            <img class="tooltip unselected" src="/images/commanderportraits/zagaraportrait.png" alt="Zagara's Hero Unit Attack Damage">
            <img class="tooltip unselected" src="/images/commanderportraits/alarakportrait.png" alt="Alarak's Hero Unit Attack Damage">
        </div>
    </div>
    <div id="calculatedOutput">
        <h2>Damage Stats</h2>
        <div id="damageContainer">
            <div id="damageStats">
                <p>Base Damage: <span id="baseDmg"></span></p>
                <p>Mastery Increase: <span id="dmgIncrease"></span>%</p>
                <p>Current Damage: <span id="currentDamage"></span><span id="bonus"></span></p>
            </div>
            <div id="sliderContainer">
                <div id="sliderBar">
                    <input id="slide" type="range" min="0" max="30" step="1" value="0" oninput="updateUnits()">
                    <span id="masteryPoints">0</span>
                </div>
                <br>
                <div id="armorContainer">
                    <label><input type="radio" id="armor0" name="armor" value="0" onchange="updateUnits()">0 Armor</label>
                    <label><input type="radio" id="armor1" name="armor" value="1" onchange="updateUnits()">1 Armor</label>
                    <label><input type="radio" id="armor2" name="armor" value="2" onchange="updateUnits()">2 Armor</label>
                    <label><input type="radio" id="armor3" name="armor" value="3" onchange="updateUnits()">3 Armor</label>
                </div>
            </div>
        </div>
    </div>
    <div class="unitContainer" id="unitContainerSingle">
        <h2>Enemy Units</h2>
        <p class="note">Note: Zerg units regenerate HP when they take damage and survive, so take account of that when allocating mastery points.</p>
        <table>
            <thead>
                <tr>
                    <th>Race</th>
                    <th>1-shot</th>
                    <th>Survives</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Protoss</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Terran</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Zerg</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Infested</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mutator</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="unitContainer" id="unitContainerMulti">
        <h2>Enemy Units</h2>
        <p class="note">Note: Zerg units regenerate HP when they take damage and survive, so take account of that when allocating mastery points.</p>
        <table>
            <thead>
                <tr>
                    <th>Race</th>
                    <th>1-shot</th>
                    <th>2-shots</th>
                    <th>3-shots</th>
                    <th>4+ shots</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Protoss</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Terran</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Zerg</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Infested</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Mutator</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    <script>
        $( document ).ready(function() {
            $("#unitContainerSingle").hide();
            $("#unitContainerMulti").hide();
        });
        var unitsList;
        var multishot = false;
        $(document).on('mouseover','.tooltip',function(){
            var text = $(this).attr("alt");
            $("#tooltip").html(text);
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
        $(".tooltip").click(function(){
            $(".selected").addClass("unselected");
            $(".selected").removeClass("selected");
            $(this).addClass("selected");
            $(this).removeClass("unselected");
            var src = $(this).attr('src').split('/');
            var abilityName = src[src.length-1];
            abilityName = abilityName.substring(0, abilityName.length - 4);
            $.ajax({
                type: "POST",
                url: "../scripts/calculatebreakpoints.php",
                data: {
                    ability: abilityName,
                },
                success: function(data) {

                    var data = JSON.parse(data);
                    unitsList = data[4];
                    $("#baseDmg").text(data[2]);
                    var dmgIncrease = Math.round(data[3] * 10000) / 100;
                    $("#dmgIncrease").text(dmgIncrease);
                    $("#calculatedOutput").css("display","inline-block");
                    $("#unitContainerSingle").hide();
                    $("#unitContainerMulti").hide();
                    $("#slide").val(0);
                    if(data[0]==1){
                        $("#unitContainerMulti").show();
                        multishot = true;
                    }
                    else{
                        $("#unitContainerSingle").show();
                        multishot=false;
                    }
                    if(data[1]==1){
                        $("#armorContainer").show();
                        $("#armor1").prop('checked',true);
                    }
                    else{
                        $("#armorContainer").hide();
                    }
                    console.log(unitsList);
                    updateUnits();
                }
            });
        })
        function updateUnits(){
            var points = $("#slide").val();
            var baseDamage = parseInt($("#baseDmg").text());
            var damageIncrease = parseFloat($("#dmgIncrease").text());
            //This is added units get left with 1HP even if they should be 1-shot
            if(points==15 || points==30){
                var currentDamage = Math.round(parseFloat(baseDamage) + (damageIncrease*points*parseFloat(baseDamage)/100));
            }
            else{
                var currentDamage = Math.floor(parseFloat(baseDamage) + (damageIncrease*points*parseFloat(baseDamage)/100));
            }

            $("#currentDamage").text(currentDamage);
            //Add bonus text for Penetrating Blast
            if($("#penBlast1").hasClass("selected")){
                var extraDamage = currentDamage;
                $("#bonus").text(" (+" + extraDamage + " vs. Light)");
            }
            else if($("#penBlast2").hasClass("selected")){
                var extraDamage = currentDamage;
                $("#bonus").text(" (+" + extraDamage + " vs. Light)");
            }
            else if($("#sabotageDrone").hasClass("selected")){
                var extraDamage = currentDamage;
                $("#bonus").text(" (+" + extraDamage + " vs. Structures)");
            }
            else{
                $("#bonus").text("");
            }

            if($("#armorContainer").is(":visible")){
                var subtractor = $("input[name='armor']:checked").val();
                currentDamage = currentDamage - subtractor;
            }
            var container = "";
            if(multishot){
                container = "#unitContainerMulti";
            }
            else{
                container = "#unitContainerSingle";
            }
            $("#masteryPoints").text(points);

            $(container + " table tbody tr").each(function(){
                var row = $(this);
                row.find("td:nth-child(2)").empty();
                row.find("td:nth-child(3)").empty();
                row.find("td:nth-child(4)").empty();
                row.find("td:nth-child(5)").empty();
                unitsList[row.find("td:nth-child(1)").text()].forEach(function (item, index) {
                    var imageName = item[1].replace(/ /g,'').toLowerCase() + ".png";
                    var classes = "unit tooltip";
                    var calculatedDamage = currentDamage;
                    if(item[2]==1){
                        classes += " light";
                        if($("#penBlast1").hasClass("selected") || $("#penBlast2").hasClass("selected")){
                            calculatedDamage *= 2;
                        }
                    }
                    if(item[3]==1){
                        classes += " structure";
                        if($("#sabotageDrone").hasClass("selected")){
                            calculatedDamage *= 2;
                        }
                    }
                    if(multishot){
                        if(item[0]<=calculatedDamage){
                            row.find("td:nth-child(2)").append("<img class='" + classes + "' src='/images/comps/unitimages/" + imageName + "' alt='" + item[1] + ": " + item[0] + " vitality'>")
                        }
                        else if (item[0]<=2*calculatedDamage){
                            row.find("td:nth-child(3)").append("<img class='" + classes + "' src='/images/comps/unitimages/" + imageName + "' alt='" + item[1] + ": " + item[0] + " vitality'>")
                        }
                        else if (item[0]<=3*calculatedDamage){
                            row.find("td:nth-child(4)").append("<img class='" + classes + "' src='/images/comps/unitimages/" + imageName + "' alt='" + item[1] + ": " + item[0] + " vitality'>")
                        }
                        else{
                            row.find("td:nth-child(5)").append("<img class='" + classes + "' src='/images/comps/unitimages/" + imageName + "' alt='" + item[1] + ": " + item[0] + " vitality'>")
                        }
                    }
                    else{
                        if(item[0]<=calculatedDamage){
                            row.find("td:nth-child(2)").append("<img class='" + classes + "' src='/images/comps/unitimages/" + imageName + "' alt='" + item[1] + ": " + item[0] + " vitality'>")
                        }
                        else{
                            row.find("td:nth-child(3)").append("<img class='" + classes + "' src='/images/comps/unitimages/" + imageName + "' alt='" + item[1] + ": " + item[0] + " vitality'>")
                        }
                    }


               })
            });
        }
    </script>
<?= endContent() ?>
