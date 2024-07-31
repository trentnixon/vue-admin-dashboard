<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>

  <SectionContainerWithTitle>
    <template #title> Customer Overview </template>
    <template #content>
      <v-row>
        <v-col cols="4">
          Total Customers (Placeholder for Total Customers Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the total
            number of customers.
          </div>
        </v-col>
        <v-col cols="4">
          Active Customers (Placeholder for Active Customers Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the number of
            active customers.
          </div>
        </v-col>
        <v-col cols="4">
          Inactive Customers (Placeholder for Inactive Customers Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the number of
            inactive customers.
          </div>
        </v-col>
        <v-col cols="4">
          New Customers This Month (Placeholder for New Customers Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the number of
            new customers acquired this month.
          </div>
        </v-col>
        <v-col cols="4">
          Customers by Account Type (Placeholder for Customers by Account Type
          Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the number of
            customers by account type (free trial, paid).
          </div>
        </v-col>
        <v-col cols="4">
          Customers with Free Trials (Placeholder for Free Trial Customers
          Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the number of
            customers currently on a free trial.
          </div>
        </v-col>
        <v-col cols="12">
          Table of Customers (Placeholder for Customer Table)
          <div>
            This table will use the <strong>useCustomerStore</strong> to list
            all customers with relevant details like name, email, order status,
            and subscription tier. Each row will be clickable to navigate to
            individual customer details.
          </div>
        </v-col>
        <v-col cols="12">
          Pie Chart: Customers with Orders vs Free Trial (Placeholder for Pie
          Chart)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to create a pie chart showing the
            ratio of customers who have active orders versus those on a free
            trial.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          Revenue by Subscription Tier (Placeholder for Revenue by Subscription
          Tier Component)
          <div>
            This component will use the
            <strong>useOrdersStore</strong> and
            <strong>useSubscriptionTierStore</strong> to display the revenue
            generated from each subscription tier.
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          Expiring Subscriptions (Next 30 Days) (Placeholder for Expiring
          Subscriptions Table)
          <div>
            This table will use the <strong>useOrdersStore</strong> to list
            accounts with subscriptions expiring in the next 30 days.
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
</template>

<script setup>
import { ref } from "vue";
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import TotalOrdersCard from "@/pages/dashboard/accounts/components/TotalOrdersCard.vue";
import SubscriptionTierBreakdown from "@/pages/dashboard/accounts/components/SubscriptionTierBreakdown.vue";

const title = ref("Customers");
</script>
