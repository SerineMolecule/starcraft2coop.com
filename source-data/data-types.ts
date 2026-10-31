/**
 * @minimum 1
 * @asType integer
 */
export type PositiveInteger = number;
/**
 * @minimum 0
 * @asType integer
 */
export type NonNegativeInteger = number;
export type CommanderPowerRating = 1 | 2 | 3 | 4 | 5;
export type NumericBoolean = 0 | 1;
/**
 * @pattern ^[a-z0-9-]+$
 */
export type LowercaseHyphen = string;
export type MutatorId = LowercaseHyphen;

export interface BrutalPlus {
    /** as in, the X in Brutal+X */
    difficulty: PositiveInteger;
    /** minimum total points of all the mutators */
    minpoints: PositiveInteger;
    /** maximum total points of all the mutators */
    maxpoints: PositiveInteger;
    /** minimum number of mutators */
    minmutators: PositiveInteger;
    /** maximum number of mutators */
    maxmutators: PositiveInteger;
}

export type BrutalPlusList = BrutalPlus[];

export interface Commander {
    /** Normalized commander name for use in URLs and stuff
     * @pattern ^[a-z0-9]+$ */
    commander: string;
    fullname: string;
    motto: string;
    /** Ease of play */
    stat01: CommanderPowerRating;
    /** Sub-ascension power */
    stat02: CommanderPowerRating;
    /** Power level for beginners */
    stat03: CommanderPowerRating;
    /** Power level for veterans */
    stat04: CommanderPowerRating;
    /** Early game strength */
    stat05: CommanderPowerRating;
    /** Ease of macro */
    stat06: CommanderPowerRating;
    /** Ease of micro */
    stat07: CommanderPowerRating;
    /** Mutation versatility */
    stat08: CommanderPowerRating;
    /** Ramp-up speed */
    stat09: CommanderPowerRating;
    summary: string;
    mastery11: string;
    mastery12: string;
    mastery21: string;
    mastery22: string;
    mastery31: string;
    mastery32: string;
    prestige1: string;
    prestige2: string;
    prestige3: string;
}

export type CommanderList = Commander[];

export interface MutatorInteraction {
    /** ID of the first mutator in the pair, lowercased & without spaces */
    id1: MutatorId;
    /** ID of the second mutator in the pair, lowercased & without spaces, id2 > id1 */
    id2: MutatorId;
    /** Description of how the two mutators interact */
    interaction: string;
}

export type MutatorInteractionList = MutatorInteraction[];

export interface Mutator {
    mutatorid: MutatorId;
    mutatorname: string;
    /** Mutator difficulty points (see Brutal+ page) */
    abomination: NonNegativeInteger;
    mutatordescription: string;
    /** Usable in custom mutator mode */
    customusable: boolean;
    chaosrollable: boolean;
    hassafezone: boolean;
}

export interface MutatorWithStats extends Mutator {
    mutationcount: NonNegativeInteger;
}

export type MutatorList = Mutator[];

export interface WeeklyMutation {
    mutationid: PositiveInteger;
    releasedate: string;
    mutation: string;
    /** YouTube ID of TwoTuuu beating it */
    link: string | null;
    map: string;
    /** only null for Sudden but Inevitable */
    mut01: MutatorId | null;
    mut02: MutatorId | null;
    mut03: MutatorId | null;
    mut04: MutatorId | null;
    mut05: MutatorId | null;
    mut06: MutatorId | null;
    mut07: MutatorId | null;
    mut08: MutatorId | null;
    mut09: MutatorId | null;
    mut10: MutatorId | null;
    /** no clue what this is; always 0 */
    final: 0;
}

export type WeeklyMutationList = WeeklyMutation[];

export interface MutationCycle {
    mutationid: PositiveInteger;
    mutation: string;
    map: string;
    mut01: MutatorId;
    mut02: MutatorId | null;
    mut03: MutatorId | null;
}

export interface MutationCycleWithScore extends MutationCycle {
    brutalpoints: PositiveInteger | null;
    brutalplus: NonNegativeInteger | null;
}

export type MutationCycleList = MutationCycle[];

export type MissionNames = string[];

export interface Mission {
    name: string;
    mutationcount: NonNegativeInteger;
}

// Canonical unit data lives in source-data/playerunits.json (one entry per
// commander/unit) and source-data/amonunits.json (one entry per enemy variant).
// Both use modes objects and tags arrays, with movement plane stored separately.
// `make` generates html/data/legacy/ compatibility files for the old PHP
// calculators; edit the canonical source data, not those generated rows.
export type UnitTag = 'Light' | 'Armored' | 'Biological' | 'Mechanical' | 'Psionic' | 'Heroic' | 'Massive' | 'Structure';

/** Damage per hit (or tick) against one target type, before armor. */
export interface TargetDamage {
    /** Total damage at weapon upgrade level 0, including any attribute bonus. */
    damage: number;
    /** Total additional damage per weapon upgrade level against this target type. */
    damagePerUpgrade: number;
}

/**
 * An attack, alternative form, or deployed subunit. Mode-specific stats override
 * the unit's stats; omitted stats inherit from the unit. Unarmed forms omit
 * attack fields, and unknown ability damage is omitted rather than guessed.
 */
export interface UnitModeData {
    /** Display label, e.g. Air or Siege Mode. Omit for the default attack. */
    name?: string;
    weaponName?: string;
    /** Omitted when the existing data has not established its target planes. */
    targets?: "Ground" | "Air" | "Ground,Air";
    /** Omitted for ordinary weapons. Ability/spawn entries may have incomplete numeric data. */
    kind?: 'ability' | 'spawn';
    /** Target-specific totals; the empty key is the default. Omit when unarmed or unknown. */
    damage?: { '': TargetDamage } & Partial<Record<UnitTag, TargetDamage>>;
    hits?: PositiveInteger;
    /** Time between attacks in game seconds; channeling or scripted orders can delay attacks. */
    cooldown?: number;
    /** Game seconds between damage ticks in a persistent area, separate from attack cooldown. Damage is per tick, not per weapon volley. */
    tickInterval?: number;
    range?: number;
    minimumRange?: number;
    /** Default weapon upgrade level, e.g. Amon's Brutal +1. Omitted means 0; damage is always stored at level 0. */
    upgradeLevel?: 0 | 1;
    aoe?: string;
    shieldDamage?: number;
    ignoresArmor?: boolean;
    /** Catalog filters preserve restrictions beyond air/ground, e.g. structures. */
    targetFilters?: string;
    /** Details specific to this attack or form, excluding facts already in its stats or AoE. */
    notes?: string;
    /** SC2Mapster catalog IDs, including the actual projectile unit if applicable. */
    source?: {
        unit: string;
        weapon?: string;
        ability?: string;
        effect: string;
    };
    hp?: NonNegativeInteger;
    shields?: NonNegativeInteger;
    armor?: NonNegativeInteger;
    shieldarmor?: NonNegativeInteger;
    buildtime?: NonNegativeInteger;
    movementspeed?: number;
    sightrange?: number;
    tags?: UnitTag[];
    movement?: 'Ground' | 'Air';
    /** Incoming weapon target planes. Inherits the unit override, otherwise defaults to movement. */
    targetable?: 'Ground' | 'Air' | 'Ground,Air';
    statsource?: UnitStatSource;
}

export interface AmonUnit {
    amonid: PositiveInteger;
    name: string;
    /** Site-relative portrait URL; omit when no suitable image is available. */
    image?: string;
    race: string;
    hp: NonNegativeInteger;
    armor: NonNegativeInteger;
    shields: NonNegativeInteger;
    shieldarmor: NonNegativeInteger;
    /** Armor is stored at the Brutal starting level (+1) when this bonus is present. */
    armorbonus?: number;
    /** Shield armor is stored at the Brutal starting level (+1) when this bonus is present. */
    shieldbonus?: number;
    /** Catalog upgrade ID, also used to distinguish the infantry armor timing. */
    armorupgrade?: string;
    tags: UnitTag[];
    breakpoint: NumericBoolean;
    movement: 'Ground' | 'Air';
    /** Incoming weapon target planes when different from movement (e.g. Colossus). */
    targetable?: 'Ground' | 'Air' | 'Ground,Air';
    /** Base movement speed in distance units per game-time second, before upgrades, buffs, or creep. */
    movementspeed: number;
    /** Base vision radius before upgrades or buffs, distinct from detection range. */
    sightrange: number;
    statsource?: UnitStatSource;
    /** Stable mode/attack keys; the empty key is the default. */
    modes: Record<string, UnitModeData>;
    /** Unit-wide mechanics and mission modifiers; attack-specific details belong in modes. */
    notes?: string;
    /** Sources for mission-specific weapon changes and ability-only attacks. */
    weaponsources?: string[];
}

export type AmonUnitList = AmonUnit[];

export interface PlayerUnit {
    unitid: PositiveInteger;
    name: string;
    /** Keep existing direct links and legacy data, but omit this entry from the new Units selector. */
    hideFromUnitList?: boolean;
    commander: string;
    race: string;
    combatunit: NumericBoolean;
    mcost: NonNegativeInteger;
    vcost: NonNegativeInteger;
    supply: number;
    buildtime: NonNegativeInteger;
    /** This is only the morph/merge time after obtaining the parent unit(s). Display it with a leading +. */
    buildTimeIsAdditional?: boolean;
    hp: NonNegativeInteger;
    shields: NonNegativeInteger;
    armor: NonNegativeInteger;
    shieldarmor: NonNegativeInteger;
    energy: NonNegativeInteger;
    movementspeed: number;
    sightrange: number;
    tags: UnitTag[];
    /** Movement plane, when established by the source data. */
    movement?: 'Ground' | 'Air';
    /** Incoming weapon target planes when different from movement (e.g. Colossus). */
    targetable?: 'Ground' | 'Air' | 'Ground,Air';
    /** Stable mode/attack keys; the empty key is the default. */
    modes: Record<string, UnitModeData>;
    hpbonus: number;
    armorbonus: NonNegativeInteger;
    shieldbonus: number | null;
    /** Unit-wide mechanics; attack-specific details belong in modes. */
    notes: string;
}

/**
 * Catalog identity and exceptions used to obtain movement speed and sight range.
 * The catalog import uses SC2Mapster/SC2GameData at:
 * https://github.com/SC2Mapster/SC2GameData/tree/6dd323aae4209a01f110719a00b4e8f7a88389bc
 */
export interface UnitStatSource {
    unit: string;
    /** Missile mover, when applicable. */
    mover?: string;
    /** Mission-script overrides and other exceptions to catalog stats. */
    notes?: string;
    /** Sources documenting those overrides and exceptions. */
    urls?: string[];
}

export type PlayerUnitList = PlayerUnit[];

export interface ResourceCost {
    minerals: NonNegativeInteger;
    gas: NonNegativeInteger;
    supply?: NonNegativeInteger;
}

/** Skills transcribed from the commander overviews, including hero and summoned-unit skills. */
export interface UnitSkill {
    commander: string;
    /** PlayerUnit.name where available; some overview units have no stats entry yet. */
    unit: string;
    name: string;
    /** Site-relative image paths, in overview order. Empty when no icon is supplied. */
    icons: string[];
    /** Plain text, with line breaks preserved. {name} placeholders reference values and are filled after modifiers. */
    description: string;
    /** Custom description values. Unknown placeholders/keys throw; add/multiply require numbers, never numeric strings.
     * Modifiers address these as values.name. Substitutions are literal text, not HTML or nested templates.
     * Numbers display rounded to two decimal places, without changing their stored precision.
     */
    values?: Record<string, number | string>;
    type: 'active' | 'autocast' | 'passive';
    /** The overview marks this skill as requiring an upgrade (unlockable). */
    requiresupgrade: boolean;
    /** Repeat cooldown in game seconds, or text for a conditional timing. Numeric modifiers must reject text. */
    cooldown: number | string | null;
    /** Initial cooldown in game seconds, independent of the repeat cooldown. Omitted means unspecified. */
    initialCooldown?: number | string;
    /** Resources consumed by a construction, morph, installation, or other paid command.
     * Morph/merge costs exclude the parent units; supply is the additional supply required.
     */
    cost?: ResourceCost;
    /** Time to finish construction, morphing, or installation, in game seconds; excludes parent production and repeat cooldown. */
    buildTime?: NonNegativeInteger;
    /** Energy cost, or text for a conditional cost. Null means unspecified; 0 means explicitly free. */
    energycost: number | string | null;
    /** Maximum stored charges, when the skill can store more than one use. */
    charges?: PositiveInteger;
    rankrequired: NonNegativeInteger | null;
    mode: string | null;
    /** Only show this variant when the named prestige is selected; null is unrestricted. */
    prestige: string | null;
    /** Hide this skill when any of these prestiges is selected. */
    excludedPrestiges?: string[];
    /** Only show this skill while the named per-unit upgrade is selected. Unlike requiresupgrade, this controls visibility. */
    showWithUpgrade?: string;
    /** Hide this skill once the named per-unit upgrade is selected (e.g. a completed installation command). */
    hideWithUpgrade?: string;
    /** Other stated prerequisites, such as artifacts or skill points, and exclusions. */
    requirements: string | null;
}

export type UnitSkillList = UnitSkill[];

export type SkillModification = {
    /** @pattern ^(cooldown|initialCooldown|energycost|charges|values\..+)$ */
    modifier: 'cooldown' | 'initialCooldown' | 'energycost' | 'charges' | `values.${string}`;
    operation: 'add' | 'multiply' | 'set';
    value: number;
} | {
    /** @pattern ^(description|requirements|cooldown|initialCooldown|energycost|values\..+)$ */
    modifier: 'description' | 'requirements' | 'cooldown' | 'initialCooldown' | 'energycost' | `values.${string}`;
    operation: 'replace';
    value: string;
};

export interface PlayerTalentBase {
    talentid: PositiveInteger;
    unit: string;
    commander: string;
    name: string;
    nameid: string;
    /** Directly applies a temporary effect. Omitted means false. */
    temporary?: boolean;
}

export type PlayerTalent = PlayerTalentBase & ({
    modifier: string;
    /** which upgrade needs to be enabled for this to have an effect? */
    modifierupgrade: string | null;
    extra: string | null;
    value: number;
    operation: 'add' | 'set' | 'multiply';
    operationtype: 'increase' | 'decrease' | null;
    talenttype: 'mastery' | 'prestige' | 'post';
    target: 'unit' | 'upgrade';
} | {
    modifier: 'aoe' | 'weaponName';
    /** Replaces the entire weapon description when the prestige is selected. */
    operation: 'replace';
    value: string;
    /** Mode/attack key; omitted applies to all attacks. */
    weapon?: string;
    modifierupgrade: null;
    extra: null;
    operationtype: null;
    talenttype: 'prestige' | 'post';
    target: 'unit';
}) | PlayerSkillTalent;

/** Skill field changes live with the other talents, rather than duplicating the skill.
 * Add/multiply require a numeric current value; set and replace explicitly overwrite it.
 * Text replacements replace the whole field. Skill availability stays in UnitSkill.
 */
export type PlayerSkillTalent = PlayerTalentBase & SkillModification & {
    target: 'skill';
    skill: string;
    /** Restrict to a named skill mode; omitted applies to every matching mode. */
    skillMode?: string;
    modifierupgrade: null;
    extra: null;
    operationtype: 'increase' | 'decrease' | null;
    talenttype: 'mastery' | 'prestige' | 'post';
};

export type PlayerTalentList = PlayerTalent[];

export interface PlayerUpgradeBase {
    upgradeid: PositiveInteger;
    unit: string;
    commander: string;
    name: string;
    icon: string;
    /** Applies an active temporary effect rather than permanent research. Omitted means false. */
    temporary?: boolean;
    /** Purchase/research cost before optional mastery or prestige modifiers. Omit for free unlocks and effects without a purchase. */
    cost?: ResourceCost;
    /** Base research duration in game seconds. Omit for instant purchases and non-researched unlocks. */
    researchTime?: NonNegativeInteger;
    /** Selecting this upgrade makes the unit's displayed build time an additional installation/morph time. */
    buildTimeIsAdditional?: boolean;
    /** Royal Guard rank that unlocks this named ability. */
    rank?: 1 | 2 | 3;
    effect: string;
    /** Changes to this unit's skills, applied by the same upgrade checkbox as its unit-stat effect.
     * Unlock-only research stays informational: skills remain listed with their prerequisites.
     */
    skillModifiers?: (SkillModification & { skill: string; skillMode?: string })[];
    /** Mode/attack keys on this unit enabled by selecting this upgrade in the new Units UI. */
    unlocksModes?: string[];
    /** Mode/attack key for an upgrade affecting one entry; an empty string selects the default. Omitted applies to all eligible attacks. */
    weapon?: string;
    /** Mode label for form-specific unit stat changes (e.g. Siege Mode). */
    modifiermode: string | null;
    upgradetype: 'preupgrade' | 'upgrade';
}

export type PlayerUpgrade = PlayerUpgradeBase & ({
    modifier: string;
    /** which target tag does it apply to? (e.g. vs. Armored) */
    modifiertag: string | null;
    value: number;
    operation: 'add' | 'set' | 'multiply';
} | {
    modifier: 'aoe' | 'weaponName';
    modifiertag: null;
    /** Replaces the entire plain-text description, rather than matching a substring. */
    value: string;
    operation: 'replace';
} | {
    modifier: null;
    modifiertag: null;
    value: null;
    /** No direct unit-stat effect. Informational unless skillModifiers or unlocksModes supplies an effect. */
    operation: 'none';
});

export type PlayerUpgradeList = PlayerUpgrade[];

export interface Patch {
    build: PositiveInteger;
    version: string;
    link: PositiveInteger | null;
    notes: string | null;
}

export type PatchList = Patch[];

export interface MutatorCommanderTip {
    tipid: PositiveInteger;
    mutator: MutatorId;
    commander: string;
    tip: string;
    video: string | null;
}

export type MutatorCommanderTipList = MutatorCommanderTip[];

export type SearchDocumentType =
    | 'commander'
    | 'mutator'
    | 'mission'
    | 'weeklymutation'
    | 'upgrade'
    | 'talent'
    | 'prestige'
    | 'playerunit'
    | 'amonunit';

export interface SearchDocument {
    type: SearchDocumentType;
    title: string;
    path: string;
    subtitle?: string;
    commander?: string;
    text?: string;
    tokens?: string[];
}

export interface SearchIndexData {
    version: 1;
    keys: (string | { name: string, weight: number })[];
    documents: SearchDocument[];
    index: unknown;
}
