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
    entrypoints: ['./html/scripts/nav.ts', './html/scripts/tooltips.ts', './html/scripts/units.tsx'],
    outdir: './html/scripts',
    sourcemap: 'inline',
});
