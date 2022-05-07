<template lang="html">
  <v-expand-transition>
    <v-card
      color="blue"
      elevation="0"
      class="rounded-0"
      v-show="isMounted">
      <v-app-bar>
        <v-icon @click.stop="$router.back()">
          mdi-arrow-left
        </v-icon>
      </v-app-bar>
      <v-card-text>
        ItemInfoPage
      </v-card-text>
    </v-card>
  </v-expand-transition>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'item-info-page',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {},
    // 컴포넌트 변수 그룹
    data() {
      return {
        isMounted: false,
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
    mounted() {
      this.isMounted = !this.isMounted;
    },
  };
</script>

<style scoped>
</style>