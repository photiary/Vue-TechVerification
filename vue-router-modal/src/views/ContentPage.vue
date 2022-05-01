<template lang="html">
  <div class="">
    <h1>Content page</h1>
    <!-- 
      ref 속성으로 ContentPage에서 ItemList를 참조한다.
      MainPage에서 ContentPage를 참조할 수 있기 때문에 MainPage에서 ItemList까지 참조 가능하다.
    -->
    <item-list ref="itemListComponent"></item-list>
    
    <!-- ModalPage.vue -->
    <router-view @clickOkEvent="$_contentPage_getItemList"></router-view>
  </div>
</template>

<script type="text/javascript">
  import ItemList from '@/components/ItemList'

  export default {
    name: 'ContentPage',
    extends: {},
    props: {},
    data() {
      return {
      };
    },
    computed: {},
    components: {
      ItemList,
    },
    watch: {},
    methods: {
      // Vue style-guid에 따라 private function은 접두사에 $_yourPluginName_를 추가한다.
      $_contentPage_getItemList(filterItem) {
        // ModalPage에서 받은 filterItem를 ItemList로 전달한다.
        console.log(`ContentPage.$_contentPage_getItemList filterItem=`, filterItem);
        this.$refs.itemListComponent.getItemList(filterItem);
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
};
</script>

<style scoped>
</style>