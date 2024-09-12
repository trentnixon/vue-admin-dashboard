<template>
  <CardSmall1DataPoint
    :icon="'mdi-information-outline'"
    :value="getRenderName"
    subtitle="Render Name"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
  <CardSmall1DataPoint
    :icon="'mdi-progress-clock'"
    :value="getRenderStatus"
    subtitle="Render Status"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
  <CardSmall1DataPoint
    :icon="'mdi-download'"
    :value="getDownloadCount"
    subtitle="Total Downloads"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
</template>

<script setup>
  import { useRenderData } from '@/pages/dashboard/scheduler/composables/useRenderData';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const { getRenderName, getRenderStatus, getDownloadCount } = useRenderData();
</script>
