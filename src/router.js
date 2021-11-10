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
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
      meta: {
        breadCrumb: [
          {
            text: 'Home'
          }
        ]
      }
    },
    {
      name: "About Us",
      path: "/aboutUs",
      component: AboutUs,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'About Us',
          }
        ]
      }
    },
    {
      name: "ourWorks",
      path: "/ourWorks",
      component: OurWorks,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'Our Works',
          }
        ]
      }
    },
    {
      name: "Introduction",
      path: "/aboutUs/intro",
      component: Introduction,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'About Us',
            to: {
              name: "About Us"
            }
          },
          {
            text: 'Introduction',
          },
        ]
      }
    },
    {
      name: "Timeline",
      path: "/aboutUs/timeline",
      component: Timeline,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'About Us',
            to: {
              name: "About Us"
            }
          },
          {
            text: 'Timeline',
          },
        ]
      }
    },
    {
      name: "Members",
      path: "/aboutUs/members",
      component: Members,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'About Us',
            to: {
              name: "About Us"
            }
          },
          {
            text: 'Members',
          },
        ]
      }
    },
    {
      name: "Pharma",
      path: "/ourWorks/pharma",
      component: Pharma,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'Our Works',
            to: {
              name: "Our Works"
            }
          },
          {
            text: 'Pharma',
          },
        ]
      }
    },
    {
      name: "Research",
      path: "/ourWorks/research",
      component: Research,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'Our Works',
            to: {
              name: "Our Works"
            }
          },
          {
            text: 'Research',
          },
        ]
      }
    },
    {
      name: "Investments",
      path: "/ourWorks/investments",
      component: Investments,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'Our Works',
            to: {
              name: "Our Works"
            }
          },
          {
            text: 'Investments',
          },
        ]
      }
    },
    {
      name: "Partnerships",
      path: "/partnerships",
      component: Partnerships,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'Partnerships',
          },
        ]
      }
    },
    {
      name: "Contact Us",
      path: "/ContactUs",
      component: ContactUs,
      meta: {
        breadCrumb: [
          {
            text: 'Home',
            to: {
              name: "Home"
            }
          },
          {
            text: 'Contact Us',
          },
        ]
      }
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   // ...
// })

export default router;