<template>
  <SingleChartCard>
    <template #title>Free Trial Status</template>
    <template #subtitle>Status of Free Trials across all Accounts</template>
    <template #chart>
      <BarChart
        :data="freeTrialData"
        :categories="freeTrialCategories"
        title="Free Trial Distribution"
        subtitle=""
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue';
  import { useAccountStore } from '@/store/account';
  import BarChart from '@/components/common/charts/BarChart.vue';
  import { storeToRefs } from 'pinia';
  import SingleChartCard from '@/components/common/cards/SingleChartCard.vue';
  const accountStore = useAccountStore();
  const { freeTrialStatus } = storeToRefs(accountStore);

  const freeTrialData = ref([]);
  const freeTrialCategories = ref([]);

  watch(
    freeTrialStatus,
    newStatus => {
      if (newStatus) {
        freeTrialData.value = newStatus.map(item => item.value);
        freeTrialCategories.value = newStatus.map(item => item.name);
      }
    },
    { immediate: true }
  );

  onMounted(() => {
    accountStore.fetchAccounts();
  });
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
