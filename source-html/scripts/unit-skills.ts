import skillsJSON from "../../source-data/unitskills.json";
import type { UnitSkill } from "../../source-data/data-types";

export function skillKey(skill: UnitSkill): string {
    return 'skills/' + [skill.commander, skill.unit, skill.name, skill.mode ?? '', skill.prestige ?? '']
        .map(part => encodeURIComponent(part)).join('/');
}

export const unitSkills = new Map((skillsJSON as UnitSkill[]).map(skill => [skillKey(skill), skill]));

export function skillCooldown(skill: UnitSkill): string | null {
    if (!skill.cooldown) return null;
    // Initial cooldowns are kept in the tooltip; the row shows the repeat cooldown.
    const cooldown = skill.cooldown.match(/Cooldown:\s*([^\n]+)/i)?.[1] ?? skill.cooldown;
    const seconds = cooldown.match(/^(\d+(?:\.\d+)?)\s*(?:seconds?|s)(.*)$/s);
    if (!seconds) return '?';
    if (Number(seconds[1]) === 0) return null;
    return seconds[1]! + (seconds[2]?.trim() ? '*' : '');
}

export function skillCosts(skill: UnitSkill, race: string): { icon: string, label: string, value: string }[] {
    const costs = [];
    if (skill.energycost !== null && Number(skill.energycost) > 0) {
        costs.push({ icon: '/images/commanderdata/unitupgrades/iconenergy.png', label: 'Energy:', value: skill.energycost });
    }
    const cooldown = skillCooldown(skill);
    if (cooldown !== null) {
        costs.push({ icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: 'Cooldown (seconds):', value: cooldown });
    }
    return costs;
}

export function skillDetails(skill: UnitSkill): string[] {
    const details = [skill.description];
    // Ordinary costs are in the heading; retain initial and conditional timings here.
    if (skill.cooldown && !/^\d+(?:\.\d+)?\s*(?:seconds?|s)$/.test(skill.cooldown)) {
        details.push(/\bCool(?:down|up):/i.test(skill.cooldown) ? skill.cooldown : `Cooldown: ${skill.cooldown}`);
    }
    if (skill.requiresupgrade) details.push('Requires an upgrade.');
    if (skill.rankrequired !== null) details.push(`Requires rank ${skill.rankrequired}.`);
    if (skill.mode) details.push(`Mode: ${skill.mode}`);
    if (skill.prestige) details.push(`Prestige: ${skill.prestige}`);
    if (skill.requirements) details.push(skill.requirements);
    return details;
}
