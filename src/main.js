import Vue from 'vue'
import App from './App.vue'
// Підключаємо CSS Стилі
import './assets/styles/style_obnul.css'
import './assets/styles/style.css'
// Підключаємо BootstrapVue
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
// Підключаємо VueRouter 
import VueRouter from 'vue-router'
import router from './js/router'
Vue.use(VueRouter)


new Vue({
	render: h => h(App),
	el: '#app',
	router,
}).$mount('#app')
