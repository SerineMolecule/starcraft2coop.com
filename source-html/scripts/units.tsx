/** @jsxImportSource preact */
import * as preact from "preact";

import playerUnits from "../../source-data/playerunits.json";
import amonUnits from "../../source-data/amonunits.json";
import commandersummaries from "../../source-data/commandersummaries.json";
import playerTalents from "../../source-data/playertalents.json";
import playerUpgrades from "../../source-data/playerupgrades.json";
import type { PlayerTalent, PlayerUnit, PlayerUpgrade } from "../../source-data/data-types";

const AMON_UNIT_TYPES = [
    "Protoss",
    "Terran",
    "Zerg",
    "Hybrid",
    "Infested",
    "Objective",
    "Mutator"
];

function token(text: string): Token {
    if (text === "Dom. Trooper") return 'dominiontrooper';
    if (text === "Dom. Assault Trooper") return 'dominionassaulttrooper';
    if (text === "Dom. Flame Trooper") return 'dominionflametrooper';
    if (text === "Dom. Rocket Trooper") return 'dominionrockettrooper';
    if (text === "Tychus Findlay") return 'tychus';
    if (text === "James Sirius Sykes") return 'sirius';
    if (text === "Miles Blaze Lewis") return 'blaze';
    if (text === "Rob Cannonball Boswell") return 'cannonball';
    if (text === "Lt Layna Nikara") return 'nikara';
    if (text === "Kev Rattlesnake West") return 'rattlesnake';

    return text.replace(/[^A-Za-z0-9]/g, "").toLowerCase() as Token;
}
type Token = Lowercase<string>;

interface UnitModifiers {
    commander: Token;
    unit: Token;
    upgrades: Record<string, boolean>;
    masteries: Record<string, number>;
    prestiges: Record<string, boolean>;
    upgradeLevels: { weapon?: number, armor?: number, shields?: number, artifacts?: number, rank?: number };
}

class Units extends preact.Component {
    override state: {
        commander: Token | null,
        unit: Token | null,
        modifiers: UnitModifiers | null,
        compareModifiers: UnitModifiers | null,
        error?: string,
    } = {
        commander: null,
        unit: null,
        modifiers: null,
        compareModifiers: null,
    };
    override componentDidMount() {
        window.addEventListener("hashchange", () => {
            this.updateStateFromHash();
        });
        this.updateStateFromHash();
    }
    updateStateFromHash(): void {
        const hash = window.location.hash.slice(1);
        const [ commander, unit ] = hash.split("/");
        this.setState({ commander: commander || null, unit: unit || null });
        if (commander && unit) {
            this.setState({ modifiers: UnitStats.modifiers(commander as Token, unit as Token) });
        }
    }
    onSetModifiers = (modifiers: Partial<UnitModifiers>) => {
        this.setState({ modifiers: { ...this.state.modifiers, ...modifiers } });
    };
    onSetCompareModifiers = (compareModifiers: Partial<UnitModifiers>) => {
        this.setState({ compareModifiers: { ...this.state.compareModifiers, ...compareModifiers } });
    };
    onClickCompare = () => {
        this.setState({ compareModifiers: { ...this.state.modifiers } });
    };
    onClickClose = () => {
        this.setState({ compareModifiers: null });
    };
    static override getDerivedStateFromError(error: Error): { error: string } {
        return { error: error.stack || error.message, };
    }
    override render() {
        if (this.state.error) {
            return <p>Error: <pre style="color: #ff6633;">{this.state.error}</pre></p>;
        }
        return (
            <table class="units">
                <tr>
                    <CommanderSelector commander={this.state.commander} />
                    <UnitSelector commander={this.state.commander} unit={this.state.unit} />
                    {this.state.commander && <UnitStats modifiers={this.state.modifiers} onSetModifiers={this.onSetModifiers} onClickCompare={this.onClickCompare} formKey="1" />}
                    {this.state.compareModifiers && <UnitStats modifiers={this.state.compareModifiers} onSetModifiers={this.onSetCompareModifiers} onClickClose={this.onClickClose} formKey="2" />}
                </tr>
            </table>
        );
    }
}

class CommanderSelector extends preact.Component<{ commander: string | null }> {
    isSelected(name: string): boolean | undefined {
        return this.props.commander === token(name) ? true : undefined;
    }
    override render() {
        return (
            <td class="units-commander-selector">
                <p class="units-head"><em>Commanders</em></p>
                <ul class="units-nav">
                    {commandersummaries.map((commander) => (
                        <li><a href={`#${token(commander.commander)}`} aria-selected={this.isSelected(commander.commander)}>
                            <img src={`/images/commanderportraits/${token(commander.commander)}portrait.png`} alt ="" width="20" height="20" /> {}
                            {commander.fullname}
                        </a></li>
                    ))}
                </ul>
                <p class="units-head"><em>Amon</em></p>
                <ul class="units-nav">
                    {AMON_UNIT_TYPES.map((type) => (
                        <li><a href={`#${token(type)}`} aria-selected={this.isSelected(type)}>{type}</a></li>
                    ))}
                </ul>
            </td>
        );
    }
}

class UnitSelector extends preact.Component<{ commander: Token | null, unit: Token | null }> {
    isSelected(name: string): boolean | undefined {
        return this.props.unit === token(name) ? true : undefined;
    }
    override render() {
        if (this.props.commander === null) {
            return <td class="units-unit-selector">
                <p><big>&larr;</big> Select a commander</p>
            </td>;
        }
        const normalUnits = [];
        const heroes = [];
        const structures = [];

        const usedUnits = new Set<string>();
        for (const playerUnit of playerUnits.filter((unit) => token(unit.commander) === this.props.commander)) {
            if (usedUnits.has(playerUnit.basename)) continue;
            usedUnits.add(playerUnit.basename);
            if (playerUnit.tags.includes("Structure")) {
                structures.push(playerUnit.basename)
            } else if (playerUnit.tags.includes("Heroic")) {
                heroes.push(playerUnit.basename)
            } else {
                normalUnits.push(playerUnit.basename)
            }
        }
        for (const amonUnit of amonUnits.filter((unit) => token(unit.race) === this.props.commander)) {
            if (amonUnit.structure) {
                structures.push(amonUnit.name)
            } else if (amonUnit.heroic) {
                heroes.push(amonUnit.name)
            } else {
                normalUnits.push(amonUnit.name)
            }
        }
        return (
            <td class="units-unit-selector">
                {!!normalUnits.length && <p class="units-head"><em>Units</em></p>}
                {!!normalUnits.length && <ul class="units-nav">
                    {normalUnits.map((unit) => (
                        <li><a href={`#${token(this.props.commander!)}/${token(unit)}`} aria-selected={this.isSelected(unit)}>{unit}</a></li>
                    ))}
                </ul>}
                {!!heroes.length && <p class="units-head"><em>Heroes</em></p>}
                {!!heroes.length && <ul class="units-nav">
                    {heroes.map((hero) => (
                        <li><a href={`#${token(this.props.commander!)}/${token(hero)}`} aria-selected={this.isSelected(hero)}>{hero}</a></li>
                    ))}
                </ul>}
                {!!structures.length && <p class="units-head"><em>Structures</em></p>}
                {!!structures.length && <ul class="units-nav">
                    {structures.map((structure) => (
                        <li><a href={`#${token(this.props.commander!)}/${token(structure)}`} aria-selected={this.isSelected(structure)}>{structure}</a></li>
                    ))}
                </ul>}
            </td>
        );
    }
}

interface Unit {
    name: string;
    commander: string;
    race: string;
    mcost: number;
    vcost: number;
    supply: number;
    buildtime: number;
    hp: number;
    shields: number;
    armor: number;
    shieldarmor: number;
    energy: number;
    movementspeed: number;
    sightrange: number;
    tags: string[];

    modes: Record<string, UnitMode>;
    hpbonus: number;
    armorbonus: number;
    shieldbonus: number | null;
    notes: string;
}
/** partial of PlayerUnit */
interface UnitMode {
    modeName: string | null;

    // defensive
    armor?: number;
    shieldarmor?: number;
    movementspeed?: number;
    sightrange?: number;
    tags?: string;

    // offensive
    atkrange?: number;
    attackspeed?: number;
    attacks?: number;
    /** Tags that this unit deals damage to */
    attributedamage?: { [tag: string]: { damage: number, bonus: number }};
}

class UnitStats extends preact.Component<{
    modifiers: UnitModifiers | null,
    onSetModifiers: (modifiers: Partial<UnitModifiers>) => void,
    onClickClose?: () => void, onClickCompare?: () => void,
    formKey: string,
}> {
    override state: {
        masteryInputs?: Record<string, string> | null;
    } = {};
    renderAmonUnit(): preact.ComponentChildren {
        const amonUnit = amonUnits.find(unit => token(unit.name) === this.props.modifiers!.unit);
        if (!amonUnit) {
            return (
                <td>Unit not found</td>
            );
        }
        const tags = [
            amonUnit.light ? "Light" : null,
            amonUnit.armored ? "Armored" : null,
            amonUnit.biological ? "Biological" : null,
            amonUnit.mechanical ? "Mechanical" : null,
            amonUnit.psionic ? "Psionic" : null,
            amonUnit.heroic ? "Heroic" : null,
            amonUnit.massive ? "Massive" : null,
            amonUnit.structure ? "Structure" : null,
            // amonUnit.flyer ? "Flyer" : null,
        ].filter(Boolean);
        return (
            <td class="units-unit">
                <p><strong>{amonUnit.name}</strong></p>
                <p>
                    (Amon unit)
                </p>
                <ul class="units-stats">
                    <li class="units-hp"><span class="unbold">HP:</span> {amonUnit.hp} {!!amonUnit.armor && <><span class="unbold">| Armor: </span>{amonUnit.armor}</>}</li>
                    {!!amonUnit.shields && <li class="units-shields"><span class="unbold">Shields:</span> {amonUnit.shields} {!!amonUnit.shieldarmor && <><span class="unbold">| Shield Armor: </span>{amonUnit.shieldarmor}</>}</li>}
                    <li><span class="unbold">Tags:</span> {tags.join(", ")}</li>
                </ul>
            </td>
        );
    }
    static getUnit(modifiers: UnitModifiers): Unit | null {
        const selectedUnits = playerUnits.filter((unit) => token(unit.commander) === modifiers.commander && token(unit.basename) === modifiers.unit) as PlayerUnit[];
        const selectedUnit = selectedUnits[0];
        if (!selectedUnit) {
            return null;
        }
        const modes: Record<string, UnitMode> = {};
        for (const selected of selectedUnits) {
            const mode = selected.name.replace(selected.basename, '').trim() || "";
            if (modes[mode]) {
                if (!selected.attribute) throw new Error(`duplicate entry ${selected.name}`);
                modes[mode].attributedamage ||= {};
                modes[mode].attributedamage[selected.attribute] = {
                    damage: selected.damage, bonus: selected.attackbonus,
                };
            } else {
                if (selected.attribute) throw new Error(`first ${selected.name} must not have attribute`);

                const unitMode: UnitMode = modes[mode] = {
                    modeName: mode || null,
                };
                if (selected.armor !== selectedUnit.armor) unitMode.armor = selected.armor;
                if (selected.shieldarmor !== selectedUnit.shieldarmor) unitMode.shieldarmor = selected.shieldarmor;
                if (selected.movementspeed !== selectedUnit.movementspeed) unitMode.movementspeed = selected.movementspeed;
                if (selected.sightrange !== selectedUnit.sightrange) unitMode.sightrange = selected.sightrange;
                if (selected.tags !== selectedUnit.tags) unitMode.tags = selected.tags;
                if (selected.atkrange) unitMode.atkrange = selected.atkrange;
                if (selected.attackspeed) unitMode.attackspeed = selected.attackspeed;
                if (selected.attacks) unitMode.attacks = selected.attacks;
                if (selected.damage) {
                    unitMode.attributedamage = {
                        '': { damage: selected.damage, bonus: selected.attackbonus },
                    };
                }
            }
        }
        const unit: Unit = {
            name: selectedUnit.basename,
            commander: selectedUnit.commander,
            race: selectedUnit.race,
            mcost: selectedUnit.mcost,
            vcost: selectedUnit.vcost,
            buildtime: selectedUnit.buildtime,
            supply: selectedUnit.supply,
            hp: selectedUnit.hp,
            shields: selectedUnit.shields,
            armor: selectedUnit.armor,
            shieldarmor: selectedUnit.shieldarmor,
            energy: selectedUnit.energy,
            movementspeed: selectedUnit.movementspeed,
            sightrange: selectedUnit.sightrange,
            tags: selectedUnit.tags.split(','),
            modes,
            hpbonus: selectedUnit.hpbonus,
            armorbonus: selectedUnit.armorbonus,
            shieldbonus: selectedUnit.shieldbonus,
            notes: selectedUnit.notes,
        }
        return unit;
    }
    static applyUpgrade(
        upgrade: {
            modifier: string, operation: string, value: number,
            operationtype?: string | null,
            modifiermode?: string | null,
            modifiertag?: string | null,
        },
        unit: Unit,
        level?: number,
    ) {
        switch (upgrade.modifier) {
            case 'mineralCost':
                unit.mcost = this.applyModifier(unit.mcost, upgrade, false, level);
                break;
            case 'vespeneCost':
                unit.vcost = this.applyModifier(unit.vcost, upgrade, false, level);
                break;
            case 'time':
                unit.buildtime = this.applyModifier(unit.buildtime, upgrade, false, level);
                break;
            case 'supply':
                unit.supply = this.applyModifier(unit.supply, upgrade, false, level);
                break;
            case 'HP':
                unit.hp = this.applyModifier(unit.hp, upgrade, false, level);
                break;
            case 'Shields':
                unit.shields = this.applyModifier(unit.shields, upgrade, false, level);
                break;
            case 'Armor':
                if (!upgrade.modifiermode) {
                    unit.armor = this.applyModifier(unit.armor, upgrade, false, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.armor !== undefined) {
                        mode.armor = this.applyModifier(mode.armor ?? unit.armor, upgrade, false, level);
                    }
                }
                break;
            case 'Shield_Armor':
                if (!upgrade.modifiermode) {
                    unit.shieldarmor = this.applyModifier(unit.shieldarmor, upgrade, false, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.shieldarmor !== undefined) {
                        mode.shieldarmor = this.applyModifier(mode.shieldarmor ?? unit.shieldarmor, upgrade, false, level);
                    }
                }
                break;
            case 'Move_Speed':
                if (!upgrade.modifiermode) {
                    unit.movementspeed = this.applyModifier(unit.movementspeed, upgrade, false, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.movementspeed !== undefined) {
                        mode.movementspeed = this.applyModifier(mode.movementspeed ?? unit.movementspeed, upgrade, false, level);
                    }
                }
                break;
            case 'Vision':
                if (!upgrade.modifiermode) {
                    unit.sightrange = this.applyModifier(unit.sightrange, upgrade, false, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.sightrange !== undefined) {
                        mode.sightrange = this.applyModifier(mode.sightrange ?? unit.sightrange, upgrade, false, level);
                    }
                }
                break;
            case 'damage':
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : true) {
                        if (upgrade.modifiertag) {
                            mode.attributedamage![upgrade.modifiertag] ||= {
                                ...mode.attributedamage!['']!,
                            };
                            mode.attributedamage![upgrade.modifiertag]!.damage = this.applyModifier(mode.attributedamage![upgrade.modifiertag]!.damage, upgrade, false, level);
                        } else {
                            for (const damage of Object.values(mode.attributedamage ||= { '': { damage: 0, bonus: 0 } })) {
                                damage.damage = this.applyModifier(damage.damage, upgrade, false, level);
                            }
                        }
                    }
                }
                break;
            case 'attackbonus':
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : true) {
                        if (upgrade.modifiertag) {
                            mode.attributedamage![upgrade.modifiertag] ||= {
                                ...mode.attributedamage!['']!,
                            };
                            mode.attributedamage![upgrade.modifiertag]!.bonus = this.applyModifier(mode.attributedamage![upgrade.modifiertag]!.bonus, upgrade, false, level);
                        } else {
                            for (const damage of Object.values(mode.attributedamage ||= { '': { damage: 0, bonus: 0 } })) {
                                damage.bonus = this.applyModifier(damage.bonus, upgrade, false, level);
                            }
                        }
                    }
                }
                break;
            case 'Hits':
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : true) {
                        mode.attacks = this.applyModifier(mode.attacks!, upgrade, false, level);
                    }
                }
                break;
            case 'Attack_Speed':
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : true) {
                        mode.attackspeed = this.applyModifier(mode.attackspeed!, upgrade, true, level);
                    }
                }
                break;
            case 'Range':
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : true) {
                        mode.atkrange = this.applyModifier(mode.atkrange!, upgrade, false, level);
                    }
                }
                break;
        }
    }
    static getUpgradedUnit(unit: Unit, modifiers: UnitModifiers) {
        const upgradedUnit = JSON.parse(JSON.stringify(unit)) as Unit;

        // preupgrade -> mastery -> prestige -> generic upgrade -> upgrade -> post-prestige

        const metaUpgrades: { [upgrade: string]: [PlayerTalent, level: number | null][] } = {};

        if (unit.name === 'Sky Fury') {
            delete upgradedUnit.modes['(Fighter Mode)']!.attributedamage!['Armored'];
            upgradedUnit.modes['(Fighter Mode)']!.attributedamage!['']!.damage = 21;
        }
        for (const upgrade of playerUpgrades as PlayerUpgrade[]) {
            if (!modifiers.upgrades[upgrade.name]) continue;
            if (modifiers.unit !== token(upgrade.unit)) continue;
            if (modifiers.commander !== token(upgrade.commander)) continue;
            if (upgrade.upgradetype !== 'preupgrade') continue;

            this.applyUpgrade(upgrade, upgradedUnit);
        }
        for (const talent of playerTalents as PlayerTalent[]) {
            if (talent.talenttype !== 'mastery') continue;
            if (modifiers.unit !== token(talent.unit)) continue;
            if (modifiers.commander !== token(talent.commander)) continue;
            const level = modifiers.masteries[talent.name];
            if (!level) continue;
            if (talent.modifierupgrade) {
                if (!modifiers.upgrades[talent.modifierupgrade]) continue;
                (metaUpgrades[talent.modifierupgrade] ||= []).push([talent, level]);
                continue;
            }

            this.applyUpgrade(talent, upgradedUnit, level);
        }
        for (const talent of playerTalents as PlayerTalent[]) {
            if (talent.talenttype !== 'prestige') continue;
            if (!modifiers.prestiges[talent.name]) continue;
            if (modifiers.unit !== token(talent.unit)) continue;
            if (modifiers.commander !== token(talent.commander)) continue;
            if (talent.modifierupgrade) {
                if (!modifiers.upgrades[talent.modifierupgrade]) continue;
                (metaUpgrades[talent.modifierupgrade] ||= []).push([talent, null]);
                continue;
            }

            this.applyUpgrade(talent, upgradedUnit);
        }

        const levels = modifiers.upgradeLevels;
        const weaponUpgrades = levels.weapon ?? levels.rank ?? levels.artifacts;
        if (weaponUpgrades) {
            for (const mode of Object.values(upgradedUnit.modes)) {
                for (const attack of Object.values(mode.attributedamage || {})) {
                    if (levels.rank) attack.bonus ||= attack.damage * 0.25;
                    attack.damage += weaponUpgrades * attack.bonus;
                }
            }
        }
        const armorUpgrades = levels.armor ?? levels.rank ?? levels.artifacts;
        if (armorUpgrades) {
            upgradedUnit.armor += armorUpgrades * upgradedUnit.armorbonus;
            upgradedUnit.hp += armorUpgrades * upgradedUnit.hpbonus;
            for (const mode of Object.values(upgradedUnit.modes)) {
                if (mode.armor !== undefined) {
                    mode.armor += armorUpgrades * upgradedUnit.armorbonus;
                }
            }
        }
        const shieldUpgrades = levels.shields ?? levels.rank ?? levels.artifacts;
        if (shieldUpgrades) {
            upgradedUnit.shieldarmor += shieldUpgrades * upgradedUnit.shieldbonus!;
            for (const mode of Object.values(upgradedUnit.modes)) {
                if (mode.shieldarmor !== undefined) {
                    mode.shieldarmor += shieldUpgrades * upgradedUnit.shieldbonus!;
                }
            }
        }
        if (levels.artifacts) {
            if (token(unit.name) === 'zeratul') {
                upgradedUnit.shields += levels.artifacts * 50;
            }
            if (['telbrus', 'zoraya', 'serdath'].includes(token(unit.name))) {
                upgradedUnit.shields += levels.artifacts * 100;
                if (upgradedUnit.energy) upgradedUnit.energy += levels.artifacts * 100;
            }
        }

        for (let upgrade of playerUpgrades as PlayerUpgrade[]) {
            if (!modifiers.upgrades[upgrade.name]) continue;
            if (modifiers.unit !== token(upgrade.unit)) continue;
            if (modifiers.commander !== token(upgrade.commander)) continue;
            if (upgrade.upgradetype !== 'upgrade') continue;

            if (metaUpgrades[upgrade.name]) {
                upgrade = { ...upgrade };
                for (const [metaUpgrade, level] of metaUpgrades[upgrade.name]!) {
                    if (upgrade.modifier !== metaUpgrade.modifier) continue;
                    upgrade.value = this.applyModifier(upgrade.value, metaUpgrade, true, level);
                }
            }
            this.applyUpgrade(upgrade, upgradedUnit);
        }
        for (const talent of playerTalents as PlayerTalent[]) {
            if (talent.talenttype !== 'post') continue;
            if (!modifiers.prestiges[talent.name]) continue;
            if (modifiers.unit !== token(talent.unit)) continue;
            if (modifiers.commander !== token(talent.commander)) continue;
            if (talent.modifierupgrade && !modifiers.upgrades[talent.modifierupgrade]) continue;

            this.applyUpgrade(talent, upgradedUnit);
        }
        if (modifiers.upgrades['Redline Power Cells']) {
            upgradedUnit.modes['']!.attributedamage!['']!.damage += 60;
        }

        return upgradedUnit;
    }
    static modifiers(commander: Token, selectedUnit: Token): UnitModifiers {
        const upgradesList = playerUpgrades.filter((u) => token(u.commander) === commander && token(u.unit) === selectedUnit);
        const talentsList = playerTalents.filter((u) => token(u.commander) === commander && token(u.unit) === selectedUnit);

        const upgrades: UnitModifiers['upgrades'] = {};
        const masteries: UnitModifiers['masteries'] = {};
        const prestiges: UnitModifiers['prestiges'] = {};
        let upgradeLevels: UnitModifiers['upgradeLevels'] = {};
        for (const upgrade of upgradesList) {
            upgrades[upgrade.name] = false;
        }
        for (const talent of talentsList) {
            if (talent.talenttype === 'mastery') {
                masteries[talent.name] = 0;
            } else {
                prestiges[talent.name] = false;
            }
        }

        const unit = playerUnits.find((u) => token(u.commander) === commander && token(u.basename) === selectedUnit);
        if (unit?.armorbonus || unit?.hpbonus) {
            upgradeLevels.armor = 0;
        }
        if (unit?.shieldbonus) {
            upgradeLevels.shields = 0;
        }
        if (unit?.attackbonus) {
            upgradeLevels.weapon = 0;
        }
        if (commander === 'zeratul') {
            if (Object.keys(upgradeLevels).length) upgradeLevels = { artifacts: 0 };
        }
        if (commander === 'mengsk') {
            const RG = ['aegisguard', 'blackhammer', 'emperorsshadow', 'prideofaugustgrad', 'shockdivision', 'skyfury'];
            if (RG.includes(selectedUnit)) upgradeLevels = { rank: 0 };
        }
        return { commander, unit: selectedUnit, upgrades, upgradeLevels, masteries, prestiges };
    }
    renderUpgrades(): preact.ComponentChildren {
        const modifiers = this.props.modifiers!;
        // filter out Mengsk Royal Guard rank upgrades
        const upgrades = Object.keys(modifiers.upgrades).filter(upgrade => !/^[123]$/.test(upgrade));
        const masteries = Object.keys(modifiers.masteries);
        const prestiges = Object.keys(modifiers.prestiges);
        const upgradeLevels = [0, 1, 2, 3, 4, 5].slice(0, modifiers.commander === 'tychus' ? 6 : 4);

        const upgradeData = new Map(
            playerUpgrades.filter((u) => token(u.commander) === modifiers.commander && token(u.unit) === modifiers.unit)
                .map((u) => [u.name, { title: u.effect, icon: u.icon }])
        );

        return (
            <form class="units-modifiers">
                {!!upgrades.length && (<fieldset>
                    <legend>Upgrades</legend>
                    {upgrades.map((upgrade) => <div><label title={upgradeData.get(upgrade)?.title}><input type="checkbox" value={upgrade} onChange={this.onCheckUpgrade} checked={modifiers.upgrades[upgrade]} /> <img src={`/images/commanderdata/unitupgrades/${token(modifiers.commander)}/${upgradeData.get(upgrade)?.icon}.png`} alt="" width={20} height={20} /> {upgrade}</label></div>)}
                </fieldset>)}
                {'weapon' in modifiers.upgradeLevels && (<fieldset>
                    <legend>Weapons</legend>
                    {upgradeLevels.map(level => <label><input type="radio" name={`weapon-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.weapon === level} /> {level}</label>)}
                </fieldset>)}
                {'armor' in modifiers.upgradeLevels && (<fieldset>
                    <legend>Armor</legend>
                    {upgradeLevels.map(level => <label><input type="radio" name={`armor-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.armor === level} /> {level}</label>)}
                </fieldset>)}
                {'shields' in modifiers.upgradeLevels && (<fieldset>
                    <legend>Shields</legend>
                    {upgradeLevels.map(level => <label><input type="radio" name={`shields-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.shields === level} /> {level}</label>)}
                </fieldset>)}
                {'rank' in modifiers.upgradeLevels && (<fieldset>
                    <legend>Rank</legend>
                    {upgradeLevels.map(level => <label><input type="radio" name={`rank-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.rank === level} /> {level}</label>)}
                </fieldset>)}
                {'artifacts' in modifiers.upgradeLevels && (<fieldset>
                    <legend>Artifact fragments collected</legend>
                    {upgradeLevels.map(level => <label><input type="radio" name={`artifacts-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.artifacts === level} /> {level}</label>)}
                </fieldset>)}
                {!!masteries.length && (<fieldset>
                    <legend>Masteries</legend>
                    {masteries.map((talent) => <div><label>
                        <input type="range" name={talent} value={modifiers.masteries[talent]} onInput={this.onChangeMastery} min={0} max={30} step={1} /><br />
                        <input type="number" name={talent} value={this.state.masteryInputs?.[talent] ?? modifiers.masteries[talent]} onInput={this.onInputMastery} onBlur={this.onBlurMastery} min={0} max={30} step={1} /> {talent}
                    </label></div>)}
                </fieldset>)}
                {!!prestiges.length && (<fieldset>
                    <legend>Prestiges</legend>
                    {prestiges.map((talent) => <div><label><input type="checkbox" value={talent} onChange={this.onCheckPrestige} checked={modifiers.prestiges[talent]} /> {talent}</label></div>)}
                </fieldset>)}
            </form>
        );
    }
    onCheckUpgrade = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.props.onSetModifiers({ upgrades: { ...this.props.modifiers!.upgrades, [target.value]: target.checked } });
    };
    onCheckUpgradeLevel = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const upgrade = target.name.split('-')[0] as Token;
        const value = parseInt(target.value);
        const modifiers = this.props.modifiers!;
        if (upgrade === 'rank') {
            const upgrades = { ...modifiers.upgrades };
            if ('1' in upgrades) upgrades['1'] = value >= 1;
            if ('2' in upgrades) upgrades['2'] = value >= 2;
            if ('3' in upgrades) upgrades['3'] = value >= 3;
            this.props.onSetModifiers({ upgradeLevels: { ...modifiers.upgradeLevels, [upgrade]: value }, upgrades });
        } else {
            this.props.onSetModifiers({ upgradeLevels: { ...modifiers.upgradeLevels, [upgrade]: value } });
        }
    };
    onCheckPrestige = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const newPrestiges = Object.fromEntries(Object.keys(this.props.modifiers!.prestiges).map((prestige) => [prestige, false]));
        this.props.onSetModifiers({ prestiges: { ...newPrestiges, [target.value]: target.checked } });
    };
    onChangeMastery = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.props.onSetModifiers({
            masteries: { ...this.props.modifiers!.masteries, [target.name]: parseInt(target.value) || 0 },
        });
    };
    onInputMastery = (e: Event) => {
        const target = e.target as HTMLInputElement;
        this.setState({
            masteryInputs: { [target.name]: target.value }
        });
        this.props.onSetModifiers({
            masteries: { ...this.props.modifiers!.masteries, [target.name]: parseInt(target.value) || 0 },
        });
    };
    onBlurMastery = (e: Event) => {
        this.setState({
            masteryInputs: null
        });
    };
    static applyModifier(value: number, upgrade: { operation: string, value: number, operationtype?: string | null }, reverse?: boolean, level?: number | null): number {
        let upgradeValue = upgrade.value;
        if (upgrade.operation === 'multiply') {
            // only used for masteries
            if (upgrade.operationtype === 'increase') {
                upgradeValue = (1 + upgrade.value * level!);
            } else if (upgrade.operationtype === 'decrease') {
                upgradeValue = (1 - upgrade.value * level!);
            } else if (level) {
                throw new Error(`Unknown operation: ${upgrade.operation} : ${upgrade.operationtype}`);
            }
        }
        switch (upgrade.operation) {
            case 'add':
                return value + upgradeValue * (level ?? 1);
            case 'multiply':
                return reverse ? value / upgradeValue : value * upgradeValue;
            case 'set':
                if (level) throw new Error(`Level can't be set for this upgrade`);
                return upgradeValue;
            default:
                throw new Error(`Unknown operation: ${upgrade.operation}`);
        }
    }
    renderValue(value: number, baseValue: number): preact.ComponentChildren {
        if (value !== baseValue) return <strong class="units-modified">{Number(value.toFixed(2))}</strong>
        return value;
    }
    renderMode(mode: UnitMode, baseMode: UnitMode, baseUnit: Unit) {
        return <>
            <p class="units-head">{mode.modeName || "Weapon"}</p>
            <ul class="units-mode-stats">
                {!!mode.attributedamage && <>
                    {Object.entries(mode.attributedamage || {}).map(([attribute, damage]) => {
                        const dps = damage.damage * mode.attacks! / mode.attackspeed!;
                        const baseDamage = baseMode.attributedamage?.[attribute]?.damage ?? baseMode.attributedamage?.['']?.damage ?? 0;
                        const baseDps = baseDamage * baseMode.attacks! / baseMode.attackspeed!;
                        const noDps = ['Baneling', 'Baneling Spawn', 'Scourge', 'Volatile Infested', 'Spider Mine', 'Explosive Creeper'];
                        const dpsMessage = (!noDps.includes(baseUnit.name)) ? <> ({this.renderValue(+dps.toFixed(2), +baseDps.toFixed(2))} DPS)</> : '';
                        return <li>
                            <span class="unbold">{attribute ? `vs. ${attribute}:` : 'Damage:'}</span> {this.renderValue(damage.damage, baseDamage)}{dpsMessage}
                        </li>;
                    })}
                    {(mode.attacks! > 1 || baseMode.attacks! > 1) && <li><span class="unbold">Hits:</span> {this.renderValue(mode.attacks!, baseMode.attacks!)}</li>}
                    <li><span class="unbold">Cooldown:</span> {this.renderValue(mode.attackspeed!, baseMode.attackspeed!)}</li>
                    <li><span class="unbold">Range:</span> {this.renderValue(mode.atkrange!, baseMode.atkrange!)}</li>
                </>}
                {mode.armor !== undefined && <li><span class="unbold">Armor:</span> {this.renderValue(mode.armor, baseMode.armor ?? baseUnit.armor)}</li>}
                {mode.movementspeed !== undefined && <li><span class="unbold">Move speed:</span> {this.renderValue(mode.movementspeed, baseMode.movementspeed ?? baseUnit.movementspeed)}</li>}
                {mode.sightrange !== undefined && <li><span class="unbold">Vision:</span> {this.renderValue(mode.sightrange, baseMode.sightrange ?? baseUnit.sightrange)}</li>}
            </ul>
        </>;
    }
    renderImage(selected: Unit) {
        const { commander, unit } = this.props.modifiers!;
        if (!commander || !unit) return null;

        if (unit.startsWith('enthralled')) {
            return <img src={`/images/comps/unitimages/${unit.slice(10)}.png`} alt="" class="units-portrait" />;
        }
        if (unit === 'flamingbetty' || unit === 'blasterbilly' || unit === 'spinningdizzy' || unit === 'khaydarinmonolith' || unit === 'shieldbattery' || (commander === 'karax' && unit === 'photoncannon')) {
            return <img src={`/images/commanderdata/guides/${commander}/${unit}.jpg`} alt="" class="units-portrait" />;
        }
        if (
            unit === 'observer' || unit === 'broodling' || unit === 'overlord' || unit === 'overseer' ||
            unit === 'missileturret' || unit === 'photoncannon' || (commander === 'zeratul' && unit === 'voidray') ||
            unit === 'spinecrawler' || unit === 'sporecrawler' || unit === 'spidermine' || unit === 'bunker'
        ) {
            return <img src={`/images/comps/unitimages/${unit}.png`} alt="" class="units-portrait" />;
        }

        if (unit === 'mechaoverlord' || unit === 'mechaoverseer' || unit === 'xelnagawatcher' || unit === 'banelingspawn') {
            return null;
        }
        if (unit?.startsWith('fenix')) {
            return <img src={`/images/commanderdata/abilities/fenix/${unit.slice(5)}.jpg`} alt="" class="units-portrait" />;
        }
        if (
            unit === 'alarak' || unit === 'kerrigan' || unit === 'zagara' || unit === 'nova' || unit === 'zeratul' ||
            unit === 'gary' || unit === 'supergary' || unit === 'dehaka'
        ) {
            return <img src={`/images/commanderdata/hero/${commander}/${unit}.jpg`} alt="" class="units-portrait" />;
        }
        if (
            unit === 'hyperion' || unit === 'mothership' || unit === 'destroyer' || unit === 'shadowguard' ||
            unit === 'glevig' || unit === 'murvar' || unit === 'dakrun' || unit === 'greaterprimalwurm' ||
            unit === 'serdath' || unit === 'telbrus' || unit === 'apocalisk' ||
            unit === 'avatarofform' || unit === 'avatarofessence'
        ) {
            return <img src={`/images/commanderdata/abilities/${commander}/${unit}.jpg`} alt="" class="units-portrait" />;
        }
        const replaceAbilities: Record<string, string> = {
            duskwings: 'bansheeairstrike.png', unboundfanatic: 'fanatic.png', ares: 'combatdrop.png',
            holodecoy: 'holodecoy.png', aleksander: 'aleksander.png', drakkenlaserdrill: 'drakkenlaserdrillattack.png',
            zoraya: 'zorayalegion.png', chargedcrystal: 'summonchargedcrystals.png', warhoundturret: 'deploywarhoundturret.png',
            tesseractmonolith: 'deploytesseractmonolith.png',
        };
        if (unit in replaceAbilities) {
            return <img src={`/images/commanderdata/abilities/${commander}/${replaceAbilities[unit]}`} alt="" class="units-portrait" />;
        }
        if (commander === 'zagara' && (unit === 'hunterkiller' || unit === 'roach')) {
            const replace: Record<string, string> = {
                hunterkiller: 'spawnhunterkillers.png', roach: 'infesteddrop.png',
            };
            return <img src={`/images/commanderdata/hero/${commander}/${replace[unit]}`} alt="" class="units-portrait" />;
        }
        if (commander === 'zeratul' && (unit === 'zealot' || unit === 'darkarchon')) {
            return <img src={`/images/commanderdata/abilities/${commander}/${unit}.jpg`} alt="" class="units-portrait" />;
        }
        const replaceUnitSkills: Record<string, string> = {
            locust: 'spawnlocusts.png', primallocust: 'spawnprimallocusts.png', explosivecreeper: 'spawnexplosivecreeper.png',
            mechabroodling: 'readymechabroodling.png', mecharoach: 'roachesaway.png', railgunturret: 'buildrailgunturret.png',
        };
        if (unit in replaceUnitSkills) {
            return <img src={`/images/commanderdata/unitskills/${commander}/${replaceUnitSkills[unit]}`} alt="" class="units-portrait" />;
        }
        const replaceUnitUpgrades: Record<string, string> = {
            hangarbay: 'installdronehangar.png', mecharavager: 'bonusravager.png',
        };
        if (unit in replaceUnitUpgrades) {
            return <img src={`/images/commanderdata/unitupgrades/${commander}/${replaceUnitUpgrades[unit]}`} alt="" width="100" height="100" />;
        }
        if (unit === 'flyingbroodling') {
            return <img src={`/images/commanderdata/unitskills/stukov/spawnbroodlings.png`} alt="" width="100" height="100" />;
        }

        const replaceUnit: Record<string, string> = { infestedtrooper: 'infestedmarine' };
        if (selected.tags.includes("Structure")) return null;
        return <img src={`/images/commanderdata/units/${commander}/${replaceUnit[unit] || unit}.jpg`} alt="" width="100" height="100" />;
    }
    override render() {
        const modifiers = this.props.modifiers;
        if (!modifiers) {
            return <td class="units-unit">
                <p><big>&larr;</big> Select a unit</p>
            </td>;
        }
        const baseUnit = UnitStats.getUnit(modifiers);
        if (!baseUnit) {
            return this.renderAmonUnit();
        }
        const unit = UnitStats.getUpgradedUnit(baseUnit, modifiers);
        const race = token(unit.race);

        return (
            <td class="units-unit">
                {this.props.onClickClose && <button type="button" class="units-sidebutton" onClick={this.props.onClickClose}>&times;</button>}
                {this.props.onClickCompare && <button type="button" class="units-sidebutton" onClick={this.props.onClickCompare}>Compare →</button>}
                {this.renderImage(unit)}
                <p><strong>{unit.name}</strong></p>
                {(unit.mcost || unit.vcost || unit.buildtime || unit.supply) ? <p>
                    <img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals:" /> {this.renderValue(unit.mcost, baseUnit.mcost)} {}
                    <img src={`/images/commanderdata/unitupgrades/icongas_${race}.png`} alt="Gas:" /> {this.renderValue(unit.vcost, baseUnit.vcost)} {}
                    <img src={`/images/commanderdata/unitupgrades/icontime_${race}.png`} alt="Build Time:" /> {this.renderValue(unit.buildtime, baseUnit.buildtime)} {}
                    <img src={`/images/commanderdata/unitupgrades/iconsupply_${race}.png`} alt="Supply:" /> {this.renderValue(unit.supply, baseUnit.supply)}
                </p> : <p>
                    (No cost)
                </p>}
                <ul class="units-stats">
                    <li class="units-hp">
                        <span class="unbold">HP:</span> {this.renderValue(unit.hp, baseUnit.hp)}
                        {!!unit.armor && <> <span class="unbold">| Armor:</span> {this.renderValue(unit.armor, baseUnit.armor)}</>}
                    </li>
                    {!!unit.shields && <li class="units-shields">
                        <span class="unbold">Shields:</span> {this.renderValue(unit.shields, baseUnit.shields)}
                        {!!unit.shieldarmor && <> <span class="unbold">| Shield Armor:</span> {this.renderValue(unit.shieldarmor, baseUnit.shieldarmor)}</>}
                    </li>}
                    {!!unit.energy && <li class="units-energy"><span class="unbold">Energy:</span> {this.renderValue(unit.energy, baseUnit.energy)}</li>}
                    <li><span class="unbold">Move speed:</span> {this.renderValue(unit.movementspeed, baseUnit.movementspeed)}</li>
                    <li><span class="unbold">Vision:</span> {this.renderValue(unit.sightrange, baseUnit.sightrange)}</li>
                    <li><span class="unbold">Tags:</span> {unit.tags.join(", ") || "(None)"}</li>
                </ul>
                {Object.values(unit.modes).map((mode) => this.renderMode(mode, baseUnit.modes[mode.modeName || '']!, baseUnit))}
                {unit.notes && <p><span class="unbold">Notes:</span><br />{unit.notes.split("<br>").map((note) => <div>{note}</div>)}</p>}
                {this.renderUpgrades()}
            </td>
        );
    }
}

preact.render(<Units />, document.getElementById("units")!);
