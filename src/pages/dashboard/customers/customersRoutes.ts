import { RouteRecordRaw } from "vue-router";
import ActivityView from "./activity/activityView.vue";
import RevenueView from "./revenue/revenueView.vue";
import HomeView from "@/pages/dashboard/customers/home/homeView.vue";

const customersRoutes: Array<RouteRecordRaw> = [
  {
    path: "customers",
    component: () => import("./rootView.vue"),
    children: [
      {
        path: "all-customers",
        component: () => import("./overview/overView.vue"),
      },
      {
        path: "free-trial",
        component: () => import("./freeTrials/freeTrials.vue"),
      },
      {
        path: "home",
        component: HomeView,
      },
      {
        path: "activity",
        component: ActivityView,
      },
      {
        path: "revenue",
        component: RevenueView,
      },
    ],
  },
];

export default customersRoutes;
