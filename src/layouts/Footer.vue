<template>
  <div>
    <v-footer padless id="footer">
      <v-card flat tile class="orange lighten-1 white--text text-center" style="width: 100%;">
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
          [13494] 경기도 성남시 분당구 판교로 310 TEL.02)2008-2008<br>SK케미칼(주) 대표이사 김철, 전광현 사업자등록번호 846-81-00915<br>Copyright(c) SK chemicals. All Right Reserved.
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

</style>