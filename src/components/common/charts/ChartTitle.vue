<template>
  <v-container class="d-flex justify-space-between my-2 mx-0 pa-0">
    <v-col cols="6" class="d-flex align-center pa-0">
      <slot name="title"></slot>
    </v-col>
    <v-col cols="6" class="d-flex justify-end pa-0">
      <slot name="select"></slot>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
  // No additional script needed for this basic component
</script>

<style scoped>
  /* Add any specific styles for the component if needed */
</style>
