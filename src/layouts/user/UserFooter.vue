<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>User Footer</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
export default {
  name: 'UserFooter'
};
</script>
