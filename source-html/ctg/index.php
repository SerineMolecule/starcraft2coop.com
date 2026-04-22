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
    <style>
        body{
            background:url("../images/ctg/bg.jpg");
            background-size:cover;
            background-attachment: fixed;
            font-family:arial;
            color:white;
            font-size:1.15rem;
        }
        .box{
            display:inline-block;
            background:url("../images/ctg/border.png");
            padding:1rem;
            width:905px;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
        .pool{
            display:inline-block;
            background:rgba(30,37,91,0.75);
            padding:1rem;
            border-radius:0.5rem;
            width:1800px;
            border:5px solid white;
            display:flex;
            justify-content: space-around;
        }
        .pool img{
            cursor:pointer;
            width:75px;
        }
        .mapcom{
            padding-top:0.5rem;
            display:grid;
            grid-template-columns: 75% 25%;
        }
        .info{
            grid-column-start:1;
            grid-column-end:2;
        }
        .info img{
            display:inline;
            padding-right:1rem;
        }
        .coms{
            grid-column-start:2;
            grid-column-end:3;
            display:flex;
            justify-content: space-around;
        }
        .coms div{
            border: 2px solid white;
            width:75px;
            height:75px;
        }
        .coms img{
            width:125%;
        }
        .mutname{
            color:#f5eea6;
        }
        .mutdata{
            display:grid;
            grid-template-columns: 76px calc(100% - 50px - 1rem);
            align-items:center;
        }
        .mutdata img{
            grid-column-start:1;
            grid-column-end:2;
        }
        .mutdata p{
            padding-left:1rem;
            grid-column-start:2;
            grid-column-end:3;
            margin:0.5rem;
        }
        img{
            display:block;
            max-width:100%;
        }
        select{
            font-size:1.75rem;
        }
        .hidden{
            display:none;
        }
    </style>
  </head>
<body>
    <?php
    require_once '../../includes/queries.php';
    $mutators = get_mutators();
    $mutations = get_weeklymutations();
    $mutations = array_filter($mutations, fn($mutation) => $mutation['mutation'] != 'Sudden But Inevitable');
    foreach ($mutations as &$row) {
        if ($row['map'] == "Lock and Load") {
            $row['map'] = "Lock Load";
        }
    }
    ?>
    <div id="mutatorsList" class="hidden">
    <?php
        echo(json_encode($mutators));
    ?>
    </div>
    <div id="mutationsList" class="hidden">
        <?php
            echo(json_encode($mutations));
        ?>
    </div>
    <div id="box1" class="box">
        <?php include 'selector.php'; ?>
    </div>
    <div id="box2" class="box">
        <?php include 'selector.php'; ?>
    </div>
    <div id="box3" class="box">
        <?php include 'selector.php'; ?>
    </div>
    <div id="box4" class="box">
        <?php include 'selector.php'; ?>
    </div>
    <div id="box5" class="box">
        <?php include 'selector.php'; ?>
    </div>
    <div id="box6" class="box">
        <?php include 'selector.php'; ?>
    </div>
    <div class="pool" ondrop="drop(event)" ondragover="allowDrop(event)">
        <img id="raynor" src="/images/commanderportraits/raynorportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="kerrigan"  src="/images/commanderportraits/kerriganportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="artanis"  src="/images/commanderportraits/artanisportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="swann"  src="/images/commanderportraits/swannportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="zagara"  src="/images/commanderportraits/zagaraportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="vorazun"  src="/images/commanderportraits/vorazunportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="karax"  src="/images/commanderportraits/karaxportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="abathur"  src="/images/commanderportraits/abathurportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="alarak"  src="/images/commanderportraits/alarakportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="nova"  src="/images/commanderportraits/novaportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="stukov"  src="/images/commanderportraits/stukovportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="fenix"  src="/images/commanderportraits/fenixportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="dehaka"  src="/images/commanderportraits/dehakaportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="horner"  src="/images/commanderportraits/hornerportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="tychus"  src="/images/commanderportraits/tychusportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="zeratul"  src="/images/commanderportraits/zeratulportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="stetmann"  src="/images/commanderportraits/stetmannportrait.png" draggable="true" ondragstart="drag(event)">
        <img id="mengsk"  src="/images/commanderportraits/mengskportrait.png" draggable="true" ondragstart="drag(event)">
    </div>
    <script>
        var mutatorsList = JSON.parse($("#mutatorsList").text());
        var mutationsList = JSON.parse($("#mutationsList").text());
        $(".mutation").change(function(){
            var elem = $(this).parent();
            var mutationIndex = $(this).prop('selectedIndex') - 1;
            var selectedMutation = mutationsList[mutationIndex];

            var mapFile = "../images/ctg/" + selectedMutation.map.replace(/ /g,'').toLowerCase() +".png";
            elem.find(".map").attr('src', mapFile);

            var totalabom = 0;
            if(selectedMutation.mut01 !=null){
                var mutationFile = "/images/mutators/"+ mutatorsList[selectedMutation.mut01-1].mutatorname.replace(/ /g,'').toLowerCase() +".png";
                totalabom+=parseInt(mutatorsList[selectedMutation.mut01-1].abomination);
                elem.find(".mut1icon").attr('src', mutationFile);
                elem.find(".mut1desc").html("<b class='mutname'>" + mutatorsList[selectedMutation.mut01-1].mutatorname + "</b><br>" + mutatorsList[selectedMutation.mut01-1].mutatordescription);
            }
            else{
                elem.find(".mut1icon").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=");
                elem.find(".mut1desc").text("");
            }
            if(selectedMutation.mut02 !=null){
                var mutationFile = "/images/mutators/"+ mutatorsList[selectedMutation.mut02-1].mutatorname.replace(/ /g,'').toLowerCase() +".png";
                elem.find(".mut2icon").attr('src', mutationFile);
                elem.find(".mut2desc").html("<b class='mutname'>" + mutatorsList[selectedMutation.mut02-1].mutatorname + "</b><br>" + mutatorsList[selectedMutation.mut02-1].mutatordescription);
                totalabom+=parseInt(mutatorsList[selectedMutation.mut02-1].abomination);
            }
            else{
                elem.find(".mut2icon").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=");
                elem.find(".mut2desc").text("");
            }
            if(selectedMutation.mut03 !=null){
                var mutationFile = "/images/mutators/"+ mutatorsList[selectedMutation.mut03-1].mutatorname.replace(/ /g,'').toLowerCase() +".png";
                elem.find(".mut3icon").attr('src', mutationFile);
                elem.find(".mut3desc").html("<b class='mutname'>" + mutatorsList[selectedMutation.mut03-1].mutatorname + "</b><br>" + mutatorsList[selectedMutation.mut03-1].mutatordescription);
                totalabom+=parseInt(mutatorsList[selectedMutation.mut03-1].abomination);
            }
            else{
                elem.find(".mut3icon").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=");
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
        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }
        function allowDrop(ev) {
          ev.preventDefault();
        }

        function drop(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("text");
          if(ev.target.tagName=="IMG" || ev.target.childElementCount==2){
              return;
          }
          ev.target.appendChild(document.getElementById(data));
        }
    </script>
</body>
</html>
