# Vue Router Project (webpack)

Vue project includes Vue Router demos.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Workflow

Main

```text
index.html => @/main.js (App.vue, router) => @/router/index.js => @/views/Home.vue
```

Http Get

```text
@/view/VueDemo.vue
```

Router

```text
@/router/index.js => @/view/router_demos/*.vue
```

