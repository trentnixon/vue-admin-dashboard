import { RouteRecordRaw } from 'vue-router';

const settingsRoutes: Array<RouteRecordRaw> = [
  {
    path: 'settings',
    component: () => import('./rootView.vue'),
    children: [
      {
        path: 'general',
        component: () => import('./settings/GeneralSettings.vue')
      },
      {
        path: 'system-logs',
        component: () => import('./settings/SystemLogs.vue')
      },
      {
        path: 'user-management',
        component: () => import('./settings/UserManagement.vue')
      }
    ]
  }
];

export default settingsRoutes;
