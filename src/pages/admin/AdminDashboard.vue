<template>
  <v-row class="match-height">
    <v-col cols="12" md="8">
      <OverviewCard />
    </v-col>

    <v-col cols="12" md="4">
      <BestSaleProductCard />
    </v-col>

    <v-col v-for="status in statusBills" :key="status.title" cols="12" md="4">
      <StatusBillCard :status="status" />
    </v-col>

    <v-col cols="12" md="8">
      <BarChartCard />
    </v-col>

    <v-col cols="12" md="4">
      <PieChartCard />
    </v-col>

    <v-col cols="12" md="12">
      <CalendarCard />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import OverviewCard from '@/components/admin/dashboard/OverviewCard.vue';
import BestSaleProductCard from '@/components/admin/dashboard/BestSaleProductCard.vue';
import StatusBillCard from '@/components/admin/dashboard/StatusBillCard.vue';
import BarChartCard from '@/components/admin/dashboard/BarChartCard.vue';
import PieChartCard from '@/components/admin/dashboard/PieChartCard.vue';
import CalendarCard from '@/components/admin/dashboard/CalendarCard.vue';

const statusBills = [
  {
    title: 'Đơn hàng mới',
    quantity: '10',
    icon: 'mdi-receipt-text-outline',
    color: 'indigo'
  },
  {
    title: 'Đơn hàng đang được giao',
    quantity: '20',
    icon: 'mdi-truck-fast-outline',
    color: 'orange'
  },
  {
    title: 'Đơn hàng bị hủy',
    quantity: '30',
    icon: 'mdi-trash-can-outline',
    color: 'red'
  }
];
</script>
