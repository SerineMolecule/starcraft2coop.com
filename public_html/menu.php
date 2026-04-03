<?php
$url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
$pageFile = basename($_SERVER['PHP_SELF']);
$pageSection = basename(dirname($_SERVER['PHP_SELF']));
if ($pageSection === 'tournament') {
    $pageFile = 'tournament.php';
    $pageSection = basename(dirname(dirname($_SERVER['PHP_SELF'])));
}
if (!$pageSection) {
    $pageSection = 'index';
}

?>
<header id="header">
    <img src="/images/starcraft2coop.png" alt="Starcraft II Co-op">
</header>
<?php
if ($_SERVER['SERVER_NAME'] === 'dev.starcraft2coop.com') {
    ?>
<style>
.construction {
    border: 15px solid transparent;
    padding: 5px 10px;
    background: #d9ca28;
    /* opera doesn't support single-arg linear-gradient */
    background-image: linear-gradient(#d9ca28, #d9ca28), repeating-linear-gradient(
        -45deg,
        #d9ca28,
        #d9ca28 10px,
        #292824 10px,
        #292824 20px
    );
    background-origin: border-box;
    background-clip: padding-box, border-box;

    padding: 10px 15px;
    font-weight: bold;
    color: black;

    font-family: 'Convergence', sans-serif;
    font-size: 1.5em;
    margin: 0 auto 20px;
    max-width: 1000px;
}
</style>
<div class="construction">
    THIS IS THE TEST SITE. (<a href="https://starcraft2coop.com">Go to the real site</a>)
</div>
    <?php
}
?>
<nav id="menu">
<ul id="topmenu">
    <li class="<?=$pageSection === "index" ? 'highlight' : 'normal'?>"><a href="/" aria-label="Home" title="Home"><i class="fas fa-home" aria-hidden="true"></i></a></li>
    <li class="<?=$pageSection === "commanders" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-commanders">Commanders</a></li>
    <!--li class="<?=$pageSection === "community" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-community">Community</a></li-->
    <li class="<?=$pageSection === "guides" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-guides">Guides</a></li>
    <li class="<?=$pageSection === "missions" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-missions">Missions</a></li>
    <li class="<?=$pageSection === "resources" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-resources">Resources</a></li>
    <li class="<?=$pageSection === "tools" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-tools">Tools</a></li>
    <li class="<?=$pageSection === "about" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-about">About</a></li>
</ul>
<div id="container">
    <div id="commanderList" class="submenu">
        <a href="/commanders/raynor" class="<?=$pageFile === 'raynor.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/raynorportrait.png" alt="Raynor"></a>
        <a href="/commanders/kerrigan" class="<?=$pageFile === 'kerrigan.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/kerriganportrait.png" alt="Kerrigan"></a>
        <a href="/commanders/artanis" class="<?=$pageFile === 'artanis.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/artanisportrait.png" alt="Artanis"></a>
        <a href="/commanders/swann" class="<?=$pageFile === 'swann.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/swannportrait.png" alt="Swann"></a>
        <a href="/commanders/zagara" class="<?=$pageFile === 'zagara.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/zagaraportrait.png" alt="Zagara"></a>
        <a href="/commanders/vorazun" class="<?=$pageFile === 'vorazun.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/vorazunportrait.png" alt="Vorazun"></a>
        <a href="/commanders/karax" class="<?=$pageFile === 'karax.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/karaxportrait.png" alt="Karax"></a>
        <a href="/commanders/abathur" class="<?=$pageFile === 'abathur.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/abathurportrait.png" alt="Abathur"></a>
        <a href="/commanders/alarak" class="<?=$pageFile === 'alarak.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/alarakportrait.png" alt="Alarak"></a>
        <a href="/commanders/nova" class="<?=$pageFile === 'nova.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/novaportrait.png" alt="Nova"></a>
        <a href="/commanders/stukov" class="<?=$pageFile === 'stukov.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/stukovportrait.png" alt="Stukov"></a>
        <a href="/commanders/fenix" class="<?=$pageFile === 'fenix.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/fenixportrait.png" alt="Fenix"></a>
        <a href="/commanders/dehaka" class="<?=$pageFile === 'dehaka.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/dehakaportrait.png" alt="Dehaka"></a>
        <a href="/commanders/horner" class="<?=$pageFile === 'horner.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/hornerportrait.png" alt="Han &amp; Horner"></a>
        <a href="/commanders/tychus" class="<?=$pageFile === 'tychus.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/tychusportrait.png" alt="Tychus"></a>
        <a href="/commanders/zeratul" class="<?=$pageFile === 'zeratul.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/zeratulportrait.png" alt="Zeratul"></a>
        <a href="/commanders/stetmann" class="<?=$pageFile === 'stetmann.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/stetmannportrait.png" alt="Stetmann"></a>
        <a href="/commanders/mengsk" class="<?=$pageFile === 'mengsk.php' ? 'highlight' : 'normal'?>"><img src="/images/commanderportraits/mengskportrait.png" alt="Mengsk"></a>
    </div>
    <div id="missionList" class="submenu">
        <a href="/missions/chainofascension" class="<?=$pageFile === 'chainofascension.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/chainofascension.png" alt="Chain of Ascension"></a>
        <a href="/missions/cradleofdeath" class="<?=$pageFile === 'cradleofdeath.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/cradleofdeath.png" alt="Cradle of Death"></a>
        <a href="/missions/deadofnight" class="<?=$pageFile === 'deadofnight.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/deadofnight.png" alt="Dead of Night"></a>
        <a href="/missions/lockload" class="<?=$pageFile === 'lockload.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/lockload.png" alt="Lock & Load"></a>
        <a href="/missions/malwarfare" class="<?=$pageFile === 'malwarfare.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/malwarfare.png" alt="Malwarfare"></a>
        <a href="/missions/minerevacuation" class="<?=$pageFile === 'minerevacuation.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/minerevacuation.png" alt="Miner Evacuation"></a>
        <a href="/missions/mistopportunities" class="<?=$pageFile === 'mistopportunities.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/mistopportunities.png" alt="Mist Opportunities"></a>
        <a href="/missions/oblivionexpress" class="<?=$pageFile === 'oblivionexpress.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/oblivionexpress.png" alt="Oblivion Express"></a>
        <a href="/missions/partparcel" class="<?=$pageFile === 'partparcel.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/partparcel.png" alt="Part & Parcel"></a>
        <a href="/missions/riftstokorhal" class="<?=$pageFile === 'riftstokorhal.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/riftstokorhal.png" alt="Rifts to Korhal"></a>
        <a href="/missions/scytheofamon" class="<?=$pageFile === 'scytheofamon.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/scytheofamon.png" alt="Scythe Of Amon"></a>
        <a href="/missions/templeofthepast" class="<?=$pageFile === 'templeofthepast.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/templeofthepast.png" alt="Temple of the Past"></a>
        <a href="/missions/thevermillionproblem" class="<?=$pageFile === 'thevermillionproblem.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/thevermillionproblem.png" alt="The Vermillion Problem"></a>
        <a href="/missions/voidlaunch" class="<?=$pageFile === 'voidlaunch.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/voidlaunch.png" alt="Void Launch"></a>
        <a href="/missions/voidthrashing" class="<?=$pageFile === 'voidthrashing.php' ? 'highlight' : 'normal'?>"><img src="/images/missionthumbnails/voidthrashing.png" alt="Void Thrashing"></a>
    </div>
    <div id="guideList" class="submenu">
        <ul>
            <li class="<?=$pageFile === "buildordertheory.php" ? 'highlight' : 'normal'?>"><a href="/guides/buildordertheory">Build&nbsp;Order&nbsp;Theory</a></li>
            <li class="<?=$pageFile === "enemycomps.php" ? 'highlight' : 'normal'?>"><a href="/guides/enemycomps">Enemy&nbsp;Compositions</a></li>
            <li class="<?=$pageFile === "generaltips.php" ? 'highlight' : 'normal'?>"><a href="/guides/generaltips">General&nbsp;Tips</a></li>
            <li class="<?=$pageFile === "newplayer.php" ? 'highlight' : 'normal'?>"><a href="/guides/newplayer">New&nbsp;Players&nbsp;</a></li>
            <li class="<?=$pageFile === "youtube.php" ? 'highlight' : 'normal'?>"><a href="/guides/youtube">Youtube&nbsp;</a></li>
        </ul>
    </div>
    <div id="resources" class="submenu">
        <ul>
            <li class="<?=$pageFile === "achievements.php" ? 'highlight' : 'normal'?>"><a href="/resources/achievements">Achievements</a></li>
            <li class="<?=$pageFile === "ailogic.php" ? 'highlight' : 'normal'?>"><a href="/resources/ailogic">AI&nbsp;Logic</a></li>
            <li class="<?=$pageFile === "bugs.php" ? 'highlight' : 'normal'?>"><a href="/resources/bugs">Bugs</a></li>
            <li class="<?=$pageFile === "brutal.php" ? 'highlight' : 'normal'?>"><a href="/resources/brutal">Brutal+</a></li>
            <li class="<?=$pageFile === "deathprevention.php" ? 'highlight' : 'normal'?>"><a href="/resources/deathprevention">Death&nbsp;Prevent&nbsp;Effects</a></li>
            <li class="<?=$pageFile === "eastereggs.php" ? 'highlight' : 'normal'?>"><a href="/resources/eastereggs">Easter&nbsp;Eggs</a></li>
            <li class="<?=$pageFile === "levels.php" ? 'highlight' : 'normal'?>"><a href="/resources/levels">Levels</a></li>
            <li class="<?=$pageFile === "mutators.php" ? 'highlight' : 'normal'?>"><a href="/resources/mutators">Mutators</a></li>
            <li class="<?=$pageFile === "patchdata.php" ? 'highlight' : 'normal'?>"><a href="/resources/patchdata">Patch&nbsp;Data</a></li>
            <!--li class="<?=$pageFile === "stats.php" ? 'highlight' : 'normal'?>"><a href="/resources/stats">Stats</a></li-->
            <li class="<?=$pageFile === "weeklymutations.php" ? 'highlight' : 'normal'?>"><a href="/resources/weeklymutations">Weekly&nbsp;Mutations</a></li>

        </ul>
    </div>
    <div id="tools" class="submenu">
        <ul>
            <li class="<?=$pageFile === "downloads.php" ? 'highlight' : 'normal'?>"><a href="/tools/downloads">Downloads</a></li>
            <li class="<?=$pageFile === "masterybreakpoints.php" ? 'highlight' : 'normal'?>"><a href="/tools/masterybreakpoints">Mastery&nbsp;Breakpoints</a></li>
            <li class="<?=$pageFile === "unitstats.php" ? 'highlight' : 'normal'?>"><a href="/tools/unitstats">Unit&nbsp;Stats</a></li>
        </ul>
    </div>
    <div id="community" class="submenu">
        <ul>
            <li class="<?=$pageFile === "tournament.php" ? 'highlight' : 'normal'?>"><a href="/community/tournament/main">Co&#8209;op&nbsp;Tournament</a></li>
            <li class="<?=$pageFile === "gamespotlight.php" ? 'highlight' : 'normal'?>"><a href="/community/gamespotlight">Game&nbsp;Spotlight</a></li>
            <li class="<?=$pageFile === "mythbusters.php" ? 'highlight' : 'normal'?>"><a href="/community/mythbusters">Mythbusters</a></li>
            <li class="<?=$pageFile === "rockslappingchampions.php" ? 'highlight' : 'normal'?>"><a href="/community/rockslappingchampions">Rockslapping&nbsp;Champions</a></li>
            <li class="normal"><a href="/youtube">Youtube</a></li>
        </ul>
    </div>
    <div id="about" class="submenu">
        <ul>
            <!--<li class="<?=$pageFile === "contact.php" ? 'highlight' : 'normal'?>"><a href="/about/contact">Contact</a></li>-->
            <li class="<?=$pageFile === "faq.php" ? 'highlight' : 'normal'?>"><a href="/about/faq">FAQ</a></li>
            <li class="<?=$pageFile === "links.php" ? 'highlight' : 'normal'?>"><a href="/about/links">Links</a></li>
            <!--li class="normal"><a href="https://www.youtube.com/c/Starcraft2Coop" rel="nofollow">Youtube</a></li-->
            <li class="<?=$pageFile === "stats.php" ? 'highlight' : 'normal'?>"><a href="/resources/stats">Misc. Stats</a></li>
        </ul>
    </div>
    <!--<div id="imgs">
        <a href="https://www.youtube.com/c/Starcraft2Coop" rel="nofollow"><img src="/images/links/yt.png" alt="Youtube"></a>
        <a href="https://www.patreon.com/starcraft2coop" rel="nofollow"><img src="/images/links/patreon.png" alt="Patreon"></a>
        <a href="https://www.twitch.tv/aommaster" rel="nofollow"><img src="/images/links/twitch.png" alt="Twitch"></a>
        <a href="https://discord.gg/AbFXRAB" rel="nofollow"><img src="/images/links/discord.png" alt="Discord"></a>
    </div>-->
</div>
</nav>
<script>
    function openSubmenu(event, elem){
        if (event) event.preventDefault();
        if (!elem) elem = event.currentTarget;
        var alreadyOpen = $(elem).hasClass('open');

        $('#topmenu a').removeClass('open');
        $(".submenu").hide();

        if (alreadyOpen) return;

        $(elem).addClass('open');
        switch (elem.id.slice(13)){
            case "commanders":
                $("#commanderList").show();
                break;
            case "missions":
                $("#missionList").show();
                break;
            case "community":
                $("#community").show();
                break;
            case "guides":
                $("#guideList").show();
                break;
            case "resources":
                $("#resources").show();
                break;
            case "tools":
                $("#tools").show();
                break;
            case "about":
                $("#about").show();
                break;
        }
    }
    if (document.location.pathname === "/") {
        $('#submenu-link-commanders').each(function () {
            openSubmenu(null, this);
        });
    } else {
        $('#topmenu li.highlight a').each(function () {
            openSubmenu(null, this);
        });
    }
</script>
