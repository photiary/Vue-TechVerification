<template lang="html">
  <v-app>
    <v-main class="overflow-hidden">
      <v-app-bar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </v-app-bar>
      
      <!-- 배경 이미지 -->
      <v-expand-transition>
        <v-sheet
          v-show="expand"
          secondary
        >
          <v-img
            class="rounded-b-xl"
            height="150"
            src="./assets/pexels-003.jpg"
          >
          </v-img>
        </v-sheet>
      </v-expand-transition>
 
      <!-- 그룹 선택 -->
      <v-sheet class="mt-n6" height="50">
        <v-slide-group center-active>
          <v-slide-item
            v-for="n in 10"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'blue' : 'grey'"
              class="ma-1"
              :height="active ? 45 : 40"
              :width="active ? 45 : 40"
              @click="toggle"
            >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <!-- 탭과 필터 -->
      <v-sheet class="d-flex">
        <v-tabs>
          <v-tab>One</v-tab>
          <v-tab>Two</v-tab>
        </v-tabs>
        <v-icon class="pr-4 ml-auto" @click.stop="$_mainPage_clickFilter">mdi-filter</v-icon>
      </v-sheet>
      
      <!-- 카드 리스트 -->
      <v-sheet class="overflow-x-hidden overflow-y-auto" height="400" id="scroll-target" v-scroll:#scroll-target="$_on_scroll">
        <v-row v-for="(item, i) in items" :key="i">
          <v-col>
            <v-card flat align="center">
              <v-chip class="ma-2">2022-05-01</v-chip>
            </v-card>
            <v-card>
              <v-card-title >
                <v-row align="center">
                  <v-col cols="2">
                    <v-avatar>
                      <v-img
                        src="./assets/avatar-01.png"
                        alt="Bart Simpson"
                      ></v-img>
                    </v-avatar>
                  </v-col>
                  <v-col>
                    <span>Bart Simpson</span>
                    <br>
                    <span>2022-05-05 16:50</span>
                  </v-col>
                </v-row>
                <v-icon class="ml-auto">mdi-dots-horizontal</v-icon>
              </v-card-title>

              <v-img
                src="./assets/pexels-002.jpg"
                height="200"
              ></v-img>

              <v-card-actions class="justify-space-between">
                <v-icon class="px-10">mdi-heart</v-icon>
                <v-icon class="px-10">mdi-comment</v-icon>
                <v-icon class="px-10">mdi-share-variant-outline</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
        temporary
        class="rounded-t-lg"
      >
        <router-view @mountedFilterPage="$_mounted_filter_page"></router-view>  
      </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'MainPage',
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
        items: ['a', 'b'],
        drawer: false,
        expand: true,
        // offsetTop: 0,
      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {
      $_mainPage_clickFilter: function () {
        console.log(`MainPage.$_mainPage_clickFilter`);
        this.$router.push({ name: 'main.filter' });
      },
      $_mounted_filter_page: function () {
        this.drawer = !this.drawer;
      },
      $_on_scroll: function (e) {
        if (this.expand && e.target.scrollTop > 50) {
          this.expand = false;
        } else if (e.target.scrollTop === 0) {
          this.expand = true;
        }
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    create() {},
    mounted() {},
  };
</script>

<style scoped>
</style>