import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/reset.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/swiper-bundle.css'
import './assets/iconfont/iconfont.css'
import Card from './components/card'
Vue.component('ListCard',Card) 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
