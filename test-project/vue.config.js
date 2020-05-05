// webpack.config.js -> module.rules
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/testing/'
    : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/main.scss";'
      }
    }
  }
};
