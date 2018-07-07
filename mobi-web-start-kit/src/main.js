import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Home from './components/HelloFromVux'
import  PersonInfo from  './components/PersonInfo'
import  PersonInfoz from  './components/PersonInfoz'
import  Home from './components/Home'
import Branch from './components/Branch'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import { XHeader,Tabbar, TabbarItem ,Cell,Grid, GridItem,Card,Tab, TabItem} from 'vux'
Vue.use(MintUI)
Vue.component('x-header', XHeader)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('cell', Cell)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('card', Card)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)


Vue.component('PersonInfoz',PersonInfoz)
Vue.component('Home',Home)
Vue.component('Branch',Branch)

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: PersonInfo },
  { path: '/bar', component: PersonInfoz },
  {path: '/home', component: Home},
  {path:'/branch',component:Branch}
]


// const routes = [{
//   path: '/',
//   component: Home
// }]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')



