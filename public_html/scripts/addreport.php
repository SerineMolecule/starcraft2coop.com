<?php
    if(isset($_POST['url']) && $_POST['url'] == ''){
        if(isset($_POST['comment']) && strlen($_POST['comment'])>0 && strlen($_POST['comment'])<= 101 && isset($_POST['errorpage']) && strlen($_POST['errorpage'])>0){
            
            include("recaptcha.php");
            if ($recaptchaResult) {
        	    include 'sqlconnection.php';
                $hash = hash ("md5" , $_POST['comment'].$_POST['errorpage']);
                $comment = mysqli_real_escape_string($con, $_POST['comment']);
                $page = mysqli_real_escape_string($con, $_POST['errorpage']);
                $timestamp = date('Y-m-d H:i:s');
                $sql = "INSERT INTO `reports` (`hash`, `page`, `comment`, `date`) VALUES ('$hash', '$page', '$comment', '$timestamp');";
                $result=mysqli_query($con,$sql);
                $con -> close();
                mail( 'aommaster@gmail.com', "New Report on " . $page . " page", $comment);
                echo("<p style='color:green'>Thank you for your report!<p>");
        	}
            else{
                echo("Error!");
            }
        }
        else{
            die();
        }
    }
    else{
        echo("<p style='color:green'>Thank you for your report!<p>");
    }
    
?>