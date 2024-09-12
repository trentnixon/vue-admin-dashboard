<template>
  <v-card>
    <v-card-title>AI Article Information</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="article in aiArticles" :key="article.id">
          <v-list-item-content>
            <v-list-item-title>{{ article.attributes.Name }}</v-list-item-title>
            <v-list-item-subtitle>
              Category: {{ article.attributes.grouping_category }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Journalist: {{ article.attributes.ArticleJournalist }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Editor: {{ article.attributes.ArticleEditor }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Bias: {{ article.attributes.hasBias }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Open AI ID: {{ article.attributes.openAiID }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Created: {{ article.attributes.openAiCreated }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Prompt Tokens: {{ article.attributes.openAiPrompt_tokens }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Completion Tokens: {{ article.attributes.openAiCompletionTokens }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Total Tokens: {{ article.attributes.openAiTotalTokens }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Completed: {{ article.attributes.hasCompleted ? 'Yes' : 'No' }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Force Rerender:
              {{ article.attributes.forceRerender ? 'Yes' : 'No' }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Error: {{ article.attributes.hasError ? 'Yes' : 'No' }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Asset Link ID: {{ article.attributes.assetLinkID }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useAiArticlesStore } from '@/store/aiArticles';
  import { storeToRefs } from 'pinia';

  const aiArticleStore = useAiArticlesStore();
  const { aiArticles } = storeToRefs(aiArticleStore);
</script>
