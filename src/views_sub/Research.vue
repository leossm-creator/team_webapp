<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-10.jpg`)"
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
                v-html="$t('research.text_board.aim.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('research.text_board.aim.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('research.text_board.strategy.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('research.text_board.strategy.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('research.text_board.capacity.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('research.text_board.capacity.description[0]')"
              ></p>
              <p
                class="content"
                v-html="$t('research.text_board.capacity.description[1]')"
              ></p>
            </v-col>
          </v-row>
        </div>
        <v-row class="board gray">
          <v-col cols="12">
            <p class="heading">
              <span class="ff_m">SK</span>케미칼 <span class="ff_m">R&D</span> 기반 혁신 신약 개발
            </p>
          </v-col>
          <v-col cols="4" class="d-flex justify-center flex-column pa-15">
            <v-img
              contain
              height="100"
              :src="require(`@/assets/img/icons/develop.png`)"
            ></v-img>
            <div class="icon_heading">{{$t("research.text_board.icons.develop")}}</div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center flex-column pa-15">
            <v-img
              contain
              height="100"
              :src="require(`@/assets/img/icons/focus.png`)"
            ></v-img>
            <div class="icon_heading">{{$t("research.text_board.icons.focus")}}</div>
          </v-col>
          <v-col cols="4" class="d-flex justify-center flex-column pa-15">
            <v-img
              contain
              height="100"
              :src="require(`@/assets/img/icons/coop.png`)"
            ></v-img>
            <div class="icon_heading">{{$t("research.text_board.icons.coop")}}</div>
          </v-col>
        </v-row>
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
.icon_heading {
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin-top: 45px;
}
</style>