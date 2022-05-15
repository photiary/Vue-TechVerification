<template lang="html">
  <v-card :color="color">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script type="text/javascript">
  export default {
    name: 'cooking',
    props: {
      title: {
        type: String,
        dafault: undefined,
      },
      color: {
        type: String,
        dafault: 'white',
      },
    },
  };
</script>