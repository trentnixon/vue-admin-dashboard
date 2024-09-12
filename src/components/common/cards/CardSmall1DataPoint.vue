<!-- src/components/common/cards/StatCard.vue -->
<template>
  <v-card
    class="mx-auto mb-3"
    :color="theme"
    variant="flat"
    :subtitle="subtitle"
  >
    <template v-slot:append>
      <v-icon color="accent" :icon="icon"></v-icon>
    </template>
    <template v-slot:title>
      <span class="font-weight" :style="{ fontSize: fontSize }">
        {{ formattedValue }}
      </span>
    </template>

    <v-card-actions class="justify-end" v-if="buttonText.length > 0">
      <SecondaryButton @click="handleClick">{{ buttonText }}</SecondaryButton>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { computed, defineEmits, defineProps } from 'vue';
  import SecondaryButton from '@/components/common/buttons/SecondaryButton.vue';
  const props = defineProps({
    icon: {
      type: String,
      default: 'mdi-home'
    },
    value: {
      type: [Number, String],
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'View'
    },
    fontSize: {
      type: String,
      default: '36px'
    },
    theme: {
      type: String,
      default: 'cardNeutral'
    }
  });

  const emit = defineEmits(['click']);

  const handleClick = event => {
    emit('click', event);
  };

  const formattedValue = computed(() => {
    return typeof props.value === 'number' ? `${props.value}` : props.value;
  });
</script>

<style scoped>
  .font-weight {
    font-weight: 200;
    line-height: 1em;
  }
  .font-size {
    font-size: var(--fontSize); /* Adjust the font size as needed */
  }
  .v-card-actions {
    justify-content: flex-end; /* Align the button to the right */
  }
</style>
