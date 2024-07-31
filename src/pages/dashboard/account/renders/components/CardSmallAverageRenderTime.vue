<template>
  <CardSmall1DataPoint
    :icon="'mdi-clock'"
    :value="averageRenderTime"
    subtitle="Average Time of Day"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useRendersStore } from "@/store/renders";
import { parseISO } from "date-fns";
import CardSmall1DataPoint from "@/components/common/cards/CardSmall1DataPoint.vue";

const rendersStore = useRendersStore();
const { getRendersBySchedulerId } = storeToRefs(rendersStore);

const averageRenderTime = computed(() => {
  const times = getRendersBySchedulerId.value.map((render) => {
    const startTime = parseISO(render.attributes.publishedAt);
    return startTime.getHours() * 60 + startTime.getMinutes();
  });

  if (times.length === 0) return "N/A";

  const avgTime = times.reduce((acc, time) => acc + time, 0) / times.length;
  const avgHours = Math.floor(avgTime / 60)
    .toString()
    .padStart(2, "0");
  const avgMinutes = (avgTime % 60).toFixed(0).toString().padStart(2, "0");

  return `${avgHours}:${avgMinutes}`;
});
</script>
