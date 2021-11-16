import Vue from "vue";
import VueRouter from "vue-router";
// import goTo from 'vuetify/lib/services/goto'

import Home from "./views_main/Home";

import AboutUs from "./views_main/AboutUs";
import OurWorks from "./views_main/OurWorks";

import ContactUs from "./views_main/ContactUs";
import Partnerships from "./views_main/Partnerships";

import Introduction from "./views_sub/Introduction";
import Timeline from "./views_sub/Timeline";
import Members from "./views_sub/Members";

import Pharma from "./views_sub/Pharma";
import Research from "./views_sub/Research";
import Investments from "./views_sub/Investments";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      // console.log("moving to top of the page");
      document.getElementById("content").scrollTo(0, 0);
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
        parent: "About Us",
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
        parent: "About Us",
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
        parent: "About Us",
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
        parent: "Our Works",
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
        parent: "Our Works",
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
        parent: "Our Works",
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
        parent: "Partnerships",
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
        sib: 
        null
        // [
        //   {
        //     text: 'About Us',
        //     to: {
        //       name: 'About Us',
        //     }
        //   },
        //   {
        //     text: 'Our Works',
        //     to: {
        //       name: 'Our Works',
        //     }
        //   },
        //   {
        //     text: 'Contact Us',
        //     to: {
        //       name: 'Contact Us',
        //     }
        //   },
        // ]
      }
    },
    {
      name: "Contact Us",
      path: "/ContactUs",
      component: ContactUs,
      meta: {
        parent: "Contact Us",
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
        sib: 
        null
        // [
        //   {
        //     text: 'About Us',
        //     to: {
        //       name: 'About Us',
        //     }
        //   },
        //   {
        //     text: 'Our Works',
        //     to: {
        //       name: 'Our Works',
        //     }
        //   },
        //   {
        //     text: 'Partnerships',
        //     to: {
        //       name: 'Partnerships',
        //     }
        //   },
        // ]
      }
    }
  ],
});

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0)
//   // ...
// })

export default router;