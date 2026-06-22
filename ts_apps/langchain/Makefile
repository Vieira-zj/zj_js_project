default: help

help:
	@node --version

init:
# init package.json
	@npm init -y
# init tsconfig.json
	@npx tsc --init --rootDir src --outDir dist

install-dep:
	@npm install -D typescript @types/node ts-node tsx
	@npm install langchain @langchain/openai
	@npm install @langchain/textsplitters
	@npm install dotenv

run-dev:
	@npm run dev

debug:
	@npm run debug

build:
	@npm run build

start:
	@npm start
