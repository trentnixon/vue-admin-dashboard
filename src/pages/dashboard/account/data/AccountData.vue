<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <DataCollectionRootView />
</template>

<script setup lang="ts">
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import DataCollectionRootView from "@/components/pages/dashboard/account/data/DataCollectionRootView.vue";
import { ref } from "vue";

const title = ref("Data Tracking");
</script>

<style lang="scss" scoped></style>
