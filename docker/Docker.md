# Local Development with Docker

## Prerequisites

- Use the defaults provided in [`docker-compose.yml`](../docker-compose.yml) or update it as needed.

## Build

When in the root directory of the project, needed the first time or when making changes to the Dockerfile:

```shell
docker compose build
```

## Run

```shell
docker compose up
```

Opening your browser to http://localhost:8080 should show the application.

### Build + Run

```shell
docker compose up --build
```

## Generating static pages

For Makefile commands docker, use git-bash if on Windows.

```shell
make -f Makefile.docker html
```

## Running PHP Code Sniffer

(Replace `${pwd}` with `$(pwd)` if using bash.)

### Install

```shell
docker run --rm -v ${pwd}:/app composer:2.7.1 install --prefer-dist
# or
make -f Makefile.docker vendor
```

### Check

```shell
docker run --rm -v ${pwd}:/app composer:2.7.1 composer run-script ci
# or
make -f Makefile.docker check
```

### Check and Fix

```shell
docker run --rm -v ${pwd}:/app composer:2.7.1 composer run-script fix
# or
make -f Makefile.docker fix
```

## Generating schemas and JSON data files

If you edit the data files in `/source-data`, then you will need bun to run the build script.

### Bun install

```shell
docker run --rm -v ${pwd}:/usr/src/app -w /usr/src/app oven/bun:1 bun install
# or
make -f Makefile.docker node_modules
```

### Generate schemas, JSON data files, and validate

```shell
make -f Makefile.docker data
```

### Only Validate source-data and schemas

```shell
docker run --rm -v ${pwd}:/usr/src/app -w /usr/src/app oven/bun:1 bun source-data/validate
```
