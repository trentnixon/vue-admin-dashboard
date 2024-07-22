<template>
  <v-btn
    outlined
    :prepend-icon="icon"
    :color="color"
    :dark="dark"
    :loading="loading"
    :disabled="disabled"
    @click="onClick"
    variant="outlined"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  icon: {
    type: String,
    required: true,
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
