<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <v-row>
    <v-col cols="6"></v-col>
    <v-col cols="6" class="d-flex justify-end">
      <v-btn
        v-for="(item, index) in navItems"
        :key="index"
        class="ma-0"
        variant="plain"
        :prepend-icon="item.icon"
        size="small"
        @click="navigateTo(item.to)"
      >
        {{ item.title }}
      </v-btn>
    </v-col>
  </v-row>
  <!-- Router View for Child Routes -->
  <router-view />
</template>

<script setup lang="ts">
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import { ref } from "vue";

// Cards
import { useRouter } from "vue-router";

//
const router = useRouter();
const title = ref("Fixtura Customer Journey");

const navigateTo = (path: string) => {
  router.push(path);
};
const navItems = ref([
  {
    icon: "mdi-account",
    title: "Home",
    to: `/dashboard/customers/home`,
  },
  {
    icon: "mdi-account",
    title: "Activity",
    to: `/dashboard/customers/activity`,
  },
  {
    icon: "mdi-account",
    title: "Revenue",
    to: `/dashboard/customers/revenue`,
  },
]);
</script>
<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
