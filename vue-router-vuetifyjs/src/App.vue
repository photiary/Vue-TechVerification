<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="isNavigationDrawer">
      <v-list dense>
        <v-list-item
          link :to="{ name: 'userInfo' }"
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            User Info
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon
        @click.stop="isNavigationDrawer = !isNavigationDrawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
    <v-main>

      <!-- アプリケーションに適切なgutterを提供 -->
      <!-- container에 삽입할 card를 꽉차게 하기 위해 pa-0 지정 -->
      <v-container fluid class="pa-0">

        <!-- vue-routerを使用する場合 -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  data() {
    return {
      isNavigationDrawer: false,
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
}
</script>

<style scoped>
</style>