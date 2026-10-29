# Data sources

Data was originally converted from starcraft_coop.sql (in html/files/, also visible in https://starcraft2coop.com/files/ ), which was provided by Aommaster.

Much of the newer data comes from SC2Mapster/SC2GameData.

# SC2Mapster data layout

[SC2Mapster/SC2GameData](https://github.com/SC2Mapster/SC2GameData) contains extracted game catalogs and scripts. The reference snapshot is [6dd323aae4209a01f110719a00b4e8f7a88389bc](https://github.com/SC2Mapster/SC2GameData/tree/6dd323aae4209a01f110719a00b4e8f7a88389bc).

## Directories

Paths below are relative to the SC2GameData repository:

| Path | Contents |
| --- | --- |
| `mods/liberty.sc2mod`, `mods/swarm.sc2mod`, `mods/void.sc2mod` | Base game and expansion definitions |
| `campaigns/liberty.sc2campaign`, `campaigns/swarm.sc2campaign`, `campaigns/void.sc2campaign` | Campaign definitions inherited by many co-op units |
| `mods/novastoryassets.sc2mod` | Nova campaign assets and definitions |
| `mods/starcoop/starcoop.sc2mod` | Shared co-op definitions and overrides |
| `mods/starcoop/commanders/arcturusmengsk.sc2mod` | Mengsk definitions |
| `mods/starcoop/commanders/egonstetmann.sc2mod` | Stetmann definitions |

Within a mod or campaign, catalogs are under `base.sc2data/GameData/`, Galaxy scripts are under `base.sc2data/`, and English strings are in `enus.sc2data/LocalizedData/GameStrings.txt`.

Some commander catalogs combine multiple entry types in one file. In the shared co-op mod, check `base.sc2data/GameData/Commanders/CommanderTychus.xml` for Tychus and `Commanders/FutureCommanders.xml` for Zeratul.

## Catalogs and references

| File | What to look for |
| --- | --- |
| `UnitData.xml` | Base stats, attributes, weapon and ability links, behaviors, command-card buttons |
| `WeaponData.xml` | Attack period, range, target filters, and the starting effect of an attack |
| `EffectData.xml` | Damage, searches, launches, persistent effects, spawned units, and linked effect chains |
| `BehaviorData.xml` | Passive effects, buffs, attributes, veterancy, and spawn/respawn timers |
| `AbilData.xml` | Ability costs, cooldowns, charges, autocast flags, research, training, and revival |
| `UpgradeData.xml` | Catalog-field modifications from research, mastery, and prestige |
| `ValidatorData.xml` | Conditions that select or gate effects |
| `ButtonData.xml` | Ability names, tooltip string references, and `CButton/Icon` textures |
| `ActorData.xml` | Unit artwork, including `CActorUnit/UnitIcon` and `CActorMissile/UnitIcon` |

Entries link by catalog ID, which may differ substantially from the displayed unit or ability name. Follow `parent` inheritance and definitions of the same ID across dependencies: co-op can override a campaign weapon or effect without repeating all its fields. Existing catalog entries can also be unused or gated by research unavailable to a particular commander.

For weapon AoE, follow the active weapon through its effect chain, including searches, persistent offsets, behaviors, ammunition, and carrier magazines. Geometry may be in a search or directly on a damage effect. Validators, target filters, and target-count limits constrain the result; a large search radius alone does not establish the effective damage range. Check secondary damage effects separately from the primary hit.

Scripted changes are not always visible in the XML catalogs. The shared co-op mod's `LibCOMI.galaxy` includes weapon swaps, hero-level calculations, revival handling, and attacks triggered by orders. For example, `CM_Kerrigan_WeaponSwap` selects Kerrigan's Mutalisk weapon, while `CM_Dehaka_SetLevelValues` sums veterancy requirements into cumulative Essence thresholds.

## Textures

[SC2Mapster Asset Explorer](https://asset-explorer.sc2arcade.com/) provides texture browsing. Its [button index](https://github.com/sc2-arcade-watcher/asset-explorer/blob/main/site/list/buttons.json) includes both ability icons and whole-unit selection artwork. Original DDS files are available at `https://dist.sc2arcade.com/star-assets/buttons/<texture>.dds`.

Resolve ability textures through `CButton/Icon` and unit selection artwork through actor `UnitIcon` fields, following inheritance where necessary. The selection artwork is separate from animated talking-head portraits. Match catalog references rather than relying on filenames alone: the asset collection also contains community artwork. Some icons are masks tinted by the game (`TintRacially=1`), rather than complete colored buttons.
