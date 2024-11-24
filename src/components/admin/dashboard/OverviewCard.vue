<template>
  <v-card title="Tổng quan" elevation="5">
    <template #subtitle>
      <p class="text-body-1 mb-0">
        <span class="d-inline-block font-weight-medium text-high-emphasis"
          >Doanh thu tăng 48.5%</span
        >
        <span class="text-high-emphasis">😎</span> trong tháng này
      </p>
    </template>

    <template #append>
      <v-btn variant="text" color="indigo" icon="mdi-refresh"></v-btn>
    </template>

    <v-card-text class="pt-10">
      <v-row>
        <v-col v-for="item in statistics" :key="item.title" cols="12" sm="6" md="3">
          <div class="d-flex align-center gap-x-3">
            <v-avatar :color="item.color" rounded size="40" class="elevation-2 border-0">
              <v-icon size="24" :icon="item.icon" color="white" />
            </v-avatar>

            <div class="d-flex flex-column">
              <div class="text-body-1">
                {{ item.title }}
              </div>
              <h5 class="text-h5">
                {{ item.stats }}
              </h5>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const statistics = [
  {
    title: 'Đơn hàng',
    stats: '245k',
    icon: 'mdi-invoice-text-multiple-outline',
    color: 'secondary'
  },
  {
    title: 'Khách hàng',
    stats: '12.5k',
    icon: 'mdi-account-multiple',
    color: 'success'
  },
  {
    title: 'Sản phẩm',
    stats: '1.54k',
    icon: 'mdi-tshirt-crew',
    color: 'warning'
  },
  {
    title: 'Doanh thu',
    stats: '88Tr',
    icon: 'mdi-cash-multiple',
    color: 'info'
  }
];
</script>
