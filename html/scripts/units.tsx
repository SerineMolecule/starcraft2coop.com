/** @jsxImportSource preact */
import * as preact from "preact";

import playerUnitsJSON from "../../source-data/playerunits.json";
import amonUnitsJSON from "../../source-data/amonunits.json";
import commandersummaries from "../../source-data/commandersummaries.json";
import playerTalents from "../../source-data/playertalents.json";
import playerUpgrades from "../../source-data/playerupgrades.json";
import type { AmonUnit, PlayerTalent, PlayerUnit, PlayerUpgrade, TargetDamage, UnitModeData } from "../../source-data/data-types";
import { hasAttack, playerUnitViews } from "../../source-data/unit-data";

import { rankUpgrades } from "./unit-ranks";
import { resolveSkill } from "./skill-modifiers";
import { skillCosts, skillTooltipValues, skillVisible, unitSkills } from "./unit-skills";

const playerUnits = playerUnitsJSON as PlayerUnit[];
const amonUnits = amonUnitsJSON as AmonUnit[];

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
    if (text === "James \"Sirius\" Sykes" || text === "James Sirius Sykes") return 'sirius';
    if (text === "Miles \"Blaze\" Lewis" || text === "Miles Blaze Lewis") return 'blaze';
    if (text === "Rob \"Cannonball\" Boswell" || text === "Rob Cannonball Boswell") return 'cannonball';
    if (text === "Lt. Layna Nikara" || text === "Lt Layna Nikara") return 'nikara';
    if (text === "Kev \"Rattlesnake\" West" || text === "Kev Rattlesnake West") return 'rattlesnake';

    return text.toLowerCase().replace(/[^a-z0-9]+/g, "") as Token;
}
export type Token = Lowercase<string>;

interface UnitModifiers {
    commander: Token;
    unit: Token;
    upgrades: Record<string, boolean>;
    masteries: Record<string, number>;
    prestiges: Record<string, boolean>;
    upgradeLevels: { weapon?: number, armor?: number, shields?: number, artifacts?: number, rank?: number, hero?: number, biomass?: number };
}

export interface UnitSettings {
    maxUpgrades: boolean;
    maxUpgradeLevels: boolean;
    maxTemporaryStatuses: boolean;
}
const UNIT_SETTINGS_KEY = 'unit-stats-settings';
const UNIT_SETTINGS_LABELS: Record<keyof UnitSettings, string> = {
    maxUpgrades: 'max upgrades',
    maxUpgradeLevels: 'max upgrade levels',
    maxTemporaryStatuses: 'max temporary statuses',
};

export function readUnitSettings(storage?: Pick<Storage, 'getItem'>): UnitSettings {
    const settings = { maxUpgrades: false, maxUpgradeLevels: false, maxTemporaryStatuses: false };
    try {
        const saved = JSON.parse((storage ?? window.localStorage).getItem(UNIT_SETTINGS_KEY) ?? '{}');
        for (const key of Object.keys(settings) as (keyof UnitSettings)[]) {
            settings[key] = saved?.[key] === true;
        }
    } catch { /* Storage may be unavailable or contain invalid JSON. */ }
    return settings;
}

export function saveUnitSettings(settings: UnitSettings, storage?: Pick<Storage, 'setItem'>): void {
    try {
        (storage ?? window.localStorage).setItem(UNIT_SETTINGS_KEY, JSON.stringify(settings));
    } catch { /* Settings still work for this visit when storage is unavailable. */ }
}

export function applyUnitSettings(modifiers: UnitModifiers, settings: Partial<UnitSettings>): UnitModifiers {
    const next = {
        ...modifiers,
        upgrades: { ...modifiers.upgrades },
        masteries: { ...modifiers.masteries },
        prestiges: { ...modifiers.prestiges },
        upgradeLevels: { ...modifiers.upgradeLevels },
    };
    const upgrades = (playerUpgrades as PlayerUpgrade[]).filter(u => token(u.commander) === next.commander && token(u.unit) === next.unit);
    for (const name of Object.keys(next.upgrades)) {
        if (/^[123]$/.test(name)) continue; // Royal Guard ranks are handled with upgrade levels.
        const entries = upgrades.filter(u => u.name === name);
        if (!entries.some(u => u.operation !== 'none' || u.skillModifiers?.length || u.unlocksModes?.length)) continue;
        const enabled = entries.some(u => u.temporary) ? settings.maxTemporaryStatuses : settings.maxUpgrades;
        if (enabled !== undefined) next.upgrades[name] = enabled;
    }
    if (settings.maxUpgradeLevels !== undefined) {
        for (const kind of Object.keys(next.upgradeLevels) as (keyof UnitModifiers['upgradeLevels'])[]) {
            const max = kind === 'hero' ? UnitStats.heroLevelLimit(next) : kind === 'biomass' ? UnitStats.biomassLimit(next) : kind === 'artifacts' ? UnitStats.artifactLimit(next) :
                next.commander === 'tychus' && (kind === 'weapon' || kind === 'armor') ? 5 : 3;
            const amon = AMON_UNIT_TYPES.some(race => token(race) === next.commander);
            next.upgradeLevels[kind] = settings.maxUpgradeLevels ? max : kind === 'hero' || amon ? 1 : 0;
        }
        if ('rank' in next.upgradeLevels) {
            for (const rank of ['1', '2', '3']) {
                if (rank in next.upgrades) next.upgrades[rank] = settings.maxUpgradeLevels;
            }
        }
    }
    return next;
}

class Units extends preact.Component {
    table = preact.createRef<HTMLTableElement>();
    scrollAfterSelection = false;
    override state: {
        commander: Token | null,
        unit: Token | null,
        modifiers: UnitModifiers | null,
        compareModifiers: UnitModifiers | null,
        settings: UnitSettings,
        error?: string,
    } = {
            commander: null,
            unit: null,
            modifiers: null,
            compareModifiers: null,
            settings: readUnitSettings(),
        };
    override componentDidMount() {
        window.addEventListener("hashchange", () => {
            this.updateStateFromHash();
        });
        this.updateStateFromHash();
    }
    updateStateFromHash(): void {
        const hash = window.location.hash.slice(1);
        const [commander, unit] = hash.split("/");
        this.setState({ commander: commander || null, unit: unit || null });
        if (commander && unit) {
            this.setState({ modifiers: applyUnitSettings(UnitStats.modifiers(commander as Token, unit as Token), this.state.settings) }, () => {
                if (this.scrollAfterSelection) {
                    this.scrollAfterSelection = false;
                    this.scrollToUnit();
                }
            });
        }
    }
    scrollToUnit = () => {
        this.table.current?.querySelector('.units-unit')?.scrollIntoView({ block: 'start', inline: 'start' });
    };
    onClickUnit = (event: MouseEvent) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
            !window.matchMedia('(max-width: 700px)').matches) return;
        // A repeated selection has no hashchange event; new selections scroll after rendering.
        if ((event.currentTarget as HTMLAnchorElement).hash === window.location.hash) {
            this.scrollToUnit();
        } else {
            this.scrollAfterSelection = true;
        }
    };
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
    onChangeSetting = (event: Event) => {
        const target = event.currentTarget as HTMLInputElement;
        const key = target.name as keyof UnitSettings;
        const change = { [key]: target.checked };
        const settings = { ...this.state.settings, ...change };
        saveUnitSettings(settings);
        this.setState(state => ({
            settings,
            modifiers: state.modifiers && applyUnitSettings(state.modifiers, change),
            compareModifiers: state.compareModifiers && applyUnitSettings(state.compareModifiers, change),
        }));
    };
    static override getDerivedStateFromError(error: Error): { error: string } {
        return { error: error.stack || error.message, };
    }
    override render() {
        if (this.state.error) {
            return <p>Error: <pre style="color: #ff6633;">{this.state.error}</pre></p>;
        }
        return (
            <>
            <table class="units" ref={this.table}>
                <tr>
                    <CommanderSelector commander={this.state.commander} />
                    <UnitSelector commander={this.state.commander} unit={this.state.unit} onClickUnit={this.onClickUnit} />
                    {this.state.commander && <UnitStats modifiers={this.state.modifiers} onSetModifiers={this.onSetModifiers} onClickCompare={this.onClickCompare} formKey="1" />}
                    {this.state.compareModifiers && <UnitStats modifiers={this.state.compareModifiers} onSetModifiers={this.onSetCompareModifiers} onClickClose={this.onClickClose} formKey="2" />}
                </tr>
            </table>
            <h3>Settings</h3>
            <div class="units-settings">
                {(Object.keys(UNIT_SETTINGS_LABELS) as (keyof UnitSettings)[]).map(key => <label>
                    <input type="checkbox" name={key} checked={this.state.settings[key]} onChange={this.onChangeSetting} /> {UNIT_SETTINGS_LABELS[key]}
                </label>)}
            </div>
            </>
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
                <p class="units-head">Commanders</p>
                <ul class="units-nav">
                    {commandersummaries.map((commander) => (
                        <li><a href={`#${token(commander.commander)}`} aria-selected={this.isSelected(commander.commander)}>
                            <img src={`/images/commanderportraits/${token(commander.commander)}portrait.png`} alt="" width="25" height="25" />
                            {commander.fullname}
                        </a></li>
                    ))}
                </ul>
                <p class="units-head">Amon</p>
                <ul class="units-nav">
                    {AMON_UNIT_TYPES.map((type) => (
                        <li><a href={`#${token(type)}`} aria-selected={this.isSelected(type)}>{type}</a></li>
                    ))}
                </ul>
            </td>
        );
    }
}

export class UnitSelector extends preact.Component<{ commander: Token | null, unit: Token | null, onClickUnit: (event: MouseEvent) => void }> {
    isSelected(name: string): boolean | undefined {
        return this.props.unit === token(name) ? true : undefined;
    }
    renderLink(name: string): preact.ComponentChildren {
        const commander = this.props.commander!;
        const unit = token(name);
        return <li key={unit}><a href={`#${commander}/${unit}`} aria-selected={this.isSelected(name)} onClick={this.props.onClickUnit}>
            {name}
        </a></li>;
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
            if ('hideFromUnitList' in playerUnit && playerUnit.hideFromUnitList) continue;
            if (usedUnits.has(playerUnit.name)) continue;
            usedUnits.add(playerUnit.name);
            if (playerUnit.tags.includes("Structure")) {
                structures.push(playerUnit.name)
            } else if (playerUnit.tags.includes("Heroic")) {
                heroes.push(playerUnit.name)
            } else {
                normalUnits.push(playerUnit.name)
            }
        }
        for (const amonUnit of amonUnits.filter((unit) => token(unit.race) === this.props.commander)) {
            if (amonUnit.tags.includes('Structure')) {
                structures.push(amonUnit.name)
            } else if (amonUnit.tags.includes('Heroic')) {
                heroes.push(amonUnit.name)
            } else {
                normalUnits.push(amonUnit.name)
            }
        }
        return (
            <td class="units-unit-selector">
                {!!normalUnits.length && <p class="units-head">Units</p>}
                {!!normalUnits.length && <ul class="units-nav">
                    {normalUnits.map(unit => this.renderLink(unit))}
                </ul>}
                {!!heroes.length && <p class="units-head">Heroes</p>}
                {!!heroes.length && <ul class="units-nav">
                    {heroes.map(hero => this.renderLink(hero))}
                </ul>}
                {!!structures.length && <p class="units-head">Structures</p>}
                {!!structures.length && <ul class="units-nav">
                    {structures.map(structure => this.renderLink(structure))}
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
    buildTimeIsAdditional?: boolean;
    hp: number;
    readonly baseHp: number;
    shields: number;
    armor: number;
    shieldarmor: number;
    energy: number;
    movementspeed: number;
    movement?: PlayerUnit['movement'];
    targetable?: PlayerUnit['targetable'];
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
    notes?: string;
    weaponId?: string;
    weaponName?: string;
    targets?: UnitModeData['targets'];
    targetFilters?: string;
    kind?: UnitModeData['kind'];

    // defensive
    armor?: number;
    shieldarmor?: number;
    movementspeed?: number;
    movement?: UnitModeData['movement'];
    targetable?: UnitModeData['targetable'];
    sightrange?: number;
    tags?: string;

    // offensive
    range?: number;
    minimumRange?: number;
    ignoresArmor?: boolean;
    shieldDamage?: number;
    cooldown?: number;
    hits?: number;
    aoe?: string;
    /** Tags that this unit deals damage to */
    damage?: Record<string, TargetDamage>;
}

/** Keep long cards readable in either scroll direction, using the page's scrollbar. */
class UnitContent extends preact.Component<{ selection: string, children: preact.ComponentChildren }> {
    static readonly topInset = 22;
    content = preact.createRef<HTMLDivElement>();
    observer?: ResizeObserver;
    frame = 0;
    lastScrollY = 0;
    lastTop = UnitContent.topInset;
    resetPosition = true;

    override componentDidMount() {
        this.lastScrollY = window.scrollY;
        window.addEventListener('scroll', this.schedulePosition, { passive: true });
        window.addEventListener('resize', this.schedulePosition);
        this.observer = new ResizeObserver(this.schedulePosition);
        this.observer.observe(this.content.current!);
        this.observer.observe(this.content.current!.parentElement!);
        this.updatePosition();
    }
    override componentDidUpdate(previous: Readonly<typeof this.props>) {
        if (previous.selection !== this.props.selection) this.resetPosition = true;
        this.schedulePosition();
    }
    override componentWillUnmount() {
        window.removeEventListener('scroll', this.schedulePosition);
        window.removeEventListener('resize', this.schedulePosition);
        this.observer?.disconnect();
        cancelAnimationFrame(this.frame);
    }
    schedulePosition = () => {
        if (!this.frame) this.frame = requestAnimationFrame(this.updatePosition);
    };
    updatePosition = () => {
        this.frame = 0;
        const content = this.content.current!;
        const scrollY = window.scrollY;
        if (window.matchMedia('(min-width: 701px)').matches) {
            const topInset = UnitContent.topInset;
            const bottomLimit = Math.min(topInset, window.innerHeight - 24 - content.getBoundingClientRect().height);
            // Follow the page between the two edges; clamp only when an edge is reached.
            const top = this.resetPosition ? topInset : Math.max(bottomLimit, Math.min(topInset, this.lastTop - (scrollY - this.lastScrollY)));
            content.style.top = `${top}px`;
            this.lastTop = content.getBoundingClientRect().top;
            this.resetPosition = false;
        } else {
            content.style.removeProperty('top');
            this.resetPosition = true;
        }
        this.lastScrollY = scrollY;
    };
    override render() {
        return <div class="units-unit-content" ref={this.content}>{this.props.children}</div>;
    }
}

export class UnitStats extends preact.Component<{
    modifiers: UnitModifiers | null,
    onSetModifiers: (modifiers: Partial<UnitModifiers>) => void,
    onClickClose?: () => void, onClickCompare?: () => void,
    formKey: string,
}> {
    override state: {
        masteryInputs?: Record<string, string> | null;
        levelInputs?: Record<string, string> | null;
    } = {};
    renderActions(): preact.ComponentChildren {
        return <div class={`units-actions${this.props.onClickCompare ? " units-actions-compare" : ""}`}>
            {this.props.onClickClose && <button type="button" onClick={this.props.onClickClose} aria-label="Close comparison">&times;</button>}
            {this.props.onClickCompare && <button type="button" onClick={this.props.onClickCompare}>Compare →</button>}
        </div>;
    }
    renderAmonUnit(): preact.ComponentChildren {
        const amonUnit = amonUnits.find(unit => token(unit.race) === this.props.modifiers!.commander && token(unit.name) === this.props.modifiers!.unit);
        if (!amonUnit) {
            return (
                <td>Unit not found</td>
            );
        }
        const tags = amonUnit.tags;
        const levels = this.props.modifiers!.upgradeLevels;
        const armor = amonUnit.armor + ((levels.armor ?? 1) - 1) * (amonUnit.armorbonus ?? 0);
        const shieldarmor = amonUnit.shieldarmor + ((levels.shields ?? 1) - 1) * (amonUnit.shieldbonus ?? 0);
        return (
            <td class="units-unit">
                <UnitContent selection={`${this.props.modifiers!.commander}/${this.props.modifiers!.unit}`}>
                {this.renderActions()}
                <h2 class="units-name">{amonUnit.name}</h2>
                <div class="units-identity">
                    {amonUnit.image && <div class="units-art"><img key={amonUnit.image} src={amonUnit.image} alt="" class="units-portrait" /></div>}
                    <div class="units-identity-text">
                        <p class="units-costs">(Amon unit)</p>
                        <p class="units-tags">{tags.join(" · ") || "(No tags)"}</p>
                    </div>
                </div>
                <ul class="units-stats">
                    <li class="units-hp"><span class="unbold">HP:</span> {amonUnit.hp} {!!(armor || amonUnit.armorbonus) && <><span class="unbold">| Armor: </span>{this.renderValue(armor, amonUnit.armor)}</>}</li>
                    {!!amonUnit.shields && <li class="units-shields"><span class="unbold">Shields:</span> {amonUnit.shields} {!!(shieldarmor || amonUnit.shieldbonus) && <><span class="unbold">| Shield Armor: </span>{this.renderValue(shieldarmor, amonUnit.shieldarmor)}</>}</li>}
                    <li>{this.renderMovement(Number(amonUnit.movementspeed.toFixed(2)), Number(amonUnit.movementspeed.toFixed(2)), amonUnit.movement, amonUnit.targetable)}</li>
                    <li><span class="unbold">Vision:</span> {Number(amonUnit.sightrange.toFixed(2))}</li>
                </ul>
                {this.renderAmonModes(amonUnit)}
                {this.renderAmonUpgrades(amonUnit)}
                </UnitContent>
            </td>
        );
    }
    static amonUpgradeLevels(unit: AmonUnit): UnitModifiers['upgradeLevels'] {
        const levels: UnitModifiers['upgradeLevels'] = {};
        if (Object.values(unit.modes).some(mode => Object.values(mode.damage ?? {}).some(target => target.damagePerUpgrade))) levels.weapon = 1;
        if (unit.armorbonus) levels.armor = 1;
        if (unit.shieldbonus) levels.shields = 1;
        return levels;
    }
    renderAmonUpgrades(unit: AmonUnit): preact.ComponentChildren {
        const available = UnitStats.amonUpgradeLevels(unit);
        const options = ([['weapon', 'Weapons'], ['armor', 'Armor'], ['shields', 'Shields']] as const)
            .filter(([kind]) => kind in available);
        if (!options.length) return null;
        return <form class="units-modifiers">
            <fieldset>
                <legend>Upgrades</legend>
                {options.map(([kind, title]) => <div key={kind}>
                    <div class="units-upgrade-levels" role="radiogroup" aria-label={title}>
                        <span class="units-upgrade-level-name">{title}</span>
                        <span class="units-level-options">{[1, 2, 3].map(level => <label key={level}>
                            <input type="radio" name={`${kind}-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={(this.props.modifiers!.upgradeLevels[kind] ?? 1) === level} /><span>{level}</span>
                        </label>)}</span>
                    </div>
                    {!(kind === 'armor' && 'shields' in available) && <p class="unbold">+1 at start · +2 ≈{kind === 'weapon' ? '10:00' : '15:00'} · +3 ≈{kind === 'armor' && unit.armorupgrade === 'TerranInfantryArmorsLevel1' ? '30:00' : '20:00'}</p>}
                </div>)}
                <p class="unbold">Approximate <a href="/guides/enemycomps#upgrades">Brutal timings</a>.</p>
            </fieldset>
        </form>;
    }
    renderAmonModes(unit: AmonUnit): preact.ComponentChildren {
        return <>
            {Object.entries(unit.modes).map(([id, mode]) => this.renderAmonMode(unit, id, mode))}
            {this.renderNotes(unit.notes)}
        </>;
    }
    renderAmonMode(unit: AmonUnit, id: string, weapon: UnitModeData): preact.ComponentChildren {
        if (!hasAttack(weapon) && !weapon.name) return <><p class="unbold">(No weapon)</p>{this.renderNotes(weapon.notes)}</>;
        const upgradable = Object.values(weapon.damage ?? {}).some(target => target.damagePerUpgrade !== 0);
        const level = upgradable ? this.props.modifiers?.upgradeLevels.weapon ?? weapon.upgradeLevel ?? 0 : 0;
        const baseLevel = upgradable ? weapon.upgradeLevel ?? 1 : 0;
        const damage = weapon.damage?.[''] && weapon.damage[''].damage + weapon.damage[''].damagePerUpgrade * level;
        const baseDamage = weapon.damage?.[''] && weapon.damage[''].damage + weapon.damage[''].damagePerUpgrade * baseLevel;
        const armed = hasAttack(weapon);
        const overrides = {
            movementspeed: weapon.movementspeed !== undefined && weapon.movementspeed !== unit.movementspeed ||
                weapon.movement !== undefined && weapon.movement !== unit.movement ||
                weapon.targetable !== undefined && weapon.targetable !== unit.targetable ? weapon.movementspeed ?? unit.movementspeed : undefined,
            movement: weapon.movement,
            targetable: weapon.targetable,
            sightrange: weapon.sightrange !== unit.sightrange ? weapon.sightrange : undefined,
        };
        const format = (value: number) => Number(value.toFixed(2));
        // These weapons destroy their attacker; their catalog period is not a repeatable cooldown.
        const singleUse = ['HotSBanelingExplode', 'ScourgeMPWeapon', 'VultureSpiderMines'].includes(weapon.source?.weapon ?? '');
        const showDps = !singleUse && !weapon.tickInterval && !weapon.kind &&
            (weapon.hits ?? 0) > 0 && (weapon.cooldown ?? 0) > 0;
        const damageText = (amount: number, baseAmount: number) => <>
            {this.renderValue(format(amount), format(baseAmount))}{showDps && <> ({this.renderValue(
                format(UnitStats.calculateDps(amount, weapon.hits!, weapon.cooldown!)),
                format(UnitStats.calculateDps(baseAmount, weapon.hits!, weapon.cooldown!)),
            )} DPS)</>}
        </>;
        return <div key={id}>
            {this.renderModeHeading(weapon.weaponName, weapon.name ? `(${weapon.name})` : null, weapon.targets, weapon.targetFilters)}
            <ul class="units-mode-stats">
                {!armed && <li class="unbold">(No weapon)</li>}
                {armed && <li><span class="unbold">{weapon.tickInterval ? 'Damage per tick:' : 'Damage:'}</span> {damage === undefined ? '—' : damageText(damage, baseDamage!)}</li>}
                {damage !== undefined && Object.entries(weapon.damage ?? {}).filter(([attribute]) => attribute !== '').map(([attribute, target]) => <li key={attribute}>
                    <span class="unbold">vs. {attribute}:</span> {damageText(target.damage + target.damagePerUpgrade * level, target.damage + target.damagePerUpgrade * baseLevel)}
                </li>)}
                {weapon.shieldDamage !== undefined && <li><span class="unbold">Additional damage vs. shields:</span> {format(weapon.shieldDamage)}</li>}
                {(weapon.hits ?? 0) > 1 && <li><span class="unbold">Hits:</span> {weapon.hits}</li>}
                {weapon.tickInterval !== undefined && <li><span class="unbold">Tick interval:</span> {format(weapon.tickInterval)}</li>}
                {!singleUse && weapon.cooldown !== undefined && <li><span class="unbold">Cooldown:</span> {format(weapon.cooldown)}</li>}
                {weapon.range !== undefined && <li><span class="unbold">Range:</span> {weapon.range === 0 ? '(Melee)' : format(weapon.range)}</li>}
                {weapon.minimumRange !== undefined && <li><span class="unbold">Minimum range:</span> {format(weapon.minimumRange)}</li>}
                {weapon.ignoresArmor && <li class="unbold">Ignores armor</li>}
                {weapon.aoe && <li><span class="unbold">AoE:</span> {weapon.aoe}</li>}
                {this.renderModeStatOverrides(overrides, overrides, unit)}
                {weapon.notes && <li><span class="unbold">Notes:</span> {weapon.notes}</li>}
            </ul>
        </div>;
    }
    static getUnit(modifiers: UnitModifiers): Unit | null {
        const selectedUnit = playerUnits.find(unit => token(unit.commander) === modifiers.commander && token(unit.name) === modifiers.unit);
        if (!selectedUnit) return null;
        const modes: Record<string, UnitMode> = {};
        for (const { id, label, stats, weapon } of playerUnitViews(selectedUnit)) {
            const mode = label ? `(${label})` : '';
            const unitMode: UnitMode = modes[id] = { modeName: mode || null, ...(weapon ? { weaponId: id } : {}) };
            if (selectedUnit.modes[id]?.notes) unitMode.notes = selectedUnit.modes[id]!.notes;
            if (weapon?.weaponName) unitMode.weaponName = weapon.weaponName;
            if (weapon?.targets) unitMode.targets = weapon.targets;
            if (weapon?.targetFilters) unitMode.targetFilters = weapon.targetFilters;
            if (weapon?.kind) unitMode.kind = weapon.kind;
            if (stats.armor !== selectedUnit.armor) unitMode.armor = stats.armor;
            if (stats.shieldarmor !== selectedUnit.shieldarmor) unitMode.shieldarmor = stats.shieldarmor;
            if (stats.movementspeed !== selectedUnit.movementspeed || stats.movement !== selectedUnit.movement || stats.targetable !== selectedUnit.targetable) {
                unitMode.movementspeed = stats.movementspeed;
                unitMode.movement = stats.movement;
                unitMode.targetable = stats.targetable;
            }
            if (stats.sightrange !== selectedUnit.sightrange) unitMode.sightrange = stats.sightrange;
            if (stats.tags.join(',') !== selectedUnit.tags.join(',')) unitMode.tags = stats.tags.join(',');
            unitMode.range = weapon?.range ?? 0;
            if (weapon?.minimumRange !== undefined) unitMode.minimumRange = weapon.minimumRange;
            if (weapon?.ignoresArmor) unitMode.ignoresArmor = true;
            if (weapon?.shieldDamage !== undefined) unitMode.shieldDamage = weapon.shieldDamage;
            if (weapon?.cooldown) unitMode.cooldown = weapon.cooldown;
            if (weapon?.hits) unitMode.hits = weapon.hits;
            if (weapon?.aoe) unitMode.aoe = weapon.aoe;
            if (weapon?.damage && weapon.kind !== 'spawn') unitMode.damage = structuredClone(weapon.damage);
        }
        const unit: Unit = {
            name: selectedUnit.name,
            commander: selectedUnit.commander,
            race: selectedUnit.race,
            mcost: selectedUnit.mcost,
            vcost: selectedUnit.vcost,
            buildtime: selectedUnit.buildtime,
            buildTimeIsAdditional: selectedUnit.buildTimeIsAdditional,
            supply: selectedUnit.supply,
            hp: selectedUnit.hp,
            baseHp: selectedUnit.hp,
            shields: selectedUnit.shields,
            armor: selectedUnit.armor,
            shieldarmor: selectedUnit.shieldarmor,
            energy: selectedUnit.energy,
            movementspeed: selectedUnit.movementspeed,
            movement: selectedUnit.movement,
            targetable: selectedUnit.targetable,
            sightrange: selectedUnit.sightrange,
            tags: [...selectedUnit.tags],
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
            modifier: string, operation: 'add' | 'set' | 'multiply', value: number,
            operationtype?: string | null,
            modifiermode?: string | null,
            weapon?: string,
            modifiertag?: string | null,
            extra?: string | null,
        } | {
            modifier: 'aoe' | 'weaponName', operation: 'replace', value: string,
            modifiermode?: string | null,
            weapon?: string,
        } | {
            modifier: null, operation: 'none', value: null,
        },
        unit: Unit,
        level?: number,
    ) {
        if (upgrade.operation === 'none') return;
        const matchesWeapon = (mode: UnitMode) => mode.weaponId !== undefined && (upgrade.weapon !== undefined ? mode.weaponId === upgrade.weapon :
            !upgrade.modifiermode || mode.modeName === upgrade.modifiermode);
        if (upgrade.operation === 'replace') {
            for (const mode of Object.values(unit.modes)) {
                if (matchesWeapon(mode)) {
                    mode[upgrade.modifier] = upgrade.value;
                }
            }
            return;
        }
        switch (upgrade.modifier) {
            case 'mineralCost':
                unit.mcost = this.applyModifier(unit.mcost, upgrade, level);
                break;
            case 'vespeneCost':
                unit.vcost = this.applyModifier(unit.vcost, upgrade, level);
                break;
            case 'time':
                unit.buildtime = this.applyModifier(unit.buildtime, upgrade, level);
                break;
            case 'supply':
                unit.supply = this.applyModifier(unit.supply, upgrade, level);
                break;
            case 'HP':
                if (upgrade.operation === 'multiply' && upgrade.extra == null) {
                    unit.hp += this.applyModifier(unit.baseHp, upgrade, level) - unit.baseHp;
                } else {
                    unit.hp = this.applyModifier(unit.hp, upgrade, level);
                }
                break;
            case 'Shields':
                unit.shields = this.applyModifier(unit.shields, upgrade, level);
                break;
            case 'Armor':
                if (!upgrade.modifiermode) {
                    unit.armor = this.applyModifier(unit.armor, upgrade, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.armor !== undefined) {
                        mode.armor = this.applyModifier(mode.armor ?? unit.armor, upgrade, level);
                    }
                }
                break;
            case 'Shield_Armor':
                if (!upgrade.modifiermode) {
                    unit.shieldarmor = this.applyModifier(unit.shieldarmor, upgrade, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.shieldarmor !== undefined) {
                        mode.shieldarmor = this.applyModifier(mode.shieldarmor ?? unit.shieldarmor, upgrade, level);
                    }
                }
                break;
            case 'Move_Speed':
                if (!upgrade.modifiermode) {
                    unit.movementspeed = this.applyModifier(unit.movementspeed, upgrade, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.movementspeed !== undefined) {
                        mode.movementspeed = this.applyModifier(mode.movementspeed ?? unit.movementspeed, upgrade, level);
                    }
                }
                break;
            case 'Vision':
                if (!upgrade.modifiermode) {
                    unit.sightrange = this.applyModifier(unit.sightrange, upgrade, level);
                }
                for (const mode of Object.values(unit.modes)) {
                    if (upgrade.modifiermode ? mode.modeName === upgrade.modifiermode : mode.sightrange !== undefined) {
                        mode.sightrange = this.applyModifier(mode.sightrange ?? unit.sightrange, upgrade, level);
                    }
                }
                break;
            case 'damage':
                for (const mode of Object.values(unit.modes)) {
                    if (matchesWeapon(mode)) {
                        if (upgrade.modifiertag) {
                            mode.damage![upgrade.modifiertag] ||= {
                                ...mode.damage!['']!,
                            };
                            mode.damage![upgrade.modifiertag]!.damage = this.applyModifier(mode.damage![upgrade.modifiertag]!.damage, upgrade, level);
                        } else {
                            for (const damage of Object.values(mode.damage ||= { '': { damage: 0, damagePerUpgrade: 0 } })) {
                                damage.damage = this.applyModifier(damage.damage, upgrade, level);
                            }
                        }
                    }
                }
                break;
            case 'attackbonus':
                for (const mode of Object.values(unit.modes)) {
                    if (matchesWeapon(mode)) {
                        if (upgrade.modifiertag) {
                            mode.damage![upgrade.modifiertag] ||= {
                                ...mode.damage!['']!,
                            };
                            mode.damage![upgrade.modifiertag]!.damagePerUpgrade = this.applyModifier(mode.damage![upgrade.modifiertag]!.damagePerUpgrade, upgrade, level);
                        } else {
                            for (const damage of Object.values(mode.damage ||= { '': { damage: 0, damagePerUpgrade: 0 } })) {
                                damage.damagePerUpgrade = this.applyModifier(damage.damagePerUpgrade, upgrade, level);
                            }
                        }
                    }
                }
                break;
            case 'Hits':
                for (const mode of Object.values(unit.modes)) {
                    if (matchesWeapon(mode)) {
                        mode.hits = this.applyModifier(mode.hits!, upgrade, level);
                    }
                }
                break;
            case 'Attack_Speed':
                for (const mode of Object.values(unit.modes)) {
                    if (matchesWeapon(mode)) {
                        mode.cooldown = this.applyModifier(mode.cooldown!, upgrade, level);
                    }
                }
                break;
            case 'Range':
                for (const mode of Object.values(unit.modes)) {
                    if (matchesWeapon(mode)) {
                        mode.range = this.applyModifier(mode.range!, upgrade, level);
                    }
                }
                break;
        }
    }
    static getUpgradedUnit(unit: Unit, modifiers: UnitModifiers) {
        const upgradedUnit = JSON.parse(JSON.stringify(unit)) as Unit;
        for (const upgrade of playerUpgrades as PlayerUpgrade[]) {
            if (token(upgrade.commander) !== modifiers.commander || token(upgrade.unit) !== modifiers.unit || modifiers.upgrades[upgrade.name]) continue;
            for (const mode of upgrade.unlocksModes ?? []) delete upgradedUnit.modes[mode];
        }

        if (modifiers.commander === 'dehaka' && modifiers.unit === 'dehaka') {
            const level = Math.max(1, Math.min(UnitStats.heroLevelLimit(modifiers), Math.trunc(modifiers.upgradeLevels.hero ?? 1)));
            upgradedUnit.modes['']!.damage!['']!.damage = (level + 1) * 10;
            // Each level requires 15 more Essence than the previous one:
            // 15 + 30 + ... + 15 * (level - 1). Use that minimum for the HP estimate.
            const minimumEssence = 15 * level * (level - 1) / 2;
            upgradedUnit.hp += minimumEssence * 0.75;
        }

        // preupgrade -> mastery -> prestige -> generic upgrade -> upgrade -> post-prestige

        const metaUpgrades: { [upgrade: string]: [Exclude<PlayerTalent, { operation: 'replace' }>, level: number | null][] } = {};

        if (unit.name === 'Sky Fury' && (modifiers.upgradeLevels.rank ?? 0) >= 1) {
            delete upgradedUnit.modes['fighter-mode']!.damage!['Armored'];
            upgradedUnit.modes['fighter-mode']!.damage!['']!.damage = 21;
        }
        for (const upgrade of playerUpgrades as PlayerUpgrade[]) {
            if (!modifiers.upgrades[upgrade.name]) continue;
            if (modifiers.unit !== token(upgrade.unit)) continue;
            if (modifiers.commander !== token(upgrade.commander)) continue;
            if (upgrade.upgradetype !== 'preupgrade') continue;

            this.applyUpgrade(upgrade, upgradedUnit);
        }
        for (const talent of playerTalents as PlayerTalent[]) {
            if (talent.target === 'skill') continue;
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
            if (talent.target === 'skill') continue;
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
                for (const attack of Object.values(mode.damage || {})) {
                    if (levels.rank) attack.damagePerUpgrade ||= attack.damage * 0.25;
                    attack.damage += weaponUpgrades * attack.damagePerUpgrade;
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
            const biomassUpgrade = modifiers.commander === 'abathur' && upgrade.name === 'Maximum Biomass' && levels.biomass !== undefined;
            if (!biomassUpgrade && !modifiers.upgrades[upgrade.name]) continue;
            if (modifiers.unit !== token(upgrade.unit)) continue;
            if (modifiers.commander !== token(upgrade.commander)) continue;
            if (upgrade.upgradetype !== 'upgrade') continue;

            if (biomassUpgrade && (upgrade.operation === 'multiply' || upgrade.operation === 'add')) {
                const biomass = Math.max(0, Math.min(UnitStats.biomassLimit(modifiers), levels.biomass!));
                const fraction = biomass / (modifiers.prestiges['The Limitless'] ? 200 : 100);
                // The data rows describe 100 Biomass. Scale their bonus, not the
                // entire multiplier; P1 raises capacity rather than bonus strength.
                const value = upgrade.operation === 'multiply' ? 1 + (upgrade.value - 1) * fraction : upgrade.value * fraction;
                this.applyUpgrade({ ...upgrade, value }, upgradedUnit);
                continue;
            }

            if (upgrade.operation !== 'replace' && upgrade.operation !== 'none' && metaUpgrades[upgrade.name]) {
                upgrade = { ...upgrade };
                for (const [metaUpgrade, level] of metaUpgrades[upgrade.name]!) {
                    if (upgrade.modifier !== metaUpgrade.modifier) continue;
                    upgrade.value = this.applyModifier(upgrade.value, metaUpgrade, level, false);
                }
            }
            this.applyUpgrade(upgrade, upgradedUnit);
            if (upgrade.buildTimeIsAdditional) upgradedUnit.buildTimeIsAdditional = true;
        }
        for (const talent of playerTalents as PlayerTalent[]) {
            if (talent.target === 'skill') continue;
            if (talent.talenttype !== 'post') continue;
            if (!modifiers.prestiges[talent.name]) continue;
            if (modifiers.unit !== token(talent.unit)) continue;
            if (modifiers.commander !== token(talent.commander)) continue;
            if (talent.modifierupgrade && !modifiers.upgrades[talent.modifierupgrade]) continue;

            this.applyUpgrade(talent, upgradedUnit);
        }
        if (modifiers.upgrades['Redline Power Cells']) {
            upgradedUnit.modes['']!.damage!['']!.damage += 60;
        }
        if (modifiers.unit === 'mutalisk' && ['abathur', 'kerrigan'].includes(modifiers.commander) &&
            (levels.weapon || modifiers.upgrades['Vicious Glave'] || modifiers.upgrades['Severing Glave'] || modifiers.upgrades['Sundering Glave'])) {
            // Both bounce upgrades replace AoE text. Compose them here, after the
            // generic replacements, so neither upgrade can erase the other's effect.
            const vicious = modifiers.upgrades['Vicious Glave'];
            const severing = modifiers.commander === 'kerrigan' && modifiers.upgrades['Severing Glave'];
            const bounceCount = vicious ? 5 : 2;
            const radius = vicious ? (modifiers.commander === 'kerrigan' ? 6 : 4) : 3;
            const baseDamage = severing ? [9, 9, 9, 9, 9] : [5, 3, 3, 1, 1];
            const damage = baseDamage.slice(0, bounceCount).map((amount, index) =>
                Number((amount + (levels.weapon || 0) * ([0.333, 0.111][index] || 0)).toFixed(3))
            );
            let aoe = `Bounces to up to ${bounceCount} additional enemies, within radius ${radius} of the previous target. Bounce damage: ${damage.join(', ')}.`;
            if (modifiers.commander === 'abathur' && modifiers.upgrades['Sundering Glave']) {
                aoe += ' Bounces deal double damage vs. Armored.';
            }
            upgradedUnit.modes['']!.aoe = aoe;
        }

        return upgradedUnit;
    }
    static modifiers(commander: Token, selectedUnit: Token): UnitModifiers {
        const amonUnit = amonUnits.find(unit => token(unit.race) === commander && token(unit.name) === selectedUnit);
        if (amonUnit) return { commander, unit: selectedUnit, upgrades: {}, masteries: {}, prestiges: {}, upgradeLevels: this.amonUpgradeLevels(amonUnit) };
        const upgradesList = playerUpgrades.filter((u) => token(u.commander) === commander && token(u.unit) === selectedUnit);
        const talentsList = playerTalents.filter((u) => token(u.commander) === commander && token(u.unit) === selectedUnit);

        const upgrades: UnitModifiers['upgrades'] = {};
        const masteries: UnitModifiers['masteries'] = {};
        const supportedPrestiges = new Set<string>();
        let upgradeLevels: UnitModifiers['upgradeLevels'] = {};
        for (const upgrade of upgradesList) {
            upgrades[upgrade.name] = false;
        }
        for (const talent of talentsList) {
            if (talent.talenttype === 'mastery') {
                masteries[talent.name] = 0;
            } else {
                supportedPrestiges.add(talent.name);
            }
        }

        const unit = playerUnits.find((u) => token(u.commander) === commander && token(u.name) === selectedUnit);
        if (unit?.armorbonus || unit?.hpbonus) {
            upgradeLevels.armor = 0;
        }
        if (unit?.shieldbonus) {
            upgradeLevels.shields = 0;
        }
        if (unit && Object.values(unit.modes).some(mode => Object.values(mode.damage ?? {}).some(target => target.damagePerUpgrade))) {
            upgradeLevels.weapon = 0;
        }
        if (commander === 'zeratul') {
            if (Object.keys(upgradeLevels).length) {
                upgradeLevels = { artifacts: 0 };
                supportedPrestiges.add('Herald of the Void');
            }
        }
        if (commander === 'mengsk') {
            const RG = ['aegisguard', 'blackhammer', 'emperorsshadow', 'prideofaugustgrad', 'shockdivision', 'skyfury'];
            if (RG.includes(selectedUnit)) upgradeLevels = { rank: 0 };
        }
        if (commander === 'dehaka' && selectedUnit === 'dehaka') {
            upgradeLevels = { hero: 1 };
        }
        if (commander === 'abathur' && 'Maximum Biomass' in upgrades) {
            delete upgrades['Maximum Biomass'];
            upgradeLevels.biomass = 0;
            supportedPrestiges.add('The Limitless');
        }
        for (const skill of unitSkills.values()) {
            if (token(skill.commander) !== commander || token(skill.unit) !== selectedUnit) continue;
            if (skill.prestige) supportedPrestiges.add(skill.prestige);
            for (const prestige of skill.excludedPrestiges ?? []) supportedPrestiges.add(prestige);
        }
        // Both stats and skills contribute options; use the numbered source-data order.
        const summary = commandersummaries.find(summary => summary.commander === commander);
        const prestiges = Object.fromEntries([summary?.prestige1, summary?.prestige2, summary?.prestige3]
            .map(name => name?.trim())
            .filter((name): name is string => !!name && supportedPrestiges.has(name))
            .map(name => [name, false]));
        return { commander, unit: selectedUnit, upgrades, upgradeLevels, masteries, prestiges };
    }
    static heroLevelLimit(modifiers: UnitModifiers): number {
        return modifiers.prestiges['Devouring One'] ? 11 : 15;
    }
    static artifactLimit(modifiers: UnitModifiers): number {
        return modifiers.prestiges['Herald of the Void'] ? 2 : 3;
    }
    static biomassLimit(modifiers: UnitModifiers): number {
        return modifiers.prestiges['The Limitless'] ? 200 : modifiers.prestiges['Essence Hoarder'] ? 125 : 100;
    }
    renderLevelSlider(kind: 'hero' | 'biomass', label: string, min: number, max: number): preact.ComponentChildren {
        const modifiers = this.props.modifiers!;
        const id = `${kind}-${this.props.formKey}`;
        return <fieldset class="units-masteries">
            <legend id={`${id}-label`}>{label}</legend>
            <span class="units-mastery-controls">
                <input type="range" name={kind} aria-labelledby={`${id}-label`} value={modifiers.upgradeLevels[kind]} onInput={this.onChangeUnitLevel} min={min} max={max} step={1} />
                <span class="units-mastery-value"><input type="number" name={kind} aria-labelledby={`${id}-label`} value={this.state.levelInputs?.[kind] ?? modifiers.upgradeLevels[kind]} onInput={this.onChangeUnitLevel} onBlur={() => this.setState({ levelInputs: null })} min={min} max={max} step={1} /><small class="unbold">/{max}</small></span>
            </span>
        </fieldset>;
    }
    renderSkills(): preact.ComponentChildren {
        const { commander, unit, prestiges, upgrades } = this.props.modifiers!;
        const skills = [...unitSkills].filter(([, skill]) => token(skill.commander) === commander && token(skill.unit) === unit && skillVisible(skill, prestiges, upgrades));
        if (!skills.length) return null;
        const race = token(UnitStats.getUnit(this.props.modifiers!)!.race);
        const activeSkills = skills.filter(([, skill]) => skill.type !== 'passive');
        const groups = [
            ...(commander === 'nova' && unit === 'nova' ? [
                { title: 'Skills (Stealth Mode)', skills: activeSkills.filter(([, skill]) => skill.mode === 'Stealth Mode') },
                { title: 'Skills (Assault Mode)', skills: activeSkills.filter(([, skill]) => skill.mode === 'Assault Mode') },
            ] : [{ title: 'Skills', skills: activeSkills }]),
            { title: 'Passives', skills: skills.filter(([, skill]) => skill.type === 'passive') },
        ].filter(group => group.skills.length);
        return groups.map(group => <preact.Fragment key={group.title}>
            <p class="units-head">{group.title}</p>
            <ul class="units-mode-stats units-skills">
                {group.skills.map(([key, baseSkill]) => {
                    const skill = resolveSkill(baseSkill, this.props.modifiers!);
                    const costs = skillCosts(skill, race);
                    return <li key={key}>
                        <span class="units-skill" data-tooltip={key} data-skill-values={skillTooltipValues(baseSkill, skill)} data-race={race} tabIndex={0}>
                            <span class="units-skill-label">
                                {skill.icons.map(icon => <img key={icon} src={icon} alt="" width={20} height={20} />)}{' '}
                                {skill.requiresupgrade && <><img src="/images/commanderdata/unitupgrades/iconlock.png" alt="Requires an upgrade:" width={20} height={20} />{' '}</>}
                                {skill.name}<span class="unbold">
                                    {!!skill.charges && <> <span class={`units-skill-cost units-annotation${skill.modifiedFields?.includes('charges') ? ' units-modified' : ''}`}>({skill.charges} {skill.charges === 1 ? 'charge' : 'charges'})</span></>}
                                    {skill.type === 'autocast' && <span class="units-annotation"> (autocast)</span>}
                                </span>
                            </span>
                            {!!costs.length && <> <span class="units-skill-costs unbold">
                                {costs.map((cost, index) => <preact.Fragment key={cost.label}>
                                    {index > 0 && ' '}<span class="units-skill-cost">
                                        <img src={cost.icon} alt={cost.label} width={20} height={20} /> <span class={skill.modifiedFields?.includes(cost.field) ? 'units-modified' : undefined}>{cost.value}</span>
                                    </span>
                                </preact.Fragment>)}
                            </span></>}
                        </span>
                    </li>;
                })}
            </ul>
        </preact.Fragment>);
    }
    renderUpgrades(): preact.ComponentChildren {
        const modifiers = this.props.modifiers!;
        const race = token(UnitStats.getUnit(modifiers)!.race);
        // filter out Mengsk Royal Guard rank upgrades
        const upgrades = Object.keys(modifiers.upgrades).filter(upgrade => !/^[123]$/.test(upgrade));
        const masteries = Object.keys(modifiers.masteries);
        const prestiges = Object.keys(modifiers.prestiges);
        const commanderSummary = commandersummaries.find(commander => commander.commander === modifiers.commander);
        const prestigeNames = [commanderSummary?.prestige1, commanderSummary?.prestige2, commanderSummary?.prestige3].map(name => name?.trim());
        const upgradeLevels = [0, 1, 2, 3, 4, 5].slice(0, modifiers.commander === 'tychus' ? 6 : 4);
        const genericUpgrades = ([['weapon', 'Weapons'], ['armor', 'Armor'], ['shields', 'Shields']] as const)
            .filter(([kind]) => kind in modifiers.upgradeLevels);

        const unitUpgrades = (playerUpgrades as PlayerUpgrade[]).filter((u) => token(u.commander) === modifiers.commander && token(u.unit) === modifiers.unit);
        const upgradeData = new Map(
            unitUpgrades
                .map((u) => [u.name, { tooltip: `upgrades/${token(u.commander)}/${u.icon}`, icon: u.icon, unit: u.unit }])
        );
        const selectableUpgrades = new Set(
            unitUpgrades.filter((u) => u.operation !== 'none' || u.skillModifiers?.length || u.unlocksModes?.length)
                .map((u) => u.name)
        );
        const temporaryUpgrades = new Set(unitUpgrades.filter(u => u.temporary).map(u => u.name));
        const temporaryTalents = new Set((playerTalents as PlayerTalent[])
            .filter(t => token(t.commander) === modifiers.commander && token(t.unit) === modifiers.unit && t.temporary)
            .map(t => t.name));
        const upgradeIcon = (upgrade: string) => {
            const data = upgradeData.get(upgrade);
            const commander = modifiers.commander;
            const isHero = token(data?.unit ?? "") === commander || (commander === 'fenix' && data?.unit.startsWith('Fenix '));
            const dir = commander !== 'tychus' && isHero ? "hero" : "unitupgrades";
            return `/images/commanderdata/${dir}/${commander}/${data?.icon}.png`;
        };

        return (
            <form class="units-modifiers">
                {'hero' in modifiers.upgradeLevels && this.renderLevelSlider('hero', 'Hero level', 1, UnitStats.heroLevelLimit(modifiers))}
                {'biomass' in modifiers.upgradeLevels && this.renderLevelSlider('biomass', modifiers.unit === 'locust' ? 'Parent Swarm Host biomass' : 'Biomass', 0, UnitStats.biomassLimit(modifiers))}
                {!!(upgrades.length || genericUpgrades.length) && (<fieldset>
                    <legend>Upgrades</legend>
                    {upgrades.map((upgrade) => {
                        const selectable = selectableUpgrades.has(upgrade);
                        const UpgradeLabel = selectable ? 'label' : 'span';
                        const iconSrc = upgradeIcon(upgrade);
                        return <div><UpgradeLabel class={selectable ? undefined : "units-upgrade-passive"} data-tooltip={upgradeData.get(upgrade)?.tooltip} data-race={race}>
                            <span class="units-upgrade-marker">{selectable ? <input type="checkbox" value={upgrade} onChange={this.onCheckUpgrade} checked={modifiers.upgrades[upgrade]} /> : <span class="unbold" aria-hidden="true">•</span>}</span>{' '}
                            <img key={iconSrc} src={iconSrc} alt="" width={20} height={20} /> {upgrade}{temporaryUpgrades.has(upgrade) && <span class="unbold units-annotation"> (temporary)</span>}
                        </UpgradeLabel></div>;
                    })}
                    {genericUpgrades.map(([kind, title]) => <div class="units-upgrade-levels" role="radiogroup" aria-label={title}>
                        <span class="units-upgrade-level-name">{title}</span>
                        <span class="units-level-options">{upgradeLevels.map(level => <label><input type="radio" name={`${kind}-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels[kind] === level} /><span>{level}</span></label>)}</span>
                    </div>)}
                </fieldset>)}
                {'rank' in modifiers.upgradeLevels && (<fieldset class="units-ranks">
                    <legend>Rank</legend>
                    {upgradeLevels.map(level => {
                        const key = `ranks/${modifiers.commander}/${modifiers.unit}/${level}`;
                        const upgrade = rankUpgrades.get(key);
                        const iconSrc = `/images/commanderdata/unitupgrades/${modifiers.commander}/${upgrade?.icon ?? 'veterancy'}.png`;
                        return <label data-tooltip={upgrade ? key : undefined}>
                            <span class="units-upgrade-marker"><input type="radio" name={`rank-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.rank === level} /></span>{' '}
                            <img key={iconSrc} src={iconSrc} alt="" width={20} height={20} /> {upgrade?.name ?? `Rank ${level}`}
                        </label>;
                    })}
                </fieldset>)}
                {'artifacts' in modifiers.upgradeLevels && (<fieldset>
                    <legend>Artifact fragments collected</legend>
                    {upgradeLevels.filter(level => level <= UnitStats.artifactLimit(modifiers)).map(level => <label><input type="radio" name={`artifacts-${this.props.formKey}`} value={level} onChange={this.onCheckUpgradeLevel} checked={modifiers.upgradeLevels.artifacts === level} /> {level}</label>)}
                </fieldset>)}
                {!!masteries.length && (<fieldset class="units-masteries">
                    <legend>Masteries</legend>
                    {masteries.map((talent) => {
                        const id = `mastery-${this.props.formKey}-${token(talent)}`;
                        return <div>
                            <label class="units-mastery-name" id={`${id}-label`} htmlFor={id}>{talent}{temporaryTalents.has(talent) && <span class="unbold units-annotation"> (temporary)</span>}</label><br />
                            <span class="units-mastery-controls">
                                <input type="range" name={talent} aria-labelledby={`${id}-label`} value={modifiers.masteries[talent]} onInput={this.onChangeMastery} min={0} max={30} step={1} />
                                <span class="units-mastery-value"><input type="number" id={id} name={talent} value={this.state.masteryInputs?.[talent] ?? modifiers.masteries[talent]} onInput={this.onInputMastery} onBlur={this.onBlurMastery} min={0} max={30} step={1} /><small class="unbold">/30</small></span>
                            </span>
                        </div>;
                    })}
                </fieldset>)}
                {!!prestiges.length && (<fieldset>
                    <legend>Prestiges</legend>
                    {prestiges.map((talent) => <div><label><input type="checkbox" value={talent} onChange={this.onCheckPrestige} checked={modifiers.prestiges[talent]} /> P{prestigeNames.indexOf(talent) + 1}: {talent}{temporaryTalents.has(talent) && <span class="unbold units-annotation"> (temporary)</span>}</label></div>)}
                </fieldset>)}
            </form>
        );
    }
    onChangeUnitLevel = (e: Event) => {
        const target = e.target as HTMLInputElement;
        const kind = target.name as 'hero' | 'biomass';
        const modifiers = this.props.modifiers!;
        const min = kind === 'hero' ? 1 : 0;
        const max = kind === 'hero' ? UnitStats.heroLevelLimit(modifiers) : UnitStats.biomassLimit(modifiers);
        this.setState({ levelInputs: target.type === 'number' ? { [kind]: target.value } : null });
        const value = Math.max(min, Math.min(max, parseInt(target.value) || min));
        this.props.onSetModifiers({ upgradeLevels: { ...modifiers.upgradeLevels, [kind]: value } });
    };
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
        const modifiers = this.props.modifiers!;
        const newPrestiges = Object.fromEntries(Object.keys(modifiers.prestiges).map((prestige) => [prestige, false]));
        const prestiges = { ...newPrestiges, [target.value]: target.checked };
        const upgradeLevels = { ...modifiers.upgradeLevels };
        if (upgradeLevels.artifacts !== undefined) {
            upgradeLevels.artifacts = Math.min(upgradeLevels.artifacts, UnitStats.artifactLimit({ ...modifiers, prestiges }));
        }
        if (upgradeLevels.hero !== undefined) {
            upgradeLevels.hero = Math.min(upgradeLevels.hero, UnitStats.heroLevelLimit({ ...modifiers, prestiges }));
            this.setState({ levelInputs: null });
        }
        if (upgradeLevels.biomass !== undefined) {
            upgradeLevels.biomass = Math.min(upgradeLevels.biomass, UnitStats.biomassLimit({ ...modifiers, prestiges }));
            this.setState({ levelInputs: null });
        }
        this.props.onSetModifiers({ prestiges, upgradeLevels });
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
    static applyModifier(
        value: number,
        upgrade: { modifier: string, operation: string, value: number, operationtype?: string | null },
        level?: number | null,
        reverseAttackSpeed = true,
    ): number {
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
                const reverse = reverseAttackSpeed && upgrade.modifier === 'Attack_Speed';
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
    static calculateDps(damage: number, hits: number, cooldown: number): number {
        return damage * hits / cooldown;
    }
    renderModeHeading(weaponName: string | undefined, modeName: string | null, targets?: UnitModeData['targets'], targetFilters?: string) {
        const label = modeName?.replace(/^\((.*)\)$/, '$1') ?? '';
        const labelTarget = label.match(/(?:^| )(Air|Ground|Structure)$/)?.[1];
        const form = labelTarget ? label.slice(0, -labelTarget.length).trim() : label;
        const showForm = form && form !== weaponName && form !== 'Weapon';
        const [required, excluded] = (targetFilters ?? '').split(';').map(filters => filters.split(','));
        const structuresOnly = labelTarget === 'Structure' || required?.includes('Structure');
        const target = structuresOnly ? 'Structures' : targets?.replace(',', ', ') ?? labelTarget;
        const restriction = !structuresOnly && excluded?.includes('Structure') ? ', non-structures' : '';
        return <p class="units-head">
            {weaponName ? <>
                {showForm && <><strong class="units-mode-name">{form}:</strong>{' '}</>}
                <span class="units-weapon-name">{weaponName}</span>
            </> : <strong class="units-mode-name">{label || "Weapon"}</strong>}
            {target && <span class="units-weapon-target unbold"> ({target}{restriction})</span>}
        </p>;
    }
    renderNotes(notes?: string) {
        if (!notes) return null;
        return <p><span class="unbold">Notes:</span>{notes.split('<br>').map(note => <><br />{note}</>)}</p>;
    }
    renderMovement(speed: number, baseSpeed: number, movement: PlayerUnit['movement'], targetable?: PlayerUnit['targetable']) {
        const planes = targetable ?? movement ?? 'Ground';
        const qualifier = planes === 'Ground,Air' ? 'ground and air targetable' : speed === 0 && planes === 'Air' ? 'air targetable' : null;
        return <>
            {speed === 0 ? <span class="unbold">Immobile</span> : <>
                <span class="unbold">{movement === 'Air' ? 'Air Speed:' : 'Move Speed:'}</span>{' '}{this.renderValue(speed, baseSpeed)}
            </>}
            {qualifier && <span class="units-targetability unbold"> ({qualifier})</span>}
        </>;
    }
    renderModeStatOverrides(
        mode: Pick<UnitMode, 'armor' | 'movementspeed' | 'sightrange' | 'movement' | 'targetable'>,
        baseMode: Pick<UnitMode, 'armor' | 'movementspeed' | 'sightrange' | 'movement' | 'targetable'>,
        baseUnit: Pick<Unit, 'armor' | 'movementspeed' | 'sightrange' | 'movement' | 'targetable'>,
    ) {
        return <>
            {mode.armor !== undefined && <li><span class="unbold">Armor:</span> {this.renderValue(mode.armor, baseMode.armor ?? baseUnit.armor)}</li>}
            {mode.movementspeed !== undefined && <li>{this.renderMovement(mode.movementspeed, baseMode.movementspeed ?? baseUnit.movementspeed, mode.movement ?? baseUnit.movement, mode.targetable ?? baseUnit.targetable)}</li>}
            {mode.sightrange !== undefined && <li><span class="unbold">Vision:</span> {this.renderValue(mode.sightrange, baseMode.sightrange ?? baseUnit.sightrange)}</li>}
        </>;
    }
    renderMode(mode: UnitMode, baseMode: UnitMode, baseUnit: Unit) {
        if (mode.weaponId === undefined && !mode.modeName && !mode.damage) return <><p class="unbold">(No weapon)</p>{this.renderNotes(mode.notes)}</>;
        return <>
            {this.renderModeHeading(mode.weaponName, mode.modeName, mode.targets, mode.targetFilters)}
            <ul class="units-mode-stats">
                {!mode.damage && <li>
                    {mode.kind === 'spawn' ? <span class="unbold">(Spawns units)</span> :
                        mode.weaponId !== undefined ? <><span class="unbold">Damage:</span> —</> : <span class="unbold">(No weapon)</span>}
                </li>}
                {!!mode.damage && <>
                    {Object.entries(mode.damage || {}).map(([attribute, damage]) => {
                        const dps = UnitStats.calculateDps(damage.damage, mode.hits!, mode.cooldown!);
                        const baseDamage = baseMode.damage?.[attribute]?.damage ?? baseMode.damage?.['']?.damage ?? 0;
                        const baseDps = UnitStats.calculateDps(baseDamage, baseMode.hits!, baseMode.cooldown!);
                        const noDps = ['Baneling', 'Baneling Spawn', 'Scourge', 'Volatile Infested', 'Spider Mine', 'Explosive Creeper'];
                        const dpsMessage = (!mode.kind && !noDps.includes(baseUnit.name)) ? <> ({this.renderValue(+dps.toFixed(2), +baseDps.toFixed(2))} DPS)</> : '';
                        return <li>
                            <span class="unbold">{attribute ? `vs. ${attribute}:` : 'Damage:'}</span> {this.renderValue(damage.damage, baseDamage)}{dpsMessage}
                        </li>;
                    })}
                    {mode.shieldDamage !== undefined && <li><span class="unbold">Additional damage vs. shields:</span> {this.renderValue(mode.shieldDamage, baseMode.shieldDamage ?? 0)}</li>}
                    {(mode.hits! > 1 || baseMode.hits! > 1) && <li><span class="unbold">Hits:</span> {this.renderValue(mode.hits!, baseMode.hits!)}</li>}
                    <li><span class="unbold">Cooldown:</span> {this.renderValue(mode.cooldown!, baseMode.cooldown!)}</li>
                    <li><span class="unbold">Range:</span> {mode.range === 0 ? "(Melee)" : this.renderValue(mode.range!, baseMode.range!)}</li>
                </>}
                {mode.minimumRange !== undefined && <li><span class="unbold">Minimum range:</span> {Number(mode.minimumRange.toFixed(2))}</li>}
                {mode.ignoresArmor && <li class="unbold">Ignores armor</li>}
                {mode.aoe && <li><span class="unbold">AoE:</span> {mode.aoe !== baseMode.aoe ? <strong class="units-modified">{mode.aoe}</strong> : mode.aoe}</li>}
                {this.renderModeStatOverrides(mode, baseMode, baseUnit)}
                {mode.notes && <li><span class="unbold">Notes:</span> {mode.notes}</li>}
            </ul>
        </>;
    }
    static getImageSrc(commander: string, unit: string) {
        commander = token(commander);
        unit = token(unit);
        if (!commander || !unit) return null;
        if (AMON_UNIT_TYPES.some(type => token(type) === commander)) {
            return amonUnits.find(entry => token(entry.race) === commander && token(entry.name) === unit)?.image ?? null;
        }

        if (unit.startsWith('enthralled')) {
            return `/images/comps/unitimages/${unit.slice(10)}.png`;
        }
        if (commander === 'karax' && unit === 'photoncannon') {
            return `/images/commanderdata/guides/karax/photoncannon.jpg`;
        }
        if (['observer', 'broodling', 'overlord', 'overseer', 'missileturret', 'photoncannon',
            'spinecrawler', 'sporecrawler', 'spidermine', 'bunker'].includes(unit) ||
            (commander === 'zeratul' && unit === 'voidray')) {
            return `/images/comps/unitimages/${unit}.png`;
        }
        if (unit.startsWith('fenix')) {
            return `/images/commanderdata/abilities/fenix/${unit.slice(5)}.jpg`;
        }
        // No verified whole-unit replacement for the drill has been found yet.
        if (unit === 'drakkenlaserdrill') {
            return `/images/commanderdata/abilities/${commander}/drakkenlaserdrillattack.png`;
        }
        if (commander === 'zeratul' && ['zealot', 'darkarchon'].includes(unit)) {
            return `/images/commanderdata/abilities/zeratul/${unit}.jpg`;
        }

        const portraitFolders: Record<string, readonly string[]> = {
            guides: ['flamingbetty', 'blasterbilly', 'spinningdizzy', 'khaydarinmonolith', 'shieldbattery'],
            hero: ['alarak', 'kerrigan', 'zagara', 'nova', 'zeratul', 'gary', 'supergary', 'dehaka'],
            abilities: ['hyperion', 'mothership', 'destroyer', 'shadowguard', 'glevig', 'murvar', 'dakrun',
                'greaterprimalwurm', 'serdath', 'telbrus', 'apocalisk', 'avatarofform', 'avatarofessence'],
        };
        for (const [folder, units] of Object.entries(portraitFolders)) {
            if (units.includes(unit)) return `/images/commanderdata/${folder}/${commander}/${unit}.jpg`;
        }
        return `/images/commanderdata/units/${commander}/${unit === 'infestedtrooper' ? 'infestedmarine' : unit}.jpg`;
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
        const imageSrc = UnitStats.getImageSrc(modifiers.commander, modifiers.unit);

        return (
            <td class="units-unit">
                <UnitContent selection={`${modifiers.commander}/${modifiers.unit}`}>
                {this.renderActions()}
                <h2 class="units-name">{unit.name}</h2>
                <div class="units-identity">
                    {imageSrc && <div class="units-art"><img key={imageSrc} src={imageSrc} alt="" class="units-portrait" /></div>}
                    <div class="units-identity-text">
                        {(unit.mcost || unit.vcost || unit.buildtime || unit.supply) ? <p class="units-costs">
                            <span><img src="/images/commanderdata/unitupgrades/iconmineral.png" alt="Minerals:" /> {this.renderValue(unit.mcost, baseUnit.mcost)}</span>
                            <span><img src={`/images/commanderdata/unitupgrades/icongas_${race}.png`} alt="Gas:" /> {this.renderValue(unit.vcost, baseUnit.vcost)}</span>
                            <span title={unit.buildTimeIsAdditional ? 'Additional morph or installation time after the parent unit is built' : undefined}><img src={`/images/commanderdata/unitupgrades/icontime_${race}.png`} alt={unit.buildTimeIsAdditional ? 'Additional Build Time:' : 'Build Time:'} /> {unit.buildTimeIsAdditional && '+'}{this.renderValue(unit.buildtime, baseUnit.buildtime)}</span>
                            <span><img src={`/images/commanderdata/unitupgrades/iconsupply_${race}.png`} alt="Supply:" /> {this.renderValue(unit.supply, baseUnit.supply)}</span>
                        </p> : <p class="units-costs">
                            (No cost)
                        </p>}
                        <p class="units-tags">{unit.tags.join(" · ") || "(No tags)"}</p>
                    </div>
                </div>
                <ul class="units-stats">
                    <li class="units-hp">
                        <span class="unbold">HP:</span> {this.renderValue(unit.hp, baseUnit.hp)}{modifiers.commander === 'dehaka' && modifiers.unit === 'dehaka' && '+'}
                        {(!!unit.armor || !!baseUnit.armor) && <> <span class="unbold">| Armor:</span> {this.renderValue(unit.armor, baseUnit.armor)}</>}
                    </li>
                    {!!unit.shields && <li class="units-shields">
                        <span class="unbold">Shields:</span> {this.renderValue(unit.shields, baseUnit.shields)}
                        {!!unit.shieldarmor && <> <span class="unbold">| Shield Armor:</span> {this.renderValue(unit.shieldarmor, baseUnit.shieldarmor)}</>}
                    </li>}
                    {!!unit.energy && <li class="units-energy"><span class="unbold">Energy:</span> {this.renderValue(unit.energy, baseUnit.energy)}</li>}
                    <li>{this.renderMovement(unit.movementspeed, baseUnit.movementspeed, unit.movement, unit.targetable)}</li>
                    <li><span class="unbold">Vision:</span> {this.renderValue(unit.sightrange, baseUnit.sightrange)}</li>
                </ul>
                {Object.entries(unit.modes)
                    .filter(([id]) => !(modifiers.commander === 'nova' && modifiers.unit === 'nova' && modifiers.prestiges['Infiltration Specialist'] && id === 'assault-mode'))
                    .map(([id, mode]) => this.renderMode(mode, baseUnit.modes[id]!, baseUnit))}
                {this.renderSkills()}
                {this.renderNotes(unit.notes)}
                {this.renderUpgrades()}
                </UnitContent>
            </td>
        );
    }
}

if (typeof document !== "undefined") {
    preact.render(<Units />, document.getElementById("units")!);
}
