<template>
  <v-card>
    <v-card-title>Active Orders</v-card-title>
    <v-card-subtitle>
      Ratio of Active Orders to No Active Orders
    </v-card-subtitle>

    <v-card-text>
      <PieChart
        :data="activeOrdersData"
        :categories="activeOrdersCategories"
        title="Active Orders Distribution"
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
const { activeOrderRatio } = storeToRefs(accountStore);

const activeOrdersData = ref([]);
const activeOrdersCategories = ref([]);

watch(
  activeOrderRatio,
  (newStatus) => {
    if (newStatus) {
      activeOrdersData.value = newStatus.map((item) => item.value);
      activeOrdersCategories.value = newStatus.map((item) => item.name);
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
