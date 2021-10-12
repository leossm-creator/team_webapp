<template>
  <div class="page_container" id="contact_us">
    <h1 class="page_heading">Contact Us</h1>
    <template>
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
                  <!-- <v-row justify="center">
                    <v-col>
                      <p>Phone</p>
                      <v-icon x-large>mdi-phone</v-icon>
                    </v-col>
                    <v-col>
                      <p>Email</p>
                      <v-icon x-large>mdi-email</v-icon>
                    </v-col>
                    <v-col>
                      <p>Address</p>
                      <v-icon x-large>mdi-map-marker</v-icon>
                    </v-col>
                  </v-row> -->
              </v-container>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
    </template>
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      title: "",
      body: "",
      tab: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
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
  }
};
</script>
<style scoped lang="scss">
#contact_us {
  min-height: calc(100vh - 250px);
}
</style>