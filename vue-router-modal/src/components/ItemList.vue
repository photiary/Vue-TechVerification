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
    // 이름 적는 것을 잊지마세요
    name: 'ItemList',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {},
    // 컴포넌트 변수 그룹
    data() {
      return {
        itemList : itemListTestData,
      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {
      // 코드 분석을 쉽게 하기위해 Function 접미사로 해당 Vue를 표기.
      // ※ 실무에서는 프로젝트의 Function 명명 규약을 따른다.
      getItemList_ItemList(filterItem) {
        console.log(`ItemList.getItemList_ItemList filterItem=`, filterItem);
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    mounted() {},
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
  {
    id: '3',
    name: 'c',
  }
];

</script>

<style scoped>

</style>