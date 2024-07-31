<template>
  <SectionContainerWithTitle>
    <template #title> Customer Activity </template>
    <template #content>
      <v-row>
        <v-col cols="6">
          Customer Sign-ups Over Time (Placeholder for Sign-ups Over Time
          Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to display the trend of customer
            sign-ups over time.
          </div>
        </v-col>
        <v-col cols="6">
          Active vs Inactive Customers Over Time (Placeholder for Active vs
          Inactive Customers Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to display the trend of active vs
            inactive customers over time.
          </div>
        </v-col>
        <v-col cols="12">
          Customer Retention Rate (Placeholder for Retention Rate Component)
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
          List of Orders Expiring Soon (Placeholder for Expiring Orders List)
          <div>
            This component will use the
            <strong>useOrdersStore</strong> to list orders expiring soon. This
            list will help in proactive customer engagement for renewals.
          </div>
        </v-col>
        <v-col cols="6">
          Returning Customers/Customer Retention (Placeholder for Customer
          Retention Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to track returning customers and
            retention rates.
          </div>
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
</script>
