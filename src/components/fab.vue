<template>
  <v-fab-transition>
    <v-btn
      v-show="!hidden"
      color="#FFA726"
      dark
      absolute
      fab
      class="scroll_up_btn"
      @click="scrollTo(0)"
      transition="fab-transition"
      v-scroll:#content="onScroll"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>
<script>
export default {
  name: "fab",
  data() {
    return {
      
    };
  },
  methods: {
    scrollTo(target) {
      this.$vuetify.goTo(target, {
        container: "#content",
        duration: 500,
        offset: 30,
        easing: "easeInOutCubic",
      });
    },
    onScroll(e) {
      let top = e.target.scrollTop;
      this.hidden = top < 100;
    },
  },
};
</script>
<style scoped>
</style>