import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import './utils/console.info';

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#root');
