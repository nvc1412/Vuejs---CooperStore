const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/styles/_variables.scss";
          @use "@/styles/_mixins.scss";
        `
      }
    }
  }
});
