import Vue from 'vue'
import Router from 'vue-router'
import view from '@/views/vue01'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'vuex',
    component: view
  }]
})
