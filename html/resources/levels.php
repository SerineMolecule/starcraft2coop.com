<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Levels</title>
  <meta name="description" content="A list of experience brackets in Starcraft II Co-op, as well as a few calculators to show you how far you are through Ascension levels.">
  <meta name="keywords" content="Starcraft co-op guides levels">
  <link rel="canonical" href="https://starcraft2coop.com/resources/levels">
  <style>
    .centered {
        text-align:center
    }
    .split td:nth-child(2), .split th:nth-child(2),
    .split td:nth-child(4), .split th:nth-child(4),
    .split td:nth-child(6), .split th:nth-child(6),
    .split td:nth-child(8), .split th:nth-child(8),
    .split td:nth-child(10), .split th:nth-child(10){
        border-right:5px lightgrey solid;
    }
    #calcTable td, #calcTable th{
        border:none;
    }
    #calcTable td:first-child{
        text-align:right;
    }
    #progressContainer{
        height:25px;
        margin-bottom:30px;
    }
    #progressBar{
        display:inline-block;
        width:75%;
        height:25px;
        border-radius:5px;
        border:1px solid white;
        background-color:#111111;
    }
    #currentProgress{
        display:inline-block;
        margin:2px;
        height:20px;
        border-radius:5px;
        width:0px;
        background-color:darkslateblue;
    }
    #progress{
        display:inline-block;
        vertical-align:middle;
    }
    form, #gameCount{
        margin-bottom:50px;
    }
  </style>
  <?= startContent() ?>
    <h1>Co-op Levels, Experience Requirements, Mastery and Ascension Levels</h1>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#summary">Summary</a></p>
        <p><a href="#rewards">Rewards</a></p>
        <p><a href="#expTables">Experience Tables</a></p>
        <p><a href="#rawCalc">Games For Experience</a></p>
        <p><a href="#close">How Close to Ascension/Max Level</a></p>
        <p><a href="#numbers">Some Interesting Numbers</a></p>
    </div>
    <h2 id="summary">Summary</h2>
    <p>When you complete missions (either completely or partially), you earn mission experience. This experience goes towards levelling. There are a total of three phases in levelling. These phases are:</p>
    <ol>
        <li><b>Commander Levels:</b> Levels range from 1-15. As you level a commander, you unlock upgrades that make the commander stronger. Commander levels are not shared between commanders.</li>
        <li><b>Mastery Levels:</b> Levels range from 0-90. As you level your mastery, you are awarded with mastery points that you can put towards each commander. Mastery levels are shared between commanders. Every mastery level gives you one mastery point to put towards each commander you have. These mastery points make your commanders much more powerful and improve upon their passive bonuses or abilities. At max level, you will get a total of 90 Mastery Points to distribute into three different power sets, 30 points each. Each power set requires you to pick one of two special perks available, unique to the commander.</li>
        <li><b>Ascension Levels:</b> Levels range from 91-1000. They do not award anything except for some cosmetic rewards. Ascension levels are shared between commanders.</li>
    </ol>
    <p>When a commander reaches level 15 (requiring a total of 1,045,000 experience), a player may choose to Prestige them. This resets the commander back down to level 1 and unlocks a new selectable talent. A player may Prestige a maximum of three times, unlocking three talents.</p>
    <h2 id="rewards">Rewards</h2>
    <p>Rewards for the completion of a mission is as follows:</p>
    <ul>
        <li>Mission Completion: 20,000 EXP</li>
        <li>Bonus Completion: 2,000 EXP</li>
        <li>Difficulty Bonus:
            <br><br>
            Standard Difficulties:
            <table>
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>EXP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Casual</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Hard</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>Brutal</td>
                        <td>100%</td>
                    </tr>
                </tbody>
            </table>
            <br><br>
            Extended Difficulties:
            <table>
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>EXP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Brutal+</td>
                        <td>175%</td>
                    </tr>
                    <tr>
                        <td>Brutal+2</td>
                        <td>200%</td>
                    </tr>
                    <tr>
                        <td>Brutal+3</td>
                        <td>225%</td>
                    </tr>
                    <tr>
                        <td>Brutal+4</td>
                        <td>250%</td>
                    </tr>
                    <tr>
                        <td>Brutal+5</td>
                        <td>275%</td>
                    </tr>
                    <tr>
                        <td>Brutal+6</td>
                        <td>300%</td>
                    </tr>
                </tbody>
            </table>
            <br>
        </li>
        <li>Random Mission Bonus: 25%</li>
        <li>First Win of the Day Bonus: 10,000 EXP</li>
    </ul>
    <h2 id="expTables">Experience Tables</h2>
    <p>The experience requirements for leveling a commander is shown below:</p>
    <table class="centered">
        <thead>
            <tr>
                <th>Level Bracket</th>
                <th>Experience</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1-2</td>
                <td>20,000</td>
            </tr>
            <tr>
                <td>2-3</td>
                <td>40,000</td>
            </tr>
            <tr>
                <td>3-4</td>
                <td>45,000</td>
            </tr>
            <tr>
                <td>4-5</td>
                <td>50,000</td>
            </tr>
            <tr>
                <td>5-6</td>
                <td>55,000</td>
            </tr>
            <tr>
                <td>6-7</td>
                <td>60,000</td>
            </tr>
            <tr>
                <td>7-8</td>
                <td>67,500</td>
            </tr>
            <tr>
                <td>8-9</td>
                <td>75,000</td>
            </tr>
            <tr>
                <td>9-10</td>
                <td>82,500</td>
            </tr>
            <tr>
                <td>10-11</td>
                <td>90,000</td>
            </tr>
            <tr>
                <td>11-12</td>
                <td>100,000</td>
            </tr>
            <tr>
                <td>12-13</td>
                <td>110,000</td>
            </tr>
            <tr>
                <td>13-14</td>
                <td>120,000</td>
            </tr>
            <tr>
                <td>14-15</td>
                <td>130,000</td>
            </tr>
        </tbody>
    </table>
    <p>At level 15, you'll be at Mastery Level 0, which is where the progression below takes place.</p>
    <div class="tableContainer">
        <table class="centered split">
            <thead>
                <tr>
                    <th>Level</th>
                    <th>Exp needed</th>
                    <th>Level</th>
                    <th>Exp needed</th>
                    <th>Level</th>
                    <th>Exp needed</th>
                    <th>Level</th>
                    <th>Exp needed</th>
                    <th>Level</th>
                    <th>Exp needed</th>
                    <th>Level</th>
                    <th>Exp needed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0-1</td>
                    <td>5,000</td>
                    <td>15-16</td>
                    <td>34,000</td>
                    <td>30-31</td>
                    <td>89,000</td>
                    <td>45-46</td>
                    <td>147,000</td>
                    <td>60-61</td>
                    <td>229,000</td>
                    <td>75-76</td>
                    <td>355,000</td>
                </tr>
                <tr>
                    <td>1-2</td>
                    <td>20,000</td>
                    <td>16-17</td>
                    <td>36,000</td>
                    <td>31-32</td>
                    <td>92,000</td>
                    <td>46-47</td>
                    <td>151,000</td>
                    <td>61-62</td>
                    <td>236,000</td>
                    <td>76-77</td>
                    <td>365,000</td>
                </tr>
                <tr>
                    <td>2-3</td>
                    <td>20,500</td>
                    <td>17-18</td>
                    <td>38,000</td>
                    <td>32-33</td>
                    <td>95,000</td>
                    <td>47-48</td>
                    <td>155,000</td>
                    <td>62-63</td>
                    <td>243,000</td>
                    <td>77-78</td>
                    <td>375,000</td>
                </tr>
                <tr>
                    <td>3-4</td>
                    <td>21,000</td>
                    <td>18-19</td>
                    <td>41,000</td>
                    <td>33-34</td>
                    <td>99,000</td>
                    <td>48-49</td>
                    <td>160,000</td>
                    <td>63-64</td>
                    <td>250,000</td>
                    <td>78-79</td>
                    <td>385,000</td>
                </tr>
                <tr>
                    <td>4-5</td>
                    <td>21,500</td>
                    <td>19-20</td>
                    <td>44,000</td>
                    <td>34-35</td>
                    <td>103,000</td>
                    <td>49-50</td>
                    <td>165,000</td>
                    <td>64-65</td>
                    <td>258,000</td>
                    <td>79-80</td>
                    <td>395,000</td>
                </tr>
                <tr>
                    <td>5-6</td>
                    <td>22,000</td>
                    <td>20-21</td>
                    <td>47,000</td>
                    <td>35-36</td>
                    <td>107,000</td>
                    <td>50-51</td>
                    <td>170,000</td>
                    <td>65-66</td>
                    <td>266,000</td>
                    <td>80-81</td>
                    <td>415,000</td>
                </tr>
                <tr>
                    <td>6-7</td>
                    <td>22,500</td>
                    <td>21-22</td>
                    <td>50,000</td>
                    <td>36-37</td>
                    <td>111,000</td>
                    <td>51-52</td>
                    <td>175,000</td>
                    <td>66-67</td>
                    <td>274,000</td>
                    <td>81-82</td>
                    <td>445,000</td>
                </tr>
                <tr>
                    <td>7-8</td>
                    <td>23,000</td>
                    <td>22-23</td>
                    <td>54,000</td>
                    <td>37-38</td>
                    <td>115,000</td>
                    <td>52-53</td>
                    <td>180,000</td>
                    <td>67-68</td>
                    <td>282,000</td>
                    <td>82-83</td>
                    <td>485,000</td>
                </tr>
                <tr>
                    <td>8-9</td>
                    <td>24,000</td>
                    <td>23-24</td>
                    <td>58,000</td>
                    <td>38-39</td>
                    <td>119,000</td>
                    <td>53-54</td>
                    <td>185,000</td>
                    <td>68-69</td>
                    <td>290,000</td>
                    <td>83-84</td>
                    <td>535,000</td>
                </tr>
                <tr>
                    <td>9-10</td>
                    <td>25,000</td>
                    <td>24-25</td>
                    <td>62,000</td>
                    <td>39-40</td>
                    <td>123,000</td>
                    <td>54-55</td>
                    <td>191,000</td>
                    <td>69-70</td>
                    <td>299,000</td>
                    <td>84-85</td>
                    <td>595,000</td>
                </tr>
                <tr>
                    <td>10-11</td>
                    <td>26,000</td>
                    <td>25-26</td>
                    <td>66,000</td>
                    <td>40-41</td>
                    <td>127,000</td>
                    <td>55-56</td>
                    <td>197,000</td>
                    <td>70-71</td>
                    <td>308,000</td>
                    <td>85-86</td>
                    <td>665,000</td>
                </tr>
                <tr>
                    <td>11-12</td>
                    <td>27,000</td>
                    <td>26-27</td>
                    <td>71,000</td>
                    <td>41-42</td>
                    <td>131,000</td>
                    <td>56-57</td>
                    <td>203,000</td>
                    <td>71-72</td>
                    <td>317,000</td>
                    <td>86-87</td>
                    <td>745,000</td>
                </tr>
                <tr>
                    <td>12-13</td>
                    <td>28,000</td>
                    <td>27-28</td>
                    <td>76,000</td>
                    <td>42-43</td>
                    <td>135,000</td>
                    <td>57-58</td>
                    <td>209,000</td>
                    <td>72-73</td>
                    <td>326,000</td>
                    <td>87-88</td>
                    <td>835,000</td>
                </tr>
                <tr>
                    <td>13-14</td>
                    <td>30,000</td>
                    <td>28-29</td>
                    <td>81,000</td>
                    <td>43-44</td>
                    <td>139,000</td>
                    <td>58-59</td>
                    <td>215,000</td>
                    <td>73-74</td>
                    <td>335,000</td>
                    <td>88-89</td>
                    <td>935,000</td>
                </tr>
                <tr>
                    <td>14-15</td>
                    <td>32,000</td>
                    <td>29-30</td>
                    <td>86,000</td>
                    <td>44-45</td>
                    <td>143,000</td>
                    <td>59-60</td>
                    <td>222,000</td>
                    <td>74-75</td>
                    <td>345,000</td>
                    <td>89-90</td>
                    <td>1,035,000</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>From level 90 onwards, you need 200,000 experience to gain an ascension level.</p>
    <h2 id="rawCalc">Games For Experience</h2>
    <p>You can calculate how many games of each difficulty are required to get a certain amount of experience.</p>
    <p>Experience Required</p>
    <input type="text" name="experienceNeeded" id="experienceNeeded" maxlength="8" size="9" value="0">
    <p>Random Mission Bonus: <label><input type="checkbox" name="exp_random_mission_bonus" value="0.25"></label></p>
    <p>Bonus Objective Completed: <label><input type="checkbox" value="1" name="exp_bonus_objective_completed"></label></p>
    <p>Stimpack Active: <label><input type="checkbox" value="0.5" name="exp_stim_pack"></label></p>
    <p>Warchest Active: <label><input type="checkbox" value="0.5" name="exp_war_chest"></label></p>
    <p>Holiday Bonus:
        <label><input type="radio" checked="checked" value="0" name="exp_holiday_bonus">None</label>
        <label><input type="radio" value="0.5" name="exp_holiday_bonus">50%</label>
        <label><input type="radio" name="exp_holiday_bonus" value="1">100%</label>
    </p>
    <input type="submit" value="Go" id="calcGames">
    <div id ="gameCount">
        <p>Here's how many games (averaging 20 minutes each) it would take you:</p>
        <table class="centered">
            <thead>
                <tr>
                    <th>Difficulty</th>
                    <th>Games Needed</th>
                    <th>Total Time (Hours)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Casual</td>
                    <td><span id="expCasGames">0</span></td>
                    <td><span id="expCasTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Normal</td>
                    <td><span id="expNormGames">0</span></td>
                    <td><span id="expNormTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Hard</td>
                    <td><span id="expHardGames">0</span></td>
                    <td><span id="expHardTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal</td>
                    <td><span id="expBrutGames">0</span></td>
                    <td><span id="expBrutTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+1</td>
                    <td><span id="expBrut1Games">0</span></td>
                    <td><span id="expBrut1Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+2</td>
                    <td><span id="expBrut2Games">0</span></td>
                    <td><span id="expBrut2Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+3</td>
                    <td><span id="expBrut3Games">0</span></td>
                    <td><span id="expBrut3Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+4</td>
                    <td><span id="expBrut4Games">0</span></td>
                    <td><span id="expBrut4Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+5</td>
                    <td><span id="expBrut5Games">0</span></td>
                    <td><span id="expBrut5Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+6</td>
                    <td><span id="expBrut6Games">0</span></td>
                    <td><span id="expBrut6Time">0:00</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h2 id="close">How Close to Ascension/Max Level</h2>
    <p>Levelling to Level 90 yields an increase in power to every commander a player has access to and is usually the most important part in co-op gameplay. You can use the calculator below to see how far you are in your levelling path towards level 90.</p>
    <p>Your current mastery:</p>
    <input type="text" name="masteryLevel" id="masteryLevel" maxlength="4" size="5" value="0">
    <p>Target Level:
    <label><input type="radio" name="targetLevel" value="90" checked="checked"> 90</label>
    <label><input type="radio" name="targetLevel" value="1000"> 1000</label>
    </p>
    <p>Random Mission Bonus: <label><input type="checkbox" name="random_mission_bonus" value="0.25"></label></p>
    <p>Bonus Objective Completed: <label><input type="checkbox" value="1" name="bonus_objective_completed"></label></p>
    <p>Stimpack Active: <label><input type="checkbox" value="0.5" name="stim_pack"></label></p>
    <p>Warchest Active: <label><input type="checkbox" value="0.5" name="war_chest"></label></p>
    <p>Holiday Bonus:
        <label><input type="radio" checked="checked" value="0" name="holiday_bonus">None</label>
        <label><input type="radio" value="0.5" name="holiday_bonus">50%</label>
        <label><input type="radio" name="holiday_bonus" value="1">100%</label>
    </p>
    <input type="submit" value="Go" id="calcMastery">
    <br><br>
    <div id="progressContainer">
        <div id="progressBar">
            <div id="currentProgress"></div>
        </div>
        <div id="progress"><p>0%</p></div>
    </div>
    <div id ="mastery">
        <p>Here's how many games (averaging 20 minutes each) it would take you:</p>
        <table class="centered">
            <thead>
                <tr>
                    <th>Difficulty</th>
                    <th>Games Needed</th>
                    <th>Total Time (Hours)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Casual</td>
                    <td><span id="masCasGames">0</span></td>
                    <td><span id="masCasTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Normal</td>
                    <td><span id="masNormGames">0</span></td>
                    <td><span id="masNormTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Hard</td>
                    <td><span id="masHardGames">0</span></td>
                    <td><span id="masHardTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal</td>
                    <td><span id="masBrutGames">0</span></td>
                    <td><span id="masBrutTime">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+1</td>
                    <td><span id="masBrut1Games">0</span></td>
                    <td><span id="masBrut1Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+2</td>
                    <td><span id="masBrut2Games">0</span></td>
                    <td><span id="masBrut2Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+3</td>
                    <td><span id="masBrut3Games">0</span></td>
                    <td><span id="masBrut3Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+4</td>
                    <td><span id="masBrut4Games">0</span></td>
                    <td><span id="masBrut4Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+5</td>
                    <td><span id="masBrut5Games">0</span></td>
                    <td><span id="masBrut5Time">0:00</span></td>
                </tr>
                <tr>
                    <td>Brutal+6</td>
                    <td><span id="masBrut6Games">0</span></td>
                    <td><span id="masBrut6Time">0:00</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    <h2 id="numbers">Some Interesting Numbers</h2>
    <p>Use this calculator to get some interesting numbers regarding your leveling.</p>
    <form action="#">
        (There are a total of <?php echo(count(scandir("../images/commanderportraits")) - 2); ?> commanders currently)
        <br>
        <table id="calcTable">
            <thead>
                <tr>
                    <th></th>
                    <th>Asia</th>
                    <th>CN</th>
                    <th>EU</th>
                    <th>NA</th>
                    <th>SEA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ascension Levels</td>
                    <td><input type="text" name="krLevel" id="krLevel" maxlength="4" size="4" value=<?=$levelInfo['Asia'][0] = $levelInfo['Asia'][0] ?? '0'?>></td>
                    <td><input type="text" name="cnLevel" id="cnLevel" maxlength="4" size="4" value=<?=$levelInfo['CN'][0] = $levelInfo['CN'][0] ?? '0'?>></td>
                    <td><input type="text" name="euLevel" id="euLevel" maxlength="4" size="4" value=<?=$levelInfo['EU'][0] = $levelInfo['EU'][0] ?? '0'?>></td>
                    <td><input type="text" name="naLevel" id="naLevel" maxlength="4" size="4" value=<?=$levelInfo['NA'][0] = $levelInfo['NA'][0] ?? '0'?>></td>
                    <td><input type="text" name="seaLevel" id="seaLevel" maxlength="4" size="4" value=<?=$levelInfo['SEA'][0] = $levelInfo['SEA'][0] ?? '0'?>></td>
                </tr>
                <tr>
                    <td>0 Prestige Lvl. 15 Commanders</td>
                    <td><input type="text" name="krComs0" id="krComs0" maxlength="2" size="2" value=<?=$prestigeInfo['Asia'][0] = $prestigeInfo['Asia'][0] ?? '0'?>></td>
                    <td><input type="text" name="cnComs0" id="cnComs0" maxlength="2" size="2" value=<?=$prestigeInfo['CN'][0] = $prestigeInfo['CN'][0] ?? '0'?>></td>
                    <td><input type="text" name="euComs0" id="euComs0" maxlength="2" size="2" value=<?=$prestigeInfo['EU'][0] = $prestigeInfo['EU'][0] ?? '0'?>></td>
                    <td><input type="text" name="naComs0" id="naComs0" maxlength="2" size="2" value=<?=$prestigeInfo['NA'][0] = $prestigeInfo['NA'][0] ?? '0'?>></td>
                    <td><input type="text" name="seaComs0" id="seaComs0" maxlength="2" size="2" value=<?=$prestigeInfo['SEA'][0] = $prestigeInfo['SEA'][0] ?? '0'?>></td>
                </tr>
                <tr>
                    <td>1 Prestige Lvl. 15 Commanders</td>
                    <td><input type="text" name="krComs1" id="krComs1" maxlength="2" size="2" value=<?=$prestigeInfo['Asia'][1] = $prestigeInfo['Asia'][1] ?? '0'?>></td>
                    <td><input type="text" name="cnComs1" id="cnComs1" maxlength="2" size="2" value=<?=$prestigeInfo['CN'][1] = $prestigeInfo['CN'][1] ?? '0'?>></td>
                    <td><input type="text" name="euComs1" id="euComs1" maxlength="2" size="2" value=<?=$prestigeInfo['EU'][1] = $prestigeInfo['EU'][1] ?? '0'?>></td>
                    <td><input type="text" name="naComs1" id="naComs1" maxlength="2" size="2" value=<?=$prestigeInfo['NA'][1] = $prestigeInfo['NA'][1] ?? '0'?>></td>
                    <td><input type="text" name="seaComs1" id="seaComs1" maxlength="2" size="2" value=<?=$prestigeInfo['SEA'][1] = $prestigeInfo['SEA'][1] ?? '0'?>></td>
                </tr>
                <tr>
                    <td>2 Prestige Lvl. 15 Commanders</td>
                    <td><input type="text" name="krComs2" id="krComs2" maxlength="2" size="2" value=<?=$prestigeInfo['Asia'][2] = $prestigeInfo['Asia'][2] ?? '0'?>></td>
                    <td><input type="text" name="cnComs2" id="cnComs2" maxlength="2" size="2" value=<?=$prestigeInfo['CN'][2] = $prestigeInfo['CN'][2] ?? '0'?>></td>
                    <td><input type="text" name="euComs2" id="euComs2" maxlength="2" size="2" value=<?=$prestigeInfo['EU'][2] = $prestigeInfo['EU'][2] ?? '0'?>></td>
                    <td><input type="text" name="naComs2" id="naComs2" maxlength="2" size="2" value=<?=$prestigeInfo['NA'][2] = $prestigeInfo['NA'][2] ?? '0'?>></td>
                    <td><input type="text" name="seaComs2" id="seaComs2" maxlength="2" size="2" value=<?=$prestigeInfo['SEA'][2] = $prestigeInfo['SEA'][2] ?? '0'?>></td>
                </tr>
                <tr>
                    <td>3 Prestige Lvl. 15 Commanders</td>
                    <td><input type="text" name="krComs3" id="krComs3" maxlength="2" size="2" value=<?=$prestigeInfo['Asia'][3] = $prestigeInfo['Asia'][3] ?? '0'?>></td>
                    <td><input type="text" name="cnComs3" id="cnComs3" maxlength="2" size="2" value=<?=$prestigeInfo['CN'][3] = $prestigeInfo['CN'][3] ?? '0'?>></td>
                    <td><input type="text" name="euComs3" id="euComs3" maxlength="2" size="2" value=<?=$prestigeInfo['EU'][3] = $prestigeInfo['EU'][3] ?? '0'?>></td>
                    <td><input type="text" name="naComs3" id="naComs3" maxlength="2" size="2" value=<?=$prestigeInfo['NA'][3] = $prestigeInfo['NA'][3] ?? '0'?>></td>
                    <td><input type="text" name="seaComs3" id="seaComs3" maxlength="2" size="2" value=<?=$prestigeInfo['SEA'][3] = $prestigeInfo['SEA'][3] ?? '0'?>></td>
                </tr>
            </tbody>
        </table>
         <br>
        <input type="submit" value="Calculate" id="calc">
        <div id ="stats">
            <p>The total experience you have earned is: <span id="totalExp">0</span>.</p>
            <p>If you only played on one server, with all commanders at Level 15 Prestige 3, you'd be level: <span id="bestLevel">0</span>.</p>
            <p>If you only played on one server, with only one commander  at Level 15 Prestige 0, you'd be level: <span id="maxLevel">0</span></p>
            <p>Here's how many games (averaging 20 minutes each) it would take you (without bounties, first win bonuses, or stimpacks but with random mission bonus and bonus objectives complete):</p>
            <table class="centered">
                <thead>
                    <tr>
                        <th>Difficulty</th>
                        <th>Games Played</th>
                        <th>Total Time (Hours)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Casual</td>
                        <td><span id="casGames">0</span></td>
                        <td><span id="casTime">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Normal</td>
                        <td><span id="normGames">0</span></td>
                        <td><span id="normTime">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Hard</td>
                        <td><span id="hardGames">0</span></td>
                        <td><span id="hardTime">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal</td>
                        <td><span id="brutGames">0</span></td>
                        <td><span id="brutTime">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal+</td>
                        <td><span id="brut1Games">0</span></td>
                        <td><span id="brut1Time">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal+2</td>
                        <td><span id="brut2Games">0</span></td>
                        <td><span id="brut2Time">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal+3</td>
                        <td><span id="brut3Games">0</span></td>
                        <td><span id="brut3Time">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal+4</td>
                        <td><span id="brut4Games">0</span></td>
                        <td><span id="brut4Time">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal+5</td>
                        <td><span id="brut5Games">0</span></td>
                        <td><span id="brut5Time">0:00</span></td>
                    </tr>
                    <tr>
                        <td>Brutal+6</td>
                        <td><span id="brut6Games">0</span></td>
                        <td><span id="brut6Time">0:00</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
    <script>
        var levelArray = [5000,20000,20500,21000,21500,22000,22500,23000,24000,25000,26000,27000,28000,30000,32000,34000,36000,38000,41000,44000,47000,50000,54000,58000,62000,66000,71000,76000,81000,86000,89000,92000,95000,99000,103000,107000,111000,115000,119000,123000,127000,131000,135000,139000,143000,147000,151000,155000,160000,165000,170000,175000,180000,185000,191000,197000,203000,209000,215000,222000,229000,236000,243000,250000,258000,266000,274000,282000,290000,299000,308000,317000,326000,335000,345000,355000,365000,375000,385000,395000,415000,445000,485000,535000,595000,665000,745000,835000,935000,1035000];
        var calcLevelFromExp= function(exp){
            var level=0;
            if(exp >= 18467500){
                level = 90 + Math.floor((exp-18467500)/200000);
            }
            else{
                var remainingexp = exp;
                while(remainingexp > 0){
                    remainingexp -= levelArray[level];
                    level++;
                }
            }
            return level;
        }
        var calcExpFromLevel = function(level){
            var totalExp=0;

            if(level ==0){
                totalExp=0;
            }
            else if(level > 90){
                totalExp = (18467500) + (level-90)*200000;
            }
            else{
                for (var i =0; i<level;i++){
                    totalExp+=levelArray[i];
                }
            }
            return totalExp;
        }
        var calcXPPerGame = function(objectiveBonus, randomBonus, difficulty, holidayBonus, stimBonus, chestBonus){
            return xpPerGame = (20000 + objectiveBonus * 2000) * (1 + randomBonus + difficulty + holidayBonus) * (1 + stimBonus + chestBonus);
        }
        $("#calcGames").on("click", function(event){
            event.preventDefault();
            var remainingExp;

            if($("#experienceNeeded").val()==""){remainingExp}else if(!$.isNumeric($("#experienceNeeded").val())){alert("Experience Needed is not numeric");}else{remainingExp= parseInt($("#experienceNeeded").val());}
            if(remainingExp<0){remainingExp = 0;$("#experienceNeeded").val("0");}

            randomBonus = +$('input[name=exp_random_mission_bonus]:checked').val() || 0
            objectiveBonus = +$('input[name=exp_bonus_objective_completed]:checked').val() || 0
            stimBonus = +$('input[name=exp_stim_pack]:checked').val() || 0
            chestBonus = +$('input[name=exp_war_chest]:checked').val() || 0
            holidayBonus = +$('input[name=exp_holiday_bonus]:checked').val()

            casGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 0, holidayBonus, stimBonus, chestBonus));
            casTime = Math.ceil(casGames /3);
            normGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 0.2, holidayBonus, stimBonus, chestBonus));
            normTime = Math.ceil(normGames /3);
            hardGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 0.5, holidayBonus, stimBonus, chestBonus));
            hardTime = Math.ceil(hardGames /3);
            brutGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 1, holidayBonus, stimBonus, chestBonus));
            brutTime = Math.ceil(brutGames /3);
            brut1Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 1.75, holidayBonus, stimBonus, chestBonus));
            brut1Time = Math.ceil(brut1Games /3);
            brut2Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2, holidayBonus, stimBonus, chestBonus));
            brut2Time = Math.ceil(brut2Games /3);
            brut3Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2.25, holidayBonus, stimBonus, chestBonus));
            brut3Time = Math.ceil(brut3Games /3);
            brut4Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2.5, holidayBonus, stimBonus, chestBonus));
            brut4Time = Math.ceil(brut4Games /3);
            brut5Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2.75, holidayBonus, stimBonus, chestBonus));
            brut5Time = Math.ceil(brut5Games /3);
            brut6Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 3, holidayBonus, stimBonus, chestBonus));
            brut6Time = Math.ceil(brut6Games /3);

            $("#expCasGames").text(casGames);
            $("#expCasTime").text(casTime);
            $("#expNormGames").text(normGames);
            $("#expNormTime").text(normTime);
            $("#expHardGames").text(hardGames);
            $("#expHardTime").text(hardTime);
            $("#expBrutGames").text(brutGames);
            $("#expBrutTime").text(brutTime);
            $("#expBrut1Games").text(brut1Games);
            $("#expBrut1Time").text(brut1Time);
            $("#expBrut2Games").text(brut2Games);
            $("#expBrut2Time").text(brut2Time);
            $("#expBrut3Games").text(brut3Games);
            $("#expBrut3Time").text(brut3Time);
            $("#expBrut4Games").text(brut4Games);
            $("#expBrut4Time").text(brut4Time);
            $("#expBrut5Games").text(brut5Games);
            $("#expBrut5Time").text(brut5Time);
            $("#expBrut6Games").text(brut6Games);
            $("#expBrut6Time").text(brut6Time);
        });
        $("#calcMastery").on("click", function(event){
            event.preventDefault();
            var masteryLevel;
            var currentExp=0;
            var remainingExp;
            var progress;
            var targetLevel;

            if($("#masteryLevel").val()==""){masteryLevel =0;}else if(!$.isNumeric($("#masteryLevel").val())){alert("Mastery Level is not numeric");}else{masteryLevel= parseInt($("#masteryLevel").val());}
            if(masteryLevel<0){masteryLevel = 0;$("#masteryLevel").val("0");}

            targetLevel = $('input[name=targetLevel]:checked').val()
            if(targetLevel==90){
                if(masteryLevel>90){masteryLevel = 90;$("#masteryLevel").val("90");}
            }
            else{
                if(masteryLevel>1000){masteryLevel = 1000;$("#masteryLevel").val("1000");}
            }

            randomBonus = +$('input[name=random_mission_bonus]:checked').val() || 0
            objectiveBonus = +$('input[name=bonus_objective_completed]:checked').val() || 0
            stimBonus = +$('input[name=stim_pack]:checked').val() || 0
            chestBonus = +$('input[name=war_chest]:checked').val() || 0
            holidayBonus = +$('input[name=holiday_bonus]:checked').val()

            neededExp = calcExpFromLevel(targetLevel);
            currentExp = calcExpFromLevel(masteryLevel);
            progress = currentExp/neededExp;
            remainingExp = neededExp - currentExp;

            casGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 0, holidayBonus, stimBonus, chestBonus));
            casTime = Math.ceil(casGames /3);
            normGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 0.2, holidayBonus, stimBonus, chestBonus));
            normTime = Math.ceil(normGames /3);
            hardGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 0.5, holidayBonus, stimBonus, chestBonus));
            hardTime = Math.ceil(hardGames /3);
            brutGames = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 1, holidayBonus, stimBonus, chestBonus));
            brutTime = Math.ceil(brutGames /3);
            brut1Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 1.75, holidayBonus, stimBonus, chestBonus));
            brut1Time = Math.ceil(brut1Games /3);
            brut2Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2, holidayBonus, stimBonus, chestBonus));
            brut2Time = Math.ceil(brut2Games /3);
            brut3Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2.25, holidayBonus, stimBonus, chestBonus));
            brut3Time = Math.ceil(brut3Games /3);
            brut4Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2.5, holidayBonus, stimBonus, chestBonus));
            brut4Time = Math.ceil(brut4Games /3);
            brut5Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 2.75, holidayBonus, stimBonus, chestBonus));
            brut5Time = Math.ceil(brut5Games /3);
            brut6Games = Math.ceil(remainingExp / calcXPPerGame(objectiveBonus, randomBonus, 3, holidayBonus, stimBonus, chestBonus));
            brut6Time = Math.ceil(brut6Games /3);

            $("#masCasGames").text(casGames);
            $("#masCasTime").text(casTime);
            $("#masNormGames").text(normGames);
            $("#masNormTime").text(normTime);
            $("#masHardGames").text(hardGames);
            $("#masHardTime").text(hardTime);
            $("#masBrutGames").text(brutGames);
            $("#masBrutTime").text(brutTime);
            $("#masBrut1Games").text(brut1Games);
            $("#masBrut1Time").text(brut1Time);
            $("#masBrut2Games").text(brut2Games);
            $("#masBrut2Time").text(brut2Time);
            $("#masBrut3Games").text(brut3Games);
            $("#masBrut3Time").text(brut3Time);
            $("#masBrut4Games").text(brut4Games);
            $("#masBrut4Time").text(brut4Time);
            $("#masBrut5Games").text(brut5Games);
            $("#masBrut5Time").text(brut5Time);
            $("#masBrut6Games").text(brut6Games);
            $("#masBrut6Time").text(brut6Time);

            if (progress>=0.99){
                $('#currentProgress').css('opacity', '0');
                $('#currentProgress').css('display', 'block');
                $('#currentProgress').css('width', 'auto');
                var autoWidth = $('#currentProgress').width();
                $('#currentProgress').css('display', 'inline-block');
                $("#currentProgress").css("width", 0);
                $('#currentProgress').css('opacity', '1');
                $("#currentProgress").animate({"width": autoWidth}, 1000);
                $("#progress p").text("100%");
            }
            else{
                $("#currentProgress").css("width", 0);
                $("#currentProgress").animate({"width" : progress*100 + "%"}, 1000);
                $("#progress p").text(parseInt(progress*100) + "%");
            }
        });
        $("#calc").on("click", function(event){
            event.preventDefault();
            var euLevel;
            var euCom;
            var krLevel;
            var krCom;
            var naLevel;
            var naCom;
            var seaLevel;
            var seaCom;
            var totalexp;
            var euLevelExp;
            var euComExp;
            var krLevelExp;
            var krComExp;
            var naLevelExp;
            var naComExp;
            var cnLevelExp;
            var cnComExp;
            var seaLevelExp;
            var seaComExp;
            var bestLevel;
            var maxLevel;
            var casGames;
            var casTime;
            var normGames;
            var normTime;
            var hardGames;
            var hardTime;
            var brutGames;
            var brutTime;
            var brut1Games;
            var brut1Time;
            var brut2Games;
            var brut2Time;
            var brut3Games;
            var brut3Time;
            var brut4Games;
            var brut4Time;
            var brut5Games;
            var brut5Time;
            var brut6Games;
            var brut6Time;

            if($("#krLevel").val()==""){krLevel=0}else if(!$.isNumeric($("#krLevel").val())){alert("KR Level is not numeric");return;}else{krLevel=parseInt($("#krLevel").val())}
            if(krLevel<0){krLevel = 0;$("#krLevel").val("0");}
            if($("#cnLevel").val()==""){cnLevel=0}else if(!$.isNumeric($("#cnLevel").val())){alert("CN Level is not numeric");return;}else{cnLevel=parseInt($("#cnLevel").val())}
            if(cnLevel<0){seaLevel = 0;$("#cnLevel").val("0");}
            if($("#euLevel").val()==""){euLevel =0;}else if(!$.isNumeric($("#euLevel").val())){alert("EU Level is not numeric");return;}else{euLevel= parseInt($("#euLevel").val());}
            if(euLevel<0){euLevel = 0;$("#euLevel").val("0");}
            if($("#naLevel").val()==""){naLevel=0}else if(!$.isNumeric($("#naLevel").val())){alert("NA Level is not numeric");return;}else{naLevel=parseInt($("#naLevel").val())}
            if(naLevel<0){naLevel = 0;$("#naLevel").val("0");}
            if($("#seaLevel").val()==""){seaLevel=0}else if(!$.isNumeric($("#seaLevel").val())){alert("SEA Level is not numeric");return;}else{seaLevel=parseInt($("#seaLevel").val())}
            if(seaLevel<0){seaLevel = 0;$("#seaLevel").val("0");}

            var serverArray=['kr','cn','eu','na','sea']
            var cnComExp = 0;
            var krComExp = 0;
            var euComExp = 0;
            var naComExp = 0;
            var seaComExp = 0;
            var exp = {};
            for (var i = 0; i < serverArray.length; i++) {
                exp[serverArray[i]] = 0;
                for(var j=0; j < 4; j++){
                    var elementName = "#" + serverArray[i] + 'Coms' + j.toString();
                    var elementVal = 0;
                    if($(elementName).val()==""){elementVal =0;}else if(!$.isNumeric($(elementName).val())){alert("Prestige is not numeric");return;}else{elementVal= parseInt($(elementName).val());}
                    if(elementVal < 0){
                        elementVal = 0;
                    }
                    exp[serverArray[i]] += elementVal * 1045000 * (j+1);
                }
            }
            krComExp = exp['kr'];
            cnComExp = exp['cn'];
            euComExp = exp['eu'];
            naComExp = exp['na'];
            seaComExp = exp['sea'];

            euLevelExp = calcExpFromLevel(euLevel);
            krLevelExp = calcExpFromLevel(krLevel);
            naLevelExp = calcExpFromLevel(naLevel);
            cnLevelExp = calcExpFromLevel(cnLevel);
            seaLevelExp = calcExpFromLevel(seaLevel);

            totalExp = euComExp + krComExp + naComExp + cnComExp + seaComExp + euLevelExp + krLevelExp + naLevelExp + cnLevelExp + seaLevelExp;
            bestLevel = calcLevelFromExp(totalExp - <?= count(scandir("../images/commanderportraits")) - 2 ?> * (1045000*4));
            maxLevel = calcLevelFromExp(totalExp - 1045000);

            casGames = Math.ceil(totalExp / (22000 + 5500));
            casTime = Math.ceil(casGames /3);
            normGames = Math.ceil(totalExp / (22000 + 5500 + (0.20 * 22000)));
            normTime = Math.ceil(normGames /3);
            hardGames = Math.ceil(totalExp / (22000 + 5500 + (0.50 * 22000)));
            hardTime = Math.ceil(hardGames /3);
            brutGames = Math.ceil(totalExp / (22000 + 5500 + (1.00 * 22000)));
            brutTime = Math.ceil(brutGames /3);
            brut1Games = Math.ceil(totalExp / (22000 + 5500 + (1.75 * 22000)));
            brut1Time = Math.ceil(brut1Games /3);
            brut2Games = Math.ceil(totalExp / (22000 + 5500 + (2.00 * 22000)));
            brut2Time = Math.ceil(brut2Games /3);
            brut3Games = Math.ceil(totalExp / (22000 + 5500 + (2.25 * 22000)));
            brut3Time = Math.ceil(brut3Games /3);
            brut4Games = Math.ceil(totalExp / (22000 + 5500 + (2.50 * 22000)));
            brut4Time = Math.ceil(brut4Games /3);
            brut5Games = Math.ceil(totalExp / (22000 + 5500 + (2.75 * 22000)));
            brut5Time = Math.ceil(brut5Games /3);
            brut6Games = Math.ceil(totalExp / (22000 + 5500 + (3.11 * 22000)));
            brut6Time = Math.ceil(brut6Games /3);

            $("#totalExp").text(totalExp.toLocaleString('en'));
            $("#bestLevel").text(bestLevel);
            $("#maxLevel").text(maxLevel);
            $("#casGames").text(casGames);
            $("#casTime").text(casTime);
            $("#normGames").text(normGames);
            $("#normTime").text(normTime);
            $("#hardGames").text(hardGames);
            $("#hardTime").text(hardTime);
            $("#brutGames").text(brutGames);
            $("#brutTime").text(brutTime);
            $("#brut1Games").text(brut1Games);
            $("#brut1Time").text(brut1Time);
            $("#brut2Games").text(brut2Games);
            $("#brut2Time").text(brut2Time);
            $("#brut3Games").text(brut3Games);
            $("#brut3Time").text(brut3Time);
            $("#brut4Games").text(brut4Games);
            $("#brut4Time").text(brut4Time);
            $("#brut5Games").text(brut5Games);
            $("#brut5Time").text(brut5Time);
            $("#brut6Games").text(brut6Games);
            $("#brut6Time").text(brut6Time);
        });
    </script>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
