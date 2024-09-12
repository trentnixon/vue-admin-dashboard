<template>
  <v-card class="mx-auto mb-4">
    <v-card-title>Subscription Tier Breakdown</v-card-title>
    <v-card-subtitle>
      Distribution of Accounts Across Subscription Tiers
    </v-card-subtitle>

    <v-card-text>
      <PieChart
        :data="subscriptionTierData.data"
        :categories="subscriptionTierData.categories"
        title="Subscription Tier Breakdown"
        subtitle="Distribution of Accounts Across Subscription Tiers"
        seriesName="Subscription Tiers"
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useOrdersStore } from '@/store/orders';
  import PieChart from '@/components/common/charts/PieChart.vue';

  const ordersStore = useOrdersStore();
  const { subscriptionTierBreakdown } = storeToRefs(ordersStore);

  const subscriptionTierData = ref({ categories: [], data: [] });

  watch(
    subscriptionTierBreakdown,
    newBreakdown => {
      if (newBreakdown) {
        subscriptionTierData.value = newBreakdown;
      } else {
        subscriptionTierData.value = { categories: [], data: [] };
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
