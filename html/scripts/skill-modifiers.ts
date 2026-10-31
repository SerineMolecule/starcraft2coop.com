import talentsJSON from "../../source-data/playertalents.json";
import upgradesJSON from "../../source-data/playerupgrades.json";
import type { PlayerTalent, PlayerSkillTalent, PlayerUpgrade, SkillModification, UnitSkill } from "../../source-data/data-types";
import { skillDescriptionParts, skillModifierValue } from "./skill-values";
import type { ResolvedSkill } from "./skill-values";

const skillTalents = (talentsJSON as PlayerTalent[]).filter((talent): talent is PlayerSkillTalent => talent.target === 'skill');

export function applySkillModification(skill: UnitSkill, effect: SkillModification): void {
    // Read even for set/replace, so misspelled custom keys cannot create unused values.
    const value = skillModifierValue(skill, effect.modifier);
    let next: string | number;
    if (effect.operation === 'replace' || effect.operation === 'set') {
        next = effect.value;
    } else {
        if (typeof value !== 'number') {
            throw new Error(`Cannot ${effect.operation} ${skill.commander}/${skill.unit}/${skill.name}.${effect.modifier}: expected a number, got ${JSON.stringify(value)}.`);
        }
        next = effect.operation === 'add' ? value + effect.value : value * effect.value;
    }
    if (effect.modifier.startsWith('values.')) {
        skill.values![effect.modifier.slice(7)] = next;
    } else {
        Object.assign(skill, { [effect.modifier]: next });
    }
}

export function resolveSkill(skill: UnitSkill, modifiers: {
    masteries: Record<string, number>, prestiges: Record<string, boolean>,
    upgrades?: Record<string, boolean>,
    upgradeLevels?: { artifacts?: number },
}): ResolvedSkill {
    const resolved: ResolvedSkill = { ...skill };
    if (skill.values) resolved.values = { ...skill.values };
    if (skill.commander === 'Zeratul' && skill.unit === 'Zeratul') {
        const herald = modifiers.prestiges['Herald of the Void'];
        const artifacts = Math.max(0, Math.min(herald ? 2 : Infinity, modifiers.upgradeLevels?.artifacts ?? 0));
        if (skill.name === 'Shadow Cleave') {
            applySkillModification(resolved, { modifier: 'values.damage', operation: 'add', value: 10 * artifacts });
            if (herald) applySkillModification(resolved, { modifier: 'cooldown', operation: 'add', value: -5 * artifacts });
        } else if (skill.name === 'Blink') {
            applySkillModification(resolved, { modifier: 'charges', operation: 'add', value: artifacts });
        }
    }
    for (const phase of ['preupgrade', 'mastery', 'prestige', 'upgrade', 'post']) {
        if (phase === 'preupgrade' || phase === 'upgrade') {
            for (const upgrade of upgradesJSON as PlayerUpgrade[]) {
                if (upgrade.upgradetype !== phase || upgrade.commander !== skill.commander || upgrade.unit !== skill.unit || !modifiers.upgrades?.[upgrade.name]) continue;
                for (const effect of upgrade.skillModifiers ?? []) {
                    if (effect.skill !== skill.name || (effect.skillMode !== undefined && effect.skillMode !== skill.mode)) continue;
                    applySkillModification(resolved, effect);
                }
            }
            continue;
        }
        for (const talent of skillTalents) {
            if (talent.talenttype !== phase || talent.commander !== skill.commander || talent.unit !== skill.unit || talent.skill !== skill.name) continue;
            if (talent.skillMode !== undefined && talent.skillMode !== skill.mode) continue;
            const level = phase === 'mastery' ? modifiers.masteries[talent.name] : undefined;
            if (phase === 'mastery' ? !level : !modifiers.prestiges[talent.name]) continue;
            if (level !== undefined && talent.operation === 'add') {
                applySkillModification(resolved, { ...talent, value: talent.value * level });
            } else if (level !== undefined && talent.operation === 'multiply' && talent.operationtype) {
                const sign = talent.operationtype === 'decrease' ? -1 : 1;
                applySkillModification(resolved, { ...talent, value: 1 + sign * talent.value * level });
            } else {
                applySkillModification(resolved, talent);
            }
        }
    }
    resolved.descriptionParts = skillDescriptionParts(resolved, skill);
    resolved.description = resolved.descriptionParts.map(part => part.text).join('');
    resolved.modifiedFields = ['cooldown', 'initialCooldown', 'energycost', 'charges', 'requirements']
        .filter(field => resolved[field as keyof UnitSkill] !== skill[field as keyof UnitSkill]);
    return resolved;
}

