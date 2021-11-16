<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        src="/img/sub_thumbnail-01.png"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">Research</p>
          <p class="pageSub">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </v-card-title>
      </v-img>
    </v-card>
    <!-- <Breadcrumb /> -->
    <Barnav />
    <div class="page_container">
      <v-container class="content_container" id="ow_research" ref="ow_research">
        <h2>공동 연구</h2>
        <v-row class="img_box">
          <v-col cols="12" md="6">
            <v-img src="https://source.unsplash.com/9vnACvX2748"></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim. Donec pede
              justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
              justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
              dictum felis eu pede <a href="javascript:void 0">link</a> mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
              imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
              ultricies nisi.
            </p>
          </v-col>
        </v-row>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
          sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          <a href="javascript:void 0">link</a> mollis pretium. Integer
          tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </v-container>
    </div>
  </div>
</template>
<script>
import Barnav from '../components/Barnav.vue';
// import Breadcrumb from "../components/Breadcrumb.vue"
export default {
  name: "Research",
  components: {
    // Breadcrumb,
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