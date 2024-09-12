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
    data: {
      type: Array,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => [...Array(24).keys()].map(i => i * 60) // 0 to 1440 representing minutes since midnight
    },
    title: {
      type: String,
      default: 'Scatter Chart'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    theme: {
      type: String,
      default: 'customTheme'
    },
    seriesName: {
      type: String,
      default: 'Scatter Data'
    }
  });

  const option = ref({
    title: {
      text: props.title,
      subtext: props.subtitle,
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: params =>
        `${params.name}<br/>Time: ${Math.floor(params.value[0] / 60)
          .toString()
          .padStart(2, '0')}:${(params.value[0] % 60)
          .toString()
          .padStart(2, '0')}<br/>Duration: ${params.value[1].toFixed(
          2
        )} minutes`
    },
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: 10
    },
    xAxis: {
      type: 'value',
      name: 'Start Time (minutes since midnight)',
      min: 0,
      max: 1440,
      axisLabel: {
        formatter: value =>
          `${Math.floor(value / 60)
            .toString()
            .padStart(2, '0')}:${(value % 60).toString().padStart(2, '0')}`,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      name: 'Duration (minutes)'
    },
    series: []
  });

  watch(
    [
      () => props.data,
      () => props.categories,
      () => props.title,
      () => props.subtitle
    ],
    () => {
      console.log('Props Data:', props.data); // Debugging log
      const lifecycleCategories = Array.from(
        new Set(props.data.map(item => item.category))
      );
      console.log('Lifecycle Categories:', lifecycleCategories); // Debugging log
      option.value.series = lifecycleCategories.map(category => ({
        name: category,
        type: 'scatter',
        data: props.data
          .filter(item => item.category === category)
          .map(item => item.value),
        symbolSize: 10
      }));
      option.value.title.text = props.title;
      option.value.title.subtext = props.subtitle;
      option.value.legend.data = lifecycleCategories;
      console.log('Updated Option:', option.value); // Debugging log
    }
  );
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
