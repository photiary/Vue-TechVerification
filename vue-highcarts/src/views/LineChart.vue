<template lang="html">
  <highcharts :options="chartOptions"></highcharts>
</template>

<script type="text/javascript">
import Highcharts from 'highcharts'

export default {
  name: "line-chart",
  // 컴포넌트 어트리뷰트 그룹
  props: {
    bar: {}, // 알파벳순으로 정렬합니다
  },
  // 컴포넌트 변수 그룹
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3], // sample data
          },
        ],
      },
    };
  },
  computed: {},
  // 컴포넌트가 다른 컴포넌트를 사용할 경우
  components: {
    Highcharts,
  },
  // 컴포넌트 메서드 그룹
  watch: {},
  methods: {},
  // 컴포넌트 라이프사이클 메서드 그룹
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>

<style scoped></style>
