<template>
  <ChartTitle>
    <template #title> </template>
    <template #select>
      <div class="flex-row justify-space-between d-flex ma-0 pa-0">
        <v-chip
          v-for="(chip, index) in chips"
          :key="index"
          class="ma-1"
          label
          :color="chip.isActive ? 'success' : 'warning'"
        >
          {{ chip.label }}
          <v-icon class="ml-1" :color="chip.isActive ? 'success' : 'warning'">
            {{ chip.isActive ? "mdi-check-circle" : "mdi-close-circle" }}
          </v-icon>
        </v-chip>
      </div>
    </template>
  </ChartTitle>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSchedulerStore } from "@/store/scheduler";
import { storeToRefs } from "pinia";
import ChartTitle from "@/components/common/charts/ChartTitle.vue";

const schedulerStore = useSchedulerStore();
const { getScheduler } = storeToRefs(schedulerStore);

const schedulerDetails = computed(() => {
  return getScheduler.value?.attributes;
});
console.log("Queued ", schedulerDetails);
const chips = computed(() => [
  {
    label: schedulerDetails.value?.Name,
    isActive: true,
  },
  {
    label: schedulerDetails.value?.days_of_the_week.data.attributes.Name,
    isActive: true,
  },
  {
    label: "Is Rendering",
    isActive: schedulerDetails.value?.isRendering,
  },
  {
    label: "Queued",
    isActive: schedulerDetails.value?.Queued,
  },
]);
</script>
