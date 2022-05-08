<template>
  <v-app>
    <v-navigation-drawer
      app
      v-model="isActiveLeftNavigationDrawer"
      @input="$_backRoute">
      <v-list dense>
        <v-list-item
          link
         :to="{ name: 'userInfo' }">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            User Info
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      v-model="isActiveAppBar">
      <v-app-bar-nav-icon
        @click.stop="$_clickAppBarNavIcon"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon
        @click="$_clickFilter">
        mdi-filter
      </v-icon>
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

    <v-navigation-drawer
      app
      bottom
      height="80%"
      v-model="isActiveBottomNavigationDrawer"
      @input="$_backRoute">
      <filter-page>
      </filter-page>
    </v-navigation-drawer>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import FilterPage from '@/views/FilterPage';

export default {
  name: 'app',
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  data() {
    return {
      isActiveAppBar: true,
      isActiveLeftNavigationDrawer: false,
      isActiveBottomNavigationDrawer: false,
    };
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    FilterPage,
  },
  // 컴포넌트 메서드 그룹
  watch: {
    $route: '$_onRouteChange',
  },
  methods: {
    $_clickAppBarNavIcon: function () {
      this.$_showLayer('isActiveLeftNavigationDrawer');
    },
    $_clickFilter: function () {
      this.$_showLayer('isActiveBottomNavigationDrawer');
    },
    $_showLayer: function (target) {
      // 브라우저의 뒤로가기 버튼으로도 닫게 하기위해서 가짜 패스로 이동한다.
      this.$router.push({ name: 'main.layer' });
      this[target] = !this[target];
    },
    $_backRoute: function (isActive) {
      console.log('App.$_backRoute isActive', isActive);
      if (!isActive) {
        // 브라우저의 뒤로가기 버튼을 클릭해도 isActive가 false여서 실행되기 때문에 main에서 실행되지 않기 위해 비교한다.
        if (this.$route.name === 'main.layer') {
          // Overay을 클릭할 때는 Path가 변경되지 않기 때문에 $router.back()을 호출한다.
          this.$router.back();
        }
      }
    },

    $_onRouteChange: function () {
      // 메인 페이지에서만 표시하도록 한다.
      this.isActiveAppBar = this.$route.name.includes('main');
    },
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
}
</script>

<style scoped>
/* v-navigation-drawer bottom의 높이 속성이 50%이므로 높이 조절을 위해서 100%로 오버라이드 */
.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile {
  max-height: 100%;
  top: auto;
  bottom: 0;
  min-width: 100%;
}
</style>