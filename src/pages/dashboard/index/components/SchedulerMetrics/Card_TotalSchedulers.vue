<!-- src/pages/dashboard/metrics/TotalSchedulers.vue -->
<template>
  <CardSmall1DataPoint
    :icon="'mdi-calendar'"
    :value="schedulerCount"
    subtitle="Total Schedulers"
    buttonText="Schedulers"
    @click="goToSchedulersPage"
  />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useSchedulerStore } from "@/store/scheduler";
import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

const schedulerStore = useSchedulerStore();
const { schedulerCount } = storeToRefs(schedulerStore);

const router = useRouter();
const goToSchedulersPage = () => {
  router.push("/dashboard/schedulers");
};
</script>
