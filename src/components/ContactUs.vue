<template>
  <div class="page_container">
    <h1 class="page_heading">Contact Us</h1>
    <v-container class="content_container" id="au_intro">
      <h2>Get In Touch</h2>
      <v-text-field label="Main input" v-model="title"></v-text-field>
      <v-text-field label="Another input" v-model="body"></v-text-field>
      <a :href="`mailto:someone@example.com?subject=${title}&body=${body}`">Send Mail</a>
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