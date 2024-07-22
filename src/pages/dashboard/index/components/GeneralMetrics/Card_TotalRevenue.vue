<template>
  <CardSmall1DataPoint
    :icon="'mdi-currency-usd'"
    :value="`$${calculateTotalRevenue.toFixed(2)}`"
    subtitle="Total Revenue"
    buttonText="Revenue"
    @click="goToOrders"
  />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useOrdersStore } from "@/store/orders";
import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";
const ordersStore = useOrdersStore();

const { calculateTotalRevenue } = storeToRefs(ordersStore);

const router = useRouter();
const goToOrders = () => {
  router.push("/dashboard/customers");
};
</script>

<style scoped></style>
