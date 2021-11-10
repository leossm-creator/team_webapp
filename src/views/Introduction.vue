<template>
  <div id="intro">
    <v-card flat tile class="thumbnail">
      <v-img
        src="/img/sub_thumbnail-05.jpeg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageTitle">Introduction</v-card-title>
      </v-img>
    </v-card>
    <!-- <Breadcrumbs /> -->
    <Breadcrumb />
    <div class="page_container">
      <h1 class="page_heading">About Us</h1>

      <!-- Open R&D 소개 -->
      <v-container class="content_container" id="au_intro" ref="au_intro">
        <h2>Open R&D 소개</h2>
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

        <div id="au_diagram" ref="au_diagram">
          <v-img src="/img/diagram_1.png" max-width="700"></v-img>
        </div>

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
// import breadcrumb from "../components/Breadcrumb.vue"
import Breadcrumb from "../components/Breadcrumb.vue"

export default {
  name: "Introduction",
  components: {
    // breadcrumb,
    Breadcrumb,
  },
  data() {
    return {
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
#au_diagram {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>