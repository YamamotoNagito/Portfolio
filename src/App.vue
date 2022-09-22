<template>
<div>
  <v-app>
    <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>私のポートフォリオ</v-toolbar-title>
      </v-app-bar>
    </header>
    <!-- <body> -->
    <v-content>
      <my-skill/>
    </v-content>
    <!-- </body> -->
  </v-app>
</div>
</template>

<script>
import MySkill from './components/MySkill';

export default {
  name: 'App',

  components: {
    MySkill,
  },

  data(){
    return {
      drawer: false
    }
  },
};
</script>
