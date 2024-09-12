<template>
  <CardSmall1DataPoint
    :icon="'mdi-robot'"
    :subtitle="'Total AI Articles'"
    :value="totalAiArticles"
    :button-text="'View AI Articles'"
    @button-click="handleButtonClick"
  />
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useAiArticlesStore } from '@/store/aiArticles';
  import CardSmall1DataPoint from '@/components/common/cards/CardSmall1DataPoint.vue';

  const aiArticleStore = useAiArticlesStore();
  const { totalAiArticleCount } = storeToRefs(aiArticleStore);

  const totalAiArticles = computed(() => totalAiArticleCount.value);

  onMounted(() => {
    aiArticleStore.fetchTotalAiArticleCount();
  });

  const handleButtonClick = () => {
    // Logic to handle button click, e.g., navigate to AI articles page
    console.log('Button clicked');
  };
</script>
