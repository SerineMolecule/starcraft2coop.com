<?php
    session_start();
    if(!isset($_SESSION["known"])){
        echo("Error!");
        die();
    }
    if(isset($_GET['commander'])){
        if (!is_string($_GET['commander'])){
            echo("Error!");
            die();
        }
        $commander = $_GET['commander'];
        $json = file_get_contents('../data/commandersummaries.json');
        $allCommanders = json_decode($json, true);
        
        $match = array_find($allCommanders, function($value) use ($commander) {
            return $value['commander'] === $commander;
        });
        if ($match === null) {
            echo("Error!");
            die();
        }
        
        $fields = ['fullname', 'motto', 'stat01', 'stat02', 'stat03', 'stat04', 'stat05', 'stat06', 'stat07', 'stat08', 'stat09', 'summary'];
        $match = array_intersect_key($match, array_flip($fields));
        // also add all the fields with their index because that's what the frontend AJAX expects
        // TODO: remove this after updating the AJAX
        foreach ($fields as $index => $field) {
            $match[$index] = $match[$field];
        }
        
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($match);
    }
    else{
        echo("Error!");
    }
?>