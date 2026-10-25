<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"/>
    <link rel='shortcut icon' href='/images/favicon.ico' type='image/x-icon' />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>Starcraft 2 Co-op - CtG's Mutation Commander List</title>
    <link href="https://fonts.googleapis.com/css2?family=Science+Gothic:wght@348&display=swap" rel="stylesheet">
    <style>
        body{
            background:url("../images/ctg/bg.jpg");
            background-size:cover;
            background-attachment: fixed;
            font-family:arial;
            color:white;
            font-size:1.15rem;
            min-height:calc(100vh - 16px);
            display:flex;
            flex-direction:column;
            align-items:flex-start;
        }
        .box{
            display:inline-block;
            background:url("../images/ctg/border-on-black.png");
            padding:25px;
            width:930px;
            height:361px;
            box-sizing:border-box;
            flex-shrink:0;
            background-repeat: no-repeat;
        }
        .pool{
            background:rgba(30,37,91,0.75);
            padding:1rem;
            border-radius:0.5rem;
            width:1800px;
            max-width:100%;
            box-sizing:border-box;
            margin-top:auto;
            border:5px solid white;
            display:flex;
            flex-wrap:wrap;
            gap:0.5rem;
        }
        .pool img{
            cursor:pointer;
            width:75px;
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
            background: black;
            margin-top: 30px;
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <?php
    require_once __DIR__ . '/../../includes/queries.php';
    $mutators = get_mutators();
    $mutations = get_weeklymutations();
    $mutations = array_values(array_filter($mutations, fn($mutation) => $mutation['mutation'] != 'Sudden but Inevitable'));
    foreach ($mutations as &$row) {
        if ($row['map'] == 'Lock and Load') {
            $row['map'] = 'Lock Load';
        }
    }
    ?>

    <div id="current-commander"></div>

    <div id="box1" class="box">
        <select class="mutation">
            <option value="NULL">(select a mutation)</option>
            <?php
            $index = 0;
            foreach ($mutations as $mut) {
                echo "<option value='$index'>{$mut['mutation']}</option>\n";
                $index++;
            }
            ?>
        </select>
        <div class="info">
            <img class="map" width="450" height="50" alt="" />
            <img class="difficulty" width="170" height="50" alt="" style="float:right" />
        </div>
        <div class="mut1 mutdata">
            <img class="mut1icon" width="50" height="50" alt="" />
            <p class="mut1desc"></p>
        </div>
        <div class="mut2 mutdata">
            <img class="mut2icon" width="50" height="50" alt="" />
            <p class="mut2desc"></p>
        </div>
        <div class="mut3 mutdata">
            <img class="mut3icon" width="50" height="50" alt="" />
            <p class="mut3desc"></p>
        </div>
    </div>

    <div class="pool">
        <img id="abathur"  src="/images/commanderportraits/abathurportrait.png">
        <img id="alarak"  src="/images/commanderportraits/alarakportrait.png">
        <img id="mengsk"  src="/images/commanderportraits/mengskportrait.png">
        <img id="artanis"  src="/images/commanderportraits/artanisportrait.png">
        <img id="dehaka"  src="/images/commanderportraits/dehakaportrait.png">
        <img id="fenix"  src="/images/commanderportraits/fenixportrait.png">
        <img id="horner"  src="/images/commanderportraits/hornerportrait.png">
        <img id="karax"  src="/images/commanderportraits/karaxportrait.png">
        <img id="kerrigan"  src="/images/commanderportraits/kerriganportrait.png">
        <img id="nova"  src="/images/commanderportraits/novaportrait.png">
        <img id="raynor" src="/images/commanderportraits/raynorportrait.png">
        <img id="stetmann"  src="/images/commanderportraits/stetmannportrait.png">
        <img id="stukov"  src="/images/commanderportraits/stukovportrait.png">
        <img id="swann"  src="/images/commanderportraits/swannportrait.png">
        <img id="tychus"  src="/images/commanderportraits/tychusportrait.png">
        <img id="vorazun"  src="/images/commanderportraits/vorazunportrait.png">
        <img id="zagara"  src="/images/commanderportraits/zagaraportrait.png">
        <img id="zeratul"  src="/images/commanderportraits/zeratulportrait.png">
    </div>

    <script>
        $(".pool img").on("click", function(){
            $("#current-commander").empty().append($("<img>", {
                src: "/images/ctg/commanders/" + this.id + ".png",
                alt: this.id,
                width: 500,
                height: 94
            }));
        });
        const mutatorsById = <?= json_encode(
            array_column($mutators, null, 'mutatorid'),
            JSON_HEX_TAG | JSON_THROW_ON_ERROR,
        ) ?>;
        const mutationsList = <?= json_encode(
            $mutations,
            JSON_HEX_TAG | JSON_THROW_ON_ERROR,
        ) ?>;
        $(".mutation").change(function(){
            var elem = $(this).parent();
            var mutationIndex = $(this).prop('selectedIndex') - 1;
            var selectedMutation = mutationsList[mutationIndex];

            if (!selectedMutation) {
                elem.find(".map, .difficulty, .mutdata img").removeAttr("src");
                elem.find(".mutdata p").empty();
                return;
            }

            var mapFile = "../images/ctg/" + selectedMutation.map.replace(/ /g,'').toLowerCase() +".png";
            elem.find(".map").attr('src', mapFile);

            var totalabom = 0;
            if(selectedMutation.mut01 !=null){
                var mutator1 = mutatorsById[selectedMutation.mut01];
                var mutationFile = "/images/mutators/"+ mutator1.mutatorid +".png";
                totalabom+=parseInt(mutator1.abomination);
                elem.find(".mut1icon").attr('src', mutationFile);
                elem.find(".mut1desc").html("<b class='mutname'>" + mutator1.mutatorname + "</b><br>" + mutator1.mutatordescription);
            }
            else{
                elem.find(".mut1icon").removeAttr("src");
                elem.find(".mut1desc").text("");
            }
            if(selectedMutation.mut02 !=null){
                var mutator2 = mutatorsById[selectedMutation.mut02];
                var mutationFile = "/images/mutators/"+ mutator2.mutatorid +".png";
                elem.find(".mut2icon").attr('src', mutationFile);
                elem.find(".mut2desc").html("<b class='mutname'>" + mutator2.mutatorname + "</b><br>" + mutator2.mutatordescription);
                totalabom+=parseInt(mutator2.abomination);
            }
            else{
                elem.find(".mut2icon").removeAttr("src");
                elem.find(".mut2desc").text("");
            }
            if(selectedMutation.mut03 !=null){
                var mutator3 = mutatorsById[selectedMutation.mut03];
                var mutationFile = "/images/mutators/"+ mutator3.mutatorid +".png";
                elem.find(".mut3icon").attr('src', mutationFile);
                elem.find(".mut3desc").html("<b class='mutname'>" + mutator3.mutatorname + "</b><br>" + mutator3.mutatordescription);
                totalabom+=parseInt(mutator3.abomination);
            }
            else{
                elem.find(".mut3icon").removeAttr("src");
                elem.find(".mut3desc").text("");
            }
            var brutalfile = "../images/ctg/brutal";
            if(totalabom==0){
                brutalfile+="0.png";
            }
            else if(totalabom>=1 && totalabom<=6){
                brutalfile+="1.png";
            }
            else if(totalabom>=7 && totalabom<=8){
                brutalfile+="2.png";
            }
            else if(totalabom>=9 && totalabom<=10){
                brutalfile+="3.png";
            }
            else if(totalabom>=11 && totalabom<=14){
                brutalfile+="4.png";
            }
            else if(totalabom>=15 && totalabom<=19){
                brutalfile+="5.png";
            }
            else{
                brutalfile+="6.png";
            }
            elem.find(".difficulty").attr('src', brutalfile);
        })
    </script>
</body>
</html>
