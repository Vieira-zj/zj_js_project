# vue_lesson_todos

## Create project
```
vue create vue_lesson_todos
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
cd vue_lesson_todos && npm run serve
```

### Compiles and minifies for production (Create a production build.)
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Unit test
1. Add eslint and unit-jest plugins.
```
vue add eslint
vue add @vue/unit-jest
```

> All Jest configs are defiend in jest.config.js, like "testMatch" option.

2. Create a component "src/components/HelloWorld.vue".

3. Create related unit test "tests/unit/HelloWorld.spec.js".

4. Run unit test.
```
npm run test:unit
```

### Fix load *.scss
Failed to resolve loader: sass-loader
```
npm i --save-dev sass-loader
```

Add sass dependency modules in package.json:
```
"devDependencies": {
    "node-sass": "^4.0.0",
    "sass": "^1.3.0",
    "sass-loader": "^8.0.0",
},
```
