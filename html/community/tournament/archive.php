<?php

require PROJECT_ROOT . "/html/admin-only.php";
include PROJECT_ROOT . "/html/header.php";
?>
  <title>Starcraft 2 Co-op Tournament Archives</title>
  <meta name="description" content="Starcraft 2 Co-op Tournament Archives. Browse past Co-op Tournament summaries and watch VoD's.">
  <meta name="keywords" content="Starcraft co-op tournament past archives">
  <link rel="canonical" href="https://starcraft2coop.com/community/tournament/archive">
  <style>
    .spoiler{
        background-color:black;
        color:black;
    }
    .spoiler:hover{
        background-color:unset;
        color:white;
    }
  </style>
  </head>
<body>
<?php include PROJECT_ROOT . "/html/menu.php"; ?>
<div id="content">
    <h1>Co-op Tournament Archives</h1>
    <p>Below are the archives of past Co-op Tournaments.
    <table>
        <thead>
            <tr>
                <th>Tournament</th>
                <th>Replay Pack</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>October 2019</td>
                <td>
                    <a href="/files/tournament/Tournament1.zip">Tournament 1 Replay Pack</a>
                </td>
                <td>Casted games are available <a href="https://www.youtube.com/playlist?list=PL-U97hco2Fu5cpltuXqmkaDk3RFM45oKI" rel="nofollow">here<a/>. <span class="spoiler">Winning team is Ancalagon + Ziemson.</span></td>
            </tr>
            <tr>
                <td>June 2021</td>
                <td>
                    <a href="/files/tournament/Tournament2.zip">Tournament 2 Replay Pack</a>
                </td>
                <td><span class="spoiler">Winning team is Ancalagon + SticksBender. Final game was conceded by the losing team without playing the remaining commanders but they played a showmatch to prove the mutator set was do-able with a good commander selection.</span></td>
            </tr>
        </tbody>
    </table>
<p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
</div>
<?php include PROJECT_ROOT . "/html/footer.php"; ?>
</body>
</html>
