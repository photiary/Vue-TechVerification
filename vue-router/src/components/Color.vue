<template lang="html">
  <v-card :color="color">
    <v-card-text>
      {{ title }}
    </v-card-text>
  </v-card>
</template>

<script type="text/javascript">
  export default {
    name: 'color',
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