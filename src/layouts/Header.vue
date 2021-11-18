<template>
  <div class="header">
    <v-app-bar flat id="appBar" height="64">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <a href="/" style="margin-left: auto">
        <v-img src="/img/header-logo.png" max-width="120"></v-img>
      </a>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      id="navDrawer"
      width="400px"
    >
      <v-list-item>
        <a href="/">
          <v-img
            src="/img/header-logo.png"
            alt="logo"
            contain
            max-width="100"
          ></v-img>
        </a>
        <v-list-item-content style="margin-left: 12px; margin-right: 12px">
          <v-list-item-title class="text-h6" style="text-align: right">
            Open R&D Team
          </v-list-item-title>
          <v-list-item-subtitle style="text-align: right">
            SK Chemicals Open Innovation
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn rounded icon @click.stop="drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav
      >
        <v-list-item-group
        active-class="active"
        >
          <!-- <v-list-item
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
          </v-list-item> -->
          
          <v-list-item
          link
          href="/"
          >
            <v-list-item-icon>
              <v-icon color="">
                mdi-home
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
          disabled
          class="nav_titles"
          >
            <v-list-item-icon>
              <v-icon color="">
                mdi-account-group
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                About Us
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link
          to="/aboutUs/intro">
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-3">Introduction</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link
          to="/aboutUs/timeline">
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-3">Timeline</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link
          to="/aboutUs/members">
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-3">Members</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
          disabled
          class="nav_titles"
          >
            <v-list-item-icon>
              <v-icon>
                mdi-chart-areaspline
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Our Works
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link
          to="/ourWorks/pharma">
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-3">Pharma</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link
          to="/ourWorks/research">
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-3">Research</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item           link
          to="/ourWorks/investments">
            <v-list-item-icon>
              <v-icon>
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="pl-3">Investments</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
          link
          to="/contactUs"
          >
            <v-list-item-icon>
              <v-icon>
                mdi-card-account-mail
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                Contact Us
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
          link
          to="/partnerships"
          >
            <v-list-item-icon>
              <v-icon>
                mdi-handshake
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                PartnerShips
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <!-- <v-btn @click="changeLocale('en')">
            <v-icon>mdi-web</v-icon>
            EN
          </v-btn>
          <v-btn @click="changeLocale('kr')">
            <v-icon>mdi-web</v-icon>
            KR
          </v-btn> -->
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" text class="dropdownNav">
                KR
                <v-icon right dark> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                link
              >
                <v-list-item-title>Korean</v-list-item-title>
              </v-list-item>
              <v-list-item
                link
              >
                <v-list-item-title>English</v-list-item-title>
              </v-list-item>
              <v-list-item
                link
              >
                <v-list-item-title>Chinese</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- <div class="pa-2">
          <v-switch v-model="switchMe" prepend-icon="mdi-web" label="EN">
          </v-switch>
        </div> -->
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      items: [
        // { title: "Home", icon: 'mdi-home-variant', path: "/", id: "home"},
        {
          title: "About Us",
          icon: "mdi-account-group",
          path: "/aboutUs",
          id: "about_us",
        },
        {
          title: "Our Works",
          icon: "mdi-chart-areaspline",
          path: "/ourWorks",
          id: "our_works",
        },
        {
          title: "Contact Us",
          icon: "mdi-card-account-mail",
          path: "/contactUs",
          id: "contact_us",
        },
        {
          title: "Partnerships",
          icon: "mdi-handshake",
          path: "/partnerships",
          id: "partnerships",
        },
      ],
      right: null,
    };
  },

  methods: {
    toggleNav() {
      // let elem = document.getElementById(id);
      // elem.scrollTop();
      // console.log(id);
    },
    changeLocale(locale) {
      i18n.locale = locale;
    },
  }
};
</script>
<style scoped lang="scss">
.header {
  #appBar {
    position: absolute;
    width: 100%;
    z-index: 100;
    border-bottom: 3px solid #ffa726;
  }

  #navDrawer {
    z-index: 101;
  } 
}

.active {
  color: #ff9900 !important;
  caret-color: #ff9900 !important;
}

.nav_titles {
  color: black !important;
  font-size: 1.5rem;
  font-weight: 400;
}
</style>