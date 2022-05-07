# vue-router-vuetifyjs

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

# Project 내용
Vuetifyjs + Veu Router 사용

- 웹브라우저의 뒤로가기 버튼 클릭하면 `v-navigation-drawer`가 비활성되도록 적용
- `UserInfoPage`는 `main/layer`에서 이동하므로, 뒤로가기 버튼을 클릭하면 `main/layer` > `main` 이렇게 두번 뒤로가야하므로 `back()`을 두번 호출한다.

# Layout
