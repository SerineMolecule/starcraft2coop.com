#!/usr/bin/env bun
import { $, Glob } from "bun";

$.cwd(import.meta.dir);

const scanner = new Glob('!{files,images,.dh-diag}');
for await (const file of scanner.scan({cwd: "html", dot: true, onlyFiles: false})) {
    // console.log(file);
    await $`rm -rf html/${file}`;
}

await $`cp -r source-html/. html/`;

await $`./source-data/build.ts`;
await $`./source-data/build-mutators.ts`;

await Bun.build({
    entrypoints: ['./html/scripts/nav.ts'],
    outdir: './html/scripts',
});
