<template>
    <v-card>
      <v-card-title>Account Type Split</v-card-title>
      <v-card-subtitle>
        Distribution of Account Types (Club vs Association)
      </v-card-subtitle>

      <v-card-text>
        <PieChart
          :data="accountTypeData"
          :categories="accountTypeCategories"
          title="Account Type Distribution"
          subtitle=""
        />
      </v-card-text>
    </v-card>
  </template>

  <script setup>
  import { ref, watch, onMounted } from "vue";
  import { useAccountStore } from "@/store/account";
  import PieChart from "@/components/common/charts/PieChart.vue";
  import { storeToRefs } from "pinia";

  const accountStore = useAccountStore();
  const { accountTypeSplit } = storeToRefs(accountStore);

  const accountTypeData = ref([]);
  const accountTypeCategories = ref([]);

  watch(
    accountTypeSplit,
    (newSplit) => {
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
