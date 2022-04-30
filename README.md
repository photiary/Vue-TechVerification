# vue-tech-verification
VUE 기술 검증을 위한 프로젝트

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
- Install
    ```
    npm install -g -d eslint
    ```

- Setting
    ```
    eslint --init
    ```
    - How would you like to use ESLint? · **problems**
    - What type of modules does your project use? · **esm**
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

### Vetur

> Property 'arg' does not exist on type 'unknown'.Vetur(2339)

VSCode 설정 파일에 추가 (⚠️설정화면을 닫아야 에러 메시지가 사라진다.)
```json
"vetur.validation.interpolation": false
```

### 파일 수정
- HelloWorld.vue 파일 삭제
- App.vue 파일 수정
    ```js
    <template>
      <div></div>
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

- jsconfig.json 파일 수정
    ```json
    "target": "es6"
    ```

# 개발
- Component 는 components 폴더 하위에 생성.

    [참조 사이트: 컴포넌트 구조](https://pablohpsilva.github.io/vuejs-component-style-guide/#/korean?id=%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%98%EB%82%98%EC%9A%946)
    ```html
    <template lang="html">
      <div class="Ranger__Wrapper">
        <!-- ... -->
      </div>
    </template>

    <script type="text/javascript">
      export default {
        // 이름 적는 것을 잊지마세요
        name: 'RangeSlider',
        // compose new components
        extends: {},
        // 컴포넌트 어트리뷰트 그룹
        props: {
          bar: {}, // 알파벳순으로 정렬합니다
          foo: {},
          fooBar: {},
        },
        // 컴포넌트 변수 그룹
        data() {},
        computed: {},
        // 컴포넌트가 다른 컴포넌트를 사용할 경우
        components: {},
        // 컴포넌트 메서드 그룹
        watch: {},
        methods: {},
        // 컴포넌트 라이프사이클 메서드 그룹
        beforeCreate() {},
        mounted() {},
    };
    </script>

    <style scoped>
      .Ranger__Wrapper { /* ... */ }
    </style>
    ```
- Store

    Default Store
    ```js
    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);

    export default new Vuex.Store({
      state: {
      
      }
    });
    ```