import mutators from "../../source-data/mutators.json";
import playerUpgrades from "../../source-data/playerupgrades.json";

function token(name: string): string {
    if (name === "Dom. Trooper") return 'dominiontrooper';
    if (name === "Dom. Assault Trooper") return 'dominionassaulttrooper';
    if (name === "Dom. Flame Trooper") return 'dominionflametrooper';
    if (name === "Dom. Rocket Trooper") return 'dominionrockettrooper';
    if (name === "Tychus Findlay") return 'tychus';
    if (name === "James Sirius Sykes") return 'sirius';
    if (name === "Miles Blaze Lewis") return 'blaze';
    if (name === "Rob Cannonball Boswell") return 'cannonball';
    if (name === "Lt Layna Nikara") return 'nikara';
    if (name === "Kev Rattlesnake West") return 'rattlesnake';

    return name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const mutatorData = new Map(mutators.map(mutator => [token(mutator.mutatorname), mutator]));
const upgradeData = new Map(playerUpgrades.map(upgrade => [`upgrades/${token(upgrade.commander)}/${upgrade.icon}`, upgrade]));
let activeTooltipTarget: HTMLElement | null = null;

function tooltipElement(): HTMLElement {
    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.id = "tooltip";
        document.body.append(tooltip);
    }
    return tooltip;
}

function mutatorSlug(link: HTMLAnchorElement): string | null {
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return null;
    const match = url.pathname.match(/^\/mutators\/([a-z0-9]+)\/?$/);
    return match?.[1] ?? null;
}

function setTooltipPosition(target: HTMLElement): void {
    const tooltip = tooltipElement();
    const rect = target.getBoundingClientRect();
    const gap = 8;
    const viewportWidth = document.documentElement.clientWidth;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    if (viewportWidth - tooltipWidth - gap < rect.left) {
        tooltip.style.left = "auto";
        tooltip.style.right = `${gap}px`;
    } else {
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.right = "auto";
    }

    if (rect.top < 200) {
        tooltip.style.top = `${rect.bottom + gap}px`;
        tooltip.style.bottom = "auto";
    } else {
        tooltip.style.top = "auto";
        tooltip.style.bottom = `${window.innerHeight - rect.top + gap}px`;
    }
    tooltip.style.visibility = "visible";
}

function prepareTooltip(): HTMLElement {
    const tooltip = tooltipElement();
    tooltip.style.display = "block";
    tooltip.style.visibility = "hidden";
    tooltip.style.position = "fixed";
    tooltip.style.top = "0";
    tooltip.style.left = "0";
    tooltip.style.bottom = "auto";
    tooltip.style.right = "auto";
    tooltip.style.width = "max-content";
    tooltip.style.boxSizing = "border-box";
    tooltip.style.maxWidth = `${Math.min(400, document.documentElement.clientWidth)}px`;
    return tooltip;
}

function showMutatorTooltip(link: HTMLAnchorElement): void {
    const slug = mutatorSlug(link);
    if (!slug) return;
    const mutator = mutatorData.get(slug);
    if (!mutator) return;

    const tooltip = prepareTooltip();
    const name = document.createElement("b");
    name.textContent = mutator.mutatorname;
    tooltip.replaceChildren(name, document.createElement("br"), mutator.mutatordescription);
    activeTooltipTarget = link;
    setTooltipPosition(link);
}

function showUpgradeTooltip(target: HTMLElement): void {
    const key = target.dataset.tooltip;
    if (!key) return;
    const upgrade = upgradeData.get(key);
    if (!upgrade) return;

    const tooltip = prepareTooltip();
    const icon = document.createElement("img");
    const dir = token(upgrade.commander) !== 'tychus' && token(upgrade.unit) === token(upgrade.commander) ? "hero" : "unitupgrades";
    icon.src = `/images/commanderdata/${dir}/${token(upgrade.commander)}/${upgrade.icon}.png`;
    icon.alt = "";
    icon.width = 50;
    icon.height = 50;
    icon.style.float = "left";
    const text = document.createElement("div");
    text.style.marginLeft = "55px";
    const name = document.createElement("b");
    name.textContent = upgrade.name;
    text.replaceChildren(name, document.createElement("br"), upgrade.effect);
    tooltip.replaceChildren(icon, text);
    activeTooltipTarget = target;
    setTooltipPosition(target);
}

function hideTooltip(): void {
    activeTooltipTarget = null;
    tooltipElement().style.display = "none";
}

function closestTooltipTarget(target: EventTarget | null): HTMLElement | null {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLElement>("[data-tooltip], a[href]");
}

function showTooltip(target: HTMLElement): void {
    if (target.dataset.tooltip) {
        showUpgradeTooltip(target);
    } else if (target instanceof HTMLAnchorElement) {
        showMutatorTooltip(target);
    }
}

document.addEventListener("mouseover", event => {
    const target = closestTooltipTarget(event.target);
    if (target) showTooltip(target);
});

document.addEventListener("mouseout", event => {
    if (!activeTooltipTarget) return;
    if (event.relatedTarget && activeTooltipTarget.contains(event.relatedTarget as Node)) return;
    hideTooltip();
});

document.addEventListener("focusin", event => {
    const target = closestTooltipTarget(event.target);
    if (target) showTooltip(target);
});

document.addEventListener("focusout", event => {
    if (!activeTooltipTarget) return;
    if (event.relatedTarget && activeTooltipTarget.contains(event.relatedTarget as Node)) return;
    hideTooltip();
});
