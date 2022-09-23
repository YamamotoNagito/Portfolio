import Vue from 'vue'
import Router from 'vue-router'
import MyProfile from './src/components/MyProfile.vue'
import MySkill from './src/components/MySkill.vue'
import MyWork from './src/components/MyWork.vue'
 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/MySkill',
      name: 'MySkill',
      component: MySkill
    },
    {
      path: '/MyWork',
      name: 'MyWork',
      component: MyWork
    }
  ]
})