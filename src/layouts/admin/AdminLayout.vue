<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- Sidebar cho Admin -->
      <AdminSidebar />
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- Header cho Admin -->
      <AdminHeader />
    </v-app-bar>

    <v-main>
      <router-view />
      <!-- Hiển thị nội dung của các trang con -->
    </v-main>
    <AdminFooter />
  </v-app>
</template>

<script lang="ts">
import AdminSidebar from '@/layouts/admin/AdminSidebar.vue';
import AdminHeader from '@/layouts/admin/AdminHeader.vue';
import AdminFooter from '@/layouts/admin/AdminFooter.vue';

export default {
  components: {
    AdminSidebar,
    AdminHeader,
    AdminFooter
  }
};
</script>

<style scoped>
/* Các style cho layout admin nếu cần */
</style>
