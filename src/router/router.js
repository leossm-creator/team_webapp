import Vue from "vue";
import VueRouter from "vue-router";
// import goTo from 'vuetify/lib/services/goto'

import Home from "../views_main/Home";

// import AboutUs from "../views_main/AboutUs";
// import OurWorks from "../views_main/OurWorks";

import ContactUs from "../views_main/ContactUs";
import Partnerships from "../views_main/Partnerships";

import Introduction from "../views_sub/Introduction";
import Timeline from "../views_sub/Timeline";
import Members from "../views_sub/Members";

import Pharma from "../views_sub/Pharma";
import Research from "../views_sub/Research";
import Investments from "../views_sub/Investments";

import Root from "./Root"
import i18n, { loadLocaleMessagesAsync } from "@/plugins/i18n"
import {
  setDocumentLang,
  setDocumentTitle
} from "@/util/i18n/document"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: i18n.locale
  },
  {
    path: "/:locale",
    component: Root,
    children: [
      {
        name: "home",
        path: "",
        component: Home,
        meta: {
        }
      },
      {
        name: "introduction",
        path: "aboutUs/intro",
        component: Introduction,
        meta: {
          parent: "About Us",
          sib: [
            {
              text: 'introduction',
              to: {
                name: 'intoduction',
              }
            },
            {
              text: 'timeline',
              to: {
                name: 'timeline',
              }
            },
            // {
            //   text: 'members',
            //   to: {
            //     name: 'members',
            //   }
            // },
          ]
        }
      },
      {
        name: "timeline",
        path: "aboutUs/timeline",
        component: Timeline,
        meta: {
          parent: "About Us",
          sib: [
            {
              text: 'introduction',
              to: {
                name: 'introduction',
              }
            },
            {
              text: 'timeline',
              to: {
                name: 'timeline',
              }
            },
            // {
            //   text: 'members',
            //   to: {
            //     name: 'members',
            //   }
            // },
          ]
        }
      },
      {
        name: "members",
        path: "aboutUs/members",
        component: Members,
        meta: {
          parent: "About Us",
          sib: [
            {
              text: 'introduction',
              to: {
                name: 'introduction',
              }
            },
            {
              text: 'timeline',
              to: {
                name: 'timeline',
              }
            },
            {
              text: 'members',
              to: {
                name: 'members',
              }
            },
          ]
        }
      },
      {
        name: "pharma",
        path: "ourWorks/pharma",
        component: Pharma,
        meta: {
          parent: "Our Works",
          sib: [
            {
              text: 'pharma',
              to: {
                name: 'pharma',
              }
            },
            {
              text: 'research',
              to: {
                name: 'research',
              }
            },
            {
              text: 'investments',
              to: {
                name: 'investments',
              }
            },
          ]
        }
      },
      {
        name: "research",
        path: "ourWorks/research",
        component: Research,
        meta: {
          parent: "Our Works",
          sib: [
            {
              text: 'pharma',
              to: {
                name: 'pharma',
              }
            },
            {
              text: 'research',
              to: {
                name: 'research',
              }
            },
            {
              text: 'investments',
              to: {
                name: 'investments',
              }
            },
          ]
        }
      },
      {
        name: "investments",
        path: "ourWorks/investments",
        component: Investments,
        meta: {
          parent: "Our Works",
          sib: [
            {
              text: 'pharma',
              to: {
                name: 'pharma',
              }
            },
            {
              text: 'research',
              to: {
                name: 'research'
              }
            },
            {
              text: 'investments',
              to: {
                name: 'investments',
              }
            },
          ]
        }
      },
      {
        name: "partnerships",
        path: "partnerships",
        component: Partnerships,
        meta: {
          parent: "partnerships",
          sib: null
        }
      },
      {
        name: "contactUs",
        path: "contactUs",
        component: ContactUs,
        meta: {
          parent: "contact us",
          sib: null
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      // console.log("moving to top of the page");
      document.getElementById("content").scrollTo(0, 0);
      // return { selector: "#content", offset: { x: 0, y: 0 }}
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.locale === from.params.locale) {
    next()
    return
  }

  const { locale } = to.params

  loadLocaleMessagesAsync(locale).then(() => {
    setDocumentLang(locale)

    setDocumentTitle(i18n.t("app.title"))
  })

  next()
})

export default router;