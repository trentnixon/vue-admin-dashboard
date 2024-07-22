import { RouteRecordRaw } from 'vue-router';

const customersRoutes: Array<RouteRecordRaw> = [
  {
    path: 'customers',
    component: () => import('./rootView.vue'),
    children: [
      {
        path: 'all-customers',
        component: () => import('./overview/overView.vue'),
      },
      {
        path: 'free-trial',
        component: () => import('./freeTrials/freeTrials.vue'),
      },
    ],
  },
];

export default customersRoutes;
