<div class="container">
    <div class="left">
        <select class="mutation">
            <option value="NULL"> </option>
            <?php
            $index = 0;
            foreach ($mutations as $mut) {
                echo "<option value='$index'>{$mut['mutation']}</option>\n";
                $index++;
            }
            ?>
        </select>
        <div class="mapcom">
            <div class="info">
                <img class="map" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" width="450" height="50" alt="" />
                <img class="difficulty" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" width="170" height="50" alt="" />
            </div>
            <div class="coms">
                <div class="com1" ondrop="drop(event)" ondragover="allowDrop(event)">
                </div>
                <div class="com2" ondrop="drop(event)" ondragover="allowDrop(event)">
                </div>
                <div class="com3" ondrop="drop(event)" ondragover="allowDrop(event)">
                </div>
            </div>
        </div>
        <div class="mut1 mutdata">
            <img class="mut1icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" width="50" height="50" alt="" />
            <p class="mut1desc"></p>
        </div>
        <div class="mut2 mutdata">
            <img class="mut2icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" width="50" height="50" alt="" />
            <p class="mut2desc"></p>
        </div>
        <div class="mut3 mutdata">
            <img class="mut3icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=" width="50" height="50" alt="" />
            <p class="mut3desc"></p>
        </div>
    </div>
    <div class="right">
    </div>
</div>