/*jshint esversion: 6 */
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
     {
      test: /\.(jpg|png|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[hash].[ext]'
      },
     },
     {
        test: /\.css$/,
        loader: 'style-loader'
     },
     {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
     }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
