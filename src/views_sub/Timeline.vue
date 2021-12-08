<template>
  <div>
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-02.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{$t("nav.timeline.title")}}</p>
          <p class="pageSub">
            {{$t("nav.timeline.sub_title")}}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="au_timeline" ref="au_timeline">
        <!-- 성과 Timeline -->
          <v-row class="board title_board">
            <v-col>
              <div class="p_title" v-html="$t('timeline.p_title')">
              </div>
            </v-col>
          </v-row>
          <v-row class="board text_board">
            <v-col md="3" cols="12">
              <h3>개요</h3>
            </v-col>
            <v-col md="9" cols="12">
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
          <v-row class="board">
            <v-col>
              <v-timeline class="timeline">
                <v-timeline-item
                  v-for="(year, i) in years"
                  :key="i"
                  :color="year.color"
                  small
                >
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold ${year.color}--text`"
                      v-text="year.year"
                    ></span>
                  </template>
                  <div class="py-8">
                    <h2
                      :class="`headline font-weight-normal mb-4 ${year.color}--text`"
                    >
                      {{ year.title }}
                    </h2>
                    <div>
                      <p
                        v-for="des in year.description"
                        :key="des"
                        class="font-weight-light year_des"
                      >
                        {{ des }}
                      </p>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import Barnav from "../components/Barnav.vue";
export default {
  name: "Timeline",
  components: {
    Barnav,
  },
  data() {
    return {
      years: this.$t("timeline.diagram")
    };
  },

  methods: {},
};
</script>
<style scoped lang="scss">
#au_timeline {
  .timeline {
    padding: 0 25%;
  }
}

// 모바일
@media (max-width: 600px) {
  .timeline {
    padding: 0 2.5% !important;

    .year_des {
      font-size: 1rem !important;
    }
  }
}

// 태블릿 & 랩탑
@media (min-width: 601px) and (max-width: 1279px) {
}

// 데스크탑 & 모니터
@media (min-width: 1280px) {  
}
</style>