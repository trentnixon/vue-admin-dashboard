import { RouteRecordRaw } from 'vue-router';
import rootView from './overview/rootView.vue';
import AccountData from './data/AccountData.vue';
import MediaLibraries from './mediaLibraries/MediaLibraries.vue';
import DisplayRenders from './renders/DisplayRenders.vue';

const accountRoutes: Array<RouteRecordRaw> = [
  {
    path: 'account/:id',
    component: () => import('./rootView.vue'),
    children: [
      {
        path: 'home',
        component: rootView,
      },
      {
        path: 'data',
        component: AccountData,
      },
      {
        path: 'medialibrary',
        component: MediaLibraries,
      },
      {
        path: 'renders',
        component: DisplayRenders,
      },
    ],
  },
];

export default accountRoutes;
