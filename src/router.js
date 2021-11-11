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
      return { left: 0, top: 0 }
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
        ],
        sib: [
          {
            text: 'Our Works',
            to: {
              name: 'Our Works',
            }
          },
          {
            text: 'Contact Us',
            to: {
              name: 'Contact Us',
            }
          },
          {
            text: 'Partnerships',
            to: {
              name: 'Partnerships',
            }
          },
        ]
      }
    },
    {
      name: "Our Works",
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
        ],
        sib: [
          {
            text: 'About Us',
            to: {
              name: 'About Us',
            }
          },
          {
            text: 'Contact Us',
            to: {
              name: 'Contact Us',
            }
          },
          {
            text: 'Partnerships',
            to: {
              name: 'Partnerships',
            }
          },
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
        ],
        sib: [
          {
            text: 'Timeline',
            to: {
              name: 'Timeline',
            }
          },
          {
            text: 'Members',
            to: {
              name: 'Members',
            }
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
        ],
        sib: [
          {
            text: 'Introduction',
            to: {
              name: 'Introduction',
            }
          },
          {
            text: 'Members',
            to: {
              name: 'Members',
            }
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
        ],
        sib: [
          {
            text: 'Introduction',
            to: {
              name: 'Introduction',
            }
          },
          {
            text: 'Timeline',
            to: {
              name: 'Timeline',
            }
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
        ],
        sib: [
          {
            text: 'Research',
            to: {
              name: 'Research',
            }
          },
          {
            text: 'Investments',
            to: {
              name: 'Investments',
            }
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
        ],
        sib: [
          {
            text: 'Pharma',
            to: {
              name: 'Pharma',
            }
          },
          {
            text: 'Investments',
            to: {
              name: 'Investments',
            }
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
        ],
        sib: [
          {
            text: 'Pharma',
            to: {
              name: 'Pharma',
            }
          },
          {
            text: 'Research',
            to: {
              name: 'Research'
            }
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
        ],
        sib: [
          {
            text: 'About Us',
            to: {
              name: 'About Us',
            }
          },
          {
            text: 'Our Works',
            to: {
              name: 'Our Works',
            }
          },
          {
            text: 'Contact Us',
            to: {
              name: 'Contact Us',
            }
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
        ],
        sib: [
          {
            text: 'About Us',
            to: {
              name: 'About Us',
            }
          },
          {
            text: 'Our Works',
            to: {
              name: 'Our Works',
            }
          },
          {
            text: 'Partnerships',
            to: {
              name: 'Partnerships',
            }
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