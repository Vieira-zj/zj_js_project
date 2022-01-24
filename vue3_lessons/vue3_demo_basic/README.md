# Vue3 Demo

Refer: 

- <https://www.runoob.com/vue3/vue3-tutorial.html>
- <https://v3.cn.vuejs.org/guide/typescript-support.html#npm-%E5%8C%85%E4%B8%AD%E7%9A%84%E5%AE%98%E6%96%B9%E5%A3%B0%E6%98%8E>

## Build Project

1. Build a vue3 project with below options enabled.

- typescript
- router

```text
$ npm i -g @vue/cli
$ vue --version
@vue/cli 4.5.15

# 创建一个新项目, 选择 "Manually select features" 选项
$ vue create vue3_demo_basic
Vue CLI v4.5.15
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, TS, Router, Linter
? Choose a version of Vue.js that you want to start the project with 3.x
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a linter / formatter config: Prettier
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No

$ cd vue3_demo_basic
$ npm run serve
```

2. Edit `tsconfig.json` and `vue.config.js`.

## Cli

```sh
# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

