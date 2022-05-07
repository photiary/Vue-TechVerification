<template lang="html">
  <v-expand-transition>
    <v-card
      color='blue'
      elevation="0"
      class="rounded-0"
      v-show="isMounted">
      <v-app-bar>
        <v-icon @click.stop="$router.back()">
          mdi-arrow-left
        </v-icon>
        <v-spacer></v-spacer>
        <v-btn
          color="blue"
          @click.stop="$_clickSubmit">
          Submit
        </v-btn>
      </v-app-bar>
      <v-card-text>
        <v-textarea
          v-model="textArea"
          solo
          label="textarea"
          height="200px"
        ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-row
          align="center"
          justify="space-around"
          class="mt-n8 mb-2"
        >
          <v-icon
            @click.stop="$_clickImage">
            mdi-image
          </v-icon>
          <v-icon
            @click.stop="$_clickCamera">
            mdi-camera
          </v-icon>
          <v-icon
            @click.stop="$_clickText">
            mdi-card-text
          </v-icon>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'registry-item-page',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {},
    // 컴포넌트 변수 그룹
    data() {
      return {
        isMounted: false,
        textArea: undefined,
      };
    },
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {
      $_clickSubmit: function () {
        console.log('RegistryItemPage.$_clickSubmit textArea=', this.textArea);
      },
      $_clickImage: function () {
        console.log('RegistryItemPage.$_clickImage');
      },
      $_clickCamera: function () {
        console.log('RegistryItemPage.$_clickCamera');
      },
      $_clickText: function () {
        console.log('RegistryItemPage.$_clickText');
      },
    },
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate() {},
    mounted() {
      this.isMounted = !this.isMounted;
    },
  };
</script>

<style scoped>
</style>