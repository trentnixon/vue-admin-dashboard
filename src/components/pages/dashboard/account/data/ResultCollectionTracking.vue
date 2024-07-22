<template>
  <v-card class="my-4">
    <v-toolbar class="bg-blue-grey-darken-2">
      <v-row class="w-100 ma-0 pa-0">
        <v-col cols="6"> </v-col>
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
    <v-card-text>
      <BarChart
        chartType="bar"
        :data="data"
        :categories="categories"
        title="Result Collections Over Time"
        subtitle="Track the number of result collections over time"
    /></v-card-text>
    <template v-slot:actions>
      <v-container class="d-flex justify-end pa-0">
        <SecondaryButton>CTA</SecondaryButton>
      </v-container>
    </template>
  </v-card>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useResultCollectionStore } from "@/store/resultCollection";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { filterCollectionsByDate } from "@/utils/dateUtils";
import SecondaryButton from "@/components/common/buttons/SecondaryButton.vue";
import BarChart from "@/components/common/charts/BarChart.vue";

const route = useRoute();
const accountId = Number(route.params.id);

const resultsCollectionStore = useResultCollectionStore();
const { accountResultCollections } = storeToRefs(resultsCollectionStore);

const data = ref([]);
const categories = ref([]);
const dateRanges = ref([30, 60, 90]);
const selectedRange = ref(30);

const fetchAccountResultCollections = async (id) => {
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
