default: help

help:
	@node --version

init:
# init package.json
	@npm init -y
# init tsconfig.json
	@npx tsc --init --rootDir src --outDir dist

install-dep:
	@npm install -D typescript @types/node tsx
	@npm install -D \
		eslint \
		@eslint/js \
		typescript-eslint \
		eslint-config-prettier \
		eslint-plugin-import \
		eslint-plugin-simple-import-sort \
		globals

lint:
	@npm run lint

run-dev:
	@npm run dev

debug:
	@npm run debug

build:
	@npm run build

start:
	@npm start
