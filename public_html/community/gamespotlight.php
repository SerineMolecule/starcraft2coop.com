<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Game Spotlight</title>
  <meta name="description" content="This is the submission page to get games that feature a high skill level casted.">
  <meta name="keywords" content="Starcraft co-op special games casts spotlight">
  <link rel="canonical" href="https://starcraft2coop.com/community/gamespotlight">
  <script>
        function validate() {
          var x = $('#gsForm [name=file]').val()
          if (x == "") {
              alert("File not selected");
              return false;
          }
          var x = $('#gsForm [name=desc]').val()
          if (x == "") {
              alert("Description is blank");
              return false;
          }
      }
  </script>
    <style>

    </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Game Spotlight</h1>
    <p>Game Spotlight is a special non-routine series of game casts from some of the best Co-op players in the community. The videos provide a glimpse of what Co-op looks like at the highest levels of play and show how top Co-op players handle difficult situations. Each game will be casted with added "Did You Know" facts scattered throughout the video. A full playlist is below:</p>
    <iframe width="480" height="270" src="https://www.youtube.com/embed/videoseries?list=PL-U97hco2Fu5f0jQ_vfclXCclVMgw6Ktn" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <!--
    <p>If you have a game that displays a high level of skill, or one that features a very unusual strategy, then you are welcome to submit the replay for casting. Before submitting a replay, please consider the following:</p>
    <ul>
        <li>Games should feature a good level of Co-op skill and understanding</li>
        <li>Games should feature mutators with a high level of total difficulty</li>
        <li>Games must ideally be played on Brutal difficulty. However, certain strategies may only work on easier levels, in which case, those difficulties may be submitted.</li>
        <li>Games do <i>NOT</i> need to show a victory, but the game must be fun to watch, and the victory should have been close</li>
        <li>Games can be solo runs as long as the ally's resources/expansions aren't being taken by the solo player</li>
        <li>Some examples of games that could get casted:
            <ul>
                <li>Games featuring a large number of mutators</li>
                <li>Games with a very difficult set of mutators that is not the current <a href="/resources/weeklymutations">Weekly Mutation</a>. Past mutations are fine.</li>
                <li>Games where players use a very inefficient/unfavourable strategy to complete the mission</li>
                <li>A game where victory was assured until the very last few moments</li>
            </ul>
        </li>
        <li>Replays should not be too old (more than 2-3 years old) to ensure the Co-op Observer UI works well.</li>
    </ul>
    <?php
    /* ini_set('file_uploads', 'On');
        if(isset($_POST['url']) && $_POST['url'] == ''){
            if(isset($_FILES["file"]) && isset($_POST['recaptcha_response'])){

                include("../scripts/recaptcha.php");
                if ($recaptchaResult) {

                    $target_dir = "../aommaster_admin/submissions/";
                    $md5 = md5_file($_FILES["file"]["tmp_name"]);
                    $description =  escapeshellarg($_POST['desc']);
                    $target_file = $target_dir . $md5 . ".sc2replay";
                    $uploadOk = 1;
                    $fileExtension = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
                    if ($fileExtension!=="sc2replay"){
                        echo ('<p><span style="color:red">File format incorrect.</span></p>');
                        $uploadOk = 0;
                    }
                    if (file_exists($target_file)) {
                        echo ('<p><span style="color:red">File already exists.</span></p>');
                        $uploadOk = 0;
                    }
                    if ($_FILES["file"]["size"] > 600000) {
                        echo ('<p><span style="color:red">File too large.</span></p>');
                        $uploadOk = 0;
                    }
                    if ($uploadOk !== 0) {
                        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                            echo ('<p><span style="color:green">Your replay has been submitted successfully!</span></p>');
                            exec("php ../scripts/addsubmission.php" . " '" .$md5."' ".$description."  'gs'> /dev/null &");
                        } else {
                            echo "Sorry, there was an error uploading your file.";
                        }
                    }
                }
            }
        } */
    ?>

    <form action="gamespotlight.php" name="submissionform" id="gsForm" class="captchaForm" onsubmit="return validate()" method="post" enctype="multipart/form-data">
        <p>Replay File: <input type="file" name="file" accept=".SC2Replay"></p>
        <p>Brief Description: <input name="desc" type="text" size="30"></p>
        <p style="display:none">Leave this empty: <input type="text" name="url"></p>
        <input type="hidden" name="recaptcha_response" id="gsFormRecaptchaResponse">
        <p><input type="submit" id="submitbtn" value="Submit"></p>
        <p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    </form>-->
    <p>Submissions are now closed. Thank you.</p>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
