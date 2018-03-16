const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = merge(baseConfig, {
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new DashboardPlugin(),
  ],
});
