<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-03.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">Pharma</p>
          <p class="pageSub">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <!-- <Breadcrumb /> -->
    <Barnav />
    <div class="page_container" id="ow_pharma" ref="ow_pharma">
      <div class="content_container">
        <!-- <v-container> -->
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title">
                SK Chemicals는 더 나은 신약을 만들기 위해
                <br />
                끊임없이 고민하고 연구합니다
              </div>
            </v-col>
          </v-row>
        </div>

        <div class="text_board">
          <v-row class="board">
            <v-col cols="3">
              <h3>개요</h3>
            </v-col>
            <v-col cols="9">
              <p>
                <span class="ff_m">R&amp;D</span>는 제약기업의 경쟁력의 원천이자
                미래성장동력으로, 셀트리온제약은 글로벌 경쟁력을 갖는 의약품
                개발에 연구역량을<br class="pc_only" />집중하고 있습니다.
                셀트리온제약 중앙연구소는 약물평가, 제제연구, 분석법 및 공정개발
                등 의약품 연구·개발·제조 모든 부분에서<br
                  class="pc_only"
                />뛰어난 역량과 기술을 보유하고 있습니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="3">
              <h3>설계기반<br class="pc_only" />품질 고도화</h3>
            </v-col>
            <v-col cols="9">
              <p>
                셀트리온제약은 개발에서 생산에 이르는 모든 과정에 설계기반 품질
                고도화<span class="ff_m">(QbD, Quality by Design)</span>를
                적용하고 있습니다.<br class="pc_only" />
                <span class="ff_m">QbD</span>는 과학적인 기반 기술을 바탕으로
                의약품 품질 고도화를 목표로 하는 시스템입니다. 물질의 특성과
                여러 변수를 연계시키는<br class="pc_only" />
                연구를 통해 제품의 특성을 체계적으로 이해하고 품질을 향상시키는
                의약품을 만들기 위해 노력하고 있습니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="3">
              <h3>핵심<br class="pc_only" />연구분야</h3>
            </v-col>
            <v-col cols="9">
              <p>
                <span class="ff_m">R&amp;D</span>는 제약기업의 경쟁력의 원천이자
                미래성장동력으로, 셀트리온제약은 글로벌 경쟁력을 갖는 의약품
                개발에 연구역량을<br class="pc_only" />집중하고 있습니다.
              </p>
              <p>
                <span class="ff_m">R&amp;D</span>는 제약기업의 경쟁력의 원천이자
                미래성장동력으로, 셀트리온제약은 글로벌 경쟁력을 갖는 의약품
                개발에 연구역량을<br class="pc_only" />집중하고 있습니다.
                셀트리온제약 중앙연구소는 약물평가, 제제연구, 분석법 및 공정개발
                등 의약품 연구·개발·제조 모든 부분에서<br
                  class="pc_only"
                />뛰어난 역량과 기술을 보유하고 있습니다.
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

        <v-row class="board text_board">
          <v-col cols="3">
            <h3>핵심<br class="pc_only" />연구 성장</h3>
          </v-col>
          <v-col cols="9">
            <p>
              <span class="ff_m">R&amp;D</span>는 제약기업의 경쟁력의 원천이자
              미래성장동력으로, 셀트리온제약은 글로벌 경쟁력을 갖는 의약품
              개발에 연구역량을<br class="pc_only" />집중하고 있습니다.
            </p>
            <p>
              <span class="ff_m">R&amp;D</span>는 제약기업의 경쟁력의 원천이자
              미래성장동력으로, 셀트리온제약은 글로벌 경쟁력을 갖는 의약품
              개발에 연구역량을<br class="pc_only" />집중하고 있습니다.
              셀트리온제약 중앙연구소는 약물평가, 제제연구, 분석법 및 공정개발
              등 의약품 연구·개발·제조 모든 부분에서<br class="pc_only" />뛰어난
              역량과 기술을 보유하고 있습니다.
            </p>
          </v-col>
        </v-row>
        <!-- </v-container> -->
      </div>
    </div>
  </div>
</template>
<script>
// import Breadcrumb from "../components/Breadcrumb.vue"
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
    // Breadcrumb,
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