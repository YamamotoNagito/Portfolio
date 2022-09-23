<template>
  <v-app>
    <AppHeader/>
    
    <v-content>
      <MyProfile/>
    </v-content>
    
    <AppFooter/>
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue' 
import MyProfile from './components/MyProfile.vue' 
 
export default {
  components: {
    AppHeader,
    AppFooter,
    MyProfile
  }
}
</script>