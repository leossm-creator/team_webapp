<template>
  <v-app id="app">
    <Header />
    <div id="content" ref="content">
      <router-view>
      </router-view>
    </div>
    <Footer v-if="$route.path != '/'"></Footer>
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
#content {
  height: calc(100vh - 67px);
  overflow-y: scroll;
}
</style>
