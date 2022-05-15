<template lang="html">
  <v-sheet>
    <v-btn :to="{ name: 'direct' }">Go direct</v-btn>
    <v-btn :to="{ name: 'import' }">Go import</v-btn>
    <v-btn :to="{ name: 'component' }">Go component</v-btn>
    <v-btn :to="{ name: 'route' }">Go route</v-btn>
  </v-sheet>
</template>

<script type="text/javascript">
  export default {
    name: 'main-page',
  };
</script>