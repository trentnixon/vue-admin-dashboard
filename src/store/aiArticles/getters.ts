import { computed } from "vue";
import { usePrivateAiArticleState } from "./private";

export const aiArticle = computed(() => usePrivateAiArticleState().aiArticle);
export const aiArticles = computed(() => usePrivateAiArticleState().aiArticles);
export const loading = computed(() => usePrivateAiArticleState().loading);
export const error = computed(() => usePrivateAiArticleState().error);
export const totalAiArticleCount = computed(() => usePrivateAiArticleState().totalAiArticleCount);

export const getAiArticleById = (id: number) => {
  return aiArticles.value.find((aiArticle) => aiArticle.id === id) || null;
};
