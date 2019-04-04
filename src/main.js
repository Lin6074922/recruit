import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../public/css/iconfont.css'
// import '../public/css/companyList.css'
// import com from '../public/js/companyList.js'
// import $ from 'jquery'

// import '../public/css/jobList.css'

// Vue.prototype.$ = $;
// Vue.use($)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
