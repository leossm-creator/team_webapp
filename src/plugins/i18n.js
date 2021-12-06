import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

import getBrowserLocale from "@/util/i18n/get-browser-locale"
import { supportedLocalesInclude } from "@/util/i18n/supported-locales"
import EventBus from "@/EventBus"

// const messages = {
//   'en': {
//       welcomeMsg: 'Welcome to Your Vue.js App'
//   },
//   'kr': {
//       welcomeMsg: 'Vue.js App에 오신것을 환영합니다'
//   }
// };

function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true })

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "en"
  }
}

const startingLocale = getStartingLocale()

function loadLocaleMessages() {
  const locales = require.context(
    "../locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const i18n =  new VueI18n({
  locale: startingLocale,
  // locale: process.env.VUE_APP_I18N_LOCALE || "kr",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "kr",
  messages: loadLocaleMessages()
});



const loadedLanguages = []

export function loadLocaleMessagesAsync(locale) {
  EventBus.$emit("i18n-load-start")

  if (loadedLanguages.length > 0 && i18n.locale === locale) {
    EventBus.$emit("i18n-load-complete")
    return Promise.resolve(locale)
  }

  // If the language was already loaded
  if (loadedLanguages.includes(locale)) {
    i18n.locale = locale
    EventBus.$emit("i18n-load-complete")
    return Promise.resolve(locale)
  }

  // If the language hasn't been loaded yet
  return import(
    /* webpackChunkName: "locale-[request]" */ `@/locales/${locale}.json`
  ).then(messages => {
    i18n.setLocaleMessage(locale, messages.default)

    loadedLanguages.push(locale)

    i18n.locale = locale

    EventBus.$emit("i18n-load-complete")
    return Promise.resolve(locale)
  })
}

loadLocaleMessagesAsync(startingLocale)

export default i18n;