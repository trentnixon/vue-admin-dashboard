<template>
  <ViewTitleBanner>
    <template #title>
      Render Details
    </template>
  </ViewTitleBanner>

  <SchedulerStatusChips />
  <SectionContainerWithTitle>
    <template #title>
      <RenderStatusChips />
    </template>
    <template #content>
      <v-row>
        <v-col cols="3">
          <DownloadCountCard />
        </v-col>
        <v-col cols="3">
          <AIArticlesCountCard />
        </v-col>
        <v-col cols="3">
          <GamesInRenderCountCard />
        </v-col>
        <v-col cols="3">
          <FixturesInRenderCountCard />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <EmailStatusChips />
  <TeamRostersChips />



  <div v-if="useRender">
    <pre>{{ JSON.stringify(useRender, null, 2) }}</pre>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, onMounted, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
// Pinia
import { storeToRefs } from "pinia";
import { useRendersStore } from "@/store/renders";
// Components
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import RenderStatusChips from "@/pages/dashboard/scheduler/render/components/RenderStatusChips.vue";
import EmailStatusChips from "@/pages/dashboard/scheduler/render/components/EmailStatusChips.vue";
import TeamRostersChips from "@/pages/dashboard/scheduler/render/components/TeamRostersChips.vue";
import SchedulerStatusChips from "@/pages/dashboard/scheduler/render/components/SchedulerStatusChips.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import DownloadCountCard from "@/pages/dashboard/scheduler/render/components/DownloadCountCard.vue";
import AIArticlesCountCard from "@/pages/dashboard/scheduler/render/components/AIArticlesCountCard.vue";
import GamesInRenderCountCard from "@/pages/dashboard/scheduler/render/components/GamesInRenderCountCard.vue";
import FixturesInRenderCountCard from "@/pages/dashboard/scheduler/render/components/FixturesInRenderCountCard.vue";

// Get route parameters
const route = useRoute();
const schedulerId = Number(route.params.schedulerId);
const renderId = Number(route.params.renderId);

// Render store
const renderStore = useRendersStore();
const { selectedRender } = storeToRefs(renderStore);

const useRender = computed(() => selectedRender.value);

console.log("useRender ", useRender?.value);

// Fetch render on component mount
onMounted(async () => {
  console.log("route.params ", route.params);
  await renderStore.fetchRenderById(renderId);
});

// Watch for changes to selectedRender
watchEffect(() => {
  if (useRender.value) {
    console.log("useRender updated: ", useRender.value);
  }
});
</script>
<!--
    Basic Information Name: render.attributes.Name Processing Status:
    render.attributes.Processing Completion Status: render.attributes.Complete
    Email Sent: render.attributes.EmailSent Additional Information Send Email:
    render.attributes.sendEmail Has Team Roster Request:
    render.attributes.hasTeamRosterRequest Has Team Rosters:
    render.attributes.hasTeamRosters Force Rerender:
    render.attributes.forceRerender Force Rerender Email:
    render.attributes.forceRerenderEmail Has Team Roster Email:
    render.attributes.hasTeamRosterEmail Related Data Scheduler Information:
    scheduler.attributes Name: scheduler.attributes.Name Time:
    scheduler.attributes.Time Is Rendering: scheduler.attributes.isRendering
    Queued: scheduler.attributes.Queued Download Information: download.attributes
    Name: download.attributes.Name URL: download.attributes.URL Grouping Category:
    download.attributes.grouping_category Is Accurate:
    download.attributes.isAccurate Has Been Processed:
    download.attributes.hasBeenProcessed Display Cost:
    download.attributes.DisplayCost Completion Time:
    download.attributes.CompletionTime Output File Size:
    download.attributes.OutputFileSize User Error Message:
    download.attributes.UserErrorMessage Has Error: download.attributes.hasError
    Number of Downloads: download.attributes.numDownloads AI Article Information:
    aiArticle.attributes Name: aiArticle.attributes.Name Grouping Category:
    aiArticle.attributes.grouping_category Article Journalist:
    aiArticle.attributes.ArticleJournalist Article Editor:
    aiArticle.attributes.ArticleEditor Has Bias: aiArticle.attributes.hasBias Open
    AI ID: aiArticle.attributes.openAiID Open AI Created:
    aiArticle.attributes.openAiCreated Open AI Prompt Tokens:
    aiArticle.attributes.openAiPrompt_tokens Open AI Completion Tokens:
    aiArticle.attributes.openAiCompletionTokens Open AI Total Tokens:
    aiArticle.attributes.openAiTotalTokens Has Completed:
    aiArticle.attributes.hasCompleted Force Rerender:
    aiArticle.attributes.forceRerender Has Error: aiArticle.attributes.hasError
    Asset Link ID: aiArticle.attributes.assetLinkID Potential Dashboard Widgets
    Based on the above data points, here are some potential dashboard widgets we
    could implement: Render Overview Widget: Displays the render name, processing
    status, completion status, and email sent status. Render Details Widget:
    Additional information such as send email status, team roster request, team
    rosters, force rerender, and team roster email status. Scheduler Information
    Widget: Displays scheduler details such as name, time, rendering status, and
    queued status. Download Information Widget: Lists related downloads with
    details such as name, URL, grouping category, accuracy, processed status,
    display cost, completion time, file size, user error message, error status,
    and number of downloads. AI Article Information Widget: Displays AI article
    details such as name, grouping category, journalist, editor, bias, Open AI
    details (ID, created, tokens), completion status, force rerender, error
    status, and asset link ID. -->
