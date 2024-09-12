<template>
  <SingleChartCard>
    <template #title>Account Type Split</template>
    <template #subtitle>
      Distribution of Account Types (Club vs Association)
    </template>
    <template #chart>
      <PieChart
        :data="accountTypeData"
        :categories="accountTypeCategories"
        title="Account Type Distribution"
        subtitle=""
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
  import { ref, watch, onMounted } from 'vue';
  import { useAccountStore } from '@/store/account';
  import PieChart from '@/components/common/charts/PieChart.vue';
  import { storeToRefs } from 'pinia';
  import SingleChartCard from '@/components/common/cards/SingleChartCard.vue';

  const accountStore = useAccountStore();
  const { accountTypeSplit } = storeToRefs(accountStore);

  const accountTypeData = ref([]);
  const accountTypeCategories = ref([]);

  watch(
    accountTypeSplit,
    newSplit => {
      if (newSplit) {
        accountTypeData.value = newSplit.map(item => item.value);
        accountTypeCategories.value = newSplit.map(item => item.name);
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
