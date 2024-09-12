<template>
  <SectionContainerWithTitle>
    <template #title>Order Metrics</template>
    <template #content>
      <v-row>
        <v-col cols="3">
          <Card_ActiveOrdersCard />
        </v-col>
        <v-col cols="3"><Card_ExpiringOrdersCard /></v-col>
        <v-col cols="3">
          Customers on Free Trial (Placeholder for Free Trial Customers
          Component)
          <div>
            This component will use the
            <strong>useCustomerStore</strong>
            to fetch and display the number of customers currently on a free
            trial.
          </div>
        </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
  // components
  import SectionContainerWithTitle from '@/components/common/builds/SectionContainerWithTitle.vue';
  import Card_ActiveOrdersCard from '@/pages/dashboard/index/components/Orders/Card_ActiveOrdersCard.vue';
  import Card_ExpiringOrdersCard from '@/pages/dashboard/index/components/Orders/Card_ExpiringOrdersCard.vue';
</script>

<style scoped>
  .elevation-1 {
    margin-bottom: 20px;
  }
</style>
