<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="system-health">System Health</v-tab>
      <v-tab value="user-management">User Management</v-tab>
      <v-tab value="subscription-settings"
        >Subscription Settings</v-tab
      > </v-tabs
    ><v-card-text>
      <v-tabs-window v-model="tab">
        <!-- System Health Section -->
        <v-tabs-window-item value="system-health">
          <SectionContainerWithTitle>
            <template #title> System Health </template>
            <template #content>
              <v-row>
                <v-col cols="4">
                  Server Status (Placeholder for Server Status Component)
                  <div>
                    This component will use the
                    <strong>useDataCollectionStore</strong> to display the
                    current status of servers (Online/Offline).
                  </div>
                </v-col>
                <v-col cols="4">
                  System Uptime (Placeholder for System Uptime Component)
                  <div>
                    This component will use the
                    <strong>useDataCollectionStore</strong> to show the system
                    uptime percentage over the last 24 hours/7 days.
                  </div>
                </v-col>
                <v-col cols="4">
                  Response Time (Placeholder for Response Time Component)
                  <div>
                    This component will use the
                    <strong>useDataCollectionStore</strong> to show the average
                    server response time.
                  </div>
                </v-col>
                <v-col cols="6">
                  Error Rate (Placeholder for Error Rate Component)
                  <div>
                    This component will use data from various stores to display
                    the current error rate across the system.
                  </div>
                </v-col>
                <v-col cols="6">
                  Active Jobs (Placeholder for Active Jobs Component)
                  <div>
                    This component will use the
                    <strong>useSchedulerStore</strong> and
                    <strong>useRenderStore</strong> to display the number of
                    active jobs and tasks.
                  </div>
                </v-col>
                <v-col cols="12">
                  Resource Usage (Placeholder for Resource Usage Chart)
                  <div>
                    This chart will use the
                    <strong>useDataCollectionStore</strong> to visualize
                    resource usage (CPU, memory, disk) over time.
                  </div>
                </v-col>
                <v-col cols="12">
                  System Logs (Placeholder for System Logs Component)
                  <div>
                    This component will display recent system logs, using data
                    from the <strong>useDataCollectionStore</strong> and
                    <strong>useLogStore</strong>.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <!-- User Management Section -->
        <v-tabs-window-item value="user-management">
          <SectionContainerWithTitle>
            <template #title> User Management </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Total Users (Placeholder for Total Users Component)
                  <div>
                    This component will use the <strong>useUserStore</strong> to
                    display the total number of users in the system.
                  </div>
                </v-col>
                <v-col cols="6">
                  Active Users (Placeholder for Active Users Component)
                  <div>
                    This component will use the <strong>useUserStore</strong> to
                    display the number of currently active users.
                  </div>
                </v-col>
                <v-col cols="12">
                  User Activity Logs (Placeholder for User Activity Logs
                  Component)
                  <div>
                    This component will display logs of recent user activities,
                    using data from the <strong>useUserStore</strong> and
                    <strong>useLogStore</strong>.
                  </div>
                </v-col>
                <v-col cols="6">
                  Role Management (Placeholder for Role Management Component)
                  <div>
                    This component will allow administrators to manage user
                    roles and permissions, using data from the
                    <strong>useUserStore</strong>.
                  </div>
                </v-col>
                <v-col cols="6">
                  Add/Remove Users (Placeholder for Add/Remove Users Component)
                  <div>
                    This component will provide functionalities to add or remove
                    users from the system, using data from the
                    <strong>useUserStore</strong>.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <!-- Subscription Settings Section -->
        <v-tabs-window-item value="subscription-settings">
          <SectionContainerWithTitle>
            <template #title> Subscription Settings </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Total Subscriptions (Placeholder for Total Subscriptions
                  Component)
                  <div>
                    This component will use the
                    <strong>useSubscriptionStore</strong> to display the total
                    number of active subscriptions.
                  </div>
                </v-col>
                <v-col cols="6">
                  Expiring Subscriptions (Placeholder for Expiring Subscriptions
                  Component)
                  <div>
                    This component will use the
                    <strong>useSubscriptionStore</strong> to list subscriptions
                    that are nearing expiration.
                  </div>
                </v-col>
                <v-col cols="12">
                  Subscription Tier Breakdown (Placeholder for Subscription Tier
                  Breakdown Chart)
                  <div>
                    This chart will use the
                    <strong>useSubscriptionStore</strong> to display a breakdown
                    of subscriptions by tier.
                  </div>
                </v-col>
                <v-col cols="12">
                  Revenue by Subscription Tier (Placeholder for Revenue by
                  Subscription Tier Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to show the revenue
                    generated from each subscription tier.
                  </div>
                </v-col>
                <v-col cols="6">
                  Manage Subscription Plans (Placeholder for Manage Subscription
                  Plans Component)
                  <div>
                    This component will allow administrators to create, update,
                    or delete subscription plans, using data from the
                    <strong>useSubscriptionStore</strong>.
                  </div>
                </v-col>
                <v-col cols="6">
                  Subscription Analytics (Placeholder for Subscription Analytics
                  Component)
                  <div>
                    This component will provide analytics and insights into
                    subscription trends and performance, using data from the
                    <strong>useSubscriptionStore</strong> and
                    <strong>useOrdersStore</strong>.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text></v-card
  >
</template>
<script setup>
import { ref } from "vue";
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";

const title = ref("Company Systems and Health");
const tab = ref("system-health");

// Placeholder Data
const serverStatus = ref("Placeholder for Server Status Data");
const systemUptime = ref("Placeholder for System Uptime Data");
const responseTime = ref("Placeholder for Response Time Data");
const errorRate = ref("Placeholder for Error Rate Data");
const activeJobs = ref("Placeholder for Active Jobs Data");
const resourceUsage = ref("Placeholder for Resource Usage Data");
const systemLogs = ref("Placeholder for System Logs Data");

const totalUsers = ref("Placeholder for Total Users Data");
const activeUsers = ref("Placeholder for Active Users Data");
const userActivityLogs = ref("Placeholder for User Activity Logs Data");
const roleManagement = ref("Placeholder for Role Management Data");
const addRemoveUsers = ref("Placeholder for Add/Remove Users Data");

const totalSubscriptions = ref("Placeholder for Total Subscriptions Data");
const expiringSubscriptions = ref(
  "Placeholder for Expiring Subscriptions Data"
);
const subscriptionTierBreakdown = ref(
  "Placeholder for Subscription Tier Breakdown Data"
);
const revenueBySubscriptionTier = ref(
  "Placeholder for Revenue by Subscription Tier Data"
);
const manageSubscriptionPlans = ref(
  "Placeholder for Manage Subscription Plans Data"
);
const subscriptionAnalytics = ref(
  "Placeholder for Subscription Analytics Data"
);
</script>
<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
.chart {
  height: 300px;
}
</style>
