<template>
  <v-row>
    <v-col cols="6">
      <DataCollectionTimeTakenSummary />
    </v-col>
    <v-col cols="6">
      <MemoryTrackingSummary />
    </v-col>

    <v-col cols="12">
      <v-card class="my-4 bg-white" variant="outlined">
        <v-toolbar class="bg-blue-grey-darken-2">
          <v-toolbar-title class="d-flex justify-space-between">
            <v-tabs v-model="tab" density="comfortable" grow>
              <v-tab value="time" variant="tonal">Time Taken</v-tab>
              <v-tab value="memory" variant="tonal">Memory Usage</v-tab>
            </v-tabs>
          </v-toolbar-title>

          <v-select
            v-model="selectedRange"
            :items="dateRanges"
            auto
            class="pa-3"
            variant="underlined"
          ></v-select>
        </v-toolbar>
        <v-card-text>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="time">
              <LineChart
                chartType="line"
                :data="timeTakenData"
                :categories="timeTakenCategories"
                title="Time Taken for Data Collections"
                subtitle="Track the time taken for each data collection over time"
              />
              <v-data-table
                :headers="headers"
                :items="timeTableData"
                class="elevation-1"
                ><template v-slot:body="{ items }">
                  <tr v-for="item in items" :key="item.scannedDeviceId">
                    <td>{{ item.date }}</td>
                    <td>{{ item.value }}</td>

                    <td>
                      <v-icon color="error" large v-if="item.hasError">
                        mdi-exclamation
                      </v-icon>
                      <v-icon color="success" large v-else>
                        mdi-checkbox-marked-circle-outline
                      </v-icon>
                    </td>
                  </tr>
                </template></v-data-table
              >
            </v-tabs-window-item>
            <v-tabs-window-item value="memory">
              <LineChart
                chartType="line"
                :data="memoryUsageData"
                :categories="memoryUsageCategories"
                title="Memory Usage for Data Collections"
                subtitle="Track the memory usage for each data collection over time"
              />
              <v-data-table
                :headers="headers"
                :items="memoryTableData"
                class="elevation-1"
              >
                <template v-slot:body="{ items }">
                  <tr v-for="item in items" :key="item.scannedDeviceId">
                    <td>{{ item.date }}</td>
                    <td>{{ item.value }}</td>

                    <td>
                      <v-icon color="error" large v-if="item.hasError">
                        mdi-exclamation
                      </v-icon>
                      <v-icon color="success" large v-else>
                        mdi-checkbox-marked-circle-outline
                      </v-icon>
                    </td>
                  </tr>
                </template></v-data-table
              >
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useDataCollectionStore } from "@/store/dataCollection";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";

import { filterCollectionsForChart } from "@/utils/dateUtils";
import dayjs from "dayjs";
import DataCollectionTimeTakenSummary from "./DataCollectionTimeTakenSummary.vue";
import MemoryTrackingSummary from "./MemoryTrackingSummary.vue";
import LineChart from "@/components/common/charts/LineChart.vue";

const route = useRoute();
const accountId = Number(route.params.id);

const dataCollectionStore = useDataCollectionStore();
const { accountDataCollections } = storeToRefs(dataCollectionStore);

const timeTakenData = ref([]);
const timeTakenCategories = ref([]);
const memoryUsageData = ref([]);
const memoryUsageCategories = ref([]);
const dateRanges = ref([30, 60, 90]);
const selectedRange = ref(30);
const tab = ref("time");

const headers = [
  { title: "Date", value: "date" },
  { title: "Value", value: "value" },
  { title: "Processed", value: "hasError" },
];

const timeTableData = ref([]);
const memoryTableData = ref([]);

const fetchAccountDataCollections = async (id) => {
  await dataCollectionStore.fetchAccountDataCollections(id);
};

watch([accountDataCollections, selectedRange], () => {
  const filteredCollections = accountDataCollections.value.filter((item) => {
    const collectionDate = dayjs(item.attributes.whenWasTheLastCollection);
    return collectionDate.isAfter(dayjs().subtract(selectedRange.value, "day"));
  });

  const { dateArray: timeDates, dataPoints: timeData } =
    filterCollectionsForChart(filteredCollections, "TimeTaken");
  timeTakenCategories.value = timeDates;

  timeTakenData.value = timeData.map((value) => (value / 60000)?.toFixed(2)); // Convert seconds to minutes
  timeTableData.value = timeDates.map((date, index) => ({
    date,
    value: timeTakenData.value[index] + " mins",
    hasError: filteredCollections[index].attributes.hasError,
  }));
  console.log("timeTableData ", timeTableData);
  const { dateArray: memoryDates, dataPoints: memoryData } =
    filterCollectionsForChart(filteredCollections, "MemoryUsage");
  memoryUsageCategories.value = memoryDates;
  memoryUsageData.value = memoryData.map((value) => value?.toFixed(2)); // Convert KB to MB
  memoryTableData.value = memoryDates.map((date, index) => ({
    date,
    value: memoryUsageData.value[index] + " MB",
    hasError: filteredCollections[index].attributes.hasError,
  }));
});

onMounted(() => {
  fetchAccountDataCollections(accountId);
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
