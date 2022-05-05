# vuetifyjs-card

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

# Vuetify.js

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

# Reference Site

## 🍪 Material Design Icons
아이콘 이름을 검색할 때 사용. `mdi-`에 사용할 아이콘의 이름을 접미사로 사용

[Material Design Icons](https://materialdesignicons.com/)
```html
<v-icon>mdi-filter</v-icon>
```

## 🍪 Spacing 
컴포넌트의 간격을 조절 할때 사용.

[Vuetifyjs Spacing](https://vuetifyjs.com/ja/styles/spacing/)

- `p` - `padding`을 적용.
- `r` - `margin-right`와`padding-right`을 적용.
- size - 3의 배수로 사이즈가 달라진다. 4 * 3 = 12px

```html
<v-icon class="pr-4">mdi-filter</v-icon>
```

## 🍪 Flex
컴포넌트를 한줄 또는 위치를 조절 할때 사용.

[Vuetifyjs Flex](https://vuetifyjs.com/ja/styles/flex/)