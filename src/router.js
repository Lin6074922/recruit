import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './views/Home'
import Details from './components/Details'
import com from './components/Company'
import job from './components/joblist'
import companyList from './components/companyList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',component:Home},
    {path:'/Home',name:'home',component:Home},
    {path:'/Detail',name:'details',component:Details},
    {path:'/com',name:'company',component:com},
    {path:'/company',name:'companyList',component:companyList},
    {path:'/job',name:'jobList',component:job},
  ]
})
