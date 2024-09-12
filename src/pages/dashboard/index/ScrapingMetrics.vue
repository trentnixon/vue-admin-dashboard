<template>
  <SectionContainerWithTitle>
    <template #title>Scraping Metrics</template>
    <template #content>
      <v-row>
        <v-col cols="12">
          <AggregatedDataSummaryChart />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
  // components
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import AggregatedDataSummaryChart from '@/pages/dashboard/index/components/AggregatedDataSummaryChart.vue';
</script>

<style scoped></style>
