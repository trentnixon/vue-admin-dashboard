<template>
  <SingleChartCard>
    <template #title>Data Collection Stages</template>
    <template #subtitle>Overview of Items Found, Updated, and New</template>
    <template #chart>
      <StackedLineChart
        :data="chartData"
        :categories="categories"
        title="Data Collection Stages"
        subtitle="Track items found, updated, and new over time"
        :seriesNames="['Items Found', 'Items Updated', 'Items New']"
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
  // Structure
  import SingleChartCard from '@/components/common/cards/SingleChartCard.vue';
  // Components
  import StackedLineChart from '@/components/common/charts/StackedLineChart.vue';
  //Vue
  import { ref, watch, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  //Pinia
  import { useDataCollectionStore } from '@/store/dataCollection';
  import { storeToRefs } from 'pinia';
  //Utils
  import dayjs from 'dayjs';

  // Globals
  const route = useRoute();
  const accountId = Number(route.params.id);

  const dataCollectionStore = useDataCollectionStore();
  const { accountDataCollections } = storeToRefs(dataCollectionStore);

  const categories = ref([]);
  const chartData = ref({
    itemsFound: [],
    itemsUpdated: [],
    itemsNew: []
  });

  const fetchAccountDataCollections = async id => {
    await dataCollectionStore.fetchAccountDataCollections(id);
  };

  watch(
    accountDataCollections,
    newCollections => {
      const dates = newCollections.map(item =>
        dayjs(item.attributes.whenWasTheLastCollection).format('DD/MM/YYYY')
      );
      const found = newCollections.map(
        item =>
          item.attributes.processingTracker.competitions.itemsFound +
          item.attributes.processingTracker.teams.itemsFound +
          item.attributes.processingTracker.games.itemsFound
      );
      const updated = newCollections.map(
        item =>
          item.attributes.processingTracker.competitions.itemsUpdated +
          item.attributes.processingTracker.teams.itemsUpdated +
          item.attributes.processingTracker.games.itemsUpdated
      );
      const newItems = newCollections.map(
        item =>
          item.attributes.processingTracker.competitions.itemsNew +
          item.attributes.processingTracker.teams.itemsNew +
          item.attributes.processingTracker.games.itemsNew
      );

      categories.value = dates;
      chartData.value = {
        itemsFound: found,
        itemsUpdated: updated,
        itemsNew: newItems
      };
    },
    { immediate: true }
  );

  onMounted(() => {
    fetchAccountDataCollections(accountId);
  });

  const handleClick = () => {
    console.log('Button clicked');
  };
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
