<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-06.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{$t("nav.investments.title")}}</p>
          <p class="pageSub">
            {{$t("nav.investments.sub_title")}}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <!-- <Breadcrumb /> -->
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="ow_investment" ref="ow_investment">
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('investments.p_title')">
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="text_board">
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('investments.text_board.1.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('investments.text_board.1.description[0]')"> 
              </p>
              <p v-html="$t('investments.text_board.1.description[1]')">
              </p>
              <p v-html="$t('investments.text_board.1.description[2]')">
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('investments.text_board.2.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('investments.text_board.2.description')">
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('investments.text_board.3.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('investments.text_board.3.description')">
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('investments.text_board.4.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('investments.text_board.4.description')">
              </p>
            </v-col>
          </v-row>
        </div>
        <v-row class="board">
          <v-img height="100vh" src="https://source.unsplash.com/EDj-oxXe4s8">
          </v-img>
        </v-row>
        <v-row class="board">
          <v-col class="d-flex justify-center align-center">
            <LineChart />
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <LineChart />
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "../charts/Chart_01.vue";
// import Breadcrumb from "../components/Breadcrumb.vue"
import Barnav from "../components/Barnav.vue";
export default {
  name: "Investments",
  components: {
    LineChart,
    // Breadcrumb,
    Barnav,
  },
  data() {
    return {};
  },

  mounted() {
    console.log(this.$vuetify.breakpoint);
  },

  methods: {},
};
</script>
<style scoped lang="scss">
</style>