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
              <h3>개요</h3>
            </v-col>
            <v-col cols="12" md="9">
              <p> 
                2020년 이래로 <span class="ff_m">SK</span>케미칼은 오픈
                이노베이션의 일환으로 국내외 유망 벤처를 발굴하여 투자를 통한
                전략적 협업 관계를 맺고자 합니다. 현재 국내외 벤처 투자
                네트워크를 구축을 완료 하였으며, 기업의 성장을 위한 공동의
                노력을 통하여 성과의 과실을 함께 나눌 수 있는 기업을 찾고
                있습니다.
              </p>
              <p>
                글로벌 수준 <span class="ff_m">R&amp;D</span> 역량을 보유한 더
                많은 벤처기업과의 연결을 통해 사업 전략 및 미래 비전을
                공유하면서 확장적 성장을 이어나가고자 합니다.
              </p>
              <p>
                <span class="ff_m">SK</span>케미칼은 중점 연구개발 영역에
                집중함과 동시에 미래 사업 확장 영역에 대해서도 기회를 열어두고
                있으며, 기업의 투자유치 전주기에 가능성을 열어두고 투자하고자
                합니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3>목표</h3>
            </v-col>
            <v-col cols="12" md="9">
              <p>
                <span class="ff_m">SK</span>케미칼이 선정한 중점 연구개발 영역에
                집중하는 기업들에 대해서는 <span class="ff_m">Seed</span> 단계에
                해당하는 기업의 설립초기단계부터 협력 가능성을 모색하고 있으며,
                미래 사업 확장 영역에 대해서는
                <span class="ff_m">Series B</span> 단계에 해당하는 기업의 사업
                영역의 성격이 확정된 시기부터의 투자 기회를 탐색하고 있습니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3>중점<br class="pc_only" />연구분야</h3>
            </v-col>
            <v-col cols="12" md="9">
              <p>
                자사의 중점 연구개발 영역에는 시장의 인정을 받은 분야로서 상업적
                판매망이 갖추어진 신경계 질환, 근골격계 질환, 비뇨기계 질환,
                신장계 질환 등과 중점 연구개발 영역에 해당하는 대사성 질환,
                염증성 질환, 중추신경계 질환이 속합니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3>미래<br class="pc_only" />확장영역</h3>
            </v-col>
            <v-col cols="12" md="9">
              <p>
                자사의 미래 사업 확장 영역에는 시장에서의 자사 판매망 강화와
                확장에 유리한 당뇨 합병증, 알츠하이머 치매, 자가면역 질환, 암
                질환 등과 새로운 영역에 대한 사업 발굴에 해당하는 게놈
                편집/유전자 치료제, 표적 단백질 분해제, 세포 치료제 등이
                속합니다.
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