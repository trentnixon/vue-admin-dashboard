<template>
  <ContainerBlueGreyLighten2>
    <v-chart class="chart" :option="option" :theme="theme" autoresize />
  </ContainerBlueGreyLighten2>
</template>

<script setup>
import ContainerBlueGreyLighten2 from "@/components/common/containers/ContainerBlueGreyLighten2.vue";
import { defineProps, watch, ref } from "vue";
import VChart from "vue-echarts";

const props = defineProps({
  chartType: String,
  data: Array,
  categories: Array,
  title: String,
  subtitle: String,
  theme: {
    type: String,
    default: "customTheme", // Set the default theme to 'customTheme'
  },
});

const option = ref({
  title: {
    text: props.title,
    subtext: props.subtitle,
    left: "right",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    orient: "horizontal",
    left: "right",
    bottom: "10",
  },
  xAxis: {
    type: "category",
    data: props.categories,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Name Needed",
      smooth: true,
      type: props.chartType,
      data: props.data,
      areaStyle: {},
    },
  ],
  emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
});

watch([() => props.data, () => props.categories], () => {
  option.value.xAxis.data = props.categories;
  option.value.series[0].data = props.data;
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
