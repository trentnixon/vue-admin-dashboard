<template>
  <ChartTitle>
    <template #title>
      <p class="ma-0">Status</p>
    </template>
    <template #select>
      <div class="flex-row justify-space-between d-flex ma-0 pa-0">
        <v-chip
          class="ma-1"
          label
          :color="accountDetails?.attributes.isActive ? 'success' : 'warning'"
        >
          Active
          <v-icon
            class="ml-1"
            :color="accountDetails?.attributes.isActive ? 'success' : 'warning'"
          >
            {{
              accountDetails?.attributes.isActive
                ? "mdi-check-circle"
                : "mdi-close-circle"
            }}
          </v-icon>
        </v-chip>

        <v-chip
          class="ma-1"
          label
          :color="accountDetails?.attributes.isActive ? 'success' : 'warning'"
        >
          Setup Complete
          <v-icon
            class="ml-1"
            :color="accountDetails?.attributes.isActive ? 'success' : 'warning'"
          >
            {{
              accountDetails?.attributes.isActive
                ? "mdi-check-circle"
                : "mdi-close-circle"
            }}
          </v-icon>
        </v-chip>
      </div>
    </template>
  </ChartTitle>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAccountStore } from "@/store/account";
import ChartTitle from "@/components/common/charts/ChartTitle.vue";

const accountStore = useAccountStore();
const { accountDetails } = storeToRefs(accountStore);
</script>

<style scoped></style>
