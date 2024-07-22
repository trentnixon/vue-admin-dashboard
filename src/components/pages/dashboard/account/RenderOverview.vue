<template>
    <div>
      <v-row v-for="(render) in renders" :key="render.id" class="mb-4">
        <v-col cols="12">
          <v-card>
            <v-card-title>{{ render.attributes.Name }}</v-card-title>
            <v-card-subtitle>
              Processing: {{ render.attributes.Processing ? "Yes" : "No" }}
            </v-card-subtitle>
            <v-card-subtitle>
              Complete: {{ render.attributes.Complete ? "Yes" : "No" }}
            </v-card-subtitle>
            <v-card-subtitle>
              Email Sent: {{ render.attributes.EmailSent ? "Yes" : "No" }}
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>

  <script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useRendersStore } from "@/store/renders";

  const rendersStore = useRendersStore();
  const { renders } = storeToRefs(rendersStore);

  console.log("renders ", renders.value);
  </script>

  <style scoped>
  .mb-4 {
    margin-bottom: 1rem;
  }
  </style>
