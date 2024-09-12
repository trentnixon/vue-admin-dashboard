<template>
  <SectionContainerWithTitle>
    <template #title>
      <SchedulerStatusChips />
    </template>
    <template #content>
      <v-row>
        <v-col cols="4">
          <CardSmall1DataPoint
            :icon="'mdi-calendar-clock'"
            :value="getSchedulerName"
            subtitle="Scheduler Name"
            buttonText=""
            @click="() => {}"
            theme="cardNeutral"
          />
        </v-col>
        <v-col cols="4">
          <CardSmall1DataPoint
            :icon="'mdi-progress-clock'"
            :value="getSchedulerRenderingStatus"
            subtitle="Rendering Status"
            buttonText=""
            @click="() => {}"
            theme="cardNeutral"
          />
        </v-col>
        <v-col cols="4">
          <CardSmall1DataPoint
            :icon="'mdi-playlist-check'"
            :value="getSchedulerQueuedStatus"
            subtitle="Queued Status"
            buttonText=""
            @click="() => {}"
            theme="cardNeutral"
          />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRenderData } from '@/pages/dashboard/scheduler/composables/useRenderData';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import SchedulerStatusChips from '@/pages/dashboard/scheduler/render/components/SchedulerStatusChips.vue';

  const { selectedRender } = useRenderData();

  // Scheduler name
  const getSchedulerName = computed(() => {
    return (
      selectedRender.value?.attributes.scheduler?.data?.attributes?.Name ||
      'Unknown'
    );
  });

  // Scheduler rendering status
  const getSchedulerRenderingStatus = computed(() => {
    return selectedRender.value?.attributes.scheduler?.data?.attributes
      ?.isRendering
      ? 'Rendering'
      : 'Not Rendering';
  });

  // Scheduler queued status
  const getSchedulerQueuedStatus = computed(() => {
    return selectedRender.value?.attributes.scheduler?.data?.attributes?.Queued
      ? 'Queued'
      : 'Not Queued';
  });
</script>
