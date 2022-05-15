<template lang="html">
  <v-sheet>
    <h2>🌭 Component</h2>

    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleColor('Red', '빨강')">Red</v-btn>
    <v-btn @click="toggleColor('Yellow', '노랑')">Yellow</v-btn>
    <!-- <v-btn @click="toggleColor('Cooking', '요리')">Cooking</v-btn> -->

    <component :title="title" :is="targetComponent"></component>
  </v-sheet>
</template>

<script type="text/javascript">
  import Red from "@/components/Red"
  import Yellow from "@/components/Yellow"
  // import Cooking from "@/components/Cooking"

  export default {
    name: 'component-page',
    data() {
      return {
        targetComponent: undefined,
        title: undefined,
      };
    },
    components: {
      Red,
      Yellow,
      // Cooking,
    },
    methods: {
      toggleColor: function (targetComponent, title) {
        if (this.targetComponent !== targetComponent) {
          this.targetComponent = targetComponent;
          this.title = title;
        }
      },
    },
  };
</script>