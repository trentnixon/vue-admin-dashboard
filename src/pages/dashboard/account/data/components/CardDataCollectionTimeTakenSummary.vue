<template>
  <SingleChartCard>
    <template #title>Time Taken Summary</template>
    <template #subtitle>
      Average Collection Time:
      <span class="font-weight-black">{{ displayAverageTime.toFixed(2) }}</span>
      minutes</template
    >
    <template #chart>
      <PieChart
        :data="piechartData"
        :categories="formattedCategories"
        title="Time Taken Distribution"
        subtitle=""
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
// Structure
import SingleChartCard from "@/components/common/cards/SingleChartCard.vue";
// Components
import PieChart from "@/components/common/charts/PieChart.vue";
// Pinia
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useDataCollectionStore } from "@/store/dataCollection";
// utils
import { formatDate } from "@/utils/dateUtils";

const dataCollectionStore = useDataCollectionStore();
const { accountDataCollectionSummary } = storeToRefs(dataCollectionStore);

const displayAverageTime = ref(0);
const piechartData = ref([]);
const categories = ref([]);
const formattedCategories = ref([]);

watch(
  accountDataCollectionSummary,
  (newSummary) => {
    console.log("accountDataCollectionSummary updated: ", newSummary);
    if (newSummary) {
      const { averageTime, piechartArray } = newSummary;
      displayAverageTime.value = averageTime / 60000; // Convert ms to minutes
      piechartData.value = piechartArray.map((item) => item.value);
      categories.value = piechartArray.map((item) => formatDate(item.name));
      formattedCategories.value = categories.value.map((date) =>
        formatDate(date)
      );

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
