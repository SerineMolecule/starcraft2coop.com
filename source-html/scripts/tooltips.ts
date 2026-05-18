import mutators from "../../source-data/mutators.json";

function token(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

const mutatorData = new Map(mutators.map(mutator => [token(mutator.mutatorname), mutator]));
let activeTooltipLink: HTMLAnchorElement | null = null;

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

function setTooltipPosition(link: HTMLAnchorElement): void {
    const tooltip = tooltipElement();
    const rect = link.getBoundingClientRect();
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

function showMutatorTooltip(link: HTMLAnchorElement): void {
    const slug = mutatorSlug(link);
    if (!slug) return;
    const mutator = mutatorData.get(slug);
    if (!mutator) return;

    const tooltip = tooltipElement();
    const name = document.createElement("b");
    name.textContent = mutator.mutatorname;
    tooltip.replaceChildren(name, document.createElement("br"), mutator.mutatordescription);
    tooltip.style.display = "block";
    tooltip.style.visibility = "hidden";
    tooltip.style.position = "fixed";
    tooltip.style.top = "0";
    tooltip.style.left = "0";
    tooltip.style.bottom = "auto";
    tooltip.style.right = "auto";
    activeTooltipLink = link;
    setTooltipPosition(link);
}

function hideTooltip(): void {
    activeTooltipLink = null;
    tooltipElement().style.display = "none";
}

function closestLink(target: EventTarget | null): HTMLAnchorElement | null {
    if (!(target instanceof Element)) return null;
    return target.closest<HTMLAnchorElement>("a[href]");
}

document.addEventListener("mouseover", event => {
    const link = closestLink(event.target);
    if (link) showMutatorTooltip(link);
});

document.addEventListener("mouseout", event => {
    if (!activeTooltipLink) return;
    if (event.relatedTarget && activeTooltipLink.contains(event.relatedTarget as Node)) return;
    hideTooltip();
});

document.addEventListener("focusin", event => {
    const link = closestLink(event.target);
    if (link) showMutatorTooltip(link);
});

document.addEventListener("focusout", event => {
    if (!activeTooltipLink) return;
    if (event.relatedTarget && activeTooltipLink.contains(event.relatedTarget as Node)) return;
    hideTooltip();
});
