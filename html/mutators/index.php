<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
    <title>Starcraft 2 Co-op - Mutators</title>
    <link rel="canonical" href="https://starcraft2coop.com/mutators/">
    <style>
        .mutatortiles {
            list-style: none;
            margin: 0;
            padding: 0;
            font-size: 1px;
        }
        .mutatortiles li {
            display: inline;
            margin: 0;
            padding: 0;
            font-size: 12px;
        }
        .mutatortiles a {
            display: inline-block;
            margin: 2px;
            width: 100px;
            height: 110px;
            text-align: center;
            vertical-align: top;
        }
        .mutatortiles a img {
            display: block;
            margin: 0 auto;
        }
    </style>
<?= startContent() ?>
    <h1>Mutators</h1>
    <p>
        <label><input type="radio" name="layout" value="icons" id="icons-option" checked>Icons</label>
        </label>
        <label><input type="radio" name="layout" value="table" id="table-option">Table</label>
        </label>
    </p>
    <ul class="mutatortiles">
    <?php
    require_once '../../includes/queries.php';
    $mutators = get_mutators();
    usort($mutators, fn($a, $b) => $a['mutatorname'] <=> $b['mutatorname']);
    foreach ($mutators as $mutator) {
        $filename = strtolower(str_replace("-", '', str_replace(' ', '', $mutator['mutatorname'])));
        echo '<li><a href="/mutators/' . $filename . '"><img src="/images/mutators/' . $filename . '.png" alt="" />' . $mutator['mutatorname'] . '</a></li>' . "\n";
    }
    ?>
    </ul>
    <table class="mutatortable" style="display:none">
        <tr>
            <th>Mutator</th><th>Description</th><th>Usable in Custom?</th><th>Rollable by Chaos Studios?</th>
        </tr>
    <?php
    foreach ($mutators as $mutator) {
        $filename = strtolower(str_replace("-", '', str_replace(' ', '', $mutator['mutatorname'])));
        echo '<tr><td style="white-space: nowrap"><a href="/mutators/' . $filename . '"><img src="/images/mutators/' . $filename . '.png" alt="" height="25" width="25" style="vertical-align: middle" />' . $mutator['mutatorname'] . '</a></td><td>' . $mutator['mutatordescription'] . '</td><td style="font-size: 1.5em;text-align: center">' . ($mutator['customusable'] ? '⚙️' : '') . '</td><td style="font-size: 1.5em;text-align: center">' . ($mutator['chaosrollable'] ? '🎲' : '') . '</td></tr>' . "\n";
    }
    ?>
    </table>
    <script>
        let showTable;
        function updateTable() {
            if (showTable === undefined && window.localStorage) {
                showTable = !!localStorage.getItem('showTable');
                if (showTable) {
                    document.getElementById('icons-option').checked = false;
                    document.getElementById('table-option').checked = true;
                }
            } else {
                showTable = !!document.getElementById('table-option').checked;
                if (window.localStorage) localStorage.setItem('showTable', showTable ? '1' : '');
            }
            if (showTable) {
                $('.mutatortiles').hide();
                $('.mutatortable').show();
            } else {
                $('.mutatortiles').show();
                $('.mutatortable').hide();
            }
        }
        $('#icons-option').click(updateTable);
        $('#table-option').click(updateTable);
        updateTable();
    </script>
    <p>If you prefer the old layout with everything on one page, <a href="/resources/mutators">it's still available</a>.</p>
<?= endContent() ?>
