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
          <p class="pageTitle">{{ $t("nav.partnerships.title") }}</p>
          <p class="pageSub">
            {{ $t("nav.partnerships.sub_title") }}
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
              <h3 class="heading" v-html="$t('partnerships.text_board.1.title')"></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p class="content" v-html="$t('partnerships.text_board.1.description')"></p>
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
                <v-img
                  class="logo_imgs"
                  :src="item.img"
                  height="200"
                  contain
                  @click="openLink(item.link)"
                ></v-img>
              <div class="text_container">
                <h3>
                  {{ $t(`partnerships.partners[${index}].title`) }}
                </h3>
                <p style="text-align: left">
                  {{ $t(`partnerships.partners[${index}].description`) }}
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
          img: require(`@/assets/img/partners/standigm-01.png`),
        },
        {
          name: "J2H Biotech",
          link: "http://j2hbio.com",
          img: require(`@/assets/img/partners/j2h-01.png`),
        },
        {
          name: "Deargen",
          link: "https://deargen.me/ko/",
          img: require(`@/assets/img/partners/deargen-01.png`),
        },
        {
          name: "Dr. Noah Biotech",
          link: "http://www.drnoahbiotech.com",
          img: require(`@/assets/img/partners/drNoah-01.png`),
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
    min-height: 100%;

    // .img_container {
    //   display: flex;
    //   width: 100%;
    //   min-height: 50%;
    //   max-height: 50%;
    //   justify-content: center;
    //   align-items: center;

      .logo_imgs {
        &:hover {
          cursor: pointer;
        }
      }
    // }

    .text_container {
      text-align: center;
      padding: 30px;
      min-height: 50%;
      max-height: 50%;
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