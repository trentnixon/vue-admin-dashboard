<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <template v-if="overnightRenders > 0">
    <SectionContainerWithTitle>
      <template #title>Previous 24 Hours</template>
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
      </template>
    </SectionContainerWithTitle>
  </template>
  <SectionContainerWithTitle>
    <template #title>Render State</template>
    <template #content>
      <v-row>
        <v-col cols="6"><StillProcessingCard /></v-col>
        <v-col cols="6"><ScheduledRendersNext24HoursCard /></v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <SectionContainerWithTitle>
    <template #title>Accounts Rendered Overnight</template>
    <template #content>
      <v-row>
        <v-col cols="12">
          <TableNamesOfTeamsRenderedOverNight />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>

  <SectionContainerWithTitle>
    <template #title>Accounts Scheduled for Tomorrow</template>
    <template #content>
      <v-row>
        <v-col cols="12">
          <TableOfAccountsWithRendersDueTomorrow />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <OrderMetrics />
  <ScrapingMetrics />
</template>

<script setup lang="ts">
  import ViewTitleBanner from '@/components/common/builds/ViewTitleBanner.vue';
  import { computed, onMounted, ref } from 'vue';
  //
  import OverNightRendersCard from '@/pages/dashboard/index/components/OverNightRendersCard.vue';
  import DownloadsCompletedCard from '@/pages/dashboard/index/components/DownloadsCompletedCard.vue';
  import ErrorsOccurredCard from '@/pages/dashboard/index/components/ErrorsOccurredCard.vue';
  import StillProcessingCard from '@/pages/dashboard/index/components/StillProcessingCard.vue';
  import ScheduledRendersNext24HoursCard from '@/pages/dashboard/index/components/ScheduledRendersNext24HoursCard.vue';
  import TableNamesOfTeamsRenderedOverNight from '@/pages/dashboard/index/components/Renders/TableNamesOfTeamsRenderedOverNight.vue';

  import OrderMetrics from '@/pages/dashboard/index/OrderMetrics.vue';
  import ScrapingMetrics from '@/pages/dashboard/index/ScrapingMetrics.vue';
  const title = ref('Fixtura');

  // set up data for page getters
  import { useAccountStore } from '@/store/account';
  import { useOrdersStore } from '@/store/orders';
  import { useSchedulerStore } from '@/store/scheduler';
  import { useRendersStore } from '@/store/renders';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import { storeToRefs } from 'pinia';
  import TableOfAccountsWithRendersDueTomorrow from '@/pages/dashboard/index/components/Renders/TableOfAccountsWithRendersDueTomorrow.vue';
  const accountStore = useAccountStore();
  const ordersStore = useOrdersStore();
  const schedulerStore = useSchedulerStore();
  const rendersStore = useRendersStore();
  const { rendersInLast24Hours } = storeToRefs(rendersStore);
  onMounted(() => {
    accountStore.fetchAccounts();
    /*  ordersStore.fetchOrders();
    schedulerStore.fetchAllSchedulers();
    rendersStore.fetchAllRenders(); */
  });

  const overnightRenders = computed(() => rendersInLast24Hours.value);
</script>

<style scoped>
  .elevation-1 {
    margin-bottom: 20px;
  }
</style>
