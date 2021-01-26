const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      '/api/*': {
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
        target: 'http://localhost:5000/',
        pathRewrite: { '^/api': '/v1' },
        secure: false,
        loglevel: 'verbose',
      },
    },
  },
});
