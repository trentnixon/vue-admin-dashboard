<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="club-association-insights"
        >Club & Association Insights</v-tab
      >
      <v-tab value="season-tracking">Season Tracking</v-tab>
      <v-tab value="marketing-opportunities"
        >Marketing Opportunities</v-tab
      > </v-tabs
    ><v-card-text>
      <v-tabs-window v-model="tab">
        <!-- Club & Association Insights Section -->
        <v-tabs-window-item value="club-association-insights">
          <SectionContainerWithTitle>
            <template #title> Club & Association Insights </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Key Clubs and Associations (Placeholder for Key Clubs and
                  Associations Component)
                  <div>
                    This component will use the
                    <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to list key clubs and
                    associations based on size, activity, and revenue.
                  </div>
                </v-col>
                <v-col cols="6">
                  Top Revenue Generating Clubs/Associations (Placeholder for Top
                  Revenue Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to display top
                    revenue-generating clubs and associations.
                  </div>
                </v-col>
                <v-col cols="12">
                  Club/Association Activity Trends (Placeholder for Activity
                  Trends Chart)
                  <div>
                    This chart will use the <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to show activity trends
                    over time.
                  </div>
                </v-col>
                <v-col cols="12">
                  Club/Association Size Distribution (Placeholder for Size
                  Distribution Chart)
                  <div>
                    This chart will use the <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to show the
                    distribution of clubs and associations by size.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <!-- Season Tracking Section -->
        <v-tabs-window-item value="season-tracking">
          <SectionContainerWithTitle>
            <template #title> Season Tracking </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Upcoming Season Start Dates (Placeholder for Season Start
                  Dates Component)
                  <div>
                    This component will use the
                    <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to list upcoming season
                    start dates for clubs and associations.
                  </div>
                </v-col>
                <v-col cols="6">
                  Season End Dates (Placeholder for Season End Dates Component)
                  <div>
                    This component will use the
                    <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to list upcoming season
                    end dates for clubs and associations.
                  </div>
                </v-col>
                <v-col cols="12">
                  Season Calendar (Placeholder for Season Calendar Component)
                  <div>
                    This calendar will use the <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to visualize the start
                    and end dates of different seasons.
                  </div>
                </v-col>
                <v-col cols="12">
                  Key Contact Times (Placeholder for Key Contact Times
                  Component)
                  <div>
                    This component will use data from the
                    <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to identify the best
                    times to contact clubs and associations based on their
                    season schedules.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <!-- Marketing Opportunities Section -->
        <v-tabs-window-item value="marketing-opportunities">
          <SectionContainerWithTitle>
            <template #title> Marketing Opportunities </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Potential Clubs/Associations to Target (Placeholder for
                  Potential Targets Component)
                  <div>
                    This component will use the
                    <strong>useClubStore</strong> and
                    <strong>useAssociationStore</strong> to identify potential
                    clubs and associations to target based on size, activity,
                    and previous engagement.
                  </div>
                </v-col>
                <v-col cols="6">
                  Marketing Campaign Performance (Placeholder for Campaign
                  Performance Component)
                  <div>
                    This component will use the
                    <strong>useMarketingStore</strong> to track and display the
                    performance of past marketing campaigns, highlighting
                    successful strategies.
                  </div>
                </v-col>
                <v-col cols="12">
                  Engagement Metrics (Placeholder for Engagement Metrics
                  Component)
                  <div>
                    This component will use data from various stores to display
                    key engagement metrics, such as email open rates,
                    click-through rates, and social media interactions.
                  </div>
                </v-col>
                <v-col cols="12">
                  Marketing Calendar (Placeholder for Marketing Calendar
                  Component)
                  <div>
                    This calendar will use the
                    <strong>useMarketingStore</strong> to plan and visualize
                    upcoming marketing activities and campaigns.
                  </div>
                </v-col>
                <v-col cols="12">
                  Regional Insights (Placeholder for Regional Insights
                  Component)
                  <div>
                    This component will use data from the
                    <strong>useClubStore</strong>,
                    <strong>useAssociationStore</strong>, and
                    <strong>useMarketingStore</strong> to provide insights into
                    different regions, helping to tailor marketing strategies.
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

const title = ref("Marketing Dashboard");
const tab = ref("club-association-insights");

// Placeholder Data
const keyClubsAssociations = ref(
  "Placeholder for Key Clubs and Associations Data"
);
const topRevenueClubsAssociations = ref(
  "Placeholder for Top Revenue Clubs/Associations Data"
);
const activityTrends = ref("Placeholder for Activity Trends Data");
const sizeDistribution = ref("Placeholder for Size Distribution Data");

const seasonStartDates = ref("Placeholder for Season Start Dates Data");
const seasonEndDates = ref("Placeholder for Season End Dates Data");
const seasonCalendar = ref("Placeholder for Season Calendar Data");
const keyContactTimes = ref("Placeholder for Key Contact Times Data");

const potentialTargets = ref("Placeholder for Potential Targets Data");
const campaignPerformance = ref("Placeholder for Campaign Performance Data");
const engagementMetrics = ref("Placeholder for Engagement Metrics Data");
const marketingCalendar = ref("Placeholder for Marketing Calendar Data");
const regionalInsights = ref("Placeholder for Regional Insights Data");
</script>
<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
.chart {
  height: 300px;
}
</style>
