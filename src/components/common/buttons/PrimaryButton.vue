<template>
  <v-btn
    :color="color"
    :dark="dark"
    :variant="outlined"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
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
    outlined: {
      type: String,
      default: 'outlined'
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
