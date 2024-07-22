<template>
  <v-app-bar app :elevation="2" color="blue-grey-darken-4">
    <v-toolbar-title> Fixtura Admin</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-avatar
        image="/android-chrome-192x192.png"
        size="36"
        rounded="0"
      ></v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
