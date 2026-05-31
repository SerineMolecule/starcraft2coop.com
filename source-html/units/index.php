<?php

/** @generateStatic */

require_once __DIR__ . "/../../includes/wrapper.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Unit Stats</title>
    <meta name="description" content="A calculator to provide you with unit stats before and after upgrades for every unit in Co-op. Also includes data on Amon's units.">
    <meta name="keywords" content="Starcraft co-op unit stats">
    <link rel="canonical" href="https://starcraft2coop.com/tools/units">
    <style>
        .units td {
            vertical-align: top;
        }
        .units a, .units a:visited {
            color: yellow;
            text-decoration: none;
        }
        .units a[aria-selected="true"] {
            color: orange;
        }
        .units a:hover {
            text-decoration: underline;
        }
        .units-nav, .units-stats, .units-mode-stats {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        .units-hp {
            color: chartreuse;
        }
        .units-shields {
            color: aqua;
        }
        .units-energy {
            color: violet;
        }
        .units-commander-selector,
        .units-unit-selector {
            border-left: 0;
            border-top: 0;
            border-bottom: 0;
        }
        .units-unit-selector {
            min-width: 220px;
        }
        .units-unit {
            width: 280px;
            min-width: 280px;
        }
        .units-portrait {
            background: black;
            width: 100px;
            height: 100px;
        }
        .units-modified {
            color: yellow;
        }
        .units-modifiers {
            margin: 20px -5px 0;
            border-top: 1px solid transparent;
            padding: 5px 5px 0;
        }
        .units-head {
            margin-bottom: 5px;
        }
        .units-mode-stats {
            border-left: 1px dotted #888;
            margin-left: 5px;
            padding-left: 5px;
        }
        .units-sidebutton {
            float: right;
        }
        .units-unit fieldset {
            border: 1px solid #53578a;
            margin-bottom: 3px;
            padding: 2px 2px 4px;
            color: #a2a5d4;
        }
        .units-unit legend {
            color: #7277bd;
            font-style: italic;
            margin-left: 2px;
        }
    </style>
<?= startContent() ?>
    <h1>Units</h1>
    <div id="units"></div>
    <script src="/scripts/units.js?v2.1" defer></script>
    <script src="/scripts/tooltips.js" defer></script>

    <h3>Notes about the data</h3>
    <ul>
        <li>Data only shows base stats and upgrades that affect those base stats. Upgrades that affect skill cooldowns are not displayed.</li>
        <li>All evolutions (e.g. Abathur's Devourer, Dehaka's Primal Combat units) build times only includes the evolution time, and not the build time of the parent units.</li>
        <li>Any units with charge-based production (e.g. Artanis) uses the charge cooldown time as the build time. For Stukov, the unit's build time is displayed, and not the charge time.</li>
        <li>For multiple-spawned units (e.g. Zerglings), resource costs are divided by the number of units spawned.</li>
        <li>For buffs that have multiple stacks (e.g. Biomass), the maximum buff value will be calculated.</li>
        <li>Only upgrades that change the units weapon stats are listed. For this reason, damage reduction like Fenix's Network Administrator is not shown.</li>
        <li>Since numbers are calculated, there may be small rounding errors.</li>
    </ul>
    <p>
        If you prefer <a href="/tools/unitstats">the old unit stats page, it's still available</a>.
    </p>

<?= endContent() ?>
