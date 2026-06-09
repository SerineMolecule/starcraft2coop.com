#!/usr/bin/env bun
import { $, Glob } from "bun";

$.cwd(import.meta.dir);

const scanner = new Glob('!{files,images,.dh-diag}');
for await (const file of scanner.scan({cwd: "html", dot: true, onlyFiles: false})) {
    // console.log(file);
    await $`rm -rf html/${file}`;
}

await $`cp -r source-html/. html/`;

for (const pattern of ['**/*.test.{ts,tsx,js,jsx}', '**/*.spec.{ts,tsx,js,jsx}']) {
    const testScanner = new Glob(pattern);
    for await (const file of testScanner.scan({cwd: "html", onlyFiles: true})) {
        await $`rm -f html/${file}`;
    }
}

await $`./source-data/build.ts`;
await $`./source-data/build-mutators.ts`;

await Bun.build({
    entrypoints: [
        './html/scripts/nav.ts',
        './html/scripts/search.ts',
        './html/scripts/search-results.tsx',
        './html/scripts/tooltips.ts',
        './html/scripts/units.tsx',
    ],
    outdir: './html/scripts',
    format: 'iife',
    sourcemap: 'inline',
});

const assetPattern = /\/(?!\/)[^"'`<>\s?#)]+\.(?:js|css)/g;

async function getAssetHashes() {
    const hashes = new Map<string, string>();
    const assetScanner = new Glob('**/*.{js,css}');
    for await (const file of assetScanner.scan({cwd: "html", onlyFiles: true})) {
        const contents = await Bun.file(`html/${file}`).arrayBuffer();
        const hash = new Bun.CryptoHasher('sha256').update(contents).digest('hex').slice(0, 6);
        hashes.set(`/${file}`, `/${file}?v=` + hash);
    }
    return hashes;
}

function addCachebusters(contents: string, assetHashes: Map<string, string>) {
    return contents.replace(assetPattern, pathname => assetHashes.get(pathname) || pathname);
}

async function cachebustFiles(pattern: string, assetHashes: Map<string, string>) {
    const scanner = new Glob(pattern);
    for await (const file of scanner.scan({cwd: "html", onlyFiles: true})) {
        const path = `html/${file}`;
        const contents = await Bun.file(path).text();
        const cachebusted = addCachebusters(contents, assetHashes);
        if (cachebusted !== contents) {
            await Bun.write(path, cachebusted);
        }
    }
}

async function writeCachebusterManifest(assetHashes: Map<string, string>) {
    const cachebusters = Object.fromEntries([...assetHashes.entries()].sort());
    await Bun.write('html/data/cachebusters.json', `${JSON.stringify(cachebusters, null, 4)}\n`);
}

let assetHashes = await getAssetHashes();
await cachebustFiles('**/*.{js,css}', assetHashes);

assetHashes = await getAssetHashes();
await writeCachebusterManifest(assetHashes);
await cachebustFiles('**/*.{php,html}', assetHashes);
