<?php

require_once "../../includes/wrapper-static.php";
?>
<?= startHead() ?>
  <title>Starcraft 2 Co-op - Bugs List</title>
  <meta name="description" content="A list of bugs that are present in the current Starcraft II Co-op Patch">
  <meta name="keywords" content="Starcraft co-op bugs glitches">
  <link rel="canonical" href="https://starcraft2coop.com/resources/bugs">
  <?= startContent() ?>
    <h1>Starcraft Co-op Bugs List</h1>
    <?php include("../../includes/reporterror.php");?>
    <div id="links">
        <h2>Sections on this Page</h2>
        <p><a href="#core">Game Core</a></p>
        <p><a href="#amon">Amon</a></p>
        <p><a href="#abathur">Abathur</a></p>
        <p><a href="#alarak">Alarak</a></p>
        <p><a href="#artanis">Artanis</a></p>
        <p><a href="#dehaka">Dehaka</a></p>
        <p><a href="#fenix">Fenix</a></p>
        <p><a href="#horner">Han/Horner</a></p>
        <p><a href="#karax">Karax</a></p>
        <p><a href="#kerrigan">Kerrigan</a></p>
        <p><a href="#mengsk">Mengsk</a></p>
        <p><a href="#nova">Nova</a></p>
        <p><a href="#raynor">Raynor</a></p>
        <p><a href="#stetmann">Stetmann</a></p>
        <p><a href="#stukov">Stukov</a></p>
        <p><a href="#swann">Swann</a></p>
        <p><a href="#tychus">Tychus</a></p>
        <p><a href="#vorazun">Vorazun</a></p>
        <p><a href="#zagara">Zagara</a></p>
        <p><a href="#zeratul">Zeratul</a></p>
        <p><a href="#missions">Missions</a></p>
        <p><a href="#mutators">Mutators</a></p>
        <p><a href="#QOL">Quality of Life</a></p>
        <p><a href="#aesthetic">Aesthetic</a></p>
    </div>
    <h2 id="core">Game Core</h2>
    <ul>
        <li>After Warpgate Research completion, Gateways will automatically transform into Warpgates, even if a unit is in production. That unit's supply and cost is not refunded. Reverting to Gateway will complete production.</li>
        <li>Aura effects apply with units even if they are inside transports</li>
        <li>Beam Weapons are unaffected by attack speed buffs.</li>
        <li>Units with the "Frenzied" passive can get stunned with Stank's Headbutt, Hunterling's Leap Attack and stun abilities from Void Shards and Slivers</li>
        <li>Players can destroy their initial structures and rebuild them elsewhere on certain missions and stop mutator units such as Propagators from being given a move command to their base</li>
        <li>Players can play at <a href="https://www.maguro.one/2020/12/mastery-exploit.html" rel="nofollow">180 mastery points</a> by using an arcade exploit</li>
        <li>Prestiging a commander while the game countdown is active adds experience to the level 1 commander while the player plays at mastery level</li>
        <li>Score screen displays jumping units (e.g. Raptor-strain Zerglings) as units made</li>
    </ul>
    <h2 id="amon">Amon</h2>
    <ul>
        <li>Attack Waves take units from the map if they are killed too quickly</li>
        <li>Attack waves with only air units can take unexpected paths to player's bases</li>
        <li>Brutal+ Mutations can be stacked with the Weekly Mutation if you retry Brutal+ on the Weekly Mutation tab</li>
        <li>Casting a Fear debuff on an entire attack wave will cause units in the wave to lose their attack commands after Fear wears off</li>
        <li>Disruptor's Purification Novas are not cancelled if lifted by Phoenixes</li>
        <li>Air units can be stuck in a state between Air and Ground if they are ensnared (e.g. from Stukov's Infested Diamondbacks) and then get teleported via triggers (e.g. on Oblivion Express)</li>
        <li>Ghosts and Wraiths can use Cloak at the start of the mission, but these upgrades are provided at 15:00</li>
        <li>Hybrid Destroyer's Graviton Prison is not marked as a Stasis ability</li>
        <li>Raven Seeker Missiles will hit Interceptors if it was the target even if the Interceptor is already inside the Carrier before it hits</li>
    </ul>
    <h2 id="abathur">Abathur</h2>
    <ul>
        <li>Base
            <ul>
                <li>Swarm Host's Spawn Locust cooldown is based on attack speed.</li>
                <li>Swarm Host's Spawn Locust cooldown buffed by a Psionic Devouring One (P1) Dehaka reduces the cooldown of the ability, but will not be autocasted.</li>
                <li>Symbiotes can attack when unit is in transport</li>
                <li>Symbiotes gets Stetmann's H.U.G.S. Overload shield despite being invulnerable</li>
                <li>Toxic Nests can be placed on top of Swann Flaming Betties, making them unable to unburrow and attack</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Black Death damage to self is counted for Life Leech bonus provided by Biomass</li>
                <li>Brutalisks can be Feared, despite having the Frenzied passive</li>
                <li>Double Edged damage to self is counted for Life Leech bonus provided by Biomass</li>
                <li>Ravagers are pulled by Fatal Attraction while burrowed</li>
            </ul>
        </li>
    </ul>
    <h2 id="alarak">Alarak</h2>
    <ul>
        <li>Base
            <ul>
                <li>Artificer of Souls (P1) can sometimes lose stacks if Supplicants are sacrificed in a single game loop</li>
                <li>Enemy units knocked into the air by Destruction Wave can heal Alarak through Soul Absorption even if they are not killed</li>
                <li>Havocs can provide buffs from inside War Prisms</li>
                <li>If you use /dance with Wrathwalkers, they lose the ability to fire while moving if they move right after dancing</li>
                <li>Mothership Thermal Lance can auto target Thrasher projectiles and cloaked units if there is at least 1 visible target in its autocast range</li>
                <li>Slayer Phasing Armor neither cancels Hybrid Destroyer's Graviton Prison nor prevents any damage</li>
                <li>Structure Overcharge still fires from structures in stasis by a Hybrid Nemesis</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Alarak's Force Fields do not block Zagara's Baneling Barrage</li>
                <li>Structure Overcharge can target units with Polarity even though it cannot damage them</li>
            </ul>
        </li>
    </ul>
    <h2 id="artanis">Artanis</h2>
    <ul>
        <li>Base
            <ul>
                <li>Arkship Commandant (P3) Unbound Fanatics do not spawn if Orbital Strikes are targeted on top of structures or sieged Siege Tanks</li>
                <li>Colossi attacks can kill units that have still not used Guardian Shell</li>
                <li>Hybrid Behemoths and Hybrid Reavers Consume DNA ability ignores Guardian Shell</li>
                <li>The lava surge damage on The Vermillion Problem ignores Guardian Shell</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Black Death damage ignores Guardian Shell</li>
                <li>Abilities casted by Power Overwhelming ignore Guardian Shell invulnerability and still damage the unit</li>
            </ul>
        </li>
    </ul>
    <h2 id="dehaka">Dehaka</h2>
    <ul>
        <li>Base
            <ul>
                <li>Broodbrother (P3) respawn timer is only based on Dehaka's level</li>
                <li>Dehaka cannot leap into a group of Siege Tanks</li>
                <li>Devouring One (P1) Dehaka devours can heal mission objectives like Aurana on Malwarfare, Harvesting Bots on Mist Opportunities, and Miner Evacuation Ships</li>
                <li>Pack Leaders are not valid targets of Stetmann's H.U.G.S Overload</li>
                <li>Pack Leaders do not get Zeratul's Void Seeker's Super Cloak</li>
                <li>Primal Contender (P2) Dehaka can be prevented from despawning by loading him into a Nydus Worm before using Pack Leaders</li>
                <li>Manually commanding Explosive Creepers to attack ally or your own units will deal 0 damage</li>
                <li>The range buff that units get when Devouring One (P1) Dehaka devours an air unit is 15 seconds and is unaffected by masteries or Devour level</li>
                <li>Thorns from Tyrannozors and Dakrun can be blocked by Point Defense Drones</li>
                <li>When a Dehaka Brother gains the Deadly Reach upgrade with Broodbrother (P3), the other brother gets the upgrade too, regardless of level</li>
                <li>When Zweihaka spawns, he gets auto-rallied to different locations</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Dakrun and Tyrannozors are instantly killed when Double-Edged is active</li>
                <li>Impalers are pulled by Fatal Attraction while burrowed</li>
            </ul>
        </li>
    </ul>
    <h2 id="fenix">Fenix</h2>
    <ul>
        <li>Base
            <ul>
                <li>Adept Shades can trigger Stasis Wards</li>
                <li>Adepts and Talis lose their ability to cast shade when they are stasised by Stasis Wards while the Shade is active</li>
                <li>Akhundelar (P1) Fenix's Cybros Arbiter does not have the same cooldown as the other two suits</li>
                <li>Disruptors Weapons do not benefit from Vorazun's Strike from the Shadows passive</li>
                <li>Kaldalis and Warbringer DPS is limited by attack animation and internal weapon delays</li>
                <li>Kaldalis upon death drops 10 minerals 5 gas when partnered with Han/Horner, despite him not having a gas cost</li>
                <li>Warbringer ignores armor</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>AI Champions do not count as Heroic units for Transmutation</li>
                <li>With Microtransactions, Kaldalis costs gas to command despite not having a gas cost</li>
                <li>Purifier Conclave does not get targeted by missiles from Missile Command</li>
            </ul>
        </li>
    </ul>
    <h2 id="horner">Han/Horner</h2>
    <ul>
        <li>Base
            <ul>
                <li>Call in the Fleet does not always travel in the selected direction</li>
                <li>Flying Reapers do not take damage from Parasitic Bomb casted on them</li>
                <li>Losing Han units makes Horner units lose some HP</li>
                <li>Reapers can get stuck in their flying mode</li>
                <li>Sovereign Battlecruisers deal less damage than stated on the weapon tooltip due to the random delays in the weapon</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Missile Command can target the Tech Lab even though it has no HP bar</li>
                <li>The Starport does not respawn if captured by Amon through Eminent Domain</li>
                <li>The Starport does not respawn if destroyed by a Propagator</li>
                <li>Widow Mines are pulled by Fatal Attraction while burrowed</li>
                <li>Widow Mines lock on and fire at units in Polarity</li>
            </ul>
        </li>
    </ul>
    <h2 id="karax">Karax</h2>
    <ul>
        <li>Base
            <ul>
                <li>Colossus burn damage is counted towards Spear of Adun damage in end of game stats</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>All of Karax top bar costs 10 minerals 5 gas per cast with Microtransactions</li>
                <li>Chokers make Sentinels unable to die while Reconstruction is available</li>
                <li>Temporal Field makes Sentinels unable to die while Reconstruction is available</li>
            </ul>
        </li>
    </ul>
    <h2 id="kerrigan">Kerrigan</h2>
    <ul>
        <li>Base
            <ul>
                <li>Ally units cannot enter Omega Worm if the ally leaves the game</li>
                <li>Omega Worms can be healed by Raynor's Medics</li>
                <li>Immobilization Wave deals 199 damage instead of the expected 200 with 30 points into the Augmented Immobilization Wave Mastery</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Chokers make Torrasque Ultralisk unable to die while resurrection is available</li>
                <li>Folly of Man (P2) lightning strikes can hit units under Polarity, stunning them, but not damaging them</li>
                <li>Kerrigan can get pulled by Fatal Attraction while burrowed, moving her hitbox, but not the model</li>
                <li>Temporal Field makes Torrasque Ultralisk unable to die while resurrection is available</li>
            </ul>
        </li>
    </ul>
    <h2 id="mengsk">Mengsk</h2>
    <ul>
        <li>Base
            <ul>
                <li>Aegis Guard at Rank 2 will ignore all tags for its Slow debuff</li>
                <li>Aegis Guard rank 2 splash deals splash damage dependent of main target of attack and not the splash targets themselves</li>
                <li>Attacks from Bunkers don't draw aggro to Bunkers if they are outside of enemy vision</li>
                <li>Blackhammer in Overwatch mode hits ground units below targeted air unit</li>
                <li>Bunkers are immune to Disabling Cloud and Disruption Web</li>
                <li>Emperor's Shadows do not autocast Labyrinth Cloak when taking damage</li>
                <li>Laborers can construct structures while carrying crystals on The Vermillion Problem.</li>
                <li>Principal Proletariat's (P2) Supply cost increase does not count for unlocking "The Best of the Best of the Best, Emperor" achievement</li>
                <li>Rank 3 Pyrokinetic Immolation from Emperor's Shadow deals 50 damage area of effect when it expires even though the unit has not died</li>
                <li>Shock Divison + Intercessor deals different damages at different ranks to what is listed on the weapon stat</li>
                <li>Troopers inside bunkers can pick up dropped weapons</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Bunkers do not catch fire with Scorched Earth at melee range</li>
            </ul>
        </li>
    </ul>
    <h2 id="nova">Nova</h2>
    <ul>
        <li>Base
            <ul>
                <li>Infiltration Specialist (P3) Nova gets decloaked when firing or sniping if in Vorazun's Dark Pylon range</li>
                <li>Nova can switch modes and Blink during respawn animation from her beacon</li>
                <li>Nova Soldier of Fortune (P1) production buff only applies if at least one charge is used</li>
                <li>Nova's units are not resistant to Stun effects as stated by her level 1 trait, but stun duration is halved</li>
                <li>Railgun Turrets do not deal damage when they attack a target at maximum range.</li>
            </ul>
        </li>
    </ul>
    <h2 id="raynor">Raynor</h2>
    <ul>
        <li>Base
            <ul>
                <li>Hyperion has a higher attack speed while moving</li>
                <li>Raynor Battlecruisers deal less damage than stated on the weapon tooltip due to the random delays in the weapon</li>
                <li>Medics can heal Spine/Spore Crawlers and Dehaka's Primal Wurms.</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Hyperion attacks units in Polarity, even though it cannot damage them</li>
                <li>Hyperion keeps firing when debuffed with Moment of Silence</li>
                <li>Hyperion keeps firing when Feared</li>
            </ul>
        </li>
    </ul>
    <h2 id="stetmann">Stetmann</h2>
    <ul>
        <li>Base
            <ul>
                <li>Healing Zones do not heal units during a delay if they have a natural regeneration that occurs after that delay (e.g. Stukov's Apocalisk)</li>
                <li>Mecha Banelings are immune to the lava surge on The Vermillion Problem when Egonergy Efficient Barrier is researched</li>
                <li>Mecha Hydralisks' JUICED Payload is unaffected by attack upgrades</li>
                <li>Mecha Lurkers that are immobilized/stasis'ed while using Tunnel of TERROR are permanently stuck in that state</li>
                <li>Mecha Ultralisks' Mecha Mooch Module can drain life from friendly mechanical objectives</li>
                <li>Mecha Zerglings attack with Synthetic Adrenal Pumps upgraded do not consume energy per attack</li>
                <li>Oil Baron (P3) stacks can be given to Spine and Spore Crawlers</li>
                <li>Point Defense Drones do not shoot down Super Gary's attacks</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Mecha Banelings are immune to Going Nuclear nukes when Egonergy Efficient Barrier is researched</li>
                <li>Satellites will only respawn once before being destroyed with Eminent Domain active</li>
            </ul>
        </li>
    </ul>
    <h2 id="stukov">Stukov</h2>
    <ul>
        <li>Base
            <ul>
                <li>Cloaked Infested Banshees do not benefit from Vorazun's Strike from the Shadows passive</li>
                <li>Infest Structure spawns double the Broodlings when used on ally Nydus/Omega Worms</li>
                <li>Infested Diamondbacks are not affected by the Mech Attack Speed mastery</li>
                <li>Infested Diamondbacks do not get Vorazun’s Strike from the Shadows passive if they are cloaked</li>
                <li>Infested Diamondbacks ignore armor</li>
                <li>Using Chrono Boost on the Infested Colonist Compound does not increase spawn rate</li>
                <li>Volatile Infested dropped by Infested Tanks on death cost supply</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Infested Compound and Infested Bunkers do not spawn Infested while in control of Amon through Eminent Domain</li>
            </ul>
        </li>
    </ul>
    <h2 id="swann">Swann</h2>
    <ul>
        <li>Base
            <ul>
                <li>Irridated units inside the transport damages outside the transport</li>
                <li>Regenerative Bio-Steel upgrade overrides healing for Stetmann's H.U.G.S field</li>
                <li>SCV's auto construction AI is unpredictable</li>
                <li>Siege tanks and Thors killed in Hercules will only transform into wreckage form once unloaded</li>
                <li>Targeting Optics upgrade does not increase Cyclone's Lock-on Range</li>
                <li>Units lifted by Hybrid Destroyer's Graviton Prison can be loaded into Hercules by manually using the "Load" command on the Hercules</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Amon's Karax can spawn structures on top of burrowed Flaming Betties</li>
                <li>Pulse Cannon does not do full damage with Evasive Maneuvers due to it dealing six instances of damage instead of one large damage tick</li>
                <li>Pulse Cannon does not 1-shot units with Barrier due to it dealing six instances of damage instead of one large damage tick, allowing Barrier to trigger</li>
            </ul>
        </li>
    </ul>
    <h2 id="tychus">Tychus</h2>
    <ul>
        <li>Base
            <ul>
                <li>50% outlaw discount does not get removed if an ally Tychus leaves the game before purchasing their first outlaw</li>
                <li>Nikara cannot heal Archons or Dark Archons without the Procyon Twin Heal Beam Gauntlet upgrade</li>
                <li>Nikara does not heal Zeratul's Telbrus Legion by beam</li>
                <li>Waiting on the Custom Mutator selection screen counts as in-game time, allowing Tychus to spawn multiple outlaws as soon as Tychus spawns.</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Black Death does not kill Outlaws, but leaves them at 1 HP</li>
                <li>Blaze igniting units with wildfire makes some units respawn infinitely with Just Die! active</li>
            </ul>
        </li>
    </ul>
    <h2 id="vorazun">Vorazun</h2>
    <ul>
        <li>Base
            <ul>
                <li>Void Shade units on Scythe of Amon cannot be mind-controlled by Dark Archons</li>
                <li>Time Stop delays Baneling death</li>
                <li>With Withering Siphon (P2), Void Stasis on Dark Templars do not work on Hybrids, but does with Shadow Guard</li>
                <li>With Withering Siphon (P2), Void Thrashers cannot be stunned with Centurions</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Black Death deals 0.75% damage per tick instead of 1% with Withering Siphon (P2)</li>
                <li>Hardened Will does not get removed from units while Time Stop is active</li>
                <li>With Withering Siphon (P2), Black Death does not kill Vorazun's units, but leaves them at 1 HP</li>
                <li>Vorazun can deal damage to units under Polarity using Withering Siphon (P2) effects</li>
            </ul>
        </li>
    </ul>
    <h2 id="zagara">Zagara</h2>
    <ul>
        <li>Base
            <ul>
                <li>Scourge do not appear on the units lost/made tabs in observer interfaces</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Zagara while burrowed gets pulled by Fatal Attraction</li>
                <li>Zagara's Baneling Barrage does Double Edged damage only if the Barrage hits a structure</li>
            </ul>
        </li>
    </ul>
    <h2 id="zeratul">Zeratul</h2>
    <ul>
        <li>Base
            <ul>
                <li>Artifacts can be trapped inside a wall of structures on certain maps</li>
                <li>Orbital Assimilators drop scrap with a Han/Horner ally</li>
                <li>Avatar of Essence buffs can be stacked using Void Arrays by quickly loading and unloading units</li>
                <li>Legion calldowns can be have their warp-ins delayed by stasis abilities</li>
                <li>Losing a Constructs Bay with more than 8 supply of units in a Void Array will cause the Void Array's cargo bar to grow extremely large</li>
                <li>Herald of the Void Zeratul Tornadoes do not damage units in Time Stop</li>
                <li>Void Templars gain Void Fury even if Zeratul is not at level 3 as long as the second artifact is picked up</li>
                <li>Zeratul Avatars do not gain any attack or armor when collecting more than 3 artifacts with the Knowledge Seeker (P2) prestige</li>
            </ul>
        </li>
        <li>Mutators
            <ul>
                <li>Avatar of Essence makes units spawned from Aggressive Deployment, Void Rifts, Reanimators drop Biomass and Essence when Devolved</li>
            </ul>
        </li>
    </ul>
    <h2 id="missions">Missions</h2>
    <ul>
        <li>Chain of Ascension: All spawned Bonus objectives are auto-completed at the end of the mission</li>
        <li>Chain of Ascension: Amon does not attack Solarite Cocoons that Elemental casts even if its his own units trapped</li>
        <li>Chain of Ascension: The Slayn Elemental can trap Amon's units in its Solarite Cocoon</li>
        <li>Dead of Night: Heavy Weapons Specialist (P1) Swann's Laser Drill does not slow down the Stank.</li>
        <li>Dead of Night: Hunterlings can stun units with the Frenzied buff</li>
        <li>Dead of Night: Volatile Infested spawned from the Virophage do not burn up during the day cycle</li>
        <li>Lock and Load: Vorazun's Time Stop causes the AI to wake up</li>
        <li>Lock and Load: Polarity removal (e.g. on Wheel of Misfortune mutations) causes the AI to wake up</li>
        <li>Lock and Load: The Xel'Naga Construct can hit units in transports</li>
        <li>Miner Evacuation: Abathur's Vipers can use Abduct on ships outside of vision range through fog of war</li>
        <li>Miner Evacuation: Always plays voice lines that the enemy comp is Terran</li>
        <li>Miner Evacuation: Blightbringer can be body-blocked, preventing him from exiting the cave and using abilities</li>
        <li>Miner Evacuation: Blightbringer takes a large amount of damage if Crooked Sam's Demolition Charge detonates while he is burrowed</li>
        <li>Miner Evacuation: Evacuation Ship models sometimes do not disappear after launch</li>
        <li>Miner Evacuation: If a Militarized Transport is spawned by the end of ship launch and doesn't reach it, the Transport moves to a player's base and releases reapers there</li>
        <li>Miner Evacuation: Playing it on Retry Brutal+ will give Infested army composition instead of whatever is listed</li>
        <li>Miner Evacuation: Reminds players to complete optionals even if they are already complete</li>
        <li>Miner Evacuation: The Eradicators can be killed before they activate</li>
        <li>Miner Evacuation: Retrying the mission on Brutal+ difficulty displays "Infested" as the attack wave composition</li>
        <li>Miner Evacuation: When Eradicators time out, they can be body-blocked from entering the facility and killed, allowing bonus completion after timeout</li>
        <li>Miner Evacuation: With multiple ships active Infested sometimes head towards wrong ship</li>
        <li>Mist Opportunities: Killing the bonus objective before Stetmann finishes his line about it makes it unable to be done</li>
        <li>Oblivion Express: Air components of attack waves get teleported to the gather points once the entire attack wave is formed</li>
        <li>Oblivion Express: Damage is lost when attacking trains with the Diffusion mutator active</li>
        <li>Oblivion Express: Just Die! sometimes fails to occur on trains</li>
        <li>Oblivion Express: Trains do not get the Plague debuff normally, however, if a train is present on the map and Black Death is activated (through Chaos Studios), train carriages will get the Plague debuff.</li>
        <li>Oblivion Express: Train carriages take 50% damage only when Diffusion is active</li>
        <li>Rifts to Korhal: Void Shard attacks can be reflected by Zeratul's Xel'Naga Shieldguards</li>
        <li>Scythe of Amon: Death Grip Crystals are treated as units and not structures</li>
        <li>Scythe of Amon: Death Grip Crystals outside vision range do not create sprites that link to units that it is targeting</li>
        <li>Temple of the Past: Drop Attack patterns around the temple are not randomized as is intended with Pattern A</li>
        <li>Temple of the Past: Hybrids will sometimes fly past the player's base, past the Temple and travel towards the opposite end of the map</li>
        <li>Temple of the Past: The Temple can spawn at reduced HP if Temporal Field is active</li>
        <li>The Vermillion Problem: Amon's units are immune to lava surges despite the AI respecting the surges</li>
        <li>The Vermillion Problem: Lava Bursts from the mutator are treated the same as the Lava Spouts in the mission, triggering Donny Vermillion's voice line</li>
    </ul>
    <h2 id="mutators">Mutators</h2>
    <ul>
        <li>Aggressive Deployment drops will not spawn if a player's only valid drop target is placed over unpathable terrain</li>
        <li>Using the above bug, Aggressive Deployment will drop a max'ed out wave if it can drop a subsequent wave</li>
        <li>Angry Turkeys from Turkey Shoot do not get hit by some splash damage effects such as Super Gary's E-Gorbs</li>
        <li>Boom Bots do not trigger Moment of Silence, despite being Heroic.</li>
        <li>Double-Edged heals at 8 HP/s instead of the listed 10 HP/s</li>
        <li>Eminent Domain: Sieged Up Siege Tanks cannot capture structures with Eminent Domain</li>
        <li>Going Nuclear still hits mineral lines and gasses of player bases and expansions</li>
        <li>Gift Exchange can roll Overcharged Shuttles on maps where it does nothing</li>
        <li>Gifts can be claimed by non-units such as Blizzards, Power Fields, Essence Drops, etc.</li>
        <li>Heroes from the Storm does not spawn Heroes on Miner Evacuation and Scythe of Amon</li>
        <li>On Wheel of Misfortune mutations, Mineral Shields will activate on all Mineral Patches, regardless of mission time.</li>
        <li>Missile Command missiles can be Reclaimed and Mind Controlled</li>
        <li>Moment of Silence pauses Protoss Warp-ins while the debuff lasts</li>
        <li>Propagators can be path-blocked by workers</li>
        <li>Shader settings set to Medium and below will cause the Darkness mutator to not work correctly and reveal terrain.</li>
        <li>Slim Pickings does not reset Mineral counts in Mineral Patches if it gets removed during a Wheel of Misfortune mutation. </li>
        <li>Speed Freaks speeds up the trains on Oblivion Express if it gets removed during a Wheel of Misfortune mutation.</li>
        <li>Temporal Field interrupts chanelling abilities.</li>
        <li>Time Warp interrupts chanelling abilities.</li>
        <li>Void Reanimators can target units on unpathable terrain that they can't reach, making them get stuck</li>
        <li>When transmutating an air unit sometimes the unit will transmute to ground unit in an impassable terran and be stuck</li>
        <li>With Transmutation active, some units transform into tier 1 units due to not having a tier associated with them. eg Mothership and Stank</li>
    </ul>
    <h2 id="QOL">Quality of Life</h2>
    <ul>
        <li>Abathur: Amon units killed by non-player instances like Thrasher attacks will not drop Biomass</li>
        <li>Abathur: Burrowed Swarm Hosts and Unburrowed Swarm Hosts are treated as different units when control-clicked</li>
        <li>Abathur: Swarm Queen Rapid Transfusion autocast does not cast on buildings despite being valid targets</li>
        <li>Alarak: Alarak becomes fully controllable 3-4 seconds slower than other heroes</li>
        <li>Alarak: Havocs cannot correctly move command follow allied units even if target lock auto-cast is toggled off</li>
        <li>Artanis: Orbital strikes remaining charges can be accidently canceled by clicking in fog of war</li>
        <li>Dehaka: Primal and Creeper Hosts have too high target priority</li>
        <li>Han/Horner: SCV's constructing Assault Galleons cannot be issued commands to stop construction</li>
        <li>Karax: Architect of War (P1) structures will start to cause lag if they are attacked for a long period of time</li>
        <li>Karax: Energizer Reclamation does not break Han/Horner's Raven Analyze Weakness on the targeted unit</li>
        <li>Karax: Shield Batteries won’t automatically recharge structures that can’t attack</li>
        <li>Karax: Solar Lance remaining charges can be accidently canceled by clicking in fog of war</li>
        <li>Mengsk: Troopers may not drop using Drop Pods if there is a structure at the waypoint</li>
        <li>Mengsk: Labourers converting into Troopers at a Command Center do not drop in the resources they are carrying</li>
        <li>Nova: Automated Refineries mine at a slower rate compared to Orbital Assimilators</li>
        <li>Stetmann: Burrowed Mech Lurkers are treated as different units when control-clicked</li>
        <li>Stukov: Apocalisk does not autocast Cluster Rockets when commanded to attack a specific target</li>
        <li>Stukov: Stukov cannot root buildings in the fog of war</li>
        <li>Swann: Swann's Drill does damage at 0.1 second intervals, but is affected by Armor</li>
        <li>Vorazun: Dark Templar Shadow Fury gets denied casting on high ground</li>
        <li>Vorazun: Disruption Web is autocasted on targets in stasis</li>
        <li>Vorazun: Disruptor death animation when it dies during time stop is very slow</li>
        <li>Zagara: Scourge Nests cannot set rally points until construction is complete</li>
        <li>Zagara: Queens can Transfuse targets that are already at full HP</li>
        <li>Zeratul: Death Grip Crystals on Scythe of Amon can destroy Zeratul's Legion Calldowns before they warp in</li>
        <li>Hybrids on Part and Parcel can teleport onto unpathable terrain, preventing them from being attacked by melee units</li>
        <li>Boom Bot codes cannot be input too quickly</li>
    </ul>
    <h2 id="aesthetic">Aesthetic</h2>
    <ul>
        <li>Abathur: Canceling a morph causes various visual bugs</li>
        <li>Alarak: Destroyers dont do their attack animation if they start firing while doing their warp animation</li>
        <li>Alarak: Tyrant Ascendant (P2) plays voice lines for the Summon Death Fleet calldown</li>
        <li>Alarak: Shadow of Death (P3) plays voice lines for the Summon Death Fleet calldown even if the Mothership has already been summoned</li>
        <li>Alarak: Transforming a War Prism while in a Time Warp creates a visual discrepancy in the Prism's mode</li>
        <li>Artanis: Immortals lack death sound</li>
        <li>Dehaka: Units that get Devouring One (P1) Dehaka's thorns buff, have their spikes come from Dehaka instead of the unit themselves when they get hit</li>
        <li>Dehaka: When Devouring One (P1) Dehaka dies with the thorns buff, spikes come out of the ground where he died when ally units with thorns buff gets hit</li>
        <li>Dehaka: Primal Contender (P2) can have a Dehaka burrow animation fail where Dehaka is visable with the Pack Leader but is actually burrowed</li>
        <li>Dehaka: The Naughty List mutator replaces Dehaka’s level with his killcount</li>
        <li>Dehaka: Vipers stretch when devoured by Dehaka</li>
        <li>Fenix: Colossi lack death sound</li>
        <li>Fenix: Taldarin doesn't use Turret tracking</li>
        <li>Fenix: Taldarin does not show a visual effect when Barrier is used</li>
        <li>Han/Horner: Level 1 does not have Strike Fighters unlocked but Horner will sometimes say to build Strike Fighter Platforms</li>
        <li>Karax: Casting purifier beam too quickly can make the camera zoom out until it is casted again</li>
        <li>Karax: Colossi and Immortals lack death sound</li>
        <li>Kerrigan: Casting assimulation aura while leaping can change the visuals of the aura</li>
        <li>Kerrigan: When Kerrigan uses Leaping Strike on jumping enemies like Hunterlings, she will keep the height she had when she intercepted the unit</li>
        <li>Kerrigan: When Raptor Zerglings leap, they are counted towards Units Made count</li>
        <li>Mengsk: Holograms that appear on his Imperial Witnesses after the Amplified Airwaves upgrade has been researched sometimes shoot high up into space</li>
        <li>Mengsk: Structures do not show burning effect when they have low HP</li>
        <li>Mengsk: When trasnforming Laborers and Troopers between modes, they are counted towards Units Made count</li>
        <li>Mengsk: When cloaked units attack for the first time, Mengsk gives the "Attack Wave Incoming" voice line before the "Make Detection" voice line</li>
        <li>Raynor: If Raynor's Dusk Wings from Banshee Airstrike are hit by a Twister while flying away, a black dropship will appear</li>
        <li>Stetmann: When playing with Signal Savant (P1), Stetmann gives the "Upgrade Gary" voice line</li>
        <li>Stukov: Rooting a large number of Infested Bunkers causes the "Large Army Lost" voice line to play</li>
        <li>Zeratul: Transforming a Void Array while in a Time Warp creates a visual discrepancy in the Array's mode</li>
        <li>Zeratul: Void Apparitions are counted towards Units Made count</li>
        <li>When a player unit kills a missile from Missile Command with Just Die! active, the Just Die! respawn animation occurs on the player unit instead of the missile</li>
    </ul>
<script src="/scripts/nav.js"></script>
<?= endContent() ?>
