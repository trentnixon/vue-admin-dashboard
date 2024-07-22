import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '@/layouts/HomeLayout.vue';
import DashboardLayout from '@/layouts/DashboardLayout.vue';

import AdminLogin from '@/pages/AdminLogin.vue';
import dashboardRoutes from '@/pages/dashboard/dashboardRoutes';
import { useAuthStore } from '@/store/auth/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: AdminLogin,
      },
    ],
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [...dashboardRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
