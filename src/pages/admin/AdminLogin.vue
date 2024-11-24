<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4 bg-orange-50">
    <v-card class="auth-card pa-4 pt-7 shadow-xl" max-width="448">
      <v-card-item class="justify-center mt-2 mb-6">
        <v-img max-height="200" :src="LogoHeader" width="200"></v-img>
      </v-card-item>

      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                variant="outlined"
                color="primary"
                hide-details />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                label="Mật khẩu"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                variant="outlined"
                color="primary"
                hide-details
                @click:append-inner="isPasswordVisible = !isPasswordVisible" />
            </v-col>

            <v-col cols="12">
              <div class="d-flex align-center justify-space-between flex-wrap mb-6">
                <v-checkbox
                  v-model="form.remember"
                  label="Nhớ mật khẩu"
                  color="indigo"
                  hide-details />
                <a class="text-primary" href="javascript:void(0)"> Quên mật khẩu? </a>
              </div>
              <v-btn block type="submit" color="primary" flat> Đăng nhập </v-btn>
            </v-col>

            <v-col cols="12" class="d-flex align-center">
              <v-divider class="border-opacity-75" :thickness="2"></v-divider>
              <span class="mx-4">Hoặc</span>
              <v-divider class="border-opacity-75" :thickness="2"></v-divider>
            </v-col>

            <v-col cols="12" class="text-center">
              <v-btn block type="submit" color="white" outlined prepend-icon="mdi-google">
                Dùng tài khoản google
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LogoHeader from '@/assets/images/logos/logo_header.png';
import { useRouter } from 'vue-router';

const form = ref({
  email: '',
  password: '',
  remember: false
});

const isPasswordVisible = ref(false);
const router = useRouter();
const handleLogin = () => {
  router.push('/admin/dashboard');
};
</script>

<style lang="scss">
.auth-wrapper {
  min-block-size: calc(var(--vh, 1vh) * 100);
}

.auth-card {
  z-index: 1 !important;
}
</style>
