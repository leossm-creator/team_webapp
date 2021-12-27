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
          <p class="pageTitle">{{ $t("nav.investments.title") }}</p>
          <p class="pageSub">
            {{ $t("nav.investments.sub_title") }}
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
              <div class="p_title" v-html="$t('investments.p_title')"></div>
            </v-col>
          </v-row>
        </div>
        <div class="text_board">
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('investments.text_board.overview.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('investments.text_board.overview.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('investments.text_board.aim.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('investments.text_board.aim.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('investments.text_board.fields.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('investments.text_board.fields.description')"
              ></p>
            </v-col>
          </v-row>
          <v-row class="board inner_list gray">
            <v-col cols="12" md="6" class="list_row">
              <p
                class="list_title"
                v-html="$t('investments.text_board.fields.strategic.title')"
              ></p>
              <ul class="text_list">
                <li class="list_item">
                  <p
                    class="list_text"
                    v-html="
                      $t('investments.text_board.fields.strategic.list[0]')
                    "
                  ></p>
                </li>
                <li class="list_item">
                  <p
                    class="list_text"
                    v-html="
                      $t('investments.text_board.fields.strategic.list[1]')
                    "
                  ></p>
                </li>
              </ul>
            </v-col>
            <v-col cols="12" md="6" class="list_row">
              <p
                class="list_title"
                v-html="$t('investments.text_board.fields.future.title')"
              ></p>
              <ul class="text_list">
                <li class="list_item">
                  <p
                    class="list_text"
                    v-html="$t('investments.text_board.fields.future.list[0]')"
                  ></p>
                </li>
                <li class="list_item">
                  <p
                    class="list_text"
                    v-html="$t('investments.text_board.fields.future.list[1]')"
                  ></p>
                </li>
              </ul>
            </v-col>
          </v-row>
          <v-row class="board">
            <v-col cols="12" md="3">
              <h3
                class="heading"
                v-html="$t('investments.text_board.career.title')"
              ></h3>
            </v-col>
            <v-col cols="12" md="9">
              <p
                class="content"
                v-html="$t('investments.text_board.career.description')"
              ></p>
            </v-col>
          </v-row>
        </div>
        <v-row class="board">
          <v-img
            contain
            height="400"
            :src="require(`@/assets/img/partners/partners_inv.png`)"
          >
          </v-img>
        </v-row>
        <!-- <v-row class="board">
          <v-col class="d-flex justify-center align-center">
            <LineChart />
          </v-col>
          <v-col class="d-flex justify-center align-center">
            <LineChart />
          </v-col>
        </v-row> -->
      </div>
    </div>
  </div>
</template>
<script>
// import LineChart from "../charts/Chart_01.vue";
import Barnav from "../components/Barnav.vue";
export default {
  name: "Investments",
  components: {
    // LineChart,
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
.inner_list {

  .list_row {
    padding: 30px;

    .list_title {
      font-weight: 500;
      font-size: 22px;
      margin-bottom: 60px;
    }

    .text_list {
      padding-left: 0;
      list-style: none;

      .list_item {
        padding-right: 40px;
        margin-bottom: 45px;

        .list_text {
          &::before {
            content: "· ";
            position: relative;
            left: 0;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .inner_list {
    padding-top: 30px !important;
    padding-bottom: 30px !important;

    div:first-of-type {
      margin-bottom: 45px;
    }

    .list_row {
      padding: 0 !important;
    }
    .list_title {
      margin-bottom: 30px !important;
    }

    .list_item {
      padding-right: 0 !important;
      margin-bottom: 30px !important;
    }
  }
}
</style>