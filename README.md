# starcraft2coop.com

Here is the new [starcraft2coop.com](https://starcraft2coop.com)!

Maintained and hosted by Serine, originally written by Aommaster, with contributions from Aneroid. Accepting community contributions now!

## License

[CC-BY-SA-NC 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Ads are NOT allowed

## Development environment setup

You'll need Bun installed to build the data files, PHP installed to build the static files, and Composer installed to autoformat the PHP files.

`html/` contains generated files and should not be edited directly - instead, edit `source-html/` and then run `make` to update `html/`. The exceptions are `html/images/` and `html/files/`, which were too big to store in `source-html/`.

If you edit the data files in `/source-data`, you'll need to run `make` to rebuild them into `/html/data`. If you want to change the format of the data files, you'll need to update the types in `/source-data/data-types.ts` and run `make` to build them.

In general, `make` will rebuild and test everything. You can also use `make html` to rebuild without testing, and `make test` to test without rebuilding.

To start a development server, use `make dev`. This rebuilds `html/` and starts a development server at `http://127.0.0.1:8000`. PHP is required but Apache is not. You can override the address with `HOST` and `PORT`, for example: `make dev PORT=8080`.

### Docker

Read [Docker.md](docker/Docker.md) for instructions on how to set up a local development environment using Docker.

### Locally installed Apache and PHP

(TODO)
