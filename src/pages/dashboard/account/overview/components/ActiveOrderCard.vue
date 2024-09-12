<template>
  <v-card class="mx-auto mb-4">
    <v-card-title>Active Order</v-card-title>
    <v-card-subtitle>
      <div v-if="activeOrder">
        <p>
          <strong>Order Name:</strong>
          {{ activeOrder.Name }}
        </p>
        <p>
          <strong>Value:</strong>
          ${{ activeOrder.Value.toFixed(2) }}
        </p>
        <p>
          <strong>Expires:</strong>
          {{ activeOrder.End }}
        </p>
      </div>
      <div v-else>
        <p>No active orders</p>
      </div>
    </v-card-subtitle>
  </v-card>
</template>

<script setup>
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useOrdersStore } from '@/store/orders';

  const ordersStore = useOrdersStore();
  const { accountOrdersDetails } = storeToRefs(ordersStore);

  const activeOrder = computed(
    () => accountOrdersDetails.value.ActiveOrderDetails
  );
</script>

<style scoped>
  .font-weight-black {
    font-weight: 900;
  }
</style>
