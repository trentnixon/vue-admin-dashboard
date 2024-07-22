<template>
    <CardSmall1DataPoint
      :icon="'mdi-cart-outline'"
      :value="orderCount"
      subtitle="Total Orders"
      buttonText="View Orders"
      @click="goToOrders"
    />
  </template>

  <script setup>
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import { useOrdersStore } from "@/store/orders";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const ordersStore = useOrdersStore();
  const { orderCount } = storeToRefs(ordersStore);

  const router = useRouter();
  const goToOrders = () => {
    router.push("/dashboard/customers");
  };
  </script>
