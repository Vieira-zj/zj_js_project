# Vue Basic Project (webpack)

Vue project includes Vue and Chart demos.

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

## Guide

### Workflow

Main

```text
index.html => @/main.js (App.vue, router) => @/router/index.js => @/views/Home.vue
```

Vue basic

```text
@/views/View1.vue => @/components/lessons/*.vue
```

Vuex

```text
vue => @/views/View2.vue => @/components/counter/*.vue
vuex => @/main.js => @/store/demo01/index.js
vuex => @/main.js => @/store/demo02/index.js => getters.js, mutations.js, action.js
vuex => @/main.js => @/store/demo03/index.js => ./modules/*.js
```

ChartJs

```text
charts => @/views/View4.vue => @/components/charts/*.js

1. bar-reactive-chart

BarReactiveChart.js => chart created, init chartData => chart mounted, set gradient, and render chartData => mixins, reactiveData => watch "chartData" updates

2. line-reactive-chart

View5.vue => page created
LineReactiveChart.js => chart created => chart mounted, render chartData => mixins, reactiveProp => watch props "chartData" updates
View5.vue => page mounted, fill dataCollection, and set gradient => on button click, re-fill dataCollection
```

