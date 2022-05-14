<template lang="html">
  <v-sheet>
    <v-btn
      v-show="isActive"
      color="teal"
      @click="$_clickInactive"
    >
      Inactive {{name}} child.
    </v-btn>
  </v-sheet>
</template>

<script type="text/javascript">
export default {
  name: "child",
  props: {
    name: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    $route: function (newVal) {
      console.log(`Child.watch.$route newVal`, newVal);
      if (this.isActive || newVal.params[`name`] === this.name) {
        this.isActive = !this.isActive;
      }
    },
  },
  methods: {
    $_clickInactive: function () {
      this.isActive = !this.isActive;
      this.$router.back();
    },
  },
};
</script>

<style scoped></style>
