<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-01.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{ $t("nav.research.title") }}</p>
          <p class="pageSub">
            {{ $t("nav.research.sub_title") }}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="ow_research" ref="ow_research">
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('research.p_title')"></div>
            </v-col>
          </v-row>
        </div>

        <div class="text_board">
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('research.text_board.1.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('research.text_board.1.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('research.text_board.2.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('research.text_board.2.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('research.text_board.3.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('research.text_board.3.description')"
              ></p>
            </v-col>
          </v-row>
        </div>
        <div class="img_board">
          <v-row style="margin-top: 120px">
            <v-col cols="12" md="6">
              <v-img src="https://source.unsplash.com/9vnACvX2748"></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <div class="img_heading"></div>
              <p></p>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Barnav from "../components/Barnav.vue";
export default {
  name: "Research",
  components: {
    Barnav,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped lang="scss">
</style>