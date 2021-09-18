import Vue from 'vue'
import App from './App.vue'
// Підключаємо BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// Підключаємо CSS Стилі
import './assets/styles/style_obnul.css'
import './assets/styles/style.css'
// Підключаємо VueRouter 
import VueRouter from 'vue-router'
import router from './js/router'
Vue.use(VueRouter)

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper)

new Vue({
	render: h => h(App),
	el: '#app',
	router,
}).$mount('#app')
