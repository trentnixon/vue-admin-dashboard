<template>
  <ViewTitleBanner>
    <template #title>
      {{ title }}
    </template>
  </ViewTitleBanner>

  <SectionContainerWithTitle>
    <template #title> Season </template>
    <template #content>
      <v-row>
        <v-col cols="12"> Fixtures </v-col>
        <v-col cols="12"> Teams/clubs </v-col>
      </v-row>
    </template>
  </SectionContainerWithTitle>
</template>

<script setup lang="ts">
// vue
import { ref } from "vue";

// Pinia

// Components
import ViewTitleBanner from "@/components/common/builds/ViewTitleBanner.vue";
import SectionContainerWithTitle from "@/components/common/builds/SectionContainerWithTitle.vue";

// Vars
const title = ref("Season");
</script>
