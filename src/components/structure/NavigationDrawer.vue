<template>
  <v-navigation-drawer app  color="surface">
    <v-list>
      <v-list-item
        prepend-avatar="/android-chrome-192x192.png"
        subtitle="Founder"
        title="Trent Nixon"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <template v-for="(item, index) in topNavigationItems" :key="index">
        <v-list-item
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          nav
        ></v-list-item>
      </template>
    </v-list>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const topNavigationItems = ref([
  {
    to: "/dashboard/overview",
    icon: "mdi-view-dashboard",
    title: "Overview",
  },
  {
    to: "/dashboard/accounts",
    icon: "mdi-account",
    title: "Accounts",
  },
  {
    to: "/dashboard/customers/home",
    icon: "mdi-currency-usd",
    title: "Customers",
  },
  {
    to: "/dashboard/schedulers",
    icon: "mdi-calendar",
    title: "Schedulers",
  },
  {
    to: "/dashboard/marketing",
    icon: "mdi-bullhorn",
    title: "Marketing",
  },
  {
    to: "/dashboard/settings",
    icon: "mdi-cog",
    title: "Settings",
  },
]);
</script>

<style scoped>
.v-navigation-drawer {
  width: 256px;
}
</style>
