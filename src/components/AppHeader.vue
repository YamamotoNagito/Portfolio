<template>
  <header>
      <v-app-bar
        app
        dark
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>ポートフォリオ</v-toolbar-title>
        <v-tabs>
          <v-tab
            v-for="(menuItem, index) in menuItems"
            :key="index"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem, index) in menuItems"
              :key="index"
            >
              <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    <!-- <body> -->
    <!-- <v-content>
      <my-skill/>
    </v-content> -->
    <!-- </body> -->
  </header>
</template>

<script>
// import MySkill from './MySkill'
import constants from '../styles/common/constants.js'
// import "../styles/common/common.scss"

export default {
  name: 'App',

  components: {
    // MySkill,
  },

  data(){
    return {
      drawer: false,
      menuItems: constants.menuItems
    }
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.v-slide-group__wrapper{
  margin: 0 0 0 auto;
}
.v-app-bar__nav-icon {
  //@include display_pc {
  //  display: none !important;
  //}

  /* PCでは,ナビゲーションバーを表示せず、スマホのみで表示すること */
	/* 960px以上に適用されるCSS（PC用） */
  @media screen and (min-width: 960px) {
    display: none !important;
  }
}

.v-tabs {
  display: none;
  /* PCでは、グローバルナビを表示するようにする */
	/* 480px以下に適用されるCSS（スマホ用） */
  @media screen and (min-width: 960px) {
    display: block !important;
  }
}
</style>