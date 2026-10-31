import type { PlayerUpgrade } from '../../source-data/data-types';

/** Costs are base purchase values; free unlocks and instant purchases omit inapplicable fields. */
export function upgradeCosts(upgrade: Pick<PlayerUpgrade, 'cost' | 'researchTime'>, race: string) {
    const costs: { icon: string; label: string; value: number }[] = [];
    if (upgrade.cost?.minerals) costs.push({ icon: '/images/commanderdata/unitupgrades/iconmineral.png', label: 'Minerals:', value: upgrade.cost.minerals });
    if (upgrade.cost?.gas) costs.push({ icon: `/images/commanderdata/unitupgrades/icongas_${race}.png`, label: 'Gas:', value: upgrade.cost.gas });
    if (upgrade.cost?.supply) costs.push({ icon: `/images/commanderdata/unitupgrades/iconsupply_${race}.png`, label: 'Supply:', value: upgrade.cost.supply });
    if (upgrade.researchTime) costs.push({ icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: 'Research time:', value: upgrade.researchTime });
    return costs;
}
