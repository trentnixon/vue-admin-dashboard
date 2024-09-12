<template>
  <CardSmall1DataPoint
    :icon="'mdi-refresh'"
    :value="forceRerenderCount"
    subtitle="Force Rerender Requested"
    buttonText=""
    @click="() => {}"
    theme="cardNeutral"
  />
</template>

<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useRendersStore } from '@/store/renders';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const rendersStore = useRendersStore();
  const { getRendersBySchedulerId } = storeToRefs(rendersStore);

  const forceRerenderCount = computed(() => {
    return getRendersBySchedulerId.value.filter(
      render => render.attributes.forceRerender
    ).length;
  });
</script>
