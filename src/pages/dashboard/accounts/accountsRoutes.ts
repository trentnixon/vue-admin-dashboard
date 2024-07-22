import { RouteRecordRaw } from 'vue-router';

const accountsRoutes: Array<RouteRecordRaw> = [
  {
    path: 'accounts',
    component: () => import('./rootView.vue'),
  },
];

export default accountsRoutes;
