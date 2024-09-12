<template>
  <SingleChartCard>
    <template #title>Result Collections Over Time</template>
    <template #subtitle>
      Track the number of result collections over time
    </template>
    <template #chart>
      <v-toolbar flat class="px-4" color="secondary" rounded>
        <v-row class="w-100 ma-0 pa-0">
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <v-select
              v-model="selectedRange"
              :items="dateRanges"
              auto
              class="pa-3"
              variant="underlined"
            ></v-select>
          </v-col>
        </v-row>
      </v-toolbar>
      <BarChart
        chartType="bar"
        :data="data"
        :categories="categories"
        title="Result Collections Over Time"
        subtitle="Track the number of result collections over time"
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
  // structure
  import SingleChartCard from '@/components/common/cards/SingleChartCard.vue';
  // Components
  import BarChart from '@/components/common/charts/BarChart.vue';
  //Vue
  import { ref, onMounted, watch } from 'vue';
  import { useRoute } from 'vue-router';
  //Pinia
  import { storeToRefs } from 'pinia';
  import { useResultCollectionStore } from '@/store/resultCollection';

  //Utils
  import { filterCollectionsByDate } from '@/utils/dateUtils';

  const route = useRoute();
  const accountId = Number(route.params.id);

  const resultsCollectionStore = useResultCollectionStore();
  const { accountResultCollections } = storeToRefs(resultsCollectionStore);

  const data = ref([]);
  const categories = ref([]);
  const dateRanges = ref([30, 60, 90]);
  const selectedRange = ref(30);

  const fetchAccountResultCollections = async id => {
    await resultsCollectionStore.fetchAccountResultCollections(id);
  };

  watch(
    [accountResultCollections, selectedRange],
    ([newCollections, newRange]) => {
      const { dateArray, dataPoints } = filterCollectionsByDate(
        newCollections,
        newRange
      );
      categories.value = dateArray;
      data.value = dataPoints;
    }
  );

  onMounted(() => {
    fetchAccountResultCollections(accountId);
  });
</script>

<style scoped></style>
