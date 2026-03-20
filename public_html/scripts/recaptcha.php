<?php
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = 'secret here';
$recaptcha_response = $_POST['recaptcha_response'];
$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha);
$recaptchaResult = false;

if($recaptcha->success===true){
    if ($recaptcha->score >= 0.5) {
        $recaptchaResult = true;
    }
}
?>