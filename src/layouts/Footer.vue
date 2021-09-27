<template>
  <div>
    <v-footer padless>
      <v-card flat tile class="orange lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="link in links"
            :key="link.icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text red darken-1">
          {{ new Date().getFullYear() }} — <strong>SK Chemicals</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data: () => ({
      links: [
        { icon: 'mdi-facebook', url: "https://www.facebook.com/SkChemicals/" },
        { icon: 'mdi-twitter', url: ""},
        { icon: 'mdi-linkedin', url: ""},
        { icon: 'mdi-instagram', url: ""},
      ],
    }),
};
</script>
<style scoped>
@import url("/node_modules/vuetify/dist/vuetify.min.css");
</style>