<template>
    <SingleChartCard>
      <template #title>Render Durations</template>
      <template #subtitle>Distribution of Render Durations</template>
      <template #chart>
        <PieChart
          :data="renderDurationsData.data"
          :categories="renderDurationsData.categories"
          title="Render Durations"
          subtitle="Distribution of Render Durations"
          seriesName="Duration"
        />
      </template>
    </SingleChartCard>
  </template>

  <script setup>
  import { ref, watch } from "vue";
  import { storeToRefs } from "pinia";
  import { useRendersStore } from "@/store/renders";
  import PieChart from "@/components/common/charts/PieChart.vue";
  import SingleChartCard from "@/components/common/cards/SingleChartCard.vue";
  import { differenceInSeconds, parseISO } from "date-fns";

  const rendersStore = useRendersStore();
  const { getRendersBySchedulerId } = storeToRefs(rendersStore);

  const renderDurationsData = ref({ categories: [], data: [] });

  watch(
    getRendersBySchedulerId,
    (newRenders) => {
      if (newRenders) {
        const categories = newRenders.map((render) => render.attributes.Name);
        const data = newRenders.map((render) => {


          const createdAt = parseISO(render.attributes.publishedAt);
          const updatedAt = parseISO(render.attributes.updatedAt);
          console.log(updatedAt, createdAt, differenceInSeconds(updatedAt, createdAt) )
          return differenceInSeconds(updatedAt, createdAt);
        });

        console.log("renderDurationsData ", renderDurationsData)

        renderDurationsData.value = { categories, data };
      } else {
        renderDurationsData.value = { categories: [], data: [] };
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
