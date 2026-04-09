<?php

// run from CLI; generate static pages
require "config.php";

$pages = [
    '/about/contact',
    '/about/faq',
    '/about/links',
    '/about/stats',

    '/commanders/abathur',
    '/commanders/alarak',
    '/commanders/artanis',
    '/commanders/dehaka',
    '/commanders/fenix',
    '/commanders/horner',
    '/commanders/karax',
    '/commanders/kerrigan',
    '/commanders/mengsk',
    '/commanders/nova',
    '/commanders/raynor',
    '/commanders/stetmann',
    '/commanders/stukov',
    '/commanders/swann',
    '/commanders/tychus',
    '/commanders/vorazun',
    '/commanders/zagara',
    '/commanders/zeratul',

    '/community/tournament/summary/2019-10',
    '/community/tournament/archive',
    '/community/tournament/main',
    '/community/gamespotlight',
    '/community/mythbusters',
    '/community/rockslappingchampions',

    '/guides/buildordertheory',
    '/guides/enemycomps',
    '/guides/generaltips',
    '/guides/newplayer',
    '/guides/youtube',

    '/missions/chainofascension',
    '/missions/cradleofdeath',
    '/missions/deadofnight',
    '/missions/lockload',
    '/missions/malwarfare',
    '/missions/minerevacuation',
    '/missions/mistopportunities',
    '/missions/oblivionexpress',
    '/missions/partparcel',
    '/missions/riftstokorhal',
    '/missions/scytheofamon',
    '/missions/templeofthepast',
    '/missions/thevermillionproblem',
    '/missions/voidlaunch',
    '/missions/voidthrashing',

    '/resources/achievements',
    '/resources/ailogic',
    '/resources/brutal',
    '/resources/bugs',
    '/resources/deathprevention',
    '/resources/eastereggs',
    '/resources/levels',
    '/resources/mutators',
    '/resources/patchdata',

    '/tools/downloads',
    '/tools/masterybreakpoints',
    '/tools/unitstats',

    '/account',
    '/index',

];

$HTML_DIR = __DIR__ . '/html';
$_SERVER['ADMIN_KEY'] = $ADMIN_KEY;
$_SERVER['SERVER_NAME'] = $SERVER_NAME;

foreach ($pages as $page) {
    $_SERVER['REQUEST_URI'] = "$page";
    $_SERVER['PHP_SELF'] = "$page.php";
    $pageDir = $HTML_DIR . dirname($page);
    chdir($pageDir);

    ob_start();
    require $HTML_DIR . "$page.php";
    $html = ob_get_clean();
    $html = str_replace("\r\n", "\n", $html);

    $result = file_put_contents($HTML_DIR . "$page.html", $html);
    if (!$result) {
        echo "Error writing $page.html\n";
    } else {
        echo "Generated $page.html ($result bytes)\n";
    }
}
