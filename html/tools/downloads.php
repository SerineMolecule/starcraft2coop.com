<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Downloads</title>
  <meta name="description" content="A list of free tools and software for community use. Some programming experience will be required in order to utilize the code provided.">
  <meta name="keywords" content="Starcraft co-op downloads">
  <link rel="canonical" href="https://starcraft2coop.com/tools/downloads">
  <style>
        #output{
            font-family: "Courier New", Courier, monospace;
            background-color: steelblue;
            display: inline-block;
            padding: 10px;
        }
  </style>
  <?= startContent() ?>
    <h1>Downloads (Co-op Assistant and Replay Parsing Script)</h1>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#coopassistant">Co-op Overlay</a></p>
        <!--
        <p><a href="#coopassistant">Co-op Assistant</a></p>
        <p><a href="#download1">Download</a></p>
        <p><a href="#usage1">Usage Notes</a></p>
        <p><a href="#config1">Configuring the Program</a></p>-->
        <p><a href="#replaySummarizer">Co-op Replay Data Summarizer</a></p>
        <p><a href="#download2">Download</a></p>
        <p><a href="#usage2">Usage Notes</a></p>
        <p><a href="#updates2">Updates</a></p>
        <p><a href="#other2">Other Notes</a></p>
    </div>
    <h2 id="coopassistant">Co-op Overlay</h2>
    <p><a href="https://github.com/FluffyMaguro/SC2_Coop_overlay" rel="nofollow">Maguro's Coop Overlay</a> is recommended for viewing game statistics and automatically uploading replay files to the site.</p>
    <!--
    <h2 id="coopassistant">Co-op Assistant</h2>
    <p>This is a Windows application that provides two pieces of functionality which can be turned on/off as required:</p>
    <ul>
        <li>It detects the map you're playing on, and if you are playing on a map with a fast expand, will prompt you for a commander. If there is a fast expand available for the commander, it will create a small overlay, with an image from this site to remind you how to fast expand</li>
        <li>If you have an account on this site, your replays will be automatically uploaded to your account</li>
    </ul>
    <h2 id="download1">Download Links</h2>
    <form action="downloads.php" name="download1form" id="download1Form" class="dynamic" method="post" enctype="multipart/form-data">
        <input type="hidden" name="recaptcha_response" id="download1FormRecaptchaResponse">
        <p><input type="submit" id="startDownload1" value="Download Co-op Assistant"></p>
        <p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    </form>
    <h2 id="usage1">Usage Notes</h2>
    <ul>
        <li>You will to have the .NET Framework 4.7.2. You can get it from <a href="https://support.microsoft.com/en-ae/help/4054530/microsoft-net-framework-4-7-2-offline-installer-for-windows" rel="nofollow">here</a>.</li>
        <li>An internet connection will be required for the program to function.</li>
        <li>If there is an update to the program, you will be notified when you launch it. Updates should be few and far between, and usually only if a new commander gets added with a Fast Expand strategy.</li>
        <li>The program will need write access to its current running folder to save your settings. It is best to save this program in its own folder on your Desktop or other directory where write permissions exist.</li>
    </ul>
    <h2 id="config1">Configuring the Program</h2>
    <p><b>For Automatic Uploading of Replays to your starcraft2coop.com Account</b></p>
    <ol>
        <li>Generate a Secret Key from the Account Settings tab in the <a href="/account">Account Page</a>.
            <img src="/images/tools/generatekey.jpg" alt="Generating a New Secret Key">
        </li>
        <li>In the Settings section of the Co-op Assistant, upload the settings under the "Upload Configuration" section. Make sure you select the correct account folder. Its path should be similar to:<br>
            C:\Users\[Your PC Username]\Documents\Starcraft II\Accounts\[Numbers]
            <img src="/images/tools/uploadconfig.jpg" alt="Setting Upload Config">
        </li>
        <li>Press "Save" to save the Settings</li>
    </ol>
    <p><b>For Fast Expand Assistance</b></p>
    <ol>
        <li>In the Settings section of the Co-op Assistant, input your replay username (IGN) into the text box.
            <img src="/images/tools/ign.jpg" alt="Setting the IGN">
        </li>
        <li><b>If you are playing the game in English</b>
            <ul>
                <li>You are done</li>
            </ul>
        </li>
        <li><b>If you are playing the game in another language</b>
        <ul>
            <li>You will need to collect identifying player names from the Starcraft II Client as follows:
                <ol>
                    <li>In Starcraft II, navigate to a map in the Replays tab and click on it. Do not open the Replay.</li>
                    <li>Note the unique name that identifies the mission (not the player names, and not "Amon's Forces").
                        <img src="/images/tools/names.jpg" alt="Finding the Unique Name">
                    </li>
                    <li>In the Settings section of the Co-op Assistant, input that unique name into Language Localization section.
                        <img src="/images/tools/language.jpg" alt="Setting the Language Localization Settings">
                    </li>
                </ol>
            </li>
        </ul>
        </li>
    </ol>
    <p><b>For Twitch Extension Integration</b></p>
    <ol>
        <li>Install starcraft2coop.com's Twitch Extension from <a href="https://dashboard.twitch.tv/extensions/mpniwm1y35j26et6cc3qcmve1p2t5r-0.0.1" rel="nofollow">here</a>.</li>
        <li>Make sure you have a valid Username and Secret Key assigned in your starcraft2coop.com account.</li>
        <li>Link your Twitch account in the <a href="/account">Account Page</a> Settings tab.
            <img src="/images/tools/twitch.jpg" alt="Linking Your Twitch Account">
        </li>
        <li>You will be asked to Authorize the application. Once accepted, you will be redirected back to the Account Page.</li>
        <li>If you can see your Twitch username after "Authenticated Twitch User", the extension will now receive your end-of-game replay stats and display it.</li>
    </ol>
    <p>Note: If you would like to disable the Twitch Integration, click "Clear Token" to stop data being sent.</p>
    <p><b>For Mutator Identification</b></p>
    <ol>
        <li>Make sure you have a valid Username and Secret Key assigned in your starcraft2coop.com account.</li>
        <li>Download both, the OpenCV library and the Mutator Finder Plugin (links below).</li>
        <li>Place them in the same directory as the Co-op Assistant.</li>
        <li>If Twitch Integration is enabled, Mutator data will be sent when the Co-op Assistant is running.</li>
    </ol>
    <p>Note: If a mutator present does not get automatically identified, you may select the unidentified mutator and click "Add Mutator". This will take a screenshot of the mutator and save it in an "Extra Icons" folder to help with future identification.</p>
    <img src="/images/tools/mutatoridentification.jpg" alt="Mutator Identification">
    <h2 id="download1">Download Links</h2>
    <form action="downloads.php" name="download3form" id="download3Form" class="dynamic" method="post" enctype="multipart/form-data">
        <input type="hidden" name="recaptcha_response" id="download3FormRecaptchaResponse">
        <p><input type="submit" id="startDownload3" value="Download OpenCV Library">
    </form>
    <form action="downloads.php" name="download4form" id="download4Form" class="dynamic" method="post" enctype="multipart/form-data">
        <input type="hidden" name="recaptcha_response" id="download4FormRecaptchaResponse">
        <p><input type="submit" id="startDownload4" value="Download Mutator Finder"></p>
        <p id="captchaTOS">This site is protected by reCAPTCHA and the Google
    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
    <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
    </form>
    -->
    <h2 id="replaySummarizer">Co-op Replay Data Summarizer</h2>
    <p>This is a Python script which takes a Replays folder and generates a delimited text file summarizing the replay data for co-op games, which can be imported for further data analysis. Below is an example of the output:</p>
    <div id="output">
        <p>Date Played&#9;Map&#9;Commander&#9;Level&#9;Ally Commander&#9;Ally Level&#9;Game Type&#9;Result&#9;Game Length<br>
            2019-02-18&#9;Chain of Ascension&#9;Horner&#9;0&#9;Stukov&#9;34&#9;Standard&#9;Lose&#9;1552<br>
            2019-02-15&#9;Cradle of Death&#9;Karax&#9;0&#9;Abathur&#9;25&#9;Standard&#9;Win&#9;1359<br>
            2019-02-15&#9;Cradle of Death&#9;Vorazun&#9;0&#9;Zeratul&#9;0&#9;Standard&#9;Win&#9;1538<br>
            2019-02-27&#9;Temple of the Past&#9;Horner&#9;71&#9;Karax&#9;1000&#9;Mutators&#9;Win&#9;1591<br>
            2019-02-24&#9;The Vermillion Problem&#9;Dehaka&#9;57&#9;Raynor&#9;0&#9;Standard&#9;Lose&#9;1536<br>
            2019-02-17&#9;Void Launch&#9;Swann&#9;0&#9;Fenix&#9;73&#9;Standard&#9;Win&#9;1465</p>
    </div>
    <h2 id="download2">Download Links</h2>
    <p><a href="/files/CRDS.py" download>Download CRDS</a></p>
    <h2 id="usage2">Usage Notes</h2>
    <ul>
        <li>You will require Python 2, as S2Protocol has been written under that version of Python. You can download Python from <a href="https://www.python.org/downloads/release/python-2718/">here</a>. Make sure to select the appropriate installer for your system.</li>
        <li>You will need to have Python's S2Protocol installed in order for this script to work. You can get it from <a href="https://github.com/Blizzard/s2protocol" rel="nofollow">here</a>. If you have Pip, you may use "pip install s2protocol" to install S2Protocol.</li>
        <li>Make sure you specify your replay folder path and player name correctly. An incorrect player name may cause issues in determining which commander you are playing.</li>
        <li>On completion of the script, a file named "output.txt" will be created in the folder the script was run with the summarized data.</li>
        <li>Replay parsing should not take more than a second, as only the simple data is being read.</li>
        <li>You may modify the script to parse Ladder game information as well. However, this script is only provided as-is, and support is only available for Co-op games. Support for advanced parsing of Co-op game data will not be provided.</li>
    </ul>
    <h2 id="updates2">Updates</h2>
    <ul>
        <li>Whenever a new version of Starcraft gets released (major or minor patch), you may need to update S2Protocol. You may do so by copying any newly-added protocol files from the Github to the Versions folder of S2Protocol, or if you used Pip, you can use "pip install s2protocol --upgrade".</li>
        <li>Sometimes, S2Protocol may not be updated, which means you can use the last protocol version for the latest build. Simply copy and rename the last protocol file as the last build ID and the parser should work fine. This is because the Protocols are very rarely updated and most are copies of the older versions. The advantage to this is that it is possible that older Protocol versions can work with newer replay files.</li>
        <li>The above issue has occurred before and may occur for older replay files. If you notice that you are missing a protocol version, you may use the steps above to solve the problem.</li>
    </ul>
    <h2 id="other2">Other Notes</h2>
    <ul>
        <li>Map names will be affected by language localization. That is, the map names will be displayed in the language the game was played in when the replay was created.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
