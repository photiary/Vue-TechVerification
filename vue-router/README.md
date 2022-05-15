# vue-router

## Project setup
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

# `<router-view>`도 컴포넌트?

## ◆ 접근 키워드
Vue 페이지 구성, 컴포넌트 분리, 조건부 렌더링, `v-if`, `v-else`, `v-else-if`,  동적 컴포넌트, `<component>`, `<router-view>`

## ◆ 페이지 하나에
- 페이지의 고유 기능으로 재활용성이 없는 것은 컴포넌트로 분리하지 않아도 된다.
- 너무 작은 기능으로 컴포넌트를 분리하면 오히려 복잡도는 증가한다.

## ◆ `import`
- 페이지의 고유 기능이라 할지라도 너무 많은 기능이 있으면, 유지보수성과 코드 가독성 등의 향상을 위해 컴포넌트 분리를 고려한다.
- 재활용성이 있는 기능은 컴포넌트 분리를 고려한다.

## ◆ `<component>`
참조사이트> [https://kr.vuejs.org/v2/guide/components-dynamic-async.html](https://kr.vuejs.org/v2/guide/components-dynamic-async.html)

## ◆ `<router-view>`
- Vue Router(Single page application)의 특성으로 URL 이동은 서버로의 Request가 이닌, 컴포넌트의 교체이다.
- `router-view`도 하나의 컴포넌트로 URL이 변경되면 Route config에 지정한 컴포넌트로 교체되어 표시된다.
- Route config에 자식(`children`)으로 지정한 컴포넌트는 부모에 지정한 `router-view`가 교체되어 표시된다.
- `router-view`가 여러개있을 경우에는 `name`속성을 지정한다. 지정하지 않으면, 기존에 표시되었던 컴포넌트가 사라지게 된다.

  참조사이트> [https://v3.router.vuejs.org/guide/essentials/named-views.html](https://v3.router.vuejs.org/guide/essentials/named-views.html)