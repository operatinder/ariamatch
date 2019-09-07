import Vue from 'vue'
import VueSwing from 'vue-swing'
import VueFeather from 'vue-feather';
import BootstrapVue from 'bootstrap-vue'
import AudioVisual from 'vue-audio-visual'

import App from './App.vue'
import store from './store'

import './filters'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(AudioVisual)

Vue.component(VueSwing.name, VueSwing)
Vue.component(VueFeather.name, VueFeather)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
