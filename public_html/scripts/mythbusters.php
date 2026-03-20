<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Mythbusters List</title>
<style>
    h1{
        text-align:center;
    }
    .hidden{
        display:none;
    }
    body{
        background-image: linear-gradient(rgb(30, 37, 91), rgb(10, 13, 33));
        background-attachment: fixed;
        color:white;
        font-family: 'Convergence', sans-serif;
    }
    body a{
        color: yellow;
    }
    body a:visited{
        color:orange;
    }
</style>
</head>

<body>
<h1>Mythbusters List</h1>
<?php
    $apiKey = "AIzaSyDckVXfwYISrXQMzA5YcuHzBPkJ7A0qAAw";
    
    $json = file_get_contents('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL-U97hco2Fu6RZILcYqKk3FZRSK4htwIB&key=' . $apiKey);
    $obj = json_decode($json);
    $re = '/\d:\d\d (.*?)[\r\n]+/m';
    $counter = 0;
    foreach($obj->items as $item){
        $counter+=1;
        print("<a href='https://www.youtube.com/watch?v=" . $item->snippet->resourceId->videoId . "' rel='nofollow'>Episode " . $counter . "</a>");
        print("<br>");
        $desc = $item -> snippet -> description;
        preg_match_all($re, $desc, $matches, PREG_SET_ORDER, 0);
        for($i=1;$i<=5;$i++){
            print(substr($matches[$i][0], 5));
            print("<br>");
        }
        print("<br><br>");
    }
    
?>
</html>