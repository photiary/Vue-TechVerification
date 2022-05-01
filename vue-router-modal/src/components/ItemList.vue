<template lang="html">
  <div class="">
    <h1>Item list</h1>
    <ul>
      <li v-for="(item, index) in itemList" :key="index">
        index={{ index }}, id={{ item.id }}, name={{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'ItemList',
    extends: {},
    props: {},
    data() {
      return {
        filterItem: { name: 'itemList_filterItem' },
        itemList: itemListTestData,
      };
    },
    computed: {
      // 부모가 filterItem를 참조할 수 있게한다.
      getCurrentFilterItem() {
        console.log(`ItemList.getCurrentFilterItem filterItem=`, this.filterItem);
        return this.filterItem;
      },
    },
    components: {},
    watch: {},
    methods: {
      getItemList(filterItem) {
        // ModalPage에서 ContentPage를 거쳐서 filterItem를 전달 받는다.
        console.log(`ItemList.getItemList filterItem=`, filterItem);
        this.filterItem = filterItem;
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
  };

  // Test data
  let itemListTestData = [
    {
      id: '1',
      name: 'a',
    },
    {
      id: '2',
      name: 'b',
    },
  ];
</script>

<style scoped>
</style>