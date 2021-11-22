module.exports = {
  css: { 
    loaderOptions: { 
      scss: { 
        prependData: ` @import "@/assets/css/variables.scss"; `, 
      }, 
    }, 
  },
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify',
  ],
}
