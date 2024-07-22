<template>
    <v-card class="mx-auto mb-4">
      <v-card-title>Sports Distribution</v-card-title>
      <v-card-subtitle>Distribution of Sports Among Accounts</v-card-subtitle>

      <v-card-text>
        <BarChart
          :data="sportsDistributionData.data"
          :categories="sportsDistributionData.categories"
          title="Sports Distribution"
          subtitle="Distribution of Sports Among Accounts"
          seriesName="Sports"
        />
      </v-card-text>
    </v-card>
  </template>

  <script setup>
  import { ref, watch } from "vue";
  import { storeToRefs } from "pinia";
  import { useAccountStore } from "@/store/account";
  import BarChart from "@/components/common/charts/BarChart.vue";

  const accountStore = useAccountStore();
  const { sportsDistribution } = storeToRefs(accountStore);

  const sportsDistributionData = ref({ categories: [], data: [] });

  watch(
    sportsDistribution,
    (newDistribution) => {
      if (newDistribution) {
        sportsDistributionData.value = newDistribution;
      } else {
        sportsDistributionData.value = { categories: [], data: [] };
      }
    },
    { immediate: true }
  );
  </script>

  <style scoped>
  .chart {
    height: 300px;
  }
  </style>
