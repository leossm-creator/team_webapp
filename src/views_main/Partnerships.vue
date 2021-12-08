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
          <p class="pageTitle">{{ $t("nav.investments.title") }}</p>
          <p class="pageSub">
            {{ $t("nav.members.sub_title") }}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container">
      <div class="content_container" id="partnerships">
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('partnerships.p_title')"></div>
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

        <v-row class="board">
          <v-col
            v-for="(item, index) in partners"
            :key="index"
            cols="12"
            md="4"
            class="card_container"
            :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
          >
            <v-card class="p_card">
              <div class="img_container" :style="{ padding: item.padding }">
                <v-img
                  class="logo_imgs"
                  :src="item.img"
                  :height="item.height"
                  contain
                  @click="openLink(item.link)"
                ></v-img>
              </div>
              <div class="text_container">
                <h2>
                  {{ item.title }}
                </h2>
                <p style="text-align: left">
                  {{ item.description }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
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
          link: "https://www.standigm.com/main",
          img: require(`@/assets/img/partners/standigm.png`),
          // height: "150",
          padding: "0 100px",
          title: "류마티스 관절염 치료물질 발굴",
          description:
            "신약 재창출(drug repositioning) 접근법의 류마티스 관절염(rheumatoid arthritis, RA) 치료물질을 발굴 및 특허 출원",
        },
        {
          name: "J2H Biotech",
          link: "http://j2hbio.com",
          img: require(`@/assets/img/partners/j2h.png`),
          height: "100",
          padding: "25px 150px",
          title: "신약 개발 공동연구 체결",
          description:
            "옵티플렉스(Optiflex) 기술 및 표적단백질 분해(Targeted Protein Degrader) 기술 등을 활용해 신약 연구",
        },
        {
          name: "Deargen",
          link: "https://deargen.me/ko/",
          img: require(`@/assets/img/partners/deargen.png`),
          height: "200",
          padding: "0 100px",
          title: "약물 재창출 공동연구 체결",
          description:
            "약물 재창출(Drug Repositioning) 및 신약개발(De Novo Drug Design)에 대한 공동연구 계약을 체결",
        },
        {
          name: "Dr. Noah Biotech",
          link: "http://www.drnoahbiotech.com",
          img: require(`@/assets/img/partners/drNoah.png`),
          height: "200",
          padding: "0 100px",
          title: "인공지능(AI) 기반 신약개발 공동연구",
          description:
            "‘ARK’ 플랫폼 기술을 활용 AI기반 신약개발을 공동연구 및 개발 협약을 체결",
        },
      ],
    };
  },
  methods: {
    openLink(url) {
      window.open(url);
    },
  },
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
      height: 50%;
      justify-content: center;
      align-items: center;

      .logo_imgs {
        &:hover {
          cursor: pointer;
        }
      }
    }

    .text_container {
      text-align: center;
      padding: 30px;
    }
  }
}

// 모바일
@media (max-width: 600px) {
  .card_container {
    &.left {
      padding-right: 0 !important;
    }

    &.right {
      padding-left: 0 !important;
    }

    .p_card {
      height: fit-content !important;

      .img_container {
        padding: 30px 30px 0 !important;
      }
    }
  }
}
</style>