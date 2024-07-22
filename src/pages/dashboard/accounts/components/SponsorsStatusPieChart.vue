<template>
    <v-card class="mx-auto mb-4">
      <v-card-title>Sponsors Status</v-card-title>
      <v-card-subtitle>Distribution of Accounts with Sponsors</v-card-subtitle>

      <v-card-text>
        <PieChart
          :data="sponsorsStatusData.data"
          :categories="sponsorsStatusData.categories"
          title="Sponsors Status"
          subtitle="Distribution of Accounts with Sponsors"
          seriesName="Sponsors"
        />
      </v-card-text>
    </v-card>
  </template>

  <script setup>
  import { ref, watch } from "vue";
  import { storeToRefs } from "pinia";
  import { useAccountStore } from "@/store/account";
  import PieChart from "@/components/common/charts/PieChart.vue";

  const accountStore = useAccountStore();
  const { sponsorsStatus } = storeToRefs(accountStore);

  const sponsorsStatusData = ref({ categories: [], data: [] });

  watch(
    sponsorsStatus,
    (newStatus) => {
      if (newStatus) {
        sponsorsStatusData.value = {
          categories: newStatus.map((item) => item.name),
          data: newStatus.map((item) => item.value),
        };
      } else {
        sponsorsStatusData.value = { categories: [], data: [] };
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
