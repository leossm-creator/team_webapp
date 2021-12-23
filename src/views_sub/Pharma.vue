<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-13.jpg`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{$t("nav.pharma.title")}}</p>
          <p class="pageSub">
            {{$t("nav.pharma.sub_title")}}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container" id="ow_pharma" ref="ow_pharma">
      <div class="content_container">
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('pharma.p_title')">
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="text_board">
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 class="heading" v-html="$t('pharma.text_board.aim.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p class="content" v-html="$t('pharma.text_board.aim.description[0]')">
              <p class="content" v-html="$t('pharma.text_board.aim.description[1]')">
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3 class="heading" v-html="$t('pharma.text_board.fields.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p class="content" v-html="$t('pharma.text_board.fields.description')">
              </p>
            </v-col>
          </v-row>
        </div>

        <!-- <v-row class="board">
          <v-col>
            <v-lazy>
              <v-sheet color="white" id="ow_sparkline">
                <v-sparkline
                  :value="value"
                  :gradient="gradient"
                  :smooth="radius || false"
                  :padding="padding"
                  :line-width="width"
                  :stroke-linecap="lineCap"
                  :gradient-direction="gradientDirection"
                  :fill="fill"
                  :type="type"
                  :auto-line-width="autoLineWidth"
                  auto-draw
                  :labels="value"
                  color="white"
                  :auto-draw-duration="2500"
                  auto-draw-easing="ease"
                  height="100"
                ></v-sparkline>
                <template v-slot:label="item">
                  {{ item.value }}
                </template>
              </v-sheet>
            </v-lazy>
          </v-col>
        </v-row> -->

        <!-- <v-row> 
          <v-col cols="12" md="7" class="img_box">
            <v-img src="https://source.unsplash.com/wCo9UwZEa18"></v-img>
          </v-col>
          <v-col cols="12" md="5" style="padding: 0;">
            <p>
              <span class="ff_m">R&amp;D</span>는 제약기업의 경쟁력의 원천이자
              미래성장동력으로, 셀트리온제약은 글로벌 경쟁력을 갖는 의약품
              개발에 연구역량을<br class="pc_only" />집중하고 있습니다.
            </p>
          </v-col>
        </v-row> -->
      </div>
    </div>
  </div>
</template>
<script>
import Barnav from "../components/Barnav.vue";
const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
  ["#03A9F4", "#80DEEA", "#CDDC39"],
];

export default {
  name: "Pharma",
  components: {
    Barnav,
  },
  data() {
    return {
      width: 2.5,
      radius: 10,
      padding: 10,
      hidden: true,
      lineCap: "round",
      gradient: gradients[6],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 5, 9],
      gradientDirection: "top",
      gradients,
      fill: false,
      type: "trend",
      autoLineWidth: false,
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
.img_box {
  padding: 0 !important;
}
</style>