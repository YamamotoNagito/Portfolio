const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath:'./',
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: '@import "./src/styles/common/common.scss";'
  //     }
  //   }
  // }
})
