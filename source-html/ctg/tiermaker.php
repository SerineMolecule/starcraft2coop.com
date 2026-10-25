<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"/>
    <link rel='shortcut icon' href='/images/favicon.ico' type='image/x-icon' />
    <title>Starcraft 2 Co-op - CtG's Commander Tier Maker</title>
    <link href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@348&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap">
    <style>
        body{
            margin:0;
            background:black;
            overflow:hidden;
            font-family:Ubuntu, sans-serif;
            color:white;
            font-size:1.15rem;
        }
        .tiermaker{
            position:relative;
            /* Keep the design coordinates; render at 2560×1440 before fitting the viewport. */
            --native-scale:calc(1440 / 1080);
            --layout-scale:min(1, calc(100vw / 2560px), calc(100vh / 1440px));
            zoom:calc(var(--native-scale) * var(--layout-scale));
            display:grid;
            grid-template-columns:1000px 1fr;
            grid-template-rows:minmax(210px, 1fr) 400px;
            gap:16px;
            padding:16px;
            box-sizing:border-box;
            width:1920px;
            height:1080px;
            background:url("../images/ctg/bg.jpg") left top / 100% auto no-repeat;
        }
        .tiers{
            grid-column:1 / -1;
            width:1516px;
            height:100%;
            table-layout:fixed;
            border-collapse:collapse;
            background:rgba(8, 16, 24, 0.84);
        }
        .tiers tr{
            height:calc(100% / var(--tier-count));
        }
        .tiers th, .tiers td{
            border:1px solid #4c606e;
            background:color-mix(in srgb, var(--tier-color) 18%, transparent);
        }
        .tiers th{
            border-right:0;
            box-shadow:inset 6px 0 var(--tier-color);
            width:100px;
            padding:0;
            color:var(--tier-color);
            font-size:60px;
            font-weight:bold;
        }
        .tiers td{
            border-left:0;
            padding:0 12px;
        }
        .tier-commanders{
            display:flex;
            align-items:center;
            gap:16px;
            height:64px;
        }
        .tier-commanders .commander-portrait{
            flex:0 1 64px;
            min-width:0;
            width:64px;
            aspect-ratio:1;
        }
        .tier-commanders img{
            width:100%;
            height:auto;
            border-radius:50%;
        }
        .tier-sss{ --tier-color:#80ed89; }
        .tier-ss{ --tier-color:#f18bd7; }
        .tier-sss .tier-label{ font-size:44px; }
        .tier-ss .tier-label{ font-size:52px; }
        .tier-s{ --tier-color:#f7dc6f; }
        .tier-a{ --tier-color:#ff8c88; }
        .tier-b{ --tier-color:#ce91ed; }
        .tier-c{ --tier-color:#7cc5ff; }
        .tier-d{ --tier-color:#6ae4df; }
        .tier-e{ --tier-color:#9ce588; }
        .tier-f{ --tier-color:#bfccd8; }
        .commander-queue{
            align-self:center;
            display:flex;
            flex-direction:column;
            gap:24px;
            width:500px;
        }
        .commander-queue h1{
            margin:0 0 16px;
            color:#f5eea6;
            font-family:"Science Gothic", sans-serif;
            font-size:26px;
            font-weight:350;
            text-transform:uppercase;
            text-align:center;
            text-shadow:0 2px 4px black, 0 0 12px rgba(0, 0, 0, 0.8);
        }
        .box{
            display:inline-block;
            background:url("../images/ctg/border.png");
            padding:25px;
            width:1000px;
            height:400px;
            box-sizing:border-box;
            flex-shrink:0;
            background-repeat: no-repeat;
        }
        .pool{
            display:grid;
            grid-template-columns:repeat(9, 50px);
            gap:12px 6px;
            justify-content:center;
        }
        .pool img{
            width:50px;
            height:50px;
            border-radius:50%;
            object-fit:cover;
            cursor:inherit;
        }
        .pool .is-placed{
            opacity:0.5;
        }
        .pool .is-current{
            outline:3px solid #f5eea6;
            outline-offset:2px;
        }
        .info{
            padding: 10px 0;
        }
        .info img{
            display:inline;
            padding-right:1rem;
        }
        .mutname{
            color:#f5eea6;
        }
        .mutdata {
            height: 72px;
        }
        .mutdata img {
            width: 50px;
            height: 50px;
            padding: 2px;
            border: 2px solid #2772b3;
            border-radius: 4px;
            background: black;
            box-shadow: 0 0 2px #2772b3, 0 0 0 2px black;
            float: left;
        }
        .box img:not([src]) {
            visibility: hidden;
        }
        .mutdata p{
            margin: 0 10px 0 68px;
        }
        img{
            display:block;
            max-width:100%;
        }
        select{
            font-size:1.75rem;
        }
        .mutation {
            font-family: "Science Gothic", sans-serif;
            font-optical-sizing: auto;
            font-weight: 350;
            font-style: normal;
            text-transform: uppercase;
            background: transparent;
            color: white;
            border: 0;
            appearance: none;
            -webkit-appearance: none;
            font-variation-settings:
                "slnt" 0,
                "wdth" 100,
                "CTRS" 0;
            font-size: 32px;
            line-height: 32px;
        }
        .mutation option {
            background: black;
            color: white;
            text-transform: none;
        }
        #current-commander {
            width: 500px;
            height: 94px;
            flex-shrink: 0;
            text-align: right;
        }
        .commander-portrait, .commander-banner, .tier-label{
            display:block;
            padding:0;
            border:0;
            background:none;
            color:inherit;
            font:inherit;
        }
        .commander-portrait{
            position:relative;
            border-radius:50%;
            font-size:28px;
            cursor:grab;
        }
        .commander-banner{
            position:relative;
            width:500px;
            height:94px;
            font-size:36px;
            cursor:grab;
        }
        .prestige-badge{
            position:absolute;
            right:0;
            bottom:-2px;
            color:#f5eea6;
            font-size:inherit;
            font-weight:bold;
            line-height:1;
            -webkit-text-stroke:0.1em #071019;
            paint-order:stroke fill;
            text-shadow:0 1px 3px black;
            pointer-events:none;
        }
        .commander-banner .prestige-badge{ right:6px; bottom:4px; }
        .commander-portrait, .commander-banner{
            touch-action:none;
            user-select:none;
            -webkit-user-select:none;
            -webkit-touch-callout:none;
        }
        .commander-portrait:active, .commander-banner:active{ cursor:grabbing; }
        .tier-label{
            width:100%;
            min-height:64px;
            cursor:pointer;
        }
        .tier-label:disabled{ cursor:default; }
        .tier-label:hover:not(:disabled){ background:rgba(255,255,255,0.08); }
        button:focus-visible{ outline:3px solid #f5eea6; outline-offset:2px; }
        .pool .commander-portrait{ width:50px; height:50px; font-size:22px; }
        .pool .is-placed .prestige-badge, .pool .is-current .prestige-badge{ display:none; }
        .is-arriving{ visibility:hidden; }
        .tier-commanders [data-dragging]{ display:none; }
        .commander-banner[data-dragging], .pool [data-dragging]{ opacity:0.35; }
        .tiers .is-drop-target td{ box-shadow:inset 0 0 0 2px var(--tier-color); }
        .pool.is-drop-target{ outline:2px solid #f5eea6; outline-offset:8px; }
        .tier-commanders .commander-drop-placeholder{
            flex:0 1 64px;
            min-width:0;
            width:64px;
            aspect-ratio:1;
            box-sizing:border-box;
            border-radius:50%;
            border:2px solid #f5eea6;
            background:rgba(245, 238, 166, 0.18);
            pointer-events:none;
        }
        .flying-commander, .dragging-commander{
            position:fixed;
            z-index:100;
            pointer-events:none;
            border-radius:50%;
            transform-origin:top left;
        }
        .dragging-commander{
            left:0;
            top:0;
            /* Preview font size scales with the portrait, including this ring and shadow. */
            outline:calc(2em / 28) solid #f5eea6;
            outline-offset:calc(2em / 28);
            box-shadow:0 calc(2em / 28) calc(5em / 28) black;
        }
        .commander-preview img{ display:block; width:100%; height:100%; border-radius:50%; }
        .tier-menu{
            position:absolute;
            left:0;
            top:0;
            z-index:200;
            width:max-content;
            max-width:calc(100% - 16px);
            max-height:calc(100% - 16px);
            box-sizing:border-box;
            overflow:auto;
            min-width:150px;
            padding:5px;
            border:1px solid #4c606e;
            border-radius:6px;
            background:#101e2a;
            box-shadow:0 4px 16px #0008;
        }
        .tier-menu button{
            display:block;
            width:100%;
            padding:12px 16px;
            border:0;
            border-radius:3px;
            background:none;
            color:#e5edf3;
            font:inherit;
            font-size:24px;
            text-align:left;
            cursor:pointer;
        }
        .tier-menu button:hover:not(:disabled), .tier-menu button:focus-visible{
            background:#294255;
            outline:none;
        }
        .tier-menu button:disabled{ opacity:0.4; cursor:default; }
        .tier-menu button[aria-checked="true"]{ color:#f5eea6; }
        .tier-menu button[aria-checked="true"]::after{ content:"✓"; float:right; margin-left:12px; }
        .ranking-complete{
            margin:0;
            height:94px;
            display:grid;
            place-items:center;
            color:#f5eea6;
        }
        .visually-hidden{
            position:absolute;
            top:0;
            left:0;
            margin:0;
            width:1px;
            height:1px;
            overflow:hidden;
            clip-path:inset(50%);
            white-space:nowrap;
        }
    </style>
</head>
<body>
    <?php
    require_once __DIR__ . '/../../includes/queries.php';
    $mutators = get_mutators();
    $prestigeNames = [];
    foreach (get_commanders() as $commander) {
        $prestigeNames[$commander['commander']] = array_map('trim', [
            $commander['motto'],
            $commander['prestige1'],
            $commander['prestige2'],
            $commander['prestige3'],
        ]);
    }
    $mutations = get_weeklymutations();
    $mutations = array_values(array_filter($mutations, fn($mutation) => $mutation['mutation'] != 'Sudden but Inevitable'));
    foreach ($mutations as &$row) {
        if ($row['map'] == 'Lock and Load') {
            $row['map'] = 'Lock Load';
        }
    }
    ?>

    <div id="tiermaker-root"></div>
    <noscript>This tier maker requires JavaScript.</noscript>
    <script>
        window.tiermakerData = <?= json_encode(
            ['mutators' => array_column($mutators, null, 'mutatorid'), 'mutations' => $mutations, 'prestigeNames' => $prestigeNames],
            JSON_HEX_TAG | JSON_THROW_ON_ERROR,
        ) ?>;
    </script>
    <script src="/scripts/tiermaker.js" defer></script>
</body>
</html>
