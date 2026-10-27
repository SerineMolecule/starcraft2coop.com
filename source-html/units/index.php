<?php

/** @generateStatic */

require_once __DIR__ . '/../../includes/wrapper.php';
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Unit Stats</title>
    <meta name="description" content="A calculator to provide you with unit stats before and after upgrades for every unit in Co-op. Also includes data on Amon's units.">
    <meta name="keywords" content="Starcraft co-op unit stats">
    <link rel="canonical" href="https://starcraft2coop.com/units/">
    <style>
        #content {
            max-width: 1180px;
        }
        #content .units {
            font-size: 16px;
            --units-accent: #ffea73;
            --units-line: #767ba9;
            --units-selected-border: #a9bfe9;
            border-collapse: separate;
            border-spacing: 10px 0;
        }
        .units td {
            vertical-align: top;
        }
        .units a, .units a:visited {
            color: var(--units-accent);
            text-decoration: none;
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
            border-color: var(--units-line);
        }
        .units-commander-selector {
            width: 150px;
            min-width: 150px;
        }
        .units-unit-selector {
            width: 200px;
            min-width: 200px;
            border-right: 0;
        }
        .units-nav li + li {
            margin-top: 2px;
        }
        .units-nav a {
            display: block;
            margin-inline: -5px;
            padding: 1px 5px;
            border: 1px solid transparent;
            white-space: nowrap;
        }
        /* Leave 2px before the separator or stat box for unselected rows. */
        .units-commander-selector a {
            margin-right: -3px;
        }
        .units-unit-selector a {
            margin-right: -13px;
        }
        .units-nav a:focus-visible {
            outline: 2px solid var(--units-accent);
            outline-offset: 2px;
        }
        @media (hover: hover) {
            .units-nav a:not([aria-selected="true"]):hover {
                background: #ffffff12;
                border-color: #ffea7366;
            }
        }
        .units-nav a[aria-selected="true"] {
            position: relative;
            z-index: 1;
            color: #fff7e5;
            border-color: var(--units-selected-border);
            border-right: 0;
            /* Paint the gradient as one border, avoiding overlay seams at zoom. */
            border-image: linear-gradient(to right, var(--units-selected-border) 60%, var(--units-line)) 1;
            background-color: rgb(10, 13, 33);
            background-image: linear-gradient(to right, #708bc526 60%, transparent),
                linear-gradient(rgb(30, 37, 91), rgb(10, 13, 33));
            background-attachment: scroll, fixed;
        }
        .units-commander-selector a[aria-selected="true"] {
            /* Include cell padding and cover the shared separator. */
            margin-right: -6px;
        }
        .units-unit-selector a[aria-selected="true"] {
            /* Also bridge the 10px gap to the primary stat box. */
            margin-right: -16px;
        }
        .units-unit {
            position: relative;
            padding: 10px;
            width: 360px;
            min-width: 280px;
            border-color: var(--units-line);
        }
        .units-unit + .units-unit {
            border-color: #53578a;
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
            color: #bcc0e8;
            margin-bottom: 5px;
        }
        .units-commander-selector > .units-head:first-child,
        .units-unit-selector > .units-head:first-child {
            margin-top: 0;
        }
        .units-mode-stats {
            border-left: 1px dotted #888;
            margin-left: 5px;
            padding-left: 5px;
        }
        .units-actions {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 2;
        }
        .units-actions-compare {
            top: -16px;
            right: -11px;
        }
        .units-actions:not(.units-actions-compare) + .units-name {
            /* Leave room for the close button without lowering the name. */
            padding-right: 28px;
        }
        .units-identity {
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .units-art {
            align-self: flex-start;
            flex: none;
            margin: -4px;
            padding: 2px;
            border: 1px solid #53578a;
            border-radius: 3px;
            background: black;
        }
        .units-art > img {
            display: block;
            width: 100px;
            height: 100px;
            object-fit: contain;
        }
        .units-identity-text {
            min-width: 0;
            flex: 1;
            container: units-details / inline-size;
        }
        #content .units-name {
            display: block;
            color: inherit;
            margin: 0 0 10px;
            font-size: 22px;
            line-height: 1.15;
            font-weight: bold;
        }
        #content .units-name::before,
        #content .units-name::after {
            content: none;
        }
        .units-costs {
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 14px;
        }
        .units-costs > span {
            white-space: nowrap;
        }
        .units-costs img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            vertical-align: -4px;
        }
        @container units-details (max-width: 200px) {
            .units-costs {
                gap: 6px;
                font-size: 14px;
            }
            .units-costs img {
                width: 16px;
                height: 16px;
                vertical-align: -3px;
            }
        }
        .units-tags {
            font-size: 14px;
            margin: 6px 0 0;
            color: #bdc0dc;
            line-height: 1.35;
        }
        .units-unit fieldset {
            border: 1px solid #53578a;
            margin-bottom: 3px;
            padding: 2px 2px 4px;
            color: #a2a5d4;
        }
        .units-mastery-name {
            padding-left: 4px;
        }
        .units-mastery-controls {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .units-mastery-value {
            white-space: nowrap;
        }
        .units-masteries input[type="range"] {
            flex: none;
            width: 180px;
        }
        .units-masteries input[type="number"] {
            text-align: right;
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
        If you prefer <a href="/units/old">the old unit stats page, it's still available</a>.
    </p>

<?= endContent() ?>
