import Fuse from 'fuse.js';
import type { FuseResult } from 'fuse.js';
import type { SearchDocument, SearchIndexData } from '../../source-data/data-types';

const TYPE_PRIORITY: Record<SearchDocument['type'], number> = {
    commander: 0,
    playerunit: 1,
    prestige: 2,
    mission: 3,
    mutator: 3,
    amonunit: 4,
    upgrade: 5,
    talent: 5,
    weeklymutation: 6,
};

export function createSearchIndex(data: SearchIndexData): Fuse<SearchDocument> {
    const index = Fuse.parseIndex<SearchDocument>(data.index as Parameters<typeof Fuse.parseIndex<SearchDocument>>[0]);
    return new Fuse(data.documents, {
        keys: data.keys,
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 1,
        includeScore: true,
    }, index);
}

export function searchDocuments(fuse: Fuse<SearchDocument>, query: string, limit: number): SearchDocument[] {
    const normalizedQuery = token(query);
    if (!normalizedQuery) return [];

    return fuse.search(query)
        .sort((a, b) => compareResults(a, b, normalizedQuery))
        .slice(0, limit)
        .map(result => result.item);
}

function compareResults(a: FuseResult<SearchDocument>, b: FuseResult<SearchDocument>, normalizedQuery: string): number {
    return titleMatchRank(a.item, normalizedQuery) - titleMatchRank(b.item, normalizedQuery) ||
        TYPE_PRIORITY[a.item.type] - TYPE_PRIORITY[b.item.type] ||
        a.refIndex - b.refIndex ||
        (a.score || 0) - (b.score || 0);
}

function titleMatchRank(document: SearchDocument, normalizedQuery: string): number {
    const normalizedTitle = token(document.title);
    if (normalizedTitle.startsWith(normalizedQuery)) return 0;
    if (normalizedTitle.includes(normalizedQuery)) return 1;
    return 2;
}

function token(text: string): string {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '');
}
