<template>
  <router-link :to="path" custom v-slot="{ navigate, href }">
    <v-btn
      :href="href"
      :color="color"
      :dark="dark"
      :outlined="outlined"
      :loading="loading"
      :disabled="disabled"
      @click="navigate"
    >
      <slot></slot>
    </v-btn>
  </router-link>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    path: {
      type: [String, Object],
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['click']);
</script>

<style scoped></style>
