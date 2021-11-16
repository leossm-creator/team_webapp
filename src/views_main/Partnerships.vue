<template>
  <div id="partnerships">
    <v-card flat tile class="thumbnail">
      <v-img
        src="/img/sub_thumbnail-09.png"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">Partnerships</p>
          <p class="pageSub">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container" id="partnerships">
      <h1 is="sui-header" class="page_heading">Partnerships</h1>
      <!-- <v-parallax src="https://source.unsplash.com/WCEOtVmk2VY/300" height="300"></v-parallax> -->
    </div>
  </div>
</template>
<script>
import Barnav from "../components/Barnav.vue"
export default {
  name: "Partnerships",
  components: {
    Barnav,
  },
  data() {
    return {

    };
  },
  methods: {
    
  },
};
</script>
<style scoped lang="scss">
</style>