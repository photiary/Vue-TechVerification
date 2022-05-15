<template lang="html">
  <v-sheet>
    <h2>🥐 Direct</h2>

    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleColor('red')">Red</v-btn>
    <v-btn @click="toggleColor('yellow')">Yellow</v-btn>

    <v-card v-if="colorType === 'red'" color="red">
      <v-card-text>
        빨강
      </v-card-text>
    </v-card>
    <v-card v-else-if="colorType === 'yellow'" color="yellow">
      <v-card-text>
        노랑
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script type="text/javascript">
  export default {
    name: 'direct-page',
    data() {
      return {
        colorType: false,
        isActiveYellow: false,
      };
    },
    methods: {
      toggleColor: function (colorType) {
        if (this.colorType !== colorType) {
          this.colorType = colorType;
        }
      },
    },
  };
</script>