<template>
  <v-card elevation="5">
    <v-data-table
      :headers="headers"
      :items="categoryData"
      item-value="id"
      class="text-no-wrap p-2"
      :items-per-page="itemsPerPage"
      @update:items-per-page="(val) => (itemsPerPage = val)"
      :items-per-page-options="[5, 10, 20, 50]"
      show-select
      item-selectable
      no-data-text="Không có dữ liệu"
      items-per-page-text="Hiển thị: ">
      <template #[`column.data-table-select`]>
        <v-checkbox
          v-model="allSelected"
          @click="toggleAll"
          :indeterminate="indeterminate"
          hide-details />
      </template>

      <template #[`item.stt`]="{ index }">
        {{ index + 1 }}
      </template>

      <template #[`item.name`]="{ item }">
        <v-text-field
          class="mb-3"
          density="compact"
          v-model="item.name"
          @input="updateSlug(item)"
          hide-details
          variant="underlined"></v-text-field>
      </template>

      <template #[`item.slug`]="{ item }">
        <v-text-field
          class="mb-3"
          density="compact"
          v-model="item.slug"
          hide-details
          variant="underlined"></v-text-field>
      </template>

      <template #[`item.status`]="{ item }">
        <v-switch v-model="item.is_active" color="success" inset hide-details class="text-end" />
      </template>

      <template #[`item.action`]="{ item }">
        <div class="text-end">
          <v-btn
            icon="mdi-content-save"
            color="blue"
            variant="text"
            @click="saveItem(item)"></v-btn>
          <v-btn icon="mdi-delete" color="red" variant="text" @click="deleteItem(item)"></v-btn>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const headers = [
  { title: '', key: 'data-table-select', width: '60px' },
  { title: 'STT', key: 'stt', sortable: false, width: '60px' },
  { title: 'Tên danh mục', key: 'name', minWidth: '300px' },
  { title: 'Slug', key: 'slug', minWidth: '300px' },
  { title: 'Trạng thái', key: 'status', sortable: false, width: '100px' },
  { title: '', key: 'action', width: '100px' }
];

const categoryData = ref([
  { id: 1, name: 'A Galasasen Slixby', slug: 'a-galasasen-slixby', is_active: true },
  { id: 2, name: 'B Halsey Redmore', slug: 'b-halsey-redmore', is_active: true },
  { id: 3, name: 'C Marjory Sicely', slug: 'c-marjory-sicely', is_active: false },
  { id: 4, name: 'D Cyrill Risby', slug: 'd-cyrill-risby', is_active: true },
  { id: 5, name: 'E Maggy Hurran', slug: 'e-maggy-hurran', is_active: false },
  { id: 6, name: 'F Silvain Halstead', slug: 'f-silvain-halstead', is_active: true },
  { id: 7, name: 'G Breena Gallemore', slug: 'g-breena-gallemore', is_active: false },
  { id: 8, name: 'H Kathryne Liger', slug: 'h-kathryne-liger', is_active: false }
]);

const itemsPerPage = ref(5);

const selectedItems = ref<{ id: number; name: string; is_active: boolean }[]>([]);

const allSelected = computed({
  get: () => selectedItems.value.length === categoryData.value.length,
  set: (value) => toggleAll(value)
});

const indeterminate = computed(
  () => selectedItems.value.length > 0 && selectedItems.value.length < categoryData.value.length
);

const generateSlug = (text: string) => {
  return !text
    ? ''
    : text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-');
};

function toggleAll(value: any) {
  if (value) {
    selectedItems.value = [...categoryData.value];
  } else {
    selectedItems.value = [];
  }
}

function updateSlug(item: any) {
  item.slug = generateSlug(item.name);
}

function saveItem(item: any) {
  console.log('Saving:', item);
}

function deleteItem(item: any) {
  const index = categoryData.value.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    categoryData.value.splice(index, 1);
  }
}
</script>
