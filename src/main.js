import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import store from './store'
import Home from './components/Home'
import TimePlan from './components/TimePlan.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {

  path : '/',
  component : Home
},
  {
  path : '/home',
  component : Home

},
  {
    path : '/time-plan',
    component : TimePlan,
    children : [{
      path : 'log-time',
      component : resolve => require(['./components/LogTime.vue'],resolve),
    }]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

/* eslint-disable no-new */
// 实例化我们的Vue
var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});

