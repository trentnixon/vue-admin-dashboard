<template>
  <SectionContainerWithTitle>
    <template #title>
      Data Collection ({{ accountDataCollectionCount }})
    </template>
    <template #content>
      <DataCollectionTracking />
    </template>
  </SectionContainerWithTitle>
  <SectionContainerWithTitle>
    <template #title>
      <h2 class="text-h5 ma-0 pa-0">Data Collection Stages</h2>
    </template>
    <template #content>
      <MetaDataTracking />
    </template>
  </SectionContainerWithTitle>
  <SectionContainerWithTitle>
    <template #content>
      <ResultCollectionTracking />
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import DataCollectionTracking from "@/components/pages/dashboard/account/data/DataCollectionTracking.vue";
import ResultCollectionTracking from "@/components/pages/dashboard/account/data/ResultCollectionTracking.vue";
import MetaDataTracking from "@/components/pages/dashboard/account/data/MetaDataTracking.vue";
import { useDataCollectionStore } from "@/store/dataCollection";

import { storeToRefs } from "pinia";

const dataCollectionStore = useDataCollectionStore();
const { accountDataCollectionCount } = storeToRefs(dataCollectionStore);
</script>

<style lang="scss" scoped></style>
