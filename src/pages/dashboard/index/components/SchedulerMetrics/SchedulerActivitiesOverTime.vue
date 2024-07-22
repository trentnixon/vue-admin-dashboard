<!-- src/pages/dashboard/metrics/SchedulerActivitiesOverTime.vue -->
<template>
    <v-card class="mx-auto">
      <v-card-title>Scheduler Activities Over Time</v-card-title>
      <v-card-subtitle>Activities in the Last 12 Months</v-card-subtitle>

      <v-card-text>
        <LineChart
          :data="chartData.data"
          :categories="chartData.categories"
          title="Scheduler Activities Over Time"
          subtitle="Activities in the Last 12 Months"
          seriesName="Activities"
        />
      </v-card-text>
    </v-card>
  </template>

  <script setup>
  import { computed } from "vue";
  import { storeToRefs } from "pinia";
  import { useRendersStore } from "@/store/renders";
  import LineChart from "@/components/common/charts/LineChart.vue";

  const renderStore = useRendersStore();
  const { renderActivitiesOverTime } = storeToRefs(renderStore);

  const chartData = computed(() => renderActivitiesOverTime.value);
  </script>

  <style scoped>
  .chart {
    height: 300px;
  }
  </style>
