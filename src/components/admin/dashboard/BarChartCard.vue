<template>
  <v-card elevation="5">
    <BarChart class="px-3" v-bind="barChartProps" />
  </v-card>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { BarChart, useBarChart } from 'vue-chart-3';
import { computed, ref } from 'vue';

Chart.register(...registerables);

const data = ref([
  3000000, 4000000, 6000000, 7000000, 5000000, 3000000, 4000000, 6000000, 7000000, 5000000, 4000000,
  7000000
]);

const chartData = computed(() => ({
  labels: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  datasets: [
    {
      data: data.value,
      backgroundColor: [
        'blue',
        'red',
        'violet',
        'yellow',
        'green',
        'orange',
        'brown',
        'cyan',
        'lime',
        'black',
        'gray',
        'pink'
      ]
    }
  ]
}));

const options = computed(() => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: 'Doanh thu hàng tháng'
    },
    legend: {
      display: false
    }
  }
}));

const { barChartProps } = useBarChart({
  chartData,
  options
});
</script>
