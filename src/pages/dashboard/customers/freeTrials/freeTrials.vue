<template>
  <SectionContainerWithTitle>
    <template #title> Free Trial Overview </template>
    <template #content>
      <v-row>
        <!-- Free Trial Overview Section -->
        <v-col cols="4">
          Total Free Trials (Placeholder for Total Free Trials Component)
          <div>
            This component will use the <strong>useTrialInstancesStore</strong> to count the total number of free trials initiated.
          </div>
        </v-col>
        <v-col cols="4">
          Active Free Trials (Placeholder for Active Free Trials Component)
          <div>
            This component will use the <strong>useTrialInstancesStore</strong> to count the number of currently active free trials.
          </div>
        </v-col>
        <v-col cols="4">
          Completed Free Trials (Placeholder for Completed Free Trials Component)
          <div>
            This component will use the <strong>useTrialInstancesStore</strong> to count the number of free trials that have been completed.
          </div>
        </v-col>
        <v-col cols="12">
          Table of Free Trials (Placeholder for Free Trials Table)
          <div>
            This table will use the <strong>useTrialInstancesStore</strong> to list all free trials with details like start date, end date, status, and associated account. Each row will be clickable to navigate to the individual trial details.
          </div>
        </v-col>
        <v-col cols="12">
          Line Chart: Free Trial Start Dates (Placeholder for Line Chart)
          <div>
            This chart will use the <strong>useTrialInstancesStore</strong> to display the number of free trials started over time.
          </div>
        </v-col>
        <v-col cols="12">
          Bar Chart: Free Trials by Subscription Tier (Placeholder for Bar Chart)
          <div>
            This chart will use the <strong>useTrialInstancesStore</strong> and <strong>useSubscriptionTierStore</strong> to show the distribution of free trials across different subscription tiers.
          </div>
        </v-col>

        <!-- Actions Section -->
        <v-col cols="6">
          Send Follow-Up Emails (Placeholder for Follow-Up Emails Button)
          <div>
            Button to trigger follow-up emails to users whose free trials are about to end. This will use data from the <strong>useTrialInstancesStore</strong> and <strong>useEmailStore</strong> to send emails.
          </div>
        </v-col>
        <v-col cols="6">
          Convert Free Trials to Paid Subscriptions (Placeholder for Conversion Button)
          <div>
            Button to trigger actions aimed at converting free trial users to paid subscriptions. This will involve data from the <strong>useTrialInstancesStore</strong> and <strong>useOrdersStore</strong>.
          </div>
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>

  <SectionContainerWithTitle>
    <template #title> Free Trial Insights </template>
    <template #content>
      <v-row>
        <v-col cols="6">
          Free Trials by Account Type (Placeholder for Pie Chart)
          <div>
            Pie chart showing the distribution of free trials between clubs and associations. This will use data from the <strong>useTrialInstancesStore</strong>.
          </div>
        </v-col>
        <v-col cols="6">
          Free Trials by Duration (Placeholder for Bar Chart)
          <div>
            Bar chart displaying the average duration of free trials. This will use data from the <strong>useTrialInstancesStore</strong> to calculate the average time from start to end date.
          </div>
        </v-col>
        <v-col cols="12">
          Free Trials Conversion Rate (Placeholder for Conversion Rate Component)
          <div>
            Component displaying the conversion rate of free trials to paid subscriptions. This will use data from the <strong>useTrialInstancesStore</strong> and <strong>useOrdersStore</strong>.
          </div>
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup>
import { ref } from "vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
// Placeholder Data
const totalFreeTrials = ref("Placeholder for Total Free Trials Data");
const activeFreeTrials = ref("Placeholder for Active Free Trials Data");
const completedFreeTrials = ref("Placeholder for Completed Free Trials Data");
const freeTrials = ref("Placeholder for Free Trials Data");
const freeTrialStartDates = ref("Placeholder for Free Trial Start Dates Data");
const freeTrialsBySubscriptionTier = ref("Placeholder for Free Trials by Subscription Tier Data");

const followUpEmails = ref("Placeholder for Follow-Up Emails Data");
const convertFreeTrials = ref("Placeholder for Conversion Data");

const freeTrialsByAccountType = ref("Placeholder for Free Trials by Account Type Data");
const freeTrialsByDuration = ref("Placeholder for Free Trials by Duration Data");
const freeTrialsConversionRate = ref("Placeholder for Conversion Rate Data");

const sendFollowUpEmails = () => {
  console.log("Placeholder action for sending follow-up emails");
};

const convertFreeTrialsToPaid = () => {
  console.log("Placeholder action for converting free trials to paid subscriptions");
};
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
