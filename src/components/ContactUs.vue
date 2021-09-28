<template>
  <div class="page_container">
    <h1 class="page_heading">Contact Us</h1>
    <v-container class="content_container" id="cu_email">
      <h2>Get In Touch</h2>
      <v-text-field label="Title" v-model="title"></v-text-field>
      <v-textarea label="Your Message" v-model="body"></v-textarea>
      <a :href="`mailto:someone@example.com?cc=jones@yourcompany.com&subject=${title}&body=${body}`">Send Mail</a>
    </v-container>

    <v-container class="content_container" id="cu_info">
      <h2>Contact Info</h2>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title><v-icon>mdi-phone</v-icon> Phone Number</v-list-item-title>
            <v-list-item-subtitle>0452350726</v-list-item-subtitle>
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
  </div>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      title: "",
      body: "",
    }
  }
};
</script>
<style scoped>
</style>