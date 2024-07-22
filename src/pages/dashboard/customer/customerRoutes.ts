import { RouteRecordRaw } from "vue-router";
import rootView from "./rootView.vue";

const customerRoutes: Array<RouteRecordRaw> = [
  {
    path: "customer",
    component: rootView,
  },
];

export default customerRoutes;
