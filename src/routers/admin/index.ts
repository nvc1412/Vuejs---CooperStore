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
  }
  // Các route khác cho admin
];
