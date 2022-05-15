<template lang="html">
  <v-sheet>
    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleRed">Toggle Red</v-btn>
    <v-btn @click="toggleYellow">Toggle Yellow</v-btn>

    <router-view title="빨강" name="red"></router-view>
    <router-view title="노랑" name="yellow"></router-view>
  </v-sheet>
</template>

<script type="text/javascript">
  export default {
    name: 'import-page',
    methods: {
      toggleRed: function () {
        if (this.$route.name === 'red') {
          this.$router.back();
        } else {
          this.$router.push({ name: 'red' });
        }
      },
      toggleYellow: function () {
        if (this.$route.name === 'yellow') {
          this.$router.back();
        } else {
          this.$router.push({ name: 'yellow' });
        }
      },
    },
  };
</script>