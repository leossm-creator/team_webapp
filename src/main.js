import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import SuiVue from 'semantic-ui-vue';
import router from './router/router';
import i18n from '@/plugins/i18n';
import VueScrollactive from 'vue-scrollactive';
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import AOS from 'aos';
// import anime from 'animejs/lib/anime.es.js'
// import * as VueAos from 'vue-aos'
// import VueBreadcrumbs from 'vue-2-breadcrumbs';
import VueClipboard from 'vue-clipboard2'

import "./assets/css/global.scss";
import 'vuetify/dist/vuetify.min.css';
import 'swiper/css/swiper.css';
import 'animate.css';
// import 'aos/dist/aos.css';

// Vue.prototype.$anime = anime;


Vue.use(vuetify);
Vue.use(SuiVue);
Vue.use(VueScrollactive);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.use(VueClipboard)
// Vue.use(VueAos)

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
