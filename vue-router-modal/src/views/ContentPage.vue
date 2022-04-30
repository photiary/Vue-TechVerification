<template lang="html">
  <div class="">
    <h1>Content page</h1>
    <item-list></item-list>
    
    <router-view></router-view>
  </div>
</template>

<script type="text/javascript">
import ItemList from '@/components/ItemList'

  export default {
    // 이름 적는 것을 잊지마세요
    name: 'ContentPage',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {
    },
    // 컴포넌트 변수 그룹
    data() {
      return {

      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {
      ItemList,
    },
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