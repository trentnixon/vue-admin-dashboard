import { usePrivateAiArticleState } from "./private";
import { fetchAiArticleFromService, fetchAiArticlesByRenderIdFromService, fetchTotalAiArticleCountFromService } from "./service";

export async function fetchAiArticle(id: number) {
  const state = usePrivateAiArticleState();
  try {
    state.loading = true;
    const response = await fetchAiArticleFromService(id);
    if (response && response.data) {
      state.aiArticle = response.data;
      console.log("Fetched AI Article details:", state.aiArticle);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}

export async function fetchAiArticlesByRenderId(renderId: number) {
  const state = usePrivateAiArticleState();
  try {
    state.loading = true;
    const response = await fetchAiArticlesByRenderIdFromService(renderId);
    if (response && response.data) {
      state.aiArticles = response.data;
      console.log("Fetched AI Articles for render ID:", renderId, state.aiArticles);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}


export async function fetchTotalAiArticleCount() {
  const state = usePrivateAiArticleState();
  try {
    state.loading = true;
    const response = await fetchTotalAiArticleCountFromService();
    console.log("totalAiArticleCount ", response);
    if (response) {
      state.totalAiArticleCount = Number(response) ;
      console.log("Fetched total AI article count:", state.totalAiArticleCount);
    } else {
      throw new Error("Invalid data structure");
    }
  } catch (error) {
    state.error = (error as Error).message;
  } finally {
    state.loading = false;
  }
}