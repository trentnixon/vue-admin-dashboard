import { RouteRecordRaw } from 'vue-router';

const schedulerRoutes: Array<RouteRecordRaw> = [
  {
    path: 'scheduler/:id',
    component: () => import('./rootView.vue'),
    children: [
      {
        path: 'render/:id',
        component: () => import('./render/renderView.vue'),
      }
    ],
  },
];

export default schedulerRoutes;

