<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-alert v-if="loading" type="info" class="mb-4"> Loading... </v-alert>
        <v-alert v-if="error" type="error" class="mb-4">
          Error: {{ error }}
        </v-alert>
      </v-col>
    </v-row>

    <v-row v-if="!loading && !error">
      <v-col
        class="d-flex child-flex"
        cols="3"
        v-for="library in accountMediaLibraries"
        :key="library.id"
      >
        <v-card min-width="100%" color="surface" variant="flat">
          <v-card-title>{{ library.attributes.title }}</v-card-title>
          <v-img
            :lazy-src="library.attributes.imageId.data.attributes.url"
            :src="library.attributes.imageId.data.attributes.url"
            aspect-ratio="1"
            class="white--text"
            cover
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" justify="center">
                <v-progress-circular
                  color="grey-lighten-5"
                  indeterminate
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-subtitle>
            Age Group: {{ library.attributes.AgeGroup }}
          </v-card-subtitle>
          <v-card-text>
            <p>Active: {{ library.attributes.isActive ? "Yes" : "No" }}</p>
            <p>Asset Type: {{ library.attributes.AssetType }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAccountMediaLibraryStore } from "@/store/accountMediaLibrary";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";

const route = useRoute();
const accountId = Number(route.params.id);

const accountMediaLibraryStore = useAccountMediaLibraryStore();
const { accountMediaLibraries, loading, error } = storeToRefs(
  accountMediaLibraryStore
);

onMounted(() => {
  accountMediaLibraryStore.fetchAccountMediaLibraries(accountId);
});
</script>
