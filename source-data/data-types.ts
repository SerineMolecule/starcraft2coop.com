/**
 * @minimum 1
 * @asType integer
 */
export type PositiveInteger = number;
export type CommanderPowerRating = 1 | 2 | 3 | 4 | 5;

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
