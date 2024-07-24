<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <MediaLibraries />
</template>

<script setup lang="ts">
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import MediaLibraries from "@/pages/dashboard/account/mediaLibraries/Components/MediaLibraries.vue";
import { ref } from "vue";

const title = ref("Media Library");
</script>
