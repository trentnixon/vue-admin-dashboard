<template>
  <v-card>
    <v-card-title>Data Collection Stages</v-card-title>
    <v-card-subtitle>Overview of Items Found, Updated, and New</v-card-subtitle>

    <v-card-text>
      <StackedLineChart
        :data="chartData"
        :categories="categories"
        title="Data Collection Stages"
        subtitle="Track items found, updated, and new over time"
        :seriesNames="['Items Found', 'Items Updated', 'Items New']"
      />
    </v-card-text>

    <v-card-actions>
      <v-btn @click="handleClick">Click me</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useDataCollectionStore } from "@/store/dataCollection";
import StackedLineChart from "@/components/common/charts/StackedLineChart.vue";
import { storeToRefs } from "pinia";
import dayjs from "dayjs";

const route = useRoute();
const accountId = Number(route.params.id);

const dataCollectionStore = useDataCollectionStore();
const { accountDataCollections } = storeToRefs(dataCollectionStore);

const categories = ref([]);
const chartData = ref({
  itemsFound: [],
  itemsUpdated: [],
  itemsNew: [],
});

const fetchAccountDataCollections = async (id) => {
  await dataCollectionStore.fetchAccountDataCollections(id);
};

watch(accountDataCollections, (newCollections) => {
  const dates = newCollections.map(item => dayjs(item.attributes.whenWasTheLastCollection).format('DD/MM/YYYY'));
  const found = newCollections.map(item => item.attributes.processingTracker.competitions.itemsFound + item.attributes.processingTracker.teams.itemsFound + item.attributes.processingTracker.games.itemsFound);
  const updated = newCollections.map(item => item.attributes.processingTracker.competitions.itemsUpdated + item.attributes.processingTracker.teams.itemsUpdated + item.attributes.processingTracker.games.itemsUpdated);
  const newItems = newCollections.map(item => item.attributes.processingTracker.competitions.itemsNew + item.attributes.processingTracker.teams.itemsNew + item.attributes.processingTracker.games.itemsNew);

  categories.value = dates;
  chartData.value = {
    itemsFound: found,
    itemsUpdated: updated,
    itemsNew: newItems,
  };
}, { immediate: true });

onMounted(() => {
  fetchAccountDataCollections(accountId);
});

const handleClick = () => {
  console.log("Button clicked");
};
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
