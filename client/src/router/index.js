import Vue from 'vue'
import Router from 'vue-router'
import BoardTask from '@/components/BoardTask'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BoardTask',
      component: BoardTask
    }
  ]
})
