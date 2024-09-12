<template>
  <ViewTitleBanner>
    <template #title>Render Debug Information</template>
  </ViewTitleBanner>
  <div v-if="!selectedRender">Loading...</div>

  <div v-else-if="error">Error: {{ error }}</div>
  <template v-else>
    <SectionContainerWithTitle>
      <template #title>Render Data</template>
      <template #content>
        <div class="render-debug">
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Render Name
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ getRenderName }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Render Status
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ getRenderStatus }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Scheduler Name
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ getSchedulerName }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Team Roster Info
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>Has Roster Request: {{ getTeamRosterInfo.hasRequest }}</p>
                <p>Has Rosters: {{ getTeamRosterInfo.hasRosters }}</p>
                <p>Team Roster Email Sent: {{ getTeamRosterInfo.emailSent }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Game Results Count
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ getGameResultsCount }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Upcoming Games Count
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ getUpcomingGamesCount }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Grades Count
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>{{ getGradesCount }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Email Info
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>Send Email: {{ getEmailInfo.sendEmail }}</p>
                <p>Email Sent: {{ getEmailInfo.emailSent }}</p>
                <p>
                  Force Rerender Email: {{ getEmailInfo.forceRerenderEmail }}
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="secondary">
                Force Rerender Info
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <p>Force Rerender: {{ getForceRerenderInfo.forceRerender }}</p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-title color="primary">
                Raw Render Data
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <pre>{{ selectedRender }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </template>
    </SectionContainerWithTitle>
  </template>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRenderData } from '../composables/useRenderData';
  import ViewTitleBanner from '@/components/common/builds/ViewTitleBanner.vue';
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';

  // Get route parameters
  const route = useRoute();
  const renderId = Number(route.params.renderId);

  const {
    selectedRender,
    fetchRenderById,
    getRenderStatus,
    getRenderName,
    getSchedulerName,
    getTeamRosterInfo,
    getGameResultsCount,
    getUpcomingGamesCount,
    getGradesCount,

    getEmailInfo,
    getForceRerenderInfo,
    error
  } = useRenderData();

  // Fetch render on component mount
  onMounted(async () => {
    await fetchRenderById(renderId);
  });
</script>
