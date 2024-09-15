<template>
  <div>
    <div v-if="loading && !schedulersForTomorrow" class="loading-indicator">
      Loading...
    </div>
    <div v-else>
      <v-data-table
        :headers="headers"
        :items="schedulersForTomorrow"
        :items-per-page="5"
        class="mx-auto"
        fixed-header
        color="cardNeutral"
        variant="flat"
        rounded
      >
        <template #top>
          <v-toolbar flat class="px-4" color="secondary" rounded>
            Scheduled for Tomorrow
            <v-spacer></v-spacer>
            {{ schedulersForTomorrow.length }}
          </v-toolbar>
        </template>
        <!-- Table column for Scheduler Name -->
        <template v-slot:[`item.name`]="{ item }">
          {{ item.attributes.Name }}
        </template>

        <!-- Table column for isRendering status -->
        <template v-slot:[`item.isRendering`]="{ item }">
          <v-chip
            :color="item.attributes.isRendering ? 'green' : 'red'"
            size="small"
          >
            {{ item.attributes.isRendering ? 'Rendering' : 'Not Rendering' }}
          </v-chip>
        </template>

        <!-- Table column for Queued status -->
        <template v-slot:[`item.queued`]="{ item }">
          <v-chip
            :color="item.attributes.Queued ? 'orange' : 'blue'"
            size="small"
          >
            {{ item.attributes.Queued ? 'Queued' : 'Not Queued' }}
          </v-chip>
        </template>

        <!-- Table column for Account Name -->
        <template v-slot:[`item.accountName`]="{ item }">
          {{ item.attributes.account.data.attributes.FirstName || 'N/A' }}
        </template>

        <!-- Table column for Sport -->
        <template v-slot:[`item.sport`]="{ item }">
          {{ item.attributes.account.data.attributes.Sport || 'N/A' }}
        </template>

        <!-- Table column for Account Link -->
        <template v-slot:[`item.actions`]="{ item }">
          <SecondaryButton
            @click="viewAccount(item.attributes.account.data.id)"
          >
            View Account
          </SecondaryButton>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue';
  import { useSchedulerStore } from '@/store/scheduler';
  import { storeToRefs } from 'pinia';
  import SecondaryButton from '@/components/common/buttons/SecondaryButton.vue';
  import router from '@/router';

  // Access the store
  const schedulerStore = useSchedulerStore();
  const { schedulersScheduledForTomorrow, loading, error } =
    storeToRefs(schedulerStore);

  // Fetch schedulers due tomorrow on component mount
  onMounted(async () => {
    await schedulerStore.fetchSchedulersDueTomorrow();
  });

  // Get the schedulers for tomorrow using the getter
  const schedulersForTomorrow = computed(
    () => schedulersScheduledForTomorrow.value
  );

  console.log('schedulersForTomorrow ', schedulersForTomorrow);

  // Define the headers for the v-data-table
  const headers = [
    { title: 'Account Name', value: 'accountName' },
    { title: 'Sport', value: 'sport' },
    { title: 'Rendering Status', value: 'isRendering' },
    { title: 'Queue Status', value: 'queued' },

    { title: 'Actions', value: 'actions' }
  ];

  const viewAccount = (accountid: number) => {
    router.push(`/dashboard/account/${accountid}/home/`);
  };
</script>
