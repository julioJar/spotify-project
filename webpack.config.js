var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var sourcePath = path.resolve(__dirname, 'src');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: {
    main: './src/index.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              context: '/',
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      },
    ]
  },
  resolve: {
    modules: [
        path.resolve(__dirname, 'node_modules'),
        sourcePath
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    port: 3000,
    compress: false,
    inline: true,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    }
  }
}