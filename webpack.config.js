// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const FriendLyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    client: {
      logging: 'error', // 只打印报错，其实只要这个配置就好了
      overlay: {
        // 有报错发生，直接覆盖浏览器视窗，显示错误
        errors: true,
        warnings: false,
      },
    },
  },
  stats: 'errors-warnings',
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      '@src': './src/*',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // @ts-ignore
    new ESLintWebpackPlugin({
      extensions: ['js'],
      context: path.resolve('src'),
      exclude: '/node_modules',
    }),
    new MiniCssExtractPlugin(),
    new FriendLyErrorsWebpackPlugin({}),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.devtool = 'cheap-module-source-map';
    config.output = {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].[ext]',
    };
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
    config.devtool = 'eval-cheap-module-source-map';
  }
  return config;
};
