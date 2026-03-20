<?php
    require_once "../recaptchalib.php";
	if(isset($_POST['url']) && $_POST['url'] == ''){
		$secret = "6LdeBSoUAAAAAOtwRkROVJ8MQ0GNGGSz7fUhxXV6";
		$reCaptcha = new ReCaptcha($secret);
		$response = $reCaptcha->verifyResponse($_SERVER["REMOTE_ADDR"],$_POST["g-recaptcha-response"]);
		if ($response != null && $response->success) {
			mail( 'aommaster@gmail.com', 'Co-op Tournament Submission',
			"Player 1: " . $_POST['p1name'] . " (Level: " . $_POST['p1lvl'] . ")\n" . 
			"Player 2: " . $_POST['p2name'] . " (Level: " . $_POST['p2lvl'] . ")\n" .
			"Server: " . $_POST['server'] . "\n" . 
			"Contact Email: " . $_POST['email']
			);
		}
	    echo ('<p><span style="color:green">Your message has been sent successfully!</span></p>');
	}
	
?>

<p>Registration Closing Date: 2019-09-02<br>Tournament Date and Time to be determined as per team availability.</p>
<p>If you would like to register for a chance at participating in this tournament, please fill out the form below for your co-op team. Each team is requested to only provide one submission. Teams selected to participate will be contacted and notified within 1 day of the closing date.</p>
<?php require_once "../recaptchalib.php"; ?>
<form action="main.php" method="post">
    <p>Your Battle.net ID: 
        <input type="text" name="p1name">
    </p>
    <p>Your Mastery/Ascension Level: 
        <input type="text" name="p1lvl">
    </p>
    <p>Your Partner's Battle.net ID: 
        <input type="text" name="p2name">
    </p>
    <p>Your Partner's Mastery/Ascension Level: 
        <input type="text" name="p2lvl">
    </p>
    <p>Your team's server: 
        <select name="server" id="server">
            <option value="Asia">Asia</option>
            <option value="EU">EU</option>
            <option value="NA">NA</option>
        </select>
    </p>
    <p>Your email address: <input name="email" type="text" size="30"></p>
    <p style="display:none">Leave this empty: <input type="text" name="url"></p>
    
    <div class="g-recaptcha" data-sitekey="6LdeBSoUAAAAAGTQDnmArYu-XdfpdvbAwNd6WtMb"></div>
    <p><input type="submit" id="submitbtn" value="Submit"></p>
</form>