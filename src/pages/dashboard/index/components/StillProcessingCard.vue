<template>
    <CardSmall1DataPoint
      :icon="'mdi-clock-outline'"
      :value="rendersStillProcessing"
      subtitle="Still Processing"
      buttonText="View Renders"
      @click="goToRenders"
    />
  </template>

  <script setup>
  import { watch } from "vue";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import { useRendersStore } from "@/store/renders";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const rendersStore = useRendersStore();
  const { rendersStillProcessing } = storeToRefs(rendersStore);


  watch(rendersStillProcessing, () => {
    console.log("rendersStillProcessing ", rendersStillProcessing);
  })

  const router = useRouter();
  const goToRenders = () => {
    router.push("/dashboard/renders");
  };
  </script>
