<template>
    <v-card>
      <v-card-title>Scheduler Information</v-card-title>
      <v-card-text>
        <p>Name: {{ schedulerDetails.Name }}</p>
        <p>Time: {{ schedulerDetails.Time }}</p>
        <p>Is Rendering: {{ schedulerDetails.isRendering ? "Yes" : "No" }}</p>
        <p>Queued: {{ schedulerDetails.Queued ? "Yes" : "No" }}</p>
      </v-card-text>
    </v-card>
  </template>

  <script setup lang="ts">
  import { computed } from 'vue';
  import { useSchedulerStore } from '@/store/scheduler';
  import { storeToRefs } from 'pinia';

  const schedulerStore = useSchedulerStore();
  const { scheduler } = storeToRefs(schedulerStore);

  const schedulerDetails = computed(() => scheduler.value?.attributes || {});
  </script>
