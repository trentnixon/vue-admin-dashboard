<template>
  <v-responsive class="border rounded fill-height">
    <v-app>
      <AppBar title="My Application" />
      <MainContent />
      <Footer />
    </v-app>
  </v-responsive>
</template>

<script>
import AppBar from "@/components/structure/AppBar.vue";
import MainContent from "@/components/structure/MainContent.vue";
import Footer from "@/components/structure/Footer.vue";

export default {
  name: "HomeLayout",
  components: {
    AppBar,
    MainContent,
    Footer,
  },
};
</script>

<style>
.fill-height {
  min-height: 100vh;
}
</style>
