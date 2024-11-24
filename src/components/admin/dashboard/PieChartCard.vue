<template>
  <v-card elevation="5">
    <PieChart class="d-flex justify-center pb-3" v-bind="pieChartProps" />
  </v-card>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { PieChart, usePieChart } from 'vue-chart-3';
import { computed, ref } from 'vue';

Chart.register(...registerables);

const data = ref([10, 20, 30]);

const chartData = computed(() => ({
  labels: ['Đang vận chuyển', 'Hủy', 'Thành công'],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['orange', 'red', 'green']
    }
  ]
}));

const options = computed(() => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    title: {
      display: true,
      text: 'Đơn hàng tháng này'
    },
    legend: {
      display: true,
      position: 'bottom'
    }
  }
}));

const { pieChartProps } = usePieChart({
  chartData,
  options
});
</script>
