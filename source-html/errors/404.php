<?php

require_once "../../includes/wrapper.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Coop - Page Not Found!</title>
    <meta name="description" content="Starcraft 2 Co-op Error">
    <meta name="keywords" content="Starcraft co-op error">
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
<?= startContent() ?>
    <?php
    if (isset($_SERVER['HTTP_REFERER'])) {
        $ref = $_SERVER['HTTP_REFERER'];
    } else {
        $ref = "";
    }
    $cur = $_SERVER['REQUEST_URI'];

    if ($ref !== "") {
        $errorTime = date('Y-m-d H:i:s');
        file_put_contents(
            __DIR__ . "/../../logs/404log.txt",
            "[$errorTime] $ref ===> $cur \n",
            FILE_APPEND
        );
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

<?= endContent() ?>
