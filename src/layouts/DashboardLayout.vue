<template>
  <v-responsive class="border rounded" color="surface">
    <v-app>
      <NavigationDrawer />
      <MainContent />
      <Footer />
    </v-app>
  </v-responsive>
</template>

<script>
  import NavigationDrawer from '@/components/structure/NavigationDrawer.vue';
  import MainContent from '@/components/structure/MainContent.vue';
  import Footer from '@/components/structure/Footer.vue';

  export default {
    name: 'DashboardLayout',
    components: {
      NavigationDrawer,
      MainContent,
      Footer
    }
  };
</script>
