<template lang="html">
  <div class="">
    <h1>Main page</h1>
    <button @click="$_mainPage_clickOpenModal">Open modal</button>

    <!--
      ContentPage.vue
      router-view는 ContentPage로 변경되기 때문에 ref속성은 ContentPage의 속성이 된다.
      따라서, MainPage에서 ContentPage를 참조 가능하다.
    -->
    <router-view ref="contentPageComponent"></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'MainPage',
    extends: {},
    props: {},
    data() {
      return {
      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {
      // Vue style-guid에 따라 private function은 접두사에 $_yourPluginName_를 추가한다.
      $_mainPage_clickOpenModal() {
        // MainPage > ContentPage > ItemList로 구성 되어있기 때문에 MainPage에서 두번에 걸쳐 ItemList를 참조한다.
        let itemListComponentFilterItem = this.$refs.contentPageComponent.$refs.itemListComponent.getCurrentFilterItem;
        console.log(`MainPage.$_mainPage_clickOpenModal itemListComponentFilterItem=`, itemListComponentFilterItem);
        // $router.push로 params를 전달하기 위해서는 name을 사용해야한다.
        // path를 사용할 경우 query로 밖에 전달할 수 없다.
        this.$router.push({ name: 'main.content.modal', params: { filterItem : itemListComponentFilterItem } });
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
  };
</script>

<style scoped>
</style>