import { RouteRecordRaw } from 'vue-router';

const schedulerRoutes: Array<RouteRecordRaw> = [
  {
    path: 'scheduler/:schedulerId',
    component: () => import('./rootView.vue'),
    children: [
      {
        path: 'render/:renderId',
        component: () => import('./render/renderView.vue')
      },
      {
        path: 'render/:renderId/download/:downloadId',
        component: () => import('./render/downloads/downloadView.vue')
      },
      {
        path: 'debugDownloads/:renderId',
        component: () => import('./render/DownloadsDebug.vue')
      },
      {
        path: 'debugRenders/:renderId',
        component: () => import('./render/RendersDebug.vue')
      },
      {
        path: 'debugAiArticles/:renderId',
        component: () => import('./render/AIArticlesDebug.vue')
      }
    ]
  }
];

export default schedulerRoutes;
