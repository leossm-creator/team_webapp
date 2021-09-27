<template>
  <div class="header">
    <!-- <sui-menu attached="top" secondary>
      <sui-menu-item name="Logo" position="left" href="/" link >
        <sui-image src="/img/header-logo.png" size="small" />
      </sui-menu-item>

      <sui-menu-item name="AboutUs" link position="right" href="/aboutUs">
        About Us
      </sui-menu-item>

      <sui-menu-item name="OurWorks" link href="/ourWorks" >
        Our Works
      </sui-menu-item>

      <sui-menu-item name="Partnerships" link href="/partnerships">
        Partnerships
      </sui-menu-item>

      <sui-menu-item name="ContactUs" link href="/contactUs">
        Contact Us
      </sui-menu-item>
    </sui-menu> -->
    <v-app-bar flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <a href="/" style="margin-left: auto">
        <v-img
          src="/img/header-logo.png"
          max-width="120"
        ></v-img>
      </a>
    </v-app-bar>
    <!-- <v-progress-linear value="15"></v-progress-linear> -->

    <v-navigation-drawer v-model="drawer" absolute temporary id="navDrawer">
      <v-list-item>
        <!-- <img
          src="/img/header-logo.png"
          alt="logo"
        > -->
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            SK Chemicals 평가분석팀
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn rounded icon @click.stop="drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      items: [
        { title: 'About Us', icon: 'mdi-account-group', path: "/aboutUs" },
        { title: 'Our Works', icon: 'mdi-chart-areaspline', path: "/ourWorks" },
        { title: 'Contact Us', icon: 'mdi-card-account-mail', path: "/contactUs" },
        { title: 'Partnerships', icon: 'mdi-handshake', path: "/partnerships" },
      ],
      right: null,


      sections: [
        { key: 'home', content: 'Home', link: true },
        { key: 'store', content: 'Store', link: true },
        { key: 'tshirt', content: 'T-Shirt', active: true },
      ],
    };  
  },

  methods: {
    toggleNav(name) {
      console.log(name);
    }
  },

}
</script>
<style scoped>

.header {
  border-bottom: 3px solid #FFA726;
}

#navDrawer {
  width: 500px !important;
}
</style>