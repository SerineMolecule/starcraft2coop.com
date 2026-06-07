/** @jsxImportSource preact */
import * as preact from 'preact';
import Fuse from 'fuse.js';
import type { SearchDocument, SearchIndexData } from '../../source-data/data-types';
import { createSearchIndex, searchDocuments } from './search-core';

const MAX_RESULTS = 10;

const TYPE_LABELS: Record<SearchDocument['type'], string> = {
    commander: 'Commander',
    mutator: 'Mutator',
    mission: 'Mission',
    weeklymutation: 'Weekly',
    upgrade: 'Upgrade',
    talent: 'Talent',
    prestige: 'Prestige',
    playerunit: 'Unit',
    amonunit: 'Amon Unit',
};

function resolveSearchPath(document: SearchDocument): string {
    const path = document.path;
    if (/^(commanders|mutators|missions|units)\//.test(path)) {
        return `/${path}`;
    }
    if (path.startsWith('weeklymutations/')) {
        return '/resources/weeklymutations';
    }
    if (path.startsWith('upgrades/') || path.startsWith('talents/')) {
        return document.commander ? `/units/#${token(document.commander)}/${unitTokenFromSubtitle(document.subtitle)}` : '/units';
    }
    if (path.startsWith('prestiges/')) {
        return document.commander ? `/commanders/${token(document.commander)}#prestiges` : '/';
    }
    return `/${path}`;
}

function token(text: string): string {
    if (text === 'Dom. Trooper') return 'dominiontrooper';
    if (text === 'Dom. Assault Trooper') return 'dominionassaulttrooper';
    if (text === 'Dom. Flame Trooper') return 'dominionflametrooper';
    if (text === 'Dom. Rocket Trooper') return 'dominionrockettrooper';
    if (text === 'Tychus Findlay') return 'tychus';
    if (text === 'James Sirius Sykes') return 'sirius';
    if (text === 'Miles Blaze Lewis') return 'blaze';
    if (text === 'Rob Cannonball Boswell') return 'cannonball';
    if (text === 'Lt Layna Nikara') return 'nikara';
    if (text === 'Kev Rattlesnake West') return 'rattlesnake';

    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function unitTokenFromSubtitle(subtitle = ''): string {
    const words = subtitle.split(' ');
    if (words.length < 2) return '';
    return token(words.slice(1, -1).join(' '));
}

class SearchResults extends preact.Component<{
    input: HTMLInputElement;
    close: () => void;
}> {
    override state: {
        status: 'loading' | 'ready' | 'error';
        query: string;
        resultsQuery: string;
        results: SearchDocument[];
        searchPending: undefined | number;
        activeIndex: number;
        error?: string;
        fuse: Fuse<SearchDocument> | null;
    } = {
        status: 'loading',
        query: this.props.input.value,
        resultsQuery: '',
        results: [],
        searchPending: undefined,
        activeIndex: 0,
        fuse: null,
    };

    override componentDidMount(): void {
        this.props.input.addEventListener('input', this.onInput);
        this.props.input.addEventListener('keydown', this.onKeyDown);
        void this.loadSearchIndex();
    }

    override componentWillUnmount(): void {
        this.props.input.removeEventListener('input', this.onInput);
        this.props.input.removeEventListener('keydown', this.onKeyDown);
        clearTimeout(this.state.searchPending);
    }

    async loadSearchIndex(): Promise<void> {
        try {
            const response = await fetch('/data/search-index.json');
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json() as SearchIndexData;
            const fuse = createSearchIndex(data);
            this.setState({ status: 'ready', fuse });
            this.scheduleSearch(this.props.input.value, fuse);
        } catch (error) {
            this.setState({
                status: 'error',
                error: error instanceof Error ? error.message : String(error),
            });
        }
    }

    onInput = (): void => {
        this.scheduleSearch(this.props.input.value);
    };

    onKeyDown = (event: KeyboardEvent): void => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

        const results = this.state.results;
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            this.setState({ activeIndex: results.length ? (this.state.activeIndex + 1) % results.length : 0 });
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            this.setState({ activeIndex: results.length ? (this.state.activeIndex + results.length - 1) % results.length : 0 });
        } else if (event.key === 'Enter' && results.length) {
            event.preventDefault();
            window.location.href = resolveSearchPath(results[this.state.activeIndex]!);
            this.props.close();
        }
    };

    scheduleSearch(query: string, fuse = this.state.fuse): void {
        clearTimeout(this.state.searchPending);

        if (!query.trim() || !fuse) {
            this.setState({
                query,
                activeIndex: 0,
                results: [],
                resultsQuery: query,
                searchPending: undefined,
            });
            return;
        }

        const searchPending = setTimeout(() => {
            this.setState({
                results: searchDocuments(fuse, query, MAX_RESULTS),
                resultsQuery: query,
                searchPending: undefined,
                activeIndex: 0,
            });
        }, 0);
        this.setState({ query, activeIndex: 0, searchPending });
    }

    override render(): preact.ComponentChildren {
        if (this.state.status === 'loading') {
            return <p class="site-search-message">Loading search...</p>;
        }
        if (this.state.status === 'error') {
            return <p class="site-search-message">Search failed to load: {this.state.error}</p>;
        }

        const query = this.state.query;
        if (!query.trim()) {
            return (
                <div class="site-search-message">
                    <p>Type to search commanders, units, missions, mutators, and weekly mutations.</p>
                    <p class="site-search-key-guides">
                        <span><kbd>↑</kbd><kbd>↓</kbd> Select</span>
                        <span><kbd>Enter</kbd> Open</span>
                        <span><kbd>Esc</kbd> Close</span>
                    </p>
                </div>
            );
        }

        const results = this.state.results;
        if (!results.length) {
            return <p class="site-search-message">No results found.</p>;
        }

        return (
            <ul class="site-search-list" role="listbox" aria-label="Search results">
                {results.map((document, index) => (
                    <li class="site-search-result" role="option" aria-selected={index === this.state.activeIndex}>
                        <a
                            href={resolveSearchPath(document)}
                            aria-selected={index === this.state.activeIndex}
                            onMouseEnter={() => this.setState({ activeIndex: index })}
                            onClick={this.props.close}
                        >
                            <span class="site-search-title">{document.title}</span>
                            <span class="site-search-type">{TYPE_LABELS[document.type]}</span>
                            {document.subtitle && <span class="site-search-subtitle">{document.subtitle}</span>}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }
}

function mountSearchResults(options: { input: HTMLInputElement, container: HTMLElement, close: () => void }): void {
    preact.render(<SearchResults input={options.input} close={options.close} />, options.container);
}

export type MountSearchResultsFunction = typeof mountSearchResults;

(window as any).mountSearchResults = mountSearchResults;
