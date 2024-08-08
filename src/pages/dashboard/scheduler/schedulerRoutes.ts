import { RouteRecordRaw } from "vue-router";

const schedulerRoutes: Array<RouteRecordRaw> = [
  {
    path: "scheduler/:schedulerId",
    component: () => import("./rootView.vue"),
    children: [
      {
        path: "render/:renderId",
        component: () => import("./render/renderView.vue"),
      },
    ],
  },
];

export default schedulerRoutes;
