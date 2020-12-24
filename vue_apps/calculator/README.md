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

------

## Plugin: istanbul

### Instrument source code

> Refer: <https://github.com/istanbuljs/babel-plugin-istanbul>

### Install

```sh
npm install --save-dev babel-plugin-istanbul
```

------

## Plugin: istanbul-middleware

Refer: <https://github.com/gotwarlost/istanbul-middleware>

### Install

```sh
npm i istanbul-middleware --save-dev
npm i nyc --save-dev
```

Add istanbul configs in `babel.config.js`.

### Server-side code coverage

Add `server.js` and start cover server.

```sh
# start app
COVERAGE=true node server.js

# check coverage api
curl -v http://localhost:8081/coverage/
```

### Post coverage data

```sh
curl -v -XPOST http://localhost:8081/coverage/client -H "Content-type:application/json" -d @tmp.json

# download coverage file
curl -v http://localhost:8081/coverage/download --output cover.zip
```

