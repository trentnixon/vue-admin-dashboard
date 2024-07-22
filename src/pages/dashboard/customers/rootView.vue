<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="customer-overview">Customer Overview</v-tab>
      <v-tab value="customer-activity">Customer Activity</v-tab>
      <v-tab value="customer-revenue">Customer Revenue</v-tab>
      <v-tab value="customer-engagement">Customer Engagement</v-tab></v-tabs
    >
    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="customer-overview">
          <SectionContainerWithTitle>
            <template #title> Customer Overview </template>
            <template #content>
              <v-row>
                <v-col cols="4">
                  Total Customers (Placeholder for Total Customers Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to fetch and display the
                    total number of customers.
                  </div>
                </v-col>
                <v-col cols="4">
                  Active Customers (Placeholder for Active Customers Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to fetch and display the
                    number of active customers.
                  </div>
                </v-col>
                <v-col cols="4">
                  Inactive Customers (Placeholder for Inactive Customers
                  Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to fetch and display the
                    number of inactive customers.
                  </div>
                </v-col>
                <v-col cols="4">
                  New Customers This Month (Placeholder for New Customers
                  Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to fetch and display the
                    number of new customers acquired this month.
                  </div>
                </v-col>
                <v-col cols="4">
                  Customers by Account Type (Placeholder for Customers by
                  Account Type Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to fetch and display the
                    number of customers by account type (free trial, paid).
                  </div>
                </v-col>
                <v-col cols="4">
                  Customers with Free Trials (Placeholder for Free Trial
                  Customers Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to fetch and display the
                    number of customers currently on a free trial.
                  </div>
                </v-col>
                <v-col cols="12">
                  Table of Customers (Placeholder for Customer Table)
                  <div>
                    This table will use the <strong>useCustomerStore</strong> to
                    list all customers with relevant details like name, email,
                    order status, and subscription tier. Each row will be
                    clickable to navigate to individual customer details.
                  </div>
                </v-col>
                <v-col cols="12">
                  Pie Chart: Customers with Orders vs Free Trial (Placeholder
                  for Pie Chart)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to create a pie chart
                    showing the ratio of customers who have active orders versus
                    those on a free trial.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  Revenue by Subscription Tier (Placeholder for Revenue by
                  Subscription Tier Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> and
                    <strong>useSubscriptionTierStore</strong> to display the
                    revenue generated from each subscription tier.
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  Expiring Subscriptions (Next 30 Days) (Placeholder for
                  Expiring Subscriptions Table)
                  <div>
                    This table will use the <strong>useOrdersStore</strong> to
                    list accounts with subscriptions expiring in the next 30
                    days.
                  </div>
                </v-col>
              </v-row>
              <SectionContainerWithTitle>
                <template #title> Orders and Subscriptions </template>
                <template #content>
                  <v-row>
                    <v-col cols="6">
                      <TotalOrdersCard />
                    </v-col>
                    <v-col cols="6">
                      <SubscriptionTierBreakdown />
                    </v-col>
                  </v-row>
                </template>
              </SectionContainerWithTitle>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <v-tabs-window-item value="customer-activity">
          <SectionContainerWithTitle>
            <template #title> Customer Activity </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Customer Sign-ups Over Time (Placeholder for Sign-ups Over
                  Time Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to display the trend of
                    customer sign-ups over time.
                  </div>
                </v-col>
                <v-col cols="6">
                  Active vs Inactive Customers Over Time (Placeholder for Active
                  vs Inactive Customers Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to display the trend of
                    active vs inactive customers over time.
                  </div>
                </v-col>
                <v-col cols="12">
                  Customer Retention Rate (Placeholder for Retention Rate
                  Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> and
                    <strong>useOrdersStore</strong> to calculate and display the
                    customer retention rate.
                  </div>
                </v-col>
                <v-col cols="12">
                  Customer Churn Rate (Placeholder for Churn Rate Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> and
                    <strong>useOrdersStore</strong> to calculate and display the
                    customer churn rate.
                  </div>
                </v-col>
                <v-col cols="6">
                  List of Orders Expiring Soon (Placeholder for Expiring Orders
                  List)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to list orders expiring
                    soon. This list will help in proactive customer engagement
                    for renewals.
                  </div>
                </v-col>
                <v-col cols="6">
                  Returning Customers/Customer Retention (Placeholder for
                  Customer Retention Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to track returning
                    customers and retention rates.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <v-tabs-window-item value="customer-revenue">
          <SectionContainerWithTitle>
            <template #title> Customer Revenue </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Revenue by Customer Segment (Placeholder for Revenue by
                  Segment Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> and
                    <strong>useCustomerStore</strong> to display the revenue
                    generated by different customer segments.
                  </div>
                </v-col>
                <v-col cols="6">
                  Average Revenue Per Customer (Placeholder for Average Revenue
                  Per Customer Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> and
                    <strong>useCustomerStore</strong> to calculate and display
                    the average revenue per customer.
                  </div>
                </v-col>
                <v-col cols="12">
                  Lifetime Value of Customers (Placeholder for Lifetime Value
                  Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> and
                    <strong>useCustomerStore</strong> to calculate and display
                    the lifetime value of customers.
                  </div>
                </v-col>
                <v-col cols="12">
                  Monthly Recurring Revenue (Placeholder for Monthly Recurring
                  Revenue Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> and
                    <strong>useCustomerStore</strong> to calculate and display
                    the monthly recurring revenue.
                  </div>
                </v-col>
                <v-col cols="6">
                  Average Order Value (Placeholder for Average Order Value
                  Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to calculate and display the
                    average value of orders.
                  </div>
                </v-col>
                <v-col cols="6">
                  Revenue Trends Over Time (Placeholder for Revenue Trends Over
                  Time Component)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to display revenue trends
                    over time.
                  </div>
                </v-col>
                <v-col cols="6">
                  Total Orders by Payment Status (Placeholder for Payment Status
                  Pie Chart)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to categorize orders based
                    on their payment status (e.g., paid, unpaid, pending).
                  </div>
                </v-col>
                <v-col cols="6">
                  Revenue Breakdown by Subscription Tier (Placeholder for
                  Revenue Breakdown Chart)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to break down revenue by
                    subscription tier.
                  </div>
                </v-col>
                <v-col cols="12">
                  Total Revenue by Currency (Placeholder for Currency Revenue
                  Bar Chart)
                  <div>
                    This component will use the
                    <strong>useOrdersStore</strong> to display total revenue
                    grouped by different currencies.
                  </div>
                </v-col>
              </v-row>
            </template>
          </SectionContainerWithTitle>
        </v-tabs-window-item>

        <v-tabs-window-item value="customer-engagement">
          <SectionContainerWithTitle>
            <template #title> Customer Engagement </template>
            <template #content>
              <v-row>
                <v-col cols="6">
                  Active Sessions by Customer (Placeholder for Active Sessions
                  Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to display the number of
                    active sessions by customer.
                  </div>
                </v-col>
                <v-col cols="6">
                  Engagement Rate (Placeholder for Engagement Rate Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to calculate and display
                    the engagement rate of customers.
                  </div>
                </v-col>
                <v-col cols="12">
                  Most Engaged Customers (Placeholder for Most Engaged Customers
                  Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to list the most engaged
                    customers based on their activity.
                  </div>
                </v-col>
                <v-col cols="12">
                  Customer Feedback and Reviews (Placeholder for Feedback and
                  Reviews Component)
                  <div>
                    This component will use the
                    <strong>useCustomerStore</strong> to display customer
                    feedback and reviews.
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
<script setup lang="ts">
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import { ref } from "vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import TotalOrdersCard from "@/pages/dashboard/accounts/components/TotalOrdersCard.vue";
import SubscriptionTierBreakdown from "@/pages/dashboard/accounts/components/SubscriptionTierBreakdown.vue";

const title = ref("Fixtura Customer Journey");
const tab = ref("customer-overview");
</script>
<style scoped>
.elevation-1 {
  margin-bottom: 20px;
}
</style>
