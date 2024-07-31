<!-- eslint-disable vue/valid-v-slot -->
<template>
  <div v-if="loading && !overnightRenders" class="loading-indicator">
    Loading...
  </div>
  <v-data-table
    v-else
    :headers="headers"
    :items="overnightRenders"
    :items-per-page="5"
    class="mx-auto"
    fixed-header
    color="cardNeutral"
    variant="flat"
    rounded
  >
    <template #top>
      <v-toolbar flat class="px-4" color="secondary" rounded>
        Total Scheduler : {{ previous24HoursStats.totalSchedulers }}
        <v-spacer></v-spacer>
        Accounts Rendered: {{ overnightRenders.length }}
      </v-toolbar>
    </template>
    <template v-slot:item.logoUrl="{ item }">
      <v-avatar :image="item.logoUrl" size="large"></v-avatar>
    </template>

    <template v-slot:item.downloads="{ item }">
      {{ item.downloads }}
    </template>
    <template v-slot:item.downloadErrors="{ item }">
      {{ item.downloadErrors }}
    </template>
    <template v-slot:item.AIArticles="{ item }">
      {{ item.AIArticles }}
    </template>
    <template v-slot:item.AIErrors="{ item }">
      {{ item.AIErrors }}
    </template>
    <template v-slot:item.processing="{ item }">
      <v-icon color="warning" v-if="item.processing">mdi-close-circle</v-icon>
      <v-icon color="primary" v-else>mdi-check-circle</v-icon>
    </template>
    <template v-slot:item.complete="{ item }">
      <v-icon color="primary" v-if="item.complete">mdi-check-circle</v-icon>
      <v-icon color="warning" v-else>mdi-close-circle</v-icon>
    </template>
    <template v-slot:item.actions="{ item }">
      <SecondaryButton @click="viewAccount(item.schedulerId, item.id)"
        >View</SecondaryButton
      >
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRendersStore } from "@/store/renders";
import SecondaryButton from "@/components/common/buttons/SecondaryButton.vue";
import { formatDistanceToNow, parseISO } from "date-fns";
import router from "@/router";

// State
const loading = ref(true);
const rendersStore = useRendersStore();

const {
  listRendersInLast24Hours,
  previous24HoursStats,
  totalRendersScheduled,
} = storeToRefs(rendersStore);

// Computed properties
const overnightRenders = computed(() => {
  const TableItems = listRendersInLast24Hours.value.map((render) => {
    if (!render.currentRender) return false;
    console.log("previous24HoursStats ", previous24HoursStats);
    const AccountType = render.account.account_type.Name;

    const createdAt = parseISO(render.currentRender.createdAt);
    const logoUrl =
      AccountType === "Club"
        ? render.account.clubs[0].ParentLogo
        : render.account.associations[0].ParentLogo;

    return {
      id: render.currentRender.id,
      teamName: render.account.FirstName,
      logoUrl,
      downloads: render.currentRender.downloads.count,
      downloadErrors: render.currentRender.downloads.hasError,
      AIArticles: render.currentRender.ai_articles.count,
      AIErrors: render.currentRender.ai_articles.hasError,
      renderTime: formatDistanceToNow(createdAt, { addSuffix: true }),
      schedulerId: render.id,
      processing: render.currentRender.Processing,
      complete: render.currentRender.Complete,
    };
  });

  return TableItems.filter((item) => item !== false);
});

// Fetch data on mount
onMounted(async () => {
  await rendersStore.fetchRendersFromPrevious24HoursAction();
  loading.value = false;
});

// Table headers
const headers = [
  { title: "Logo", value: "logoUrl", align: "start" },

  { title: "Downloads", value: "downloads", align: "center" },
  { title: "DL Errors", value: "downloadErrors", align: "center" },
  { title: "AI Articles", value: "AIArticles", align: "center" },
  { title: "AI Errors", value: "AIErrors", align: "center" },
  { title: "Processing", value: "processing", align: "center", icon: true },
  { title: "Complete", value: "complete", align: "center", icon: true },
  { title: "Actions", value: "actions", align: "center", sortable: false },
];

const viewAccount = (schedulerid: number, renderid: number) => {
  router.push(`/dashboard/scheduler/${schedulerid}/render/${renderid}/`);
};
</script>

<style scoped>
.loading-indicator {
  text-align: center;
  margin-top: 20px;
}
</style>
