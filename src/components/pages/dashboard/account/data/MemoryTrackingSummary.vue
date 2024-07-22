<template>
  <v-card>
    <v-card-title>Memory Tracking Summary</v-card-title>
    <v-card-subtitle>
      Average Memory Usage:
      <span class="font-weight-black">{{
        displayAverageMemory.toFixed(2)
      }}</span>
      MB
    </v-card-subtitle>

    <v-card-text>
      <PieChart
        :data="piechartData"
        :categories="categories"
        title="Memory Usage Distribution"
        subtitle="Memory usage of different collections"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { useDataCollectionStore } from "@/store/dataCollection";
import PieChart from "@/components/common/charts/PieChart.vue";
import { storeToRefs } from "pinia";

const dataCollectionStore = useDataCollectionStore();
const { accountMemoryTrackingSummary } = storeToRefs(dataCollectionStore);

const displayAverageMemory = ref(0);
const piechartData = ref([]);
const categories = ref([]);

watch(
  accountMemoryTrackingSummary,
  (newSummary) => {
    console.log("accountMemoryTrackingSummary updated: ", newSummary);
    if (newSummary) {
      const { averageMemory, piechartArray } = newSummary;
      displayAverageMemory.value = averageMemory / 1024; // Convert KB to MB
      piechartData.value = piechartArray.map((item) => item.value);
      categories.value = piechartArray.map((item) => item.name);
    }
  },
  { immediate: true }
);

const handleClick = () => {
  console.log("Button clicked");
};
</script>

<style scoped></style>
