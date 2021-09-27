import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import OurWorks from "./components/OurWorks";
import Partnerships from "./components/Partnerships";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
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