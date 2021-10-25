import Vue from "vue";
import VueRouter from "vue-router";
// import goTo from 'vuetify/lib/services/goto'

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import OurWorks from "./components/OurWorks";
import Partnerships from "./components/Partnerships";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  // scrollBehavior: (to, from, savedPosition) => {
  //   // if (savedPosition) {
  //   //   return savedPosition
  //   // } else {
  //   //   return { x: 0, y: 0 }
  //   // }
  // },
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

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   // ...
// })

export default router;