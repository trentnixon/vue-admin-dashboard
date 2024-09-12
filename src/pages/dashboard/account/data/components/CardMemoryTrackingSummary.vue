<template>
  <SingleChartCard>
    <template #title>Memory Tracking Summary</template>
    <template #subtitle>
      Average Memory Usage:
      <span class="font-weight-black">
        {{ displayAverageMemory.toFixed(2) }}
      </span>
      MB
    </template>
    <template #chart>
      <PieChart
        :data="piechartData"
        :categories="categories"
        title="Memory Usage Distribution"
        subtitle="Memory usage of different collections"
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
  // Structure
  import SingleChartCard from '@/components/common/cards/SingleChartCard.vue';

  // Components
  import PieChart from '@/components/common/charts/PieChart.vue';
  // Vue
  import { ref, watch } from 'vue';
  // Pinia
  import { useDataCollectionStore } from '@/store/dataCollection';
  import { storeToRefs } from 'pinia';

  // Data Collections
  const dataCollectionStore = useDataCollectionStore();
  const { accountMemoryTrackingSummary } = storeToRefs(dataCollectionStore);

  const displayAverageMemory = ref(0);
  const piechartData = ref([]);
  const categories = ref([]);

  watch(
    accountMemoryTrackingSummary,
    newSummary => {
      console.log('accountMemoryTrackingSummary updated: ', newSummary);
      if (newSummary) {
        const { averageMemory, piechartArray } = newSummary;
        displayAverageMemory.value = averageMemory / 1024; // Convert KB to MB
        piechartData.value = piechartArray.map(item => item.value);
        categories.value = piechartArray.map(item => item.name);
      }
    },
    { immediate: true }
  );
</script>

<style scoped></style>
