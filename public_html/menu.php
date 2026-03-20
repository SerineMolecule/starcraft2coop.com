<?php
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
?>

<ul>
    <li class=<?php if(basename($_SERVER['PHP_SELF'])==="index.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/">&#127968;</a></li>
    <li class=<?php if(strpos($url,'commanders') !== false){echo'"highlight"';}else{echo'"normal"';}?>><a href="/" onclick="javascript:openSubmenu(event,'commanders');">Commanders</a></li>
    <li class="normal"><a href="/" onclick="javascript:openSubmenu(event,'community');">Community</a></li>
    <li class="normal"><a href="/" onclick="javascript:openSubmenu(event,'guides');">Guides</a></li>
    <li class=<?php if(strpos($url,'missions') !== false){echo'"highlight"';}else{echo'"normal"';}?>><a href="/" onclick="javascript:openSubmenu(event,'missions');">Missions</a></li>
    <li class="normal"><a href="/" onclick="javascript:openSubmenu(event,'resources');">Resources</a></li>
    <li class="normal"><a href="/" onclick="javascript:openSubmenu(event,'tools');">Tools</a></li>
    <li class="normal"><a href="/" onclick="javascript:openSubmenu(event,'about');">About</a></li>
    <li class=<?php if(basename($_SERVER['PHP_SELF'])==="account.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/account">My&nbsp;Account</a></li>
</ul>
<div id="container">
    <div id="commanderList" class="submenu">
        <a href="/commanders/raynor"><img src="/images/commanderportraits/raynorportrait.png" alt="Raynor Portrait"></a>
        <a href="/commanders/kerrigan"><img src="/images/commanderportraits/kerriganportrait.png" alt="Kerrigan Portrait"></a>
        <a href="/commanders/artanis"><img src="/images/commanderportraits/artanisportrait.png" alt="Artanis Portrait"></a>
        <a href="/commanders/swann"><img src="/images/commanderportraits/swannportrait.png" alt="Swann Portrait"></a>
        <a href="/commanders/zagara"><img src="/images/commanderportraits/zagaraportrait.png" alt="Zagara Portrait"></a>
        <a href="/commanders/vorazun"><img src="/images/commanderportraits/vorazunportrait.png" alt="Vorazun Portrait"></a>
        <a href="/commanders/karax"><img src="/images/commanderportraits/karaxportrait.png" alt="Karax Portrait"></a>
        <a href="/commanders/abathur"><img src="/images/commanderportraits/abathurportrait.png" alt="Abathur Portrait"></a>
        <a href="/commanders/alarak"><img src="/images/commanderportraits/alarakportrait.png" alt="Alarak Portrait"></a>
        <a href="/commanders/nova"><img src="/images/commanderportraits/novaportrait.png" alt="Nova Portrait"></a>
        <a href="/commanders/stukov"><img src="/images/commanderportraits/stukovportrait.png" alt="Stukov Portrait"></a>
        <a href="/commanders/fenix"><img src="/images/commanderportraits/fenixportrait.png" alt="Fenix Portrait"></a>
        <a href="/commanders/dehaka"><img src="/images/commanderportraits/dehakaportrait.png" alt="Dehaka Portrait"></a>
        <a href="/commanders/horner"><img src="/images/commanderportraits/hornerportrait.png" alt="Han & Horner Portrait"></a>
        <a href="/commanders/tychus"><img src="/images/commanderportraits/tychusportrait.png" alt="Tychus Portrait"></a>
        <a href="/commanders/zeratul"><img src="/images/commanderportraits/zeratulportrait.png" alt="Zeratul Portrait"></a>
        <a href="/commanders/stetmann"><img src="/images/commanderportraits/stetmannportrait.png" alt="Stetmann Portrait"></a>
        <a href="/commanders/mengsk"><img src="/images/commanderportraits/mengskportrait.png" alt="Mengsk Portrait"></a>
    </div>
    <div id="missionList" class="submenu">
        <a href="/missions/chainofascension"><img src="/images/missionthumbnails/chainofascension.png" alt="Chain of Ascension Thumbnail"></a>
        <a href="/missions/cradleofdeath"><img src="/images/missionthumbnails/cradleofdeath.png" alt="Cradle of Death Thumbnail"></a>
        <a href="/missions/deadofnight"><img src="/images/missionthumbnails/deadofnight.png" alt="Dead of Night Thumbnail"></a>
        <a href="/missions/lockload"><img src="/images/missionthumbnails/lockload.png" alt="Lock & Load Thumbnail"></a>
        <a href="/missions/malwarfare"><img src="/images/missionthumbnails/malwarfare.png" alt="Malwarfare Thumbnail"></a>
        <a href="/missions/minerevacuation"><img src="/images/missionthumbnails/minerevacuation.png" alt="Miner Evacuation Thumbnail"></a>
        <a href="/missions/mistopportunities"><img src="/images/missionthumbnails/mistopportunities.png" alt="Mist Opportunities Thumbnail"></a>
        <a href="/missions/oblivionexpress"><img src="/images/missionthumbnails/oblivionexpress.png" alt="Oblivion Express Thumbnail"></a>
        <a href="/missions/partparcel"><img src="/images/missionthumbnails/partparcel.png" alt="Part & Parcel Thumbnail"></a>
        <a href="/missions/riftstokorhal"><img src="/images/missionthumbnails/riftstokorhal.png" alt="Rifts to Korhal Thumbnail"></a>
        <a href="/missions/scytheofamon"><img src="/images/missionthumbnails/scytheofamon.png" alt="Scythe Of Amon Thumbnail"></a>
        <a href="/missions/templeofthepast"><img src="/images/missionthumbnails/templeofthepast.png" alt="Temple of the Past Thumbnail"></a>
        <a href="/missions/thevermillionproblem"><img src="/images/missionthumbnails/thevermillionproblem.png" alt="The Vermillion Problem Thumbnail"></a>
        <a href="/missions/voidlaunch"><img src="/images/missionthumbnails/voidlaunch.png" alt="Void Launch Thumbnail"></a>
        <a href="/missions/voidthrashing"><img src="/images/missionthumbnails/voidthrashing.png" alt="Void Thrashing Thumbnail"></a>
    </div>
    <div id="guideList" class="submenu">
        <ul>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="buildordertheory.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/guides/buildordertheory">Build&nbsp;Order&nbsp;Theory</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="enemycomps.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/guides/enemycomps">Enemy&nbsp;Compositions</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="generaltips.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/guides/generaltips">General&nbsp;Tips</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="newplayer.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/guides/newplayer">New&nbsp;Players&nbsp;</a></li>
        </ul>
    </div>
    <div id="resources" class="submenu">
        <ul>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="achievements.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/achievements">Achievements</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="ailogic.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/ailogic">AI&nbsp;Logic</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="bugs.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/bugs">Bugs</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="brutal.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/brutal">Brutal+</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="deathprevention.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/deathprevention">Death&nbsp;Prevent&nbsp;Effects</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="eastereggs.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/eastereggs">Easter&nbsp;Eggs</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="levels.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/levels">Levels</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="mutators.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/mutators">Mutators</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="patchdata.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/patchdata">Patch&nbsp;Data</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="stats.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/stats">Stats</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="weeklymutations.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/resources/weeklymutations">Weekly&nbsp;Mutations</a></li>
            
        </ul>
    </div>
    <div id="tools" class="submenu">
        <ul>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="downloads.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/tools/downloads">Downloads</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="masterybreakpoints.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/tools/masterybreakpoints">Mastery&nbsp;Breakpoints</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="replayanalyzer.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/tools/replayanalyzer">Replay&nbsp;Analyzer</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="unitstats.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/tools/unitstats">Unit&nbsp;Stats</a></li>
        </ul>
    </div>
    <div id="community" class="submenu">
        <ul>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="tournament.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/community/tournament/main">Co&#8209;op&nbsp;Tournament</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="gamespotlight.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/community/gamespotlight">Game&nbsp;Spotlight</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="mythbusters.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/community/mythbusters">Mythbusters</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="rockslappingchampions.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/community/rockslappingchampions">Rockslapping&nbsp;Champions</a></li>
            <li class="normal"><a href="/youtube">Youtube</a></li>
        </ul>
    </div>
    <div id="about" class="submenu">
        <ul>
            <!--<li class=<?php if(basename($_SERVER['PHP_SELF'])==="contact.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/about/contact">Contact</a></li>-->
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="faq.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/about/faq">FAQ</a></li>
            <li class=<?php if(basename($_SERVER['PHP_SELF'])==="links.php"){echo'"highlight"';}else{echo'"normal"';}?>><a href="/about/links">Links</a></li>
            <li class="normal"><a href="https://www.youtube.com/c/Starcraft2Coop" rel="nofollow">Youtube</a></li>
        </ul>
    </div>
    <!--<div id="imgs">
        <a href="https://www.youtube.com/c/Starcraft2Coop" rel="nofollow"><img src="/images/links/yt.png" alt="Youtube"></a>
        <a href="https://www.patreon.com/starcraft2coop" rel="nofollow"><img src="/images/links/patreon.png" alt="Patreon"></a>
        <a href="https://www.twitch.tv/aommaster" rel="nofollow"><img src="/images/links/twitch.png" alt="Twitch"></a>
        <a href="https://discord.gg/AbFXRAB" rel="nofollow"><img src="/images/links/discord.png" alt="Discord"></a>
    </div>-->
</div>
<script>
    function openSubmenu(event, selection){
        event.preventDefault();
        
        switch (selection){
            case "commanders":
                $(".submenu").not("#commanderList").hide();
                $("#commanderList").fadeToggle();
                break;
            case "missions":
                $(".submenu").not("#missionList").hide();
                $("#missionList").fadeToggle();
                break;
            case "community":
                $(".submenu").not("#community").hide();
                $("#community").fadeToggle();
                break;
            case "guides":
                $(".submenu").not("#guideList").hide();
                $("#guideList").fadeToggle();
                break;
            case "resources":
                $(".submenu").not("#resources").hide();
                $("#resources").fadeToggle();
                break;
            case "tools":
                $(".submenu").not("#tools").hide();
                $("#tools").fadeToggle();
                break;
            case "about":
                $(".submenu").not("#about").hide();
                $("#about").fadeToggle();
                break;
        }
    }
</script>