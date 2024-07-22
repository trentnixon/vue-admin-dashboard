<template>
  <SectionContainerWithTitle>
    <template #title> Overview </template>
    <template #content>
      <v-row>
        <v-col cols="3">
          <Card_TotalSignups />
          <Card_TotalRevenue />
          <Card_AverageOrderValue />
        </v-col>
        <v-col cols="9">
          <SignUpTrend />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
// components
import Card_TotalSignups from "@/pages/dashboard/index/components/GeneralMetrics/Card_TotalSignups.vue";
import Card_TotalRevenue from "@/pages/dashboard/index/components/GeneralMetrics/Card_TotalRevenue.vue";
import Card_AverageOrderValue from "@/pages/dashboard/index/components/GeneralMetrics/Card_AverageOrderValue.vue";
import SignUpTrend from "@/pages/dashboard/index/components/GeneralMetrics/SignUpTrend.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
</script>

<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
