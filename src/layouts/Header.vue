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
          <v-list-item-title class="nav_heading">
            {{ $t("nav.title") }}
          </v-list-item-title>
          <v-list-item-subtitle class="nav_subHeading">
            {{ $t("nav.sub_title") }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-btn rounded icon @click.stop="drawer = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item-group active-class="active">
          <v-list-item link href="/">
            <v-list-item-icon>
              <v-icon color=""> mdi-home </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Home </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
            prepend-icon="mdi-account-group"
            color="red"
            active-class="list_active"
          >
            <template v-slot:activator>
              <v-list-item-title>About Us</v-list-item-title>
            </template>

            <!-- 소개 -->
            <v-list-item link :to="formatLink('/aboutUs/intro')">
              <v-list-item-icon>
                <v-icon> </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-3">{{
                  $t("nav.introduction.title")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- 타임 라인 -->
            <v-list-item link :to="formatLink('/aboutUs/timeline')">
              <v-list-item-icon>
                <v-icon> </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-3">{{
                  $t("nav.timeline.title")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <!-- 구성원 -->
            
            <!-- <v-list-item link :to="formatLink('/aboutUs/members')">
              <v-list-item-icon>
                <v-icon> </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-3">{{
                  $t("nav.members.title")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item> -->
          </v-list-group>

          <v-list-group
            prepend-icon="mdi-chart-areaspline"
            color="red"
            active-class="list_active"
          >
            <template v-slot:activator>
              <v-list-item-title>Our Works</v-list-item-title>
            </template>
            <v-list-item link :to="formatLink('/ourWorks/pharma')">
              <v-list-item-icon>
                <v-icon> </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-3">{{
                  $t("nav.pharma.title")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="formatLink('/ourWorks/research')">
              <v-list-item-icon>
                <v-icon> </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-3">{{
                  $t("nav.research.title")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="formatLink('/ourWorks/investments')">
              <v-list-item-icon>
                <v-icon> </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title class="pl-3">{{
                  $t("nav.investments.title")
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item link :to="formatLink('/contactUs')">
            <v-list-item-icon>
              <v-icon> mdi-card-account-mail </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Contact Us </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="formatLink('/partnerships')">
            <v-list-item-icon>
              <v-icon> mdi-handshake </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> PartnerShips </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="">
          <LocaleSwitcher v-on:change="$emit('localeChange', $event)" />
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
import i18n from "@/plugins/i18n";
import LocaleSwitcher from "../components/LocaleSwitcher.vue";
// import LocalisedLink from "./LocalisedLink.vue"

export default {
  name: "Header",
  components: {
    LocaleSwitcher,
    // LocalisedLink,
  },
  data() {
    return {
      drawer: false,
      items: [
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
    formatLink(link) {
      const locale = this.$route.params.locale;
      // we strip leading and trailing slashes and prefix
      // the current locale
      return `/${locale}/${link.replace(/^\/|\/$/g, "")}`;
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  #appBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 3px solid #ffa726;
  }

  #navDrawer {
    z-index: 101;
    height: 100%;
    overflow-y: auto;

    .nav_heading {
      text-align: right;
      font-size: 18px;
      font-weight: 400;
    }

    .nav_subHeading {
      text-align: right;
      font-size: 14px;
    }
  }
}

.active {
  color: #ff9900 !important;
  caret-color: #ff9900 !important;
}

.nav_titles {
  // color: black !important;
  font-size: 1.5rem;
  font-weight: 400;
}

// 모바일
@media (max-width: 600px) {
  #navDrawer {
    width: 100% !important;
  }
}
</style>