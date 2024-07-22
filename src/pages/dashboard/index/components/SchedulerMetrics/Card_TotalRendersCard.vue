<!-- src/components/common/cards/Card_TotalRendersCard.vue -->
<template>
    <CardSmall1DataPoint
      :icon="'mdi-file-chart'"
      :subtitle="'Total Renders'"
      :value="totalRenders"
      :button-text="'View Renders'"
      @button-click="handleButtonClick"
    />
  </template>

  <script setup>
  import { computed, onMounted } from "vue";
  import { storeToRefs } from "pinia";
  import { useRendersStore } from "@/store/renders";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const rendersStore = useRendersStore();
  const { RenderCount } = storeToRefs(rendersStore);

  const totalRenders = computed(() => RenderCount.value);

  onMounted(() => {
    rendersStore.fetchAllRenders();
  });

  const handleButtonClick = () => {
    // Logic to handle button click, e.g., navigate to renders page
    console.log("Button clicked");
  };
  </script>

  <style scoped>
  .font-weight-black {
    font-weight: 900;
  }
  .total-revenue {
    font-size: 24px; /* Adjust the font size as needed */
  }
  .v-card-actions {
    justify-content: flex-end; /* Align the button to the right */
  }
  </style>
