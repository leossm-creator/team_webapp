<template>
  <v-app id="app">
    <div v-if="isLoading">
      <v-overlay :value="true" color="" light>
        <v-progress-circular indeterminate size="32" color="#212121"></v-progress-circular>
      </v-overlay>
    </div>
    <div v-else>
      <Header />
      <div id="content" ref="content">
        <router-view />
        <Footer v-if="$route.name !== 'home'"></Footer>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import EventBus from "@/EventBus";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  data: () => ({
    isLoading: true,
  }),
  mounted() {
    EventBus.$on("i18n-load-start", () => (this.isLoading = true));
    EventBus.$on("i18n-load-complete", () => (this.isLoading = false));
  },
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
    overflow-x: auto;
    width: 100%;
  }
}
</style>
