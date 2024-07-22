import { defineStore } from "pinia";
import { AiArticle } from "@/types";

interface PrivateAiArticleState {
  aiArticle: AiArticle | null;
  aiArticles: AiArticle[];
  loading: boolean;
  totalAiArticleCount: number;
  error: string | null;
}

export const usePrivateAiArticleState = defineStore("aiArticles-private", {
  state: (): PrivateAiArticleState => ({
    aiArticle: null,
    aiArticles: [],
    totalAiArticleCount: 0,
    loading: false,
    error: null,
  }),
});
