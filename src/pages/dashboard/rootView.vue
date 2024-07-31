<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  // things we would like to know // Accounts updating now, accounts result
  fethcing now // Accounts updating past 24 hours, accounts result fethcing 24
  hours

  <SectionContainerWithTitle>
    <template #title> Previous 24 Hours </template>
    <template #content>
      <v-row>
        <v-col cols="4">
          <OverNightRendersCard />
        </v-col>
        <v-col cols="4">
          <DownloadsCompletedCard />
        </v-col>
        <v-col cols="4">
          <ErrorsOccurredCard />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6"> <StillProcessingCard /></v-col>
        <v-col cols="6"><ScheduledRendersNext24HoursCard /></v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <SectionContainerWithTitle>
    <template #title> Teams Rendered Overnight </template>
    <template #content>
      <v-row>
        <v-col cols="12">
          <TableNamesOfTeamsRenderedOverNight />
        </v-col>
        <v-col cols="12"> TableNamesOfAccounts rendering tomorrow </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <OrderMetrics />
  <ScrapingMetrics />
</template>

<script setup lang="ts">
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import { onMounted, ref } from "vue";
//
import OverNightRendersCard from "@/pages/dashboard/index/components/OverNightRendersCard.vue";
import DownloadsCompletedCard from "@/pages/dashboard/index/components/DownloadsCompletedCard.vue";
import ErrorsOccurredCard from "@/pages/dashboard/index/components/ErrorsOccurredCard.vue";
import StillProcessingCard from "@/pages/dashboard/index/components/StillProcessingCard.vue";
import ScheduledRendersNext24HoursCard from "@/pages/dashboard/index/components/ScheduledRendersNext24HoursCard.vue";
import TableNamesOfTeamsRenderedOverNight from "@/pages/dashboard/index/components/Renders/TableNamesOfTeamsRenderedOverNight.vue";

import OrderMetrics from "@/pages/dashboard/index/OrderMetrics.vue";
import ScrapingMetrics from "@/pages/dashboard/index/ScrapingMetrics.vue";
const title = ref("Fixtura");

// set up data for page getters
import { useAccountStore } from "@/store/account";
import { useOrdersStore } from "@/store/orders";
import { useSchedulerStore } from "@/store/scheduler";
import { useRendersStore } from "@/store/renders";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
const accountStore = useAccountStore();
const ordersStore = useOrdersStore();
const schedulerStore = useSchedulerStore();
const rendersStore = useRendersStore();

onMounted(() => {
  accountStore.fetchAccounts().then(() => {
    accountStore.fetchAccounts();
  });
  ordersStore.fetchOrders();
  schedulerStore.fetchAllSchedulers();
  rendersStore.fetchAllRenders();
});
</script>

<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
