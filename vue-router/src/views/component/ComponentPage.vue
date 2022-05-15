<template lang="html">
  <v-sheet>
    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleRed">Toggle Red</v-btn>
    <v-btn @click="toggleYellow">Toggle Yellow</v-btn>

  </v-sheet>
</template>

<script type="text/javascript">
  export default {
    name: 'component-page',
    methods: {
      toggleRed: function () {

      },
      toggleYellow: function () {

      },
    },
  };
</script>