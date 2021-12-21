<template>
  <div id="content">
    <router-view />
    <Footer v-if="$route.name !== 'home'"></Footer>
  </div>
</template>
<script>
import Footer from "./Footer.vue";
export default {
  name: "content",
  components: {
    Footer
  },
  data: () => ({

  }),
};
</script>
<style scoped lang="scss">
  #content {
    position: fixed;
    top: 64px;
    height: calc(100vh - 64px);
    width: 100%;
    overflow-y: scroll;
    overflow-x: auto;
  }
</style>