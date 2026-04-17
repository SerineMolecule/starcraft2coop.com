<?php

$rows = 5 - $start;
for ($x = 0; $x < $rows; $x++) {
    $start += 1;
    echo '<tr class="fake round"><td class="number"><h2>Round ' . $start . '</h2></td><td class="mutset1"><div class="spoiler"><p>Click to reveal spoiler</p></div><div class="points">(x)</div><div class="muts"><div class="icons"><img class="tooltip" src="/images/tournament/blankmutator.png" alt="No Mutator" style="opacity: 1;"></div></div><div class="map"><img class="tooltip" src="/images/tournament/blankmap.png" alt="No Map"></div><div class="powers"></div><div class="links"><div class="link"><img src="/images/tournament/casticon.png" alt="Game Cast VOD"><p>No Game</p></div></div><td class="mutset2"><div class="points">(x)</div><div class="muts"><div class="icons"><img class="tooltip" src="/images/tournament/blankmutator.png" alt="No Mutator" style="opacity: 1;"></div></div><div class="map"><img class="tooltip" src="/images/tournament/blankmap.png" alt="No Map"></div><div class="powers"></div><div class="links"><div class="link"><img src="/images/tournament/casticon.png" alt="Game Cast VOD"><p>No Game</p></div></div></tr>';
}
