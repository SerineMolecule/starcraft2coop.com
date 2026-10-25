<?php

function switcher_generator($info)
{
    global $mission;
    if ($info == 'expo') {
        return switcher_expo_generator($info, $mission);
    }
    if (str_contains($info, 'comparison')) {
        return switcher_comparison_generator($info, $mission);
    }

    $missionpath = "/images/missiondata/{$mission}/";
    $imageClass = str_contains($info, 'long') ? 'long' : 'basePic';
    // Keep column boundary tags adjacent to avoid gaps between inline-blocks.
    ?>
    <div class="switcher">
        <div class="<?= $imageClass ?>" id="<?= $info ?>div">
            <img id="<?= $info ?>" src=" <?= $missionpath ?><?= $info ?>_protoss.jpg" alt="<?= $info ?> Picture">
        </div><div class="baseMinimap">
            <form action="#">
                <label><input type="radio" name="<?= $info ?>" value="protoss" checked>Protoss</label><br>
                <label><input type="radio" name="<?= $info ?>" value="terran">Terran</label><br>
                <label><input type="radio" name="<?= $info ?>" value="zerg">Zerg</label><br>
            </form>
            <br><br>
            <div>
                <img src="<?= $missionpath ?><?= $info ?>minimap.jpg" alt="<?= $info ?> Minimap">
            </div>
        </div>
    </div>

    <script>
        $("input[name='<?= $info ?>']").change(function () {
            var race = $(this).val();
            var oldImg = $('#<?= $info ?>');
            var img = new Image();
            img.src = '<?= $missionpath ?><?= $info ?>_' + race + '.jpg';
            var newImg = $(img).hide();
            $('#<?= $info ?>div').append(img);
            oldImg.stop(true).fadeOut(500, function () {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', '<?= $info ?>');
            return false;
        });
        var imgList = [];
        imgList.push('<?= $missionpath ?><?= $info ?>_protoss.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>_terran.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>_zerg.jpg');
        preload(imgList);
    </script>
    <?php
}

function switcher_expo_generator($info, $mission)
{
    $missionpath = "/images/missiondata/{$mission}/";
    ?>
    <div class="switcher">
        <div class="p1Expo">
            <img id="p1Expo" src=" <?= $missionpath ?>p1expo_protoss.jpg" alt="Player 1 Expo">
        </div><div class="expoMinimap">
            <form action="#">
                <label><input type="radio" name="<?= $info ?>" value="protoss" checked>Protoss</label><br>
                <label><input type="radio" name="<?= $info ?>" value="terran">Terran</label><br>
                <label><input type="radio" name="<?= $info ?>" value="zerg">Zerg</label><br>
            </form>
            <br><br>
            <div>
                <img src="<?= $missionpath ?>expominimap.jpg" alt="Expansion Minimap">
            </div>
        </div><div class="p2Expo"><img id="p2Expo" src="<?= $missionpath ?>p2expo_protoss.jpg" alt="Player 2 Expo"></div>
    </div>

    <script>
        $("input[name='<?= $info ?>']").change(function () {
            var race = $(this).val();
            var oldImg = $('#p1Expo');
            var img = new Image();
            img.src = '<?= $missionpath ?>p1expo_' + race + '.jpg';
            var newImg = $(img).hide();
            $('.p1Expo').append(img);
            oldImg.stop(true).fadeOut(500, function () {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p1Expo');
            var oldImg = $('#p2Expo');
            var img = new Image();
            img.src = '<?= $missionpath ?>p2expo_' + race + '.jpg';
            var newImg = $(img).hide();
            $('.p2Expo').append(img);
            oldImg.stop(true).fadeOut(500, function () {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', 'p2Expo');
            return false;
        });
        var imgList = [];
        imgList.push('<?= $missionpath ?>p1expo_protoss.jpg');
        imgList.push('<?= $missionpath ?>p1expo_terran.jpg');
        imgList.push('<?= $missionpath ?>p1expo_zerg.jpg');
        imgList.push('<?= $missionpath ?>p2expo_protoss.jpg');
        imgList.push('<?= $missionpath ?>p2expo_terran.jpg');
        imgList.push('<?= $missionpath ?>p2expo_zerg.jpg');
        preload(imgList);
    </script>
    <?php
}

function switcher_comparison_generator($info, $mission)
{
    $missionpath = "/images/missiondata/{$mission}/";
    ?>
    <div class="switcher">
        <div class="basePic1" id="<?= $info ?>div1">
            <img id="<?= $info ?>1" src=" <?= $missionpath ?><?= $info ?>1_protoss.jpg" alt="Base 1">
        </div><div class="baseMinimap">
            <form action="#">
                <label><input type="radio" name="<?= $info ?>" value="protoss" checked>Protoss</label><br>
                <label><input type="radio" name="<?= $info ?>" value="terran">Terran</label><br>
                <label><input type="radio" name="<?= $info ?>" value="zerg">Zerg</label><br>
            </form>
            <br><br>
            <div>
                <img src="<?= $missionpath ?><?= $info ?>minimap.jpg" alt="Base Minimap">
            </div>
        </div><div class="basePic2" id="<?= $info ?>div2"><img id="<?= $info ?>2" src="<?= $missionpath ?><?= $info ?>2_protoss.jpg" alt="Base 2"></div>
    </div>

    <script>
        $("input[name='<?= $info ?>']").change(function () {
            var race = $(this).val();
            var oldImg = $('#<?= $info ?>1');
            var img = new Image();
            img.src = '<?= $missionpath ?><?= $info ?>1_' + race + '.jpg';
            var newImg = $(img).hide();
            $('#<?= $info ?>div1').append(img);
            oldImg.stop(true).fadeOut(500, function () {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', '<?= $info ?>1');
            var oldImg = $('#<?= $info ?>2');
            var img = new Image();
            img.src = '<?= $missionpath ?><?= $info ?>2_' + race + '.jpg';
            var newImg = $(img).hide();
            $('#<?= $info ?>div2').append(img);
            oldImg.stop(true).fadeOut(500, function () {
                $(this).remove();
            });
            newImg.fadeIn(500);
            newImg.attr('id', '<?= $info ?>2');
            return false;
        });
        var imgList = [];
        imgList.push('<?= $missionpath ?><?= $info ?>1_protoss.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>1_terran.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>1_zerg.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>2_protoss.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>2_terran.jpg');
        imgList.push('<?= $missionpath ?><?= $info ?>2_zerg.jpg');
        preload(imgList);
    </script>
    <?php
}
