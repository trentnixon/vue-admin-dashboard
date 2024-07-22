<template>
  <v-card>
    <v-card-title>Time Taken Summary</v-card-title>
    <v-card-subtitle>
      Average Collection Time:
      <span class="font-weight-black">{{ displayAverageTime.toFixed(2) }}</span>
      minutes
    </v-card-subtitle>

    <v-card-text>

      <PieChart
        :data="piechartData"
        :categories="formattedCategories"
        title="Time Taken Distribution"
        subtitle=""
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, watch } from "vue";
import { useDataCollectionStore } from "@/store/dataCollection";
import PieChart from "@/components/common/charts/PieChart.vue";
import { storeToRefs } from "pinia";
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
      displayAverageTime.value = (averageTime / 60000); // Convert ms to minutes
      piechartData.value = piechartArray.map(item => item.value);
      categories.value = piechartArray.map(item => formatDate(item.name));
      formattedCategories.value = categories.value.map(date => formatDate(date));
    }
  },
  { immediate: true }
);

const handleClick = () => {
  console.log("Button clicked");
};
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
