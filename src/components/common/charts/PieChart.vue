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
    data: Array,
    categories: Array,
    title: String,
    subtitle: String,
    theme: {
      type: String,
      default: 'customTheme'
    },
    seriesName: {
      type: String,
      default: 'Pie Data'
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
      trigger: 'item',
      valueFormatter: value => value.toFixed(2),
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show: false
    },
    series: [
      {
        name: props.seriesName,
        type: 'pie',
        radius: ['40%', '70%'],
        top: '20',
        avoidLabelOverlap: false,
        padAngle: 5,
        itemStyle: {
          borderRadius: 5
        },

        data: props.data.map((value, index) => ({
          name: props.categories[index],
          value
        })),
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });

  watch([() => props.data, () => props.categories], () => {
    option.value.series[0].data = props.data.map((value, index) => ({
      name: props.categories[index],
      value
    }));
  });
</script>

<style scoped>
  .chart {
    height: 300px;
  }
</style>
