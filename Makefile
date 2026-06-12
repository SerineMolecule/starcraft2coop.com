all: html test

HOST ?= 127.0.0.1
PORT ?= 8000

.PHONY: deps
deps: node_modules vendor

node_modules: package.json
	bun install
	touch -m node_modules

vendor: composer.json
	composer install --prefer-dist
	touch -m vendor

.PHONY: data
data: node_modules
	bun ./source-data/build.ts
	bun ./source-data/validate.ts

.PHONY: validate-data
validate-data: node_modules
	bun ./source-data/validate.ts

.PHONY: html
html: node_modules
	bun ./generate-html-dir.ts
	php ./generate-static.php

.PHONY: dev
dev: html
	@echo ""
	@php -S $(HOST):$(PORT) -t html dev-router.php

.PHONY: test
test: validate-data bun-test check

.PHONY: bun-test
bun-test: node_modules
	bun test --dots

.PHONY: check
check: vendor
	./vendor/bin/phpcs --ignore=vendor,.dh-diag,html -n .

.PHONY: fix
fix: vendor
	./vendor/bin/phpcbf --ignore=vendor,.dh-diag,html -n .
