<template>
  <v-btn
    icon
    :color="color"
    :dark="dark"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
  >
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';

  const props = defineProps({
    color: {
      type: String,
      default: 'primary'
    },
    dark: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      required: true
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

  const onClick = (event: Event) => {
    emit('click', event);
  };
</script>

<style scoped></style>
