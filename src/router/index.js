import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Mode1 from '@/pages/Mode1/Mode1.vue'
import Match from '@/pages/Match/Match.vue'
import Info from '@/pages/Info/Info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mode1',
      name: 'Mode1',
      component: Mode1
    },
    {
      path: '/match',
      name: 'match',
      component: Match
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }

  ]
})
