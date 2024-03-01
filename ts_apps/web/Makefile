dep:
	npm install -D typescript @types/node ts-node
	npm install tslib fastify @fastify/cors @fastify/static

dev:
	npm run dev

build:
	rm -r dist/*
	npm run build

start:
	npm run start

api-test-index:
	curl -v -L http://localhost:8080/

api-test-healthz:
	curl http://localhost:8080/healthz

api-test-post:
	curl http://localhost:8080/test/say -H 'content-type:application/json' -d '{"name":"foo", "msg":"hello"}'
