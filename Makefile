all: static

.PHONY: test
test: validate-data check

.PHONY: data
data: node_modules
	bun ./source-data/build.ts
	bun ./source-data/validate.ts

.PHONY: validate-data
validate-data:
	bun ./source-data/validate.ts

.PHONY: static
static: config.php
	bun ./generate.ts
	php ./generate.php

.PHONY: check
check: vendor
	./vendor/bin/phpcs --ignore=vendor,.dh-diag -n .

.PHONY: fix
fix: vendor
	./vendor/bin/phpcbf --ignore=vendor,.dh-diag -n .

node_modules: package.json
	bun install
	touch -m node_modules

vendor: composer.json
	composer install --prefer-dist
	touch -m vendor

config.php:
	cp -n config.example.php config.php
