<template lang="html">
  <div>
    <v-overlay absolute :value="isActive" @click="$_click_overlay">
    </v-overlay>

    <v-slide-x-transition>
      <v-list
        dense
        width="70%"
        height="100%"
        style="position: absolute; z-index: 6"
        v-show="isActive"
      >
        <v-list-item link :to="{ name: 'userInfo' }">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content> User Info </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-slide-x-transition>
  </div>
</template>

<script type="text/javascript">
export default {
  // 이름 적는 것을 잊지마세요
  name: "p-navigation-drawer",
  // compose new components
  extends: {},
  // 컴포넌트 어트리뷰트 그룹
  props: ['value'],
  // 컴포넌트 변수 그룹
  data() {
    return {
      isActive: false,
    };
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {},
  // 컴포넌트 메서드 그룹
  watch: {
    $route: '$_onRouteChange',
    value: function (val) {
      if (val == null) {
        this.$_init();
        return
      }
      if (val !== this.isActive) this.isActive = val;
    },
  },
  methods: {
    $_click_overlay: function () {
      this.$router.back();
    },
    $_init: function () {
      this.isActive = this.value;
    },
    $_onRouteChange: function () {
      if (this.isActive) {
        this.isActive = false;
      }
    },
  },
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
  mounted() {},
};
</script>
