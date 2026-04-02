<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Rockslapping Champions</title>
  <meta name="description" content="Rockslapping Champions is starcraft2coop.com's flagship series, which is very similar to Bronze League Heroes.">
  <meta name="keywords" content="Starcraft co-op rockslapping champions">
  <link rel="canonical" href="https://starcraft2coop.com/community/rockslappingchampions">
  <script>
        function validate() {
          var x = $('#rcForm [name=file]').val()
          if (x == "") {
              alert("File not selected");
              return false;
          }
          var x = $('#rcForm [name=desc]').val()
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
        #commanderSelection{
            display:none;
            text-align:center;
        }
        #commanderSelection img{
            cursor: pointer;
            margin-left:5px;
            margin-right:5px;
            border-radius:50%;
        }
        #rcList{
            height: 500px;
            overflow-y: scroll;
            display:none;
        }
        .rcThumb{
            width: 175px;
            padding-left: 5px;
            padding-right: 5px;
            border-radius: 15%;
            cursor:pointer;
        }
        .filtered{
            opacity:0.33;
        }
    </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Rockslapping Champions</h1>
    <h2>The Series</h2>
    <p>Rockslapping Champions is a comedy series of co-op games casted where a player has demonstrated poor decision-making and strategic-thinking ability.  It is named after <a href="/commanders/dehaka">Dehaka's Rockslapping</a> (a highly inefficient opening with Dehaka). The games are casted with a one-of-a-kind Co-op Observer UI, with "Did You Know" facts scattered throughout the video.</p>
    <p>The Co-op Observer Interface used during these casts is an exclusive interface used for starcraft2coop.com's content. It contains information that you'd expect from any observer interface (such as resource counts, supplies and upgrades). However, in addition to this, it also contains calldown information such as charges available, cooldown and unlock status.</p>
    <h2>Full Playlist</h2>
    <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PL-U97hco2Fu543NyDyGNox2VGtz6BkbWl" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h2>Submit Your Replays for Casting</h2>
    <!--
    <p>You are welcome to submit replays for casting. Before submitting a replay, please consider the following:</p>
    <ul>
        <li>Gameplay must show exceptionally poor strategy. Mistakes happen in co-op. The series is focused on poor core understanding of the co-op mode and not mechanical ability.<br>
            Additionally, it is quite common to see players take a very passive role in a game (building defenses and not pushing objectives). While they definitely fit the bill for this series, the games are not particularly interesting to cast, unless their strategy backfires.
        </li>
        <li>Games should feature two players working towards completion of the mission and not one player harassing another (e.g. TK'ing) and be played to victory for both players.</li>
        <li>Due to limitations with Blizzard's UI functionality, the following information will not be available for viewing:
            <ul>
                <li>Dehaka's Essence</li>
            </ul>
            Please take the above limitations into consideration when submitting a replay.
        </li>
        <li>Be a game on Brutal difficulty. Players use easier difficulty levels to experiment and practice with commanders and may take away from the spirit of the series.</li>
        <li>If you believe you might have also been a Rockslapper during a game, please mention in your description if you would be okay if the episode is casted as a double-Rockslapping Champion episode.</li>
        <li>If you would like either or both of the player's names to be anonymized, please mention so in your description. Do note that only names on the interface will be anonymized. Accidental hovers over units will still show player's names (although every effort to avoid doing so will be taken).</li>
    </ul>
    <p>If you would like to see statistics about the series, please check out the <a href="/resources/stats">Statistics Page</a>. It shows statistics such as top submitters and commanders most featured as the Rockslapper in the series.</p>

    <form action="rockslappingchampions.php" name="submissionform" id="rcForm" class="captchaForm" onsubmit="return validate()" method="post" enctype="multipart/form-data">
        <p>Replay File: <input type="file" name="file" accept=".SC2Replay"></p>
        <p>Brief Description: <input name="desc" type="text" size="30"></p>
        <p style="display:none">Leave this empty: <input type="text" name="url"></p>
        <input type="hidden" name="recaptcha_response" id="rcFormRecaptchaResponse">
        <p><input type="submit" id="submitbtn" value="Submit"></p>
        <p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    </form>-->
    <p>Submissions are now closed. Thank you.</p>
    <h2>Filter By Commander</h2>
    <p>If you would like to filter previous Rockslapping Champions episode by the Rockslapping Commander, you may click the link below to generate a full list of episodes. Click on the Commander Portraits to remove the commander from the list.</p>
    <p>Compilation episodes take into consideration all commanders featured in that episode. As long as a single commander is unfiltered out, compilation episodes will continue to appear in the list.</p>
    <div id="player">
        <iframe id="video" width="640" height="360" src="about:blank" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <p id="showList"><a href="#">Show List</a></p>
    <div id="commanderSelection">
    </div>
    <div id="rcList">
    </div>
    <script>
        $(document).on('click','#commanderSelection img',function(){
            $(this).toggleClass("filtered");
            refilter();
        });
        $(document).on('click','#select',function(){
            $("#commanderSelection img.filtered").each(function(){
                $(this).removeClass("filtered");
            });
            refilter();
        });
        $(document).on('click','#unselect',function(){
            $("#commanderSelection img:not(.filtered)").each(function(){
                $(this).addClass("filtered");
            });
            refilter();
        });
        function refilter(){
            var commanders = [];
            $("#commanderSelection img:not(.filtered)").each(function(){
                commanders.push("." + $(this).attr("alt"));
            });
            var collection = $('#rcList a');

            $("#rcList a").hide();
            if(commanders.length!==0){
                collection = collection.filter(commanders.join());
            }
            else{
                return true;
            }
            collection.show();
        }
        $(document).click(function(e) {
            if (e.srcElement !== $("#player")){
                $("#video").attr("src",$("#video").attr("src"));
                $("#player").fadeOut();
            }
        });
        $(document).on('click','.rcThumb',function(){
            $("#video").attr("src",$(this).parent().attr("href"));
            $("#player").fadeIn();
            return false;
        });
        $("#showList").click(function(e){
            e.preventDefault();
            $("#showList").hide();
            $("#commanderSelection").show();
            $("#rcList").show();
            $.ajax({
                type: 'GET',
                url: '../scripts/generaterclist.php',
                success: function(data) {
                    var stringArray=JSON.parse(data);
                    $("#commanderSelection").html(stringArray[0]);
                    $("#rcList").html(stringArray[1]);
                }
            });
            return true;
        })
    </script>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
