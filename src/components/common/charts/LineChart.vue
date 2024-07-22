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
  data: Array,
  categories: Array,
  title: String,
  subtitle: String,
  theme: {
    type: String,
    default: "customTheme",
  },
  seriesName: {
    type: String,
    default: "Line Data",
  },
});

const option = ref({
  title: {
    text: props.title,
    subtext: props.subtitle,
    itemGap: 3,
    left: "right",
    top: 0,
    textStyle: {
      fontSize: 15,
      fontFamily: "Roboto",
    },
    subtextStyle: {
      fontSize: 12,
      fontFamily: "Roboto",
    },
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
      name: props.seriesName,
      type: "line",
      data: props.data,
      smooth: true,
      areaStyle: { shadowColor: "rgba(0, 0, 0, 0.5)", shadowBlur: 10 },
      markPoint: {
        data: [
          { type: "max", name: "Max" },
          { type: "min", name: "Min" },
        ],
      },
      markLine: {
        data: [{ type: "average", name: "Avg" }],
      },
    },
  ],
  emphasis: {
    itemStyle: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: "rgba(0, 0, 0, 0.5)",
    },
  },
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
