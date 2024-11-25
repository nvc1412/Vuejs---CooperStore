<template>
  <v-card elevation="5" class="mx-auto">
    <v-list-item class="p-4 bg-slate-50">
      <h6 class="text-h6 text-uppercase font-bold text-green-500">Thêm danh mục</h6>
    </v-list-item>

    <v-divider class="border-opacity-75" :thickness="1"></v-divider>

    <v-card-text>
      <div class="overflow-x-auto">
        <v-form @submit.prevent>
          <v-table class="border table-auto min-w-[600px] w-full">
            <thead>
              <tr class="bg-slate-100">
                <th class="text-left min-w-80 w-4/12 px-4 py-2">Tên danh mục</th>
                <th class="text-left min-w-80 w-4/12 px-4 py-2">Slug</th>
                <th class="text-center min-w-28 w-2/12 px-4 py-2">Trạng thái</th>
                <th class="w-1/12 px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2">
                  <v-text-field
                    class="mt-4"
                    v-model="createForm.name"
                    clearable
                    variant="outlined"
                    density="comfortable"
                    :rules="[rules.name]"
                    label="Nhập tên danh mục"></v-text-field>
                </td>
                <td class="px-4 py-2">
                  <v-text-field
                    class="mt-4"
                    v-model="createForm.slug"
                    clearable
                    variant="outlined"
                    density="comfortable"
                    :rules="[rules.slug]"
                    label="Slug"></v-text-field>
                </td>
                <td class="flex justify-center items-center px-4 py-2 mt-5">
                  <v-switch
                    v-model="createForm.is_active"
                    color="success"
                    inset
                    hide-details></v-switch>
                </td>
                <td class="text-right px-4 pb-3">
                  <v-btn prepend-icon="mdi-plus" type="submit" color="green" flat> Thêm </v-btn>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-form>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// Dữ liệu form
const createForm = ref({
  name: '',
  slug: '',
  is_active: true
});

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

watch(
  () => createForm.value.name,
  (newName) => {
    createForm.value.slug = generateSlug(newName);
  }
);

const rules = {
  name: (value: string) => !!value || '* Tên danh mục không được để trống!',
  slug: (value: string) => !!value || '* Slug không được để trống!'
};
</script>
