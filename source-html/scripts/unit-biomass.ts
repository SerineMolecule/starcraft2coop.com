interface BiomassModifiers {
    prestiges: Record<string, boolean>;
    upgradeLevels?: { biomass?: number };
}

export function biomassLimit({ prestiges }: BiomassModifiers): number {
    return prestiges['The Limitless'] ? 200 : prestiges['Essence Hoarder'] ? 125 : 100;
}

/** Bonus relative to 100 ordinary biomass. P1 raises capacity; P3 halves each stack's effect. */
export function biomassFraction(modifiers: BiomassModifiers): number {
    const biomass = Math.max(0, Math.min(biomassLimit(modifiers), modifiers.upgradeLevels?.biomass ?? 0));
    return biomass / (modifiers.prestiges['The Limitless'] ? 200 : 100);
}
