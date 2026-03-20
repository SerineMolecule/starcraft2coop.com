<?php session_start();
    $showAds = true;
    //if cookie exists, refresh cookie
    if(isset($_COOKIE['sc2coop'])){
        $cookieData = json_decode($_COOKIE['sc2coop']);
        $username=$cookieData->username;
        $cookieID=$cookieData->cookieid;
        $cookieData = array(
                            'username' => $username,
                            'cookieid' => $cookieID,
                        );
        setcookie("sc2coop", json_encode($cookieData), time() + 604800, "/");
    }
    
    if(isset($_SESSION['premium'])){
        if($_SESSION['premium']==true){
            $showAds = false;
        }
    }
    else{
        if(isset($_COOKIE['sc2coop'])){
            $cookieData = json_decode($_COOKIE['sc2coop']);
            $username=$cookieData->username;
            $cookieID=$cookieData->cookieid;
            
            include("scripts/sqlconnection.php");
            $sql = "SELECT cookieid, premiumuntil 
                    FROM userlist
                    WHERE username='{$username}'";
            $result=mysqli_query($con,$sql);
            if (mysqli_num_rows($result)==0){
                return;
            }
            $data = mysqli_fetch_row($result);
            $correctCookieID = $data[0];
            $premiumUntil = $data[1];
            if($correctCookieID == $cookieID){
                $_SESSION["login"] = true;
                $_SESSION["username"] = $username;
                if(!is_null($premiumUntil)){
                    if (new DateTime() < new DateTime($premiumUntil)) {
                        $_SESSION["premium"] = true;
                        $showAds = false;
                        $cookieData = array(
                                        'username' => $username,
                                        'cookieid' => $cookieID,
                                    );
                        setcookie("sc2coop", json_encode($cookieData), time() + 604800, "/");
                    }
                    else{
                        $sql = "UPDATE userlist
                                SET premiumuntil=NULL
                                WHERE username = '$username'";
                        $result=mysqli_query($con,$sql);
                    }
                }
            }
        }
    }
    if (isset($accountCheck)){
        if(isset($_SESSION["login"])){
            if($_SESSION["login"]==true){
                $username = $_SESSION["username"];
                $sql = "SELECT premiumuntil
                        FROM userlist
                        WHERE username = '$username'";
                include("scripts/sqlconnection.php");
                $result=mysqli_query($con,$sql);
                $data = mysqli_fetch_row($result);
                $premiumUntil = $data[0];
                if(!is_null($premiumUntil)){
                    if (new DateTime() < new DateTime($premiumUntil)) {
                        $_SESSION["premium"] = true;
                        header('Location: premium');
                        return;
                    }
                    else{
                        $sql = "UPDATE userlist
                                SET premiumuntil=NULL
                                WHERE username = '$username'";
                        $result=mysqli_query($con,$sql);
                    }
                }
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="robots" content="index, follow">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="apple-touch-icon" href="/images/apple-touch-icon.png"/>
<link rel='shortcut icon' href='/images/favicon.ico' type='image/x-icon' />
<link rel="stylesheet"  media="all" type="text/css" href="/styles/mainstyle.css?v=1.28">
<link href='https://fonts.googleapis.com/css?family=Convergence' rel='stylesheet' type='text/css'>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://www.google.com/recaptcha/api.js?render=6LcWQfEUAAAAAKrJ7sgdGyROvE7wuzopdDeAV0qd"></script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-165288360-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165288360-1');
</script>
<script>
    grecaptcha.ready(function() {
        $(".captchaForm").each(function(){
            currentID = $(this).attr('id');
            if(currentID=="reportForm"){
                $(this).submit(function(event){
                    $("#submitbtn").attr("disabled", true);
                    grecaptcha.execute('6LcWQfEUAAAAAKrJ7sgdGyROvE7wuzopdDeAV0qd', { action: currentID }).then(function (token) {
                        $("#reportFormRecaptchaResponse").val(token);
                        var path = window.location.pathname;
                        var page = path.split("/").pop();
                        var x = document.forms["errorReport"]["comment"].value;
            		    var y = document.forms["errorReport"]["url"].value;
            			var z = $("#reportFormRecaptchaResponse").val();
            			$.ajax({  
                            type: 'POST',
                            url: '/scripts/addreport.php', 
                            data: { 
                                comment: x,
                                errorpage: page,
                                url:y, 
                                recaptcha_response:z},
                            success: function(data) {
                                $("#reportForm").hide();
                                $("#errorReport").append(data);
                                return false;
                            }
                        });
                        return false;
                        $("#submitbtn").attr("disabled", false);
                    });
                    
                })
            }
            else{
                $(this).submit(function(event){
                    var currentID = $(this).attr('id');
                    var currentForm = $(this);
                    event.preventDefault();
                    grecaptcha.execute('6LcWQfEUAAAAAKrJ7sgdGyROvE7wuzopdDeAV0qd', { action: currentID }).then(function (token) {
                        $("#" + currentID + "RecaptchaResponse").val(token);
                        currentForm.off("submit");
                        currentForm.submit();
                    });
                })
            }
            
        })
    },false)
</script>