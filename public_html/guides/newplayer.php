<?php
include("../header.php");
$_SESSION["known"] = true;
?>
  <title>Starcraft 2 Co-op - Commander Selection Guide</title>
  <meta name="description" content="Starcraft 2 Co-op Commander Selection Guide for new players, providing information on strengths and weaknesses of commanders.">
  <meta name="keywords" content="Starcraft co-op guides commander selection">
  <link rel="canonical" href="https://starcraft2coop.com/guides/newplayer">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <style>
    @media (min-width: 701px){
        #commanderImage{
            width:50%;
            float:right;
        }
        #commanderImage img{
            width:100%;
        }
        #stats{
            width:50%;
            float:left;
        }
    }
    @media (max-width: 700px){
        #commanderImage{
            display:none;
        }
    }
    #commanderPanel{
        margin-top:50px;
    }
    #commanderDescription{
        clear:both;
    }
    #commanderSelection{
        padding-top:50px;
        text-align:center;
    }
    #commanderSelection img{
        cursor: pointer;
        margin-left:5px;
        margin-right:5px;
        border-radius:50%;
    }
    #commanderName h2{
        text-align:center;
        margin:0;
    }
    #commanderMotto{
        font-family: 'Kaushan Script', cursive;
        text-align:center;
        padding-bottom:5px;
    }
    #bars p{
        line-height:0;
    }
    .barContainer{
        position:relative;
        margin-bottom:45px;
        width:50%;
    }
    .barContainer p{
        white-space:nowrap;
    }
    .currentProgress{
        display:inline-block;
        position:absolute;
        top:10px;
        margin:2px;
        height:4px;
        border-radius:5px;
        background-color:darkslateblue;
        width:0%;
    }
    .description{
        display:none;
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

  </style>

  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <div id="tooltip">tooltip</div>
    <h1>New Player Commander Selection</h1>
    <p>One of the most common questions that players interested in playing co-op ask is "Which commander is right for me?". A lot of new players have problems with commander selection, particularly their first paid commander. Co-op features a host of different commanders with a wide variety of playstyles, and given the large roster available, can be overwhelming. This is especially true considering that most co-op commanders are paid, so players would like to get the best out of their investment.</p>
    <p>While assigning arbitrary metrics for commanders and giving them a score from 1 to 5 is extremely subjective, the page below hopes to serve as a rough guide as to what each commander's power level and playstyle is, to allow new players to make a more informed decision as to which commander to play. It is highly advisable to read through the individual commander pages to see what abilities they have available to them, what strategies they utilize and what units they have to make a better informed decision. Additionally, players new to Co-op are advised to check the <a href="/guides/generaltips">General Tips</a> page to get some insight on some good strategies to use in Co-op.</p>
    <p>Additionally, participating in the community is another great way of learning about commanders and different playstyles. You may check out the <a href="/about/links">Links</a> page to find more Starcraft II Co-op Community content. Lastly, asking good questions and having an open-minded approach and a willingness to learn will take you a long way to improving your Co-op gameplay.</p>
    <div id="commanderPanel">
        <div id="stats">
            <div id="commanderName">
                <h2>Raynor</h2>
            </div>
            <div id="commanderMotto">
                <p>Renegade Commander</p>
            </div>
            <div id="bars">
                <div id="statDifficulty" class="barContainer">
                    <div class="description">How easy the commander is to play assuming they carry their<br>own weight in the mission. Optimal play is not required.</div>
                    <p>Ease of Play</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statLeveling" class="barContainer">
                    <div class="description">How powerful the commander is as they level through<br>both, sub-Mastery and sub-Ascension levels.</div>
                    <p>Sub-Ascension Power</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statPowerNew" class="barContainer">
                    <div class="description">Power level shown by the commander<br>from inexperienced co-op players.</div>
                    <p>Power Level for Beginners</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statPowerVeteran" class="barContainer">
                    <div class="description">Power level shown by the commander<br>from experienced co-op players.</div>
                    <p>Power Level for Veterans</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statEarly" class="barContainer">
                    <div class="description">Amount of support the commander can offer towards<br>the mission objective in the early game.</div>
                    <p>Early Game Strength</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statMacro" class="barContainer">
                    <div class="description">The simplicity of the macro required to keep the commander<br>effective and ramping throughout the mission.</div>
                    <p>Ease of Macro</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statMicro" class="barContainer">
                    <div class="description">The simplicity of the micro required to keep<br>the commander at a high level play.</div>
                    <p>Ease of Micro</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statMutation" class="barContainer">
                    <div class="description">How effectively the commander adapts<br>to all the mutators in the game.</div>
                    <p>Mutation Versatility</p>
                    <div class="currentProgress"></div>
                </div>
                <div id="statSpeed" class="barContainer">
                    <div class="description">How fast the commander is able to reach their desired<br>composition to handle the objective and attack waves.</div>
                    <p>Ramp Up Speed</p>
                    <div class="currentProgress"></div>
                </div>
            </div>
        </div>
        <div id="commanderImage">
            <img id="commanderPic" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" alt="Commander Image">
        </div>
    </div>
    <div id="commanderDescription">
        <p></p>
    </div>
    <div id="commanderSelection">
        <?php
        include '../scripts/sqlconnection.php';
        $sql = "SELECT commander
                FROM commandersummaries";
        $result = mysqli_query($con, $sql);
        while ($row = mysqli_fetch_array($result)) {
            echo("<img src='/images/commanderportraits/{$row['commander']}portrait.png' alt='{$row['commander']}'>");
        }

        $con->close();
        ?>
    </div>
    <script>
        $( document ).ready(function() {
            update("raynor");
        });
        $("#commanderSelection").on("click","img", function(){
            var selectedCommander=$(this).attr("alt");
            update(selectedCommander)
        })
        $(".barContainer").on('mouseover',function(e){
            var desc = $(this).find(".description").html();
            $("#tooltip").html(desc);
            $("#tooltip").show();
        });
        $(".barContainer").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".barContainer").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");

        });
        function update(commander){
            var colorArray = ["red", "orangered", "yellow", "limegreen", "darkgreen"]
            $.ajax({
                type: 'GET',
                url: '..//scripts/getcommander.php',
                data: { commander: commander},
                success: function(response) {
                    val = JSON.parse(response);
                    $("#commanderName").html("<h2>" + val[0] + "</h2>");
                    $("#commanderMotto").text(val[1]);
                    $("#commanderPic").hide();
                    $("#commanderPic").attr("src", "/images/selection/" + commander.toLowerCase() + ".png").on("load", function() {
                        $("#commanderPic").show()
                        });
                    for(var i=2; i<11;i++){
                        $(".currentProgress").eq(i-2).animate({width: val[i]*20 + "%"});
                        $(".currentProgress").eq(i-2).css("background-color", colorArray[val[i]-1]);
                    }
                    $("#commanderDescription").html(val[11]).append(" Visit their commander page <a href='/commanders/" + commander + "'>here</a> to learn more.");
                }
            });
        }
    </script>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
