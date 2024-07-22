<template>
    <v-card class="mx-auto mb-4">
      <v-card-title>Template Ratio Split</v-card-title>
      <v-card-subtitle>Ratio Split of Different Templates Used by Accounts</v-card-subtitle>

      <v-card-text>
        <PieChart
          :data="templateRatioSplitData.data"
          :categories="templateRatioSplitData.categories"
          title="Template Ratio Split"
          subtitle="Ratio Split of Different Templates"
          seriesName="Templates"
        />
      </v-card-text>
    </v-card>
  </template>

  <script setup>
  import { watch,ref } from "vue";
  import { storeToRefs } from "pinia";
  import { useAccountStore } from "@/store/account";
  import PieChart from "@/components/common/charts/PieChart.vue";

  const accountStore = useAccountStore();
  const { templateRatioSplit } = storeToRefs(accountStore);

  const templateRatioSplitData = ref({ categories: [], data: [] });

  watch(templateRatioSplit, (newData) => {
    if (newData) {
      templateRatioSplitData.value = newData;
    }
  }, { immediate: true });
  </script>

  <style scoped>
  .chart {
    height: 300px;
  }
  </style>
