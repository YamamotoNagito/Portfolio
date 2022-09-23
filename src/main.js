import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import StarRating from 'vue-star-rating';

Vue.config.productionTip = false
Vue.component('star-rating', StarRating);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
