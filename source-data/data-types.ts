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
    light: NumericBoolean;
    armored: NumericBoolean;
    biological: NumericBoolean;
    mechanical: NumericBoolean;
    psionic: NumericBoolean;
    heroic: NumericBoolean;
    massive: NumericBoolean;
    structure: NumericBoolean;
    breakpoint: NumericBoolean;
    flyer: NumericBoolean;
}

export type AmonUnitList = AmonUnit[];

export interface PlayerUnit {
    unitid: PositiveInteger;
    basename: string;
    name: string;
    commander: string;
    race: string;
    combatunit: NumericBoolean;
    mcost: NonNegativeInteger;
    vcost: NonNegativeInteger;
    supply: number;
    buildtime: NonNegativeInteger;
    hp: NonNegativeInteger;
    shields: NonNegativeInteger;
    armor: NonNegativeInteger;
    shieldarmor: NonNegativeInteger;
    energy: NonNegativeInteger;
    movementspeed: number;
    sightrange: number;
    tags: string;
    atkrange: number;
    attackspeed: number;
    attacks: NonNegativeInteger;
    /** Tags that this unit deals bonus damage to */
    attribute: string | null;
    damage: NonNegativeInteger;
    /** Text description of weapon area-of-effect */
    aoe?: string;
    attackbonus: NonNegativeInteger;
    hpbonus: number;
    armorbonus: NonNegativeInteger;
    shieldbonus: number | null;
    notes: string;
}

export type PlayerUnitList = PlayerUnit[];

/** Skills transcribed from the commander overviews, including hero and summoned-unit skills. */
export interface UnitSkill {
    commander: string;
    /** PlayerUnit.basename where available; some overview units have no stats entry yet. */
    unit: string;
    name: string;
    /** Site-relative image paths, in overview order. Empty when no icon is supplied. */
    icons: string[];
    /** Plain text, with line breaks preserved. */
    description: string;
    type: 'active' | 'autocast' | 'passive';
    /** The overview marks this skill as requiring an upgrade (unlockable). */
    requiresupgrade: boolean;
    /** Overview text, preserving variable cooldowns, charges, and initial cooldowns. */
    cooldown: string | null;
    /** Overview text; null means unspecified, whereas "0" means explicitly free. */
    energycost: string | null;
    /** Maximum stored charges, when the skill can store more than one use. */
    charges?: PositiveInteger;
    rankrequired: NonNegativeInteger | null;
    mode: string | null;
    prestige: string | null;
    /** Other stated prerequisites, such as artifacts or skill points, and exclusions. */
    requirements: string | null;
}

export type UnitSkillList = UnitSkill[];

export interface PlayerTalent {
    talentid: PositiveInteger;
    unit: string;
    commander: string;
    name: string;
    nameid: string;
    /** Directly applies a temporary effect. Omitted means false. */
    temporary?: boolean;
    modifier: string;
    /** which upgrade needs to be enabled for this to have an effect? */
    modifierupgrade: string | null;
    extra: string | null;
    value: number;
    operation: 'add' | 'set' | 'multiply';
    operationtype: 'increase' | 'decrease' | null;
    talenttype: 'mastery' | 'prestige' | 'post';
    target: string;
}

export type PlayerTalentList = PlayerTalent[];

export interface PlayerUpgradeBase {
    upgradeid: PositiveInteger;
    unit: string;
    commander: string;
    name: string;
    icon: string;
    /** Applies an active temporary effect rather than permanent research. Omitted means false. */
    temporary?: boolean;
    /** Royal Guard rank that unlocks this named ability. */
    rank?: 1 | 2 | 3;
    effect: string;
    /** which mode does it apply to? (e.g. Siege Mode) */
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
    modifier: 'aoe';
    modifiertag: null;
    /** Replaces the entire plain-text description, rather than matching a substring. */
    value: string;
    operation: 'replace';
} | {
    modifier: null;
    modifiertag: null;
    value: null;
    /** Informational upgrade with no effect on the displayed stats. */
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
