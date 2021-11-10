<template>
  <v-toolbar elevation="0">
    <v-spacer></v-spacer>
    <v-btn icon to="/"><v-icon>mdi-home</v-icon></v-btn>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Dropdown </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in prime.routes"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on"> Dropdown </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>
<script>
export default {
  name: "Dropdown",
  data() {
    return {
      prime: {
        current: null,
        routes: [
          {
            name: "About Us",
            to: "/aboutUs/intro",
            sub: [
              {
                name: "Introduction",
                to: "/aboutUs/intro",
              },
              {
                name: "Timeline",
                to: "/aboutUs/timeline",
              },
              {
                name: "Members",
                to: "/aboutUs/members",
              },
            ],
          },
          {
            name: "Our Works",
            to: "/ourWorks/pharma",
            sub: [
              {
                name: "Pharma",
                to: "/ourWorks/pharma",
              },
              {
                name: "Research",
                to: "/ourWorks/research",
              },
              {
                name: "Investments",
                to: "/ourWorks/investments",
              },
            ],
          },
          {
            name: "Contact Us",
            to: "/contactUs",
          },
          {
            name: "Partnerships",
            to: "/partnerships",
          },
        ],
      },
    };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
</style>