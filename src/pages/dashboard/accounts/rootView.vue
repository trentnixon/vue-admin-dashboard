<template>
  <v-container>
    <ViewTitleBanner>
      <template #title>
        {{ title }}
      </template>
    </ViewTitleBanner>
    <AccountTable />

    <SectionContainerWithTitle>
      <template #title> Account Metrics </template>
      <template #content>
        <v-row>
          <v-col cols="4">
            <ActiveOrdersPieChart />
          </v-col>
          <v-col cols="4">
            <FreeTrialStatusPieChart />
          </v-col>
          <v-col cols="4">
            <AccountTypeSplitPieChart />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <SportsDistributionCard />
          </v-col>
          <v-col cols="6">
            <TemplateRatioSplitCard />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <TrialLogoGallery />
          </v-col>
        </v-row>
      </template>
    </SectionContainerWithTitle>

    <SectionContainerWithTitle>
      <template #title> Sponsors </template>
      <template #content>
        <v-row>
          <v-col cols="4">
            <SponsorsMetrics />
          </v-col>
          <v-col cols="8">
            <SponsorsStatusPieChart />
          </v-col>
        </v-row>
      </template>
    </SectionContainerWithTitle>
  </v-container>
</template>

<script setup lang="ts">
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";

//Cards
import SportsDistributionCard from "@/pages/dashboard/accounts/components/SportsDistributionCard.vue";
// Tables
import AccountTable from "@/pages/dashboard/accounts/components/AccountTable.vue";
import TrialLogoGallery from "@/pages/dashboard/accounts/components/TrialLogoGallery.vue";
// Charts
import ActiveOrdersPieChart from "@/pages/dashboard/accounts/components/ActiveOrdersPieChart.vue";
import FreeTrialStatusPieChart from "@/pages/dashboard/accounts/components/FreeTrialStatusPieChart.vue";
import AccountTypeSplitPieChart from "@/pages/dashboard/accounts/components/AccountTypeSplitPieChart.vue";
import TemplateRatioSplitCard from "@/pages/dashboard/accounts/components/TemplateRatioSplitCard.vue";
import SponsorsStatusPieChart from "@/pages/dashboard/accounts/components/SponsorsStatusPieChart.vue";
import SponsorsMetrics from "@/pages/dashboard/accounts/components/SponsorsMetrics.vue";
// Dependencies
import { onMounted, ref } from "vue";
import { useAccountStore } from "@/store/account";
import { useOrdersStore } from "@/store/orders";
// Get Stores
const accountStore = useAccountStore();
const ordersStore = useOrdersStore();
const title = ref("Account Overview");

onMounted(() => {
  accountStore.fetchAccounts();
  ordersStore.fetchOrders();
});
</script>

<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
