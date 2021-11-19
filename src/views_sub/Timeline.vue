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
          <p class="pageTitle">Timeline</p>
          <p class="pageSub">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <!-- <Breadcrumb /> -->
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="au_timeline" ref="au_timeline">
        <!-- 성과 Timeline -->
        <v-container>
          <v-row class="title_board">
            <v-col>
              <div class="p_title">
                SK Chemicals 오픈 이노베이션은
                <br />
                이렇게 성장해왔습니다
              </div>
            </v-col>
          </v-row>
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
                등 의약품 연구·개발·제조 모든 부분에서<br class="pc_only" />뛰어난
                역량과 기술을 보유하고 있습니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col>
              <!-- <sui-container text> -->
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
                        v-for="item in year.description"
                        :key="item"
                        class="font-weight-light"
                      >
                        {{ item }}
                      </p>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
              <!-- </sui-container> -->
            </v-col>
          </v-row>
          <!-- <sui-container text> -->
          <!-- </sui-container> -->
        </v-container>
      </div>
    </div>
  </div>
</template>
<script>
// import Breadcrumb from "../components/Breadcrumb.vue"
import Barnav from "../components/Barnav.vue";
export default {
  name: "Timeline",
  components: {
    // Breadcrumb,
    Barnav,
  },
  data() {
    return {
      years: [
        {
          color: "cyan",
          year: "2017",
          title: "Pilot Project",
          description: ["1. 신약 재창출 (DR)*", "2. 이대 김완규 교수"],
        },
        {
          color: "green",
          year: "2019",
          title: "Open Innovation",
          description: [
            "1. Open R&D TF 출범",
            "2. 집중 3개 질환 선정",
            "3. 외부 협력 추진",
          ],
        },
        {
          color: "pink",
          year: "2020",
          title: "신약 개발 R&D 착수 및 협력 확장",
          description: ["1. DR 특허 출원 (2건)", "2. AI 협력 기관 추가"],
        },
        {
          color: "amber",
          year: "2021",
          title: "역량 강화 및 정식 과제 상정",
          description: ["1. 내부 AI 모델 구축"],
        },
        {
          color: "orange",
          year: "2022",
          title: "과제 고도화",
          description: ["1. 신약 파이프라인 확보", "2. Early Stage L/O"],
        },
      ],
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
</style>