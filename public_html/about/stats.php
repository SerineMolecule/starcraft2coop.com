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
<?php include("../menu.php"); ?>
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
    <a id="site"></a><h2>Site-Specific</h2>
    <p>These statistics provide you with a bit of a behind-the-scenes look at starcraft2coop.com. There is a lot of data that is stored in the site's databases that allow users to pull useful information when they wish, such as mutator interactions. A lot of this data is automatically pulled and presented to readers in an easy-to-find manner, such as on the <a href="/resources/weeklymutations">Weekly Mutations</a> page.</p>
    <p>Total Mutator Interactions: <?php echo ($mutatorInteractionCount); ?></p>
    <p>Commander Tips for Mutators: <?php echo ($mutatorCommanderTips); ?></p>
    <p>Patches Recognized by Analyzer: <?php echo ($patchCount); ?></p>
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
    <a id="community"></a><h2>Community Stats</h2>
        <p>Note: Data refreshes once every 24 hours<br>
        Current data refreshed on: 2024-05-04 04:00:01<br>
        Total replays counted: 255876</p>
    <div class="infoIcon">
        <p class="subheading">Total Games Counted Across Servers</p>
        <img src="/images/replayanalyzer/info.png" alt="Info">
        <span class="tooltip">This is the number of games played per server.</span>
    </div>
        <div class="chart">
        <canvas id="communityServerGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityServerGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Asia","CN","EU","NA"],
                datasets: [{
                    data: [15069,379,98577,141851],
                    backgroundColor:[colorAsia,colorCN,colorEU,colorNA],
                    hoverBackgroundColor:[colorAsiaDark,colorCNDark,colorEUDark,colorNADark],
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
        <div class="chart">
        <canvas id="communityCommanderGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityCommanderGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Tychus","Dehaka","Abathur","Mengsk","Stukov","Nova","Zagara","Kerrigan","Stetmann","Karax","Zeratul","Raynor","Horner","Swann","Alarak","Artanis","Fenix","Vorazun"],
                datasets: [{
                    data: [22401,21504,18877,18129,17699,17045,13926,13667,12726,12652,12405,11676,11272,10949,10783,10224,10200,9741],
                    backgroundColor:[tychusColor,dehakaColor,abathurColor,mengskColor,stukovColor,novaColor,zagaraColor,kerriganColor,stetmannColor,karaxColor,zeratulColor,raynorColor,hornerColor,swannColor,alarakColor,artanisColor,fenixColor,vorazunColor],
                    hoverBackgroundColor:[darkTychusColor,darkDehakaColor,darkAbathurColor,darkMengskColor,darkStukovColor,darkNovaColor,darkZagaraColor,darkKerriganColor,darkStetmannColor,darkKaraxColor,darkZeratulColor,darkRaynorColor,darkHornerColor,darkSwannColor,darkAlarakColor,darkArtanisColor,darkFenixColor,darkVorazunColor],
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
        <div class="chart">
        <canvas id="communityMissionGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityMissionGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Void Thrashing","Oblivion Express","Dead of Night","Rifts to Korhal","Temple of the Past","Void Launch","Lock & Load","Mist Opportunities","Malwarfare","Miner Evacuation","Chain of Ascension","Scythe of Amon","Part and Parcel","The Vermillion Problem","Cradle of Death"],
                datasets: [{
                    data: [32228,23680,23455,18090,16890,16778,15438,15280,14686,14258,14094,14016,13475,12605,10903],
                    backgroundColor:[missionColors[0],missionColors[1],missionColors[2],missionColors[3],missionColors[4],missionColors[5],missionColors[6],missionColors[7],missionColors[8],missionColors[9],missionColors[10],missionColors[11],missionColors[12],missionColors[13],missionColors[14]],
                    hoverBackgroundColor:[darkMissionColors[0],darkMissionColors[1],darkMissionColors[2],darkMissionColors[3],darkMissionColors[4],darkMissionColors[5],darkMissionColors[6],darkMissionColors[7],darkMissionColors[8],darkMissionColors[9],darkMissionColors[10],darkMissionColors[11],darkMissionColors[12],darkMissionColors[13],darkMissionColors[14]],
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
        <div class="chart">
        <canvas id="communityDifficultyGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityDifficultyGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Casual (0.66%)","Normal (3.39%)","Hard (11.81%)","Brutal (72.71%)","Brutal1 (7.2%)","Brutal2 (0.74%)","Brutal3 (1.06%)","Brutal4 (1.85%)","Brutal5 (0.27%)","Brutal6 (0.31%)"],
                datasets: [{
                    data: [1686,8678,30211,186037,18421,1902,2707,4744,687,803],
                    backgroundColor:[casualColor,normalColor,hardColor,brutalColor,brutal1Color,brutal2Color,brutal3Color,brutal4Color,brutal5Color,brutal6Color],
                    hoverBackgroundColor:[darkCasualColor,darkNormalColor,darkHardColor,darkBrutalColor,darkBrutal1Color,darkBrutal2Color,darkBrutal3Color,darkBrutal4Color,darkBrutal5Color,darkBrutal6Color],
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
        <div class="chart">
        <canvas id="communityCompGamesChart" width="500" height="250"></canvas>
    </div>
    <script>
        var ctx = $('#communityCompGamesChart');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Protoss Compositions","Masters and Machines","Towering Walkers","Disruptive Artillery","Hope of the Khalai","Siege of Storms","Shadow Disruption","Vanguard of Aiur","Fleet of the Matriarch","Terran Compositions","Raiding Party","Machines of War","Shadow Tech","Dominion Battlegroup","Classic Infantry","Classic Mech","Zerg Compositions","Ravaging Infestation","Broodling Corruption","Explosive Threats","Invasionary Swarm","Devouring Scourge"],
                datasets: [{
                    data: [0,10931,10915,10772,10220,10793,11077,9379,9006,0,14508,14671,14770,15006,12410,12501,0,18049,17088,18199,15046,14354],
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
        <div class="chart">
        <canvas id="communityCommanderWinRateChart" width="600" height="400"></canvas>
    </div>
    <script>
        var ctx = $('#communityCommanderWinRateChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Dehaka","Zeratul","Nova","Fenix","Artanis","Horner","Abathur","Alarak","Kerrigan","Stetmann","Mengsk","Zagara","Karax","Swann","Tychus","Vorazun","Stukov","Raynor"],
                datasets: [{
                    data: [19884,11408,15612,9257,9268,10147,16891,9642,12166,11277,15989,12271,11139,9610,19642,8492,15167,9785],
                    backgroundColor: winColor,
                    hoverBackgroundColor: darkWinColor,
                },
                {
                    data: [1620,997,1433,943,956,1125,1986,1141,1501,1449,2140,1655,1513,1339,2759,1249,2532,1891],
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
        <div class="chart">
        <canvas id="communityMissionWinRateChart" width="600" height="400"></canvas>
    </div>
    <script>
        var ctx = $('#communityMissionWinRateChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Lock & Load","Void Thrashing","Rifts to Korhal","The Vermillion Problem","Void Launch","Dead of Night","Part and Parcel","Miner Evacuation","Cradle of Death","Oblivion Express","Temple of the Past","Malwarfare","Mist Opportunities","Scythe of Amon","Chain of Ascension"],
                datasets: [{
                    data: [14555,30327,16529,11441,15155,21170,12111,12648,9619,20865,14410,12366,12861,11768,11822],
                    backgroundColor: winColor,
                    hoverBackgroundColor: darkWinColor,
                },
                {
                    data: [883,1901,1561,1164,1623,2285,1364,1610,1284,2815,2480,2320,2419,2248,2272],
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
        <div class="chart">
        <canvas id="communityCompWinRateChart" width="600" height="400"></canvas>
    </div>
    <script>
        var ctx = $('#communityCompWinRateChart');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Devouring Scourge","Shadow Disruption","Hope of the Khalai","Siege of Storms","Classic Infantry","Raiding Party","Invasionary Swarm","Broodling Corruption","Towering Walkers","Masters and Machines","Fleet of the Matriarch","Disruptive Artillery","Machines of War","Ravaging Infestation","Classic Mech","Vanguard of Aiur","Explosive Threats","Dominion Battlegroup","Shadow Tech"],
                datasets: [{
                    data: [13304,10183,9365,9862,11338,13219,13704,15533,9884,9886,8130,9686,13118,16116,11059,8290,16032,13171,12873],
                    backgroundColor: winColor,
                    hoverBackgroundColor: darkWinColor,
                },
                {
                    data: [1050,894,855,931,1072,1289,1342,1555,1031,1045,876,1086,1553,1933,1442,1089,2167,1835,1897],
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
            <tr><td>Lock & Load</td><td>05:33</td></tr><tr><td>Void Thrashing</td><td>06:30</td></tr><tr><td>Scythe of Amon</td><td>07:15</td></tr><tr><td>Rifts to Korhal</td><td>08:20</td></tr><tr><td>Chain of Ascension</td><td>09:25</td></tr><tr><td>Miner Evacuation</td><td>09:51</td></tr><tr><td>Dead of Night</td><td>10:44</td></tr><tr><td>Cradle of Death</td><td>11:02</td></tr><tr><td>Part and Parcel</td><td>14:22</td></tr>        </tbody>
    </table>
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
            <tr><td>Sintharius</td><td class=centered>14.5</td><td class=centered>16</td><tr>
<tr><td>eViLLiNg</td><td class=centered>14.0</td><td class=centered>14</td><tr>
<tr><td>Aommaster</td><td class=centered>9.0</td><td class=centered>10</td><tr>
<tr><td>macissammich</td><td class=centered>7.0</td><td class=centered>7</td><tr>
<tr><td>Ancalagon</td><td class=centered>5.5</td><td class=centered>6</td><tr>
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
            <tr><td>Raynor</td><td class=centered>16.5</td><td class=centered>19</td><tr>
<tr><td>Artanis</td><td class=centered>15.0</td><td class=centered>16</td><tr>
<tr><td>Tychus</td><td class=centered>12.5</td><td class=centered>15</td><tr>
<tr><td>Vorazun</td><td class=centered>12.0</td><td class=centered>14</td><tr>
<tr><td>Dehaka</td><td class=centered>12.0</td><td class=centered>15</td><tr>
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
</div>
<?php include("../footer.php"); ?>
</body>
</html>
