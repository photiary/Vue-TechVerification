<template lang="html">
  <v-sheet>
    <!-- params의 name을 child의 name과 연결한다. -->
    <v-btn
      :to="{ name: 'toggle', params: { name: 'AAA' } }"
    >
      Toggle AAA child.
    </v-btn>
    <v-btn
      :to="{ name: 'toggle', params: { name: 'BBB' } }"
    >
      Toggle BBB child.
    </v-btn>
    <child name="AAA"></child>
    <child name="BBB"></child>
  </v-sheet>
</template>

<script type="text/javascript">
  import Child from '@/views/routeToggle/Child';

  export default {
    name: 'route-toggle-page',
    data() {
      return {
      };
    },
    components: {
      Child,
    },
  };
</script>

<style scoped>
</style>