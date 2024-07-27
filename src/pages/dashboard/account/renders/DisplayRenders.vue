<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <SchedulerInformation />
  <TableListOfAccountRenders />

  <SectionContainerWithTitle>
    <template #title> Render Metrics </template>
    <template #content>
      <v-row>
        <v-col cols="8">
          <ChartRendersTimeOfDay />
          <!-- <ActiveOrdersPieChart /> -->
        </v-col>
        <v-col cols="4">
          <ChartTimeComparison />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
// vue
import { ref } from "vue";

// Pinia

// Components
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import SchedulerInformation from "@/pages/dashboard/account/renders/components/SchedulerInformation.vue";
import TableListOfAccountRenders from "@/pages/dashboard/account/renders/components/TableListOfAccountRenders.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import ChartRendersTimeOfDay from "@/pages/dashboard/account/renders/components/ChartRendersTimeOfDay.vue";
import ChartTimeComparison from "@/pages/dashboard/account/renders/components/ChartTimeComparison.vue";

// Vars
const title = ref("Renders");
</script>
