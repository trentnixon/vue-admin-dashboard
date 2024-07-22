<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>




</template>

<script setup>
import { ref } from "vue";
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";

const title = ref("Customers");
</script>
