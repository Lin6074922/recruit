import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Home from './components/Home'
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
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
  ]
})
