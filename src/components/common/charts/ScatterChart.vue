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
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "Scatter Chart",
    },
    subtitle: {
      type: String,
      default: "Subtitle",
    },
    theme: {
      type: String,
      default: "customTheme",
    },
    seriesName: {
      type: String,
      default: "Scatter Data",
    },
  });

  const option = ref({
    title: {
      text: props.title,
      subtext: props.subtitle,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: (params) => `${params.marker} ${params.name}<br/>Start Time: ${params.value[0]}<br/>Duration: ${params.value[1].toFixed(2)} minutes`,
    },
    xAxis: {
      type: "value",
      name: "Start Time (minutes since midnight)",
      min: 0,
      max: 1440,
      axisLabel: {
        formatter: (value) => {
          const hours = Math.floor(value / 60);
          const minutes = value % 60;
          return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
        },
      },
    },
    yAxis: {
      type: "value",
      name: "Duration (minutes)",
    },
    series: [
      {
        name: props.seriesName,
        type: "scatter",
        symbolSize: 20,
        data: props.data.map(item => item.value),

      },
    ],
  });

  watch([() => props.data, () => props.title, () => props.subtitle], () => {
    console.log("Updated Props Data:", props.data); // Debug log
    option.value.series[0].data = props.data.map(item => item.value);
    option.value.title.text = props.title;
    option.value.title.subtext = props.subtitle;
  });
  </script>

  <style scoped>
  .chart {
    height: 300px;
  }
  </style>
