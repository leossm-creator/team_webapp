<template>
  <div class="page_container" id="contact_us">
    <h1 class="page_heading">Contact Us</h1>
    <!-- <template> -->
        <v-tabs
          v-model="tab"
          centered
          icons-and-text
          color="#E53935"
        >
          <v-tabs-slider color="#E53935"></v-tabs-slider>

          <v-tab href="#tab-1">
            Get In Touch
            <v-icon>mdi-phone</v-icon>
          </v-tab>

          <v-tab href="#tab-2">
            Contact Info
            <v-icon>mdi-account-box</v-icon>
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item
            :value="'tab-1'"
          >
            <v-card flat>
              <v-container class="content_container" id="cu_email">
                <h2>Get In Touch</h2>
                <v-text-field label="Title" v-model="title"></v-text-field>
                <v-textarea label="Your Message" v-model="body"></v-textarea>
                <a @click="mailTo">Send Mail</a>
              </v-container>
            </v-card>
          </v-tab-item>

          <v-tab-item
            :value="'tab-2'"
          >
            <v-card flat>
              <v-container class="content_container" id="cu_info">
                <v-row>
                  <v-col cols="5">
                    <div>
                      <v-img src="/img/kakao_map.png"></v-img>
                    </div>
                  </v-col>
                  <v-col cols="7">
                    <h2>Contact Info</h2>
                    <v-list>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title><v-icon>mdi-phone</v-icon> 02)2008-2008</v-list-item-title>
                          <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title><v-icon>mdi-email</v-icon> someemail.email.com</v-list-item-title>
                          <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title><v-icon>mdi-map-marker</v-icon>[13494] 경기도 성남시 분당구 판교로 310</v-list-item-title>
                          <!-- <v-list-item-subtitle>0452350726</v-list-item-subtitle> -->
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
    <!-- </template> -->
    <!-- <Footer></Footer> -->
  </div>
</template>
<script>
// import Footer from "../layouts/Footer.vue"
export default {
  name: "ContactUs",
  // components: {
  //   Footer,
  // },
  data() {
    return {
      title: "",
      body: "",
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      map: null,
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=91065be27665f7acc9f9ac538762ef60";
      document.head.appendChild(script);
    }
  },
  methods: {
    mailTo() {
      if (this.title === "연승주" && this.body === "no think." ) {
        alert("Easter Egg")
      } else {
        location.href = `mailto:someone@example.com?cc=someone2@example.com&subject=${this.title}&body=${this.body}`;
      }
    },
    initMap() {
      var container = document.getElementById('map');
      var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };

      var map = new kakao.maps.Map(container, options);
      map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
    },
  }
};
</script>
<style scoped lang="scss">
#contact_us {
  // min-height: calc(100vh - 250px);
}
</style>