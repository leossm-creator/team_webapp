import Vue from "vue";
import VueRouter from "vue-router";
import goTo from 'vuetify/lib/services/goto'

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import OurWorks from "./components/OurWorks";
import Partnerships from "./components/Partnerships";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  routes: [
    {
      name: "homePage",
      path: "/",
      component: Home
    },
    {
      name: "AboutUs",
      path: "/aboutUs",
      component: AboutUs
    },
    {
      name: "OurWorks",
      path: "/ourWorks",
      component: OurWorks
    },
    {
      name: "Partnerships",
      path: "/partnerships",
      component: Partnerships
    },
    {
      name: "contactUs",
      path: "/ContactUs",
      component: ContactUs
    }
  ],
});

export default router;