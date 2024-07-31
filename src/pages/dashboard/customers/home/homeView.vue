<template>
  <SectionContainerWithTitle>
    <template #title> Customer Overview </template>
    <template #content>
      <v-row>
        <v-col cols="3">
          Total Customers (Placeholder for Total Customers Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong> to fetch and display the total
            number of customers.
          </div>
        </v-col>
        <v-col cols="3">
          <Card_TotalRevenue />
        </v-col>
        <v-col cols="3">
          <Card_AverageOrderValue />
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
  <OrderMetrics />
</template>

<script setup lang="ts">
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";
import Card_AverageOrderValue from "@/pages/dashboard/index/components/GeneralMetrics/Card_AverageOrderValue.vue";
import Card_TotalRevenue from "@/pages/dashboard/index/components/GeneralMetrics/Card_TotalRevenue.vue";
import OrderMetrics from "@/pages/dashboard/index/OrderMetrics.vue";
</script>
