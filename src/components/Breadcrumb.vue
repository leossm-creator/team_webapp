<template>
  <div>
    <v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/"> Home </v-btn>
        <v-menu
          :rounded="rounded"
          open-on-hover
          offset-y
          transition="slide-x-transition"
          bottom
          right
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn flat v-bind="attrs" v-on="on"> Services </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in main_menus"
              :key="index"
              router
              :to="item.href"
            >
              <v-list-item-action>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn to="/about" flat> About Us </v-btn>
        <v-btn to="/contact" flat> Contact Us </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      main_menus: [
        {
          title: "About Us",
          disabled: false,
          href: "/aboutUs",
        },
        {
          title: "Our Works",
          disabled: false,
          href: "/ourWorks",
        },
        {
          title: "Contact Us",
          disabled: false,
          href: "/contactUs",
        },
        {
          title: "Partnerships",
          disabled: false,
          href: "/partnerships",
        },
      ],
    };
  },
  methods: {

  },
};
</script>
<style scoped>
</style>