<template>
  <CardSmall1DataPoint
    :icon="'mdi-alert-circle-outline'"
    :value="errorsCount"
    subtitle="Errors Occurred"
    buttonText="Errors"
    @click="goToErrors"
    :theme="errorsCount === 0 ? 'cardNeutral' : 'carderror'"
  />
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';
  import { useDownloadsStore } from '@/store/downloads';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const downloadsStore = useDownloadsStore();
  const { downloadsInLast24HoursWithErrors } = storeToRefs(downloadsStore);

  const errorsCount = ref(0);

  onMounted(async () => {
    await downloadsStore.fetchDownloadsInLast24Hours();
    errorsCount.value = downloadsInLast24HoursWithErrors.value.length;
  });

  const router = useRouter();
  const goToErrors = () => {
    router.push('/dashboard/errors');
  };
</script>
