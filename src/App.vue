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
  #content {
    /* width: 100vw; */
    height: calc(100vh - 64px);
    overflow-y: scroll;
  }
</style>
