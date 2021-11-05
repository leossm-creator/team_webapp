import Vue from "vue";
import VueRouter from "vue-router";
// import goTo from 'vuetify/lib/services/goto'

import Home from "./components/Home";

import AboutUs from "./components/AboutUs";
import OurWorks from "./components/OurWorks";

import ContactUs from "./components/ContactUs";
import Partnerships from "./components/Partnerships";

import Introduction from "./views/Introduction";
import Timeline from "./views/Timeline";
import Members from "./views/Members";

import Pharma from "./views/Pharma";
import Research from "./views/Research";
import Investments from "./views/Investments";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "aboutUs",
      path: "/aboutUs",
      component: AboutUs
    },
    {
      name: "ourWorks",
      path: "/ourWorks",
      component: OurWorks
    },
    {
      name: "Introduction",
      path: "/aboutUs/intro",
      component: Introduction
    },
    {
      name: "Introduction",
      path: "/aboutUs/timeline",
      component: Timeline
    },
    {
      name: "Introduction",
      path: "/aboutUs/members",
      component: Members
    },
    {
      name: "Pharma",
      path: "/ourWorks/pharma",
      component: Pharma
    },
    {
      name: "Research",
      path: "/ourWorks/research",
      component: Research
    },
    {
      name: "Investments",
      path: "/ourWorks/investments",
      component: Investments
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