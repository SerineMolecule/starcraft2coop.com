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
