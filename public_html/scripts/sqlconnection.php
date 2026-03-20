<?php
$con = new mysqli("localhost", "usernamehere", "passwordhere", "dbnamehere");
        if ($con->connect_error) {
            die("Connection failed: " . $con->connect_error);
        }
?>