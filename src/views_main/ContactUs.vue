<script src="https://unpkg.com/vue-p5"></script>
<template>
  <div id="contact_us">
    <v-card flat tile class="thumbnail">
      <v-img
        src="/img/sub_thumbnail-07.png"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="100%"
      >
        <v-card-title class="pageHeadings">
          <p class="pageTitle">Contact Us</p>
          <p class="pageSub">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
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
        <v-container>
          <v-tabs v-model="tab" centered icons-and-text color="#93bc3b">
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

          <v-tabs-items v-model="tab">
            <v-tab-item :value="'tab-1'">
              <v-card flat>
                <v-container class="content_container" id="cu_email">
                  <v-form ref="mailTo">
                    <!-- <h2>Get In Touch</h2> -->
                    <v-row>
                      <v-col>
                        <p class="title">SK케미칼 이용약관</p>
                        <ul style="padding: 0 !important">
                          <li class="list">
                            <p class="label">
                              수집하는 개인정보 항목 및 수집방법
                            </p>
                            <p class="txt">
                              SK케미칼(주) 홈페이지는 서비스 이용을 위해 필요한
                              최소한의 개인정보만을 “고객문의” 게시판에서
                              이용자가 입력한 정보에 한해 수집합니다. 귀하가
                              SK케미칼(주) 홈페이지의 서비스를 이용하기 위해서는
                              이메일, 연락처를 입력하셔야 하며, 입력하신 정보는
                              서비스 제공에 사용됩니다.
                              <br />
                              [수집항목] : 이메일(필수), 연락처(선택)
                            </p>
                          </li>
                          <li class="list">
                            <p class="label">개인정보의 수집 및 이용목적</p>
                            <p class="txt">
                              SK케미칼(주) 홈페이지는 귀하의 개인정보 수집에
                              대한 동의를 받고 있습니다. 귀하의 개인정보 수집과
                              관련하여 SK케미칼(주) 홈페이지의 개인정보처리방침
                              또는 이용약관의 내용에 대해 『동의함』 버튼 또는
                              『동의 안 함』 버튼을 클릭할 수 있는 절차를
                              마련하고 있으며, 귀하가 『동의 함』 버튼을
                              클릭하면 개인 정보 수집에 대해 동의한 것으로
                              봅니다.
                              <br />
                              [이용목적] : 문의내용 답변 목적
                            </p>
                          </li>
                          <li class="list">
                            <p class="label">개인정보의 보유 및 이용기간</p>
                            <p class="txt">
                              SK케미칼(주) 홈페이지는 개인정보의 수집목적 또는
                              제공받은 목적이 달성된 때에는 귀하의 개인정보를
                              즉시 파기합니다.
                              <br />
                              [보유기간] : 문의내용 처리 후 즉시 파기
                            </p>
                          </li>
                        </ul>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="2">
                        <v-select
                          :items="fields"
                          item-text="text"
                          item-value="val"
                          label="Subject"
                          v-model="mailData.subject"
                          :rules="[(v) => !!v || 'Please select the subject']"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="10">
                        <v-text-field
                          label="Title"
                          v-model="mailData.title"
                          :rules="[(v) => !!v || 'Please fill in the title']"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-textarea
                          label="Your Message"
                          v-model="mailData.body"
                          :rules="[(v) => !!v || 'Please fill in your message']"
                          required
                          rows="12"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <a type="submit" @click="mailTo">Send Mail</a>
                  </v-form>
                </v-container>
              </v-card>
            </v-tab-item>

            <v-tab-item :value="'tab-2'">
              <v-container class="content_container" id="cu_info">
                <!-- <h2>Contact Info</h2> -->
                <v-row>
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
                <v-row>
                  <v-col>
                    <v-card style="">
                      <v-list>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><v-icon>mdi-phone</v-icon> 대표전화:
                              <span>02)2008-2008</span></v-list-item-title
                            >
                            <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><v-icon>mdi-email</v-icon> 이메일:
                              <span
                                >someemail.email.com</span
                              ></v-list-item-title
                            >
                            <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-content>
                            <v-list-item-title
                              ><v-icon>mdi-map-marker</v-icon> 주소:
                              <span
                                >[13494] 경기도 성남시 분당구 판교로 310</span
                              ></v-list-item-title
                            >
                            <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
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
      mailData: {
        // Fix!
        title: "연승주",
        body: "show me the fishes",
        subject: "etc",
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
}
</style>