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
          <p class="pageTitle">Research</p>
          <p class="pageSub">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
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
              <div class="p_title">
                SK Chemicals는 더 나은 의약품을 만들기 위해
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
        <!-- <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa <b>strong</b>. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim. Donec pede
            justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
            dictum felis eu pede <a href="javascript:void 0">link</a> mollis
            pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
            eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
            in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
            metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
            ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
          </p> -->
      </div>
      <div class="img_board">
        <div class="img_container">
          <v-row>
            <v-col cols="6">
              <v-img src="https://source.unsplash.com/9vnACvX2748"></v-img>
            </v-col>
            <v-col cols="6"> </v-col>
          </v-row>
        </div>
        <div class="img_content"></div>
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