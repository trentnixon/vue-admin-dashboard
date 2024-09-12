<!-- src/pages/dashboard/metrics/ActiveSchedulersThisWeek.vue -->
<template>
  <v-card class="mx-auto">
    <v-card-title>Active Schedulers This Week</v-card-title>
    <v-card-subtitle>Distribution of Active Schedulers</v-card-subtitle>

    <v-card-text>
      <BarChart
        :data="chartData.data"
        :categories="chartData.categories"
        title="Active Schedulers This Week"
        subtitle="Distribution of Active Schedulers"
        seriesName="Schedulers"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useSchedulerStore } from '@/store/scheduler';
  import BarChart from '@/components/common/charts/BarChart.vue';

  const schedulerStore = useSchedulerStore();
  const { activeSchedulersThisWeek } = storeToRefs(schedulerStore);

  const chartData = computed(() => {
    const data = activeSchedulersThisWeek.value.map(item => item.count);
    const categories = activeSchedulersThisWeek.value.map(item => item.day);
    return { data, categories };
  });
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
