import playerUpgrades from "../../source-data/playerupgrades.json";
import type { PlayerUpgrade } from "../../source-data/data-types";

type RankUpgrade = Pick<PlayerUpgrade, 'commander' | 'unit' | 'name' | 'icon' | 'effect' | 'cost' | 'researchTime'>;

/** Unit-specific keys prevent different Veterancy effects sharing one tooltip. */
export const rankUpgrades = new Map<string, RankUpgrade>();
const effects = new Map<string, Set<string>>();

for (const upgrade of playerUpgrades as PlayerUpgrade[]) {
    if (upgrade.commander !== 'Mengsk') continue;
    const rank = upgrade.rank ?? (/^[123]$/.test(upgrade.name) ? Number(upgrade.name) : null);
    if (rank === null) continue;
    const unit = upgrade.unit.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const key = `ranks/mengsk/${unit}/${rank}`;
    const rankEffects = effects.get(key) ?? new Set<string>();
    rankEffects.add(upgrade.effect);
    effects.set(key, rankEffects);
    const previous = rankUpgrades.get(key);
    rankUpgrades.set(key, {
        commander: upgrade.commander,
        unit: upgrade.unit,
        name: upgrade.rank ? `Rank ${rank}: ${upgrade.name}` : previous?.name ?? `Rank ${rank}`,
        icon: upgrade.rank ? upgrade.icon : previous?.icon ?? 'veterancy',
        effect: [...rankEffects].join('\n'),
    });
}
