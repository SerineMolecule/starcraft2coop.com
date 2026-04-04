<?php

session_start();
if (!isset($_SESSION["known"])) {
    echo("Error!");
    die();
}
if (!isset($_GET['difficulty'])) {
    echo("Error!");
    die();
}

if (!ctype_digit($_GET['difficulty'])) {
    echo("Error!");
    die();
}

$difficulty = intval($_GET['difficulty']);
if ($difficulty < 1 || $difficulty > 6) {
    echo("Error!");
    die();
}

require __DIR__ . '/../data/queries.php';

$oneBrutal = get_brutalplus($difficulty);
$minMutators = $oneBrutal['minmutators'];
$maxMutators = $oneBrutal['maxmutators'];
$minPoints = $oneBrutal['minpoints'];
$maxPoints = $oneBrutal['maxpoints'];


$pointCeiling = 10; //highest possible mutator cost

//Generate an array with mutator cost vs. # of mutators with that cost
$countArray = generateMutatorCountArray();

$template = array_fill(0, $pointCeiling + 1, 0);
$templatePossibilities = [];

//Go through and list out all viable mutator templates. The resulting array is a little more complex than expected. Check the function definition for more info
traverse($template, 1, 0, 0);

//Get a randomized (with weighting) mutator count for the generated difficulty
$mutatorCount = getMutatorCount($minMutators, $maxMutators);

//Pick a random template with the selected mutator count from the possibilities that were generated earlier
$finalTemplate = selectTemplate($mutatorCount);
echo(json_encode($finalTemplate));


function selectTemplate($mutatorCount)
{
    global $templatePossibilities;
    $selectedIndex = array_rand($templatePossibilities[$mutatorCount][0]);
    return $templatePossibilities[$mutatorCount][0][$selectedIndex];
}

function getMutatorCount($minMutators, $maxMutators)
{
    global $templatePossibilities;
    /*  There is currently a bug in Blizzard's mutator count selection. Possibility count is based on Brutal+1 only and not the selected difficulty
        As a result a temporary array with the static values (combos) has been added to this function to address the "traverse" function requirements.
        If this bug is fixed, instead of using the static array, use the $templatePossibilities array that stores the possibilities for each mutator count.

        TO FIX:
        1. Change bugComboArray to contain values from the actual templatePossibilitiesArray
        2. Check to see if bugTargetPercentages change depending on Brutal+1 -> Brutal+4 from the editor itself
    */

    //Given that the mutation templates are generated, they may have a vastly different number of possibilities depending on mutation count
    //This calculates a new weighting to push it closer to the intended target percentage for the number of mutators in the mutation
    //Once the new weightings are calculated, get the randomized mutator count.

    $bugComboArray = [0,0,499, 3541, 5502];
    $bugTargetPercentage = [0,0,0.48, 0.48, 0.04];

    $bugTotalCombos = 0;
    for ($i = $minMutators; $i <= $maxMutators; $i++) {
        $bugTotalCombos += $bugComboArray[$i];
    }

    $weightModifierArray = [];
    $mutatorWeights = [];
    $totalMutatorWeight = 0;
    for ($i = $minMutators; $i <= $maxMutators; $i++) {
        $weightModifierArray[$i] = $bugTargetPercentage[$i] / ($bugComboArray[$i] / $bugTotalCombos);
        $mutatorWeights[$i] = $templatePossibilities[$i][1] * $weightModifierArray[$i];
        $totalMutatorWeight += $mutatorWeights[$i];
    }
    return getRandomWeightedElement($mutatorWeights);
}

function getRandomWeightedElement(array $weightedValues)
{
    $rand = mt_rand(1, (int) array_sum($weightedValues));
    foreach ($weightedValues as $key => $value) {
        $rand -= $value;
        if ($rand <= 0) {
            return $key;
        }
    }
}

function traverse($template, $index, $totalCost, $totalMutators)
{
    //Loop Through all possible templates
    global $countArray,$minMutators, $maxMutators, $minPoints, $maxPoints, $pointCeiling;

    for ($i = 0; $i <= $maxMutators; $i++) {
        $template[$index] = $i;
        $newTotalCost = $totalCost + $i * $index;
        $newTotalMutators = $totalMutators + $i;
        if ($newTotalMutators <= $maxMutators && $newTotalCost <= $maxPoints && $i <= $countArray[$index]) {
            if ($newTotalMutators >= $minMutators && $newTotalCost >= $minPoints && $i > 0) {
                consider($template, $newTotalMutators);
            }
            if ($index < $pointCeiling) {
                traverse($template, $index + 1, $newTotalCost, $newTotalMutators);
            }
        }
    }
    return 1; //fix this maybe?
}

function consider($template, $mutatorCount)
{
    //Make sure a template meets the required restrictions. If it does, add it to the global Template Possibilities
    //The template possibilities array is a 1 dimensional array with a length of the maximum number of mutators allowed for the selected difficulty
    //In each slot, an array of length 2 is stored.
    //In index 0 is a list of viable mutator templates.
    //In index 1 is the total count of possible mutations generated, based on the calculateCombos function

    global $templatePossibilities;
    $templatePossibilities[$mutatorCount][0][] = $template;
    $combos = calculateCombos($template);
    if (isset($templatePossibilities[$mutatorCount][1])) {
        $templatePossibilities[$mutatorCount][1] += $combos;
    } else {
        $templatePossibilities[$mutatorCount][] = $combos;
    }

    //$templatePossibilities[$mutatorCount][0][]= $templatePossibilities[$mutatorCount][1];
}

function calculateCombos($template)
{
    //Given a template, calculate the possible unique mutations that can be generated.
    global $pointCeiling, $countArray;
    $combos = 1;
    for ($i = 1; $i <= $pointCeiling; $i++) {
        $combos *= nCr($countArray[$i], $template[$i]);
    }
    return $combos;
}

function nCr($n, $r)
{

    return (factorial($n) / (factorial($r) * factorial($n - $r)));
}

function factorial($number)
{
    if ($number <= 1) {
        return 1;
    } else {
        return $number * factorial($number - 1);
    }
}

function generateMutatorCountArray()
{
    //Generate an array with mutator cost vs. # of mutators with that cost
    global $pointCeiling;

    include 'sqlconnection.php';

    $sql = "SELECT abomination, count(abomination) FROM mutators group by abomination";
    $result = mysqli_query($con, $sql);
    $countArray = array_fill(0, $pointCeiling + 1, 0);
    while ($row = mysqli_fetch_array($result)) {
        if (intval($row[1]) > 0) {
            $countArray[$row[0]] = intval($row[1]);
        } else {
            $countArray[$row[0]] = 0;
        }
    }
    $con->close();
    return $countArray;
}
