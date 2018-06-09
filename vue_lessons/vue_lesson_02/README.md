# vue_lessons

> vue lessons from github

## Build Setup

``` bash
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

**Workflow**

```
index.html, <div id="app">, <router-view/> => @/main.js, router => @/router/index.js => @/pages/App.vue

1) vue lessons => @/pages/App1.vue => @/components/lessons/*

2) vuex lessons 
vue => @/pages/App2.vue => @/components/counter/*
vuex => @/man.js => @/vuex/store.js
vuex => @/man.js => @/vuex/index.js => @/vuex/modules/*

3) charts => @/pages/App4.vue => @/components/charts/*

```

