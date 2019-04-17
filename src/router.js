import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WhyVue from './views/WhyVue.vue'
import Components from './views/Components.vue'
import Props from './views/Props.vue'
import BindingData from './views/BindingData.vue'
import AssignmentOne from './views/AssignmentOne.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/what-is-vue',
        name: 'WhyVue',
        component: WhyVue
    },
    {
        path: '/components',
        name: 'Components',
        component: Components
    },
    {
        path: '/assignment-one',
        name: 'AssignmentOne',
        component: AssignmentOne
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
        path: '/binding-data',
        name: 'BindingData',
        component: BindingData
    },
  ]
})
