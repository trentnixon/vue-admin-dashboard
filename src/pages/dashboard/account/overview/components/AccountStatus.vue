<template>
  <ChartTitle>
    <template #title>
      <p v-if="ActiveOrders">
        <v-chip class="ma-1" label color="accent">
          {{ ActiveOrders.Name }} - ${{ ActiveOrders.Value }}
        </v-chip>

        <v-chip class="ma-1" label color="accent">
          Expires on: {{ ActiveOrders.End }}
        </v-chip>
      </p>
    </template>
    <template #select>
      <div class="flex-row justify-space-between d-flex ma-0 pa-0">
        <v-chip
          v-for="(chip, index) in chips"
          :key="index"
          class="ma-1"
          label
          :color="chip.isActive ? 'success' : 'warning'"
        >
          {{ chip.label }}
          <v-icon class="ml-1" :color="chip.isActive ? 'success' : 'warning'">
            {{ chip.isActive ? 'mdi-check-circle' : 'mdi-close-circle' }}
          </v-icon>
        </v-chip>
      </div>
    </template>
  </ChartTitle>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useAccountStore } from '@/store/account';
  import { useOrdersStore } from '@/store/orders';
  import ChartTitle from '@/components/common/charts/ChartTitle.vue';

  // Account and Order Status
  const accountStore = useAccountStore();
  const { accountDetails } = storeToRefs(accountStore);

  const ordersStore = useOrdersStore();
  const { accountOrdersDetails } = storeToRefs(ordersStore);

  const ActiveOrders = computed(
    () => accountOrdersDetails.value.ActiveOrderDetails
  );

  const chips = computed(() => [
    {
      label: 'Active Order',
      isActive: accountOrdersDetails?.value?.ActiveOrders.length !== 0
    },
    {
      label: 'Active Account',
      isActive: accountDetails?.value?.attributes?.isActive
    },
    {
      label: 'Setup Complete',
      isActive: accountDetails?.value?.attributes?.isSetup
    }
  ]);
</script>
