// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import moment from 'moment'

import VuePreview from 'vue-preview'

Vue.config.productionTip = false
axios.defaults.baseURL="http://www.liulongbin.top:3005"
Vue.use(ElementUI);
Vue.use(MintUI)
Vue.use(VueAxios, axios)
Vue.use(VuePreview)

Vue.filter('time',function(data, pattern="YYYY-MM-DD HH:mm:ss"){
  return moment(data).format(pattern)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c=>c(App),
  router,
})
