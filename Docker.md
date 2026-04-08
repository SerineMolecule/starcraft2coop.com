# Local Development with Docker

## Prerequisites

- Use the defaults provided in [`docker-compose.yml`](./docker-compose.yml) or update it as needed.
- Make sure that `config.example.php` is copied to `config.php` and updated with the same credentials.

## Build

When in the root directory of the project, needed the first time or when making changes to the Dockerfile:

```shell
docker compose build
```

## Run

Before the first run or when re-creating the DB environment, delete the top level `dbdata` directory.

```shell
docker compose up
```

Opening your browser to http://localhost:8080 should show the application.

### Build + Run

```shell
docker compose up --build
```

## DB connection with external tools

The DB is accessible via `localhost`, on port 3306. The 'db' name is for containers to connect.

## Generating static pages

```shell
docker exec -w /var/www sc2coop-web php generate.php
```

## Running PHP Code Sniffer

(Replace `${pwd}` with `$(pwd)` if using bash.)

### Install

```shell
docker run --rm -v ${pwd}:/app composer:2.7.1 install --prefer-dist
```

### Check

```shell
docker run --rm -v ${pwd}:/app composer:2.7.1 composer run-script ci
```

### Check and Fix

```shell
docker run --rm -v ${pwd}:/app composer:2.7.1 composer run-script fix
```

## Generating schemas and JSON data files

If you edit the data files in `/source-data`, then you will need bun to run the build script.

### Bun install

```shell
docker run --rm -v ${pwd}:/usr/src/app -w /usr/src/app oven/bun:1 bun install
```

### Generate schemas and JSON data files

```shell
docker run --rm -v ${pwd}:/usr/src/app -w /usr/src/app oven/bun:1 bun source-data/build
```

### Validate source-data and schemas

```shell
docker run --rm -v ${pwd}:/usr/src/app -w /usr/src/app oven/bun:1 bun source-data/validate
```
