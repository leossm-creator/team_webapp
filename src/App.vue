<template>
  <v-app id="app">
    <Header />
    <div id="content" ref="content">
      <router-view>
      </router-view>
      <Footer v-if="$route.path != '/'"></Footer>
    </div>
  </v-app>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({}),
};
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  width: 100%;
  // overflow-y: scroll;
  #content {
    position: absolute;
    top: 64px;
    height: calc(100vh - 64px);
    overflow-y: scroll;
    overflow-x: scroll;
    width: 100%;
    // overflow-x: hidden;
  }
}
</style>
