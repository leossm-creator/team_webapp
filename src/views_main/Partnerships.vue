<template>
  <div id="partnerships">
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-09.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">Partnerships</p>
          <p class="pageSub">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="partnerships">
        <v-container>
          <v-row class="title_board">
            <v-col>
              <div class="p_title">
                SK Chemicals는 더 나은 의약품을 만들기 위해
                <br />
                끊임없이 고민하고 연구합니다
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
                등 의약품 연구·개발·제조 모든 부분에서<br
                  class="pc_only"
                />뛰어난 역량과 기술을 보유하고 있습니다.
              </p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col
              v-for="(item, index) in partners"
              :key="index"
              cols="12"
              md="6"
              class="card_container"
              :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
            >
              <v-card hover class="p_card">
                <div class="img_container">
                  <v-img :src="item.img" width="200" contain>
                  </v-img>
                </div>
                <v-card-text>
                  {{ item.name }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- <v-parallax src="https://source.unsplash.com/WCEOtVmk2VY/300" height="300"></v-parallax> -->
    </div>
  </div>
</template>
<script>
import Barnav from "../components/Barnav.vue";
export default {
  name: "Partnerships",
  components: {
    Barnav,
  },
  data() {
    return {
      partners: [
        {
          name: "Standigm",
          img: require(`@/assets/img/partners/standigm.jpeg`),
          title: "",
          description: "",
        },
        {
          name: "J2H Biotech",
          img: require(`@/assets/img/partners/j2h.png`),
          title: "",
          description: "",
        },
        {
          name: "Deargen",
          img: require(`@/assets/img/partners/deargen.png`),
          title: "",
          description: "",
        },
        {
          name: "Dr. Noah Biotech",
          img: require(`@/assets/img/partners/dr_noah.png`),
          title: "",
          description: "",
        },
        {
          name: "Celltrion",
          img: "/path_to_img",
          title: "",
          description: "",
        },
        {
          name: "Celltrion",
          img: "/path_to_img",
          title: "",
          description: "",
        },
        {
          name: "Celltrion",
          img: "/path_to_img",
          title: "",
          description: "",
        },
        {
          name: "Celltrion",
          img: "/path_to_img",
          title: "",
          description: "",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.card_container {
  // padding: 20px 80px;
  padding-bottom: 40px;

  &.left {
    padding-right: 25px;
  }

  &.right {
    padding-left: 25px;
  }
  .p_card {
    width: 100%;
    height: 400px;

    .img_container {
      display: flex;
      width: 100%;
      // height: 50%;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>