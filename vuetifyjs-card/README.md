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