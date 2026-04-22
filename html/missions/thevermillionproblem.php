<?php

require_once "../../includes/wrapper-static.php";
require_once "../../includes/switchergenerator.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Mission Guide - The Vermillion Problem</title>
  <meta name="description" content="Starcraft 2 Co-op Mission Guide The Vermillion Problem">
  <meta name="keywords" content="Starcraft co-op guides Vermillion Problem mission">
  <link rel="stylesheet"  media="all" type="text/css" href="/styles/missionstyle.css?v=1.00">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link rel="canonical" href="https://starcraft2coop.com/missions/thevermillionproblem">
  <script src="/scripts/preload.js"></script>
  <style>
      #spawnView{
          position:relative;
      }
      #spawn{
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
      }
      #spawnView form{
          display:inline-block;
          margin-left:20px;
          vertical-align:top;
          line-height:2em;
      }
  </style>
<?= startContent() ?>
    <h1>Co-op Mission Guide: The Vermillion Problem</h1>
    <p id="missionPlace">Veridia Prime</p>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#misSum">Mission Summary</a></p>
        <p><a href="#objectives">Objectives</a></p>
        <p><a href="#baseAnalysis">Enemy Base Analysis</a></p>
        <p><a href="#bonus">Completing the Bonus Objective</a></p>
        <p><a href="#timings">Timings</a></p>
        <p><a href="#spawnPoints">Spawn Points</a></p>
        <p><a href="#crystalSpawn">Crystal Spawn Order</a></p>
        <p><a href="#misTips">Mission Tips</a></p>
        <p><a href="#comTips">Commander-Specific Tips</a></p>
    </div>
    <h2 id="misSum">Mission Summary</h2>
    <p>Amon has incited volcanic eruptions that are destroying Veridia Prime. Gather the crystals required to reactivate the environmental stabilizers and restore the planet before it is obliterated.</p>
    <h2 id="objectives">Objectives</h2>
    <h3>Primary Objective</h3>
        <ul>
            <li>Collect Xenon Crystals (20).</li>
            <li>Do Not Allow Planet to Explode.</li>
        </ul>
    <h3>Secondary Objective</h3>
        <ul>
            <li>Kill the Molten Salamander (1)</li>
        </ul>
    <h2 id="baseAnalysis">Enemy Base Analysis</h2>
    <div id="globalRaceSelect">
        <p>Change all base analysis pictures to race:</p>
        <form action="#">
            <label><input type="radio" name="globalRace" value="protoss" checked>Protoss</label><br>
            <label><input type="radio" name="globalRace" value="terran">Terran</label><br>
            <label><input type="radio" name="globalRace" value="zerg">Zerg</label><br>
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
    <?php $mission = "thevermillionproblem"; ?>
    <p>Pushing into enemy bases is a key part of play on The Vermillion Problem, because most crystals will spawn behind enemy lines.</p>
    <p>The first base you will be pushing into will be the one at your expansion. It is guarded by a small force of units, so you will need a small army or a hero unit to clear it.</p>
    <p>Beweare of the small force of units guarding the northern ramp (not shown below). This force of units is based on the race, and consists of the following:</p>
    <ul>
        <li><b>Protoss:</b> Three Stalkers</li>
        <li><b>Terran:</b> Three Goliaths</li>
        <li><b>Zerg:</b> Two Ravagers and Eight Zerglings</li>
    </ul>
    <?php switcher_generator("expansionlong") ?>
    <p>At this point, the bases you will clear will usually depend on where the crystals spawn, rather than a particular order.</p>
    <p>The base to the West is usually the most lightly defended base after the expansion. It is shown below:</p>
    <?php switcher_generator("wbase") ?>
    <p>The next base usually captured is the base to the North. It is slightly more heavily defended, but should be relatively easy to capture.</p>
    <?php switcher_generator("nbaselong") ?>
    <p>Due to the flow of the mission, there will be a lava surge by the time this base is cleared. It is usually optimal to continue pushing downwards to the North-East base. Watch out for the Hybrid Dominator in this area.</p>
    <?php switcher_generator("nebase") ?>
    <p>The rest of the bases do require some strong forces in order to clear. The base to the South-West is probably the easiest of the remaining bases that can have crystals near them.</p>
    <?php switcher_generator("swbaselong") ?>
    <p>If you choose to push East from this base towards the bonus objective, you'll need to destroy a small enemy camp. Note that the ramp from the opposite side of this island is unguarded and you can reach the bonus objective without fighting enemy units.</p>
    <?php switcher_generator("bonuscamp") ?>
    <p>If you push East from your expansion, there are a patches of enemies present. The first is a camp of units.</p>
    <?php switcher_generator("ebasecamp") ?>
    <p>If you follow the path up North, you'll get to the enemy base.</p>
    <?php switcher_generator("ebaselong") ?>
    <p>Just South of this base, there is a small enclave of enemies.</p>
    <?php switcher_generator("eenclavelong") ?>
    <h2 id="bonus">Completing the Bonus Objective</h2>
    <div id="objectiveImages">
        <img src="/images/missiondata/thevermillionproblem/moltensalamander.jpg" alt="Molten Salamander">
    </div>
    <p>The bonus objective requires you to kill the Molten Salamander that spawns in the marked location below.</p>
    <img src="/images/missiondata/thevermillionproblem/moltensalamanderspawnlocation.jpg" alt="Minimap of Molten Salamander spawn location">
    <h2 id="timings">Timings</h2>
    <p>Note: Information on Tech and Strength levels can be found on the <a href="/guides/enemycomps">Enemy Compositions</a> page.</p>
    <p>Some attack waves in this mission have variance associated with their spawn timings. That is, attack waves have a little bit of randomness as to when they will spawn. The attack wave timings and variances are shown below. A variance of 1:30 seconds means attack waves can spawn anywhere from 1:30 <i>before</i> the attack wave timing to 1:30 <i>after</i> the attack wave timing.</p>
    <p>The Attack Wave Timings for this mission are:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Wave</th>
                <th>Time</th>
                <th>Tech Level</th>
                <th>Strength Level</th>
                <th>Target</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>3:30</td>
                <td>1</td>
                <td>1</td>
                <td>Main</td>
            </tr>
            <tr>
                <td>2</td>
                <td>6:00</td>
                <td>2</td>
                <td>2</td>
                <td>Main</td>
            </tr>
            <tr>
                <td>3</td>
                <td>9:00 ± 1:30</td>
                <td>3</td>
                <td>4</td>
                <td>Expansion</td>
            </tr>
            <tr>
                <td>4*</td>
                <td>12:00 ± 1:30</td>
                <td>3</td>
                <td>4</td>
                <td>Expansion</td>
            </tr>
            <tr>
                <td>5</td>
                <td>15:00 ± 1:30</td>
                <td>5</td>
                <td>5</td>
                <td>Main</td>
            </tr>
            <tr>
                <td>6</td>
                <td>18:00 ± 1:30</td>
                <td>5</td>
                <td>5</td>
                <td>Main</td>
            </tr>
            <tr>
                <td>7</td>
                <td>21:00 ± 1:30</td>
                <td>5</td>
                <td>5</td>
                <td>Expansion</td>
            </tr>
            <tr>
                <td>8</td>
                <td>24:00 ± 1:30</td>
                <td>6</td>
                <td>6</td>
                <td>Expansion</td>
            </tr>
            <tr>
                <td>9</td>
                <td>27:00</td>
                <td>5</td>
                <td>5</td>
                <td>Expansion</td>
            </tr>
        </tbody>
    </table>
    <p>* Attack wave #4 is a multi-pronged attack wave that will have attacking units spawn from two different locations.</p>
    <p>The final attack wave will repeat every two minutes until the end of the mission.</p>
    <p>The Molten Salamander will start to spawn every lava surge after 11:00.</p>
    <h2 id="spawnPoints">Spawn Points</h2>
    <p>The spawn points for attack waves are shown below.</p>
    <p>Attack Wave Spawn Location (West Base):</p>
    <img src="/images/missiondata/thevermillionproblem/wattackwavespawn.jpg" alt="West Attack Wave Spawn">
    <p>Attack Wave Spawn Location (East Base, usually not cleared because crystals do not spawn there):</p>
    <img src="/images/missiondata/thevermillionproblem/eattackwavespawn.jpg" alt="East Attack Wave Spawn">
    <p>Attack Wave Spawn Location (South, near Bonus Objective):</p>
    <img src="/images/missiondata/thevermillionproblem/sattackwavespawn.jpg" alt="South Attack Wave Spawn">
    <p>Crystals also have certain spawn locations. However, at each collection stage, crystals can spawn in more than 10 individual locations, making it infeasible to list them all out individually. Addtionally, spawn locations are randomized as the mission progresses.</p>
    <h2 id="crystalSpawn">Crystal Spawn Order</h2>
    <p>The spawn order and locations of the Xenon Crystals can be viewed below. This may be useful when playing against <a href="/resources/mutators">mutators</a> that hide the crystal locations on the minimap, such as Darkness.</p>
    <div id="spawnView">
        <img id="base"  src="/images/missiondata/thevermillionproblem/mapbase.jpg" alt="Terrain">
        <img id="spawn" src="/images/missiondata/thevermillionproblem/spawn_01.png" alt="Spawn Overlay">
        <form action='#'>
            <label><input type='radio' name='spawn' value='1' checked>Spawn 1</label><br>
            <label><input type='radio' name='spawn' value='2'>Spawn 2</label><br>
            <label><input type='radio' name='spawn' value='3'>Spawn 3</label><br>
            <label><input type='radio' name='spawn' value='4'>Spawn 4</label><br>
            <label><input type='radio' name='spawn' value='5'>Spawn 5</label><br>
            <label><input type='radio' name='spawn' value='6'>Spawn 6</label><br>
            <label><input type='radio' name='spawn' value='7'>Spawn 7</label><br>
            <label><input type='radio' name='spawn' value='8'>Spawn 8</label><br>
            <label><input type='radio' name='spawn' value='9'>Spawn 9</label><br>
        </form>
    </div>
    <script>
        var imgList=[];
        for (var i=1; i<9; i++){
            imgList.push('/images/missiondata/thevermillionproblem/spawn_0' + i + '.png');
        }
        preload(imgList);
        $("input[name='spawn']").change(function(){
            var spawnNum= $(this).val();
            var oldImg = $('#spawn');
            var img = new Image();
            img.src = '/images/missiondata/thevermillionproblem/spawn_0'+ spawnNum + '.png';
            var newImg = $(img).hide();
            $('#base').after(img);
            oldImg.stop(true).fadeOut(500, function() {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'spawn');
            return false;
        })
    </script>
    <h2 id="misTips">Mission Tips</h2>
    <ul>
        <li>Ensure you have adequate defenses in your main and expansion for the attack waves.</li>
        <li>Pay attention to your army as you push into enemy defenses due to the large number of Hybrid Dominators present on this map.</li>
        <li>All crystals from the 3rd spawn will come with a small harass force. Ensure you clear them out before you send your workers to pick up the crystal. These forces do not spawn immediately with the crystal, and have some travel time before they arrive.</li>
    </ul>
    <h2 id="comTips">Commander-specific Tips</h2>
    <ul>
        <li><a href="/commanders/abathur">Abathur</a>: Place Toxic Nests on spawn locations to weaken attack waves.</li>
        <li><a href="/commanders/horner">Han & Horner</a>: Place Mag Mines on spawn locations to weaken attack waves.</li>
        <li><a href="/commanders/kerrigan">Kerrigan</a>: Place Omega Worms on each of the islands to help you and your ally intercept attack waves and crystals in a timely manner.</li>
        <li><a href="/commanders/nova">Nova</a>: If you use Siege Tanks, place Spider-mines on spawn locations to weaken attack waves.</li>
        <li><a href="/commanders/raynor">Raynor</a>: If you use Vultures, place Spider-mines on spawn locations to weaken attack waves.</li>
        <li><a href="/commanders/stetmann">Stetmann</a>: Use the Speed Stetzone to return crystals faster.</li>
        <li><a href="/commanders/stukov">Stukov</a>: Once you have creep spread, move your Infested Colonist Compound to your Expansion area.</li>
        <li><a href="/commanders/zagara">Zagara</a>: Build your macro hatcheries at your expansion for quick reinforcements.</li>
        <li><a href="/commanders/zeratul">Zeratul</a>: Place a Void Array on each of the islands to help you intercept attack waves and crystals in a timely manner.</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
