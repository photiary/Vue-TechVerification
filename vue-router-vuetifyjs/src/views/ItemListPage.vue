<template lang="html">
  <v-expand-transition>
    <!-- 네비게이션 바와 공간을 없애기 위해서 my-n2를 지정 -->
    <v-list class="my-n2">
      <template>
        <v-card
          color="blue"
          :to="{ name: 'itemInfo' }"
        >
          <v-card-text>
            New Item
          </v-card-text>
        </v-card>
        <v-card
          color="indigo"
          :to="{ name: 'vModel' }"
        >
          <v-card-text>
            1. v-model
          </v-card-text>
        </v-card>
      </template>
    </v-list>
  </v-expand-transition>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'item-list',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {},
    // 컴포넌트 변수 그룹
    data() {
      return {
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