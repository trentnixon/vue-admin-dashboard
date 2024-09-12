<template>
  <ContainerBlueGreyLighten2>
    <v-chart class="chart" :option="option" :theme="theme" autoresize />
  </ContainerBlueGreyLighten2>
</template>

<script setup>
  import ContainerBlueGreyLighten2 from '@/components/common/containers/ContainerBlueGreyLighten2.vue';
  import { defineProps, watch, ref } from 'vue';
  import VChart from 'vue-echarts';

  const props = defineProps({
    data: Object,
    categories: Array,
    title: String,
    subtitle: String,
    theme: {
      type: String,
      default: 'customTheme'
    },
    seriesNames: {
      type: Array,
      default: () => ['Line Data']
    }
  });

  const option = ref({
    title: {
      text: props.title,
      subtext: props.subtitle,
      itemGap: 3,
      left: 'right',
      top: 0,
      textStyle: {
        fontSize: 15,
        fontFamily: 'Roboto'
      },
      subtextStyle: {
        fontSize: 12,
        fontFamily: 'Roboto'
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.seriesNames,
      orient: 'horizontal',
      left: 'center',
      bottom: 0
    },
    xAxis: {
      type: 'category',
      data: props.categories
    },
    yAxis: {
      type: 'value'
    },
    series: props.seriesNames.map((name, index) => ({
      name: name,
      type: 'line',
      stack: 'Total',
      data: props.data[Object.keys(props.data)[index]],
      smooth: true,
      areaStyle: { shadowColor: 'rgba(0, 0, 0, 0.5)', shadowBlur: 10 },
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    }))
  });

  watch([() => props.data, () => props.categories], () => {
    option.value.xAxis.data = props.categories;
    option.value.series.forEach((series, index) => {
      series.data = props.data[Object.keys(props.data)[index]];
    });
  });
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
