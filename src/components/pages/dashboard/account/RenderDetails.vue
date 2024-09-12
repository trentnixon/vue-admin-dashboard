<template>
  <v-card>
    <v-card-title>Render Details</v-card-title>
    <v-card-text>
      <p>Send Email: {{ renderDetails.sendEmail ? 'Yes' : 'No' }}</p>
      <p>
        Has Team Roster Request:
        {{ renderDetails.hasTeamRosterRequest ? 'Yes' : 'No' }}
      </p>
      <p>Has Team Rosters: {{ renderDetails.hasTeamRosters ? 'Yes' : 'No' }}</p>
      <p>Force Rerender: {{ renderDetails.forceRerender ? 'Yes' : 'No' }}</p>
      <p>
        Force Rerender Email:
        {{ renderDetails.forceRerenderEmail ? 'Yes' : 'No' }}
      </p>
      <p>
        Has Team Roster Email:
        {{ renderDetails.hasTeamRosterEmail ? 'Yes' : 'No' }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRendersStore } from '@/store/renders';
  import { storeToRefs } from 'pinia';

  const renderStore = useRendersStore();
  const { render } = storeToRefs(renderStore);

  const renderDetails = computed(() => render.value?.attributes || {});
</script>
