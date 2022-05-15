<template lang="html">
  <v-sheet>
    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleRed">Toggle Red</v-btn>
    <v-btn @click="toggleYellow">Toggle Yellow</v-btn>

    <red title="빨강" v-if="isActiveRed"></red>
    <yellow title="노랑" v-if="isActiveYellow"></yellow>

  </v-sheet>
</template>

<script type="text/javascript">
  import Red from "@/components/Red"
  import Yellow from "@/components/Yellow"

  export default {
    name: 'import-page',
    data() {
      return {
        isActiveRed: false,
        isActiveYellow: false,
      };
    },
    components: {
      Red,
      Yellow,
    },
    methods: {
      toggleRed: function () {
        this.isActiveRed = !this.isActiveRed
      },
      toggleYellow: function () {
        this.isActiveYellow = !this.isActiveYellow
      },
    },
  };
</script>