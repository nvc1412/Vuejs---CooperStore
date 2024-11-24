<template>
  <v-app-bar scroll-behavior="hide elevate" scroll-threshold="10" class="px-6" color="content">
    <template v-if="isMobile" v-slot:prepend>
      <v-app-bar-nav-icon @click="$emit('openSidebar')" />
    </template>
    <template v-slot:append>
      <v-badge dot location="bottom right" offset-x="3" offset-y="3" color="success" bordered>
        <v-avatar class="cursor-pointer" color="primary" variant="tonal">
          <v-img :src="AvatarDefault" />

          <v-menu activator="parent" width="230" location="bottom end" offset="14px">
            <v-list>
              <v-list-item>
                <template #prepend>
                  <v-list-item-action start>
                    <v-badge dot location="bottom right" offset-x="3" offset-y="3" color="success">
                      <v-avatar color="primary" variant="tonal">
                        <v-img :src="AvatarDefault" />
                      </v-avatar>
                    </v-badge>
                  </v-list-item-action>
                </template>

                <v-list-item-title class="font-weight-semibold"> Cường Nguyễn </v-list-item-title>
                <v-list-item-subtitle>Admin</v-list-item-subtitle>
              </v-list-item>

              <v-divider class="my-2 border-opacity-75" :thickness="2" />

              <v-list-item to="/admin/login">
                <template #prepend>
                  <v-icon class="me-2" icon="mdi-logout" size="22" />
                </template>

                <v-list-item-title>Đăng xuất</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-avatar>
      </v-badge>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import AvatarDefault from '@/assets/images/avatars/avatar_default.png';

defineProps({
  isMobile: Boolean
});
</script>
