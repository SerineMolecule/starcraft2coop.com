<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - General Tips for Co-op Players</title>
  <meta name="description" content="Improve your Co-op gameplay with these simple tips, made for players of all skill levels. Beginners and Veterans can all benefit.">
  <meta name="keywords" content="Starcraft Co-op General Tips ">
  <link rel="canonical" href="https://starcraft2coop.com/guides/generaltips">
  <style>
        .hotkeysFile{
            font-family:"Courier New", Courier, monospace;
            background-color:steelblue;
            display:inline-block;
            padding:10px;
        }
        .subgroup{
            text-indent:10px;
        }
  </style>
  <?= startContent() ?>
    <h1>General Tips For Co-op Players</h1>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#tips1">Tips for Beginners</a></p>
        <p class="subgroup"><a href="#overproduction">Avoid Overproduction</a></p>
        <p class="subgroup"><a href="#minimap">Learn the Minimap Icons</a></p>
        <p class="subgroup"><a href="#usehero">Use Your Hero Unit</a></p>
        <p class="subgroup"><a href="#usetopbar">Use Your Topbar Abilities</a></p>

        <p><a href="#tips2">Tips for Intermediate Players</a></p>
        <p class="subgroup"><a href="#adapt">Adapt to the Enemy Composition and Map</a></p>
        <p class="subgroup"><a href="#aggressive">Aggressive Play is Rewarded</a></p>
        <p class="subgroup"><a href="#bindrapidfire">Bind Rapidfire</a></p>
        <p class="subgroup"><a href="#expand">Expand As Fast As Possible</a></p>

        <p><a href="#tips3">Tips for Veterans</a></p>
        <p class="subgroup"><a href="#armor">Armor Upgrades</a></p>
        <p class="subgroup"><a href="#checkingcreep">Checking Creep</a></p>
        <p class="subgroup"><a href="#knowledge">Knowledge is Power</a></p>
        <p class="subgroup"><a href="#attacktypes">Note the Different Attack Types</a></p>
        <p class="subgroup"><a href="#workercounts">Worker Counts</a></p>

    </div>
    <h2 id="tips1">Tips for Beginners</h2>
    <h3 id="overproduction">Avoid Overproduction</h3>
    <p>Queueing up several units/structures, and overproducing structures can tie up vital resources you need, especially during the early stage of the game. For example:</p>
    <img src="/images/newplayer/overproduction.jpg" alt="Overproduction">
    <p>In the image above, the six queued up Laborers account for 240 minerals spent that isn't being used. Additionally, the 11 queued up Supply Bunkers costed 1100 minerals, but none are being built. Most of all, the player will be unable to use all that extra supply. In total, the 12 Supply Bunkers account for 144 Supply - too much supply to be utilized. Build only what you need, and spend the rest of your resources teching up and making your army larger.</p>
    <p>Additionally, make sure you will have adequate resources to spend once the structure is complete. For example, don't build Tech structures if you do not have the gas to spend to use it.</p>
    <h3 id="minimap">Learn the Minimap Icons</h3>
    <p>Your minimap provides you with critical information throughout the course of the mission. Use it to evaluate your position and what is going on around the map.</p>
    <img src="/images/newplayer/minimapicons.jpg" alt="Minimap Icons">
    <h3 id="usehero">Use Your Hero Unit</h3>
    <p>Certain commanders (such as <a href="/commanders/kerrigan">Kerrigan</a>) spawn a Hero unit. These Hero units are extremely powerful and should be used as much as possible, especially during the early game. They provide the player with early-game power to allow them to push and complete objectives, while macro'ing up at the back to tech up and gain access to high-tier units.</p>
    <h3 id="usetopbar">Use Your Topbar Abilities</h3>
    <p>Topbar Abilities provide players with a large amount of power throughout the course of the game. Use these Topbars to help you push and take engagements. They should be used as soon as they are off cooldown, as frequently as possible. You can time your pushes to line up with when powerful Topbar abilities come off cooldown.</p>
    <h2 id="tips2">Tips for Intermediate Players</h2>
    <h3 id="adapt">Adapt to the Enemy Composition and Map</h3>
    <p>It is important to learn the units that make up various Attack Waves that will attack players. Check the <a href="/guides/enemycomps">Enemy Compositions</a> page to learn about the various enemy compositions in the game. Use that knowledge to build an army that directly counters that composition while allowing you to push and complete the objectives in the game.</p>
    <h3 id="aggressive">Aggressive Play is Rewarded</h3>
    <p>Enemy bases can seem very intimidating, discouraging players from pushing in when they're not required to do so. However, playing aggressively can make missions easier by providing players with access to enemy wave spawn points. Players can then use Topbar abilities (such as <a href="/commanders/abathur">Abathur's</a> Toxic Nests) to spawn-camp attack waves.</p>
    <h3 id="bindrapidfire">Bind Rapidfire</h3>
    <p>Rapidfire binds the selection of a skill (through its hotkey) and its targeting to the same hotkey. This means in order to cast a skill, you need to press its hotkey once (to select it) and then once more to target it at your cursor's current position.</p>
    <p>Rapidfire has its advantages, because it allows you to cast skills in quick succession. This is very important for commanders like <a href="/commanders/alarak">Alarak</a>, who depends on Rapidfire for his Ascendant abilities. Without Rapidfire, skills like Mind Blast would be ineffective due to the high amount of clicking required.</p>
    <p>Rapidfire is also used for Protoss warp-ins. In order to warp in units quickly, you'd want to bind Rapidfire to your warp in units hotkeys.</p>
    <p>Rapidfire cannot be bound in-game. You will need to manually edit the hotkey settings file in order to do so. This is because the game can only bind one key to Rapidfire. Generally, you'll want a lot more to make it effective.</p>
    <p>To find the hotkey settings file, navigate to: My Documents\Starcraft II\Accounts\[Random Number]\Hotkeys</p>
    <p>You will see a [Your Username].SC2Hotkeys file. Open it in Notepad. If you do not see the file, make sure you have created a custom hotkey profile in-game first.</p>
    <p>That file will look something like this:</p>
    <p class="hotkeysFile">[Settings]<br><br>[Hotkeys]<br><br>[Commands]<br>HHBomberAreaBomb/HHBomberPlatform=</p>
    <p>Under the [Hotkeys] section, add the following line:</p>
    <p class="hotkeysFile">TargetChoose=LeftMouseButton,Z</p>
    <p>Your hotkeys file should look like this now:</p>
    <p class="hotkeysFile">[Settings]<br><br>[Hotkeys]<br>TargetChoose=LeftMouseButton,Z<br><br>[Commands]<br>HHBomberAreaBomb/HHBomberPlatform=</p>
    <p>Once you save the file, you would have bound the "Z" key to rapidfire. To test it, play Protoss, and warp in a Zealot (assuming other hotkeys are default). But instead of clicking the location you'd like to warp the Zealot in, just press the Z key again. The Zealot will be warped in.</p>
    <p>You may add as many keys as you'd like, separated by commas to the "TargetChoose" setting to bind additional keys to Rapidfire.</p>
    <p>A video on Rapidfire is below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/SxXmfRhY6m8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h3 id="expand">Expand As Fast As Possible</h3>
    <p>Some missions in co-op have uncontested expansions, while others might be guarded. Regardless, you should always aim to take your expansion as quickly as possible. Certain commanders (like <a href="/commanders/mengsk">Mengsk</a>) have ways of capturing expansions unusually early in the game (these are called "Fast-Expand Techniques"). Learn them to strengthen your early-game economy. If you are playing Terran, pre-build your Expansion Commander Center and float it over once you clear the defenders/rocks.</p>
    <h2 id="tips3">Tips for Veterans</h2>
    <h3 id="armor">Armor Upgrades</h3>
    <p>In Versus games, armor is a critical part of a player's macro, as without it, they end up taking much less efficient trades in battle. However, due to the unique nature of Co-op, armor upgrades are not that important because:</p>
    <ul>
        <li>Calldowns reduce the damage an army takes by eliminating high-threat targets, protecting the army or debuffing enemies</li>
        <li>Most enemy units that deal damage to a player's army are spellcasters</li>
        <li>Player armies become large deathballs in the lategame, killing enemy units before they take significant damage</li>
    </ul>
    <p>There are some cases where a player should invest in armor upgrades, such as:</p>
    <ul>
        <li>They are cheap (<a href="/commanders/kerrigan">Kerrigan</a>)</li>
        <li>They provide additional bonuses such as extra HP (<a href="/commanders/raynor">Raynor</a>, <a href="/commanders/tychus">Tychus</a>)</li>
    </ul>
    <p>A video that explains this in more detail is below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/IsPSXlj8Nh8" allow="autoplay; encrypted-media" allowfullscreen></iframe>

    <h3 id="checkingcreep">Checking Creep</h3>
    <p>Checking creep for the presence of Zerg can allow you to adjust your opening to better counter the potential attack waves you will face at the start of the mission. Press Alt+T. This changes the minimap to a Terrain view. If you see creep, you'll be facing a Zerg composition. If you don't see creep, you'll be facing a Protoss or a Terran composition. The below image shows you an example:</p>
    <img src="/images/newplayer/creepminimap.jpg" alt="Creep on Minimap">
    <p>Note that for <a href="/missions/scytheofamon">Scythe of Amon</a>, creep will <i>always</i> be present. However, the <i>positions</i> of the creep will allow you to uniquely identify which enemy race you'll be playing against.</p>
    <h3 id="knowledge">Knowledge is Power</h3>
    <p>In Co-op, knowledge of the game mode can significantly reduce the challenges that new players face. While some interactions between Co-op mechanics are rare, good Co-op players should at least be aware of:</p>
    <ul>
        <li>Mission Timings (most importantly, the first attack wave)</li>
        <li><a href="/guides/enemycomps">Enemy Compositions</a></li>
        <li><a href="/guides/enemycomps">Hybrid Types</a>, their abilities and their start locations on the map</li>
        <li>Attack Wave Spawn points</li>
        <li>Commander Fast-Expand techniques (like <a href="/commanders/zeratul">Zeratul</a>)</li>
        <li>Commander Topbars</li>
        <li>Commander Passives</li>
    </ul>
    <h3 id="attacktypes">Note the Different Attack Types</h3>
    <p>In Co-op, Point Defense Drones and Point Defense Missiles frequently appear, which can affect your effectiveness in a mission, especially when dealing with <a href="/resources/mutators">Mutators</a>. It is important to be aware of what Hitscan and Projectile attacks are and what the difference between them is.</p>
    <p>These terms refer to the types of attack a unit has and may be a factor in unit selection against certain <a href="/resources/mutators">mutators</a> such as Missile Command.</p>
    <p>In short, a Hitscan attack deals damage as soon as it is fired. A Projectile attack has a physcial projectile that must travel to its target to deal damage. For more details on the differences, you can watch the video below:</p>
    <iframe width="475" height="268" src="https://www.youtube.com/embed/OKg_hJ-ldD8" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <h3 id="workercounts">Worker Counts</h3>
    <p>In Versus games, the worker count displayed at the top of the Primary Structure denotes the worker count that corresponds to the Optimal mining rate. However, in Co-op, the value denotes the Maximum mining rate. More information on these mining rates can be found in the <a href="/guides/buildordertheory">Build Order Theory</a> Guide.</p>
    <img src="/images/newplayer/workercounts.jpg" alt="Worker Counts">
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
