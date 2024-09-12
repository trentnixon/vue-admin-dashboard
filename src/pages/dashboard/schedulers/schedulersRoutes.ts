import { RouteRecordRaw } from 'vue-router';

const schedulersRoutes: Array<RouteRecordRaw> = [
  {
    path: 'schedulers',
    component: () => import('./rootView.vue')
  }
];

export default schedulersRoutes;
