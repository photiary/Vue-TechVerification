<template lang="html">
  <v-sheet>
    <v-btn
      @click="$_clickToggle"
    >
      Toggle child.
    </v-btn>
    <child v-model="isActive"></child>
  </v-sheet>
</template>

<script type="text/javascript">
  import Child from '@/views/vModel/Child';

  export default {
    name: 'v-model-page',
    data() {
      return {
        isActive: false,
      };
    },
    components: {
      Child,
    },
    methods: {
      $_clickToggle: function () {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style scoped>
</style>