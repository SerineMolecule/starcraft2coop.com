import type { MountSearchResultsFunction } from './search-results';

type HasSearch = { mountSearchResults?: MountSearchResultsFunction };
const searchButton = document.getElementById('site-search-button') as HTMLButtonElement | null;
let overlay: HTMLElement | null = null;
let input: HTMLInputElement | null = null;
let results: HTMLElement | null = null;
let rendererLoaded = false;
let rendererLoading: Promise<void> | null = null;

function ensureOverlay(): { overlay: HTMLElement, input: HTMLInputElement, results: HTMLElement } {
    if (overlay && input && results) {
        return { overlay, input, results };
    }

    overlay = document.createElement('div');
    overlay.id = 'site-search-overlay';
    overlay.hidden = true;
    overlay.innerHTML = `
        <div class="site-search-dialog" role="dialog" aria-modal="true" aria-label="Site search">
            <form class="site-search-form" action="/search">
                <input id="site-search-input" type="search" autocomplete="off" spellcheck="false" placeholder="Search StarCraft II Co-op" aria-label="Search StarCraft II Co-op">
            </form>
            <div id="site-search-results" class="site-search-results" aria-live="polite"></div>
        </div>
    `;
    document.body.append(overlay);

    input = overlay.querySelector<HTMLInputElement>('#site-search-input')!;
    results = overlay.querySelector<HTMLElement>('#site-search-results')!;

    overlay.addEventListener('mousedown', event => {
        if (event.button === 0 && event.target === overlay) closeSearch();
    });
    overlay.querySelector<HTMLFormElement>('.site-search-form')!.addEventListener('submit', event => {
        event.preventDefault();
    });

    return { overlay, input, results };
}

function loadRenderer(): Promise<void> {
    if (rendererLoaded) return Promise.resolve();
    if (rendererLoading) return rendererLoading;

    const elements = ensureOverlay();
    elements.results.innerHTML = '<p class="site-search-message">Loading search...</p>';
    rendererLoading = new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = '/scripts/search-results.js';
        script.async = true;
        script.onload = () => {
            if (!(window as HasSearch).mountSearchResults) {
                reject(new Error('Search renderer did not initialize.'));
                return;
            }
            (window as HasSearch).mountSearchResults!({
                input: elements.input,
                container: elements.results,
                close: closeSearch,
            });
            rendererLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Search renderer failed to load.'));
        document.head.append(script);
    }).catch(error => {
        console.error(error);
        rendererLoading = null;
        elements.results.innerHTML = '<p class="site-search-message">Search failed to load.</p>';
    });
    return rendererLoading;
}

function mountRendererIfAlreadyLoaded(): void {
    if (!rendererLoaded || !(window as HasSearch).mountSearchResults) return;
    const elements = ensureOverlay();
    (window as HasSearch).mountSearchResults!({
        input: elements.input,
        container: elements.results,
        close: closeSearch,
    });
}

function openSearch(): void {
    const elements = ensureOverlay();
    elements.overlay.hidden = false;
    searchButton?.setAttribute('aria-expanded', 'true');
    window.setTimeout(() => {
        elements.input.focus();
        elements.input.select();
    });
    mountRendererIfAlreadyLoaded();
    void loadRenderer();
}

function closeSearch(): void {
    if (!overlay) return;
    overlay.hidden = true;
    searchButton?.setAttribute('aria-expanded', 'false');
}

function isSearchOpen(): boolean {
    return !!overlay && !overlay.hidden;
}

const shortcutModifier = isMac() ? 'Cmd' : 'Ctrl';
searchButton?.setAttribute('aria-expanded', 'false');
searchButton?.setAttribute('aria-label', `Search (${shortcutModifier}+K)`);
searchButton?.querySelector<HTMLElement>('.search-shortcut')?.insertAdjacentHTML('afterbegin', `<kbd>${shortcutModifier}</kbd>+<kbd>K</kbd>`);
searchButton?.addEventListener('click', openSearch);

document.addEventListener('keydown', event => {
    const noModifiers = !event.altKey && !event.shiftKey && !event.metaKey && !event.ctrlKey;
    const metaOrCtrl = !event.altKey && !event.shiftKey && event.metaKey !== event.ctrlKey;

    if (event.key.toLowerCase() === 'k' && metaOrCtrl) {
        event.preventDefault();
        openSearch();
        return;
    }
    if (event.key === 'Escape' && noModifiers && isSearchOpen()) {
        event.preventDefault();
        closeSearch();
    }
});

function isMac(): boolean {
    const platform = (navigator as any).userAgentData?.platform || navigator.platform;
    return /mac|iphone|ipad|ipod/i.test(platform);
}
