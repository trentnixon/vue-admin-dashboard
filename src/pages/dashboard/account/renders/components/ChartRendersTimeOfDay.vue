<template>
  <SingleChartCard>
    <template #title>Render Start Times and Durations</template>
    <template #subtitle>Scatter Plot of Render Times</template>
    <template #chart>
      <ScatterChart
        :data="scatterChartData"
        title="Render Start Times and Durations"
        subtitle="Scatter Plot of Render Times"
        seriesName="Render Durations"
      />
    </template>
  </SingleChartCard>
</template>

<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRendersStore } from "@/store/renders";
import ScatterChart from "@/components/common/charts/ScatterChart.vue";
import SingleChartCard from "@/components/common/cards/SingleChartCard.vue";
import { parseISO, format } from "date-fns";

// Store setup
const rendersStore = useRendersStore();
const { getRendersBySchedulerId } = storeToRefs(rendersStore);

const scatterChartData = ref([]);
const timeStringToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};

watch(
  getRendersBySchedulerId,
  (newRenders) => {
    if (newRenders) {
      scatterChartData.value = newRenders.map((render) => {
        const startTime = parseISO(render.attributes.publishedAt);
        const duration = (parseISO(render.attributes.updatedAt) - startTime) / 60000; // Convert to minutes
        return {
          name: render.attributes.Name,
          value: [timeStringToMinutes(format(startTime, "HH:mm")), duration],
        };
      });
      console.log("scatterChartData:", scatterChartData.value); // Debugging log
    } else {
      scatterChartData.value = [];
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
