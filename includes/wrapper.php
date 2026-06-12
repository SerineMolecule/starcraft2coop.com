<?php

$wrapperNesting = 0;
$assetCachebusters = null;

function cachebusted_asset(string $pathname): string
{
    global $assetCachebusters;
    if ($assetCachebusters === null) {
        $assetCachebusters = [];
        $manifestPath = __DIR__ . '/../html/data/cachebusters.json';
        if (file_exists($manifestPath)) {
            $assetCachebusters = json_decode(file_get_contents($manifestPath), true) ?: [];
        }
    }
    return $assetCachebusters[$pathname] ?? $pathname;
}

function startHead()
{
    global $wrapperNesting;
    $wrapperNesting++;
    if ($wrapperNesting > 1) {
        ob_start();
        return '';
    }
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <link rel="icon" href="/images/favicon.ico">
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap">
    <link rel="stylesheet" href="<?= cachebusted_asset('/styles/global.css') ?>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <?php
    return '';
}

function startContent()
{
    global $wrapperNesting;
    if ($wrapperNesting > 1) {
        ob_end_clean();
        return '';
    }
    // $url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    $pageFile = basename($_SERVER['PHP_SELF']);
    $pageSection = basename(dirname($_SERVER['PHP_SELF']));
    if ($pageSection === 'tournament') {
        $pageFile = 'tournament.php';
        $pageSection = basename(dirname(dirname($_SERVER['PHP_SELF'])));
    }
    if (!$pageSection) {
        $pageSection = 'index';
    }
    if ($pageSection === 'mutators') {
        $pageFile = 'mutators.php';
    }
    if ($pageSection === 'units') {
        $pageFile = 'units.php';
    }
    if ($pageSection === 'tools' || $pageSection === 'guides' || $pageSection === 'mutators' || $pageSection === 'units') {
        $pageSection = 'resources';
    }
    ?>
</head>
<body>

<header id="header">
    <img src="/images/starcraft2coop.png" alt="Starcraft II Co-op">
</header>
<script>
if (document.location.host === 'dev.starcraft2coop.com') {
    document.write('<div class="construction">THIS IS THE TEST SITE. (<a href="https://starcraft2coop.com">Go to the real site</a>)</div>');
}
</script>
<nav id="menu">
<ul id="topmenu">
    <li class="<?=$pageSection === "index" ? 'highlight' : 'normal'?>"><a href="/" title="Home">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><title>Home</title><!--!Font Awesome Free v5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></svg>
    </a></li>
    <li class="<?=$pageSection === "commanders" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-commanders">Commanders</a></li>
    <li class="<?=$pageSection === "resources" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-resources">Guides</a></li>
    <li class="<?=$pageSection === "missions" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-missions">Missions</a></li>
    <li class="<?=$pageSection === "about" ? 'highlight' : 'normal'?>"><a href="/" onclick="javascript:openSubmenu(event);" id="submenu-link-about">About</a></li>
    <li class="normal"><button type="button" id="site-search-button" title="Search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Search</title><!--!Font Awesome Free v5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
        <span class="search-shortcut" aria-hidden="true"></span>
    </button></li>
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
        <a href="/missions/chainofascension" class="<?=$pageFile === 'chainofascension.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-chainofascension">Chain of Ascension</div></a>
        <a href="/missions/cradleofdeath" class="<?=$pageFile === 'cradleofdeath.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-cradleofdeath">Cradle of Death</div></a>
        <a href="/missions/deadofnight" class="<?=$pageFile === 'deadofnight.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-deadofnight">Dead of Night</div></a>
        <a href="/missions/lockload" class="<?=$pageFile === 'lockload.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-lockload">Lock &amp; Load</div></a>
        <a href="/missions/malwarfare" class="<?=$pageFile === 'malwarfare.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-malwarfare">Malwarfare</div></a>
        <a href="/missions/minerevacuation" class="<?=$pageFile === 'minerevacuation.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-minerevacuation">Miner Evacuation</div></a>
        <a href="/missions/mistopportunities" class="<?=$pageFile === 'mistopportunities.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-mistopportunities">Mist Opportunities</div></a>
        <a href="/missions/oblivionexpress" class="<?=$pageFile === 'oblivionexpress.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-oblivionexpress">Oblivion Express</div></a>
        <a href="/missions/partparcel" class="<?=$pageFile === 'partparcel.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-partparcel">Part &amp; Parcel</div></a>
        <a href="/missions/riftstokorhal" class="<?=$pageFile === 'riftstokorhal.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-riftstokorhal">Rifts to Korhal</div></a>
        <a href="/missions/scytheofamon" class="<?=$pageFile === 'scytheofamon.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-scytheofamon">Scythe of Amon</div></a>
        <a href="/missions/templeofthepast" class="<?=$pageFile === 'templeofthepast.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-templeofthepast">Temple of the Past</div></a>
        <a href="/missions/thevermillionproblem" class="<?=$pageFile === 'thevermillionproblem.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-thevermillionproblem">The Vermillion Problem</div></a>
        <a href="/missions/voidlaunch" class="<?=$pageFile === 'voidlaunch.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-voidlaunch">Void Launch</div></a>
        <a href="/missions/voidthrashing" class="<?=$pageFile === 'voidthrashing.php' ? 'highlight' : 'normal'?>"><div class="mapImg mapImg-voidthrashing">Void Thrashing</div></a>
    </div>
    <div id="resources" class="submenu">
        <div class="submenu-with-sections"><div class="submenu-section">
            <strong>Resources:</strong>
            <ul>
                <li class="<?=$pageFile === "mutators.php" ? 'highlight' : 'normal'?>"><a href="/mutators/">Mutators</a></li>
                <li class="<?=$pageFile === "weeklymutations.php" ? 'highlight' : 'normal'?>"><a href="/resources/weeklymutations">Weekly&nbsp;Mutations</a></li>
                <li class="<?=$pageFile === "brutal.php" ? 'highlight' : 'normal'?>"><a href="/resources/brutal">Brutal+</a></li>
                <li class="<?=$pageFile === "units.php" ? 'highlight' : 'normal'?>"><a href="/units/">Unit&nbsp;Stats</a></li>
            </ul>
        </div><div class="submenu-section">
            <strong>Guides:</strong>
            <ul>
                <li class="<?=$pageFile === "buildordertheory.php" ? 'highlight' : 'normal'?>"><a href="/guides/buildordertheory">Build&nbsp;Order&nbsp;Theory</a></li>
                <li class="<?=$pageFile === "enemycomps.php" ? 'highlight' : 'normal'?>"><a href="/guides/enemycomps">Enemy&nbsp;Compositions</a></li>
                <li class="<?=$pageFile === "generaltips.php" ? 'highlight' : 'normal'?>"><a href="/guides/generaltips">General&nbsp;Tips</a></li>
                <li class="<?=$pageFile === "newplayer.php" ? 'highlight' : 'normal'?>"><a href="/guides/newplayer">New&nbsp;Players</a></li>
                <li class="<?=$pageFile === "youtube.php" ? 'highlight' : 'normal'?>"><a href="/guides/youtube">Youtube</a></li>
            </ul>
        </div><div class="submenu-section">
            <strong>Miscellaneous:</strong>
            <ul>
                <li class="<?=$pageFile === "achievements.php" ? 'highlight' : 'normal'?>"><a href="/resources/achievements">Achievements</a></li>
                <li class="<?=$pageFile === "ailogic.php" ? 'highlight' : 'normal'?>"><a href="/resources/ailogic">AI&nbsp;Logic</a></li>
                <li class="<?=$pageFile === "bugs.php" ? 'highlight' : 'normal'?>"><a href="/resources/bugs">Bugs</a></li>
                <li class="<?=$pageFile === "deathprevention.php" ? 'highlight' : 'normal'?>"><a href="/resources/deathprevention">Death&nbsp;Prevent&nbsp;Effects</a></li>
                <li class="<?=$pageFile === "eastereggs.php" ? 'highlight' : 'normal'?>"><a href="/resources/eastereggs">Easter&nbsp;Eggs</a></li>
                <li class="<?=$pageFile === "levels.php" ? 'highlight' : 'normal'?>"><a href="/resources/levels">Levels</a></li>
                <li class="<?=$pageFile === "patchdata.php" ? 'highlight' : 'normal'?>"><a href="/resources/patchdata">Patch&nbsp;Data</a></li>
                <li class="<?=$pageFile === "downloads.php" ? 'highlight' : 'normal'?>"><a href="/tools/downloads">Downloads</a></li>
                <li class="<?=$pageFile === "masterybreakpoints.php" ? 'highlight' : 'normal'?>"><a href="/tools/masterybreakpoints">Mastery&nbsp;Breakpoints</a></li>
            </ul>
        </div></div>
    </div>
    <div id="about" class="submenu">
        <ul>
            <!--<li class="<?=$pageFile === "contact.php" ? 'highlight' : 'normal'?>"><a href="/about/contact">Contact</a></li>-->
            <li class="<?=$pageFile === "faq.php" ? 'highlight' : 'normal'?>"><a href="/about/faq">FAQ</a></li>
            <li class="<?=$pageFile === "links.php" ? 'highlight' : 'normal'?>"><a href="/about/links">Links</a></li>
            <!--li class="normal"><a href="https://www.youtube.com/c/Starcraft2Coop" rel="nofollow">Youtube</a></li-->
            <li class="<?=$pageFile === "stats.php" ? 'highlight' : 'normal'?>"><a href="/about/stats">Misc. Stats</a></li>
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
    (function($) {
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
                case "resources":
                    $("#resources").show();
                    break;
                case "about":
                    $("#about").show();
                    break;
            }
        }
        window.openSubmenu = openSubmenu;
        if (document.location.pathname === "/") {
            $('#submenu-link-commanders').each(function () {
                openSubmenu(null, this);
            });
        } else {
            $('#topmenu li.highlight a').each(function () {
                openSubmenu(null, this);
            });
        }
    })(jQuery);
</script>
<script src="<?= cachebusted_asset('/scripts/search.js') ?>" defer></script>
<div id="content">
    <?php
    return '';
}

function endContent()
{
    global $wrapperNesting;
    $wrapperNesting--;
    if ($wrapperNesting > 0) {
        return '';
    }
    ?>
</div>

<div id="footer">
    <p>Note: All data generated on this site is based on Brutal difficulty. Timings, compositions and other elements may differ on easier difficulty levels.</p>
    <p>CC-BY-NC-SA-4.0. Originally written by Aommaster. This is a fansite not affiliated with StarCraft 2 or Blizzard Entertainment, Inc.</p>
</div>

</body>
</html>

    <?php
    return '';
}
