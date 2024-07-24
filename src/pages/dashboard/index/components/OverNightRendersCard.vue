<template>
    <CardSmall1DataPoint
      :icon="'mdi-moon-waning-crescent'"
      :value="overnightRenders"
      subtitle="Over Night Renders"
      buttonText="View Renders"
      @click="goToRenders"
      :theme="overnightRenders === 0 ? 'cardNeutral' : 'cardsuccess'"
    />
  </template>

  <script setup>
  import { computed } from "vue";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import { useRendersStore } from "@/store/renders";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const rendersStore = useRendersStore();
  const { rendersInLast24Hours } = storeToRefs(rendersStore);

  const overnightRenders = computed(() => rendersInLast24Hours.value);

  const router = useRouter();
  const goToRenders = () => {
    router.push("/dashboard/renders");
  };
  </script>
