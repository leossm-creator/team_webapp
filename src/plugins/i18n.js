import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// const messages = {
//   'en': {
//       welcomeMsg: 'Welcome to Your Vue.js App'
//   },
//   'kr': {
//       welcomeMsg: 'Vue.js App에 오신것을 환영합니다'
//   }
// };

function loadLocaleMessages () {
  const locales = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const i18n = new VueI18n({
  silentTranslationWarn: true,
  locale: 'kr', // set locale
  fallbackLocale: 'en', // set fallback locale
  // messages: {
  //   dev: require('../locales/dev.json')
  // }, // set locale messages
  messages: loadLocaleMessages,
});

export default i18n