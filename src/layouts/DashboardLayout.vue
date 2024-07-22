<template>
  <v-responsive class="border rounded">
    <v-app>
      <AppBar title="Dashboard" />
      <NavigationDrawer />
      <MainContent />
      <Footer />
    </v-app>
  </v-responsive>
</template>

<script>
import AppBar from "@/components/structure/AppBar.vue";
import NavigationDrawer from "@/components/structure/NavigationDrawer.vue";
import MainContent from "@/components/structure/MainContent.vue";
import Footer from "@/components/structure/Footer.vue";

export default {
  name: "DashboardLayout",
  components: {
    AppBar,
    NavigationDrawer,
    MainContent,
    Footer,
  },
};
</script>
