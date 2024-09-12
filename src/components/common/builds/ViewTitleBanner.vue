<template>
  <v-card
    class="elevation-0 mx-auto mb-4 bg-grey-lighten-4"
    variant="tonal"
    color="secondary"
  >
    <v-card class="elevation-0 my-1 mx-1" variant="tonal" color="primary">
      <template v-slot:title>
        <slot name="title"></slot>
      </template>
    </v-card>
  </v-card>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .v-card {
    margin-top: 20px;
  }
</style>
