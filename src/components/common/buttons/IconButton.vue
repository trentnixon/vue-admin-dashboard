<template>
  <v-tooltip top>
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on">
        <v-btn
          icon
          :color="color"
          :dark="dark"
          :size="size"
          :loading="loading"
          :disabled="disabled"
          :variant="variant"
          @click="onClick"
        >
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </span>
    </template>
    <span>{{ tooltip }}</span>
    <v-tooltip activator="parent" location="top">{{ tooltip }}</v-tooltip>
  </v-tooltip>
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
      default: false
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
    },
    size: {
      type: String,
      default: 'default'
    },
    variant: {
      type: String as () =>
        | 'tonal'
        | 'flat'
        | 'text'
        | 'elevated'
        | 'outlined'
        | 'plain',
      default: 'tonal'
    },
    tooltip: {
      type: String,
      default: ''
    }
  });

  const emit = defineEmits(['click']);

  const onClick = (event: Event) => {
    emit('click', event);
  };
</script>

<style scoped></style>
