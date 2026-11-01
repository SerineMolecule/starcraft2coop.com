export function unitToken(text: string): Token {
    if (text === "Dom. Trooper") return 'dominiontrooper';
    if (text === "Dom. Assault Trooper") return 'dominionassaulttrooper';
    if (text === "Dom. Flame Trooper") return 'dominionflametrooper';
    if (text === "Dom. Rocket Trooper") return 'dominionrockettrooper';
    if (text === "Tychus Findlay") return 'tychus';
    if (text === "James \"Sirius\" Sykes" || text === "James Sirius Sykes") return 'sirius';
    if (text === "Miles \"Blaze\" Lewis" || text === "Miles Blaze Lewis") return 'blaze';
    if (text === "Rob \"Cannonball\" Boswell" || text === "Rob Cannonball Boswell") return 'cannonball';
    if (text === "Lt. Layna Nikara" || text === "Lt Layna Nikara") return 'nikara';
    if (text === "Kev \"Rattlesnake\" West" || text === "Kev Rattlesnake West") return 'rattlesnake';

    return text.toLowerCase().replace(/[^a-z0-9]+/g, "") as Token;
}
export type Token = Lowercase<string>;

