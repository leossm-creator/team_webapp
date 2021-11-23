<template>
  <v-toolbar flat outlined class="barNav" v-if="$vuetify.breakpoint.smAndUp">
    <div class="barNav_inner">
      <v-btn icon link to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-divider vertical inset class="menu_divider"></v-divider>
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="dropdownNav">
            {{ main }}
            <v-icon right dark> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in mainRoutes"
            :key="index"
            link
            :to="item.to"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-divider vertical inset class="menu_divider"></v-divider>
      <v-menu offset-y open-on-hover v-if="sib != null">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text class="dropdownNav">
            {{ sub }}
            <v-icon right dark> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in sib"
            :key="index"
            link
            :to="item.to"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-spacer></v-spacer>
    </div>
  </v-toolbar>
</template>
<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      current: {
        main: "",
        sub: "",
      },

      mainRoutes: [
        {
          name: "About Us",
          to: "/aboutUs/intro",
        },
        {
          name: "Our Works",
          to: "/ourWorks/pharma",
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
    };
  },
  computed: {
    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === "function") {
        return this.$route.meta.breadCrumb.call(this, this.$route);
      }
      return this.$route.meta.breadCrumb;
    },
    sib() {
      if (typeof this.$route.meta.sib === "function") {
        return this.$route.meta.sib.call(this, this.$route);
      }
      return this.$route.meta.sib;
    },
    sub() {
      return this.$route.name;
    },
    main() {
      return this.$route.meta.parent;
    },
  },
  methods: {},
  mounted() {
    // console.log(this.sib)
    this.current.sub = this.$route.name;

    // console.log(this.$vuetify.breakpoint.smAndUp)
  },
};
</script>
<style scoped lang="scss">

.barNav {
  width: 100%;
  .barNav_inner {
    width: 100%;
    padding: 0 15%;
    // margin-left: auto;
    // margin-right: auto;
    .dropdownNav {
      min-width: 150px;
    }
    .menu_divider {
      margin-left: 8px;
      margin-right: 8px;
    }
  }
}
</style>