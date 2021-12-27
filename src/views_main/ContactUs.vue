<script src="https://unpkg.com/vue-p5"></script>
<template>
  <div id="contact_us">
    <v-card flat tile class="thumbnail">
      <v-img
        :src="require(`@/assets/img/thumbnails/sub_thumbnail-07.png`)"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">{{ $t("nav.contactUs.title") }}</p>
          <p class="pageSub">
            {{ $t("nav.contactUs.sub_title") }}
          </p>
        </v-card-title>
      </v-img>
    </v-card>
    <Barnav />
    <div class="page_container" id="contact_us">
      <div
        class="content_container"
        id="cu"
        ref="cu"
        style="margin-bottom: 50px"
      >
        <div class="title_board">
          <v-row class="board">
            <v-col>
              <div class="p_title" v-html="$t('contactUs.p_title')"></div>
            </v-col>
          </v-row>
        </div>

        <div class="content_board">
          <div class="tabs">
            <v-tabs v-model="tab" centered icons-and-text color="#f7c45f">
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1" dark>
                Get In Touch
                <v-icon>mdi-phone</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Contact Info
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>
          </div>
          <div class="tab_content">
            <v-tabs-items v-model="tab">
              <!-- Get In Touch -->
              <v-tab-item :value="'tab-1'">
                <v-card flat>
                  <v-form ref="mailTo" @submit.prevent="mailTo" v-model="form">
                    <v-row class="board">
                      <v-col class="t_and_c">
                        <v-list color="amber lighten-5">
                          <v-list-item>
                            <p class="title">{{ $t("contactUs.t_c.title") }}</p>
                          </v-list-item>

                          <v-list-group :value="true" color="orange">
                            <template v-slot:activator>
                              <v-list-item-title class="li_title">{{
                                $t("contactUs.t_c.li_title.1")
                              }}</v-list-item-title>
                            </template>
                            <v-list-item>
                              <v-list-item-content>
                                <p
                                  class="txt"
                                  v-html="$t('contactUs.t_c.li_txt.1')"
                                ></p>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-group>

                          <v-list-group color="orange">
                            <template v-slot:activator>
                              <v-list-item-title class="li_title">{{
                                $t("contactUs.t_c.li_title.2")
                              }}</v-list-item-title>
                            </template>
                            <v-list-item>
                              <v-list-item-content>
                                <p
                                  class="txt"
                                  v-html="$t('contactUs.t_c.li_txt.2')"
                                ></p>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-group>

                          <v-list-group color="orange">
                            <template v-slot:activator>
                              <v-list-item-title class="li_title">{{
                                $t("contactUs.t_c.li_title.3")
                              }}</v-list-item-title>
                            </template>
                            <v-list-item>
                              <v-list-item-content>
                                <p
                                  class="txt"
                                  v-html="$t('contactUs.t_c.li_txt.3')"
                                ></p>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-group>

                          <v-list-item>
                            <v-checkbox
                              v-model="agree"
                              color="red"
                              hide-details
                              id="agreeCheck"
                              required
                            >
                              <template v-slot:label>
                                <div class="agree_label">
                                  {{ $t("contactUs.t_c.agree") }}
                                </div>
                              </template>
                            </v-checkbox>
                          </v-list-item>
                        </v-list>
                      </v-col>
                    </v-row>
                    <v-row class="board">
                      <v-col cols="12" md="2">
                        <v-select
                          :disabled="!agree"
                          :items="fields"
                          item-text="text"
                          item-value="val"
                          label="Subject"
                          v-model="mailData.subject"
                          :rules="[(v) => !!v || 'Please select the subject']"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="10">
                        <v-text-field
                          :disabled="!agree"
                          label="Title"
                          v-model="mailData.title"
                          :rules="[(v) => !!v || 'Please fill in the title']"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          :disabled="!agree"
                          label="Your Message"
                          v-model="mailData.body"
                          :rules="[(v) => !!v || 'Please fill in your message']"
                          required
                          rows="12"
                        ></v-textarea>
                      </v-col>
                      <v-col>
                        <!-- <a type="submit" @click="mailTo">Send Mail</a> -->
                        <v-btn
                          type="submit"
                          @click="mailTo"
                          color="#93bc3b"
                          elevation="0"
                          :disabled="!agree"
                          class="white--text"
                        >
                          {{ $t("contactUs.t_c.submit") }}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card>
              </v-tab-item>

              <!-- Contact Info -->
              <v-tab-item :value="'tab-2'">
                <v-row class="board">
                  <v-col>
                    <v-card elevation="0" tile>
                      <v-list class="con_info">
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <v-avatar color="">
                                <v-icon color="#ea002c">mdi-phone</v-icon>
                              </v-avatar>
                              <span class="con_details"
                                >02) 2008 - 2008</span
                              ></v-list-item-title
                            >
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title>
                              <v-avatar color="">
                                <v-icon color="#ea002c">mdi-email</v-icon>
                              </v-avatar>
                              <span class="con_details"
                                >someemail.email.com</span
                              ></v-list-item-title
                            >
                            <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <!-- <div style="display: flex; background-color: orange;"> -->
                            <!-- </div> -->

                            <v-list-item-title>
                              <v-avatar color="">
                                <v-icon color="#ea002c"
                                  >mdi-map-marker</v-icon
                                >
                              </v-avatar>
                              <span class="con_details">{{
                                $t("contactUs.info.address")
                              }}</span>
                            </v-list-item-title>
                            <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row class="map_container">
                  <v-col>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6339.005712252203!2d127.10572956533485!3d37.40158765283903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca7f51b7be5ff%3A0x11f1e6bd42f4ffd3!2zU0vsvIDrr7jsubwo7KO8KSDrs7jsgqw!5e0!3m2!1sko!2skr!4v1634523792165!5m2!1sko!2skr"
                      width="100%"
                      height="600"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                  </v-col>
                </v-row>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
      </div>
    </div>

    <v-dialog
      v-model="easterEgg.show"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card id="easterEgg_modal">
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="easterEgg.show = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Easter Egg</v-toolbar-title>
        </v-toolbar>
        <EasterEgg />
      </v-card>
      <v-snackbar
        v-model="easterEgg.snackbar"
        :timeout="3000"
        color="orange"
        text
      >
        Welcome {{ easterEgg.username }}!
        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="easterEgg.snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-dialog>
  </div>
</template>
<script>
// import Footer from "../layouts/Footer.vue";
// import "../sketch";
import EasterEgg from "../components/EasterEgg.vue";
import Barnav from "../components/Barnav.vue";
export default {
  name: "ContactUs",
  components: {
    // Footer,
    EasterEgg,
    Barnav,
  },
  data() {
    return {
      form: false,
      agree: false,
      mailData: {
        // Fix!
        title: "",
        body: "",
        subject: "",
      },
      tab: null,

      fields: [
        {
          text: "투자 지원",
          val: "투자",
        },
        {
          text: "공동 연구 지원",
          val: "연구",
        },
        {
          text: "기타",
          val: "etc",
        },
      ],
      // valid: true,

      easterEgg: {
        snackbar: false,
        show: false,
        username: "",
        fishNum: 10,
      },
    };
  },

  methods: {
    mailTo() {
      if (this.$refs.mailTo.validate()) {
        if (
          this.mailData.title === "연승주" ||
          this.mailData.title === "김동혁" ||
          (this.mailData.title === "박지현" &&
            this.mailData.body === "show me the fishes" &&
            this.mailData.subject === "etc")
        ) {
          // alert("Easter Egg");
          this.easterEgg.username = this.mailData.title;
          this.easterEgg.snackbar = true;
          this.easterEgg.show = true;
          // this.showFishes();
        } else {
          let address;
          let cc;
          if (this.mailData.subject === "투자") {
            address = "someone_investment@example.com";
            cc = "someoneCC_investment@example.com";
          } else if (this.mailData.subject === "연구") {
            address = "someone_research@example.com";
            cc = "someoneCC_research@example.com";
          } else if (this.mailData.subject === "etc") {
            address = "someone_etc@example.com";
            cc = "someoneCC_etc@example.com";
          }
          location.href = `mailto:${address}?cc=${cc}&subject=${this.mailData.title}&body=${this.mailData.body}`;
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
#contact_us {
  // height: calc(100vh - 67px);
}

.page_container {
  width: 100% !important;

  .list {
    list-style: none;
  }

  .tabs {
    // width: 100%;
    margin-top: 120px;
    // background-color: antiquewhite;
    border-bottom: 1px solid rgb(233, 233, 233);
    margin-left: 15%;
    margin-right: 15%;
  }

  .tab_content {
    .t_and_c {
      .li_title {
        font-size: 20px;
        font-weight: 500;
      }
      .title {
        font-weight: 700;
        font-size: 24px !important;
        // padding-left: 16px;
      }

      .txt {
        font-weight: 300;
        font-size: 16px;
        line-height: 1.9em;
        word-break: keep-all;
        color: rgb(0, 0, 0);
      }

      .agree_label {
        font-weight: 600;
      }
    }

    .map_container {
      padding: 0 15%;
    }

    .con_info {
      background-color: rgb(250, 250, 250);
    }
  }

  .con_details {
    font-size: 18px;
    padding-left: 18px;
  }
}

// 모바일
@media (max-width: 600px) {
  .tabs {
    margin-top: 60px !important;
    margin-left: 7.5% !important;
    margin-right: 7.5% !important;
  }
  .t_and_c {
    .li_title {
      font-size: 16px !important;
    }
    .title {
      font-size: 20px !important;
    }

    .txt {
      font-weight: 300;
      font-size: 12px !important;
    }
  }
  .map_container {
    padding: 0 !important;

    iframe {
      height: 300px !important;
    }
  }
}
</style>