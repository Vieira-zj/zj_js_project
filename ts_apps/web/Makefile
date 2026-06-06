install-dep:
	@npm install -D typescript @types/node ts-node
	@npm install tslib fastify @fastify/cors

ls-module:
	@npm ls @fastify/static

dev:
	npm run dev

build:
	rm -r dist/*
	npm run build

start:
	npm run start

run-test:
	./node_modules/.bin/ts-node src/test.ts
# 	node dist/utils/shell.js

run-api-test:
	sh run.sh
