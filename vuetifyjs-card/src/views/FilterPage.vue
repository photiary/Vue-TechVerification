<template lang="html">
  <v-card tile>
    <v-toolbar
      flat
      color="primary">
      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>Filter results</v-toolbar-title>
    </v-toolbar>

    <v-card-text>
      <h3 class="text-h6 mb-2">
        기간
      </h3>
      <v-chip-group
        active-class="primary--text"
        column
      >
        <v-chip>당일</v-chip>
        <v-chip>한주</v-chip>
        <v-chip>한달</v-chip>
        <v-chip>기간설정</v-chip>
      </v-chip-group>
    </v-card-text>
    <v-card-text>
      <h3 class="text-h6 mb-2">
        항목
      </h3>

      <v-chip-group
        column
        multiple
        active-class="primary--text"
      >
        <v-chip>Snowy Rock Place</v-chip>
        <v-chip>Honeylane Circle</v-chip>
        <v-chip>Elaine Street</v-chip>
        <v-chip>Court Street</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions class="justify-center">
      <v-btn color="primary" rounded>OK</v-btn>
      <v-btn color="primary" @click.stop="$router.back()" rounded>NO</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'FilterPage',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {},
    // 컴포넌트 변수 그룹
    data() {
      return {

      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {},
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    create() {},
    mounted() {
      this.$emit('mountedFilterPage');
    },
    destroyed() {},
  };
</script>

<style scoped>
</style>