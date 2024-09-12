<template>
  <ViewTitleBanner>
    <template #title>Debug Information</template>
  </ViewTitleBanner>
  <div v-if="loading">Loading...</div>

  <div v-else-if="error">Error: {{ error }}</div>
  <template v-else>
    <SectionContainerWithTitle>
      <template #title>AI Articles</template>
      <template #content>
        <v-expansion-panels flat>
          <v-expansion-panel>
            <v-expansion-panel-title color="secondary">
              Total AI Articles
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p>{{ totalAiArticles }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="primary">
              Group AI Articles by Asset Type
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <pre>{{ groupAiArticlesByAssetType }}</pre>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="secondary">
              AI Articles with Errors
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <pre>{{ aiArticlesWithErrors }}</pre>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="primary">
              Completed AI Articles
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <pre>{{ completedAiArticles }}</pre>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="secondary">
              OpenAI Data
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <pre>{{ openAiData }}</pre>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="primary">
              Total OpenAI Tokens Used
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p>{{ totalOpenAiTokens }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="secondary">
              Total Cost
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <p>{{ totalCost }}</p>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="primary">
              Formatted AI Articles for Table
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <pre>{{ formatAiArticlesForTable }}</pre>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title color="secondary">
              Raw AI Articles Data
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <pre>{{ aiArticles }}</pre>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </SectionContainerWithTitle>
  </template>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useAiArticles } from '../composables/useAiArticles';
  import { useAiArticlesStore } from '@/store/aiArticles'; // Ensure this import path is correct
  import ViewTitleBanner from '@/components/common/builds/ViewTitleBanner.vue';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';

  // Get route parameters
  const route = useRoute();
  const renderId = Number(route.params.renderId);

  // AI Article Store
  const aiArticleStore = useAiArticlesStore();

  const {
    aiArticles,
    totalAiArticles,
    groupAiArticlesByAssetType,
    aiArticlesWithErrors,
    completedAiArticles,
    openAiData,
    totalOpenAiTokens,
    totalCost,
    formatAiArticlesForTable,
    fetchAiArticlesForRender,
    loading,
    error
  } = useAiArticles();

  // Fetch AI articles for the given render on component mount
  onMounted(async () => {
    console.log('route.params ', route.params);
    await fetchAiArticlesForRender(renderId);
  });
</script>

<style scoped>
  .ai-articles-debug {
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }

  .ai-articles-debug h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .ai-articles-debug pre {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
</style>
