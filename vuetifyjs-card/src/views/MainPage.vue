<template lang="html">
  <v-app>
    <v-main>
      <v-app-bar color="blue" elevation="4">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </v-app-bar>
      <!-- 배경 이미지 -->
      <v-sheet>
        <v-sheet>
        </v-sheet>
      </v-sheet>
      <!-- 그룹 선택 -->
      <v-sheet>
        <v-slide-group center-active>
          <v-slide-item
            v-for="n in 10"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'blue' : 'grey'"
              class="ma-1"
              height="40"
              width="40"
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
            <v-icon class="pr-4">mdi-filter</v-icon>
      </v-sheet>

      <!-- 카드 목록 -->
      <v-sheet flat class="overflow-auto" height="400">
        <v-card height="200" class="ma-2" v-for="n in 11" :key="n" >
          fasd
        </v-card>
      </v-sheet>
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
        model: null,
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
    mounted() {},
  };
</script>

<style scoped>
</style>