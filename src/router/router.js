import Vue from "vue";
import VueRouter from "vue-router";
// import goTo from 'vuetify/lib/services/goto'

import Home from "../views_main/Home";

import AboutUs from "../views_main/AboutUs";
import OurWorks from "../views_main/OurWorks";

import ContactUs from "../views_main/ContactUs";
import Partnerships from "../views_main/Partnerships";

import Introduction from "../views_sub/Introduction";
import Timeline from "../views_sub/Timeline";
import Members from "../views_sub/Members";

import Pharma from "../views_sub/Pharma";
import Research from "../views_sub/Research";
import Investments from "../views_sub/Investments";


Vue.use(VueRouter);

import { SUPPORTED_LOCALES } from "../constants/locales";
import axios from "axios";
import i18n from "../plugins/i18n"
import store from "../store"

// Creates regex (en|fr)
function getLocaleRegex() {
  let reg = ''
  SUPPORTED_LOCALES.forEach((locale, index) => {
    reg = `${reg}${locale.code}${index !== SUPPORTED_LOCALES.length - 1 ? '|' : ''}`
  })
  return `(${reg})`
}

// Returns locale configuration
function getLocale(locale = 'en') {
  return SUPPORTED_LOCALES.find(loc => loc.code === locale);
}

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
    }
  },
  {
    name: "About Us",
    path: "/aboutUs",
    component: AboutUs,
    meta: {
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
      sib: [
        {
          text: 'Introduction',
          to: {
            name: 'Intoduction',
          }
        },
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
    name: "Pharma",
    path: "/ourWorks/pharma",
    component: Pharma,
    meta: {
      parent: "Our Works",
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
    name: "Investments",
    path: "/ourWorks/investments",
    component: Investments,
    meta: {
      parent: "Our Works",
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
    name: "Partnerships",
    path: "/partnerships",
    component: Partnerships,
    meta: {
      parent: "Partnerships",
      sib: null
    }
  },
  {
    name: "Contact Us",
    path: "/ContactUs",
    component: ContactUs,
    meta: {
      parent: "Contact Us",
      sib: null
    }
  }
]

// const router = new VueRouter({
//   mode: "history",
//   scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition;
//     }
//     if (to.hash) {
//       return { el: to.hash, behavior: "smooth" };
//     } else {
//       // console.log("moving to top of the page");
//       document.getElementById("content").scrollTo(0, 0);
//     }
//   },
//   routes: [
//     {
//       name: "Home",
//       path: "/",
//       component: Home,
//       meta: {
//         breadCrumb: [
//           {
//             text: 'Home'
//           }
//         ]
//       }
//     },
//     {
//       name: "About Us",
//       path: "/aboutUs",
//       component: AboutUs,
//       meta: {
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'About Us',
//           }
//         ],
//         sib: [
//           {
//             text: 'Our Works',
//             to: {
//               name: 'Our Works',
//             }
//           },
//           {
//             text: 'Contact Us',
//             to: {
//               name: 'Contact Us',
//             }
//           },
//           {
//             text: 'Partnerships',
//             to: {
//               name: 'Partnerships',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Our Works",
//       path: "/ourWorks",
//       component: OurWorks,
//       meta: {
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'Our Works',
//           }
//         ],
//         sib: [
//           {
//             text: 'About Us',
//             to: {
//               name: 'About Us',
//             }
//           },
//           {
//             text: 'Contact Us',
//             to: {
//               name: 'Contact Us',
//             }
//           },
//           {
//             text: 'Partnerships',
//             to: {
//               name: 'Partnerships',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Introduction",
//       path: "/aboutUs/intro",
//       component: Introduction,
//       meta: {
//         parent: "About Us",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'About Us',
//             to: {
//               name: "About Us"
//             }
//           },
//           {
//             text: 'Introduction',
//           },
//         ],
//         sib: [
//           {
//             text: 'Timeline',
//             to: {
//               name: 'Timeline',
//             }
//           },
//           {
//             text: 'Members',
//             to: {
//               name: 'Members',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Timeline",
//       path: "/aboutUs/timeline",
//       component: Timeline,
//       meta: {
//         parent: "About Us",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'About Us',
//             to: {
//               name: "About Us"
//             }
//           },
//           {
//             text: 'Timeline',
//           },
//         ],
//         sib: [
//           {
//             text: 'Introduction',
//             to: {
//               name: 'Introduction',
//             }
//           },
//           {
//             text: 'Members',
//             to: {
//               name: 'Members',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Members",
//       path: "/aboutUs/members",
//       component: Members,
//       meta: {
//         parent: "About Us",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'About Us',
//             to: {
//               name: "About Us"
//             }
//           },
//           {
//             text: 'Members',
//           },
//         ],
//         sib: [
//           {
//             text: 'Introduction',
//             to: {
//               name: 'Introduction',
//             }
//           },
//           {
//             text: 'Timeline',
//             to: {
//               name: 'Timeline',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Pharma",
//       path: "/ourWorks/pharma",
//       component: Pharma,
//       meta: {
//         parent: "Our Works",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'Our Works',
//             to: {
//               name: "Our Works"
//             }
//           },
//           {
//             text: 'Pharma',
//           },
//         ],
//         sib: [
//           {
//             text: 'Research',
//             to: {
//               name: 'Research',
//             }
//           },
//           {
//             text: 'Investments',
//             to: {
//               name: 'Investments',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Research",
//       path: "/ourWorks/research",
//       component: Research,
//       meta: {
//         parent: "Our Works",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'Our Works',
//             to: {
//               name: "Our Works"
//             }
//           },
//           {
//             text: 'Research',
//           },
//         ],
//         sib: [
//           {
//             text: 'Pharma',
//             to: {
//               name: 'Pharma',
//             }
//           },
//           {
//             text: 'Investments',
//             to: {
//               name: 'Investments',
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Investments",
//       path: "/ourWorks/investments",
//       component: Investments,
//       meta: {
//         parent: "Our Works",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'Our Works',
//             to: {
//               name: "Our Works"
//             }
//           },
//           {
//             text: 'Investments',
//           },
//         ],
//         sib: [
//           {
//             text: 'Pharma',
//             to: {
//               name: 'Pharma',
//             }
//           },
//           {
//             text: 'Research',
//             to: {
//               name: 'Research'
//             }
//           },
//         ]
//       }
//     },
//     {
//       name: "Partnerships",
//       path: "/partnerships",
//       component: Partnerships,
//       meta: {
//         parent: "Partnerships",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'Partnerships',
//           },
//         ],
//         sib: 
//         null
//         // [
//         //   {
//         //     text: 'About Us',
//         //     to: {
//         //       name: 'About Us',
//         //     }
//         //   },
//         //   {
//         //     text: 'Our Works',
//         //     to: {
//         //       name: 'Our Works',
//         //     }
//         //   },
//         //   {
//         //     text: 'Contact Us',
//         //     to: {
//         //       name: 'Contact Us',
//         //     }
//         //   },
//         // ]
//       }
//     },
//     {
//       name: "Contact Us",
//       path: "/ContactUs",
//       component: ContactUs,
//       meta: {
//         parent: "Contact Us",
//         breadCrumb: [
//           {
//             text: 'Home',
//             to: {
//               name: "Home"
//             }
//           },
//           {
//             text: 'Contact Us',
//           },
//         ],
//         sib: 
//         null
//         // [
//         //   {
//         //     text: 'About Us',
//         //     to: {
//         //       name: 'About Us',
//         //     }
//         //   },
//         //   {
//         //     text: 'Our Works',
//         //     to: {
//         //       name: 'Our Works',
//         //     }
//         //   },
//         //   {
//         //     text: 'Partnerships',
//         //     to: {
//         //       name: 'Partnerships',
//         //     }
//         //   },
//         // ]
//       }
//     }
//   ],
// });

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
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
      path: `/:locale${getLocaleRegex()}?`,
      component: {
        template: '<router-view></router-view>'
      },
      beforeEnter(to, from, next) {
        const locale = getLocale(to.params.locale);
        store.dispatch('setLocale', locale);
        axios.get(locale.translations).then(res => {
          i18n.setLocaleMessage(locale.code, res.data || {});
        }).catch(() => {
          // TODO handle error
        }).finally(() => {
          i18n.locale = locale.code;
          next();
        });
      },
      children: routes
    }]
});


export default router;