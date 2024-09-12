<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>

  <AccountStatus />
  <SectionContainerWithTitle>
    <template #title>Current Plan</template>
    <template #content>
      <v-row>
        <v-col cols="6">The plan, dates, expires, costs, actions?</v-col>
        <v-col cols="6">Total revune from account</v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <ProfileStatusGrid />
  <SectionContainerWithTitle>
    <template #title>Location</template>
    <template #content>
      <v-row>
        <v-col cols="12">If location then show on Map</v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <SectionContainerWithTitle>
    <template #title>Data Overview</template>
    <template #content>
      <v-row>
        <v-col cols="3">Average time taken to collect data</v-col>
        <v-col cols="3">average time to collect results</v-col>
        <v-col cols="3">Average time taken to Complete Downloads</v-col>
      </v-row>
      <v-row>
        <v-col cols="3">average cost per bundle</v-col>
        <v-col cols="3">Average cost per download</v-col>
        <v-col cols="3">Average cost per week</v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>

  <SectionContainerWithTitle>
    <template #title></template>
    <template #content>
      <v-row>
        <v-col cols="12">has Sponsors: show sponsors if they have any</v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
  // Imports
  import ViewTitleBanner from '@/components/common/builds/ViewTitleBanner.vue';
  import AccountStatus from '@/pages/dashboard/account/overview/components/AccountStatus.vue';
  import ProfileStatusGrid from '@/pages/dashboard/account/overview/components/ProfileStatusGrid.vue';
  import ContainerBlueGreyLighten2 from '@/components/common/containers/ContainerBlueGreyLighten2.vue';

  import { ref } from 'vue';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';

  // Vars
  const title = ref('Account Details');
</script>

<style lang="scss" scoped></style>
