<template>
  <v-btn
    :color="color"
    :density="density"
    :size="size"
    :dark="dark"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
    variant="tonal"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "secondary",
  },
  density: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "default",
  },
  dark: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);

const onClick = (event: Event) => {
  emit("click", event);
};
</script>

<style scoped></style>
