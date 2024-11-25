<template>
  <v-row class="match-height">
    <v-col cols="12" md="12">
      <CategoryCreate />
    </v-col>

    <v-col cols="12" md="12">
      <CategoryList />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import CategoryCreate from '@/components/admin/category/CategoryCreate.vue';
import CategoryList from '@/components/admin/category/CategoryList.vue';
</script>
