<template>
  <div id="app">
    <Header />
    
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',

  components: {
    Header,
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
