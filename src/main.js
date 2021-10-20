import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import SuiVue from 'semantic-ui-vue';
import router from './router';

import "./assets/css/global.scss"
import 'vuetify/dist/vuetify.min.css'
import i18n from '@/plugins/i18n';

Vue.use(vuetify);
Vue.use(SuiVue);

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
