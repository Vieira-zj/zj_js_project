# App - Calculator

## Project setup

```sh
npm install
```

Compiles and hot-reloads for development:

```sh
npm run serve
```

Compiles and minifies for production:

```sh
npm run build
```

Lints and fixes files:

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

------

## Plugin: istanbul

### Instrument source code

> Refer: <https://github.com/istanbuljs/babel-plugin-istanbul>

Install:

```sh
npm install --save-dev babel-plugin-istanbul
```

Dependency:

```text
"babel-plugin-istanbul": "^6.0.0"
```

Edit `babel.config.js` to add plugin `babel-plugin-istanbul`.

Run calculator app with instrumented code:

```sh
npm run serve-test
```

Open app, and check var `window.__coverage__` in chrome console to see coverage is enabled.

------

## Plugin: istanbul-middleware

Refer: <https://github.com/gotwarlost/istanbul-middleware>

Install:

```sh
npm i istanbul-middleware --save-dev
npm i nyc --save-dev
```

### Server-side code coverage

Add `server.js`.

Start cover server.

```sh
# start app
COVERAGE=true node server.js
# check coverage api
curl -v http://localhost:8081/coverage/

# copy coverage json from console by "JSON.stringify(window.__coverage__)"
# save to file tmp.json
curl -v -XPOST http://localhost:8081/coverage/client -H "Content-type:application/json" -d @tmp.json
# download coverage data
curl -v http://localhost:8081/coverage/download --output cover.zip
```

------

## E2E Test With Coverage

### Build nginx env

Install:

```sh
brew install nginx
```

Start:

```sh
nginx
```

Config:

`/usr/local/etc/nginx/nginx.conf`

```conf
http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /tmp/nginx-access.log  main;

    # code coverage server
    upstream backend {
        server localhost:8081;
    }

    server {
        listen       9090;
        server_name  localhost;

        location /coverage {
            proxy_pass http://backend;
        }
    }
}
```

Test and restart:

```sh
nginx -t
nginx -s reload
```

### Get coverage data

> Pre condition: make sure coverage server is started at `:8081`.

Build instrumented package, and deploy to nginx.

```sh
npm run build-test
cp -r dist/* /usr/local/var/www
```

Open `http://localhost:9090`.

Run manual test of calculator and upload coverage.

Download coverage data and extract.

```sh
curl -v http://localhost:9090/coverage/download --output cover.zip
unzip cover.zip -d cover
```

Open code coverage report `cover/lcov-report/index.html`.

