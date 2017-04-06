var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var sourcePath = path.resolve(__dirname, 'src');
var autoprefixer = require('autoprefixer');

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => {
      return [autoprefixer];
    }
  }
};

module.exports = {
  devtool: 'source-map',
  context: __dirname,
  entry: {
    main: './src/index.js'
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
          },
          postCssLoader
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
      minChunks: (module) => {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
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
