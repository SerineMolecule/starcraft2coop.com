<?php
    include 'sqlconnection.php';
    
    $sql = "SELECT commander FROM `commandersummaries`";
    $result=mysqli_query($con,$sql);
    
    $returnArray[0] = "";
    while($row = mysqli_fetch_array($result)) {
        $returnArray[0] .='<img src="/images/commanderportraits/' . $row['commander'] . 'portrait.png" alt="' . $row['commander'] . '">';
    }
    $returnArray[0] .= '<p id="unselectContainer"><button type="button" id="select">Select All</button><button type="button" id="unselect">Unselect All</button></p>';
    $sql = "SELECT episode, link, GROUP_CONCAT(DISTINCT rockslapper) as commanders FROM `rockslappingchampions`
            GROUP BY episode
            ORDER by episode DESC";
    $result=mysqli_query($con,$sql);
    
    $returnArray[1] = "";
    while($row = mysqli_fetch_array($result)) {
        $returnArray[1].='<a href="https://www.youtube.com/embed/' . $row['link'] . '" class="' . str_replace(",", " ", strtolower($row['commanders'])) . '">';
        $returnArray[1].='<img src="https://img.youtube.com/vi/' . $row['link'] . '/mqdefault.jpg" class="rcThumb" alt="Youtube ID:' . $row['link'] . '">';
        $returnArray[1].="</a>";
        
    }
    $con->close();
    echo (json_encode($returnArray));
?>