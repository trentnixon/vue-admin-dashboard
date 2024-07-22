<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>

  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="scheduler-overview">Scheduler Overview</v-tab>
      <v-tab value="render-overview">Render Overview</v-tab>
      <v-tab value="actions">Actions</v-tab> </v-tabs
    ><v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="scheduler-overview">
          <SectionContainerWithTitle>
            <template #title> Scheduler Overview </template>
            <template #content>
              <v-row>
                <v-col cols="4">
                  Total Schedulers (Placeholder for Total Schedulers Component)
                  <div>
                    This component will use the
                    <strong>useSchedulerStore</strong> to count the total number
                    of schedulers created.
                  </div>
                </v-col>
                <v-col cols="4">
                  Active Schedulers (Placeholder for Active Schedulers
                  Component)
                  <div>
                    This component will use the
                    <strong>useSchedulerStore</strong> to count the number of
                    currently active schedulers.
                  </div>
                </v-col>
                <v-col cols="4">
                  Queued Schedulers (Placeholder for Queued Schedulers
                  Component)
                  <div>
                    This component will use the
                    <strong>useSchedulerStore</strong> to count the number of
                    schedulers currently queued.
                  </div>
                </v-col>
                <v-col cols="12">
                  Table of Schedulers (Placeholder for Scheduler Table)
                  <div>
                    This table will use the
                    <strong>useSchedulerStore</strong> to list all schedulers
                    with details like name, time, days of the week, status, and
                    associated account. Each row will be clickable to navigate
                    to the individual scheduler details.
                  </div>
                </v-col>
                <v-col cols="12">
                  Line Chart: Scheduler Activities Over Time (Placeholder for
                  Line Chart)
                  <div>
                    This chart will use the
                    <strong>useSchedulerStore</strong> to display the number of
                    scheduler activities over time.
                  </div>
                </v-col>
                <v-col cols="12">
                  Bar Chart: Schedulers by Day of the Week (Placeholder for Bar
                  Chart)
                  <div>
                    This chart will use the
                    <strong>useSchedulerStore</strong> to show the distribution
                    of schedulers across different days of the week.
                  </div>
                </v-col>
                <v-col cols="12">
                  Scheduler Success Rate (Placeholder for Scheduler Success Rate
                  Component)
                  <div>
                    This component will use the
                    <strong>useSchedulerStore</strong> to calculate and display
                    the success rate of schedulers based on their execution
                    history.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <v-tabs-window-item value="render-overview">
          <SectionContainerWithTitle>
            <template #title> Render Overview </template>
            <template #content>
              <v-row>
                <v-col cols="4">
                  Total Renders (Placeholder for Total Renders Component)
                  <div>
                    This component will use the
                    <strong>useRenderStore</strong> to count the total number of
                    renders created.
                  </div>
                </v-col>
                <v-col cols="4">
                  Completed Renders (Placeholder for Completed Renders
                  Component)
                  <div>
                    This component will use the
                    <strong>useRenderStore</strong> to count the number of
                    completed renders.
                  </div>
                </v-col>
                <v-col cols="4">
                  Processing Renders (Placeholder for Processing Renders
                  Component)
                  <div>
                    This component will use the
                    <strong>useRenderStore</strong> to count the number of
                    renders currently processing.
                  </div>
                </v-col>
                <v-col cols="12">
                  Table of Renders (Placeholder for Renders Table)
                  <div>
                    This table will use the <strong>useRenderStore</strong> to
                    list all renders with details like name, status, associated
                    scheduler, and completion status. Each row will be clickable
                    to navigate to the individual render details.
                  </div>
                </v-col>
                <v-col cols="12">
                  Line Chart: Render Activities Over Time (Placeholder for Line
                  Chart)
                  <div>
                    This chart will use the <strong>useRenderStore</strong> to
                    display the number of render activities over time.
                  </div>
                </v-col>
                <v-col cols="12">
                  Bar Chart: Renders by Type (Placeholder for Bar Chart)
                  <div>
                    This chart will use the <strong>useRenderStore</strong> to
                    show the distribution of renders by type (e.g., upcoming
                    games, game results, team rosters, etc.).
                  </div>
                </v-col>
                <v-col cols="12">
                  Render Error Rate (Placeholder for Render Error Rate
                  Component)
                  <div>
                    This component will use the
                    <strong>useRenderStore</strong> to calculate and display the
                    error rate of renders based on their execution history.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <v-tabs-window-item value="actions">
          <SectionContainerWithTitle>
            <template #title> Actions </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Force Rerender Renders (Placeholder for Rerender Button)
                  <div>
                    Button to trigger a force rerender of selected renders. This
                    will use data from the <strong>useRenderStore</strong>.
                  </div>
                </v-col>
                <v-col cols="6">
                  Send Render Completion Emails (Placeholder for Send Email
                  Button)
                  <div>
                    Button to send emails for completed renders. This will use
                    data from the <strong>useRenderStore</strong> and
                    <strong>useEmailStore</strong>.
                  </div>
                </v-col>
                <v-col cols="6">
                  Schedule New Render (Placeholder for Schedule Render Button)
                  <div>
                    Button to schedule a new render task. This will use data
                    from the <strong>useSchedulerStore</strong>.
                  </div>
                </v-col>
                <v-col cols="6">
                  Reschedule Existing Render (Placeholder for Reschedule Render
                  Button)
                  <div>
                    Button to reschedule an existing render task. This will use
                    data from the <strong>useSchedulerStore</strong> and
                    <strong>useRenderStore</strong>.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { ref } from "vue";
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";

const title = ref("Scheduler and Render Management");
const tab = ref("scheduler-overview");

// Placeholder Data
const totalSchedulers = ref("Placeholder for Total Schedulers Data");
const activeSchedulers = ref("Placeholder for Active Schedulers Data");
const queuedSchedulers = ref("Placeholder for Queued Schedulers Data");
const schedulers = ref("Placeholder for Schedulers Data");
const schedulerActivities = ref("Placeholder for Scheduler Activities Data");
const schedulersByDay = ref("Placeholder for Schedulers by Day Data");
const schedulerSuccessRate = ref("Placeholder for Scheduler Success Rate Data");

const totalRenders = ref("Placeholder for Total Renders Data");
const completedRenders = ref("Placeholder for Completed Renders Data");
const processingRenders = ref("Placeholder for Processing Renders Data");
const renders = ref("Placeholder for Renders Data");
const renderActivities = ref("Placeholder for Render Activities Data");
const rendersByType = ref("Placeholder for Renders by Type Data");
const renderErrorRate = ref("Placeholder for Render Error Rate Data");

const forceRerenderRenders = () => {
  console.log("Placeholder action for forcing rerender of selected renders");
};

const sendRenderCompletionEmails = () => {
  console.log("Placeholder action for sending render completion emails");
};

const scheduleNewRender = () => {
  console.log("Placeholder action for scheduling a new render");
};

const rescheduleExistingRender = () => {
  console.log("Placeholder action for rescheduling an existing render");
};
</script>
<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
.chart {
  height: 300px;
}
</style>
