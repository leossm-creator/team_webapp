<template>
  <div class="header">
    <v-app-bar flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <a href="/" style="margin-left: auto">
        <v-img
          src="/img/header-logo.png"
          max-width="120"
        ></v-img>
      </a>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary id="navDrawer" width="500px">
      <v-list-item>
        <a href="/">
          <v-img
            src="/img/header-logo.png"
            alt="logo"
            contain
            max-width="100"
          ></v-img>
        </a>
        <v-list-item-content style="margin-left: 12px; margin-right: 12px;">
          <v-list-item-title class="text-h6" style="text-align: right">
            SK Chemicals OPEN R&D Team
          </v-list-item-title>
          <v-list-item-subtitle style="text-align: right">
            공동연구, 투자, AI
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn rounded icon @click.stop="drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
          :@click="toggleNav(item.id)"
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
        { title: "Home", icon: 'mdi-home-variant', path: "/", id: "home"},
        { title: 'About Us', icon: 'mdi-account-group', path: "/aboutUs", id: "about_us"},
        { title: 'Our Works', icon: 'mdi-chart-areaspline', path: "/ourWorks", id: "our_works" },
        { title: 'Contact Us', icon: 'mdi-card-account-mail', path: "/contactUs", id: "contact_us" },
        { title: 'Partnerships', icon: 'mdi-handshake', path: "/partnerships", id: "partnerships" },
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
    toggleNav(id) {
      // let elem = document.getElementById(id);
      // elem.scrollTop();
      console.log(id);
    }
  },

}
</script>
<style scoped lang="scss">

.header {
  border-bottom: 3px solid #FFA726;
}

#navDrawer {
}

.active {
  color: #FFA726;
}
</style>