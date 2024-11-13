<template>
  <v-app>
    <UserHeader />
    <!-- Thanh điều hướng chính cho người dùng -->
    <h1>User Layout</h1>

    <v-main>
      <router-view />
      <!-- Hiển thị nội dung của các trang con -->
    </v-main>

    <UserFooter />
  </v-app>
</template>

<script lang="ts">
import UserHeader from '@/layouts/user/UserHeader.vue';
import UserFooter from '@/layouts/user/UserFooter.vue';

export default {
  components: {
    UserHeader,
    UserFooter
  }
};
</script>

<style scoped>
/* Các style cho layout người dùng nếu cần */
</style>
