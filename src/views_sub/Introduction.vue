<template>
  <div id="intro">
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-05.jpeg`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{$t("nav.introduction.title")}}</p>
          <p class="pageSub">
            {{$t("nav.introduction.sub_title")}}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <!-- <Breadcrumb /> -->
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="au_intro" ref="au_intro">
        <!-- Open R&D 소개 -->
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('intro.p_title')">
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="text_board">
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('intro.text_board.1.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('intro.text_board.1.description')">
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('intro.text_board.2.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('intro.text_board.2.description')">
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 v-html="$t('intro.text_board.3.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p v-html="$t('intro.text_board.3.description')">
              </p>
            </v-col>
          </v-row>
        </div>
        <v-row class="board">
          <v-col>
            <div id="au_diagram_container" ref="au_diagram">
              <v-img
                :src="require(`@/assets/img/content/diagram_1.png`)"
                :max-width="wrapperWidth()"
                style="margin-left: auto; margin-right: auto"
                max-height="550"
                contain
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
// import Breadcrumb from "../components/Breadcrumb.vue"
import Barnav from "../components/Barnav.vue";
export default {
  name: "Introduction",
  components: {
    // Breadcrumb,
    Barnav,
  },
  data() {
    return {
      mounted: false,
    };
  },

  mounted() {
    this.mounted = true;
  },
  methods: {
    wrapperWidth() {
      if (!this.mounted) return;
      console.log(document.getElementById("au_diagram_container").offsetWidth);
      let height =
        document.getElementById("au_diagram_container").offsetWidth * 0.8;
      return height;
    },
  },
};
</script>
<style scoped lang="scss">
#intro {
  .board {
    margin-top: 120px;
  }

  #au_diagram {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>