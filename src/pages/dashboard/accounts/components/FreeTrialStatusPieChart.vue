<template>
  <v-card>
    <v-card-title>Free Trial Status</v-card-title>
    <v-card-subtitle>
      Status of Free Trials across all Accounts
    </v-card-subtitle>

    <v-card-text>
      <BarChart
        :data="freeTrialData"
        :categories="freeTrialCategories"
        title="Free Trial Distribution"
        subtitle=""
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useAccountStore } from "@/store/account";
import BarChart from "@/components/common/charts/BarChart.vue";
import { storeToRefs } from "pinia";

const accountStore = useAccountStore();
const { freeTrialStatus } = storeToRefs(accountStore);

const freeTrialData = ref([]);
const freeTrialCategories = ref([]);

watch(
  freeTrialStatus,
  (newStatus) => {
    if (newStatus) {
      freeTrialData.value = newStatus.map((item) => item.value);
      freeTrialCategories.value = newStatus.map((item) => item.name);
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
