<template lang="html">
  <v-sheet>
    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleRed">Toggle Red</v-btn>
    <v-btn @click="toggleYellow">Toggle Yellow</v-btn>

    <component title="빨강" :is="redComponentName"></component>
    <component title="노랑" :is="yellowComponentName"></component>

    <component title="요리" :is="'Cooking'"></component>
  </v-sheet>
</template>

<script type="text/javascript">
  import Red from "@/components/Red"
  import Yellow from "@/components/Yellow"
  import Cooking from "@/components/Cooking"

  export default {
    name: 'component-page',
    data() {
      return {
        redComponentName: undefined,
        yellowComponentName: undefined,
      };
    },
    components: {
      Red,
      Yellow,
      Cooking,
    },
    methods: {
      toggleRed: function () {
        if (this.redComponentName === 'Red') {
          this.redComponentName = undefined;
        } else {
          this.redComponentName = 'Red';
        }
      },
      toggleYellow: function () {
        if (this.yellowComponentName === 'Yellow') {
          this.yellowComponentName = undefined;
        } else {
          this.yellowComponentName = 'Yellow';
        }
      },
    },
  };
</script>