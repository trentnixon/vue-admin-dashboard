<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>

  <SectionContainerWithTitle>
    <template #title> Previous 24 Hours </template>
    <template #content>
      <v-row>
        <v-col cols="3">
          <OverNightRendersCard />
        </v-col>
        <v-col cols="3">
          <DownloadsCompletedCard />
        </v-col>
        <v-col cols="2">
          <ErrorsOccurredCard />
        </v-col>
        <v-col cols="2">
          <StillProcessingCard />
        </v-col>
        <v-col cols="2">
          <ScheduledRendersNext24HoursCard />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>

  <v-card>
    <v-tabs v-model="tab" align-tabs="center" bg-color="blue-grey-darken-2">
      <v-tab value="customer-metrics">General</v-tab>
      <v-tab value="Schedulers-metrics">Schedulers</v-tab>
      <v-tab value="orders-metrics">Orders Metrics</v-tab>
      <v-tab value="Scraping-metrics">Scraping Metrics</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="customer-metrics">
          <GeneralMetrics />
        </v-tabs-window-item>
        <v-tabs-window-item value="Schedulers-metrics">
          <SchedulerMetrics />
        </v-tabs-window-item>

        <v-tabs-window-item value="orders-metrics">
          <OrderMetrics />
        </v-tabs-window-item>

        <v-tabs-window-item value="Scraping-metrics">
          <ScrapingMetrics />
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
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
// sections
import GeneralMetrics from "@/pages/dashboard/index/GeneralMetrics.vue";
import SchedulerMetrics from "@/pages/dashboard/index/SchedulerMetrics.vue";
import OrderMetrics from "@/pages/dashboard/index/OrderMetrics.vue";
import ScrapingMetrics from "@/pages/dashboard/index/ScrapingMetrics.vue";
const title = ref("Fixtura");
const tab = ref("general-metrics");
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
