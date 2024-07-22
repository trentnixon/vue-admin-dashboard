<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>

  <AccountStatus />
  <ProfileStatusGrid />

  <ContainerBlueGreyLighten2 margin="my-4">
    Average time taken to collect data| average time to collect results| Average
    time taken to Complete Downloads | average cost per bundle | Average cost
    per download | Average cost per week
  </ContainerBlueGreyLighten2>

  <ContainerBlueGreyLighten2 margin="my-4">
    has Sponsors
  </ContainerBlueGreyLighten2>
  <ContainerBlueGreyLighten2 margin="my-4"> Map </ContainerBlueGreyLighten2>
</template>

<script setup lang="ts">
// Imports
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import AccountStatus from "@/pages/dashboard/account/overview/components/AccountStatus.vue";
import ProfileStatusGrid from "@/pages/dashboard/account/overview/components/ProfileStatusGrid.vue";
import ContainerBlueGreyLighten2 from "@/components/common/containers/ContainerBlueGreyLighten2.vue";

import { ref } from "vue";

// Vars
const title = ref("Account Details");
</script>

<style lang="scss" scoped></style>
