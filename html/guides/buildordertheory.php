<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Build Order Theory</title>
  <meta name="description" content="Learn how to make your own Co-op build orders and adapt your build to face challenges like mutators and weekly mutations.">
  <meta name="keywords" content="Starcraft co-op guides build order theory">
  <link rel="canonical" href="https://starcraft2coop.com/guides/buildordertheory">
  <style>
        .centered{
            text-align:center;
        }
        .buildOrder{
            font-family: "Courier New", Courier, monospace;
            background-color: steelblue;
            display: inline-block;
            padding: 10px;
        }
        .buildOrderExp{
            font-family:"Courier New", Courier, monospace;
            background-color:darkcyan;
            display:inline-block;
            padding: 10px;
        }
        .tableBuildOrder{
            font-family:"Courier New", Courier, monospace;
            background-color:steelblue;
            text-align:left;
        }
        img{
            display:inline;
        }
  </style>
  <?= startContent() ?>
    <h1>Build Order Theory: How to Develop Your Own Build Orders</h1>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#what">What is a Build Order</a></p>
        <p><a href="#spending">Spending Resources</a></p>
        <p><a href="#coreConcept">Core Concept: Making Workers</a></p>
        <p><a href="#concept1">Concept #1: Using Calldowns</a></p>
        <p><a href="#concept2">Concept #2: When to Take Gas</a></p>
        <p><a href="#concept3">Concept #3: Primary Structure Placement</a></p>
        <p><a href="#concept4">Concept #4: Combat Units</a></p>
        <p><a href="#concept5">Concept #5: Static Defenses</a></p>
        <p><a href="#theory">Theory: Mining Rates</a></p>
        <p><a href="#break1">Breaking Concept #3</a></p>
        <p><a href="#break2">Breaking the Core Concept</a></p>
        <p><a href="#testing">Testing Build Orders</a></p>
        <p><a href="#constructing">Constructing Build Orders</a></p>
        <p><a href="#closing">Closing Notes</a></p>
    </div>
    <h2 id="what">What is a Build Order</h2>
    <p>Before you start to develop your own build order, it is first important to understand what a build order is and what its purpose is. A build order provides a player with a set of actions that they should follow at the start of the game. These actions will include things like when to make a worker, or when to put down a building.</p>
    <p>The reasoning behind this is that games all start with the same state. Therefore, there is a theoretical set of actions that can be taken such that a particular state of the player's situation is highly optimized. For example, a player can follow an economy-focused build order, and after a certain amount of time, they would have maximized their economic potential, far more than a player not following the build order.</p>
    <p>Build orders are extremely precise. They require very particular timings and repetition for practice. Players with excellent macro abilities can benefit a lot from build orders. This is because they float very minimal quantities of resources and play efficiently. For example, Speedrunners can benefit greatly from a good build order due to the repetitive requirement of their gameplay.</p>
    <p>However, build order theory can benefit a large number of players interested in learning the intricate details of the game who want to improve their gameplay. Knowing how build orders are generated can allow players to adapt to new situations that may arise in a game. For example, when facing particular <a href="/resources/mutators">Mutators</a>, knowledge of build order theory can come in handy.</p>
    <p>Below is an example of a build order. This one is for Nova's opening:</p>
    <p class="buildOrder">
        14 Refinery<br>
        15 Refinery<br>
        18 Commander Center<br>
        19 Barracks<br>
        22 Marines -> Gas -> Main<br>
    </p>
    <p>The numbers on the left show the supply a particular action is taken at. It is assumed that any unaccounted supply goes into making workers. So, in this scenario, the player would continue making workers until they are at 14 supply. Then they would spend 100 minerals on making an Automated Refinery, etc. On the last line, says at 22 supply, drop marines and use them to break the gas rocks first, before breaking the main rocks.</p>
    <p>All build orders follow a similar format. Some may use the more condensed arrow notation, some may be more wordy. However, they all convey the same thing: a set of actions a player should take to optimize their early game.</p>
    <p>There are certain limitations to build orders in Co-op. For one, Missions can have varying degrees of how contested an expansion is. For example, expanding on <a href="/missions/malwarfare">Malwarfare</a> is significantly easier than expanding on <a href="/missions/cradleofdeath">Cradle of Death</a>. You will need a signficantly larger army to expand on the latter, which means your build order will have to be different. Listing build orders for every possible scenario is extremely difficult.</p>
    <p>What this guide aims to do is give players a rough framework on how to come up with a build order on the spot that addresses their particular needs by providing them with information on how to manage their economy.</p>
    <p>Note that all builds were done on <a href="/missions/oblivionexpress">Oblivion Express</a>, so timings to move the workers to the expansion may vary depending on the mission.</p>
    <h2 id="spending">Spending Resources</h2>
    <p>In Starcraft II, you can spend resources across three different channels. These are:</p>
    <ul>
        <li>Economy: These are units/structures that further contribute to the enhancement of your economy. These include:
            <ul>
                <li>Primary Structures (Nexus, Command Center, Hatchery)</li>
                <li>Vespene Collection Structures (Assimilator, Refinery, Extractor)</li>
                <li>Workers (Probes, SCVs, Drones)</li>
                <li>Supply Structures/Units (Pylon, Supply Depot, Overlord)</li>
                <li>Queens</li>
            </ul>
        </li>
        <li>Tech: These are upgrades/structures that progress your in-game technology level. These include:
            <ul>
                <li>Combat unit-producing structures (e.g. Gateways, Barracks)</li>
                <li>Research structures (e.g. Forge, Engineering Bay, Evolution Chamber)</li>
                <li>Attack/Armor/Shield/Unit-specific Upgrades</li>
            </ul>
        </li>
        <li>Army Units: These are units that will engage in combat.</li>
    </ul>
    <p>The goal of a build order is to optimize the spending across these three categories such that:</p>
        <ol type="1">
            <li>You do not lose to any early-game aggression in the form of attack waves.</li>
            <li>You are able to comfortably complete the mission objectives.</li>
            <li>You are in the best possible place economically at a certain point in the game.</li>
        </ol>
    <h2 id="coreConcept">Core Concept: Making Workers</h2>
    <p>Since workers improve your economy, it follows logically that you should be making workers consistently until you reach saturation across both your bases. In fact, this is the core concept behind most (if not all) build orders. By paying attention to your macro to ensure that all your primary structures are producing workers, you can improve your in-game economic state immensely.</p>
    <p>However, making workers has a cost associated with it. Consistently making workers without doing anything else can cause two problems:</p>
    <ol type="1">
        <li>It leaves you vulnerable to attack, especially when attack waves arrive early, like on <a href="/missions/riftstokorhal">Rifts to Korhal</a>.</li>
        <li>It prevents you from Teching up, weakening your army, and potentially preventing you from expanding.</li>
    </ol>
    <p>Therefore, part of the resources you get need to be spend on Teching up, expanding and making an army. Usually, the resources you spend will be your "floating" resources. That is, resources that you do not need to maintain a single worker in production in your primary structure.</p>
    <h2 id="concept1">Concept #1: Using Calldowns</h2>
    <p>Calldowns are a unique aspect to Co-op. Calldowns can significantly impact a commander's build order. They can allow commanders to expand much quicker than normal, because most calldowns are free, and players are only sacrificing a cooldown charge for it.</p>
    <p>A small note to make here is that players must ask whether using the calldown to fast-expand is worth it, given their in-game situation. Most of the time, the answer is "yes", but players will have to evaluate this for themselves given their situation (for example, custom <a href="/resources/mutators">Mutators</a>).</p>
    <p>With that in mind, we can now come up with a reasonably decent Zeratul build. Note that this includes the Legion cost reduction mastery (the Legion will cost 540 minerals to summon), as outlined in the <a href="/commanders/zeratul">Zeratul</a> page.</p>
    <p class="buildOrder">
        19 Probe -> Expo<br>
        20 Zoraya Legion<br>
        21 Nexus<br>
    </p>
    <p class="buildOrderExp">
        Gets vision of the Expo<br>
        Concept #1<br>
        <br>
    </p>
    <h2 id="concept2">Concept #2: When to Take Gas</h2>
    <p>As a general rule of thumb, whenever gasses are automated, it is better to take the gasses first using floating resources, before attempting to expand.</p>
    <p>Additionally, you also want to ensure that your mineral line does not get over-saturated. More than the maximum number of workers on a mineral line means that you have workers that are doing nothing. It would be much better if they were collecting gas instead. Therefore, under certain conditions, gas collection structures need to be constructed so they can prevent oversaturation of the mineral line.</p>
    <p>With that in mind, we can now come up with a reasonably decent Vorazun build. Note that this assumes at least 8 points into the Initial Spear of Adun Energy, to get Shadow Guard out as soon as it comes off cooldown.</p>
    <p class="buildOrder">
        13 Dark Pylon<br>
        15 Assimilator<br>
        16 Assimilator<br>
        18 Gateway<br>
        19 Pylon<br>
        22 Change Rally to Expansion<br>
        23 Cybernetics Core<br>
        27 Shadowguard -> Gas -> Main<br>
        28 Twilight + Warp Gate<br>
        29 Assimilators + Nexus
    </p>
    <p class="buildOrderExp">
        Concept #1<br>
        Concept #2<br>
        Concept #2<br>
        Core Concept<br>
        Prevent Supply Block<br>
        Main is Saturated<br>
        Core Concept<br>
        Concept #1/Concept #2<br>
        Core Concept<br>
        Concept #2
    </p>
    <h2 id="concept3">Concept #3: Primary Structure Placement</h2>
    <p>Terrans have an advantage which allows them to move their structures after construction. This comes in handy for slower Terrans, as it allows them to pre-build their Command Centers near the expansion rocks. During this time, they can tech up, build up a small force of units, and use that force to clear the expansion rocks. In general, if you are playing Terran, it is always better to spend your first floating resources on a Supply Depot (to keep being able to produce workers), and then on a Command Center.</p>
    <p>Protoss commanders are not as lucky. The Nexus is solely used for the production of workers, and constructing an additional Nexus, purely for the use of it's Chrono Boost is not recommended. A Protoss commander will have to clear their gas rocks before they put down their Nexus.</p>
    <p>With that in mind, we can now come up with a reasonably decent Nova build.</p>
    <p class="buildOrder">
        14 Refinery<br>
        15 Refinery<br>
        18 SCV -> Expo<br>
        19 Command Center<br>
        20 Barracks<br>
        24 Marines -> Gas -> Main
    </p>
    <p class="buildOrderExp">
        Concept #2<br>
        Concept #2<br>
        Get SCV into position<br>
        Concept #3<br>
        <br>
        Concept #2
    </p>
    <h2 id="concept4">Concept #4: Combat Units</h2>
    <p>As mentioned in the previous section, Protoss commanders do not have the luxury of pre-building their structures and relocating them. Therefore, they will have to resort to the use of their calldowns or army units. For commanders that do not have calldowns that can be used to clear the Expansion, getting army units out as fast as possible with floating resources is vital.</p>
    <p>With that in mind, we can now come up with a reasonably decent Artanis build. Note that this includes all mastery points into the Chrono Boost mastery, as outlined in the <a href="/commanders/artanis">Artanis</a> page.</p>
    <p class="buildOrder">
        Project Power Field<br>
        16 Gateway<br>
        18 Pylon<br>
        19 Assimilator<br>
        20 Assimilator<br>
        22 Zealot -> Expo<br>
        Chrono Gateway<br>
        Project Power Field -> Expo<br>
        25 Zealot<br>
        28 Zealot<br>
        33 Nexus<br>
        34 Cybernetics Core
    </p>
    <p class="buildOrderExp">
        Project Power Field<br>
        Concept #4<br>
        Power requirement<br>
        Concept #2<br>
        Concept #2<br>
        Concept #4<br>
        Concept #4<br>
        Concept #1<br>
        Concept #4<br>
        Concept #4<br>
        <br>
        Core Concept
    </p>
    <h2 id="concept5">Concept #5: Static Defenses</h2>
    <p>Static defense can be used to clear an expansion. Terran commanders should particularly consider this as an option, as static defenses can be salvaged. This means a player simply "locks up" some of their resources for a short amount of time before getting them back again. This is particularly useful for commanders that do not have high tech requirements, or those that require the expansion to prop up an expensive production.</p>
    <p>With that in mind, we can now come up with a reasonably decent Tychus build.</p>
    <p class="buildOrder">
        17 Command Center<br>
        18 Refinery<br>
        19 Refinery<br>
        20 Engineering Bay<br>
        22 2x Turrets -> Rocks
    </p>
    <p class="buildOrderExp">
        Concept #3<br>
        Concept #2<br>
        Concept #2<br>
        Concept #5<br>
        Concept #5
    </p>
    <h2 id="theory">Theory: Mining Rates</h2>
    <p>Each Worker mines roughly 40 resources (minerals or gas) per minute. Let's examine what happens when we assign different numbers of workers to a single patch of resources.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Workers</th>
                <th>Expected Gather Rate</th>
                <th>Actual Gather Rate</th>
                <th>Efficiency</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>40/min</td>
                <td>40/min</td>
                <td>100%</td>
            </tr>
            <tr>
                <td>2</td>
                <td>80/min</td>
                <td>80/min</td>
                <td>100%</td>
            </tr>
            <tr>
                <td>3</td>
                <td>120/min</td>
                <td>104/min</td>
                <td>87%</td>
            </tr>
        </tbody>
    </table>
    <p>At first glance, this drop-off seems odd. So let's look at what workers do when they harvest a resource. The logic applies to both, minerals and gas, but as workers tend to stack when harvesting minerals, we will examine workers harvesting Vespene, which makes the cause much easier to see.</p>
    <img src="/images/buildorder/2workermining.gif" alt="2 Worker Mining Animation">
    <img src="/images/buildorder/3workermining.gif" alt="3 Worker Mining Animation">
    <p>Notice that there is a Probe that sits idle on the 3-Working Mining (right) for a short period of time. You might guess that mineral patches may have different mining rates, depending on the small variation in distance between them and the Primary Structure, and you'd be correct.</p>
    <p>Workers mine at approximately 40 minerals per minute for the first two workers, when none are idle. When the third worker is added, the distance of the patch becomes a factor. The below table gives a rough idea for the mining rate increase provided by last worker.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Distance</th>
                <th>Mining Increase</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Far</td>
                <td>30</td>
            </tr>
            <tr>
                <td>Near</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    <p>This is important because there are two gather rates in the game. An <i>Optimal Gather Rate</i>, where all workers are gathering resources at 100% efficiency, and a <i>Maximum Gather Rate</i>, where workers are gathering resources at the fastest possible rate allowable. The number displayed above your Primary Structure relates to the Maximum Mining Rate. Assigning more workers to the resource patches will not yield gains. That is, it is assigning 3 workers per resource patch. Additionally, the gather efficiencies on saturated (3 worker) resource patches are affected by <i>distance</i> to the Primary Structure. The shorter the distance, the more idle time workers have, and the less efficient their mining.</p>
    <p>This knowledge can help players optimize their builds. Players can choose to go only produce workers to reach the Optimal Gather Rate at the start of their build, freeing up resources to tech up, build an army, or expand, before going up to the Maximum Gather Rate. Note that you should always aim to reach full saturation on both your bases. <i>When</i> you reach that saturation will be up to you to decide. The sooner, the better.</p>
    <p>One additional note: because mineral patches are at different distances from the primary structure, the Maximum Gather Rate will require a slightly lower number of workers than then three workers per patch. Usually, a 19/21 saturation is enough to reach the Maximum Gather Rate.</p>
    <p>Given this information, it is also optimal to transfer workers from a saturated Main base to a freshly-completed Expansion in order to take advantage of the Optimal Gather Rate.</p>
    <p>The following video covers Mining Rates in a lot more detail:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/MdSETBPwXIM" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p>On certain maps, Vespene Geysers may require four workers to reach the maximum mining rate. These geysers are:</p>
    <table>
        <thead>
            <tr>
                <th>Map</th>
                <th>Geyser</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Malwarfare</td>
                <td>Player 1 Expansion (Top-left)</td>
            </tr>
            <tr>
                <td>Miner Evacuation</td>
                <td>Player 1 Expansion (Bottom-Left)<br>Player 2 Expansion (Top-Right)</td>
            </tr>
            <tr>
                <td>Mist Opportunities</td>
                <td>Player 2 Expansion (Bottom-Left)</td>
            </tr>
            <tr>
                <td>Oblivion Express</td>
                <td>Player 1 Main (Top-Left)</td>
            </tr>
            <tr>
                <td>Rifts to Korhal</td>
                <td>Player 1 Main (Bottom-Left)</td>
            </tr>
            <tr>
                <td>Temple of the Past</td>
                <td>Player 1 Main (Bottom-Left)<br>Player 1 Expansion (Top-left)<br>Player 2 Expansion (Bottom-Left)<br>Player 2 Expansion (Bottom-Right)</td>
            </tr>
            <tr>
                <td>Void Launch</td>
                <td>Player 1 Expansion (Bottom-Left)<br>Player 2 Expansion (Bottom-Right)</td>
            </tr>
            <tr>
                <td>Void Thrashing</td>
                <td>Player 1 Main (Top-Left)<br>Player 1 Expansion (Bottom-left)<br>Player 2 Expansion (Bottom-Right)</td>
            </tr>
        </tbody>
    </table>
    <h2 id="break1">Breaking Concept #3</h2>
    <h3>Macro Hatcheries</h3>
    <p>Certain Zerg commanders, such as <a href="/commanders/kerrigan">Kerrigan</a>, rely on "Macro Hatcheries". These are Hatcheries used solely for the production of larva, instead of relying on Queens, which take up supply. As a result, Kerrigan normally requires several Hatcheries to attain maximum production efficiency. Therefore, Kerrigan can get away with putting down an initial Hatchery next to the gas rocks and start semi-long distance mining from that Hatchery. After the rocks are cleared, a third Hatchery is placed, completing Kerrigan's production and economic requirements.</p>
    <p>Below is a Kerrigan build order, taking advantage of Optimal Gather Rates and Macro Hatcheries.</p>
    <p class="buildOrder">
        14 Overlord<br>
        14 Hatchery<br>
        19 Extractor<br>
        21 Extractor<br>
        24 Hatchery<br>
        28 Spawning Pool<br>
        33 Overlord<br>
        Kerrigan -> Rocks
    </p>
    <p class="buildOrderExp">
        Prevent Supply Block<br>
        Break Concept #3<br>
        Concept #2<br>
        Concept #2<br>
        Break Concept #3<br>
        Core Concept<br>
        Prevent Supply Block<br>
        Kerrigan breaks rocks
    </p>
    <h3>Accelerated Production</h3>
    <p>Commanders like <a href="/commanders/zagara">Zagara</a> and <a href="/commanders/abathur">Abathur</a> have accelerated production. That is, they produce units in large quantities quickly (as is the case for Zagara) or have an accelerated Larva spawn rate (as is the case with Abathur). In these instances, it is better for the player to either forego a macro hatchery entirely (for Abathur) or delay it until the mid-game (Zagara).</p>
    <p>Additionally, because they are able to produce units quickly, they are able to saturate their resource harvesting quickly, adding further importance to taking their expansion quickly. As a result, an optimal Zagara build spawns a few zerglings to clear the rocks, before saturation of the main mineral line. Likewise, Abathur builds two Spine Crawlers to clear the rocks before saturation of the main mineral line.</p>
    <p><a href="/commanders/swann">Swann</a> is another commander that breaks Concept #3 too. One would expect Swann to pre-build his Command Center next to the expansion rocks before breaking them, but there are two factors that make this strategy suboptimal:</p>
    <ol type="1">
        <li>Swann has great turrets that can break the rocks quickly</li>
        <li>Swann can assign multiple SCV's to the same structure to construct it faster</li>
    </ol>
    <p>Thus, what a Swann player has is access to a turret that can be built quickly to take out the rocks, salvage that turret, and then build a Command Center really quickly. Therefore, Concept #5 takes over, due to this unique set of circumstances, which is reflected in the Swann build order:</p>
    <p class="buildOrder">
        14 Supply Depot<br>
        16 Factory (4 SCV's)<br>
        18 Billy (4 SCV's)<br>
        18 Billy (4 SCV's)<br>
        21 Command Center (8 SCV's)
    </p>
    <p class="buildOrderExp">
        Prevent Supply Block<br>
        <br>
        Target main rocks<br>
        and salvage one after<br>
        <br>
    </p>
    <h2 id="break2">Breaking the Core Concept</h2>
    <p>Given the knowledge of Optimal vs. Maximum gather rates, Karax has a very interesting potential build order. Note that this includes all mastery points into the Initial Spear of Adun Energy mastery, as outlined in the <a href="/commanders/karax">Karax</a> page.</p>
    <p class="buildOrder">
        14 Pylon<br>
        14 Probe<br>
        Probe -> Expo<br>
        Orbital Strike -> Expo<br>
        15 Nexus<br>
    </p>
    <p class="buildOrderExp">
        Prevent Supply Block<br>
        Go up to 15 Workers<br>
        Get vision<br>
        20 shots clear rocks<br>
        <br>
    </p>
    <p>This particular build allows you to put your Nexus down at a blazingly fast 1:04 seconds, and is the fastest possible expand for an uncontested expansion in the game. We'll now look at how to compare build orders to one another.</p>
    <h2 id="testing">Testing Build Orders</h2>
    <p>Given the above Karax build, we would like to test it and see how well it fares, as compared to continuosly making Probes until you float 400 minerals for a Nexus.</p>
    <p>The general methodology is to simply go in-game and test it. Execute both build orders perfectly, and see where they get you at a certain amount of time. Make sure to take a full account of structures and extra units created, and adjust your resource values accordingly when doing the comparison.</p>
    <p>A cutoff point of between 6:00 and 7:00 is normally chosen for the test, as those are key points in the game: the start of the mid-game. This point in time will transition you into more difficult attack waves and objectives. This time also ensures both Primary Structures have reached saturation. This means that resource gains henceforth will be exactly the same per minute.</p>
    <p>For the Karax build above, we'll test it at the 6:30 mark. For simplicity, we won't be building any tech structures, and only enough Pylons to ensure we do not get supply-blocked.</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Build</th>
                <th>Nexus Down</th>
                <th>Full Saturation</th>
                <th>Minerals</th>
                <th>Gas</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ultra-fast</td>
                <td>1:04</td>
                <td>5:25</td>
                <td>6150</td>
                <td>1788</td>
            </tr>
            <tr>
                <td>Normal</td>
                <td>1:39</td>
                <td>5:35</td>
                <td>6550</td>
                <td>1488</td>
            </tr>
        </tbody>
    </table>
    <p>It is always important to report your saturation time. This is because it means all your income can now be spent on either army or tech units, rather than improving the economy. Additionally, you should always separate mineral and gas collected, as builds may gather the same <i>quantity</i> of resources, but in vastly different ratios.</p>
    <p>Testing build orders is a laborious process. Make sure you repeat the exact build multiple times. If you make any mistakes (assigning a worker to the wrong resource, delaying worker production, etc.), you should restart and try again.</p>
    <h2 id="constructing">Constructing Build Orders</h2>
    <p>Given all the concepts and theory, we will now construct and fine-tune a build order for Alarak. The methodology will be as follows:</p>
    <ol type="1">
        <li>Expand Method</li>
        <li>Monitor resource counts in a basic build</li>
        <li>Minimize resource float</li>
    </ol>
    <p>We can repeat step #3 above until we have tightented the build order so as to have almost no resources floating. We can also use it to see if we should allocate our workers to different resources instead.</p>
    <h3>Expand Method</h3>
    <p>As per Concept #1, we want to use calldowns if possible. Alarak has a great calldown for this: his Structure Overcharge. From the <a href="/commanders/alarak">Alarak</a> page, we know that the Structure Overcharge will be available at 90 seconds.</p>
    <p>The next question is, what structure do we want to use to expand? A Pylon is the obvious go-to choice here, as it is both cheap, and required in the early game. Therefore, you won't be wasting resources on structures you don't need.</p>
    <p>Next, we ask the question: "Will this be the first Pylon we construct? Or will this be a new pylon?". The first Pylon we construct will be very early the in game (at roughly 0:25). Sending a probe to construct the Pylon and then wait there (you will need to maintain vision of the expansion) is extremely wasteful. Therefore, we will construct a new pylon and overcharge that.</p>
    <p>So we now have a plan. Put down a Pylon near the main. Wait until Structure Overcharge is almost ready. Send a Probe over to the expansion. Put a Pylon down and overcharge it instantly. Once the rocks are clear, put down the Nexus. We now execute this build and monitor our resources (listing the timing we get an extra 50 resources of each type floating).</p>
    <h3>Monitor resource counts in a basic build</h3>
    <p>The build we will be executing is this:</p>
    <p class="buildOrder">
        14 Pylon<br>
        18 Pylon at rocks<br>
        Overcharge<br>
        20 Nexus
    </p>
    <p>After executing this build perfectly, and monitoring the resource floats, we get a table like this:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Time</th>
                <th>Mineral Float</th>
                <th>Gas Float</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0:37</td>
                <td>50</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:41</td>
                <td>100</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:47</td>
                <td>150</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:54</td>
                <td>150</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:58</td>
                <td>200</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:03</td>
                <td>250</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:09</td>
                <td>250</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:13</td>
                <td>300</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:19</td>
                <td>300</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:24</td>
                <td>350</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:29</td>
                <td>400</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:34</td>
                <td>300</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:40</td>
                <td>350</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:44</td>
                <td>400</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:49</td>
                <td>400</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:55</td>
                <td>500</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2:00</td>
                <td>500</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2:01</td>
                <td>100</td>
                <td>0</td>
            </tr>
        </tbody>
    </table>
    <p>At the 2-minute mark, a Nexus is put down, leaving a float of 100 minerals.</p>
    <h3>Minimize Resource Float</h3>
    <p>We are now in a position to optimize resource float. Remember that we need to "float" 400 minerals by the time the rocks are cleared so we can put down the Nexus. Anything extra is actual resource float. Since we are floating 100 minerals at the end of the build, opting to invest in Tech is not viable. The tech does not help use clear the expansion any faster. So instead, we should opt to invest in economy instead. Therefore, we should build an Assimilator whenever we are able to do so without affecting our Probe production.</p>
    <p>We can get the exact timing this happens on: the point in the table where all resource floats are always above the 75 minerals required to build the Assimilator. This occurs at 0:41. From that point, we subtract 75 minerals from all the subsequent rows. We then repeat this process to optimize. Remember that once you reassign workers, you will need to re-run the build and re-collect the resource float values. A full example is shown below:</p>
    <div class="tableContainer">
        <table class="centered">
            <tr>
                <td colspan="3">
                    <p class="tableBuildOrder">
                        14 Pylon<br>
                        18 Pylon<br>
                        Overcharge<br>
                        20 Nexus<br>
                        Probes->Assimilator
                    </p>
                </td>
                <td></td>
                <td colspan="3">
                    <p class="tableBuildOrder">
                        14 Pylon<br>
                        15 Assimilator<br>
                        18 Pylon<br>
                        Overcharge<br>
                        20 Nexus<br>
                        Probes->Assimilator
                    </p>
                </td>
                <td></td>
                <td colspan="3">
                    <p class="tableBuildOrder">
                        14 Pylon<br>
                        15 Assimilator<br>
                        18 Pylon<br>
                        Overcharge<br>
                        20 Nexus<br>
                        Probes->Assimilator<br>
                        21 Assimilator
                    </p>
                </td>
            </tr>
            <tr>
                <th>Time</th>
                <th>Mineral Float</th>
                <th>Gas Float</th>
                <th></th>
                <th>Time</th>
                <th>Mineral Float</th>
                <th>Gas Float</th>
                <th></th>
                <th>Time</th>
                <th>Mineral Float</th>
                <th>Gas Float</th>
            </tr>
            <tr>
                <td>0:37</td>
                <td>50</td>
                <td>0</td>
                <td></td>
                <td>0:37</td>
                <td>50</td>
                <td>0</td>
                <td></td>
                <td>0:37</td>
                <td>50</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:41</td>
                <td>100</td>
                <td>0</td>
                <td></td>
                <td>0:41</td>
                <td>25</td>
                <td>0</td>
                <td></td>
                <td>0:41</td>
                <td>25</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:47</td>
                <td>150</td>
                <td>0</td>
                <td></td>
                <td>0:47</td>
                <td>75</td>
                <td>0</td>
                <td></td>
                <td>0:47</td>
                <td>75</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:54</td>
                <td>150</td>
                <td>0</td>
                <td></td>
                <td>0:54</td>
                <td>75</td>
                <td>0</td>
                <td></td>
                <td>0:54</td>
                <td>75</td>
                <td>0</td>
            </tr>
            <tr>
                <td>0:58</td>
                <td>200</td>
                <td>0</td>
                <td></td>
                <td>0:58</td>
                <td>125</td>
                <td>0</td>
                <td></td>
                <td>0:58</td>
                <td>125</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:03</td>
                <td>250</td>
                <td>0</td>
                <td></td>
                <td>1:03</td>
                <td>175</td>
                <td>0</td>
                <td></td>
                <td>1:03</td>
                <td>175</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:09</td>
                <td>250</td>
                <td>0</td>
                <td></td>
                <td>1:09</td>
                <td>175</td>
                <td>0</td>
                <td></td>
                <td>1:09</td>
                <td>175</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:13</td>
                <td>300</td>
                <td>0</td>
                <td></td>
                <td>1:13</td>
                <td>225</td>
                <td>0</td>
                <td></td>
                <td>1:13</td>
                <td>225</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:19</td>
                <td>300</td>
                <td>0</td>
                <td></td>
                <td>1:19</td>
                <td>225</td>
                <td>0</td>
                <td></td>
                <td>1:19</td>
                <td>225</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:24</td>
                <td>350</td>
                <td>0</td>
                <td></td>
                <td>1:24</td>
                <td>275</td>
                <td>0</td>
                <td></td>
                <td>1:24</td>
                <td>275</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:29</td>
                <td>400</td>
                <td>0</td>
                <td></td>
                <td>1:29</td>
                <td>325</td>
                <td>0</td>
                <td></td>
                <td>1:29</td>
                <td>325</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:34</td>
                <td>300</td>
                <td>0</td>
                <td></td>
                <td>1:34</td>
                <td>225</td>
                <td>0</td>
                <td></td>
                <td>1:34</td>
                <td>225</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:40</td>
                <td>350</td>
                <td>0</td>
                <td></td>
                <td>1:40</td>
                <td>275</td>
                <td>0</td>
                <td></td>
                <td>1:40</td>
                <td>275</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:44</td>
                <td>400</td>
                <td>0</td>
                <td></td>
                <td>1:44</td>
                <td>325</td>
                <td>0</td>
                <td></td>
                <td>1:44</td>
                <td>325</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:49</td>
                <td>400</td>
                <td>0</td>
                <td></td>
                <td>1:49</td>
                <td>325</td>
                <td>0</td>
                <td></td>
                <td>1:49</td>
                <td>325</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1:55</td>
                <td>450</td>
                <td>0</td>
                <td></td>
                <td>1:55</td>
                <td>375</td>
                <td>0</td>
                <td></td>
                <td>1:55</td>
                <td>375</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2:00</td>
                <td>500</td>
                <td>0</td>
                <td></td>
                <td>2:00</td>
                <td>425</td>
                <td>0</td>
                <td></td>
                <td>2:00</td>
                <td>425</td>
                <td>0</td>
            </tr>
            <tr>
                <td>2:01</td>
                <td>100</td>
                <td>0</td>
                <td></td>
                <td>2:01</td>
                <td>100</td>
                <td>0</td>
                <td></td>
                <td>2:01</td>
                <td>25</td>
                <td>0</td>
            </tr>
            <tr>
                <td colspan="3">This is the basic build. Single Pylon to prevent a supply block and another Pylon to overcharge and clear the expansion.</td>
                <td></td>
                <td colspan="3">To minimize float before the Expansion is taken, we put down an Assimilator as early as possible. We do not put Probes on that Assimilator, because we still need the minerals to build the Nexus.</td>
                <td></td>
                <td colspan="3">After the Nexus comes down, we float 100 more minerals. We can choose to wait to build a Gateway, or strengthen our economy by putting down another Assimilator. Here, an Assimilator is put down.</td>
        </table>
    </div>
    <h2 id="closing">Closing Notes</h2>
    <p>The build orders presented and demonstrated on this page work well for maps with an uncontested expansion. That is, there are no enemy forces guarding the expansion. Players will have to modify their builds accordingly to account for any enemy forces at the expansion. The degree to which the build has to be modified depends on the type and quantity of forces present.</p>
    <p>It is because of this that following build orders blindly without consideration of why certain actions are taken is not recommended. Players can get a lot more value out of build orders if they understand the core theory behind it - something which this guide aims to do.</p>
    <p>At the end of the day, taking an expansion and saturating it as fast as possible will yield the best possible results. How to do that, given a set of circumstances, whether it is a mission or a mutator, is up to the player.</p>
    <p>Build orders are mostly tried and tested several times before an optimal build order is achieved. Players are advised to constantly question and attempt to fine-tune their build orders if they wish to arrive at a perfectly optimal build.</p>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
