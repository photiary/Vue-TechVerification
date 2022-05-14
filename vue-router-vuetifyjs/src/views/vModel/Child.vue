<template lang="html">
  <v-sheet>
    <v-btn
      v-show="isActive"
      color="teal"
      @click="$_clickInactive"
    >
      Inactive child.
    </v-btn>
  </v-sheet>
</template>

<script type="text/javascript">
export default {
  name: "child",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 부모에서 지정한 props로 초기화
      isActive: this.value,
    };
  },
  watch: {
    // 부모에서 v-model에 지정한 것을 감시
    value: function (newVal) {
      this.isActive = newVal;
    },
  },
  methods: {
    // 부모로 isActive가 갱신된 것을 알림
    $_clickInactive: function (event) {
      console.log(`Child.$_clickInactive event`, event);
      this.$emit('input', !this.isActive);
    },
  },
};
</script>

<style scoped></style>
