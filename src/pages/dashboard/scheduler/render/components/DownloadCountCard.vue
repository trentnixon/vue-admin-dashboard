<template>
  <CardSmall1DataPoint
    :icon="'mdi-download'"
    :value="downloadCount"
    subtitle="Total Downloads"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
</template>

<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRendersStore } from '@/store/renders';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const renderStore = useRendersStore();
  const { selectedRender } = storeToRefs(renderStore);

  const downloadCount = computed(() => {
    return selectedRender.value?.attributes.downloads.data.length || 0;
  });
</script>
