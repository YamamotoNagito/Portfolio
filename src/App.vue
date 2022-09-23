<template>
  <v-app>
    <AppHeader/>

    <v-content>
      <router-view/>
      <!-- <MyProfile/>
      <MySkill/>
      <MyWork/> -->
    </v-content>
    
    <AppFooter/>
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue' 
// import MyProfile from './components/MyProfile.vue' 
// import MySkill from './components/MySkill.vue' 
// import MyWork from './components/MyWork.vue' 
 
export default {
  components: {
    AppHeader,
    AppFooter,
    // MyProfile,
    // MySkill,
    // MyWork
  }
}
</script>