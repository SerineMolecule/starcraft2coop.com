<?php
include("../header.php");
include("../scripts/switchergenerator.php");
?>
  <title>Starcraft 2 Co-op - Mission Guide - Scythe of Amon</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide Scythe of Amon">
  <meta name="keywords" content="Starcraft co-op guides scythe amon mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/scytheofamon">
  <script src="/scripts/preload.js"></script>
  <style>
    .sliver{
        margin-bottom:50px;
    }
    .sliverDiv{
        display:inline-block;
        margin-right:25px;
        width:400px;
        height:400px;
    }
    .sliverDiv img{
        position:absolute;
    }
    .sliverMinimap{
        display:inline-block;
    }
  </style>
  </head>
<body>
<?php include("../menu.php"); ?>
<div id="content">
    <h1>Co-op Mission Guide: Scythe of Amon</h1>
    <p id="missionPlace">Xel'Naga Temple</p>
    <?php include("../scripts/reporterror.php");?>
    <h2>Sections on this Page</h2>
    <div id="links">
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#idRace">Identifying the Enemy Race</a></p>
        <p><a href="#sliverGrowth">Void Sliver Growth</a></p>
        <p><a href="#sliverAbilities">Void Sliver Abilities</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <a id="misSum"></a><h2>Mission Summary</h2>
    <p>Nerazim scout Lyrak has made a startling discovery: Amon’s forces have invaded a xel’naga temple and are using its energies to awaken one of the Dark God’s most powerful creations. Put a stop to their plans by destroying the void slivers while there’s still time.</p>
    <a id="objectives"></a><h2>Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Destroy Void Slivers (5)</li>
            <li>Do not let the Voidshade Hybrid awaken.</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Escort Evacuation Ships (3)</li>
        </ul>
    <a id="idRace"></a><h2>Identifying the Enemy Race</h2>
    <p>An important part in Starcraft II co-op is identifying the enemy race, and then the enemy composition. This allows you to effectively counter the attack waves on missions. In other missions, the presence of creep would point towards a Zerg race, while the absence of creep would point towards either Protoss or Terran. Scythe of Amon is the only mission in the game where you can uniquely identify the enemy race by checking creep spread. Press Alt + T to view the creep spread pattern. You'll get one of the following three patterns.</p>
    <p>Protoss Creep Spread:</p>
    <img src="/images/missiondata/scytheofamon/creepspread_protoss.jpg" alt="Protoss Creep Spread">
    <p>Terran Creep Spread:</p>
    <img src="/images/missiondata/scytheofamon/creepspread_terran.jpg" alt="Terran Creep Spread">
    <p>Zerg Creep Spread:</p>
    <img src="/images/missiondata/scytheofamon/creepspread_zerg.jpg" alt="Zerg Creep Spread">
    <p>A video is below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/9g-vLQou8-w" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <a id="sliverGrowth"></a><h2>Void Sliver Growth</h2>
    <?php $mission = "scytheofamon"; ?>
    <p>Every time a Void Sliver is destroyed, further reinforcements are added to the remaining Void Slivers. Additionally, all other remaining Void Slivers gain 2000 max shields, and their shields refreshed to full. This makes the other slivers more difficult to destroy. The reinforcement growth of each Sliver is shown below.</p>
    <p>All units present will be Void units and will spawn from the Void Rifts around the Sliver before moving into position. These units can be Dominated and Reclaimed, but cannot be Mind-Controlled by Dark Archons.</p>
    <p>Sliver 1:</p>
    <div class='sliver'>
        <div id="sliver1Div" class='sliverDiv'><img id ='sliver1Pic' src=' /images/missiondata/scytheofamon/sliver1-0.jpg' alt='Sliver 1'></div>
            <div class = 'sliverMinimap'>
                <form action='#'>
                    <label><input type='radio' name='sliver1States' value='0' checked>0 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver1States' value='1'>1 Sliver Destroyed</label><br>
                    <label><input type='radio' name='sliver1States' value='2'>2 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver1States' value='3'>3 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver1States' value='4'>4 Slivers Destroyed</label><br>
                </form>
                <br><br>
                <div><img src='/images/missiondata/scytheofamon/sliver1minimap.jpg' alt='Base Minimap'></div>
            </div>
    </div>
    <p>Sliver 2:</p>
    <div class='sliver'>
        <div id="sliver2Div"  class='sliverDiv'><img id ='sliver2Pic' src=' /images/missiondata/scytheofamon/sliver2-0.jpg' alt='Sliver 2'></div>
            <div class = 'sliverMinimap'>
                <form action='#'>
                    <label><input type='radio' name='sliver2States' value='0' checked>0 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver2States' value='1'>1 Sliver Destroyed</label><br>
                    <label><input type='radio' name='sliver2States' value='2'>2 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver2States' value='3'>3 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver2States' value='4'>4 Slivers Destroyed</label><br>
                </form>
                <br><br>
                <div><img src='/images/missiondata/scytheofamon/sliver2minimap.jpg' alt='Base Minimap'></div>
            </div>
    </div>
    <p>Sliver 3:</p>
    <div class='sliver'>
        <div id="sliver3Div"  class='sliverDiv'><img id ='sliver3Pic' src=' /images/missiondata/scytheofamon/sliver3-0.jpg' alt='Sliver 3'></div>
            <div class = 'sliverMinimap'>
                <form action='#'>
                    <label><input type='radio' name='sliver3States' value='0' checked>0 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver3States' value='1'>1 Sliver Destroyed</label><br>
                    <label><input type='radio' name='sliver3States' value='2'>2 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver3States' value='3'>3 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver3States' value='4'>4 Slivers Destroyed</label><br>
                </form>
                <br><br>
                <div><img src='/images/missiondata/scytheofamon/sliver3minimap.jpg' alt='Base Minimap'></div>
            </div>
    </div>
    <p>Sliver 4:</p>
    <div class='sliver'>
        <div id="sliver4Div"  class='sliverDiv'><img id ='sliver4Pic' src=' /images/missiondata/scytheofamon/sliver4-0.jpg' alt='Sliver 4'></div>
            <div class = 'sliverMinimap'>
                <form action='#'>
                    <label><input type='radio' name='sliver4States' value='0' checked>0 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver4States' value='1'>1 Sliver Destroyed</label><br>
                    <label><input type='radio' name='sliver4States' value='2'>2 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver4States' value='3'>3 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver4States' value='4'>4 Slivers Destroyed</label><br>
                </form>
                <br><br>
                <div><img src='/images/missiondata/scytheofamon/sliver4minimap.jpg' alt='Base Minimap'></div>
            </div>
    </div>
    <p>Sliver 5:</p>
    <div class='sliver'>
        <div id="sliver5Div"  class='sliverDiv'><img id ='sliver5Pic' src=' /images/missiondata/scytheofamon/sliver5-0.jpg' alt='Sliver 5'></div>
            <div class = 'sliverMinimap'>
                <form action='#'>
                    <label><input type='radio' name='sliver5States' value='0' checked>0 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver5States' value='1'>1 Sliver Destroyed</label><br>
                    <label><input type='radio' name='sliver5States' value='2'>2 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver5States' value='3'>3 Slivers Destroyed</label><br>
                    <label><input type='radio' name='sliver5States' value='4'>4 Slivers Destroyed</label><br>
                </form>
                <br><br>
                <div><img src='/images/missiondata/scytheofamon/sliver5minimap.jpg' alt='Base Minimap'></div>
            </div>
    </div>
    <script>
        var imgList=[];
        for (var i=1;i<6;i++){
            for (var j=0; j<5; j++){
                imgList.push('/images/missiondata/scytheofamon/sliver' + i +'-'+ j + '.jpg');
            }
        }
        preload(imgList);
        $("input[name='sliver1States']").change(function(){
            var state= $(this).val();
            var oldImg = $('#sliver1Pic');
            var img = new Image();
            img.src = '/images/missiondata/scytheofamon/sliver1-'+ state + '.jpg';
            var newImg = $(img).hide();
            $('#sliver1Div').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'sliver1Pic');
        })
        $("input[name='sliver2States']").change(function(){
            var state= $(this).val();
            var oldImg = $('#sliver2Pic');
            var img = new Image();
            img.src = '/images/missiondata/scytheofamon/sliver2-'+ state + '.jpg';
            var newImg = $(img).hide();
            $('#sliver2Div').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'sliver2Pic');
        })
        $("input[name='sliver3States']").change(function(){
            var state= $(this).val();
            var oldImg = $('#sliver3Pic');
            var img = new Image();
            img.src = '/images/missiondata/scytheofamon/sliver3-'+ state + '.jpg';
            var newImg = $(img).hide();
            $('#sliver3Div').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'sliver3Pic');
        })
        $("input[name='sliver4States']").change(function(){
            var state= $(this).val();
            var oldImg = $('#sliver4Pic');
            var img = new Image();
            img.src = '/images/missiondata/scytheofamon/sliver4-'+ state + '.jpg';
            var newImg = $(img).hide();
            $('#sliver4Div').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'sliver4Pic');
        })
        $("input[name='sliver5States']").change(function(){
            var state= $(this).val();
            var oldImg = $('#sliver5Pic');
            var img = new Image();
            img.src = '/images/missiondata/scytheofamon/sliver5-'+ state + '.jpg';
            var newImg = $(img).hide();
            $('#sliver5Div').append(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'sliver5Pic');
        })
    </script>
    <a id="sliverAbilities"></a><h2>Void Sliver Abilities</h2>
    <p>The Void Slivers will cast various abilities as they are attacked. The first Void Sliver will have no abilities. Subsequent Void Slivers will each have a random ability added from the list below. Therefore, Slivers #4 and #5 will have all abilities.</p>
    <p>The list of abilities are below:</p>
    <table>
        <thead>
            <tr>
                <th>Ability</th>
                <th>Description</th>
                <th>Cooldown</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Shockwave</td>
                <td>Casts an Area of Effect within 11 range of the Void Sliver with a chargeup time of 3 seconds, stunning all units within its range for 2 seconds.</td>
                <td>14 seconds</td>
            </tr>
            <tr>
                <td>Death Grip</td>
                <td>Creates a Death Grip Crystal within 16 range of the Void Sliver. Void Slivers #4 and #5 will spawn 2 Death Grip Crystals instead of 1 if they have the ability.  Death Grip Crystals disable a set of units whose HP + Shields are less than 800*, and destroys them after 10 seconds unless the crystal is destroyed.</td>
                <td>60 seconds</td>
            </tr>
            <tr>
                <td>Unstable Energy</td>
                <td>Deals 100 damage in an area within 18 range of the Void Sliver after 4 seconds.</td>
                <td>20 seconds</td>
            </tr>
        </tbody>
    </table>
    <p>* The Death Grip Crystal target selection code picks a unit and adds its vitality to a pool for counting. If the total vitality in the pool is less than 800, the Death Grip Crystal will pick another target, repeating until the pool goes above 800 vitality. Therefore, it is possible for Death Grip Crystals to capture units that are greater than 800 HP.</p>
    <a id="bonus"></a><h2>Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/scytheofamon/warpprism.jpg" alt="Warp Prism">
        <img src="/images/missiondata/scytheofamon/warpprism.jpg" alt="Warp Prism">
        <img src="/images/missiondata/scytheofamon/warpprism.jpg" alt="Warp Prism">
    </div>
    <div id="globalRaceSelect">
        <p>Change all base analysis pictures to race:</p>
        <form action="#">
            <input type="radio" name="globalRace" value="protoss" checked>Protoss<br>
            <input type="radio" name="globalRace" value="terran">Terran<br>
            <input type="radio" name="globalRace" value="zerg">Zerg<br>
        </form>
        <script>
            $("input[name='globalRace']").change(function(){
                var race= $(this).val();
                $('input:radio[value="' + race + '"]').each(function () {
                    if($(this).attr('name')!=="globalRace"){
                        $(this).prop('checked', true).trigger('change');
                    }
                })
                return false;
            })
        </script>
    </div>
    <p>The bonus objective requires you to escort a Warp Prism as it attempts to evacuate people. The stopping points of these prisms are within enemy bases. The bases that will be encountered, in the order of the stopping points (assuming the objective doesn't get shot down) is shown below.</p>
    <p>Stop Point 1:</p>
    <?php switcher_generator("bonusbase1long") ?>
    <p>Stop Point 2:</p>
    <?php switcher_generator("bonusbase2") ?>
    <p>Stop Point 3:</p>
    <?php switcher_generator("bonusbase3long") ?>
    <p>It is also important to note that each stopping point will feature a difference race of enemy units. The race will not match the race of the Attack Waves on this map. However, based on the race of the Attack Waves, you can tell what race of enemy units will be present in each of the three Stopping Points above as follows:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Race of attack wave</th>
                <th>Stop Point 1 Race</th>
                <th>Stop Point 2 Race</th>
                <th>Stop Point 3 Race</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Protoss</td>
                <td>Zerg</td>
                <td>Terran</td>
                <td>Protoss</td>
            </tr>
            <tr>
                <td>Terran</td>
                <td>Protoss</td>
                <td>Zerg</td>
                <td>Terran</td>
            </tr>
            <tr>
                <td>Zerg</td>
                <td>Terran</td>
                <td>Protoss</td>
                <td>Zerg</td>
            </tr>
        </tbody>
    </table>
    <p>The first Stopping Point will always be the same area. However, Stopping Points 2 and 3 will be switched, if you destroy Sliver 3 (above) before the objective leaves the first stopping point.</p>
    <a id="timings"></a><h2>Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2:48</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>7:00</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>9:00</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>12:30</td>
                <td>4</td>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
                <td>16:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
                <td>19:00</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
                <td>22:00</td>
                <td>5</td>
                <td>5</td>
            </tr>
            <tr>
                <td>8</td>
                <td>24:00</td>
                <td>6</td>
                <td>6</td>
            </tr>
            <tr>
                <td>9</td>
                <td>26:00</td>
                <td>6</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    <p>Additionally, some attack waves will also have Hybrids in them. These attack waves, and the number of Hybrids in them is shown below:</p>
    <table>
        <thead>
            <tr>
                <th>Wave</th>
                <th>Minor Hybrid</th>
                <th>Major Hybrid</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>3</td>
                <td>1</td>
                <td>0</td>
            </tr>
            <tr>
                <td>4</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>5</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>6</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>7</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>8</td>
                <td>2</td>
                <td>1</td>
            </tr>
            <tr>
                <td>9</td>
                <td>2</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>
    <p>The types of these Hybrids will depend on the enemy race, as follows:</p>
    <table>
        <thead>
            <tr>
                <th>Race</th>
                <th>Minor Hybrid</th>
                <th>Major Hybrid</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Protoss</td>
                <td>Hybrid Destroyer</td>
                <td>Hybrid Behemoth</td>
            </tr>
            <tr>
                <td>Terran</td>
                <td>Hybrid Reaver</td>
                <td>Hybrid Dominator</td>
            </tr>
            <tr>
                <td>Zerg</td>
                <td>Hybrid Nemesis</td>
                <td>Hybrid Dominator</td>
            </tr>
        </tbody>
    </table>
    <p>The Bonus Objective will move towards a Stopping Point at the following times:</p>
    <ul>
        <li>7:00</li>
        <li>13:00</li>
        <li>16:00</li>
    </ul>
    <a id="spawnPoints"></a><h2>Spawn Points</h2>
    <p>Attack Waves spawn from two different sides of the map, each with their own spawn point. Unfortunately, these points are not pathable, and hence, cannot be spawn-camped. However, all attack waves will rally to a Hybrid spawn point. This point <i>can</i> be spawn camped. These spawn points are shown below.</p>
    <p>Northern Attack Wave:</p>
    <img src="/images/missiondata/scytheofamon/northernspawnpoint.jpg" alt="Northern Spawn Point">
    <p>Southern Attack Wave:</p>
    <img src="/images/missiondata/scytheofamon/southernspawnpoint.jpg" alt="Southern Spawn Point">
    <a id="misTips"></a><h2>Mission Tips</h2>
    <ul>
        <li>Ensure you have adequate troops for later Slivers. Death Grip Crystals can destroy a tiny army instantly.</li>
        <li>Death Grip Crystals cannot target Heroic units.</li>
        <li>Death Grip Crystals are considered units, which means they can be targeted by abilities like Snipe and Mind Blast.</li>
        <li>More skilled players can reverse-clear the mission, starting with the farthest Slivers from the base. This removes those difficult Slivers from play early while they are still weak.</li>
        <li>It is usually better to clear Sliver 2 and to get access to your expansion early. This is especially useful for commanders that require a strong economy.</li>
    </ul>
    <a id="comTips"></a><h2>Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on hybrid spawn locations to weaken the attack waves.</li>
        <li><a href="/commanders/abathur">Abathur</a>: When farming for biomass at the start of the mission, place Toxic Nests near Void Rifts to quickly collect Biomass from Void Rift units.</li>
        <li><a href="/commanders/alarak">Alarak</a>: Clear the Expansion Sliver first with two photon overcharges.</li>
        <li><a href="/commanders/artanis">Artanis</a>: Clear the Expansion Sliver first with one Solar Bombardment.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on hybrid spawn locations to weaken the attack waves.</li>
        <li><a href="/commanders/karax">Karax</a>: Sneak a probe into the Expansion Sliver location and use photon cannons to destroy it.</li>
        <li><a href="/commanders/mengsk">Mengsk</a>: Mengsk can speedrun this mission relatively easily by using Bunkers to clear Sliver 4, Nukes to clear Slivers 3 and 5, and Earthsplitters to clear Slivers 1 and 2.</li>
        <li><a href="/commanders/nova">Nova</a>: The gas at the left of the top expansion can be taken without drawing enemy aggro at the start of the game.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider Mines on hybrid spawn locations to weaken the attack waves.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider Mines on hybrid spawn locations to weaken the attack waves.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: The gas at the left of the top expansion can be taken without drawing enemy aggro at the start of the game.</li>
        <li><a href="/commanders/vorazun">Vorazun</a>: Place Dark Pylons on each side of the map so you can intercept Attack Waves.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: The Void Suppression Crystal can be used to interrupt and disable all Void Sliver abilities.</li>
    </ul>
</div>
<?php include("../footer.php"); ?>
</body>
</html>
