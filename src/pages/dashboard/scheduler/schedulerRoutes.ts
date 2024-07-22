import { RouteRecordRaw } from 'vue-router';

const schedulerRoutes: Array<RouteRecordRaw> = [
  {
    path: 'scheduler',
    component: () => import('./rootView.vue'),
  },
];

export default schedulerRoutes;
