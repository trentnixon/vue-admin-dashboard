<template>
  <v-card>
    <v-card-title>Time Taken Summary</v-card-title>
    <v-card-subtitle>
      Average Collection Time:
      <span class="font-weight-black">{{ displayAverageTime.toFixed(2) }}</span>
      minutes
    </v-card-subtitle>

    <v-card-text>
      <LineChart
        :data="lineChartData"
        :categories="formattedCategories"
        title="Data Collection Time"
        subtitle=""
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useDataCollectionStore } from "@/store/dataCollection";
import LineChart from "@/components/common/charts/LineChart.vue"; // Assuming you have a LineChart component
import { storeToRefs } from "pinia";
import { formatDate } from "@/utils/dateUtils";

const dataCollectionStore = useDataCollectionStore();
const { aggregatedDataSummary } = storeToRefs(dataCollectionStore);

const displayAverageTime = ref(0);
const lineChartData = ref([]);
const categories = ref([]);
const formattedCategories = ref([]);

watch(
  aggregatedDataSummary,
  (newSummary) => {
    if (newSummary) {
      const { averageTime, piechartArray } = newSummary;
      displayAverageTime.value = averageTime / 60000; // Convert ms to minutes
      lineChartData.value = piechartArray.map((item) => ({
        value: item.value,
        name: `${item.account} (${item.name})`,
      }));
      categories.value = piechartArray.map((item) => item.name);
      formattedCategories.value = categories.value.map((date) =>
        formatDate(date, "DD/MM/YYYY")
      );
    }
  },
  { immediate: true, deep: true }
);

onMounted(() => {
  dataCollectionStore.fetchParentDataCollections();
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
