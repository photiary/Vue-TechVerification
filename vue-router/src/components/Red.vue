<template lang="html">
  <v-card color="red">
    <v-card-text>
      {{ title }}
    </v-card-text>
  </v-card>
</template>

<script type="text/javascript">
  export default {
    name: 'red',
    props: {
      title: {
        type: String,
        dafault: undefined,
      },
    },
  };
</script>