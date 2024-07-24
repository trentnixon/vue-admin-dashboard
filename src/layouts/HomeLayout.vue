<template>
  <v-responsive class="border rounded fill-height">
    <v-app>
      <MainContent />
      <Footer />
    </v-app>
  </v-responsive>
</template>

<script>
import MainContent from "@/components/structure/MainContent.vue";
import Footer from "@/components/structure/Footer.vue";

export default {
  name: "HomeLayout",
  components: {
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
