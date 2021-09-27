<template>
  <v-app id="app">
    <Header />
    
    <div id="content">
      <router-view />
    </div>

    <Footer />
  </v-app>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  nav {
    background-color: blueviolet !important;
    width: 100%;
  }
</style>
