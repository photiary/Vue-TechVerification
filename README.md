# vue-tech-verification
Vue.js 기술 검증을 위한 프로젝트

[Vue](https://jp.vuejs.org/index.html) + [Vue Router](https://v3.router.vuejs.org/ja/) + [Vuex](https://v3.vuex.vuejs.org/ja/)

# vue-cli
Install
```
npm install -g @vue/cli
```
설치 확인
```
vue --version
```
Project 생성
```
vue create projectName
```

# hello-vue

### 생성한 프로젝트로 이동
```
cd projectName
```

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 초기 설정

### ESLint
생성한 프로젝트로 이동
- Install
    ```
    npm install -g -d eslint
    ```

- Setting
    ```
    eslint --init
    ```
    - How would you like to use ESLint? · **problems**
    - What type of modules does your project use? · **esm** (JavaScript modules)
    - Which framework does your project use? · **vue**
    - Does your project use TypeScript? · **No**
    - Where does your code run? · **browser**
    - What format do you want your config file to be in? · **JSON**
    - Would you like to install them now with npm? · **Yes**

- .eslintrc.json
    > Parsing error: ImportDeclaration should appear when the mode is ES6 and in the module context.eslint
    ```json
    "parserOptions": {
        "ecmaVersion": 2021
    }
    ```
    > Component name "component" should always be multi-word.eslint([vue/multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html))
    ```json
    "rules": {
        "vue/multi-word-component-names": "off"
    }
    ```
    `console.log` 사용
    ```json
    "rules": {
        "no-console": "off"
    }
    ```

### Vuex
- install
    ```
    npm install vuex@3.6.2 --save
    ```

### Vue-Router
- install
    ```
    npm install vue-router@3.5.3 --save
    ```

### Vetur VS Code Plugin
> Property 'arg' does not exist on type 'unknown'.Vetur(2339)

VSCode 설정 파일에 추가 (⚠️설정화면을 닫아야 에러 메시지가 사라진다.)
```json
"vetur.validation.interpolation": false
```

### 파일 생성, 수정, 삭제

- 삭제
  - src/components/HelloWorld.vue
  - src/assets/logo.png

- 생성
  - src/views
  - src/store/index.js
    ```js
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);

    export default new Vuex.Store({
      state: {},
      getters: {},
      mutations: {},
      actions:{},
      module: {},
      plugins: [],
    });
    ```
  - src/routes/index.js
    ```js
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter);

    const routes = [
      {
        name: 'home',
        path: '/',
      },
    ];

    let allRoutes = [];
    allRoutes = allRoutes.concat(
      routes,
    );

    export default new VueRouter({
      mode: 'history',
      routes: allRoutes,
    });
    ```

- 수정
  - src/App.vue 
    ```html
    <template>
      <!-- vue-router를 사용할 경우 -->
      <router-view></router-view>
    </template>

    <script>
    export default {
      name: 'app',
      components: {}
    }
    </script>

    <style>
    </style>
     ```

  - src/main.js
    ```js
    import Vue from 'vue'
    import App from './App.vue'
    import router from '@/routes/index'
    import store from '@/store/index'

    Vue.config.productionTip = false

    new Vue({
      render: h => h(App),
      router,
      store,
    }).$mount('#app')

    ```

  - jsconfig.json 수정
      ```json
      "target": "es6"
      ```

# 개발
## Default Vue
  
컴포넌트는 src/components에 생성. 화면은 src/views에 생성

[참조 사이트: 컴포넌트 구조](https://pablohpsilva.github.io/vuejs-component-style-guide/#/korean?id=%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%98%EB%82%98%EC%9A%946)
```html
<template lang="html">
  <div class="Define__CSS">
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'vue-name',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {
      bar: {}, // 알파벳순으로 정렬합니다
      foo: {},
      fooBar: {},
    },
    // 컴포넌트 변수 그룹
    data() {
      return {

      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {},
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
  };
</script>

<style scoped>
  .Define__CSS { /* ... */ }
</style>
```

## Default vuex.js

## Default routes.js
```js
const routes = [
  {
    name: 'page',
    path: '/page',
    component: () => import(/* webpackChunkName: "page" */ '@/views/Page.vue'),
    children: [

    ],
  },
];

export default routes;
```

`src/routes/index.js` 생성한 routes.js를 추가
```js
import mainRoutes from './mainRoutes'

allRoutes = allRoutes.concat(
  routes,
  mainRoutes, // 추가
);

```

# Vuetify.js
추가로 Vuetify를 사용할 경우
### Vuetify Setup
참고 사이트 : [Webpack でのインストール](https://vuetifyjs.com/ja/getting-started/installation/#webpack-3067306e30a430f330b930c830fc30eb)
```js
npm install vuetify
```

### Icon setup
참고 사이트 : [Material Design Icons](https://vuetifyjs.com/ja/features/icon-fonts/#material-design-icons)
```js
npm install @mdi/font
```

### `src/plugins/vuetify.js`
```js
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
}

export default new Vuetify(opts)
```

### `src/main.js`
```js
import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export

new Vue({
  vuetify,
}).$mount('#app')
```

# Vuetify.js Reference Site

## 🍪 Material Design Icons
아이콘 이름을 검색할 때 사용. `mdi-`에 사용할 아이콘의 이름을 접미사로 사용

[Material Design Icons](https://materialdesignicons.com/)
```html
<v-icon>mdi-filter</v-icon>
```

## 🍪 Spacing 
컴포넌트의 간격을 조절할 때 사용.

[Vuetifyjs Spacing](https://vuetifyjs.com/ja/styles/spacing/)

- `p` - `padding`을 적용.
- `r` - `margin-right`와`padding-right`을 적용.
- size - 3의 배수로 사이즈가 달라진다. 4 * 3 = 12px

```html
<v-icon class="pr-4">mdi-filter</v-icon>
```

## 🍪 Flex
컴포넌트를 한줄 또는 위치를 조절할 때 사용.

[Vuetifyjs Flex](https://vuetifyjs.com/ja/styles/flex/)

## 🍪 Border Radius
컴포넌트 모서리에 라운드를 적용할 때 사용.

[Border Radius](https://vuetifyjs.com/ja/styles/border-radius/)