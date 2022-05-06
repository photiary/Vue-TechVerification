<template lang="html">
  <v-sheet>
    <!-- アプリケーションに適切なgutterを提供 -->
    <item-list-page></item-list-page>
    <v-btn
      elevation="5"
      fab
      absolute
      right
      bottom
      color="blue darken"
      class="mb-15"
      :to="{ name: 'registryItem' }"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-sheet>
</template>

<script type="text/javascript">
  import ItemListPage from "@/views/ItemListPage"

  export default {
    // 이름 적는 것을 잊지마세요
    name: 'mainPage',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {},
    // 컴포넌트 변수 그룹
    data() {
      return {
        fab: false,
      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {
      ItemListPage,
    },
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {},
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
  };
</script>

<style scoped>
</style>