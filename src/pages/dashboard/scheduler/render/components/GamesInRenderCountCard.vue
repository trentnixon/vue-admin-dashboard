<template>
  <CardSmall1DataPoint
    :icon="'mdi-download'"
    :value="gamesInRenderCount"
    subtitle="Total Results"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
</template>

<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRendersStore } from '@/store/renders';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const renderStore = useRendersStore();
  const { selectedRender } = storeToRefs(renderStore);

  const gamesInRenderCount = computed(() => {
    return (
      selectedRender.value?.attributes.game_results_in_renders.data.length || 0
    );
  });
</script>
