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
- 참조사이트> [https://kr.vuejs.org/v2/guide/components-dynamic-async.html](https://kr.vuejs.org/v2/guide/components-dynamic-async.html)
- 속성을 지정하면 교체되는 컴포넌트에 그대로 전달된다.

## ◆ `<router-view>`
- Vue Router(Single page application)의 특성으로 *주소 변경*은 서버로의 Request가 이닌, 컴포넌트의 교체이다.
  > Vue와 Vue 라우터를 이용해 싱글 페이지 앱을 만드는 것은 매우 쉽습니다. Vue.js를 사용한다면 이미 컴포넌트로 앱을 구성하고 있을 것입니다. Vue 라우터를 함께 사용할 때 추가로 해야하는 것은 라우트에 컴포넌트를 매핑한 후, 어떤 주소에서 렌더링할 지 알려주는 것 뿐입니다.

  참조사이트> [https://v3.router.vuejs.org/kr/guide/](https://v3.router.vuejs.org/kr/guide/)
- `router-view`도 하나의 컴포넌트로 *주소가 변경*되면 Route config에 지정한 컴포넌트로 교체되어 표시된다.
- 속성을 지정하면 교체되는 컴포넌트에 그대로 전달된다.
- Route config에 자식(`children`)으로 지정한 컴포넌트는 부모에 지정한 `router-view`가 교체되어 표시된다.
- `router-view`가 여러개있을 경우에는 `name`속성을 지정한다. 지정하지 않으면, 기존에 표시되었던 컴포넌트가 사라지게 된다.

  참조사이트> [https://v3.router.vuejs.org/guide/essentials/named-views.html](https://v3.router.vuejs.org/guide/essentials/named-views.html)
- *주소 변경*은 브라우저의 뒤로가기 버튼을 사용할 수 있기 때문에 그전 *주소*로 이동하게 된다.
  >※ Store 사용시 주의: 값을 확정하고 현재 화면에서 빠져나가 전까지는 Store에 값을 변경하면 안된다.URL이동만 있을 뿐 데이터의 변경은 없기 때문에 Store값을 변경하고 뒤로가기를 하면 Store에는 변경된 값으로 유지된다.
- 뒤로가기로 *주소 변경*을 하면 이벤트가 발생한 위치로 화면이 이동한다. 특정 위치를 지정하기 위해서는 `scrollBehavior`를 사용한다.

  참조사이트> [https://v3.router.vuejs.org/kr/guide/advanced/scroll-behavior.html](https://v3.router.vuejs.org/kr/guide/advanced/scroll-behavior.html)
