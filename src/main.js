import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import SuiVue from 'semantic-ui-vue';
import router from './router';

import "./assets/css/global.scss";
import 'vuetify/dist/vuetify.min.css';
import i18n from '@/plugins/i18n';
import VueScrollactive from 'vue-scrollactive';

Vue.use(vuetify);
Vue.use(SuiVue);
Vue.use(VueScrollactive);

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  i18n,

  components: { 
    VueScrollactive
  },

  render: h => h(App)
}).$mount('#app')
