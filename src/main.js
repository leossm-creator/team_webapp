import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import SuiVue from 'semantic-ui-vue';
import router from './router';
import i18n from '@/plugins/i18n';
import VueScrollactive from 'vue-scrollactive';
import VueAwesomeSwiper from 'vue-awesome-swiper'

import "./assets/css/global.scss";
import 'vuetify/dist/vuetify.min.css';
import 'swiper/css/swiper.css';
import 'animate.css';

Vue.use(vuetify);
Vue.use(SuiVue);
Vue.use(VueScrollactive);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

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
