<template>
  <h5 class="text-h5 ma-0 mb-2 pa-0 text-uppercase">
    <slot name="title"></slot>
  </h5>
  <ContainerWithColorProp :bgColor="bgColor">
    <slot name="content"></slot>
  </ContainerWithColorProp>
</template>

<script setup>
  import { defineProps } from 'vue';
  //import ContainerBlueGreyLighten2 from "@/components/common/containers/ContainerBlueGreyLighten2.vue";
  import ContainerWithColorProp from '@/components/common/containers/ContainerWithColorProp.vue';

  const props = defineProps({
    bgColor: {
      type: String,
      default: 'bg-grey-lighten-5'
    },
    margin: {
      type: String,
      default: 'mb-4'
    }
  });
</script>

<style scoped></style>
