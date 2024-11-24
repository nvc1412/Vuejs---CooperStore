<template>
  <v-navigation-drawer
    class="bg-menu overscroll-y-none"
    v-model="drawer"
    :rail="rail && !isMobile"
    :temporary="isMobile"
    :permanent="!isMobile"
    @click="rail = false">
    <v-list-item nav>
      <template #prepend>
        <v-icon class="-rotate-12" size="x-large" color="#fff">mdi-home</v-icon>
      </template>
      <template #title>
        <h1 class="text-base font-bold uppercase">Cooper Store</h1>
      </template>
      <template v-slot:append>
        <v-btn v-if="!isMobile" icon="mdi-menu" variant="text" @click.stop="rail = !rail"></v-btn>
        <v-btn v-else icon="mdi-close" variant="text" @click="closeSidebar"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list class="custom-scrollbar" density="compact" nav>
      <v-list-item
        class="py-4"
        prepend-icon="mdi-chart-bar"
        title="BÁO CÁO - THỐNG KÊ"
        value="dashboard"
        to="/admin/dashboard"
        :class="{ active: route.path === '/admin/dashboard' }"
        color="active" />
      <v-list-item
        class="py-4"
        prepend-icon="mdi-view-list"
        title="DANH MỤC"
        value="category"
        color="active" />
      <v-list-item
        class="py-4"
        prepend-icon="mdi-tshirt-crew"
        title="SẢN PHẨM"
        value="product"
        color="active" />

      <v-list-group value="bill">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="py-4"
            v-bind="props"
            prepend-icon="mdi-printer"
            title="ĐƠN HÀNG"
            color="active" />
        </template>
        <div class="bg-white rounded">
          <v-list-item
            class="py-4"
            title="TẤT CẢ ĐƠN HÀNG"
            value="allBill"
            color="primary"></v-list-item>
          <v-list-item
            class="py-4"
            title="CHƯA ĐƯỢC IN"
            value="prepareBill"
            color="primary"></v-list-item>
        </div>
      </v-list-group>

      <v-list-item
        class="py-4"
        prepend-icon="mdi-comment"
        title="ĐÁNH GIÁ"
        value="rating"
        color="active" />
      <v-list-item
        class="py-4"
        prepend-icon="mdi-account-cog"
        title="TÀI KHOẢN"
        value="account"
        color="active" />

      <v-list-group value="setting">
        <template v-slot:activator="{ props }">
          <v-list-item
            class="py-4"
            v-bind="props"
            prepend-icon="mdi-cog"
            title="CẤU HÌNH"
            color="active" />
        </template>
        <div class="bg-white rounded">
          <v-list-item class="py-4" title="BANNER" value="banner" color="primary"></v-list-item>
          <v-list-item class="py-4" title="LOGO" value="logo" color="primary"></v-list-item>
        </div>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  modelValue: Boolean,
  isMobile: Boolean
});

const route = useRoute();
const drawer = ref(props.modelValue);
const rail = ref(false);
const emit = defineEmits(['update:modelValue']);

watch(
  () => props.modelValue,
  (newValue) => {
    drawer.value = newValue;
  }
);

watch(
  () => drawer.value,
  (newValue) => {
    emit('update:modelValue', newValue);
  }
);

const closeSidebar = () => {
  drawer.value = false;
};
</script>

<style scoped>
.custom-scrollbar {
  max-height: 100vh;
  overflow-y: hidden;
}

.custom-scrollbar:hover {
  overflow-y: auto;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #dddce1;
  border-radius: 4px;
}
</style>
