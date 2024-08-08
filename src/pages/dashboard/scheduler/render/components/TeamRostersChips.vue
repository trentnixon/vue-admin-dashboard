<template>
    <ChartTitle>
      <template #title> Team Rosters </template>
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
  import { useRendersStore } from "@/store/renders";
  import { storeToRefs } from "pinia";
  import ChartTitle from "@/components/common/charts/ChartTitle.vue";

  const renderStore = useRendersStore();
  const { selectedRender } = storeToRefs(renderStore);

  const renderDetails = computed(() => {
    return selectedRender.value?.attributes;
  });

  const chips = computed(() => [
    {
      label: "Has Team Roster Request",
      isActive: renderDetails.value?.hasTeamRosterRequest,
    },
    {
      label: "Has Team Rosters",
      isActive: renderDetails.value?.hasTeamRosters,
    }
  ]);
  </script>
