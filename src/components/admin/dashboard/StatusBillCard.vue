<template>
  <v-card
    class="position-relative"
    elevation="5"
    :class="['border-l-4', `border-${status.color}-500`, 'py-3']">
    <v-card-text>
      <div class="mb-2">
        <h5 :class="['text-xs', 'text-uppercase', 'font-bold', `text-${status.color}`]">
          {{ status.title }}
        </h5>
      </div>
      <h5 class="text-h5">{{ status.quantity }}</h5>
    </v-card-text>

    <v-icon size="x-large" class="trophy" :icon="status.icon" color="blue-grey-darken-2" />
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  status: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.v-card .trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 1.25rem;
  inset-inline-end: 1.25rem;
}

.border-red-500 {
  border-color: rgb(239 68 68);
}

.border-orange-500 {
  border-color: rgb(249 115 22);
}

.border-indigo-500 {
  border-color: rgb(99 102 241);
}
</style>
