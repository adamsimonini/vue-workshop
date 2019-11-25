import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WhyVue from './views/WhyVue.vue'
import Components from './views/Components.vue'
import Props from './views/Props.vue'
import DataBinding from './views/DataBinding.vue'
import AssignmentOne from './views/AssignmentOne.vue'
import AssignmentTwo from './views/AssignmentTwo.vue'
import Directives from './views/VueDirectives.vue'
import AssignmentThree from './views/AssignmentThree.vue'
import AssignmentFour from './views/AssignmentFour.vue'
import Emitting from './views/Emitting.vue'
import AssignmentFive from './views/AssignmentFive.vue'
import Routing from './views/Routing.vue'
import Ending from './views/Ending.vue'

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
        path: '/data-binding',
        name: 'DataBidning',
        component: DataBinding
    },
    {
      path: '/assignment-two',
      name: 'AssignmentTwo',
      component: AssignmentTwo
    },
    {
      path: '/directives',
      name: 'Directives',
      component: Directives
    },
    {
      path: '/assignment-three',
      name: 'AssignmentThree',
      component: AssignmentThree
    },
    {
      path: '/props',
      name: 'Props',
      component: Props
    },
    {
      path: '/assignment-four',
      name: 'AssignmentFour',
      component: AssignmentFour
    },
    {
      path: '/emitting',
      name: 'Emitting',
      component: Emitting
    },
    {
      path: '/assignment-five',
      name: 'AssignmentFive',
      component: AssignmentFive
    },
    {
      path: '/routing',
      name: 'Routing',
      component: Routing
    },
    {
      path: '/the-end',
      name: 'Ending',
      component: Ending
    },
  ]
})
