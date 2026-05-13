all: html test

.PHONY: deps
deps: config.php node_modules vendor

config.php:
	cp -n config.example.php config.php

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
html: node_modules config.php
	bun ./generate-html-dir.ts
	php ./generate-static.php

.PHONY: test
test: validate-data check

.PHONY: check
check: vendor
	./vendor/bin/phpcs --ignore=vendor,.dh-diag -n .

.PHONY: fix
fix: vendor
	./vendor/bin/phpcbf --ignore=vendor,.dh-diag -n .
