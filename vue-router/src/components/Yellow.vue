<template lang="html">
  <v-card color="yellow">
    <v-card-text>
      {{ title }}
    </v-card-text>
  </v-card>
</template>

<script type="text/javascript">
  export default {
    name: 'yellow',
    props: {
      title: {
        type: String,
        dafault: undefined,
      },
    },
  };
</script>