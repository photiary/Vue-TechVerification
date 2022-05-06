<template lang="html">
  <v-row
    v-show="value">
    <v-col>
      <v-list
      dense
      width="70%"
      height="100%"
      style="position: absolute; z-index: 6"
    >
      <v-list-item link :to="{ name: 'userInfo' }">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content> User Info </v-list-item-content>
      </v-list-item>
    </v-list>
      <v-sheet
        color="grey"
        width="100%"
        height="100%"
        @click="$_click_overlay"
        style="position: absolute; opacity: 0.4; z-index: 5"
      ></v-sheet>
    </v-col>
  </v-row>
</template>

<script type="text/javascript">
export default {
  // 이름 적는 것을 잊지마세요
  name: "pNavigationDrawer",
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: ['value'],
  // 컴포넌트 변수 그룹
  data() {
    return {
      isOverlay: this.value,
    };
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {},
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {
    $_click_overlay: function () {
      this.isOverlay = !this.isOverlay;
    },
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
  mounted() {},
};
</script>
