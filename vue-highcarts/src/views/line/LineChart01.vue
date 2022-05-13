<template lang="html">
  <div>
    <div>
      <textarea v-model="seriesText" style="width: 100%; height: 250px"></textarea>
    </div>
    <div>
      <highcharts :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script type="text/javascript">
import { Chart } from 'highcharts-vue'

export default {
  name: "line-chart",
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    };
  },
  computed: {
    seriesText: {
      get () {
        return JSON.stringify(this.chartOptions.series);
      },
      set (value) {
        this.chartOptions.series = JSON.parse(value)
      },
    },
  },
  components: {
    highcharts: Chart,
  },
};
</script>

<style scoped></style>
