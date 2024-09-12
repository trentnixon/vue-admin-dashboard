<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-data-table
    :headers="headers"
    :items="formattedDownloads"
    class="elevation-1"
  >
    <!-- Define individual slots for each column -->
    <template v-slot:item.name="{ item }">
      {{ item.name }}
    </template>

    <template v-slot:item.fileSize="{ item }">
      {{ item.fileSize }}
    </template>

    <template v-slot:item.cost="{ item }">
      {{ item.cost }}
    </template>

    <template v-slot:item.time="{ item }">
      {{ item.time }}
    </template>

    <template v-slot:item.urlCount="{ item }">
      {{ item.urlCount }}
    </template>

    <template v-slot:item.type="{ item }">
      {{ item.type }}
    </template>

    <template v-slot:item.hasBeenProcessed="{ item }">
      <v-chip
        :color="item.hasBeenProcessed ? 'green' : 'red'"
        class="ma-2"
        size="small"
        text-color="white"
      >
        {{ item.hasBeenProcessed ? 'Processed' : 'Not Processed' }}
      </v-chip>
    </template>

    <template v-slot:item.hasError="{ item }">
      <v-chip
        :color="item.hasError ? 'red' : 'green'"
        class="ma-2"
        size="small"
        text-color="white"
      >
        {{ item.hasError ? 'Error' : 'No Error' }}
      </v-chip>
    </template>

    <template v-slot:item.link="{ item }">
      <v-btn :href="getDownloadLink(item.link)" variant="text">
        View Details
      </v-btn>
    </template>
  </v-data-table>
</template>

<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useDownloads } from '@/pages/dashboard/scheduler/composables/useDownloads';

  const { formatDownloadsForTable } = useDownloads();
  const route = useRoute();
  console.log('route ', route.params);
  // Extract route params (schedulerId and renderId)
  const schedulerId = computed(() => route.params.schedulerId);
  const renderId = computed(() => route.params.renderId);
  const headers = [
    { title: 'Name', value: 'name' },
    { title: 'Size', value: 'fileSize' },
    { title: 'Cost', value: 'cost' },
    { title: 'Time', value: 'time' },
    { title: 'URLs', value: 'urlCount' },
    { title: 'Type', value: 'type' },
    { title: 'Processed', value: 'hasBeenProcessed' },
    { title: 'Error', value: 'hasError' },
    { title: 'Actions', value: 'link', sortable: false }
  ];

  const formattedDownloads = computed(() => formatDownloadsForTable.value);

  // Function to generate the full link based on route params and the item link
  const getDownloadLink = itemLink => {
    return `/dashboard/scheduler/${schedulerId.value}/render/${renderId.value}/${itemLink}`;
  };
</script>
