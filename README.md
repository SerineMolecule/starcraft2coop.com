# starcraft2coop.com

Here is the new [starcraft2coop.com](https://starcraft2coop.com)!

Written by Aommaster, hosted by Serine. Accepting community contributions now!

## License

[CC-BY-SA-NC 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Ads are NOT allowed

## Development environment setup

For certain aspects of development, you'll need to have Bun and Composer installed and set up with `bun install` and `composer install`.

If you edit the data files in `/data`, you'll need to run `./data/build` to rebuild them into `/public_html/data`. If you want to change the format of the data files, you'll need to update the types in `/data/data-types.ts` and run `./data/schemas/build` to build them.

### Docker

Read [Docker.md](./Docker.md) for instructions on how to set up a local development environment using Docker.

### Locally installed Apache, PHP, and MySQL/MariaDB

(TODO)
