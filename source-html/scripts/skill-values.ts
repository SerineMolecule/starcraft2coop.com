import type { SkillModification, UnitSkill } from "../../source-data/data-types";

export interface SkillTextPart { text: string; modified: boolean }
export interface ResolvedSkill extends UnitSkill {
    descriptionParts?: SkillTextPart[];
    modifiedFields?: string[];
}

function customSkillValue(skill: UnitSkill, name: string): string | number {
    if (!skill.values || !Object.hasOwn(skill.values, name)) {
        throw new Error(`Unknown skill value ${skill.commander}/${skill.unit}/${skill.name}.values.${name}.`);
    }
    return skill.values[name]!;
}

export function skillModifierValue(skill: UnitSkill, modifier: SkillModification['modifier']): string | number | null | undefined {
    if (modifier.startsWith('values.')) return customSkillValue(skill, modifier.slice(7));
    return skill[modifier as Exclude<SkillModification['modifier'], `values.${string}`>];
}

/** Substitute once, after modifiers. Replacement text is never interpreted as another template. */
export function skillDescription(skill: UnitSkill): string {
    return skillDescriptionParts(skill, skill).map(part => part.text).join('');
}

/** Keep text separate from markup, including user-visible replacement strings. */
export function skillDescriptionParts(skill: UnitSkill, base: UnitSkill): SkillTextPart[] {
    const parts: SkillTextPart[] = [];
    let offset = 0;
    // A replacement may only add a clause. Preserve the unchanged prefix/suffix
    // instead of highlighting the entire template, and compare values separately.
    let changedStart = 0;
    while (changedStart < skill.description.length && skill.description[changedStart] === base.description[changedStart]) changedStart++;
    let changedEnd = skill.description.length;
    let baseEnd = base.description.length;
    while (changedEnd > changedStart && baseEnd > changedStart && skill.description[changedEnd - 1] === base.description[baseEnd - 1]) {
        changedEnd--;
        baseEnd--;
    }
    const literal = (start: number, end: number) => {
        for (const [from, to, modified] of [
            [start, Math.min(end, changedStart), false],
            [Math.max(start, changedStart), Math.min(end, changedEnd), true],
            [Math.max(start, changedEnd), end, false],
        ] as const) {
            if (to > from) parts.push({ text: skill.description.slice(from, to), modified });
        }
    };
    for (const match of skill.description.matchAll(/\{([^{}]+)\}/g)) {
        literal(offset, match.index!);
        const name = match[1]!;
        const value = customSkillValue(skill, name);
        parts.push({ text: typeof value === 'number' ? String(Number(value.toFixed(2))) : value,
            modified: (match.index! < changedEnd && match.index! + match[0].length > changedStart) || value !== base.values?.[name] });
        offset = match.index! + match[0].length;
    }
    literal(offset, skill.description.length);
    // Empty optional clauses must not leave blank paragraphs at either end.
    const nonempty: SkillTextPart[] = [];
    for (const part of parts) {
        if (!part.text) continue;
        const previous = nonempty[nonempty.length - 1];
        if (previous && previous.modified === part.modified) previous.text += part.text;
        else nonempty.push(part);
    }
    for (const part of nonempty) part.text = part.text.replace(/\n{3,}/g, '\n\n');
    while (nonempty.length && !nonempty[nonempty.length - 1]!.text.trim()) nonempty.pop();
    if (nonempty.length) nonempty[nonempty.length - 1]!.text = nonempty[nonempty.length - 1]!.text.trimEnd();
    return nonempty;
}
