import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AdminLayout from '@/layouts/admin/AdminLayout.vue';
import AdminLogin from '@/pages/admin/AdminLogin.vue';
import UserLayout from '@/layouts/user/UserLayout.vue';

import adminRoutes from './admin';
import userRoutes from './user';

const routes: RouteRecordRaw[] = [
  {
    path: '/admin',
    component: AdminLayout,
    children: adminRoutes
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/',
    component: UserLayout,
    children: userRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
