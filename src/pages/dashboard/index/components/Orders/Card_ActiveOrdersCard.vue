<template>
    <CardSmall1DataPoint
      icon="mdi-cart"
      subtitle="Active Orders"
      :value="activeOrderCount"
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
  const { activeOrderCount } = storeToRefs(ordersStore);

  watch(activeOrderCount, () => {
  console.log("activeOrderCount ", activeOrderCount);
});

  onMounted(() => {
    ordersStore.fetchOrders();
  });

  const handleButtonClick = () => {
    // Logic to handle button click, e.g., navigate to orders page
    console.log("Button clicked");
  };
  </script>
