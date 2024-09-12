<template>
  <v-card>
    <v-card-title>Download Information</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="download in downloads" :key="download.id">
          <v-list-item-content>
            <v-list-item-title>
              {{ download.attributes.Name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              URL: {{ download.attributes.URL }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Category: {{ download.attributes.grouping_category }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Is Accurate: {{ download.attributes.isAccurate ? 'Yes' : 'No' }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Processed:
              {{ download.attributes.hasBeenProcessed ? 'Yes' : 'No' }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Cost: {{ download.attributes.DisplayCost }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Completion Time: {{ download.attributes.CompletionTime }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              File Size: {{ download.attributes.OutputFileSize }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Error Message: {{ download.attributes.UserErrorMessage }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Error: {{ download.attributes.hasError ? 'Yes' : 'No' }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Number of Downloads: {{ download.attributes.numDownloads }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useDownloadStore } from '@/store/downloads';
  import { storeToRefs } from 'pinia';

  const downloadStore = useDownloadStore();
  const { downloads } = storeToRefs(downloadStore);
</script>
