import { RouteRecordRaw } from 'vue-router';

const marketingRoutes: Array<RouteRecordRaw> = [
  {
    path: 'marketing',
    component: () => import('./rootView.vue')
  }
];

export default marketingRoutes;
