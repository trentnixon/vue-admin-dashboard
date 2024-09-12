<template>
  <ViewTitleBanner>
    <template #title>Debug Information</template>
  </ViewTitleBanner>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error }}</div>
  <template v-else>
    <SectionContainerWithTitle>
      <template #title>Downloads</template>
      <template #content>
        <div class="downloads-debug">
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Raw Downloads Data
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ downloads }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Total Downloads
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ totalDownloads }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Total Download Size
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ formatFileSize(totalDownloadSize) }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Average File Size
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ formatFileSize(averageFileSize) }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Total Completion Time
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ formatTime(totalCompletionTime) }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Total Display Cost
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ totalDisplayCost }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Download Status Breakdown
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ downloadStatusBreakdown }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Processed vs Unprocessed Chart Data
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ processedVsUnprocessedChartData }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                File Size Distribution Chart Data
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ fileSizeDistributionChartData }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Formatted Downloads for Table
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ formatDownloadsForTable }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Group Downloads by Asset Type
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ groupDownloadsByAssetType }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Most Expensive Renders
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ getMostExpensiveRenders }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Most Time-Consuming Renders
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ getMostTimeConsumingRenders }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Analyze Image Types Relationship
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ analyzeImageTypesRelationship }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Error Messages
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ errorMessages }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </template>
    </SectionContainerWithTitle>
  </template>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useDownloads } from '../composables/useDownloads';
  import { useDownloadsStore } from '@/store/downloads'; // Ensure this import path is correct
  import ViewTitleBanner from '@/components/common/builds/ViewTitleBanner.vue';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';

  // Get route parameters
  const route = useRoute();
  const renderId = Number(route.params.renderId);

  // Download Store
  const downloadStore = useDownloadsStore();

  const {
    downloads,
    totalDownloads,
    totalDownloadSize,
    averageFileSize,

    formatFileSize,
    formatTime,
    totalCompletionTime,
    totalDisplayCost,
    downloadStatusBreakdown,
    processedVsUnprocessedChartData,
    fileSizeDistributionChartData,
    formatDownloadsForTable,
    groupDownloadsByAssetType,
    getMostExpensiveRenders,
    getMostTimeConsumingRenders,
    analyzeImageTypesRelationship,
    errorMessages,
    loading,
    error
  } = useDownloads();

  // Fetch render on component mount
  onMounted(async () => {
    console.log('route.params ', route.params);
    await downloadStore.fetchDownloadsByRenderId(renderId);
  });
</script>
