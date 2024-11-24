<template>
  <v-card>
    <v-layout class="rounded rounded-md d-flex">
      <AdminSidebar :isMobile="isMobile" v-model="drawer" />

      <v-main class="d-flex align-center justify-center flex-column bg-content min-h-screen">
        <AdminHeader :isMobile="isMobile" @openSidebar="openSidebar" />
        <div class="w-full px-6 h-full pt-3">
          <RouterView />
        </div>
        <AdminFooter />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script lang="ts" setup>
import AdminSidebar from '@/layouts/admin/AdminSidebar.vue';
import AdminHeader from '@/layouts/admin/AdminHeader.vue';
import AdminFooter from '@/layouts/admin/AdminFooter.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const isMobile = ref(false);
const drawer = ref(true);

const checkIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
  drawer.value = !isMobile.value;
};

const openSidebar = () => {
  drawer.value = true;
};

onMounted(() => {
  checkIsMobile();
  window.addEventListener('resize', checkIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkIsMobile);
});
</script>

<style>
.v-navigation-drawer__content {
  overflow-y: hidden !important;
}
</style>
