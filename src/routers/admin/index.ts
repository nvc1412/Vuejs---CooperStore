export default [
  {
    path: '',
    redirect: '/admin/dashboard'
  },
  {
    path: 'dashboard',
    name: 'admin-dashboard',
    component: () => import('@/pages/admin/AdminDashboard.vue'),
    meta: { title: 'Báo cáo - Thống kê' }
  },
  {
    path: 'category',
    name: 'admin-category',
    component: () => import('@/pages/admin/AdminCategory.vue'),
    meta: { title: 'Danh mục' }
  }
  // Các route khác cho admin
];
