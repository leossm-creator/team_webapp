<template>
  <div>
    <v-footer padless id="footer">
      <v-card flat tile class="footer_up text-center" style="width: 100%;">
        <v-card-text>
          <v-btn
            v-for="link in links"
            :key="link.icon"
            class="mx-4"
            icon
          >
            <v-icon size="24px">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class=" pt-0" v-html="$t('footer.text')">
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text class=" footer_down">
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
<style scoped lang="scss">
  #footer {
    bottom: 0;
    // position: absolute;
    color: #767171;
    .footer_up {
      background-color: #f4f4f4;
      border-top: 3px solid #E53935;
      
      .footer_down {
        background-color: #eceaea;
        // background-color: orange;
        // border-top: 5px solid #E53935;
        // color: #E53935;
      }
    }
  }
</style>