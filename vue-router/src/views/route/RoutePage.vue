<template lang="html">
  <v-sheet>
    <h2>🍟 Route</h2>

    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleColor('red', '빨강')">Red</v-btn>
    <v-btn @click="toggleColor('yellow', '노랑')">Yellow</v-btn>

    <router-view :title="colorTitle"></router-view>
  </v-sheet>
</template>

<script type="text/javascript">
  export default {
    name: 'route-page',
    data() {
      return {
        colorTitle: undefined,
      };
    },
    methods: {
      toggleColor: function (colorType, colorTitle) {
        if (this.$route.name !== colorType) {
          this.colorTitle = colorTitle;
          this.$router.push({ name: colorType });
        }
      },
    },
  };
</script>