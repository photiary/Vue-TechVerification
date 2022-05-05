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
      <div>
        Image
      </div>
      <v-sheet
        class="mx-auto"
        max-width="700"
      >
        <v-slide-group
          v-model="model"
          center-active
        >
          <v-slide-item
            v-for="n in 10"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-card
              :color="active ? 'primary' : 'grey lighten-1'"
              class="ma-2"
              height="40"
              width="40"
              @click="toggle"
            >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-container>
        Hello World
      </v-container>
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