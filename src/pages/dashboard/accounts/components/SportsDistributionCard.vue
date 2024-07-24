<template>
  <SingleChartCard>
    <template #title>Sports Distribution</template>
    <template #subtitle> Distribution of Sports Among Accounts </template>
    <template #chart>
      <BarChart
        :data="sportsDistributionData.data"
        :categories="sportsDistributionData.categories"
        title="Sports Distribution"
        subtitle="Distribution of Sports Among Accounts"
        seriesName="Sports"
      />
    </template>
  </SingleChartCard>
</template>
<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useAccountStore } from "@/store/account";
import BarChart from "@/components/common/charts/BarChart.vue";
import SingleChartCard from "@/components/common/cards/SingleChartCard.vue";

const accountStore = useAccountStore();
const { sportsDistribution } = storeToRefs(accountStore);

const sportsDistributionData = ref({ categories: [], data: [] });

watch(
  sportsDistribution,
  (newDistribution) => {
    if (newDistribution) {
      sportsDistributionData.value = newDistribution;
    } else {
      sportsDistributionData.value = { categories: [], data: [] };
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
