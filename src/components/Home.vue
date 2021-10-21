<template>
  <div id="landing">
    <div class="landing_container">
      <v-carousel
        :continuous="true"
        :cycle="cycle"
        :show-arrows="true"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="600"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
          style="height: 600px"
        >
          <!-- <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet> -->
          <v-img :src="images[i]"> </v-img>
        </v-carousel-item>
      </v-carousel>
      <div class="content_container">
        <h1 class="page_heading">OPEN R&D</h1>
        <h1>{{ $t("welcomeMsg") }}</h1>
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
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../layouts/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  },
  data() {
    return {
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: true,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      images: [
        "https://source.unsplash.com/WCEOtVmk2VY/1600x900",
        "https://source.unsplash.com/pwcKF7L4-no/",
        "https://source.unsplash.com/MD2_srN-02o/1600x900",
        "https://source.unsplash.com/XknuBmnjbKg/1600x900",
        "https://source.unsplash.com/XknuBmnjbKg/1600x900",
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.landing_container {
  padding: 15px;
  height: calc(100vh - 64px);
}
</style>