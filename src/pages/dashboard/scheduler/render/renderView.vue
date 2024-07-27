<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
</template>

<script setup lang="ts">
// vue
import { ref } from "vue";

// Pinia

// Components
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";

// Vars
const title = ref("Render");
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
