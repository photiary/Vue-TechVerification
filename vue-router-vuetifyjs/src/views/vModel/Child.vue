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
      isActive: this.value,
    };
  },
  watch: {
    value: function (newVal) {
      this.isActive = newVal;
    },
  },
  methods: {
    $_clickInactive: function (event) {
      console.log(`Child.$_clickInactive event`, event);
      this.$emit('input', !this.isActive);
    },
  },
};
</script>

<style scoped></style>
