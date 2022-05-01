<template lang="html">
  <div class="modal-content">
    <h1>Modal</h1>
    <button @click="$router.back()">Close.</button>
    <button @click="clickOk">OK! (Call parent function)</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'Modal',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {
      filterItem: {
        type: Object,
        required: true,
        default: function () {
          return { name: 'default_filterItem'};
        }
      }
    },
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
    methods: {
      clickOk() {
        // ModalPage에서 사용한 filterItem을 ItemList까지 전달하기 위해 같은 부모인 ContentPage로 전달한다.
        let filterItem = { name: 'modalPage_filterItem' };
        console.log(`ModalPage.clickOk filterItems=`, filterItem);
        this.$emit('clickOkEvent', filterItem);
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeRouteEnter (to, from, next) {
      console.log(`${to.path} to=`, to, `, from=`, from);
      next();
    },
    beforeCreate() {},
    created() {},
    mounted() {},
    destroyed() {},
};

</script>

<style scoped>
.modal-content {
  background-color: #41b883;
  padding: 20px;
  width: 30%;
}
</style>