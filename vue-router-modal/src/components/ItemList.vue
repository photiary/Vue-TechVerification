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
    props: {
    },
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
      getItemList() {
        console.log();
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