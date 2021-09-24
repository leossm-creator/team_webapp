import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
