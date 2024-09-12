import { ref, computed, watch } from 'vue';
import { useAiArticlesStore } from '@/store/aiArticles'; // Assuming you have set up the store in this path
import { storeToRefs } from 'pinia';
import type { AiArticle } from '@/types';

const INPUT_TOKEN_COST = 5.0 / 1_000_000; // $5.00 per 1M input tokens
const OUTPUT_TOKEN_COST = 15.0 / 1_000_000; // $15.00 per 1M output tokens

export function useAiArticles() {
  const aiArticleStore = useAiArticlesStore();
  const { aiArticlesByRenderID } = storeToRefs(aiArticleStore);

  const loading = ref(false);
  const error = ref<string | null>(null);

  const aiArticles = ref<AiArticle[]>([]);

  // Watch for updates to aiArticlesByRenderID and react accordingly
  watch(
    () => aiArticlesByRenderID.value,
    newArticles => {
      if (newArticles) {
        aiArticles.value = newArticles as AiArticle[];
      }
    },
    { immediate: true }
  );

  // Function to fetch AI articles for a specific render
  async function fetchAiArticlesForRender(renderId: number) {
    loading.value = true;
    error.value = null;

    try {
      await aiArticleStore.fetchAiArticlesByRenderId(renderId);
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'Failed to fetch AI articles';
    } finally {
      loading.value = false;
    }
  }

  // Get total number of AI articles
  const totalAiArticles = computed(() => {
    return aiArticles.value.length;
  });

  // Group AI articles by their asset type
  const groupAiArticlesByAssetType = computed(() => {
    const grouped: Record<string, AiArticle[]> = aiArticles.value.reduce(
      (acc, article) => {
        const type =
          article.attributes.asset_type?.data?.attributes?.Name ||
          'Unknown Type';

        if (!acc[type]) {
          acc[type] = [];
        }

        acc[type].push(article);
        return acc;
      },
      {} as Record<string, AiArticle[]>
    );

    return grouped;
  });

  // Get AI articles that have errors
  const aiArticlesWithErrors = computed(() => {
    return aiArticles.value.filter(article => article.attributes.hasError);
  });

  // Get completed AI articles
  const completedAiArticles = computed(() => {
    return aiArticles.value.filter(article => article.attributes.hasCompleted);
  });

  // Get OpenAI-related data from articles and include token costs
  const openAiData = computed(() => {
    return aiArticles.value.map(article => {
      const {
        openAiID,
        openAiPrompt_tokens,
        openAiCompletionTokens,
        openAiTotalTokens,
        hasBias
      } = article.attributes;

      const inputCost = openAiPrompt_tokens * INPUT_TOKEN_COST;
      const outputCost = openAiCompletionTokens * OUTPUT_TOKEN_COST;
      const totalCost = inputCost + outputCost;

      return {
        openAiID,
        openAiPrompt_tokens,
        openAiCompletionTokens,
        openAiTotalTokens,
        hasBias,
        inputCost: inputCost.toFixed(4),
        outputCost: outputCost.toFixed(4),
        totalCost: totalCost.toFixed(4)
      };
    });
  });

  // Format AI articles for display in a table
  const formatAiArticlesForTable = computed(() => {
    return aiArticles.value.map(article => {
      const id = article.id;
      const name = article.attributes.Name || 'Unnamed Article';
      const type =
        article.attributes.asset_type?.data?.attributes?.Name || 'Unknown Type';
      const category =
        article.attributes.asset_category?.data?.attributes?.Name ||
        'Unknown Category';
      const status = article.attributes.hasCompleted ? 'Completed' : 'Pending';
      const link = `/ai-article/${id}`;
      const inputCost = (
        article.attributes.openAiPrompt_tokens * INPUT_TOKEN_COST
      ).toFixed(4);
      const outputCost = (
        article.attributes.openAiCompletionTokens * OUTPUT_TOKEN_COST
      ).toFixed(4);
      const totalCost = (
        parseFloat(inputCost) + parseFloat(outputCost)
      ).toFixed(4);

      return {
        id,
        name,
        type,
        category,
        status,
        inputCost: inputCost,
        outputCost: outputCost,
        totalCost: totalCost,
        link
      };
    });
  });

  return {
    aiArticles,
    totalAiArticles,
    groupAiArticlesByAssetType,
    aiArticlesWithErrors,
    completedAiArticles,
    openAiData,
    formatAiArticlesForTable,
    fetchAiArticlesForRender,
    loading,
    error
  };
}
