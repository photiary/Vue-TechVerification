<template lang="html">
  <v-sheet>
    <v-btn @click="$router.back()">◀ Back</v-btn>

    <v-btn @click="toggleRed">Toggle Red</v-btn>
    <v-btn @click="toggleYellow">Toggle Yellow</v-btn>

    <v-card v-if="isActiveRed" color="red">
      <v-card-text>
        {{ redTitle }}
      </v-card-text>
    </v-card>

    <v-card v-if="isActiveYellow" color="yellow">
      <v-card-text>
        {{ yellowTitle }}
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script type="text/javascript">
  export default {
    name: 'direct-page',
    data() {
      return {
        isActiveRed: false,
        isActiveYellow: false,
        redTitle: '빨강',
        yellowTitle: '노랑',
      };
    },
    methods: {
      toggleRed: function () {
        this.isActiveRed = !this.isActiveRed
      },
      toggleYellow: function () {
        this.isActiveYellow = !this.isActiveYellow
      },
    },
  };
</script>