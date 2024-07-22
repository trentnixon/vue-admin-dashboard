<template>
    <CardSmall1DataPoint
      :icon="'mdi-download'"
      :value="downloadsCompleted"
      subtitle="Downloads Completed"
      buttonText="View Downloads"
      @click="goToDownloads"
    />
  </template>

  <script setup>
  import { computed } from "vue";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import { useDownloadsStore } from "@/store/downloads";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const downloadsStore = useDownloadsStore();
  const { downloadsInLast24Hours } = storeToRefs(downloadsStore);

  const downloadsCompleted = computed(() => downloadsInLast24Hours.value);

  const router = useRouter();
  const goToDownloads = () => {
    router.push("/dashboard/downloads");
  };
  </script>
