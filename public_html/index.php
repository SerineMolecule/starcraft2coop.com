<?php
include("header.php");
?>
  <title>Starcraft 2 Co-op - Commander Guides, Mission Data and more!</title>
  <meta name="description" content="Your #1 Source for Starcraft 2 Co-op Information. Commander Guides, Mission Data, Unit Stats, Mutation Information and more!">
  <meta name="keywords" content="Starcraft co-op guides">
  <link rel="canonical" href="https://starcraft2coop.com">
  
  <style>
        @media (min-width: 701px){
            #updateTable td:nth-child(1){
                width:120px;
            }
        }
        @media (max-width: 700px){
            #updateTable td:nth-child(1){
                width:35%;
            }
        }
        .left-column{
            text-align: left;
            font-weight: bold;
        }
        #updateTable td, #updateTable th{
            border:none;
        }
        ul{
            padding:0;
        }
        ul li ul li{
            margin-left:25px;

        }
        #service{
            padding:0.5rem;
            display:inline-block;
            font-size:0.85rem;
            border:1px solid white;
        }
  </style>
  </head>
<body>
<div id="header"><img src="/images/mainpageheader.png" alt="Starcraft II Co-op Logo">
</div>
<div id="menu"><?php include("menu.php"); ?></div>
<div id="content">
    <h1>Starcraft II Co-op Game Mode</h1>
    <p>Starcraft II is a real-time strategy game by Blizzard Entertainment. It is one of the most successful RTS's in history. In 2015, Starcraft II introduced a co-op mode, where two players would face up against Amon in a PVE-type mission. The game features several different commanders to play and many different maps to choose from.</p>
    <p>This site serves as a repository of all the information gathered by the Starcraft II co-op community. It aims to help players improve their gameplay, by providing in-depth commander and map analysis, as well as providing tips on how to deal with certain tricky situations that may arise in-game.</p>
    <p>Starcraft II is currently free to play. Three of the commanders in co-op mode are free, while the others are free to play up to level 5. If you are a new player, check out the <a href="/guides/newplayer">New Players</a> page to help you select your first commander. Also, check out the <a href="guides/generaltips">General Tips</a> page for some great tips to get you started with this game mode.</p>
    <p>Visit the official Starcraft II page <a href="https://starcraft2.com" rel="nofollow">here</a> and join the fight against Amon!</p>
    <h2>This week's mutation</h2>
    <a href="/resources/weeklymutations#thisweek">Go to this week's mutation</a>
    <h2>Latest Updates:</h2>
        <tr>
            <td class="left-column">
                <p>Site Update Notice</p>
            </td>
            <td>
                starcraft2coop.com will stay available! Unfortunately, accounts and the replay analyzer are no longer working.
            </td>
        </tr>
    </table>
</div>
<?php include("footer.php"); ?>
</body>
</html>
