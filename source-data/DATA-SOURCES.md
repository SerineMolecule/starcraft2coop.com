# Data sources

Data is converted from starcraft_coop.sql (in html/files/, also visible in https://starcraft2coop.com/files/ ), which was provided by Aommaster.

## Unit skills

The initial `unitskills.json` entries preserve the skill tables in `source-html/commanders/`, plus a few passives described in the surrounding prose. Those tables are not complete ability lists. The supplementary pass on 2026-10-28 adds 96 passive entries and Nikara's two missing autocast abilities, using the wiki's co-op sections and the pinned game-data snapshot linked below. This is a broad supplement, not an exhaustive passive audit. Repeated abilities such as Detector and Frenzied have separate entries for each applicable commander/unit.

Include innate abilities and research-unlocked abilities, with prerequisites in `requirements` and `requiresupgrade`. Ordinary stat upgrades and modifications to an existing ability stay in `playerupgrades.json`; weapon splash and bounces stay in weapon AoE. Skill descriptions are base values, as explained on the units page, and do not change with selected upgrades, mastery, or prestige. Empty `icons` arrays mean the correct asset has not yet been obtained.

| Subject | Sources and checks |
| --- | --- |
| Sentinel Reconstruction | [Sentinel](https://starcraft.fandom.com/wiki/Sentinel), co-op section: 5-second rebuild, 120-second cooldown, level 4 and Twilight Council research. Do not use the campaign's 10-second reconstruction time. |
| Frenzied | [Torrasque](https://starcraft.fandom.com/wiki/Torrasque_%28StarCraft_II%29), [Tyrannozor](https://starcraft.fandom.com/wiki/Tyrannozor), and [Enthralled Ultralisk](https://starcraft.fandom.com/wiki/Enthralled_ultralisk). `Frenzy` behaviors confirm the additional Brutalisk, Apocalisk, Odin, and Mecha Ultralisk entries. [Blizzard's 4.11.0 notes](https://news.blizzard.com/en-us/article/23227811/starcraft-ii-4-11-0-patch-notes) explicitly remove mind-control immunity in co-op; do not copy the multiplayer description. |
| Nikara | [Layna Nikara](https://starcraft.fandom.com/wiki/Layna_Nikara). `Commanders/CommanderTychus.xml`: `TychusMedivacHealPlusMech` and `TychusMedicDefensiveMatrix` both have AutoCast enabled. `TychusMedicHeal` restores 30 life/second; Matrix has a 15-second cooldown and absorbs 400 damage for 20 seconds. These are autocast abilities, not passives. |
| Permanent cloaking | [Dark Templar](https://starcraft.fandom.com/wiki/Dark_templar_%28StarCraft_II%29), [Void Templar](https://starcraft.fandom.com/wiki/Void_templar), [Observer](https://starcraft.fandom.com/wiki/Observer_%28StarCraft_II%29), [Xel'naga Watcher](https://starcraft.fandom.com/wiki/Xel%27naga_watcher), [Cloaking](https://starcraft.fandom.com/wiki/Cloaking), [Covert Banshee](https://starcraft.fandom.com/wiki/Covert_banshee), and [Asteria Wraith](https://starcraft.fandom.com/wiki/Asteria_wraith). Research requirements are retained for Havoc, Disruptor, Wraith, Banshee, Corsair, and Oracle. Dusk Wings use a toggled Cloak and are not permanently cloaked passives. |
| Detection and cliff movement | [Detector](https://starcraft.fandom.com/wiki/Detector), [Colossus](https://starcraft.fandom.com/wiki/Colossus), [Havoc](https://starcraft.fandom.com/wiki/Havoc), [Infested Missile Turret](https://starcraft.fandom.com/wiki/Infested_missile_turret), and unit `Detector*` behaviors. Crawlers and Infested Missile Turrets detect only while rooted. The Fixers require Flashforce GDM Visor research; Nova requires Ghost Visor; Fenix's Arbiter requires [Observation Protocol](https://starcraft.fandom.com/wiki/Cybros_arbiter). Khaydarin Monolith is not a detector. |
| Revival and defensive passives | [Torrasque](https://starcraft.fandom.com/wiki/Torrasque_%28StarCraft_II%29), [Primal Mutalisk](https://starcraft.fandom.com/wiki/Primal_mutalisk), [Void Templar](https://starcraft.fandom.com/wiki/Void_templar), [Mirage](https://starcraft.fandom.com/wiki/Mirage), [Slayer](https://starcraft.fandom.com/wiki/Slayer), and [Cannonball](https://starcraft.fandom.com/wiki/Rob_Boswell). Research and commander/artifact unlocks are distinct from innate passives. |
| Healing and support | [Symbiote](https://starcraft.fandom.com/wiki/Symbiote), [Alarak](https://starcraft.fandom.com/wiki/Alarak_%28Co-op_Missions%29), [Havoc](https://starcraft.fandom.com/wiki/Havoc), [Kerrigan](https://starcraft.fandom.com/wiki/Sarah_Kerrigan_%28Co-op_Missions%29), [Fleet Beacon](https://starcraft.fandom.com/wiki/Fleet_beacon), [Tyrannozor](https://starcraft.fandom.com/wiki/Tyrannozor), [Dakrun](https://starcraft.fandom.com/wiki/Dakrun), and [Theia Raven](https://starcraft.fandom.com/wiki/Theia_raven). Co-op's `Button/Tooltip/SoulAbsorption` specifies healing per supply of the slain enemy; the wiki omits this qualifier. `SymbioteStab` and `SymbioteCarapace` establish base damage, duration, and cooldown without mastery. |
| Death effects and infested mechanics | [Aberration](https://starcraft.fandom.com/wiki/Aberration), [Zagara](https://starcraft.fandom.com/wiki/Zagara_%28Co-op_Missions%29), [Infested Bunker](https://starcraft.fandom.com/wiki/Infested_bunker), and [Infested Siege Tank](https://starcraft.fandom.com/wiki/Infested_siege_tank), supplemented by the existing Stukov research descriptions. Volatile Biomass is presented as a passive on the tank's command card, although its internal consumption ability autocasts. |

The catalog candidate scan follows parent units and passive command-card buttons, but candidates must be checked against co-op requirements. For example, Fenix's Legionnaire inherits Sentinel reconstruction data without having Karax's research, and campaign Hardened Shield/Regeneration Aura entries are not proof of available co-op skills.

### Skill icons

The 13 previously missing skill icons were obtained on 2026-10-28 from [SC2Mapster Asset Explorer](https://asset-explorer.sc2arcade.com/) using its [button index](https://github.com/sc2-arcade-watcher/asset-explorer/blob/main/site/list/buttons.json). Match textures against `CButton/Icon` in the [pinned game-data snapshot](https://github.com/SC2Mapster/SC2GameData/tree/6dd323aae4209a01f110719a00b4e8f7a88389bc), rather than guessing from the asset name: the collection also includes community-created assets.

Download originals from `https://dist.sc2arcade.com/star-assets/buttons/<texture>.dds`. These assets are Blizzard game textures. Decode the DDS originals with Pillow rather than using the collection's preconverted PNGs, which can differ in size and colors. Shared abilities reuse the same file.

Prerender the PNGs on a 76×76 canvas using the exact alpha channel from `html/images/commanderdata/unitskills/kerrigan/burrowcharge.png`. This reproduces the existing icons' inset rounded rectangle (roughly 6 pixels of padding), including its softened edges. Textures that already have inset artwork and black backing retain their RGB pixels and replace only the outer frame's alpha channel, without adding another inset. Detector and Frenzied are unframed white masks (`TintRacially=1` in the game): resize each complete DDS image to 64×64 with Lanczos, composite it at (6, 6) over opaque black on the 76×76 canvas, then apply the same reference alpha channel. Their artwork remains white. Use the same compositing procedure for unframed colored cutouts. Save as lossless RGBA PNG; no CSS background or clipping is needed.

| Skill | Game button ID | Texture filename (without `.dds`) |
| --- | --- | --- |
| Detector | `Detector` | `btn-status-detector` |
| Frenzied | `Frenzy` | `btn-ability-zerg-frenzy` |
| Cliff Walk | `CliffWalk` | `btn-ability-protoss-cliffwalk-color` |
| Squad Sight | `SquadSight` | `btn-ability-protoss-squadsight` |
| Super Heal | `TychusMedicHeal` | `btn-ability-terran-heal-color` |
| Devotion | `AlarakACMyLifefortheHighlord` | `btn-ability-protoss-soulabsorbtion` |
| Greater Spiked Hide | `DehakaDakrunThornsPassive` | `btn-ability-zerg-kraith-thornsaura` |
| Imaging Radar | `HHSuperRadar` | `btn-ability-hornerhan-raven-radar` |
| Spawning Chamber | `SIInfestedBunkerInfestedMarineSpawner` | `btn-upgrade-zerg-stukov-bunkerformliferegen` |
| Volatile Biomass | `StukovInfestedSiegeTankAmmo` | `btn-upgrade-zerg-stukov-siegetankvolatileammo` |
| Towering | `AberrationTowering` | `btn-ability-zerg-towering` |
| The Best Oil | `GaryStetmannTheBestOil` | `btn-ability-stetmann-garyattackandregen` |
| One With the Shadows | `ZeratulShadowPhase` | `btn-ability-protoss-permanentlycloaked-darktemplar-color` |
| Permanently Cloaked (Observers and Xel'Naga Watcher) | `PermanentlyCloakedObserver`, `PermanentlyCloakedZeratulObserver` | `btn-ability-protoss-permanentlycloaked-observer-color` |
| Permanently Cloaked (Spec Ops Ghost) | `PermanentlyCloakedGhost` | `btn-ability-terran-cloak-color` |
| Mutating Carapace | `KerriganAssimilation` | `btn-upgrade-zerg-tissueassimilation` |
| Ready Mecha Broodling | `BroodLordStetmannBroodlings` | `btn-unit-collection-symbiote-mecha` |
| Build Mecha Locusceptor | `BroodLordStetmannBombers` | `btn-unit-collection-creeperhostspawnflyer-mecha` |

Button catalogs are in `mods/liberty.sc2mod` (Detector, Frenzied, Cliff Walk), `campaigns/swarm.sc2campaign` (Towering), `campaigns/void.sc2campaign` (Squad Sight), and `mods/starcoop/starcoop.sc2mod` (Devotion, Greater Spiked Hide, Imaging Radar, Spawning Chamber, Volatile Biomass). Super Heal is in that co-op mod's `Commanders/CommanderTychus.xml`, One With the Shadows in `Commanders/FutureCommanders.xml`, and The Best Oil in `mods/starcoop/commanders/egonstetmann.sc2mod`.

The game uses `btn-upgrade-zerg-stukov-bunkerformliferegen` for the Spawning Chamber passive; the wiki shows the separate Spawn Infested Trooper button. Super Heal uses the colored heal texture. These choices follow the actual game button definitions.

## Weapon AoE data

The `aoe` strings in `source-data/playerunits.json` and replacement values in `source-data/playerupgrades.json` come [from SC2Mapster](https://github.com/SC2Mapster/SC2GameData/tree/6dd323aae4209a01f110719a00b4e8f7a88389bc). Make sure to pay attention to campaign inheritance and co-op overrides.

Useful definitions (file names are relative to each mod or campaign's `base.sc2data/GameData/` directory):

- `mods/starcoop/starcoop.sc2mod`, `EffectData.xml`: `BrutalizeDamage`, `DehakaRoachLevel3AttackSearch`, `FenixWarbringerColossusThermalLancesE`, `SILiberatorSplashSearch`, and `HHVikingShootSearch`.
- The same mod's `UpgradeData.xml`: `ReaverIncreasedScarabSplashRadius` adds 0.25, 0.5, 0.5, and 0.5 to the four scarab splash radii; `ScourgeSplashDamage` adds radius 1.5 splash at 50% damage.
- The same mod's `Commanders/FutureCommanders.xml`: `ZeratulPurificationNovaTargettedSearch` and `ZeratulPhaseDisruptorsAir`; `Commanders/CommanderTychus.xml`: `OdinAADamage` and `TychusPunisherGrenadesU3`.
- `mods/starcoop/commanders/arcturusmengsk.sc2mod`, `EffectData.xml`: `MarauderMengskShrapnelSearch`; `mods/starcoop/commanders/egonstetmann.sc2mod`, `EffectData.xml`: the Mecha Baneling, Lurker, and Ultralisk effects.
- `campaigns/void.sc2campaign`, `EffectData.xml` and `ValidatorData.xml`: `ZagaraVoidCoopAttackUpgradeSearchSwitch`, its two search effects, and the distance validator. Medusa Blades selects up to three additional targets rather than damaging every unit in an area.

Trace the active weapon's effect chain before using a definition: unused effects coexist with current ones. In particular, Primal Igniter and Hellbat damage is gated by `WeaponInRange`; their much larger search radii are not their effective damage range.

Scope: weapon splash, piercing lines, cleaves, bounces, split beams, on-hit damage effects, deployed weapon subunits, and attack substitutes such as mines and bombardment. Independent activated/autocast spells, death effects, movement trails, support auras, and debuffs are not presented as regular weapon splash. Their existing Notes and informational upgrade descriptions remain separate. In particular, Primal Guardian's Explosive Spores, Talis's Ricochet Glaive, Mojo's Suppression Procedure, Disruptor's Purification Nova, Mecha Corruptor's Cluster Busters, and Mecha Lurker's Focused Strike Algorithm are separate abilities.

Method:

1. Enumerate every `playerunits.json` row and map each commander/unit to its catalog definitions, including transformed and burrowed forms.
2. Follow weapon effects through launches, persistent effects, searches, damage effects, behaviors, spawned ammunition, and carrier magazines. Search for circular/rectangular areas, arcs, and capped target searches. The initial candidate traversal deliberately includes inherited and disabled definitions; a candidate is not proof that an attack has splash.
3. Review candidate chains against campaign inheritance, co-op overrides, validators, research, commander unlocks, ranks, prestiges, and scripts. Scan upgrade descriptions and geometry-changing catalog upgrades for effects that the baseline weapon does not expose.
4. Check each attack mode separately. Compare secondary damage effects with the main attack instead of assuming equal damage. Use the co-op definitions rather than the multiplayer cheat sheet.

The audit added AoE descriptions for 30 previously undocumented commander/unit entries (including descriptions moved from Notes), corrected existing shapes/damage, and added missing AoE replacements for Chain Reaction, Cerberus Mine, Slicing Glaive, and Fire Beam. Vicious Glave and Severing Glave now replace AoE; their interaction is composed in the new units page. The old units page has no new composition logic.

### Evidence and interpretation

All paths below are under the [pinned SC2GameData snapshot](https://github.com/SC2Mapster/SC2GameData/tree/6dd323aae4209a01f110719a00b4e8f7a88389bc). Catalog names are identifiers to search in `base.sc2data/GameData/`; commander scripts are in `base.sc2data/`. Numbers are catalog distances before engine handling of unit size, terrain, and target filters. Explicit radius-offset flags are reflected where relevant; dimensions are not measurements of the visual animation.

| Subject | Evidence / interpretation |
| --- | --- |
| Abathur / Kerrigan Mutalisk | `GlaiveWurmE1`–`E5`, `GlaiveWurmU2`–`U6`, and the `CoopGlaiveWurm` equivalents. `HotSViciousGlaive` adds 1 to jump radius; `KerriganViciousGlaive` adds 3. Baseline radius is 3. `KerriganSeveringGlave` adds 4/6/6/8/8 damage to the five possible bounces, making each base hit 9. `ZergFlyerWeaponsLevel1`–`3` add only 0.333/0.111 to the first two bounce effects. `LibCOMI.galaxy`, `CM_Kerrigan_WeaponSwap`, swaps Kerrigan's weapon to `CoopGlaiveWurm`. |
| Other Mutalisks | `DehakaMutaliskLevel3GlaiveWurm*`, `DehakaMutaliskAirLevel3GlaiveWurm*`, and Mengsk's `MutaliskMengskGlaiveWurm*`. Slicing Glaive changes only the air weapon; the baseline Primal Mutalisk bounces to ground targets even when the primary target is airborne. |
| Destroyer | `VoidRayChargeBeamBounce1Search`–`3Search` select 1/2/3 additional targets within radius 5. Their damage effects deal 1 base damage with 0/1/2 Armored bonus; weapon upgrades do not increase these secondary hits. |
| Kerrigan / primal Ultralisks | `KaiserBlades` is overridden in `campaigns/swarm.sc2campaign/WeaponData.xml` to use `HotSUltraliskKaiserBlades`. Secondary damage is 5, +1 per melee upgrade, not the multiplayer 33.3%. The unused Monarch Blades branch is gated by `HaveHotSMonarchBlades`. `DehakaKaiserBladesLevel2Search` / `Level3Search` use the same arc/radius (180 degrees / 2) but their secondary damage stays at 5. |
| Explosive Creeper / Glevig / Apocalisk | `DehakaCreeperExplodeSearch` and `DehakaCreeperAirExplodeSearch` use radius 2.2 with different ground/air filters. Co-op overrides `YagdraFireballDamage` to one full-damage radius-1 ring. `ApocaliskBladesSearch` is arc 180 / radius 3; `ApocaliskBladesDamageSecondary` deals 20. |
| Nova / railgun / Dusk Wings | `NovaWeaponHellfireShotgun*` damage effects use radius 1.5. `LaserTurretSearch` uses a 0.3 × 6.8 rectangle. `DuskWingScreecherMissilesCreateCarpetBombPersistent` searches radius-0.5 circles at offsets 0.5/1/1.5/2 beyond the target; co-op removes the campaign research validator. |
| Firebat / Blaze / Flame Trooper | `FirebatACSearch`, `TychusFirebatSearchArea`, and `TrooperMengskFlamethrowerSearch` use long rectangles gated by weapon range. Effective widths are 1.2, 2, and 1.2. `BearclawNozzles` (Incinerator Gauntlets) adds 0.48 to Firebat width, yielding 1.68. The rectangles' full catalog lengths are not the effective range. |
| Flaming Betty / Spinning Dizzy | `DutchTurretFlameThrowerCreatePersistent` searches radius-0.6 circles at offsets 0.5 through 6; damage uses `noMarkers` to prevent repeated hits. `KelMorianHailstormMissilePods` is enabled and uses radius-1.5 `HailstormMissilePodsDamage`. Ordinary Missile Turrets' inherited `HailstormMissilePods` weapon stays disabled. |
| Clolarion / Karax Colossus | `FenixClolarionBomberDamage` and `FenixClolarionBomberStructureDamage` use radius 0.5. `ColossusFireBeam` enables `ColossusPurifierThermalLances`; `ThermalLancesFireBeam` places four radius-0.5 burning circles at transverse offsets ±0.5 and ±1.5, lasting 5 seconds. Fenix does not have Fire Beam research. |
| Infested Siege Tank | `StukovInfestedSiegeTank` launches a Volatile Infested; `SIVolatileInfestedExplodeDamage` / `...Structure` have radius 2.2. Tentacle attacks remain single-target. |
| Serdath / Unbound Fanatic | `DarkArchonHeroWeaponDamage` and `CommanderPrestigeArtanisOrbitalStrikesArchonDamage` use 0.25/0.5/1 radii with 100%/50%/25% damage. The Fanatic's independent energy-expiry explosion is a separate effect. |
| Tesseract Monolith / Charged Crystal | `ZeratulKhaydarinMonolithSearch` uses radius 3 and includes the primary target despite secondary-target exclusions. Charged Crystal's `ZeratulXelNagaChargedCrystalPsiStormPersistent` has a 0.1 chance, six 0.5712-second periods, radius 0.75, and 5-damage ticks; this is an on-hit storm, not full attack damage in a circle. |
| Bile Launcher / Earthsplitter | `BileLauncherZagaraBombardmentDamageSearch` uses radius 2. Earthsplitter bombardment is triggered in `LibCOMI.galaxy` via `ArtilleryMengskBombardmentDropDelayCP`; `ArtilleryMengskBombardmentDamageSearch` uses radius 3 and ground-only filtering. |
| Mines | `HHWidowMineExplodeSplashSearch` uses radius **2.625**, with a separate 40-damage (+40 shields) effect. Spider Mine's co-op override changes radii to 0.9687/1.2812/1.75; `CerberusMines` multiplies each by 1.33. The previous Notes described the upgraded outer radii as baseline for both commanders. |
| Other conditional / extra weapons | Kerrigan `ChainReaction1SearchForNewTarget`–`4SearchForNewTarget`: four jumps of radius 4, 10 damage each. `AlarakBaneBladesAoeSearch`: Overpowered + Empower Me only, arc 180 / radius 2, base 30 damage. `CommanderPrestigeSwannDrill`: P1 radius 1.5. `HyperionVoidCoopSecondaryWeapons`: independent single-target shots every 0.1 seconds, selected within radius 6 plus unit size. `MedivacMengskSiegeTankAirlift*`: transported Shock Division's anti-air splash, including the rank-3 radii. |

### Rejected candidates and scope boundaries

- Immortal's `ImmortalSplashSearch`, Slayer/Stalker's `StalkerEntropyLanceSearch`, Phoenix bomber effects, Kerrigan Hydralisk's `ExplosiveSpinesDamage`, Void Ray's `VoidRaySwarmBounceSearch`, and Shadow Guard's cleave are gated by campaign upgrades unavailable to those co-op commanders. Do not add them just because their catalog entries exist.
- Carrier bombing runs and `CarrierPhotonBombsSwitch` splash branches are gated by unavailable research; ordinary Interceptors remain single-target. Clolarion's Interdictors are a different, active weapon.
- Wrathwalker's charged beam replaces inherited Thermal Lances. Raynor Battlecruiser does not use Nova campaign's All-Purpose Laser Battery. Sky Fury's inherited splash rings require Raynor's HALO Rockets upgrade, which Mengsk cannot research.
- Abathur's Leviathan is `HotSLeviathan`, not the older `Leviathan`; its active ground and air weapons have no splash. Mengsk's `UltraliskMengskKaiserBladesDamage` also has no area entries. Do not infer splash from the unit family.
- Healing, armor, fear, slows, detection suppression, propaganda, knockback, and prestige tracking searches are not damage splash. Infested Diamondback's slime is a movement trail; spawned Banelings/Scourge/Volatile Infested have their own entries. Mengsk P3 trooper explosions and Tychus D99 explosions are death effects.
- Conditional descriptions for Alarak, Drakken Laser Drill, and Imperial Intercessor state their conditions explicitly because the units page does not currently model Empower Me activation, that drill prestige, or transported units. This audit did not add those selectors.

### Inventory coverage

“Base/conditional AoE” means the relevant weapon mode has an `aoe` description; it does not imply all modes splash. “Upgrade” means an AoE text replacement exists for that named upgrade or rank. “No weapon AoE found” includes units without a damaging weapon and units whose damage areas belong only to separate abilities or unavailable campaign branches described above.

| Commander | Unit | Row IDs | Catalog unit(s) checked | Disposition |
| --- | --- | --- | --- | --- |
| Abathur | Roach | 1 | `Roach` | No weapon AoE found |
| Abathur | Ravager | 2 | `RavagerAbathur` | No weapon AoE found |
| Abathur | Swarm Host | 3 | `SwarmHost` | No weapon AoE found |
| Abathur | Locust | 4 | `AbathurLocust` | No weapon AoE found |
| Abathur | Mutalisk | 5 | `MutaliskBroodlord` | Base/conditional AoE; Upgrade: Vicious Glave |
| Abathur | Guardian | 6 | `GuardianMP` | No weapon AoE found |
| Abathur | Devourer | 7, 8 | `DevourerMP` | Upgrade: Corrosive Spray |
| Abathur | Viper | 9, 10 | `Viper` | No weapon AoE found |
| Abathur | Swarm Queen | 11, 12, 13 | `SwarmQueen` | No weapon AoE found |
| Abathur | Brutalisk | 14, 15 | `Brutalisk` | Base/conditional AoE |
| Abathur | Leviathan | 16, 17, 18 | `HotSLeviathan` | No weapon AoE found |
| Alarak | Supplicant | 19 | `Supplicant` | No weapon AoE found |
| Alarak | Slayer | 20, 21 | `Stalker` | No weapon AoE found |
| Alarak | Ascendant | 22 | `HighTemplarTaldarim` | No weapon AoE found |
| Alarak | Vanguard | 23 | `ImmortalTaldarim` | Base/conditional AoE; Upgrade: Matter Dispersion |
| Alarak | Wrathwalker | 24, 25 | `ColossusTaldarim` | No weapon AoE found |
| Alarak | Havoc | 26 | `Monitor` | No weapon AoE found |
| Alarak | War Prism | 27 | `WarpPrismTaldarim`, `WarpPrismPhasingTaldarim` | No weapon AoE found |
| Artanis | Zealot | 28 | `Zealot`, `ZealotAiur` | No weapon AoE found |
| Artanis | Dragoon | 29, 30 | `Dragoon` | No weapon AoE found |
| Artanis | High Templar | 31 | `HighTemplar` | No weapon AoE found |
| Artanis | Archon | 32, 33 | `Archon` | Base/conditional AoE |
| Artanis | Immortal | 34, 35 | `Immortal`, `ImmortalAiur` | No weapon AoE found |
| Artanis | Reaver | 36, 37 | `Reaver` | Base/conditional AoE; Upgrade: Solarite Payload |
| Artanis | Phoenix | 38, 39 | `Phoenix` | No weapon AoE found |
| Artanis | Tempest | 40, 41 | `TempestPurifier` | No weapon AoE found |
| Alarak | Mothership | 42 | `TalDarimMothership` | No weapon AoE found |
| Alarak | Destroyer | 43, 44 | `VoidRayTaldarim` | Base/conditional AoE |
| Alarak | Alarak | 45, 46 | `AlarakCoop` | Base/conditional AoE |
| Dehaka | Primal Zergling | 47 | `DehakaZerglingLevel2` | No weapon AoE found |
| Dehaka | Ravasaur | 48 | `DehakaRavasaur` | No weapon AoE found |
| Dehaka | Primal Roach | 49 | `DehakaRoachLevel2` | No weapon AoE found |
| Dehaka | Primal Igniter | 50 | `DehakaRoachLevel3` | Base/conditional AoE |
| Dehaka | Primal Guardian | 51 | `DehakaGuardian` | No weapon AoE found |
| Dehaka | Primal Hydralisk | 52 | `DehakaHydraliskLevel2` | No weapon AoE found |
| Dehaka | Primal Mutalisk | 53, 417 | `DehakaMutaliskLevel3` | Base/conditional AoE; Upgrade: Slicing Glaive |
| Dehaka | Impaler | 54, 55 | `ImpalerDehaka`, `ImpalerDehakaBurrowed` | No weapon AoE found |
| Dehaka | Primal Host | 56 | `DehakaSwarmHost` | No weapon AoE found |
| Dehaka | Primal Locust | 57 | `DehakaLocust`, `DehakaLocustFlying` | No weapon AoE found |
| Dehaka | Creeper Host | 58 | `DehakaPrimalSwarmHost` | No weapon AoE found |
| Dehaka | Explosive Creeper | 59, 60, 418 | `DehakaCreeperFlying` | Base/conditional AoE |
| Dehaka | Primal Ultralisk | 61 | `DehakaUltraliskLevel2` | Base/conditional AoE |
| Dehaka | Tyrannozor | 62, 63 | `DehakaUltraliskLevel3` | Base/conditional AoE |
| Dehaka | Greater Primal Wurm | 64 | `DehakaNydusDestroyerTimedNoFood` | No weapon AoE found |
| Dehaka | Glevig | 65 | `DehakaGlevig` | Base/conditional AoE |
| Dehaka | Murvar | 66 | `DehakaMurvar` | No weapon AoE found |
| Dehaka | Dakrun | 67 | `DehakaDakrun` | No weapon AoE found |
| Fenix | Legionnaire | 68 | `ZealotPurifier` | No weapon AoE found |
| Fenix | Adept | 69, 70, 415, 416 | `AdeptFenix` | No weapon AoE found |
| Fenix | Conservator | 71 | `SentryFenix`, `SentryFenixPhasing` | No weapon AoE found |
| Fenix | Immortal | 72, 73 | `Immortal`, `ImmortalAiur` | No weapon AoE found |
| Fenix | Colossus | 74 | `Colossus`, `ColossusPurifier` | Base/conditional AoE |
| Fenix | Disruptor | 75 | `Disruptor` | No weapon AoE found |
| Fenix | Scout | 76, 77, 78, 79 | `ScoutMP` | No weapon AoE found |
| Fenix | Carrier | 80 | `Carrier` | No weapon AoE found |
| Fenix | Kaldalis | 81 | `FenixKaldalisZealot` | Upgrade: Empowered Blades |
| Fenix | Talis | 82, 83, 419, 420 | `FenixTalisAdept` | No weapon AoE found |
| Fenix | Taldarin | 84, 85 | `FenixTaldarinImmortal` | Upgrade: Gravimetric Overload |
| Fenix | Warbringer | 86 | `FenixWarbringerColossus` | Base/conditional AoE |
| Fenix | Mojo | 87, 88, 89, 90 | `FenixMojoScout` | No weapon AoE found |
| Fenix | Clolarion | 91, 92, 93, 94 | `FenixClolarionCarrier` | Base/conditional AoE |
| Fenix | Fenix Praetor Armor | 95 | `FenixCoop` | No weapon AoE found |
| Fenix | Fenix Solarite Dragoon | 96 | `FenixDragoon` | No weapon AoE found |
| Fenix | Fenix Cybros Arbiter | 97 | `FenixArbiter` | No weapon AoE found |
| Horner | Assault Galleon | 98 | `HHMercStarportNoArmy`, `HHMercStarportUpgraded` | No weapon AoE found |
| Horner | Hangar Bay | 99 | `HHGriffon` | No weapon AoE found |
| Horner | Reaper | 100, 101 | `HHReaper` | No weapon AoE found |
| Horner | Widow Mine | 102 | `HHWidowMine`, `HHWidowMineBurrowed` | Base/conditional AoE |
| Horner | Hellion | 103, 104 | `HHHellion` | No weapon AoE found |
| Horner | Hellbat | 105, 106 | `HHHellionTank` | Base/conditional AoE |
| Horner | Asteria Wraith | 107 | `HHWraith` | No weapon AoE found |
| Horner | Deimos Viking | 108, 109, 110 | `HHVikingAssault`, `HHVikingFighter` | Upgrade: Shredder Rounds |
| Horner | Sovereign Battlecruiser | 111 | `HHBattlecruiser` | No weapon AoE found |
| Horner | Theia Raven | 112 | `HHRaven` | No weapon AoE found |
| Karax | Sentinel | 113 | `ZealotPurifier` | No weapon AoE found |
| Karax | Energizer | 114 | `SentryPurifier`, `SentryPhasing` | No weapon AoE found |
| Karax | Immortal | 115, 116 | `Immortal`, `ImmortalAiur` | No weapon AoE found |
| Karax | Colossus | 117 | `Colossus`, `ColossusPurifier` | Base/conditional AoE; Upgrade: Fire Beam |
| Karax | Mirage | 118, 119 | `PhoenixPurifier` | No weapon AoE found |
| Karax | Carrier | 120 | `Carrier` | No weapon AoE found |
| Kerrigan | Queen | 121, 122, 123 | `QueenCoop` | No weapon AoE found |
| Kerrigan | Zergling | 124 | `HotSRaptor` | No weapon AoE found |
| Kerrigan | Hydralisk | 125 | `Hydralisk` | No weapon AoE found |
| Kerrigan | Lurker | 126, 127 | `Lurker` | Base/conditional AoE |
| Kerrigan | Ultralisk | 128 | `HotSTorrasque` | Base/conditional AoE |
| Kerrigan | Mutalisk | 129 | `MutaliskBroodlord` | Base/conditional AoE; Upgrade: Severing Glave, Vicious Glave |
| Kerrigan | Brood Lord | 130 | `BroodLord` | No weapon AoE found |
| Kerrigan | Broodling | 131 | `Broodling` | No weapon AoE found |
| Kerrigan | Kerrigan | 132 | `KerriganVoid` | Upgrade: Chain Reaction |
| Nova | Elite Marine | 133 | `Marine_BlackOps` | No weapon AoE found |
| Nova | Marauder Commando | 134, 135 | `Marauder_BlackOps` | No weapon AoE found |
| Nova | Spec Ops Ghost | 136, 137 | `Ghost_BlackOps` | No weapon AoE found |
| Nova | Hellbat Ranger | 138, 139 | `HellbatBlackOps` | Base/conditional AoE |
| Nova | Hellion Ranger | 140, 141 | `HellionBlackOps` | Base/conditional AoE |
| Nova | Strike Goliath | 142, 143, 144 | `Goliath_BlackOps` | No weapon AoE found |
| Nova | Heavy Siege Tank | 145, 146, 147, 148 | `SiegeTank_BlackOps`, `SiegeTankSieged_BlackOps` | Base/conditional AoE |
| Nova | Raid Liberator | 149, 150 | `Liberator_BlackOps`, `LiberatorAG_BlackOps` | Base/conditional AoE |
| Nova | Covert Banshee | 151 | `Banshee_BlackOps` | No weapon AoE found |
| Nova | Raven Type II | 152 | `Raven_BlackOps` | No weapon AoE found |
| Nova | Nova | 153, 154, 155 | `NovaCoop` | Base/conditional AoE |
| Raynor | Marine | 156 | `Marine` | No weapon AoE found |
| Raynor | Marauder | 157, 158 | `Marauder` | No weapon AoE found |
| Raynor | Firebat | 159, 160 | `Firebat` | Base/conditional AoE; Upgrade: Incinerator Gauntlets |
| Raynor | Medic | 161 | `Medic` | No weapon AoE found |
| Raynor | Vulture | 162, 163 | `Vulture` | No weapon AoE found |
| Raynor | Siege Tank | 164, 165, 166, 167 | `SiegeTank`, `SiegeTankSieged` | Base/conditional AoE |
| Raynor | Viking | 168, 169, 170 | `VikingFighter`, `VikingAssault` | Upgrade: Ripwave Missiles |
| Raynor | Banshee | 171 | `Banshee` | Upgrade: Shockwave Missile Battery |
| Raynor | Battlecruiser | 172, 173 | `Battlecruiser` | No weapon AoE found |
| Raynor | Hyperion | 174, 175 | `HyperionVoidCoop` | Base/conditional AoE |
| Raynor | Dusk Wings | 176 | `DuskWing` | Base/conditional AoE |
| Stukov | Infested Marine | 177 | `SIInfestedMarine` | No weapon AoE found |
| Stukov | Infested Trooper | 178 | `SIInfestedTrooper` | No weapon AoE found |
| Stukov | Infested Civilian | 179 | `SIInfestedCivilian` | No weapon AoE found |
| Stukov | Volatile Infested | 180, 181 | `SIVolatileInfested` | Base/conditional AoE |
| Stukov | Infested Bunker | 182 | `SIInfestedBunker`, `SIInfestedBunkerUprooted` | No weapon AoE found |
| Stukov | Infested Diamondback | 183, 184 | `StukovInfestedDiamondBack` | No weapon AoE found |
| Stukov | Infested Siege Tank | 185, 186, 187, 188, 189, 190 | `StukovInfestedSiegeTank`, `StukovInfestedSiegeTankUprooted` | Base/conditional AoE |
| Stukov | Infested Liberator | 191 | `SILiberator` | Base/conditional AoE; Upgrade: Cloud Dispersal |
| Stukov | Infested Banshee | 192 | `StukovInfestedBanshee` | No weapon AoE found |
| Stukov | Brood Queen | 193, 194 | `SIQueen` | No weapon AoE found |
| Stukov | Apocalisk | 195 | `StukovApocalisk` | Base/conditional AoE |
| Stukov | Aleksander | 196, 197 | `StukovAleksander`, `StukovAleksanderCrashed` | No weapon AoE found |
| Swann | Hellbat | 198, 199 | `HellionTank` | Base/conditional AoE |
| Swann | Goliath | 200, 201, 202 | `Goliath` | No weapon AoE found |
| Swann | Siege Tank | 203, 204, 205, 206 | `SiegeTank`, `SiegeTankSieged` | Base/conditional AoE |
| Swann | Cyclone | 207 | `Cyclone` | No weapon AoE found |
| Swann | Thor | 208, 209, 210 | `Thor` | Base/conditional AoE |
| Swann | Hellion | 211, 212 | `Hellion` | Base/conditional AoE |
| Swann | Wraith | 213, 214, 215 | `Wraith` | No weapon AoE found |
| Swann | Hercules | 216 | `Hercules` | No weapon AoE found |
| Swann | Science Vessel | 217 | `ScienceVessel` | No weapon AoE found |
| Tychus | Tychus Findlay | 218 | `TychusCoop` | No weapon AoE found |
| Tychus | Crooked Sam | 219 | `TychusReaper` | No weapon AoE found |
| Tychus | James Sirius Sykes | 220 | `TychusWarhound` | No weapon AoE found |
| Tychus | Miles Blaze Lewis | 221, 222 | `TychusFirebat` | Base/conditional AoE |
| Tychus | Rob Cannonball Boswell | 223 | `TychusHERC` | No weapon AoE found |
| Tychus | Vega | 224, 225 | `TychusGhost` | No weapon AoE found |
| Tychus | Nux | 226 | `TychusSpectre` | No weapon AoE found |
| Tychus | Lt Layna Nikara | 227 | `TychusMedic` | No weapon AoE found |
| Vorazun | Centurion | 228 | `ZealotShakuras` | No weapon AoE found |
| Vorazun | Stalker | 229, 230 | `StalkerShakuras` | No weapon AoE found |
| Vorazun | Dark Templar | 231 | `DarkTemplarShakuras` | No weapon AoE found |
| Vorazun | Dark Archon | 232 | `DarkArchon` | Base/conditional AoE |
| Vorazun | Corsair | 233, 234 | `CorsairMP` | Base/conditional AoE |
| Vorazun | Void Ray | 235, 236 | `VoidRay` | No weapon AoE found |
| Vorazun | Oracle | 237, 238 | `Oracle` | No weapon AoE found |
| Vorazun | Shadow Guard | 239 | `VorazunShadowGuard` | No weapon AoE found |
| Swann | ARES | 240 | `VoidCoopARES` | No weapon AoE found |
| Zagara | Queen | 241, 242, 243 | `QueenCoop` | No weapon AoE found |
| Zagara | Zergling | 244 | `HotSSwarmling` | No weapon AoE found |
| Zagara | Baneling | 245, 246 | `HotSSplitterlingBig` | Base/conditional AoE; Upgrade: Rupture |
| Zagara | Baneling Spawn | 247, 248 | `HotSSplitterlingMedium` | Base/conditional AoE; Upgrade: Rupture |
| Zagara | Aberration | 249, 250 | `InfestedAbomination` | No weapon AoE found |
| Zagara | Scourge | 251 | `Scourge` | Upgrade: Virulent Spores |
| Zagara | Corruptor | 252, 253 | `ZagaraCorruptor` | No weapon AoE found |
| Zagara | Zagara | 254 | `ZagaraVoidCoop` | Upgrade: Medusa Blades |
| Zagara | Hunter Killer | 255 | `HunterKiller` | No weapon AoE found |
| Zagara | Roach | 256 | `Roach` | No weapon AoE found |
| Zeratul | XelNaga Ambusher | 257, 258 | `ZeratulStalker` | No weapon AoE found |
| Zeratul | XelNaga Shieldguard | 259 | `ZeratulSentry` | No weapon AoE found |
| Zeratul | Void Templar | 260 | `ZeratulDarkTemplar` | No weapon AoE found |
| Zeratul | XelNaga Enforcer | 261, 262, 263, 264 | `ZeratulImmortal` | Upgrade: Force Cannon |
| Zeratul | XelNaga Abrogator | 265 | `ZeratulDisruptor` | Base/conditional AoE; Upgrade: Cluster Nova |
| Zeratul | XelNaga Void Array | 266 | `ZeratulWarpPrism`, `ZeratulWarpPrismPhasing` | No weapon AoE found |
| Zeratul | Zealot | 267 | `ZeratulSummonZealot` | No weapon AoE found |
| Zeratul | Telbrus | 268 | `ZeratulSummonKarass` | No weapon AoE found |
| Zeratul | Void Ray | 269, 270 | `ZeratulSummonVoidRay` | No weapon AoE found |
| Zeratul | Zoraya | 271, 272 | `Mohandar` | No weapon AoE found |
| Zeratul | Dark Archon | 273 | `ZeratulDarkArchon` | Base/conditional AoE |
| Zeratul | Serdath | 274 | `ZeratulHeroDarkArchon` | Base/conditional AoE |
| Zeratul | Zeratul | 275, 276 | `ZeratulCoop` | No weapon AoE found |
| Dehaka | Primal Wurm | 277 | `DehakaNydusDestroyer` | No weapon AoE found |
| Fenix | Photon Cannon | 278 | `PhotonCannon` | No weapon AoE found |
| Abathur | Spine Crawler | 279, 280, 281 | `SpineCrawler` | No weapon AoE found |
| Abathur | Spore Crawler | 282, 283 | `SporeCrawler` | No weapon AoE found |
| Horner | Missile Turret | 284 | `MissileTurret` | No weapon AoE found |
| Alarak | Photon Cannon | 285 | `PhotonCannon` | No weapon AoE found |
| Karax | Photon Cannon | 286 | `PhotonCannon` | No weapon AoE found |
| Karax | Khaydarin Monolith | 287 | `KhaydarinMonolith` | No weapon AoE found |
| Kerrigan | Spine Crawler | 288, 289, 290 | `SpineCrawler` | No weapon AoE found |
| Kerrigan | Spore Crawler | 291, 292 | `SporeCrawler` | No weapon AoE found |
| Nova | Railgun Turret | 293 | `NovaACLaserTurret` | Base/conditional AoE |
| Nova | Missile Turret | 294 | `MissileTurret` | No weapon AoE found |
| Artanis | Observer | 295, 296 | `Observer`, `ObserverSiegeMode` | No weapon AoE found |
| Fenix | Observer | 297, 298 | `Observer`, `ObserverSiegeMode` | No weapon AoE found |
| Karax | Observer | 299, 300 | `Observer`, `ObserverSiegeMode` | No weapon AoE found |
| Raynor | Missile Turret | 301 | `MissileTurret` | No weapon AoE found |
| Stukov | Infested Missile Turret | 302, 303 | `SIMissileTurret` | No weapon AoE found |
| Swann | Flaming Betty | 304, 305 | `FlamingBetty` | Base/conditional AoE |
| Swann | Spinning Dizzy | 306, 307 | `KelMorianMissileTurret` | Base/conditional AoE |
| Swann | Blaster Billy | 308, 309 | `KelMorianGrenadeTurret` | No weapon AoE found |
| Vorazun | Photon Cannon | 310 | `PhotonCannon` | No weapon AoE found |
| Zagara | Spine Crawler | 311, 312, 313 | `SpineCrawler` | No weapon AoE found |
| Zagara | Spore Crawler | 314, 315 | `SporeCrawler` | No weapon AoE found |
| Tychus | AutoTurret | 316 | `TychusSCVAutoTurret` | No weapon AoE found |
| Zeratul | Tesseract Cannon | 317 | `ZeratulPhotonCannon` | No weapon AoE found |
| Zeratul | XelNaga Watcher | 318, 319 | `ZeratulObserver`, `ZeratulObserverSiegeMode` | No weapon AoE found |
| Kerrigan | Overlord | 320 | `Overlord` | No weapon AoE found |
| Kerrigan | Overseer | 321, 322 | `Overseer`, `OverseerSiegeMode` | No weapon AoE found |
| Stukov | Overlord | 323 | `SIOverlord` | No weapon AoE found |
| Stukov | Overseer | 324, 325 | `Overseer`, `OverseerSiegeMode` | No weapon AoE found |
| Abathur | Overlord | 326 | `Overlord` | No weapon AoE found |
| Abathur | Overseer | 327, 328 | `Overseer` | No weapon AoE found |
| Zagara | Overlord | 329 | `Overlord` | No weapon AoE found |
| Zagara | Overseer | 330, 331 | `Overseer`, `OverseerSiegeMode` | No weapon AoE found |
| Zeratul | Tesseract Monolith | 332 | `ZeratulKhaydarinMonolith` | Base/conditional AoE |
| Tychus | Kev Rattlesnake West | 333, 334 | `TychusMarauder` | Upgrade: Hammer Munitions |
| Zeratul | Avatar of Form | 335 | `ZeratulXelNagaConstructCyan` | No weapon AoE found |
| Zeratul | Avatar of Essence | 336 | `ZeratulXelNagaConstruct` | No weapon AoE found |
| Zeratul | Charged Crystal | 337 | `ZeratulXelNagaChargedCrystalCyan` | Base/conditional AoE |
| Tychus | Odin | 338, 339, 340 | `TychusOdin` | Base/conditional AoE |
| Karax | Shield Battery | 341 | `ShieldBattery` | No weapon AoE found |
| Tychus | Warhound Turret | 342 | `TychusWarhoundAutoTurret` | No weapon AoE found |
| Nova | Holo Decoy | 343 | `NovaCoopDecoy` | No weapon AoE found |
| Artanis | Photon Cannon | 344 | `PhotonCannon` | No weapon AoE found |
| Abathur | Broodling | 345 | `Broodling` | No weapon AoE found |
| Zagara | Broodling | 346 | `Broodling` | No weapon AoE found |
| Stukov | Broodling | 347 | `StukovInfestBroodling` | No weapon AoE found |
| Zagara | Bile Launcher | 348 | `BileLauncherZagara` | Base/conditional AoE |
| Stukov | Flying Broodling | 349 | `SIBroodlingFlying` | No weapon AoE found |
| Stetmann | Mecha Zergling | 350 | `ZerglingStetmann` | No weapon AoE found |
| Stetmann | Mecha Baneling | 351, 352 | `BanelingStetmann` | Base/conditional AoE |
| Stetmann | Mecha Hydralisk | 353, 367, 368 | `HydraliskStetmann` | No weapon AoE found |
| Stetmann | Mecha Lurker | 354, 355 | `LurkerStetmann`, `LurkerStetmannBurrowed` | Base/conditional AoE |
| Stetmann | Mecha Corruptor | 356 | `CorruptorStetmann` | No weapon AoE found |
| Stetmann | Mecha Battlecarrier Lord | 357, 358 | `BroodLordStetmann` | No weapon AoE found |
| Stetmann | Mecha Broodling | 359 | `BroodlingEscortStetmann`, `BroodlingStetmann` | No weapon AoE found |
| Stetmann | Mecha Infestor | 360, 425 | `InfestorStetmann` | No weapon AoE found |
| Stetmann | Mecha Roach | 361, 362 | `RoachStetmann` | No weapon AoE found |
| Stetmann | Mecha Ravager | 363 | `RavagerStetmann` | No weapon AoE found |
| Stetmann | Mecha Ultralisk | 364 | `UltraliskStetmann` | Base/conditional AoE |
| Stetmann | Gary | 365 | `GaryStetmann` | No weapon AoE found |
| Stetmann | Super Gary | 366 | `SuperGaryStetmann` | No weapon AoE found |
| Stetmann | Mecha Spine Crawler | 369, 370, 371 | `SpineCrawlerStetmann` | No weapon AoE found |
| Stetmann | Mecha Spore Crawler | 372, 373 | `SporeCrawlerStetmann` | No weapon AoE found |
| Swann | Drakken Laser Drill | 374, 375, 376 | `DrakkenLaserDrillCoop` | Base/conditional AoE |
| Raynor | Bunker | 377 | `Bunker` | No weapon AoE found |
| Raynor | Spider Mine | 378 | `SpiderMine` | Base/conditional AoE; Upgrade: Cerberus Mine |
| Nova | Spider Mine | 379 | `SpiderMine` | Base/conditional AoE |
| Mengsk | Dom. Trooper | 380 | `TrooperMengsk` | No weapon AoE found |
| Mengsk | Dom. Assault Trooper | 381 | `TrooperMengskImproved` | No weapon AoE found |
| Mengsk | Dom. Flame Trooper | 382, 383 | `TrooperMengskFlamethrower` | Base/conditional AoE |
| Mengsk | Dom. Rocket Trooper | 384, 385, 386 | `TrooperMengskAA` | No weapon AoE found |
| Mengsk | Aegis Guard | 387, 388 | `MarauderMengsk` | Upgrade: 2 |
| Mengsk | Emperors Shadow | 389, 390 | `GhostMengsk` | No weapon AoE found |
| Mengsk | Shock Division | 391, 392, 393, 394 | `SiegeTankMengsk`, `SiegeTankMengskSieged` | Base/conditional AoE; Upgrade: 3 |
| Mengsk | Blackhammer | 395, 396, 397, 398 | `ThorMengsk`, `ThorMengskSieged` | Base/conditional AoE; Upgrade: 1 |
| Mengsk | Sky Fury | 399, 400, 401 | `VikingMengskAssault`, `VikingMengskFighter` | No weapon AoE found |
| Mengsk | Imperial Intercessor | 402 | `MedivacMengsk` | Base/conditional AoE |
| Mengsk | Imperial Witness | 403 | `RavenMengsk`, `RavenMengskSieged` | No weapon AoE found |
| Mengsk | Pride of Augustgrad | 404, 411 | `BattlecruiserMengsk` | No weapon AoE found |
| Mengsk | Missile Turret | 405 | `MissileTurretMengsk` | No weapon AoE found |
| Mengsk | Earthsplitter Ordnance | 406 | `ArtilleryMengsk` | Base/conditional AoE |
| Mengsk | Enthralled Zergling | 407 | `ZerglingMengsk` | No weapon AoE found |
| Mengsk | Enthralled Hydralisk | 408 | `HydraliskMengsk` | No weapon AoE found |
| Mengsk | Enthralled Mutalisk | 409 | `MutaliskMengsk` | Base/conditional AoE |
| Mengsk | Enthralled Ultralisk | 410 | `UltraliskMengsk` | No weapon AoE found |
| Stetmann | Mecha Overlord | 412 | `OverlordStetmann` | No weapon AoE found |
| Stetmann | Mecha Overseer | 413, 414 | `OverseerStetmann`, `OverseerStetmannSiegeMode` | No weapon AoE found |
| Artanis | Unbound Fanatic | 421, 422 | `CommanderPrestigeArtanisOrbitalStrikesArchon` | Base/conditional AoE |
| Dehaka | Primal Hive | 423 | `DehakaHatchery`, `DehakaHatcheryUprooted` | No weapon AoE found |
| Dehaka | Primal Warden | 424 | `DehakaBarracks`, `DehakaBarracksUprooted` | No weapon AoE found |
