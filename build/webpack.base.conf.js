const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, '..', 'src/main'),
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // https://vue-loader.vuejs.org/en/configurations/pre-processors.html
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]',
      },
      {
        test: /\.(png|gif|jpg|svg|jpeg)$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@components': path.join(__dirname, '..', 'src/components/'),
      '@plugins': path.join(__dirname, '..', 'src/plugins'),
    },
    extensions: ['.js', '.vue'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
