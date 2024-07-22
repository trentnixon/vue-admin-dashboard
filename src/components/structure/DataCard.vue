<template>
  <v-card
    :loading="loading"
    :title="title"
    :subtitle="subtitle"
    class="mx-auto my-4"
    min-width="25%"
    max-width="30%"
  >
    <v-card-text>
      <slot name="count"></slot>
      <slot></slot>
    </v-card-text>
    <v-card-actions>
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
