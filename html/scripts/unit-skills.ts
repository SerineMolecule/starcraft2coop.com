import skillsJSON from "../../source-data/unitskills.json";
import type { UnitSkill } from "../../source-data/data-types";
import { skillDescription } from "./skill-values";
import { skillDescriptionParts } from "./skill-values";
import type { ResolvedSkill } from "./skill-values";

export function skillKey(skill: UnitSkill): string {
    return 'skills/' + [skill.commander, skill.unit, skill.name, skill.mode ?? '', skill.prestige ?? '']
        .map(part => encodeURIComponent(part)).join('/');
}

export const unitSkills = new Map((skillsJSON as UnitSkill[]).map(skill => [skillKey(skill), skill]));
const skillValueFields = ['cooldown', 'initialCooldown', 'energycost', 'cost', 'buildTime', 'charges', 'description', 'requirements', 'values', 'descriptionParts', 'modifiedFields'] as const;

/** Carry the resolved field values to the separately bundled tooltip code. */
export function skillTooltipValues(base: ResolvedSkill, resolved: ResolvedSkill): string | undefined {
    const values = Object.fromEntries(skillValueFields.filter(field => JSON.stringify(base[field]) !== JSON.stringify(resolved[field])).map(field => [field, resolved[field]]));
    return Object.keys(values).length ? JSON.stringify(values) : undefined;
}

export function skillFromTooltip(key: string, values?: string): ResolvedSkill | undefined {
    const base = unitSkills.get(key);
    if (!base) return undefined;
    const ordinary = { ...base, description: skillDescription(base), descriptionParts: skillDescriptionParts(base, base), modifiedFields: [] };
    if (!values) return ordinary;
    const patch = JSON.parse(values);
    return { ...ordinary, ...Object.fromEntries(skillValueFields.filter(field => field in patch).map(field => [field, patch[field]])) };
}

export function skillVisible(skill: UnitSkill, prestiges: Record<string, boolean>, upgrades: Record<string, boolean> = {}): boolean {
    return (!skill.prestige || !!prestiges[skill.prestige]) &&
        !skill.excludedPrestiges?.some(prestige => prestiges[prestige]) &&
        (!skill.showWithUpgrade || !!upgrades[skill.showWithUpgrade]) &&
        (!skill.hideWithUpgrade || !upgrades[skill.hideWithUpgrade]);
}

export function skillCooldown(skill: UnitSkill): string | null {
    if (!skill.cooldown) return null;
    if (typeof skill.cooldown === 'number') return formatSkillNumber(skill.cooldown);
    // Initial cooldowns are kept in the tooltip; the row shows the repeat cooldown.
    const cooldown = skill.cooldown.match(/Cooldown:\s*([^\n]+)/i)?.[1] ?? skill.cooldown;
    const seconds = cooldown.match(/^(\d+(?:\.\d+)?)\s*(?:seconds?|s)(.*)$/s);
    if (!seconds) return '?';
    if (Number(seconds[1]) === 0) return null;
    return seconds[1]! + (seconds[2]?.trim() ? '*' : '');
}

function formatSkillNumber(value: number): string {
    return String(Number(value.toFixed(2)));
}

export function skillCosts(skill: UnitSkill, race: string): { field: 'energycost' | 'cooldown' | 'cost' | 'buildTime', icon: string, label: string, value: string }[] {
    const costs: ReturnType<typeof skillCosts> = [];
    for (const [resource, label, icon] of [
        ['minerals', 'Minerals:', 'iconmineral'], ['gas', 'Gas:', `icongas_${race}`], ['supply', 'Supply:', `iconsupply_${race}`],
    ] as const) {
        if (skill.cost?.[resource]) costs.push({ field: 'cost', icon: `/images/commanderdata/unitupgrades/${icon}.png`, label, value: formatSkillNumber(skill.cost[resource]!) });
    }
    if (skill.buildTime) costs.push({ field: 'buildTime', icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: 'Build time:', value: formatSkillNumber(skill.buildTime) });
    if (skill.energycost !== null && skill.energycost !== 0 && skill.energycost !== '') {
        costs.push({ field: 'energycost' as const, icon: '/images/commanderdata/unitupgrades/iconenergy.png', label: 'Energy:',
            value: typeof skill.energycost === 'number' ? formatSkillNumber(skill.energycost) : skill.energycost });
    }
    const cooldown = skillCooldown(skill);
    if (cooldown !== null) {
        costs.push({ field: 'cooldown' as const, icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: 'Cooldown (seconds):', value: cooldown });
    }
    return costs;
}

export function skillDetails(skill: UnitSkill): string[] {
    const details = [skill.description];
    // Ordinary costs are in the heading; retain initial and conditional timings here.
    if (skill.initialCooldown !== undefined) {
        const initial = typeof skill.initialCooldown === 'number' ? `${formatSkillNumber(skill.initialCooldown)} seconds` : skill.initialCooldown;
        const repeat = typeof skill.cooldown === 'number' ? `${formatSkillNumber(skill.cooldown)} seconds` : skill.cooldown;
        details.push(`Coolup: ${initial}${repeat !== null ? `\nCooldown: ${repeat}` : ''}`);
    } else if (typeof skill.cooldown === 'string' && skill.cooldown && !/^\d+(?:\.\d+)?\s*(?:seconds?|s)$/.test(skill.cooldown)) {
        details.push(/\bCool(?:down|up):/i.test(skill.cooldown) ? skill.cooldown : `Cooldown: ${skill.cooldown}`);
    }
    if (skill.requiresupgrade) details.push('Requires an upgrade.');
    if (skill.rankrequired !== null) details.push(`Requires rank ${skill.rankrequired}.`);
    if (skill.mode) details.push(`Mode: ${skill.mode}`);
    if (skill.prestige) details.push(`Prestige: ${skill.prestige}`);
    if (skill.excludedPrestiges?.length) details.push(`Unavailable with ${skill.excludedPrestiges.join(', ')}.`);
    if (skill.requirements) details.push(skill.requirements);
    return details;
}
