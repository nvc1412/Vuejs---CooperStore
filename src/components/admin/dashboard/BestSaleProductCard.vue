<template>
  <v-card class="position-relative" elevation="5">
    <v-card-text>
      <div class="mb-2">
        <h5 class="text-h5">Sản phẩm bán chạy! <span class="text-high-emphasis">🎉</span></h5>
        <div class="text-body-1">Doanh thu sản phẩm</div>
      </div>
      <h4 class="text-3xl text-primary">42.8k VNĐ</h4>
      <div class="text-body-1 mb-2">
        với 42.8k lượt mua <span class="text-high-emphasis">🚀</span>
      </div>
      <v-btn size="small" color="info"> chi tiết </v-btn>
    </v-card-text>

    <v-img :src="trophy" class="trophy" />
  </v-card>
</template>

<script setup lang="ts">
import trophy from '@/assets/images/logos/best_sale_product.jpg';
</script>

<style lang="scss" scoped>
.v-card .trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 1.25rem;
  inset-inline-end: 1.25rem;
}
</style>
