<template>
    <CardSmall1DataPoint
      :icon="'mdi-calendar-clock'"
      :value="schedulersDueTomorrow"
      subtitle="Scheduled Renders"
      buttonText="View Schedulers"
      @click="goToSchedulers"
    />
  </template>

  <script setup>
  import { computed, onMounted,watch } from "vue";
  import { storeToRefs } from "pinia";
  import { useRouter } from "vue-router";
  import { useSchedulerStore } from "@/store/scheduler";
  import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

  const schedulerStore = useSchedulerStore();
  const { schedulersDueTomorrow } = storeToRefs(schedulerStore);

  watch(schedulersDueTomorrow, () => {
    console.log("schedulersDueTomorrow ", schedulersDueTomorrow);
  });

  onMounted(async () => {
    await schedulerStore.fetchSchedulersDueTomorrow();
  });

  const router = useRouter();
  const goToSchedulers = () => {
    router.push("/dashboard/schedulers");
  };
  </script>
