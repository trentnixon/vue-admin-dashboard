<template>
  <SingleChartCard>
    <template #title>Render Start Times and Durations</template>
    <template #subtitle>Scatter Plot of Render Times</template>
    <template #chart>
      <ScatterChart
        :data="scatterChartData"
        :categories="scatterChartCategories"
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
const scatterChartCategories = ref([...Array(25).keys()].map(i => i * 60)); // 0 to 1440 representing minutes since midnight

const timeStringToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};

const determineLifecycleCategory = (render) => {
  const { hasTeamRosters, forceRerender } = render.attributes;
  if (hasTeamRosters && forceRerender) {
    return "hasTeamRosters - forceRerender - complete";
  } else if (hasTeamRosters) {
    return "hasTeamRosters - complete";
  } else if (forceRerender) {
    return "forceRerender - complete";
  } else {
    return "complete";
  }
};

watch(
  getRendersBySchedulerId,
  (newRenders) => {
    if (newRenders) {
      scatterChartData.value = newRenders.map((render) => {
        const startTime = parseISO(render.attributes.publishedAt);
        const duration = (parseISO(render.attributes.updatedAt) - startTime) / 60000; // Convert to minutes
        const lifecycleCategory = determineLifecycleCategory(render);
        const startTimeMinutes = timeStringToMinutes(format(startTime, "HH:mm"));
        console.log("Render:", render.attributes.Name);
        console.log("Start Time (minutes):", startTimeMinutes);
        console.log("Duration:", duration);
        console.log("Lifecycle Category:", lifecycleCategory);
        return {
          name: render.attributes.Name,
          value: [startTimeMinutes, duration],
          category: lifecycleCategory,
        };
      });
      console.log("Processed scatterChartData:", scatterChartData.value); // Debugging log
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
