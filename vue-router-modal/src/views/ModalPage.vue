<template lang="html">
  <div class="modal-content">
    <h1>Modal</h1>
    <button @click="$router.back()">Close.</button>
    <button @click="$_modalPage_clickOk">OK! (Call parent function)</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Modal',
    extends: {},
    props: {
      filterItem: {
        type: Object,
        required: true,
        default: function () {
          return { name: 'default_filterItem'};
        }
      }
    },
    data() {
      return {
      };
    },
    computed: {},
    components: {},
    watch: {},
    methods: {
      // Vue style-guid에 따라 private function은 접두사에 $_yourPluginName_를 추가한다.
      $_modalPage_clickOk() {
        // ModalPage에서 사용한 filterItem을 ItemList까지 전달하기 위해 같은 부모인 ContentPage로 전달한다.
        let filterItem = { name: 'modalPage_filterItem' };
        console.log(`ModalPage.$_modalPage_clickOk filterItems=`, filterItem);
        this.$emit('clickOkEvent', filterItem);
        this.$router.back();
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeRouteEnter (to, from, next) {
      console.log(`${to.path} to=`, to, `, from=`, from);
      next();
    },
    beforeCreate() {},
  };
</script>

<style scoped>
  .modal-content {
    background-color: #41b883;
    padding: 20px;
    width: 30%;
  }
</style>