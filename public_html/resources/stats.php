<?php
include("../header.php");
?>
  <title>Starcraft 2 Co-op - Statistics</title>
  <meta name="description" content="Various statistics related to starcraft2coop.com and Starcraft II content, such as mutator frequency counts in Weekly Mutations.">
  <meta name="keywords" content="Starcraft co-op stats">
  <link rel="canonical" href="https://starcraft2coop.com/resources/stats">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.bundle.min.js"></script>
  <script src="/scripts/chartcolors.js"></script>
  <style>
    .centered{
        text-align:center;
    }
    .subheading{
        font-size:1.5em;
        margin:10px;
        vertical-align:middle;
        display:inline-block;
    }
    .infoIcon img{
        width:20px;
        height:20px;
        vertical-align:middle;
    }
    .tooltip{
        display:none;
    }
    #tooltip{
        position:absolute;
        background-color:khaki;
        color:black;
        font-size:0.8em;
        display:none;
        z-index:1;
        padding:5px;
        border-radius:5px;
    }
  </style>
  </head>
<body>
<div id="header"><img src="/images/mainpageheader.png" alt="Starcraft II Co-op Logo">
</div>
<div id="menu"><?php include("../menu.php"); ?></div>
<div id="content">
    <h1>Site-Specific and Co-op Related Statistics</h1>
    <?php 
        include '../scripts/sqlconnection.php';
        
        $sql = "SELECT count(*)  
                FROM mutators";
        $result=mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result);
        $mutatorCount = $row[0];
        
        $sql = "SELECT count(*)  
                FROM mutatorinteractions";
        $result=mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result);
        $mutatorInteractionCount = $row[0];
        
        $sql = "SELECT count(*)  
                FROM mutatorcommandertips";
        $result=mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result);
        $mutatorCommanderTips = $row[0];
        
        $sql = "SELECT count(*)  
                FROM patchdata";
        $result=mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result);
        $patchCount = $row[0];
        
        $sql = "SELECT count(*)  
                FROM weeklymutations";
        $result=mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result);
        $weeklyMutationCount = $row[0];
        
        $sql = "SELECT count(*)  
                FROM weeklymutations
                WHERE mut01=8";
        $result=mysqli_query($con,$sql);
        $row = mysqli_fetch_array($result);
        $WOMCount = $row[0];
        
        $sql = "SELECT mutatorid, mutatorname, mutatordescription, abomination 
                FROM mutators
                ORDER BY mutatorid ASC";
        $result=mysqli_query($con,$sql);
        $mutators = [];
        
        while($row = mysqli_fetch_array($result)) {
            $mutators[] = $row;
        }
        
        $sql = "SELECT map, count(map) FROM `weeklymutations`
                group by map
                order by count(map) DESC
                Limit 5";
        $result=mysqli_query($con,$sql);
        $topMaps = [];
        
        while($row = mysqli_fetch_array($result)) {
            $topMaps[] = $row;
        }
        
        $sql = "SELECT map, count(map) FROM (select * from weeklymutations group by mutation) as T
                group by map
                order by count(map) DESC
                Limit 5";
        $result=mysqli_query($con,$sql);
        $topMaps1 = [];
        
        while($row = mysqli_fetch_array($result)) {
            $topMaps1[] = $row;
        }
        
        $sql = "select id, count(*) From (select mut01 as id from weeklymutations
                union all
                select mut02 as id from weeklymutations
                union all
                select mut03 as id from weeklymutations) weeklymutations
                where id<>0
                group by id
                order by count(*) desc
                Limit 5";
        $result=mysqli_query($con,$sql);
        $topMutators = [];
        
        while($row = mysqli_fetch_array($result)) {
            $topMutators[] = [$mutators[$row[0]-1]['mutatorname'], $mutators[$row[0]-1]['mutatordescription'], $row[1]];
        }
        
        $sql = "select id, count(*) From (select mut01 as id from weeklymutations
                union all
                select mut02 as id from weeklymutations
                union all
                select mut03 as id from weeklymutations) weeklymutations
                where id<>0
                group by id
                order by count(*) asc
                Limit 5";
        $result=mysqli_query($con,$sql);
        $bottomMutators = [];
        
        while($row = mysqli_fetch_array($result)) {
            $bottomMutators[] = [$mutators[$row[0]-1]['mutatorname'], $mutators[$row[0]-1]['mutatordescription'], $row[1]];
        }
        
        $sql = "select id, count(*) From (select mut01 as id from (select * from weeklymutations group by mutation) as T
                union all
                select mut02 as id from (select * from weeklymutations group by mutation) as T
                union all
                select mut03 as id from (select * from weeklymutations group by mutation) as T) as T
                where id<>0
                group by id
                order by count(*) desc
                Limit 5";
        $result=mysqli_query($con,$sql);
        $topMutators1 = [];
        
        while($row = mysqli_fetch_array($result)) {
            $topMutators1[] = [$mutators[$row[0]-1]['mutatorname'], $mutators[$row[0]-1]['mutatordescription'], $row[1]];
        }
        
        $sql = "select id, count(*) From (select mut01 as id from (select * from weeklymutations group by mutation) as T
                union all
                select mut02 as id from (select * from weeklymutations group by mutation) as T
                union all
                select mut03 as id from (select * from weeklymutations group by mutation) as T) as T
                where id<>0
                group by id
                order by count(*) asc
                Limit 5";
        $result=mysqli_query($con,$sql);
        $bottomMutators1 = [];
        
        while($row = mysqli_fetch_array($result)) {
            $bottomMutators1[] = [$mutators[$row[0]-1]['mutatorname'], $mutators[$row[0]-1]['mutatordescription'], $row[1]];
        }
        
        $sql = "SELECT submitter, SUM(score), count(distinct episode) as Appearances FROM `rockslappingchampions`
                Group BY submitter
                Order by SUM(score) DESC
                Limit 5";
        $result=mysqli_query($con,$sql);
        $topSubmitter = [];
        
        while($row = mysqli_fetch_array($result)) {
            $topSubmitter[] = $row;
        }
        
        $sql = "SELECT rockslapper, SUM(score), count(distinct episode) as Appearances FROM `rockslappingchampions`
                Group BY rockslapper
                Order by SUM(score) DESC
                Limit 5";
        $result=mysqli_query($con,$sql);
        $topRC = [];
        
        while($row = mysqli_fetch_array($result)) {
            $topRC[] = $row;
        }
        
        $sql = "SELECT rockslapper, SUM(score), count(distinct episode) as Appearances FROM `rockslappingchampions`
                Group BY rockslapper
                Order by SUM(score) ASC
                Limit 5";
        $result=mysqli_query($con,$sql);
        $bottomRC = [];
        
        while($row = mysqli_fetch_array($result)) {
            $bottomRC[] = $row;
        }
        $con->close();

    ?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#general">General</a></p>
        <p><a href="#site">Site-Specific</a></p>
        <p><a href="#weeklyMutations">Weekly Mutations</a></p>
        <p><a href="#rc">Rockslapping Champions</a></p>
        <p></p>
    </div>
    <div id="tooltip">tooltip</div>
    <a id="general"></a><h2>General</h2>
    <p>These statistics are directly related to the Co-op game mode and do not include any community-made content. Please note that as new content gets added, these statistics may not be accurate until the entire site has been updated to reflect the new patch. When this happens, a post will be made on the front page of the site, notifying readers of this.</p>
    <p>Total Commanders: <?php echo (count(scandir("../commanders")) - 3); ?></p>
    <p>Total Missions: <?php echo (count(scandir("../missions")) - 3); ?></p>
    <p>Total Mutators: <?php echo ($mutatorCount); ?></p>
    <?php
    include("../ad1.php");
    ?>
    <a id="site"></a><h2>Site-Specific</h2>
    <p>These statistics provide you with a bit of a behind-the-scenes look at starcraft2coop.com. There is a lot of data that is stored in the site's databases that allow users to pull useful information when they wish, such as mutator interactions. A lot of this data is automatically pulled and presented to readers in an easy-to-find manner, such as on the <a href="/resources/weeklymutations">Weekly Mutations</a> page.</p>
    <p>Total Mutator Interactions: <?php echo ($mutatorInteractionCount); ?></p>
    <p>Commander Tips for Mutators: <?php echo ($mutatorCommanderTips); ?></p>
    <p>Patches Recognized by Analyzer: <?php echo ($patchCount); ?></p>
    <?php
    include("../ad.php");
    ?>
    <a id="weeklyMutations"></a><h2>Weekly Mutations</h2>
    <p>These are some interesting statistics from all <a href="/resources/weeklymutations">Weekly Mutations</a> that have been released to date including the current Weekly Mutation. Statistics include the most and least frequent mutators. Occasionally, Weekly Mutations are repeated, which can offset counts. Hence, statistics will be analyzed with and without these repeats.</p>
    <p>Total Weekly Mutations: <?php echo ($weeklyMutationCount); ?></p>
    <p>Wheel of Misfortune Count: <?php echo ($WOMCount); ?></p>
    <p>Most Frequent Missions: </p>
    <table>
        <thead>
            <tr>
                <th colspan=2>With Repeats</th>
                <th colspan=2>Without Repeats</th>
            </tr>
            <tr>
                <th>Map</th>
                <th>Appearances</th>
                <th>Map</th>
                <th>Appearances</th>
            </tr>
        </thead>
        <tbody>
            <?
            for ($i=0;$i<5; $i++){
                echo("<tr>");
                echo("<td>{$topMaps[$i][0]}</td>");
                echo("<td class=centered>{$topMaps[$i][1]}</td>");
                echo("<td>{$topMaps1[$i][0]}</td>");
                echo("<td class=centered>{$topMaps1[$i][1]}</td>");
                echo("<tr>\n");
            }
            ?>
        </tbody>
    </table>
    <p>Most Frequent Mutators:</p>
    <table>
        <thead>
            <tr>
                <th colspan=3>With Repeats</th>
                <th colspan=3>Without Repeats</th>
            </tr>
            <tr>
                <th>Mutator</th>
                <th>Icon</th>
                <th>Appearances</th>
                <th>Mutator</th>
                <th>Icon</th>
                <th>Appearances</th>
            </tr>
        </thead>
        <tbody>
            <?
            for ($i=0;$i<5; $i++){
                echo("<tr>");
                $element = $topMutators[$i];
                $filename=str_replace(' ', '', strtolower($element[0]));
                echo("<td>$element[0]</td>");
                echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $element[0] . ":" . $element[1] ."\"></td>";
                echo("<td class=centered>$element[2]</td>");
                $element = $topMutators1[$i];
                $filename=str_replace(' ', '', strtolower($element[0]));
                echo("<td>$element[0]</td>");
                echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $element[0] . ":" . $element[1] ."\"></td>";
                echo("<td class=centered>$element[2]</td>");
                echo("<tr>\n");
            }?>
        </tbody>
    </table>
    
    <p>Most Infrequent Mutators:</p>
    <table>
        <thead>
            <tr>
                <th colspan=3>With Repeats</th>
                <th colspan=3>Without Repeats</th>
            </tr>
            <tr>
                <th>Mutator</th>
                <th>Icon</th>
                <th>Appearances</th>
                <th>Mutator</th>
                <th>Icon</th>
                <th>Appearances</th>
            </tr>
        </thead>
        <tbody>
            <?
            for ($i=0;$i<5; $i++){
                echo("<tr>");
                $element = $bottomMutators[$i];
                $filename=str_replace(' ', '', strtolower($element[0]));
                echo("<td>$element[0]</td>");
                echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $element[0] . ":" . $element[1] ."\"></td>";
                echo("<td class=centered>$element[2]</td>");
                $element = $bottomMutators1[$i];
                $filename=str_replace(' ', '', strtolower($element[0]));
                echo("<td>$element[0]</td>");
                echo "<td><img class='mutatorIcon' src='/images/mutators/" . $filename . ".png' alt=\"" . $element[0] . ":" . $element[1] ."\"></td>";
                echo("<td class=centered>$element[2]</td>");
                echo("<tr>\n");
            }?>
        </tbody>
    </table>
    <?php
    include("../ad2.php");
    ?>
    <a id="community"></a><h2>Community Stats</h2>
    <?php
        $data = unserialize(file_get_contents("../scripts/replaycache.txt"));
        list($comRefreshTime,
             $comReplayCount,
             $comServerGames, 
             $comCommanderGames,
             $comMissionGames,
             $comDifficultyGames,
             $comCompGames,
             $comCommanderWinRate,
             $comMissionWinRate,
             $comCompWinRate,
             $comMissionTimes) = $data;
    ?>
    <p>Note: Data refreshes once every 24 hours<br>
        Current data refreshed on: <?php echo($comRefreshTime);?><br>
        Total replays counted: <?php echo($comReplayCount);?></p>
    <div class="infoIcon">
        <p class="subheading">Total Games Counted Across Servers</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the number of games played per server.</span>
    </div>
    <?php
        $comServerGamesLabelsText = [];
        foreach($comServerGames as $server=>$count){
            $comServerGamesLabelsText[] = $server;
            $comServerGamesPoints[] = intval($count);
            $comServerColors[] = "color" . $server;
            $comDarkServerColors[] = "color" . $server . "Dark";
        }
        $comServerGamesLabelsText = json_encode(array_values($comServerGamesLabelsText));
        $comServerGamesPoints = json_encode(array_values($comServerGamesPoints));
        $comServerColors = str_replace('"', "", json_encode($comServerColors));
        $comDarkServerColors = str_replace('"', "", json_encode($comDarkServerColors));
    ?>
    <div class="chart">
        <canvas id="communityServerGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityServerGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: <?php echo($comServerGamesLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comServerGamesPoints); ?>,
                    backgroundColor:<?php echo($comServerColors); ?>,
                    hoverBackgroundColor:<?php echo($comDarkServerColors); ?>,
                }]
            },
            options:{
                responsive:false,
                legend: {
                    labels: {
                        fontColor: "white",
                        filter: function(legendItem, data) {
                            if(data.datasets[0].data[legendItem.index]==0){
                                return false
                            }
                            else{
                                return true;
                            }
                        }
                    },
                    position: "right",
                    align: "middle"
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return(data.labels[tooltipItem[0].index])
                        },
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return currentValue + " games played (" + percentage + "%)";
                        }
                    }
                } 
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Total Games Counted Across Commanders</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the number of games played per commander sorted by decreasing popularity.</span>
    </div>
    <?php
        $comCommanderGamesLabelsText = [];
        foreach($comCommanderGames as $commander=>$count){
            $comCommanderGamesLabelsText[] = $commander;
            $comCommanderGamesPoints[] = intval($count);
            $comCommanderColors[] = strtolower($commander) . "Color";
            $comDarkCommanderColors[] = "dark" . $commander . "Color";
        }
        $comCommanderGamesLabelsText = json_encode(array_values($comCommanderGamesLabelsText));
        $comCommanderGamesPoints = json_encode(array_values($comCommanderGamesPoints));
        $comCommanderColors = str_replace('"', "", json_encode($comCommanderColors));
        $comDarkCommanderColors = str_replace('"', "", json_encode($comDarkCommanderColors));
    ?>
    <div class="chart">
        <canvas id="communityCommanderGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityCommanderGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: <?php echo($comCommanderGamesLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comCommanderGamesPoints); ?>,
                    backgroundColor:<?php echo($comCommanderColors); ?>,
                    hoverBackgroundColor:<?php echo($comDarkCommanderColors); ?>,
                }]
            },
            options:{
                responsive:false,
                legend: {
                    display:false,
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return(data.labels[tooltipItem[0].index])
                        },
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return currentValue + " games played (" + percentage + "%)";
                        }
                    }
                } 
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Total Games Counted Across Missions</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the number of games played per mission sorted by decreasing popoularity.</span>
    </div>
    <?php
        $comMissionGamesLabelsText = [];
        $counter = 0;
        foreach($comMissionGames as $mission=>$count){
            $comMissionGamesLabelsText[] = $mission;
            $comMissionGamesPoints[] = intval($count);
            $comMissionColors[] = "missionColors[$counter]";
            $comDarkMissionColors[] = "darkMissionColors[$counter]";
            $counter+=1;
        }
        $comMissionGamesLabelsText = json_encode(array_values($comMissionGamesLabelsText));
        $comMissionGamesPoints = json_encode(array_values($comMissionGamesPoints));
        $comMissionColors = str_replace('"', "", json_encode($comMissionColors));
        $comDarkMissionColors = str_replace('"', "", json_encode($comDarkMissionColors));
    ?>
    <div class="chart">
        <canvas id="communityMissionGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityMissionGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: <?php echo($comMissionGamesLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comMissionGamesPoints); ?>,
                    backgroundColor:<?php echo($comMissionColors); ?>,
                    hoverBackgroundColor:<?php echo($comDarkMissionColors); ?>,
                }]
            },
            options:{
                responsive:false,
                legend: {
                    display:false,
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return(data.labels[tooltipItem[0].index])
                        },
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return currentValue + " games played (" + percentage + "%)";
                        }
                    }
                } 
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Total Games Counted Across Difficulties</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the number of games played per difficulty.</span>
    </div>
    <?php
        $comDifficultyGamesLabelsText = [];
        $total=0;
        foreach($comDifficultyGames as $difficulty=>$count){
            $comDifficultyGamesPoints[] = intval($count);
            $total +=intval($count);
            $comDifficultyColors[] = strtolower($difficulty) . "Color";
            $comDarkDifficultyColors[] = "dark". $difficulty . "Color";
        }
        foreach($comDifficultyGames as $difficulty=>$count){
            $comDifficultyGamesLabelsText[] = $difficulty . " (" . round($count*100/$total,2) . "%)";
        }
        $comDifficultyGamesLabelsText = json_encode(array_values($comDifficultyGamesLabelsText));
        $comDifficultyGamesPoints = json_encode(array_values($comDifficultyGamesPoints));
        $comDifficultyColors = str_replace('"', "", json_encode($comDifficultyColors));
        $comDarkDifficultyColors = str_replace('"', "", json_encode($comDarkDifficultyColors));
    ?>
    <div class="chart">
        <canvas id="communityDifficultyGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityDifficultyGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: <?php echo($comDifficultyGamesLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comDifficultyGamesPoints); ?>,
                    backgroundColor:<?php echo($comDifficultyColors); ?>,
                    hoverBackgroundColor:<?php echo($comDarkDifficultyColors); ?>,
                }]
            },
            options:{
                responsive:false,
                legend: {
                    position: "right",
                    align: "middle",
                    labels:{
                        fontColor: "white",
                    },
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return(data.labels[tooltipItem[0].index])
                        },
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return currentValue + " games played (" + percentage + "%)";
                        }
                    }
                } 
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Total Games Counted Across Enemy Compositions</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the number of games played per enemy composition faced where the composition could be identified.</span>
    </div>
    <?php
        $comCompGamesLabelsText = [];
        foreach($comCompGames as $comp=>$count){
            if(strpos($comp, 'Compositions') === false){
                $comCompGamesPoints[] = intval($count);
            }
            else{
                $comCompGamesPoints[] = 0;
            }
            $comCompGamesLabelsText[] = $comp;
            
        }
        $comCompGamesLabelsText = json_encode(array_values($comCompGamesLabelsText));
        $comCompGamesPoints = json_encode(array_values($comCompGamesPoints));
    ?>
    <div class="chart">
        <canvas id="communityCompGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityCompGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: <?php echo($comCompGamesLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comCompGamesPoints); ?>,
                    backgroundColor:compColors,
                    hoverBackgroundColor:darkCompColors,
                }]
            },
            options:{
                legend: {
                    position: "right",
                    align: "middle",
                    labels:{
                        fontColor: "white",
                        filter: function(legendItem, chartData) {
                            if(legendItem.text.includes("Compositions")){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                    },
                    onClick: function(e, legendItem) {
                        var index = legendItem.datasetIndex;
                        var ci = this.chart;;
                        var meta = ci.getDatasetMeta(0)
                        if(legendItem.text.includes("Protoss")){
                            for(var i=0;i<9;i++){
                                meta.data[i].hidden = !meta.data[i].hidden;
                            }
                        }
                        else if(legendItem.text.includes("Terran")){
                            for(var i=9;i<16;i++){
                                meta.data[i].hidden = !meta.data[i].hidden;
                            }
                        }
                        else{
                            for(var i=16;i<22;i++){
                                meta.data[i].hidden = !meta.data[i].hidden;
                            }
                            
                        }
                        ci.update();
                    }
                },
                responsive:false,
                tooltips: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            return(data.labels[tooltipItem[0].index])
                        },
                        label: function(tooltipItem, data) {
                            var dataset = data.datasets[tooltipItem.datasetIndex];
                            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                                return previousValue + currentValue;
                            });
                            var currentValue = dataset.data[tooltipItem.index];
                            var percentage = Math.floor(((currentValue/total) * 100)+0.5);
                            return currentValue + " games played (" + percentage + "%)";
                        }
                    }
                } 
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Commander Win Rates</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the win rate per commander sorted by decreasing win rate.</span>
    </div>
    <?php
        $comCommanderWinRateLabelsText = [];
        $comCommanderWinPoints = [];
        $comCommanderLossPoints = [];
        $tempArray = [];
        foreach($comCommanderWinRate as $commander=>$data){
            $tempArray[] = [$commander,intval($data[0]),intval($data[1]),($data[0]/($data[0] + $data[1]))];
        }
        usort($tempArray, function($a, $b) {
            return $b[3] <=> $a[3];
        });
        foreach($tempArray as $data){
            $comCommanderWinRateLabelsText[] = $data[0];
            $comCommanderWinPoints[] = $data[1];
            $comCommanderLossPoints[] = $data[2];
        }
        $comCommanderWinRateLabelsText = json_encode(array_values($comCommanderWinRateLabelsText));
        $comCommanderWinPoints = json_encode(array_values($comCommanderWinPoints));
        $comCommanderLossPoints = json_encode(array_values($comCommanderLossPoints));
    ?>
    <div class="chart">
        <canvas id="communityCommanderWinRateChart" width="600" height="400"></canvas>
    </div>
    <script>
        var ctx = $('#communityCommanderWinRateChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: <?php echo($comCommanderWinRateLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comCommanderWinPoints); ?>,
                    backgroundColor: winColor,
                    hoverBackgroundColor: darkWinColor,
                },
                {
                    data: <?php echo($comCommanderLossPoints); ?>,
                    backgroundColor: lossColor,
                    hoverBackgroundColor: darkLossColor,
                }]
            },
            options:{
                responsive:false,
                legend:{
                    display:false,
                },
                scales:{
                    xAxes:[{
                        ticks:{
                            fontColor: "white"
                        },
                        stacked:true,
                    }],
                    yAxes:[{
                        ticks:{
                            beginAtZero: true,
                            fontColor: "white"
                        },
                        stacked:true,
                    }]
                },
                tooltips: {
                    custom: function(tooltip) {
                        if (!tooltip) return;
                        tooltip.displayColors = false;
                    },
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if(tooltipItem.datasetIndex==0){
                                var currentWins = tooltipItem.yLabel;
                                var totalGames = currentWins + data.datasets[1].data[tooltipItem.index];
                                var percentage = Math.floor(((currentWins/totalGames) * 100)+0.5);
                                return(currentWins + " wins (" + percentage + "% winrate)");
                            }
                            else{
                                var currentLosses = tooltipItem.yLabel;
                                var totalGames = currentLosses + data.datasets[0].data[tooltipItem.index];
                                var wins = totalGames - currentLosses;
                                var percentage = Math.floor(((wins/totalGames) * 100)+0.5);
                                return(currentLosses + " losses (" + percentage + "% winrate)");
                            }
                        }
                    }
                },
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Mission Win Rates</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the win rate per mission sorted by decreasing win rate.</span>
    </div>
    <?php
        $comMissionWinRateLabelsText = [];
        $comMissionWinPoints = [];
        $comMissionLossPoints = [];
        $tempArray = [];
        foreach($comMissionWinRate as $mission=>$data){
            $tempArray[] = [$mission,intval($data[0]),intval($data[1]),($data[0]/($data[0] + $data[1]))];
        }
        usort($tempArray, function($a, $b) {
            return $b[3] <=> $a[3];
        });
        foreach($tempArray as $data){
            $comMissionWinRateLabelsText[] = $data[0];
            $comMissionWinPoints[] = $data[1];
            $comMissionLossPoints[] = $data[2];
        }
        $comMissionWinRateLabelsText = json_encode(array_values($comMissionWinRateLabelsText));
        $comMissionWinPoints = json_encode(array_values($comMissionWinPoints));
        $comMissionLossPoints = json_encode(array_values($comMissionLossPoints));
    ?>
    <div class="chart">
        <canvas id="communityMissionWinRateChart" width="600" height="400"></canvas>
    </div>
    <script>
        var ctx = $('#communityMissionWinRateChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: <?php echo($comMissionWinRateLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comMissionWinPoints); ?>,
                    backgroundColor: winColor,
                    hoverBackgroundColor: darkWinColor,
                },
                {
                    data: <?php echo($comMissionLossPoints); ?>,
                    backgroundColor: lossColor,
                    hoverBackgroundColor: darkLossColor,
                }]
            },
            options:{
                responsive:false,
                legend:{
                    display:false,
                },
                scales:{
                    xAxes:[{
                        ticks:{
                            fontColor: "white"
                        },
                        stacked:true,
                    }],
                    yAxes:[{
                        ticks:{
                            beginAtZero: true,
                            fontColor: "white"
                        },
                        stacked:true,
                    }]
                },
                tooltips: {
                    custom: function(tooltip) {
                        if (!tooltip) return;
                        tooltip.displayColors = false;
                    },
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if(tooltipItem.datasetIndex==0){
                                var currentWins = tooltipItem.yLabel;
                                var totalGames = currentWins + data.datasets[1].data[tooltipItem.index];
                                var percentage = Math.floor(((currentWins/totalGames) * 100)+0.5);
                                return(currentWins + " wins (" + percentage + "% winrate)");
                            }
                            else{
                                var currentLosses = tooltipItem.yLabel;
                                var totalGames = currentLosses + data.datasets[0].data[tooltipItem.index];
                                var wins = totalGames - currentLosses;
                                var percentage = Math.floor(((wins/totalGames) * 100)+0.5);
                                return(currentLosses + " losses (" + percentage + "% winrate)");
                            }
                        }
                    }
                },
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Enemy Composition Win Rates</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the win rate per enemy composition where the composition could be identified sorted by decreasing win rate.</span>
    </div>
    <?php
        $comCompWinRateLabelsText = [];
        $comCompWinPoints = [];
        $comCompLossPoints = [];
        $tempArray = [];
        foreach($comCompWinRate as $comp=>$data){
            $tempArray[] = [$comp,intval($data[0]),intval($data[1]),($data[0]/($data[0] + $data[1]))];
        }
        usort($tempArray, function($a, $b) {
            return $b[3] <=> $a[3];
        });
        foreach($tempArray as $data){
            $comCompWinRateLabelsText[] = $data[0];
            $comCompWinPoints[] = $data[1];
            $comCompLossPoints[] = $data[2];
        }
        $comCompWinRateLabelsText = json_encode(array_values($comCompWinRateLabelsText));
        $comCompWinPoints = json_encode(array_values($comCompWinPoints));
        $comCompLossPoints = json_encode(array_values($comCompLossPoints));
    ?>
    <div class="chart">
        <canvas id="communityCompWinRateChart" width="600" height="400"></canvas>
    </div>
    <script>
        var ctx = $('#communityCompWinRateChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: <?php echo($comCompWinRateLabelsText); ?>,
                datasets: [{
                    data: <?php echo($comCompWinPoints); ?>,
                    backgroundColor: winColor,
                    hoverBackgroundColor: darkWinColor,
                },
                {
                    data: <?php echo($comCompLossPoints); ?>,
                    backgroundColor: lossColor,
                    hoverBackgroundColor: darkLossColor,
                }]
            },
            options:{
                responsive:false,
                legend:{
                    display:false,
                },
                scales:{
                    xAxes:[{
                        ticks:{
                            fontColor: "white"
                        },
                        stacked:true,
                    }],
                    yAxes:[{
                        ticks:{
                            beginAtZero: true,
                            fontColor: "white"
                        },
                        stacked:true,
                    }]
                },
                tooltips: {
                    custom: function(tooltip) {
                        if (!tooltip) return;
                        tooltip.displayColors = false;
                    },
                    callbacks: {
                        label: function(tooltipItem, data) {
                            if(tooltipItem.datasetIndex==0){
                                var currentWins = tooltipItem.yLabel;
                                var totalGames = currentWins + data.datasets[1].data[tooltipItem.index];
                                var percentage = Math.floor(((currentWins/totalGames) * 100)+0.5);
                                return(currentWins + " wins (" + percentage + "% winrate)");
                            }
                            else{
                                var currentLosses = tooltipItem.yLabel;
                                var totalGames = currentLosses + data.datasets[0].data[tooltipItem.index];
                                var wins = totalGames - currentLosses;
                                var percentage = Math.floor(((wins/totalGames) * 100)+0.5);
                                return(currentLosses + " losses (" + percentage + "% winrate)");
                            }
                        }
                    }
                },
            }
        });
    </script>
    <div class="infoIcon">
        <p class="subheading">Fastest Clear Times (Brutal)</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is fastest time to win a mission that can be rushed to completion on Brutal difficulty.</span>
    </div>
    <table>
        <thead>
            <tr>
                <th>Mission Name</th>
                <th>Clear Time</th>
            </tr>
        </thead>
        <tbody>
            <?php
                foreach($comMissionTimes as $mission=>$time){
                    $printTime = gmdate("i:s", $time);
                    echo("<tr>");
                    echo("<td>$mission</td><td>$printTime</td>");
                    echo("</tr>");
                }
            ?>
        </tbody>
    </table>
    <?php
    include("../ad.php");
    ?>
    <a id="rc"></a><h2>Rockslapping Champions</h2>
    <p>The flagship series of the site, these statistics gather information for some commonly-asked questions about the series. This also serves as a page that frequent submitters can use to try and one-up each other!</p>
    <p>Note: Score is calculated as +1.0 for a full episode feature and +0.5 for a compilation feature. If a submitter gets multiple features in a single compilation, they will receive multiple +0.5 points to reflect each of their submissions.</p>
    <p>For more information on Rockslapping Champions and links to the videos, please visit <a href="/community/rockslappingchampions">this page</a>.</p>
    <p>Top Contributors:</p>
    <table>
        <thead>
            <tr>
                <th>Player</th>
                <th>Score</th>
                <th>Total Episodes</th>
            </tr>
        </thead>
        <tbody>
            <?
            foreach ($topSubmitter as $element){
                echo("<tr>");
                echo("<td>$element[0]</td>");
                echo "<td class=centered>$element[1]</td>";
                echo("<td class=centered>$element[2]</td>");
                echo("<tr>\n");
            }?>
        </tbody>
    </table>
    
    <p>Rockslappingiest Commanders:</p>
    <table>
        <thead>
            <tr>
                <th>Commander</th>
                <th>Score</th>
                <th>Total Episodes</th>
            </tr>
        </thead>
        <tbody>
            <?
            foreach ($topRC as $element){
                echo("<tr>");
                echo("<td>$element[0]</td>");
                echo "<td class=centered>$element[1]</td>";
                echo("<td class=centered>$element[2]</td>");
                echo("<tr>\n");
            }?>
        </tbody>
    </table>
    <script>
        $(".mutatorIcon").on('mouseover',function(e){
            var mutator = $(this).attr("alt").split(":");
            $("#tooltip").html("<b>" + mutator[0] + "</b><br><br>" + mutator[1]);
            $("#tooltip").show();
        });
        $(".mutatorIcon").on('mouseleave',function(){
            $("#tooltip").hide();
        });
        $(".mutatorIcon").on('mousemove',function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");
            
        });
        $('.infoIcon img').mouseover(function(){
            var text = $(this).next().html();
            $("#tooltip").html(text);
            $("#tooltip").show();
        });
        
        $('.infoIcon img').mouseleave(function(){
            $("#tooltip").hide();
        });
        
        $('.infoIcon img').mousemove(function(e){
            $('#tooltip').css('top', e.pageY-40);
            $('#tooltip').css('left', e.pageX+5);
            $('#tooltip').css('position', "absolute");
            
        });
    </script>
    <?php
    include("../ad3.php");
    ?>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
