<template>
  <CardSmall1DataPoint
    :icon="'mdi-receipt-text-outline'"
    :value="totalSponsors"
    subtitle="Total Sponsors"
    buttonText="View Sponsors"
    @click="goToOrders"
  />
  <CardSmall1DataPoint
    :icon="'mdi-receipt-text-outline'"
    :value="averageSponsorsPerAccount.toFixed(2)"
    subtitle="Average Sponsors Per Account"
    buttonText="View Sponsors"
    @click="goToOrders"
  />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
import { useAccountStore } from "@/store/account";
import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";
const accountStore = useAccountStore();
const { totalSponsors, averageSponsorsPerAccount } = storeToRefs(accountStore);
const goToOrders = () => {
  router.push("/dashboard/customers");
};
</script>

<style scoped>
.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
}

.metric-value {
  font-size: 24px;
  font-weight: bold;
}

.metric-label {
  font-size: 14px;
  color: gray;
}
</style>
