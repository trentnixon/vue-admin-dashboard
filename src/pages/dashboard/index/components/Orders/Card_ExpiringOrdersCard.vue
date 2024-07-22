<template>
    <CardSmall1DataPoint
      icon="mdi-cart"
      subtitle="Orders expiring in the next 7 days"
      :value="expiringOrderCount"
      buttonText="View Orders"
      @button-click="handleButtonClick"
    />
  </template>

  <script setup>
  import { watch, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useOrdersStore } from "@/store/orders";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const ordersStore = useOrdersStore();
  const { expiringOrderCount } = storeToRefs(ordersStore);

  watch(expiringOrderCount, () => {
  console.log("expiringOrderCount ", expiringOrderCount);
});

  onMounted(() => {
    ordersStore.fetchOrders();
  });

  const handleButtonClick = () => {
    // Logic to handle button click, e.g., navigate to orders page
    console.log("Button clicked");
  };
  </script>
