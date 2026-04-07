# starcraft2coop.com

Here is the new [starcraft2coop.com](https://starcraft2coop.com)!

Written by Aommaster, hosted by Serine. Accepting community contributions now!

## License

[CC-BY-SA-NC 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Ads are NOT allowed

## Development environment setup

You'll need Bun installed to build the data files, PHP installed to build the static files, and Composer installed to autoformat the PHP files.

If you edit the data files in `/source-data`, you'll need to run `make data` to rebuild them into `/html/data`. If you want to change the format of the data files, you'll need to update the types in `/source-data/data-types.ts` and run `make data` to build them.

Running `make static` will rebuild the static files.

Running `make` will rebuild everything.

### Docker

Read [Docker.md](./Docker.md) for instructions on how to set up a local development environment using Docker.

### Locally installed Apache, PHP, and MySQL/MariaDB

(TODO)
