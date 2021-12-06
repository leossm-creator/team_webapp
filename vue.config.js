module.exports = {
  // css: { 
  //   loaderOptions: { 
  //     scss: { 
  //       prependData: ` @import "@/assets/css/variables.scss"; `, 
  //     }, 
  //   }, 
  // },
  chainWebpack: config => {
    config.plugins.delete("prefetch")
  },
  pluginOptions: {
    i18n: {
      locale: "kr",
      fallbackLocale: "kr",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify',
  ],
}
