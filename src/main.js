import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import StarRating from 'vue-star-rating'
import router from '../router'

Vue.config.productionTip = false
Vue.component('star-rating', StarRating);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
