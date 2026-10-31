import { expect, test } from 'bun:test';
import type { SearchIndexData } from '../../source-data/data-types';
import { createSearchIndex, searchDocuments } from './search-core';

const searchIndexData: SearchIndexData = await Bun.file('html/data/search-index.json').json();
const searchIndex = createSearchIndex(searchIndexData);

test('Punctuated unit names retain their established search links', () => {
    for (const [name, path] of [
        ['Rob "Cannonball" Boswell', 'units/#tychus/cannonball'],
        ['James "Sirius" Sykes', 'units/#tychus/sirius'],
        ["Xel'Naga Ambusher", 'units/#zeratul/xelnagaambusher'],
        ["Jackson's Revenge", 'units/#terran/jacksonsrevenge'],
    ]) {
        const results = searchDocuments(searchIndex, name!, 20);
        expect(results.some(result => result.title === name && result.path === path)).toBe(true);
    }
});

test.each(['a', 'ar', 'art'])('%s ranks Artanis first', query => {
    const [firstResult] = searchDocuments(searchIndex, query, 10);
    expect(firstResult!.type).toBe('commander');
    expect(firstResult!.title).toBe('Artanis');
    expect(firstResult!.path).toBe('commanders/artanis');
});
