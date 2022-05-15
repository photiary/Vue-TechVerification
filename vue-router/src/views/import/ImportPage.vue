<template lang="html">
  <v-sheet>
    <h2>🍕 Import</h2>

    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleColor('red')">Red</v-btn>
    <v-btn @click="toggleColor('yellow')">Yellow</v-btn>

    <red v-if="colorType === 'red'" title="빨강"></red>
    <yellow v-else-if="colorType === 'yellow'" title="노랑"></yellow>
  </v-sheet>
</template>

<script type="text/javascript">
  import Red from "@/components/Red"
  import Yellow from "@/components/Yellow"

  export default {
    name: 'import-page',
    data() {
      return {
        colorType: undefined,
      };
    },
    components: {
      Red,
      Yellow,
    },
    methods: {
      toggleColor: function (colorType) {
        if (this.colorType !== colorType) {
          this.colorType = colorType;
        }
      },
    },
  };
</script>