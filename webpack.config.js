// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const FriendLyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

dotenvExpand.expand(dotenv.config());

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
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
        warnings: true,
      },
    },
    proxy: {
      '/api': {
        target: 'https://zhuanlan.zhihu.com/api/columns', // 目标接口域名
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '/', // 重写接口
        },
      },
    },
  },
  stats: 'errors-warnings',
  resolve: {
    extensions: ['.vue', '.js', '.json', 'scss', 'css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // @ts-ignore
    new ESLintWebpackPlugin({
      context: path.resolve('src'),
      exclude: 'node_modules',
      extensions: ['js', 'json', 'vue'],
    }),
    new MiniCssExtractPlugin(),
    new FriendLyErrorsWebpackPlugin({}),

    new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: 'entries',
    }),
    new webpack.DefinePlugin({
      // webpack自带该插件，无需单独安装
      'process.env': {
        VUE_APP_PACKAGE_NAME: JSON.stringify(process.env.VUE_APP_PACKAGE_NAME), // 将属性转化为全局变量，让代码中可以正常访问
        VUE_APP_PACKAGE_VERSION: JSON.stringify(process.env.VUE_APP_PACKAGE_VERSION), // 将属性转化为全局变量，让代码中可以正常访问
        VUE_APP_PACKAGE_DESCRIPTION: JSON.stringify(process.env.VUE_APP_PACKAGE_DESCRIPTION), // 将属性转化为全局变量，让代码中可以正常访问
      },
    }),
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
        oneOf: [
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
            use: [
              stylesHandler,
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('sass'),
                  sassOptions: {
                    indentedSyntax: true, // optional
                  },
                },
              },
              'postcss-loader',
            ],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024,
              },
            },
          },
        ],
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
      filename: '[name].[contenthash].js',
    };
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = 'development';
    config.devtool = 'eval-cheap-module-source-map';
  }
  return config;
};
