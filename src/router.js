import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Menu1 from "./components/AboutUs";
import Menu2 from "./components/ContactUs";
import Menu3 from "./components/OurWorks";
import Menu4 from "./components/Partnerships";

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
      name: "menu1Page",
      path: "/menu1",
      component: Menu1
    },
    {
      name: "menu2Page",
      path: "/menu2",
      component: Menu2
    },
    {
      name: "menu3Page",
      path: "/menu3",
      component: Menu3
    },
    {
      name: "menu4Page",
      path: "/menu4",
      component: Menu4
    }
  ],
});

export default router;