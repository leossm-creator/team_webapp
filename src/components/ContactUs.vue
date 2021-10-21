<template>
  <div id="contact_us">
    <div class="page_container" id="contact_us">
      <h1 class="page_heading">Contact Us</h1>
      <v-tabs v-model="tab" centered icons-and-text color="#3b3b3b">
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
                <h2>Get In Touch</h2>
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
            <h2>Contact Info</h2>
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
                          <span>someemail.email.com</span></v-list-item-title
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
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "../layouts/Footer.vue";
export default {
  name: "ContactUs",
  components: {
    Footer,
  },
  data() {
    return {
      mailData: {
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
    };
  },

  methods: {
    mailTo() {
      if (this.$refs.mailTo.validate()) {
        if (
          this.mailData.title === "연승주" &&
          this.mailData.body === "선생님" &&
          this.mailData.subject === "etc"
        ) {
          alert("Easter Egg");
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
}
</style>