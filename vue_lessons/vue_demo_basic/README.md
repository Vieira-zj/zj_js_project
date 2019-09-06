# vue_lesson_todos

## Create project
```
vue create vue_lesson_todos
```

> Vue configs are defined in vue.config.js.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
cd {vue_project}; npm run serve
```

### For multiple pages vue project, compiles and hot-reloads
```
cd {vue_project}/src/pages/ajax; npm run serve
```

page access:
```
http://localhost:8081/ajax#/
```

### Compiles and minifies for production (Create a production build.)
```
npm run build
```

### Run your tests (See unit test below)
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

> Jest configs are defined in jest.config.js, like "testMatch" option.

1. Create a component "src/components/HelloWorld.vue".

2. Create related unit test "tests/unit/HelloWorld.spec.js".

3. Run unit test.
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
