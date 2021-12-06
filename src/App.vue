<template>
  <v-app id="app">
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <Header />
      <div id="content" ref="content">
        <router-view> </router-view>
        <Footer v-if="$route.path !== '/'"></Footer>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
// import { setDocumentLang, setDocumentTitle } from "@/util/i18n/document";
// import { loadLocaleMessagesAsync } from "@/plugins/i18n";
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
    // this.$watch(
    //   "$i18n.locale",
    //   (newLocale, oldLocale) => {
    //     if (newLocale === oldLocale) {
    //       return;
    //     }

    //     setDocumentLang(newLocale);
    //     setDocumentTitle(this.$t("app.title"));
    //   },
    //   { immediate: true }
    // );
    // this.loadLocaleMessages(this.$i18n.locale);
    EventBus.$on("i18n-load-start", () => (this.isLoading = true));
    EventBus.$on("i18n-load-complete", () => (this.isLoading = false));
  },
  // methods: {
  //   loadLocaleMessages(locale) {
  //     this.isLoading = true;
  //     loadLocaleMessagesAsync(locale).then(() => {
  //       setDocumentLang(locale);
  //       setDocumentTitle(this.$t("app.title"));
  //       this.isLoading = false;
  //     });
  //   },
  // },
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
