<template>
  <SectionContainerWithTitle>
    <template #title>SCHEDULER METRICS</template>
    <template #content>
      <v-row>
        <v-col cols="3">
          <Card_TotalSchedulers />
        </v-col>
        <v-col cols="3">
          <Card_TotalRendersCard />
        </v-col>
        <v-col cols="3">
          <Card_TotalDownloadsCard />
        </v-col>
        <v-col cols="3">
          <Card_TotalAiArticlesCard />
        </v-col>

        <v-col cols="9">placeholder</v-col>
        <v-col cols="6"><SchedulersByDayOfWeek /></v-col>
        <v-col cols="6">
          <ActiveSchedulersThisWeek />
        </v-col>

        <!-- Scheduler Activities Over Time -->
        <v-col cols="12">
          <SchedulerActivitiesOverTime />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
  // components
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import ActiveSchedulersThisWeek from '@/pages/dashboard/index/components/SchedulerMetrics/ActiveSchedulersThisWeek.vue';
  import Card_TotalSchedulers from '@/pages/dashboard/index/components/SchedulerMetrics/Card_TotalSchedulers.vue';
  import SchedulersByDayOfWeek from '@/pages/dashboard/index/components/SchedulerMetrics/SchedulersByDayOfWeek.vue';
  import SchedulerActivitiesOverTime from '@/pages/dashboard/index/components/SchedulerMetrics/SchedulerActivitiesOverTime.vue';
  import Card_TotalRendersCard from '@/pages/dashboard/index/components/SchedulerMetrics/Card_TotalRendersCard.vue';
  import Card_TotalDownloadsCard from '@/pages/dashboard/index/components/SchedulerMetrics/Card_TotalDownloadsCard.vue';
  import Card_TotalAiArticlesCard from '@/pages/dashboard/index/components/SchedulerMetrics/Card_TotalAiArticlesCard.vue';
</script>

<style scoped>
  .elevation-1 {
    margin-bottom: 20px;
  }
</style>
