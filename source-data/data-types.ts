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
    /** ID of the first mutator in the pair */
    id1: PositiveInteger;
    /** ID of the second mutator in the pair (id2 > id1) */
    id2: PositiveInteger;
    /** Description of how the two mutators interact */
    interaction: string;
}

export type MutatorInteractionList = MutatorInteraction[];

export interface Mutator {
    mutatorid: PositiveInteger;
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
    mut01: PositiveInteger | null;
    mut02: PositiveInteger | null;
    mut03: PositiveInteger | null;
    mut04: PositiveInteger | null;
    mut05: PositiveInteger | null;
    mut06: PositiveInteger | null;
    mut07: PositiveInteger | null;
    mut08: PositiveInteger | null;
    mut09: PositiveInteger | null;
    mut10: PositiveInteger | null;
    /** no clue what this is; always 0 */
    final: 0;
}

export type WeeklyMutationList = WeeklyMutation[];

export interface MutationCycle {
    mutationid: PositiveInteger;
    mutation: string;
    map: string;
    mut01: PositiveInteger;
    mut02: PositiveInteger | null;
    mut03: PositiveInteger | null;
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
    attackbonus: NonNegativeInteger;
    hpbonus: number;
    armorbonus: NonNegativeInteger;
    shieldbonus: number | null;
    notes: string;
}

export type PlayerUnitList = PlayerUnit[];
