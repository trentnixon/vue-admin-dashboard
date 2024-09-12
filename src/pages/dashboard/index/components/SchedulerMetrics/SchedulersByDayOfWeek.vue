<!-- src/pages/dashboard/metrics/SchedulersByDayOfWeek.vue -->
<template>
  <v-card class="mx-auto">
    <v-card-title>Schedulers by Day of the Week</v-card-title>
    <v-card-subtitle>Distribution of Schedulers</v-card-subtitle>

    <v-card-text>
      <BarChart
        :data="chartData.data"
        :categories="chartData.categories"
        title="Schedulers by Day of the Week"
        subtitle="Distribution of Schedulers"
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
  const { schedulersByDayOfWeek } = storeToRefs(schedulerStore);

  const chartData = computed(() => {
    const data = schedulersByDayOfWeek.value.map(item => item.count);
    const categories = schedulersByDayOfWeek.value.map(item => item.day);
    return { data, categories };
  });
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
