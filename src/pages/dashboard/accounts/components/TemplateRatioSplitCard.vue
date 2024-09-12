<template>
  <SingleChartCard>
    <template #title>Template Ratio Split</template>
    <template #subtitle>
      Ratio Split of Different Templates Used by Accounts
    </template>
    <template #chart>
      <PieChart
        :data="templateRatioSplitData.data"
        :categories="templateRatioSplitData.categories"
        title="Template Ratio Split"
        subtitle="Ratio Split of Different Templates"
        seriesName="Templates"
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
  import { watch, ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useAccountStore } from '@/store/account';
  import PieChart from '@/components/common/charts/PieChart.vue';
  import SingleChartCard from '@/components/common/cards/SingleChartCard.vue';

  const accountStore = useAccountStore();
  const { templateRatioSplit } = storeToRefs(accountStore);

  const templateRatioSplitData = ref({ categories: [], data: [] });

  watch(
    templateRatioSplit,
    newData => {
      if (newData) {
        templateRatioSplitData.value = newData;
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
