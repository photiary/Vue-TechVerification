<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="isNavigationDrawer"
      @input="$_back_router">
      <v-list dense>
        <v-list-item link :to="{ name: 'userInfo' }">
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
        @click.stop="$_click_app_bar_nav_icon"></v-app-bar-nav-icon>
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
  methods: {
    $_back_router: function (isActive) {
      if (!isActive) {
        // 브라우저의 뒤로가기 버튼을 클릭해도 isActive가 false여서 실행되기 때문에 main에서 실행되지 않기 위해 비교한다.
        if (this.$route.name === 'main.layer') {
          // Overay을 클릭할 때는 Path가 변경되지 않기 때문에 $router.back()을 호출한다.
          this.$router.back();
        }
      }
    },
    $_click_app_bar_nav_icon: function () {
      this.$router.push({ name: 'main.layer' });
      this.isNavigationDrawer = !this.isNavigationDrawer;
    },
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
}
</script>

<style scoped>
</style>