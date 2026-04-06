<!DOCTYPE html>

<html lang="en">
<head>
  <title>Starcraft 2 Coop - Tournament Summary - Nov 2018</title>
  <link rel='shortcut icon' href='/images/favicon.ico' type='image/x-icon' />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="description" content="Starcraft 2 Co-op Tournament Summary November 2018">
  <meta name="keywords" content="Starcraft co-op tournament summary november 2018">
  <meta name="robots" content="index, follow">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/mainstyle.css?v=1.32">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/standingsstyle.css">
  <link href='https://fonts.googleapis.com/css?family=Convergence' rel='stylesheet' type='text/css'>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <style>

  </style>
  </head>
<body>
<div id="header"><img src="/images/mainpageheader.png" alt="Starcraft II Co-op Logo">
</div>
<div id="menu"><?php include("../../../menu.php"); ?></div>
<div id="content">
    <h1>Co-op Tournament Summary - November 2018</h1>
    <!-- Paste the content before the tooltip tag here -->
    <div id="spoilerToggle">
        <p>Spoilers</p>
        <form>
            <input type="radio" id="disableSpoilers" name="spoilers" value="disabled" checked>Disabled
            <input type="radio" id="enableSpoilers" name="spoilers" value="enabled">Enabled
        </form>
    </div>
    <div id="player">
        <iframe id="video" width="560" height="315" src="about:blank" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div id="tooltip" style="display: none; top: 87px; left: 556px; position: absolute;">Tooltip Text</div>
    <!-- Add Youtube links to videos -->
    <!-- Add "winner" and "loser" class to mutset td -->
    <!-- Remove opacity values for commanders and missions (sometimes, values can be different) -->
    <!-- Paste the content after the tooltip tag here -->
</div>
<script>
    $(".tooltip").on('mouseover',function(e){
        $("#tooltip").html($(this).attr("alt"));
        $("#tooltip").show();
    });
    $(".tooltip").on('mouseleave',function(){
        $("#tooltip").hide();
    });
   $(".tooltip").on('mousemove',function(e){
        $('#tooltip').css('top', e.pageY-35);
        $('#tooltip').css('left', e.pageX);
        $('#tooltip').css('position', "absolute");

    });
    $("#abilityicons img").on('mouseover',function(e){
        $("#tooltip").html($(this).attr("alt"));
        $("#tooltip").show();
    });
    $("#abilityicons img").on('mouseleave',function(){
        $("#tooltip").hide();
    });
   $("#abilityicons img").on('mousemove',function(e){
        $('#tooltip').css('top', e.pageY-35);
        $('#tooltip').css('left', e.pageX);
        $('#tooltip').css('position', "absolute");

    });
    $(".spoiler").on('click', function(){
        $(this).fadeOut();
    })
    $('input[type=radio][name=spoilers]').change(function() {
        if (this.value == 'disabled') {
            $(".spoiler").fadeIn();
            $(".fake").show();
            $(".winner").css("background-color", "");
            $(".loser").css("background-color", "");
        }
        else if (this.value == 'enabled') {
            $(".spoiler").fadeOut();
            $(".fake").hide();
            $(".winner").css("background-color", "seagreen");
            $(".loser").css("background-color", "tomato");
        }
    });
    $(document).click(function(e) {
        if (e.srcElement !== $("#player")){
            $("#video").attr("src",$("#video").attr("src"));
            $("#player").fadeOut();
        }
    });
    $(".vod").click(function() {
        $("#video").attr("src",$(this).attr("href"));
        $("#player").fadeIn();
        return false;
    });
</script>
<?php include("../../../footer.php"); ?>
</body>
</html>
