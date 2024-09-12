<!-- src/components/common/cards/TotalDownloadsCard.vue -->
<template>
  <CardSmall1DataPoint
    :icon="'mdi-download'"
    :subtitle="'Total Downloads'"
    :value="totalDownloadCount"
    :button-text="'View Downloads'"
    @button-click="handleButtonClick"
  />
</template>

<script setup>
  import { watch, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useDownloadsStore } from '@/store/downloads';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';
  const downloadsStore = useDownloadsStore();
  const { totalDownloadCount } = storeToRefs(downloadsStore);

  watch(totalDownloadCount, () => {
    console.log('totalDownloadCount ', totalDownloadCount);
  });
  onMounted(() => {
    downloadsStore.fetchTotalDownloadCount();
  });

  const handleButtonClick = () => {
    // Logic to handle button click, e.g., navigate to downloads page
    console.log('Button clicked');
  };
</script>
