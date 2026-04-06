<!DOCTYPE html>

<html lang="en">
<head>
  <title>Starcraft 2 Coop - Page Not Found!</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="description" content="Starcraft 2 Co-op Error">
  <meta name="keywords" content="Starcraft co-op error">
  <meta name="robots" content="index, follow">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/mainstyle.css?v=1.32">
  <link href='https://fonts.googleapis.com/css?family=Convergence' rel='stylesheet' type='text/css'>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <style>
    p{
        text-align:center;
        margin:auto;
    }
    .errorImg{
        border-radius:50%;
        display:block;
        margin:auto;
        padding-top:25px;
        padding-bottom:25px;
    }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <?php
    if (isset($_SERVER['HTTP_REFERER'])) {
        $ref = $_SERVER['HTTP_REFERER'];
    } else {
        $ref = "";
    }

    $cur = 'http://www.' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];

    if ($ref != "") {
        $errorTime = date('Y-m-d H:i:s');
        $file = fopen("404log.txt", 'a');
        fwrite($file, "[$errorTime] $ref ===> $cur \r\n");
        fclose($file);
    }
    $val = rand(1, 3);
    if ($val == 1) {
        echo "<p>You must construct additional pylons!</p>";
        echo '<img class="errorImg"  src="/images/errors/pylon.jpg" alt="Pylon">';
    } elseif ($val == 2) {
        echo "<p>Additional Supply Depots required!</p>";
        echo '<img class="errorImg"  src="/images/errors/supplydepot.jpg" alt="Supply Depot">';
    } else {
        echo "<p>Spawn more Overlords!</p>";
        echo '<img class="errorImg" src="/images/errors/overlord.jpg" alt="Overlord">';
    }
    ?>

    <p>(Either that, or the page was not found.)</p>

</div>
<?php include("../footer.php"); ?>
</body>
</html>
