<template>
  <v-app>
    <AppHeader/>
    <AppFooter/>
  </v-app>
</template>
 
<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue' 
 
export default {
  components: {
    AppHeader,
    AppFooter // 今回追加
  }
}
</script>