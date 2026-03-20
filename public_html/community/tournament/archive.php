<?php
include("../../header.php");
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
<div id="header"><img src="/images/mainpageheader.png" alt="Starcraft II Co-op Logo">
</div>
<div id="menu"><?php include("../../menu.php"); ?></div>
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
                    <form action="downloads.php" name="download1form" id="download1Form" class="dynamic" method="post" enctype="multipart/form-data">
                        <input type="hidden" name="recaptcha_response" id="download1FormRecaptchaResponse">
                        <p><input type="submit" id="startDownload1" value="Tournament 1 Replay Pack"></p>
                    </form>
                    <script>
                        $("#download1Form").submit(function(e){
                            grecaptcha.execute('6LcWQfEUAAAAAKrJ7sgdGyROvE7wuzopdDeAV0qd', { action: "generateDownload" }).then(function (token) {
                                $("#download1FormRecaptchaResponse").val(token);
                                var captcha = $("#download1FormRecaptchaResponse").val();
                                $.ajax({
                                    type: "POST",
                                    url: "../../scripts/getdownload.php",
                                    data: {
                                        tool: 'tournament1',
                                        recaptcha_response: captcha,
                                    },
                                    success: function(data) {
                                       if(data.indexOf("Error") == -1){
                                           window.location.href = data;
                                       }
                                       
                                    }
                                });
                                e.preventDefault();
                                return false;
                            })
                            e.preventDefault();
                            return false;
                        })
                    </script>
                </td>
                <td>Casted games are available <a href="https://www.youtube.com/playlist?list=PL-U97hco2Fu5cpltuXqmkaDk3RFM45oKI" rel="nofollow">here<a/>. <span class="spoiler">Winning team is Ancalagon + Ziemson.</span></td>
            </tr>
            <tr>
                <td>June 2021</td>
                <td>
                    <form action="downloads.php" name="download2form" id="download2Form" class="dynamic" method="post" enctype="multipart/form-data">
                        <input type="hidden" name="recaptcha_response" id="download2FormRecaptchaResponse">
                        <p><input type="submit" id="startDownload2" value="Tournament 2 Replay Pack"></p>
                    </form>
                    <script>
                        $("#download2Form").submit(function(e){
                            grecaptcha.execute('6LcWQfEUAAAAAKrJ7sgdGyROvE7wuzopdDeAV0qd', { action: "generateDownload" }).then(function (token) {
                                $("#download2FormRecaptchaResponse").val(token);
                                var captcha = $("#download2FormRecaptchaResponse").val();
                                $.ajax({
                                    type: "POST",
                                    url: "../../scripts/getdownload.php",
                                    data: {
                                        tool: 'tournament2',
                                        recaptcha_response: captcha,
                                    },
                                    success: function(data) {
                                       if(data.indexOf("Error") == -1){
                                           window.location.href = data;
                                       }
                                       
                                    }
                                });
                                e.preventDefault();
                                return false;
                            })
                            e.preventDefault();
                            return false;
                        })
                    </script>
                </td>
                <td><span class="spoiler">Winning team is Ancalagon + SticksBender. Final game was conceded by the losing team without playing the remaining commanders but they played a showmatch to prove the mutator set was do-able with a good commander selection.</span></td>
            </tr>
        </tbody>
    </table>
<p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    <?php
    include("../../ad.php");
    ?>
</div>
<?php include("../../footer.php"); ?>
</body>
</html>
