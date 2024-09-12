import { RouteRecordRaw } from 'vue-router';
import accountRoutes from './account/accountRoutes';
import accountsRoutes from './accounts/accountsRoutes';
import customerRoutes from './customer/customerRoutes';
import customersRoutes from './customers/customersRoutes';
import marketingRoutes from './marketing/marketingRoutes';
import schedulerRoutes from './scheduler/schedulerRoutes';
import schedulersRoutes from './schedulers/schedulersRoutes';
import settingsRoutes from './settings/settingsRoutes';

const dashboardRoutes: Array<RouteRecordRaw> = [
  {
    path: 'overview',
    component: () => import('./rootView.vue')
  },
  ...accountRoutes,
  ...accountsRoutes,
  ...customerRoutes,
  ...customersRoutes,
  ...marketingRoutes,
  ...schedulerRoutes,
  ...schedulersRoutes,
  ...settingsRoutes
];

export default dashboardRoutes;
