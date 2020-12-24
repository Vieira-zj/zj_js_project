# App - Calculator

## Project setup

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Plugin: istanbul

### Instrument source code

> Refer: <https://github.com/istanbuljs/babel-plugin-istanbul>

### Install

```sh
npm install --save-dev babel-plugin-istanbul
```

## Plugin: istanbul-middleware

Refer: <https://github.com/gotwarlost/istanbul-middleware>

### Install

```sh
npm i istanbul-middleware --save-dev
npm i nyc --save-dev
```

### Server-side code coverage

```sh
# start app
COVERAGE=true node server.js

# download coverage file
curl -v http://localhost:8081/coverage/download --output cover.zip
```
