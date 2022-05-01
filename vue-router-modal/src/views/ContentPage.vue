<template lang="html">
  <div class="">
    <h1>Content page</h1>
    <!-- 
      ref 속성으로 ContentPage에서 ItemList를 참조한다.
      MainPage에서 ContentPage를 참조할 수 있기 때문에 MainPage에서 ItemList까지 참조 가능하다.
    -->
    <item-list ref="itemListComponent"></item-list>
    
    <!-- ModalPage.vue -->
    <router-view @clickOkEvent="getItemList_ContentPage"></router-view>
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
    props: {},
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
    methods: {
      // 코드 분석을 쉽게 하기위해 Function 접미사로 해당 Vue를 표기.
      // ※ 실무에서는 프로젝트의 Function 명명 규약을 따른다.
      getItemList_ContentPage(filterItem) {
        // ModalPage에서 받은 filterItem를 ItemList로 전달한다.
        console.log(`ContentPage.getItemList_ContentPage filterItem=`, filterItem);
        this.$refs.itemListComponent.getItemList_ItemList(filterItem);
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    mounted() {},
};
</script>

<style scoped>

</style>